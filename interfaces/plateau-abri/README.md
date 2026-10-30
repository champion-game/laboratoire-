# Plateau abri

Écran de jeu principal : la cour de l'abri vue de dessus (grille de 10 × 8 cases) avec les survivants, les zombies
et les obstacles. Autour, on trouve :
- le jour en cours et sa progression ;
- le deck, la réserve, la défausse et la liste des cartes disponibles ;
- la main de cartes en bas ;
- l'état de l'abri (SHELTER), la horde restante, le bouton « Affronter la nuit » et la vitesse.

Il existe 3 ambiances : **jour**, **nuit** et **nuit rouge**.

Maquettes : `reference/maquette-jour.png`, `reference/maquette-nuit.png`, `reference/maquette-nuit-rouge.png`.
L'interface est construite en CSS et SVG uniquement. Les visuels de `ASSET_SPEC.md` remplacent ce rendu dès qu'ils sont livrés.

**Statut** : en cours  <!-- en cours / validé / intégré -->

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | page de l'interface (scène 1536 × 1024 mise à l'échelle de l'écran) |
| `style.css` | styles, avec les polices locales |
| `script.js` | données de démo, rendu, interactions, chargement des visuels, panneau de test, API d'intégration |
| `manifest.json` | clé → fichier visuel (rendu CSS/SVG si le fichier manque) |
| `ASSET_SPEC.md` | visuels à produire (Codex) |
| `reference/` | maquettes (jamais chargées par le code) |
| `assets/` | visuels, polices (`fonts/`), placeholders (`placeholders/`) |

## Tester

Ouvrir la page via GitHub Pages. En bas à gauche, **Tester** propose :
jour, nuit, nuit rouge, main vide, plus aucune carte, abri presque détruit, grosse horde, visuels manquants.

Pour jouer avec l'interface :
1. Choisis une carte dans la liste ou dans la main.
2. Clique sur une case du plateau pour la poser.
3. Échap annule la sélection.

## Données attendues

Tous les champs sont facultatifs. Un champ absent garde sa valeur actuelle.

```js
PlateauAbriUI.setData({
  phase: 'jour',               // 'jour' | 'nuit' | 'nuit-rouge'
  jour: 9,
  progression: 4.5, etapes: 12, // losanges : 4 pleins + 1 moitié sur 12
  deck: 15, reserve: 2, defausse: 2,
  disponibles: [ { id: 'barricade', nom: 'Barricade', nb: 3 } ],      // nb 0 = grisé
  main: [ { id: 'molotov', nom: 'Molotov', cout: 3 } ],
  abri: { pv: 190, max: 200 },
  zombiesDehors: 7, vagues: { faites: 2, total: 3 },
  vitesse: 1,                   // 1 | 2 | 4
  // positions en cases depuis le coin haut-gauche du sol, décimales permises
  unites: [ { type: 'survivant' | 'zombie', x: 3, y: 1.5, pv: 0.8 /* 0 à 1 */, dir: 0 /* degrés, 0 = vers la droite */ } ],
  obstacles: [ { type: 'bloc' | 'caisse' | 'epave', x: 4, y: 1.3, w: 0.6, h: 0.6 } ],
  taches: [ { x: 5, y: 1, s: 1.2 } ],          // taches de sang
  lampes: [ { x: 0, y: 1.5 } ],                // halos visibles la nuit
  selection: { source: 'liste', id: 'barricade', index: 0 } // ou null
});
```

Identifiants de cartes ayant une icône et une illustration : `barricade`, `cloture`, `epave`, `projecteur`,
`lance-flammes`, `tireur`, `tourelle`, `mitrailleuse`, `molotov`, `guetteur`.

## Événements émis

Ils sont émis sur `window` sous le nom `plateau-abri:<nom>`. Si la page est dans une iframe, ils sont aussi envoyés au parent
avec `postMessage({ from: 'plateau-abri', event, detail })`.

| Événement | `detail` |
|---|---|
| `ready` | — |
| `cardSelected` | `{ source: 'liste' \| 'main', id, index }` |
| `cardPlayed` | `{ source, id, index, col, row }` : carte posée sur une case |
| `selectionCancelled` | — |
| `startNight` | `{ jour }` : clic sur « Affronter la nuit » |
| `speedChanged` | `{ vitesse }` |
| `pileClicked` | `{ pile: 'deck' \| 'reserve' \| 'defausse' }` |
| `menu` | `{ action: 'options' \| 'regles' \| 'recount' \| 'stats' }` |
| `soundToggled` / `musicToggled` | `{ on }` |
| `fullscreenToggled` | — |

Quand on pose une carte, l'interface affiche tout de suite un pion. Elle retire aussi la carte de la main, ou baisse son nombre
dans la liste. Le jeu peut ensuite corriger l'état avec `setData`.
