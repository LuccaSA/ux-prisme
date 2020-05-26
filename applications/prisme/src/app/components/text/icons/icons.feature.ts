import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { ColorsExampleComponent } from './colors/colors.example';
import { SizeExampleComponent } from './size/size.example';
import { OldExample } from './old/old.example';
declare var require: any;

@Component({
	selector: 'pri-icons',
	templateUrl: './icons.feature.html',
	styleUrls: ['./icons.feature.scss']
})
export class IconsFeature {
	infos: IFeatureInfos = {
		title: 'Icons',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=markup!./basic/basic.example.ts'),
				extra: `
				Si vous ne souhaitez pas utiliser de ligatures, vous pouvez appeler les icones en camelCase via le prefix <code class="code">icon-</code>. ex. <code class="code">&lt;i class="lucca-icon icon-chevronSouth"&gt;&lt;/i&gt;</code>
				`
			},
			{
				title: 'Couleurs',
				component: ColorsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./colors/colors.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
			{
				title: 'Tailles',
				component: SizeExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./size/size.example.html'),
				extra: `Vous pouvez changer manuellement la taille des icones en appliquant une <code class="code">font-size</code>`
			},
			{
				title: 'Anciennes icônes',
				component: OldExample,
				code: require('!!prismjs-loader?lang=markup!./old/old.example.html'),
				extra: `<a href="https://github.com/LuccaSA/lucca-front/pull/1007" target="_blank">Retrouvez la liste des icônes dépréciées et leurs remplacements ici</a>`
			},
		],
		theme: this.docApi.get('icons')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
