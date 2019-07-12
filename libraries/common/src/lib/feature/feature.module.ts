import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureHeaderModule } from './header';
import { FeatureContentModule } from './content';

@NgModule({
	imports: [
		CommonModule,
		FeatureHeaderModule,
		FeatureContentModule,
	],
	declarations: [
		FeatureComponent,
	],
	exports: [
		FeatureComponent,
		FeatureHeaderModule,
		FeatureContentModule,
	],
})
export class FeatureModule {}
