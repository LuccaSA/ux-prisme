import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ToastsFeature } from './toasts.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ToastsFeature,
		BasicExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
	]
})
export class ToastsModule { }
