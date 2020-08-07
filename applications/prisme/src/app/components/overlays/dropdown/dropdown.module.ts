import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DropdownFeature } from './dropdown.feature';
import { BasicExample } from './basic/basic.example';
import { LuDropdownModule } from '@lucca-front/ng/dropdown';
import { RouterModule } from '@angular/router';
import { DisabledExample } from './disabled/disabled.example';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		LuDropdownModule,
	],
	declarations: [
	DropdownFeature,
	BasicExample,
	DisabledExample],
	entryComponents: [
	BasicExample,
	DisabledExample]
})
export class DropdownModule {}
