import { Component } from '@angular/core';

@Component({
	selector: 'ds-exit-example',
	templateUrl: './exit.example.html',
	styleUrls: ['../animations.feature.scss']
})
export class ExitExampleComponent {
	constructor() { }

	public reloadAnimation(target) {
		const card = target.getElementsByClassName('card')[0];
		const animClass = target.getElementsByClassName('code')[0].innerHTML;
		card.classList.add(animClass);
		setTimeout(() => card.classList.remove(animClass), 750);
	}
}
