import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { PartialExampleComponent } from './partial/partial.example';
import { BigExample } from './big/big.example';
declare var require: any;

@Component({
	selector: 'pri-checkboxes',
	templateUrl: './checkboxes.feature.html',
})
export class CheckboxesFeature {
	infos: IFeatureInfos = {
		title: 'Checkboxes',
		packages: ['SCSS'],
		description: "Les checkboxes servent à faire une sélection parmi une liste d'options. Elles peuvent également servir à poser des questions fermées.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: `
				Les checkboxes réagissent aux attributs standards HTML "checked" et "disabled"
				`
			},
			{
				title: 'En ligne',
				component: InlineExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inline/inline.example.html'),
				mod: 'white',
				extra: `
				Outside checkboxesfield, you can add "mod-inline" class to your checkbox to set it inline
				`
			},
			{
				title: 'Partiel',
				description: `Ce mod sert à afficher un état incomplet sur une checkbox de type "Sélectionner tout".`,
				component: PartialExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./partial/partial.example.html'),
				mod: 'white',
			},
			{
				title: 'Big',
				component: BigExample,
				code: require('!!prismjs-loader?lang=markup!./big/big.example.html'),
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
		theme: this.docApi.get('checkbox')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
