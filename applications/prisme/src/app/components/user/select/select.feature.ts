import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-select',
	templateUrl: './select.feature.html',
})
export class SelectFeature {
	infos: IFeatureInfos = {
		title: 'Select',
		description: "LuUserSelect permet de sortir l'ensemble des collaborateurs d'une instance sous la forme d'un select.",
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
				mod: 'white',
			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuUserSelectInputComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
