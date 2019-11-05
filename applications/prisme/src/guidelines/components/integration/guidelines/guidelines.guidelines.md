# Introduction

Ecrire le style d’une application web est complexe.  
Dans un contexte d’évolution permanente du design, d’architecture produit et d’accroissement des équipes, il est important de pouvoir mettre à jour des composants, en ajouter, en supprimer, et ce, de manière industrielle, sans crainte d’effets de bords.

Pour ces raisons, l’intégration chez Lucca répond à une méthodologie stricte, inspirée de celle proposée par [Trello](https://gist.github.com/bobbygrace/9e961e8982f42eb91b80), afin d’en assurer sa maintenabilité et sa compréhension.

## Contexte

Tout nouveau module Lucca se base sur le combo Angular / Lucca Front. Les fichiers sont donc écrits en SASS et la transpilation CSS est assurée par dart-sass depuis Angular 8.  
Lucca est composé de plusieurs applications, pour lesquelles <Lucca Front> répond aux composants génériques. Le style est donc découpé en une bibliothèque commune de composants et le style/composants propre à l’application.

# Composants

Des boutons à la grille, en passant par le footer ou un élément de formulaire… tout est composant. Un composant peut exister sous la forme d’un composant Angular ou d’un composant CSS appliqué à la feuille de style globale. Ces composants doivent être — dans la mesure du possible — hermétiques les uns avec les autres (via l’encapsulation Angular ou le nommage CSS). C’est à dire qu’ils ne doivent pas communiquer les uns avec les autres, afin de ne pas rendre complexe leur maintenabilité.

## Structure

Un composant répond à la structure suivante : `.composant-descendant-descendant`

Cette structure est calquée sur l’imbrication HTML et permet d’appeler chaque élément du composant grâce à une classe unique, limitant ainsi sa spécificité (ou poids de la déclaration).

Le composant doit être nommé de façon claire (ex. button, textfield, etc.) et, dans la mesure du possible, être associé à une feuille de style unique portant le même nom.
S’il s’agit d’un composant Angular dont le nom est complexe, la classe associée pourra être simplifiée, mais devra rester suffisamment explicite.

Chaque enfant est séparé d’un - (kebab case). Afin de simplifier la lecture, on acceptera d’avoir recours au camelCase sur le nom d’un composant ou d’un descendant comportant plusieurs mots.

Ex. `emptyState-title`

Les ID (spécificité très lourde) et les éléments HTML (pas assez spécifique) sont à bannir des feuilles de style.
On évitera de découper une classe en plusieurs déclarations afin de simplifier la lecture du document et la recherche au sein d’un projet.

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- ```mod-code
  .header-menu-logo {
  }
```

</div>
<div class="markdown-block mod-negative">

- ```mod-code
  .header .menu .logo {
  }
```
- ```mod-code
  .header-menu img {
  }
```
- ```mod-code
  .header {
    &-menu {
      &-logo {
      }
    }
  }
```

</div>
</div>

## Modifiers

Les modifiers, ou “mods” permettent de créer une variation du style d’un composant : `.button.mod-invert`

Ils peuvent servir à modifier différents attributs d’un composant, comme la structure, la couleur, la taille, etc. et peuvent être placé sur le composant ou sur un descendant.

Le mod ajoute une seconde classe au composant, ce qui augmente sa spécificité et permet d’éviter de générer des problèmes liés au cascading.  

Un composant peut recevoir plusieurs mods.

Un mod ne peut pas vivre seul, il est forcément rattaché à un composant afin de rester encapsulé.

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- ```mod-code
  .button {
    &.mod-invert {
    }
  }
```
- ```mod-code
  .table {
    &.mod-small {
      .table-body-row-cell {
      }
    }
  }
```

</div>
<div class="markdown-block mod-negative">

- ```mod-code
  .mod-invert {
  }
```

</div>
</div>

Les mods sont placés en fin de document afin de ne pas surcharger les lecture des déclarations standards.

## États

Les états, ou “states” permettent de créer une variation liée à l’état d’un composant. `.button.is-loading`

Il sont renseignés par le controller et peuvent couvrir de nombreux états comme : activé, caché, déroulé, désactivé, chargé, etc.

L’état ajoute une seconde classe au composant, ce qui augmente la spécificité et permet d’éviter de générer des problèmes liés au cascading.

Un composant peut recevoir plusieurs états.

Un état ne peut pas vivre seul, il est forcément rattaché à un composant afin de rester encapsulé.

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- ```mod-code
  .button {
    &.is-success {
    }
  }
```

</div>
<div class="markdown-block mod-negative">

- ```mod-code
  .is-success {
  }
```

</div>
</div>

Les états sont placés en fin de document afin de ne pas surcharger la lecture des déclarations standards.

## Media Queries

Les media queries sont intégrées directement dans les définitions concernées.
Elles ne doivent pas être placées dans un fichier à part ou en fin de document afin d’éviter de laisser du code mort en cas de suppression d’une partie d’un composant.

## Exemple d’un composant CSS type

```mod-code
.component {
  ...
}

.component-descendent {
  ...

  @media {
    ...
  }
}

.component {
  &.mod-big {
    ...
  }
}

.component {
  &.is-active {
    ...
  }
}
```

# Encapsulation des composants

Dans la mesure du possible, le style des composants ne doivent pas communiquer entre eux, ceci afin d’éviter l’effet “pelote de laine”, et ainsi rendre complexe la maintenabilité du design.

Un composant peut cependant en contenir un autre.

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- ```mod-code
  &lt;div class=”grid”&gt;
    &lt;div class=”grid-xs6”&gt;
      &lt;div class=”card”&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
```

</div>
<div class="markdown-block mod-negative">

- ```mod-code
  &lt;div class=”grid”&gt;
    &lt;div class=”grid-xs6 card”&gt;
    &lt;/div&gt;
  &lt;/div&gt;
```

</div>
</div>

# Particularités des composants Angular

## Déclaration double

Il peut parfois être nécessaire d’appliquer des modifications à un composant existant à l'intérieur d’un composant Angular.  
Dans ce cas, on acceptera de définir le style à 2 endroits via 2 classes distinctes.
La première doit porter le nom du composant source, la seconde des modifications contextuelles.

Exemple d’un bouton dans un composant leave-management.component.html
```mod-code
&lt;button class=”button leaveManagement-confirm”&gt;
  ...
&lt;/button&gt;
```

## Structure

Dans la mesure du possible, utiliser le déclaration :host pour le style à la racine du composant. Des classes peuvent être ajoutées via l’[host binding](https://angular.io/api/core/HostBinding) d’Angular.
Cela permet d’éviter des niveaux de DOM inutiles.

On évite aussi la multiplication des &#42;ngIf. On peut notamment s’appuyer sur les ng-container pour encapsuler plusieurs éléments dont l’affichage répond à la même condition.

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- ```mod-code
  &lt;ng-container *ngIf=”isDisplayed”&gt;
    &lt;div&gt;...&lt;/div&gt;
    &lt;div&gt;...&lt;/div&gt;
  &lt;/ng-container&gt;
```

</div>
<div class="markdown-block mod-negative">

- ```mod-code
  &lt;div *ngIf=”isDisplayed”&gt;...&lt;/div&gt;
  &lt;div *ngIf=”isDisplayed”&gt;...&lt;/div&gt;
```

</div>
</div>

## host-context / ::ng-deep

Lorsque le contexte impose la modification d’un composant Angular, on privilégiera l’utilisation du host-context à celui du ::ng-deep.
Cela permet notamment de garder le style du composant à l'intérieur de ce dernier.  
Qui plus est, ::ng-deep est voué à être déprécié.

# Mixins

Les mixins permettent de factoriser du code afin de l’exploiter à divers endroits. Elles sont utiles mais complexifient grandement la compréhension du style (style d’un même composant partagé entre plusieurs sources, possibilité d'altérer un autre composant sans le vouloir, plus coûteux pour remonter à la source…).  
Elles sont donc à utiliser avec parcimonie afin d’éviter l’effet “pelote de laine”.

On privilégiera donc l’utilisation de mixin sur du code partagé à de nombreux endroits, qui demanderait beaucoup de temps de réécriture (ex. dégradé de fond, style erreur, etc.)

# Utilitaires

Les utilitaires, ou “utilities”, sont des déclarations universelles, utilisables partout.  
Elles ont des utilisations variées comme la gestion des marges, du padding, de l’alignement, du retour à la ligne, etc.  
Elles sont les seules à utiliser la règle !important afin d’écraser le style à coup sûr.

# Variables Lucca Front

Lucca Front embarque de nombreuses [variables globales](components/integration/theming) ou liées aux composant qui peuvent être utilisées et écrasées. Il est nécessaire de les utiliser systématiquement, et ce, dans une logique de maintenabilité.

Exemple :

```mod-code
.class {
  left: _component("navSide.width");
  top: calc(#{_theme("commons.banner-height")} + #{_component("navSide.mobile.toggle-height")});
}
```

# Style consistant

Afin de rendre l’édition et la lisibilité du style plus aisé pour tous, il est important de respecter quelques bonnes pratiques :

- Pas d'espace avant les “:”, mais un espace après.
- Indentation par tabs
- Une ligne par déclaration
- Une ligne sauté avant chaque nouvelle classe
- Pas de prefix (utilisation d’outils comme autoprefixer)
- Déclarations classées par ordre alphabétique
- Utiliser les reductions de style (ex : 0 1rem à la place de 0 1rem 0 1rem, ou .15 à la place de 0.15)
- Nombres hexadécimaux en majuscules
- Pas d’imbrication du nom des classes (ex : &-descendant)
- kebab + camel (Lucca Case ?)  

Exemple :

```mod-code
.emptyState {
  margin: 5rem auto;
  max-width: 30rem;
  padding: .5rem 2rem;
  text-align: center;
}

.emptyState-title {
  color: #AAAAAA;
}

.emptyState-description {
  color: #AAAAAA;
  margin-bottom: 2rem;
}
```

Le respect du style permettra de rester dans un environnement propre, faisant ainsi écho à la [théorie des carreaux cassés](https://www.vanschneider.com/the-broken-window-theory).

# Shame.scss

Dans chaque projet, un fichier [shame.scss](https://csswizardry.com/2013/04/shame-css/) est créé.  
Ce fichier permet de répondre aux problématiques de délais des mises à jour de Lucca Front, ou simplement de corriger un bug rapidement sans générer de la dette qui sera oubliée dans le futur.  
Il permet également aux contributeurs Lucca Front de tracer facilement ce code, afin de le supprimer.

Ce fichier est divisé en 3 sections :

```mod-code
// Next update (numéro de prochaine maj)
  Code fixé dans la prochaine version de Lucca Front

// In roadmap
  Bugs ou features référencés dans la roadmap Lucca Front, mais pas encore traités

// Not logged
  Bugs ou features pas encore répertoriés par Lucca Front  

```

Ce fichier doit être mis à jour à chaque update de Lucca Front.

# Structure

Dans une architecture Angular simple, le style est appelé via une source unique via un fichier généralement appelé style.scss.

```mod-code
@import
  // LUCCA FRONT SCSS & NG
  "~@lucca-front/scss/src/main.overridable.scss",
  "~@lucca-front/ng/style/main.overridable.scss",
  "~@lucca-front/ng/material/style/main.overridable.scss",

  // GENERAL
  "layout",

  // APP CSS COMPONENTS
  "components/confirm-footer",
  "components/editable",
  ...

  // VENDOR COMPONENTS
  "components/vendor/quill",
  "components/material/slider",
  ...

  // LUCCA FRONT COMPONENTS EXTENSIONS
  "components/lucca-front/button",
  "components/lucca-front/breadcrumb",
  ...

  // MIXINS
  "mixins”

  // UTILITIES
  "utilities”

  // TRASH
  "ie11",
  "shame";
```

## Où placer mon style ?

- Un composant CSS réutilisé à plusieurs endroit dans l’application pourra être placé dans la section “app css components”
- Un extension d’un composant Lucca Front pourra être placé dans la section “Lucca front components” (ex : ajout d’un mod).
- Du style exclusivement lié à un composant de l’application, sera placé dans le fichier scss du composant, afin de le garder encapsulé.
- Du style répondant à un besoin ou un fix Lucca Front sera placé dans le fichier shame.scss afin d’être traité par un contributeur Lucca Front.

Il est donc important de se demander si tout ce qui est placé dans un composant concerne bien le composant en question ou un besoin plus générique.  
De la même manière, se demander si un composant ne peut pas être sous-découpé en plusieurs sous-composants.

# Résumé
- Nommage des composants : composant-descendant-descendant
- Utilisation du kebab case + camelCase pour les descendants à plusieurs mots
- Modifiers : .componsant-descendant.mod-... — pas de .mod- isolé
- Etats : .componsant-descendant.is-... — pas de .is- isolé
- Placer les media queries directement dans les déclarations
- Utiliser les mixins et imports avec parcimonie
- Utilities préfixés en u-...
- Multiplier les composants et les petits fichiers
- Pas d’ID, de sélecteur HTML
- Rester propre et régulier et rendre le fichier plus clair pour le prochain
