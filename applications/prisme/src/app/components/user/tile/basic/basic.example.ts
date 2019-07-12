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
			"href": "https://demo-ux1.ilucca.net/getFile.ashx?id=5e73eabb-a24e-4590-a4c2-6c5de9893185"
		}
	};
}
