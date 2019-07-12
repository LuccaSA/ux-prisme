import { Component, Input } from '@angular/core';
import { IInterfaceDocumentation } from './interface.model';

@Component({
	selector: 'pri-interface',
	templateUrl: './interface.component.html',
})
export class InterfaceDocumentationComponent {
	@Input() documentation: IInterfaceDocumentation;
}
