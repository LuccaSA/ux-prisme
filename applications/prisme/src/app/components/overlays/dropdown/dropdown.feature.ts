import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisabledExample } from './disabled/disabled.example';
declare var require: any;
@Component({
	selector: 'pri-dropdown',
	templateUrl: './dropdown.feature.html',
})
export class DropdownFeature {
	infos: IFeatureInfos = {
		title: 'Dropdown',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'disabled',
				component: DisabledExample,
				code: require('!!prismjs-loader?lang=markup!./disabled/disabled.example.html'),
			},
		],
		packages: [
			'NG'
			
		],
		
		
		
		
		
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
