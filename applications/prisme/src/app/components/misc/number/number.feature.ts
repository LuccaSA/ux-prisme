import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { PrecisionExample } from './precision/precision.example';
import { LocaleExample } from './locale/locale.example';
declare var require: any;
@Component({
	selector: 'pri-number',
	templateUrl: './number.feature.html',
})
export class NumberFeature {
	infos: IFeatureInfos = {
		title: 'Nombre',
		guidelines: 'guidelines/components/misc/number/number.guidelines.md',
		description: `luNumber permet de réaliser l'alignement de nombres sur les décimales en gérant l'arrondi et internationalisation.`,
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
				extra: `l'utilisation doit se faire sur un innerHTML`
			},
			{
				title: 'Précision',
				component: PrecisionExample,
				code: require('!!prismjs-loader?lang=markup!./precision/precision.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./precision/precision.example.ts'),
				extra: `l'utilisation doit se faire sur un innerHTML`
			},
			{
				title: 'Internationalisation',
				component: LocaleExample,
				code: require('!!prismjs-loader?lang=markup!./locale/locale.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./locale/locale.example.ts'),
				extra: `cet exemple et uniquement cet exemple utilise la locale 'fr-FR'`,
			},
		],
		packages: [
			'NG',
		],
		pipe: this.docService.pipe('LuNumberPipe'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
