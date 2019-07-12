import { FeaturePage } from '@prisme/common';
import { FormFeature } from './form.feature';

export const formPage = new FeaturePage(
	'form',
	'Formulaires',
	FormFeature,
	["forms", "formulaires"]
);
