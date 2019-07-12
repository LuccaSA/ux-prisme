import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { LinksFeature } from './links.feature';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		LinksFeature,
		BasicExampleComponent
	],
	entryComponents: [
		BasicExampleComponent
	]
})
export class LinksModule {}
