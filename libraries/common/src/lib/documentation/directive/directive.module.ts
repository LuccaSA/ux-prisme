import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive.component';
import { DirectiveDocumentationService } from './directive.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		DirectiveDocumentationComponent,
	],
	exports: [
		DirectiveDocumentationComponent,
	],
	providers: [
		DirectiveDocumentationService,
	],
})
export class DirectiveDocumentationModule {}
