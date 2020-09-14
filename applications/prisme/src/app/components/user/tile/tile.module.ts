import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TileFeature } from './tile.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserModule } from '@lucca-front/ng/user';
import { DisplayFormatExample } from './display-format/display-format.example';
import { SizesExample } from './sizes/sizes.example';
import { OtherModsExample } from './other-mods/other-mods.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserModule,
	],
	declarations: [
	TileFeature,
	BasicExample,
	DisplayFormatExample,
	SizesExample,
	OtherModsExample],
	entryComponents: [
	BasicExample,
	DisplayFormatExample,
	SizesExample,
	OtherModsExample]
})
export class TileModule {}
