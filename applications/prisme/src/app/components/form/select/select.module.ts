import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuSelectModule } from '@lucca-front/ng/select';
import { LuOptionModule } from '@lucca-front/ng/option';
import { LuInputModule } from '@lucca-front/ng/input';
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
		LuInputModule,
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
