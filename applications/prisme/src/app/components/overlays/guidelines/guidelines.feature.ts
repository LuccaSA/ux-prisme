import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines overlays',
		guidelines: 'guidelines/components/overlays/guidelines/guidelines.guidelines.md',
		description: "Les overlay permettent de placer du contenu supplémentaire au dessus de la page en cours. Ils peuvent être plus ou moins engageants en fonction de la complexité d’information à afficher.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
