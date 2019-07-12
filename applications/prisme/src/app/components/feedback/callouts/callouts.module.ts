import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { CalloutsFeature } from './callouts.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { TitleExampleComponent } from './title/title.example';
import { KillableExampleComponent } from './killable/killable.example';
import { IconsExampleComponent } from './icons/icons.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		CalloutsFeature,
		BasicExampleComponent,
		PalettesExampleComponent,
		TitleExampleComponent,
		KillableExampleComponent,
		IconsExampleComponent,
	],
	entryComponents: [
		BasicExampleComponent,
		PalettesExampleComponent,
		TitleExampleComponent,
		KillableExampleComponent,
		IconsExampleComponent,
	]
})
export class CalloutsModule { }
