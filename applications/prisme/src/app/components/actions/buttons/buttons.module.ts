import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ButtonsFeature } from './buttons.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { StatusExampleComponent } from './status/status.example';
import { GroupsExampleComponent } from './groups/groups.example';
import { SizesExampleComponent } from './sizes/sizes.example';
import { MoreActionsExample } from './more-actions/more-actions.example';
@NgModule({
	imports: [ CommonModule ],
	declarations: [
		ButtonsFeature,
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		SizesExampleComponent,
		MoreActionsExample
	],
	entryComponents: [
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		SizesExampleComponent,
		MoreActionsExample
	]
})
export class ButtonsModule {}
