import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectModule } from './select';
import { TileModule } from './tile';
import { DisplayModule } from './display';
import { PictureModule } from './picture';

@NgModule({
	imports: [
		CommonModule,
		SelectModule,
		TileModule,
		DisplayModule,
		PictureModule
	],
})
export class UserModule {}
