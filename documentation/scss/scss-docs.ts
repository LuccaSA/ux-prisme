const SCSS_DOCS = {"options":{"name":"options","children":[{"name":"item","children":[{"name":"padding-vertical","value":".5rem"},{"name":"padding-horizontal","value":".5rem"},{"name":"multiple-padding","value":"2rem"},{"name":"icon","children":[{"name":"color","value":"( _color(\"text.default\", \"color\", true) )"}]}]},{"name":"checkbox","children":[{"name":"left","value":".5rem"},{"name":"size","value":".95rem"},{"name":"border-radius","value":"3px"},{"name":"color","value":"_color(\"primary\", \"color\", true)"}]}]},"popup":{"name":"popup","children":[{"name":"padding","children":[{"name":"horizontal","value":"2rem"},{"name":"vertical","value":"1rem"}]},{"name":"backdrop","children":[{"name":"opacity","value":".4"}]},{"name":"panel","children":[{"name":"background-color","value":"#fff"}]},{"name":"sizes","children":[{"name":"small","value":"32rem"},{"name":"medium","value":"42rem"},{"name":"large","value":"60rem"}]}]},"sidePanel":{"name":"sidePanel","children":[{"name":"sizes","children":[{"name":"small","value":"40rem"},{"name":"medium","value":"55rem"},{"name":"large","value":"70rem"}]}]},"select":{"name":"select","children":[{"name":"chip","children":[{"name":"background","value":"_color(\"primary\", \"color\", true)"},{"name":"text","value":"_color(\"primary\", \"text\", true)"}]},{"name":"input","children":[{"name":"padding-horizontal","value":"_theme(\"spacings.smaller\", true)"},{"name":"padding-vertical","value":"_theme(\"spacings.smaller\", true)"},{"name":"placeholder","value":"desaturate(lighten(_color(\"primary\", \"color\", true), 20%), 25%)"}]},{"name":"framed","children":[{"name":"color","value":"_color(\"text.light\", \"color\", true)"},{"name":"see-through","value":"transparentize(_color(\"text.light\", \"color\", true), .95)"},{"name":"text","value":"_color(\"text.default\", \"color\", true)"},{"name":"placeholder","value":"#CCCCCC"},{"name":"side-padding","value":"1rem"},{"name":"top-padding","value":"2.2rem"},{"name":"bottom-padding","value":".7rem"},{"name":"label-top-offset","value":".5rem"}]}]},"tooltip":{"name":"tooltip","children":[{"name":"background","value":"_theme(\"commons.overlays.background\", true)"},{"name":"color","value":"_theme(\"commons.overlays.text\", true)"},{"name":"padding","value":"_theme(\"spacings.smallest\", true) _theme(\"spacings.smaller\", true)"},{"name":"max-width","value":"15rem"}]},"user-picture":{"name":"user-picture","children":[{"name":"sizes","children":[{"name":"smallest","children":[{"name":"font-size","value":"0.5em"},{"name":"image-size","value":"2.5em"}]},{"name":"smaller","children":[{"name":"font-size","value":"0.65em"},{"name":"image-size","value":"2.5em"}]},{"name":"small","children":[{"name":"font-size","value":"0.8em"},{"name":"image-size","value":"2.5em"}]},{"name":"standard","children":[{"name":"font-size","value":"1em"},{"name":"image-size","value":"2.5em"}]},{"name":"large","children":[{"name":"font-size","value":"1.35em"},{"name":"image-size","value":"2.5em"}]},{"name":"larger","children":[{"name":"font-size","value":"1.8em"},{"name":"image-size","value":"2.5em"}]},{"name":"largest","children":[{"name":"font-size","value":"3em"},{"name":"image-size","value":"2.5em"}]}]}]},"breakpoints":{"name":"breakpoints","children":[{"name":"xs","children":[{"name":"breakAt","value":"0"},{"name":"spacing","value":"0"}]},{"name":"sm","children":[{"name":"breakAt","value":"576px"},{"name":"spacing","value":"20px"}]},{"name":"md","children":[{"name":"breakAt","value":"768px"},{"name":"spacing","value":"30px"}]},{"name":"lg","children":[{"name":"breakAt","value":"992px"},{"name":"spacing","value":"40px"}]},{"name":"xl","children":[{"name":"breakAt","value":"1200px"},{"name":"spacing","value":"60px"}]},{"name":"xxl","children":[{"name":"breakAt","value":"1350px"},{"name":"spacing","value":"60px"}]},{"name":"xxxl","children":[{"name":"breakAt","value":"1500px"},{"name":"spacing","value":"60px"}]}]},"commons":{"name":"commons","children":[{"name":"animations","children":[{"name":"durations","children":[{"name":"fast","value":"100ms"},{"name":"standard","value":"250ms"},{"name":"slow","value":"350ms"}]},{"name":"translate","value":"3rem"},{"name":"function","value":"ease"},{"name":"iteration-count","value":"5"}]},{"name":"divider","children":[{"name":"width","value":"1px"},{"name":"color","value":"#D6D6D6"}]},{"name":"disabled","children":[{"name":"opacity","value":".4"},{"name":"background","value":"#E5E5E5"},{"name":"color","value":"#999999"},{"name":"placeholder","value":"#BBBBBB"}]},{"name":"background","children":[{"name":"base","value":"#F5F5F5"}]},{"name":"highlight","value":"#E5E5E5"},{"name":"selected","value":"#EEEEEE"},{"name":"text","children":[{"name":"link","children":[{"name":"color","value":"#00B2ED"},{"name":"hover","value":"#16C5FE"}]}]},{"name":"border","children":[{"name":"radius","value":"4px"},{"name":"radius-big","value":"8px"}]},{"name":"font","children":[{"name":"family","value":"unquote(\"Source Sans Pro, Tahoma, sans-serif\")"},{"name":"line-height","value":"1.5rem"},{"name":"size","value":"16px"}]},{"name":"elevations","children":[{"name":"elevation-1","value":"unquote(\"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)\")"},{"name":"elevation-2","value":"unquote(\"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)\")"},{"name":"elevation-3","value":"unquote(\"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)\")"},{"name":"elevation-4","value":"unquote(\"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)\")"},{"name":"elevation-5","value":"unquote(\"0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)\")"}]},{"name":"overlays","children":[{"name":"background","value":"#323232"},{"name":"text","value":"#FFFFFF"}]},{"name":"banner-height","value":"50px"},{"name":"transition","value":"unquote(\"all 150ms ease\")"},{"name":"focused","value":"0 0 1px 2px #A6C7FF"},{"name":"mobile","value":"\"md\""},{"name":"loading","children":[{"name":"background","value":"_color(\"primary\", \"lighter\")"},{"name":"frontground","value":"_color(\"primary\")"},{"name":"speed","value":"600ms"}]}]},"icons":{"name":"icons","children":[{"name":"prefix","value":"unquote(\"lucca-icon\")"},{"name":"font-path","value":"unquote(\"//cdn.lucca.fr/lucca-front/icons/latest/font/lucca-icons\")"}]},"palettes":{"name":"palettes","children":[{"name":"\"primary\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"}]},{"name":"\"secondary\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"}]},{"name":"\"grey\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"}]},{"name":"\"success\"","children":[{"name":"\"lightest\"","value":"#F1FBEE"},{"name":"\"lighter\"","value":"#E3F8DC"},{"name":"\"light\"","value":"#7DE559"},{"name":"\"color\"","value":"#75DA52"},{"name":"\"dark\"","value":"#379816"},{"name":"\"darker\"","value":"#217703"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#75DA52, .15)"}]},{"name":"\"warning\"","children":[{"name":"\"lightest\"","value":"#FFF2E8"},{"name":"\"lighter\"","value":"#FFE4D1"},{"name":"\"light\"","value":"#FF8C38"},{"name":"\"color\"","value":"#FF7A1A"},{"name":"\"dark\"","value":"#D15700"},{"name":"\"darker\"","value":"#953600"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#FF7A1A, .15)"}]},{"name":"\"error\"","children":[{"name":"\"lightest\"","value":"#FFECEF"},{"name":"\"lighter\"","value":"#FBA7B5"},{"name":"\"light\"","value":"#FA3F5E"},{"name":"\"color\"","value":"#F42144"},{"name":"\"dark\"","value":"#CA0224"},{"name":"\"darker\"","value":"#810016"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#F42144, .15)"}]}]},"colors":{"name":"colors","children":[{"name":"text","children":[{"name":"dark","children":[{"name":"color","value":"#2D354D"}]},{"name":"default","children":[{"name":"color","value":"#4C5775"}]},{"name":"light","children":[{"name":"color","value":"#9299B0"}]},{"name":"placeholder","children":[{"name":"color","value":"#C7C7C7"}]}]}]},"sizes":{"name":"sizes","children":[{"name":"smaller","children":[{"name":"font-size","value":".75rem"},{"name":"line-height","value":"1rem"}]},{"name":"small","children":[{"name":"font-size","value":".875rem"},{"name":"line-height","value":"1rem"}]},{"name":"standard","children":[{"name":"font-size","value":"1rem"},{"name":"line-height","value":"1.5rem"}]},{"name":"big","children":[{"name":"font-size","value":"1.125rem"},{"name":"line-height","value":"2rem"}]},{"name":"bigger","children":[{"name":"font-size","value":"1.375rem"},{"name":"line-height","value":"2.5rem"}]},{"name":"biggest","children":[{"name":"font-size","value":"1.75rem"},{"name":"line-height","value":"2.5rem"}]},{"name":"headline","children":[{"name":"font-size","value":"2.25rem"},{"name":"line-height","value":"3.5rem"}]}]},"spacings":{"name":"spacings","children":[{"name":"reset","value":"0"},{"name":"smallest","value":".25rem"},{"name":"smaller","value":".5rem"},{"name":"small","value":"1rem"},{"name":"standard","value":"1.5rem"},{"name":"big","value":"2rem"},{"name":"bigger","value":"3rem"},{"name":"biggest","value":"4rem"}]},"actionIcon":{"name":"actionIcon","children":[{"name":"color","value":"( _color(\"text.default\") )"},{"name":"hover","children":[{"name":"background","value":"_color(\"primary\", \"see-through\")"},{"name":"color","value":"_color(\"text.dark\")"}]},{"name":"invert","children":[{"name":"color","value":"white"}]}]},"box":{"name":"box","children":[{"name":"background","value":"_color(\"primary\", \"lightest\")"},{"name":"border","children":[{"name":"radius","value":"_theme(\"commons.border.radius-big\")"}]},{"name":"margin","value":"0 0 _theme(\"spacings.small\")"},{"name":"padding","value":"_theme(\"spacings.standard\")"},{"name":"toggle","children":[{"name":"arrow","children":[{"name":"size","value":".8rem"},{"name":"left","value":"2.5rem"}]}]}]},"button":{"name":"button","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"margin","value":"0 _theme(\"spacings.smaller\") 0 0"},{"name":"font-weight","value":"600"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.standard.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.standard\")"},{"name":"small","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.small.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"}]}]},"callout":{"name":"callout","children":[{"name":"margin","value":"0 0 _theme(\"spacings.small\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"background","value":"_theme(\"commons.background.base\")"}]},"card":{"name":"card","children":[{"name":"content","children":[{"name":"padding","value":"1.5rem"}]},{"name":"footer","children":[{"name":"padding","value":".33rem 1.5rem"}]}]},"checkbox":{"name":"checkbox","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"label","children":[{"name":"line-height","value":"1.5rem"},{"name":"padding","value":"0 0 0 1.5rem"}]},{"name":"input","children":[{"name":"margin-top","value":"_theme(\"spacings.smallest\")"},{"name":"margin-right","value":"_theme(\"spacings.smaller\")"},{"name":"size","value":"1rem"},{"name":"border-radius","value":"_theme(\"commons.border.radius\")"},{"name":"border","children":[{"name":"color","value":"_color(\"grey\")"},{"name":"hover","value":"_color(\"primary\", \"light\")"}]}]}]},"container":{"name":"container","children":[{"name":"margin-top","value":"3rem"},{"name":"margin-bottom","value":"4rem"},{"name":"max-width","value":"_theme(\"breakpoints.xl.breakAt\")"},{"name":"min-width","value":"_theme(\"breakpoints.sm.breakAt\")"}]},"contentSection":{"name":"contentSection","children":[{"name":"margin-bottom","value":"2.5rem"}]},"errorPage":{"name":"errorPage","children":[{"name":"background","value":"#FFFFFF"},{"name":"header","children":[{"name":"color","value":"#FF7A1A"}]}]},"field":{"name":"field","children":[{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"horizontal-spacing","value":"1.5rem"},{"name":"input","children":[{"name":"color","value":"_color(\"text.default\")"},{"name":"inline-margin","value":".15rem"}]},{"name":"label","children":[{"name":"color","value":"_color(\"text.default\")"},{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"margin-bottom","value":"_theme(\"spacings.smaller\")"}]},{"name":"message","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"margin-top","value":".35rem"}]},{"name":"sizes","children":[{"name":"shortest","value":"3rem"},{"name":"shorter","value":"6rem"},{"name":"short","value":"9rem"},{"name":"default","value":"13rem"},{"name":"long","value":"17rem"},{"name":"longer","value":"22rem"},{"name":"longest","value":"28rem"}]},{"name":"compact","children":[{"name":"padding","value":".5rem"},{"name":"label","children":[{"name":"color","value":"_color(\"text.light\")"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"right-margin","value":".3rem"},{"name":"sizes","children":[{"name":"shorter","value":"3rem"},{"name":"short","value":"5rem"},{"name":"default","value":"7rem"},{"name":"long","value":"9rem"},{"name":"longer","value":"11rem"}]}]}]},{"name":"framed","children":[{"name":"color","value":"_color(\"text.light\", \"color\", true)"},{"name":"see-through","value":"transparentize(_color(\"text.light\", \"color\", true), .95)"},{"name":"text","value":"_color(\"text.default\", \"color\", true)"},{"name":"placeholder","value":"#CCCCCC"},{"name":"side-padding","value":"1rem"},{"name":"top-padding","value":"2.2rem"},{"name":"bottom-padding","value":".7rem"},{"name":"label-top-offset","value":".5rem"},{"name":"textarea","children":[{"name":"height","value":"7rem"},{"name":"margin-top","value":"1.5rem"}]},{"name":"title","children":[{"name":"font-size","value":"_theme(\"sizes.big.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.big.line-height\")"}]}]}]},"filters":{"name":"filters","children":[{"name":"background","value":"white"},{"name":"padding","value":".5rem 1rem"},{"name":"height","value":"4rem"}]},"form":{"name":"form","children":[{"name":"field","children":[{"name":"margin-bottom","value":"1rem"}]},{"name":"group","children":[{"name":"margin-bottom","value":"1.2rem"}]},{"name":"label","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"margin-bottom","value":".25rem"}]}]},"gauge":{"name":"gauge","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"height","value":".65rem"},{"name":"thin","children":[{"name":"height","value":"4px"}]}]},"header":{"name":"header","children":[{"name":"background","value":"white"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"height","value":"4rem"}]},"label":{"name":"label","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"}]},"list":{"name":"list","children":[{"name":"margin-bottom","value":"1rem"},{"name":"padding","value":"1rem 1.5rem"},{"name":"hover","children":[{"name":"background","value":"_theme(\"commons.highlight\")"}]}]},"menu":{"name":"menu","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"background","value":"#FFFFFF"},{"name":"padding","value":"_theme(\"spacings.small\") 0"}]},"navSide":{"name":"navSide","children":[{"name":"fullwidth-palette","children":[{"name":"bg-color","value":"#333333"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"compact-palette","children":[{"name":"bg-color","value":"#333333"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"bottom-section-palette","children":[{"name":"bg-color","value":"_color(\"primary\", \"dark\")"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"bottom-section-height","value":"3.1rem"},{"name":"offset-top","value":"0"},{"name":"padding-top","value":"0"},{"name":"main-font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"sub-font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"scrollbar","children":[{"name":"width","value":".5rem"},{"name":"border-radius","value":"10px"},{"name":"bg-color","value":"_color(\"primary\", \"dark\")"},{"name":"thumb-color","value":"_color(\"primary\")"},{"name":"arrow-color","value":"_color(\"primary\", \"text\")"}]},{"name":"submenu","children":[{"name":"max-height","value":"33rem"}]},{"name":"width","value":"15rem"},{"name":"compact","children":[{"name":"width","value":"6.125rem"},{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"}]},{"name":"mobile","children":[{"name":"toggle-height","value":"3.5rem"}]}]},"progress":{"name":"progress","children":[{"name":"margin","value":"1rem 0"},{"name":"height","value":"4px"},{"name":"bar","children":[{"name":"background","value":"_color(\"primary\")"},{"name":"gradient","value":"linear-gradient(to right, rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255, .5) 100%)"}]},{"name":"duration","value":"1.5s"}]},"radioButtons":{"name":"radioButtons","children":[{"name":"hover","value":"_getMap(\"palettes.primary\")"},{"name":"active","value":"_color(\"grey\", \"dark\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"small","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.small.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"}]}]},"radio":{"name":"radio","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"label","children":[{"name":"line-height","value":"1.5rem"},{"name":"padding","value":"0 0 0 1.5rem"}]},{"name":"input","children":[{"name":"top","value":"_theme(\"spacings.smallest\")"},{"name":"size","value":"1rem"},{"name":"border","children":[{"name":"color","value":"_color(\"grey\")"},{"name":"hover","value":"_color(\"primary\", \"light\")"}]}]}]},"switch":{"name":"switch","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"}]},"tableOfContent":{"name":"tableOfContent","children":[{"name":"default-palette","children":[{"name":"color","value":"_theme(\"palettes.primary.color\")"}]},{"name":"item","children":[{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"border-width","value":"2px"}]}]},"table":{"name":"table","children":[{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.standard.line-height\")"},{"name":"zebra","children":[{"name":"background","value":"_theme(\"commons.background.base\")"}]},{"name":"hover","children":[{"name":"background","value":"_theme(\"commons.highlight\")"}]},{"name":"card","children":[{"name":"padding","value":"1.5rem"}]}]},"tag":{"name":"tag","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"}]},"textfield":{"name":"textfield","children":[{"name":"background","value":"_color(\"primary\", \"lightest\")"},{"name":"border-radius","value":".2rem"},{"name":"input","children":[{"name":"padding-horizontal","value":"_theme(\"spacings.smaller\")"},{"name":"padding-vertical","value":"_theme(\"spacings.smaller\")"},{"name":"placeholder","value":"_color(\"primary\", \"lighter\")"}]},{"name":"hover","children":[{"name":"background","value":"_color(\"primary\", \"lighter\")"},{"name":"placeholder","value":"_color(\"primary\", \"light\")"}]},{"name":"focus","children":[{"name":"placeholder","value":"_color(\"primary\", \"lighter\")"}]},{"name":"disabled","children":[{"name":"background","value":"#F5F5F5"},{"name":"color","value":"#999999"}]},{"name":"suffix","children":[{"name":"top","value":"2rem"},{"name":"padding-right","value":"1.5rem"}]},{"name":"sizes","children":[{"name":"shortest","value":"3rem"},{"name":"shorter","value":"6rem"},{"name":"short","value":"9rem"},{"name":"default","value":"13rem"},{"name":"long","value":"17rem"},{"name":"longer","value":"22rem"},{"name":"longest","value":"28rem"}]},{"name":"material","children":[{"name":"padding-top","value":"1rem"},{"name":"default-palette","children":[{"name":"color","value":"_color(\"primary\")"}]},{"name":"border","children":[{"name":"color","value":"#CCCCCC"}]},{"name":"label","children":[{"name":"color","value":"#A6A6A6"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"}]},{"name":"suffix","children":[{"name":"padding-right","value":"1rem"}]}]},{"name":"compact","children":[{"name":"padding","value":".5rem"},{"name":"label","children":[{"name":"color","value":"_color(\"text.light\")"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"right-margin","value":".3rem"},{"name":"sizes","children":[{"name":"shorter","value":"3rem"},{"name":"short","value":"5rem"},{"name":"default","value":"7rem"},{"name":"long","value":"9rem"},{"name":"longer","value":"11rem"}]}]}]},{"name":"framed","children":[{"name":"textarea","children":[{"name":"height","value":"7rem"},{"name":"margin-top","value":"1.5rem"}]},{"name":"suffix","children":[{"name":"padding-right","value":"2.5rem"}]}]},{"name":"filter","children":[{"name":"width","value":"18rem"}]}]},"toasts":{"name":"toasts","children":[{"name":"background","value":"_theme(\"commons.overlays.background\")"},{"name":"color","value":"_theme(\"commons.overlays.text\")"},{"name":"top","value":"1.5rem"},{"name":"right","value":"1.5rem"},{"name":"width","value":"16rem"},{"name":"padding","value":".75rem 2.25rem .75rem 1rem"},{"name":"margin-bottom","value":".5rem"}]},}; export default SCSS_DOCS;