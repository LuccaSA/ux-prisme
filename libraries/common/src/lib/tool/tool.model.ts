import { IAsset } from '../asset/index';

export interface ITool extends IAsset {
	title: string;
	link: string;
	description: string;
}
