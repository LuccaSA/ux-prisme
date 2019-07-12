import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AnimationsFeature } from './animations.feature';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';
import { NgLuFadeAnimationFactoryExample } from './ng-lu-fade-animation-factory/ng-lu-fade-animation-factory.example';
import { NgLuSlideAnimationFactoryExample } from './ng-lu-slide-animation-factory/ng-lu-slide-animation-factory.example';
import { NgLuScaleAnimationFactoryExample } from './ng-lu-scale-animation-factory/ng-lu-scale-animation-factory.example';

@NgModule({
	imports: [
		CommonModule,
	],
	entryComponents: [
		EnterExampleComponent,
		ExitExampleComponent,
		NgLuFadeAnimationFactoryExample,
		NgLuSlideAnimationFactoryExample,
		NgLuScaleAnimationFactoryExample,
	],
	declarations: [
		EnterExampleComponent,
		ExitExampleComponent,
		AnimationsFeature,
		NgLuFadeAnimationFactoryExample,
		NgLuSlideAnimationFactoryExample,
		NgLuScaleAnimationFactoryExample,
	]
})
export class AnimationsModule { }
