import { Component } from '@angular/core';
import { luScaleAnimationFactory } from '@lucca-front/ng';

@Component({
	selector: 'pri-ng-lu-scale-animation-factory-example',
	templateUrl: './ng-lu-scale-animation-factory.example.html',
	styleUrls: ['../animations.feature.scss'],
	animations: [ luScaleAnimationFactory() ]
})
export class NgLuScaleAnimationFactoryExample {
	scalingLeft = false;
	scalingRight = false;
	scalingTop = false;
	scalingBottom = false;
	scalingCenter = false;
}
