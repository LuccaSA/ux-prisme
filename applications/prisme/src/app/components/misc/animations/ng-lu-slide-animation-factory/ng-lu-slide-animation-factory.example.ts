import { Component } from '@angular/core';
import { luSlideAnimationFactory } from '@lucca-front/ng';

@Component({
	selector: 'pri-ng-lu-slide-animation-factory-example',
	templateUrl: './ng-lu-slide-animation-factory.example.html',
	styleUrls: ['../animations.feature.scss'],
	animations: [luSlideAnimationFactory()]
})
export class NgLuSlideAnimationFactoryExample {
	slidingLeft = false;
	slidingRight = false;
	slidingTop = false;
	slidingBottom = false;
}
