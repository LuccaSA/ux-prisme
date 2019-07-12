import { NgModule } from '@angular/core';

import { ToolComponent } from './tool.component';
import { AssetModule } from '../asset/index';

@NgModule({
	imports: [
		AssetModule
	],
	declarations: [
		ToolComponent
	],
	exports: [
		ToolComponent,
	],
	entryComponents: [
		ToolComponent,
	]
})
export class ToolModule { }
