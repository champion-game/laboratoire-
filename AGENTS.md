# AGENTS.md — consignes pour Codex

## Ton rôle : visuels uniquement

Tu produis les **visuels** des interfaces : textures, fonds, icônes, cadres, illustrations.
Le code est fait par Claude Code (voir `CLAUDE.md`).

### Ce que tu peux modifier
- Les fichiers images dans `interfaces/<nom>/assets/` (et ses sous-dossiers comme `cartes/`).
- Dans `interfaces/<nom>/ASSET_SPEC.md` : **uniquement la colonne « Statut »** (`à faire` → `livré`).

### Interdit
- Tout le code : `*.html`, `*.css`, `*.js`, `manifest.json`, `README.md`.
- Le menu (`index.html` à la racine), `CLAUDE.md`, `AGENTS.md`, `INTEGRATION.md`.
- `assets/placeholders/` et `assets/fonts/` (gérés par Claude Code).
- `reference/` : la maquette du propriétaire, à consulter seulement.
- Renommer ou déplacer un fichier existant.

## Méthode

1. Travaille sur **une seule interface à la fois**.
2. Lis son `ASSET_SPEC.md`. Prends **uniquement** les lignes au statut **`à faire`**. Les lignes `proposé`
   n'ont pas encore été validées par le propriétaire, et les lignes `refusé` ne sont jamais à produire.
3. Pour chaque visuel, respecte exactement ce que dit la spec : **nom de fichier et chemin, taille en pixels,
   format, transparence, contenu et style**. S'il y a une image de référence, aligne-toi dessus.
4. Enregistre le fichier au chemin indiqué. Le code l'utilisera automatiquement : `manifest.json` pointe déjà dessus.
5. Passe le statut de la ligne à **`livré`**. Seul le propriétaire passe une ligne à `validé`.
6. Ne copie **jamais** un visuel d'une interface vers une autre, sauf si la spec le demande explicitement.
   Chaque interface a ses propres fichiers.
7. Si une spec est ambiguë ou impossible à respecter, ne devine pas. Laisse la ligne `à faire` et explique le problème dans ta réponse.

## La maquette : un modèle, pas une source à découper (pour toi)

Quand l'interface a un dossier `reference/`, la maquette qu'il contient montre **à quoi doit ressembler** le résultat.

- **Interdit** de découper, recadrer, détourer ou retoucher la maquette pour en tirer un visuel.
  Seul Claude Code peut en extraire des visuels, sur décision du propriétaire, dans `assets/extraits/`.
  Ne modifie pas ce dossier. Si une ligne de spec « extrait de la maquette » repasse à `à faire`, livre une version redessinée.
- Chaque visuel est **redessiné proprement** : même style, mêmes couleurs, même matière. Il doit être exploitable
  par le code, c'est-à-dire sans texte incrusté (sauf demande), sans ombre ni fond de la maquette, au bon format
  et avec la bonne transparence.

## Types de visuels exploitables

La colonne « Type » de la spec indique comment le code utilise le visuel :

| Type | Ce qu'il faut livrer |
|---|---|
| `texture` | Motif **répétable sans raccord visible** (bords qui se raccordent), carré, opaque sauf indication contraire. |
| `cadre-9` | Cadre ou panneau extensible : les **coins** sont fixes, les **bords** se répètent et le **centre** est vide ou uni. La spec donne la largeur des bords en px. Fond transparent autour. |
| `bouton` | **Un fichier par état** : `-normal`, `-survol`, `-appui`, `-desactive` (et `-actif` si demandé), tous de la même taille. Fond transparent et **pas de texte** : le code écrit le libellé. |
| `icone` | Pictogramme centré, fond transparent, lisible à petite taille, avec une marge de ≈ 10 %. |
| `illustration` | Image finale (personnage, objet, décor), avec le cadrage et la transparence indiqués par la spec. |
| `fond` | Image de fond d'écran à la taille indiquée, opaque, sans élément d'interface dessiné dedans. |

## Direction artistique

> Proposée à partir des interfaces existantes. Les points marqués **[À VALIDER]** attendent la décision du propriétaire.

**Univers** : jeu de cartes post-apocalyptique (« Barricard », « Terres mortes »). Survivants, zombies,
barricades, caravanes, ruines industrielles sous un soleil rouge.

**Style**
- Illustrations à **l'encre noire**, traits épais et nerveux, ombres en hachures. Le rendu fait penser à de la
  bande dessinée imprimée.
- Derrière chaque sujet, une **grande éclaboussure de peinture** d'une seule couleur vive (orange, rouge, bleu,
  vert, violet, jaune). **[À VALIDER]** : couleur imposée par catégorie, ou libre ?
- Fond **papier crème vieilli** (taches, grain, bords usés).
- Cadres en **métal rouillé et riveté**, plaques de bronze, coins renforcés.
- Décors : silhouettes noires de pylônes, de ponts et de ruines devant un **soleil rouge-orange**.
- Références dans le dépôt : `interfaces/classeur/assets/tm-*.webp`,
  `interfaces/collection/assets/cartes/carte-traqueur.webp`, `interfaces/terres-mortes/assets/reference.jpg`.

**Palette** (relevée dans le code existant)

| Rôle | Hex |
|---|---|
| Fond très sombre | `#141210` |
| Encre | `#231d17` / `#2d2013` |
| Parchemin clair | `#efe0bd` |
| Parchemin foncé / papier | `#dcc28e` / `#dbbd83` |
| Or | `#c99a3b` (clair `#f2c75c`, sombre `#7a5a1e`) |
| Bronze / rouille | `#8a4b1f` |
| Rouge sang | `#b3261e` (vif `#e0402f`) |
| Feu / soleil | `#ff9c28` / `#ff4a2a` |
| Bleu acier | `#1f4a6e` |
| Ardoise / métal | `#3f4c50` (clair `#5d6c70`, sombre `#252e31`) |

**[À VALIDER]** : cette palette devient-elle la palette officielle de toutes les interfaces ?

**Ambiance** : survie, poussière, fin du jour. Dur mais lisible et un peu héroïque, pas gore.

**À éviter**
- Le gore explicite (sang réaliste, organes). **[À VALIDER]** : quel niveau de violence est accepté pour les zombies ?
- Le photoréalisme, la 3D lisse, les dégradés « app mobile », les néons.
- Le texte dans les illustrations (le code écrit les noms et les chiffres), sauf si la spec le demande.
- Les logos, marques ou personnages existants.
- Les fonds transparents quand la spec demande un fond opaque, et inversement.

**Formats par défaut** (sauf indication contraire de la spec) : WebP qualité ≈ 85, sRGB, aux dimensions exactes demandées.
