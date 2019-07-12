import { Component, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
	selector: 'pri-locale-example',
	templateUrl: './locale.example.html',
	providers: [
		{ provide: LOCALE_ID, useValue: 'fr' },
	]
})
export class LocaleExample {
	separator = 12.345;
	thousands = 12345;
}
