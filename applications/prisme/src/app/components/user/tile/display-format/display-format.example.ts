import { Component } from '@angular/core';
import { ILuUser } from '@lucca-front/ng/user';

@Component({
	selector: 'pri-display-format-example',
	templateUrl: './display-format.example.html'
})
export class DisplayFormatExample {
	anais: ILuUser = {
		id: 12,
		firstName: 'Anaïs',
		lastName: 'Lemoustier',
		jobTitle: 'Actress',
	};
}
