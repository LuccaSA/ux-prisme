import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-functions',
	templateUrl: './functions.feature.html',
})
export class FunctionsFeature {
	infos: IFeatureInfos = {
		title: 'Fonctions de thème',
		description: "Les fonctions servent à acceder à diverses variables du thème pour simplifier la maintenabilité des interfaces.",
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
