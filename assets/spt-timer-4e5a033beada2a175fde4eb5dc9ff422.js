"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("spt-timer/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/app",["exports","ember-resolver","ember-load-initializers","spt-timer/config/environment"],(function(e,t,r,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(s,Ember.Application)
var r=a(s)
function s(){var e
o(this,s)
for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l]
return p(u(e=r.call.apply(r,[this].concat(a))),"modulePrefix",n.default.modulePrefix),p(u(e),"podModulePrefix",n.default.podModulePrefix),p(u(e),"Resolver",t.default),e}return s}()
e.default=c,(0,r.default)(c,n.default.modulePrefix)})),define("spt-timer/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/controllers/application",["exports","ember-statecharts/computed","nosleep.js"],(function(e,t,r){var n,o,i,a,s,u,l,p,c,f,d,m,b,g,v,y,h,x,w,O,P,j,_,S
function k(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=A(e)
if(t){var o=A(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return C(this,r)}}function C(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
return new Promise((function(t){return setTimeout((function(){return t()}),e)}))}function U(e,t,r){return{invoke:{src:function(e){return e.isPaused?F(200):F(1e3)},onDone:[{target:t,cond:function(e){return e.elapsed>=e[r]},actions:function(e){return e.elapsed=0}},{target:e,cond:function(e){return!e.isPaused},actions:function(e){return e.elapsed=e.isPaused?e.elapsed:e.elapsed+1}},{target:e}]},on:{PAUSE:{actions:function(e){return e.isPaused=!0}},RESUME:{actions:function(e){return e.isPaused=!1}},STOP:"idle"}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var W={initial:"idle",states:{idle:{on:{START:"setup"}},setup:U("setup","work","setupDuration"),work:U("work","rest","workDuration"),rest:U("rest","done","restDuration"),done:{on:{"":[{target:"work",cond:function(e){return e.repeat}},{target:"idle"}]}}}},I=(n=(0,t.statechart)(W),o=Ember._tracked,i=Ember._tracked,a=Ember._tracked,s=Ember._tracked,u=Ember._tracked,l=Ember._tracked,p=(0,t.matchesState)("idle"),c=(0,t.matchesState)("setup"),f=(0,t.matchesState)("work"),d=(0,t.matchesState)("rest"),m=Ember._action,g=H((b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)})(a,Ember.Controller)
var t,n,o,i=T(a)
function a(){var e
z(this,a)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return k(D(e=i.call.apply(i,[this].concat(n))),"statechart",g,D(e)),k(D(e),"elapsed",v,D(e)),k(D(e),"setupDuration",y,D(e)),k(D(e),"workDuration",h,D(e)),k(D(e),"restDuration",x,D(e)),k(D(e),"repeat",w,D(e)),k(D(e),"isPaused",O,D(e)),M(D(e),"noSleep",new r.default),k(D(e),"isIdle",P,D(e)),k(D(e),"gettingReady",j,D(e)),k(D(e),"exercising",_,D(e)),k(D(e),"resting",S,D(e)),e}return t=a,(n=[{key:"send",value:function(e){"START"===e&&this.noSleep.enable(),"STOP"===e&&this.noSleep.disable(),this.statechart.send(e)}},{key:"timer",get:function(){return this.gettingReady?this.setupDuration-this.elapsed:this.exercising?this.workDuration-this.elapsed:this.resting?this.restDuration-this.elapsed:0}},{key:"stateText",get:function(){return this.gettingReady?"Get ready":this.exercising?"Hold!":this.resting?"Rest":"Idle"}},{key:"isRunning",get:function(){return!this.isIdle}},{key:"canPause",get:function(){return!(this.isPaused||this.isIdle)}}])&&E(t.prototype,n),o&&E(t,o),a}()).prototype,"statechart",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=H(b.prototype,"elapsed",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=H(b.prototype,"setupDuration",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),h=H(b.prototype,"workDuration",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),x=H(b.prototype,"restDuration",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 40}}),w=H(b.prototype,"repeat",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),O=H(b.prototype,"isPaused",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=H(b.prototype,"isIdle",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=H(b.prototype,"gettingReady",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=H(b.prototype,"exercising",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=H(b.prototype,"resting",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H(b.prototype,"send",[m],Object.getOwnPropertyDescriptor(b.prototype,"send"),b.prototype),b)
e.default=I})),define("spt-timer/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/helpers/app-version",["exports","spt-timer/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,s=null
return i&&(n.showExtended&&(s=o.match(r.versionExtendedRegExp)),s||(s=o.match(r.versionRegExp))),a&&(s=o.match(r.shaRegExp)),s?s[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("spt-timer/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("spt-timer/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("spt-timer/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","spt-timer/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("spt-timer/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("spt-timer/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("spt-timer/initializers/export-application-global",["exports","spt-timer/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("spt-timer/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("spt-timer/router",["exports","spt-timer/config/environment"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=s(e)
if(t){var o=s(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return i(this,r)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(s,Ember.Router)
var i=o(s)
function s(){var e
r(this,s)
for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l]
return u(a(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),u(a(e),"rootURL",t.default.rootURL),e}return s}()
e.default=l,l.map((function(){}))})),define("spt-timer/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/tailwind/config",[],(function(){function e(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{}
n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=require("tailwindcss/colors")
module.exports={purge:[],presets:[],darkMode:!1,theme:{screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:{transparent:"transparent",current:"currentColor",black:n.black,white:n.white,gray:n.coolGray,red:n.red,yellow:n.amber,green:n.emerald,blue:n.blue,indigo:n.indigo,purple:n.violet,pink:n.pink},spacing:{px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},backgroundColor:function(e){return e("colors")},backgroundImage:{none:"none","gradient-to-t":"linear-gradient(to top, var(--tw-gradient-stops))","gradient-to-tr":"linear-gradient(to top right, var(--tw-gradient-stops))","gradient-to-r":"linear-gradient(to right, var(--tw-gradient-stops))","gradient-to-br":"linear-gradient(to bottom right, var(--tw-gradient-stops))","gradient-to-b":"linear-gradient(to bottom, var(--tw-gradient-stops))","gradient-to-bl":"linear-gradient(to bottom left, var(--tw-gradient-stops))","gradient-to-l":"linear-gradient(to left, var(--tw-gradient-stops))","gradient-to-tl":"linear-gradient(to top left, var(--tw-gradient-stops))"},backgroundOpacity:function(e){return e("opacity")},backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},borderColor:function(e){return t(t({},e("colors")),{},{DEFAULT:e("colors.gray.200","currentColor")})},borderOpacity:function(e){return e("opacity")},borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borderWidth:{DEFAULT:"1px",0:"0px",2:"2px",4:"4px",8:"8px"},boxShadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"none"},container:{},cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move","not-allowed":"not-allowed"},divideColor:function(e){return e("borderColor")},divideOpacity:function(e){return e("borderOpacity")},divideWidth:function(e){return e("borderWidth")},fill:{current:"currentColor"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexGrow:{0:"0",DEFAULT:"1"},flexShrink:{0:"0",DEFAULT:"1"},fontFamily:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontSize:{xs:["0.75rem",{lineHeight:"1rem"}],sm:["0.875rem",{lineHeight:"1.25rem"}],base:["1rem",{lineHeight:"1.5rem"}],lg:["1.125rem",{lineHeight:"1.75rem"}],xl:["1.25rem",{lineHeight:"1.75rem"}],"2xl":["1.5rem",{lineHeight:"2rem"}],"3xl":["1.875rem",{lineHeight:"2.25rem"}],"4xl":["2.25rem",{lineHeight:"2.5rem"}],"5xl":["3rem",{lineHeight:"1"}],"6xl":["3.75rem",{lineHeight:"1"}],"7xl":["4.5rem",{lineHeight:"1"}],"8xl":["6rem",{lineHeight:"1"}],"9xl":["8rem",{lineHeight:"1"}]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:function(e){return e("spacing")},gradientColorStops:function(e){return e("colors")},gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-full":"1 / -1"},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7"},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},gridTemplateColumns:{none:"none",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))"},gridTemplateRows:{none:"none",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))"},height:function(e){return t(t({auto:"auto"},e("spacing")),{},{"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh"})},inset:function(e,r){var n=r.negative
return t(t(t({auto:"auto"},e("spacing")),n(e("spacing"))),{},{"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%","-1/2":"-50%","-1/3":"-33.333333%","-2/3":"-66.666667%","-1/4":"-25%","-2/4":"-50%","-3/4":"-75%","-full":"-100%"})},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},margin:function(e,r){var n=r.negative
return t(t({auto:"auto"},e("spacing")),n(e("spacing")))},maxHeight:function(e){return t(t({},e("spacing")),{},{full:"100%",screen:"100vh"})},maxWidth:function(e,r){return t({none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",prose:"65ch"},(0,r.breakpoints)(e("screens")))},minHeight:{0:"0px",full:"100%",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content"},objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",20:"0.2",25:"0.25",30:"0.3",40:"0.4",50:"0.5",60:"0.6",70:"0.7",75:"0.75",80:"0.8",90:"0.9",95:"0.95",100:"1"},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12"},outline:{none:["2px solid transparent","2px"],white:["2px dotted white","2px"],black:["2px dotted black","2px"]},padding:function(e){return e("spacing")},placeholderColor:function(e){return e("colors")},placeholderOpacity:function(e){return e("opacity")},ringColor:function(e){return t({DEFAULT:e("colors.blue.500","#3b82f6")},e("colors"))},ringOffsetColor:function(e){return e("colors")},ringOffsetWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},ringOpacity:function(e){return t({DEFAULT:"0.5"},e("opacity"))},ringWidth:{DEFAULT:"3px",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px"},rotate:{"-180":"-180deg","-90":"-90deg","-45":"-45deg","-12":"-12deg","-6":"-6deg","-3":"-3deg","-2":"-2deg","-1":"-1deg",0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",45:"45deg",90:"90deg",180:"180deg"},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5"},skew:{"-12":"-12deg","-6":"-6deg","-3":"-3deg","-2":"-2deg","-1":"-1deg",0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg"},space:function(e,r){var n=r.negative
return t(t({},e("spacing")),n(e("spacing")))},stroke:{current:"currentColor"},strokeWidth:{0:"0",1:"1",2:"2"},textColor:function(e){return e("colors")},textOpacity:function(e){return e("opacity")},transitionDuration:{DEFAULT:"150ms",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionDelay:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionProperty:{none:"none",all:"all",DEFAULT:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},translate:function(e,r){var n=r.negative
return t(t(t({},e("spacing")),n(e("spacing"))),{},{"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%","-1/2":"-50%","-1/3":"-33.333333%","-2/3":"-66.666667%","-1/4":"-25%","-2/4":"-50%","-3/4":"-75%","-full":"-100%"})},width:function(e){return t(t({auto:"auto"},e("spacing")),{},{"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",min:"min-content",max:"max-content"})},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50"}},variantOrder:["first","last","odd","even","visited","checked","group-hover","group-focus","focus-within","hover","focus","focus-visible","active","disabled"],variants:{accessibility:["responsive","focus-within","focus"],alignContent:["responsive"],alignItems:["responsive"],alignSelf:["responsive"],animation:["responsive"],appearance:["responsive"],backgroundAttachment:["responsive"],backgroundClip:["responsive"],backgroundColor:["responsive","dark","group-hover","focus-within","hover","focus"],backgroundImage:["responsive"],backgroundOpacity:["responsive","group-hover","focus-within","hover","focus"],backgroundPosition:["responsive"],backgroundRepeat:["responsive"],backgroundSize:["responsive"],borderCollapse:["responsive"],borderColor:["responsive","dark","group-hover","focus-within","hover","focus"],borderOpacity:["responsive","group-hover","focus-within","hover","focus"],borderRadius:["responsive"],borderStyle:["responsive"],borderWidth:["responsive"],boxShadow:["responsive","group-hover","focus-within","hover","focus"],boxSizing:["responsive"],clear:["responsive"],container:["responsive"],cursor:["responsive"],display:["responsive"],divideColor:["responsive","dark"],divideOpacity:["responsive"],divideStyle:["responsive"],divideWidth:["responsive"],fill:["responsive"],flex:["responsive"],flexDirection:["responsive"],flexGrow:["responsive"],flexShrink:["responsive"],flexWrap:["responsive"],float:["responsive"],fontFamily:["responsive"],fontSize:["responsive"],fontSmoothing:["responsive"],fontStyle:["responsive"],fontVariantNumeric:["responsive"],fontWeight:["responsive"],gap:["responsive"],gradientColorStops:["responsive","dark","hover","focus"],gridAutoColumns:["responsive"],gridAutoFlow:["responsive"],gridAutoRows:["responsive"],gridColumn:["responsive"],gridColumnEnd:["responsive"],gridColumnStart:["responsive"],gridRow:["responsive"],gridRowEnd:["responsive"],gridRowStart:["responsive"],gridTemplateColumns:["responsive"],gridTemplateRows:["responsive"],height:["responsive"],inset:["responsive"],justifyContent:["responsive"],justifyItems:["responsive"],justifySelf:["responsive"],letterSpacing:["responsive"],lineHeight:["responsive"],listStylePosition:["responsive"],listStyleType:["responsive"],margin:["responsive"],maxHeight:["responsive"],maxWidth:["responsive"],minHeight:["responsive"],minWidth:["responsive"],objectFit:["responsive"],objectPosition:["responsive"],opacity:["responsive","group-hover","focus-within","hover","focus"],order:["responsive"],outline:["responsive","focus-within","focus"],overflow:["responsive"],overscrollBehavior:["responsive"],padding:["responsive"],placeContent:["responsive"],placeItems:["responsive"],placeSelf:["responsive"],placeholderColor:["responsive","dark","focus"],placeholderOpacity:["responsive","focus"],pointerEvents:["responsive"],position:["responsive"],resize:["responsive"],ringColor:["responsive","dark","focus-within","focus"],ringOffsetColor:["responsive","dark","focus-within","focus"],ringOffsetWidth:["responsive","focus-within","focus"],ringOpacity:["responsive","focus-within","focus"],ringWidth:["responsive","focus-within","focus"],rotate:["responsive","hover","focus"],scale:["responsive","hover","focus"],skew:["responsive","hover","focus"],space:["responsive"],stroke:["responsive"],strokeWidth:["responsive"],tableLayout:["responsive"],textAlign:["responsive"],textColor:["responsive","dark","group-hover","focus-within","hover","focus"],textDecoration:["responsive","group-hover","focus-within","hover","focus"],textOpacity:["responsive","group-hover","focus-within","hover","focus"],textOverflow:["responsive"],textTransform:["responsive"],transform:["responsive"],transformOrigin:["responsive"],transitionDelay:["responsive"],transitionDuration:["responsive"],transitionProperty:["responsive"],transitionTimingFunction:["responsive"],translate:["responsive","hover","focus"],userSelect:["responsive"],verticalAlign:["responsive"],visibility:["responsive"],whitespace:["responsive"],width:["responsive"],wordBreak:["responsive"],zIndex:["responsive","focus-within","focus"]},plugins:[]}})),define("spt-timer/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"j4HP09kQ",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"flex flex-col min-h-screen bg-gray-50"],[12],[2,"\\n  "],[10,"div"],[14,0,"flex justify-center py-6 text-3xl text-white bg-gray-700 border-t-8 border-gray-900"],[12],[2,"\\n    "],[10,"div"],[12],[2,"SPT Timer"],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"flex flex-col justify-center my-12"],[12],[2,"\\n    "],[10,"div"],[14,0,"flex justify-center mt-4 text-8xl"],[12],[1,[32,0,["timer"]]],[13],[2,"\\n    "],[10,"div"],[14,0,"flex justify-center mt-6 text-5xl"],[12],[1,[32,0,["stateText"]]],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"flex flex-col justify-center mt-10 sm:flex-row"],[12],[2,"\\n"],[6,[37,1],[[32,0,["isIdle"]]],null,[["default","else"],[{"statements":[[2,"      "],[10,"button"],[14,0,"px-4 py-2 m-2 border border-black rounded-xl"],[15,"onclick",[30,[36,0],[[32,0,["send"]],"START"],null]],[14,4,"button"],[12],[2,"\\n        Start\\n      "],[13],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,1],[[32,0,["canPause"]]],null,[["default","else"],[{"statements":[[2,"      "],[10,"button"],[14,0,"px-4 py-2 m-2 border border-black rounded-xl"],[15,"onclick",[30,[36,0],[[32,0,["send"]],"PAUSE"],null]],[14,4,"button"],[12],[2,"\\n        Pause\\n      "],[13],[2,"\\n"]],"parameters":[]},{"statements":[[2,"      "],[10,"button"],[14,0,"px-4 py-2 m-2 border border-black rounded-xl"],[15,"onclick",[30,[36,0],[[32,0,["send"]],"RESUME"],null]],[14,4,"button"],[12],[2,"\\n        Resume\\n      "],[13],[2,"\\n    "]],"parameters":[]}]]]],"parameters":[]}]]],[2,"\\n"],[6,[37,1],[[32,0,["isRunning"]]],null,[["default"],[{"statements":[[2,"      "],[10,"button"],[14,0,"px-4 py-2 m-2 border border-black rounded-xl"],[15,"onclick",[30,[36,0],[[32,0,["send"]],"STOP"],null]],[14,4,"button"],[12],[2,"\\n        Stop\\n      "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["fn","if"]}',meta:{moduleName:"spt-timer/templates/application.hbs"}})
e.default=t})),define("spt-timer/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("spt-timer/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("spt-timer/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("spt-timer/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("spt-timer/utils/statechart",["exports","ember-statecharts/utils/statechart"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("spt-timer/config/environment",[],(function(){try{var e="spt-timer/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("spt-timer/app").default.create({name:"spt-timer",version:"0.0.0+0ca0cb08"})
