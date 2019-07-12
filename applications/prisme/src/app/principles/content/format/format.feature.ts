import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-format',
	templateUrl: './format.feature.html',
})
export class FormatFeature {
	infos: IFeatureInfos = {
		title: 'Format 🔨',
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
