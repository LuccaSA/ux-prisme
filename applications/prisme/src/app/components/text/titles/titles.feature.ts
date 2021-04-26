import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-titles',
	templateUrl: './titles.feature.html',
})
export class TitlesFeature {
	infos: IFeatureInfos = {
		title: 'Titres',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/texte/titres/titres.guidelines.md',
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		theme: this.docApi.get('typography'),
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
