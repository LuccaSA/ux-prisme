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
		description: "Les liens servent à changer de page ou à réaliser des actions secondaires.",
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
