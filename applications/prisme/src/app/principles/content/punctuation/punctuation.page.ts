import { FeaturePage } from '@prisme/common';
import { PunctuationFeature } from './punctuation.feature';

export const punctuationPage = new FeaturePage(
	'punctuation',
	'Ponctuation 🔨',
	PunctuationFeature,
	["ponctuation", "punctuation"]
);
