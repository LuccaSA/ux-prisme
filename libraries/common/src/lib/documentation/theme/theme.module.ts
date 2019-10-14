import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDocumentationComponent } from './theme.component';
import { ThemeDocumentationService } from './theme.service';
import { LuTooltipModule } from '@lucca-front/ng';

@NgModule({
	imports: [
		CommonModule,
		LuTooltipModule
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
