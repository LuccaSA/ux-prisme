import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './component.component';
import { ComponentDocumentationService } from './component.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		ComponentDocumentationComponent,
	],
	exports: [
		ComponentDocumentationComponent,
	],
	providers: [
		ComponentDocumentationService,
	],
})
export class ComponentDocumentationModule {}
