import { GroupPage } from '@prisme/common';
import { animationsPage } from './animations/animations.page';
import { functionsPage } from './functions/functions.page';
import { mixinsPage } from './mixins/mixins.page';
import { utilitiesPage } from './utilities/utilities.page';
import { numberPage } from './number/number.page';
import { themingPage } from './theming/theming.page';

export const miscPage = new GroupPage(
	'misc',
	'Divers',
	[
	themingPage,
	numberPage,
		animationsPage,
		functionsPage,
		mixinsPage,
		utilitiesPage,
	]
);
