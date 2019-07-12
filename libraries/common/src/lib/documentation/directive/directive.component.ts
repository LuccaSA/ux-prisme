import { Component, Input } from '@angular/core';
import { IDirectiveDocumentation } from './directive.model';

@Component({
	selector: 'pri-directive',
	templateUrl: './directive.component.html',
})
export class DirectiveDocumentationComponent {
	@Input() documentation: IDirectiveDocumentation;
}
