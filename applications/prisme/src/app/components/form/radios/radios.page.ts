import { FeaturePage } from '@prisme/common';
import { RadiosFeature } from './radios.feature';

export const radiosPage = new FeaturePage(
	'radios',
	'Radios',
	RadiosFeature,
	["radios", "inputs"]
);
