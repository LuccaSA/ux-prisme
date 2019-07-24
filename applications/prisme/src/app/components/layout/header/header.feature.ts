import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { StickyExample } from './sticky/sticky.example';
import { NavigationExample } from './navigation/navigation.example';
declare var require: any;
@Component({
	selector: 'pri-header',
	templateUrl: './header.feature.html',
})
export class HeaderFeature {
	infos: IFeatureInfos = {
		title: 'Header',
		packages: ['SCSS'],
		description: "Placé en haut de page, le header apporte des informations générales sur le contenu de la page. Il peut également servir d'élément de navigation.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Sticky',
				component: StickyExample,
				code: require('!!prismjs-loader?lang=markup!./sticky/sticky.example.html'),
				extra: "En cas de scroll, le header sticky reste accroché en haut de page afin d'être toujours visible"
			},
			{
				title: 'Navigation',
				component: NavigationExample,
				code: require('!!prismjs-loader?lang=markup!./navigation/navigation.example.html'),
			},
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
