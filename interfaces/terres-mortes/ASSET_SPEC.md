# ASSET_SPEC — Terres mortes

Visuels dont l'interface a besoin. **Codex** produit les lignes « à faire » puis passe leur statut à « livré ».
Les clés et les chemins sont ceux de `manifest.json` : ne pas les renommer.

Statuts : `à faire` → `livré` (par Codex) → `validé` (par le propriétaire).

## Visuel utilisé

Toute l'interface est peinte dans **une seule image** 1280 × 720. Le code pose des zones cliquables
invisibles par-dessus et découpe les illustrations des cartes dans cette même image.

| Clé | Fichier | Description | Statut |
|---|---|---|---|
| `reference` | `assets/reference.jpg` | Écran complet 1280 × 720, JPEG, opaque : panneau « Collection » et catégories à gauche, classeur ouvert à 2 pages avec 9 + 9 cartes, onglets à droite, boutons de page en bas, compteur « 47 / 120 ». | livré |

**Attention** : les positions des boutons et des cartes sont fixées au pixel près dans `script.js`.
Une nouvelle version de `reference.jpg` doit garder **exactement** la même mise en page.

## À faire

Rien pour l'instant.

Plus tard, on pourra découper cette image en visuels séparés : fond du classeur vide, cadres de cartes
et une illustration par carte. Ce découpage demande aussi du travail sur le code. Il sera ajouté ici,
avec le statut « à faire », seulement quand le propriétaire le demandera.

## Placeholders

`assets/placeholders/` contient des images de substitution générées par le code (Claude). Codex n'y touche pas.
