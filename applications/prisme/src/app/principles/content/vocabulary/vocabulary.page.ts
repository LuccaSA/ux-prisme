import { FeaturePage } from '@prisme/common';
import { VocabularyFeature } from './vocabulary.feature';

export const vocabularyPage = new FeaturePage(
	'vocabulary',
	'Vocabulaire',
	VocabularyFeature,
	["vocabulaire", "vocabulary"]
);
