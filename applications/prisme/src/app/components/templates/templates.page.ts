import { GroupPage } from '@prisme/common';
import { listFilterCreatePage } from './list-filter-create/list-filter-create.page';
import { TwoColumnsStickyPage } from './2-columns-sticky/2-columns-sticky.page';
import { guidelinesPage } from './guidelines/guidelines.page';

export const templatesPage = new GroupPage(
	'templates',
	'Templates',
	[
	guidelinesPage,
	TwoColumnsStickyPage,
	listFilterCreatePage,
	],
);
