import { IDocumentation } from '../documentation.model';

export enum ThemeDocumentationType {
	COLOR,
	VAR
}

export interface IThemeDocumentation extends IDocumentation {
	path?: string;
	value?: string;
	realValue?: string;
	propertyType?: ThemeDocumentationType;
	children?: Array<IThemeDocumentation>;
}
