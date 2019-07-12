'use strict';

let fs = require('fs');
let sast = require('sast');
let visit = require('unist-util-visit');
let glob = require('glob');

const distDir = './documentation/scss';
const fileName = 'scss-docs.ts';
const fullFilePath = `${distDir}/${fileName}`;
const sourceFiles = glob.sync("node_modules/@lucca-front/**/*.theme.scss", {
	ignore: ['**/_components.scss', '**/_get-set.scss', '**/_utils.scss']
});

const content = sourceFiles.reduce((soFar, file) => {
	let fileContent = fs.readFileSync(file).toString();
	fileContent = fileContent.replace(/: [^\(](.*?)$/gm, singleQuoteValues);

	// Remove all comments
	fileContent = fileContent.replace(/\/\*[\s\S]*?\*\/|([^:"]|^)\/\/.*$/gm, "");

	// Format content
	fileContent = fileContent.replace(/,(\s*?)(?=\))/gm, "");
	fileContent = fileContent.replace(/\s\s+/gm, " ");
	fileContent = fileContent.replace(/(\r\n|\n|\r|\t)/gm, "");
	soFar += fileContent;
	return soFar;
}, '');

const scssContent = sast.parse(content, {syntax : 'scss'});

let finalContent = 'const SCSS_DOCS = {';

visit(scssContent, 'declaration', (n) => {
	const decl = (sast.jsonify(n));
	if(typeof decl.value === "string") {
		return visit.SKIP;
	}
	finalContent += JSON.stringify(decl.name);
	finalContent += ':';
	finalContent += JSON.stringify(forgeNode(decl.name, decl.value));
	finalContent += ',';
	return visit.SKIP;
});

finalContent += '}; export default SCSS_DOCS;';

if (!fs.existsSync(distDir)) {
	fs.mkdirSync(distDir);
}

fs.writeFile(fullFilePath, finalContent, (err) => {
	if(err) throw err;
});



function forgeNode(key, val) {
	if (typeof val === "object") {
		return forgeMapNode(key, val);
	} else {
		val = removeSingleQuote(val.toString());
		return forgeValueNode(key, val);
	}
}
function forgeValueNode(key, val) {
	return {
		name: key,
		value: val
	};
}
function forgeMapNode(key, val) {
	return {
		name: key,
		children: Object.keys(val).map(key => forgeNode(key, val[key])),
	};
}

function removeSingleQuote(s) {
	if (s.startsWith('\'')) {
		s = s.slice(1);
	}
	if (s.endsWith('\'')) {
		s = s.slice(0, -1);
	}
	return s;
}

function singleQuoteValues(car) {
	let endchar = '';
	if(car.endsWith(',') | car.endsWith(';')) {
		endchar = car[car.length-1];
		car = car.slice(0, -1);
	}
	car = car.slice(2);
	return ': \''+ car + '\'' + endchar;
}
