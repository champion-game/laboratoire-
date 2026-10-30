"""Extrait les illustrations des cartes de la maquette (reference/maquette.jpg).

Usage (depuis la racine du dépôt) :  python interfaces/grimoire/reference/extraction.py
Produit assets/extraits/carte-<n>.webp (9 cartes) et carte-0-grand.webp (grande carte de droite),
agrandies ×2 (Lanczos + légère netteté). La maquette n'est jamais modifiée.
"""
from pathlib import Path
from PIL import Image, ImageFilter

ICI = Path(__file__).resolve().parent
SOURCE = ICI / "maquette.jpg"
SORTIE = ICI.parent / "assets" / "extraits"

# Zones (x, y, largeur, hauteur) en pixels de la maquette 1280 × 720.
ZONES = {
    "carte-0": (240, 76, 126, 188),
    "carte-1": (378, 76, 123, 188),
    "carte-2": (514, 76, 126, 188),
    "carte-3": (240, 274, 126, 177),
    "carte-4": (378, 274, 123, 177),
    "carte-5": (514, 274, 126, 177),
    "carte-6": (240, 461, 126, 167),
    "carte-7": (378, 461, 123, 167),
    "carte-8": (514, 461, 126, 167),
    "carte-0-grand": (724, 88, 264, 436),
}
ECHELLE = 2


def main():
    SORTIE.mkdir(parents=True, exist_ok=True)
    img = Image.open(SOURCE).convert("RGB")
    for nom, (x, y, w, h) in ZONES.items():
        morceau = img.crop((x, y, x + w, y + h))
        morceau = morceau.resize((w * ECHELLE, h * ECHELLE), Image.LANCZOS)
        morceau = morceau.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
        morceau.save(SORTIE / f"{nom}.webp", "WEBP", quality=88, method=6)
        print(nom, morceau.size)


if __name__ == "__main__":
    main()
