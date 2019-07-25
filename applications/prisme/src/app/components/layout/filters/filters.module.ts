import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FiltersFeature } from './filters.feature';
import { BasicExample } from './basic/basic.example';
import { StickyExample } from './sticky/sticky.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	FiltersFeature,
	BasicExample,
	StickyExample],
	entryComponents: [
	BasicExample,
	StickyExample]
})
export class FiltersModule {}
