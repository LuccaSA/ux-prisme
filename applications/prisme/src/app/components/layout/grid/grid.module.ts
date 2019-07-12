import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { GridFeature } from './grid.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { OffsetExampleComponent } from './offset/offset.example';
import { AutoExampleComponent } from './auto/auto.example';
import { ReorganisationExampleComponent } from './reorganisation/reorganisation.example';
import { VerticalExampleComponent } from './vertical/vertical.example';
import { HorizontalExampleComponent } from './horizontal/horizontal.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		GridFeature,
		BasicExampleComponent,
		OffsetExampleComponent,
		AutoExampleComponent,
		ReorganisationExampleComponent,
		VerticalExampleComponent,
		HorizontalExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		OffsetExampleComponent,
		AutoExampleComponent,
		ReorganisationExampleComponent,
		VerticalExampleComponent,
		HorizontalExampleComponent
	],
})
export class GridModule { }
