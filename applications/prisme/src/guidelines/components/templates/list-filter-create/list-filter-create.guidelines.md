# Layout principal
![layout](guidelines/components/templates/list-filter-create/images/layout.png)

## Container
- La largeur des éléments sous la barre d'administration peut être variable en fonction de la quantité d’informations à afficher.

## Barre d’administration
- Cette barre sert à afficher les données liées à l’administration, comme la sélection d’un collaborateur. Elle est optionnelle.

## Titre et description
- Ils permettent d’aider l’utilisateur à comprendre l’utilité du module et sont optionnels.
- Ils sont placés entre la barre d’administration et les filtres.

## Filtres
- Permettent de filtrer les données listées
- Sont en nombre non défini
- Peut contenir les composants : textfields, boutons radio, selects, checkboxes, boutons, switches
- Doit pouvoir afficher des alertes / erreurs sur les filtres : on ajoute une icône à côté des filtre et l’alerte / erreur est détaillée dans un tooltip
- En cas de scroll, les filtres se fixent en haut, sous la barre d’administration, afin d’être toujours visibles. Ils passent alors sur fond blanc.

## Recherche
- Permet de rechercher des informations dans la liste des données
- Les chaînes de caractères trouvées doivent être mises en surbrillance

## Actions
- Permettent de réaliser des actions générales (Création, export, etc.)
- Peut contenir deux boutons et des icônes d’actions
- En cas d’un grand nombre d’actions, il est conseillé d’utiliser un bouton avec actions secondaires

## Données
- Conteneur libre, destiné à recevoir des données type cartes, listes, tableaux…

# Filtres
- Sur les petites résolutions, un bouton permet d'ouvrir un dropdown donnant accès à l’ensemble des filtres.
- Une indication sous la forme d’une pastille vient indiquer le nombre de filtres actifs.
- Dans le cas où l’on souhaite afficher des alertes / erreurs en lien avec le filtre, l’alerte prend la forme d’un callout qui se positionne au-dessus de la liste des éléments filtrés.
- En cas de modification des filtres, seule la section “données” doit être rechargée.
- En cas d’erreurs ou d’alertes, le message est écrit en toute lettre à l'intérieur du dropdown.  

(visuel)

**Alternative** : Il est possible d’afficher un certain nombre de filtres en fonction de la place disponible et d’avoir à droite un dropdown de type “5 autres filtres”.

## Données
En cas de manque de place horizontale, deux méthodes peuvent être utilisées :
- Si les données ne sont pas destinées à être affichées sur des petites résolutions, on privilégiera un simple scroll horizontal
- Si les données sont destinées à être affichées sur des petites résolutions, il sera nécessaire de prévoir un affichage alternatif, comme la transformation d’un tableau en cartes

# Empty State
En cas d’absence de données, un placeholder doit être présent sous les filtres. On favorisera un visuel (générique ou non) suivi d’une titre et d’une description. Ces derniers devront préciser si l’absence de données est dûe à l’utilisation de la recherche ou d’un filtre.

(visuel)

# Loading
Lors du premier chargement des données ou de l’application d’un filtre, un loader avec une description vient remplacer les données.

(visuel)
