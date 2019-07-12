import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeTabComponent } from './code-tab.component';
import { CodeTabsComponent } from './code-tabs.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		CodeTabComponent,
		CodeTabsComponent
	],
	exports: [
		CodeTabsComponent
	],
	entryComponents: [
		CodeTabsComponent
	]
})
export class CodeModule {}
