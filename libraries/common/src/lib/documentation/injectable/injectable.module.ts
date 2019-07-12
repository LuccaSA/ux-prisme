import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableDocumentationComponent } from './injectable.component';
import { InjectableDocumentationService } from './injectable.service';
import { InterfaceDocumentationModule } from '../interface/index';

@NgModule({
	imports: [
		CommonModule,
		InterfaceDocumentationModule
	],
	declarations: [
		InjectableDocumentationComponent,
	],
	exports: [
		InjectableDocumentationComponent,
	],
	providers: [
		InjectableDocumentationService,
	],
})
export class InjectableDocumentationModule {}
