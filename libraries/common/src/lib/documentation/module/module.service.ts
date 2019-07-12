import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { IDocumentationService, IDocumentation } from '../documentation.model';
import { IModuleDocumentation, isModuleDocumentation } from './module.model';

@Injectable()
export class ModuleDocumentationService implements IDocumentationService<IModuleDocumentation> {
	get(key: string): IModuleDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = {...NG_DOCS[key]} as IDocumentation;
		if (isModuleDocumentation(doc)) {
			doc.declarations = (<string[]><any[]>doc.declarations || []).map(k => NG_DOCS[k]);
			doc.exports = (<string[]><any[]>doc.exports || []).map(k => NG_DOCS[k]);
			// doc.providers = (<string[]><any[]>doc.providers || []).map(k => NG_DOCS[k]);
			return doc;
		}
		return;
	}
	all(): IModuleDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
