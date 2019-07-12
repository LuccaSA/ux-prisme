import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { ItemStatesExampleComponent } from './item-states/item-states.example';
import { SubItemStatesExampleComponent } from './sub-item-states/sub-item-states.example';
import { CompactExampleComponent } from './compact/compact.example';
import { AlertExampleComponent } from './alert/alert.example';
import { LoaderExampleComponent } from './loader/loader.example';
import { MobileExampleComponent } from './mobile/mobile.example';
import { BottomSectionExampleComponent } from './bottom-section/bottom-section.example';
declare var require: any;

@Component({
	selector: 'pri-nav-side',
	templateUrl: './nav-side.feature.html'
})
export class NavSideFeature {
	infos: IFeatureInfos = {
		title: 'Menu principal',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/navigation/nav-side/nav-side.guidelines.md',
		description: "Le menu principal sert à naviguer entre les différents modules d'une application.",
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Mode compact',
				component: CompactExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./compact/compact.example.html'),
			},
			{
				title: 'Item & état',
				component: ItemStatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./item-states/item-states.example.html'),
			},
			{
				title: 'Sous-menu & état',
				component: SubItemStatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sub-item-states/sub-item-states.example.html'),
			},
			{
				title: 'Alertes / Notifications',
				component: AlertExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./alert/alert.example.html'),
			},
			{
				title: 'Loader / Placeholder',
				component: LoaderExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./loader/loader.example.html'),
			},
			{
				title: 'Mobile',
				description: `
				Pour gérer un affichage en mode mobile, il faut rajouter une
				<code class="code">&lt;div class="navSide-item mod-mobileToggle"&gt;</code><br>
				Pour déplier le menu, il faut ajouter la class <code class="code">.is-open</code> à la <code class="code">.navSide</code>
				`,
				component: MobileExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./mobile/mobile.example.html'),
			},
			{
				title: 'Bottom-section',
				description: `
				Pour ajouter un bouton fixe en bas du menu, il faut ajouter une section
				<code class="code">&lt;div class="navSide-bottomSection"&gt;</code> dans lequel on glisse un <code class="code">.navSide-item</code><br>
				Il faut aussi ajouter la classe <code class="code">mod-widthBottomSection</code> à la <code class="code">navSide</code>
				`,
				component: BottomSectionExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./bottom-section/bottom-section.example.html'),
			},
		],
		theme: this.docApi.get('navSide')
	};

	constructor(private docApi: ThemeDocumentationService) { }
}
