import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-vocabulary',
	templateUrl: './vocabulary.feature.html',
})
export class VocabularyFeature {
	infos: IFeatureInfos = {
		title: 'Vocabulaire 🔨',
		examples: [
		],
		packages: [


		],

		//
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
