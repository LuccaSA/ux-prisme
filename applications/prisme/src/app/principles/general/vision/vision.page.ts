import { FeaturePage } from '@prisme/common';
import { VisionFeature } from './vision.feature';

export const visionPage = new FeaturePage(
	'vision',
	'Vision 🔨',
	VisionFeature,
	["vision", "produit", "product"]
);
