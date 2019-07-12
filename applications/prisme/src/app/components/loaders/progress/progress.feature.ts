import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { IndeterminateExampleComponent } from './indeterminate/indeterminate.example';
import { StatusExampleComponent } from './status/status.example';
declare var require: any;

@Component({
	selector: 'pri-progress',
	templateUrl: './progress.feature.html',
})
export class ProgressFeature {
	infos: IFeatureInfos = {
		title: 'Barre de progression',
		packages: ['SCSS'],
		description: "Les barres de progression servent à indiquer le chargement déterminé d'une page ou d'un élément d'interface.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Indéterminé',
				component: IndeterminateExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./indeterminate/indeterminate.example.html'),
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
			},
		],
		theme: this.docApi.get('progress')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
