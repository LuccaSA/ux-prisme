import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { isDirectiveDocumentation, IDirectiveDocumentation } from './directive.model';
import { IDocumentationService, IDocumentation } from '../documentation.model';

@Injectable()
export class DirectiveDocumentationService implements IDocumentationService<IDirectiveDocumentation> {
	get(key: string): IDirectiveDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = NG_DOCS[key] as IDocumentation;
		if (isDirectiveDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IDirectiveDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
