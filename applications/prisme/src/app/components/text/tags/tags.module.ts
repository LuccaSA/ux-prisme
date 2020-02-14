import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TagsFeature } from './tags.feature';
import { BasicExample } from './basic/basic.example';
import { ClickableExample } from './clickable/clickable.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	TagsFeature,
	BasicExample,
	ClickableExample],
	entryComponents: [
	BasicExample,
	ClickableExample]
})
export class TagsModule {}
