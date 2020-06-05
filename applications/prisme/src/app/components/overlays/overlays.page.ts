import { GroupPage } from '@prisme/common';
import { modalsPage } from './modals/modals.page';
import { tooltipsPage } from './tooltips/tooltips.page';
import { popoversPage } from './popovers/popovers.page';
import { overlayGuidelinesPage } from './guidelines/guidelines.page';
import { dropdownPage } from './dropdown/dropdown.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays',
	[
	dropdownPage,
	overlayGuidelinesPage,
	popoversPage,
	tooltipsPage,
		modalsPage,
	]
);
