import { FeaturePage } from '@prisme/common';
import { RadioButtonsFeature } from './radio-buttons.feature';

export const radioButtonsPage = new FeaturePage(
	'radio-buttons',
	'Boutons radios',
	RadioButtonsFeature,
	["radios", "radio buttons", "boutons radios", "inputs"]
);
