import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModalsFeature } from './modals.feature';
import { BasicExample, BasicModalContent } from './basic/basic.example';
import { LuModalModule } from '@lucca-front/ng/modal';
import { SendingDataExample, SendingDataModalContent } from './sending-data/sending-data.example';
import { FormsModule } from '@angular/forms';
import { RecievingDataExample, RecievingDataModalContent } from './recieving-data/recieving-data.example';
import { AsyncSubmitExample, AsyncSubmitModalContent } from './async-submit/async-submit.example';

@NgModule({
	imports: [
		CommonModule,
		LuModalModule,
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
		AsyncSubmitExample,
		AsyncSubmitModalContent,
	],
	entryComponents: [
		BasicExample,
		BasicModalContent,
		SendingDataExample,
		SendingDataModalContent,
		RecievingDataExample,
		RecievingDataModalContent,
		AsyncSubmitExample,
		AsyncSubmitModalContent,
	]
})
export class ModalsModule {}
