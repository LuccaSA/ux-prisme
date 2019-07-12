import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-radio-buttons',
	templateUrl: './radio-buttons.feature.html',
})
export class RadioButtonsFeature {
	infos: IFeatureInfos = {
		title: 'Boutons radios',
		description: "Les boutons radios servent à afficher une liste courte d'options pour laquelle une seule option est sélectionnable.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: `Peut être utilisé comme checkbox`,
			},
		],
		packages: [
			'SCSS',
		],
		theme: this.docApi.get('radioButtons'),
	};

	constructor(
		private docApi: ThemeDocumentationService,
	) {}
}
