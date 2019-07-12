import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { BoxesFeature } from './boxes.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { ToggleExampleComponent } from './toggle/toggle.example';
import { KillableExampleComponent } from './killable/killable.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		BoxesFeature,
		BasicExampleComponent,
		ToggleExampleComponent,
		KillableExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
		ToggleExampleComponent,
		KillableExampleComponent,
	]
})
export class BoxesModule { }
