import { GroupPage } from '@prisme/common';
import { integrationPage } from './integration/integration.page';
import { themingPage } from './theming/theming.page';

export const generalPage = new GroupPage('general', 'General', [
	integrationPage,
	themingPage,
]);
