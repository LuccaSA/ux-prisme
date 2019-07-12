import { FeaturePage } from '@prisme/common';
import { UtilitiesFeature } from './utilities.feature';

export const utilitiesPage = new FeaturePage(
	'utilities',
	'Utilitaires',
	UtilitiesFeature,
	["utilities", "utilitaires", "tools", "outils", "css"]
);
