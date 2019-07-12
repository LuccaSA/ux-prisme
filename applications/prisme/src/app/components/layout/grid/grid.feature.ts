import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { OffsetExampleComponent } from './offset/offset.example';
import { VerticalExampleComponent } from './vertical/vertical.example';
import { ReorganisationExampleComponent } from './reorganisation/reorganisation.example';
import { HorizontalExampleComponent } from './horizontal/horizontal.example';
import { AutoExampleComponent } from './auto/auto.example';
declare var require: any;
@Component({
	selector: 'pri-grid',
	templateUrl: './grid.feature.html',
	// styleUrls: ['./grid.feature.scss']
})
export class GridFeature {
	infos: IFeatureInfos = {
		title: 'Grilles',
		packages: ['SCSS'],
		description: 'Les grilles sont un outil permettant de diviser un élément parent en 12 colonnes afin de créer rapidement divers layouts. Basée sur les <a href="https://github.com/LuccaSA/lucca-front/#breakpoints" target="_blank">breakpoints du thème</a>, elle peut se réorganiser en fonction de la largeur de la page.',
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: 'Les grilles fonctionnent avec les valeurs définies dans les breakpoints de votre <a href="https://github.com/LuccaSA/lucca-front/#breakpoints" target="_blank">thème</a>. Par défaut les breakpoints sont <code class="code">-xs</code>, <code class="code">-sm</code>, <code class="code">-md</code>, <code class="code">-lg</code>, <code class="code">-xl</code> ou <code class="code">-xxl</code>'
			},
			{
				title: 'Offset',
				component: OffsetExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.example.html'),
			},
			{
				title: 'Largeur Auto',
				description: 'Supprimez les valeurs numériques pour diviser les colonnes uniformément.',
				component: AutoExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
		},
			{
				title: 'Alignement horizontal',
				component: HorizontalExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.example.html'),
			},
			{
				title: 'Alignement vertical',
				component: VerticalExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Réorganisation',
				description: 'Vous pouvez réorganiser les blocs d\'une grille grâce aux utilitaires. Cela permet de de changer l\'ordre des blocs en fonction de la résolution.',
				component: ReorganisationExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.example.html'),
			},
		],
		theme: this.docApi.get('grids')
	};
	constructor( private docApi: ThemeDocumentationService ) { }
}
