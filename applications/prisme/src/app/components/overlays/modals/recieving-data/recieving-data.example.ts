import { Component } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LuModal, ILuModalContent } from '@lucca-front/ng';

@Component({
	selector: 'pri-recieving-data-example',
	templateUrl: './recieving-data.example.html',
	styleUrls: ['./recieving-data.example.scss']
})
export class RecievingDataExample {
	constructor(private _modal: LuModal) {}
	message$ = new Subject();
	open() {
		this._modal.open(RecievingDataModalContent).onClose
		.subscribe(msg => this.message$.next(msg));
	}
}
@Component({
	selector: 'pri-sending-data-modal-content',
	templateUrl: './modal-content.component.html'
})
export class RecievingDataModalContent implements ILuModalContent {
	title = 'titre';
	message = 'hello from modal';
	submitAction = () => this.message;
}
