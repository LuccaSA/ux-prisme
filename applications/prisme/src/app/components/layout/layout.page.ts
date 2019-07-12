import { GroupPage } from '@prisme/common';
import { cardsPage } from './cards/cards.page';
import { containersPage } from './containers/containers.page';
import { emptyStatesPage } from './empty-states/empty-states.page';
import { sectionsPage } from './sections/sections.page';
import { gridPage } from './grid/grid.page';
import { templatesPage } from './templates/templates.page';

export const layoutPage = new GroupPage(
	'layout',
	'Structure',
	[
		cardsPage,
		containersPage,
		emptyStatesPage,
		gridPage,
		sectionsPage,
		templatesPage,
	],
);
