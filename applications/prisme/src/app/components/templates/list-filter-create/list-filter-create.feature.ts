import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-list-filter-create',
	templateUrl: './list-filter-create.feature.html',
})
export class ListFilterCreateFeature {
	infos: IFeatureInfos = {
		title: 'Lister, Filtrer & Créer',
		description: "Ce template, destiné à être utilisé à la racine d’un module, répond à un besoin de création et de listing de données. Il doit permettre d’afficher différents formats de données (tableaux, listes, cartes), de filtrer ces données et de réaliser divers actions comme la création de contenu.",
		guidelines: 'guidelines/components/templates/list-filter-create/list-filter-create.guidelines.md',
		examples: [
		],
		packages: [


		],





	};

	constructor(
		private docService: DocumentationService,
	) {}
}
