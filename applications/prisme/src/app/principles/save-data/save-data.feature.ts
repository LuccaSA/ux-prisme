import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-save-data',
	templateUrl: './save-data.feature.html',
})
export class SaveDataFeature {
	infos: IFeatureInfos = {
		title: 'Sauvegarde des données',
		guidelines: 'guidelines/principles/save-data/save-data.guidelines.md',
		description: "De nombreuses données transitent à travers nos interfaces. Choisir la bonne manière de les enregistrer permet de limiter les risques de pertes de données tout en renforçant la compréhension des pages. ",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
