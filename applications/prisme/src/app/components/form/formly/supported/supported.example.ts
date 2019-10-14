import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'pri-supported-example',
	templateUrl: './supported.example.html'
})
export class SupportedExample {
	form = new FormGroup({});
	model = {};
	fields = [
		{
			type: 'input',
			key: 'lastName',
			templateOptions: {
				label: 'Nom - input/text',
				type: 'text',
			}
		},
		{
			type: 'input',
			key: 'age',
			templateOptions: {
				label: 'Age - input/number',
				type: 'number',
			}
		},
		{
			type: 'input',
			key: 'email',
			templateOptions: {
				label: 'Email - input/email',
				type: 'email',
			}
		},
		{
			type: 'input',
			key: 'password',
			templateOptions: {
				label: 'Mot de passe - input/password',
				type: 'password',
			}
		},
		{
			key: 'biography',
			type: 'textarea',
			templateOptions: {
				label: 'biographie - textarea',
				placeholder: 'enter your life journey',
			},
		},
		{
			type: 'select',
			key: 'locomotion',
			templateOptions: {
				label: 'Locomotion - select',
				options: [
					{ id: 'walking', name: 'Pieton' },
					{ id: 'bicycle', name: 'Cycliste' },
					{ id: 'scooter', name: 'Scooter' },
					{ id: 'motocycle', name: 'Motard' },
					{ id: 'car', name: 'Chauffard' },
					{ id: 'mass', name: 'Metro-bus-tram' },
				]
			}
		},
		{
			type: 'radio',
			key: 'situation',
			templateOptions: {
				label: 'Situation - radio',
				options: [
					{ value: 'single', label: 'Celibataire' },
					{ value: 'stateUnion', label: 'Pacse' },
					{ value: 'married', label: 'Marie' },
					{ value: 'divorced', label: 'Divorce' },
				]
			}
		},
		{
			type: 'checkbox',
			key: 'driverLicense',
			templateOptions: {
				label: 'Permis B - checkbox'
			}
		},
		{
			type: 'date',
			key: 'birthDate',
			templateOptions: {
				label: 'Date de naissance - date'
			}
		},
		{
			type: 'department',
			key: 'department',
			templateOptions: {
				label: 'Departement - department'
			}
		},
		{
			type: 'api',
			key: 'role',
			templateOptions: {
				label: 'Role - api',
				api: '/api/v3/roles',
				orderBy: 'name,asc',
				filters: ['isActive=true'],
			}
		},
		{
			type: 'user',
			key: 'manager',
			templateOptions: {
				label: 'Manager - user'
			}
		}
	];
	submittedModel;
	submit() {
		this.submittedModel = { ...this.model };
	}
}
