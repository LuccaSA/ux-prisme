import { Directive, Input, HostBinding } from '@angular/core';
import { AssetService } from './asset.service';

@Directive({
	selector: '[priAssetSrc]',
})
export class AssetSrcDirective {
	@Input('priAssetSrc') unprefixedSrc: string;
	@HostBinding('src') get src() {
		return this._assetService.getHref({ href: this.unprefixedSrc });
	}
	constructor(
		protected _assetService: AssetService,
	) {}
}
