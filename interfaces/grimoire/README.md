# Grimoire

« Le Grimoire des Exilés » : album de cartes en forme de livre ouvert. Grille de 9 cartes à gauche,
fiche détaillée à droite (citation, statistiques, faction, histoire), pages qui se tournent en 3D,
onglets de catégories, rubriques Factions / Raretés / Toutes les cartes (recherche), Défis, Récompenses (patines),
Atelier (modifier une carte, régler les textures, exporter en JSON) et sons de page synthétisés.

Importé depuis le projet fourni par le propriétaire (`grimoire-source.zip`), puis mis aux règles du laboratoire.

**Mise en page** : tout le livre est posé sur une scène au format de la maquette (16:9, 1280 × 720) qui s'adapte
à l'écran sans défilement. Les éléments sont placés avec les coordonnées relevées sur `reference/maquette.jpg`
(variable CSS `--u` = 1 pixel de la maquette). Sur un téléphone tenu en hauteur, les éléments s'empilent :
menu, onglets, page des cartes, puis fiche.

Cartes non trouvées : silhouette grisée avec cadenas, statistiques masquées. Nouvelles cartes : badge « NOUVEAU »
qui disparaît quand le joueur regarde la carte. Le nom de chaque carte est écrit dans son cartouche.

**Statut** : en cours  <!-- en cours / validé / intégré -->

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | page de l'interface (pictogrammes SVG compris) |
| `style.css` | styles (polices locales comprises) |
| `script.js` | code : 36 cartes de démo, rendu, feuilletage, atelier, panneau de test, API d'intégration |
| `manifest.json` | clé → fichier visuel, avec placeholder si le fichier manque |
| `ASSET_SPEC.md` | visuels de l'interface et leur statut |
| `reference/` | maquette (`maquette.jpg`) et script d'extraction des illustrations (`extraction.py`) |
| `assets/` | matières, polices (`fonts/`, Nimbus, licence jointe), illustrations extraites (`extraits/`), placeholders |

Sauvegarde dans le navigateur sous la clé `grimoire:sauvegarde` (cartes modifiées, favoris, défis, réglages).

## Tester

Ouvrir la page via GitHub Pages (pas en `file://`). En bas à gauche, cliquer sur **Tester** :
démo, grimoire vide, une seule page, toutes favorites, aucune favorite, toutes trouvées, aucune trouvée,
nouvelles cartes, mode jeu (sans atelier, défis, récompenses ni son), mode démo, visuels manquants, effacer la sauvegarde.
Feuilleter : flèches sous les cartes, touches ← →, ou balayage horizontal sur mobile.

## Données attendues

```js
GrimoireUI.setData({
  cards: [
    { id: 'exil-001', name: 'Arbalétrier de l’Exil', art: 0,
      category: 'unit',            // unit | defense | item | zombie
      faction: 'Les Exilés',       // Les Exilés | Les Veilleurs | La Légion | Les Oubliés
      rarity: 'Rare',              // Commune | Rare | Épique | Légendaire
      health: 80, damage: 65, mobility: 55, resistance: 40,   // 0 à 100
      quote: 'Là où d’autres crient…', description: 'Spécialiste du tir…',
      owned: true,                 // facultatif (true par défaut) : false = carte pas encore trouvée
      isNew: false,                // facultatif : badge « NOUVEAU »
      img: 'url/optionnelle.webp' } // facultatif
  ],
  favorites: ['exil-001'],         // facultatif
  selected: 'exil-001',            // facultatif : carte affichée à droite
  features: {                      // facultatif : fonctions de démo (toutes true par défaut)
    workshop: true, challenges: true, rewards: true, sound: true
  }
});
```

Illustration d'une carte, par ordre de priorité : `img`, puis `carte-<art>-grand` (fiche de droite seulement),
puis `carte-<art>` du manifest, puis le placeholder.

## Événements émis

Ils sont émis sur `window` sous le nom `grimoire:<nom>`. Si la page est dans une iframe, ils sont aussi envoyés au parent
avec `postMessage({ from: 'grimoire', event, detail })`.

| Événement | `detail` |
|---|---|
| `ready` | — |
| `cardSelected` | `{ id }` |
| `cardSeen` | `{ id }` (une carte « nouvelle » a été regardée) |
| `pageChanged` | `{ page, section, category }` |
| `sectionChanged` | `{ section }` |
| `categoryChanged` | `{ category }` (`null` si l'onglet est désactivé) |
| `favoriteToggled` | `{ id, favorite }` |
| `cardEdited` | `{ card }` (carte modifiée dans l'Atelier) |
