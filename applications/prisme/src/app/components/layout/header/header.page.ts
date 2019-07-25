import { FeaturePage } from '@prisme/common';
import { HeaderFeature } from './header.feature';

export const headerPage = new FeaturePage(
	'header',
	'Header',
	HeaderFeature,
	['header', 'en-tête']
);
