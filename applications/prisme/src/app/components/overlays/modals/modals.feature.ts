import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { SendingDataExample } from './sending-data/sending-data.example';
import { RecievingDataExample } from './recieving-data/recieving-data.example';
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
			{
				title: 'sending-data',
				component: SendingDataExample,
				code: require('!!prismjs-loader?lang=markup!./sending-data/sending-data.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./sending-data/sending-data.example.ts'),
			},
			{
				title: 'recieving-data',
				component: RecievingDataExample,
				code: require('!!prismjs-loader?lang=markup!./recieving-data/recieving-data.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./recieving-data/recieving-data.example.ts'),
			},
		],
		packages: [
			'SCSS',
			'NG',
		],
	};
	constructor() {}
}
