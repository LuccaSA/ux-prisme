import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ButtonsModule } from './buttons/buttons.module';
import { ActionIconsModule } from './action-icons/action-icons.module';
import { LinksModule } from './links/links.module';
import { ActionsGuidelinesModule } from './guidelines';

@NgModule({
	imports: [
		CommonModule,
		ButtonsModule,
		ActionIconsModule,
		LinksModule,
		ActionsGuidelinesModule
	],
})
export class ActionsModule { }
