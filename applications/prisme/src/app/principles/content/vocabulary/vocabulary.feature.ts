import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-vocabulary',
	templateUrl: './vocabulary.feature.html',
})
export class VocabularyFeature {
	infos: IFeatureInfos = {
		title: 'Vocabulaire',
		guidelines: 'guidelines/principles/content/vocabulary/vocabulary.guidelines.md',
		description: "Cette liste permet de rester consistant dans l'emploi de notre vocabulaire. Elle nous assure une rigueur dans l'utilisation des majuscules, des abréviations, et évite de créer de la confusion pour nos utilisateurs.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
