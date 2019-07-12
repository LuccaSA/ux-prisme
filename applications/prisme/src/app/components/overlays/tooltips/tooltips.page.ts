import { FeaturePage } from '@prisme/common';
import { TooltipsFeature } from './tooltips.feature';

export const tooltipsPage = new FeaturePage(
	'tooltips',
	'Tooltips',
	TooltipsFeature,
	["tooltips", "bulles", "infobulles"]
);
