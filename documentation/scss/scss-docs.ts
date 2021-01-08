const SCSS_DOCS = {"calendar":{"name":"calendar","children":[{"name":"width","value":"17.8rem"}]},"dropdown":{"name":"dropdown","children":[{"name":"width","value":"14rem"},{"name":"max-width","value":"90vw"},{"name":"max-height","value":"60vh"}]},"options":{"name":"options","children":[{"name":"item","children":[{"name":"padding-vertical","value":".5rem"},{"name":"padding-horizontal","value":".5rem"},{"name":"multiple-padding","value":"2rem"},{"name":"icon","children":[{"name":"color","value":"( _color(\"text.default\", \"color\", true) )"}]}]},{"name":"checkbox","children":[{"name":"left","value":".5rem"},{"name":"size","value":"1rem"},{"name":"color","value":"_color(\"primary\", 700, true)"},{"name":"border","children":[{"name":"radius","value":"_theme(\"commons.border.radius\")"},{"name":"color","value":"_color(\"grey\")"}]}]}]},"popup":{"name":"popup","children":[{"name":"padding","children":[{"name":"horizontal","value":"2rem"},{"name":"vertical","value":"1rem"}]},{"name":"backdrop","children":[{"name":"opacity","value":".4"}]},{"name":"panel","children":[{"name":"background-color","value":"#fff"}]},{"name":"sizes","children":[{"name":"small","value":"32rem"},{"name":"medium","value":"42rem"},{"name":"large","value":"60rem"}]}]},"sidePanel":{"name":"sidePanel","children":[{"name":"sizes","children":[{"name":"small","value":"40rem"},{"name":"medium","value":"55rem"},{"name":"large","value":"70rem"}]}]},"select":{"name":"select","children":[{"name":"chip","children":[{"name":"background","value":"_color(\"primary\", 700, true)"},{"name":"text","value":"_color(\"primary\", \"text\", true)"}]},{"name":"input","children":[{"name":"padding-horizontal","value":"_theme(\"spacings.smaller\", true)"},{"name":"padding-vertical","value":"_theme(\"spacings.smaller\", true)"},{"name":"placeholder","value":"desaturate(lighten(_color(\"primary\", 700, true), 20%), 25%)"}]},{"name":"framed","children":[{"name":"color","value":"_color(\"text.light\", \"color\", true)"},{"name":"\"color50\"","value":"_color(\"grey\", \"50\", true)"},{"name":"see-through","value":"_color(\"grey\", \"50\", true)"},{"name":"text","value":"_color(\"text.default\", \"color\", true)"},{"name":"placeholder","value":"#CCCCCC"},{"name":"side-padding","value":"_theme(\"spacings.small\")"},{"name":"top-padding","value":"_theme(\"spacings.big\")"},{"name":"bottom-padding","value":"_theme(\"spacings.small\")"},{"name":"label-top-offset","value":"_theme(\"spacings.smaller\")"}]}]},"tooltip":{"name":"tooltip","children":[{"name":"background","value":"_theme(\"commons.overlays.background\", true)"},{"name":"color","value":"_theme(\"commons.overlays.text\", true)"},{"name":"padding","value":"_theme(\"spacings.smallest\", true) _theme(\"spacings.smaller\", true)"},{"name":"max-width","value":"15rem"}]},"user-picture":{"name":"user-picture","children":[{"name":"sizes","children":[{"name":"smallest","children":[{"name":"font-size","value":"0.5em"},{"name":"image-size","value":"2.5em"}]},{"name":"smaller","children":[{"name":"font-size","value":"0.65em"},{"name":"image-size","value":"2.5em"}]},{"name":"small","children":[{"name":"font-size","value":"0.8em"},{"name":"image-size","value":"2.5em"}]},{"name":"standard","children":[{"name":"font-size","value":"1em"},{"name":"image-size","value":"2.5em"}]},{"name":"large","children":[{"name":"font-size","value":"1.35em"},{"name":"image-size","value":"2.5em"}]},{"name":"larger","children":[{"name":"font-size","value":"1.8em"},{"name":"image-size","value":"2.5em"}]},{"name":"largest","children":[{"name":"font-size","value":"3em"},{"name":"image-size","value":"2.5em"}]}]}]},"breakpoints":{"name":"breakpoints","children":[{"name":"xs","children":[{"name":"breakAt","value":"0px"},{"name":"spacing","value":"0px"}]},{"name":"sm","children":[{"name":"breakAt","value":"576px"},{"name":"spacing","value":"20px"}]},{"name":"md","children":[{"name":"breakAt","value":"768px"},{"name":"spacing","value":"30px"}]},{"name":"lg","children":[{"name":"breakAt","value":"992px"},{"name":"spacing","value":"40px"}]},{"name":"xl","children":[{"name":"breakAt","value":"1200px"},{"name":"spacing","value":"60px"}]},{"name":"xxl","children":[{"name":"breakAt","value":"1350px"},{"name":"spacing","value":"60px"}]},{"name":"xxxl","children":[{"name":"breakAt","value":"1500px"},{"name":"spacing","value":"60px"}]}]},"commons":{"name":"commons","children":[{"name":"animations","children":[{"name":"durations","children":[{"name":"fast","value":"100ms"},{"name":"standard","value":"250ms"},{"name":"slow","value":"350ms"}]},{"name":"translate","value":"3rem"},{"name":"function","value":"ease"},{"name":"iteration-count","value":"5"}]},{"name":"divider","children":[{"name":"width","value":"1px"},{"name":"color","value":"#D6D6D6"}]},{"name":"disabled","children":[{"name":"opacity","value":".4"},{"name":"background","value":"#E5E5E5"},{"name":"color","value":"#999999"},{"name":"placeholder","value":"#BBBBBB"}]},{"name":"background","children":[{"name":"base","value":"#F5F5F5"}]},{"name":"highlight","value":"_color(\"primary\", \"50\")"},{"name":"selected","value":"_color(\"primary\", \"100\")"},{"name":"text","children":[{"name":"link","children":[{"name":"color","value":"#00B2ED"},{"name":"hover","value":"#16C5FE"}]}]},{"name":"border","children":[{"name":"radius","value":"4px"},{"name":"radius-big","value":"8px"}]},{"name":"font","children":[{"name":"family","value":"unquote(\"Source Sans Pro, Tahoma, sans-serif\")"},{"name":"line-height","value":"1.5rem"},{"name":"size","value":"16px"}]},{"name":"elevations","children":[{"name":"elevation-1","value":"unquote(\"0 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 8px rgba(0, 0, 0, 0.04)\")"},{"name":"elevation-2","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.05)\")"},{"name":"elevation-3","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06)\")"},{"name":"elevation-4","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 3px 6px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.08)\")"},{"name":"elevation-5","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.08)\")"},{"name":"elevation-6","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), -2px 2px 8px rgba(0, 0, 0, 0.04), -12px 6px 24px rgba(0, 0, 0, 0.06)\")"}]},{"name":"box-shadow","children":[{"name":"hard","value":"unquote(\"0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15)\")"},{"name":"xs","value":"unquote(\"0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)\")"},{"name":"s","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.05)\")"},{"name":"m","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06)\")"},{"name":"l","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 3px 6px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.08)\")"},{"name":"xl","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.08)\")"},{"name":"xxl","value":"unquote(\"0 0 0 1px rgba(0, 0, 0, 0.03), -2px 2px 8px rgba(0, 0, 0, 0.04), -12px 6px 24px rgba(0, 0, 0, 0.06)\")"}]},{"name":"overlays","children":[{"name":"background","value":"#323232"},{"name":"text","value":"#FFFFFF"}]},{"name":"banner-height","value":"50px"},{"name":"transition","value":"unquote(\"all 150ms ease\")"},{"name":"focused","value":"0 0 1px 2px #A6C7FF"},{"name":"mobile","value":"\"md\""},{"name":"loading","children":[{"name":"background","value":"_color(\"primary\", \"200\")"},{"name":"frontground","value":"_color(\"primary\", \"color\")"},{"name":"speed","value":"600ms"}]}]},"palettes":{"name":"palettes","children":[{"name":"\"primary\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"},{"name":"\"50\"","value":"#F7F8FD"},{"name":"\"100\"","value":"#F3F5FC"},{"name":"\"200\"","value":"#ECEFF8"},{"name":"\"300\"","value":"#DCDFEF"},{"name":"\"400\"","value":"#CBCFE2"},{"name":"\"500\"","value":"#B7BBD1"},{"name":"\"600\"","value":"#898FAE"},{"name":"\"700\"","value":"#485075"},{"name":"\"800\"","value":"#31395E"},{"name":"\"900\"","value":"#1E233E"}]},{"name":"\"secondary\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"},{"name":"\"50\"","value":"#FAFAFA"},{"name":"\"100\"","value":"#F5F5F5"},{"name":"\"200\"","value":"#EBEBEB"},{"name":"\"300\"","value":"#E0E0E0"},{"name":"\"400\"","value":"#CFCFCF"},{"name":"\"500\"","value":"#ADADAD"},{"name":"\"600\"","value":"#858585"},{"name":"\"700\"","value":"#525252"},{"name":"\"800\"","value":"#3D3D3D"},{"name":"\"900\"","value":"#262626"}]},{"name":"\"grey\"","children":[{"name":"\"darker\"","value":"#2D354D"},{"name":"\"dark\"","value":"#4C5775"},{"name":"\"color\"","value":"#9299B0"},{"name":"\"light\"","value":"#CCD1E0"},{"name":"\"lighter\"","value":"#E8EAF3"},{"name":"\"lightest\"","value":"#F7F9FD"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#9299B0, .15)"},{"name":"\"50\"","value":"#FAFAFA"},{"name":"\"100\"","value":"#F5F5F5"},{"name":"\"200\"","value":"#EBEBEB"},{"name":"\"300\"","value":"#E0E0E0"},{"name":"\"400\"","value":"#CFCFCF"},{"name":"\"500\"","value":"#ADADAD"},{"name":"\"600\"","value":"#858585"},{"name":"\"700\"","value":"#525252"},{"name":"\"800\"","value":"#3D3D3D"},{"name":"\"900\"","value":"#262626"}]},{"name":"\"success\"","children":[{"name":"\"lightest\"","value":"#F1FBEE"},{"name":"\"lighter\"","value":"#E3F8DC"},{"name":"\"light\"","value":"#7DE559"},{"name":"\"color\"","value":"#75DA52"},{"name":"\"dark\"","value":"#379816"},{"name":"\"darker\"","value":"#217703"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#75DA52, .15)"},{"name":"\"50\"","value":"#F7FEF6"},{"name":"\"100\"","value":"#E7FAE5"},{"name":"\"200\"","value":"#D7F7D4"},{"name":"\"300\"","value":"#C2F4BE"},{"name":"\"400\"","value":"#ACECA7"},{"name":"\"500\"","value":"#8CDB85"},{"name":"\"600\"","value":"#49B540"},{"name":"\"700\"","value":"#3C9933"},{"name":"\"800\"","value":"#1B7D12"},{"name":"\"900\"","value":"#0E6B06"}]},{"name":"\"warning\"","children":[{"name":"\"lightest\"","value":"#FFF2E8"},{"name":"\"lighter\"","value":"#FFE4D1"},{"name":"\"light\"","value":"#FF8C38"},{"name":"\"color\"","value":"#FF7A1A"},{"name":"\"dark\"","value":"#D15700"},{"name":"\"darker\"","value":"#953600"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#FF7A1A, .15)"},{"name":"\"50\"","value":"#FEF5F0"},{"name":"\"100\"","value":"#FFEBE0"},{"name":"\"200\"","value":"#FFDDCC"},{"name":"\"300\"","value":"#FFCFB8"},{"name":"\"400\"","value":"#FCBC9C"},{"name":"\"500\"","value":"#F79C6E"},{"name":"\"600\"","value":"#F46A25"},{"name":"\"700\"","value":"#E55006"},{"name":"\"800\"","value":"#CC3D00"},{"name":"\"900\"","value":"#B23000"}]},{"name":"\"error\"","children":[{"name":"\"lightest\"","value":"#FFECEF"},{"name":"\"lighter\"","value":"#FBA7B5"},{"name":"\"light\"","value":"#FA3F5E"},{"name":"\"color\"","value":"#F42144"},{"name":"\"dark\"","value":"#CA0224"},{"name":"\"darker\"","value":"#810016"},{"name":"\"text\"","value":"#FFFFFF"},{"name":"\"see-through\"","value":"rgba(#F42144, .15)"},{"name":"\"50\"","value":"#FFF5F7"},{"name":"\"100\"","value":"#FFECEF"},{"name":"\"200\"","value":"#FFE0E6"},{"name":"\"300\"","value":"#FCC5CE"},{"name":"\"400\"","value":"#FBA7B5"},{"name":"\"500\"","value":"#EF8F9F"},{"name":"\"600\"","value":"#EF3957"},{"name":"\"700\"","value":"#E61A3B"},{"name":"\"800\"","value":"#AF0E29"},{"name":"\"900\"","value":"#91081F"}]}]},"colors":{"name":"colors","children":[{"name":"\"text\"","children":[{"name":"\"dark\"","children":[{"name":"\"color\"","value":"#2D354D"}]},{"name":"\"default\"","children":[{"name":"\"color\"","value":"#4C5775"}]},{"name":"\"light\"","children":[{"name":"\"color\"","value":"#9299B0"}]},{"name":"\"placeholder\"","children":[{"name":"\"color\"","value":"#C7C7C7"}]}]},{"name":"\"white\"","children":[{"name":"\"color\"","value":"#FFFFFF"}]},{"name":"\"black\"","children":[{"name":"\"color\"","value":"#121212"}]}]},"sizes":{"name":"sizes","children":[{"name":"smaller","children":[{"name":"font-size","value":".75rem"},{"name":"line-height","value":"1rem"}]},{"name":"small","children":[{"name":"font-size","value":".875rem"},{"name":"line-height","value":"1rem"}]},{"name":"standard","children":[{"name":"font-size","value":"1rem"},{"name":"line-height","value":"1.5rem"}]},{"name":"big","children":[{"name":"font-size","value":"1.125rem"},{"name":"line-height","value":"2rem"}]},{"name":"bigger","children":[{"name":"font-size","value":"1.375rem"},{"name":"line-height","value":"2.5rem"}]},{"name":"biggest","children":[{"name":"font-size","value":"1.75rem"},{"name":"line-height","value":"2.5rem"}]},{"name":"headline","children":[{"name":"font-size","value":"2.25rem"},{"name":"line-height","value":"3.5rem"}]}]},"spacings":{"name":"spacings","children":[{"name":"reset","value":"0"},{"name":"smallest","value":".25rem"},{"name":"smaller","value":".5rem"},{"name":"small","value":"1rem"},{"name":"standard","value":"1.5rem"},{"name":"big","value":"2rem"},{"name":"bigger","value":"3rem"},{"name":"biggest","value":"4rem"}]},"actionIcon":{"name":"actionIcon","children":[{"name":"color","value":"( _color(\"text.default\") )"},{"name":"hover","children":[{"name":"background","value":"_color(\"primary\", 50)"},{"name":"color","value":"_color(\"text.dark\")"}]},{"name":"invert","children":[{"name":"color","value":"white"}]}]},"aside":{"name":"aside","children":[{"name":"width","value":"18rem"}]},"box":{"name":"box","children":[{"name":"background","value":"_color(\"primary\", 100)"},{"name":"border","children":[{"name":"radius","value":"_theme(\"commons.border.radius-big\")"}]},{"name":"margin","value":"0 0 _theme(\"spacings.small\")"},{"name":"padding","value":"_theme(\"spacings.standard\")"},{"name":"toggle","children":[{"name":"arrow","children":[{"name":"size","value":".8rem"},{"name":"left","value":"2.5rem"}]}]}]},"button":{"name":"button","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"margin","value":"0 _theme(\"spacings.smaller\") 0 0"},{"name":"font-weight","value":"600"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.standard.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.standard\")"},{"name":"small","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.small.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"}]},{"name":"smaller","children":[{"name":"font-size","value":"_theme(\"sizes.smaller.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.smaller.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smallest\") _theme(\"spacings.smaller\")"}]}]},"callout":{"name":"callout","children":[{"name":"margin","value":"0 0 _theme(\"spacings.small\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"background","value":"_theme(\"commons.background.base\")"}]},"card":{"name":"card","children":[{"name":"content","children":[{"name":"padding","value":"1.5rem"}]},{"name":"footer","children":[{"name":"padding","value":".33rem 1.5rem"}]},{"name":"mod-grey","value":"_theme(\"commons.background.base\")"},{"name":"border","children":[{"name":"radius","value":"_theme(\"commons.border.radius-big\")"},{"name":"color","value":"_theme(\"commons.divider.color\")"}]},{"name":"hover","children":[{"name":"border","value":"_color(\"grey\", \"400\")"},{"name":"background","value":"_color(\"grey\", \"100\")"}]}]},"checkbox":{"name":"checkbox","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"label","children":[{"name":"line-height","value":"1.5rem"},{"name":"padding","value":"0 0 0 1.5rem"}]},{"name":"input","children":[{"name":"margin-top","value":"_theme(\"spacings.smallest\")"},{"name":"small-top","value":"1px"},{"name":"margin-right","value":"_theme(\"spacings.smaller\")"},{"name":"size","value":"1rem"},{"name":"border-radius","value":"_theme(\"commons.border.radius\")"},{"name":"border","children":[{"name":"color","value":"_color(\"grey\" ,\"700\")"},{"name":"hover","value":"_color(\"primary\", \"600\")"}]}]}]},"chip":{"name":"chip","children":[{"name":"kill","children":[{"name":"hover","value":"_color(\"primary\", \"300\")"}]}]},"container":{"name":"container","children":[{"name":"margin-top","value":"3rem"},{"name":"margin-bottom","value":"4rem"},{"name":"max-width","value":"_theme(\"breakpoints.xxxl.breakAt\")"},{"name":"min-width","value":"_theme(\"breakpoints.sm.breakAt\")"}]},"contentSection":{"name":"contentSection","children":[{"name":"margin-bottom","value":"2.5rem"}]},"errorPage":{"name":"errorPage","children":[{"name":"background","value":"#FFFFFF"},{"name":"header","children":[{"name":"color","value":"#FF7A1A"}]}]},"filters":{"name":"filters","children":[{"name":"background","value":"white"},{"name":"padding","value":".5rem 1rem"},{"name":"height","value":"4rem"}]},"form":{"name":"form","children":[{"name":"field","children":[{"name":"margin-bottom","value":"1rem"}]},{"name":"group","children":[{"name":"margin-bottom","value":"1.2rem"}]},{"name":"label","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"margin-bottom","value":".25rem"}]}]},"gauge":{"name":"gauge","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"height","value":".65rem"},{"name":"thin","children":[{"name":"height","value":"4px"}]}]},"header":{"name":"header","children":[{"name":"background","value":"white"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"height","value":"4rem"}]},"label":{"name":"label","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"}]},"list":{"name":"list","children":[{"name":"margin-bottom","value":"1rem"},{"name":"padding","value":"1rem 1.5rem"},{"name":"hover","children":[{"name":"background","value":"_theme(\"commons.highlight\")"}]}]},"menu":{"name":"menu","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"background","value":"#FFFFFF"},{"name":"padding","value":"_theme(\"spacings.small\") 0"}]},"navSide":{"name":"navSide","children":[{"name":"fullwidth-palette","children":[{"name":"bg-color","value":"#2D3368"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"hovered-bg","value":"_color(\"primary\", 800)"},{"name":"hovered-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"compact-palette","children":[{"name":"bg-color","value":"#2D3368"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"hovered-bg","value":"_color(\"primary\", 800)"},{"name":"hovered-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"bottom-section-palette","children":[{"name":"bg-color","value":"transparent"},{"name":"text","value":"white"},{"name":"selected-bg","value":"_color(\"primary\")"},{"name":"selected-text","value":"_color(\"primary\", \"text\")"},{"name":"hovered-bg","value":"_color(\"primary\", 800)"},{"name":"hovered-text","value":"_color(\"primary\", \"text\")"},{"name":"alert-color","value":"_color(\"secondary\")"},{"name":"alert-text","value":"_color(\"secondary\", \"text\")"},{"name":"selected-alert-color","value":"_color(\"secondary\")"},{"name":"selected-alert-text","value":"_color(\"secondary\", \"text\")"}]},{"name":"bottom-section-height","value":"3.1rem"},{"name":"offset-top","value":"0"},{"name":"padding-top","value":"0"},{"name":"main-font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"sub-font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"scrollbar","children":[{"name":"width","value":".5rem"},{"name":"border-radius","value":"10px"},{"name":"bg-color","value":"_color(\"primary\", 800)"},{"name":"thumb-color","value":"_color(\"primary\")"},{"name":"arrow-color","value":"_color(\"primary\", \"text\")"}]},{"name":"submenu","children":[{"name":"max-height","value":"33rem"}]},{"name":"width","value":"15rem"},{"name":"compact","children":[{"name":"width","value":"7.5rem"},{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"}]},{"name":"mobile","children":[{"name":"toggle-height","value":"3.5rem"}]}]},"progress":{"name":"progress","children":[{"name":"margin","value":"1rem 0"},{"name":"height","value":"4px"},{"name":"bar","children":[{"name":"background","value":"_color(\"primary\")"},{"name":"gradient","value":"linear-gradient(to right, rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255, .5) 100%)"}]},{"name":"duration","value":"1.5s"}]},"radioButtons":{"name":"radioButtons","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"hover","value":"_getMap(\"palettes.primary\")"},{"name":"active","value":"_color(\"grey\", 800)"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"small","children":[{"name":"font-size","value":"_theme(\"sizes.small.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.small.line-height\")"},{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"}]}]},"radio":{"name":"radio","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"label","children":[{"name":"line-height","value":"1.5rem"},{"name":"padding","value":"0 0 0 1.5rem"},{"name":"small-padding","value":"0 0 0 1.25rem"}]},{"name":"input","children":[{"name":"top","value":"_theme(\"spacings.smallest\")"},{"name":"small-top","value":"6px"},{"name":"size","value":"1rem"},{"name":"border","children":[{"name":"color","value":"_color(\"grey\")"},{"name":"hover","value":"_color(\"primary\", 200)"}]}]}]},"switch":{"name":"switch","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"},{"name":"small-top","value":"1px"}]},"tableOfContent":{"name":"tableOfContent","children":[{"name":"default-palette","children":[{"name":"color","value":"_theme(\"palettes.primary.color\")"}]},{"name":"item","children":[{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"border-width","value":"2px"}]}]},"table":{"name":"table","children":[{"name":"padding","value":"_theme(\"spacings.smaller\") _theme(\"spacings.small\")"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"line-height","value":"_theme(\"sizes.standard.line-height\")"},{"name":"zebra","children":[{"name":"background","value":"_theme(\"commons.background.base\")"}]},{"name":"hover","children":[{"name":"background","value":"_theme(\"commons.highlight\")"}]},{"name":"card","children":[{"name":"padding","value":"1.5rem"}]}]},"tag":{"name":"tag","children":[{"name":"default-palette","value":"_getMap(\"palettes.primary\")"}]},"textfield":{"name":"textfield","children":[{"name":"background","value":"_color(\"primary\", \"50\")"},{"name":"border-radius","value":"4px"},{"name":"input","children":[{"name":"padding-horizontal","value":"_theme(\"spacings.smaller\")"},{"name":"padding-vertical","value":"_theme(\"spacings.smaller\")"},{"name":"placeholder","value":"_color(\"primary\", \"400\")"}]},{"name":"hover","children":[{"name":"background","value":"_color(\"primary\", \"100\")"},{"name":"placeholder","value":"_color(\"primary\", \"400\")"}]},{"name":"focus","children":[{"name":"placeholder","value":"_color(\"primary\", \"300\")"},{"name":"shadow-color","value":"_color(\"primary\", \"200\")"},{"name":"border-color","value":"_color(\"primary\", \"600\")"}]},{"name":"disabled","children":[{"name":"background","value":"#F5F5F5"},{"name":"color","value":"#999999"}]},{"name":"suffix","children":[{"name":"top","value":"2rem"},{"name":"padding-right","value":"1.5rem "}]},{"name":"sizes","children":[{"name":"shortest","value":"3rem"},{"name":"shorter","value":"6rem"},{"name":"short","value":"9rem"},{"name":"default","value":"13rem"},{"name":"long","value":"17rem"},{"name":"longer","value":"22rem"},{"name":"longest","value":"28rem"}]},{"name":"material","children":[{"name":"padding-top","value":"1rem"},{"name":"default-palette","children":[{"name":"color","value":"_color(\"primary\")"}]},{"name":"border","children":[{"name":"color","value":"#CCCCCC"}]},{"name":"label","children":[{"name":"color","value":"#A6A6A6"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"}]},{"name":"suffix","children":[{"name":"padding-right","value":"1rem"}]}]},{"name":"compact","children":[{"name":"padding","value":".5rem"},{"name":"label","children":[{"name":"color","value":"_color(\"text.light\")"},{"name":"font-size","value":"_theme(\"sizes.standard.font-size\")"},{"name":"right-margin","value":".3rem"},{"name":"sizes","children":[{"name":"shorter","value":"3rem"},{"name":"short","value":"5rem"},{"name":"default","value":"7rem"},{"name":"long","value":"9rem"},{"name":"longer","value":"11rem"}]}]}]},{"name":"filter","children":[{"name":"width","value":"18rem"}]}]},"toasts":{"name":"toasts","children":[{"name":"background","value":"_theme(\"commons.overlays.background\")"},{"name":"color","value":"_theme(\"commons.overlays.text\")"},{"name":"top","value":"1.5rem"},{"name":"right","value":"1.5rem"},{"name":"width","value":"16rem"},{"name":"padding","value":".75rem 2.25rem .75rem 1rem"},{"name":"margin-bottom","value":".5rem"}]},}; export default SCSS_DOCS;