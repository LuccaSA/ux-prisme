import { IClassDocumentation } from '../class/index';
import { IPropertyDocumentation, IMethodDocumentation } from '../interface/index';
import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IDirectiveDocumentation extends IClassDocumentation {
	selector: string;
	exportAs: string;
	inputs: IInputDocumentation[];
	outputs: IOutputDocumentation[];
}
export interface IInputDocumentation extends IPropertyDocumentation {}
export interface IOutputDocumentation extends IMethodDocumentation {}
export function isDirectiveDocumentation(doc: IDocumentation): doc is IDirectiveDocumentation {
	return doc.type === DocumentationType.directive;
}