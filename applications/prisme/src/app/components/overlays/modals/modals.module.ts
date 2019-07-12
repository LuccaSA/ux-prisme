import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModalsFeature } from './modals.feature';
import { BasicExample, BasicModalContent } from './basic/basic.example';
import { LuOverlayModule } from '@lucca-front/ng';
import { SendingDataExample, SendingDataModalContent } from './sending-data/sending-data.example';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		LuOverlayModule,
		FormsModule,
	],
	declarations: [
		ModalsFeature,
		BasicExample,
		BasicModalContent,
		SendingDataExample,
		SendingDataModalContent,
	],
	entryComponents: [
		BasicExample,
		BasicModalContent,
		SendingDataExample,
		SendingDataModalContent,
	]
})
export class ModalsModule {}
