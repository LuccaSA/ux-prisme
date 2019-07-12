import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { WhiteBackgroundExample } from './white-background/white-background.example';
declare var require: any;
@Component({
	selector: 'pri-table-of-content',
	templateUrl: './table-of-content.feature.html',
})
export class TableOfContentFeature {
	infos: IFeatureInfos = {
		title: 'Table des matières',
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: "La table des matière est sticky par défaut. Ajoutez simplement une valeur top à <code class='code'>tableOfContent</code> pour l'activer."
			},
			{
				title: 'Fond blanc',
				component: WhiteBackgroundExample,
				code: require('!!prismjs-loader?lang=markup!./white-background/white-background.example.html'),
				mod: 'white'
			},
		],
		packages: ['SCSS'],
		theme: this.docService.get('tableOfContent')
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
