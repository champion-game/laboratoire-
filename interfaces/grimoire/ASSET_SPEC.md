# ASSET_SPEC — Grimoire

Visuels dont l'interface a besoin. **Codex** produit les lignes « à faire » puis passe leur statut à « livré ».
Les clés et les chemins sont ceux de `manifest.json` : ne pas les renommer.

Statuts : `proposé` (Claude) → `à faire` (validé par le propriétaire) → `livré` (Codex) → `validé` (propriétaire). Une ligne peut aussi être `refusé`.

Maquette : `reference/maquette.jpg` (1280 × 720).

## Illustrations des cartes (extraites de la maquette)

Les 36 cartes de démo réutilisent ces 9 illustrations (champ `art` de la carte).
Produites par `reference/extraction.py` : découpe au pixel près puis agrandissement ×2 (Lanczos + légère netteté).
Limite : l'agrandissement n'ajoute pas de détails, le cadre peint de la carte est inclus dans l'image.

| Clé | Fichier | Zone de la maquette | Taille | Statut |
|---|---|---|---|---|
| `carte-0` | `assets/extraits/carte-0.webp` | grille, ligne 1, carte 1 (arbalétrier) | 252 × 376 | livré — extrait de la maquette |
| `carte-1` | `assets/extraits/carte-1.webp` | grille, ligne 1, carte 2 (lance-flammes) | 246 × 376 | livré — extrait de la maquette |
| `carte-2` | `assets/extraits/carte-2.webp` | grille, ligne 1, carte 3 (mitrailleur) | 252 × 376 | livré — extrait de la maquette |
| `carte-3` | `assets/extraits/carte-3.webp` | grille, ligne 2, carte 1 (insurgé) | 252 × 354 | livré — extrait de la maquette |
| `carte-4` | `assets/extraits/carte-4.webp` | grille, ligne 2, carte 2 (traqueur) | 246 × 354 | livré — extrait de la maquette |
| `carte-5` | `assets/extraits/carte-5.webp` | grille, ligne 2, carte 3 (ombre) | 252 × 354 | livré — extrait de la maquette |
| `carte-6` | `assets/extraits/carte-6.webp` | grille, ligne 3, carte 1 (artilleur) | 252 × 334 | livré — extrait de la maquette |
| `carte-7` | `assets/extraits/carte-7.webp` | grille, ligne 3, carte 2 (tourelle) | 246 × 334 | livré — extrait de la maquette |
| `carte-8` | `assets/extraits/carte-8.webp` | grille, ligne 3, carte 3 (éclaireur) | 252 × 334 | livré — extrait de la maquette |
| `carte-0-grand` | `assets/extraits/carte-0-grand.webp` | grande carte de la page droite | 528 × 872 | livré — extrait de la maquette |

Pour une illustration `n` sans fichier `carte-<n>-grand`, la fiche de droite affiche `carte-<n>`.
Si un fichier manque : `assets/placeholders/carte.svg`.

## Matières (fournies avec le projet du propriétaire)

| Clé | Fichier | Rôle | Si absent | Statut |
|---|---|---|---|---|
| `livre` | `assets/book-texture.webp` | livre ouvert vierge (cuir, pages, anneaux), 1672 × 941, WebP (210 Ko) converti depuis `book-texture.png` (2,6 Mo, gardé comme source) | pages de parchemin dessinées en CSS | livré |
| `parchemin` | `assets/parchment.svg` | parchemin procédural (vectoriel) | couleurs CSS | livré |
| `cuir` | `assets/leather.svg` | cuir sombre procédural (barre latérale, onglets) | couleurs CSS | livré |
| `bois` | `assets/wood.svg` | planches sombres (fond de la scène) | couleurs CSS | livré |

`assets/metal.svg` (laiton) n'est utilisé que dans la galerie de l'Atelier ; `assets/favicon.svg` est l'icône de l'onglet.
