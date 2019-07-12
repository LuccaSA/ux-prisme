import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { BreadcrumbsFeature } from './breadcrumbs.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		BreadcrumbsFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class BreadcrumbsModule { }
