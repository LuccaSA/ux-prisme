import { Component, Input } from '@angular/core';
import { IComponentDocumentation } from './component.model';

@Component({
	selector: 'pri-component',
	templateUrl: './component.component.html',
})
export class ComponentDocumentationComponent {
	@Input() documentation: IComponentDocumentation;
}
