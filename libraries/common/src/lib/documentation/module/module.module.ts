import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleDocumentationComponent } from './module.component';
import { ModuleDocumentationService } from './module.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		ModuleDocumentationComponent,
	],
	exports: [
		ModuleDocumentationComponent,
	],
	providers: [
		ModuleDocumentationService,
	],
})
export class ModuleDocumentationModule {}
