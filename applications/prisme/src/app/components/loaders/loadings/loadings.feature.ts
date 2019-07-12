import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { LabelExampleComponent } from './label/label.example';
import { BlockExampleComponent } from './block/block.example';
import { BigExample } from './big/big.example';
import { FullPageExample } from './full-page/full-page.example';
import { InvertedExampleComponent } from './inverted/inverted.example';
import { DialogExample } from './dialog/dialog.example';
declare var require: any;

@Component({
	selector: 'pri-loadings',
	templateUrl: './loadings.feature.html',
})
export class LoadingsFeature {
	infos: IFeatureInfos = {
		title: 'Loaders',
		packages: ['SCSS'],
		description: "Les loaders servent à indiquer le chargement indéterminé d'un élément d'interface. Ils peuvent être accompagnés d'un label pour préciser le caractère des données chargées.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Avec label',
				component: LabelExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./label/label.example.html'),
			},
			{
				title: 'Block',
				description: `Le mod "block" permet d'afficher un chargement sur une section entière.`,
				component: BlockExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./block/block.example.html'),
			},
			{
				title: 'Gros',
				component: BigExample,
				code: require('!!prismjs-loader?lang=markup!./big/big.example.html'),
			},
			{
				title: 'Pleine page',
				component: FullPageExample,
				code: require('!!prismjs-loader?lang=markup!./full-page/full-page.example.html'),
			},
			{
				title: 'Inversé',
				component: InvertedExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inverted/inverted.example.html'),
				mod: 'dark',
			},
			{
				title: 'Modale',
				component: DialogExample,
				code: require('!!prismjs-loader?lang=markup!./dialog/dialog.example.html'),
				extra: `Pour un sidePanel, remplacez la classe <code class="code">mod-dialog</code> par <code class="code">mod-sidePanel</code>.`,
				mod: 'white',
			},
		]
	};
}
