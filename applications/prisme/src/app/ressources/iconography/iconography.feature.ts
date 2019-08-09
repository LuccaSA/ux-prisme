import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-iconography',
	templateUrl: './iconography.feature.html',
})
export class IconographyFeature {
	infos: IFeatureInfos = {
		title: 'Iconographie',
		description: "Réguliers et arrondis, nos icônes sont conçus pour s'intégrer au mieux dans nos applications tout en respectant l'identité Lucca.",
		guidelines: 'guidelines/visual-identity/iconography/iconography.guidelines.md',
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
