import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { CardsFeature } from './cards.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';
import { DisabledExampleComponent } from './disabled/disabled.example';
import { FooterExampleComponent } from './footer/footer.example';
import { GreyExampleComponent } from './grey/grey.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		CardsFeature,
		BasicExampleComponent,
		ClickableExampleComponent,
		DisabledExampleComponent,
		FooterExampleComponent,
		GreyExampleComponent
	],
	entryComponents: [
		BasicExampleComponent,
		ClickableExampleComponent,
		DisabledExampleComponent,
		FooterExampleComponent,
		GreyExampleComponent
	]
})
export class CardsModule {}
