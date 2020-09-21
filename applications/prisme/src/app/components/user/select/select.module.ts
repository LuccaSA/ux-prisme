import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserModule } from '@lucca-front/ng/user';
import { FormsModule } from '@angular/forms';
import { RedirectModule } from '../../../redirect';

@NgModule({
	imports: [
		CommonModule,
		LuUserModule,
		FormsModule,
		RedirectModule,
	],
	declarations: [
	SelectFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class SelectModule {}
