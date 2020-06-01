import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FormlyFeature } from './formly.feature';
import { BasicExample } from './basic/basic.example';
import { FormlyModule as NgxFormlyModule } from '@ngx-formly/core';
import { LuFormlyModule } from '@lucca-front/ng/formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportedExample } from './supported/supported.example';
import { RedirectModule } from '../../../redirect';
import { FramedExample } from './framed/framed.example';
import { ALuDateAdapter, LuNativeDateAdapter } from '@lucca-front/ng/core';

@NgModule({
	providers: [
		{ provide: ALuDateAdapter, useClass: LuNativeDateAdapter },
	],
	imports: [
		CommonModule,
		NgxFormlyModule.forRoot(),
		LuFormlyModule,
		ReactiveFormsModule,
		RedirectModule,
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
