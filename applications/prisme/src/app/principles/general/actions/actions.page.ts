import { FeaturePage } from '@prisme/common';
import { ActionsFeature } from './actions.feature';

export const actionsPage = new FeaturePage(
	'actions',
	'Actions',
	ActionsFeature,
	["actions"]
);
