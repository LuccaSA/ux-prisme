import { Component, Input } from '@angular/core';

@Component({
	selector: 'pri-code-tab',
	templateUrl: './code-tab.component.html',
	styleUrls: ['./code-tab.component.scss']
})
export class CodeTabComponent {
	@Input() tabTitle: string;
	@Input() active = false;

	constructor() { }
}
