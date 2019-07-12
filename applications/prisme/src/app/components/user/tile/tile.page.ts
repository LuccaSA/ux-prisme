import { FeaturePage } from '@prisme/common';
import { TileFeature } from './tile.feature';

export const tilePage = new FeaturePage(
	'tile',
	'Tile',
	TileFeature,
	["collaborateur", "utilisateur", "user", "tile", "tuile"]
);
