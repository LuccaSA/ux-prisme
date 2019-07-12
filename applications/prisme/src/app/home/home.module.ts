import { NgModule } from '@angular/core';
import { SearchModule } from '../search';
import { CommonModule } from '@prisme/common';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		SearchModule,
		HeaderModule,
	],
	declarations: [
		HomeSplashComponent,
		HomeFooterComponent,
		HomeComponent
	],
	entryComponents: [
		HomeComponent
	]
})
export class HomeModule { }
