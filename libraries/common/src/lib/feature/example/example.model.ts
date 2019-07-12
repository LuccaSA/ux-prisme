import { Type } from "@angular/core";

export interface IExample {
	title: string;
	component: Type<any>;
	code: string;
	tsCode?: string;
	description?: string;
	extra?: string;
	mod?: string;
}
