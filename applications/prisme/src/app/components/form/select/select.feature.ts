import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisplayerExample } from './displayer/displayer.example';
import { ClearerExample } from './clearer/clearer.example';
import { MultipleExample } from './multiple/multiple.example';
import { AdvancedCustomOptionExample } from './advanced-custom-option/advanced-custom-option.example';
import { AdvancedOperatorsExample } from './advanced-operators/advanced-operators.example';
declare var require: any;
@Component({
	selector: 'pri-select',
	templateUrl: './select.feature.html',
})
export class SelectFeature {
	infos: IFeatureInfos = {
		title: 'Select',
		description: "Les selects permettent de choisir une ou plusieurs options parmi une liste d'options. Ils sont particulièrement utiles dans le cas d'un large choix.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				description: `Le select basique permet l'affichage d'un input select avec une liste fixe.
				Si vous cherchez à récupérer la liste depuis une API, dirigez vous vers l'API ou le User Select.`,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'Affichage personnalisé',
				component: DisplayerExample,
				description: `Vous pouvez personnaliser l'affichage du select en fournissant un DOM
				portant la directive <code class="code">*luDisplayer</code>`,
				code: require('!!prismjs-loader?lang=markup!./displayer/displayer.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./displayer/displayer.example.ts')
			},
			{
				title: 'Clearer',
				component: ClearerExample,
				description: `En rajoutant un opérateur <code class="code">lu-select-clearer</code>
				en fin de select, vous permettez l'affichage d'un simple clearer pour vider l'input`,
				code: require('!!prismjs-loader?lang=markup!./clearer/clearer.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./clearer/clearer.example.ts')
			},
			{
				title: 'Select multiple',
				component: MultipleExample,
				description: `Vous pouvez transformer votre select simple en select multiple
				en rajoutant le tag <code class="code">multiple</code> au <code class="code">lu-select</code>.
				Pour transformer la valeur affichée en un résumé, il faut modifier la directive <code class="code">*luDisplayer</code>
				en lui passant la valeur <code class="code">let values; multiple: true</code>`,
				code: require('!!prismjs-loader?lang=markup!./multiple/multiple.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./multiple/multiple.example.ts')
			},
			{
				title: '[Avancé] Options Personnalisées',
				component: AdvancedCustomOptionExample,
				description: `Vous pouvez créer votre propre composant pour représenter une option. Pour cela il vous faut créer un composant
				qui hérite de la classe abstraite <code class="code">AluOptionItem<T></code>
				et qui implémente l'interface <code class="code">ILuOptionItem<T></code>. Il vous faudra aussi fournir un provider comme
				dans l'exemple présenté ci-dessous`,
				code: require('!!prismjs-loader?lang=markup!./advanced-custom-option/advanced-custom-option.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./advanced-custom-option/advanced-custom-option.example.ts')
			},
			{
				title: '[Avancé] Opérateurs du picker',
				component: AdvancedOperatorsExample,
				description: `
				Les opérateurs du <code class="code">lu-option-picker</code> permettent de définir et de manipuler une liste d'options de l'afficher.
					Ces opérateurs peuvent être "chained". La liste des opérateurs disponible par défaut est la suivante :
					<ul>
						<li><code class="code">lu-option-feeder</code>: transforme un source d'information <code class="code">[options]</code> en une liste d'options</li>
						<li><code class="code">lu-option-searcher</code>: filtre une liste d'options en applicant une <code class="code">[searchFn]</code></li>
						<li><code class="code">lu-option-pager</code>: gère la pagination</li>
						<li>La directive<code class="code">*luForOptions</code>: permet l'affichage des options</li>
					</ul>
				L'ordre des opérateurs est important.
				`,
				code: require('!!prismjs-loader?lang=markup!./advanced-operators/advanced-operators.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./advanced-operators/advanced-operators.example.ts')
			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuSelectInputComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
