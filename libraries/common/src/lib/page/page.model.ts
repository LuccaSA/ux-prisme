import { Route } from '@angular/router';

export interface IPage {
	title: string;
	path: string;
	fullPath: string;
	keywords?: string[];
	parent?: IPage;
	children?: IPage[];
	breadcrumbs: IPage[];
	match(clue: string): boolean;
	toRoute(): Route;
	toIndex(): IPage[];
}
function normalizeStr(str: string) {
	return str
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.toLowerCase();
}
function match(str1, str2) {
	return normalizeStr(str1).indexOf(normalizeStr(str2)) >= 0;
}
export abstract class APage implements IPage {
	get fullPath() {
		return !!this.parent ? `${this.parent.fullPath}/${this.path}` : this.path;
	}
	get breadcrumbs() {
		return !!this.parent ? [ ...this.parent.breadcrumbs, this] : [this];
	}
	protected _children: IPage[] = [];
	get children() {
		return this._children;
	}
	set children(children: IPage[]) {
		// unlink old children
		this._children.forEach(c => c.parent = null);
		this._children = children;
		// set this as parent for each child
		this._children.forEach(c => c.parent = this as IPage);
	}
	protected _parent: IPage;
	get parent() { return this._parent; }
	set parent(parent: IPage) {
		this._parent = parent;
	}
	constructor(
		public path: string,
		public title: string,
		public keywords: string[] = [],
	) {}
	match(clue: string): boolean {
		const titleMatch = match(this.title, clue);
		const parentMatch = !!this.parent && this.parent.match(clue);
		const keywordMatch = this.keywords
		.map(kw => match(kw, clue))
		.reduce((acc, current) => acc || current, false);
		return titleMatch || parentMatch || keywordMatch;
	}
	abstract toRoute();
	abstract toIndex(): IPage[];
}


export class GroupPage extends APage implements IPage {
	constructor(
		path: string,
		title: string,
		children: IPage[] = [],
		keywords: string[] = [],
	) {
		super(path, title, keywords);
		this.children = children.sort((a, b) => this.customLocaleCompare(a, b));
	}

	private customLocaleCompare(a: IPage, b: IPage): any {
		if (a.path === 'guidelines') {
			return -1;
		} else if (b.path === 'guidelines') {
			return 1;
		}
		return a.title.localeCompare(b.title);
	}

	toRoute() {
		const childrenRoutes = this.children.map(c => c.toRoute());
		const redirectRoute = { path: '**', redirectTo: this.children[0].path, pathMatch: 'full' };
		return { path: this.path, children: [
			...childrenRoutes,
			redirectRoute
		] } as Route;
	}
	toIndex(): IPage[] {
		const children = this.children as IPage[];
		return [...children.map(c => c.toIndex()).reduce((acc, cur) => [...acc, ...cur], [])];
	}
}
