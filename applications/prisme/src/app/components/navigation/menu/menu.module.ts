import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { MenuFeature } from './menu.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		MenuFeature,
		BasicExampleComponent,
		PalettesExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		PalettesExampleComponent
	]
})
export class MenuModule {}
