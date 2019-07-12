import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { IDocumentationService, IDocumentation } from '../documentation.model';
import { IInjectableDocumentation, isInjectableDocumentation } from './injectable.model';

@Injectable()
export class InjectableDocumentationService implements IDocumentationService<IInjectableDocumentation> {
	get(key: string): IInjectableDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = {...NG_DOCS[key]} as IDocumentation;
		if (isInjectableDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IInjectableDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
