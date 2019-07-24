import { GroupPage } from '@prisme/common';
import { modalsPage } from './modals/modals.page';
import { tooltipsPage } from './tooltips/tooltips.page';
import { popoversPage } from './popovers/popovers.page';
import { overlayGuidelinesPage } from './guidelines/guidelines.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays',
	[
	overlayGuidelinesPage,
	popoversPage,
	tooltipsPage,
		modalsPage,
	]
);
