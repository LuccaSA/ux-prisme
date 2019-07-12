import { Component, Input } from '@angular/core';
import { IPipeDocumentation } from './pipe.model';

@Component({
	selector: 'pri-pipe',
	templateUrl: './pipe.component.html',
})
export class PipeDocumentationComponent {
	@Input() documentation: IPipeDocumentation;
}
