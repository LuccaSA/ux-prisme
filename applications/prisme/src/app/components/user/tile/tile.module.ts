import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TileFeature } from './tile.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserTileModule } from '@lucca-front/ng';
import { DisplayFormatExample } from './display-format/display-format.example';
import { SizesExample } from './sizes/sizes.example';
import { OtherModsExample } from './other-mods/other-mods.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserTileModule,
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
