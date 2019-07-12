# Prisme - Lucca Design System
## How to start
Just run `npm start` but remember to run an `npm install` beforehand

## Schematics: the fastest way to add content
To use our schematics, run `npm run build:schematics`. You will then have access to the following schematics.

### ng generate feature
The command `ng generate feature` will scaffold everything you need to add a new feature component.

#### arguments
- `relativePath/name`

#### options
- `--component` : (string) The component name in the ng package.
- `--directive` : (string) The directive name in the ng package.
- `--guidelines` : (bool) link this page to a guidelines md file.
- `--pipe` : (string) The pipe name in the ng package.
- `--theme` : (string) The name of the associated theme map.
- `--title (-t)` : (string) The title of the feature.

### ng generate example
The command `ng generate example` will add an example to a feature and generate the dedicated files.

#### arguments
- `relativePath/name`

#### options
- `--ts` : (bool) if example need to include TS

### Example
You want to document a new component called `Table of content` that will be listed under `Components > Navigation`. It has its own theme called `tableOfContent`. Here's the steps:
1. `ng generate feature components/navigation/table-of-content  --theme tableOfContent -t "Table of content"`
2. `ng generate example components/navigation/table-of-content/basic`

Instead of writing the full path each time, you could go to `applications\prisme\src\app\components\navigation\` and then do :
1. `ng generate feature table-of-content --theme tableOfContent -t "Table of content"`
2. `ng g example table-of-content/basic --ts`
