import { FeaturePage } from '@prisme/common';
import { OverlayFeature } from './overlay.feature';

export const overlayPage = new FeaturePage(
	'overlay',
	'Overlay',
	OverlayFeature,
	["overlays"]
);
