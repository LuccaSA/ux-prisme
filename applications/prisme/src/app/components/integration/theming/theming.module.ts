import { NgModule } from '@angular/core';
import { CommonModule, ThemeDocumentationService } from '@prisme/common';
import { ThemingFeature } from './theming.feature';
import { LuSelectModule } from '@lucca-front/ng/select';
import { LuOptionModule } from '@lucca-front/ng/option';
import { LuInputModule } from '@lucca-front/ng/input';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		LuSelectModule,
		LuInputModule,
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
