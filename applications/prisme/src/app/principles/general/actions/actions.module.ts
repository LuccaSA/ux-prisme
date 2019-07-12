import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ActionsFeature } from './actions.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ActionsFeature,
	],
	entryComponents: [
		ActionsFeature,
	]
})
export class ActionsModule { }
