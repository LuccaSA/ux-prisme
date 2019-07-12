import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { isComponentDocumentation, IComponentDocumentation } from './component.model';
import { IDocumentationService, IDocumentation } from '../documentation.model';

@Injectable()
export class ComponentDocumentationService implements IDocumentationService<IComponentDocumentation> {
	get(key: string): IComponentDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = NG_DOCS[key] as IDocumentation;
		if (isComponentDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IComponentDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
