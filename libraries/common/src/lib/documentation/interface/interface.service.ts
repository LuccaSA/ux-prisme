import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { IInterfaceDocumentation, isInterfaceDocumentation } from './interface.model';
import { IDocumentationService, IDocumentation } from '../documentation.model';

@Injectable()
export class InterfaceDocumentationService implements IDocumentationService<IInterfaceDocumentation> {
	get(key: string): IInterfaceDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = NG_DOCS[key] as IDocumentation;
		if (isInterfaceDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IInterfaceDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
