import { ModuleWithProviders, NgModule } from '@angular/core';
import { BASE_URL } from './base-url.token';
@NgModule({})
export class EnvironmentModule {
	public static forRoot(options: { baseUrl?: string }): ModuleWithProviders {
		return {
			ngModule: EnvironmentModule,
			providers: [
				{ provide: BASE_URL, useValue: options.baseUrl },
			]
		};
	}
}
