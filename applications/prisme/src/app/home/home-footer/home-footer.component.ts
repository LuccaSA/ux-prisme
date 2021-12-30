import { Component } from '@angular/core';
import { ITool } from '@prisme/common';

@Component({
	selector: 'pri-home-footer',
	templateUrl: './home-footer.component.html',
	styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent {
	figma = {
		title: 'Une maquette a faire ?',
		description: 'Découvrez notre librairie figma',
		link: 'https://www.figma.com/file/sO3msermeMuyFvUAcXrbn5/Main-Components-2.0?node-id=0%3A1',
		href: 'assets/figma.png',
	} as ITool;
	github = {
		title: `Besoin d'une évolution ?`,
		description: 'Contribuez sur GitHub',
		link: 'https://github.com/LuccaSA/lucca-front',
		href: 'assets/github.png',
	} as ITool;
	ressources = {
		title: `Besoin de notre logo ou d'illustrations ?`,
		description: 'Retrouver nos illustrations ici',
		link: '/identity/identity-ressources/logos',
		href: 'assets/prismeressources.png',
	} as ITool;
}
