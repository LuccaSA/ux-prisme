import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FormlyFeature } from './formly.feature';
import { BasicExample } from './basic/basic.example';
import { FormlyModule as NgxFormlyModule } from '@ngx-formly/core';
import { LuFormlyModule } from '@lucca-front/ng/formly';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		NgxFormlyModule.forRoot(),
		LuFormlyModule,
		ReactiveFormsModule,
	],
	declarations: [
	FormlyFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class FormlyModule {}
