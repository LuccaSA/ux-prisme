import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { LabelsFeature } from './labels.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		LabelsFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class LabelsModule { }
