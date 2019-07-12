import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-colors',
	templateUrl: './colors.feature.html',
	styleUrls: ['./colors.feature.scss']
})
export class ColorsFeature {
	infos: IFeatureInfos = {
		title: 'Couleurs',
	};
}
