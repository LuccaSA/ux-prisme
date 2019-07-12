import { FeaturePage } from '@prisme/common';
import { AssetsFeature } from './assets.feature';

export const assetsPage = new FeaturePage(
	'logos',
	'Logos',
	AssetsFeature,
	["logos", "lucca"]
);
