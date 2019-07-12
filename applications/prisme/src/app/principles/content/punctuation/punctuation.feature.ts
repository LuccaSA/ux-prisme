import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-punctuation',
	templateUrl: './punctuation.feature.html',
})
export class PunctuationFeature {
	infos: IFeatureInfos = {
		title: 'Ponctuation 🔨',
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
