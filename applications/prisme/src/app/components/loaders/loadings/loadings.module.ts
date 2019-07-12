import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { LoadingsFeature } from './loadings.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { LabelExampleComponent } from './label/label.example';
import { BlockExampleComponent } from './block/block.example';
import { InvertedExampleComponent } from './inverted/inverted.example';
import { BigExample } from './big/big.example';
import { FullPageExample } from './full-page/full-page.example';
import { DialogExample } from './dialog/dialog.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		LoadingsFeature,
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
		BigExample,
		FullPageExample,
		DialogExample,
	],
	entryComponents: [
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
		BigExample,
		FullPageExample,
		DialogExample,
	]
})
export class LoadingsModule { }
