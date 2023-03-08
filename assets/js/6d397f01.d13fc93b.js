"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Server Timing Trace"},o=void 0,s={unversionedId:"features/traces/server-timings-trace",id:"features/traces/server-timings-trace",title:"Server Timing Trace",description:"Tracing requires server admin rights, if you do not have these the trace buttons will be disabled_",source:"@site/docs/features/traces/server-timings-trace.md",sourceDirName:"features/traces",slug:"/features/traces/server-timings-trace",permalink:"/docs/features/traces/server-timings-trace",draft:!1,tags:[],version:"current",frontMatter:{title:"Server Timing Trace"},sidebar:"tutorialSidebar",previous:{title:"Server Timings Options",permalink:"/docs/features/traces/server-timings-options"},next:{title:"Options",permalink:"/docs/category/options"}},l={},u=[],c={toc:u},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tracing requires server admin rights, if you do not have these the trace buttons will be disabled_")),(0,a.kt)("p",null,"The standard timings reported in the output window is the elapsed time for the query recorded by Dax Studio, but that can be impacted by network speeds and the size of the result set. If you want to see the query timing from the server perspective you can do this with the server timing trace button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(16916).Z,width:"856",height:"210"})),(0,a.kt)("p",null,"This button causes an extra tab to be displayed which shows the total time the server spent processing the query as well as the time spent in the Storage Engine and the number of Storage Engine requests for the query."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Metric")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the total query duration in milliseconds \u2013 taken from the Query End profiler event. This is the total time the server took to process the query. (so it will exclude any time the client took to process the result set)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SE CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the amount of CPU time that was spend on Storage Engine queries (note that this figure ",(0,a.kt)("em",{parentName:"td"},"may")," not be 100% reliable, so don\u2019t place a high amount of importance on it) the blue ratio under SE CPU is the factor of SE CPU over SE and is a very rough indicator of the average parallel operations that the SE was running. This figure is calculated by adding up the CPU duration from the Storage Engine events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FE"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the amount of time spent in the Formula Engine, calculated by Subtracting the SE duration from the Total. The blue figure underneath is the percentage of FE / Total")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SE"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the amount of time spend in the Storage Engine, calculated by adding up the duration of all the Storage Engine queries. The blue figure underneath is the percentage of SE / Total. As a rough rule of thumb you want to try to get your queries to spend more time in the Storage Engine as it is multi-threaded so can do more operations in parallel. While the Formula Engine is single threaded and cannot make use of multiple CPU cores. Note that you cannot have a query that is 100% handled in the storage engine as the FE sits over the top of the SE. The FE is what issues the requests to the SE and it also serializes the result set before it is sent back to the client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SE Queries"),(0,a.kt)("td",{parentName:"tr",align:null},"this is the number of Storage Engine queries that were performed during the processing of the query")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SE Cache"),(0,a.kt)("td",{parentName:"tr",align:null},"this is the number of Storage Engine cache hits")))),(0,a.kt)("p",null,"You may also wonder what that \u201cSQL like\u201d query is that captured by the scan event. This is called xmSQL and is textual representation of the requests that the Formula Engine sent to the Storage Engine. As far as I am aware there is no way of executing these queries, they are merely a textual representation of the requests sent to the Storage Engine to enable people to understand what operations the storage engine was performing."))}p.isMDXComponent=!0},16916:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-timings-tab-153b7aa870f1027cbc270741fe0fc6b8.png"}}]);