import { FeaturePage } from '@prisme/common';
import { GoldenRulesFeature } from './golden-rules.feature';

export const goldenRulesPage = new FeaturePage(
	'golden-rules',
	'Règles d\'or',
	GoldenRulesFeature,
	['règle', 'or', 'golden', 'rules']
);
