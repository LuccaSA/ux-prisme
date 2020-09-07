import { Component } from '@angular/core';
import { luFadeAnimationFactory } from '@lucca-front/ng/animations';

@Component({
	selector: 'pri-ng-lu-fade-animation-factory-example',
	templateUrl: './ng-lu-fade-animation-factory.example.html',
	styleUrls: ['../animations.feature.scss'],
	animations: [luFadeAnimationFactory()]
})
export class NgLuFadeAnimationFactoryExample {
	fading = false;
}
