import { FeaturePage } from '@prisme/common';
import { TextfieldsFeature } from './textfields.feature';

export const textfieldsPage = new FeaturePage(
	'textfields',
	'Textfields',
	TextfieldsFeature,
	["textfields", "champs", "saisie", "texte", "inputs"]
);
