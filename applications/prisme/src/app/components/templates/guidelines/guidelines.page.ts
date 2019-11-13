import { FeaturePage } from '@prisme/common';
import { GuidelinesFeature } from './guidelines.feature';

export const guidelinesPage = new FeaturePage(
	'guidelines',
	'Liste des templates',
	GuidelinesFeature,
);
