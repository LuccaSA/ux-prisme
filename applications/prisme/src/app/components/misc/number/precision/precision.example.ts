import { Component } from '@angular/core';

@Component({
	selector: 'pri-precision-example',
	templateUrl: './precision.example.html',
	styleUrls: ['./precision.example.scss']
})
export class PrecisionExample {
	number = 3.141592;
	precision = 2;
}
