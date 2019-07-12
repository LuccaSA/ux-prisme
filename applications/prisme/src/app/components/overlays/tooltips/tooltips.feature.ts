import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisabledExample } from './disabled/disabled.example';
import { HtmlExample } from './html/html.example';
import { PositionExample } from './position/position.example';
declare var require: any;
@Component({
	selector: 'pri-tooltips',
	templateUrl: './tooltips.feature.html',
})
export class TooltipsFeature {
	infos: IFeatureInfos = {
		title: 'Tooltips',
		description: "Les tooltips servent à afficher une aide contextuelle au survol d'un élément de la page.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Disabled',
				component: DisabledExample,
				code: require('!!prismjs-loader?lang=markup!./disabled/disabled.example.html'),
			},
			{
				title: 'Contenu HTML',
				component: HtmlExample,
				code: require('!!prismjs-loader?lang=markup!./html/html.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./html/html.example.ts'),
			},
			{
				title: 'position',
				component: PositionExample,
				code: require('!!prismjs-loader?lang=markup!./position/position.example.html'),
			},
		],
		packages: [
			'NG',
		],
		directive: this.docService.directive('LuTooltipTriggerDirective'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
