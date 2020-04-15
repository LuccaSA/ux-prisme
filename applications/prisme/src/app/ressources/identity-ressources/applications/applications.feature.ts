import { Component } from '@angular/core';
import {
	luccaLogo,
	figgoLogo,
	cleemyLogo,
	popleeLogo,
	paggaLogo,
	timmiLogo,
	figgoPicto,
	cleemyPicto,
	popleePicto,
	paggaPicto,
	timmiPicto,
	figgoBanner,
	cleemyBanner,
	popleeBanner,
	paggaBanner,
	timmiBanner,
	figgoIllu,
	cleemyIllu,
	popleeIllu,
	paggaIllu,
	timmiIllu,
	popleeEntretienPicto,
	popleeRemPicto,
	timmiProjectPicto,
} from './logo.model';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-logos',
	templateUrl: './applications.feature.html',
	styleUrls: ['./applications.feature.scss']
})
export class ApplicationsFeature {
	infos: IFeatureInfos = {
		title: 'Illustrations des apps',
	};

	favicons = [
		luccaLogo,
		figgoLogo,
		cleemyLogo,
		popleeLogo,
		paggaLogo,
		timmiLogo,
	];

	pictos = [
		figgoPicto,
		cleemyPicto,
		popleePicto,
		paggaPicto,
		timmiPicto,
		popleeEntretienPicto,
		popleeRemPicto,
		timmiProjectPicto
	];

	banners = [
		figgoBanner,
		cleemyBanner,
		popleeBanner,
		paggaBanner,
		timmiBanner,
	];

	illus = [
		figgoIllu,
		cleemyIllu,
		popleeIllu,
		paggaIllu,
		timmiIllu,
	];

	getFileIcon(type: string) {
		return `assets/file-icons/${type}.png`;
	}
}
