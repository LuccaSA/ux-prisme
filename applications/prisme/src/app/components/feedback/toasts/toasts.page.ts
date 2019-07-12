import { FeaturePage } from '@prisme/common';
import { ToastsFeature } from './toasts.feature';

export const toastsPage = new FeaturePage(
	'toasts',
	'Toasts',
	ToastsFeature,
	["toasts", "notifications"]
);
