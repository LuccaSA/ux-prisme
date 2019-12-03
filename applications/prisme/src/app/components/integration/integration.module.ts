import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { GuidelinesModule } from './guidelines/guidelines.module';
import { ThemingModule } from './theming';

@NgModule({
	imports: [
		GuidelinesModule,
		ThemingModule,
	],
})
export class IntegrationModule { }
