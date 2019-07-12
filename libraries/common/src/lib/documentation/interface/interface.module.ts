import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceDocumentationComponent } from './interface.component';
import { PropertyDocumentationComponent } from './property.component';
import { MethodDocumentationComponent } from './method.component';
import { InterfaceDocumentationService } from './interface.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		InterfaceDocumentationComponent,
		PropertyDocumentationComponent,
		MethodDocumentationComponent,
	],
	exports: [
		InterfaceDocumentationComponent,
		PropertyDocumentationComponent,
		MethodDocumentationComponent,
	],
	providers: [
		InterfaceDocumentationService,
	],
})
export class InterfaceDocumentationModule {}
