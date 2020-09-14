import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LuInputModule } from '@lucca-front/ng/input';
import { LuOptionModule } from '@lucca-front/ng/option';
import { LuSelectModule } from '@lucca-front/ng/select';
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
		LuInputModule,
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
