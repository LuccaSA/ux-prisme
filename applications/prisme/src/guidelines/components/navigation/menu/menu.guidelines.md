- Vous noterez qu’un <i>placeholder</i> permet accompagne chaque lien et demande de renseigner une nouvelle fois le texte associé : il permet d‘éviter un saut quand on passe d’un élément actif (en gras) à un élément inactif (sans gras).
- Il est possible également d’inclure au milieu de la structure un `.container` si vous souhaitez limiter en largeur le menu.

# Accessibilité

- L’attribut `aria-current="page"` permet d’indiquer la page courante à la fois sémantiquement et visuellement.
- Si vous devez ajouter un titre sémantique HTML à votre menu d’onglets, préférez d'ajouter ce titre directement dans la section de chaque panneau en utilisant la class `u-mask`. Ne mélangez pas la navigation et la sémantique de titres.

Ma navigation :

```mod-code
  &lt;nav class="menu"&gt;
    &lt;ul class="menu-list"&gt;
      &lt;li class="menu-list-item"&gt;
        &lt;a class="menu-list-item-action"&gt;
          Lorem ipsum
          &lt;span class="menu-list-item-action-placeholder" aria-hidden="true" data-content-after="Lorem ipsum"&gt;&lt;/span&gt;
        &lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
```

Dans le composant :

```mod-code
  &lt;h2 class="u-mask"&gt;
    Lorem ipsum
  &lt;/h2&gt;
```