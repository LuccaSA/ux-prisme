import { NgModule } from '@angular/core';
import { AssetService } from './asset.service';
import { AssetSrcDirective } from './asset-src.directive';
import { EnvironmentModule } from '../environment/index';

@NgModule({
	imports: [
		EnvironmentModule,
	],
	declarations: [
		AssetSrcDirective,
	],
	exports: [
		AssetSrcDirective,
	],
	providers: [
		AssetService,
	],
})
export class AssetModule {}
