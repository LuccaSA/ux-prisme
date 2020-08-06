import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { IconsFeature } from './icons.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { ColorsExampleComponent } from './colors/colors.example';
import { SizeExampleComponent } from './size/size.example';
import { OldExample } from './old/old.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		IconsFeature,
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent,
		OldExample
	],
	entryComponents: [
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent,
		OldExample
	]
})
export class IconsModule { }
