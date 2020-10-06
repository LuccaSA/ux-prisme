import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'pri-framed-example',
	templateUrl: './framed.example.html'
})
export class FramedExample {
	form = new FormGroup({});
	model = {};
	fields = [
		{
			className: 'form-group',
			templateOptions: {
				title: 'Titre de la section'
			},
			fieldGroup: [
				{
					className: 'form-group-line',
					fieldGroup: [
						{
							type: 'input',
							key: 'lastName',
							className: 'form-group-line-col mod-md6',

							templateOptions: {
								label: 'Nom',
								required: true,
							}
						},
						{
							type: 'input',
							key: 'firstName',
							className: 'form-group-line-col mod-md6',
							templateOptions: {
								label: 'Prenom',
							}
						},
					]
				},

				{
					type: 'textarea',
					key: 'address',
					templateOptions: {
						label: 'Adresse',
					}
				},
			]
		}

	];
	submittedModel;
	submit() {
		this.submittedModel = { ...this.model };
	}
}
