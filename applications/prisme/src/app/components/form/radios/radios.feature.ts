import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
declare var require: any;

@Component({
	selector: 'pri-radios',
	templateUrl: './radios.feature.html',
})
export class RadiosFeature {
	infos: IFeatureInfos = {
		title: 'Radios',
		packages: ['SCSS'],
		description: "Les radios servent à afficher une liste courte d'options pour laquelle une seule option est sélectionnable.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: `
				Les radios réagissent aux attributs standards HTML "checked" et "disabled"
				`
			},
			{
				title: 'En ligne',
				component: InlineExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inline/inline.example.html'),
				mod: 'white',
				extra: `
				Outside radiosfield, you can add "mod-inline" class to your radio to set it inline
				`
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				mod: 'white',
				extra: `Les couleurs de votre palette sont éditables via votre
				<a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
		],
		theme: this.docApi.get('radio')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
