import { GroupPage } from '@prisme/common';
import { animationsPage } from './animations/animations.page';
import { functionsPage } from './functions/functions.page';
import { mixinsPage } from './mixins/mixins.page';
import { utilitiesPage } from './utilities/utilities.page';
import { numberPage } from './number/number.page';

export const miscPage = new GroupPage(
	'misc',
	'Divers',
	[
	numberPage,
		animationsPage,
		functionsPage,
		mixinsPage,
		utilitiesPage,
	]
);
