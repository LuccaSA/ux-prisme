import { FeaturePage } from '@prisme/common';
import { TimelinesFeature } from './timelines.feature';

export const timelinesPage = new FeaturePage(
	'timelines',
	'Timelines',
	TimelinesFeature,
	["timelines", "timelines"]
);
