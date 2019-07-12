import { GroupPage } from '@prisme/common';
import { loadingsPage } from './loadings/loadings.page';
import { progressPage } from './progress/progress.page';
import { gaugePage } from './gauge';

export const loadersPage = new GroupPage(
	'loaders',
	'Loaders',
	[
		gaugePage,
		loadingsPage,
		progressPage,
	]
);
