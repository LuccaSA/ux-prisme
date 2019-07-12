import { FeaturePage } from '@prisme/common';
import { ContainersFeature } from './containers.feature';

export const containersPage = new FeaturePage(
	'containers',
	'Containers',
	ContainersFeature,
	["containers", "conteneur"]
);
