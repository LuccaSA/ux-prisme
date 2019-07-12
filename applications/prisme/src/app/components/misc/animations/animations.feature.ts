import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';
import { NgLuFadeAnimationFactoryExample } from './ng-lu-fade-animation-factory/ng-lu-fade-animation-factory.example';
import { NgLuSlideAnimationFactoryExample } from './ng-lu-slide-animation-factory/ng-lu-slide-animation-factory.example';
import { NgLuScaleAnimationFactoryExample } from './ng-lu-scale-animation-factory/ng-lu-scale-animation-factory.example';
declare var require: any;

@Component({
	selector: 'pri-animations',
	templateUrl: './animations.feature.html',
	styleUrls: ['./animations.feature.scss']
})
export class AnimationsFeature {
	infos: IFeatureInfos = {
		title: 'Animations',
		packages: ['SCSS', 'NG'],
		description: "Les animations servent à créer une transition sur un élément au moment de son apparition. Elles doivent être utilisées de manière judicieuse et servir la compréhension de l'interaction.",
		examples: [
			{
				title: '[SCSS] Apparition',
				description: `Cliquez pour voir l'animation`,
				component: EnterExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./enter/enter.example.html'),
			},
			{
				title: '[SCSS] Disparition',
				description: `Cliquez pour voir l'animation`,
				component: ExitExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./exit/exit.example.html'),
			},
			{
				title: '[NG] LuFadeAnimationFactory',
				component: NgLuFadeAnimationFactoryExample,
				code: require('!!prismjs-loader?lang=markup!./ng-lu-fade-animation-factory/ng-lu-fade-animation-factory.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./ng-lu-fade-animation-factory/ng-lu-fade-animation-factory.example.ts')
			},
			{
				title: '[NG] LuSlideAnimationFactory',
				component: NgLuSlideAnimationFactoryExample,
				code: require('!!prismjs-loader?lang=markup!./ng-lu-slide-animation-factory/ng-lu-slide-animation-factory.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./ng-lu-slide-animation-factory/ng-lu-slide-animation-factory.example.ts')
			},
			{
				title: '[NG] LuScaleAnimationFactory',
				component: NgLuScaleAnimationFactoryExample,
				code: require('!!prismjs-loader?lang=markup!./ng-lu-scale-animation-factory/ng-lu-scale-animation-factory.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./ng-lu-scale-animation-factory/ng-lu-scale-animation-factory.example.ts')
			},
		],
		theme: this.themeService.get('animations')
	};
	constructor(protected themeService: ThemeDocumentationService) { }
}
