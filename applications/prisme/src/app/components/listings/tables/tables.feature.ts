import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.component';
import { ZebraExampleComponent } from './zebra/zebra.component';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { SortableExampleComponent } from './sortable/sortable.component';
import { ActionsExampleComponent } from './actions/actions.component';
import { CardExampleComponent } from './card/card.component';
import { FiltersExampleComponent } from './filters/filters.component';
import { DraggableExample } from './draggable/draggable.example';
import { SizesExample } from './sizes/sizes.example';
import { VerticalAlignmentExample } from './vertical-alignment/vertical-alignment.example';
import { HorizontalAlignmentExample } from './horizontal-alignment/horizontal-alignment.example';
import { BorderlessExample } from './borderless/borderless.example';
import { TwoLinesExample } from './twoLines/twoLines.example';
import { StickyHeaderExampleComponent } from './sticky/sticky-header.component';
import { StickyColumnExampleComponent } from './sticky/sticky-column.component';
import { StickyAllInExampleComponent } from './sticky/sticky-allin.component';
declare var require: any;

@Component({
	selector: 'pri-tables',
	templateUrl: './tables.feature.html',
})
export class TablesFeature {
	infos: IFeatureInfos = {
		title: 'Tables',
		guidelines: 'guidelines/components/listings/tables/tables.guidelines.md',
		packages: ['SCSS'],
		description: "Liste d'éléments à comparer sur un ensemble de critères/valeurs présentés dans un header.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
				mod: 'white',
				extra: `Vous pouvez aligner en haut le contenu des cellules via le mod <code class="code">table mod-alignTop</code>`
			},
			{
				title: 'Header sur deux lignes',
				component: TwoLinesExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./twoLines/twoLines.example.html'),
			},
			{
				title: 'Zèbre',
				component: ZebraExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./zebra/zebra.component.html'),
				mod: 'white',
			},
			{
				title: 'Cliquable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.component.html'),
				mod: 'white',
				extra: `Vous pouvez utiliser une structure en <code class="code">div</code> et <code class="code">a</code> pour avoir des liens HTML sur une rangée ou une cellule`
			},
			{
				title: 'Triable',
				component: SortableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sortable/sortable.component.html'),
				mod: 'white',
			},
			{
				title: 'Actions',
				component: ActionsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./actions/actions.component.html'),
				mod: 'white',
			},
			{
				title: 'Sticky Header',
				component: StickyHeaderExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sticky/sticky-header.component.html'),
				mod: 'white',
				extra: `<p>Vous devez préciser sur la première ligne du corps du tableau la hauteur de votre header sous ce format&nbsp;: <code class="code">style="--sticky-header-shadow-offset-top: XXpx"</code></p>
				<p>Cette taille peut être injectée via du JS pour répondre aux problématiques de responsive.</p>
				<p>Vous pouvez omettre la présence de l'ombre en retirant la classe <code class="code">mod-stickyHeader-shadow</code> à la première ligne de votre corps de tableau</p>`
			},
			{
				title: 'Sticky Column',
				component: StickyColumnExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sticky/sticky-column.component.html'),
				mod: 'white',
				extra: `<p>Pour cumuler plusieurs colonnes sticky, celles-ci doivent être de largeur fixe. Vous pouvez fixer cette taille en ajoutant au <code class="code">th</code> de votre colonne la classe <code class="code">mod-layoutFixed-X</code> où X est la taille en <code class="code">rem</code> de votre colonne.</p>
				<p>Pour rendre une colonne sticky, il faut ajouter sur chacune des cellules (header inclus) la classe <code class="code">mod-stickyColumn-leftOffsetX</code> où X est la somme des largeurs en <code class="code">rem</code> des colonnes précédentes.</p>
				<p>Si vous souhaitez rendre des colonnes sticky depuis la droite, il suffit d'utiliser la class <code class="code">mod-stickyColumn-rightOffsetX</code> où X est la somme des largeurs en <code class="code">rem</code> des colonnes suivantes.</p>`
			},
			{
				title: 'Sticky Column & Header + gestion des breakpoints',
				component: StickyAllInExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sticky/sticky-allin.component.html'),
				mod: 'white',
				extra: `<p>Si vous utilisez des colonnes et des lignes sticky en même temps, il faut ajouter la classe <code class="code">mod-stickyColumn-shadowMask</code> aux premiers/derniers<code class="code">th/td</code> non-sticky.</p>
				<p>Si vous souhaitez désactiver le sticky en dessous d'un breakpoint, il faut suffixer la classe <code class="code">mod-layoutFixed</code> des <code class="code">table/th/td</code> avec le breakpoint visé&nbsp;: <code class="code">mod-layoutFixed-$bp</code></p>`
			},
			{
				title: 'Draggable',
				component: DraggableExample,
				code: require('!!prismjs-loader?lang=markup!./draggable/draggable.example.html'),
				mod: 'white',
			},
			{
				title: 'Carte',
				description: `Pour utiliser une table dans une carte, placez là hors du <code class="code">card-content</code> et ajoutez-y une classe <code class="code">mod-card</code>.`,
				component: CardExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./card/card.component.html'),
			},
			{
				title: 'Filtres',
				description: `Vous pouvez une utiliser une classe <code class="code">mod-filters</code> sur la première rangée d'une table pour y placer des filtres.`,
				component: FiltersExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./filters/filters.component.html'),
				mod: 'white',
			},
			{
				title: 'Tailles',
				component: SizesExample,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
			},
			{
				title: 'Alignement vertical',
				component: VerticalAlignmentExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./vertical-alignment/vertical-alignment.example.html'),
			},
			{
				title: 'Alignement horizontal',
				component: HorizontalAlignmentExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./horizontal-alignment/horizontal-alignment.example.html'),
			},
			{
				title: 'Sans bordure',
				component: BorderlessExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./borderless/borderless.example.html'),
			},
		],
		theme: this.docApi.get('table')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
