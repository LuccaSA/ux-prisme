import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { PaginationFeature } from './pagination.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { PerPageExampleComponent } from './per-page/per-page.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		PaginationFeature,
		BasicExampleComponent,
		PerPageExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		PerPageExampleComponent
	]
})
export class PaginationModule {}
