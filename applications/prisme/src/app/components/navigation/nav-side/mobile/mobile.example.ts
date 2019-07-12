import { Component } from '@angular/core';

@Component({
	selector: 'ds-mobile-example',
	templateUrl: './mobile.example.html',
	styleUrls: ['../nav-side.examples.scss', './mobile.example.scss']
})
export class MobileExampleComponent {
	isMenuOpen: boolean;
	constructor() { }

	toggleMenu(event) {
		event.preventDefault();
		this.isMenuOpen = !this.isMenuOpen;
	}
}
