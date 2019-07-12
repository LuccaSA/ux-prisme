import { FeaturePage } from '@prisme/common';
import { SaveDataFeature } from './save-data.feature';

export const saveDataPage = new FeaturePage(
	'save-data',
	'Sauvegarde des données',
	SaveDataFeature,
	['save', 'datas', 'enregistrement', 'sauvegarde', 'données', 'auto-save']
);
