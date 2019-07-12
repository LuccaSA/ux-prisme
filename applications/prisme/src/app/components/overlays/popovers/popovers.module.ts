import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { PopoversFeature } from './popovers.feature';
import { BasicExample } from './basic/basic.example';
import { LuPopoverModule } from '@lucca-front/ng';
import { TriggerExample } from './trigger/trigger.example';
import { PositionExample } from './position/position.example';

@NgModule({
	imports: [
		CommonModule,
		LuPopoverModule,
	],
	declarations: [
	PopoversFeature,
	BasicExample,
	TriggerExample,
	PositionExample],
	entryComponents: [
	BasicExample,
	TriggerExample,
	PositionExample]
})
export class PopoversModule {}
