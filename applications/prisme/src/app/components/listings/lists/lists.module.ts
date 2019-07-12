import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ListsFeature } from './lists.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		ListsFeature,
		BasicExampleComponent,
		ClickableExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		ClickableExampleComponent
	]
})
export class ListsModule { }
