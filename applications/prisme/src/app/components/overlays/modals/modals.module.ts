import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModalsFeature } from './modals.feature';
import { BasicExample, BasicModalContent } from './basic/basic.example';
import { LuOverlayModule } from '@lucca-front/ng';

@NgModule({
	imports: [
		CommonModule,
		LuOverlayModule,
	],
	declarations: [
		ModalsFeature,
		BasicExample,
		BasicModalContent,
	],
	entryComponents: [
		BasicExample,
		BasicModalContent,
	]
})
export class ModalsModule {}
