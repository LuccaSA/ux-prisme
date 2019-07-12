import { Component, Input } from '@angular/core';
import { IFeatureInfos } from '../feature-infos.model';

@Component({
	selector: 'pri-feature-content',
	templateUrl: './feature-content.component.html',
	styleUrls: ['./feature-content.component.scss']
})
export class FeatureContentComponent {
	@Input() infos: IFeatureInfos;
}
