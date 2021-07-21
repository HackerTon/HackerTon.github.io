import{C as B,f as ie,_ as ae,a as f,b as d,E as se,F as oe,c as b,d as Ge,e as Ue,L as Ke,i as ue,g as ce,v as le,h as fe,j as de}from"../common/index.esm-5d9faf83.js";function $e(e){return Array.prototype.slice.call(e)}function he(e){return new Promise(function(t,r){e.onsuccess=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function G(e,t,r){var n,i=new Promise(function(a,s){n=e[t].apply(e,r),he(n).then(a,s)});return i.request=n,i}function He(e,t,r){var n=G(e,t,r);return n.then(function(i){if(!!i)return new x(i,n.request)})}function O(e,t,r){r.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(i){this[t][n]=i}})})}function U(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return G(this[t],i,arguments)})})}function q(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})})}function pe(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return He(this[t],i,arguments)})})}function A(e){this._index=e}O(A,"_index",["name","keyPath","multiEntry","unique"]),U(A,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),pe(A,"_index",IDBIndex,["openCursor","openKeyCursor"]);function x(e,t){this._cursor=e,this._request=t}O(x,"_cursor",["direction","key","primaryKey","value"]),U(x,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(x.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,r),he(t._request).then(function(n){if(!!n)return new x(n,t._request)})})})});function T(e){this._store=e}T.prototype.createIndex=function(){return new A(this._store.createIndex.apply(this._store,arguments))},T.prototype.index=function(){return new A(this._store.index.apply(this._store,arguments))},O(T,"_store",["name","keyPath","indexNames","autoIncrement"]),U(T,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),pe(T,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),q(T,"_store",IDBObjectStore,["deleteIndex"]);function _(e){this._tx=e,this.complete=new Promise(function(t,r){e.oncomplete=function(){t()},e.onerror=function(){r(e.error)},e.onabort=function(){r(e.error)}})}_.prototype.objectStore=function(){return new T(this._tx.objectStore.apply(this._tx,arguments))},O(_,"_tx",["objectStoreNames","mode"]),q(_,"_tx",IDBTransaction,["abort"]);function L(e,t,r){this._db=e,this.oldVersion=t,this.transaction=new _(r)}L.prototype.createObjectStore=function(){return new T(this._db.createObjectStore.apply(this._db,arguments))},O(L,"_db",["name","version","objectStoreNames"]),q(L,"_db",IDBDatabase,["deleteObjectStore","close"]);function N(e){this._db=e}N.prototype.transaction=function(){return new _(this._db.transaction.apply(this._db,arguments))},O(N,"_db",["name","version","objectStoreNames"]),q(N,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(e){[T,A].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var r=$e(arguments),n=r[r.length-1],i=this._store||this._index,a=i[e].apply(i,r.slice(0,-1));a.onsuccess=function(){n(a.result)}})})}),[A,T].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(a){n.iterateCursor(t,function(s){if(!s){a(i);return}if(i.push(s.value),r!==void 0&&i.length==r){a(i);return}s.continue()})})})});function We(e,t,r){var n=G(indexedDB,"open",[e,t]),i=n.request;return i&&(i.onupgradeneeded=function(a){r&&r(new L(i.result,a.oldVersion,i.transaction))}),n.then(function(a){return new N(a)})}var ze="@firebase/installations",ve="0.4.30";/**
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
 */var ge=1e4,me="w:"+ve,Ie="FIS_v2",Ye="https://firebaseinstallations.googleapis.com/v1",Je=60*60*1e3,Xe="installations",Qe="Installations";/**
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
 */var S,Ze=(S={},S["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',S["not-registered"]="Firebase Installation is not registered.",S["installation-not-found"]="Firebase Installation not found.",S["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',S["app-offline"]="Could not process request. Application offline.",S["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",S),E=new se(Xe,Qe,Ze);function ye(e){return e instanceof oe&&e.code.includes("request-failed")}/**
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
 */function K(e){var t=e.projectId;return Ye+"/projects/"+t+"/installations"}function we(e){return{token:e.token,requestStatus:2,expiresIn:et(e.expiresIn),creationTime:Date.now()}}function $(e,t){return f(this,void 0,void 0,function(){var r,n;return d(this,function(i){switch(i.label){case 0:return[4,t.json()];case 1:return r=i.sent(),n=r.error,[2,E.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function be(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Te(e,t){var r=t.refreshToken,n=be(e);return n.append("Authorization",tt(r)),n}function H(e){return f(this,void 0,void 0,function(){var t;return d(this,function(r){switch(r.label){case 0:return[4,e()];case 1:return t=r.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}})})}function et(e){return Number(e.replace("s","000"))}function tt(e){return Ie+" "+e}/**
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
 */function rt(e,t){var r=t.fid;return f(this,void 0,void 0,function(){var n,i,a,s,o,u,c;return d(this,function(l){switch(l.label){case 0:return n=K(e),i=be(e),a={fid:r,authVersion:Ie,appId:e.appId,sdkVersion:me},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,H(function(){return fetch(n,s)})];case 1:return o=l.sent(),o.ok?[4,o.json()]:[3,3];case 2:return u=l.sent(),c={fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:we(u.authToken)},[2,c];case 3:return[4,$("Create Installation",o)];case 4:throw l.sent()}})})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ee(e){return new Promise(function(t){setTimeout(t,e)})}/**
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
 */function nt(e){var t=btoa(String.fromCharCode.apply(String,Ge([],Ue(e))));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */var it=/^[cdef][\w-]{21}$/,W="";function at(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var r=st(e);return it.test(r)?r:W}catch(n){return W}}function st(e){var t=nt(e);return t.substr(0,22)}/**
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
 */function D(e){return e.appName+"!"+e.appId}/**
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
 */var P=new Map;function Ce(e,t){var r=D(e);Se(r,t),ct(r,t)}function ot(e,t){Ae();var r=D(e),n=P.get(r);n||(n=new Set,P.set(r,n)),n.add(t)}function ut(e,t){var r=D(e),n=P.get(r);!n||(n.delete(t),n.size===0&&P.delete(r),Re())}function Se(e,t){var r,n,i=P.get(e);if(!!i)try{for(var a=ae(i),s=a.next();!s.done;s=a.next()){var o=s.value;o(t)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}}function ct(e,t){var r=Ae();r&&r.postMessage({key:e,fid:t}),Re()}var R=null;function Ae(){return!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=function(e){Se(e.data.key,e.data.fid)}),R}function Re(){P.size===0&&R&&(R.close(),R=null)}/**
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
 */var lt="firebase-installations-database",ft=1,k="firebase-installations-store",z=null;function Y(){return z||(z=We(lt,ft,function(e){switch(e.oldVersion){case 0:e.createObjectStore(k)}})),z}function j(e,t){return f(this,void 0,void 0,function(){var r,n,i,a,s;return d(this,function(o){switch(o.label){case 0:return r=D(e),[4,Y()];case 1:return n=o.sent(),i=n.transaction(k,"readwrite"),a=i.objectStore(k),[4,a.get(r)];case 2:return s=o.sent(),[4,a.put(t,r)];case 3:return o.sent(),[4,i.complete];case 4:return o.sent(),(!s||s.fid!==t.fid)&&Ce(e,t.fid),[2,t]}})})}function J(e){return f(this,void 0,void 0,function(){var t,r,n;return d(this,function(i){switch(i.label){case 0:return t=D(e),[4,Y()];case 1:return r=i.sent(),n=r.transaction(k,"readwrite"),[4,n.objectStore(k).delete(t)];case 2:return i.sent(),[4,n.complete];case 3:return i.sent(),[2]}})})}function F(e,t){return f(this,void 0,void 0,function(){var r,n,i,a,s,o;return d(this,function(u){switch(u.label){case 0:return r=D(e),[4,Y()];case 1:return n=u.sent(),i=n.transaction(k,"readwrite"),a=i.objectStore(k),[4,a.get(r)];case 2:return s=u.sent(),o=t(s),o!==void 0?[3,4]:[4,a.delete(r)];case 3:return u.sent(),[3,6];case 4:return[4,a.put(o,r)];case 5:u.sent(),u.label=6;case 6:return[4,i.complete];case 7:return u.sent(),o&&(!s||s.fid!==o.fid)&&Ce(e,o.fid),[2,o]}})})}/**
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
 */function X(e){return f(this,void 0,void 0,function(){var t,r,n;return d(this,function(i){switch(i.label){case 0:return[4,F(e,function(a){var s=dt(a),o=ht(e,s);return t=o.registrationPromise,o.installationEntry})];case 1:return r=i.sent(),r.fid!==W?[3,3]:(n={},[4,t]);case 2:return[2,(n.installationEntry=i.sent(),n)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}})})}function dt(e){var t=e||{fid:at(),registrationStatus:0};return Oe(t)}function ht(e,t){if(t.registrationStatus===0){if(!navigator.onLine){var r=Promise.reject(E.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=pt(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vt(e)}:{installationEntry:t}}function pt(e,t){return f(this,void 0,void 0,function(){var r,n;return d(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,rt(e,t)];case 1:return r=i.sent(),[2,j(e,r)];case 2:return n=i.sent(),ye(n)&&n.customData.serverCode===409?[4,J(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,j(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw n;case 7:return[2]}})})}function vt(e){return f(this,void 0,void 0,function(){var t,r,n,i;return d(this,function(a){switch(a.label){case 0:return[4,ke(e)];case 1:t=a.sent(),a.label=2;case 2:return t.registrationStatus!==1?[3,5]:[4,Ee(100)];case 3:return a.sent(),[4,ke(e)];case 4:return t=a.sent(),[3,2];case 5:return t.registrationStatus!==0?[3,7]:[4,X(e)];case 6:return r=a.sent(),n=r.installationEntry,i=r.registrationPromise,i?[2,i]:[2,n];case 7:return[2,t]}})})}function ke(e){return F(e,function(t){if(!t)throw E.create("installation-not-found");return Oe(t)})}function Oe(e){return gt(e)?{fid:e.fid,registrationStatus:0}:e}function gt(e){return e.registrationStatus===1&&e.registrationTime+ge<Date.now()}/**
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
 */function mt(e,t){var r=e.appConfig,n=e.platformLoggerProvider;return f(this,void 0,void 0,function(){var i,a,s,o,u,c,l,p;return d(this,function(v){switch(v.label){case 0:return i=It(r,t),a=Te(r,t),s=n.getImmediate({optional:!0}),s&&a.append("x-firebase-client",s.getPlatformInfoString()),o={installation:{sdkVersion:me}},u={method:"POST",headers:a,body:JSON.stringify(o)},[4,H(function(){return fetch(i,u)})];case 1:return c=v.sent(),c.ok?[4,c.json()]:[3,3];case 2:return l=v.sent(),p=we(l),[2,p];case 3:return[4,$("Generate Auth Token",c)];case 4:throw v.sent()}})})}function It(e,t){var r=t.fid;return K(e)+"/"+r+"/authTokens:generate"}/**
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
 */function Q(e,t){return t===void 0&&(t=!1),f(this,void 0,void 0,function(){var r,n,i,a;return d(this,function(s){switch(s.label){case 0:return[4,F(e.appConfig,function(o){if(!Pe(o))throw E.create("not-registered");var u=o.authToken;if(!t&&bt(u))return o;if(u.requestStatus===1)return r=yt(e,t),o;if(!navigator.onLine)throw E.create("app-offline");var c=Et(o);return r=wt(e,c),c})];case 1:return n=s.sent(),r?[4,r]:[3,3];case 2:return a=s.sent(),[3,4];case 3:a=n.authToken,s.label=4;case 4:return i=a,[2,i]}})})}function yt(e,t){return f(this,void 0,void 0,function(){var r,n;return d(this,function(i){switch(i.label){case 0:return[4,De(e.appConfig)];case 1:r=i.sent(),i.label=2;case 2:return r.authToken.requestStatus!==1?[3,5]:[4,Ee(100)];case 3:return i.sent(),[4,De(e.appConfig)];case 4:return r=i.sent(),[3,2];case 5:return n=r.authToken,n.requestStatus===0?[2,Q(e,t)]:[2,n]}})})}function De(e){return F(e,function(t){if(!Pe(t))throw E.create("not-registered");var r=t.authToken;return Ct(r)?b(b({},t),{authToken:{requestStatus:0}}):t})}function wt(e,t){return f(this,void 0,void 0,function(){var r,n,i,n;return d(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,mt(e,t)];case 1:return r=a.sent(),n=b(b({},t),{authToken:r}),[4,j(e.appConfig,n)];case 2:return a.sent(),[2,r];case 3:return i=a.sent(),ye(i)&&(i.customData.serverCode===401||i.customData.serverCode===404)?[4,J(e.appConfig)]:[3,5];case 4:return a.sent(),[3,7];case 5:return n=b(b({},t),{authToken:{requestStatus:0}}),[4,j(e.appConfig,n)];case 6:a.sent(),a.label=7;case 7:throw i;case 8:return[2]}})})}function Pe(e){return e!==void 0&&e.registrationStatus===2}function bt(e){return e.requestStatus===2&&!Tt(e)}function Tt(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Je}function Et(e){var t={requestStatus:1,requestTime:Date.now()};return b(b({},e),{authToken:t})}function Ct(e){return e.requestStatus===1&&e.requestTime+ge<Date.now()}/**
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
 */function St(e){return f(this,void 0,void 0,function(){var t,r,n;return d(this,function(i){switch(i.label){case 0:return[4,X(e.appConfig)];case 1:return t=i.sent(),r=t.installationEntry,n=t.registrationPromise,n?n.catch(console.error):Q(e).catch(console.error),[2,r.fid]}})})}/**
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
 */function At(e,t){return t===void 0&&(t=!1),f(this,void 0,void 0,function(){var r;return d(this,function(n){switch(n.label){case 0:return[4,Rt(e.appConfig)];case 1:return n.sent(),[4,Q(e,t)];case 2:return r=n.sent(),[2,r.token]}})})}function Rt(e){return f(this,void 0,void 0,function(){var t;return d(this,function(r){switch(r.label){case 0:return[4,X(e)];case 1:return t=r.sent().registrationPromise,t?[4,t]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})}/**
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
 */function kt(e,t){return f(this,void 0,void 0,function(){var r,n,i,a;return d(this,function(s){switch(s.label){case 0:return r=Ot(e,t),n=Te(e,t),i={method:"DELETE",headers:n},[4,H(function(){return fetch(r,i)})];case 1:return a=s.sent(),a.ok?[3,3]:[4,$("Delete Installation",a)];case 2:throw s.sent();case 3:return[2]}})})}function Ot(e,t){var r=t.fid;return K(e)+"/"+r}/**
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
 */function Dt(e){return f(this,void 0,void 0,function(){var t,r;return d(this,function(n){switch(n.label){case 0:return t=e.appConfig,[4,F(t,function(i){if(!(i&&i.registrationStatus===0))return i})];case 1:if(r=n.sent(),!r)return[3,6];if(r.registrationStatus!==1)return[3,2];throw E.create("delete-pending-registration");case 2:if(r.registrationStatus!==2)return[3,6];if(navigator.onLine)return[3,3];throw E.create("app-offline");case 3:return[4,kt(t,r)];case 4:return n.sent(),[4,J(t)];case 5:n.sent(),n.label=6;case 6:return[2]}})})}/**
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
 */function Pt(e,t){var r=e.appConfig;return ot(r,t),function(){ut(r,t)}}/**
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
 */function xt(e){var t,r;if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");var n=["projectId","apiKey","appId"];try{for(var i=ae(n),a=i.next();!a.done;a=i.next()){var s=a.value;if(!e.options[s])throw Z(s)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Z(e){return E.create("missing-app-config-values",{valueName:e})}/**
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
 */function _t(e){var t="installations";e.INTERNAL.registerComponent(new B(t,function(r){var n=r.getProvider("app").getImmediate(),i=xt(n),a=r.getProvider("platform-logger"),s={appConfig:i,platformLoggerProvider:a},o={app:n,getId:function(){return St(s)},getToken:function(u){return At(s,u)},delete:function(){return Dt(s)},onIdChange:function(u){return Pt(s,u)}};return o},"PUBLIC")),e.registerVersion(ze,ve)}_t(ie);/**
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
 */var Ft="firebase_id",Mt="origin",qt=60*1e3,Lt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xe="https://www.googletagmanager.com/gtag/js",g;(function(e){e.EVENT="event",e.SET="set",e.CONFIG="config"})(g||(g={}));var ee;(function(e){e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"})(ee||(ee={}));/**
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
 */function Nt(e,t,r,n,i){return f(this,void 0,void 0,function(){var a,s;return d(this,function(o){switch(o.label){case 0:return i&&i.global?(e(g.EVENT,r,n),[2]):[3,1];case 1:return[4,t];case 2:a=o.sent(),s=b(b({},n),{send_to:a}),e(g.EVENT,r,s),o.label=3;case 3:return[2]}})})}function jt(e,t,r,n){return f(this,void 0,void 0,function(){var i;return d(this,function(a){switch(a.label){case 0:return n&&n.global?(e(g.SET,{screen_name:r}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=a.sent(),e(g.CONFIG,i,{update:!0,screen_name:r}),a.label=3;case 3:return[2]}})})}function Vt(e,t,r,n){return f(this,void 0,void 0,function(){var i;return d(this,function(a){switch(a.label){case 0:return n&&n.global?(e(g.SET,{user_id:r}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=a.sent(),e(g.CONFIG,i,{update:!0,user_id:r}),a.label=3;case 3:return[2]}})})}function Bt(e,t,r,n){return f(this,void 0,void 0,function(){var i,a,s,o,u;return d(this,function(c){switch(c.label){case 0:if(!(n&&n.global))return[3,1];for(i={},a=0,s=Object.keys(r);a<s.length;a++)o=s[a],i["user_properties."+o]=r[o];return e(g.SET,i),[2,Promise.resolve()];case 1:return[4,t];case 2:u=c.sent(),e(g.CONFIG,u,{update:!0,user_properties:r}),c.label=3;case 3:return[2]}})})}function Gt(e,t){return f(this,void 0,void 0,function(){var r;return d(this,function(n){switch(n.label){case 0:return[4,e];case 1:return r=n.sent(),window["ga-disable-"+r]=!t,[2]}})})}/**
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
 */var h=new Ke("@firebase/analytics");/**
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
 */function Ut(e,t){var r=document.createElement("script");r.src=xe+"?l="+e+"&id="+t,r.async=!0,document.head.appendChild(r)}function Kt(e){var t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}function $t(e,t,r,n,i,a){return f(this,void 0,void 0,function(){var s,o,u,c;return d(this,function(l){switch(l.label){case 0:s=n[i],l.label=1;case 1:return l.trys.push([1,7,,8]),s?[4,t[s]]:[3,3];case 2:return l.sent(),[3,6];case 3:return[4,Promise.all(r)];case 4:return o=l.sent(),u=o.find(function(p){return p.measurementId===i}),u?[4,t[u.appId]]:[3,6];case 5:l.sent(),l.label=6;case 6:return[3,8];case 7:return c=l.sent(),h.error(c),[3,8];case 8:return e(g.CONFIG,i,a),[2]}})})}function Ht(e,t,r,n,i){return f(this,void 0,void 0,function(){var a,s,o,u,c,l,p,v,I;return d(this,function(m){switch(m.label){case 0:return m.trys.push([0,4,,5]),a=[],i&&i.send_to?(s=i.send_to,Array.isArray(s)||(s=[s]),[4,Promise.all(r)]):[3,2];case 1:for(o=m.sent(),u=function(Ve){var re=o.find(function(Be){return Be.measurementId===Ve}),ne=re&&t[re.appId];if(ne)a.push(ne);else return a=[],"break"},c=0,l=s;c<l.length&&(p=l[c],v=u(p),v!=="break");c++);m.label=2;case 2:return a.length===0&&(a=Object.values(t)),[4,Promise.all(a)];case 3:return m.sent(),e(g.EVENT,n,i||{}),[3,5];case 4:return I=m.sent(),h.error(I),[3,5];case 5:return[2]}})})}function Wt(e,t,r,n){function i(a,s,o){return f(this,void 0,void 0,function(){var u;return d(this,function(c){switch(c.label){case 0:return c.trys.push([0,6,,7]),a!==g.EVENT?[3,2]:[4,Ht(e,t,r,s,o)];case 1:return c.sent(),[3,5];case 2:return a!==g.CONFIG?[3,4]:[4,$t(e,t,r,n,s,o)];case 3:return c.sent(),[3,5];case 4:e(g.SET,s),c.label=5;case 5:return[3,7];case 6:return u=c.sent(),h.error(u),[3,7];case 7:return[2]}})})}return i}function zt(e,t,r,n,i){var a=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];window[n].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Wt(a,e,t,r),{gtagCore:a,wrappedGtag:window[i]}}function Yt(){for(var e=window.document.getElementsByTagName("script"),t=0,r=Object.values(e);t<r.length;t++){var n=r[t];if(n.src&&n.src.includes(xe))return n}return null}/**
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
 */var w,Jt=(w={},w["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",w["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",w["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",w["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",w["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",w["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",w["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",w["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',w["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',w),y=new se("analytics","Analytics",Jt);/**
 * @license
 * Copyright 2020 Google LLC
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
 */var Xt=30,Qt=1e3,Zt=function(){function e(t,r){t===void 0&&(t={}),r===void 0&&(r=Qt),this.throttleMetadata=t,this.intervalMillis=r}return e.prototype.getThrottleMetadata=function(t){return this.throttleMetadata[t]},e.prototype.setThrottleMetadata=function(t,r){this.throttleMetadata[t]=r},e.prototype.deleteThrottleMetadata=function(t){delete this.throttleMetadata[t]},e}(),_e=new Zt;function er(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function tr(e){var t;return f(this,void 0,void 0,function(){var r,n,i,a,s,o,u;return d(this,function(c){switch(c.label){case 0:return r=e.appId,n=e.apiKey,i={method:"GET",headers:er(n)},a=Lt.replace("{app-id}",r),[4,fetch(a,i)];case 1:if(s=c.sent(),!(s.status!==200&&s.status!==304))return[3,6];o="",c.label=2;case 2:return c.trys.push([2,4,,5]),[4,s.json()];case 3:return u=c.sent(),((t=u.error)===null||t===void 0?void 0:t.message)&&(o=u.error.message),[3,5];case 4:return c.sent(),[3,5];case 5:throw y.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o});case 6:return[2,s.json()]}})})}function rr(e,t,r){return t===void 0&&(t=_e),f(this,void 0,void 0,function(){var n,i,a,s,o,u,c=this;return d(this,function(l){if(n=e.options,i=n.appId,a=n.apiKey,s=n.measurementId,!i)throw y.create("no-app-id");if(!a){if(s)return[2,{measurementId:s,appId:i}];throw y.create("no-api-key")}return o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new ar,setTimeout(function(){return f(c,void 0,void 0,function(){return d(this,function(p){return u.abort(),[2]})})},r!==void 0?r:qt),[2,Fe({appId:i,apiKey:a,measurementId:s},o,u,t)]})})}function Fe(e,t,r,n){var i=t.throttleEndTimeMillis,a=t.backoffCount;return n===void 0&&(n=_e),f(this,void 0,void 0,function(){var s,o,u,c,l,p,v;return d(this,function(I){switch(I.label){case 0:s=e.appId,o=e.measurementId,I.label=1;case 1:return I.trys.push([1,3,,4]),[4,nr(r,i)];case 2:return I.sent(),[3,4];case 3:if(u=I.sent(),o)return h.warn("Timed out fetching this Firebase app's measurement ID from the server."+(" Falling back to the measurement ID "+o)+(' provided in the "measurementId" field in the local Firebase config. ['+u.message+"]")),[2,{appId:s,measurementId:o}];throw u;case 4:return I.trys.push([4,6,,7]),[4,tr(e)];case 5:return c=I.sent(),n.deleteThrottleMetadata(s),[2,c];case 6:if(l=I.sent(),!ir(l)){if(n.deleteThrottleMetadata(s),o)return h.warn("Failed to fetch this Firebase app's measurement ID from the server."+(" Falling back to the measurement ID "+o)+(' provided in the "measurementId" field in the local Firebase config. ['+l.message+"]")),[2,{appId:s,measurementId:o}];throw l}return p=Number(l.customData.httpStatus)===503?ce(a,n.intervalMillis,Xt):ce(a,n.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:a+1},n.setThrottleMetadata(s,v),h.debug("Calling attemptFetch again in "+p+" millis"),[2,Fe(e,v,r,n)];case 7:return[2]}})})}function nr(e,t){return new Promise(function(r,n){var i=Math.max(t-Date.now(),0),a=setTimeout(r,i);e.addEventListener(function(){clearTimeout(a),n(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ir(e){if(!(e instanceof oe)||!e.customData)return!1;var t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}var ar=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(t){this.listeners.push(t)},e.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},e}();/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sr(){return f(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return fe()?[3,1]:(h.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),[2,!1]);case 1:return t.trys.push([1,3,,4]),[4,le()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),h.warn(y.create("indexeddb-unavailable",{errorInfo:e}).message),[2,!1];case 4:return[2,!0]}})})}function or(e,t,r,n,i,a){return f(this,void 0,void 0,function(){var s,o,u,c,l,p,v;return d(this,function(I){switch(I.label){case 0:return s=rr(e),s.then(function(m){r[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&h.warn("The measurement ID in the local Firebase config ("+e.options.measurementId+")"+(" does not match the measurement ID fetched from the server ("+m.measurementId+").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(function(m){return h.error(m)}),t.push(s),o=sr().then(function(m){if(m)return n.getId()}),[4,Promise.all([s,o])];case 1:return u=I.sent(),c=u[0],l=u[1],Yt()||Ut(a,c.measurementId),i("js",new Date),p=(v={},v[Mt]="firebase",v.update=!0,v),l!=null&&(p[Ft]=l),i(g.CONFIG,c.measurementId,p),[2,c.measurementId]}})})}/**
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
 */var C={},Me=[],qe={},V="dataLayer",Le="gtag",Ne,M,te=!1;function ur(e){if(te)throw y.create("already-initialized");e.dataLayerName&&(V=e.dataLayerName),e.gtagName&&(Le=e.gtagName)}function cr(){var e=[];if(ue()&&e.push("This is a browser extension environment."),de()||e.push("Cookies are not available."),e.length>0){var t=e.map(function(n,i){return"("+(i+1)+") "+n}).join(" "),r=y.create("invalid-analytics-context",{errorInfo:t});h.warn(r.message)}}function lr(e,t){cr();var r=e.options.appId;if(!r)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)h.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+(" measurement ID for this Firebase app. Falling back to the measurement ID "+e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw y.create("no-api-key");if(C[r]!=null)throw y.create("already-exists",{id:r});if(!te){Kt(V);var n=zt(C,Me,qe,V,Le),i=n.wrappedGtag,a=n.gtagCore;M=i,Ne=a,te=!0}C[r]=or(e,Me,qe,t,Ne,V);var s={app:e,logEvent:function(o,u,c){Nt(M,C[r],o,u,c).catch(function(l){return h.error(l)})},setCurrentScreen:function(o,u){jt(M,C[r],o,u).catch(function(c){return h.error(c)})},setUserId:function(o,u){Vt(M,C[r],o,u).catch(function(c){return h.error(c)})},setUserProperties:function(o,u){Bt(M,C[r],o,u).catch(function(c){return h.error(c)})},setAnalyticsCollectionEnabled:function(o){Gt(C[r],o).catch(function(u){return h.error(u)})},INTERNAL:{delete:function(){return delete C[r],Promise.resolve()}}};return s}var fr="@firebase/analytics",dr="0.6.14",je="analytics";function hr(e){e.INTERNAL.registerComponent(new B(je,function(r){var n=r.getProvider("app").getImmediate(),i=r.getProvider("installations").getImmediate();return lr(n,i)},"PUBLIC").setServiceProps({settings:ur,EventName:ee,isSupported:pr})),e.INTERNAL.registerComponent(new B("analytics-internal",t,"PRIVATE")),e.registerVersion(fr,dr);function t(r){try{var n=r.getProvider(je).getImmediate();return{logEvent:n.logEvent}}catch(i){throw y.create("interop-component-reg-failed",{reason:i})}}}hr(ie);function pr(){return f(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:if(ue())return[2,!1];if(!de())return[2,!1];if(!fe())return[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,le()];case 2:return e=t.sent(),[2,e];case 3:return t.sent(),[2,!1];case 4:return[2]}})})}var vr={};export default vr;
