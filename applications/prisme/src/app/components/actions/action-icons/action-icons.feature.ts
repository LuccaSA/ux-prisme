import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';
import { LoadingExample } from './loading/loading.example';
import { InvertedExample } from './inverted/inverted.example';
import { PalettesExample } from './palettes/palettes.example';
declare var require: any;

@Component({
	selector: 'pri-action-icons',
	templateUrl: './action-icons.feature.html',
})
export class ActionIconsFeature {
	infos: IFeatureInfos = {
		title: 'Icônes d\'action',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/actions/action-icons/action-icons.guidelines.md',
		description: "L’icône d’action représente une action secondaire et/ou répétitive. Il sert notamment pour les actions de type suppression, édition, etc. au sein d’une liste d’éléments.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
			},
			{
				title: 'Disabled',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
				mod: 'white',
				extra: `Vous pouvez désactiver un icon d'action avec la classe <code class= "code">is-disabled</code>, mais vous ne pourrez plus utiliser de tooltip`
			},
			{
				title: 'Chargement',
				component: LoadingExample,
				code: require('!!prismjs-loader?lang=markup!./loading/loading.example.html'),
				mod: 'white',
			},
			{
				title: 'Inversé',
				component: InvertedExample,
				code: require('!!prismjs-loader?lang=markup!./inverted/inverted.example.html'),
				mod: 'dark',
			},
			{
				title: 'Palettes',
				component: PalettesExample,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`,
				mod: 'white',
			}
		],
		theme: this.themeService.get('actionIcon')
	};
	constructor(private themeService: ThemeDocumentationService) { }

}
