import { generalPage } from './general/general.page';
import { MainGroupPage } from '../main';
import { contentPage } from './content';
import { saveDataPage } from './save-data/save-data.page';
import { goldenRulesPage } from './golden-rules';

export const principlesPage = new MainGroupPage('principles', 'Principles',  [
	// saveDataPage,
	goldenRulesPage,
	generalPage,
	contentPage,
]);
