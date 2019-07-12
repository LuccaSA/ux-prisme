import { Component } from '@angular/core';
import { LuModal } from '@lucca-front/ng';

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
export class BasicModalContent {
	title = 'titre';
}
