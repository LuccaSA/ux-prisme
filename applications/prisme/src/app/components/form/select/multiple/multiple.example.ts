import { Component } from '@angular/core';

@Component({
	selector: 'pri-multiple-example',
	templateUrl: './multiple.example.html',
	styleUrls: ['./multiple.example.scss']
})
export class MultipleExample {
	red = { id: 1, name: 'red' };
	green = { id: 2, name: 'green' };
	yellow = { id: 3, name: 'yellow' };
	blue = { id: 4, name: 'blue' };
	items = [this.red, this.blue];
}
