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
		title: 'DepartmentSelect',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'multiple',
				component: MultipleExample,
				code: require('!!prismjs-loader?lang=markup!./multiple/multiple.example.html'),
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
