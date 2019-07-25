import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { FormatExample } from './format/format.example';
declare var require: any;
@Component({
	selector: 'pri-display',
	templateUrl: './display.feature.html',
})
export class DisplayFeature {
	infos: IFeatureInfos = {
		title: 'Display',
		description: "luUserDisplay permet d'afficher le prénom et le nom d'un utilisateur et donne accès à de nombreuses options de formatage.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'Format',
				component: FormatExample,
				code: require('!!prismjs-loader?lang=markup!./format/format.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./format/format.example.ts')
			},
		],
		packages: [
			'NG',
		],
		pipe: this.docService.pipe('LuUserDisplayPipe'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
