import { FeaturePage } from '@prisme/common';
import { ProgressFeature } from './progress.feature';

export const progressPage = new FeaturePage(
	'progress',
	'Progression',
	ProgressFeature,
	["progress", "progress bar", "bar", "progression", "barre", "chargement", "barre de progression", "barre de chargement" ]
);
