import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-date',
	templateUrl: './date.feature.html',
})
export class DateFeature {
	infos: IFeatureInfos = {
		title: 'Date',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		packages: [
			
			
		],
		
		
		
		
		
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
