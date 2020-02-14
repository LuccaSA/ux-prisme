import { Component } from '@angular/core';
import { ILuUser } from '@lucca-front/ng/user';

@Component({
	selector: 'pri-other-mods-example',
	templateUrl: './other-mods.example.html'
})
export class OtherModsExample {
	jeanMichel: ILuUser = {
		id: 12,
		firstName: 'Jean-Michel',
		lastName: 'Pasdephoto',
		picture: { href: '' },
		jobTitle: 'Actor',
	};
}
