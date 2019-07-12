import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ProgressFeature } from './progress.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { IndeterminateExampleComponent } from './indeterminate/indeterminate.example';
import { StatusExampleComponent } from './status/status.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ProgressFeature,
		BasicExampleComponent,
		IndeterminateExampleComponent,
		StatusExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
		IndeterminateExampleComponent,
		StatusExampleComponent,
	]
})
export class ProgressModule { }
