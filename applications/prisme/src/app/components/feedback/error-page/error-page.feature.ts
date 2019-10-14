import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-error-page',
	templateUrl: './error-page.feature.html',
})
export class ErrorPageFeature {
	infos: IFeatureInfos = {
		title: 'Page d\'erreur',
		description: 'Les pages d\'erreur permettent de gérer les 4XX et les 5XX. Des images sont disponibles par soft',
		guidelines: 'guidelines/components/feedback/error-page/error-page.guidelines.md',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		packages: [
			"SCSS"
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
