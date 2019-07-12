import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FormFeature } from './form.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		FormFeature,
	],
	entryComponents: [
		FormFeature,
	]
})
export class FormModule { }
