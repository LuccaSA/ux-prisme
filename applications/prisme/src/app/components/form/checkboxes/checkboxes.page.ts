import { FeaturePage } from '@prisme/common';
import { CheckboxesFeature } from './checkboxes.feature';

export const checkboxesPage = new FeaturePage(
	'checkboxes',
	'Checkboxes',
	CheckboxesFeature,
	["checkboxes", "inputs"]
);
