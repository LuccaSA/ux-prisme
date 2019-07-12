import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-typography',
	templateUrl: './typography.feature.html',
})
export class TypographyFeature {
	infos: IFeatureInfos = {
		title: 'Typographie',
		guidelines: 'guidelines/general/typography/typography.guidelines.md',
	};
}
