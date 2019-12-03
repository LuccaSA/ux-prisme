import { FeaturePage } from '@prisme/common';
import { ThemingFeature } from './theming.feature';

export const themingPage = new FeaturePage(
	'theming',
	'Theming',
	ThemingFeature,
	["theming", "theme", "override", "variables"]
);
