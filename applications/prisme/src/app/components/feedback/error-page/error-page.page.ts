import { FeaturePage } from '@prisme/common';
import { ErrorPageFeature } from './error-page.feature';

export const errorPagePage = new FeaturePage(
	'error-page',
	'Page d\'erreur',
	ErrorPageFeature,
);
