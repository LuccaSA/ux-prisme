import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AnimationsModule } from './animations/animations.module';
import { FunctionsModule } from './functions';
import { MixinsModule } from './mixins';
import { UtilitiesModule } from './utilities';
import { NumberModule } from './number';

@NgModule({
	imports: [
		CommonModule,
		AnimationsModule,
		FunctionsModule,
		MixinsModule,
		UtilitiesModule,
		NumberModule,
	],
})
export class MiscModule { }
