import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';
import { PageItemModule } from './option';


@NgModule({
	imports: [
		PageItemModule,
		FormsModule,
		LuModule
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
})
export class SearchModule { }
