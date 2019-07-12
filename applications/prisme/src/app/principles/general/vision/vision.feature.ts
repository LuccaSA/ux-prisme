import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-vision',
	templateUrl: './vision.feature.html',
})
export class VisionFeature {
	infos = {
		title: 'Vision produit',
	} as IFeatureInfos;
}
