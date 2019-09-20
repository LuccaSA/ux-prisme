import { NgModule } from '@angular/core';
import { AssetsModule } from './assets';
import { ApplicationsModule } from './applications';


@NgModule({
	imports: [
		AssetsModule,
		ApplicationsModule
	]
})
export class IdentityRessourcesModule { }
