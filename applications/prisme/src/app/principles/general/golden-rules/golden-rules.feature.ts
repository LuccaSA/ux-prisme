import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-golden-rules',
	templateUrl: './golden-rules.feature.html',
})
export class GoldenRulesFeature {
	infos: IFeatureInfos = {
		title: 'Règles d\'or',
		description: "Les 10 règles d'or d'UX chez Lucca. Ce sont nos principes fondateurs.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
