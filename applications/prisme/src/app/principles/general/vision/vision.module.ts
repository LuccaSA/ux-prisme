import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { VisionFeature } from './vision.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		VisionFeature,
	],
	entryComponents: [
		VisionFeature,
	]
})
export class VisionModule { }
