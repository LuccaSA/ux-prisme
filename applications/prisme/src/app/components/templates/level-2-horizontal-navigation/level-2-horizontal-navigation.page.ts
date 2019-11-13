import { FeaturePage } from '@prisme/common';
import { Level2HorizontalNavigationFeature } from './level-2-horizontal-navigation.feature';

export const level2HorizontalNavigationPage = new FeaturePage(
	'level-2-horizontal-navigation',
	'Navigation horizontale de niveau 2',
	Level2HorizontalNavigationFeature,
	['navigation', 'horizontale', 'level 2', 'niveau 2']
);
