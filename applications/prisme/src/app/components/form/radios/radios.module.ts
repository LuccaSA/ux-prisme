import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { RadiosFeature } from './radios.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		RadiosFeature,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	]
})
export class RadiosModule { }
