import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TooltipsFeature } from './tooltips.feature';
import { LuTooltipModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';
import { DisabledExample } from './disabled/disabled.example';
import { HtmlExample } from './html/html.example';
import { PositionExample } from './position/position.example';

@NgModule({
	imports: [
		CommonModule,
		LuTooltipModule,
	],
	declarations: [
	TooltipsFeature,
	BasicExample,
	DisabledExample,
	HtmlExample,
	PositionExample],
	entryComponents: [
	BasicExample,
	DisabledExample,
	HtmlExample,
	PositionExample]
})
export class TooltipsModule {}
