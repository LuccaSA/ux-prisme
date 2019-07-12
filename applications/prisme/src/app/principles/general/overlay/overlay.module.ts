import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { OverlayFeature } from './overlay.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		OverlayFeature,
	],
	entryComponents: [
		OverlayFeature,
	]
})
export class OverlayModule { }
