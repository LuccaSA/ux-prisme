import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-integration',
	templateUrl: './integration.feature.html',
})
export class IntegrationFeature {
	infos: IFeatureInfos = {
		title: 'Integration',
		examples: [
		],
		packages: [
			
			
		],
		
		
		
		
		
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
