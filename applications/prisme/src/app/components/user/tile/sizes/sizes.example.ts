import { Component } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
	selector: 'pri-sizes-example',
	templateUrl: './sizes.example.html'
})
export class SizesExample {
	jeanMichel: IUser = {
		id: 12,
		firstName: 'Jean-Michel',
		lastName: 'Pasdephoto',
		picture: { href: '' },
		jobTitle: 'Actor',
	};
}
