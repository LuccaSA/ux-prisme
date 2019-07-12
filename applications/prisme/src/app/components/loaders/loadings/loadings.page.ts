import { FeaturePage } from '@prisme/common';
import { LoadingsFeature } from './loadings.feature';

export const loadingsPage = new FeaturePage(
	'loadings',
	'Loadings',
	LoadingsFeature,
	["loadings", "loaders", "chargement"]
);
