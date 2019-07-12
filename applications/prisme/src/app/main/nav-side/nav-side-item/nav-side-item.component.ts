import { Component, Input} from '@angular/core';

@Component({
	selector: 'pri-nav-side-item',
	templateUrl: './nav-side-item.component.html',
	styleUrls: ['./nav-side-item.component.scss']
})
export class NavSideItemComponent {
	@Input() link: string;
}
