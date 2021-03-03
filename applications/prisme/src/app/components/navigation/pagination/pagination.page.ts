import { FeaturePage } from '@prisme/common';
import { PaginationFeature } from './pagination.feature';

export const paginationPage = new FeaturePage(
	'pagination',
	'Pagination',
	PaginationFeature,
	["pagination", "page", "paging"]
);
