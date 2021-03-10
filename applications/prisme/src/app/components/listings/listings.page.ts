import { GroupPage } from '@prisme/common';
import { chipsPage } from './chips/chips.page';
import { listsPage } from './lists/lists.page';
import { tablesPage } from './tables/tables.page';
import { listingsGuidelinesPage } from './guidelines/guidelines.page';
import { timelinesPage } from './timelines/timelines.page';

export const listingsPage = new GroupPage(
	'listings',
	'Listings',
	[
	listingsGuidelinesPage,
		chipsPage,
		listsPage,
		tablesPage,
		timelinesPage
	]
);
