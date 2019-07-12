import { FeaturePage } from '@prisme/common';
import { ActionIconsFeature } from './action-icons.feature';

export const actionIconsPage = new FeaturePage(
	'action-icons',
	'Icônes d\'action',
	ActionIconsFeature,
	["icons", "action icons", "icônes", "icônes d'action"]
);
