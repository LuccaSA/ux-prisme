import { Component } from '@angular/core';
import { ILuUser } from '@lucca-front/ng/user';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {

	anais: ILuUser = {
		id: 12,
		firstName: 'Anaïs',
		lastName: 'Lemoustier',
		picture: {
			href:
				'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ana%C3%AFs_Demoustier_Cabourg_2015.jpg',
		},
		jobTitle: 'Actress',
	};

	jeanMichel: ILuUser = {
		id: 23,
		firstName: 'Jean-Michel',
		lastName: 'Pasdephoto',
		picture: { href: '' },
		jobTitle: 'Actor',
	};
}
