import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { MultipleExample } from './multiple/multiple.example';
declare var require: any;
@Component({
	selector: 'pri-api-select',
	templateUrl: './api-select.feature.html',
})
export class ApiSelectFeature {
	infos: IFeatureInfos = {
		title: 'API Select',
		description: `L'API Select est une surcouche du Select de Lucca-Front pour faciliter la création de select simple tirant ses options d'une API`,
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				// description: `
				// L'API Select peut être utilisé sous deux formes :
				// <ol>
				// 	<li>Le composant <code class="code">lu-api-select</code></li>
				// 	<li>L'opérateur <code class="code">lu-api-feeder</code> du <code class="code">lu-option-picker</code> pour plus de contrôle</li>
				// </ol>
				// L'opérateur et la composant prennent tous deux un input <code class="code">api</code> où vous devez renseigner l'URL de l'API.
				// <br>Le composant <code class="code">lu-api-select</code> supporte l'attribut <code class="code">multiple</code>.
				// `,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
			},
			{
				title: 'Multiple',
				component: MultipleExample,
				code: require('!!prismjs-loader?lang=markup!./multiple/multiple.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./multiple/multiple.example.ts'),

			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuApiSelectComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
