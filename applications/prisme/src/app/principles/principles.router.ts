import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { principlesPage } from './principles.page';

@NgModule({
	imports: [
		RouterModule.forChild(principlesPage.subRoutes()),
	],
	exports: [
		RouterModule,
	],
})
export class PrinciplesRoutingModule {}
