# ASSET_SPEC — Plateau abri

Visuels qui rendraient l'interface fidèle aux maquettes `reference/maquette-jour.png`,
`reference/maquette-nuit.png` et `reference/maquette-nuit-rouge.png`.

**Codex** : ne produis que les lignes `à faire`. Les lignes `proposé` attendent la validation du propriétaire.
**Ne découpe jamais la maquette** : chaque visuel est redessiné proprement et doit être exploitable seul
(voir « Types de visuels exploitables » dans `AGENTS.md`).

Statuts : `proposé` → `à faire` (validé par le propriétaire) → `livré` (Codex) → `validé` (propriétaire). Ou `refusé`.

Règles communes :
- Les tailles sont données **en pixels réels du fichier**. Elles valent 2 × la taille affichée, sauf pour les fonds et les cadres-9.
- **Aucun texte ni chiffre** dans les visuels : le code écrit tous les libellés (JOUR, 9, DECK, SHELTER, AFFRONTER LA NUIT, noms des cartes, compteurs…).
- PNG pour tout ce qui a de la transparence, WebP qualité ≈ 85 pour les images opaques.
- Si un fichier manque, l'interface garde son rendu CSS/SVG actuel. Rien ne casse.

## A. Fonds d'écran

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 1 | `decor-jour` | `assets/fonds/decor-jour.webp` | fond | 1536 × 1024 | non | Paysage de jour, visible surtout à droite (x > 1210) et sur les bords : ciel bleu avec nuages, désert ocre, montagnes, ville en ruine au loin, tour de guet en bois et palissade au premier plan à droite, buissons. Rien d'interface. | proposé |
| 2 | `decor-nuit` | `assets/fonds/decor-nuit.webp` | fond | 1536 × 1024 | non | Même paysage la nuit : ciel bleu nuit, pleine lune blanche, ville éclairée au loin, tour avec une lampe jaune. | proposé |
| 3 | `decor-nuit-rouge` | `assets/fonds/decor-nuit-rouge.webp` | fond | 1536 × 1024 | non | Même paysage sous une lune de sang : ciel rouge sombre, grosse lune rouge, silhouettes noires, lampe rouge sur la tour. | proposé |

## B. Plateau (cour de l'abri, vue de dessus)

> **Décision du propriétaire** : la cour est l'image fournie `assets/plateau/cour.webp` (1245 × 1263, fond transparent,
> grille de 9 × 9 cases). Elle sert aux 3 ambiances : le code l'assombrit la nuit et la teinte en rouge pour la nuit rouge.
> Les specs ci-dessous (10 × 8 cases) ne s'appliquent plus.

Zone affichée : 880 × 735 à l'écran → fichier **1760 × 1470**. Le **sol jouable** occupe exactement le rectangle
x = 84, y = 132, 1600 × 1280 px du fichier : **10 × 8 dalles de 160 px**, alignées sur ce rectangle.
Autour : palissade en bois (haut, gauche, droite) avec portail métallique au milieu en haut, tonneaux rouillés,
caisses, végétation, lampes accrochées. **Sans unités, sans blocs, sans caisse centrale, sans voiture et sans taches de sang** :
le code les pose par-dessus. Le bas (sous le sol) est un muret de bois sombre.

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 4 | `plateau-jour` | `assets/plateau/cour.webp` | illustration | 1245 × 1263 | oui | Image fournie par le propriétaire, utilisée pour les 3 ambiances. | validé |
| 5 | `plateau-nuit` | `assets/plateau/plateau-nuit.webp` | illustration | 1760 × 1470 | non | Nuit bleue, lampes allumées le long de la palissade avec halos orangés, sol sombre. | refusé |
| 6 | `plateau-nuit-rouge` | `assets/plateau/plateau-nuit-rouge.webp` | illustration | 1760 × 1470 | non | Nuit rouge, lampes rouges, sol teinté de rouge sombre. | refusé |

