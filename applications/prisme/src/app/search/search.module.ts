import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { PageItemModule } from './option';
import { LuSelectModule } from '@lucca-front/ng/select';
import { LuInputModule } from '@lucca-front/ng/input';
import { LuOptionModule } from '@lucca-front/ng/option';


@NgModule({
	imports: [
		PageItemModule,
		FormsModule,
		LuSelectModule,
		LuInputModule,
		LuOptionModule,
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
})
export class SearchModule { }
