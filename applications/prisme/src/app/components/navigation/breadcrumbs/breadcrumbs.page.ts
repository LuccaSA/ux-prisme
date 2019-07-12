import { FeaturePage } from '@prisme/common';
import { BreadcrumbsFeature } from './breadcrumbs.feature';

export const breadcrumbsPage = new FeaturePage(
	"breadcrumbs",
	"Fil d'Ariane",
	BreadcrumbsFeature,
	["breadcrumbs", "fil d'ariane", "ariane"]
);
