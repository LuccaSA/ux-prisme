import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FramedFeature } from './framed.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		FramedFeature,
		BasicExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
	]
})
export class FramedModule { }
