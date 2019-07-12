import { IInterfaceDocumentation } from '../interface/index';
import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IClassDocumentation extends IInterfaceDocumentation {
	abstract: boolean;
}
export function isClassDocumentation(doc: IDocumentation): doc is IClassDocumentation {
	return doc.type === DocumentationType.class;
}
