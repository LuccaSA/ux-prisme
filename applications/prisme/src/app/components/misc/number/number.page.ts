import { FeaturePage } from '@prisme/common';
import { NumberFeature } from './number.feature';

export const numberPage = new FeaturePage(
	'number',
	'Number',
	NumberFeature,
	["numbers", "nombres", "lunumbers"]
);
