import { Component } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
	selector: 'pri-sizes-example',
	templateUrl: './sizes.example.html'
})
export class SizesExample {
	anais: IUser = {
		id: 12,
		firstName: 'Anaïs',
		lastName: 'Lemoustier',
		picture: {
			href:
				'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ana%C3%AFs_Demoustier_Cabourg_2015.jpg',
		},
		jobTitle: 'Actress',
	};
}
