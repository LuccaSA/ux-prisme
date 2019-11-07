import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ListFilterCreateModule } from './list-filter-create';
import { TwoColumnsStickyModule } from './2-columns-sticky';
import { GuidelinesModule } from './guidelines';
import { Level2HorizontalNavigationModule } from './level-2-horizontal-navigation';

@NgModule({
	imports: [
		CommonModule,
		ListFilterCreateModule,
		TwoColumnsStickyModule,
		GuidelinesModule,
		Level2HorizontalNavigationModule
	],
})
export class TemplatesModule { }
