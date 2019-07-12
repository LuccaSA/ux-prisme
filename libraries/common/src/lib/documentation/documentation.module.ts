import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';
import { ModuleDocumentationModule } from './module/index';
import { InjectableDocumentationModule } from './injectable/index';
import { PipeDocumentationModule } from './pipe/index';
import { DirectiveDocumentationModule } from './directive/index';
import { ComponentDocumentationModule } from './component/index';
import { DocumentationService } from './documentation.service';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
		DirectiveDocumentationModule,
		ComponentDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
		DirectiveDocumentationModule,
		ComponentDocumentationModule,
	],
	providers: [
		DocumentationService,
	]
})
export class DocumentationModule {}
