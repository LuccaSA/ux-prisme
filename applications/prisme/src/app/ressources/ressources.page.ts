import { assetsPage } from './assets/assets.page';
import { applicationsPage } from './applications/applications.page';
import { colorsPage } from './colors/colors.page';
import { MainGroupPage } from '../main';
import { typographyPage } from './typography/typography.page';

export const ressourcesPage = new MainGroupPage(
	'ressources',
	'Ressources',
	[
	typographyPage,
		assetsPage,
		applicationsPage,
		colorsPage,
	],
);
