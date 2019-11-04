import { GroupPage } from '@prisme/common';
import { integrationPage } from './integration/integration.page';

export const generalPage = new GroupPage('general', 'General', [
	integrationPage,
]);
