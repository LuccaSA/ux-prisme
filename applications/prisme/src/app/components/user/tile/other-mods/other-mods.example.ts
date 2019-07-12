import { Component } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
	selector: 'pri-other-mods-example',
	templateUrl: './other-mods.example.html'
})
export class OtherModsExample {
	jeanMichel: IUser = {
		id: 12,
		firstName: 'Jean-Michel',
		lastName: 'Pasdephoto',
		picture: { href: '' },
		jobTitle: 'Actor',
	};
}
