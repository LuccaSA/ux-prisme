import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserSelectModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';
import { RedirectModule } from '../../../redirect';

@NgModule({
	imports: [
		CommonModule,
		LuUserSelectModule,
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
