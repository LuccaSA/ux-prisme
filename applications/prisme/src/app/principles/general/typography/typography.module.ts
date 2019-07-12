import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TypographyFeature } from './typography.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		TypographyFeature,
	],
	entryComponents: [
		TypographyFeature,
	]
})
export class TypographyModule { }
