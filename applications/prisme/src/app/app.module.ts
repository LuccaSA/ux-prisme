import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainModule } from './main';
import { HomeModule } from './home';

import { AppComponent } from './app.component';
import { MarkdownModule, EnvironmentModule } from '@prisme/common';
import { appRoutes, searchableIndex } from './app.router';
import { PAGES_INDEX } from './search';
import { environment } from '../environments/environment';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		HomeModule,
		MainModule,

		EnvironmentModule.forRoot(environment as any),
		MarkdownModule.forRoot(),

		RouterModule.forRoot(appRoutes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			scrollOffset: [0, 100]
		})
	],
	declarations: [
		AppComponent
	],
	providers: [
		{ provide: PAGES_INDEX, useValue: searchableIndex }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
