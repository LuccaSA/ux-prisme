import { MarkedOptions as NgxMarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { Inject } from '@angular/core';
import { BASE_URL } from '../environment/index';

export class MarkedOptions extends NgxMarkedOptions {
	renderer: MarkedRenderer;
	constructor(@Inject(BASE_URL) baseUrl) {
		super();
		this.renderer = new MarkedRenderer();
		this.renderer.blockquote = (text: string) => {
			return `
			<div class="callout mod-icon palette-info">
				<div class="callout-icon">
					<i class="lucca-icon">info</i>
				</div>
				<span class="extra-infos">${text}</span>
			</div>`;
		};
		this.renderer.heading = (text: string, level: number) => {
			return `<h${level + 1}>${text}</h${level + 1}>`;
		};
		this.renderer.image = (href: string, desc: string, title: string) => {
			let imageReturn = `<figure class="markdown-image-container">
				<a href="${baseUrl}/${href}" target="_blank" class="markdown-image-link"><i class="lucca-icon icon-outside"></i></a>
				<img src="${baseUrl}/${href}" title="${title}" alt="${title}" class="markdown-image"/>`;
			imageReturn += desc ? `<figcaption>${desc}</figcaption></figure>` : `</figure>`;
			return imageReturn;
		};
		this.renderer.code = (text: string, classes: string, isEscaped: boolean) => {
			return `<div class="markdown-block ${classes}">${text}</div>`;
		};
	}

}
