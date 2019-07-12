import { IDirectiveDocumentation } from '../directive/index';
import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IComponentDocumentation extends IDirectiveDocumentation {}
export function isComponentDocumentation(doc: IDocumentation): doc is IComponentDocumentation {
	return doc.type === DocumentationType.component;
}
