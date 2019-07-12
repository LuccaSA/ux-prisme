import { strings, Path, join } from '@angular-devkit/core';
import {
	Rule,
	SchematicContext,
	Tree,
	apply,
	url,
	template,
	move,
	chain,
	branchAndMerge,
	mergeWith,
	schematic,
	DirEntry,
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { findModuleFromOptions, buildRelativePath } from '@schematics/angular/utility/find-module';
import { IFeatureOptions } from './schema';
import { addComponentDeclarationToModule, addModuleImportToModule, readIntoSourceFile } from '../utils/index';
import { updateIndex } from '@lucca/schematics';
import { SourceFile, Node, SyntaxKind } from 'typescript';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { insertImport, findNodes } from '@schematics/angular/utility/ast-utils';

const PAGE_EXT = '.page.ts';
export default function example(options: IFeatureOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const initialOptions = { ...options };
		const workspace = getWorkspace(tree);
		if (!options.project) {
			options.project = workspace.defaultProject || Object.keys(workspace.projects)[0];
		}
		const project = workspace.projects[options.project];
		options.prefix = project.prefix;
		if (options.path === undefined) {
			const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
			options.path = `/${project.root}/src/${projectDirName}`;
		}

		const modulePath = findModuleFromOptions(tree, options);

		if (options.guidelines) {
			const parsedGuidelinesPath = parseName('', options.name);
			options.guidelines = `guidelines${parsedGuidelinesPath.path}/${strings.dasherize(parsedGuidelinesPath.name)}/${strings.dasherize(parsedGuidelinesPath.name)}.guidelines.md`;
		}
		const parsedPath = parseName(options.path, options.name);
		options.name = parsedPath.name;
		options.path = `${parsedPath.path}/${parsedPath.name}`;
		options.module = `${parsedPath.path}/${parsedPath.name}/${parsedPath.name}.module.ts`;
		const indexPath = `${parsedPath.path}/${parsedPath.name}/index.ts`;

		const groupPagePath = findGroupPageFromOptions(tree, options);

		const templateSource = apply(url('./files'), [
			template({
				...strings,
				...options,
			}),
			move(options.path),
		]);
		const preliminarySchems = [
			schematic('module', initialOptions),
		];
		if (options.guidelines) {
			preliminarySchems.push(schematic('guidelines', initialOptions));
		}
		const rule = chain([
			branchAndMerge(
				chain([
					...preliminarySchems,
					mergeWith(templateSource),
				])
			),
			updateIndex(indexPath, options, 'page') as any,
			addComponentDeclarationToModule(options, 'feature'),
			addModuleImportToModule(modulePath as string, options),
			addPageToGroupPage(groupPagePath, options),
		]);
		return rule(tree, _context);
	};
}


function findGroupPageFromOptions(host: Tree, options: IFeatureOptions): Path | undefined {
	const path = options.path;
	if (!path) { return; }
	let dir: DirEntry | null = host.getDir(path);
	while (dir) {
		const matches = dir.subfiles.filter(p => p.endsWith(PAGE_EXT));
		if (matches.length === 1) {
			return join(dir.path, matches[0]);
		}
		dir = dir.parent;
	}
}
function addPageToGroupPage(groupPagePath: Path | undefined, options: IFeatureOptions) {
	return (host: Tree) => {
		if (!groupPagePath) { return host; }

		const source = readIntoSourceFile(host, groupPagePath);
		const pagePath = `/${options.path}/${strings.dasherize(options.name)}.page`;
		const relativePath = buildRelativePath(groupPagePath, pagePath);
		const pageName = `${strings.camelize(options.name)}Page`;
		const changes = addSubpage(source, groupPagePath, pagePath, pageName, relativePath);
		const recorder = host.beginUpdate(groupPagePath);
		for (const change of changes) {
			if (change instanceof InsertChange) {
				recorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(recorder);
		return host;
	};
}
function addSubpage(source: SourceFile, groupPagePath: string, pagePath: string, pageName: string, relativePath: string): Change[] {
	const changes: Change[] = [];
	// insert import { xxxPage } from './xxx/xxx.page';
	const insertImportChange = insertImport(source, groupPagePath, pageName, relativePath);
	changes.push(insertImportChange);

	// find node containing all subpages
	const subpagesNode = findSubPagesNode(source);
	if (!!subpagesNode) {
		const statement = `\r\n\t${pageName},`;
		const subpagesChange = new InsertChange(groupPagePath, subpagesNode.pos, statement);
		changes.push(subpagesChange);
	}
	return changes;
}
function findSubPagesNode(source: SourceFile): Node | null {
	const newNode = findNodes(source, SyntaxKind.NewKeyword)[0];
	if (!newNode) { return null; }
	const constructorNode = newNode.parent;
	const subpagesNode = constructorNode.getChildAt(3).getChildAt(4).getChildAt(1);

	return subpagesNode;
}
