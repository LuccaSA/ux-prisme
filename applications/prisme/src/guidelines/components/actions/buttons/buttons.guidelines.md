# Label

- Privilégier les verbes d’action, à l’infinitif
- Éviter les libellés vagues comme “OK”, “Oui” ou ”Non”  

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- Supprimer
- Créer un utilisateur

</div>
<div class="markdown-block mod-negative">

- OK
- Ajoutez un utilisateur

</div>
</div>

# Action principale

Une page ne doit présenter qu'un seul bouton d'action principale pour faciliter la compréhension de l'action attendue.

# Types de boutons

- Le bouton secondaire sert à réaliser une action importante, mais décorrélée du parcours principal
- Le bouton “lien” sert à réaliser une action optionnelle ou fermer du contenu

# Ordre des boutons

Lorsque des boutons d’action et d’annulation sont utilisés ensemble, le bouton d’action doit toujours être placé à gauche.
<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive mod-image">

![à faire](guidelines/components/actions/buttons/images/order-do.png)

</div>
<div class="markdown-block mod-negative mod-image">

![à éviter](guidelines/components/actions/buttons/images/order-dont.png)

</div>
</div>


# Position dans la page

- Si un bouton correspond à la création d’une occurrence d’une liste d’objets, on le place en haut de liste, afin qu’il reste toujours visible
- Un bouton de soumission de formulaire sera quant à lui placé en bas à droite du formulaire

# Changelog
#### LF 4.0
- [breaking] Les `.button.size-small`/`.button.size-smaller` sont remplacés par `.button.mod-small`
- [breaking] Les `.button.size-big` prennent la taille d’un bouton standard
- [remove/new] Suppression du `.button.mod-white`, remplacé par `.button.mod-outline`
- [remove/new] Suppression du `.button.mod-lesser`, remplacé par `.button.mod-outline`
