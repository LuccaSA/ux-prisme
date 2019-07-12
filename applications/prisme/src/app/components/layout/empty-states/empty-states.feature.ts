import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-empty-states',
	templateUrl: './empty-states.feature.html',
})
export class EmptyStatesFeature {
	infos: IFeatureInfos = {
		title: 'Empty State',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/layout/empty-states/empty-states.guidelines.md',
		description: "Les empty states sont des éléments à positionner en cas d'absence de contenu. Ils peuvent être utiles et suggérant des actions à réaliser.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			}
		]
	};

	constructor(private themeService: ThemeDocumentationService) {}
}
