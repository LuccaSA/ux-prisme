import { Component, forwardRef, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef } from '@angular/core';
import { ALuOptionItem, ILuOptionItem } from '@lucca-front/ng';

@Component({
	selector: 'pri-advanced-custom-option-example',
	templateUrl: './advanced-custom-option.example.html'
})
export class AdvancedCustomOptionExample {
	red = { id: 1, name: 'red' };
	green = { id: 2, name: 'green' };
	yellow = { id: 3, name: 'yellow' };
	blue = { id: 4, name: 'blue' };
	item = this.red;
}

@Component({
	selector: 'color-option',
	template: `<div [style.color]="value.name">{{value.name}}</div>`,
	providers: [
		{
			provide: ALuOptionItem,
			useExisting: forwardRef(() => ColorOption),
			multi: true,
		},
	],
})
export class ColorOption<T = any> extends ALuOptionItem<T> implements ILuOptionItem<T> {
	selected;
	highlighted;
	@Input() value: T;
	@Output() onSelect = new EventEmitter<this>();
	@HostListener('click')
	onclick() {
		this.onSelect.emit(this);
	}
	constructor(protected _vcr: ViewContainerRef, public element: ElementRef) {
		super();
	}
}
