import { NgModule } from '@angular/core';
import { FeatureHeaderComponent } from './feature-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ FeatureHeaderComponent ],
	exports: [ FeatureHeaderComponent ],
})
export class FeatureHeaderModule {}
