import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { ToggleExampleComponent } from './toggle/toggle.example';
import { KillableExampleComponent } from './killable/killable.example';
import { ModGreyExample } from './mod-grey/mod-grey.example';
declare var require: any;

@Component({
	selector: 'pri-boxes',
	templateUrl: './boxes.feature.html',
})
export class BoxesFeature {
	infos: IFeatureInfos = {
		title: 'Box',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/feedback/boxes/boxes.guidelines.md',
		description: "Ces boites vous servent à mettre un contenu en valeur, comme un exemple ou un contenu d'aide masquable.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Toggle',
				description: `Les boxes peuvent être associées à un <a routerLink="/components/switches">switch</a> comme contenu masquable.`,
				component: ToggleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./toggle/toggle.example.html'),
			},
			{
				title: 'Supprimable',
				component: KillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./killable/killable.example.html'),
			},
			{
				title: 'With Background',
				component: ModGreyExample,
				code: require('!!prismjs-loader?lang=markup!./mod-grey/mod-grey.example.html'),
				mod: 'white'
			},
		],
		theme: this.themService.get('box')
	};

	constructor(private themService: ThemeDocumentationService) { }
}
