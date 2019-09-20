import { generalPage } from './general/general.page';
import { MainGroupPage } from '../main';
import { contentPage } from './content';

export const principlesPage = new MainGroupPage('principles', 'Principles',  [
	generalPage,
	contentPage,
]);
