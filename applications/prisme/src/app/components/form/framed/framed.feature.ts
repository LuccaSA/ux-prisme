import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-framed',
	templateUrl: './framed.feature.html',
})
export class FramedFeature {
	infos: IFeatureInfos = {
		title: 'Framed',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: `
				Les radios et checkboxes sont un cas particulier ici. Ils doivent porter le mod <code class="code">mod-selection</code> pour fonctionner et inclure une structure spécifique.
				`
			},
		]
	};
}
