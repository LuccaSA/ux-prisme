import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { LabelsFeature } from './labels.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { NumbersExample } from './numbers/numbers.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		LabelsFeature,
		BasicExampleComponent,
		NumbersExample
	],
	entryComponents: [
		BasicExampleComponent,
		NumbersExample
	]
})
export class LabelsModule { }
