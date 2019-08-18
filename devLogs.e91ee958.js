parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dwkt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../router"));function t(e){return e&&e.__esModule?e:{default:e}}var r={name:"DevLogs",computed:{error:function(){return this.$route.query.error}},methods:{navigateHome:function(){e.default.push({name:"splash"})},navigateAbout:function(){e.default.push({name:"About"})}}};exports.default=r;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"devLogs"},[a("div",{staticClass:"wrapper"},[a("body",[a("div",{staticClass:"title"},[a("img",{attrs:{src:"/wwa-web/logo2.b5d2d16e.png",alt:"WWA Logo",id:"wwaLogo"}}),e._v(" "),a("h1",[e._v("Developer Logs")]),e._v(" "),a("div",{attrs:{id:"buttons"}},[a("b-button",{attrs:{variant:"light"},on:{click:function(t){return e.navigateHome()}}},[e._v("Homepage")]),e._v(" "),a("b-button",{attrs:{variant:"light"},on:{click:function(t){return e.navigateAbout()}}},[e._v("About Us")])],1)]),e._v(" "),a("div",{attrs:{id:"links"}},[a("div",{attrs:{id:"linkBox"}},[a("h3",{attrs:{id:"linkTitle"}},[e._v("Jump To:")]),e._v(" "),a("div",{attrs:{id:"linkBoxLinks"}},[a("router-link",{attrs:{to:"devLogs#logTitle"}},[e._v("Introduction")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#gettingStarted"}},[e._v("Getting started")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#Coding"}},[e._v("Coding")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#styleGuide"}},[e._v("Style Guide")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#art"}},[e._v("Art")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#gameDesign"}},[e._v("Game Design")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#management"}},[e._v("Management")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#roles"}},[e._v("Roles")]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"devLogs#message"}},[e._v("Message of the "),a("br"),e._v(" Day")]),e._v(" "),a("br")],1)])]),e._v(" "),e._m(0)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"devLogsWrapper"}},[a("div",{attrs:{id:"devLogs"}},[a("h1",[e._v("Developer Log, August 13 2019")]),e._v(" "),a("p"),e._v(" "),a("h2",{attrs:{id:"logTitle"}},[e._v("THIS IS THE FIRST LOG")]),e._v(" "),a("p",[e._v(" In order to make this easier, please ping @ZweiEuro if something important has happened in order for me to take note, "),a("br"),e._v("I might not be able to catch everything otherwise. ")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"gettingStarted"}},[e._v("Getting started")]),e._v(" "),a("p",[e._v("A guide is WIP on how to set up a development IDE and access and navigate github/the code. (By @ZweiEuro, any ideas what you want answered in the guide, please send me a pm)")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"coding"}},[e._v("Coding")]),e._v(" "),a("p",[e._v(" No real milestones or stuff so far, we have decided on a style guide that for the sake of this project and clarity, please try to follow. If you have no idea what this means, go to FAQ (Or ask a team leader if it is still unclear.). "),a("br")]),e._v(" "),a("h3",{attrs:{id:"styleGuide"}},[e._v("Style guide")]),e._v(" "),a("p",[e._v("https://google.github.io/styleguide/javaguide.html At the moment #game-design is trying to figure out what to do and how to split tasks, we will update when we know more.")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"art"}},[e._v("Art")]),e._v(" "),a("p",[e._v("Base game will be kept exclusively text based for now, later we may implement 2d/3d but no guarantees. All in all fanart or designers are welcome, but for now we are focusing game logic and game design.")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"gameDesign"}},[e._v("Game design")]),e._v(" "),a("p",[e._v("Nothing definite yet (or at least we couldn't find it) please ping @ZweiEuro if something worth note gets decided.")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"management"}},[e._v("Management")]),e._v(" "),a("p",[e._v(" This has made a lot of progress. @freekykat has created a survey, in order to become a team member or team leader you must fill out the form and afterwards maybe ping @freekykat if he hasn't noticed. Teams in general will be wildly mixed, and we will try to balance pro/newbie. We try to make it so someone will always be able to help you. Not, and let me make this clear, spoon feed you answers. Team leaders will be asked to help you learn, not use their knowledge to bridge stuff. So if you are asked to look somewhere, then please have a look at X please do so. If you are genually confused and after reading the help given to you by the TL(team leader) they will try and help you out to get you back on the track of learning. We will also have a few general managers to pick up slack on the server and between areas. Roles may overlap. By all means do not spam managers, they won't like it and admins will take note. ")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"roles"}},[e._v("Roles")]),e._v(" "),a("p",[e._v("Community manager: server side and general")]),e._v(" "),a("p",[e._v("Group/team managers: where do new members go? Which team needs help?")]),e._v(" "),a("p",[e._v("Team leaders: as described above")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"message"}},[e._v("Message of the day")]),e._v(" It's not about speed it's about learning. @Pasix "),a("br"),e._v(" "),a("br"),e._v(" "),a("br")])])}],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../router":"N8lG","./..\\assets\\img\\logo2.png":[["logo2.b5d2d16e.png","lkGm"],"lkGm"]}],"CSru":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"Cm3W":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"CSru"}],0:[function(require,module,exports) {
var b=require("Cm3W");b.load([]).then(function(){require("dwkt");});
},{}]},{},[0], null)