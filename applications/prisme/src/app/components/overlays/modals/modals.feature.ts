import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-modals',
	templateUrl: './modals.feature.html',
})
export class ModalsFeature {
	infos: IFeatureInfos = {
		title: 'Modales',
		description: "Les fenêtres de dialogue vient superposer un contenu supplémentaire sans quitter la page en cours. Elles ont diverses utilités comme la création ou l'édition de contenu, la confirmation ou l'accès à des fonctionnalités avancées.",
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
		],
		packages: [
			'SCSS',
			'NG',
		],
	};
	constructor() {}
}
