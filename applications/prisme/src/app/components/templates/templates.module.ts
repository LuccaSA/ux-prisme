import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ListFilterCreateModule } from './list-filter-create';
import { TwoColumnsStickyModule } from './2-columns-sticky';
import { GuidelinesModule } from './guidelines';

@NgModule({
	imports: [
		CommonModule,
		ListFilterCreateModule,
		TwoColumnsStickyModule,
		GuidelinesModule
	],
})
export class TemplatesModule { }
