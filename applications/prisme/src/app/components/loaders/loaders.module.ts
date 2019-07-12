import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { LoadingsModule } from './loadings/loadings.module';
import { ProgressModule } from './progress/progress.module';
import { GaugeModule } from './gauge';

@NgModule({
	imports: [
		CommonModule,
		LoadingsModule,
		ProgressModule,
		GaugeModule,
	]
})
export class LoadersModule { }
