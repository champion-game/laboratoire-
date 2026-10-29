# Laboratoire — bibliothèque de menus

## Structure

```
index.html            lanceur : liste les menus, ouvre celui cliqué
menus/menus.js        registre : une ligne par menu
menus/<id>/           un menu = un dossier autonome
  index.html          la page du menu
  assets/             ses images, polices, etc.
```

## Règles

- Un menu ne référence QUE des fichiers de son propre dossier (chemins relatifs
  `assets/...`). Jamais `../`, jamais un fichier d'un autre menu.
- Pas de code ni d'assets partagés entre menus : si deux menus ont besoin de la
  même image, chacun a sa copie.
- Ajouter / modifier un menu : ne toucher que `menus/<id>/` et, pour un ajout,
  sa ligne dans `menus/menus.js`. Ne jamais modifier les autres menus ni le
  lanceur pour ça.
- Le lanceur ouvre chaque menu dans une iframe : aucune interaction possible
  entre menus.

## Copier un menu vers un autre dépôt

1. Copier le dossier entier `menus/<id>/` tel quel vers `menus/<id>/` du dépôt cible.
2. Ajouter la ligne du menu dans `menus/menus.js` du dépôt cible.
3. Si le dépôt cible n'a pas encore le lanceur, copier aussi `index.html` et
   créer `menus/menus.js`.

## Git

- Une fois le travail poussé, ouvrir la pull request et la fusionner dans la
  branche principale directement, sans demander confirmation.
