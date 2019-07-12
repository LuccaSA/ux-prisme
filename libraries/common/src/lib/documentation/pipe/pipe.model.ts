import { IDocumentation, DocumentationType } from '../documentation.model';

export interface IPipeDocumentation extends IDocumentation {
	pipeName: string;
}
export function isPipeDocumentation(doc: IDocumentation): doc is IPipeDocumentation {
	return doc.type === DocumentationType.pipe;
}
