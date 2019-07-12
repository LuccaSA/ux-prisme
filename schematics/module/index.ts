import { strings } from '@angular-devkit/core';
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
	externalSchematic,
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { IModuleOptions } from './schema';
import { updateIndex } from '@lucca/schematics';

export default function factory(options: IModuleOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const initialOptions = { ...options };
		const workspace = getWorkspace(tree);
		if (!options.project) {
			options.project = Object.keys(workspace.projects)[0];
		}
		const project = workspace.projects[options.project];

		if (options.path === undefined) {
			const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
			options.path = `/${project.root}/src/${projectDirName}`;
		}

		const parsedPath = parseName(options.path, options.name);
		options.name = parsedPath.name;
		options.path = `${parsedPath.path}/${parsedPath.name}`;
		const indexPath = `${parsedPath.path}/${parsedPath.name}/index.ts`;

		const templateSource = apply(url('./files'), [
			template({
				...strings,
				...options
			}),
			move(options.path)
		]);
		const rule = chain([
			branchAndMerge(chain([
				externalSchematic('@lucca/schematics', 'index', initialOptions),
				mergeWith(templateSource)
			])),
			updateIndex(indexPath, options, 'module') as any,
		]);
		return rule(tree, _context);
	};
}
