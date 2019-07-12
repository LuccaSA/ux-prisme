import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { RouterModule } from '@angular/router';
import { GeneralPrinciplesModule } from './general/general.module';
import { PrinciplesRoutingModule } from './principles.router';
import { MainModule } from '../main';
import { ContentModule } from './content';
import { SaveDataModule } from './save-data';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		GeneralPrinciplesModule,
		PrinciplesRoutingModule,
		ContentModule,
		MainModule,
		SaveDataModule,
	]
})
export class PrinciplesModule { }
