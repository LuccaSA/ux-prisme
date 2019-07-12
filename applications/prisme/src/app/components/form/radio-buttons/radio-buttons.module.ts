import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { RadioButtonsFeature } from './radio-buttons.feature';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	RadioButtonsFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class RadioButtonsModule {}
