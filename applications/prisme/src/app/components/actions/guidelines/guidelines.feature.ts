import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-guidelines',
	templateUrl: './guidelines.feature.html',
})
export class GuidelinesFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines actions',
		guidelines: 'guidelines/components/actions/guidelines/guidelines.guidelines.md',
		description: "Les actions permettent à l’utilisateur de communiquer avec nos applications. Leur utilisation dépend du rôle de l’action et de son importance.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
