import { Component, Input } from '@angular/core';
import { IClassDocumentation } from './class.model';

@Component({
	selector: 'pri-class',
	templateUrl: './class.component.html',
})
export class ClassDocumentationComponent {
	@Input() documentation: IClassDocumentation;
}
