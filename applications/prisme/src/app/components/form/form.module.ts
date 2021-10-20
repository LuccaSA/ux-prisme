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
import { DepartmentSelectModule } from './department-select';
import { FormlyModule } from './formly';
import { DateModule } from './date';
import { QualificationSelectModule } from './qualification-select';

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
		QualificationSelectModule,
		ApiSelectModule,
		FormGuidelinesModule,
		DepartmentSelectModule,
		FormlyModule,
		DateModule,
	],
})
export class FormModule { }
