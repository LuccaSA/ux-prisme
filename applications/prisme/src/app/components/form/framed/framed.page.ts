import { FeaturePage } from '@prisme/common';
import { FramedFeature } from './framed.feature';

export const framedPage = new FeaturePage(
	'framed',
	'Framed',
	FramedFeature,
	["framed", "encadrés", "cadre", "inputs"]
);
