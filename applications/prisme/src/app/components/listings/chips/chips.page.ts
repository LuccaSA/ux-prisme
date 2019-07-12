import { FeaturePage } from '@prisme/common';
import { ChipsFeature } from './chips.feature';

export const chipsPage = new FeaturePage(
	'chips',
	'Chips',
	ChipsFeature,
	["chips", "puce", "pastilles"]
);
