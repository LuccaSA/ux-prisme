import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { IFeatureInfos } from './feature-infos.model';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
	selector: 'pri-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss']
})
export class FeatureComponent /* implements AfterViewInit, OnDestroy */ {
	@Input() infos: IFeatureInfos;
	// subs = new Subscription();
	// constructor(
	// 	private route: ActivatedRoute,
	// 	private scroller: ViewportScroller,
	// ) {}
	// ngAfterViewInit() {
	// 	this.subs.add(this.route.fragment.subscribe(f => {
	// 		console.log(`should scroll to ${f}`);
	// 		this.scroller.scrollToAnchor(f);
	// 	}));
	// }
	// ngOnDestroy() {
	// 	this.subs.unsubscribe();
	// }

	public packagePalette(dspackage: string) {
		return `palette-${dspackage.toLowerCase()}`;
	}
}
