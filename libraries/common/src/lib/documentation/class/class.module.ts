import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassDocumentationComponent } from './class.component';
import { ClassDocumentationService } from './class.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		ClassDocumentationComponent,
	],
	exports: [
		ClassDocumentationComponent,
	],
	providers: [
		ClassDocumentationService,
	],
})
export class ClassDocumentationModule {}
