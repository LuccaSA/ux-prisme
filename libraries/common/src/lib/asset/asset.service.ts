import { Injectable, Inject } from '@angular/core';
import { IAsset } from './asset.model';
import { BASE_URL } from '../environment/index';

@Injectable()
export class AssetService {
	constructor(@Inject(BASE_URL) protected _baseUrl: string) {}
	getHref(asset: IAsset) {
		return `${this._baseUrl}/${asset.href}`;
	}
}
