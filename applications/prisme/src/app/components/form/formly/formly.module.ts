import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FormlyFeature } from './formly.feature';
import { BasicExample } from './basic/basic.example';
import { FormlyModule as NgxFormlyModule } from '@ngx-formly/core';
import { LuFormlyModule } from '@lucca-front/ng/formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportedExample } from './supported/supported.example';
import { RedirectModule } from '../../../redirect';
// import { MatNativeDateModule } from '@angular/material/core';
import { FramedExample } from './framed/framed.example';
import { LuNativeDateModule } from '@lucca-front/ng/date';

@NgModule({
	imports: [
		CommonModule,
		NgxFormlyModule.forRoot(),
		LuFormlyModule,
		ReactiveFormsModule,
		RedirectModule,
		// MatNativeDateModule,
		LuNativeDateModule,
	],
	declarations: [
	FormlyFeature,
	BasicExample,
	SupportedExample,
	FramedExample],
	entryComponents: [
	BasicExample,
	SupportedExample,
	FramedExample]
})
export class FormlyModule {}
