import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-containers',
	templateUrl: './containers.feature.html',
})
export class ContainersFeature {
	infos: IFeatureInfos = {
		title: 'Containers',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				// extra: 'Vous pouvez réduire ou augmenter sa largeur grâce à un mod : <code class="code">mod-xs</code>, <code class="code">mod-sm</code>, <code class="code">mod-md</code>, <code class="code">mod-lg</code>, <code class="code">mod-xl</code>, <code class="code">mod-xxl</code>	or <code class="code">mod-xxxl</code>'
			}
		],
		theme: this.docApi.get('container')
	};
	constructor( private docApi: ThemeDocumentationService ) { }
}
