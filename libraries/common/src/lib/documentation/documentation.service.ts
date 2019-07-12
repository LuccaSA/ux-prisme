import { Injectable } from '@angular/core';
import { IDocumentation, IDocumentationService } from './documentation.model';
import { ClassDocumentationService } from './class/index';
import { ComponentDocumentationService } from './component/index';
import { DirectiveDocumentationService } from './directive/index';
import { InjectableDocumentationService } from './injectable/index';
import { InterfaceDocumentationService } from './interface/index';
import { ModuleDocumentationService } from './module/index';
import { PipeDocumentationService } from './pipe/index';
import { ThemeDocumentationService } from './theme/index';

@Injectable()
export class DocumentationService implements IDocumentationService<IDocumentation> {
	constructor(
		protected classService: ClassDocumentationService,
		protected componentService: ComponentDocumentationService,
		protected directiveService: DirectiveDocumentationService,
		protected injectableService: InjectableDocumentationService,
		protected interfaceService: InterfaceDocumentationService,
		protected moduleService: ModuleDocumentationService,
		protected pipeService: PipeDocumentationService,
		protected themeService: ThemeDocumentationService,
	) {}
	get(key: string): IDocumentation {
		const classDoc = this.class(key);
		const componentDoc = this.component(key);
		const directiveDoc = this.directive(key);
		const injectableDoc = this.injectable(key);
		const interfaceDoc = this.interface(key);
		const moduleDoc = this.module(key);
		const pipeDoc = this.pipe(key);
		const themeDoc = this.theme(key);
		return classDoc ||
			componentDoc ||
			directiveDoc ||
			injectableDoc ||
			interfaceDoc ||
			moduleDoc ||
			pipeDoc ||
			themeDoc;
	}
	all(): IDocumentation[] {
		return [
			...this.classService.all(),
			...this.componentService.all(),
			...this.directiveService.all(),
			...this.injectableService.all(),
			...this.interfaceService.all(),
			...this.moduleService.all(),
			...this.pipeService.all(),
			...this.themeService.all(),
		];
	}
	class(key: string) { return this.classService.get(key); }
	component(key: string) { return this. componentService.get(key); }
	directive(key: string) { return this. directiveService.get(key); }
	injectable(key: string) { return this. injectableService.get(key); }
	interface(key: string) { return this. interfaceService.get(key); }
	module(key: string) { return this. moduleService.get(key); }
	pipe(key: string) { return this. pipeService.get(key); }
	theme(key: string) { return this. themeService.get(key); }
}
