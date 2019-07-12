import { NgModule } from '@angular/core';
import { FeatureContentComponent } from './feature-content.component';
import { CommonModule } from '@angular/common';
import { ExampleModule } from '../example/index';
import { DocumentationModule } from '../../documentation/index';
import { MarkdownModule } from '../../markdown/index';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		ExampleModule,
		DocumentationModule,
		MarkdownModule,
		RouterModule,
	],
	declarations: [ FeatureContentComponent ],
	exports: [ FeatureContentComponent],
})
export class FeatureContentModule {}
