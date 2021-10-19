import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SwitchesFeature } from './switches.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { SizesComponent } from './sizes/sizes.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		SwitchesFeature,
		BasicExampleComponent,
		InlineExampleComponent,
		SizesComponent,
	],
	entryComponents: [
		BasicExampleComponent,
		InlineExampleComponent,
		SizesComponent,
	]
})
export class SwitchesModule { }
