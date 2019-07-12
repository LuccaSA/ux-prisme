# Types d’inputs et usages

## [Checkbox](/components/form/checkboxes)

- Sélection parmi une liste de moins de 6 options
- Question fermée

## [Switch](/components/form/switches)

- Affichage / masquage d’un module ou d’un contenu
- Changement immédiat dont l’action est décorrélée du bouton enregistrer

## [Radio](/components/form/radios)

- Choix unique parmi 2 options

## [Radio bouton](/components/form/radio-buttons)

- Choix unique parmi 3 à 6 options

## [Select](/components/form/select)

- Sélection unique ou multiple parmi une liste de plus de 6 options

# Groupes

Les formulaires longs doivent être découpés en groupes logiques et disposer d’un titre afin de favoriser la lecture et la compréhension de ce dernier.

# Retour à la ligne

Par défaut, un retour à la ligne à la ligne à la fin de chaque input est à privilégier.
Il est cependant possible de placer sur la même ligne des champs s’ils sont liés entre eux comme prénom/nom, ou une période avec date de début et date de fin.

# Actions

Les actions de formulaire sont situés en bas à droite du formulaire.

# Champs obligatoires / optionnels

Selon le nombre de champs concernés, on indiquera les champs obligatoires ou optionnels.
Les **champs obligatoires** sont indiqué par la présence d’un astérisque à la fin du label.
Les **champs optionnels** sont indiqué par la présence du mot *(optionnel)* à la fin du label.

# Format de saisie
Si un format est attendu, celui-ci doit être indiqué. Il peut être indiqué via le placeholder si celui est simple, ou s’il est plus complexe, dans un message plus complet sous le champ.

# Longueur des champs

La longueur des champs de saisie doivent donner une indication sur la longueur du contenu attendu.

# Style des inputs

Plusieurs styles sont proposés (classique, material, framed, compact). Si leur utilisation est libre, il convient de ne pas les mélanger au sein d’un même formulaire et peuvent être plus ou moins adaptés selon le type de formulaire.

- Le mode compact est plus adapté aux formulaires très long dans lequel l’utilisateur opère un “scan” des labels, sans forcément remplir tous les champs
- Le mode material est utile sur des champs de saisie à l'intérieur d’une phrase

# Sauvegarde et validation en ligne

La validation d’un formulaire se fait généralement via un bouton de soumission. Cependant dans le cas d’un long formulaire, il est conseillé de faire une **validation en ligne** afin d’éviter des lourdes pertes de saisie. Dans ce cas, une indication de sauvegarde sera systématiquement utilisée.

# Gestion des erreurs

- Par défaut, un champ vide est valide, même s’il est obligatoire
- La vérification du champs est effectuée lors de la perte du focus (l’erreur doit alors être affichée sous le champs)
- Dès que la valeur saisie est bonne l’erreur disparaît (dans le cas d’un champ sans contrainte de format, l’erreur disparaît dès le premier caractère saisi)
- Le bouton de soumission de soumission est actif, de manière à déclencher l’état d’erreur sur les champs obligatoire
- Si le formulaire est long, une validation apportant des erreurs doit activer un scroll automatique jusqu’à la première erreur
