"""Extraction des visuels du Plateau abri à partir des 3 maquettes du propriétaire.

Lancer depuis le dossier de l'interface :  python3 reference/extraction.py
Besoin de : Pillow, numpy, opencv-python-headless.
Les fichiers produits vont dans assets/extraits/ (voir ASSET_SPEC.md).
Les coordonnées sont celles des maquettes (1536 × 1024).
"""
import os
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter

REF = 'reference'
OUT = 'assets/extraits'
PHASES = {'jour': 'maquette-jour.png', 'nuit': 'maquette-nuit.png', 'nuit-rouge': 'maquette-nuit-rouge.png'}
os.makedirs(OUT, exist_ok=True)


def load(phase):
    return np.array(Image.open(os.path.join(REF, PHASES[phase])).convert('RGB'))


def upscale(img, w, h):
    """Agrandissement Lanczos + légère netteté (n'ajoute pas de détails)."""
    im = img.resize((w, h), Image.LANCZOS)
    return im.filter(ImageFilter.UnsharpMask(radius=1.6, percent=60, threshold=2))


def save(im, name):
    path = os.path.join(OUT, name)
    if name.endswith('.webp'):
        im.save(path, 'WEBP', quality=86, method=6)
    else:
        im.save(path, optimize=True)
    print(name, im.size)


# ---------- A. Fonds plein écran ----------
# Seul le paysage de droite est visible dans la maquette (x 1218→1536, y 340→745). Construction :
# - le paysage d'origine garde sa place, à droite ;
# - à gauche, la bande « ville + palissade » (x 1335→1490, sous l'horizon, donc sans lune ni nuage)
#   est répétée en miroir, avec un fondu au raccord ;
# - au-dessus de l'horizon à gauche, et tout en haut : ciel lisse (dégradé pris dans la maquette) ;
# - sous le paysage : sol uni en dégradé, de la couleur moyenne du bas du paysage.
# Le cadrage est identique pour les 3 ambiances.
SCN = (1234, 340, 1536, 745)
SANS_TOUR = (1335, 1490)
HORIZON = 425


def mirror_index(i, n):
    period = 2 * n
    i = i % period
    return i if i < n else period - 1 - i


def fond(phase):
    src = load(phase).astype(np.float32)
    x0, y0, x1, y1 = SCN
    H, W = 1024, 1536
    out = np.zeros((H, W, 3), np.float32)
    top = src[0:8, 1212:1260].reshape(-1, 3).mean(0)          # ciel tout en haut
    haut = src[y0:y0 + 14, x0:x1].reshape(-1, 3).mean(0)      # ciel en haut du paysage
    # ciel partout au-dessus de l'horizon
    for y in range(0, HORIZON + 30):
        t = min(1, y / y0) ** 1.3
        out[y] = top * (1 - t) + haut * t
    # bande ville + palissade à gauche
    filler = src[HORIZON:y1, SANS_TOUR[0]:SANS_TOUR[1]]
    fw = filler.shape[1]
    for x in range(0, W):                                     # aussi sous le paysage d'origine (pour le fondu)
        out[HORIZON:y1, x] = filler[:, mirror_index(x0 - 1 - x, fw)]
    for i in range(28):                                       # fondu ciel → ville
        t = i / 28
        out[HORIZON + i] = out[HORIZON + i] * t + haut * (1 - t)
    # paysage d'origine, avec fondu sur ses bords gauche et haut
    C = src[y0:y1, x0:x1]
    h, w = C.shape[:2]
    a = np.ones((h, w), np.float32)
    a *= np.clip(np.arange(w) / 80, 0, 1)[None, :] ** 1.5
    a *= np.clip(np.arange(h) / 90, 0, 1)[:, None] ** 1.5
    out[y0:y1, x0:x1] = C * a[..., None] + out[y0:y1, x0:x1] * (1 - a[..., None])
    # sol uni sous le paysage
    sol = src[y1 - 40:y1, x0:x1].reshape(-1, 3).mean(0)
    for y in range(y1 - 20, H):
        t = (y - y1 + 20) / (H - y1 + 20)
        c = sol * (1 - .35 * t)
        k = np.clip((y - y1 + 20) / 20, 0, 1)
        out[y] = out[y] * (1 - k) + c * k
    rng = np.random.default_rng(7)
    out += rng.normal(0, 1.8, out.shape)
    img = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))
    save(upscale(img, 3072, 2048), f'decor-{phase}.webp')


# ---------- C. Bandeaux du panneau JOUR (sans texte ni losanges) ----------
BANDEAU = (25, 15, 324, 177)          # intérieur du panneau (sans le liseré sombre)
TEXTE = (40, 22, 140, 122)            # « JOUR / NIGHT » et « 9 »
LOSANGES = (28, 140, 322, 172)        # rangée des losanges


