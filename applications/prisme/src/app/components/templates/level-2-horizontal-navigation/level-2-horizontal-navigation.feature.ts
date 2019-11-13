import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-level-2-horizontal-navigation',
	templateUrl: './level-2-horizontal-navigation.feature.html',
})
export class Level2HorizontalNavigationFeature {
	infos: IFeatureInfos = {
		title: 'Navigation horizontale de niveau 2',
		guidelines: 'guidelines/components/templates/level-2-horizontal-navigation/level-2-horizontal-navigation.guidelines.md',
		description: 'Ce template permet d’accéder à un niveau de profondeur supplémentaire grâce à une navigation horizontale. Il sert à diviser le contenu d’une page et peut être utilisé au niveau 1 de l’arborescence, comme au niveau 2 grâce à un fil d’Ariane.',
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
