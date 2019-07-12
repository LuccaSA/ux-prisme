import { FeaturePage } from '@prisme/common';
import { PictureFeature } from './picture.feature';

export const picturePage = new FeaturePage(
	'picture',
	'Avatar',
	PictureFeature,
	['picture', 'avatar', 'user', 'utilisateur', 'image']
);
