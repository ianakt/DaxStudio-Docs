"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[9390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},A=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},A),{},{components:a})):n.createElement(m,o({ref:t},A))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={slug:"v3-release",title:"v3 Release",authors:["dgosbell"],tags:["daxstudio"]},o="DAX Studio version 3.0",s={permalink:"/blog/v3-release",source:"@site/blog/2022-08-24-v3-released/index.md",title:"v3 Release",description:"Today we are happy to announce the release of version 3 of DAX Studio",date:"2022-08-24T00:00:00.000Z",formattedDate:"August 24, 2022",tags:[{label:"daxstudio",permalink:"/blog/tags/daxstudio"}],readingTime:3.63,hasTruncateMarker:!1,authors:[{name:"Darren Gosbell",title:"Maintainer of DAX Studio",url:"https://github.com/dgosbell",imageURL:"https://github.com/dgosbell.png",key:"dgosbell"}],frontMatter:{slug:"v3-release",title:"v3 Release",authors:["dgosbell"],tags:["daxstudio"]},prevItem:{title:"v3.0.6 Release",permalink:"/blog/v3_0_6-release"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},d=[{value:"Dark Mode!",id:"dark-mode",level:2},{value:"A clean, modern User Interface",id:"a-clean-modern-user-interface",level:2},{value:"New Ribbon options",id:"new-ribbon-options",level:2},{value:"Tracing Improvements",id:"tracing-improvements",level:2},{value:"Server Timings - Waterfall column",id:"server-timings---waterfall-column",level:3},{value:"Query Plan - child operation indicator",id:"query-plan---child-operation-indicator",level:3},{value:"All Queries",id:"all-queries",level:3},{value:"View As",id:"view-as",level:2},{value:"Updates",id:"updates",level:2},{value:"Fixes",id:"fixes",level:2}],A={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we are happy to announce the release of version 3 of DAX Studio"),(0,i.kt)("h2",{id:"dark-mode"},"Dark Mode!"),(0,i.kt)("p",null,"This has been an outstanding request for a long time and finally we are happy to announce that we now support Dark Mode! You can switch between the 3 different mode settings using the button at the top of the ribbon"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(88037).Z,width:"192",height:"90"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"auto mode icon",src:a(38768).Z,width:"16",height:"16"})," Auto-detect - attempts to set the appropriate mode based off the preferences in the Operating System (should work for Windows 10 or higher)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"light mode icon",src:a(17609).Z,width:"16",height:"16"})," Light mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"dark mode icon",src:a(82608).Z,width:"16",height:"16"})," Dark mode")),(0,i.kt)("h2",{id:"a-clean-modern-user-interface"},"A clean, modern User Interface"),(0,i.kt)("p",null,"With the help of the amazing Daniele at SQLBI we now have a clean, modern update to the user interface including new icons and visual styling"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(27053).Z,width:"1707",height:"1072"})),(0,i.kt)("p",null,"A couple of important changes worth noting are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"document tabs have been moved to the bottom"),(0,i.kt)("li",{parentName:"ul"},"Metadata, Functions and DMV tabs have been moved to the top of their area"),(0,i.kt)("li",{parentName:"ul"},"the tabs for Results, Logs, Traces have been move to the top of their area")),(0,i.kt)("h2",{id:"new-ribbon-options"},"New Ribbon options"),(0,i.kt)("p",null,"In addition to being able to collapse the ribbon there is now also an option to show a simplified view"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6827).Z,width:"385",height:"208"})),(0,i.kt)("p",null,"This view takes up less vertical space while still keeping the most commonly used features easily accessible."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(68292).Z,width:"1354",height:"132"})),(0,i.kt)("h2",{id:"tracing-improvements"},"Tracing Improvements"),(0,i.kt)("p",null,"The internal tracing engine has been re-architected internally which will make it easier to add new trace types in future and it should also have fixed the issue where sometimes the trace data would "),(0,i.kt)("p",null,"In addition the following enhancements have been made to the existing traces:"),(0,i.kt)("h3",{id:"server-timings---waterfall-column"},"Server Timings - Waterfall column"),(0,i.kt)("p",null,'A "waterfall" column has now been added to the Server Timings tab. This gives you a quick visual indication of which Storage Engine queries took the longest and where they'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72726).Z,width:"792",height:"261"})),(0,i.kt)("h3",{id:"query-plan---child-operation-indicator"},"Query Plan - child operation indicator"),(0,i.kt)("p",null,"The Query Plan trace will now show a dashed line to indicate operations that are children of the currently selected row. This "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(16987).Z,width:"727",height:"479"})),(0,i.kt)("h3",{id:"all-queries"},"All Queries"),(0,i.kt)("p",null,"The All Queries trace can now be run in parallel with other trace types. You used to have to either stop other traces or run them in a different document, but now all the different traces can be run at the same time if you need to. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Just take note that traces do add some extra load to the Tabular Engine, so it's a good idea to stop them when you have finished collecting the data you needed.")),(0,i.kt)("h2",{id:"view-as"},"View As"),(0,i.kt)("p",null,"A new ",(0,i.kt)("strong",{parentName:"p"},"View As")," option has been added in the ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," tab to enable easy testing of RLS roles\n",(0,i.kt)("img",{src:a(23261).Z,width:"582",height:"150"})),(0,i.kt)("p",null,"This enables for both testing the functionality of the selected role to make sure queries return the correctly filtered data and you can run Server Timings traces to measure the impact of these roles on your queries."),(0,i.kt)("p",null,"When it is active the ",(0,i.kt)("strong",{parentName:"p"},"View As")," option shows a yellow information bar at the top of the query editor. You can exit out of the ",(0,i.kt)("strong",{parentName:"p"},"View As")," mode by clicking on the X in the right hand side of the information bar"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(30600).Z,width:"1050",height:"575"})),(0,i.kt)("p",null,"To make performance comparisons even easier a new option has been added to the Benchmark feature which is enabled when you start the benchmark while you have ",(0,i.kt)("strong",{parentName:"p"},"View As")," active."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7813).Z,width:"412",height:"344"})),(0,i.kt)("p",null,"When you tick the option to do a second pass the benchmark results will include a second set of columns in the results for those passes where the RLS role was active"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(23607).Z,width:"627",height:"266"})),(0,i.kt)("h1",{id:"other-updates--fixes"},"Other Updates / Fixes"),(0,i.kt)("p",null,"The following lists other minor fixes and improvements that have been added since the previous release"),(0,i.kt)("h2",{id:"updates"},"Updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/826"},"#826")," added PowerPivot model detection timeout in options"),(0,i.kt)("li",{parentName:"ul"},"Updating syntax highlighting to handle multi-line strings"),(0,i.kt)("li",{parentName:"ul"},"Added highlighting of cache nodes in physical query plans"),(0,i.kt)("li",{parentName:"ul"},"Improved state tracking for trace windows"),(0,i.kt)("li",{parentName:"ul"},"Prevented interleaving of clearcache with query execution"),(0,i.kt)("li",{parentName:"ul"},"Width of the connection dialog has been increased ")),(0,i.kt)("h2",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/764"},"#764")," error when running from cmd prompt"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/799"},"#799")," error when opening querybuilder files from older versions"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/812"},"#812")," using FIPS compliant hash"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/816"},"#816")," database dropdown too small"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/838"},"#838")," added support for custom datetime formats when exporting to xlsx"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/daxstudio/daxstudio/issues/841"},"#841")," allowed for loading of performance data where component information was missing")))}c.isMDXComponent=!0},38768:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB1UExURfPy8dnY19PS0ZmYl5aWlLOyscvKyOHg39bV1K6tq0xMSt7d3evq6U9PTLm4t7CwroWFg6uqqPDv7n18e2VlZL6+vWlpZoyLijo6OJybmlFRT9DPz39/fmBfXuXk4sjHxainpmxsaZSUklpaWO3s656enM3Ny7QxQfkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACTSURBVChTTY/hEoIgEIQXNTVDI0I8rdTKev9H7Dhwpu/HcbssNwcSKkvNTl6khjmUXCrFpT6KUTYnOaHbLjasz8ZcLEIqcnVd771Niu+dBgYaRai8guG3diIHPd6QFQr3HtYQPTAXi6TW5zAR0UtEwHqW9OZBkQ02d/6zITl1uy/WpAlhPz1zWVYxhPHvc8I3poEfOhUHEPoYTGsAAAAASUVORK5CYII="},23607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/benchmark-rls-results-4c5b8fb09ac5ec18b4abb29bc7029499.png"},7813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/benchmark-rls-ce0aacfcf7fee3947e81dc3706baa9d1.png"},82608:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7UExURTo6OkBAQE1NTZSUlP///+bm5pGRkT09PXV1dc7OznJyctHR0UNDQ76+voqKirW1tezs7GVlZcHBwZqamqysrF9fX0ZGRuDg4I2NjW9vb2JiYqioqGtra93d3a+vr8rKyqKiounp6VZWVsTExNfX10lJSfz8/OPj45eXlwWNjkcAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB+SURBVChTdY7ZFoIwDEQHipQWwVJZ3KGy6P9/oWkJDz5wHzIzyUlOsEcUs9kQySGV7AOZ0rk6cvBoBVkUHDzlie6YihNhUyrneg1EY1qqtMfE3cXLdWvcuntQQYeIhzVhDvnUQUvDX776VTG4LALe4zRzAzpfpo/7/r2+B/AD4vYEmIwwBJMAAAAASUVORK5CYII="},17609:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4UExURfPy8dnY19PS0ZmYl5aWlLOyscvKyOHg39bV1K6tq0xMSt7d3evq6U9PTLm4t76+vYWFg3d3dauqqPDv7n18e2VlZLy7umlpZrCwrn9/fpybmtDPz2BfXuXk4sjHxainpnR0c5SUksXEw4mIhldXVe3s66GhoM3NyyfbQiAAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACSSURBVChTTY/pEsIgDISXgm2t9EDAai9tvd7/DSWBzvj9WLI7SQAkRJaKHalSETjkQQoRpDxykFcnPqHrJhbBt505W1BXxPnm4nqbHHD1OuhtYCNkAcezo4ceRmRKwLQUZBNmtVCF+4PGu5UNYXuzbc8XLWLesNJPq0ZKynp/WJU20B16DrJ8OGCGv88x39gN/ADQ6QY2izuZrgAAAABJRU5ErkJggg=="},88037:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABaCAYAAADuIVkiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5ggYARY3DPMcYQAAHfVJREFUeJztnXl8FEXax789V0ICiUS5DyEkERFRDg9IR0kUTMziricql3jBoruyHtwoyCmKLhpdwBU3ElYjLrzu+yEJsCZgOqAoccHlBZOggoE1qwtyxITJTPr9o7tneiYzk2M6JJL5fT71memu6qrqmudXz1NPHSPIskwIFzYEQRAAQb00OVJSalqyPgCW/HwrUAvIAHILCaKlJQoN4fxBJ/wmNZhbtkYuWAGnGmRBEFqEBCECtB1owm9t6Yqo0Ooho9ME5xshAlz40Hp/TfjD9ZGW/Pwr1TR6ATRCGAXdpwzgSEn5UhcfrouTUZXV+dYCIQK0DQj4IQAQhacggnEE0I89vBGO0vM7cGuAkAkUgnHQ2f+aFrAANq9kNtxmiBaCLlr3adIFPaxqfcwoJGgRCKIohtxAFzBkWUaWZWpra6mtrcXhcLDnootc8Vf/5z8ACILgCkaXrYV9Xbq44q796SfMZjNmsxmTydTgsgsLC42rIKoGyM3ZYkhm339fwbFj5ZQfO8bxY8c5dvy4cl1+jMjr7+ZPT9xNt4ujDSkrhPohyzJOpxOHw0FVVRWVlT9z5sxpmD3HleaF5cuxWi3YbDYsFqsqkE0ngmbCy7KMw+HE4ajBbrdjt9fAK6+40q3+0xu079CB9pGRhIeHY7UqZfsqN+3WdMB44YcgTKA9ez5j0+bNHD9+jPLyYxw7dixgenO/alLX7mN5SifSrru8qcXWwf79+9m3f1+d+zEdY0hNTcVsbrrXr7j4C6SiQuXH0yE2NpZf33ZbUHmfb8iyjIyiCfSwWi2Et2tHmM1GWFgYFosFQe2RfaGiooIau52evXoFLAtZxm63U1NTg2Ay4T229dAOAerdnMIPQRDg0FeH2Lx5c8MfqPoJZ7uOzMr/kb8X5/DKQ6MItwXnkfvs88/Jyspi9KhR2LzyemnlSr745xfMnjW7SYL62eef805mJqmpqT7z/r//O9DovEtKS/ii+AvsNXaf8eHh4SSOSKR79+6Nrm8g6IXPW7BtNhthNhvt2rVzEcBfTwzwRXExzlonl112md/yamtrkWUZs9mCxWKntrYWp8OHmV+Pw6e5hR/8EOCJ/z3CR4dP+33oqm4RPDlgQKMKko8fQO7YC/upf7Pz7I9kRVfx8P13Nq62XpAkifvvu4/rrruuTlzmO5kALFu+rEkkkCSJ8ePHG5Z3SWkJzz+/kFtuSWX37t3ExcXTtWtXV3xl5Vm2b99OTk4OY8bcxh23396o+jYVFouVsLAwwsLCaNeuHVarFZPZjAAUFhbSpUtnEhLcwp6enk51dTXt2rVz3SsvP0ZJySFSUm4CVHdObS1m8zlMJgGn00mNLwIEwPkQfqg7Mm8Q/nO2ht69ezfqmdqj/8SRu5zaXZk492/hhyOlOBwOXsvI4MaRI3nvvexG18PpdHr8EN6YPWs2oAiq0+ls0bz37dvHLbekMmH8BGJj+/GrX6Xz6KNTXOGee+6la9curHxpJTk5W9jUGO0aBMxmMxaLBYvFgtVqVT7V7z16dGfZ8uWcOnUaq9WK1Wqlc+fO9O7d23XtdDpZsPBZoqKiXfcsap7atdlsxmxqXAeUm7Ol2YUfmmgC/VDp4HQNtAsPp6q6uk58//79SU9Pp2vXrmzcuJE9e/Z4xMfFxTF69ChWvfoqa9e+SYcOHbj99t+44j8uLGT49ddjtTbdROrevTvTp0/HarNx4MC/iOnYkWnTHmtyfsHmXe3VTjU1vnvEmJgYVrywghkzZ3BZQjxXXDHQkDpr8DZtTCYBwWRSBr+qV0YzgQYMuIJXV71Gp06XAPBR/kccOHAAgIT4eEaNGk1kZCQrXnjRw2xTJ7RcHh6TjzGFIAgQYKCtagAZQJKkSMAuy7Lh7lK/BJh5Yzf6d1J6QOnIGd767AdeTOvFJZGKUPbs3I5evXtTUlJS59k+ffrw5JNPMm/ePFeD6TF48GBOnjzJ2rVvApCefithYWGu+IyM17Hb7dx8001NfrHFi5Zw8uRJAA4ePEhOrjGeLiPyHnjFAFasWE7XLm4T6MzZSq4aNAhQSHD7b27n8717DSeAN/TuT4G67tDOnTsBsGLFCr6vqOCuO+/EarOxcWM2BTsKWLZ0OT169KiTp/rFJeiNdSppnsm0W9MRRbFSzTcKqDKSCH4J8OPPDo6fVgZr1/dqT5f2Vm6MjcJmFsg/fJqKsw66d+/ukwA//PADAP/+97+prKysE3/VoCv5x0f57kqYLTgcDiwWCwcPHmLfvn3k5eUFRQCbzUYX1e9cUVHR5HyaI+/U1DSGDr2G2lq36WQymV09rVKGFZOpSRaq4fgo/yO+r6hg6ZIlhIcrE8nFe/eyafMmPvjgA8aOHdvsdZAkKQGIBqyCIFTKsnzOiHz9EuCtz37AYhLI+PWlyOVf8kn2e2w/c4a77ryLKxNvpuy/VfS59FKfz3711VeUl5f79WZ88823REdFua6zNmzg48JC7rj9drZu2wpAVVVVMO/V6qEX9taG48ePs3PnTlJTU4mJieHAgQPcdeedLuF3Op0U7SoC4NM9exg7dizV1dV8+OGHDBt2DX379jGsLrk5W+gQFS2iCL8FZdyqrRsKmgR+CfDQNZ24sU8Hqo/s57HHH+e228Zw7bXXkv1+NtnvZ7Purbc4FO17Uuvs2bMcOnSIhIQEn/FfffUV06b9lr9kZrruHT16lD+uWuW6vjjm4qa+kyFIS72Fbt2MdUcCHD78NYuXLOL48eM+4zt1uoQZz8w0vNzGwG6346x1usYtdnsNVpuygsLpdPL6G6+7NF+N3a6mOYe9xk519c+G1kU1gSRJkm7GvXRCABAEQZZl2bdPuYHwS4C0+Ivo0a6GGx5/nNczMhgxYjgA944dy8RJDyBJEgMG+J/QKi4uZvjw4T7jpKIinn76aS6/vD8HDx7ymSY19ZbGvIfhaC7be+vWXO666x6/ZsPHH3/Mtu3buWrQlc1SfkPQp08f+vbt67q+vH9/Nm36gOK9eynaVeRh9g27ZhgAUVHRTBg/AaDOZJtBuAhFXrXRhAw4BUFwyrLcOBefDn6NzDc+/Q9ffvkvOnbs6BJ+AIvFwujRo9i0eXPACZsDBw7QK8BsYWFhIUOHDK1zPzY2ltczXmPEiBENfQfD8dnnn/Psc8/yxPTprnsVFRVMmTqFhc8/z+HDXzc575+rqomMjPAbHxHh3/XaUkhNTcXpdLJp8yYP4e/Tpw9j72ke+z/t1nTXXIAkSb9HMYE6qCESiADaUXd1a6PgUwOkXhaN3SETWRPByZMnOXfunIeX5qeffiIiIpJL/YwBQNEAPXv25KmnniIvL6+ON2jgwIHk5Oa4rnv06MHiRYs8yNYSOHToIO+++y4zZ8xwDXQBunTpwprVazh8+GtWvvwSzz37nEf8hQq73Y7NZmPZ0uVkZ2fz+d69WCwmrrnmWn5926+x2WxUV1e7xgdGQpKkZSg7xrQl29ryaTtwDqgmyA0+PgmQlqCsFnQ4OtCxY0dWrHiR2bNnYbFY2Lt3L1lZG3j55ZWEhYXRqVMnl9dHjxMnTrBgwQJOnDhRJ75jx45UVf3sYf7MnDGjxYUfYNv27YwfNx6r1cr6rPUecWaTmTvuuIPbxozh48KPufuuuxucr9lkxlnbZE3dIvjuu++YPWcWr7y8ik6dLuH+++/n/vvv90hTXV3N5AcnM2/u3OYwGy9CEXhtCbcTT+EPA2yCIFhlWW7SPueAE2EWi4U/v7mWJ6b/gZHJKdhsNn788UciIiJYvXoNw4YOpVu3bj4JAPD222/7vD927D3s3Vvsur722mu54YakptSfc/agxkB1EGYL4/TpU4SFhXHVoKvqxFutVk6dOk379u0ble/AgQN59bVXiYqKZt++f9ZZHKbh6NGjHD9+nEOHDjJp4qQmvYNR2L9/P9N++5iHx6q6uhq7/RxRUYoDJDw8nHlz5/Ltt0eagwAyitA7gBoU4a8Tmir80ICZ4NjYWDZv+hsHDx2i6ucq+vbtw5kzZ5g46QEefuTRJrnzBl89mIyMDNf1DUlJAZcd+MOwoUN59913+enkiYDp9u3/kqFDhjUozzFjxvDU008B0L1HdxLiFU+W0+nk0KGD5OXlkbc1j4zXMqisrOT997O5+qrB9eY7aNAgHpz8IIe/PgxAefl3PtOZTAKDB19Nn0v7kJTUtE7BKKSnp9e59+GHH2KvsbsGvKA4DJrDaSCK4jQASZKW4Llhxzs0GQ1aCmGxWLhyoPsFO3XqhFT4cTDlMnLkjUE9r+QxEmetky+++GfAdLGxsQ1eXNa9e3dWvLCCnJwcPt+7l9//7ncuzZebt5Xu3bqR8VoGkZGR7Nq1iyFDhzU47xEjRrTo4N4IDB4y2OX6bE54zQTPlSTpmeYo5xe/JfKmlJu4KaXpM8a+0KtXL6ZMmeJxr0uXLjz91FMe937pwtwUaBqxBSAECE3GL54AIQSH1n4wmjoTvIxmIkDrWGwSQotC2zOs/zQkqHkhy/XtffEL1QSajdJZ+wyCIDR5a16IAG0MvrYm4iW42gb6YIM3IZoCbSwgiuISPE+YMMmyXCrL8o/BzASHTKA2jmFz57VIuY0hRG7OFk0TZEiSNB60ldtCf1mWfa+laSBCGqCNoVXZ/I0kgQoT/s8aajRCBGgD0O/GMvLcn6DRtHOIvMcAQSFkArVBFMyaid1eQ42jBovZgtWq7t+12TCblHOBgoEyrJBxOB04HQ7sdjvnzilzB4IgEBHRDv08eiNLM1QDhAhwgUPb3mgymTCre38tFgtOpxOn06QenlWLICi7DJ0mU1N7Zhe0gbVShhOnU5msNZlMmM0mzOomfIVs/s8g0kNbGUqIACE0Fi4CaCdAqKc5OByK80Q5MlH5NPJ4RMUbJLvyNZlMSvlmlQBmU4OPRVTnA+agbIjRh6AQIsAFDP0Gd7PZjNVqxRYWRoTTiUlQCKG5KD02wxtEANc8AIpWMFssWC1WwsPDsNnCAh6H6A3VC7RU3RtgBayyLH8WbB1DBGgD0Hpfq9VKuLqvw2KxUFNj8/DXN8cAWZ+vdv6QzRamksDmcWyKv/J15g+iKL4qSdLDsiwbcsyHwQQoI3PcPaw66L5z28piFvTMZNzYb3ioeAEppZmMWwALNkwi3tjCQ/ABvfkDEBYWhslkwmG1UlPjQEZ22ezNWAlA2RNhNitEtNlsmC0Wv8KvF3oASZJWAVXAKQyU22bQAJfzRPYGJnlI9yQ2FPtL31qwg6XJz7Mt7kHefHO8i5wFy1JYuA1GP5fPnJEtWb/GopR3Jk8mP3kd68bHuUwNQRBcg+Da2lrksveY9jI8mXEPsc1EAk24td5eOzBLfzS6L0iStIa6/12g/a+YIQiZQBcqSj8hv18q/da8z44JcxkJLmGrra3FbDYrm9fDrJjNMmHh4cFtrm0ATLpxhr7nD2D+aMLv9A6CIPwGOCnL8s6g6hTMww1GaSbjxmVS6jNqHEOGDFHCgoLzUp22gNJPCuiXOA8xLY+iHW6hc3litLM7LWZMJuW7rZmDdvaoRTV9GuAB0gjg8BcEQRggCEK3prZTM2iAg6waOwTlhB/VHPKTsjRzHAtYSHFxHAD5C4awoKCYBcnG18owlGbx8KPrKNOudSaTYi7FERdXRpmWYPQoRm/bzjYlMQ+tXcsE1b7SzCsFo3iuYDbGvHopu/NjEd+GZFKZW1TA/GR3zgVLkpiXq3xPm/IoggAm88csE7Po/fZbTIx3pysaUcg8lpA4P099OoEpWpqCJSTuGsFinlXzS2WxNNf1DvpyEqas4+0J8VC6nsmT16KcJ5jKkqJ5avoCFiXOJ1e9rx45pW2JDLQbLKhdYc2gAS7niexiiouLKS72Hgt44rtvDnJw1T0uDfD036H0aJn/B84HytbxSHIKI9XgFlCAHSx9dB1lcQ/yZkE+O9Y+SFzZOh55JEun3cqIHZfPjoJnGQ2w7Rt6rc1nx3OjgDLe+mAHoAn/KJ7T8mE7C5ftMOYdCrJZ3S9REazkRNJyi9B0a1nWQ8w7PIXMIoldRRLi0bWUICAIKdw7FQo+LVN75R0U5aYipggIKfPYpabftTiWNe/vUNMAuc9SlKjELUnL450s5fmyrIeYxyLXc3+ZmIBQlsXkZQJzXXnB3MUFKOOV+Rye+ja7iiSio3drb+LXBNIHWZabfPZli48BblvZynp8P4NgAHbsZhsQd+N1Snz8ddwYt46ysu8od2dAL4+zYvvSMx6gF3Ggao4d7N4GsJ2FydtZqCX9upxSCNo7VlCUR1qitsozGTFtPlLBPJKTofwITJ0zwVVG8tgpJCxVvsdfnwxLP6F0QjzxBUUcnjqW+YA2oF6tHQObcKm7nmmLmK/+fsmJqcwtUlpidz5MneP1w5YfoaQkj0mJa9z31LyOMIWKd6eT9q5yWx0Aa8Lvd0M8YBcEIUqWZf9/aBEALUqAXn0v5+9/zmRccht1iXqRzRgUIOVCbq6omhPu+/OTe/Ld4QCPxl9PCsvYXXo9u9/5mpQ58WjCf2SixK5koHQ9Dyytrw7lHCmJRfT1YmmL2DXPixil6zkMvJqzhSFR0XrPjyb42jEoVQFCk9Ciq0HjJ23gpfhVjNUGwUPGkelrpNxaMHI4o4GynZ8qJk/pp+wsA0YPb6Tt3oNecUDZOjbuUG+VZrF+h/8nGoyCInLT3KaHEhaRlrued0rjGZ4Cq7PdzoaC7DW4z/eOZ+LEWPKzs8nvN0EdC5RzpCSBS3uq1fykQJfeH5IR0/JU80aHnpeSkLued7x/4/jrSWENv1dme6fgafpoR6JoJKgTmvVYlMYhjkkbNtS9HT8J1239dyBlQTHFC4ytRfNhJHPWlvP1o+t4JHmdcivuQd6cPbKR+cQz4c018MgU3lqYwjbVBhr93Piga+hp/mhQzKDMT0qZOGE2UydPZkSiEpM2dQoJeq2QnEi/efNhsduEunfqeiY9ILIaSEhLpSHb4pPnve1RTsLUt/nLhAn8ZfERRqh5ue/HM3HOFPIfWENFdDSiKP5WkqTX8CSARgJXkGX5SGPbxxuCKIqyUX+TGkIIwUJ3HugqoFINZ9VwGmUm+KQ+yEHs8mnxQXAIIeihrvp8A88BsF8TKBjhh9COsBBaGdRVn9NEUfwDvifCarxCUAgRIIRWhdycLfqTIJ7FkwQ11J0NDgohE0jFVX8O/E/35wv7Hu5Rf6K2BW+PkP5Q3KBX74U0QAitFpIkLcAt+B5BluWzRpQRIkAIv0gIgmDI4tWQCaQiZHq0TYQ0QAhtGiENEEKrgfc2yPOBEAFCaFH42Pu7GmWgW009y6CNKP+CJYB3w4aWe7Re6Pb+ahtg/C59xoD/BdPjgiSAbj3JGkAWRXFqIPXa1shRXV1NSUkJFRXf15s2NjaOfv1im7tK+o3vDurv+dvmpvjG9Oq6DRW1kiRliKL4uHr/NfW+jEKOP2j5tgUilJSWsHjxYmJiLqZ37971pn9p5UruuP2OOn8ZZTC8lzx4L3fwFQzBeVkNWnKmnIrqUwy/pD+WJv6Zh69e3TuNdo68mu4N3JMomsBD3X2mGhGe1fK4UOF0Opn84GSmT3+SG264oUHPJCYOp1evXlwz7BrDSeD1W2nLHLQNMOfwsfIT9wrQX8YY4K2vt/Ja2YdcGtmZ7/f/xEuDHiGp0xX1PufLZPHu1XH3HLIoitN1DfoK7pWEWq+iJ4D+jBlZze9JURRfDuplWzm+/fYINputwcKvYcULK5gxcwaA4STwsfVRvwvMZzBK+CEAARpibvizq/VpN3xXwLrEZ7ih61VsO/YZv9uTwYCoXiwZ+AC9IzoHzM9rcKRXk1oP7urJJUlaJIrifPXRU3huptDSQd2DljxOFki7Nb1B76r/G89A79+aUFl5losvjmn0czExMYaTQNdumkaus9YnQDAMgiiKHguKvMyIWOAiURSLtTjvl5Ak6U/ohFSztbW0V2ydQsHolcRGdQegptbBy//ayCuH/sakPjfzTMJdhJttdUwc6vbU+l5C69WdeBJCg75BG0UAURQ3+2ssSZLmAhZRFBd63X9Dy1sUxcf0bdmasH//fjb8NYvXX1/tMz4pKYnCwkLXJygm0Na8rQCcOHGCGTNnGGIOqbKzBuW30a/x1+/z9bX55VRQBXvBAlBYWCgAJCUlucggSVI0EA3USJIkiqIo6QeLOgafQydUkiStEEVxhr+e1GqyMHPQfUzodzOziv/M1dsfo++rx7UyXSYOnr299qlXkfrlsTUYRABJkm4CbECYGqxqsGifkiQ9rabR7mkz6rIkSYsBRFGcl3ZrOlnr3wnQ/BAZGUl4uHtZS7O7b/2sn9T+lV4QhDWiKE7RSBAZ2Z4TJ04QExNjmCbw6v397f2tAn72EQyFoF9R6kWASKADEIVChGgUbfCBLs0yPP232oBTEEVxEcDRJ3p6aABvFH3/JbPunqbvRfWCrxdw/QBJrw41UhhCAJQz5wMSQI33SQB924qi+NIzzzzt8701VP1cxYABl9O3b1+/A32jSLB//342bMji9TcUDaDv8XXlamOqaQDp6bfy3//+lzG/GoPFojgwTpw4wSt/fIUxvxrDww8/3Oh6ePX+djwF/CzurZDevX9l09/eNzzGAIWFhUJSUpJcWFgoqP+9qv/xLSi9372iKL6nPnIGTxZrgig0dFA56+5p2lfNteVrQKQJun5bnDYo0uJaHQEAXnzxJT76xz/8vv/pM6fZuWMnHTt2BNBMSvBy3xoN7x5fKxO17SRJ+qMoitO3bMnh3nvHkp39rsfz/S+7jI0fbGw0AQL0/t7HnzR77w8+BsGaOSTLslMQhCoUgTCpnwKKcN8HXOTjRVwE8JW3P0iStAK3EGkaQBN8vQdAbyNqRGi1BJAk6W5RFDcGeveoDlFEREZw3/3j9HXXPgMOzBuLs2fPeFRQ6/FV7SvjObZySpK0VBTFOe+9l10nr8LCQhIThwcsz5+TRKdptN/Hl/Cf1QcjNr/4QkAhlWXZLghCJb7/kt7breiTAL1XlaOcEVgXWi+E0gC+COC9CVprnErcRAiKAL4aVhAEC8ZoADPATTffHFALaJAkaaVXOzglSVouiuKs+kjQmLGDrt29HQ1au2tEqJUkaa76J9VIkjQHxTxapssjYF10ThI0swpPwff+XfWnP5xBEX5DPT96CA0hliAIYUB7IFL9jFIDBCZAmCiK2zK3ZPscAyQlJSFJ0kw8hUjL6xyeHgFNDVbqQr0ECKbnEJRji4MlgE0Uxd26+3XIcNPNNwOuMZU2U6i9Qy1QK4rigvrqK0nSUsAqiuIzUJcEu3YV8T8ffsiXXx7QBFP7zbRyNDOzRndfmyvRkwVRFFd7l+El+K+obaA9q7WJ9m6a8P+MIuya0P+kfp4CTjeH3a9HgwgAIAiCDYhAIUB7lAEy1E+AzzK3ZDMpfazPfCVJegL/BNAEXi/8Z3CrxioM2hvaEKjjokYTAEWThAPhoijuBDcJdMI/W83Pux2ceGpb76A33VzjNr2rVhPSXbuKWLR4qVaefrLQmwDeJPA+oBbALIriX73bSJKk+bo28UcATdNUofyOeqF3fZdludo7f6PRYAKASwAicGsCqJ8AruOeJUlKQflxtqrXE3CbGd4m0Dk8D0bSCHAaONPcPUN9EATBRBMIgEKCPfq8JEl6WI3z1Q6BlnF4j130jgsbipC+4F13SZKW4MPmx93ueudCjS5OS6uVp+8EbOo72AiOAFrP3+zCD40kgOshZT9mpHoZkABAO5SGCcPdOFZRFIskSRqDfwLY8XSJaeG8NY4REATBihcBUNpECxG428hwAuDWKpojQy+YrYUAmvmjdW7N4vHxhSYRwCMDQRD8mSCqDe1BAFmWjwiCcDluAWgUAYxaB36+oWrPEAEUeBPgDIrwnz2fwg8GEKBBhShECAvUcwuCcL361ScBznfDNBdU06lVEUCW5Ty1bjfQMgQ4i9Lzn2tEUxqC80KAhkIQhMtQXJOl6nU0ivAHfQJYa4OqEVqMALIs7/BRpys5jwSQZblMLdfSUr9xqyJAW4YgCJ0xkACyLH8vCEJffBBAluX9AerRSZblH9Tv5oYsPVa1WoMIIMvyd/Xldz4RIsAFBkEQTLIs19afstnK1zSQyajT25oTIQKE0KYROhgrhDaNEAFCaNMIESCENo0QAUJo0wgRIIQ2jRABQmjTCBEghDaNEAFCaNMIESCENo0QAUJo0wgRIIQ2jf8HXGXfQOHyk2IAAAAASUVORK5CYII="},27053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modern-ui-cbac370124f581346280f141f9428456.png"},16987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/queryplan-child-operations-171c80a06ad1472bf2e8966dd239f76b.png"},6827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ribbon-options-2aab810852ac6f5c623e44600e292ff0.png"},72726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/servertimings-waterfall-fbf6777cdd41c1ea5c557eb8cf05db0d.png"},68292:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/simplified-ribbon-8b74c8dfcec389e4bf77951b5516b9bb.png"},23261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/viewas-button-8f104f33a02ce0945b4d7210af384217.png"},30600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/viewas-results-c6cd4bf2dbcbf8ebc0c10b37be39dab2.png"}}]);