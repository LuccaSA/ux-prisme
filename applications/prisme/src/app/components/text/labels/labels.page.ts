import { FeaturePage } from '@prisme/common';
import { LabelsFeature } from './labels.feature';

export const labelsPage = new FeaturePage(
	'labels',
	'Labels',
	LabelsFeature,
	["labels", "tags", "numbers"]
);
