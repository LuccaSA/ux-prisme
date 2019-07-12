import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { isClassDocumentation, IClassDocumentation } from './class.model';
import { IDocumentationService, IDocumentation } from '../documentation.model';

@Injectable()
export class ClassDocumentationService implements IDocumentationService<IClassDocumentation> {
	get(key: string): IClassDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = NG_DOCS[key] as IDocumentation;
		if (isClassDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IClassDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
