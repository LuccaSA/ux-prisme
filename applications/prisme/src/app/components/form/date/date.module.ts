import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DateFeature } from './date.feature';
import { BasicExample } from './basic/basic.example';
import { LuDateModule, LuNativeDateModule } from '@lucca-front/ng/date';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		LuDateModule,
		LuNativeDateModule,
		FormsModule,
	],
	declarations: [
		DateFeature,
		BasicExample,
	],
	entryComponents: [
		BasicExample,
	]
})
export class DateModule {}
