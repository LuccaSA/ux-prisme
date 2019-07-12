import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { addDeclarationToModule, addEntryComponentToModule, addImportToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import * as ts from 'typescript';
import { Tree } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { IOptions } from '../schema';
import { readIntoSourceFile } from './file-manipulation';

export function addComponentDeclarationToModule(
	options: IOptions,
	fileExtension: string = 'component',
	classExtension: string = strings.classify(fileExtension),
	isEntryComponent: boolean = false,
) {
	return (host: Tree) => {
		if (!options.module) {
			return host;
		}
		const modulePath = options.module;
		let source = readIntoSourceFile(host, modulePath);

		const componentPath = `/${options.path}/${strings.dasherize(options.name)}.${fileExtension}`;
		const relativePath = buildRelativePath(modulePath, componentPath);
		const classifiedName = strings.classify(`${options.name}${classExtension}`);
		const declarationChanges = addDeclarationToModule(source, modulePath, classifiedName, relativePath);
		const declarationRecorder = host.beginUpdate(modulePath);
		for (const change of declarationChanges) {
			if (change instanceof InsertChange) {
				declarationRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(declarationRecorder);

		if (isEntryComponent) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);
			const entryComponentRecorder = host.beginUpdate(modulePath);
			const entryComponentChanges = addEntryComponentToModule(source, modulePath, classifiedName, relativePath);
			for (const change of entryComponentChanges) {
				if (change instanceof InsertChange) {
					entryComponentRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(entryComponentRecorder);
		}
		return host;
	};
}

export function addModuleImportToModule(
	modulePath: string,
	options: IOptions,
) {
	return (host: Tree) => {
		if (!options.path) {
			return host;
		}
		const source = readIntoSourceFile(host, modulePath);

		const relativePath = buildRelativePath(modulePath, options.path);
		const moduleName = `${strings.classify(options.name)}Module`;
		const importChanges = addImportToModule(source, options.path, moduleName, relativePath);
		const importRecorder = host.beginUpdate(modulePath);
		for (const change of importChanges) {
			if (change instanceof InsertChange) {
				importRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(importRecorder);
		return host;
	};
}
