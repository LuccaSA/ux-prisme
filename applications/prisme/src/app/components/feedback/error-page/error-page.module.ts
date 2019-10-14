import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ErrorPageFeature } from './error-page.feature';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	ErrorPageFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class ErrorPageModule {}
