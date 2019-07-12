import { NgModule, ModuleWithProviders } from '@angular/core';
import { MarkdownSrcDirective } from './markdown-src.directive';
import { AssetModule } from '../asset/index';
import { MarkdownModule as NgxMarkdownModule, MarkedOptions as NgxMarkedOptions } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkedOptions } from './markdown.options';
import { EnvironmentModule } from '../environment/environment.module';

@NgModule({
	imports: [
		HttpClientModule,
		NgxMarkdownModule.forRoot({
			loader: HttpClient,
			markedOptions: {
				provide: NgxMarkedOptions,
				useClass: MarkedOptions
			}
		}),
		EnvironmentModule,
	],
})
export class MarkdownRootModule {}

@NgModule({
	imports: [
		NgxMarkdownModule,
		AssetModule,
	],
	declarations: [
		MarkdownSrcDirective,
	],
	exports: [
		MarkdownSrcDirective,
		NgxMarkdownModule,
	],
})
export class MarkdownModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: MarkdownRootModule,
		};
	}
}
