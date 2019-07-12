import { FeaturePage } from '@prisme/common';
import { AccessibilityFeature } from './accessibility.feature';

export const accessibilityPage = new FeaturePage(
	'accessibility',
	'Accessibilité 🔨',
	AccessibilityFeature,
	["accessibility", "accessibilité"]
);
