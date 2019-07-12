import { FeaturePage } from '@prisme/common';
import { NavSideFeature } from './nav-side.feature';

export const navSidePage = new FeaturePage(
	'nav-side',
	'Menu Principal',
	NavSideFeature,
	["menu", "vertical", "sidenav", "navigation"]
);
