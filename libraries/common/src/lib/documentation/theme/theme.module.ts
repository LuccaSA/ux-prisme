import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDocumentationComponent } from './theme.component';
import { ThemeDocumentationService } from './theme.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ThemeDocumentationComponent
	],
	exports: [
		ThemeDocumentationComponent
	],
	providers: [
		ThemeDocumentationService,
	]
})
export class ThemeDocumentationModule {}
