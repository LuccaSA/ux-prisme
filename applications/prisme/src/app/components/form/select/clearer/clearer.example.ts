import { Component } from '@angular/core';

@Component({
	selector: 'pri-clearer-example',
	templateUrl: './clearer.example.html'
})
export class ClearerExample {
	red = { id: 1, name: 'red' };
	green = { id: 2, name: 'green' };
	yellow = { id: 3, name: 'yellow' };
	blue = { id: 4, name: 'blue' };
	item = this.red;
}
