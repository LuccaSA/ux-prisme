import { FeaturePage } from '@prisme/common';
import { TableOfContentFeature } from './table-of-content.feature';

export const tableOfContentPage = new FeaturePage(
	'table-of-content',
	'Table des matières',
	TableOfContentFeature,
	["table of content", "table des matières"]
);
