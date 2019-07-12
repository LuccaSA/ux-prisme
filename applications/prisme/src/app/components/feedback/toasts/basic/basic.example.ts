import { Component, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef, ElementRef, ViewRef } from '@angular/core';

@Component({
	selector: 'ds-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExampleComponent implements AfterViewInit {

	@ViewChild('toastsBox', { read: ViewContainerRef, static: true }) toastsBox: ViewContainerRef;
	@ViewChild('toast', { static: true }) toast: TemplateRef<any>;
	constructor() { }
	ngAfterViewInit() {
	}
	public generateToast() {
		const toastsValues = [
			'Oh yeah! Something good happened :)',
			'Oops, something looks wrong :(',
			'Marked as done',
			'Please check <a href="#">this thing</a>',
			'Here <u>is</u> <i>some</i> <b>HTML</b>'
		];
		const r = Math.floor(Math.random() * Math.floor(toastsValues.length));
		const newToast = this.toast.createEmbeddedView({text: toastsValues[r]});
		this.toastsBox.insert(newToast);
	}

	public toastKill(element: HTMLElement) {
		element.parentElement.remove();
	}

}
