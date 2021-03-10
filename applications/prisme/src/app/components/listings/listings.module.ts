import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ChipsModule } from './chips/chips.module';
import { ListsModule } from './lists/lists.module';
import { TablesModule } from './tables/tables.module';
import { TimelinesModule } from './timelines/timelines.module';
import { ListingsGuidelinesModule } from './guidelines';

@NgModule({
	imports: [
		CommonModule,
		ChipsModule,
		ListsModule,
		TablesModule,
		TimelinesModule,
		ListingsGuidelinesModule
	]
})
export class ListingsModule { }
