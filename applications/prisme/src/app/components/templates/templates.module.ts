import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ListFilterCreateModule } from './list-filter-create';
import { TwoColumnsStickyModule } from './2-columns-sticky';

@NgModule({
	imports: [
		CommonModule,
		ListFilterCreateModule,
		TwoColumnsStickyModule
	],
})
export class TemplatesModule { }
