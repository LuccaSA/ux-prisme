import { Component } from '@angular/core';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {
	user = {
		"id": 6,
		"firstName": "Chloe",
		"lastName": "Alibert",
		"picture": {
			"href": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Ana%C3%AFs_Demoustier_Cabourg_2015.jpg"
		}
	};
}
