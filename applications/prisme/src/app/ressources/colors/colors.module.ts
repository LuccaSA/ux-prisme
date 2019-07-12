import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ColorsFeature } from './colors.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ColorsFeature,
	],
	entryComponents: [
		ColorsFeature,
	]
})
export class ColorsModule { }
