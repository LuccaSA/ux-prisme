import { FeaturePage } from '@prisme/common';
import { AnimationsFeature } from './animations.feature';

export const animationsPage = new FeaturePage(
	'animations',
	'Animations',
	AnimationsFeature,
	["animations", "transitions"]
);
