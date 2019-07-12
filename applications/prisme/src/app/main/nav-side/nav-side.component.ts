import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPage } from '@prisme/common';

@Component({
	selector: 'pri-nav-side',
	templateUrl: './nav-side.component.html',
	styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent {
	public pages: IPage[];
	constructor(route: ActivatedRoute) {
		this.pages =  route.snapshot.data['pages'] as IPage[];
	}
}
