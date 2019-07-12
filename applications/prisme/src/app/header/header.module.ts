import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SearchModule } from '../search/index';

@NgModule({
	imports: [
		SearchModule,
		RouterModule
	],
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
