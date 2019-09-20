import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { TriggerExample } from './trigger/trigger.example';
import { PositionExample } from './position/position.example';
declare var require: any;
@Component({
	selector: 'pri-popovers',
	templateUrl: './popovers.feature.html',
})
export class PopoversFeature {
	infos: IFeatureInfos = {
		title: 'Popovers',
		description: "Les popovers servent à afficher un contenu supplémentaire superposé à partir d'une interaction avec un élément.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
			},
			{
				title: 'Déclencheur',
				component: TriggerExample,
				code: require('!!prismjs-loader?lang=markup!./trigger/trigger.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./trigger/trigger.example.ts'),
			},
			{
				title: 'Position',
				component: PositionExample,
				code: require('!!prismjs-loader?lang=markup!./position/position.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./position/position.example.ts'),
			},
		],
		packages: [
			'NG',
		],
		directive: this.docService.directive('LuPopoverTriggerDirective'),
		component: this.docService.component('LuPopoverPanelComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
