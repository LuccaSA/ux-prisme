import { FeaturePage } from '@prisme/common';
import { GridFeature } from './grid.feature';

export const gridPage = new FeaturePage(
	'grid',
	'Grilles',
	GridFeature,
	['grids', 'grilles', 'grid', 'responsive']
);
