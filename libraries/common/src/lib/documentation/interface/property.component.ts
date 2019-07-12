import { Component, Input } from '@angular/core';
import { IPropertyDocumentation } from './interface.model';

@Component({
	selector: 'pri-property',
	templateUrl: './property.component.html',
	host: {'class': 'table-body-row'}
})
export class PropertyDocumentationComponent {
	@Input() documentation: IPropertyDocumentation;
}
