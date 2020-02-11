import { GroupPage } from '@prisme/common';
import { iconsPage } from './icons/icons.page';
import { labelsPage } from './labels/labels.page';
import { titlesPage } from './titles/titles.page';
import { tagsPage } from './tags/tags.page';

export const textPage = new GroupPage(
	'text',
	'Texte',
	[
	tagsPage,
		iconsPage,
		labelsPage,
		titlesPage,
	],
);
