import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';
declare var require: any;

@Component({
	selector: 'pri-lists',
	templateUrl: './lists.feature.html',
})
export class ListsFeature {
	infos: IFeatureInfos = {
		title: 'Listes',
		packages: ['SCSS'],
		description: "Présentation compact d'un ensemble d'éléments similaire reconnaissables directement à leur titre (ou élément principal) pour faciliter un \"scan\" de l'ensemble des éléments disponibles.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: 'Supprimez <code class="code">list-item-actions</code> pour laisser toute la largeur aux contenus'
			},
			{
				title: 'Clickable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.example.html'),
				extra: `Placez la zone cliquable sur <code class="code">list-item</code><br>
				Pour éviter un clic à la fois sur <code class="code">list-item</code> et <code class="code">actionIcon</code>, vous pouvez appliquer <code class="code">.preventDefault()</code> & <code class="code">.stopPropagation()</code> sur <code class="code">actionIcon</code><br>
				Il est possible d'utiliser une structure en <code class="code">div</code>/<code class="code">a</code>`
			},
		],
		theme: this.docApi.get('list')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
