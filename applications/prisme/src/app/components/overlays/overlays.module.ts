import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { CommonModule } from '@prisme/common';
import { ModalsModule } from './modals';
import { TooltipsModule } from './tooltips';
import { PopoversModule } from './popovers';
import { OverlaysGuidelinesModule } from './guidelines';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		ModalsModule,
		TooltipsModule,
		PopoversModule,
		OverlaysGuidelinesModule,
	],
})
export class OverlaysModule {}
