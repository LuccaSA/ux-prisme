import { FeaturePage } from '@prisme/common';
import { ButtonsFeature } from './buttons.feature';

export const buttonsPage = new FeaturePage(
	'buttons',
	'Boutons',
	ButtonsFeature,
	['buttons', 'boutons']
);
