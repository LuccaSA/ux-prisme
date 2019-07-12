import { IAsset } from '@prisme/common';

export interface IRessourceAsset extends IAsset {
	name: string;
	type: string;
	usage?: string;
}
