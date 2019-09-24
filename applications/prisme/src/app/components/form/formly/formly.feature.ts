import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-formly',
	templateUrl: './formly.feature.html',
})
export class FormlyFeature {
	infos: IFeatureInfos = {
		title: 'Formly',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
		],
		packages: [
			'NG',
		],
		description: `<a href="https://ngx-formly.github.io/ngx-formly/">Formly</a> est une bibliotheque permettant de generer dynamiquement des formulaires a partir d'une configuarion js/json. Lucca-front offre un ensemble de templates pour des fields standard`
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
