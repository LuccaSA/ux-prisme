import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { IntegrationModule } from './integration/integration.module';
import { ThemingModule } from './theming';

@NgModule({
	imports: [
		IntegrationModule,
		ThemingModule,
	],
})
export class GeneralModule { }
