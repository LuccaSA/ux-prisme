import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { StatusExampleComponent } from './status/status.example';
import { GroupsExampleComponent } from './groups/groups.example';
import { SizesExampleComponent } from './sizes/sizes.example';
declare var require: any;

@Component({
	selector: 'pri-buttons',
	templateUrl: './buttons.feature.html',
})
export class ButtonsFeature {
	infos: IFeatureInfos = {
		title: 'Boutons',
		packages: ['SCSS'],
		guidelines: 'guidelines/components/actions/buttons/buttons.guidelines.md',
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				mod: 'white',
				extra: 'Les boutons peuvent être utilisés comme des liens : <code class="code">&lt;a href="#"&gt;</code><br>Vous pouvez ajouter une classe <code class="code">mod-link</code>, pour donner l\'aspect d\'un lien a un bouton'
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				mod: 'white',
				extra: 'Les couleurs de votre palette sont éditables via votre <a href="https:/ / github.com / LuccaSA / lucca - front /#palettes" target="_blank">thème</a>'
			},
			{
				title: 'Tailles',
				component: SizesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
				mod: 'white'
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
				mod: 'white',
				extra: 'Vous pouvez désactiver un bouton avec la classe <code class="code">is-disabled</code>, mais vous ne pourrez plus utiliser de tooltip'
			},
			{
				title: 'Groupe',
				component: GroupsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./groups/groups.example.html'),
				mod: 'white'
			},
		],
		theme: this.themeService.get('button')
	};

	constructor(private themeService: ThemeDocumentationService) {}
}
