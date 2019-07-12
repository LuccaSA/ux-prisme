import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-actions',
	templateUrl: './actions.feature.html',
})
export class ActionsFeature {
	infos: IFeatureInfos = {
		title: 'Actions & Boutons',
		guidelines: 'guidelines/general/actions/actions.guidelines.md',
	};
}
