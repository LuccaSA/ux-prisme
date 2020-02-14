import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { NumberFeature } from './number.feature';
import { LuNumberModule } from '@lucca-front/ng/number';
import { BasicExample } from './basic/basic.example';
import { PrecisionExample } from './precision/precision.example';
import { FormsModule } from '@angular/forms';
import { LocaleExample } from './locale/locale.example';

@NgModule({
	imports: [
		CommonModule,
		LuNumberModule,
		FormsModule,
	],
	declarations: [
		NumberFeature,
		BasicExample,
		PrecisionExample,
		LocaleExample
	],
	entryComponents: [
		BasicExample,
		PrecisionExample,
		LocaleExample,
	]
})
export class NumberModule {}
