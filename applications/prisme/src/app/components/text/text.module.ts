import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TitlesModule } from './titles/titles.module';
import { LabelsModule } from './labels/labels.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
	imports: [
		CommonModule,
		TitlesModule,
		LabelsModule,
		IconsModule
	],
})
export class TextModule { }
