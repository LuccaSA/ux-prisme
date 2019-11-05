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
	themesList = this.themeService.all().sort(( a, b ) => a.name < b.name ? -1 : 1);
	infos: IFeatureInfos = {
		title: 'Theming',
		description: "Les tableaux de thème rassemblent toutes les valeurs modifiables par défaut dans vos solutions. Il est toujours possible d'en rajouter pour vos propres besoins",
		guidelines: 'guidelines/components/misc/theming/theming.guidelines.md',
		examples: [
		],
		packages: [
			"SCSS"
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {
		if (this.themesList.length > 0) {
			this.selectedTheme = this.themesList[0];
		}
	}

	searchFn(o, c) {
		return o.name.startsWith(c);
	}
	trackBy(idx, theme): string {
		return theme.name;
	}
}
