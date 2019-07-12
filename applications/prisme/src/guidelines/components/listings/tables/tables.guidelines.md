# Alignement
## Horizontal

- Par défaut les éléments sont ferrés à gauche
- Les colonnes de nombres sont ferrés à droite s’ils sont quantitatifs
- Les nombres décimaux sont alignés sur la virgule, grâce aux pipes [luNumber](/components/misc/number)

<!-- Plus d'informations sur le format des nombres -->

## Vertical

- Par défaut, le contenu des lignes sont centrées verticalement
- Dans le cas où un tableau dispose d’un affichage complexe (nombreuses lignes dans une même cellule, sous-lignes, etc.) On préférera un alignement en haut

# Actions

## Actions générales

- Les actions générales (créer, exporter, etc.) sont à placer au-dessus à droite du tableau
- Les actions de validation, par exemple dans le cas d’un workflow à plusieurs étapes, sont à placer en bas (ces actions peuvent être dockées en bas de page si nécessaire)

## Actions de ligne

- Les actions liées à la ligne (édition, suppression, etc.) sont à placer à droite de la ligne
- Si ces actions sont secondaires, elles apparaissent au survol de la ligne, afin d’éviter de surcharger le tableau

# Cliquable

Si une entrée de tableau donne accès à du contenu supplémentaire, on privilégie son accès via un clic sur l’ensemble de la ligne. Cette ligne doit alors être mise en valeur au survol.

# Sélection

Lorsqu’une sélection est possible, on utilise une checkbox à gauche de chaque ligne. On met alors en avant chaque ligne sélectionnée grâce à une couleur de fond. Dans l’en-tête, on ajoute une checkbox permettant de sélectionner / désélectionner l’ensemble.
Si une ligne peut être cliquable et sélectionnable, la sélection se fait uniquement en interagissant avec la checkbox.
Si la ligne n'est pas cliquable, la sélection se fait sur l'ensemble de la ligne.

# Pagination

Lorsqu’un tableau comprend de nombreuses entrées, une pagination est nécessaire.

- Le nombre de lignes par page peut varier, mais on privilégiera des valeurs entre 20 et 50 lignes
- La pagination est alors à placer en bas à droite du tableau (elle peut être dockée si nécessaire)
- En cas de pagination, il est souvent nécessaire d’appliquer des filtres au tableau

# Tri

- Les données sont triables sur tous les attributs pertinents
- Le tri par défaut est indiqué par une flèche (ascendante si on est par ordre croissant, descendante si on est par ordre décroissant) au niveau du titre de la colonne
- Au survol d'une autre colonne sur laquelle le tri peut être fait, une flèche apparaît également

# Dans une carte ou popup

Quand un tableau est imbriqué dans une carte ou un popup on aligne alors la table avec l'extrémité du conteneur et on aligne le texte de la première et dernière cellule de chaque ligne sur les marges du conteneur.

# Edition

Si un tableau ne propose pas d’action au clic sur une ligne et que l’édition de valeur est centrale, il est possible de faire de l’édition en contexte, à la cellule ou à la ligne.

## Edition d'une ligne

- Dans le cas d’une édition de ligne en contexte, la ligne doit présenter un bouton d’édition à droite apparaissant au survol de la ligne
- En cliquant sur ce bouton, les valeurs de la ligne sont transformés en inputs, et des boutons de sauvegarde et d’annulation viennent remplacer le bouton d’édition

## Édition d'une cellule

- Dans le cas d’une édition de cellule en contexte, la cellule doit être mise en valeur au survol via sa couleur de fond et présenter un pictogramme d’édition accolé au texte
- Au clic, un dropdown apparaît en dessous ou au dessus de la cellule, contenant la/les valeur(s) à modifier, un bouton d’enregistrement et un bouton d’annulation
- Cliquer en dehors du dropdown revient à annuler l’opération

# Responsive

Afin d’afficher au mieux les données d’un tableau sur les petites résolutions, plusieurs options sont possibles.

- Si de nombreuses données sont importantes et que la page est vouée à être utilisée sur des petites résolutions (il peut être nécessaire de basculer sur une autre mise en forme adaptée, comme l’utilisation de cartes)
- Si certaines colonnes sont secondaires, il est possible de les masquer
- Si le tableau est destiné à un usage administratif avancé, un simple scroll horizontal est possible

# Lignes et colonnes dockées

Lorsqu’un tableau est composé de nombreuses lignes ou colonnes, il arrive d’avoir besoin de scroller pour consulter les données.
Dans ce cas, il est conseillé de docker l’en tête du tableau, afin de rendre la lecture des données compréhensible.
Il est possible de docker les premières colonnes si ces valeurs sont importantes à la compréhension de la ligne (Nom collaborateur, identifiant, etc.).
