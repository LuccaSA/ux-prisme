# Accessibilité

- Si vous devez ajouter un titre sémantique HTML à votre menu d'onglets, préférez d'ajouter ce titre directement dans la section de chaque panneau en utilisant la class 'u-mask'.
<br/>Ne mélangez pas la navigation et la sémantique de titres

Ma navigation :

```mod-code
  &lt;nav class="page-nav menu"&gt;
    &lt;a class="menu-link"&gt;
      My link
    &lt;/a&gt;
  &lt;/nav&gt;
```

Dans le composant :

```mod-code
  &lt;h2 class="u-mask"&gt;
    The title of my link 1 section
  &lt;/h2&gt;
```