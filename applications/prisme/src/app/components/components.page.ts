import { actionsPage } from './actions/action.page';
import { feedbackPage } from './feedback/feedback.page';
import { formPage } from './form/form.page';
import { layoutPage } from './layout/layout.page';
import { listingsPage } from './listings/listings.page';
import { loadersPage } from './loaders/loaders.page';
import { miscPage } from './misc/misc.page';
import { navigationPage } from './navigation/navigation.page';
import { overlaysPage } from './overlays/overlays.page';
import { templatesPage } from './templates/templates.page';
import { textPage } from './text/text.page';
import { MainGroupPage } from '../main';
import { userPage } from './user';
import { integrationPage } from './integration/integration.page';

export const componentsPage = new MainGroupPage('components', 'Composants', [
	actionsPage,
	feedbackPage,
	formPage,
	layoutPage,
	listingsPage,
	loadersPage,
	miscPage,
	navigationPage,
	overlaysPage,
	userPage,
	templatesPage,
	textPage,
	integrationPage,
]);
