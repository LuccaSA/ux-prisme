import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-integration',
	templateUrl: './integration.feature.html',
	styleUrls: ['./integration.feature.scss']
})
export class IntegrationFeature {
	infos: IFeatureInfos = {
		title: 'Integration',
		guidelines: 'guidelines/components/general/integration/integration.guidelines.md',
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
