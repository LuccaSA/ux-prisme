import { FeaturePage } from '@prisme/common';
import { VoiceFeature } from './voice.feature';

export const voicePage = new FeaturePage(
	'voice',
	'Voix et ton 🔨',
	VoiceFeature,
	["voix", "voice", "ton", "tone", "ux writing"]
);
