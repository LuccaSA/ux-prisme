# Bouton d’enregistrement

- Par défaut, la sauvegarde des données se fait par un bouton d’enregistrement
- En cas de changement de page ou de rafraîchissement, les données modifiées sont perdues

## Enregistrement et onglets

Si des données à enregistrer sont présentes dans des onglets, la sauvegarde ne se fera que pour l’onglet en cours.
Si l’utilisateur tente de quitter la page alors que des données ont été modifiées, une fenêtre de confirmation viendra l’avertir de la perte possible de données.
Cette fenêtre présentera un bouton d’enregistrement principal, et un bouton secondaire pour refuser la sauvegarde.
En cas d’enregistrement, l’utilisateur sera redirigé vers la page ciblée.

# Autosave

Lorsqu’un formulaire se compose de nombreuses entrées, ou de champs dans lesquels des textes longs peuvent être saisis, il peut-être nécessaire d’avoir recours à l’autosave afin de limiter les risques de pertes de données.
Dans ce cas, l’enregistrement se fait alors 2 secondes après la dernière frappe de l’utilisateur. Un loader vient alors indiquer que la donnée est en cours d’enregistrement, suivi de l’[apparition d’un pictogramme](/components/form/textfields?example=validation-feedback) de succès ou d’échec.
