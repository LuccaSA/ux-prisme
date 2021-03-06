import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { GridModule } from './grid/grid.module';
import { CardsModule } from './cards/cards.module';
import { EmptyStatesModule } from './empty-states/empty-states.module';
import { ContainersModule } from './containers/containers.module';
import { SectionsModule } from './sections/sections.module';
import { HeaderModule } from './header';
import { FiltersModule } from './filters';

@NgModule({
	imports: [
		CommonModule,
		GridModule,
		CardsModule,
		EmptyStatesModule,
		ContainersModule,
		SectionsModule,
		HeaderModule,
		FiltersModule,
	],
})
export class LayoutModule { }
