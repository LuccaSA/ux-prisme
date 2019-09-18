import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-links',
	templateUrl: './links.feature.html',
})
export class LinksFeature {
	infos: IFeatureInfos = {
		title: 'Liens',
		packages: ['SCSS'],
		description: "Le lien sert à accéder un contenu hors de la page ou de l’application. Il peut être également utile pour afficher ou masquer du contenu ou pour traiter une action secondaire.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			}
		],
		theme: this.themeService.get('links')
	};

	constructor(private themeService: ThemeDocumentationService) {}

}
