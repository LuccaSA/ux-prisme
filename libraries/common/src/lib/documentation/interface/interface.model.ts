import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IInterfaceDocumentation extends IDocumentation {
	properties: IPropertyDocumentation[];
	methods: IMethodDocumentation[];
}
export interface IMethodDocumentation extends IDocumentation {
	arguments: IArgumentDocumentation[];
	returnType: string;
}
export interface IPropertyDocumentation extends IDocumentation {
	propertyType: string;
	default?: string;
}
export interface IArgumentDocumentation extends IPropertyDocumentation {}
export function isInterfaceDocumentation(doc: IDocumentation): doc is IInterfaceDocumentation {
	return doc.type === DocumentationType.interface;
}
