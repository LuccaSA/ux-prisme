import { FeaturePage } from '@prisme/common';
import { SelectFeature } from './select.feature';

export const selectPage = new FeaturePage(
	'select',
	'Select',
	SelectFeature,
	["selects", "inputs"]
);
