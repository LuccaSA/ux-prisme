const NG_DOCS = {
  "ISuggestion": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "type": "interface",
    "name": "ISuggestion",
    "className": "ISuggestion",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "propertyType": "T",
        "description": ""
      },
      {
        "name": "relevance",
        "propertyType": "any",
        "description": ""
      }
    ]
  },
  "IApiItem": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "type": "interface",
    "name": "IApiItem",
    "className": "IApiItem",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "id",
        "propertyType": "TId",
        "description": ""
      },
      {
        "name": "name",
        "propertyType": "string",
        "description": ""
      }
    ]
  },
  "IApiResponse": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "type": "interface",
    "name": "IApiResponse",
    "className": "IApiResponse",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "data",
        "propertyType": "D",
        "description": ""
      }
    ]
  },
  "IApiCollectionResponse": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "type": "interface",
    "name": "IApiCollectionResponse",
    "className": "IApiCollectionResponse",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiModule": {
    "fileName": "libraries/core/src/lib/api/api.module.ts",
    "type": "module",
    "className": "LuApiModule",
    "name": "LuApiModule",
    "declarations": [],
    "exports": [
      "LuApiSelectModule"
    ]
  },
  "LuApiSelectModule": {
    "fileName": "libraries/core/src/lib/api/select/api-select.module.ts",
    "type": "module",
    "className": "LuApiSelectModule",
    "name": "LuApiSelectModule",
    "declarations": [],
    "exports": [
      "LuApiFeederModule",
      "LuApiSearcherModule",
      "LuApiPagerModule",
      "LuApiSelectInputModule"
    ]
  },
  "LuApiFeederComponent": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.component.ts",
    "name": "LuApiFeederComponent",
    "type": "component",
    "className": "LuApiFeederComponent",
    "description": "",
    "selector": "lu-api-feeder",
    "inputs": [
      {
        "name": "api",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => T",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionFeeder": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "type": "interface",
    "name": "ILuApiOptionFeeder",
    "className": "ILuApiOptionFeeder",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiFeederService": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "type": "interface",
    "name": "ILuApiFeederService",
    "className": "ILuApiFeederService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuApiOptionFeeder": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "type": "class",
    "name": "ALuApiOptionFeeder",
    "className": "ALuApiOptionFeeder",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ]
  },
  "ALuApiFeederService": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "type": "class",
    "name": "ALuApiFeederService",
    "className": "ALuApiFeederService",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "url",
        "propertyType": "string",
        "description": ""
      }
    ]
  },
  "LuApiFeederModule": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.module.ts",
    "type": "module",
    "className": "LuApiFeederModule",
    "name": "LuApiFeederModule",
    "declarations": [
      "LuApiFeederComponent"
    ],
    "exports": [
      "LuApiFeederComponent"
    ]
  },
  "LuApiFeederService": {
    "type": "injectable",
    "name": "LuApiFeederService",
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.service.ts",
    "className": "LuApiFeederService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiSelectInputComponent": {
    "fileName": "libraries/core/src/lib/api/select/input/api-select-input.component.ts",
    "name": "LuApiSelectInputComponent",
    "type": "component",
    "className": "LuApiSelectInputComponent",
    "description": "",
    "selector": "lu-api-select",
    "inputs": [
      {
        "name": "api",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "multiple",
        "propertyType": "string | boolean",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "placeholder",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => T",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "isDisabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "propertyType": "number",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "onClick",
        "description": "bind to dom events",
        "arguments": [],
        "returnType": "void"
      }
    ]
  },
  "LuApiSelectInputModule": {
    "fileName": "libraries/core/src/lib/api/select/input/api-select-input.module.ts",
    "type": "module",
    "className": "LuApiSelectInputModule",
    "name": "LuApiSelectInputModule",
    "declarations": [
      "LuApiSelectInputComponent"
    ],
    "exports": [
      "LuApiSelectInputComponent"
    ]
  },
  "LuApiPagerComponent": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.component.ts",
    "name": "LuApiPagerComponent",
    "type": "component",
    "className": "LuApiPagerComponent",
    "description": "",
    "selector": "lu-api-pager",
    "inputs": [
      {
        "name": "api",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionPager": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "type": "interface",
    "name": "ILuApiOptionPager",
    "className": "ILuApiOptionPager",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiPagerService": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "type": "interface",
    "name": "ILuApiPagerService",
    "className": "ILuApiPagerService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuApiOptionPager": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "type": "class",
    "name": "ALuApiOptionPager",
    "className": "ALuApiOptionPager",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "loading$",
        "propertyType": "Observable<boolean>",
        "description": ""
      },
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ]
  },
  "ALuApiPagerService": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "type": "class",
    "name": "ALuApiPagerService",
    "className": "ALuApiPagerService",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiPagerModule": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.module.ts",
    "type": "module",
    "className": "LuApiPagerModule",
    "name": "LuApiPagerModule",
    "declarations": [
      "LuApiPagerComponent"
    ],
    "exports": [
      "LuApiPagerComponent"
    ]
  },
  "LuApiPagerService": {
    "type": "injectable",
    "name": "LuApiPagerService",
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.service.ts",
    "className": "LuApiPagerService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiSearcherComponent": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.component.ts",
    "name": "LuApiSearcherComponent",
    "type": "component",
    "className": "LuApiSearcherComponent",
    "description": "",
    "selector": "lu-api-searcher",
    "inputs": [
      {
        "name": "api",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "propertyType": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "propertyType": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuApiPagedSearcherComponent": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.component.ts",
    "name": "LuApiPagedSearcherComponent",
    "type": "component",
    "className": "LuApiPagedSearcherComponent",
    "description": "",
    "selector": "lu-api-paged-searcher",
    "inputs": [
      {
        "name": "api",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "propertyType": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "propertyType": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "interface",
    "name": "ILuApiOptionSearcher",
    "className": "ILuApiOptionSearcher",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "interface",
    "name": "ILuApiSearcherService",
    "className": "ILuApiSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuApiOptionSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "class",
    "name": "ALuApiOptionSearcher",
    "className": "ALuApiOptionSearcher",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "loading$",
        "propertyType": "Observable<boolean>",
        "description": ""
      },
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ]
  },
  "ALuApiSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "class",
    "name": "ALuApiSearcherService",
    "className": "ALuApiSearcherService",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiOptionPagedSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "interface",
    "name": "ILuApiOptionPagedSearcher",
    "className": "ILuApiOptionPagedSearcher",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiPagedSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "interface",
    "name": "ILuApiPagedSearcherService",
    "className": "ILuApiPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuApiPagedSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "class",
    "name": "ALuApiPagedSearcherService",
    "className": "ALuApiPagedSearcherService",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuApiOptionPagedSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "type": "class",
    "name": "ALuApiOptionPagedSearcher",
    "className": "ALuApiOptionPagedSearcher",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "loading$",
        "propertyType": "Observable<boolean>",
        "description": ""
      },
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ]
  },
  "LuApiSearcherModule": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.module.ts",
    "type": "module",
    "className": "LuApiSearcherModule",
    "name": "LuApiSearcherModule",
    "declarations": [
      "LuApiSearcherComponent",
      "LuApiPagedSearcherComponent"
    ],
    "exports": [
      "LuApiSearcherComponent",
      "LuApiPagedSearcherComponent"
    ]
  },
  "LuApiSearcherService": {
    "type": "injectable",
    "name": "LuApiSearcherService",
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.service.ts",
    "className": "LuApiSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiPagedSearcherService": {
    "type": "injectable",
    "name": "LuApiPagedSearcherService",
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.service.ts",
    "className": "LuApiPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuClearer": {
    "fileName": "libraries/core/src/lib/input/clearer/clearer.model.ts",
    "type": "interface",
    "name": "ILuClearer",
    "className": "ILuClearer",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onClear",
        "propertyType": "Observable<T>",
        "description": ""
      }
    ]
  },
  "ALuClearer": {
    "fileName": "libraries/core/src/lib/input/clearer/clearer.model.ts",
    "type": "class",
    "name": "ALuClearer",
    "className": "ALuClearer",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onClear",
        "propertyType": "Observable<T>",
        "description": ""
      }
    ]
  },
  "LuInputDisplayerDirective": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.directive.ts",
    "name": "LuInputDisplayerDirective",
    "type": "directive",
    "className": "LuInputDisplayerDirective",
    "description": "",
    "selector": "[luDisplayer]",
    "inputs": [
      {
        "name": "luDisplayerMultiple",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "multiple",
        "propertyType": "string | boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuInputDisplayerContext": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.directive.ts",
    "type": "class",
    "name": "LuInputDisplayerContext",
    "className": "LuInputDisplayerContext",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuInputDisplayer": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.model.ts",
    "type": "interface",
    "name": "ILuInputDisplayer",
    "className": "ILuInputDisplayer",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "multiple",
        "propertyType": "boolean",
        "description": ""
      }
    ]
  },
  "ALuInputDisplayer": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.model.ts",
    "type": "class",
    "name": "ALuInputDisplayer",
    "className": "ALuInputDisplayer",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "multiple",
        "defaultValue": "false",
        "propertyType": "boolean",
        "description": ""
      }
    ]
  },
  "LuInputDisplayerModule": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.module.ts",
    "type": "module",
    "className": "LuInputDisplayerModule",
    "name": "LuInputDisplayerModule",
    "declarations": [
      "LuInputDisplayerDirective"
    ],
    "exports": [
      "LuInputDisplayerDirective"
    ]
  },
  "LuInputDirective": {
    "fileName": "libraries/core/src/lib/input/input.directive.ts",
    "name": "LuInputDirective",
    "type": "directive",
    "className": "LuInputDirective",
    "description": "adds class is-filled when model is empty",
    "selector": "[luInput]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ILuInput": {
    "fileName": "libraries/core/src/lib/input/input.model.ts",
    "type": "interface",
    "name": "ILuInput",
    "className": "ILuInput",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuInputWithPicker": {
    "fileName": "libraries/core/src/lib/input/input.model.ts",
    "type": "interface",
    "name": "ILuInputWithPicker",
    "className": "ILuInputWithPicker",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuInput": {
    "fileName": "libraries/core/src/lib/input/input.model.ts",
    "type": "class",
    "name": "ALuInput",
    "className": "ALuInput",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "placeholder",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "value",
        "propertyType": "T",
        "description": ""
      }
    ]
  },
  "LuInputModule": {
    "fileName": "libraries/core/src/lib/input/input.module.ts",
    "type": "module",
    "className": "LuInputModule",
    "name": "LuInputModule",
    "declarations": [
      "LuInputDirective"
    ],
    "exports": [
      "LuInputDisplayerModule",
      "LuInputDirective"
    ]
  },
  "ILuPickerPanel": {
    "fileName": "libraries/core/src/lib/input/picker/input-picker.model.ts",
    "type": "interface",
    "name": "ILuPickerPanel",
    "className": "ILuPickerPanel",
    "description": "",
    "methods": [
      {
        "name": "setValue",
        "description": "called to tell the picker what's the current value",
        "arguments": [
          {
            "name": "value",
            "type": "T | T[]"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "multiple",
        "propertyType": "boolean",
        "description": "self explainatory"
      },
      {
        "name": "onSelectValue",
        "propertyType": "Observable<T | T[]>",
        "description": "emits when a value was selected on the picker"
      }
    ]
  },
  "ALuPickerPanel": {
    "fileName": "libraries/core/src/lib/input/picker/input-picker.model.ts",
    "type": "class",
    "name": "ALuPickerPanel",
    "className": "ALuPickerPanel",
    "abstract": true,
    "description": "",
    "methods": [
      {
        "name": "setValue",
        "description": "called to tell the picker what's the current value",
        "arguments": [
          {
            "name": "value",
            "type": "T | T[]"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "multiple",
        "propertyType": "boolean",
        "description": "self explainatory"
      },
      {
        "name": "onSelectValue",
        "propertyType": "Observable<T | T[]>",
        "description": "emits when a value was selected on the picker"
      }
    ]
  },
  "LuModule": {
    "fileName": "libraries/core/src/lib/module.ts",
    "type": "module",
    "className": "LuModule",
    "name": "LuModule",
    "declarations": [],
    "exports": [
      "LuApiModule",
      "LuInputModule",
      "LuNumberModule",
      "LuOptionModule",
      "LuPopoverModule",
      "LuSafeContentModule",
      "LuScrollModule",
      "LuSelectModule",
      "LuTooltipModule",
      "LuUserModule"
    ]
  },
  "LuNumberModule": {
    "fileName": "libraries/core/src/lib/number/number.module.ts",
    "type": "module",
    "className": "LuNumberModule",
    "name": "LuNumberModule",
    "declarations": [
      "LuNumberPipe"
    ],
    "exports": [
      "LuNumberPipe"
    ]
  },
  "LuNumberPipe": {
    "fileName": "libraries/core/src/lib/number/number.pipe.ts",
    "name": "LuNumberPipe",
    "className": "LuNumberPipe",
    "description": "",
    "type": "pipe",
    "pipeName": "luNumber",
    "input": {
      "name": "number",
      "type": "number"
    },
    "arguments": [
      {
        "name": "precision",
        "type": "number",
        "defaultValue": "2"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuOptionItemComponent": {
    "fileName": "libraries/core/src/lib/option/item/option-item.component.ts",
    "name": "LuOptionItemComponent",
    "type": "component",
    "className": "LuOptionItemComponent",
    "description": "",
    "selector": "lu-option",
    "inputs": [
      {
        "name": "value",
        "propertyType": "T",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onSelect",
        "propertyType": "EventEmitter<T>",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuOptionItem": {
    "fileName": "libraries/core/src/lib/option/item/option-item.model.ts",
    "type": "interface",
    "name": "ILuOptionItem",
    "className": "ILuOptionItem",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onSelect",
        "propertyType": "Observable<T>",
        "description": ""
      },
      {
        "name": "value",
        "propertyType": "T",
        "description": ""
      }
    ]
  },
  "ALuOptionItem": {
    "fileName": "libraries/core/src/lib/option/item/option-item.model.ts",
    "type": "class",
    "name": "ALuOptionItem",
    "className": "ALuOptionItem",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onSelect",
        "propertyType": "Observable<T>",
        "description": ""
      },
      {
        "name": "value",
        "propertyType": "T",
        "description": ""
      }
    ]
  },
  "LuOptionItemModule": {
    "fileName": "libraries/core/src/lib/option/item/option-item.module.ts",
    "type": "module",
    "className": "LuOptionItemModule",
    "name": "LuOptionItemModule",
    "declarations": [
      "LuOptionItemComponent"
    ],
    "exports": [
      "LuOptionItemComponent"
    ]
  },
  "LuOptionFeederComponent": {
    "fileName": "libraries/core/src/lib/option/operator/feeder/option-feeder.component.ts",
    "name": "LuOptionFeederComponent",
    "type": "component",
    "className": "LuOptionFeederComponent",
    "description": "",
    "selector": "lu-option-feeder",
    "inputs": [
      {
        "name": "options",
        "propertyType": "T[]",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "propertyType": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionFeederModule": {
    "fileName": "libraries/core/src/lib/option/operator/feeder/option-feeder.module.ts",
    "type": "module",
    "className": "LuOptionFeederModule",
    "name": "LuOptionFeederModule",
    "declarations": [
      "LuOptionFeederComponent"
    ],
    "exports": [
      "LuOptionFeederComponent"
    ]
  },
  "LuForOptionsContext": {
    "fileName": "libraries/core/src/lib/option/operator/for-options/for-options.directive.ts",
    "type": "class",
    "name": "LuForOptionsContext",
    "className": "LuForOptionsContext",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "even",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "first",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "last",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "odd",
        "propertyType": "boolean",
        "description": ""
      }
    ]
  },
  "LuForOptionsDirective": {
    "fileName": "libraries/core/src/lib/option/operator/for-options/for-options.directive.ts",
    "name": "LuForOptionsDirective",
    "type": "directive",
    "className": "LuForOptionsDirective",
    "description": "",
    "selector": "[luForOptions]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuForOptionsModule": {
    "fileName": "libraries/core/src/lib/option/operator/for-options/for-options.module.ts",
    "type": "module",
    "className": "LuForOptionsModule",
    "name": "LuForOptionsModule",
    "declarations": [
      "LuForOptionsDirective"
    ],
    "exports": [
      "LuForOptionsDirective"
    ]
  },
  "ILuOptionOperator": {
    "fileName": "libraries/core/src/lib/option/operator/option-operator.model.ts",
    "type": "interface",
    "name": "ILuOptionOperator",
    "className": "ILuOptionOperator",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "inOptions$",
        "propertyType": "Observable<T[]>",
        "description": ""
      },
      {
        "name": "onClose",
        "propertyType": "() => void",
        "description": ""
      },
      {
        "name": "onKeydown",
        "propertyType": "(key: number) => void",
        "description": ""
      },
      {
        "name": "onOpen",
        "propertyType": "() => void",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "propertyType": "() => void",
        "description": ""
      },
      {
        "name": "outOptions$",
        "propertyType": "Observable<T[]>",
        "description": ""
      }
    ]
  },
  "ALuOptionOperator": {
    "fileName": "libraries/core/src/lib/option/operator/option-operator.model.ts",
    "type": "class",
    "name": "ALuOptionOperator",
    "className": "ALuOptionOperator",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "inOptions$",
        "propertyType": "Observable<T[]>",
        "description": ""
      },
      {
        "name": "outOptions$",
        "propertyType": "Observable<T[]>",
        "description": ""
      }
    ]
  },
  "LuOptionOperatorModule": {
    "fileName": "libraries/core/src/lib/option/operator/option-operator.module.ts",
    "type": "module",
    "className": "LuOptionOperatorModule",
    "name": "LuOptionOperatorModule",
    "declarations": [],
    "exports": [
      "LuOptionPagerModule",
      "LuOptionFeederModule",
      "LuOptionSearcherModule",
      "LuForOptionsModule"
    ]
  },
  "LuOptionPagerComponent": {
    "fileName": "libraries/core/src/lib/option/operator/pager/option-pager.component.ts",
    "name": "LuOptionPagerComponent",
    "type": "component",
    "className": "LuOptionPagerComponent",
    "description": "",
    "selector": "lu-option-pager",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "paging$",
        "propertyType": "BehaviorSubject<number>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionPagerModule": {
    "fileName": "libraries/core/src/lib/option/operator/pager/option-pager.module.ts",
    "type": "module",
    "className": "LuOptionPagerModule",
    "name": "LuOptionPagerModule",
    "declarations": [
      "LuOptionPagerComponent"
    ],
    "exports": [
      "LuOptionPagerComponent"
    ]
  },
  "LuOptionSearcherComponent": {
    "fileName": "libraries/core/src/lib/option/operator/searcher/option-searcher.component.ts",
    "name": "LuOptionSearcherComponent",
    "type": "component",
    "className": "LuOptionSearcherComponent",
    "description": "",
    "selector": "lu-option-searcher",
    "inputs": [
      {
        "name": "searchFn",
        "propertyType": "(option: T, clue: string) => boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clue$",
        "propertyType": "Observable<any>",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "searchControl",
        "propertyType": "FormControl",
        "description": ""
      },
      {
        "name": "searchInput",
        "propertyType": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionSearcherModule": {
    "fileName": "libraries/core/src/lib/option/operator/searcher/option-searcher.module.ts",
    "type": "module",
    "className": "LuOptionSearcherModule",
    "name": "LuOptionSearcherModule",
    "declarations": [
      "LuOptionSearcherComponent"
    ],
    "exports": [
      "LuOptionSearcherComponent"
    ]
  },
  "LuOptionModule": {
    "fileName": "libraries/core/src/lib/option/option.module.ts",
    "type": "module",
    "className": "LuOptionModule",
    "name": "LuOptionModule",
    "declarations": [],
    "exports": [
      "LuOptionItemModule",
      "LuOptionPickerModule",
      "LuOptionOperatorModule"
    ]
  },
  "LuOptionPickerComponent": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.component.ts",
    "name": "LuOptionPickerComponent",
    "type": "component",
    "className": "LuOptionPickerComponent",
    "description": "basic option picker panel",
    "selector": "lu-option-picker",
    "exportAs": "LuOptionPicker",
    "inputs": [
      {
        "name": "overlap-trigger",
        "propertyType": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "close",
        "propertyType": "EventEmitter<void>",
        "description": ""
      },
      {
        "name": "onSelectValue",
        "propertyType": "EventEmitter<T>",
        "description": "emits when a value was selected on the picker"
      },
      {
        "name": "open",
        "propertyType": "EventEmitter<void>",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "highlightIndex",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "optionsQLVR",
        "propertyType": "QueryList<ViewContainerRef>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuOptionPickerPanel": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.model.ts",
    "type": "interface",
    "name": "ILuOptionPickerPanel",
    "className": "ILuOptionPickerPanel",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ALuOptionPicker": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.model.ts",
    "type": "class",
    "name": "ALuOptionPicker",
    "className": "ALuOptionPicker",
    "abstract": true,
    "description": "",
    "methods": [
      {
        "name": "setValue",
        "description": "called to tell the picker what's the current value",
        "arguments": [
          {
            "name": "value",
            "type": "T | T[]"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "onSelectValue",
        "propertyType": "Observable<T | T[]>",
        "description": "emits when a value was selected on the picker"
      }
    ]
  },
  "LuOptionPickerModule": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.module.ts",
    "type": "module",
    "className": "LuOptionPickerModule",
    "name": "LuOptionPickerModule",
    "declarations": [
      "LuOptionPickerComponent"
    ],
    "exports": [
      "LuOptionPickerComponent"
    ]
  },
  "LuPopoverPanelComponent": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.component.ts",
    "name": "LuPopoverPanelComponent",
    "type": "component",
    "className": "LuPopoverPanelComponent",
    "description": "",
    "selector": "lu-popover",
    "exportAs": "LuPopoverPanel",
    "inputs": [
      {
        "name": "alignment",
        "propertyType": "LuPopoverAlignment",
        "description": "Alignment of the popover regarding the trigger"
      },
      {
        "name": "classes",
        "propertyType": "string",
        "description": "This method takes classes set on the host lu-popover element and applies them on the\npopover template that displays in the overlay container.  Otherwise, it's difficult\nto style the containing popover from outside the component."
      },
      {
        "name": "close-on-click",
        "propertyType": "boolean",
        "description": "Popover container close on click\ndefault: false"
      },
      {
        "name": "enter-delay",
        "propertyType": "number",
        "description": "Popover enter delay"
      },
      {
        "name": "focus-trap-enabled",
        "propertyType": "boolean",
        "description": "Popover focus trap using cdkTrapFocus\ndefault: false"
      },
      {
        "name": "leave-delay",
        "propertyType": "number",
        "description": "Popover leave delay"
      },
      {
        "name": "offset-x",
        "propertyType": "number",
        "description": "Popover target offset x"
      },
      {
        "name": "offset-y",
        "propertyType": "number",
        "description": "Popover target offset y"
      },
      {
        "name": "overlap-trigger",
        "propertyType": "boolean",
        "description": "Popover overlap trigger"
      },
      {
        "name": "position",
        "propertyType": "LuPopoverPosition",
        "description": "Position of the popover around the trigger"
      },
      {
        "name": "scroll-strategy",
        "propertyType": "LuPopoverScrollStrategy",
        "description": "Popover scrollStrategy\ndefault: reposition"
      },
      {
        "name": "template",
        "propertyType": "TemplateRef<any>",
        "description": "Template to Use for the popover"
      },
      {
        "name": "trigger-on",
        "propertyType": "LuPopoverTriggerEvent",
        "description": "Popover trigger event"
      }
    ],
    "outputs": [
      {
        "name": "close",
        "propertyType": "EventEmitter<void>",
        "description": "Event emitted when the popover is closed."
      },
      {
        "name": "open",
        "propertyType": "EventEmitter<void>",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuPopoverPanel": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.model.ts",
    "type": "interface",
    "name": "ILuPopoverPanel",
    "className": "ILuPopoverPanel",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "alignment",
        "propertyType": "LuPopoverAlignment",
        "description": ""
      },
      {
        "name": "close",
        "propertyType": "Observable<void>",
        "description": ""
      },
      {
        "name": "closeDisabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "closeOnClick",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "containerPositioning",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "enterDelay",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "keydownEvents$",
        "propertyType": "Observable<KeyboardEvent>",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "open",
        "propertyType": "Observable<void>",
        "description": ""
      },
      {
        "name": "overlapTrigger",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "popoverPanelStyles",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "position",
        "propertyType": "LuPopoverPosition",
        "description": ""
      },
      {
        "name": "scrollStrategy",
        "propertyType": "LuPopoverScrollStrategy",
        "description": ""
      },
      {
        "name": "setPositionClasses",
        "propertyType": "(pos: LuPopoverPosition, al: LuPopoverAlignment) => void",
        "description": ""
      },
      {
        "name": "setPositionClassesChanges",
        "propertyType": "(posX: LuPopoverPosition, posY: LuPopoverPosition) => void",
        "description": ""
      },
      {
        "name": "targetOffsetX",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "targetOffsetY",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "templateRef",
        "propertyType": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "triggerEvent",
        "propertyType": "LuPopoverTriggerEvent",
        "description": ""
      }
    ]
  },
  "ALuPopoverPanel": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.model.ts",
    "type": "class",
    "name": "ALuPopoverPanel",
    "className": "ALuPopoverPanel",
    "abstract": true,
    "description": "abstract class for basic implementation of a popover panel\r\nit is highly recommended to use this template\r\n<ng-template>\r\n<div class=\"lu-popover-panel\" role=\"dialog\" [class.lu-popover-overlap]=\"overlapTrigger\" [ngClass]=\"_classList\" [ngStyle]=\"popoverPanelStyles\"\r\n(keydown)=\"_handleKeydown($event)\" (click)=\"onClick()\" (mouseover)=\"onMouseOver()\" (mouseleave)=\"onMouseLeave()\" (mousedown)=\"onMouseDown($event)\"\r\n[@transformPopover]=\"'enter'\">\r\n<div class=\"lu-popover-content\" [ngStyle]=\"popoverContentStyles\" cdkTrapFocus=\"focusTrapEnabled\">\r\n### PUT HERE THE CONTENT OF THE POPOVER ###\r\n</div>\r\n</div>\r\n</ng-template>",
    "methods": [
      {
        "name": "onMouseOver",
        "description": "TODO: Refactor when @angular/cdk includes feature I mentioned on github see link below.\r\nhttps://github.com/angular/material2/pull/5493#issuecomment-313085323\nDisables close of popover when leaving trigger element and mouse over the popover",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "onMouseLeave",
        "description": "Enables close of popover when mouse leaving popover element",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "onMouseDown",
        "description": "does nothing but must be overridable",
        "arguments": [
          {
            "name": "$event",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "alignment",
        "propertyType": "LuPopoverAlignment",
        "description": ""
      },
      {
        "name": "classList",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "close",
        "propertyType": "Observable<void>",
        "description": ""
      },
      {
        "name": "closeDisabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "closeOnClick",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "containerPositioning",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "enterDelay",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "focusTrapEnabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "isOpen",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "open",
        "propertyType": "Observable<void>",
        "description": ""
      },
      {
        "name": "overlapTrigger",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "popoverContentStyles",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "popoverPanelStyles",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "position",
        "propertyType": "LuPopoverPosition",
        "description": ""
      },
      {
        "name": "scrollStrategy",
        "propertyType": "LuPopoverScrollStrategy",
        "description": ""
      },
      {
        "name": "targetOffsetX",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "targetOffsetY",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "templateRef",
        "propertyType": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "triggerEvent",
        "propertyType": "LuPopoverTriggerEvent",
        "description": ""
      }
    ]
  },
  "LuPopoverPanelModule": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.module.ts",
    "type": "module",
    "className": "LuPopoverPanelModule",
    "name": "LuPopoverPanelModule",
    "declarations": [
      "LuPopoverPanelComponent"
    ],
    "exports": [
      "LuPopoverPanelComponent"
    ]
  },
  "LuPopoverModule": {
    "fileName": "libraries/core/src/lib/popover/popover.module.ts",
    "type": "module",
    "className": "LuPopoverModule",
    "name": "LuPopoverModule",
    "declarations": [],
    "exports": [
      "LuPopoverPanelModule",
      "LuPopoverTargetModule",
      "LuPopoverTriggerModule"
    ]
  },
  "LuPopoverTargetDirective": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.directive.ts",
    "name": "LuPopoverTargetDirective",
    "type": "directive",
    "className": "LuPopoverTargetDirective",
    "description": "",
    "selector": "lu-popover-target, [luPopoverTarget]",
    "exportAs": "LuPopoverTarget",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ILuPopoverTarget": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.model.ts",
    "type": "interface",
    "name": "ILuPopoverTarget",
    "className": "ILuPopoverTarget",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuPopoverTargetModule": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.module.ts",
    "type": "module",
    "className": "LuPopoverTargetModule",
    "name": "LuPopoverTargetModule",
    "declarations": [
      "LuPopoverTargetDirective"
    ],
    "exports": [
      "LuPopoverTargetDirective"
    ]
  },
  "LuPopoverTriggerDirective": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.directive.ts",
    "name": "LuPopoverTriggerDirective",
    "type": "directive",
    "className": "LuPopoverTriggerDirective",
    "description": "This directive is intended to be used in conjunction with an lu-popover tag.  It is\nresponsible for toggling the display of the provided popover instance.",
    "selector": "[luPopoverTriggerFor]",
    "exportAs": "LuPopoverTrigger",
    "inputs": [
      {
        "name": "luPopoverTargetAt",
        "propertyType": "ILuPopoverTarget",
        "description": "References the popover target instance that the trigger is associated with."
      },
      {
        "name": "luPopoverTriggerFor",
        "propertyType": "T",
        "description": "References the popover instance that the trigger is associated with."
      }
    ],
    "outputs": [
      {
        "name": "onPopoverClose",
        "propertyType": "EventEmitter<void>",
        "description": "Event emitted when the associated popover is closed."
      },
      {
        "name": "onPopoverOpen",
        "propertyType": "EventEmitter<void>",
        "description": "Event emitted when the associated popover is opened."
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuPopoverTrigger": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.model.ts",
    "type": "interface",
    "name": "ILuPopoverTrigger",
    "className": "ILuPopoverTrigger",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "popover",
        "propertyType": "T",
        "description": ""
      }
    ]
  },
  "ALuPopoverTrigger": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.model.ts",
    "type": "class",
    "name": "ALuPopoverTrigger",
    "className": "ALuPopoverTrigger",
    "abstract": true,
    "description": "",
    "methods": [
      {
        "name": "togglePopover",
        "description": "Toggles the popover between the open and closed states.",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "openPopover",
        "description": "Opens the popover.",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "closePopover",
        "description": "Closes the popover.",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "destroyPopover",
        "description": "Removes the popover from the DOM.",
        "arguments": [],
        "returnType": "void"
      },
      {
        "name": "focus",
        "description": "Focuses the popover trigger.",
        "arguments": [],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "dir",
        "propertyType": "Direction",
        "description": "The text direction of the containing app."
      },
      {
        "name": "isVerticallyPositionned",
        "propertyType": "boolean",
        "description": "Return if the popover main positionning is vertical"
      },
      {
        "name": "onPopoverClose",
        "propertyType": "EventEmitter<void>",
        "description": "Event emitted when the associated popover is closed."
      },
      {
        "name": "onPopoverOpen",
        "propertyType": "EventEmitter<void>",
        "description": "Event emitted when the associated popover is opened."
      },
      {
        "name": "popover",
        "propertyType": "T",
        "description": "References the popover instance that the trigger is associated with."
      },
      {
        "name": "popoverOpen",
        "propertyType": "boolean",
        "description": "Whether the popover is open."
      },
      {
        "name": "targetElement",
        "propertyType": "ILuPopoverTarget",
        "description": "References the popover target instance that the trigger is associated with."
      }
    ]
  },
  "LuPopoverTriggerModule": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.module.ts",
    "type": "module",
    "className": "LuPopoverTriggerModule",
    "name": "LuPopoverTriggerModule",
    "declarations": [
      "LuPopoverTriggerDirective"
    ],
    "exports": [
      "LuPopoverTriggerDirective"
    ]
  },
  "LuSafeContentModule": {
    "fileName": "libraries/core/src/lib/safe-content/safe-content.module.ts",
    "type": "module",
    "className": "LuSafeContentModule",
    "name": "LuSafeContentModule",
    "declarations": [
      "LuSafeContentPipe"
    ],
    "exports": [
      "LuSafeContentPipe"
    ]
  },
  "LuSafeContentPipe": {
    "fileName": "libraries/core/src/lib/safe-content/safe-content.pipe.ts",
    "name": "LuSafeContentPipe",
    "className": "LuSafeContentPipe",
    "description": "",
    "type": "pipe",
    "pipeName": "luSafeContent",
    "input": {
      "name": "value",
      "type": "any"
    },
    "arguments": [
      {
        "name": "type",
        "type": "LuSafeContentType",
        "defaultValue": "html"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuScrollDirective": {
    "fileName": "libraries/core/src/lib/scroll/scroll.directive.ts",
    "name": "LuScrollDirective",
    "type": "directive",
    "className": "LuScrollDirective",
    "description": "emits on scroll events",
    "selector": "[luScroll]",
    "exportAs": "luScroll",
    "inputs": [
      {
        "name": "debounceTime",
        "defaultValue": "100",
        "propertyType": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onScroll",
        "propertyType": "EventEmitter<Event>",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "propertyType": "EventEmitter<Event>",
        "description": ""
      },
      {
        "name": "onScrollLeft",
        "propertyType": "EventEmitter<Event>",
        "description": ""
      },
      {
        "name": "onScrollRight",
        "propertyType": "EventEmitter<Event>",
        "description": ""
      },
      {
        "name": "onScrollTop",
        "propertyType": "EventEmitter<Event>",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuScrollable": {
    "fileName": "libraries/core/src/lib/scroll/scroll.model.ts",
    "type": "interface",
    "name": "ILuScrollable",
    "className": "ILuScrollable",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onScroll",
        "propertyType": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "propertyType": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollLeft",
        "propertyType": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollRight",
        "propertyType": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollTop",
        "propertyType": "Observable<Event>",
        "description": ""
      }
    ]
  },
  "LuScrollModule": {
    "fileName": "libraries/core/src/lib/scroll/scroll.module.ts",
    "type": "module",
    "className": "LuScrollModule",
    "name": "LuScrollModule",
    "declarations": [
      "LuScrollDirective"
    ],
    "exports": [
      "LuScrollDirective"
    ]
  },
  "LuSelectClearerComponent": {
    "fileName": "libraries/core/src/lib/select/clearer/select-clearer.component.ts",
    "name": "LuSelectClearerComponent",
    "type": "component",
    "className": "LuSelectClearerComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-select-clearer",
    "exportAs": "luClearer",
    "inputs": [],
    "outputs": [
      {
        "name": "onClear",
        "propertyType": "EventEmitter<T>",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "LuSelectClearerModule": {
    "fileName": "libraries/core/src/lib/select/clearer/select-clearer.module.ts",
    "type": "module",
    "className": "LuSelectClearerModule",
    "name": "LuSelectClearerModule",
    "declarations": [
      "LuSelectClearerComponent"
    ],
    "exports": [
      "LuSelectClearerComponent"
    ]
  },
  "LuSelectInputComponent": {
    "fileName": "libraries/core/src/lib/select/input/select-input.component.ts",
    "name": "LuSelectInputComponent",
    "type": "component",
    "className": "LuSelectInputComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-select",
    "inputs": [
      {
        "name": "multiple",
        "propertyType": "string | boolean",
        "description": ""
      },
      {
        "name": "placeholder",
        "propertyType": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clearerEltRef",
        "propertyType": "ElementRef<any>",
        "description": ""
      },
      {
        "name": "isClearable",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "isDisabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "modMultiple",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "modMultipleView",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "suffixEltRef",
        "propertyType": "ElementRef<any>",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "propertyType": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "ALuSelectInput": {
    "fileName": "libraries/core/src/lib/select/input/select-input.model.ts",
    "type": "class",
    "name": "ALuSelectInput",
    "className": "ALuSelectInput",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "disabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "multiple",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "placeholder",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "value",
        "propertyType": "T | T[]",
        "description": ""
      }
    ]
  },
  "LuSelectInputModule": {
    "fileName": "libraries/core/src/lib/select/input/select-input.module.ts",
    "type": "module",
    "className": "LuSelectInputModule",
    "name": "LuSelectInputModule",
    "declarations": [
      "LuSelectInputComponent"
    ],
    "exports": [
      "LuSelectInputComponent"
    ]
  },
  "LuSelectModule": {
    "fileName": "libraries/core/src/lib/select/select.module.ts",
    "type": "module",
    "className": "LuSelectModule",
    "name": "LuSelectModule",
    "declarations": [],
    "exports": [
      "LuSelectInputModule",
      "LuSelectClearerModule"
    ]
  },
  "LuTooltipPanelComponent": {
    "fileName": "libraries/core/src/lib/tooltip/panel/tooltip-panel.component.ts",
    "name": "LuTooltipPanelComponent",
    "type": "component",
    "className": "LuTooltipPanelComponent",
    "description": "",
    "selector": "lu-tooltip-panel",
    "inputs": [
      {
        "name": "content",
        "propertyType": "any",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "close",
        "propertyType": "EventEmitter<void>",
        "description": ""
      },
      {
        "name": "open",
        "propertyType": "EventEmitter<void>",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "animationState",
        "defaultValue": "enter",
        "propertyType": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuTooltipPanelModule": {
    "fileName": "libraries/core/src/lib/tooltip/panel/tooltip-panel.module.ts",
    "type": "module",
    "className": "LuTooltipPanelModule",
    "name": "LuTooltipPanelModule",
    "declarations": [
      "LuTooltipPanelComponent"
    ],
    "exports": [
      "LuTooltipPanelComponent"
    ]
  },
  "LuTooltipModule": {
    "fileName": "libraries/core/src/lib/tooltip/tooltip.module.ts",
    "type": "module",
    "className": "LuTooltipModule",
    "name": "LuTooltipModule",
    "declarations": [],
    "exports": [
      "LuTooltipTriggerModule",
      "LuTooltipPanelModule"
    ]
  },
  "LuTooltipTriggerDirective": {
    "fileName": "libraries/core/src/lib/tooltip/trigger/tooltip-trigger.directive.ts",
    "name": "LuTooltipTriggerDirective",
    "type": "directive",
    "className": "LuTooltipTriggerDirective",
    "description": "",
    "selector": "[luTooltip]",
    "inputs": [
      {
        "name": "enterDelay",
        "defaultValue": "300",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "defaultValue": "100",
        "propertyType": "number",
        "description": ""
      },
      {
        "name": "luTooltip",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "luTooltipDisabled",
        "propertyType": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": [
      {
        "name": "openPopover",
        "description": "Opens the popover.",
        "arguments": [],
        "returnType": "void"
      }
    ]
  },
  "LuTooltipTriggerModule": {
    "fileName": "libraries/core/src/lib/tooltip/trigger/tooltip-trigger.module.ts",
    "type": "module",
    "className": "LuTooltipTriggerModule",
    "name": "LuTooltipTriggerModule",
    "declarations": [
      "LuTooltipTriggerDirective"
    ],
    "exports": [
      "LuTooltipTriggerDirective"
    ]
  },
  "LuUserDisplayModule": {
    "fileName": "libraries/core/src/lib/user/display/user-display.module.ts",
    "type": "module",
    "className": "LuUserDisplayModule",
    "name": "LuUserDisplayModule",
    "declarations": [
      "LuUserDisplayPipe"
    ],
    "exports": [
      "LuUserDisplayPipe"
    ]
  },
  "LuUserDisplayPipe": {
    "fileName": "libraries/core/src/lib/user/display/user-display.pipe.ts",
    "name": "LuUserDisplayPipe",
    "className": "LuUserDisplayPipe",
    "description": "Displays a user name according to specified format. Supported formats: f for first name,\nF for first initial, l for last name, L for last initial.",
    "type": "pipe",
    "pipeName": "luUserDisplay",
    "input": {
      "name": "user",
      "type": "IUser"
    },
    "arguments": [
      {
        "name": "format",
        "type": "LuDisplayFormat"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuUserPictureComponent": {
    "fileName": "libraries/core/src/lib/user/picture/user-picture.component.ts",
    "name": "LuUserPictureComponent",
    "type": "component",
    "className": "LuUserPictureComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-user-picture",
    "inputs": [
      {
        "name": "displayFormat",
        "propertyType": "LuDisplayInitials",
        "description": "User Display format.\nIt is set to 'FL' by default"
      },
      {
        "name": "user",
        "propertyType": "IUser",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "displayFormat",
        "propertyType": "LuDisplayInitials",
        "description": "User Display format.\nIt is set to 'FL' by default"
      },
      {
        "name": "hasPicture",
        "defaultValue": "false",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "initials",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "style",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "user",
        "propertyType": "IUser",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuUserPictureModule": {
    "fileName": "libraries/core/src/lib/user/picture/user-picture.module.ts",
    "type": "module",
    "className": "LuUserPictureModule",
    "name": "LuUserPictureModule",
    "declarations": [
      "LuUserPictureComponent"
    ],
    "exports": [
      "LuUserPictureComponent"
    ]
  },
  "LuUserSelectInputComponent": {
    "fileName": "libraries/core/src/lib/user/select/input/user-select-input.component.ts",
    "name": "LuUserSelectInputComponent",
    "type": "component",
    "className": "LuUserSelectInputComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-user-select",
    "inputs": [
      {
        "name": "appInstanceId",
        "propertyType": "string | number",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "multiple",
        "propertyType": "string | boolean",
        "description": ""
      },
      {
        "name": "operations",
        "propertyType": "number[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "placeholder",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => U",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "isDisabled",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "searchFormat",
        "propertyType": "LuDisplayFullname",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "propertyType": "number",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "onClick",
        "description": "bind to dom events",
        "arguments": [],
        "returnType": "void"
      }
    ]
  },
  "LuUserSelectInputModule": {
    "fileName": "libraries/core/src/lib/user/select/input/user-select-input.module.ts",
    "type": "module",
    "className": "LuUserSelectInputModule",
    "name": "LuUserSelectInputModule",
    "declarations": [
      "LuUserSelectInputComponent"
    ],
    "exports": [
      "LuUserSelectInputComponent"
    ]
  },
  "LuUserPagedSearcherComponent": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.component.ts",
    "name": "LuUserPagedSearcherComponent",
    "type": "component",
    "className": "LuUserPagedSearcherComponent",
    "description": "",
    "selector": "lu-user-paged-searcher",
    "inputs": [
      {
        "name": "appInstanceId",
        "propertyType": "string | number",
        "description": ""
      },
      {
        "name": "fields",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "filters",
        "propertyType": "string[]",
        "description": ""
      },
      {
        "name": "operations",
        "propertyType": "number[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "propertyType": "(item: any) => U",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "propertyType": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "propertyType": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "propertyType": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ALuUserPagedSearcherService": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.model.ts",
    "type": "class",
    "name": "ALuUserPagedSearcherService",
    "className": "ALuUserPagedSearcherService",
    "abstract": true,
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "url",
        "propertyType": "string",
        "description": ""
      }
    ]
  },
  "LuUserSearcherModule": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.module.ts",
    "type": "module",
    "className": "LuUserSearcherModule",
    "name": "LuUserSearcherModule",
    "declarations": [
      "LuUserPagedSearcherComponent"
    ],
    "exports": [
      "LuUserPagedSearcherComponent"
    ]
  },
  "LuUserPagedSearcherService": {
    "type": "injectable",
    "name": "LuUserPagedSearcherService",
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.service.ts",
    "className": "LuUserPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuUserSelectModule": {
    "fileName": "libraries/core/src/lib/user/select/user-select.module.ts",
    "type": "module",
    "className": "LuUserSelectModule",
    "name": "LuUserSelectModule",
    "declarations": [],
    "exports": [
      "LuUserSelectInputModule",
      "LuUserSearcherModule"
    ]
  },
  "LuUserTileComponent": {
    "fileName": "libraries/core/src/lib/user/tile/user-tile.component.ts",
    "name": "LuUserTileComponent",
    "type": "component",
    "className": "LuUserTileComponent",
    "description": "Displays user picture and name. IUser's role can be specified, and the footer is customizable.",
    "selector": "lu-user-tile",
    "inputs": [
      {
        "name": "displayFormat",
        "propertyType": "LuDisplayFormat",
        "description": "User Display format.\nIt is set to 'lf' by default"
      },
      {
        "name": "role",
        "propertyType": "string",
        "description": "IUser role to display"
      },
      {
        "name": "user",
        "propertyType": "IUser",
        "description": "IUser to display."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "displayPictureFormat",
        "propertyType": "LuDisplayInitials",
        "description": ""
      },
      {
        "name": "role",
        "propertyType": "string",
        "description": "IUser role to display"
      },
      {
        "name": "user",
        "propertyType": "IUser",
        "description": "IUser to display."
      }
    ],
    "methods": []
  },
  "LuUserTileModule": {
    "fileName": "libraries/core/src/lib/user/tile/user-tile.module.ts",
    "type": "module",
    "className": "LuUserTileModule",
    "name": "LuUserTileModule",
    "declarations": [
      "LuUserTileComponent"
    ],
    "exports": [
      "LuUserTileComponent"
    ]
  },
  "IUser": {
    "fileName": "libraries/core/src/lib/user/user.model.ts",
    "type": "interface",
    "name": "IUser",
    "className": "IUser",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "firstName",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "propertyType": "string",
        "description": ""
      },
      {
        "name": "picture",
        "propertyType": "{ href: string; }",
        "description": ""
      }
    ]
  },
  "LuUserModule": {
    "fileName": "libraries/core/src/lib/user/user.module.ts",
    "type": "module",
    "className": "LuUserModule",
    "name": "LuUserModule",
    "declarations": [],
    "exports": [
      "LuUserDisplayModule",
      "LuUserPictureModule",
      "LuUserTileModule",
      "LuUserSelectModule"
    ]
  },
  "LuFormlyModule": {
    "fileName": "libraries/formly/src/lib/formly.module.ts",
    "type": "module",
    "className": "LuFormlyModule",
    "name": "LuFormlyModule",
    "declarations": [
      null
    ],
    "exports": []
  },
  "LuFormlyFieldApi": {
    "fileName": "libraries/formly/src/lib/types/api.ts",
    "name": "LuFormlyFieldApi",
    "type": "component",
    "className": "LuFormlyFieldApi",
    "description": "",
    "selector": "lu-formly-field-api",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldCheckboxes": {
    "fileName": "libraries/formly/src/lib/types/checkboxes.ts",
    "name": "LuFormlyFieldCheckboxes",
    "type": "component",
    "className": "LuFormlyFieldCheckboxes",
    "description": "",
    "selector": "lu-formly-field-checkboxes",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldDate": {
    "fileName": "libraries/formly/src/lib/types/date.ts",
    "name": "LuFormlyFieldDate",
    "type": "component",
    "className": "LuFormlyFieldDate",
    "description": "",
    "selector": "lu-formly-field-date",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "input",
        "propertyType": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldInput": {
    "fileName": "libraries/formly/src/lib/types/input.ts",
    "name": "LuFormlyFieldInput",
    "type": "component",
    "className": "LuFormlyFieldInput",
    "description": "",
    "selector": "lu-formly-field-input",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "type",
        "propertyType": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldRadios": {
    "fileName": "libraries/formly/src/lib/types/radios.ts",
    "name": "LuFormlyFieldRadios",
    "type": "component",
    "className": "LuFormlyFieldRadios",
    "description": "",
    "selector": "lu-formly-field-radios",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldSelect": {
    "fileName": "libraries/formly/src/lib/types/select.ts",
    "name": "LuFormlyFieldSelect",
    "type": "component",
    "className": "LuFormlyFieldSelect",
    "description": "",
    "selector": "lu-formly-field-select",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldTextarea": {
    "fileName": "libraries/formly/src/lib/types/textarea.ts",
    "name": "LuFormlyFieldTextarea",
    "type": "component",
    "className": "LuFormlyFieldTextarea",
    "description": "",
    "selector": "lu-formly-field-input",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldUser": {
    "fileName": "libraries/formly/src/lib/types/user.ts",
    "name": "LuFormlyFieldUser",
    "type": "component",
    "className": "LuFormlyFieldUser",
    "description": "",
    "selector": "lu-formly-field-user",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyWrapperError": {
    "fileName": "libraries/formly/src/lib/wrappers/error.ts",
    "name": "LuFormlyWrapperError",
    "type": "component",
    "className": "LuFormlyWrapperError",
    "description": "",
    "selector": "lu-formly-wrapper-error",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "validationId",
        "propertyType": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyErrorMessage": {
    "fileName": "libraries/formly/src/lib/wrappers/error.ts",
    "name": "LuFormlyErrorMessage",
    "type": "component",
    "className": "LuFormlyErrorMessage",
    "description": "",
    "selector": "lu-formly-error-message",
    "inputs": [
      {
        "name": "field",
        "propertyType": "FormlyFieldConfig",
        "description": ""
      },
      {
        "name": "fieldForm",
        "propertyType": "FormControl",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "errorMessages",
        "propertyType": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateError": {
    "fileName": "libraries/formly/src/lib/wrappers/error.ts",
    "type": "class",
    "name": "TemplateError",
    "className": "TemplateError",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuFormlyWrapperHelper": {
    "fileName": "libraries/formly/src/lib/wrappers/helper.ts",
    "name": "LuFormlyWrapperHelper",
    "type": "component",
    "className": "LuFormlyWrapperHelper",
    "description": "",
    "selector": "lu-formly-wrapper-helper",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateHelper": {
    "fileName": "libraries/formly/src/lib/wrappers/helper.ts",
    "type": "class",
    "name": "TemplateHelper",
    "className": "TemplateHelper",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuFormlyWrapperIcon": {
    "fileName": "libraries/formly/src/lib/wrappers/icon.ts",
    "name": "LuFormlyWrapperIcon",
    "type": "component",
    "className": "LuFormlyWrapperIcon",
    "description": "",
    "selector": "lu-formly-wrapper-suffix",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateIcon": {
    "fileName": "libraries/formly/src/lib/wrappers/icon.ts",
    "type": "class",
    "name": "TemplateIcon",
    "className": "TemplateIcon",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuFormlyWrapperLabel": {
    "fileName": "libraries/formly/src/lib/wrappers/label.ts",
    "name": "LuFormlyWrapperLabel",
    "type": "component",
    "className": "LuFormlyWrapperLabel",
    "description": "",
    "selector": "lu-formly-wrapper-label",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateLabel": {
    "fileName": "libraries/formly/src/lib/wrappers/label.ts",
    "type": "class",
    "name": "TemplateLabel",
    "className": "TemplateLabel",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuFormlyWrapperRadiosfieldLayout": {
    "fileName": "libraries/formly/src/lib/wrappers/radiosfield-layout.ts",
    "name": "LuFormlyWrapperRadiosfieldLayout",
    "type": "component",
    "className": "LuFormlyWrapperRadiosfieldLayout",
    "description": "",
    "selector": "lu-formly-wrapper-radiosfield-layout",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "isError",
        "propertyType": "\"\" | \"is-error\"",
        "description": ""
      },
      {
        "name": "isFocused",
        "propertyType": "\"\" | \"is-focused\"",
        "description": ""
      },
      {
        "name": "isRequired",
        "propertyType": "\"\" | \"is-required\"",
        "description": ""
      },
      {
        "name": "mod",
        "propertyType": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperSuffix": {
    "fileName": "libraries/formly/src/lib/wrappers/suffix.ts",
    "name": "LuFormlyWrapperSuffix",
    "type": "component",
    "className": "LuFormlyWrapperSuffix",
    "description": "",
    "selector": "lu-formly-wrapper-suffix",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateSuffix": {
    "fileName": "libraries/formly/src/lib/wrappers/suffix.ts",
    "type": "class",
    "name": "TemplateSuffix",
    "className": "TemplateSuffix",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuFormlyWrapperTextfieldLayout": {
    "fileName": "libraries/formly/src/lib/wrappers/textfield-layout.ts",
    "name": "LuFormlyWrapperTextfieldLayout",
    "type": "component",
    "className": "LuFormlyWrapperTextfieldLayout",
    "description": "",
    "selector": "lu-formly-wrapper-layout",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "isError",
        "propertyType": "\"\" | \"is-error\"",
        "description": ""
      },
      {
        "name": "isFocused",
        "propertyType": "\"\" | \"is-focused\"",
        "description": ""
      },
      {
        "name": "isRequired",
        "propertyType": "\"\" | \"is-required\"",
        "description": ""
      },
      {
        "name": "mod",
        "propertyType": "any",
        "description": ""
      },
      {
        "name": "modMultiline",
        "propertyType": "\"\" | \"mod-multiline\"",
        "description": ""
      },
      {
        "name": "modWithSuffix",
        "propertyType": "\"\" | \"mod-withSuffix\"",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperTitle": {
    "fileName": "libraries/formly/src/lib/wrappers/title.ts",
    "name": "LuFormlyWrapperTitle",
    "type": "component",
    "className": "LuFormlyWrapperTitle",
    "description": "",
    "selector": "lu-formly-wrapper-title",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "propertyType": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "TemplateTitle": {
    "fileName": "libraries/formly/src/lib/wrappers/title.ts",
    "type": "class",
    "name": "TemplateTitle",
    "className": "TemplateTitle",
    "abstract": false,
    "description": "",
    "methods": [],
    "properties": []
  }
};

export default NG_DOCS;