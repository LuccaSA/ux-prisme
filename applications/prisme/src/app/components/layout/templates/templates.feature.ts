import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-templates',
	templateUrl: './templates.feature.html',
})
export class TemplatesFeature {
	infos: IFeatureInfos = {
		title: 'Templates',
		description: 'Les templates reprennent des structures usuelles de pages afin de les rendre consistantes et de gagner du temps lors de la conception des pages.',
		examples: [
		],
		packages: [
			'SCSS'
		],
	};
}
