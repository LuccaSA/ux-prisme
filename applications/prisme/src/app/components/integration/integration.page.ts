import { GroupPage } from '@prisme/common';
import { guidelinesPage } from './guidelines/guidelines.page';
import { themingPage } from './theming/theming.page';

export const integrationPage = new GroupPage('integration', 'Integration', [
	guidelinesPage,
	themingPage,
]);
