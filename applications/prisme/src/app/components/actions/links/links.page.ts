import { FeaturePage } from '@prisme/common';
import { LinksFeature } from './links.feature';

export const linksPage = new FeaturePage(
	'links',
	'Liens',
	LinksFeature,
	['links', 'liens']
);
