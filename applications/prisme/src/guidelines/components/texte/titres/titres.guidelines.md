# Accessibilité

- Pour faciliter le travail de construction de plans de documents de nos pages, la sémantique des titres et leurs styles graphiques peuvent être dissociés avec ces classes utilitaires : `.u-h1, u-h2…`.
- Des <i>mixins</i> `@include hx, @include h1, @include h2…` permettent également de pouvoir associer des styles graphiques différents en fonction du <i>responsive</i> ; le <i>mixin</i> `@include hx` regroupant les styles communs à tout les niveaux de titres.