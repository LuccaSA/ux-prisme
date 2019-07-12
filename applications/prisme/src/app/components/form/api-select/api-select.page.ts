import { FeaturePage } from '@prisme/common';
import { ApiSelectFeature } from './api-select.feature';

export const apiSelectPage = new FeaturePage(
	'api-select',
	'API Select',
	ApiSelectFeature,
	['API', 'Select']
);
