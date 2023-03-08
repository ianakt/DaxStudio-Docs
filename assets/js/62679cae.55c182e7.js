"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[6795],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2471:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Command Line Parameters for the Installer"},i=void 0,o={unversionedId:"installation/command-line-install",id:"installation/command-line-install",title:"Command Line Parameters for the Installer",description:"The Setup program accepts optional command line parameters which can be useful for scripted or automated installs.",source:"@site/docs/installation/command-line-install.md",sourceDirName:"installation",slug:"/installation/command-line-install",permalink:"/docs/installation/command-line-install",draft:!1,tags:[],version:"current",frontMatter:{title:"Command Line Parameters for the Installer"},sidebar:"tutorialSidebar",previous:{title:"Installation Options",permalink:"/docs/installation/index"},next:{title:"Installation Pre-Requisites",permalink:"/docs/installation/installation-pre-requisites"}},s={},p=[{value:"Components",id:"components",level:2},{value:"Tasks",id:"tasks",level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Setup program accepts optional command line parameters which can be useful for scripted or automated installs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/HELP, /?"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows this information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/SP-"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables the This will install... Do you wish to continue? prompt at the beginning of Setup.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/SILENT, /VERYSILENT"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to be silent or very silent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/SUPPRESSMSGBOXES"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to suppress message boxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/LOG"),(0,r.kt)("td",{parentName:"tr",align:null},"Causes Setup to create a log file in the user's TEMP directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/LOG="filename"'),(0,r.kt)("td",{parentName:"tr",align:null},"Same as /LOG, except it allows you to specify a fixed path/filename to use for the log file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/NOCANCEL"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents the user from cancelling during the installation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/NORESTART"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents Setup from restarting the system following a successful installation, or after a Preparing to Install failure that requests a restart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/RESTARTEXITCODE=exit code"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a custom exit code that Setup is to return when the system needs to be restarted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/CLOSEAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to close applications using files that need to be updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/NOCLOSEAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents Setup from closing applications using files that need to be updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/FORCECLOSEAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to force close when closing applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/FORCENOCLOSEAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents Setup from force closing when closing applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/LOGCLOSEAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to create extra logging when closing applications for debugging purposes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/RESTARTAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to restart applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/NORESTARTAPPLICATIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents Setup from restarting applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/LOADINF="filename"'),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to load the settings from the specified file after having checked the command line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/SAVEINF="filename"'),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to save installation settings to the specified file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/LANG=language"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the internal name of the language to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/DIR="x:\\dirname"'),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default directory name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/GROUP="folder name"'),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default folder name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/NOICONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to initially check the Don't create a Start Menu folder check box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/TYPE=type name"),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default setup type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/COMPONENTS="comma separated list of component names"'),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default component settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/TASKS="comma separated list of task names"'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a list of tasks that should be initially selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'/MERGETASKS="comma separated list of task names"'),(0,r.kt)("td",{parentName:"tr",align:null},"Like the /TASKS parameter, except the specified tasks will be merged with the set of tasks that would have otherwise been selected by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/PASSWORD=password"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the password to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/ALLUSERS"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to install in administrative install mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/CURRENTUSER"),(0,r.kt)("td",{parentName:"tr",align:null},"Instructs Setup to install in non administrative install mode.")))),(0,r.kt)("p",null,"The DAX Studio installer uses InnoSetup. For more detailed information, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://jrsoftware.org/ishelp/index.php?topic=setupcmdline"},"https://jrsoftware.org/ishelp/index.php?topic=setupcmdline")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The following are DAX Studio specific options that can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/COMPONENTS=")," parameter. By default all components are installed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"[Required]"," This is the core DAX Studio program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Excel"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," This component installs the Excel Addin")))),(0,r.kt)("h2",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"The following are DAX Studio specific options that can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/TASKS=")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/MERGETASKS=")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desktopicon"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an Icon on the Desktop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockallinternetaccess"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"[NOT RECOMMENDED]"," Blocks all features requiring internet access including version checks, dax formatting and crash reporting. This setting requires a re-install to change.")))))}u.isMDXComponent=!0}}]);