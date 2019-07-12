import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ChipsFeature } from './chips.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { UnkillableExampleComponent } from './unkillable/unkillable.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ChipsFeature,
		BasicExampleComponent,
		UnkillableExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		UnkillableExampleComponent
	]
})
export class ChipsModule { }
