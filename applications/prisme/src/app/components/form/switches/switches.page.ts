import { FeaturePage } from '@prisme/common';
import { SwitchesFeature } from './switches.feature';
export const switchesPage = new FeaturePage(
	'switches',
	'Switches',
	SwitchesFeature,
	["switches", "toggle", "inputs"]
);
