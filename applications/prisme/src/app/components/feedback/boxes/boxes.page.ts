import { FeaturePage } from '@prisme/common';
import { BoxesFeature } from './boxes.feature';

export const boxesPage = new FeaturePage(
	'boxes',
	'Boxes',
	BoxesFeature,
	["boxes", "boîtes"]
);
