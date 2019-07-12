import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from '@prisme/common';

@Component({
	selector: 'pri-nav-side-group',
	templateUrl: './nav-side-group.component.html',
	styleUrls: ['./nav-side-group.component.scss']
})
export class NavSideGroupComponent implements OnInit {

	@Input() page: IPage;

	public expanded: boolean;

	constructor(public router: Router) {
		router.events.subscribe(() => this.updateToggle());
	}

	ngOnInit() {
		this.updateToggle();
	}

	public toggleMenu() {
		this.expanded = !this.expanded;
	}

	updateToggle() {
		this.expanded = this.expanded ? this.expanded : this.router.url.split('/').includes(this.page.path);
	}

}
