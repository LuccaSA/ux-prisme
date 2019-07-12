import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ApiSelectFeature } from './api-select.feature';
import { BasicExample } from './basic/basic.example';
import { LuApiSelectModule, LuSelectModule, LuOptionModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LuApiSelectModule,
		LuOptionModule,
		LuSelectModule,
	],
	declarations: [
	ApiSelectFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class ApiSelectModule {}
