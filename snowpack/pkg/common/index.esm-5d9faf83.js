/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var j=function(r,e){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},j(r,e)};function Q(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");j(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var R=function(){return R=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},R.apply(this,arguments)};function $(r,e,t,n){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function f(p){try{a(n.next(p))}catch(d){s(d)}}function h(p){try{a(n.throw(p))}catch(d){s(d)}}function a(p){p.done?i(p.value):o(p.value).then(f,h)}a((n=n.apply(r,e||[])).next())})}function V(r,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(a){return function(p){return h([a,p])}}function h(a){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,o=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){t.label=a[1];break}if(a[0]===6&&t.label<i[1]){t.label=i[1],i=a;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(a);break}i[2]&&t.ops.pop(),t.trys.pop();continue}a=e.call(r,t)}catch(p){a=[6,p],o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function D(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function S(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(f){s={error:f}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return i}function M(r,e,t){if(t||arguments.length===2)for(var n=0,o=e.length,i;n<o;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return r.concat(i||e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r){return L(void 0,r)}function L(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(var n in e)!e.hasOwnProperty(n)||!ee(n)||(r[n]=L(r[n],e[n]));return r}function ee(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te=function(){function r(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})}return r.prototype.wrapCallback=function(e){var t=this;return function(n,o){n?t.reject(n):t.resolve(o),typeof e=="function"&&(t.promise.catch(function(){}),e.length===1?e(n):e(n,o))}},r}();function re(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(r){return!1}}function ne(){return typeof self=="object"&&self.self===self}function ie(){var r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function oe(){return"indexedDB"in self&&indexedDB!=null}function ae(){return new Promise(function(r,e){try{var t=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=function(){o.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},o.onupgradeneeded=function(){t=!1},o.onerror=function(){var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(i){e(i)}})}function se(){return!(!navigator||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue="FirebaseError",U=function(r){Q(e,r);function e(t,n,o){var i=r.call(this,n)||this;return i.code=t,i.customData=o,i.name=ue,Object.setPrototypeOf(i,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,F.prototype.create),i}return e}(Error),F=function(){function r(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return r.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=t[0]||{},i=this.service+"/"+e,s=this.errors[e],f=s?le(s,o):"Error",h=this.serviceName+": "+f+" ("+i+").",a=new U(i,h,o);return a},r}();function le(r,e){return r.replace(fe,function(t,n){var o=e[n];return o!=null?String(o):"<"+n+"?>"})}var fe=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ce(r,e){var t=new pe(r,e);return t.subscribe.bind(t)}var pe=function(){function r(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(o){n.error(o)})}return r.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},r.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},r.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},r.prototype.subscribe=function(e,t,n){var o=this,i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");he(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=H),i.error===void 0&&(i.error=H),i.complete===void 0&&(i.complete=H);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?i.error(o.finalError):i.complete()}catch(f){}}),this.observers.push(i),s},r.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},r.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},r.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(n.observers!==void 0&&n.observers[e]!==void 0)try{t(n.observers[e])}catch(o){typeof console!="undefined"&&console.error&&console.error(o)}})},r.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},r}();function he(r,e){if(typeof r!="object"||r===null)return!1;for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o in r&&typeof r[o]=="function")return!0}return!1}function H(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=1e3,ve=2,me=4*60*60*1e3,ye=.5;function ge(r,e,t){e===void 0&&(e=de),t===void 0&&(t=ve);var n=e*Math.pow(t,r),o=Math.round(ye*n*(Math.random()-.5)*2);return Math.min(me,n+o)}var P=function(){function r(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return r.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},r.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},r.prototype.setServiceProps=function(e){return this.serviceProps=e,this},r.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},r}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be=function(){function r(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return r.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new te;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var o=this.getOrInitializeService({instanceIdentifier:t});o&&n.resolve(o)}catch(i){}}return this.instancesDeferred.get(t).promise},r.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error("Service "+this.name+" is not available")}},r.prototype.getComponent=function(){return this.component},r.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Ee(e))try{this.getOrInitializeService({instanceIdentifier:N})}catch(d){}try{for(var o=D(this.instancesDeferred.entries()),i=o.next();!i.done;i=o.next()){var s=S(i.value,2),f=s[0],h=s[1],a=this.normalizeInstanceIdentifier(f);try{var p=this.getOrInitializeService({instanceIdentifier:a});h.resolve(p)}catch(d){}}}catch(d){t={error:d}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}}},r.prototype.clearInstance=function(e){e===void 0&&(e=N),this.instancesDeferred.delete(e),this.instances.delete(e)},r.prototype.delete=function(){return $(this,void 0,void 0,function(){var e;return V(this,function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(M(M([],S(e.filter(function(n){return"INTERNAL"in n}).map(function(n){return n.INTERNAL.delete()}))),S(e.filter(function(n){return"_delete"in n}).map(function(n){return n._delete()}))))];case 1:return t.sent(),[2]}})})},r.prototype.isComponentSet=function(){return this.component!=null},r.prototype.isInitialized=function(e){return e===void 0&&(e=N),this.instances.has(e)},r.prototype.initialize=function(e){var t,n;e===void 0&&(e={});var o=e.options,i=o===void 0?{}:o,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var f=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var h=D(this.instancesDeferred.entries()),a=h.next();!a.done;a=h.next()){var p=S(a.value,2),d=p[0],l=p[1],u=this.normalizeInstanceIdentifier(d);s===u&&l.resolve(f)}}catch(y){t={error:y}}finally{try{a&&!a.done&&(n=h.return)&&n.call(h)}finally{if(t)throw t.error}}return f},r.prototype.onInit=function(e,t){var n,o=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(o,i);var s=this.instances.get(o);return s&&e(s,o),function(){i.delete(e)}},r.prototype.invokeOnInitCallbacks=function(e,t){var n,o,i=this.onInitCallbacks.get(t);if(!!i)try{for(var s=D(i),f=s.next();!f.done;f=s.next()){var h=f.value;try{h(e,t)}catch(a){}}}catch(a){n={error:a}}finally{try{f&&!f.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}},r.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,o=n===void 0?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ie(t),options:o}),this.instances.set(t,i),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(s){}return i||null},r.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=N),this.component?this.component.multipleInstances?e:N:e},r.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},r}();function Ie(r){return r===N?void 0:r}function Ee(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we=function(){function r(e){this.name=e,this.providers=new Map}return r.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},r.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},r.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new be(e,this);return this.providers.set(e,t),t},r.prototype.getProviders=function(){return Array.from(this.providers.values())},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function I(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),o=0,e=0;e<t;e++)for(var i=arguments[e],s=0,f=i.length;s<f;s++,o++)n[o]=i[s];return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _,k=[],c;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(c||(c={}));var G={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},Oe=c.INFO,_e=(_={},_[c.DEBUG]="log",_[c.VERBOSE]="log",_[c.INFO]="info",_[c.WARN]="warn",_[c.ERROR]="error",_),Ne=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(!(e<r.logLevel)){var o=new Date().toISOString(),i=_e[e];if(i)console[i].apply(console,I(["["+o+"]  "+r.name+":"],t));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Y=function(){function r(e){this.name=e,this._logLevel=Oe,this._logHandler=Ne,this._userLogHandler=null,k.push(this)}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),r.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?G[e]:e},Object.defineProperty(r.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),r.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,I([this,c.DEBUG],e)),this._logHandler.apply(this,I([this,c.DEBUG],e))},r.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,I([this,c.VERBOSE],e)),this._logHandler.apply(this,I([this,c.VERBOSE],e))},r.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,I([this,c.INFO],e)),this._logHandler.apply(this,I([this,c.INFO],e))},r.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,I([this,c.WARN],e)),this._logHandler.apply(this,I([this,c.WARN],e))},r.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,I([this,c.ERROR],e)),this._logHandler.apply(this,I([this,c.ERROR],e))},r}();function Ae(r){k.forEach(function(e){e.setLogLevel(r)})}function Ce(r,e){for(var t=function(s){var f=null;e&&e.level&&(f=G[e.level]),r===null?s.userLogHandler=null:s.userLogHandler=function(h,a){for(var p=[],d=2;d<arguments.length;d++)p[d-2]=arguments[d];var l=p.map(function(u){if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch(y){return null}}).filter(function(u){return u}).join(" ");a>=(f??h.logLevel)&&r({level:c[a].toLowerCase(),message:l,args:p,type:h.name})}},n=0,o=k;n<o.length;n++){var i=o[n];t(i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,Re=(O={},O["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",O["bad-app-name"]="Illegal App name: '{$appName}",O["duplicate-app"]="Firebase App named '{$appName}' already exists",O["app-deleted"]="Firebase App named '{$appName}' already deleted",O["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",O["invalid-log-argument"]="First argument to `onLog` must be null or a function.",O),A=new F("app","Firebase",Re),X="@firebase/app",Se="0.6.28",Le="@firebase/analytics",De="@firebase/app-check",Fe="@firebase/auth",Pe="@firebase/database",ze="@firebase/functions",Te="@firebase/installations",xe="@firebase/messaging",je="@firebase/performance",Me="@firebase/remote-config",He="@firebase/storage",ke="@firebase/firestore",Be="firebase-wrapper";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m,z="[DEFAULT]",$e=(m={},m[X]="fire-core",m[Le]="fire-analytics",m[De]="fire-app-check",m[Fe]="fire-auth",m[Pe]="fire-rtdb",m[ze]="fire-fn",m[Te]="fire-iid",m[xe]="fire-fcm",m[je]="fire-perf",m[Me]="fire-rc",m[He]="fire-gcs",m[ke]="fire-fst",m["fire-js"]="fire-js",m[Be]="fire-js-all",m);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C=new Y("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function(){function r(e,t,n){var o=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=q(e),this.container=new we(t.name),this._addComponent(new P("app",function(){return o},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(i){return o._addComponent(i)})}return Object.defineProperty(r.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),r.prototype.delete=function(){var e=this;return new Promise(function(t){e.checkDestroyed_(),t()}).then(function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map(function(t){return t.delete()}))}).then(function(){e.isDeleted_=!0})},r.prototype._getService=function(e,t){var n;t===void 0&&(t=z),this.checkDestroyed_();var o=this.container.getProvider(e);return!o.isInitialized()&&((n=o.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:t})},r.prototype._removeServiceInstance=function(e,t){t===void 0&&(t=z),this.container.getProvider(e).clearInstance(t)},r.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){C.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},r.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},r.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},r.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw A.create("app-deleted",{appName:this.name_})},r}();T.prototype.name&&T.prototype.options||T.prototype.delete||console.log("dc");var Ve="8.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(r){var e={},t=new Map,n={__esModule:!0,initializeApp:s,app:i,registerVersion:a,setLogLevel:Ae,onLog:p,apps:null,SDK_VERSION:Ve,INTERNAL:{registerComponent:h,removeApp:o,components:t,useAsService:d}};n.default=n,Object.defineProperty(n,"apps",{get:f});function o(l){delete e[l]}function i(l){if(l=l||z,!W(e,l))throw A.create("no-app",{appName:l});return e[l]}i.App=r;function s(l,u){if(u===void 0&&(u={}),typeof u!="object"||u===null){var y=u;u={name:y}}var g=u;g.name===void 0&&(g.name=z);var v=g.name;if(typeof v!="string"||!v)throw A.create("bad-app-name",{appName:String(v)});if(W(e,v))throw A.create("duplicate-app",{appName:v});var w=new r(l,g,n);return e[v]=w,w}function f(){return Object.keys(e).map(function(l){return e[l]})}function h(l){var u=l.name;if(t.has(u))return C.debug("There were multiple attempts to register component "+u+"."),l.type==="PUBLIC"?n[u]:null;if(t.set(u,l),l.type==="PUBLIC"){var y=function(b){if(b===void 0&&(b=i()),typeof b[u]!="function")throw A.create("invalid-app-argument",{appName:u});return b[u]()};l.serviceProps!==void 0&&L(y,l.serviceProps),n[u]=y,r.prototype[u]=function(){for(var b=[],E=0;E<arguments.length;E++)b[E]=arguments[E];var Z=this._getService.bind(this,u);return Z.apply(this,l.multipleInstances?b:[])}}for(var g=0,v=Object.keys(e);g<v.length;g++){var w=v[g];e[w]._addComponent(l)}return l.type==="PUBLIC"?n[u]:null}function a(l,u,y){var g,v=(g=$e[l])!==null&&g!==void 0?g:l;y&&(v+="-"+y);var w=v.match(/\s|\//),b=u.match(/\s|\//);if(w||b){var E=['Unable to register library "'+v+'" with version "'+u+'":'];w&&E.push('library name "'+v+'" contains illegal characters (whitespace or "/")'),w&&b&&E.push("and"),b&&E.push('version name "'+u+'" contains illegal characters (whitespace or "/")'),C.warn(E.join(" "));return}h(new P(v+"-version",function(){return{library:v,version:u}},"VERSION"))}function p(l,u){if(l!==null&&typeof l!="function")throw A.create("invalid-log-argument");Ce(l,u)}function d(l,u){if(u==="serverAuth")return null;var y=u;return y}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){var r=Ue(T);r.INTERNAL=R(R({},r.INTERNAL),{createFirebaseNamespace:J,extendNamespace:e,createSubscribe:ce,ErrorFactory:F,deepExtend:L});function e(t){L(r,t)}return r}var B=J();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We=function(){function r(e){this.container=e}return r.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map(function(t){if(Ge(t)){var n=t.getImmediate();return n.library+"/"+n.version}else return null}).filter(function(t){return t}).join(" ")},r}();function Ge(r){var e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(r,e){r.INTERNAL.registerComponent(new P("platform-logger",function(t){return new We(t)},"PRIVATE")),r.registerVersion(X,Se,e),r.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ne()&&self.firebase!==void 0){C.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var K=self.firebase.SDK_VERSION;K&&K.indexOf("LITE")>=0&&C.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var Xe=B.initializeApp;B.initializeApp=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return re()&&C.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),Xe.apply(void 0,r)};var x=B;Ye(x);var Je=Object.freeze({__proto__:null,default:x,firebase:x});export{P as C,F as E,U as F,Y as L,D as _,$ as a,V as b,R as c,M as d,S as e,x as f,ge as g,oe as h,ie as i,se as j,Je as k,ae as v};
