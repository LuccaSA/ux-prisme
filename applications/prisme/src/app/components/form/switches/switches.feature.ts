import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
declare var require: any;

@Component({
	selector: 'pri-switches',
	templateUrl: './switches.feature.html',
})
export class SwitchesFeature {
	infos: IFeatureInfos = {
		title: 'Switches',
		packages: ['SCSS'],
		description: "Les switches servent à poser une question fermée. Ils sont principalement utilisés pour suggérer l'activation ou la désactivation d'une fonctionnalité.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: `
				Les switches réagissent aux attributs standards HTML "checked" et "disabled"
				`
			},
			{
				title: 'En ligne',
				component: InlineExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inline/inline.example.html'),
				mod: 'white',
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
		theme: this.docApi.get('switch')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
