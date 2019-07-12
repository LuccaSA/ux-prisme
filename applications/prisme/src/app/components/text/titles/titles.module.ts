import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TitlesFeature } from './titles.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		TitlesFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class TitlesModule { }
