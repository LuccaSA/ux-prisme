import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { SupportedExample } from './supported/supported.example';
import { FramedExample } from './framed/framed.example';
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
				title: 'basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'supported',
				component: SupportedExample,
				code: require('!!prismjs-loader?lang=markup!./supported/supported.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./supported/supported.example.ts'),
				description: `Ensemble des types d'inputs offerts par le module LuFormlyModule`
			},
			{
				title: 'framed',
				component: FramedExample,
				code: require('!!prismjs-loader?lang=markup!./framed/framed.example.html'),
				tsCode: require('!!prismjs-loader?lang=markup!./framed/framed.example.ts'),
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
