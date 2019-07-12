import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines formulaires',
		guidelines: 'guidelines/components/form/guidelines/guidelines.guidelines.md',
		description: "Ces guidelines sont pensées pour un formulaire complet. Elles ne sont pas forcément adaptées à l’utilisation d’un composant de type input dans un autre contexte (tableau, header, etc.)",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
