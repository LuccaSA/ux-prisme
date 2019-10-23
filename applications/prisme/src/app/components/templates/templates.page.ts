import { GroupPage } from '@prisme/common';
import { listFilterCreatePage } from './list-filter-create/list-filter-create.page';

export const templatesPage = new GroupPage(
	'templates',
	'Templates',
	[
	listFilterCreatePage,
	],
);
