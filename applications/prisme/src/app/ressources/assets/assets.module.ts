import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AssetsFeature } from './assets.feature';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		AssetsFeature,
	],
	entryComponents: [
		AssetsFeature,
	]
})
export class AssetsModule { }
