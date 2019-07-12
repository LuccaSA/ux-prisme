# Type d'actions et usages

## [Bouton](/components/actions/buttons)

Le bouton représente une action importante propre à la page comme la création d’un objet ou le changement d’état d’un élément.

## [Icône d’action](/components/actions/action-icons)

L’icône d’action représente une action secondaire et/ou répétitive. Il sert notamment pour les actions de type suppression, édition, etc. au sein d’une liste d’éléments.

## [Lien](/components/actions/links)

Le lien sert à accéder un contenu hors de la page ou de l’application. Il peut être également utile pour afficher ou masquer du contenu ou pour traiter une action secondaire.

# Feedbacks

Chaque action doit être suivie d’un ou plusieurs feedbacks. Il existe deux cas.

Si il n'y a pas de changement de page, les feedbacks doivent avoir lieu dans le "locus of attention". Ils peuvent prendre plusieurs formes et être multiple: 

- Animation d’un objet supprimé.
- Passage du bouton en état de chargement, puis de succès ou d’erreur, ainsi qu’un court texte expliquant l’action réalisée.
- Mise en valeur d’un objet généré grâce à une animation et une couleur de fond visible.

Dans le cadre d'un changement de page après l'action, le feedback prend la forme d'un [toast](components/feedback/toasts) positionné en haut à droite de l'écran.
