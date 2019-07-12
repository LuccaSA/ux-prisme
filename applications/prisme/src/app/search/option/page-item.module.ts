import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageItemComponent } from './page-item.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		PageItemComponent,
	],
	exports: [
		PageItemComponent,
	],
})
export class PageItemModule { }
