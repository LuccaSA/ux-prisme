import { GroupPage } from '@prisme/common';
import { checkboxesPage } from './checkboxes/checkboxes.page';
import { filePage } from './file/file.page';
import { framedPage } from './framed/framed.page';
import { radiosPage } from './radios/radios.page';
import { switchesPage } from './switches/switches.page';
import { textfieldsPage } from './textfields/textfields.page';
import { radioButtonsPage } from './radio-buttons';
import { selectPage } from './select/select.page';
import { apiSelectPage } from './api-select/api-select.page';
import { formGuidelinesPage } from './guidelines/guidelines.page';
import { departmentSelectPage } from './department-select/department-select.page';
import { formlyPage } from './formly/formly.page';
import { datePage } from './date/date.page';

export const formPage = new GroupPage(
	'form',
	'Formulaires',
	[
	datePage,
	formlyPage,
	departmentSelectPage,
	formGuidelinesPage,
	apiSelectPage,
	selectPage,
		textfieldsPage,
		checkboxesPage,
		radiosPage,
		radioButtonsPage,
		switchesPage,
		filePage,
		framedPage,
	]
);
