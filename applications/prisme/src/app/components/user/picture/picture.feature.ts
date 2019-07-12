import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService, ThemeDocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { SizesExample } from './sizes/sizes.example';
declare var require: any;
@Component({
	selector: 'pri-picture',
	templateUrl: './picture.feature.html',
})
export class PictureFeature {
	infos: IFeatureInfos = {
		title: 'Avatar',
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'Tailles',
				component: SizesExample,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./sizes/sizes.example.ts')
			},
		],
		packages: [
			'NG'
		],
		component: this.docService.component('LuUserPictureComponent'),
		theme: this.docApi.get('user-picture')
	};

	constructor(
		private docService: DocumentationService,
		private docApi: ThemeDocumentationService
	) {}
}
