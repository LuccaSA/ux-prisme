import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LuModal, ILuModalContent } from '@lucca-front/ng';

@Component({
	selector: 'pri-async-submit-example',
	templateUrl: './async-submit.example.html',
	styleUrls: ['./async-submit.example.scss']
})
export class AsyncSubmitExample {
	constructor(private _modal: LuModal) {}
	message$ = new Subject();
	open() {
		this._modal.open(AsyncSubmitModalContent).onClose
		.subscribe(msg => this.message$.next(msg));
	}
}
@Component({
	selector: 'pri-async-submit-modal-content',
	templateUrl: './modal-content.component.html'
})
export class AsyncSubmitModalContent implements ILuModalContent {
	title = 'titre';
	message = 'wait for it...';
	submitAction = () => of(this.message).pipe(delay(1500));
}
