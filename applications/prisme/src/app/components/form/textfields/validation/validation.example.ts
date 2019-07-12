import { Component } from '@angular/core';

@Component({
	selector: 'ds-validation-example',
	templateUrl: './validation.example.html',
	styleUrls: ['../textfields.multiple.scss']
})
export class ValidationExampleComponent {
	constructor() { }

	public validationFocus(elem) {
		const textfield = elem.parentElement;
		textfield.classList.remove('is-valid');
		textfield.classList.add('is-loading');
		setTimeout(function () {
			textfield.classList.remove('is-loading');
			textfield.classList.add('is-valid');
		}, 800);
	}

	public unvalidationFocus(elem) {
		const textfield = elem.parentElement;
		textfield.classList.remove('is-invalid');
		textfield.classList.add('is-loading');
		setTimeout(function () {
			textfield.classList.remove('is-loading');
			textfield.classList.add('is-invalid');
		}, 800);
	}
}
