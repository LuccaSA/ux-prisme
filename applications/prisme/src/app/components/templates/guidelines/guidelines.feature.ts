import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Liste des templates',
		description: 'Les templates permettent de répondre aux besoins de structures récurrentes afin de simplifier et de consolider la  création de pages.',
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
