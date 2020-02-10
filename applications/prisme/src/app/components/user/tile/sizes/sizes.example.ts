import { Component } from '@angular/core';
import { ILuUser } from '@lucca-front/ng/user';

@Component({
	selector: 'pri-sizes-example',
	templateUrl: './sizes.example.html'
})
export class SizesExample {
	jeanMichel: ILuUser = {
		id: 12,
		firstName: 'Jean-Michel',
		lastName: 'Pasdephoto',
		picture: { href: '' },
		jobTitle: 'Actor',
	};
}
