import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { CheckboxesFeature } from './checkboxes.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { PartialExampleComponent } from './partial/partial.example';
import { BigExample } from './big/big.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		CheckboxesFeature,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
		PartialExampleComponent,
		BigExample,
	],
	entryComponents: [
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
		PartialExampleComponent,
		BigExample,
	]
})
export class CheckboxesModule { }
