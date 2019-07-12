import { Injectable } from '@angular/core';
import SCSS_DOCS from '@prisme/documentation/scss';
import { IThemeDocumentation } from './theme.model';
import { DocumentationType, IDocumentationService } from '../documentation.model';

@Injectable()
export class ThemeDocumentationService implements IDocumentationService<IThemeDocumentation> {
	get(key: string): IThemeDocumentation {
		if (!SCSS_DOCS.hasOwnProperty(key)) {
			return;
		}
		return { ...SCSS_DOCS[key], type: DocumentationType.theme };
	}
	all(): IThemeDocumentation[] {
		return Object.keys(SCSS_DOCS).map(k => this.get(k));
	}
}
