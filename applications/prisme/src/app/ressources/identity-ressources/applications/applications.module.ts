import { NgModule } from '@angular/core';
import { ApplicationsFeature } from './applications.feature';
import { CommonModule } from '@prisme/common';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ApplicationsFeature,
	],
	entryComponents: [
		ApplicationsFeature,
	]
})
export class ApplicationsModule { }
