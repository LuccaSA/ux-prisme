import { GroupPage } from '@prisme/common';
import { accessibilityPage } from './accessibility/accessibility.page';
import { actionsPage } from './actions/actions.page';
import { formPage } from './form/form.page';
import { overlayPage } from './overlay/overlay.page';
import { typographyPage } from './typography/typography.page';
import { visionPage } from './vision/vision.page';

export const generalPage = new GroupPage('general', 'Général', [
	accessibilityPage,
	actionsPage,
	formPage,
	overlayPage,
	typographyPage,
	visionPage,
]);
