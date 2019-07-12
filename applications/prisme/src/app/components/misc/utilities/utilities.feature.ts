import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-utilities',
	templateUrl: './utilities.feature.html',
	styleUrls: ['./utilities.feature.scss']
})
export class UtilitiesFeature {
	infos: IFeatureInfos = {
		title: 'Utilitaires',
		description: "Les utilitaires sont des classes universelles à ajouter sur vos composants pour simplifier leur mise en forme.",
		examples: [
		],
		packages: [
			'SCSS'
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
