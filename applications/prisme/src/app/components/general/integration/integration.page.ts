import { FeaturePage } from '@prisme/common';
import { IntegrationFeature } from './integration.feature';

export const integrationPage = new FeaturePage(
	'integration',
	'Integration',
	IntegrationFeature,
	['integration', 'dev', 'methodologies']
);
