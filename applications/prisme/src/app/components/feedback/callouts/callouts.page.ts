import { FeaturePage } from '@prisme/common';
import { CalloutsFeature } from './callouts.feature';

export const calloutsPage = new FeaturePage(
	'callouts',
	'Callouts',
	CalloutsFeature,
	["callouts", "alertes"]
);
