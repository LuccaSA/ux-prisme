import { FeaturePage } from '@prisme/common';
import { MixinsFeature } from './mixins.feature';

export const mixinsPage = new FeaturePage(
	'mixins',
	'Mixins',
	MixinsFeature,
	["mixins", "functions", "fonctions"]
);
