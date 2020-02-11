import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { ClickableExample } from './clickable/clickable.example';
declare var require: any;
@Component({
	selector: 'pri-tags',
	templateUrl: './tags.feature.html',
})
export class TagsFeature {
	infos: IFeatureInfos = {
		title: 'Tags',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Clickable',
				component: ClickableExample,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.example.html'),
			},
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
