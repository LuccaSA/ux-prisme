import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { MultipleExample } from './multiple/multiple.example';
declare var require: any;
@Component({
	selector: 'pri-department-select',
	templateUrl: './department-select.feature.html',
})
export class DepartmentSelectFeature {
	infos: IFeatureInfos = {
		title: 'Sélecteur de département',
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
			},
			{
				title: 'Multiple',
				component: MultipleExample,
				code: require('!!prismjs-loader?lang=markup!./multiple/multiple.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./multiple/multiple.example.ts'),
			},
		],
		packages: [
			'NG',
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
