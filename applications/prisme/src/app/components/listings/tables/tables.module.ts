import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TablesFeature } from './tables.feature';
import { BasicExampleComponent } from './basic/basic.component';
import { ZebraExampleComponent } from './zebra/zebra.component';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { SortableExampleComponent } from './sortable/sortable.component';
import { ActionsExampleComponent } from './actions/actions.component';
import { CardExampleComponent } from './card/card.component';
import { FiltersExampleComponent } from './filters/filters.component';
import { DraggableExample } from './draggable/draggable.example';
import { SizesExample } from './sizes/sizes.example';
import { VerticalAlignmentExample } from './vertical-alignment/vertical-alignment.example';
import { HorizontalAlignmentExample } from './horizontal-alignment/horizontal-alignment.example';
import { BorderlessExample } from './borderless/borderless.example';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		TablesFeature,
		BasicExampleComponent,
		ZebraExampleComponent,
		ClickableExampleComponent,
		SortableExampleComponent,
		ActionsExampleComponent,
		CardExampleComponent,
		FiltersExampleComponent,
		DraggableExample,
		SizesExample,
		VerticalAlignmentExample,
		HorizontalAlignmentExample,
		BorderlessExample,
	],
	entryComponents: [
		BasicExampleComponent,
		ZebraExampleComponent,
		ClickableExampleComponent,
		SortableExampleComponent,
		ActionsExampleComponent,
		CardExampleComponent,
		FiltersExampleComponent,
		DraggableExample,
		SizesExample,
		VerticalAlignmentExample,
		HorizontalAlignmentExample,
		BorderlessExample,
	]
})
export class TablesModule { }
