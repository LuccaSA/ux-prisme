import { Component, Input } from '@angular/core';
import { IMethodDocumentation } from './interface.model';

@Component({
	selector: 'pri-method',
	templateUrl: './method.component.html',
})
export class MethodDocumentationComponent {
	@Input() documentation: IMethodDocumentation;
	get signature(): string {
		const args = this.documentation.arguments.map(arg => `${arg.name}: ${arg.type}`).join(', ');
		return `${this.documentation.name}(${args})`;
	}
}
