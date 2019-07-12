import { ChangeDetectionStrategy, Component, Output, HostListener, Input, EventEmitter, forwardRef, ElementRef, HostBinding } from '@angular/core';
import { ILuOptionItem, ALuOptionItem } from '@lucca-front/ng';
import { IPage } from '@prisme/common';

@Component({
	selector: 'pri-page-item',
	templateUrl: './page-item.component.html',
	styleUrls: ['./page-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: ALuOptionItem,
			useExisting: forwardRef(() => PageItemComponent),
			multi: true,
		},
	],
})
export class PageItemComponent extends ALuOptionItem<IPage> implements ILuOptionItem<IPage> {
	_breadcrumbs: IPage[] = [];
	protected _page: IPage;
	@Input() set page(page: IPage) {
		this._breadcrumbs = page.breadcrumbs;
		this._page = page;
	}
	get page() { return this._page; }
	@Output() onSelect = new EventEmitter<this>();
	get value() { return this.page; }
	@HostListener('click')
	onclick() {
		this.onSelect.emit(this);
	}
	selected;
	@HostBinding('class.is-highlighted') highlighted;
	constructor(public element: ElementRef) { super(); }
}
