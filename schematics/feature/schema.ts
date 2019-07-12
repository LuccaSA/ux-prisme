import { IOptions } from '../schema';

export interface IFeatureOptions extends IOptions {
	title: string;
	directive?: string;
	component?: string;
	pipe?: string;
	theme?: string;
	prefix?: string;
	guidelines?: string;
}
