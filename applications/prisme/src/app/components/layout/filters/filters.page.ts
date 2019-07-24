import { FeaturePage } from '@prisme/common';
import { FiltersFeature } from './filters.feature';

export const filtersPage = new FeaturePage(
	'filters',
	'Filters',
	FiltersFeature,
	['filtres', 'filters', 'barre de filtres']
);
