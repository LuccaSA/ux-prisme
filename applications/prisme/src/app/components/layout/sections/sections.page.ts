import { FeaturePage } from '@prisme/common';
import { SectionsFeature } from './sections.feature';

export const sectionsPage = new FeaturePage(
	'sections',
	'Sections',
	SectionsFeature,
	["sections"]
);
