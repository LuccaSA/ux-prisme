import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-form',
	templateUrl: './form.feature.html',
})
export class FormFeature {
	infos: IFeatureInfos = {
		title: 'Guidelines formulaires',
		guidelines: 'guidelines/general/form/form-guidelines.guidelines.md',
	};
}
