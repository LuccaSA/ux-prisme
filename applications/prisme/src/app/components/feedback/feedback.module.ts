import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { BoxesModule } from './boxes/boxes.module';
import { CalloutsModule } from './callouts/callouts.module';
import { ToastsModule } from './toasts/toasts.module';
import { ErrorPageModule } from './error-page';

@NgModule({
	imports: [
		CommonModule,
		BoxesModule,
		CalloutsModule,
		ToastsModule,
		ErrorPageModule,
	],
})
export class FeedbackModule { }
