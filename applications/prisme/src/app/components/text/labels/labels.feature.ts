import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-labels',
	templateUrl: './labels.feature.html',
})
export class LabelsFeature {
	infos: IFeatureInfos = {
		title: 'Labels',
		packages: ['SCSS'],
		description: "Les labels sont des mots clefs servant à classifier ou à accoler un état à un élément textuel.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
			},
		],
		theme: this.docApi.get('label')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
