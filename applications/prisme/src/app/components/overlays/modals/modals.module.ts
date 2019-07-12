import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModalsFeature } from './modals.feature';
import { BasicExample, DialogTestComponent } from './basic/basic.example';
import { MatDialogModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
	],
	declarations: [
	ModalsFeature,
	DialogTestComponent,
	BasicExample],
	entryComponents: [
	BasicExample, DialogTestComponent]
})
export class ModalsModule {}
