import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ColorsModule } from './colors/colors.module';
import { ResourcesRoutingModule } from './resources.router';
import { MainModule } from '../main';
import { TypographyModule } from './typography';
import { IconographyModule } from './iconography';
import { IdentityRessourcesModule } from './identity-ressources';

@NgModule({
	imports: [
		CommonModule,
		ColorsModule,
		ResourcesRoutingModule,
		MainModule,
		TypographyModule,
		IconographyModule,
		IdentityRessourcesModule,
	],
})
export class RessourcesModule { }
