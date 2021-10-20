import { FeaturePage } from '@prisme/common';
import { QualificationSelectFeature } from './qualification-select.feature';

export const QualificationSelectPage = new FeaturePage(
	'qualification-select',
	'Qualification select',
	QualificationSelectFeature,
	['qualification', 'select', 'picker', 'selecteur']
);
