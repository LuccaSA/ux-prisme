import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { EmptyStatesFeature } from './empty-states.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		EmptyStatesFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class EmptyStatesModule {}
