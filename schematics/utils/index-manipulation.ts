import { InsertChange, Change } from '@schematics/angular/utility/change';
import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { IOptions } from '../schema';

function insertExport(fileToEdit: string, fileName: string): Change {
	const exportStatement = `export * from '${fileName}';\n`;
	return new InsertChange(fileToEdit, 0, exportStatement);
}

export function updateIndex(options: IOptions, fileExtension: string) {
	return (host: Tree, context: SchematicContext) => {
		const indexPath = `${options.path}/index.ts`;
		const fileRelativePath = `./${strings.dasherize(options.name)}.${fileExtension}`;

		const change = insertExport(indexPath, fileRelativePath);
		if (change) {
			const recorder = host.beginUpdate(indexPath);
			recorder.insertLeft((change as InsertChange).pos, (change as InsertChange).toAdd);
			host.commitUpdate(recorder);
		}

		return host;
	};
}
