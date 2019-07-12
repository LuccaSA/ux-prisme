import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import {
	luccaColorJpg72,
	luccaColorJpg150,
	luccaColorPng72,
	luccaColorGif72,
	luccaColorTiff300,
	luccaColorAi,
	luccaWhitePng72,
	luccaWhiteAi,
	jumpingCCColorJpg72,
	jumpingCCColorJpg150,
	jumpingCCColorPng72,
	jumpingCCColorGif72,
	jumpingCCColorTiff300,
	jumpingCCColorAi,
	jumpingCCWhitePng72,
	jumpingCCWhiteAi
} from './assets.model';

@Component({
	selector: 'pri-assets',
	templateUrl: './assets.feature.html',
	styleUrls: ['./assets.feature.scss']
})
export class AssetsFeature {
	infos: IFeatureInfos = {
		title: 'Logos Lucca',
	};
	luccaColoredLogos = [
		luccaColorJpg72,
		luccaColorJpg150,
		luccaColorPng72,
		luccaColorGif72,
		luccaColorTiff300,
		luccaColorAi,
	];

	luccaWhiteLogos = [
		luccaWhitePng72,
		luccaWhiteAi
	];

	jumpingCCColoredLogos = [
		jumpingCCColorJpg72,
		jumpingCCColorJpg150,
		jumpingCCColorPng72,
		jumpingCCColorGif72,
		jumpingCCColorTiff300,
		jumpingCCColorAi,
	];

	jumpingCCWhiteLogos = [
		jumpingCCWhitePng72,
		jumpingCCWhiteAi
	];

	mainLogos = [
		{ name: 'png'}
	];

	getFileIcon(type: string) {
		return `assets/file-icons/${type}.png`;
	}
}
