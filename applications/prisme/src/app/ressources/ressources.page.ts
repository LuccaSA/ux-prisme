import { colorsPage } from './colors/colors.page';
import { MainGroupPage } from '../main';
import { typographyPage } from './typography/typography.page';
import { iconographyPage } from './iconography/iconography.page';
import { identityRessourcesPage } from './identity-ressources/identity-ressources.page';

export const ressourcesPage = new MainGroupPage(
	'identity',
	'Identité Graphique',
	[
		iconographyPage,
		typographyPage,
		identityRessourcesPage,
		colorsPage,
	],
);
