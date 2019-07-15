import { Component } from '@angular/core';
import { LuModal, ILuModalContent } from '@lucca-front/ng';
import { of } from 'rxjs';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {
	constructor(private _modal: LuModal) {}
	open() {
		this._modal.open(BasicModalContent);
	}
}

@Component({
	selector: 'pri-basic-modal-content',
	templateUrl: './modal-content.component.html'
})
export class BasicModalContent implements ILuModalContent {
	title = 'titre';
	submitAction = () => of(true);
}
