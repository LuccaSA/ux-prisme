import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {
	form = new FormGroup({});
	model = {};
	fields = [
		{
			type: 'input',
			key: 'lastName',
			templateOptions: {
				label: 'Nom',
				required: true,
			}
		},
		{
			type: 'input',
			key: 'firstName',
			templateOptions: {
				label: 'Prenom',
			}
		},
	];
	submittedModel;
	submit() {
		this.submittedModel = { ...this.model };
	}
}
