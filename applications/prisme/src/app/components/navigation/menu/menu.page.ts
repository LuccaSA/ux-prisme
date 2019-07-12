import { FeaturePage } from '@prisme/common';
import { MenuFeature } from './menu.feature';

export const menuPage = new FeaturePage(
	'menu',
	'Menu',
	MenuFeature,
	["menu", "tabs", "onglets", "navigation"]
);
