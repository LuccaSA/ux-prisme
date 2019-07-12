import { Component, ChangeDetectorRef, OnInit, Inject } from '@angular/core';
import { IPage } from '@prisme/common';
import { Router } from '@angular/router';
import { PAGES_INDEX } from './search.token';

@Component({
	selector: 'pri-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	currentPage: IPage;
	constructor(
		public router: Router,
		private cd: ChangeDetectorRef,
		@Inject(PAGES_INDEX) public pages: IPage[],
	) {
		router.events.subscribe(() => this.updateInput());
	}

	ngOnInit(): void {
		this.cd.detectChanges();
	}
	searchFn(page: IPage, clue: string): boolean {
		return page.match(clue);
	}
	goToPage(page: IPage) {
		this.router.navigateByUrl(page.fullPath);
	}

	updateInput() {
		const path = this.router.url;
		const selectedPage = this.pages.filter(page => path === `/${page.fullPath}`);
		if (selectedPage.length === 1) {
			this.currentPage = selectedPage[0];
		}
	}
}
