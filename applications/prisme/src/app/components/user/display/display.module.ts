import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DisplayFeature } from './display.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserDisplayModule, LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { FormatExample } from './format/format.example';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		LuUserDisplayModule,
		LuSelectModule,
		FormsModule,
		LuOptionModule,
		LuInputDisplayerModule,
	],
	declarations: [
	DisplayFeature,
	BasicExample,
	FormatExample],
	entryComponents: [
	BasicExample,
	FormatExample]
})
export class DisplayModule {}
