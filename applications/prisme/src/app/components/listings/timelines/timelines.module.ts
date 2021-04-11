import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { HorizontalComponent } from './horizontal/horizontal';
import { OrderedSmallComponent } from './ordered-small/ordered-small';
import { OrderedVerticalAddBetweenStepComponent } from './ordered-vertical-add-between-step/ordered-vertical-add-between-step';
import { OrderedVerticalAddStepComponent } from './ordered-vertical-add-step/ordered-vertical-add-step';
import { OrderedVerticalComponent } from './ordered-vertical/ordered-vertical';
import { OrderedComponent } from './ordered/ordered';
import { TimelinesFeature } from './timelines.feature';
import { VerticalComponent } from './vertical/vertical';

@NgModule({
	imports: [CommonModule],
	declarations: [
		TimelinesFeature,
		HorizontalComponent,
		VerticalComponent,
		OrderedComponent,
		OrderedSmallComponent,
		OrderedVerticalComponent,
		OrderedVerticalAddStepComponent,
		OrderedVerticalAddBetweenStepComponent
	],
	entryComponents: [
		HorizontalComponent,
		VerticalComponent,
		OrderedComponent,
		OrderedSmallComponent,
		OrderedVerticalComponent,
		OrderedVerticalAddStepComponent,
		OrderedVerticalAddBetweenStepComponent
	]
})
export class TimelinesModule { }
