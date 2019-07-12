import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-voice',
	templateUrl: './voice.feature.html',
})
export class VoiceFeature {
	infos: IFeatureInfos = {
		title: 'Voix et ton 🔨',
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
