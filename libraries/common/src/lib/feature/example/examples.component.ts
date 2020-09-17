import { Component, Input } from '@angular/core';
import { IExample } from './example.model';

@Component({
	selector: 'pri-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
	@Input() examples: Array<IExample>;
	slugify(text) {
		let slug = text.toLowerCase().trim();
		slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
		slug = slug.replace(/[\s-]+/g, '-');
		return slug;
	}
}
