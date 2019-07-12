import { FeaturePage } from '@prisme/common';
import { FileFeature } from './file.feature';

export const filePage = new FeaturePage(
	'file',
	'Fichier',
	FileFeature,
	["files", "fichiers", "inputs"]
);
