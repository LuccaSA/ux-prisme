import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { PictureFeature } from './picture.feature';
import { LuUserPictureModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';
import { SizesExample } from './sizes/sizes.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserPictureModule
	],
	declarations: [
	PictureFeature,
	BasicExample,
	SizesExample],
	entryComponents: [
	BasicExample,
	SizesExample]
})
export class PictureModule {}
