import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-overlay',
	templateUrl: './overlay.feature.html',
})
export class OverlayFeature {
	infos: IFeatureInfos = {
		title: 'Modales, Side-panels',
		guidelines: 'guidelines/general/overlay/overlay.guidelines.md',
	};
}
