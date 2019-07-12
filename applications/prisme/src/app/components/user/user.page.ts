import { GroupPage } from '@prisme/common';
import { selectPage } from './select/select.page';
import { tilePage } from './tile/tile.page';
import { displayPage } from './display/display.page';
import { picturePage } from './picture/picture.page';

export const userPage = new GroupPage(
	'user',
	'Utilisateur',
	[
	picturePage,
	displayPage,
	tilePage,
	selectPage,
	],
);
