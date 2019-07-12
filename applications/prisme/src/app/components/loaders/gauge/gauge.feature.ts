import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { WeightExample } from './weight/weight.example';
import { PalettesExample } from './palettes/palettes.example';
declare var require: any;
@Component({
	selector: 'pri-gauge',
	templateUrl: './gauge.feature.html',
})
export class GaugeFeature {
	infos: IFeatureInfos = {
		title: 'Jauge',
		description: "Les jauges servent à afficher un état d'avancement comme la progression d'une campagne.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `Pour un chargement de données, préferez l'utilisation de <a href="/components/loaders/progress">progression</a>`
			},
			{
				title: 'Weight',
				component: WeightExample,
				code: require('!!prismjs-loader?lang=markup!./weight/weight.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExample,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
		],
		packages: [
			'SCSS',
		],
		theme: this.docApi.get('gauge'),
	};

	constructor(
		private docApi: ThemeDocumentationService,
	) {}
}
