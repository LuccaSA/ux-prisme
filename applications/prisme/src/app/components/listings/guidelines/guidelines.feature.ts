import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines listings',
		guidelines: 'guidelines/components/listings/guidelines/guidelines.guidelines.md',
		description: "Selon le type de données, de la manière de les lire et du besoin de les comparer, les données peuvent être listées de plusieurs manières.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
