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
import { StickyHeaderExample } from './sticky-header/sticky-header.example';
import { FixedLayoutColumnsExample } from './fixed-layout-columns/fixed-layout-columns.example';
import { ResponsiveFixedLayoutColumnsExample } from './responsive-fixed-layout-columns/responsive-fixed-layout-columns.example';
import { StickyColumnsExample } from './sticky-columns/sticky-columns.example';
import { StickyColumnsShadowExample } from './sticky-columns-shadow/sticky-columns-shadow.example';

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
			{
				title: 'Header sticky',
				component: StickyHeaderExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./sticky-header/sticky-header.example.html'),
				extra: 'Par défaut le sticky est aligné avec <code class="code">top: 0</code>.<br/>Il est possible d\'appliquer <code class="code">.mod-topBanner</code> en complément de <code class="code">.mod-stickyHeader</code> pour positionner le header avec <code class="code">top: _theme("commons.banner-height");</code>',
			},
			{
				title: 'Colonnes de largeur fixe',
				component: FixedLayoutColumnsExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./fixed-layout-columns/fixed-layout-columns.example.html'),
				extra: 'La valeur numérique renseignée dans la classe correspond à une longueur en rem.<br/>Ex <code class="code">.mod-layoutFixed-<strong>8</strong></code> indique une cellule de <strong>8rem</strong> de long',
			},
			{
				title: 'Colonnes de largeur fixe responsive',
				component: ResponsiveFixedLayoutColumnsExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./responsive-fixed-layout-columns/responsive-fixed-layout-columns.example.html'),
			},
			{
				title: 'Colonnes sticky',
				component: StickyColumnsExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./sticky-columns/sticky-columns.example.html'),
				extra: 'Chaque cellule doit avoir une classe <code class="code">.mod-columnSticky-leftOffset<strong>X</strong></code> ou <code class="code">.mod-columnSticky-righOffset<strong>X</strong></code> où <strong>X</strong> est égal à la longueur cumulée des cellules qui la précède (pour leftOffsetX) ou la succède (pour rightOffsetX)',
			},
			{
				title: 'Colonnes sticky avec ombre',
				component: StickyColumnsShadowExample,
				mod: 'white',
				code: require('!!prismjs-loader?lang=markup!./sticky-columns-shadow/sticky-columns-shadow.example.html'),
				extra: 'L\'ombre est portée par une cellule vide uniquement présente à titre décoratif et portant la classe <code class="code">.mod-columnSticky-shadow</code><br/>La première cellule non sticky suivante devra elle porter la classe <code class="code">mod-columnSticky-shadowMask</code>',
			},
		],
		theme: this.docApi.get('table')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
