import { Component, Input } from '@angular/core';
import { IInjectableDocumentation } from './injectable.model';

@Component({
	selector: 'pri-injectable',
	templateUrl: './injectable.component.html',
})
export class InjectableDocumentationComponent {
	@Input() documentation: IInjectableDocumentation;
}
