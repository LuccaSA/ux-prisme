import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ApplicationsModule } from './applications/applications.module';
import { AssetsModule } from './assets/assets.module';
import { ColorsModule } from './colors/colors.module';
import { ResourcesRoutingModule } from './resources.router';
import { MainModule } from '../main';
import { TypographyModule } from './typography';
import { IconographyModule } from './iconography';

@NgModule({
	imports: [
		CommonModule,
		ApplicationsModule,
		AssetsModule,
		ColorsModule,
		ResourcesRoutingModule,
		MainModule,
		TypographyModule,
		IconographyModule,
	],
})
export class RessourcesModule { }
