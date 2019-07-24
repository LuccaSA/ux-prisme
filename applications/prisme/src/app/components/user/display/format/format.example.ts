import { Component } from '@angular/core';

@Component({
	selector: 'pri-format-example',
	templateUrl: './format.example.html',
	styleUrls: ['./format.example.scss']
})
export class FormatExample {
	user = { firstName: 'John', lastName: 'Doe' };
	availableFormats = [
		{ id: 'fl', name: 'first last' },
		{ id: 'Fl', name: 'F. last' },
		{ id: 'FL', name: 'F. L.' },
		{ id: 'fL', name: 'first L.' },
		{ id: 'lf', name: 'last first' },
		{ id: 'Lf', name: 'L. first' },
		{ id: 'LF', name: 'L. F.' },
		{ id: 'lF', name: 'last F.' },
		{ id: 'f', name: 'first' },
		{ id: 'F', name: 'F.' },
		{ id: 'l', name: 'last' },
		{ id: 'L', name: 'L.' },
	];
	selectedFormat = { id: 'fl', name: 'first last' };
}
