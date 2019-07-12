import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';
import { DisplayerExample } from './displayer/displayer.example';
import { ClearerExample } from './clearer/clearer.example';
import { MultipleExample } from './multiple/multiple.example';
import { AdvancedCustomOptionExample, ColorOption } from './advanced-custom-option/advanced-custom-option.example';
import { AdvancedOperatorsExample } from './advanced-operators/advanced-operators.example';

@NgModule({
	imports: [
		CommonModule,
		LuSelectModule,
		LuOptionModule,
		LuInputDisplayerModule,
		FormsModule,
	],
	declarations: [
	SelectFeature,
	BasicExample,
	DisplayerExample,
	ClearerExample,
	MultipleExample,
	ColorOption,
	AdvancedCustomOptionExample,
	AdvancedOperatorsExample],
	entryComponents: [
	BasicExample,
	DisplayerExample,
	ClearerExample,
	MultipleExample,
	ColorOption,
	AdvancedCustomOptionExample,
	AdvancedOperatorsExample]
})
export class SelectModule {}
