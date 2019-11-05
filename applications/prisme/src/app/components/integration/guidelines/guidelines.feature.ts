import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
	styleUrls: ['./guidelines.feature.scss']
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines',
		description: 'Les guidelines d\'intégration visent à rendre le code lisible et facilement éditable afin de garantir la maintenabilité du design Lucca',
		guidelines: 'guidelines/components/integration/guidelines/guidelines.guidelines.md',
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
