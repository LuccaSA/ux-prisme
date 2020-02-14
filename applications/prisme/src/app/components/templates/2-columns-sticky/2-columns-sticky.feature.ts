import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-2-columns-sticky',
	templateUrl: './2-columns-sticky.feature.html',
})
export class TwoColumnsStickyFeature {
	infos: IFeatureInfos = {
		title: '2 colonnes sticky',
		description: 'Ce template permet de gérer un grand espace libre tout en laissant toujours visible certaines données utiles (collaborateurs concernés, infos collaborateurs, etc.)',
		guidelines: 'guidelines/components/templates/2-columns-sticky/2-columns-sticky.guidelines.md',
		examples: [
		],
		packages: [


		],





	};

	constructor(
		private docService: DocumentationService,
	) {}
}
