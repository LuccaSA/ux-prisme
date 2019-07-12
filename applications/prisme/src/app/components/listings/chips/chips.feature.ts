import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { UnkillableExampleComponent } from './unkillable/unkillable.example';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;

@Component({
	selector: 'pri-chips',
	templateUrl: './chips.feature.html',
})
export class ChipsFeature {

	infos: IFeatureInfos = {
		title: 'Chips',
		packages: ['SCSS'],
		description: "Les chips servent à présenter une liste de courts éléments textuels, comme des noms de collaborateurs ou des options de selects à choix multiples.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Unkillable',
				component: UnkillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./unkillable/unkillable.example.html'),
				extra: 'Ce mod suffit à cacher le bouton de suppression',
			}
		],
		theme: this.themeService.get('chip'),
	};

	constructor(protected themeService: ThemeDocumentationService) {
	}
}
