import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MarkdownModule } from './markdown/index';
import { FeatureModule } from './feature/index';
import { ToolModule } from './tool/index';
import { DocumentationModule } from './documentation/index';

@NgModule({
	imports: [
		NgCommonModule,
		FeatureModule,
		MarkdownModule,
		ToolModule,
		DocumentationModule
	],
	exports: [
		NgCommonModule,
		FeatureModule,
		MarkdownModule,
		ToolModule,
		DocumentationModule
	],
})
export class CommonModule {}
