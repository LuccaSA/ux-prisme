import { Component } from '@angular/core';

@Component({
	selector: 'pri-displayer-example',
	templateUrl: './displayer.example.html'
})
export class DisplayerExample {
	red = { id: 1, name: 'red' };
	green = { id: 2, name: 'green' };
	yellow = { id: 3, name: 'yellow' };
	blue = { id: 4, name: 'blue' };
	item = this.red;
}
