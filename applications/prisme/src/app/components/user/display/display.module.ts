import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DisplayFeature } from './display.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserModule } from '@lucca-front/ng/user';
import { LuSelectModule } from '@lucca-front/ng/select';
import { LuOptionModule } from '@lucca-front/ng/option';
import { LuInputModule } from '@lucca-front/ng/input';
import { FormatExample } from './format/format.example';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		LuUserModule,
		LuSelectModule,
		FormsModule,
		LuOptionModule,
		LuInputModule,
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
