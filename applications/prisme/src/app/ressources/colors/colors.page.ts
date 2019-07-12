import { FeaturePage } from '@prisme/common';
import { ColorsFeature } from './colors.feature';

export const colorsPage = new FeaturePage(
	'colors',
	'Colors',
	ColorsFeature,
	["colors", "couleurs", "palettes"]
);
