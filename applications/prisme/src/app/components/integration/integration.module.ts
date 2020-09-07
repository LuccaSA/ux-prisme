import { NgModule } from '@angular/core';
import { GuidelinesModule } from './guidelines';
import { ThemingModule } from './theming';

@NgModule({
	imports: [
		GuidelinesModule,
		ThemingModule,
	],
})
export class IntegrationModule { }
