import { IDirectiveDocumentation } from '../directive/index';
import { IComponentDocumentation } from '../component/index';
import { IInjectableDocumentation } from '../injectable/index';
import { IClassDocumentation } from '../class/index';
import { IPipeDocumentation } from '../pipe/index';
import { IDocumentation, DocumentationType } from '../documentation.model';

export type IDeclarable = IDirectiveDocumentation | IComponentDocumentation | IPipeDocumentation;
export type IExportable = IDirectiveDocumentation | IComponentDocumentation | IPipeDocumentation | IModuleDocumentation;
// export type IProvidable = IInjectableDocumentation;
export interface IModuleDocumentation extends IClassDocumentation {
	declarations: IDeclarable[];
	exports: IExportable[];
	// providers: IProvidable[];
}
export function isModuleDocumentation(doc: IDocumentation): doc is IModuleDocumentation {
	return doc.type === DocumentationType.module;
}
