import { FeaturePage } from '@prisme/common';
import { TemplatesFeature } from './templates.feature';

export const templatesPage = new FeaturePage(
	'templates',
	'Templates',
	TemplatesFeature,
	["templates", "layout", "models", "modèles", "page"]
);
