import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
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
		],
	};
	constructor(private themeService: ThemeDocumentationService) { }
}
