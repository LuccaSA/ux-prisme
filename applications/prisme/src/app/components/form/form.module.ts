import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TextfieldsModule } from './textfields/textfields.module';
import { RadiosModule } from './radios/radios.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { SwitchesModule } from './switches/switches.module';
import { FramedModule } from './framed/framed.module';
import { FileModule } from './file/file.module';
import { RadioButtonsModule } from './radio-buttons';
import { SelectModule } from './select';
import { ApiSelectModule } from './api-select';
import { FormGuidelinesModule } from './guidelines';

@NgModule({
	imports: [
		CommonModule,
		TextfieldsModule,
		RadiosModule,
		CheckboxesModule,
		SwitchesModule,
		FramedModule,
		FileModule,
		RadioButtonsModule,
		SelectModule,
		ApiSelectModule,
		FormGuidelinesModule,
	],
})
export class FormModule { }
