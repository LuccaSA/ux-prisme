import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { CompactExampleComponent } from './compact/compact.example';
declare var require: any;

@Component({
	selector: 'pri-breadcrumbs',
	templateUrl: './breadcrumbs.feature.html',
})
export class BreadcrumbsFeature {
	infos: IFeatureInfos = {
		title: `Fil d'Ariane`,
		packages: ['SCSS'],
		description: "Le fil d'Ariane permet de se localiser dans l'application et propose un accès rapide aux différents niveaux du chemin emprunté.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Compact',
				component: CompactExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./compact/compact.example.html'),
				extra: "Le <code class='code'>.mod-compact</code> permet de réduire le fil d'Ariane lorsqu'il n'est que sur un seul niveau, ce qui fonctionne bien lorsque le titre de la page est repris par la suite."
			},
		],
	};
	constructor(private themeService: ThemeDocumentationService) { }
}
