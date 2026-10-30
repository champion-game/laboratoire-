# Collection

Grille de cartes Barricard : filtres par catégorie à gauche, recherche, grille de cartes au centre,
grande carte à droite qui se retourne quand on en choisit une autre. Inclinaison 3D au survol.

**Statut** : en cours  <!-- en cours / validé / intégré -->

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | page de l'interface |
| `style.css` | styles (polices locales comprises) |
| `script.js` | code : données de démo, rendu, panneau de test, API d'intégration |
| `manifest.json` | clé → fichier visuel, avec placeholder si le fichier manque |
| `ASSET_SPEC.md` | visuels à produire (Codex) |
| `assets/` | visuels, polices (`fonts/`), placeholders (`placeholders/`) |

## Tester

Ouvrir la page via GitHub Pages (pas en `file://`). En bas à gauche, cliquer sur **Tester** :
démo, collection vide, une seule carte, beaucoup de cartes, visuels manquants.

## Données attendues

```js
CollectionUI.setData({
  cards: [
    { id: 1, name: 'Le Traqueur', cats: ['humains', 'tireurs'], cost: 4, atk: 3, hp: 5,
      text: 'Inflige +2 dégâts aux zombies isolés.',
      art: 'traqueur',          // clé du visuel : « carte-<art> » dans manifest.json
      img: 'url/optionnelle.webp' } // facultatif : remplace le visuel du manifest
  ]
});
```

Catégories reconnues (`cats`) : `humains`, `tireurs`, `murs`, `armes`, `speciaux`, `zombies`,
`evenements`, `ressources`, `consommables`.

## Événements émis

Ils sont émis sur `window` sous le nom `collection:<nom>`. Si la page est dans une iframe, ils sont aussi envoyés au parent avec `postMessage({ from: 'collection', event, detail })`.

| Événement | `detail` |
|---|---|
| `ready` | — |
| `cardSelected` | `{ id }` |
| `filterChanged` | `{ category }` |
| `search` | `{ query }` |
| `tabChanged` | `{ tab }` (Collection / Decks / Camp / Missions) |
