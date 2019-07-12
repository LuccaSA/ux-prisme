import { FeaturePage } from '@prisme/common';
import { DisplayFeature } from './display.feature';

export const displayPage = new FeaturePage(
	'display',
	'Display',
	DisplayFeature,
	["display", "collaborateur", "utilisateur", "user", "name", "firstname", "surname", "nom", "prénom"]
);
