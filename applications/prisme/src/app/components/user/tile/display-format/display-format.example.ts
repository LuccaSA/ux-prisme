import { Component } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
	selector: 'pri-display-format-example',
	templateUrl: './display-format.example.html'
})
export class DisplayFormatExample {
	anais: IUser = {
		id: 12,
		firstName: 'Anaïs',
		lastName: 'Lemoustier',
		jobTitle: 'Actress',
	};
}
