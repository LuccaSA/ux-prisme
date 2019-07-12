import { GroupPage } from '@prisme/common';
import { breadcrumbsPage } from './breadcrumbs/breadcrumbs.page';
import { menuPage } from './menu/menu.page';
import { navSidePage } from './nav-side/nav-side.page';
import { tableOfContentPage } from './table-of-content/table-of-content.page';

export const navigationPage = new GroupPage(
	'navigation',
	'Navigation',
	[
	tableOfContentPage,
		breadcrumbsPage,
		menuPage,
		navSidePage,
	],
);
