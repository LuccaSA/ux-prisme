import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { HorizontalComponent } from './horizontal/horizontal';
import { OrderedSmallComponent } from './ordered-small/ordered-small';
import { OrderedVerticalAddBetweenStepComponent } from './ordered-vertical-add-between-step/ordered-vertical-add-between-step';
import { OrderedVerticalAddStepComponent } from './ordered-vertical-add-step/ordered-vertical-add-step';
import { OrderedVerticalComponent } from './ordered-vertical/ordered-vertical';
import { OrderedComponent } from './ordered/ordered';
import { VerticalComponent } from './vertical/vertical';

declare var require: any;

@Component({
	selector: 'pri-timelines',
	templateUrl: './timelines.feature.html',
})
export class TimelinesFeature {
	infos: IFeatureInfos = {
		title: 'Timelines',
		packages: ['SCSS'],
		description: "Listes d'éléments représentés dans une timeline.",
		examples: [
			{
				title: 'Alignement horizontal',
				component: HorizontalComponent,
				code: require('!!prismjs-loader?lang=markup!./horizontal/horizontal.html'),
				extra: 'L’attribut <code class="code">aria-current="step"</code> appliqué à \
                <code class="code">.timeline-step</code> désactive les étapes suivantes.<br>Les cercles colorés \
                héritent de la couleur du texte adjacent.<br>La barre de jauge active peut être animée.<br>\
                Il est recommandé d’ajouter des liens sur les étapes passées avec <code class="code">.timeline-step-title-action</code>.'
			},
			{
				title: 'Alignement vertical',
				component: VerticalComponent,
				code: require('!!prismjs-loader?lang=markup!./vertical/vertical.html'),
				extra: 'Vous pouvez modifier le niveau des titres en l’adaptant à votre plan documentaire.'
			},
			{
				title: 'Ordonnée',
				component: OrderedComponent,
				code: require('!!prismjs-loader?lang=markup!./ordered/ordered.html'),
			},
			{
				title: 'Ordonnée en mode petit',
				component: OrderedSmallComponent,
				code: require('!!prismjs-loader?lang=markup!./ordered-small/ordered-small.html'),
			},
			{
				title: 'Ordonnée et alignement vertical',
				component: OrderedVerticalComponent,
				code: require('!!prismjs-loader?lang=markup!./ordered-vertical/ordered-vertical.html'),
			},
			{
				title: 'Ordonnée, alignement vertical avec un bouton d’ajout',
				component: OrderedVerticalAddStepComponent,
				code: require('!!prismjs-loader?lang=markup!./ordered-vertical-add-step/ordered-vertical-add-step.html'),
			},
			{
				title: 'Ordonnée, alignement vertical avec un bouton d’ajout entre les étapes',
				component: OrderedVerticalAddBetweenStepComponent,
				code: require('!!prismjs-loader?lang=markup!./ordered-vertical-add-between-step/ordered-vertical-add-between-step.html'),
			},
		],
		theme: this.docApi.get('timelines')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
