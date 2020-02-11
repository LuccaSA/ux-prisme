import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TitlesModule } from './titles/titles.module';
import { LabelsModule } from './labels/labels.module';
import { IconsModule } from './icons/icons.module';
import { TagsModule } from './tags';

@NgModule({
	imports: [
		CommonModule,
		TitlesModule,
		LabelsModule,
		IconsModule,
		TagsModule
	],
})
export class TextModule { }
