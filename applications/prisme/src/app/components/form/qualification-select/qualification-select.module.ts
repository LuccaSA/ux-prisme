import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { QualificationSelectFeature } from './qualification-select.feature';
import { BasicExample } from './basic/basic.example';
import { FormsModule } from '@angular/forms';
import { LuQualificationSelectModule } from '@lucca-front/ng/qualification';
import { MultipleExample } from './multiple/multiple.example';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LuQualificationSelectModule,
	],
	declarations: [
	QualificationSelectFeature,
	BasicExample,
	MultipleExample],
	entryComponents: [
	BasicExample,
	MultipleExample]
})
export class QualificationSelectModule {}
