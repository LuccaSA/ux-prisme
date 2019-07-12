import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-mixins',
	templateUrl: './mixins.feature.html',
})
export class MixinsFeature {
	infos: IFeatureInfos = {
		title: 'Mixins',
		description: 'Les mixins servent à accéder à des fonctions CSS avancées présentes dans <a href="https://github.com/LuccaSA/lucca-front/" target="_blank">Lucca Front</a>.',
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
