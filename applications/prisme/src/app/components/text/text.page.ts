import { GroupPage } from '@prisme/common';
import { iconsPage } from './icons/icons.page';
import { labelsPage } from './labels/labels.page';
import { titlesPage } from './titles/titles.page';

export const textPage = new GroupPage(
	'text',
	'Texte',
	[
		iconsPage,
		labelsPage,
		titlesPage,
	],
);
