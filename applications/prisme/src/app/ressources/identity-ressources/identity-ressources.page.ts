import { GroupPage } from '@prisme/common';
import { assetsPage } from './assets/assets.page';
import { applicationsPage } from './applications/applications.page';


export const identityRessourcesPage = new GroupPage('identity-ressources', 'Ressources', [
	assetsPage,
	applicationsPage,
]);
