import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-typography',
	templateUrl: './typography.feature.html',
})
export class TypographyFeature {
	infos: IFeatureInfos = {
		title: 'Typographie',
		guidelines: 'guidelines/visual-identity/typography/typography.guidelines.md',
		description: "Elément central de la communication avec nos utilisateurs, une bonne gestion de la typographie permet à la fois d’optimiser la lecture des paragraphes, de simplifier la compréhension rapide d’une page tout en renforçant l'identité visuelle de Lucca.",
		examples: [
		],
		packages: [
		],
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
