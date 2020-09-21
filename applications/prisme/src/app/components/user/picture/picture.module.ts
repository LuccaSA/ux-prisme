import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { PictureFeature } from './picture.feature';
import { LuUserModule } from '@lucca-front/ng/user';
import { BasicExample } from './basic/basic.example';
import { SizesExample } from './sizes/sizes.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserModule
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
