import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DepartmentSelectFeature } from './department-select.feature';
import { BasicExample } from './basic/basic.example';
import { FormsModule } from '@angular/forms';
import { LuDepartmentModule } from '@lucca-front/ng';
import { MultipleExample } from './multiple/multiple.example';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LuDepartmentModule,
	],
	declarations: [
	DepartmentSelectFeature,
	BasicExample,
	MultipleExample],
	entryComponents: [
	BasicExample,
	MultipleExample]
})
export class DepartmentSelectModule {}
