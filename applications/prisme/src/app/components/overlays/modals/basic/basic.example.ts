import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {
	constructor(public dialog: MatDialog) { }
	openDialog(): void {
		this.dialog.open(DialogTestComponent);
	}
}
@Component({
	selector: 'pri-dialog-test',
	template: `<h1>C'est un dialog</h1>`
})
export class DialogTestComponent {}
