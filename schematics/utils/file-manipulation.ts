import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { addDeclarationToModule, addEntryComponentToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import * as ts from 'typescript';
import { Tree, SchematicsException, SchematicContext } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { IOptions } from '../schema';

export function readIntoSourceFile(host: Tree, modulePath: string) {
	const text = host.read(modulePath);
	if (text === null) {
		throw new SchematicsException(`File ${modulePath} does not exist.`);
	}
	const sourceText = text.toString('utf-8');
	return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
