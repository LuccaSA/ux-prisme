import { FeaturePage } from '@prisme/common';
import { TablesFeature } from './tables.feature';

export const tablesPage = new FeaturePage(
	'tables',
	'Tables',
	TablesFeature,
	["tables", "tableaux"]
);
