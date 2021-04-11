import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { PerPageExampleComponent } from './per-page/per-page.example';
declare var require: any;
@Component({
	selector: 'pri-pagination',
	templateUrl: './pagination.feature.html',
})
export class PaginationFeature {
	infos: IFeatureInfos = {
		title: 'Pagination',
		packages: ['SCSS'],
		description: "La pagination est utilisée pour répartir un contenu ou des données en plusieurs pages numérotées, et de naviguer entre ces différentes pages.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Par page',
				component: PerPageExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./per-page/per-page.example.html')
			},
		],
		theme: this.docApi.get('pagination')
	};

	constructor( private docApi: ThemeDocumentationService) { }
}
