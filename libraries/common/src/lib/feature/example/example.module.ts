import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { ExamplesComponent } from './examples.component';
import { CodeModule } from './code/index';
import { SafeContentModule } from './safe-content';
import { ExampleService } from './example.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CodeModule,
		SafeContentModule,
		LuSelectModule,
		LuInputDisplayerModule,
		LuOptionModule
	],
	declarations: [
		ExamplesComponent
	],
	exports: [
		ExamplesComponent
	],
	providers: [
		ExampleService
	]
})
export class ExampleModule {}
