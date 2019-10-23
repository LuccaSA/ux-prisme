import { GroupPage } from '@prisme/common';
import { listFilterCreatePage } from './list-filter-create/list-filter-create.page';
import { TwoColumnsStickyPage } from './2-columns-sticky/2-columns-sticky.page';

export const templatesPage = new GroupPage(
	'templates',
	'Templates',
	[
	TwoColumnsStickyPage,
	listFilterCreatePage,
	],
);
