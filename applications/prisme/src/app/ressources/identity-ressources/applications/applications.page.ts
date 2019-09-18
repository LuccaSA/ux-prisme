import { FeaturePage } from '@prisme/common';
import { ApplicationsFeature } from './applications.feature';

export const applicationsPage = new FeaturePage(
	'applications',
	'Applications',
	ApplicationsFeature,
	["applications", "softs", "softwares", "illustrations"]
);
