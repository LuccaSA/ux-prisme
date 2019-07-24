import { FeaturePage } from '@prisme/common';
import { DepartmentSelectFeature } from './department-select.feature';

export const departmentSelectPage = new FeaturePage(
	'department-select',
	'Department Select',
	DepartmentSelectFeature,
	['department', 'departement', 'select', 'picker', 'selecteur']
);
