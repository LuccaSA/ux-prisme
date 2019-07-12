import { Component, Input } from '@angular/core';
import { IModuleDocumentation } from './module.model';

@Component({
	selector: 'pri-module',
	templateUrl: './module.component.html',
})
export class ModuleDocumentationComponent {
	@Input() documentation: IModuleDocumentation;
}
