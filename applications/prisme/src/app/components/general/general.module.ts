import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { IntegrationModule } from './integration/integration.module';

@NgModule({
	imports: [
		IntegrationModule,
	],
})
export class GeneralModule { }
