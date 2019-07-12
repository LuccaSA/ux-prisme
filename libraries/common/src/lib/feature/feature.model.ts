import { APage, IPage } from '../page/index';
import { Route } from '@angular/router';

export class FeaturePage extends APage implements IPage {
	component;
	constructor(
		path: string,
		title: string,
		component: any,
		keywords: string[] = [],
	) {
		super(path, title, keywords);
		this.component = component;
	}
	toRoute() {
		return { path: this.path, component: this.component } as Route;
	}
	toIndex() {
		const clone = Object.create(this);
		return [clone];
	}
}
