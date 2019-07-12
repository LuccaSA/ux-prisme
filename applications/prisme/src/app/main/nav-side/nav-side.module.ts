import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSideComponent } from './nav-side.component';
import { NavSideGroupComponent } from './nav-side-group/nav-side-group.component';
import { NavSideItemComponent } from './nav-side-item/nav-side-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		NavSideComponent,
		NavSideGroupComponent,
		NavSideItemComponent
	],
	entryComponents: [
		NavSideComponent,
		NavSideGroupComponent,
		NavSideItemComponent
	]
})
export class NavSideModule { }
