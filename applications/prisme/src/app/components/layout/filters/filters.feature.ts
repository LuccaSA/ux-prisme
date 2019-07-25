import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { StickyExample } from './sticky/sticky.example';
declare var require: any;
@Component({
	selector: 'pri-filters',
	templateUrl: './filters.feature.html',
})
export class FiltersFeature {
	infos: IFeatureInfos = {
		title: 'Filtres',
		packages: ['SCSS'],
		description: "Placé en haut de page, la barre de filtre permet de placer différents inputs afin de filtrer les données présentes dans la page.",
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
				extra: "En cas de scroll, la barre de filtre sticky reste accrochée en haut de page afin d'être toujours visible"
			},
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
