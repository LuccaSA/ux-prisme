import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AccessibilityFeature } from './accessibility.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		AccessibilityFeature,
	],
	entryComponents: [
		AccessibilityFeature,
	]
})
export class AccessibilityModule { }
