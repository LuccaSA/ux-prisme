import { FeaturePage } from '@prisme/common';
import { CardsFeature } from './cards.feature';

export const cardsPage = new FeaturePage(
	'cards',
	'Cartes',
	CardsFeature,
	["cards", "cartes"]
);
