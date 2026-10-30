# Classeur

Collection présentée comme un classeur : 9 cartes par page, pages qui se tournent au glisser,
onglets de catégories, fiche détaillée d'une carte avec favoris.

**Statut** : en cours  <!-- en cours / validé / intégré -->

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | page de l'interface |
| `style.css` | styles (polices locales comprises) |
| `script.js` | code : données de démo, rendu, tournage des pages, panneau de test, API d'intégration |
| `manifest.json` | clé → fichier visuel, avec placeholder si le fichier manque |
| `ASSET_SPEC.md` | visuels à produire (Codex) |
| `assets/` | visuels, polices (`fonts/`), placeholders (`placeholders/`) |

Favoris enregistrés dans le navigateur sous la clé `classeur:favoris`.

## Tester

Ouvrir la page via GitHub Pages (pas en `file://`). En bas à gauche, cliquer sur **Tester** :
démo, classeur vide, une seule page, toutes favorites, aucune favorite, visuels manquants.

## Données attendues

```js
ClasseurUI.setData({
  cards: [
    { id: 'spectre', name: 'Spectre', tags: ['combattants'], art: 0, rarity: 'Légendaire',
      desc: 'Une silhouette dans les cendres…', atk: 9, def: 4, cost: 6,
      img: 'url/optionnelle.webp' }   // facultatif
  ],
  categories: [                        // facultatif
    { id: 'all', label: 'Tous', owned: 47, total: 120, c: '#c99a3b', s: '✦' }
  ],
  favorites: ['spectre']               // facultatif
});
```

Illustration d'une carte, par ordre de priorité : `img`, puis `carte-<id>` du manifest, puis `tm-<art>`, puis le placeholder.
Raretés : `Commune`, `Rare`, `Épique`, `Légendaire`.

## Événements émis

Ils sont émis sur `window` sous le nom `classeur:<nom>`. Si la page est dans une iframe, ils sont aussi envoyés au parent avec `postMessage({ from: 'classeur', event, detail })`.

| Événement | `detail` |
|---|---|
| `ready` | — |
| `pageChanged` | `{ page, category }` (page ou catégorie changée) |
| `cardOpened` | `{ id }` |
| `cardClosed` | — |
| `favoriteToggled` | `{ id, favorite }` |
