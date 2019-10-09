import { Component, OnInit, Input } from '@angular/core';
import { IThemeDocumentation, ThemeDocumentationType } from './theme.model';
import { ThemeDocumentationService } from './theme.service';

@Component({
	selector: 'pri-theme',
	templateUrl: './theme.component.html',
	styleUrls: ['./theme.component.scss']
})
export class ThemeDocumentationComponent implements OnInit {
	@Input() set documentation(doc: IThemeDocumentation) {
		this.theme = doc;
		const flatTheme =  [].concat(...doc.children.map(
			(acc: IThemeDocumentation) => this.flattenChildren(acc)));
		this.flatTheme =  flatTheme;
	}
	theme: IThemeDocumentation;
	type: any = ThemeDocumentationType;
	flatTheme: IThemeDocumentation[];

	constructor(private docService: ThemeDocumentationService) {}
	ngOnInit(): void {}

	private flattenChildren(prop: IThemeDocumentation, parentName: string = ''): IThemeDocumentation[] {
		if (!prop.children) {
			return [this.processValue(prop)];
		}
		const result: IThemeDocumentation[] = [];
		for (let p of prop.children) {
			if (p.children) {
				const prefix = parentName !== '' ? parentName + '.' + prop.name : prop.name;
				result.push(...this.flattenChildren(p, prefix));
			} else {
				p = this.processValue(p);
				result.push({
					name: `${parentName !== '' ? parentName + ' > ' : ''}${prop.name} > ${p.name}`,
					value: p.value,
					realValue: p.realValue,
					propertyType: p.propertyType
				});
			}
		}
		return result;
	}

	private processValue(property: IThemeDocumentation): IThemeDocumentation {
		if (property.value.includes('_color')) {
			return this.processColorValue(property);
		} else if (property.value.includes('_theme')) {
			return this.processThemeValue(property);
		}

		if (this.isPropertyValueColor(property.value)) {
			property.propertyType = ThemeDocumentationType.COLOR;
		}

		return property;
	}

	private processThemeValue(property: IThemeDocumentation): IThemeDocumentation {
		const regex = new RegExp('"(.*?)"');
		const result = regex.exec(property.value);
		const path = result[1].split('.');
		const realValue = this.findProperty(path);
		if (realValue) {
			return {
				name: property.name,
				value: property.value,
				realValue: realValue,
				propertyType: this.isPropertyValueColor(realValue) ? ThemeDocumentationType.COLOR : ThemeDocumentationType.VAR
			};
		}
		return property;
	}

	private processColorValue(property: IThemeDocumentation): IThemeDocumentation {
		const regex = new RegExp('"(.*?)"', 'g');
		const path = ['palettes'];
		let result;
		let counter = 0;
		while ( (result = regex.exec(property.value)) !== null) {
			if (counter === 0 && result[1].startsWith('text')) {
				path[0] = 'colors';
			}
			path.push(...result[1].split('.'));
			counter++;
		}
		if (counter === 1) {
			path.push('color');
		}
		const realValue = this.findProperty(path);
		if (realValue) {
			return {
				name: property.name,
				value: property.value,
				realValue: realValue,
				propertyType: ThemeDocumentationType.COLOR
			};
		}
		return property;
	}

	private findProperty(path: string[]): string {
		let node = this.docService.get(path[0]);
		if (!node) {
			return;
		}
		for (let i = 1; i < path.length; i++) {
			node = node.children.find(prop => prop.name.includes(path[i]));
			if (node === null || node === undefined) {
				return;
			}
		}
		return node.value;
	}

	private isPropertyValueColor(value: string): boolean {
		return value.startsWith('#') && value.length < 8;
	}

}
