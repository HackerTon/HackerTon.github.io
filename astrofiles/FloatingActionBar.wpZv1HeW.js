import{r as l}from"./index.NEDEFKed.js";var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,w=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(o,r,t){var e,n={},i=null,a=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)_.call(r,e)&&!h.hasOwnProperty(e)&&(n[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:d,type:o,key:i,ref:a,props:n,_owner:w.current}}s.Fragment=m;s.jsx=p;s.jsxs=p;c.exports=s;var f=c.exports;const v={src:"/astrofiles/up-arrow.i5uIq-V4.png",width:512,height:512,format:"png"};function y(){const[o,r]=l.useState(!1);l.useEffect(()=>{document.addEventListener("scroll",()=>{r(!(window.scrollY<50))})},[]);function t(){window.scrollTo({top:0,left:0,behavior:"smooth"})}if(o)return f.jsx("div",{className:"fixed right-5 bottom-5 md:invisible transform transition-transform hover:-translate-y-2 rounded-full",onClick:t,children:f.jsx("img",{className:"animate-drop-down rounded-full h-14 w-14 bg-white p-4 active:bg-yellow-400 cursor-pointer drop-shadow-xl",src:v.src})})}export{y as default};
