import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ressourcesPage } from './ressources.page';

@NgModule({
	imports: [
		RouterModule.forChild(ressourcesPage.subRoutes()),
	],
	exports: [
		RouterModule,
	],
})
export class ResourcesRoutingModule {}
