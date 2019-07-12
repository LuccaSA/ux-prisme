import { FeaturePage } from '@prisme/common';
import { GaugeFeature } from './gauge.feature';

export const gaugePage = new FeaturePage(
	'gauge',
	'Gauge',
	GaugeFeature,
	["gauges", "jauges"]
);
