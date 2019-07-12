import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { ContentExampleComponent } from './content/content.example';
import { TitleExampleComponent } from './title/title.example';
declare var require: any;
@Component({
	selector: 'pri-sections',
	templateUrl: './sections.feature.html',
})
export class SectionsFeature {
	infos: IFeatureInfos = {
		title: 'Sections',
		packages: ['SCSS'],
		description: "Les sections servent à séparer verticalement différents titres et contenus pour rendre leur lecture plus aisée.",
		examples: [
			{
				title: 'Contenu',
				component: ContentExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./content/content.example.html')
			},
			{
				title: 'Titre',
				component: TitleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./title/title.example.html')
			}
		],
		theme: this.docApi.get('section')
	};

	constructor( private docApi: ThemeDocumentationService) { }
}
