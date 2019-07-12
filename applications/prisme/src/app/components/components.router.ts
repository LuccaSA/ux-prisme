import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { componentsPage } from './components.page';

@NgModule({
	imports: [
		RouterModule.forChild(componentsPage.subRoutes()),
	],
	exports: [
		RouterModule,
	],
})
export class ComponentsRoutingModule {}
