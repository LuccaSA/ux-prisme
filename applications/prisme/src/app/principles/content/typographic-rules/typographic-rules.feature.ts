import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-typographic-rules',
	templateUrl: './typographic-rules.feature.html',
})
export class TypographicRulesFeature {
	infos: IFeatureInfos = {
		title: 'Règles typographiques',
		guidelines: 'guidelines/principles/content/typographic-rules/typographic-rules.guidelines.md',
		description: "Afin de respecter les règles de ponctuation et ainsi de garantir une homogénéité du contenu, il est important de veiller à bien choisir les caractères utilisés.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
