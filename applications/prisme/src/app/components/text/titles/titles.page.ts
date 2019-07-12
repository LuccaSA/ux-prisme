import { FeaturePage } from '@prisme/common';
import { TitlesFeature } from './titles.feature';

export const titlesPage = new FeaturePage(
	'titles',
	'Titres',
	TitlesFeature,
	["titles", "titres"]
);
