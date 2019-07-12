import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { FileFeature } from './file.feature';
import { StatesExampleComponent } from './states/states.example';
import { CompactExampleComponent } from './compact/compact.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		FileFeature,
		StatesExampleComponent,
		CompactExampleComponent,
	],
	entryComponents: [
		StatesExampleComponent,
		CompactExampleComponent,
	]
})
export class FileModule { }
