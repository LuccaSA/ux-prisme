import { Component, Input } from '@angular/core';
import { IFeatureInfos } from '../feature-infos.model';

@Component({
	selector: 'pri-feature-header',
	templateUrl: './feature-header.component.html',
	styleUrls: ['./feature-header.component.scss']
})
export class FeatureHeaderComponent {
	@Input() infos: IFeatureInfos;
}
