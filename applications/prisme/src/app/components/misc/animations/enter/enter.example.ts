import { Component } from '@angular/core';

@Component({
	selector: 'ds-enter-example',
	templateUrl: './enter.example.html',
	styleUrls: ['../animations.feature.scss']
})
export class EnterExampleComponent {
	constructor() { }

	public reloadAnimation(target) {
		const card = target.getElementsByClassName('card')[0];
		const animationClass = card.classList[2];
		card.classList.remove(animationClass);
		setTimeout(() => card.classList.add(animationClass));
	}
}
