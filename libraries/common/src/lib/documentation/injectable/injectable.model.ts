import { IClassDocumentation } from '../class/index';
import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IInjectableDocumentation extends IClassDocumentation {}
export function isInjectableDocumentation(doc: IDocumentation): doc is IInjectableDocumentation {
	return doc.type === DocumentationType.injectable;
}
