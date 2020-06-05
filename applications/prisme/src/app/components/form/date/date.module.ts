import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DateFeature } from './date.feature';
import { BasicExample } from './basic/basic.example';
import { LuDateModule } from '@lucca-front/ng/date';
import { FormsModule } from '@angular/forms';
import { ALuDateAdapter, LuNativeDateAdapter } from '@lucca-front/ng/core';

@NgModule({
	imports: [
		CommonModule,
		LuDateModule,
		FormsModule,
	],
	declarations: [
		DateFeature,
		BasicExample,
	],
	entryComponents: [
		BasicExample,
	],
	providers: [
		 { provide: ALuDateAdapter, useClass: LuNativeDateAdapter }
	]
})
export class DateModule {}
