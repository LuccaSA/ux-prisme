import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe.component';
import { PipeDocumentationService } from './pipe.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		PipeDocumentationComponent,
	],
	exports: [
		PipeDocumentationComponent,
	],
	providers: [
		PipeDocumentationService,
	],
})
export class PipeDocumentationModule {}
