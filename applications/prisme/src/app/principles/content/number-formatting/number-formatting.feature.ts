import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-number-formatting',
	templateUrl: './number-formatting.feature.html',
})
export class NumberFormattingFeature {
	infos: IFeatureInfos = {
		title: 'Format des nombres',
		guidelines: 'guidelines/principles/content/number-formatting/number-formatting.guidelines.md',
		description: "L'affichage de nombres dans nos interfaces se doit de suivre des normes. Dates, heures ou encore monétaires, ces formats varient en fonction des cultures",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
