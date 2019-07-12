import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TableOfContentFeature } from './table-of-content.feature';
import { BasicExample } from './basic/basic.example';
import { WhiteBackgroundExample } from './white-background/white-background.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	TableOfContentFeature,
	BasicExample,
	WhiteBackgroundExample],
	entryComponents: [
	BasicExample,
	WhiteBackgroundExample]
})
export class TableOfContentModule {}
