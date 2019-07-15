import { Component, Inject } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { LuModal, LU_MODAL_DATA } from '@lucca-front/ng';

@Component({
	selector: 'pri-sending-data-example',
	templateUrl: './sending-data.example.html'
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
export class SendingDataModalContent {
	title = 'titre';
	message;
	submitAction = () => of(true).pipe(delay(1000));

	constructor(@Inject(LU_MODAL_DATA) data) {
		this.message = data;
	}
}
