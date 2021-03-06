import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainModule } from './main';

import { AppComponent } from './app.component';
import { MarkdownModule } from '@prisme/common';
import { appRoutes, searchableIndex } from './app.router';
import { PAGES_INDEX } from './search';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		MainModule,

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
		{ provide: PAGES_INDEX, useValue: searchableIndex },
		{ provide: LOCALE_ID, useValue: 'fr-FR' },
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
