import { assetsPage } from './assets/assets.page';
import { applicationsPage } from './applications/applications.page';
import { colorsPage } from './colors/colors.page';
import { MainGroupPage } from '../main';
import { typographyPage } from './typography/typography.page';
import { iconographyPage } from './iconography/iconography.page';

export const ressourcesPage = new MainGroupPage(
	'ressources',
	'Ressources',
	[
	iconographyPage,
	typographyPage,
		assetsPage,
		applicationsPage,
		colorsPage,
	],
);
