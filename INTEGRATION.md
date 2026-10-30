# Intégrer une interface validée dans le jeu

Une interface est prête à intégrer quand son `README.md` indique **Statut : validé** et que son
`ASSET_SPEC.md` n'a plus de ligne `à faire`.

## 1. Copier le dossier

Copie le dossier **entier** `interfaces/<nom>/` dans le projet du jeu, par exemple dans `ui/<nom>/`.
Rien d'autre n'est nécessaire : il ne dépend d'aucun autre fichier, ni de ressources sur Internet.

Sur GitHub, sans outil local :
1. Ouvre le dépôt du jeu et va dans **Add file → Upload files**.
2. Dépose le contenu du dossier `interfaces/<nom>/`, en gardant ses sous-dossiers.
   Pour récupérer ce dossier : **Code → Download ZIP** sur ce dépôt, puis décompresse-le.

## 2. Retirer les outils de test

Dans `index.html` de l'interface, supprime le bloc qui commence par
`<!-- Barre de test : ... -->` (le `<div class="ui-dev">` contenant « Retour au menu » et « Tester »).
Les styles `.ui-dev` et la section « PANNEAU DE TEST » de `script.js` sont alors inutilisés. Tu peux les laisser ou les supprimer.

## 3. Afficher l'interface

**Recommandé : dans une iframe.** L'isolation est garantie, car aucun style ni script ne se mélange avec ceux du jeu.

```html
<iframe id="ui-classeur" src="ui/classeur/index.html" style="border:0;width:100%;height:100%"></iframe>
```

Il est aussi possible d'ouvrir l'interface comme une page à part entière, avec un lien ou une WebView.

## 4. Envoyer les données

Chaque interface démarre avec ses données de démo. Le jeu les remplace dès que l'interface est prête :

```js
const frame = document.getElementById('ui-classeur');

window.addEventListener('message', (e) => {
  const m = e.data;
  if (!m || m.from !== 'classeur') return;

  if (m.event === 'ready') {
    frame.contentWindow.postMessage(
      { to: 'classeur', type: 'setData', data: { cards: mesCartes, favorites: mesFavoris } },
      '*'
    );
  }
});
```

Le format exact de `data` est décrit dans la section « Données attendues » du `README.md` de l'interface.

Si l'interface est ouverte sur la même page que le jeu, sans iframe, on peut aussi appeler directement
`window.ClasseurUI.setData({...})` et écouter les événements sur `window`, par exemple
`addEventListener('classeur:cardOpened', e => ...)`.

## 5. Réagir aux événements

```js
window.addEventListener('message', (e) => {
  const m = e.data;
  if (m?.from !== 'classeur') return;
  if (m.event === 'favoriteToggled') sauverFavori(m.detail.id, m.detail.favorite);
  if (m.event === 'cardOpened') jouerSon('carte');
});
```

La liste des événements et de leur `detail` est dans le `README.md` de l'interface.

## 6. Après l'intégration

- Passe le statut du `README.md` de l'interface à **intégré**, dans ce dépôt.
- Les corrections se font d'abord ici, dans `interfaces/<nom>/`. Ensuite, on recopie le dossier dans le jeu.
  Ne modifie pas la copie du jeu directement, sinon les deux versions divergent.
