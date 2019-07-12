import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SectionsFeature } from './sections.feature';
import { ContentExampleComponent } from './content/content.example';
import { TitleExampleComponent } from './title/title.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		SectionsFeature,
		ContentExampleComponent,
		TitleExampleComponent
	],
	entryComponents: [
		ContentExampleComponent,
		TitleExampleComponent
	]
})
export class SectionsModule {}
