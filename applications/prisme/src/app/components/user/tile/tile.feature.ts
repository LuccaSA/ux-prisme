import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisplayFormatExample } from './display-format/display-format.example';
import { SizesExample } from './sizes/sizes.example';
import { OtherModsExample } from './other-mods/other-mods.example';
declare var require: any;
@Component({
	selector: 'pri-tile',
	templateUrl: './tile.feature.html',
})
export class TileFeature {
	infos: IFeatureInfos = {
		title: 'Tile',
		description: "LuUserTile sert à afficher une tuile collaborateur avec sa photo, son prénom, son nom et toutes sortes d'options.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'DisplayFormat',
				component: DisplayFormatExample,
				description: `Vous pouvez changer le formatage du nom en utilisant
				l'input <code class="code">displayFormat</code> pour préciser un format <code class="code">luUserDisplay</code>`,
				code: require('!!prismjs-loader?lang=markup!./display-format/display-format.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./display-format/display-format.example.ts')
			},
			{
				title: 'Tailles',
				component: SizesExample,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./sizes/sizes.example.ts')
			},
			{
				title: 'Autres mods',
				component: OtherModsExample,
				code: require('!!prismjs-loader?lang=markup!./other-mods/other-mods.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./other-mods/other-mods.example.ts')
			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuUserTileComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