## C. Panneaux de l'interface

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 7 | `bandeau-jour` | `assets/panneaux/bandeau-jour.webp` | illustration | 610 × 336 | non | Fond du panneau « JOUR » : papier crème vieilli, soleil jaune à droite, silhouette noire d'une tour de guet et de clôtures en bas. Zone de gauche (≈ 40 %) et bande du bas (≈ 50 px) **calmes** pour le texte et les losanges. | proposé |
| 8 | `bandeau-nuit` | `assets/panneaux/bandeau-nuit.webp` | illustration | 610 × 336 | non | Même cadrage la nuit : ciel bleu nuit, lune blanche, 2 tours de guet, cimetière en silhouette. | proposé |
| 9 | `bandeau-nuit-rouge` | `assets/panneaux/bandeau-nuit-rouge.webp` | illustration | 610 × 336 | non | Même cadrage : ciel rouge, lune de sang. | proposé |
| 10 | `panneau-papier` | `assets/panneaux/panneau-papier.png` | cadre-9 | 128 × 128, bords 24 px | autour | Cadre « papier » (panneau SHELTER) : papier crème taché, liseré sombre, coins usés. | proposé |
| 11 | `panneau-sombre` | `assets/panneaux/panneau-sombre.png` | cadre-9 | 128 × 128, bords 24 px | autour | Cadre sombre (deck, réserve, défausse, liste, zombies, vitesse, menu bas) : métal noirci, bord brun fin, rivets discrets dans les coins. | proposé |
| 12 | `illus-abri` | `assets/panneaux/illus-abri.png` | illustration | 340 × 140 | oui | Silhouette noire d'un fort/bâtiment fortifié avec tours, style encre (panneau SHELTER). | proposé |
| 13 | `illus-horde` | `assets/panneaux/illus-horde.png` | illustration | 236 × 200 | oui | Trois silhouettes de zombies rouge vif (#e0291c), de face, épaules tombantes. | proposé |

## D. Cartes

> **Décision du propriétaire** : toutes les cartes utilisent la carte fournie `assets/cartes/carte-modele.webp`
> (1024 × 1536, ratio 2:3). Le code écrit le nom dans le grand cadre de texte et pose la pastille de coût.
> Le cadre et les illustrations séparés ne sont plus nécessaires.

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 14 | `dos-carte` | `assets/cartes/dos-carte.webp` | illustration | 224 × 300 | non | Dos de carte : fond rouge très sombre, symbole biohazard rouge lumineux, cadre crème fin. | proposé |
| 15a | `carte-modele` | `assets/cartes/carte-modele.webp` | illustration | 1024 × 1536 | non | Carte complète fournie par le propriétaire (Traqueur), utilisée pour toutes les cartes. | validé |
| 15 | `cadre-carte` | `assets/cartes/cadre-carte.png` | illustration | 316 × 424 | oui (fenêtre) | Cadre de carte : papier crème vieilli, bord sombre, **fenêtre transparente** pour l'illustration (x 20→296, y 24→304) et bandeau du nom en bas (**vide**). Pas de pastille de coût (le code la dessine). | refusé |
| 16 | `carte-barricade` | `assets/cartes/carte-barricade.webp` | illustration | 276 × 280 | non | Planches clouées en croix, encre noire sur papier, éclaboussures grises. | refusé |
| 17 | `carte-mitrailleuse` | `assets/cartes/carte-mitrailleuse.webp` | illustration | 276 × 280 | non | Mitrailleuse sur trépied avec bande de munitions. | refusé |
| 18 | `carte-molotov` | `assets/cartes/carte-molotov.webp` | illustration | 276 × 280 | non | Main tenant un cocktail Molotov enflammé, grosse éclaboussure rouge. | refusé |
| 19 | `carte-guetteur` | `assets/cartes/carte-guetteur.webp` | illustration | 276 × 280 | non | Survivant encapuchonné aux jumelles. | refusé |
| 20 | `carte-tireur` | `assets/cartes/carte-tireur.webp` | illustration | 276 × 280 | non | Soldat accroupi qui vise au fusil, éclaboussure rouge. | refusé |
| 21 | `carte-cloture` | `assets/cartes/carte-cloture.webp` | illustration | 276 × 280 | non | Clôture de piquets et barbelés (pas dans la maquette). | refusé |
| 22 | `carte-epave` | `assets/cartes/carte-epave.webp` | illustration | 276 × 280 | non | Carcasse de voiture rouillée (pas dans la maquette). | refusé |
| 23 | `carte-projecteur` | `assets/cartes/carte-projecteur.webp` | illustration | 276 × 280 | non | Projecteur sur pied (pas dans la maquette). | refusé |
| 24 | `carte-lance-flammes` | `assets/cartes/carte-lance-flammes.webp` | illustration | 276 × 280 | non | Lance-flammes et réservoir (pas dans la maquette). | refusé |
| 25 | `carte-tourelle` | `assets/cartes/carte-tourelle.webp` | illustration | 276 × 280 | non | Tourelle automatique sur trépied (pas dans la maquette). | refusé |

## E. Liste « Cartes disponibles »

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 26 | `bouton-ligne` | `assets/boutons/ligne-{normal,survol,actif,desactive}.png` | bouton | 552 × 88 (×4) | oui | Ligne de liste en papier crème. **actif** : liseré rouge lumineux. **desactive** : gris. Garder à droite un emplacement libre pour la pastille du nombre. | proposé |
| 27 | `liste-barricade` | `assets/icones/liste-barricade.png` | icone | 112 × 72 | oui | Planches en croix, encre noire. | proposé |
| 28 | `liste-cloture` | `assets/icones/liste-cloture.png` | icone | 112 × 72 | oui | Clôture de piquets. | proposé |
| 29 | `liste-epave` | `assets/icones/liste-epave.png` | icone | 112 × 72 | oui | Voiture de profil. | proposé |
| 30 | `liste-projecteur` | `assets/icones/liste-projecteur.png` | icone | 112 × 72 | oui | Projecteur sur trépied. | proposé |
| 31 | `liste-lance-flammes` | `assets/icones/liste-lance-flammes.png` | icone | 112 × 72 | oui | Lance-flammes. | proposé |
| 32 | `liste-tireur` | `assets/icones/liste-tireur.png` | icone | 112 × 72 | oui | Tireur accroupi. | proposé |
| 33 | `liste-tourelle` | `assets/icones/liste-tourelle.png` | icone | 112 × 72 | oui | Tourelle sur trépied. | proposé |

## F. Boutons

| # | Clé | Fichier | Type | Taille | Transp. | Description | Statut |
|---|---|---|---|---|---|---|---|
| 34 | `bouton-affronter` | `assets/boutons/affronter-{normal,survol,appui,desactive}.png` | bouton | 592 × 256 (×4) | oui | Grand bouton rouge sang texturé, cadre sombre, 2 silhouettes de zombies sombres à gauche. **Sans texte.** | proposé |
| 35 | `bouton-carre` | `assets/boutons/carre-{normal,survol,appui}.png` | bouton | 108 × 96 (×3) | oui | Petit bouton carré noir à bord métal (son, musique, plein écran, stats). Sans icône. | proposé |
| 36 | `bouton-vitesse` | `assets/boutons/vitesse-{normal,survol,actif}.png` | bouton | 220 × 128 (×3) | oui | Segment du sélecteur de vitesse. **actif** : cadre jaune/or (#f0b429). Sans texte. | proposé |

## G. Icônes de l'interface (blanc cassé #ece3cf, fond transparent)

| # | Clé | Fichier | Type | Taille | Statut |
|---|---|---|---|---|---|
| 37 | `icone-son` | `assets/icones/son.png` | icone | 96 × 96 | proposé |
| 38 | `icone-son-coupe` | `assets/icones/son-coupe.png` | icone | 96 × 96 | proposé |
| 39 | `icone-musique` | `assets/icones/musique.png` | icone | 96 × 96 | proposé |
| 40 | `icone-musique-coupee` | `assets/icones/musique-coupee.png` | icone | 96 × 96 | proposé |
| 41 | `icone-plein-ecran` | `assets/icones/plein-ecran.png` | icone | 96 × 96 | proposé |
| 42 | `icone-stats` | `assets/icones/stats.png` | icone | 96 × 96 | proposé |
| 43 | `icone-options` | `assets/icones/options.png` | icone | 96 × 96 | proposé |
| 44 | `icone-regles` | `assets/icones/regles.png` | icone | 96 × 96 | proposé |
| 45 | `icone-reserve` | `assets/icones/reserve.png` | icone | 96 × 96 | proposé |
| 46 | `icone-defausse` | `assets/icones/defausse.png` | icone | 96 × 96 | proposé |

## H. Pièces du plateau (vue de dessus, fond transparent)

> **Décision du propriétaire** : pas besoin. Les unités restent dessinées par le code.

| # | Clé | Fichier | Type | Taille | Description | Statut |
|---|---|---|---|---|---|---|
| 47 | `unite-survivant` | `assets/pieces/survivant.png` | illustration | 160 × 160 | Survivant armé d'un fusil, casque, vu de dessus, **orienté vers la droite** (le code le fait pivoter), centré. Sans anneau ni barre de vie. | refusé |
| 48 | `unite-zombie` | `assets/pieces/zombie.png` | illustration | 160 × 160 | Zombie vu de dessus, bras tendus **vers la droite**, vêtements tachés de sang, centré. | refusé |
| 49 | `obstacle-bloc` | `assets/pieces/bloc.png` | illustration | 96 × 96 | Bloc de béton blanc cassé vu de dessus avec léger relief et ombre portée courte. Le code les empile. | refusé |
| 50 | `obstacle-caisse` | `assets/pieces/caisses.png` | illustration | 304 × 208 | Groupe de caisses en bois et sacs de sable (centre de la cour). | refusé |
| 51 | `obstacle-epave` | `assets/pieces/epave.png` | illustration | 320 × 304 | Voiture rouillée vue de dessus, posée en diagonale (≈ −30°). | refusé |
| 52 | `decal-sang` | `assets/pieces/sang.png` | illustration | 160 × 160 | Flaque et éclaboussures de sang sombre (#8a120c), semi-transparentes. | refusé |
