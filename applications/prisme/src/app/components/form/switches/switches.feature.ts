import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { SizesComponent } from './sizes/sizes.example';
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
				title: 'Taille',
				component: SizesComponent,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
			},
		],
		theme: this.docApi.get('switch')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
