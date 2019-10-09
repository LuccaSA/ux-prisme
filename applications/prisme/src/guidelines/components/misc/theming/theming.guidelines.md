## Mise en place

Lucca-front va chercher 6 fichiers de theming distincts :

- `breakpoints.override.scss`
- `commons.override.scss`
- `components.override.scss`
- `icons.override.scss`
- `palettes.override.scss`
- `sizes.override.scss`

Ces fichiers existent par défaut dans le dossier `src/overrides` du package `SCSS`. Pour pouvoir les référencer et les overrider avec les votres il vous faut donc ajouter les bons chemins dans votre fichier `angular.json`

```is-code
...
"architect": {
	"build": {
		...
		"stylePreprocessorOptions": {
			"includePaths": [
			"path to your own override folder" // must be first
			"path_to_node_modules/@lucca-front/scss/src/overrides",
			]
	},
	...
}
...
```

## Syntaxe

Lucca-Front s'appuie sur des maps pour gérer les variables de thèmes. La syntaxe pour créer un nouveau set de variables est la suivante :

```is-code
$nomdemap: (
    clé-1: valeur,
    sousmap-1: (
        sousmap-1-clé1: valeur
    )
)

$theme: _set($theme, "nom-du-set", $nomdemap)
```

La commande `_set` va étendre l'existant. Si une variable existe déjà, elle sera remplacée, si elle n'existe pas elle sera simplement ajouté à l'existant.