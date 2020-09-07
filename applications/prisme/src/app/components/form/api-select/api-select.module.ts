import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ApiSelectFeature } from './api-select.feature';
import { BasicExample } from './basic/basic.example';
import { LuApiModule } from '@lucca-front/ng/api';
import { LuSelectModule } from '@lucca-front/ng/select';
import { LuOptionModule } from '@lucca-front/ng/option';
import { FormsModule } from '@angular/forms';
import { MultipleExample } from './multiple/multiple.example';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LuApiModule,
		LuOptionModule,
		LuSelectModule,
	],
	declarations: [
		ApiSelectFeature,
		BasicExample,
		MultipleExample
	],
	entryComponents: [
		BasicExample,
		MultipleExample
	]
})
export class ApiSelectModule {}
