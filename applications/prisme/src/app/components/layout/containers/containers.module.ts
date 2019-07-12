import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { ContainersFeature } from './containers.feature';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		ContainersFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class ContainersModule { }
