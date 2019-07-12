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
	mergeWith } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { IGuidelinesOption } from './schema';

export default function guidelines(options: IGuidelinesOption): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const workspace = getWorkspace(tree);
		if (!options.project) {
			options.project = workspace.defaultProject || Object.keys(workspace.projects)[0];
		}
		const project = workspace.projects[options.project];

		if (options.path === undefined) {
			options.path = `/${project.root}/src/guidelines`;
		}
		const imagesPath = `guidelines/${options.name}/images`;


		const parsedPath = parseName(options.path, options.name);
		options.name = parsedPath.name;
		options.path = `${parsedPath.path}/${strings.dasherize(parsedPath.name)}`;

		const templateSource = apply(url('./files'), [
			template({
				...strings,
				...options,
				imagesPath,
			}),
			move(options.path)
		]);
		const rule = chain([
			mergeWith(templateSource),
		]);
		return rule(tree, _context);
	};
}
