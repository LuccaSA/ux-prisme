import { NgModule } from '@angular/core';
import { CommonModule, ThemeDocumentationService } from '@prisme/common';
import { ThemingFeature } from './theming.feature';
import { LuSelectModule, LuOptionFeederModule, LuOptionModule, LuInputModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		LuSelectModule,
		LuInputModule,
		LuOptionFeederModule,
		LuOptionModule,
	],
	declarations: [
	ThemingFeature],
	entryComponents: [
	],
	providers: [
		ThemeDocumentationService,
	]
})
export class ThemingModule {}
