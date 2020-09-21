# Affichage

Les icônes d'actions doivent être masquées par défaut. Elles s'affichent au survol de la ligne/de l'objet.

# Indication au survol

Une icône d’action doit systématiquement être associée d’un tooltip court expliquant l’action à réaliser.

# Accessibilité

Une icône véhicule de l’information : il faut y proposer une alternative textuelle pour ceux qui n’ont pas accès au visuel de la page (les robots, les aveugles, etc.). 
+ L'icône doit posséder l'attribut `aria-hidden="true"` pour que les lecteurs d'écran l'ignore
+ Un texte masqué visuellement (classe `u-mask`) doit être placé dans le bouton afin de signifier la fonction de ce dernier

# Nombres

Le nombre maximum d'icônes d'action est de trois. Au delà, il est conseillé de rentrer les actions au sein de la vue détaillée de l'objet
