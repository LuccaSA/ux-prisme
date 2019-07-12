import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ActionIconsFeature } from './action-icons.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';
import { LoadingExample } from './loading/loading.example';
import { InvertedExample } from './inverted/inverted.example';
import { PalettesExample } from './palettes/palettes.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		ActionIconsFeature,
		BasicExampleComponent,
		StatusExampleComponent,
		LoadingExample,
		InvertedExample,
		PalettesExample
	],
	entryComponents: [
		ActionIconsFeature,
		BasicExampleComponent,
		StatusExampleComponent,
		LoadingExample,
		InvertedExample,
		PalettesExample
	]
})
export class ActionIconsModule {}
