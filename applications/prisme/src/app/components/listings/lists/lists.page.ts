import { FeaturePage } from '@prisme/common';
import { ListsFeature } from './lists.feature';

export const listsPage = new FeaturePage(
	'lists',
	'Lists',
	ListsFeature,
	["lists", "listes"]
);
