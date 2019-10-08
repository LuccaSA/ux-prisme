import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService, IThemeDocumentation } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-theming',
	styleUrls: ['./theming.style.scss'],
	templateUrl: './theming.feature.html',
})
export class ThemingFeature {
	selectedTheme: IThemeDocumentation;
	themesList = this.themeService.all();
	infos: IFeatureInfos = {
		title: 'Theming',
		examples: [
		],
		packages: [
			"SCSS"
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}

	searchFn(o, c) {
		return o.name.startsWith(c);
	}
	trackBy(idx, theme): string {
		return theme.name;
	}
}
