import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { IDocumentationService, IDocumentation } from '../documentation.model';
import { IPipeDocumentation, isPipeDocumentation } from './pipe.model';

@Injectable()
export class PipeDocumentationService implements IDocumentationService<IPipeDocumentation> {
	get(key: string): IPipeDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		const doc = {...NG_DOCS[key]} as IDocumentation;
		if (isPipeDocumentation(doc)) {
			return doc;
		}
		return;
	}
	all(): IPipeDocumentation[] {
		return Object.keys(NG_DOCS).map(k => this.get(k)).filter(d => !!d);
	}
}
