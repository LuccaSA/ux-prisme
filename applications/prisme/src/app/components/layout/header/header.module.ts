import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { HeaderFeature } from './header.feature';
import { BasicExample } from './basic/basic.example';
import { StickyExample } from './sticky/sticky.example';
import { NavigationExample } from './navigation/navigation.example';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	HeaderFeature,
	BasicExample,
	StickyExample,
	NavigationExample],
	entryComponents: [
	BasicExample,
	StickyExample,
	NavigationExample]
})
export class HeaderModule {}
