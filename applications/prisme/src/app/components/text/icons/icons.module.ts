import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { IconsFeature } from './icons.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { ColorsExampleComponent } from './colors/colors.example';
import { SizeExampleComponent } from './size/size.example';
import { PreviousExample } from './previous/previous.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		IconsFeature,
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent,
		PreviousExample
	],
	entryComponents: [
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent,
		PreviousExample
	]
})
export class IconsModule { }
