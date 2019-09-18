import { Component, Inject } from '@angular/core';
import { LuModal, LU_MODAL_DATA, ILuModalContent } from '@lucca-front/ng';

@Component({
	selector: 'pri-sending-data-example',
	templateUrl: './sending-data.example.html',
	styleUrls: ['./sending-data.example.scss']
})
export class SendingDataExample {
	constructor(private _modal: LuModal) {}
	message = 'hello world';
	open(message: string) {
		this._modal.open(SendingDataModalContent, message);
	}
}
@Component({
	selector: 'pri-sending-data-modal-content',
	templateUrl: './modal-content.component.html'
})
export class SendingDataModalContent implements ILuModalContent {
	title = 'titre';
	message;
	constructor(@Inject(LU_MODAL_DATA) data) {
		this.message = data;
	}
}