def bandeau(phase):
    src = load(phase)
    x0, y0, x1, y1 = BANDEAU
    crop = src[y0:y1, x0:x1].copy()
    mask = np.zeros(crop.shape[:2], np.uint8)
    # texte : pixels sombres dans la zone du texte
    tx0, ty0, tx1, ty1 = [v - o for v, o in zip(TEXTE, (x0, y0, x0, y0))]
    zone = crop[ty0:ty1, tx0:tx1].astype(int)
    lum = zone.mean(2)
    bg = np.median(lum)
    m = (np.abs(lum - bg) > 45).astype(np.uint8) * 255
    mask[ty0:ty1, tx0:tx1] = cv2.dilate(m, np.ones((5, 5), np.uint8))
    # losanges : toute la rangée
    lx0, ly0, lx1, ly1 = [v - o for v, o in zip(LOSANGES, (x0, y0, x0, y0))]
    mask[ly0:ly1, lx0:lx1] = 255
    bgr = cv2.cvtColor(crop, cv2.COLOR_RGB2BGR)
    fixed = cv2.inpaint(bgr, mask, 7, cv2.INPAINT_TELEA)
    img = Image.fromarray(cv2.cvtColor(fixed, cv2.COLOR_BGR2RGB))
    save(upscale(img, 610, 336), f'bandeau-{phase}.webp')


# ---------- Silhouettes et icônes : détourage ----------
def alpha_sombre(rgb, fond_lum=None, seuil=40, plein=140):
    """Alpha à partir de la noirceur (encre sur papier ou sur gris)."""
    lum = rgb.astype(np.float32).mean(2)
    f = np.median(lum) if fond_lum is None else fond_lum
    a = np.clip((f - lum - seuil) / (plein - seuil), 0, 1)
    return (a * 255).astype(np.uint8)


def ink_png(rgb, alpha, color=(23, 21, 18)):
    h, w = alpha.shape
    out = np.zeros((h, w, 4), np.uint8)
    out[..., :3] = color
    out[..., 3] = alpha
    return Image.fromarray(out, 'RGBA')


def fit(im, w, h, marge=0.1):
    """Recadre sur le contenu puis centre dans w × h avec une marge."""
    box = im.getbbox() or (0, 0, im.width, im.height)
    im = im.crop(box)
    k = min(w * (1 - 2 * marge) / im.width, h * (1 - 2 * marge) / im.height)
    im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
    canvas = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    canvas.paste(im, ((w - im.width) // 2, (h - im.height) // 2), im)
    return canvas


def illus_abri():
    src = load('jour')
    rgb = src[82:158, 1322:1505]
    a = alpha_sombre(rgb)
    a[-6:, :] = 0                     # coupe le liseré de la jauge sous le dessin
    save(fit(ink_png(rgb, a), 340, 140, 0.03), 'illus-abri.png')


def illus_horde():
    src = load('jour').astype(np.int32)
    rgb = src[218:318, 1228:1322]
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    a = np.clip((r - np.maximum(g, b) - 40) / 90, 0, 1)
    out = np.zeros(rgb.shape[:2] + (4,), np.uint8)
    out[..., :3] = rgb.astype(np.uint8)
    out[..., 3] = (a * 255).astype(np.uint8)
    save(fit(Image.fromarray(out, 'RGBA'), 236, 200, 0.04), 'illus-horde.png')


LISTE = ['barricade', 'cloture', 'epave', 'projecteur', 'lance-flammes', 'tireur', 'tourelle']
LIGNES_Y = [516, 567, 617, 668, 718, 768, 818]   # centre de chaque ligne


GRISEES = {'projecteur', 'lance-flammes'}           # lignes grisées dans la maquette


def icones_liste():
    src = load('jour')
    for nom, cy in zip(LISTE, LIGNES_Y):
        rgb = src[cy - 21:cy + 21, 44:116].astype(np.float32)
        fond_c = np.median(rgb.reshape(-1, 3), axis=0)
        dist = np.sqrt(((rgb - fond_c) ** 2).sum(2))
        a = np.clip((dist - 28) / 70, 0, 1)
        a[:3, :] = 0; a[-3:, :] = 0; a[:, :2] = 0
        out = np.zeros(rgb.shape[:2] + (4,), np.uint8)
        if nom in GRISEES:
            out[..., :3] = (23, 21, 18)                # gris → encre, comme les autres
        else:
            out[..., :3] = rgb.astype(np.uint8)
        out[..., 3] = (a * 255).astype(np.uint8)
        save(fit(Image.fromarray(out, 'RGBA'), 112, 72, 0.06), f'liste-{nom}.png')


# ---------- Icônes « coupées » dérivées du pack (barre rouge en travers) ----------
def icone_coupee(source, name):
    im = Image.open(source).convert('RGBA')
    w, h = im.size
    d = ImageDraw.Draw(im)
    d.line([(w * .18, h * .18), (w * .82, h * .82)], fill=(23, 21, 18, 255), width=max(6, w // 7))
    d.line([(w * .18, h * .18), (w * .82, h * .82)], fill=(216, 56, 42, 255), width=max(4, w // 11))
    save(im, name)


if __name__ == '__main__':
    for p in PHASES:
        fond(p)
        bandeau(p)
    illus_abri()
    illus_horde()
    icones_liste()
    icone_coupee('assets/ui/icons/icon_speaker.png', 'son-coupe.png')
    icone_coupee('assets/ui/icons/icon_music.png', 'musique-coupee.png')
