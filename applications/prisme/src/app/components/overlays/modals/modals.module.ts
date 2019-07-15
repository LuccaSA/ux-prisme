import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModalsFeature } from './modals.feature';
import { BasicExample, BasicModalContent } from './basic/basic.example';
import { LuOverlayModule } from '@lucca-front/ng';
import { SendingDataExample, SendingDataModalContent } from './sending-data/sending-data.example';
import { FormsModule } from '@angular/forms';
import { RecievingDataExample, RecievingDataModalContent } from './recieving-data/recieving-data.example';

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
		RecievingDataExample,
		RecievingDataModalContent,
	],
	entryComponents: [
		BasicExample,
		BasicModalContent,
		SendingDataExample,
		SendingDataModalContent,
		RecievingDataExample,
		RecievingDataModalContent,
	]
})
export class ModalsModule {}
