# Terres mortes

Écran de collection construit sur une image peinte 1280 × 720 (`assets/reference.jpg`). Des zones
cliquables invisibles sont posées dessus. Le classeur tourne ses pages en 3D, chaque carte ouvre une fiche
et un écran de progression. Sur téléphone en portrait, une version liste prend le relais.

**Statut** : en cours  <!-- en cours / validé / intégré -->

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | page de l'interface |
| `style.css` | styles |
| `script.js` | code (module) : données de démo, rendu, tournage des pages, panneau de test, API d'intégration |
| `manifest.json` | clé → fichier visuel, avec placeholder si le fichier manque |
| `ASSET_SPEC.md` | visuels (Codex) |
| `assets/` | `reference.jpg`, placeholders (`placeholders/`) |

Favoris enregistrés dans le navigateur sous la clé `terres-mortes:favoris`.

## Tester

Ouvrir la page via GitHub Pages (pas en `file://`). En bas à gauche, cliquer sur **Tester** :
démo, classeur vide, une seule page, toutes favorites, aucune favorite, visuel manquant.

## Données attendues

```js
TerresMortesUI.setData({
  cards: [
    { id: 'spectre', name: 'Spectre', tags: ['combattants'], art: 0, rarity: 'Légendaire',
      description: 'Une silhouette dans les cendres…', power: 9, defense: 4, cost: 6 }
  ],
  favorites: ['spectre']   // facultatif
});
```

`art` (0 à 8) choisit l'une des 9 illustrations découpées dans l'image de référence.
Les catégories et les compteurs (« 47 / 120 ») sont peints dans l'image : ils ne changent pas avec les données.

## Événements émis

Ils sont émis sur `window` sous le nom `terres-mortes:<nom>`. Si la page est dans une iframe, ils sont aussi envoyés au parent avec `postMessage({ from: 'terres-mortes', event, detail })`.

| Événement | `detail` |
|---|---|
| `ready` | — |
| `categoryChanged` | `{ category }` |
| `pageChanged` | `{ page, category }` |
| `cardOpened` | `{ id }` |
| `favoriteToggled` | `{ id, favorite }` |
| `progressOpened` | — |
