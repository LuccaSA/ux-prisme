import { FeaturePage } from '@prisme/common';
import { NumberFormattingFeature } from './number-formatting.feature';

export const numberFormattingPage = new FeaturePage(
	'number-formatting',
	'Format des nombres',
	NumberFormattingFeature,
	['chiffres', 'formattage', 'currency']
);
