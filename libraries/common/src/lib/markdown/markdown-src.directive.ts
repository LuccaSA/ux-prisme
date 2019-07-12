import { Directive, Input, OnInit } from '@angular/core';
import { AssetService } from '../asset';
import { MarkdownComponent } from 'ngx-markdown';

@Directive({
	selector: 'markdown[priMarkdownSrc]',
})
export class MarkdownSrcDirective implements OnInit {
	/*tslint:disable-next-line:no-input-rename*/
	@Input('priMarkdownSrc') unprefixedSrc: string;
	constructor(
		protected _assetService: AssetService,
		protected _markdownComponent: MarkdownComponent,
	) {}
	ngOnInit() {
		this._markdownComponent.src = this._assetService.getHref({ href: this.unprefixedSrc });
	}
}
