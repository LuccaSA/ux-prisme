import { Component } from '@angular/core';
import { ILuUser } from '@lucca-front/ng/user';

@Component({
	selector: 'pri-sizes-example',
	templateUrl: './sizes.example.html'
})
export class SizesExample {
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
}
