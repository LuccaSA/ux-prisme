import { Component, Input } from '@angular/core';
import { IFeatureInfos } from '../feature-infos.model';

@Component({
	selector: 'pri-feature-content',
	templateUrl: './feature-content.component.html',
	styleUrls: ['./feature-content.component.scss']
})
export class FeatureContentComponent {
	@Input() infos: IFeatureInfos;

	slugify(text) {
		let slug = text.toLowerCase().trim();
		slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
		slug = slug.replace(/[\s-]+/g, '-');
		return slug;
	}
}
