import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header';
import { NavSideModule } from './nav-side';

@NgModule({
	imports: [
		RouterModule,
		HeaderModule,
		NavSideModule
	],
	declarations: [
		MainComponent
	],
	entryComponents: [
		MainComponent
	],
})
export class MainModule { }
