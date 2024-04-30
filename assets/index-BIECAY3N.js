function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Teachers-CYAAljGZ.js","assets/TeachersCard-IzM5P_r7.js","assets/Favorite-DZB_08rZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var sI=Object.defineProperty;var oI=(t,e,n)=>e in t?sI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kd=(t,e,n)=>(oI(t,typeof e!="symbol"?e+"":e,n),n);function aI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hw={exports:{}},hc={},pw={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),lI=Symbol.for("react.portal"),uI=Symbol.for("react.fragment"),cI=Symbol.for("react.strict_mode"),dI=Symbol.for("react.profiler"),fI=Symbol.for("react.provider"),hI=Symbol.for("react.context"),pI=Symbol.for("react.forward_ref"),mI=Symbol.for("react.suspense"),gI=Symbol.for("react.memo"),yI=Symbol.for("react.lazy"),wy=Symbol.iterator;function vI(t){return t===null||typeof t!="object"?null:(t=wy&&t[wy]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=Ks.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var Lp=Dp.prototype=new vw;Lp.constructor=Dp;gw(Lp,Ks.prototype);Lp.isPureReactComponent=!0;var Ey=Array.isArray,_w=Object.prototype.hasOwnProperty,Mp={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_w.call(e,r)&&!ww.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ra,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function _I(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sy=/\/+/g;function Pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function bl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case lI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pd(o,0):r,Ey(i)?(n="",t!=null&&(n=t.replace(Sy,"$&/")+"/"),bl(i,e,n,"",function(u){return u})):i!=null&&($p(i)&&(i=_I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ey(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pd(s,a);o+=bl(s,e,n,l,i)}else if(l=vI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pd(s,a++),o+=bl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var r=[],i=0;return bl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},kl={transition:null},SI={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Mp};K.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!$p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ks;K.Fragment=uI;K.Profiler=dI;K.PureComponent=Dp;K.StrictMode=cI;K.Suspense=mI;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_w.call(e,l)&&!ww.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ra,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:hI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fI,_context:t},t.Consumer=t};K.createElement=Ew;K.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:pI,render:t}};K.isValidElement=$p;K.lazy=function(t){return{$$typeof:yI,_payload:{_status:-1,_result:t},_init:EI}};K.memo=function(t,e){return{$$typeof:gI,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return it.current.useCallback(t,e)};K.useContext=function(t){return it.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return it.current.useDeferredValue(t)};K.useEffect=function(t,e){return it.current.useEffect(t,e)};K.useId=function(){return it.current.useId()};K.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return it.current.useMemo(t,e)};K.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};K.useRef=function(t){return it.current.useRef(t)};K.useState=function(t){return it.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return it.current.useTransition()};K.version="18.2.0";pw.exports=K;var w=pw.exports;const ut=Gs(w),Ff=aI({__proto__:null,default:ut},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CI=w,TI=Symbol.for("react.element"),xI=Symbol.for("react.fragment"),II=Object.prototype.hasOwnProperty,bI=CI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kI={key:!0,ref:!0,__self:!0,__source:!0};function Sw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)II.call(e,r)&&!kI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TI,type:t,key:s,ref:o,props:i,_owner:bI.current}}hc.Fragment=xI;hc.jsx=Sw;hc.jsxs=Sw;hw.exports=hc;var C=hw.exports,jf={},Cw={exports:{}},Rt={},Tw={exports:{}},xw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var U=O.length;O.push(M);e:for(;0<U;){var X=U-1>>>1,Y=O[X];if(0<i(Y,M))O[X]=M,O[U]=Y,U=X;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var X=0,Y=O.length,nn=Y>>>1;X<nn;){var Ze=2*(X+1)-1,et=O[Ze],He=Ze+1,_t=O[He];if(0>i(et,U))He<Y&&0>i(_t,et)?(O[X]=_t,O[He]=U,X=He):(O[X]=et,O[Ze]=U,X=Ze);else if(He<Y&&0>i(_t,U))O[X]=_t,O[He]=U,X=He;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function _(O){if(v=!1,g(O),!y)if(n(l)!==null)y=!0,qr(x);else{var M=n(u);M!==null&&_n(_,M.startTime-O)}}function x(O,M){y=!1,v&&(v=!1,m(b),b=-1),p=!0;var U=f;try{for(g(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!W());){var X=c.callback;if(typeof X=="function"){c.callback=null,f=c.priorityLevel;var Y=X(c.expirationTime<=M);M=t.unstable_now(),typeof Y=="function"?c.callback=Y:c===n(l)&&r(l),g(M)}else r(l);c=n(l)}if(c!==null)var nn=!0;else{var Ze=n(u);Ze!==null&&_n(_,Ze.startTime-M),nn=!1}return nn}finally{c=null,f=U,p=!1}}var S=!1,T=null,b=-1,D=5,$=-1;function W(){return!(t.unstable_now()-$<D)}function Fe(){if(T!==null){var O=t.unstable_now();$=O;var M=!0;try{M=T(!0,O)}finally{M?we():(S=!1,T=null)}}else S=!1}var we;if(typeof h=="function")we=function(){h(Fe)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Wi=vt.port2;vt.port1.onmessage=Fe,we=function(){Wi.postMessage(null)}}else we=function(){E(Fe,0)};function qr(O){T=O,S||(S=!0,we())}function _n(O,M){b=E(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,qr(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(O,M,U){var X=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?X+U:X):U=X,O){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=U+Y,O={id:d++,callback:M,priorityLevel:O,startTime:U,expirationTime:Y,sortIndex:-1},U>X?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(v?(m(b),b=-1):v=!0,_n(_,U-X))):(O.sortIndex=Y,e(l,O),y||p||(y=!0,qr(x))),O},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(O){var M=f;return function(){var U=f;f=M;try{return O.apply(this,arguments)}finally{f=U}}}})(xw);Tw.exports=xw;var PI=Tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=w,bt=PI;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bw=new Set,Ko={};function Ri(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Ko[t]=e,t=0;t<e.length;t++)bw.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,RI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cy={},Ty={};function OI(t){return Uf.call(Ty,t)?!0:Uf.call(Cy,t)?!1:RI.test(t)?Ty[t]=!0:(Cy[t]=!0,!1)}function NI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AI(t,e,n,r){if(e===null||typeof e>"u"||NI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,jp);Ve[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,jp);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,jp);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AI(e,n,i,r)&&(n=null),r||i===null?OI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),kw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),xy=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=xy&&t[xy]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Rd;function So(t){if(Rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+t}var Od=!1;function Nd(t,e){if(!t||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function DI(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Nd(t.type,!1),t;case 11:return t=Nd(t.type.render,!1),t;case 1:return t=Nd(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qi:return"Fragment";case Yi:return"Portal";case zf:return"Profiler";case zp:return"StrictMode";case Wf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pw:return(t.displayName||"Context")+".Consumer";case kw:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function LI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MI(t){var e=Ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=MI(t))}function Nw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Aw(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function Gf(t,e){Aw(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kf(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function by(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kf(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Co(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function Dw(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Py(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,Mw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$I=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){$I.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function $w(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$w(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FI=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(FI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,hs=null,ps=null;function Ry(t){if(t=Aa(t)){if(typeof Zf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=vc(e),Zf(t.stateNode,t.type,e))}}function jw(t){hs?ps?ps.push(t):ps=[t]:hs=t}function Uw(){if(hs){var t=hs,e=ps;if(ps=hs=null,Ry(t),e)for(t=0;t<e.length;t++)Ry(e[t])}}function zw(t,e){return t(e)}function Ww(){}var Ad=!1;function Bw(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return zw(t,e,n)}finally{Ad=!1,(hs!==null||ps!==null)&&(Ww(),Uw())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var eh=!1;if(Ln)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){eh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{eh=!1}function jI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Oo=!1,su=null,ou=!1,th=null,UI={onError:function(t){Oo=!0,su=t}};function zI(t,e,n,r,i,s,o,a,l){Oo=!1,su=null,jI.apply(UI,arguments)}function WI(t,e,n,r,i,s,o,a,l){if(zI.apply(this,arguments),Oo){if(Oo){var u=su;Oo=!1,su=null}else throw Error(k(198));ou||(ou=!0,th=u)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oy(t){if(Oi(t)!==t)throw Error(k(188))}function BI(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oy(i),t;if(s===r)return Oy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Hw(t){return t=BI(t),t!==null?Gw(t):null}function Gw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gw(t);if(e!==null)return e;t=t.sibling}return null}var Kw=bt.unstable_scheduleCallback,Ny=bt.unstable_cancelCallback,VI=bt.unstable_shouldYield,HI=bt.unstable_requestPaint,Te=bt.unstable_now,GI=bt.unstable_getCurrentPriorityLevel,Hp=bt.unstable_ImmediatePriority,qw=bt.unstable_UserBlockingPriority,au=bt.unstable_NormalPriority,KI=bt.unstable_LowPriority,Yw=bt.unstable_IdlePriority,pc=null,fn=null;function qI(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:XI,YI=Math.log,QI=Math.LN2;function XI(t){return t>>>=0,t===0?32:31-(YI(t)/QI|0)|0}var il=64,sl=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function JI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qw(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function eb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jw,Kp,Zw,e1,t1,rh=!1,ol=[],gr=null,yr=null,vr=null,Qo=new Map,Xo=new Map,sr=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ay(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&Kp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nb(t,e,n,r,i){switch(e){case"focusin":return gr=uo(gr,t,e,n,r,i),!0;case"dragenter":return yr=uo(yr,t,e,n,r,i),!0;case"mouseover":return vr=uo(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qo.set(s,uo(Qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xo.set(s,uo(Xo.get(s)||null,t,e,n,r,i)),!0}return!1}function n1(t){var e=ni(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=Vw(n),e!==null){t.blockedOn=e,t1(t.priority,function(){Zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jf=r,n.target.dispatchEvent(r),Jf=null}else return e=Aa(n),e!==null&&Kp(e),t.blockedOn=n,!1;e.shift()}return!0}function Dy(t,e,n){Pl(t)&&n.delete(e)}function rb(){rh=!1,gr!==null&&Pl(gr)&&(gr=null),yr!==null&&Pl(yr)&&(yr=null),vr!==null&&Pl(vr)&&(vr=null),Qo.forEach(Dy),Xo.forEach(Dy)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,rb)))}function Jo(t){function e(i){return co(i,t)}if(0<ol.length){co(ol[0],t);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&co(gr,t),yr!==null&&co(yr,t),vr!==null&&co(vr,t),Qo.forEach(e),Xo.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)n1(n),n.blockedOn===null&&sr.shift()}var ms=Vn.ReactCurrentBatchConfig,uu=!0;function ib(t,e,n,r){var i=ne,s=ms.transition;ms.transition=null;try{ne=1,qp(t,e,n,r)}finally{ne=i,ms.transition=s}}function sb(t,e,n,r){var i=ne,s=ms.transition;ms.transition=null;try{ne=4,qp(t,e,n,r)}finally{ne=i,ms.transition=s}}function qp(t,e,n,r){if(uu){var i=ih(t,e,n,r);if(i===null)Vd(t,e,r,cu,n),Ay(t,r);else if(nb(i,t,e,n,r))r.stopPropagation();else if(Ay(t,r),e&4&&-1<tb.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&Jw(s),s=ih(t,e,n,r),s===null&&Vd(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var cu=null;function ih(t,e,n,r){if(cu=null,t=Vp(r),t=ni(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function r1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GI()){case Hp:return 1;case qw:return 4;case au:case KI:return 16;case Yw:return 536870912;default:return 16}default:return 16}}var fr=null,Yp=null,Rl=null;function i1(){if(Rl)return Rl;var t,e=Yp,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rl=i.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Ly(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:Ly,this.isPropagationStopped=Ly,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=Ot(qs),Na=_e({},qs,{view:0,detail:0}),ob=Ot(Na),Ld,Md,fo,mc=_e({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Ld=t.screenX-fo.screenX,Md=t.screenY-fo.screenY):Md=Ld=0,fo=t),Ld)},movementY:function(t){return"movementY"in t?t.movementY:Md}}),My=Ot(mc),ab=_e({},mc,{dataTransfer:0}),lb=Ot(ab),ub=_e({},Na,{relatedTarget:0}),$d=Ot(ub),cb=_e({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),db=Ot(cb),fb=_e({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hb=Ot(fb),pb=_e({},qs,{data:0}),$y=Ot(pb),mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yb[t])?!!e[t]:!1}function Xp(){return vb}var _b=_e({},Na,{key:function(t){if(t.key){var e=mb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wb=Ot(_b),Eb=_e({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fy=Ot(Eb),Sb=_e({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),Cb=Ot(Sb),Tb=_e({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xb=Ot(Tb),Ib=_e({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bb=Ot(Ib),kb=[9,13,27,32],Jp=Ln&&"CompositionEvent"in window,No=null;Ln&&"documentMode"in document&&(No=document.documentMode);var Pb=Ln&&"TextEvent"in window&&!No,s1=Ln&&(!Jp||No&&8<No&&11>=No),jy=" ",Uy=!1;function o1(t,e){switch(t){case"keyup":return kb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function Rb(t,e){switch(t){case"compositionend":return a1(e);case"keypress":return e.which!==32?null:(Uy=!0,jy);case"textInput":return t=e.data,t===jy&&Uy?null:t;default:return null}}function Ob(t,e){if(Xi)return t==="compositionend"||!Jp&&o1(t,e)?(t=i1(),Rl=Yp=fr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s1&&e.locale!=="ko"?null:e.data;default:return null}}var Nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nb[t.type]:e==="textarea"}function l1(t,e,n,r){jw(r),e=du(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,Zo=null;function Ab(t){_1(t,0)}function gc(t){var e=es(t);if(Nw(e))return t}function Db(t,e){if(t==="change")return e}var u1=!1;if(Ln){var Fd;if(Ln){var jd="oninput"in document;if(!jd){var Wy=document.createElement("div");Wy.setAttribute("oninput","return;"),jd=typeof Wy.oninput=="function"}Fd=jd}else Fd=!1;u1=Fd&&(!document.documentMode||9<document.documentMode)}function By(){Ao&&(Ao.detachEvent("onpropertychange",c1),Zo=Ao=null)}function c1(t){if(t.propertyName==="value"&&gc(Zo)){var e=[];l1(e,Zo,t,Vp(t)),Bw(Ab,e)}}function Lb(t,e,n){t==="focusin"?(By(),Ao=e,Zo=n,Ao.attachEvent("onpropertychange",c1)):t==="focusout"&&By()}function Mb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(Zo)}function $b(t,e){if(t==="click")return gc(e)}function Fb(t,e){if(t==="input"||t==="change")return gc(e)}function jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:jb;function ea(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hy(t,e){var n=Vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vy(n)}}function d1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f1(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ub(t){var e=f1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d1(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hy(n,s);var o=Hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zb=Ln&&"documentMode"in document&&11>=document.documentMode,Ji=null,sh=null,Do=null,oh=!1;function Gy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Ji==null||Ji!==iu(r)||(r=Ji,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&ea(Do,r)||(Do=r,r=du(sh,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Ud={},h1={};Ln&&(h1=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function yc(t){if(Ud[t])return Ud[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h1)return Ud[t]=e[n];return t}var p1=yc("animationend"),m1=yc("animationiteration"),g1=yc("animationstart"),y1=yc("transitionend"),v1=new Map,Ky="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){v1.set(t,e),Ri(e,[t])}for(var zd=0;zd<Ky.length;zd++){var Wd=Ky[zd],Wb=Wd.toLowerCase(),Bb=Wd[0].toUpperCase()+Wd.slice(1);Ur(Wb,"on"+Bb)}Ur(p1,"onAnimationEnd");Ur(m1,"onAnimationIteration");Ur(g1,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(y1,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function qy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WI(r,e,void 0,t),t.currentTarget=null}function _1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qy(i,a,u),s=l}}}if(ou)throw t=th,ou=!1,th=null,t}function ue(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(w1(e,t,2,!1),n.add(r))}function Bd(t,e,n){var r=0;e&&(r|=4),w1(n,t,r,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[ul]){t[ul]=!0,bw.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||Bd(n,!1,t),Bd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Bd("selectionchange",!1,e))}}function w1(t,e,n,r){switch(r1(e)){case 1:var i=ib;break;case 4:i=sb;break;default:i=qp}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Bw(function(){var u=s,d=Vp(n),c=[];e:{var f=v1.get(t);if(f!==void 0){var p=Qp,y=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":p=wb;break;case"focusin":y="focus",p=$d;break;case"focusout":y="blur",p=$d;break;case"beforeblur":case"afterblur":p=$d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=My;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cb;break;case p1:case m1:case g1:p=db;break;case y1:p=xb;break;case"scroll":p=ob;break;case"wheel":p=bb;break;case"copy":case"cut":case"paste":p=hb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fy}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,g;h!==null;){g=h;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Yo(h,m),_!=null&&v.push(na(h,_,g)))),E)break;h=h.return}0<v.length&&(f=new p(f,y,null,n,d),c.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Jf&&(y=n.relatedTarget||n.fromElement)&&(ni(y)||y[Mn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ni(y):null,y!==null&&(E=Oi(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=My,_="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Fy,_="onPointerLeave",m="onPointerEnter",h="pointer"),E=p==null?f:es(p),g=y==null?f:es(y),f=new v(_,h+"leave",p,n,d),f.target=E,f.relatedTarget=g,_=null,ni(d)===u&&(v=new v(m,h+"enter",y,n,d),v.target=g,v.relatedTarget=E,_=v),E=_,p&&y)t:{for(v=p,m=y,h=0,g=v;g;g=Vi(g))h++;for(g=0,_=m;_;_=Vi(_))g++;for(;0<h-g;)v=Vi(v),h--;for(;0<g-h;)m=Vi(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Vi(v),m=Vi(m)}v=null}else v=null;p!==null&&Yy(c,f,p,v,!1),y!==null&&E!==null&&Yy(c,E,y,v,!0)}}e:{if(f=u?es(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var x=Db;else if(zy(f))if(u1)x=Fb;else{x=Mb;var S=Lb}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=$b);if(x&&(x=x(t,u))){l1(c,x,n,d);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Kf(f,"number",f.value)}switch(S=u?es(u):window,t){case"focusin":(zy(S)||S.contentEditable==="true")&&(Ji=S,sh=u,Do=null);break;case"focusout":Do=sh=Ji=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Gy(c,n,d);break;case"selectionchange":if(zb)break;case"keydown":case"keyup":Gy(c,n,d)}var T;if(Jp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Xi?o1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(s1&&n.locale!=="ko"&&(Xi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Xi&&(T=i1()):(fr=d,Yp="value"in fr?fr.value:fr.textContent,Xi=!0)),S=du(u,b),0<S.length&&(b=new $y(b,t,null,n,d),c.push({event:b,listeners:S}),T?b.data=T:(T=a1(n),T!==null&&(b.data=T)))),(T=Pb?Rb(t,n):Ob(t,n))&&(u=du(u,"onBeforeInput"),0<u.length&&(d=new $y("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}_1(c,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function du(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Yo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function Vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Yo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function Qy(t){return(typeof t=="string"?t:""+t).replace(Hb,`
`).replace(Gb,"")}function cl(t,e,n){if(e=Qy(e),Qy(t)!==e&&n)throw Error(k(425))}function fu(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,Xy=typeof Promise=="function"?Promise:void 0,qb=typeof queueMicrotask=="function"?queueMicrotask:typeof Xy<"u"?function(t){return Xy.resolve(null).then(t).catch(Yb)}:ch;function Yb(t){setTimeout(function(){throw t})}function Hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ys,ra="__reactProps$"+Ys,Mn="__reactContainer$"+Ys,dh="__reactEvents$"+Ys,Qb="__reactListeners$"+Ys,Xb="__reactHandles$"+Ys;function ni(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jy(t);t!==null;){if(n=t[cn])return n;t=Jy(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[cn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function vc(t){return t[ra]||null}var fh=[],ts=-1;function zr(t){return{current:t}}function he(t){0>ts||(t.current=fh[ts],fh[ts]=null,ts--)}function le(t,e){ts++,fh[ts]=t.current,t.current=e}var Ar={},Xe=zr(Ar),ft=zr(!1),pi=Ar;function xs(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function hu(){he(ft),he(Xe)}function Zy(t,e,n){if(Xe.current!==Ar)throw Error(k(168));le(Xe,e),le(ft,n)}function E1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,LI(t)||"Unknown",i));return _e({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,pi=Xe.current,le(Xe,t),le(ft,ft.current),!0}function ev(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=E1(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,he(ft),he(Xe),le(Xe,t)):he(ft),le(ft,n)}var In=null,_c=!1,Gd=!1;function S1(t){In===null?In=[t]:In.push(t)}function Jb(t){_c=!0,S1(t)}function Wr(){if(!Gd&&In!==null){Gd=!0;var t=0,e=ne;try{var n=In;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,_c=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),Kw(Hp,Wr),i}finally{ne=e,Gd=!1}}return null}var ns=[],rs=0,mu=null,gu=0,Dt=[],Lt=0,mi=null,bn=1,kn="";function Qr(t,e){ns[rs++]=gu,ns[rs++]=mu,mu=t,gu=e}function C1(t,e,n){Dt[Lt++]=bn,Dt[Lt++]=kn,Dt[Lt++]=mi,mi=t;var r=bn;t=kn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-Qt(e)+i|n<<i|r,kn=s+t}else bn=1<<s|n<<i|r,kn=t}function em(t){t.return!==null&&(Qr(t,1),C1(t,1,0))}function tm(t){for(;t===mu;)mu=ns[--rs],ns[rs]=null,gu=ns[--rs],ns[rs]=null;for(;t===mi;)mi=Dt[--Lt],Dt[Lt]=null,kn=Dt[--Lt],Dt[Lt]=null,bn=Dt[--Lt],Dt[Lt]=null}var xt=null,St=null,me=!1,Ht=null;function T1(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,St=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:bn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,St=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(me){var e=St;if(e){var n=e;if(!tv(t,e)){if(hh(t))throw Error(k(418));e=_r(n.nextSibling);var r=xt;e&&tv(t,e)?T1(r,n):(t.flags=t.flags&-4097|2,me=!1,xt=t)}}else{if(hh(t))throw Error(k(418));t.flags=t.flags&-4097|2,me=!1,xt=t}}}function nv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function dl(t){if(t!==xt)return!1;if(!me)return nv(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=St)){if(hh(t))throw x1(),Error(k(418));for(;e;)T1(t,e),e=_r(e.nextSibling)}if(nv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=xt?_r(t.stateNode.nextSibling):null;return!0}function x1(){for(var t=St;t;)t=_r(t.nextSibling)}function Is(){St=xt=null,me=!1}function nm(t){Ht===null?Ht=[t]:Ht.push(t)}var Zb=Vn.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yu=zr(null),vu=null,is=null,rm=null;function im(){rm=is=vu=null}function sm(t){var e=yu.current;he(yu),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){vu=t,rm=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(vu===null)throw Error(k(308));is=t,vu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ri=null;function om(t){ri===null?ri=[t]:ri.push(t)}function I1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}function rv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(p,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,c,f):y,f==null)break e;c=_e({},c,f);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=c}}function iv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var k1=new Iw.Component().refs;function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Sr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Xt(e,t,i,r),Nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Sr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Xt(e,t,i,r),Nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Sr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(Xt(e,t,r,n),Nl(e,t,r))}};function sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function P1(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=ht(e)?pi:Xe.current,r=e.contextTypes,s=(r=r!=null)?xs(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=k1,am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=ht(e)?pi:Xe.current,i.context=xs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wc.enqueueReplaceState(i,i.state,null),_u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===k1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function av(t){var e=t._init;return e(t._payload)}function R1(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Cr(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,_){return h===null||h.tag!==6?(h=Zd(g,m.mode,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,_){var x=g.type;return x===Qi?d(m,h,g.props.children,_,g.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&av(x)===h.type)?(_=i(h,g.props),_.ref=ho(m,h,g),_.return=m,_):(_=Fl(g.type,g.key,g.props,null,m.mode,_),_.ref=ho(m,h,g),_.return=m,_)}function u(m,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ef(g,m.mode,_),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,_,x){return h===null||h.tag!==7?(h=ui(g,m.mode,_,x),h.return=m,h):(h=i(h,g),h.return=m,h)}function c(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Zd(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tl:return g=Fl(h.type,h.key,h.props,null,m.mode,g),g.ref=ho(m,null,h),g.return=m,g;case Yi:return h=ef(h,m.mode,g),h.return=m,h;case nr:var _=h._init;return c(m,_(h._payload),g)}if(Co(h)||ao(h))return h=ui(h,m.mode,g,null),h.return=m,h;fl(m,h)}return null}function f(m,h,g,_){var x=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(m,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:return g.key===x?l(m,h,g,_):null;case Yi:return g.key===x?u(m,h,g,_):null;case nr:return x=g._init,f(m,h,x(g._payload),_)}if(Co(g)||ao(g))return x!==null?null:d(m,h,g,_,null);fl(m,g)}return null}function p(m,h,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(h,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return m=m.get(_.key===null?g:_.key)||null,l(h,m,_,x);case Yi:return m=m.get(_.key===null?g:_.key)||null,u(h,m,_,x);case nr:var S=_._init;return p(m,h,g,S(_._payload),x)}if(Co(_)||ao(_))return m=m.get(g)||null,d(h,m,_,x,null);fl(h,_)}return null}function y(m,h,g,_){for(var x=null,S=null,T=h,b=h=0,D=null;T!==null&&b<g.length;b++){T.index>b?(D=T,T=null):D=T.sibling;var $=f(m,T,g[b],_);if($===null){T===null&&(T=D);break}t&&T&&$.alternate===null&&e(m,T),h=s($,h,b),S===null?x=$:S.sibling=$,S=$,T=D}if(b===g.length)return n(m,T),me&&Qr(m,b),x;if(T===null){for(;b<g.length;b++)T=c(m,g[b],_),T!==null&&(h=s(T,h,b),S===null?x=T:S.sibling=T,S=T);return me&&Qr(m,b),x}for(T=r(m,T);b<g.length;b++)D=p(T,m,b,g[b],_),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?b:D.key),h=s(D,h,b),S===null?x=D:S.sibling=D,S=D);return t&&T.forEach(function(W){return e(m,W)}),me&&Qr(m,b),x}function v(m,h,g,_){var x=ao(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var S=x=null,T=h,b=h=0,D=null,$=g.next();T!==null&&!$.done;b++,$=g.next()){T.index>b?(D=T,T=null):D=T.sibling;var W=f(m,T,$.value,_);if(W===null){T===null&&(T=D);break}t&&T&&W.alternate===null&&e(m,T),h=s(W,h,b),S===null?x=W:S.sibling=W,S=W,T=D}if($.done)return n(m,T),me&&Qr(m,b),x;if(T===null){for(;!$.done;b++,$=g.next())$=c(m,$.value,_),$!==null&&(h=s($,h,b),S===null?x=$:S.sibling=$,S=$);return me&&Qr(m,b),x}for(T=r(m,T);!$.done;b++,$=g.next())$=p(T,m,b,$.value,_),$!==null&&(t&&$.alternate!==null&&T.delete($.key===null?b:$.key),h=s($,h,b),S===null?x=$:S.sibling=$,S=$);return t&&T.forEach(function(Fe){return e(m,Fe)}),me&&Qr(m,b),x}function E(m,h,g,_){if(typeof g=="object"&&g!==null&&g.type===Qi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:e:{for(var x=g.key,S=h;S!==null;){if(S.key===x){if(x=g.type,x===Qi){if(S.tag===7){n(m,S.sibling),h=i(S,g.props.children),h.return=m,m=h;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&av(x)===S.type){n(m,S.sibling),h=i(S,g.props),h.ref=ho(m,S,g),h.return=m,m=h;break e}n(m,S);break}else e(m,S);S=S.sibling}g.type===Qi?(h=ui(g.props.children,m.mode,_,g.key),h.return=m,m=h):(_=Fl(g.type,g.key,g.props,null,m.mode,_),_.ref=ho(m,h,g),_.return=m,m=_)}return o(m);case Yi:e:{for(S=g.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=ef(g,m.mode,_),h.return=m,m=h}return o(m);case nr:return S=g._init,E(m,h,S(g._payload),_)}if(Co(g))return y(m,h,g,_);if(ao(g))return v(m,h,g,_);fl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Zd(g,m.mode,_),h.return=m,m=h),o(m)):n(m,h)}return E}var bs=R1(!0),O1=R1(!1),Da={},hn=zr(Da),ia=zr(Da),sa=zr(Da);function ii(t){if(t===Da)throw Error(k(174));return t}function lm(t,e){switch(le(sa,e),le(ia,t),le(hn,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yf(e,t)}he(hn),le(hn,e)}function ks(){he(hn),he(ia),he(sa)}function N1(t){ii(sa.current);var e=ii(hn.current),n=Yf(e,t.type);e!==n&&(le(ia,t),le(hn,n))}function um(t){ia.current===t&&(he(hn),he(ia))}var ge=zr(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kd=[];function cm(){for(var t=0;t<Kd.length;t++)Kd[t]._workInProgressVersionPrimary=null;Kd.length=0}var Al=Vn.ReactCurrentDispatcher,qd=Vn.ReactCurrentBatchConfig,gi=0,ye=null,be=null,Ae=null,Eu=!1,Lo=!1,oa=0,ek=0;function Ge(){throw Error(k(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function fm(t,e,n,r,i,s){if(gi=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?ik:sk,t=n(r,i),Lo){s=0;do{if(Lo=!1,oa=0,25<=s)throw Error(k(301));s+=1,Ae=be=null,e.updateQueue=null,Al.current=ok,t=n(r,i)}while(Lo)}if(Al.current=Su,e=be!==null&&be.next!==null,gi=0,Ae=be=ye=null,Eu=!1,e)throw Error(k(300));return t}function hm(){var t=oa!==0;return oa=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ye.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function jt(){if(be===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ae===null?ye.memoizedState:Ae.next;if(e!==null)Ae=e,be=t;else{if(t===null)throw Error(k(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ae===null?ye.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function aa(t,e){return typeof e=="function"?e(t):e}function Yd(t){var e=jt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((gi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ye.lanes|=d,yi|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qd(t){var e=jt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A1(){}function D1(t,e){var n=ye,r=jt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,pm($1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,la(9,M1.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(k(349));gi&30||L1(n,e,i)}return i}function L1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M1(t,e,n,r){e.value=n,e.getSnapshot=r,F1(e)&&j1(t)}function $1(t,e,n){return n(function(){F1(e)&&j1(t)})}function F1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function j1(t){var e=$n(t,1);e!==null&&Xt(e,t,1,-1)}function lv(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=rk.bind(null,ye,t),[e.memoizedState,t]}function la(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U1(){return jt().memoizedState}function Dl(t,e,n,r){var i=an();ye.flags|=t,i.memoizedState=la(1|e,n,void 0,r===void 0?null:r)}function Ec(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=la(e,n,s,r);return}}ye.flags|=t,i.memoizedState=la(1|e,n,s,r)}function uv(t,e){return Dl(8390656,8,t,e)}function pm(t,e){return Ec(2048,8,t,e)}function z1(t,e){return Ec(4,2,t,e)}function W1(t,e){return Ec(4,4,t,e)}function B1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V1(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,B1.bind(null,e,t),n)}function mm(){}function H1(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G1(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K1(t,e,n){return gi&21?(en(n,e)||(n=Qw(),ye.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function tk(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{ne=n,qd.transition=r}}function q1(){return jt().memoizedState}function nk(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y1(t))Q1(e,n);else if(n=I1(t,e,n,r),n!==null){var i=rt();Xt(n,t,r,i),X1(n,e,r)}}function rk(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y1(t))Q1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,om(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=I1(t,e,i,r),n!==null&&(i=rt(),Xt(n,t,r,i),X1(n,e,r))}}function Y1(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function Q1(t,e){Lo=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}var Su={readContext:Ft,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},ik={readContext:Ft,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:uv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,B1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nk.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:lv,useDebugValue:mm,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=lv(!1),e=t[0];return t=tk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=an();if(me){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Me===null)throw Error(k(349));gi&30||L1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uv($1.bind(null,r,s,t),[t]),r.flags|=2048,la(9,M1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Me.identifierPrefix;if(me){var n=kn,r=bn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ek++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sk={readContext:Ft,useCallback:H1,useContext:Ft,useEffect:pm,useImperativeHandle:V1,useInsertionEffect:z1,useLayoutEffect:W1,useMemo:G1,useReducer:Yd,useRef:U1,useState:function(){return Yd(aa)},useDebugValue:mm,useDeferredValue:function(t){var e=jt();return K1(e,be.memoizedState,t)},useTransition:function(){var t=Yd(aa)[0],e=jt().memoizedState;return[t,e]},useMutableSource:A1,useSyncExternalStore:D1,useId:q1,unstable_isNewReconciler:!1},ok={readContext:Ft,useCallback:H1,useContext:Ft,useEffect:pm,useImperativeHandle:V1,useInsertionEffect:z1,useLayoutEffect:W1,useMemo:G1,useReducer:Qd,useRef:U1,useState:function(){return Qd(aa)},useDebugValue:mm,useDeferredValue:function(t){var e=jt();return be===null?e.memoizedState=t:K1(e,be.memoizedState,t)},useTransition:function(){var t=Qd(aa)[0],e=jt().memoizedState;return[t,e]},useMutableSource:A1,useSyncExternalStore:D1,useId:q1,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=DI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ak=typeof WeakMap=="function"?WeakMap:Map;function J1(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,kh=r),vh(t,e)},n}function Z1(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ak;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ek.bind(null,t,e,n),e.then(t,t))}function dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var lk=Vn.ReactCurrentOwner,ct=!1;function tt(t,e,n,r){e.child=t===null?O1(e,null,n,r):bs(e,t.child,n,r)}function hv(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=fm(t,e,n,r,s,i),n=hm(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(me&&n&&em(e),e.flags|=1,tt(t,e,r,i),e.child)}function pv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eE(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function eE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ea(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return _h(t,e,n,r,i)}function tE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(os,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(os,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(os,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(os,Et),Et|=r;return tt(t,e,i,n),e.child}function nE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,r,i){var s=ht(n)?pi:Xe.current;return s=xs(e,s),gs(e,i),n=fm(t,e,n,r,s,i),r=hm(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(me&&r&&em(e),e.flags|=1,tt(t,e,n,i),e.child)}function mv(t,e,n,r,i){if(ht(n)){var s=!0;pu(e)}else s=!1;if(gs(e,i),e.stateNode===null)Ll(t,e),P1(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=ht(n)?pi:Xe.current,u=xs(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ov(e,o,r,u),rr=!1;var f=e.memoizedState;o.state=f,_u(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ft.current||rr?(typeof d=="function"&&(gh(e,n,d,r),l=e.memoizedState),(a=rr||sv(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=ht(n)?pi:Xe.current,l=xs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&ov(e,o,r,l),rr=!1,f=e.memoizedState,o.state=f,_u(e,r,o,i);var y=e.memoizedState;a!==c||f!==y||ft.current||rr?(typeof p=="function"&&(gh(e,n,p,r),y=e.memoizedState),(u=rr||sv(e,n,u,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){nE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ev(e,n,!1),Fn(t,e,s);r=e.stateNode,lk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&ev(e,n,!0),e.child}function rE(t){var e=t.stateNode;e.pendingContext?Zy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zy(t,e.context,!1),lm(t,e.containerInfo)}function gv(t,e,n,r,i){return Is(),nm(i),e.flags|=256,tt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iE(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ge,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Eh,t):gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&nm(r),bs(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xd(Error(k(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Xd(s,r,void 0),hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ct||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),Xt(r,t,i,-1))}return Sm(),r=Xd(Error(k(421))),hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=_r(i.nextSibling),xt=e,me=!0,Ht=null,t!==null&&(Dt[Lt++]=bn,Dt[Lt++]=kn,Dt[Lt++]=mi,bn=t.id,kn=t.overflow,mi=e),e=gm(e,r.children),e.flags|=4096,e)}function yv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function Jd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yv(t,n,e);else if(t.tag===19)yv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jd(e,!0,n,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ck(t,e,n){switch(e.tag){case 3:rE(e),Is();break;case 5:N1(e);break;case 1:ht(e.type)&&pu(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?iE(t,e,n):(le(ge,ge.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,tE(t,e,n)}return Fn(t,e,n)}var oE,Ch,aE,lE;oE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};aE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(hn.current);var s=null;switch(n){case"input":i=Hf(t,i),r=Hf(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=qf(t,i),r=qf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}Qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lE=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dk(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ht(e.type)&&hu(),Ke(e),null;case 3:return r=e.stateNode,ks(),he(ft),he(Xe),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Oh(Ht),Ht=null))),Ch(t,e),Ke(e),null;case 5:um(e);var i=ii(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)aE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ke(e),null}if(t=ii(hn.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[ra]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)ue(xo[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Iy(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":ky(r,s),ue("invalid",r)}Qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(r.textContent,a,t),i=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":nl(r),by(r,s,!0);break;case"textarea":nl(r),Py(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[ra]=r,oE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xf(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)ue(xo[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Iy(t,r),i=Hf(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ue("invalid",t);break;case"textarea":ky(t,r),i=qf(t,r),ue("invalid",t);break;default:i=r}Qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Up(t,s,l,o))}switch(n){case"input":nl(t),by(t,r,!1);break;case"textarea":nl(t),Py(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)lE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ii(sa.current),ii(hn.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ke(e),null;case 13:if(he(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&St!==null&&e.mode&1&&!(e.flags&128))x1(),Is(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[cn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(Oh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Re===0&&(Re=3):Sm())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return ks(),Ch(t,e),t===null&&ta(e.stateNode.containerInfo),Ke(e),null;case 10:return sm(e.type._context),Ke(e),null;case 17:return ht(e.type)&&hu(),Ke(e),null;case 19:if(he(ge),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Rs&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ke(e),null}else 2*Te()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function fk(t,e){switch(tm(e),e.tag){case 1:return ht(e.type)&&hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),he(ft),he(Xe),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(he(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ge),null;case 4:return ks(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var pl=!1,qe=!1,hk=typeof WeakSet=="function"?WeakSet:Set,A=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var vv=!1;function pk(t,e){if(ah=uu,t=f1(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},uu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Bt(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){Ee(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=vv,vv=!1,y}function Mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function Sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uE(t){var e=t.alternate;e!==null&&(t.alternate=null,uE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[ra],delete e[dh],delete e[Qb],delete e[Xb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cE(t){return t.tag===5||t.tag===3||t.tag===4}function _v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)dE(t,e,n),n=n.sibling}function dE(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:qe||ss(n,e);case 6:var r=Ue,i=Vt;Ue=null,Zn(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?Hd(t.parentNode,n):t.nodeType===1&&Hd(t,n),Jo(t)):Hd(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,Zn(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!qe&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Zn(t,e,n),qe=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function wv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hk),e.forEach(function(r){var i=Ck.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(k(160));dE(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fE(e,t),e=e.sibling}function fE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),on(t),r&4){try{Mo(3,t,t.return),Sc(3,t)}catch(v){Ee(t,t.return,v)}try{Mo(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:zt(e,t),on(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(zt(e,t),on(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Aw(i,s),Xf(a,o);var u=Xf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Fw(i,c):d==="dangerouslySetInnerHTML"?Mw(i,c):d==="children"?qo(i,c):Up(i,d,c,u)}switch(a){case"input":Gf(i,s);break;case"textarea":Dw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(zt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(zt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:zt(e,t),on(t);break;case 13:zt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=Te())),r&4&&wv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,zt(e,t),qe=u):zt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:Mo(4,f,f.return);break;case 1:ss(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){Sv(c);continue}}p!==null?(p.return=f,A=p):Sv(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$w("display",o))}catch(v){Ee(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:zt(e,t),on(t),r&4&&wv(t);break;case 21:break;default:zt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=_v(t);bh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_v(t);Ih(t,a,o);break;default:throw Error(k(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mk(t,e,n){A=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=pl;var u=qe;if(pl=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Cv(i):l!==null?(l.return=o,A=l):Cv(i);for(;s!==null;)A=s,hE(s),s=s.sibling;A=i,pl=a,qe=u}Ev(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Ev(t)}}function Ev(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Jo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}qe||e.flags&512&&xh(e)}catch(f){Ee(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Sv(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Cv(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sc(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{xh(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{xh(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var gk=Math.ceil,Cu=Vn.ReactCurrentDispatcher,ym=Vn.ReactCurrentOwner,$t=Vn.ReactCurrentBatchConfig,Q=0,Me=null,Ie=null,Be=0,Et=0,os=zr(0),Re=0,ua=null,yi=0,Cc=0,vm=0,$o=null,at=null,_m=0,Rs=1/0,Tn=null,Tu=!1,kh=null,Er=null,ml=!1,hr=null,xu=0,Fo=0,Ph=null,Ml=-1,$l=0;function rt(){return Q&6?Te():Ml!==-1?Ml:Ml=Te()}function Sr(t){return t.mode&1?Q&2&&Be!==0?Be&-Be:Zb.transition!==null?($l===0&&($l=Qw()),$l):(t=ne,t!==0||(t=window.event,t=t===void 0?16:r1(t.type)),t):1}function Xt(t,e,n,r){if(50<Fo)throw Fo=0,Ph=null,Error(k(185));Oa(t,n,r),(!(Q&2)||t!==Me)&&(t===Me&&(!(Q&2)&&(Cc|=n),Re===4&&or(t,Be)),pt(t,r),n===1&&Q===0&&!(e.mode&1)&&(Rs=Te()+500,_c&&Wr()))}function pt(t,e){var n=t.callbackNode;ZI(t,e);var r=lu(t,t===Me?Be:0);if(r===0)n!==null&&Ny(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ny(n),e===1)t.tag===0?Jb(Tv.bind(null,t)):S1(Tv.bind(null,t)),qb(function(){!(Q&6)&&Wr()}),n=null;else{switch(Xw(r)){case 1:n=Hp;break;case 4:n=qw;break;case 16:n=au;break;case 536870912:n=Yw;break;default:n=au}n=EE(n,pE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pE(t,e){if(Ml=-1,$l=0,Q&6)throw Error(k(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=lu(t,t===Me?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Iu(t,r);else{e=r;var i=Q;Q|=2;var s=gE();(Me!==t||Be!==e)&&(Tn=null,Rs=Te()+500,li(t,e));do try{_k();break}catch(a){mE(t,a)}while(!0);im(),Cu.current=s,Q=i,Ie!==null?e=0:(Me=null,Be=0,e=Re)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Rh(t,i))),e===1)throw n=ua,li(t,0),or(t,r),pt(t,Te()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!yk(i)&&(e=Iu(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Rh(t,s))),e===1))throw n=ua,li(t,0),or(t,r),pt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Xr(t,at,Tn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=_m+500-Te(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(Xr.bind(null,t,at,Tn),e);break}Xr(t,at,Tn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gk(r/1960))-r,10<r){t.timeoutHandle=ch(Xr.bind(null,t,at,Tn),r);break}Xr(t,at,Tn);break;case 5:Xr(t,at,Tn);break;default:throw Error(k(329))}}}return pt(t,Te()),t.callbackNode===n?pE.bind(null,t):null}function Rh(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=at,at=n,e!==null&&Oh(e)),t}function Oh(t){at===null?at=t:at.push.apply(at,t)}function yk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~vm,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function Tv(t){if(Q&6)throw Error(k(327));ys();var e=lu(t,0);if(!(e&1))return pt(t,Te()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Rh(t,r))}if(n===1)throw n=ua,li(t,0),or(t,e),pt(t,Te()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,at,Tn),pt(t,Te()),null}function wm(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Rs=Te()+500,_c&&Wr())}}function vi(t){hr!==null&&hr.tag===0&&!(Q&6)&&ys();var e=Q;Q|=1;var n=$t.transition,r=ne;try{if($t.transition=null,ne=1,t)return t()}finally{ne=r,$t.transition=n,Q=e,!(Q&6)&&Wr()}}function Em(){Et=os.current,he(os)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kb(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hu();break;case 3:ks(),he(ft),he(Xe),cm();break;case 5:um(r);break;case 4:ks();break;case 13:he(ge);break;case 19:he(ge);break;case 10:sm(r.type._context);break;case 22:case 23:Em()}n=n.return}if(Me=t,Ie=t=Cr(t.current,null),Be=Et=e,Re=0,ua=null,vm=Cc=yi=0,at=$o=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function mE(t,e){do{var n=Ie;try{if(im(),Al.current=Su,Eu){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(gi=0,Ae=be=ye=null,Lo=!1,oa=0,ym.current=null,n===null||n.return===null){Re=1,ua=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=dv(o);if(p!==null){p.flags&=-257,fv(p,o,a,s,e),p.mode&1&&cv(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){cv(s,u,e),Sm();break e}l=Error(k(426))}}else if(me&&a.mode&1){var E=dv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fv(E,o,a,s,e),nm(Ps(l,a));break e}}s=l=Ps(l,a),Re!==4&&(Re=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=J1(s,l,e);rv(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Er===null||!Er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Z1(s,a,e);rv(s,_);break e}}s=s.return}while(s!==null)}vE(n)}catch(x){e=x,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function gE(){var t=Cu.current;return Cu.current=Su,t===null?Su:t}function Sm(){(Re===0||Re===3||Re===2)&&(Re=4),Me===null||!(yi&268435455)&&!(Cc&268435455)||or(Me,Be)}function Iu(t,e){var n=Q;Q|=2;var r=gE();(Me!==t||Be!==e)&&(Tn=null,li(t,e));do try{vk();break}catch(i){mE(t,i)}while(!0);if(im(),Q=n,Cu.current=r,Ie!==null)throw Error(k(261));return Me=null,Be=0,Re}function vk(){for(;Ie!==null;)yE(Ie)}function _k(){for(;Ie!==null&&!VI();)yE(Ie)}function yE(t){var e=wE(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?vE(t):Ie=e,ym.current=null}function vE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fk(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ie=null;return}}else if(n=dk(n,e,Et),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Re===0&&(Re=5)}function Xr(t,e,n){var r=ne,i=$t.transition;try{$t.transition=null,ne=1,wk(t,e,n,r)}finally{$t.transition=i,ne=r}return null}function wk(t,e,n,r){do ys();while(hr!==null);if(Q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eb(t,s),t===Me&&(Ie=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,EE(au,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ne;ne=1;var a=Q;Q|=4,ym.current=null,pk(t,n),fE(n,t),Ub(lh),uu=!!ah,lh=ah=null,t.current=n,mk(n),HI(),Q=a,ne=o,$t.transition=s}else t.current=n;if(ml&&(ml=!1,hr=t,xu=i),s=t.pendingLanes,s===0&&(Er=null),qI(n.stateNode),pt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=kh,kh=null,t;return xu&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Ph?Fo++:(Fo=0,Ph=t):Fo=0,Wr(),null}function ys(){if(hr!==null){var t=Xw(xu),e=$t.transition,n=ne;try{if($t.transition=null,ne=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,xu=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Mo(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(uE(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(x){Ee(a,a.return,x)}if(a===o){A=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,A=_;break e}A=a.return}}if(Q=i,Wr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(pc,t)}catch{}r=!0}return r}finally{ne=n,$t.transition=e}}return!1}function xv(t,e,n){e=Ps(n,e),e=J1(t,e,1),t=wr(t,e,1),e=rt(),t!==null&&(Oa(t,1,e),pt(t,e))}function Ee(t,e,n){if(t.tag===3)xv(t,t,n);else for(;e!==null;){if(e.tag===3){xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=Ps(n,t),t=Z1(e,t,1),e=wr(e,t,1),t=rt(),e!==null&&(Oa(e,1,t),pt(e,t));break}}e=e.return}}function Ek(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(Re===4||Re===3&&(Be&130023424)===Be&&500>Te()-_m?li(t,0):vm|=n),pt(t,e)}function _E(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=rt();t=$n(t,e),t!==null&&(Oa(t,e,n),pt(t,n))}function Sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_E(t,n)}function Ck(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),_E(t,n)}var wE;wE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,ck(t,e,n);ct=!!(t.flags&131072)}else ct=!1,me&&e.flags&1048576&&C1(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=xs(e,Xe.current);gs(e,n),i=fm(null,e,r,t,i,n);var s=hm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=wc,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&em(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xk(r),t=Bt(r,t),i){case 0:e=_h(null,e,r,t,n);break e;case 1:e=mv(null,e,r,t,n);break e;case 11:e=hv(null,e,r,t,n);break e;case 14:e=pv(null,e,r,Bt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),_h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),mv(t,e,r,i,n);case 3:e:{if(rE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,b1(t,e),_u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(k(423)),e),e=gv(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(k(424)),e),e=gv(t,e,r,n,i);break e}else for(St=_r(e.stateNode.containerInfo.firstChild),xt=e,me=!0,Ht=null,n=O1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=Fn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return N1(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),nE(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return iE(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),hv(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(yu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!ft.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=Ft(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),pv(t,e,r,i,n);case 15:return eE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Ll(t,e),e.tag=1,ht(r)?(t=!0,pu(e)):t=!1,gs(e,n),P1(e,r,i),yh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return sE(t,e,n);case 22:return tE(t,e,n)}throw Error(k(156,e.tag))};function EE(t,e){return Kw(t,e)}function Tk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Tk(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xk(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===Bp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qi:return ui(n.children,i,s,e);case zp:o=8,i|=8;break;case zf:return t=Mt(12,n,e,i|2),t.elementType=zf,t.lanes=s,t;case Wf:return t=Mt(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case Bf:return t=Mt(19,n,e,i),t.elementType=Bf,t.lanes=s,t;case Rw:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kw:o=10;break e;case Pw:o=9;break e;case Wp:o=11;break e;case Bp:o=14;break e;case nr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=Rw,t.lanes=n,t.stateNode={isHidden:!1},t}function Zd(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function ef(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tm(t,e,n,r,i,s,o,a,l){return t=new Ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function bk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function SE(t){if(!t)return Ar;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ht(n))return E1(t,n,e)}return e}function CE(t,e,n,r,i,s,o,a,l){return t=Tm(n,r,!0,t,i,s,o,a,l),t.context=SE(null),n=t.current,r=rt(),i=Sr(n),s=Nn(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,Oa(t,i,r),pt(t,r),t}function xc(t,e,n,r){var i=e.current,s=rt(),o=Sr(i);return n=SE(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(Xt(t,i,o,s),Nl(t,i,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){Iv(t,e),(t=t.alternate)&&Iv(t,e)}function kk(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}Ic.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));xc(t,e,null,null)};Ic.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){xc(null,t,null,null)}),e[Mn]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=e1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&n1(t)}};function bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bv(){}function Pk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bu(o);s.call(u)}}var o=CE(e,r,t,0,null,!1,!1,"",bv);return t._reactRootContainer=o,t[Mn]=o.current,ta(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bu(l);a.call(u)}}var l=Tm(t,0,!1,null,null,!1,!1,"",bv);return t._reactRootContainer=l,t[Mn]=l.current,ta(t.nodeType===8?t.parentNode:t),vi(function(){xc(e,l,n,r)}),l}function kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bu(o);a.call(l)}}xc(e,o,t,i)}else o=Pk(n,e,t,i,r);return bu(o)}Jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Gp(e,n|1),pt(e,Te()),!(Q&6)&&(Rs=Te()+500,Wr()))}break;case 13:vi(function(){var r=$n(t,1);if(r!==null){var i=rt();Xt(r,t,1,i)}}),xm(t,1)}};Kp=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=rt();Xt(e,t,134217728,n)}xm(t,134217728)}};Zw=function(t){if(t.tag===13){var e=Sr(t),n=$n(t,e);if(n!==null){var r=rt();Xt(n,t,e,r)}xm(t,e)}};e1=function(){return ne};t1=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Zf=function(t,e,n){switch(e){case"input":if(Gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(k(90));Nw(r),Gf(r,i)}}}break;case"textarea":Dw(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};zw=wm;Ww=vi;var Rk={usingClientEntryPoint:!1,Events:[Aa,es,vc,jw,Uw,wm]},mo={findFiberByHostInstance:ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ok={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hw(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{pc=gl.inject(Ok),fn=gl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rk;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(e))throw Error(k(200));return bk(t,e,null,n)};Rt.createRoot=function(t,e){if(!bm(t))throw Error(k(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tm(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,ta(t.nodeType===8?t.parentNode:t),new Im(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Hw(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return vi(t)};Rt.hydrate=function(t,e,n){if(!bc(e))throw Error(k(200));return kc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!bm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CE(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ic(e)};Rt.render=function(t,e,n){if(!bc(e))throw Error(k(200));return kc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!bc(t))throw Error(k(40));return t._reactRootContainer?(vi(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Rt.unstable_batchedUpdates=wm;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return kc(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function xE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xE)}catch(t){console.error(t)}}xE(),Cw.exports=Rt;var IE=Cw.exports,kv=IE;jf.createRoot=kv.createRoot,jf.hydrateRoot=kv.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ca.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const Pv="popstate";function Nk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ku(i)}return Dk(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ak(){return Math.random().toString(36).substr(2,8)}function Rv(t,e){return{usr:t.state,key:t.key,idx:e}}function Nh(t,e,n,r){return n===void 0&&(n=null),ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||r||Ak()})}function ku(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Dk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=pr.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:m})}function f(E,m){a=pr.Push;let h=Nh(v.location,E,m);n&&n(h,E),u=d()+1;let g=Rv(h,u),_=v.createHref(h);try{o.pushState(g,"",_)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function p(E,m){a=pr.Replace;let h=Nh(v.location,E,m);n&&n(h,E),u=d();let g=Rv(h,u),_=v.createHref(h);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:ku(E);return h=h.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pv,c),l=E,()=>{i.removeEventListener(Pv,c),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let m=y(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(E){return o.go(E)}};return v}var Ov;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ov||(Ov={}));function Lk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qs(e):e,i=Os(r.pathname||"/",n);if(i==null)return null;let s=kE(t);Mk(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=Kk(i);o=Hk(s[a],l)}return o}function kE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Bk(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of PE(s.path))i(s,o,l)}),e}function PE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=PE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Mk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Vk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $k=/^:[\w-]+$/,Fk=3,jk=2,Uk=1,zk=10,Wk=-2,Nv=t=>t==="*";function Bk(t,e){let n=t.split("/"),r=n.length;return n.some(Nv)&&(r+=Wk),e&&(r+=jk),n.filter(i=>!Nv(i)).reduce((i,s)=>i+($k.test(s)?Fk:s===""?Uk:zk),r)}function Vk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Hk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Ah({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Tr([i,d.pathname]),pathnameBase:Xk(Tr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Tr([i,d.pathnameBase]))}return s}function Ah(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Gk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let v=a[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[c];return p&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Gk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Kk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qs(t):t;return{pathname:n?n.startsWith("/")?n:Yk(n,e):e,search:Jk(r),hash:Zk(i)}}function Yk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function km(t,e){let n=Qk(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qs(t):(i=ca({},t),ve(!i.pathname||!i.pathname.includes("?"),tf("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),tf("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),tf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=qk(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),Xk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Jk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Zk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RE=["post","put","patch","delete"];new Set(RE);const tP=["get",...RE];new Set(tP);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(this,arguments)}const Pc=w.createContext(null),OE=w.createContext(null),Hn=w.createContext(null),Rc=w.createContext(null),Gn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),NE=w.createContext(null);function nP(t,e){let{relative:n}=e===void 0?{}:e;Xs()||ve(!1);let{basename:r,navigator:i}=w.useContext(Hn),{hash:s,pathname:o,search:a}=Oc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xs(){return w.useContext(Rc)!=null}function Js(){return Xs()||ve(!1),w.useContext(Rc).location}function AE(t){w.useContext(Hn).static||w.useLayoutEffect(t)}function DE(){let{isDataRoute:t}=w.useContext(Gn);return t?yP():rP()}function rP(){Xs()||ve(!1);let t=w.useContext(Pc),{basename:e,future:n,navigator:r}=w.useContext(Hn),{matches:i}=w.useContext(Gn),{pathname:s}=Js(),o=JSON.stringify(km(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return AE(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Pm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Tr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const iP=w.createContext(null);function sP(t){let e=w.useContext(Gn).outlet;return e&&w.createElement(iP.Provider,{value:t},e)}function Oc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Hn),{matches:i}=w.useContext(Gn),{pathname:s}=Js(),o=JSON.stringify(km(i,r.v7_relativeSplatPath));return w.useMemo(()=>Pm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function oP(t,e){return aP(t,e)}function aP(t,e,n,r){Xs()||ve(!1);let{navigator:i}=w.useContext(Hn),{matches:s}=w.useContext(Gn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Js(),d;if(e){var c;let E=typeof e=="string"?Qs(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||ve(!1),d=E}else d=u;let f=d.pathname||"/",p=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=Lk(t,{pathname:p}),v=fP(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Tr([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Tr([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&v?w.createElement(Rc.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pr.Pop}},v):v}function lP(){let t=gP(),e=eP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const uP=w.createElement(lP,null);class cP extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Gn.Provider,{value:this.props.routeContext},w.createElement(NE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dP(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Pc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Gn.Provider,{value:e},r)}function fP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,y=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,y=!1,v=null,E=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||uP,l&&(u<0&&f===0?(vP("route-fallback",!1),y=!0,E=null):u===f&&(y=!0,E=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let g;return p?g=v:y?g=E:c.route.Component?g=w.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,w.createElement(dP,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?w.createElement(cP,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var LE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LE||{}),Pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pu||{});function hP(t){let e=w.useContext(Pc);return e||ve(!1),e}function pP(t){let e=w.useContext(OE);return e||ve(!1),e}function mP(t){let e=w.useContext(Gn);return e||ve(!1),e}function ME(t){let e=mP(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function gP(){var t;let e=w.useContext(NE),n=pP(Pu.UseRouteError),r=ME(Pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function yP(){let{router:t}=hP(LE.UseNavigateStable),e=ME(Pu.UseNavigateStable),n=w.useRef(!1);return AE(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,da({fromRouteId:e},s)))},[t,e])}const Av={};function vP(t,e,n){!e&&!Av[t]&&(Av[t]=!0)}function Dh(t){let{to:e,replace:n,state:r,relative:i}=t;Xs()||ve(!1);let{future:s,static:o}=w.useContext(Hn),{matches:a}=w.useContext(Gn),{pathname:l}=Js(),u=DE(),d=Pm(e,km(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function _P(t){return sP(t.context)}function qi(t){ve(!1)}function wP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:o=!1,future:a}=t;Xs()&&ve(!1);let l=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:o,future:da({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Qs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:y="default"}=r,v=w.useMemo(()=>{let E=Os(d,l);return E==null?null:{location:{pathname:E,search:c,hash:f,state:p,key:y},navigationType:i}},[l,d,c,f,p,y,i]);return v==null?null:w.createElement(Hn.Provider,{value:u},w.createElement(Rc.Provider,{children:n,value:v}))}function EP(t){let{children:e,location:n}=t;return oP(Lh(e),n)}new Promise(()=>{});function Lh(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Lh(r.props.children,s));return}r.type!==qi&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ru.apply(this,arguments)}function $E(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CP(t,e){return t.button===0&&(!e||e==="_self")&&!SP(t)}const TP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],IP="6";try{window.__reactRouterVersion=IP}catch{}const bP=w.createContext({isTransitioning:!1}),kP="startTransition",Dv=Ff[kP];function PP(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=Nk({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(c=>{u&&Dv?Dv(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.createElement(wP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const RP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NP=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=$E(e,TP),{basename:p}=w.useContext(Hn),y,v=!1;if(typeof u=="string"&&OP.test(u)&&(y=u,RP))try{let g=new URL(window.location.href),_=u.startsWith("//")?new URL(g.protocol+u):new URL(u),x=Os(_.pathname,p);_.origin===g.origin&&x!=null?u=x+_.search+_.hash:v=!0}catch{}let E=nP(u,{relative:i}),m=DP(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(g){r&&r(g),g.defaultPrevented||m(g)}return w.createElement("a",Ru({},f,{href:y||E,onClick:v||s?r:h,ref:n,target:l}))}),Rm=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=$E(e,xP),f=Oc(l,{relative:c.relative}),p=Js(),y=w.useContext(OE),{navigator:v,basename:E}=w.useContext(Hn),m=y!=null&&LP(f)&&u===!0,h=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,g=p.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),_=_?_.toLowerCase():null,h=h.toLowerCase()),_&&E&&(_=Os(_,E)||_);const x=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let S=g===h||!o&&g.startsWith(h)&&g.charAt(x)==="/",T=_!=null&&(_===h||!o&&_.startsWith(h)&&_.charAt(h.length)==="/"),b={isActive:S,isPending:T,isTransitioning:m},D=S?r:void 0,$;typeof s=="function"?$=s(b):$=[s,S?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(b):a;return w.createElement(NP,Ru({},c,{"aria-current":D,className:$,ref:n,style:W,to:l,unstable_viewTransition:u}),typeof d=="function"?d(b):d)});var Mh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Mh||(Mh={}));var Lv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lv||(Lv={}));function AP(t){let e=w.useContext(Pc);return e||ve(!1),e}function DP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=DE(),u=Js(),d=Oc(t,{relative:o});return w.useCallback(c=>{if(CP(c,n)){c.preventDefault();let f=r!==void 0?r:ku(u)===ku(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function LP(t,e){e===void 0&&(e={});let n=w.useContext(bP);n==null&&ve(!1);let{basename:r}=AP(Mh.useViewTransitionState),i=Oc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Os(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Os(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ah(i.pathname,o)!=null||Ah(i.pathname,s)!=null}var FE={exports:{}},jE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=w;function MP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $P=typeof Object.is=="function"?Object.is:MP,FP=La.useSyncExternalStore,jP=La.useRef,UP=La.useEffect,zP=La.useMemo,WP=La.useDebugValue;jE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=jP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=zP(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return c=y}return c=p}if(y=c,$P(d,p))return y;var v=r(p);return i!==void 0&&i(y,v)?y:(d=p,c=v)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=FP(t,s[0],s[1]);return UP(function(){o.hasValue=!0,o.value=a},[a]),WP(a),a};FE.exports=jE;var BP=FE.exports,Ct="default"in Ff?ut:Ff,Mv=Symbol.for("react-redux-context"),$v=typeof globalThis<"u"?globalThis:{};function VP(){if(!Ct.createContext)return{};const t=$v[Mv]??($v[Mv]=new Map);let e=t.get(Ct.createContext);return e||(e=Ct.createContext(null),t.set(Ct.createContext,e)),e}var Dr=VP(),HP=()=>{throw new Error("uSES not initialized!")};function Om(t=Dr){return function(){return Ct.useContext(t)}}var UE=Om(),zE=HP,GP=t=>{zE=t},KP=(t,e)=>t===e;function qP(t=Dr){const e=t===Dr?UE:Om(t),n=(r,i={})=>{const{equalityFn:s=KP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Ct.useRef(!0);const f=Ct.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,o.stabilityCheck]),p=zE(l.addNestedSub,a.getState,u||a.getState,f,s);return Ct.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var WE=qP();function YP(t){t()}function QP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){YP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Fv={notify(){},get:()=>[]};function XP(t,e){let n,r=Fv,i=0,s=!1;function o(v){d();const E=r.subscribe(v);let m=!1;return()=>{m||(m=!0,E(),c())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=QP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Fv)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return y}var JP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZP=JP?Ct.useLayoutEffect:Ct.useEffect;function eR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ct.useMemo(()=>{const u=XP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Ct.useMemo(()=>t.getState(),[t]);ZP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Dr;return Ct.createElement(l.Provider,{value:o},n)}var tR=eR;function BE(t=Dr){const e=t===Dr?UE:Om(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var nR=BE();function rR(t=Dr){const e=t===Dr?nR:BE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Nc=rR();GP(BP.useSyncExternalStoreWithSelector);function je(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var iR=typeof Symbol=="function"&&Symbol.observable||"@@observable",jv=iR,nf=()=>Math.random().toString(36).substring(7).split("").join("."),sR={INIT:`@@redux/INIT${nf()}`,REPLACE:`@@redux/REPLACE${nf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${nf()}`},Ou=sR;function Nm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Am(t,e,n){if(typeof t!="function")throw new Error(je(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(Am)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((E,m)=>{o.set(m,E)}))}function d(){if(l)throw new Error(je(3));return i}function c(E){if(typeof E!="function")throw new Error(je(4));if(l)throw new Error(je(5));let m=!0;u();const h=a++;return o.set(h,E),function(){if(m){if(l)throw new Error(je(6));m=!1,u(),o.delete(h),s=null}}}function f(E){if(!Nm(E))throw new Error(je(7));if(typeof E.type>"u")throw new Error(je(8));if(typeof E.type!="string")throw new Error(je(17));if(l)throw new Error(je(9));try{l=!0,i=r(i,E)}finally{l=!1}return(s=o).forEach(h=>{h()}),E}function p(E){if(typeof E!="function")throw new Error(je(10));r=E,f({type:Ou.REPLACE})}function y(){const E=c;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(je(11));function h(){const _=m;_.next&&_.next(d())}return h(),{unsubscribe:E(h)}},[jv](){return this}}}return f({type:Ou.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[jv]:y}}function oR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ou.INIT})>"u")throw new Error(je(12));if(typeof n(void 0,{type:Ou.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function VE(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{oR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],y=f(p,a);if(typeof y>"u")throw a&&a.type,new Error(je(14));u[c]=y,l=l||y!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Nu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function aR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(je(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Nu(...a)(i.dispatch),{...i,dispatch:s}}}function lR(t){return Nm(t)&&"type"in t&&typeof t.type=="string"}var HE=Symbol.for("immer-nothing"),Uv=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Gt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ns=Object.getPrototypeOf;function Lr(t){return!!t&&!!t[kt]}function jn(t){var e;return t?GE(t)||Array.isArray(t)||!!t[Uv]||!!((e=t.constructor)!=null&&e[Uv])||Dc(t)||Lc(t):!1}var uR=Object.prototype.constructor.toString();function GE(t){if(!t||typeof t!="object")return!1;const e=Ns(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===uR}function Au(t,e){Ac(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Ac(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Dc(t)?2:Lc(t)?3:0}function $h(t,e){return Ac(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function KE(t,e,n){const r=Ac(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function cR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Dc(t){return t instanceof Map}function Lc(t){return t instanceof Set}function Jr(t){return t.copy_||t.base_}function Fh(t,e){if(Dc(t))return new Map(t);if(Lc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&GE(t))return Ns(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ns(t),n)}function Dm(t,e=!1){return Mc(t)||Lr(t)||!jn(t)||(Ac(t)>1&&(t.set=t.add=t.clear=t.delete=dR),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Dm(r,!0))),t}function dR(){Gt(2)}function Mc(t){return Object.isFrozen(t)}var fR={};function _i(t){const e=fR[t];return e||Gt(0,t),e}var fa;function qE(){return fa}function hR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zv(t,e){e&&(_i("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function jh(t){Uh(t),t.drafts_.forEach(pR),t.drafts_=null}function Uh(t){t===fa&&(fa=t.parent_)}function Wv(t){return fa=hR(fa,t)}function pR(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Bv(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(jh(e),Gt(4)),jn(t)&&(t=Du(e,t),e.parent_||Lu(e,t)),e.patches_&&_i("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=Du(e,n,[]),jh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==HE?t:void 0}function Du(t,e,n){if(Mc(e))return e;const r=e[kt];if(!r)return Au(e,(i,s)=>Vv(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Lu(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Au(s,(a,l)=>Vv(t,r,i,a,l,n,o)),Lu(t,i,!1),n&&t.patches_&&_i("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Vv(t,e,n,r,i,s,o){if(Lr(i)){const a=s&&e&&e.type_!==3&&!$h(e.assigned_,r)?s.concat(r):void 0,l=Du(t,i,a);if(KE(n,r,l),Lr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(jn(i)&&!Mc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Du(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Lu(t,i)}}function Lu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Dm(e,n)}function mR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:qE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Lm;n&&(i=[r],s=ha);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Lm={get(t,e){if(e===kt)return t;const n=Jr(t);if(!$h(n,e))return gR(t,n,e);const r=n[e];return t.finalized_||!jn(r)?r:r===rf(t.base_,e)?(sf(t),t.copy_[e]=Wh(r,t)):r},has(t,e){return e in Jr(t)},ownKeys(t){return Reflect.ownKeys(Jr(t))},set(t,e,n){const r=YE(Jr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=rf(Jr(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(cR(n,i)&&(n!==void 0||$h(t.base_,e)))return!0;sf(t),zh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return rf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,sf(t),zh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Jr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Gt(11)},getPrototypeOf(t){return Ns(t.base_)},setPrototypeOf(){Gt(12)}},ha={};Au(Lm,(t,e)=>{ha[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ha.deleteProperty=function(t,e){return ha.set.call(this,t,e,void 0)};ha.set=function(t,e,n){return Lm.set.call(this,t[0],e,n,t[0])};function rf(t,e){const n=t[kt];return(n?Jr(n):t)[e]}function gR(t,e,n){var i;const r=YE(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function YE(t,e){if(!(e in t))return;let n=Ns(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ns(n)}}function zh(t){t.modified_||(t.modified_=!0,t.parent_&&zh(t.parent_))}function sf(t){t.copy_||(t.copy_=Fh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var yR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Gt(6),r!==void 0&&typeof r!="function"&&Gt(7);let i;if(jn(e)){const s=Wv(this),o=Wh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?jh(s):Uh(s)}return zv(s,r),Bv(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===HE&&(i=void 0),this.autoFreeze_&&Dm(i,!0),r){const s=[],o=[];_i("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Gt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){jn(t)||Gt(8),Lr(t)&&(t=QE(t));const e=Wv(this),n=Wh(t,void 0);return n[kt].isManual_=!0,Uh(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Gt(9);const{scope_:r}=n;return zv(r,e),Bv(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=_i("Patches").applyPatches_;return Lr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Wh(t,e){const n=Dc(t)?_i("MapSet").proxyMap_(t,e):Lc(t)?_i("MapSet").proxySet_(t,e):mR(t,e);return(e?e.scope_:qE()).drafts_.push(n),n}function QE(t){return Lr(t)||Gt(10,t),XE(t)}function XE(t){if(!jn(t)||Mc(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Fh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Fh(t,!0);return Au(n,(r,i)=>{KE(n,r,XE(i))}),e&&(e.finalized_=!1),n}var Pt=new yR,JE=Pt.produce;Pt.produceWithPatches.bind(Pt);Pt.setAutoFreeze.bind(Pt);Pt.setUseStrictShallowCopy.bind(Pt);Pt.applyPatches.bind(Pt);Pt.createDraft.bind(Pt);Pt.finishDraft.bind(Pt);function vR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function _R(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function wR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var Hv=t=>Array.isArray(t)?t:[t];function ER(t){const e=Array.isArray(t[0])?t[0]:t;return wR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function SR(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var CR=class{constructor(t){this.value=t}deref(){return this.value}},TR=typeof WeakRef<"u"?WeakRef:CR,xR=0,Gv=1;function yl(){return{s:xR,v:void 0,o:null,p:null}}function Mm(t,e={}){let n=yl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const E=v.get(y);E===void 0?(a=yl(),v.set(y,a)):a=E}else{let v=a.p;v===null&&(a.p=v=new Map);const E=v.get(y);E===void 0?(a=yl(),v.set(y,a)):a=E}}const u=a;let d;if(a.s===Gv?d=a.v:(d=t.apply(null,arguments),s++),u.s=Gv,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new TR(d):d}return u.v=d,d}return o.clearCache=()=>{n=yl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function ZE(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),vR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=Mm,argsMemoizeOptions:y=[],devModeChecks:v={}}=d,E=Hv(f),m=Hv(y),h=ER(i),g=c(function(){return s++,u.apply(null,arguments)},...E),_=p(function(){o++;const S=SR(h,arguments);return a=g.apply(null,S),a},...m);return Object.assign(_,{resultFunc:u,memoizedResultFunc:g,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var IR=ZE(Mm),bR=Object.assign((t,e=IR)=>{_R(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>bR});function eS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var kR=eS(),PR=eS,RR=(...t)=>{const e=ZE(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Lr(o)?QE(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};RR(Mm);var OR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Nu:Nu.apply(null,arguments)},NR=t=>t&&typeof t.match=="function";function An(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(mt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>lR(r)&&r.type===t,n}var tS=class Io extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Io.prototype)}static get[Symbol.species](){return Io}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Io(...e[0].concat(this)):new Io(...e.concat(this))}};function Kv(t){return jn(t)?JE(t,()=>{}):t}function qv(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(mt(10));const r=n.insert(e,t);return t.set(e,r),r}function AR(t){return typeof t=="boolean"}var DR=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new tS;return n&&(AR(n)?o.push(kR):o.push(PR(n.extraArgument))),o},LR="RTK_autoBatch",nS=t=>e=>{setTimeout(e,t)},MR=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:nS(10),$R=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?MR:t.type==="callback"?t.queueNotification:nS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[LR]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},FR=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new tS(t);return r&&i.push($R(typeof r=="object"?r:void 0)),i},jR=!0;function UR(t){const e=DR(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Nm(n))a=VE(n);else throw new Error(mt(1));let l;typeof r=="function"?l=r(e):l=e();let u=Nu;i&&(u=OR({trace:!jR,...typeof i=="object"&&i}));const d=aR(...l),c=FR(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Am(a,s,p)}function rS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(mt(28));if(a in e)throw new Error(mt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function zR(t){return typeof t=="function"}function WR(t,e){let[n,r,i]=rS(e),s;if(zR(t))s=()=>Kv(t());else{const a=Kv(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Lr(d)){const p=c(d,l);return p===void 0?d:p}else{if(jn(d))return JE(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(mt(9))}return f}}return d},a)}return o.getInitialState=s,o}var BR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",iS=(t=21)=>{let e="",n=t;for(;n--;)e+=BR[Math.random()*64|0];return e},VR=(t,e)=>NR(t)?t.match(e):t(e);function HR(...t){return e=>t.some(n=>VR(n,e))}var GR=["name","message","stack","code"],of=class{constructor(t,e){kd(this,"_type");this.payload=t,this.meta=e}},Yv=class{constructor(t,e){kd(this,"_type");this.payload=t,this.meta=e}},KR=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of GR)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Ma=(()=>{function t(e,n,r){const i=An(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=An(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=An(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||KR)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):iS(),p=new AbortController;let y,v;function E(h){v=h,p.abort()}const m=async function(){var _,x;let h;try{let S=(_=r==null?void 0:r.condition)==null?void 0:_.call(r,l,{getState:d,extra:c});if(YR(S)&&(S=await S),S===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((b,D)=>{y=()=>{D({name:"AbortError",message:v||"Aborted"})},p.signal.addEventListener("abort",y)});u(s(f,l,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([T,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:E,rejectWithValue:(b,D)=>new of(b,D),fulfillWithValue:(b,D)=>new Yv(b,D)})).then(b=>{if(b instanceof of)throw b;return b instanceof Yv?i(b.payload,f,l,b.meta):i(b,f,l)})])}catch(S){h=S instanceof of?o(null,f,l,S.payload,S.meta):o(S,f,l)}finally{y&&p.signal.removeEventListener("abort",y)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(m,{abort:E,requestId:f,arg:l,unwrap(){return m.then(qR)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:HR(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function qR(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function YR(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var QR=Symbol.for("rtk-slice-createasyncthunk");function XR(t,e){return`${t}/${e}`}function JR({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[QR];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(mt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(eO()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(g,_){const x=typeof g=="string"?g:g.type;if(!x)throw new Error(mt(12));if(x in u.sliceCaseReducersByType)throw new Error(mt(13));return u.sliceCaseReducersByType[x]=_,d},addMatcher(g,_){return u.sliceMatchers.push({matcher:g,reducer:_}),d},exposeAction(g,_){return u.actionCreators[g]=_,d},exposeCaseReducer(g,_){return u.sliceCaseReducersByName[g]=_,d}};l.forEach(g=>{const _=a[g],x={reducerName:g,type:XR(s,g),createNotation:typeof i.reducers=="function"};nO(_)?iO(x,_,d,e):tO(x,_,d)});function c(){const[g={},_=[],x=void 0]=typeof i.extraReducers=="function"?rS(i.extraReducers):[i.extraReducers],S={...g,...u.sliceCaseReducersByType};return WR(i.initialState,T=>{for(let b in S)T.addCase(b,S[b]);for(let b of u.sliceMatchers)T.addMatcher(b.matcher,b.reducer);for(let b of _)T.addMatcher(b.matcher,b.reducer);x&&T.addDefaultCase(x)})}const f=g=>g,p=new Map;let y;function v(g,_){return y||(y=c()),y(g,_)}function E(){return y||(y=c()),y.getInitialState()}function m(g,_=!1){function x(T){let b=T[g];return typeof b>"u"&&_&&(b=E()),b}function S(T=f){const b=qv(p,_,{insert:()=>new WeakMap});return qv(b,T,{insert:()=>{const D={};for(const[$,W]of Object.entries(i.selectors??{}))D[$]=ZR(W,T,E,_);return D}})}return{reducerPath:g,getSelectors:S,get selectors(){return S(x)},selectSlice:x}}const h={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:E,...m(o),injectInto(g,{reducerPath:_,...x}={}){const S=_??o;return g.inject({reducerPath:S,reducer:v},x),{...h,...m(S,!0)}}};return h}}function ZR(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var sS=JR();function eO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function tO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!rO(r))throw new Error(mt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?An(t,o):An(t))}function nO(t){return t._reducerDefinitionType==="asyncThunk"}function rO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function iO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(mt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||vl,pending:a||vl,rejected:l||vl,settled:u||vl})}function vl(){}var sO=(t,e)=>{if(typeof t!="function")throw new Error(mt(32))},$m="listenerMiddleware",oO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=An(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(mt(21));return sO(s),{predicate:i,type:e,effect:s}},aO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=oO(t);return{id:iS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(mt(22))}}},{withTypes:()=>aO}),lO=Object.assign(An(`${$m}/add`),{withTypes:()=>lO});An(`${$m}/removeAll`);var uO=Object.assign(An(`${$m}/remove`),{withTypes:()=>uO});function mt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Qv={};/**
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
 */const oS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw Zs(e)},Zs=function(t){return new Error("Firebase Database ("+oS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const aS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new dO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lS=function(t){const e=aS(t);return Fm.encodeByteArray(e,!0)},Mu=function(t){return lS(t).replace(/\./g,"")},$u=function(t){try{return Fm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fO(t){return uS(void 0,t)}function uS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hO(n)||(t[n]=uS(t[n],e[n]));return t}function hO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function pO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const mO=()=>pO().__FIREBASE_DEFAULTS__,gO=()=>{if(typeof process>"u"||typeof Qv>"u")return;const t=Qv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$u(t[1]);return e&&JSON.parse(e)},jm=()=>{try{return mO()||gO()||yO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cS=t=>{var e,n;return(n=(e=jm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vO=t=>{const e=cS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dS=()=>{var t;return(t=jm())===null||t===void 0?void 0:t.config},fS=t=>{var e;return(e=jm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function _O(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function wO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EO(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pS(){return oS.NODE_ADMIN===!0}function SO(){try{return typeof indexedDB=="object"}catch{return!1}}function CO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const TO="FirebaseError";class Br extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TO,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Br(i,a,r)}}function xO(t,e){return t.replace(IO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IO=/\{\$([^}]+)}/g;/**
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
 */function pa(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
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
 */const mS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=pa($u(s[0])||""),n=pa($u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},bO=function(t){const e=mS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kO=function(t){const e=mS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function As(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ju(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xv(s)&&Xv(o)){if(!ju(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xv(t){return t!==null&&typeof t=="object"}/**
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
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class PO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function RO(t,e){const n=new OO(t,e);return n.subscribe.bind(n)}class OO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=af),i.error===void 0&&(i.error=af),i.complete===void 0&&(i.complete=af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function af(){}function gS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const AO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class DO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Um;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MO(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LO(t){return t===Zr?void 0:t}function MO(t){return t.instantiationMode==="EAGER"}/**
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
 */class $O{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const FO={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},jO=ie.INFO,UO={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},zO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wm{constructor(e){this.name=e,this._logLevel=jO,this._logHandler=zO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const WO=(t,e)=>e.some(n=>t instanceof n);let Jv,Zv;function BO(){return Jv||(Jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VO(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yS=new WeakMap,Vh=new WeakMap,vS=new WeakMap,lf=new WeakMap,Bm=new WeakMap;function HO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yS.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function GO(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let Hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KO(t){Hh=t(Hh)}function qO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uf(this),e,...n);return vS.set(r,e.sort?e.sort():[e]),xr(r)}:VO().includes(t)?function(...e){return t.apply(uf(this),e),xr(yS.get(this))}:function(...e){return xr(t.apply(uf(this),e))}}function YO(t){return typeof t=="function"?qO(t):(t instanceof IDBTransaction&&GO(t),WO(t,BO())?new Proxy(t,Hh):t)}function xr(t){if(t instanceof IDBRequest)return HO(t);if(lf.has(t))return lf.get(t);const e=YO(t);return e!==t&&(lf.set(t,e),Bm.set(e,t)),e}const uf=t=>Bm.get(t);function QO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const XO=["get","getKey","getAll","getAllKeys","count"],JO=["put","add","delete","clear"],cf=new Map;function e_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cf.set(e,s),s}KO(t=>({...t,get:(e,n,r)=>e_(e,n)||t.get(e,n,r),has:(e,n)=>!!e_(e,n)||t.has(e,n)}));/**
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
 */class ZO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",t_="0.9.29";/**
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
 */const Ei=new Wm("@firebase/app"),tN="@firebase/app-compat",nN="@firebase/analytics-compat",rN="@firebase/analytics",iN="@firebase/app-check-compat",sN="@firebase/app-check",oN="@firebase/auth",aN="@firebase/auth-compat",lN="@firebase/database",uN="@firebase/database-compat",cN="@firebase/functions",dN="@firebase/functions-compat",fN="@firebase/installations",hN="@firebase/installations-compat",pN="@firebase/messaging",mN="@firebase/messaging-compat",gN="@firebase/performance",yN="@firebase/performance-compat",vN="@firebase/remote-config",_N="@firebase/remote-config-compat",wN="@firebase/storage",EN="@firebase/storage-compat",SN="@firebase/firestore",CN="@firebase/firestore-compat",TN="firebase",xN="10.9.0";/**
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
 */const Kh="[DEFAULT]",IN={[Gh]:"fire-core",[tN]:"fire-core-compat",[rN]:"fire-analytics",[nN]:"fire-analytics-compat",[sN]:"fire-app-check",[iN]:"fire-app-check-compat",[oN]:"fire-auth",[aN]:"fire-auth-compat",[lN]:"fire-rtdb",[uN]:"fire-rtdb-compat",[cN]:"fire-fn",[dN]:"fire-fn-compat",[fN]:"fire-iid",[hN]:"fire-iid-compat",[pN]:"fire-fcm",[mN]:"fire-fcm-compat",[gN]:"fire-perf",[yN]:"fire-perf-compat",[vN]:"fire-rc",[_N]:"fire-rc-compat",[wN]:"fire-gcs",[EN]:"fire-gcs-compat",[SN]:"fire-fst",[CN]:"fire-fst-compat","fire-js":"fire-js",[TN]:"fire-js-all"};/**
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
 */const Uu=new Map,qh=new Map;function bN(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(qh.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of Uu.values())bN(n,t);return!0}function Vm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new $a("app","Firebase",kN);/**
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
 */class PN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const to=xN;function _S(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=dS()),!n)throw Ir.create("no-options");const s=Uu.get(i);if(s){if(ju(n,s.options)&&ju(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new $O(i);for(const l of qh.values())o.addComponent(l);const a=new PN(n,r,o);return Uu.set(i,a),a}function wS(t=Kh){const e=Uu.get(t);if(!e&&t===Kh&&dS())return _S();if(!e)throw Ir.create("no-app",{appName:t});return e}function br(t,e,n){var r;let i=(r=IN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Ds(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const RN="firebase-heartbeat-database",ON=1,ma="firebase-heartbeat-store";let df=null;function ES(){return df||(df=QO(RN,ON,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),df}async function NN(t){try{const n=(await ES()).transaction(ma),r=await n.objectStore(ma).get(SS(t));return await n.done,r}catch(e){if(e instanceof Br)Ei.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function n_(t,e){try{const r=(await ES()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,SS(t)),await r.done}catch(n){if(n instanceof Br)Ei.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(r.message)}}}function SS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const AN=1024,DN=30*24*60*60*1e3;class LN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $N(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=r_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=r_(),{heartbeatsToSend:r,unsentEntries:i}=MN(this._heartbeatsCache.heartbeats),s=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function r_(){return new Date().toISOString().substring(0,10)}function MN(t,e=AN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),i_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SO()?CO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i_(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FN(t){Ds(new wi("platform-logger",e=>new ZO(e),"PRIVATE")),Ds(new wi("heartbeat",e=>new LN(e),"PRIVATE")),br(Gh,t_,t),br(Gh,t_,"esm2017"),br("fire-js","")}FN("");function Hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jN=CS,TS=new $a("auth","Firebase",CS());/**
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
 */const zu=new Wm("@firebase/auth");function UN(t,...e){zu.logLevel<=ie.WARN&&zu.warn(`Auth (${to}): ${t}`,...e)}function jl(t,...e){zu.logLevel<=ie.ERROR&&zu.error(`Auth (${to}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw Gm(t,...e)}function pn(t,...e){return Gm(t,...e)}function zN(t,e,n){const r=Object.assign(Object.assign({},jN()),{[e]:n});return new $a("auth","Firebase",r).create(e,{appName:t.name})}function Gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TS.create(t,...e)}function z(t,e,...n){if(!t)throw Gm(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Un(t,e){t||Pn(e)}/**
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
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WN(){return s_()==="http:"||s_()==="https:"}function s_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WN()||wO()||"connection"in navigator)?navigator.onLine:!0}function VN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=zm()||hS()}get(){return BN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Km(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GN=new Fa(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,i={}){return IS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xS.fetch()(bS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function IS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HN),e);try{const i=new qN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _l(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _l(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zN(t,d,u);tn(t,d)}}catch(i){if(i instanceof Br)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ja(t,e,n,r,i={}){const s=await qn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Km(t.config,i):`${t.config.apiScheme}://${i}`}function KN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),GN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function o_(t){return t!==void 0&&t.enterprise!==void 0}class YN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function QN(t,e){return qn(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function XN(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function JN(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZN(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=qm(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(ff(i.auth_time)),issuedAtTime:jo(ff(i.iat)),expirationTime:jo(ff(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ff(t){return Number(t)*1e3}function qm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function e2(t){const e=qm(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Br&&t2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function t2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class n2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,JN(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?s2(s.providerUserInfo):[],a=i2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kS(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function r2(t){const e=yt(t);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s2(t){return t.map(e=>{var{providerId:n}=e,r=Hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function o2(t,e){const n=await IS(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a2(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await o2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function er(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZN(this,e)}reload(){return r2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,XN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:_,isAnonymous:x,providerData:S,stsTokenManager:T}=n;z(g&&T,e,"internal-error");const b=ga.fromJSON(this.name,T);z(typeof g=="string",e,"internal-error"),er(c,e.name),er(f,e.name),z(typeof _=="boolean",e,"internal-error"),z(typeof x=="boolean",e,"internal-error"),er(p,e.name),er(y,e.name),er(v,e.name),er(E,e.name),er(m,e.name),er(h,e.name);const D=new ci({uid:g,auth:e,email:f,emailVerified:_,displayName:c,isAnonymous:x,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:b,createdAt:m,lastLoginAt:h});return S&&Array.isArray(S)&&(D.providerData=S.map($=>Object.assign({},$))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wu(s),s}}/**
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
 */const a_=new Map;function Rn(t){Un(t instanceof Function,"Expected a class definition");let e=a_.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,a_.set(t,e),e)}/**
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
 */class PS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PS.type="NONE";const l_=PS;/**
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
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Rn(l_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(l_);const o=Ul(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=ci._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vs(s,e,r))}}/**
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
 */function u_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(LS(e))return"Webos";if(Ym(e))return"Safari";if((e.includes("chrome/")||OS(e))&&!e.includes("edge/"))return"Chrome";if(AS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RS(t=Je()){return/firefox\//i.test(t)}function Ym(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OS(t=Je()){return/crios\//i.test(t)}function NS(t=Je()){return/iemobile/i.test(t)}function AS(t=Je()){return/android/i.test(t)}function DS(t=Je()){return/blackberry/i.test(t)}function LS(t=Je()){return/webos/i.test(t)}function Fc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l2(t=Je()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u2(){return EO()&&document.documentMode===10}function MS(t=Je()){return Fc(t)||AS(t)||LS(t)||DS(t)||/windows phone/i.test(t)||NS(t)}function c2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $S(t,e=[]){let n;switch(t){case"Browser":n=u_(Je());break;case"Worker":n=`${u_(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class d2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function f2(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const h2=6;class p2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:h2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class m2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c_(this),this.idTokenSubscription=new c_(this),this.beforeStateQueue=new d2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f2(this),n=new p2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await a2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$S(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return yt(t)}class c_{constructor(e){this.auth=e,this.observer=null,this.addObserver=RO(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g2(t){jc=t}function FS(t){return jc.loadJS(t)}function y2(){return jc.recaptchaEnterpriseScript}function v2(){return jc.gapiScript}function _2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w2="recaptcha-enterprise",E2="NO_RECAPTCHA";class S2{constructor(e){this.type=w2,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{QN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new YN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;o_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(E2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&o_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=y2();l.length!==0&&(l+=a),FS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function d_(t,e,n,r=!1){const i=new S2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await d_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await d_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function C2(t,e){const n=Vm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ju(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function T2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function x2(t,e,n){const r=Ni(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jS(e),{host:o,port:a}=I2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||b2()}function jS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I2(t){const e=jS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:f_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:f_(o)}}}function f_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function b2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function k2(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function P2(t,e){return ja(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
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
 */async function R2(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function O2(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class ya extends Qm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,n,"signInWithPassword",P2);case"emailLink":return R2(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",k2);case"emailLink":return O2(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return ja(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const N2="http://localhost";class Si extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:N2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
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
 */function A2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D2(t){const e=bo(ko(t)).link,n=e?bo(ko(e)).deep_link_id:null,r=bo(ko(t)).deep_link_id;return(r?bo(ko(r)).link:null)||r||n||e||t}class Xm{constructor(e){var n,r,i,s,o,a;const l=bo(ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=A2((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=D2(e);try{return new Xm(n)}catch{return null}}}/**
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
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xm.parseLink(n);return z(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class US{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ua extends US{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ua{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class lr extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
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
 */class ur extends Ua{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class cr extends Ua{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function L2(t,e){return ja(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ci._fromIdTokenResponse(e,r,i),o=h_(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=h_(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function h_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bu extends Br{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function zS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function M2(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
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
 */async function $2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,zS(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=qm(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function WS(t,e,n=!1){const r="signIn",i=await zS(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function F2(t,e){return WS(Ni(t),e)}/**
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
 */async function BS(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j2(t,e,n){const r=Ni(t),o=await Qh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&BS(t),l}),a=await Ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function U2(t,e,n){return F2(yt(t),no.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BS(t),r})}/**
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
 */async function z2(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function W2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=yt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ls(r,z2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function B2(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function V2(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function H2(t){return yt(t).signOut()}const Vu="__sak";/**
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
 */class VS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vu,"1"),this.storage.removeItem(Vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function G2(){const t=Je();return Ym(t)||Fc(t)}const K2=1e3,q2=10;class HS extends VS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=G2()&&c2(),this.fallbackToPolling=MS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);u2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HS.type="LOCAL";const Y2=HS;/**
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
 */class GS extends VS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GS.type="SESSION";const KS=GS;/**
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
 */function Q2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Q2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function Jm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jm("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function J2(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function qS(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function Z2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tA(){return qS()?self:null}/**
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
 */const YS="firebaseLocalStorageDb",nA=1,Hu="firebaseLocalStorage",QS="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zc(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function rA(){const t=indexedDB.deleteDatabase(YS);return new za(t).toPromise()}function Xh(){const t=indexedDB.open(YS,nA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:QS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await rA(),e(await Xh()))})})}async function p_(t,e,n){const r=zc(t,!0).put({[QS]:e,value:n});return new za(r).toPromise()}async function iA(t,e){const n=zc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function m_(t,e){const n=zc(t,!0).delete(e);return new za(n).toPromise()}const sA=800,oA=3;class XS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(tA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z2(),!this.activeServiceWorker)return;this.sender=new X2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await p_(e,Vu,"1"),await m_(e,Vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>p_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>m_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zc(i,!1).getAll();return new za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XS.type="LOCAL";const aA=XS;new Fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function lA(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zm extends Qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uA(t){return WS(t.auth,new Zm(t),t.bypassAuthState)}function cA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),$2(n,new Zm(t),t.bypassAuthState)}async function dA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),M2(n,new Zm(t),t.bypassAuthState)}/**
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
 */class JS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uA;case"linkViaPopup":case"linkViaRedirect":return dA;case"reauthViaPopup":case"reauthViaRedirect":return cA;default:tn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fA=new Fa(2e3,1e4);class as extends JS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fA.get())};e()}}as.currentPopupAction=null;/**
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
 */const hA="pendingRedirect",zl=new Map;class pA extends JS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await mA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mA(t,e){const n=vA(e),r=yA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gA(t,e){zl.set(t._key(),e)}function yA(t){return Rn(t._redirectPersistence)}function vA(t){return Ul(hA,t.config.apiKey,t.name)}async function _A(t,e,n=!1){const r=Ni(t),i=lA(r,e),o=await new pA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wA=10*60*1e3;class EA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wA&&this.cachedEventUids.clear(),this.cachedEventUids.has(g_(e))}saveEventToCache(e){this.cachedEventUids.add(g_(e)),this.lastProcessedEventTime=Date.now()}}function g_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZS(t);default:return!1}}/**
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
 */async function CA(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const TA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function IA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CA(t);for(const n of e)try{if(bA(n))return}catch{}tn(t,"unauthorized-domain")}function bA(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xA.test(n))return!1;if(TA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const kA=new Fa(3e4,6e4);function y_(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PA(t){return new Promise((e,n)=>{var r,i,s;function o(){y_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{y_(),n(pn(t,"network-request-failed"))},timeout:kA.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=_2("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},FS(`${v2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wl=null,e})}let Wl=null;function RA(t){return Wl=Wl||PA(t),Wl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const OA=new Fa(5e3,15e3),NA="__/auth/iframe",AA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,AA):`https://${t.config.authDomain}/${NA}`,r={apiKey:e.apiKey,appName:t.name,v:to},i=LA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function $A(t){const e=await RA(t),n=mn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:MA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},OA.get());function l(){mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,UA=600,zA="_blank",WA="http://localhost";class v_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(t,e,n,r=jA,i=UA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=OS(u)?zA:n),RS(u)&&(e=e||WA,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(l2(u)&&a!=="_self")return VA(e||"",a),new v_(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new v_(c)}function VA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const HA="__/auth/handler",GA="emulator/auth/handler",KA=encodeURIComponent("fac");async function __(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:to,eventId:i};if(e instanceof US){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ua){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${KA}=${encodeURIComponent(l)}`:"";return`${qA(t)}?${eo(a).slice(1)}${u}`}function qA({config:t}){return t.emulator?Km(t,GA):`https://${t.authDomain}/${HA}`}/**
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
 */const hf="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KS,this._completeRedirectFn=_A,this._overrideRedirectResult=gA}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await __(e,n,r,Yh(),i);return BA(e,o,Jm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await __(e,n,r,Yh(),i);return J2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $A(e),r=new EA(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hf,{type:hf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hf];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MS()||Ym()||Fc()}}const QA=YA;var w_="@firebase/auth",E_="1.6.2";/**
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
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZA(t){Ds(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$S(t)},u=new m2(r,i,s,l);return T2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new wi("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new XA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(w_,E_,JA(t)),br(w_,E_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const eD=5*60,tD=fS("authIdTokenMaxAge")||eD;let S_=null;const nD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tD)return;const i=n==null?void 0:n.token;S_!==i&&(S_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wc(t=wS()){const e=Vm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C2(t,{popupRedirectResolver:QA,persistence:[aA,Y2,KS]}),r=fS("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=nD(r);V2(n,s,()=>s(n.currentUser)),B2(n,o=>s(o))}const i=cS("auth");return i&&x2(n,`http://${i}`),n}function rD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZA("Browser");let iD={data:""},sD=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||iD,oD=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,aD=/\/\*[^]*?\*\/|  +/g,C_=/\n+/g,dr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?dr(o,s):s+"{"+dr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=dr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=dr.p?dr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},En={},eC=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+eC(t[n]);return e}return t},lD=(t,e,n,r,i)=>{let s=eC(t),o=En[s]||(En[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!En[o]){let l=s!==t?t:(u=>{let d,c,f=[{}];for(;d=oD.exec(u.replace(aD,""));)d[4]?f.shift():d[3]?(c=d[3].replace(C_," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(C_," ").trim();return f[0]})(t);En[o]=dr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&En.g?En.g:null;return n&&(En.g=En[o]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(En[o],e,r,a),o},uD=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":dr(a,""):a===!1?"":a}return r+i+(o??"")},"");function Bc(t){let e=this||{},n=t.call?t(e.p):t;return lD(n.unshift?n.raw?uD(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,sD(e.target),e.g,e.o,e.k)}let tC,Jh,Zh;Bc.bind({g:1});let zn=Bc.bind({k:1});function cD(t,e,n,r){dr.p=e,tC=t,Jh=n,Zh=r}function Hr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Jh&&Jh()},a),n.o=/ *go\d+/.test(l),a.className=Bc.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Zh&&u[0]&&Zh(a),tC(u,a)}return e?e(i):i}}var dD=t=>typeof t=="function",Gu=(t,e)=>dD(t)?t(e):t,fD=(()=>{let t=0;return()=>(++t).toString()})(),nC=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),hD=20,Bl=new Map,pD=1e3,T_=t=>{if(Bl.has(t))return;let e=setTimeout(()=>{Bl.delete(t),Ai({type:4,toastId:t})},pD);Bl.set(t,e)},mD=t=>{let e=Bl.get(t);e&&clearTimeout(e)},ep=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,hD)};case 1:return e.toast.id&&mD(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?ep(t,{type:1,toast:n}):ep(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?T_(r):t.toasts.forEach(s=>{T_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Vl=[],Hl={toasts:[],pausedAt:void 0},Ai=t=>{Hl=ep(Hl,t),Vl.forEach(e=>{e(Hl)})},gD={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yD=(t={})=>{let[e,n]=w.useState(Hl);w.useEffect(()=>(Vl.push(n),()=>{let i=Vl.indexOf(n);i>-1&&Vl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||gD[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},vD=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||fD()}),Wa=t=>(e,n)=>{let r=vD(e,t,n);return Ai({type:2,toast:r}),r.id},Tt=(t,e)=>Wa("blank")(t,e);Tt.error=Wa("error");Tt.success=Wa("success");Tt.loading=Wa("loading");Tt.custom=Wa("custom");Tt.dismiss=t=>{Ai({type:3,toastId:t})};Tt.remove=t=>Ai({type:4,toastId:t});Tt.promise=(t,e,n)=>{let r=Tt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Tt.success(Gu(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Tt.error(Gu(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var _D=(t,e)=>{Ai({type:1,toast:{id:t,height:e}})},wD=()=>{Ai({type:5,time:Date.now()})},ED=t=>{let{toasts:e,pausedAt:n}=yD(t);w.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Tt.dismiss(a.id);return}return setTimeout(()=>Tt.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=w.useCallback(()=>{n&&Ai({type:6,time:Date.now()})},[n]),i=w.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),c=d.findIndex(p=>p.id===s.id),f=d.filter((p,y)=>y<c&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[f+1]:[0,f]).reduce((p,y)=>p+(y.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:_D,startPause:wD,endPause:r,calculateOffset:i}}},SD=zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,CD=zn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,TD=zn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xD=Hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${SD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${CD} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${TD} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ID=zn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,bD=Hr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ID} 1s linear infinite;
`,kD=zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,PD=zn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,RD=Hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${PD} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,OD=Hr("div")`
  position: absolute;
`,ND=Hr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,AD=zn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,DD=Hr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${AD} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,LD=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?w.createElement(DD,null,e):e:n==="blank"?null:w.createElement(ND,null,w.createElement(bD,{...r}),n!=="loading"&&w.createElement(OD,null,n==="error"?w.createElement(xD,{...r}):w.createElement(RD,{...r})))},MD=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,$D=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,FD="0%{opacity:0;} 100%{opacity:1;}",jD="0%{opacity:1;} 100%{opacity:0;}",UD=Hr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,zD=Hr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,WD=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=nC()?[FD,jD]:[MD(n),$D(n)];return{animation:e?`${zn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${zn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},BD=w.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?WD(t.position||e||"top-center",t.visible):{opacity:0},s=w.createElement(LD,{toast:t}),o=w.createElement(zD,{...t.ariaProps},Gu(t.message,t));return w.createElement(UD,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):w.createElement(w.Fragment,null,s,o))});cD(w.createElement);var VD=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=w.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return w.createElement("div",{ref:s,className:e,style:n},i)},HD=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:nC()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},GD=Bc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,wl=16,KD=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=ED(n);return w.createElement("div",{style:{position:"fixed",zIndex:9999,top:wl,left:wl,right:wl,bottom:wl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||e,c=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=HD(d,c);return w.createElement(VD,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?GD:"",style:f},u.type==="custom"?Gu(u.message,u):i?i(u):w.createElement(BD,{toast:u,position:d}))}))},eg=Tt;const rC=Ma("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=Wc();try{const a=(await j2(s,r,i)).user;return await W2(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return eg.error("Please check your data and try again"),e.rejectWithValue(o.message)}}),iC=Ma("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=Wc();try{const o=(await U2(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return eg.error("Please check your data and try again"),e.rejectWithValue(s.message)}}),sC=Ma("auth/logout",async(t,e)=>{const n=Wc();try{await H2(n)}catch(r){return e.rejectWithValue(r.message)}}),Gl=Ma("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=Wc();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),qD={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},YD=sS({name:"auth",initialState:qD,extraReducers:t=>{t.addCase(rC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(iC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(sC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(Gl.pending,e=>{e.isRefreshing=!0}).addCase(Gl.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(Gl.rejected,e=>{e.isRefreshing=!1})}}),QD=YD.reducer;var tg="persist:",ng="persist/FLUSH",Vc="persist/REHYDRATE",rg="persist/PAUSE",ig="persist/PERSIST",sg="persist/PURGE",og="persist/REGISTER",XD=-1;function Kl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kl=function(n){return typeof n}:Kl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kl(t)}function x_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function JD(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x_(n,!0).forEach(function(r){ZD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ZD(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eL(t,e,n,r){r.debug;var i=JD({},n);return t&&Kl(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function tL(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:tg).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(x){return x}:typeof t.serialize=="function"?a=t.serialize:a=nL;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,y=function(x){Object.keys(x).forEach(function(S){m(S)&&u[S]!==x[S]&&c.indexOf(S)===-1&&c.push(S)}),Object.keys(u).forEach(function(S){x[S]===void 0&&m(S)&&c.indexOf(S)===-1&&u[S]!==void 0&&c.push(S)}),f===null&&(f=setInterval(v,i)),u=x};function v(){if(c.length===0){f&&clearInterval(f),f=null;return}var _=c.shift(),x=r.reduce(function(S,T){return T.in(S,_,u)},u[_]);if(x!==void 0)try{d[_]=a(x)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete d[_];c.length===0&&E()}function E(){Object.keys(d).forEach(function(_){u[_]===void 0&&delete d[_]}),p=o.setItem(s,a(d)).catch(h)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||e&&e.indexOf(_)!==-1)}function h(_){l&&l(_)}var g=function(){for(;c.length!==0;)v();return p||Promise.resolve()};return{update:y,flush:g}}function nL(t){return JSON.stringify(t)}function rL(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:tg).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=iL,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function iL(t){return JSON.parse(t)}function sL(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:tg).concat(t.key);return e.removeItem(n,oL)}function oL(t){}function I_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Sn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I_(n,!0).forEach(function(r){aL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lL(t,e){if(t==null)return{};var n=uL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function uL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var cL=5e3;function b_(t,e){var n=t.version!==void 0?t.version:XD;t.debug;var r=t.stateReconciler===void 0?eL:t.stateReconciler,i=t.getStoredState||rL,s=t.timeout!==void 0?t.timeout:cL,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,y=lL(f,["_persist"]),v=y;if(c.type===ig){var E=!1,m=function(b,D){E||(c.rehydrate(t.key,b,D),E=!0)};if(s&&setTimeout(function(){!E&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=tL(t)),p)return Sn({},e(v,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(T){var b=t.migrate||function(D,$){return Promise.resolve(D)};b(T,n).then(function(D){m(D)},function(D){m(void 0,D)})},function(T){m(void 0,T)}),Sn({},e(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===sg)return a=!0,c.result(sL(t)),Sn({},e(v,c),{_persist:p});if(c.type===ng)return c.result(o&&o.flush()),Sn({},e(v,c),{_persist:p});if(c.type===rg)l=!0;else if(c.type===Vc){if(a)return Sn({},v,{_persist:Sn({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(v,c),g=c.payload,_=r!==!1&&g!==void 0?r(g,d,h,t):h,x=Sn({},_,{_persist:Sn({},p,{rehydrated:!0})});return u(x)}}}if(!p)return e(d,c);var S=e(v,c);return S===v?d:u(Sn({},S,{_persist:p}))}}function k_(t){return hL(t)||fL(t)||dL()}function dL(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function fL(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function hL(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function P_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P_(n,!0).forEach(function(r){pL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var oC={registry:[],bootstrapped:!1},mL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case og:return tp({},e,{registry:[].concat(k_(e.registry),[n.key])});case Vc:var r=e.registry.indexOf(n.key),i=k_(e.registry);return i.splice(r,1),tp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function gL(t,e,n){var r=n||!1,i=Am(mL,oC,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:og,key:u})},o=function(u,d,c){var f={type:Vc,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=tp({},i,{purge:function(){var u=[];return t.dispatch({type:sg,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:ng,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:rg})},persist:function(){t.dispatch({type:ig,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var ag={},lg={};lg.__esModule=!0;lg.default=_L;function ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(t)}function pf(){}var yL={getItem:pf,setItem:pf,removeItem:pf};function vL(t){if((typeof self>"u"?"undefined":ql(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function _L(t){var e="".concat(t,"Storage");return vL(e)?self[e]:yL}ag.__esModule=!0;ag.default=SL;var wL=EL(lg);function EL(t){return t&&t.__esModule?t:{default:t}}function SL(t){var e=(0,wL.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var ug=void 0,CL=TL(ag);function TL(t){return t&&t.__esModule?t:{default:t}}var xL=(0,CL.default)("local");ug=xL;var R_={};const O_="@firebase/database",N_="1.0.3";/**
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
 */let aC="";function IL(t){aC=t}/**
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
 */class bL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bL(e)}}catch{}return new kL},si=lC("localStorage"),np=lC("sessionStorage");/**
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
 */const ws=new Wm("@firebase/database"),PL=function(){let t=1;return function(){return t++}}(),uC=function(t){const e=AO(t),n=new PO;n.update(e);const r=n.digest();return Fm.encodeByteArray(r)},Ba=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ba.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let di=null,A_=!0;const RL=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ws.logLevel=ie.VERBOSE,di=ws.log.bind(ws),e&&np.set("logging_enabled",!0)):typeof t=="function"?di=t:(di=null,np.remove("logging_enabled"))},Ye=function(...t){if(A_===!0&&(A_=!1,di===null&&np.get("logging_enabled")===!0&&RL(!0)),di){const e=Ba.apply(null,t);di(e)}},Va=function(t){return function(...e){Ye(t,...e)}},rp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ba(...t);ws.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ba(...t)}`;throw ws.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ba(...t);ws.warn(e)},OL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ms="[MIN_NAME]",Ti="[MAX_NAME]",ro=function(t,e){if(t===e)return 0;if(t===Ms||e===Ti)return-1;if(e===Ms||t===Ti)return 1;{const n=D_(t),r=D_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},AL=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},cg=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=cg(t[e[r]]);return n+="}",n},dC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fC=function(t){P(!cC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},DL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ML(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $L=new RegExp("^-?(0*)\\d{1,10}$"),FL=-2147483648,jL=2147483647,D_=function(t){if($L.test(t)){const e=Number(t);if(e>=FL&&e<=jL)return e}return null},Ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},UL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class zL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class Es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Es.OWNER="owner";/**
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
 */const dg="5",hC="v",pC="s",mC="r",gC="f",yC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vC="ls",_C="p",ip="ac",wC="websocket",EC="long_polling";/**
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
 */class SC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function CC(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===wC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===EC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BL(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class VL{constructor(){this.counters_={}}incrementCounter(e,n=1){Kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fO(this.counters_)}}/**
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
 */const mf={},gf={};function fg(t){const e=t.toString();return mf[e]||(mf[e]=new VL),mf[e]}function HL(t,e){const n=t.toString();return gf[n]||(gf[n]=e()),gf[n]}/**
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
 */class GL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ha(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const L_="start",KL="close",qL="pLPCommand",YL="pRTLPCB",TC="id",xC="pw",IC="ser",QL="cb",XL="seg",JL="ts",ZL="d",eM="dframe",bC=1870,kC=30,tM=bC-kC,nM=25e3,rM=3e4;class ls{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Va(e),this.stats_=fg(n),this.urlFn=l=>(this.appCheckToken&&(l[ip]=this.appCheckToken),CC(n,EC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rM)),NL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hg((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===L_)this.id=a,this.password=l;else if(o===KL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[L_]="t",r[IC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[QL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[hC]=dg,this.transportSessionId&&(r[pC]=this.transportSessionId),this.lastSessionId&&(r[vC]=this.lastSessionId),this.applicationId&&(r[_C]=this.applicationId),this.appCheckToken&&(r[ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&yC.test(location.hostname)&&(r[mC]=gC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DL()&&!LL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lS(n),i=dC(r,tM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eM]="t",r[TC]=e,r[xC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PL(),window[qL+this.uniqueCallbackIdentifier]=e,window[YL+this.uniqueCallbackIdentifier]=n,this.myIFrame=hg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[TC]=this.myID,e[xC]=this.myPW,e[IC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kC+r.length<=bC;){const o=this.pendingSegs.shift();r=r+"&"+XL+i+"="+o.seg+"&"+JL+i+"="+o.ts+"&"+ZL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(nM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const iM=16384,sM=45e3;let Ku=null;typeof MozWebSocket<"u"?Ku=MozWebSocket:typeof WebSocket<"u"&&(Ku=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Va(this.connId),this.stats_=fg(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[hC]=dg,typeof location<"u"&&location.hostname&&yC.test(location.hostname)&&(o[mC]=gC),n&&(o[pC]=n),r&&(o[vC]=r),i&&(o[ip]=i),s&&(o[_C]=s),CC(e,wC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let r;pS(),this.mySock=new Ku(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ku!==null&&!Kt.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=pa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dC(n,iM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
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
 */class va{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of va.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);va.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}va.globalTransportInitialized_=!1;/**
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
 */const oM=6e4,aM=5e3,lM=10*1024,uM=100*1024,yf="t",M_="d",cM="s",$_="r",dM="e",F_="o",j_="a",U_="n",z_="p",fM="h";class hM{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Va("c:"+this.id+":"),this.transportManager_=new va(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yf in e){const n=e[yf];n===j_?this.upgradeIfSecondaryHealthy_():n===$_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===F_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),r=go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:j_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:U_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),r=go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(yf,e);if(M_ in e){const r=e[M_];if(n===fM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===U_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cM?this.onConnectionShutdown_(r):n===$_?this.onReset_(r):n===dM?rp("Server Error: "+r):n===F_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dg!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class PC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class RC{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qu extends RC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qu}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const W_=32,B_=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function OC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function NC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function AC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return nt(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function DC(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mM{constructor(e,n){this.errorPrefix_=n,this.parts_=NC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$c(this.parts_[r]);LC(this)}}function gM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$c(e),LC(t)}function yM(t){const e=t.parts_.pop();t.byteLength_-=$c(e),t.parts_.length>0&&(t.byteLength_-=1)}function LC(t){if(t.byteLength_>B_)throw new Error(t.errorPrefix_+"has a key path longer than "+B_+" bytes ("+t.byteLength_+").");if(t.parts_.length>W_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+W_+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class pg extends RC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pg}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yo=1e3,vM=60*5*1e3,V_=30*1e3,_M=1.3,wM=3e4,EM="server_kill",H_=3;class Dn extends PC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dn.nextPersistentConnectionId_++,this.log_=Va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=vM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Um,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Dn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kn(e,"w")){const r=As(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=V_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rp("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wM&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_M)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new hM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(EM)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&It(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bh(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>cg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=H_&&(this.reconnectDelay_=V_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=H_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+aC.replace(/\./g,"-")]=1,zm()?e["framework.cordova"]=1:hS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qu.getInstance().currentlyOnline();return Bh(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
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
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
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
 */class Hc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Ms,e),i=new H(Ms,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let El;class MC extends Hc{static get __EMPTY_NODE(){return El}static set __EMPTY_NODE(e){El=e}compare(e,n){return ro(e.name,n.name)}isDefinedOn(e){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ti,El)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,El)}toString(){return".key"}}const Ss=new MC;/**
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
 */class Sl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??dt.EMPTY_NODE,this.right=s??dt.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class SM{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dt{constructor(e,n=dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}dt.EMPTY_NODE=new SM;/**
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
 */function CM(t,e){return ro(t.name,e.name)}function mg(t,e){return ro(t,e)}/**
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
 */let sp;function TM(t){sp=t}const $C=function(t){return typeof t=="number"?"number:"+fC(t):"string:"+t},FC=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kn(e,".sv"),"Priority must be a string or number.")}else P(t===sp||t.isEmpty(),"priority of unexpected type.");P(t===sp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let G_;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FC(this.priorityNode_)}static set __childrenNodeConstructor(e){G_=e}static get __childrenNodeConstructor(){return G_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$C(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fC(this.value_):e+=this.value_,this.lazyHash_=uC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let jC,UC;function xM(t){jC=t}function IM(t){UC=t}class bM extends Hc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ro(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ti,new Ne("[PRIORITY-POST]",UC))}makePost(e,n){const r=jC(e);return new H(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new bM;/**
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
 */const kM=Math.log(2);class PM{constructor(e){const n=s=>parseInt(Math.log(s)/kM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new De(f,c.node,De.BLACK,null,null);{const p=parseInt(d/2,10)+l,y=i(l,p),v=i(p+1,u);return c=t[p],f=n?n(c):c,new De(f,c.node,De.BLACK,y,v)}},s=function(l){let u=null,d=null,c=t.length;const f=function(y,v){const E=c-y,m=c;c-=y;const h=i(E+1,m),g=t[E],_=n?n(g):g;p(new De(_,g.node,v,null,h))},p=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(y+1));v?f(E,De.BLACK):(f(E,De.BLACK),f(E,De.RED))}return d},o=new PM(t.length),a=s(o);return new dt(r||e,a)};/**
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
 */let vf;const Hi={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Hi&&Se,"ChildrenNode.ts has not been loaded"),vf=vf||new On({".priority":Hi},{".priority":Se}),vf}get(e){const n=As(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dt?n:null}hasIndex(e){return Kn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Yu(r,e.getCompare()):a=Hi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new On(d,u)}addToIndexes(e,n){const r=Fu(this.indexes_,(i,s)=>{const o=As(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Hi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Yu(a,o.getCompare())}else return Hi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=Fu(this.indexes_,i=>{if(i===Hi)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new On(r,this.indexSet_)}}/**
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
 */let vo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FC(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vo||(vo=new j(new dt(mg),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vo:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{P(q(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$C(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":uC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ga?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RM extends j{constructor(){super(new dt(mg),j.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ga=new RM;Object.defineProperties(H,{MIN:{value:new H(Ms,j.EMPTY_NODE)},MAX:{value:new H(Ti,Ga)}});MC.__EMPTY_NODE=j.EMPTY_NODE;Ne.__childrenNodeConstructor=j;TM(Ga);IM(Ga);/**
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
 */const OM=!0;function We(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,We(e))}if(!(t instanceof Array)&&OM){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Yu(n,CM,o=>o.name,mg);if(r){const o=Yu(n,Se.getCompare());return new j(s,We(e),new On({".priority":o},{".priority":Se}))}else return new j(s,We(e),On.Default)}else{let n=j.EMPTY_NODE;return gt(t,(r,i)=>{if(Kn(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}xM(We);/**
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
 */class NM extends Hc{constructor(e){super(),this.indexPath_=e,P(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ro(e.name,n.name):s}makePost(e,n){const r=We(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ga);return new H(Ti,e)}toString(){return NC(this.indexPath_,0).join("/")}}/**
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
 */class AM extends Hc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ro(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=We(e);return new H(n,r)}toString(){return".value"}}const DM=new AM;/**
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
 */function zC(t){return{type:"value",snapshotNode:t}}function $s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _a(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_a(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($s(n,r)):o.trackChildChange(wa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(_a(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(wa(i,s,o))}else r.trackChildChange($s(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ea{constructor(e){this.indexedFilter_=new gg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ea.getStartPost_(e),this.endPost_=Ea.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class MM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ea(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(wa(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_a(n,c));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange($s(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(_a(u.name,u.node)),s.trackChildChange($s(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class yg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ms}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new yg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $M(t){return t.loadsAllData()?new gg(t.getIndex()):t.hasLimit()?new MM(t):new Ea(t)}function K_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===DM?n="$value":t.index_===Ss?n="$key":(P(t.index_ instanceof NM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function q_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class Qu extends PC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Va("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Qu.getListenId_(e,r),a={};this.listens_[o]=a;const l=K_(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),As(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Qu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=K_(e._queryParams),r=e._path.toString(),i=new Um;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pa(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class FM{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xu(){return{value:null,children:new Map}}function WC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Xu());const i=t.children.get(r);e=ae(e),WC(i,e,n)}}function op(t,e,n){t.value!==null?n(e,t.value):jM(t,(r,i)=>{const s=new se(e.toString()+"/"+r);op(i,s,n)})}function jM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class UM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Y_=10*1e3,zM=30*1e3,WM=5*60*1e3;class BM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UM(e);const r=Y_+(zM-Y_)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&Kn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*WM))}}/**
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
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function BC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _g(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ju{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=BC()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Ju(J(),n,this.revert)}}else return P(q(this.path)===e,"operationForChild called for unrelated child."),new Ju(ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Sa{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Sa(this.source,J()):new Sa(this.source,ae(this.path))}}/**
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
 */class xi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return G(this.path)?new xi(this.source,J(),this.snap.getImmediateChild(e)):new xi(this.source,ae(this.path),this.snap)}}/**
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
 */class Ca{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new xi(this.source,J(),n.value):new Ca(this.source,J(),n)}else return P(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ca(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class VM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LM(o.childName,o.snapshotNode))}),_o(t,i,"child_removed",e,r,n),_o(t,i,"child_added",e,r,n),_o(t,i,"child_moved",s,r,n),_o(t,i,"child_changed",e,r,n),_o(t,i,"value",e,r,n),i}function _o(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>KM(t,a,l)),o.forEach(a=>{const l=GM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function GM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KM(t,e,n){if(e.childName==null||n.childName==null)throw Zs("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Gc(t,e){return{eventCache:t,serverCache:e}}function zo(t,e,n,r){return Gc(new $r(e,n,r),t.serverCache)}function VC(t,e,n,r){return Gc(t.eventCache,new $r(e,n,r))}function Zu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let _f;const qM=()=>(_f||(_f=new dt(AL)),_f);class fe{constructor(e,n=qM()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return gt(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),n);return s!=null?{path:Pe(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ae(e)):new fe(null)}}set(e,n){if(G(e))return new fe(n,this.children);{const r=q(e),s=(this.children.get(r)||new fe(null)).set(ae(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ae(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new fe(null)).setTree(ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ae(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),Pe(n,i),r):new fe(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new fe(null))}}function Wo(t,e,n){if(G(e))return new Jt(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nt(i,e);return s=s.updateChild(o,n),new Jt(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new Jt(s)}}}function Q_(t,e,n){let r=t;return gt(n,(i,s)=>{r=Wo(r,Pe(e,i),s)}),r}function X_(t,e){if(G(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new Jt(n)}}function ap(t,e){return Di(t,e)!=null}function Di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function J_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function kr(t,e){if(G(e))return t;{const n=Di(t,e);return n!=null?new Jt(new fe(n)):new Jt(t.writeTree_.subtree(e))}}function lp(t){return t.writeTree_.isEmpty()}function Fs(t,e){return HC(J(),t.writeTree_,e)}function HC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=HC(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
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
 */function Kc(t,e){return YC(e,t)}function YM(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wo(t.visibleWrites,e,n)),t.lastWriteId=r}function QM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JM(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ZM(t),!0;if(r.snap)t.visibleWrites=X_(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=X_(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function JM(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Pe(t.path,n),e))return!0;return!1}function ZM(t){t.visibleWrites=GC(t.allWrites,e$,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function e$(t){return t.visible}function GC(t,e,n){let r=Jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=nt(n,o),r=Wo(r,a,s.snap)):qt(o,n)&&(a=nt(o,n),r=Wo(r,J(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=nt(n,o),r=Q_(r,a,s.children);else if(qt(o,n))if(a=nt(o,n),G(a))r=Q_(r,J(),s.children);else{const l=As(s.children,q(a));if(l){const u=l.getChild(ae(a));r=Wo(r,J(),u)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function KC(t,e,n,r,i){if(!r&&!i){const s=Di(t.visibleWrites,e);if(s!=null)return s;{const o=kr(t.visibleWrites,e);if(lp(o))return n;if(n==null&&!ap(o,J()))return null;{const a=n||j.EMPTY_NODE;return Fs(o,a)}}}else{const s=kr(t.visibleWrites,e);if(!i&&lp(s))return n;if(!i&&n==null&&!ap(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=GC(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Fs(a,l)}}}function t$(t,e,n){let r=j.EMPTY_NODE;const i=Di(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Fs(kr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),J_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kr(t.visibleWrites,e);return J_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function n$(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(ap(t.visibleWrites,s))return null;{const o=kr(t.visibleWrites,s);return lp(o)?i.getChild(n):Fs(o,i.getChild(n))}}function r$(t,e,n,r){const i=Pe(e,n),s=Di(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,i);return Fs(o,r.getNode().getImmediateChild(n))}else return null}function i$(t,e){return Di(t.visibleWrites,e)}function s$(t,e,n,r,i,s,o){let a;const l=kr(t.visibleWrites,e),u=Di(l,J());if(u!=null)a=u;else if(n!=null)a=Fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function o$(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function ec(t,e,n,r){return KC(t.writeTree,t.treePath,e,n,r)}function wg(t,e){return t$(t.writeTree,t.treePath,e)}function Z_(t,e,n,r){return n$(t.writeTree,t.treePath,e,n,r)}function tc(t,e){return i$(t.writeTree,Pe(t.treePath,e))}function a$(t,e,n,r,i,s){return s$(t.writeTree,t.treePath,e,n,r,i,s)}function Eg(t,e,n){return r$(t.writeTree,t.treePath,e,n)}function qC(t,e){return YC(Pe(t.treePath,e),t.writeTree)}function YC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class l${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_a(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$s(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wa(r,e.snapshotNode,i.oldSnap));else throw Zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class u${getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const QC=new u$;class Sg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Eg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ii(this.viewCache_),s=a$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function c$(t){return{filter:t}}function d$(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function f$(t,e,n,r,i){const s=new l$;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=up(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=nc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=p$(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=cp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=y$(t,e,u.path,r,i,s):o=m$(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=g$(t,e,n.path,r,s);else throw Zs("Unknown operation type: "+n.type);const l=s.getChanges();return h$(e,o,l),{viewCache:o,changes:l}}function h$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(zC(Zu(e)))}}function XC(t,e,n,r,i,s){const o=e.eventCache;if(tc(r,n)!=null)return e;{let a,l;if(G(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ii(e),d=u instanceof j?u:j.EMPTY_NODE,c=wg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ec(r,Ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){P(Mr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Z_(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ae(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Z_(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Eg(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return zo(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function nc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=q(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const y=ae(n),E=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),p,E,y,QC,null)}const c=VC(e,u,l.isFullyInitialized()||G(n),d.filtersNodes()),f=new Sg(i,c,s);return XC(t,c,n,i,f,a)}function up(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Sg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=zo(e,u,!0,t.filter.filtersNodes());else{const c=q(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=zo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ae(n),p=a.getNode().getImmediateChild(c);let y;if(G(f))y=r;else{const v=d.getCompleteChild(c);v!=null?OC(f)===".priority"&&v.getChild(AC(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=j.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),c,y,f,d,o);l=zo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function e0(t,e){return t.eventCache.isCompleteForChild(e)}function p$(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Pe(n,l);e0(e,q(d))&&(a=up(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Pe(n,l);e0(e,q(d))||(a=up(t,a,d,u,i,s,o))}),a}function t0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function cp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new fe(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),y=t0(t,p,f);l=nc(t,l,new se(c),y,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const y=e.serverCache.getNode().getImmediateChild(c),v=t0(t,y,f);l=nc(t,l,new se(c),v,i,s,o,a)}}),l}function m$(t,e,n,r,i,s,o){if(tc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new fe(null);return l.getNode().forEachChild(Ss,(d,c)=>{u=u.set(new se(d),c)}),cp(t,e,n,u,i,s,a,o)}else return e}else{let u=new fe(null);return r.foreach((d,c)=>{const f=Pe(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),cp(t,e,n,u,i,s,a,o)}}function g$(t,e,n,r,i){const s=e.serverCache,o=VC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return XC(t,o,n,r,QC,i)}function y$(t,e,n,r,i,s){let o;if(tc(r,n)!=null)return e;{const a=new Sg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ec(r,Ii(e));else{const c=e.serverCache.getNode();P(c instanceof j,"serverChildren would be complete if leaf node"),d=wg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=q(n);let c=Eg(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ae(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,j.EMPTY_NODE,ae(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ec(r,Ii(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||tc(r,J())!=null,zo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class v${constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gg(r.getIndex()),s=$M(r);this.processor_=c$(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new $r(l,o.isFullyInitialized(),i.filtersNodes()),c=new $r(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gc(c,d),this.eventGenerator_=new VM(this.query_)}get query(){return this.query_}}function _$(t){return t.viewCache_.serverCache.getNode()}function w$(t){return Zu(t.viewCache_)}function E$(t,e){const n=Ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function n0(t){return t.eventRegistrations_.length===0}function S$(t,e){t.eventRegistrations_.push(e)}function r0(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function i0(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(P(Ii(t.viewCache_),"We should always have a full cache before handling merges"),P(Zu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=f$(t.processor_,i,e,n,r);return d$(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,JC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function C$(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push($s(s,o))}),n.isFullyInitialized()&&r.push(zC(n.getNode())),JC(t,r,n.getNode(),e)}function JC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HM(t.eventGenerator_,e,n,i)}/**
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
 */let rc;class ZC{constructor(){this.views=new Map}}function T$(t){P(!rc,"__referenceConstructor has already been defined"),rc=t}function x$(){return P(rc,"Reference.ts has not been loaded"),rc}function I$(t){return t.views.size===0}function Cg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),i0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(i0(o,e,n,r));return s}}function eT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ec(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=wg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=Gc(new $r(a,l,!1),new $r(r,i,!1));return new v$(e,u)}return o}function b$(t,e,n,r,i,s){const o=eT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),S$(o,n),C$(o,n)}function k$(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(r0(u,n,r)),n0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(r0(l,n,r)),n0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fr(t)&&s.push(new(x$())(e._repo,e._path)),{removed:s,events:o}}function tT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||E$(r,e);return n}function nT(t,e){if(e._queryParams.loadsAllData())return qc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rT(t,e){return nT(t,e)!=null}function Fr(t){return qc(t)!=null}function qc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ic;function P$(t){P(!ic,"__referenceConstructor has already been defined"),ic=t}function R$(){return P(ic,"Reference.ts has not been loaded"),ic}let O$=1;class s0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=o$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function N$(t,e,n,r,i){return YM(t.pendingWriteTree_,e,n,r,i),i?qa(t,new xi(BC(),e,n)):[]}function us(t,e,n=!1){const r=QM(t.pendingWriteTree_,e);if(XM(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(J(),!0):gt(r.children,o=>{s=s.set(new se(o),!0)}),qa(t,new Ju(r.path,s,n))}else return[]}function Ka(t,e,n){return qa(t,new xi(vg(),e,n))}function A$(t,e,n){const r=fe.fromObject(n);return qa(t,new Ca(vg(),e,r))}function D$(t,e){return qa(t,new Sa(vg(),e))}function L$(t,e,n){const r=Tg(t,n);if(r){const i=xg(r),s=i.path,o=i.queryId,a=nt(s,e),l=new Sa(_g(o),a);return Ig(t,s,l)}else return[]}function iT(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||rT(o,e))){const l=k$(o,e,n,r);I$(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>Fr(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=j$(f);for(let y=0;y<p.length;++y){const v=p[y],E=v.query,m=uT(t,v);t.listenProvider_.startListening(Bo(E),Ta(t,E),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Bo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Yc(f));t.listenProvider_.stopListening(Bo(f),p)}))}U$(t,u)}return a}function sT(t,e,n,r){const i=Tg(t,r);if(i!=null){const s=xg(i),o=s.path,a=s.queryId,l=nt(o,e),u=new xi(_g(a),l,n);return Ig(t,o,u)}else return[]}function M$(t,e,n,r){const i=Tg(t,r);if(i){const s=xg(i),o=s.path,a=s.queryId,l=nt(o,e),u=fe.fromObject(n),d=new Ca(_g(a),l,u);return Ig(t,o,d)}else return[]}function $$(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const y=nt(f,i);s=s||Pr(p,y),o=o||Fr(p)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||Pr(a,J())):(a=new ZC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=Pr(y,J());v&&(s=s.updateImmediateChild(p,v))}));const u=rT(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Yc(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=z$();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=Kc(t.pendingWriteTree_,i);let c=b$(a,e,n,d,s,l);if(!u&&!o&&!r){const f=nT(a,e);c=c.concat(W$(t,e,f))}return c}function oT(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),u=Pr(a,l);if(u)return u});return KC(i,e,s,n,!0)}function F$(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=nt(u,n);r=r||Pr(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Pr(i,J()):(i=new ZC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=Kc(t.pendingWriteTree_,e._path),l=eT(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return w$(l)}function qa(t,e){return aT(e,t.syncPointTree_,null,Kc(t.pendingWriteTree_,J()))}function aT(t,e,n,r){if(G(t.path))return lT(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Pr(i,J()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=qC(r,o);s=s.concat(aT(a,l,u,d))}return i&&(s=s.concat(Cg(i,t,r,n))),s}}function lT(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Pr(i,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=qC(r,o),d=t.operationForChild(o);d&&(s=s.concat(lT(d,a,l,u)))}),i&&(s=s.concat(Cg(i,t,r,n))),s}function uT(t,e){const n=e.query,r=Ta(t,n);return{hashFn:()=>(_$(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?L$(t,n._path,r):D$(t,n._path);{const s=ML(i,n);return iT(t,n,null,s)}}}}function Ta(t,e){const n=Yc(e);return t.queryToTagMap.get(n)}function Yc(t){return t._path.toString()+"$"+t._queryIdentifier}function Tg(t,e){return t.tagToQueryMap.get(e)}function xg(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ig(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Kc(t.pendingWriteTree_,e);return Cg(r,n,i,null)}function j$(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[qc(n)];{let i=[];return n&&(i=tT(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Bo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(R$())(t._repo,t._path):t}function U$(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Yc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function z$(){return O$++}function W$(t,e,n){const r=e._path,i=Ta(t,e),s=uT(t,n),o=t.listenProvider_.startListening(Bo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!G(u)&&d&&Fr(d))return[qc(d).query];{let f=[];return d&&(f=f.concat(tT(d).map(p=>p.query))),gt(c,(p,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Bo(d),Ta(t,d))}}return o}/**
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
 */class bg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bg(n)}node(){return this.node_}}class kg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new kg(this.syncTree_,n)}node(){return oT(this.syncTree_,this.path_)}}const B$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},o0=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return V$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return H$(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},V$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},H$=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},G$=function(t,e,n,r){return Pg(e,new kg(n,t),r)},K$=function(t,e,n){return Pg(t,new bg(e),n)};function Pg(t,e,n){const r=t.getPriority().val(),i=o0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=o0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(Se,(a,l)=>{const u=Pg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Rg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Og(t,e){let n=e instanceof se?e:new se(e),r=t,i=q(n);for(;i!==null;){const s=As(r.node.children,i)||{children:{},childCount:0};r=new Rg(i,r,s),n=ae(n),i=q(n)}return r}function io(t){return t.node.value}function cT(t,e){t.node.value=e,dp(t)}function dT(t){return t.node.childCount>0}function q$(t){return io(t)===void 0&&!dT(t)}function Qc(t,e){gt(t.node.children,(n,r)=>{e(new Rg(n,t,r))})}function fT(t,e,n,r){n&&!r&&e(t),Qc(t,i=>{fT(i,e,!0,r)}),n&&r&&e(t)}function Y$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ya(t){return new se(t.parent===null?t.name:Ya(t.parent)+"/"+t.name)}function dp(t){t.parent!==null&&Q$(t.parent,t.name,t)}function Q$(t,e,n){const r=q$(n),i=Kn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,dp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dp(t))}/**
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
 */const X$=/[\[\].#$\/\u0000-\u001F\u007F]/,J$=/[\[\].#$\u0000-\u001F\u007F]/,wf=10*1024*1024,hT=function(t){return typeof t=="string"&&t.length!==0&&!X$.test(t)},pT=function(t){return typeof t=="string"&&t.length!==0&&!J$.test(t)},Z$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pT(t)},mT=function(t,e,n){const r=n instanceof se?new mM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(cC(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>wf/3&&$c(e)>wf)throw new Error(t+"contains a string greater than "+wf+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!hT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gM(r,o),mT(t,a,r),yM(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},gT=function(t,e,n,r){if(!(r&&n===void 0)&&!pT(n))throw new Error(gS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gT(t,e,n,r)},tF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Z$(n))throw new Error(gS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rF(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!DC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gr(t,e,n){rF(t,n),iF(t,r=>qt(r,e)||qt(e,r))}function iF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();di&&Ye("event: "+n.toString()),Ha(r)}}}/**
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
 */const oF="repo_interrupt",aF=25;class lF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xu(),this.transactionQueueTree_=new Rg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uF(t,e,n){if(t.stats_=fg(t.repoInfo_),t.forceRestClient_||UL())t.server_=new Qu(t.repoInfo_,(r,i,s,o)=>{a0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>l0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dn(t.repoInfo_,e,(r,i,s,o)=>{a0(t,r,i,s,o)},r=>{l0(t,r)},r=>{dF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HL(t.repoInfo_,()=>new BM(t.stats_,t.server_)),t.infoData_=new FM,t.infoSyncTree_=new s0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ka(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ng(t,"connected",!1),t.serverSyncTree_=new s0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Gr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cF(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yT(t){return B$({timestamp:cF(t)})}function a0(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Fu(n,u=>We(u));o=M$(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=sT(t.serverSyncTree_,s,l,i)}else if(r){const l=Fu(n,u=>We(u));o=A$(t.serverSyncTree_,s,l)}else{const l=We(n);o=Ka(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Lg(t,s)),Gr(t.eventQueue_,a,o)}function l0(t,e){Ng(t,"connected",e),e===!1&&pF(t)}function dF(t,e){gt(e,(n,r)=>{Ng(t,n,r)})}function Ng(t,e,n){const r=new se("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=Ka(t.infoSyncTree_,r,i);Gr(t.eventQueue_,r,s)}function fF(t){return t.nextWriteId_++}function hF(t,e,n){const r=F$(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=We(i).withIndex(e._queryParams.getIndex());$$(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ka(t.serverSyncTree_,e._path,s);else{const a=Ta(t.serverSyncTree_,e);o=sT(t.serverSyncTree_,e._path,s,a)}return Gr(t.eventQueue_,e._path,o),iT(t.serverSyncTree_,e,n,null,!0),s},i=>(Ag(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function pF(t){Ag(t,"onDisconnectEvents");const e=yT(t),n=Xu();op(t.onDisconnect_,J(),(i,s)=>{const o=G$(i,s,t.serverSyncTree_,e);WC(n,i,o)});let r=[];op(n,J(),(i,s)=>{r=r.concat(Ka(t.serverSyncTree_,i,s));const o=vF(t,i);Lg(t,o)}),t.onDisconnect_=Xu(),Gr(t.eventQueue_,J(),r)}function mF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oF)}function Ag(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function vT(t,e,n){return oT(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Dg(t,e=t.transactionQueueTree_){if(e||Xc(t,e),io(e)){const n=wT(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gF(t,Ya(e),n)}else dT(e)&&Qc(e,n=>{Dg(t,n)})}function gF(t,e,n){const r=n.map(u=>u.currentWriteId),i=vT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=nt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ag(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(us(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Xc(t,Og(t.transactionQueueTree_,e)),Dg(t,t.transactionQueueTree_),Gr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Ha(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Lg(t,e)}},o)}function Lg(t,e){const n=_T(t,e),r=Ya(n),i=wT(t,n);return yF(t,i,r),r}function yF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=nt(n,l.path);let d=!1,c;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aF)d=!0,c="maxretry",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else{const f=vT(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){mT("transaction failed: Data returned ",p,l.path);let y=We(p);typeof p=="object"&&p!=null&&Kn(p,".priority")||(y=y.updatePriority(f.getPriority()));const E=l.currentWriteId,m=yT(t),h=K$(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=fF(t),o.splice(o.indexOf(E),1),i=i.concat(N$(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(us(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0))}Gr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Xc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ha(r[a]);Dg(t,t.transactionQueueTree_)}function _T(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&io(r)===void 0;)r=Og(r,n),e=ae(e),n=q(e);return r}function wT(t,e){const n=[];return ET(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ET(t,e,n){const r=io(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qc(e,i=>{ET(t,i,n)})}function Xc(t,e){const n=io(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,cT(e,n.length>0?n:void 0)}Qc(e,r=>{Xc(t,r)})}function vF(t,e){const n=Ya(_T(t,e)),r=Og(t.transactionQueueTree_,e);return Y$(r,i=>{Ef(t,i)}),Ef(t,r),fT(r,i=>{Ef(t,i)}),n}function Ef(t,e){const n=io(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?cT(e,void 0):n.length=s+1,Gr(t.eventQueue_,Ya(e),i);for(let o=0;o<r.length;o++)Ha(r[o])}}/**
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
 */function _F(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const u0=function(t,e){const n=EF(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},EF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=_F(t.substring(d,c)));const f=wF(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class SF{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class CF{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class TF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Mg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:OC(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=q_(this._queryParams),n=cg(e);return n==="{}"?"default":n}get _queryObject(){return q_(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Mg))return!1;const n=this._repo===e._repo,r=DC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pM(this._path)}}class Yn extends Mg{constructor(e,n){super(e,n,new yg,!1)}get parent(){const e=AC(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=fp(this.ref,e);return new xa(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xa(i,fp(this.ref,r),Se)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xF(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?fp(t._root,e):t._root}function fp(t,e){return t=yt(t),q(t._path)===null?eF("child","path",e,!1):gT("child","path",e,!1),new Yn(t._repo,Pe(t._path,e))}function IF(t){t=yt(t);const e=new TF(()=>{}),n=new $g(e);return hF(t._repo,t,n).then(r=>new xa(r,new Yn(t._repo,t._path),t._queryParams.getIndex()))}class $g{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new SF("value",this,new xa(e.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CF(this,e,n):null}matches(e){return e instanceof $g?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}T$(Yn);P$(Yn);/**
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
 */const bF="FIREBASE_DATABASE_EMULATOR_HOST",hp={};let kF=!1;function PF(t,e,n,r){t.repoInfo_=new SC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function RF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=u0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&R_&&(u=R_[bF]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=u0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Es(Es.OWNER):new WL(t.name,t.options,e);tF("Invalid Firebase Database URL",o),G(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=NF(a,t,d,new zL(t.name,n));return new AF(c,t)}function OF(t,e){const n=hp[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mF(t),delete n[t.key]}function NF(t,e,n,r){let i=hp[e.name];i||(i={},hp[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new lF(t,kF,n,r),i[t.toURLString()]=s,s}class AF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function DF(t=wS(),e){const n=Vm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vO("database");r&&LF(n,...r)}return n}function LF(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Es(Es.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:_O(r.mockUserToken,t.app.options.projectId);s=new Es(o)}PF(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function MF(t){IL(to),Ds(new wi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return RF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),br(O_,N_,t),br(O_,N_,"esm2017")}Dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MF();var $F="firebase",FF="10.9.0";/**
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
 */br($F,FF,"app");const jF={apiKey:"AIzaSyBnbF93L_e-YM1l0IfpVG6xe1yQypttTqs",authDomain:"base-lingo.firebaseapp.com",projectId:"base-lingo",storageBucket:"base-lingo.appspot.com",messagingSenderId:"501362930586",appId:"1:501362930586:web:387ce46ec4671a8d3f4023",databaseURL:"https://base-lingo-default-rtdb.europe-west1.firebasedatabase.app"},UF=_S(jF),zF=DF(UF),Sf=Ma("teachers/getTeachers",async({signal:t},e)=>{try{const n=xF(zF);return(await IF(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),WF={teachersCard:[],favorite:[],isLoading:!1,error:"",card:[]},Jc=sS({name:"teachers",initialState:WF,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)},delFavorite:(t,e)=>{t.favorite=t.favorite.filter(n=>n.id!==e.payload.id)},setCard:(t,e)=>{t.card=e.payload}},extraReducers:t=>{t.addCase(Sf.pending,e=>{e.isLoading=!0}).addCase(Sf.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(Sf.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}}),{setCard:gW}=Jc.actions,{setFavorite:yW}=Jc.actions,{delFavorite:vW}=Jc.actions,BF=Jc.reducer,VF={key:"auth",storage:ug,whitelist:["token"]},HF={key:"teachers",storage:ug,blacklist:["teachersCard"]},GF=VE({auth:b_(VF,QD),teachers:b_(HF,BF)}),ST=UR({reducer:GF,middleware:t=>t({serializableCheck:{ignoredActions:[ng,Vc,rg,ig,sg,og]}})}),KF=gL(ST);function Yl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yl=function(n){return typeof n}:Yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yl(t)}function qF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function YF(t,e,n){return e&&c0(t.prototype,e),n&&c0(t,n),t}function QF(t,e){return e&&(Yl(e)==="object"||typeof e=="function")?e:Ql(t)}function pp(t){return pp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pp(t)}function Ql(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function XF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mp(t,e)}function mp(t,e){return mp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mp(t,e)}function Xl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var CT=function(t){XF(e,t);function e(){var n,r;qF(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=QF(this,(n=pp(e)).call.apply(n,[this].concat(s))),Xl(Ql(r),"state",{bootstrapped:!1}),Xl(Ql(r),"_unsubscribe",void 0),Xl(Ql(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return YF(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(w.PureComponent);Xl(CT,"defaultProps",{children:null,loading:null});const JF="modulepreload",ZF=function(t){return"/lingo-app/"+t},d0={},Fg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=ZF(o),o in d0)return;d0[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const f=s[c];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":JF,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((c,f)=>{d.addEventListener("load",c),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var TT={exports:{}},e3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",t3=e3,n3=t3;function xT(){}function IT(){}IT.resetWarningCache=xT;var r3=function(){function t(r,i,s,o,a,l){if(l!==n3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:IT,resetWarningCache:xT};return n.PropTypes=n,n};TT.exports=r3();var i3=TT.exports;const Bn=Gs(i3),s3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='28'%20height='28'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%23FFDA44'%20d='M14%2028c7.732%200%2014-6.268%2014-14S21.732%200%2014%200%200%206.268%200%2014s6.268%2014%2014%2014Z'/%3e%3cpath%20fill='%23338AF3'%20d='M0%2014C0%206.268%206.268%200%2014%200s14%206.268%2014%2014'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h28v28H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",o3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20fill='none'%3e%3cpath%20stroke='%23F4C550'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M12.5%202.5h1c1.4%200%202.1%200%202.635.272a2.5%202.5%200%200%201%201.092%201.093C17.5%204.4%2017.5%205.1%2017.5%206.5v7c0%201.4%200%202.1-.273%202.635a2.5%202.5%200%200%201-1.092%201.092c-.535.273-1.235.273-2.635.273h-1M8.333%205.833%2012.5%2010m0%200-4.167%204.167M12.5%2010h-10'/%3e%3c/svg%3e";var Qe=function(){return Qe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qe.apply(this,arguments)};function js(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var a3=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const l3=Gs(a3);var ce="-ms-",Vo="-moz-",Z="-webkit-",bT="comm",Zc="rule",jg="decl",u3="@import",kT="@keyframes",c3="@layer",PT=Math.abs,Ug=String.fromCharCode,gp=Object.assign;function d3(t,e){return Le(t,0)^45?(((e<<2^Le(t,0))<<2^Le(t,1))<<2^Le(t,2))<<2^Le(t,3):0}function RT(t){return t.trim()}function xn(t,e){return(t=e.exec(t))?t[0]:t}function B(t,e,n){return t.replace(e,n)}function Jl(t,e,n){return t.indexOf(e,n)}function Le(t,e){return t.charCodeAt(e)|0}function Us(t,e,n){return t.slice(e,n)}function un(t){return t.length}function OT(t){return t.length}function Po(t,e){return e.push(t),t}function f3(t,e){return t.map(e).join("")}function f0(t,e){return t.filter(function(n){return!xn(n,e)})}var ed=1,zs=1,NT=0,Ut=0,xe=0,so="";function td(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ed,column:zs,length:o,return:"",siblings:a}}function tr(t,e){return gp(td("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Gi(t){for(;t.root;)t=tr(t.root,{children:[t]});Po(t,t.siblings)}function h3(){return xe}function p3(){return xe=Ut>0?Le(so,--Ut):0,zs--,xe===10&&(zs=1,ed--),xe}function Zt(){return xe=Ut<NT?Le(so,Ut++):0,zs++,xe===10&&(zs=1,ed++),xe}function fi(){return Le(so,Ut)}function Zl(){return Ut}function nd(t,e){return Us(so,t,e)}function yp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m3(t){return ed=zs=1,NT=un(so=t),Ut=0,[]}function g3(t){return so="",t}function Cf(t){return RT(nd(Ut-1,vp(t===91?t+2:t===40?t+1:t)))}function y3(t){for(;(xe=fi())&&xe<33;)Zt();return yp(t)>2||yp(xe)>3?"":" "}function v3(t,e){for(;--e&&Zt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return nd(t,Zl()+(e<6&&fi()==32&&Zt()==32))}function vp(t){for(;Zt();)switch(xe){case t:return Ut;case 34:case 39:t!==34&&t!==39&&vp(xe);break;case 40:t===41&&vp(t);break;case 92:Zt();break}return Ut}function _3(t,e){for(;Zt()&&t+xe!==57;)if(t+xe===84&&fi()===47)break;return"/*"+nd(e,Ut-1)+"*"+Ug(t===47?t:Zt())}function w3(t){for(;!yp(fi());)Zt();return nd(t,Ut)}function E3(t){return g3(eu("",null,null,null,[""],t=m3(t),0,[0],t))}function eu(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,y=0,v=1,E=1,m=1,h=0,g="",_=i,x=s,S=r,T=g;E;)switch(y=h,h=Zt()){case 40:if(y!=108&&Le(T,c-1)==58){Jl(T+=B(Cf(h),"&","&\f"),"&\f",PT(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=Cf(h);break;case 9:case 10:case 13:case 32:T+=y3(y);break;case 92:T+=v3(Zl()-1,7);continue;case 47:switch(fi()){case 42:case 47:Po(S3(_3(Zt(),Zl()),e,n,l),l);break;default:T+="/"}break;case 123*v:a[u++]=un(T)*m;case 125*v:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+d:m==-1&&(T=B(T,/\f/g,"")),p>0&&un(T)-c&&Po(p>32?p0(T+";",r,n,c-1,l):p0(B(T," ","")+";",r,n,c-2,l),l);break;case 59:T+=";";default:if(Po(S=h0(T,e,n,u,d,i,a,g,_=[],x=[],c,s),s),h===123)if(d===0)eu(T,e,S,S,_,s,c,a,x);else switch(f===99&&Le(T,3)===110?100:f){case 100:case 108:case 109:case 115:eu(t,S,S,r&&Po(h0(t,S,S,0,0,i,a,g,i,_=[],c,x),x),i,x,c,a,r?_:x);break;default:eu(T,S,S,S,[""],x,0,a,x)}}u=d=p=0,v=m=1,g=T="",c=o;break;case 58:c=1+un(T),p=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&p3()==125)continue}switch(T+=Ug(h),h*v){case 38:m=d>0?1:(T+="\f",-1);break;case 44:a[u++]=(un(T)-1)*m,m=1;break;case 64:fi()===45&&(T+=Cf(Zt())),f=fi(),d=c=un(g=T+=w3(Zl())),h++;break;case 45:y===45&&un(T)==2&&(v=0)}}return s}function h0(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],y=OT(p),v=0,E=0,m=0;v<r;++v)for(var h=0,g=Us(t,f+1,f=PT(E=o[v])),_=t;h<y;++h)(_=RT(E>0?p[h]+" "+g:B(g,/&\f/g,p[h])))&&(l[m++]=_);return td(t,e,n,i===0?Zc:a,l,u,d,c)}function S3(t,e,n,r){return td(t,e,n,bT,Ug(h3()),Us(t,2,-2),0,r)}function p0(t,e,n,r,i){return td(t,e,n,jg,Us(t,0,r),Us(t,r+1,-1),r,i)}function AT(t,e,n){switch(d3(t,e)){case 5103:return Z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+t+t;case 4789:return Vo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+t+Vo+t+ce+t+t;case 5936:switch(Le(t,e+11)){case 114:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Z+t+ce+B(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Z+t+ce+t+t;case 6165:return Z+t+ce+"flex-"+t+t;case 5187:return Z+t+B(t,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ce+"flex-$1$2")+t;case 5443:return Z+t+ce+"flex-item-"+B(t,/flex-|-self/g,"")+(xn(t,/flex-|baseline/)?"":ce+"grid-row-"+B(t,/flex-|-self/g,""))+t;case 4675:return Z+t+ce+"flex-line-pack"+B(t,/align-content|flex-|-self/g,"")+t;case 5548:return Z+t+ce+B(t,"shrink","negative")+t;case 5292:return Z+t+ce+B(t,"basis","preferred-size")+t;case 6060:return Z+"box-"+B(t,"-grow","")+Z+t+ce+B(t,"grow","positive")+t;case 4554:return Z+B(t,/([^-])(transform)/g,"$1"+Z+"$2")+t;case 6187:return B(B(B(t,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),t,"")+t;case 5495:case 3959:return B(t,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return B(B(t,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+t+t;case 4200:if(!xn(t,/flex-|baseline/))return ce+"grid-column-align"+Us(t,e)+t;break;case 2592:case 3360:return ce+B(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,xn(r.props,/grid-\w+-end/)})?~Jl(t+(n=n[e].value),"span",0)?t:ce+B(t,"-start","")+t+ce+"grid-row-span:"+(~Jl(n,"span",0)?xn(n,/\d+/):+xn(n,/\d+/)-+xn(t,/\d+/))+";":ce+B(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return xn(r.props,/grid-\w+-start/)})?t:ce+B(B(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return B(t,/(.+)-inline(.+)/,Z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(Le(t,e+1)){case 109:if(Le(t,e+4)!==45)break;case 102:return B(t,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Vo+(Le(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Jl(t,"stretch",0)?AT(B(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return B(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ce+i+":"+s+u+(o?ce+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Le(t,e+6)===121)return B(t,":",":"+Z)+t;break;case 6444:switch(Le(t,Le(t,14)===45?18:11)){case 120:return B(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Le(t,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ce+"$2box$3")+t;case 100:return B(t,":",":"+ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(t,"scroll-","scroll-snap-")+t}return t}function sc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function C3(t,e,n,r){switch(t.type){case c3:if(t.children.length)break;case u3:case jg:return t.return=t.return||t.value;case bT:return"";case kT:return t.return=t.value+"{"+sc(t.children,r)+"}";case Zc:if(!un(t.value=t.props.join(",")))return""}return un(n=sc(t.children,r))?t.return=t.value+"{"+n+"}":""}function T3(t){var e=OT(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function x3(t){return function(e){e.root||(e=e.return)&&t(e)}}function I3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case jg:t.return=AT(t.value,t.length,n);return;case kT:return sc([tr(t,{value:B(t.value,"@","@"+Z)})],r);case Zc:if(t.length)return f3(n=t.props,function(i){switch(xn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(tr(t,{props:[B(i,/:(read-\w+)/,":"+Vo+"$1")]})),Gi(tr(t,{props:[i]})),gp(t,{props:f0(n,r)});break;case"::placeholder":Gi(tr(t,{props:[B(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Gi(tr(t,{props:[B(i,/:(plac\w+)/,":"+Vo+"$1")]})),Gi(tr(t,{props:[B(i,/:(plac\w+)/,ce+"input-$1")]})),Gi(tr(t,{props:[i]})),gp(t,{props:f0(n,r)});break}return""})}}var b3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},Ws=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",DT="active",LT="data-styled-version",rd="6.1.8",zg=`/*!sc*/
`,Wg=typeof window<"u"&&"HTMLElement"in window,k3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),P3={},id=Object.freeze([]),Bs=Object.freeze({});function MT(t,e,n){return n===void 0&&(n=Bs),t.theme!==n.theme&&t.theme||e||n.theme}var $T=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O3=/(^-|-$)/g;function m0(t){return t.replace(R3,"-").replace(O3,"")}var N3=/(a)(d)/gi,Cl=52,g0=function(t){return String.fromCharCode(t+(t>25?39:97))};function _p(t){var e,n="";for(e=Math.abs(t);e>Cl;e=e/Cl|0)n=g0(e%Cl)+n;return(g0(e%Cl)+n).replace(N3,"$1-$2")}var Tf,FT=5381,cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jT=function(t){return cs(FT,t)};function Bg(t){return _p(jT(t)>>>0)}function A3(t){return t.displayName||t.name||"Component"}function xf(t){return typeof t=="string"&&!0}var UT=typeof Symbol=="function"&&Symbol.for,zT=UT?Symbol.for("react.memo"):60115,D3=UT?Symbol.for("react.forward_ref"):60112,L3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},M3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$3=((Tf={})[D3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tf[zT]=WT,Tf);function y0(t){return("type"in(e=t)&&e.type.$$typeof)===zT?WT:"$$typeof"in t?$3[t.$$typeof]:L3;var e}var F3=Object.defineProperty,j3=Object.getOwnPropertyNames,v0=Object.getOwnPropertySymbols,U3=Object.getOwnPropertyDescriptor,z3=Object.getPrototypeOf,_0=Object.prototype;function BT(t,e,n){if(typeof e!="string"){if(_0){var r=z3(e);r&&r!==_0&&BT(t,r,n)}var i=j3(e);v0&&(i=i.concat(v0(e)));for(var s=y0(t),o=y0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in M3||n&&n[l]||o&&l in o||s&&l in s)){var u=U3(e,l);try{F3(t,l,u)}catch{}}}}return t}function Vs(t){return typeof t=="function"}function Vg(t){return typeof t=="object"&&"styledComponentId"in t}function oi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function oc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Ia(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function wp(t,e,n){if(n===void 0&&(n=!1),!n&&!Ia(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=wp(t[r],e[r]);else if(Ia(e))for(var r in e)t[r]=wp(t[r],e[r]);return t}function Hg(t,e){Object.defineProperty(t,"toString",{value:e})}function Qa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var W3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Qa(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(zg);return n},t}(),tu=new Map,ac=new Map,nu=1,Tl=function(t){if(tu.has(t))return tu.get(t);for(;ac.has(nu);)nu++;var e=nu++;return tu.set(t,e),ac.set(e,t),e},B3=function(t,e){nu=e+1,tu.set(t,e),ac.set(e,t)},V3="style[".concat(Ws,"][").concat(LT,'="').concat(rd,'"]'),H3=new RegExp("^".concat(Ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},K3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(zg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(H3);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(B3(d,u),G3(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function q3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VT=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ws,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ws,DT),r.setAttribute(LT,rd);var o=q3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Y3=function(){function t(e){this.element=VT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Qa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Q3=function(){function t(e){this.element=VT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),X3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),w0=Wg,J3={isServer:!Wg,useCSSOMInjection:!k3},lc=function(){function t(e,n,r){e===void 0&&(e=Bs),n===void 0&&(n={});var i=this;this.options=Qe(Qe({},J3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Wg&&w0&&(w0=!1,function(s){for(var o=document.querySelectorAll(V3),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ws)!==DT&&(K3(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Hg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(m){return ac.get(m)}(c);if(f===void 0)return"continue";var p=s.names.get(f),y=o.getGroup(c);if(p===void 0||y.length===0)return"continue";var v="".concat(Ws,".g").concat(c,'[id="').concat(f,'"]'),E="";p!==void 0&&p.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(y).concat(v,'{content:"').concat(E,'"}').concat(zg)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Tl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qe(Qe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new X3(i):r?new Y3(i):new Q3(i)}(this.options),new W3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Tl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Tl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Tl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Z3=/&/g,ej=/^\s*\/\/.*$/gm;function HT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=HT(n.children,e)),n})}function GT(t){var e,n,r,i=t===void 0?Bs:t,s=i.options,o=s===void 0?Bs:s,a=i.plugins,l=a===void 0?id:a,u=function(f,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Zc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Z3,n).replace(r,u))}),o.prefix&&d.push(I3),d.push(C3);var c=function(f,p,y,v){p===void 0&&(p=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(ej,""),m=E3(y||p?"".concat(y," ").concat(p," { ").concat(E," }"):E);o.namespace&&(m=HT(m,o.namespace));var h=[];return sc(m,T3(d.concat(x3(function(g){return h.push(g)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||Qa(15),cs(f,p.name)},FT).toString():"",c}var tj=new lc,Ep=GT(),Gg=ut.createContext({shouldForwardProp:void 0,styleSheet:tj,stylis:Ep});Gg.Consumer;var nj=ut.createContext(void 0);function uc(){return w.useContext(Gg)}function rj(t){var e=w.useState(t.stylisPlugins),n=e[0],r=e[1],i=uc().styleSheet,s=w.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=w.useMemo(function(){return GT({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);w.useEffect(function(){l3(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=w.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return ut.createElement(Gg.Provider,{value:a},ut.createElement(nj.Provider,{value:o},t.children))}var KT=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ep);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hg(this,function(){throw Qa(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ep),this.name+e.hash},t}(),ij=function(t){return t>="A"&&t<="Z"};function E0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;ij(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var qT=function(t){return t==null||t===!1||t===""},YT=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!qT(s)&&(Array.isArray(s)&&s.isCss||Vs(s)?r.push("".concat(E0(i),":"),s,";"):Ia(s)?r.push.apply(r,js(js(["".concat(i," {")],YT(s),!1),["}"],!1)):r.push("".concat(E0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in b3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rr(t,e,n,r){if(qT(t))return[];if(Vg(t))return[".".concat(t.styledComponentId)];if(Vs(t)){if(!Vs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Rr(i,e,n,r)}var s;return t instanceof KT?n?(t.inject(n,r),[t.getName(r)]):[t]:Ia(t)?YT(t):Array.isArray(t)?Array.prototype.concat.apply(id,t.map(function(o){return Rr(o,e,n,r)})):[t.toString()]}function QT(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Vs(n)&&!Vg(n))return!1}return!0}var sj=jT(rd),oj=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&QT(e),this.componentId=n,this.baseHash=cs(sj,n),this.baseStyle=r,lc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=oi(i,this.staticRulesId);else{var s=oc(Rr(this.rules,e,n,r)),o=_p(cs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=oi(i,o),this.staticRulesId=o}else{for(var l=cs(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=oc(Rr(c,e,n,r));l=cs(l,f+d),u+=f}}if(u){var p=_p(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=oi(i,p)}}return i},t}(),Kg=ut.createContext(void 0);Kg.Consumer;var If={};function aj(t,e,n){var r=Vg(t),i=t,s=!xf(t),o=e.attrs,a=o===void 0?id:o,l=e.componentId,u=l===void 0?function(_,x){var S=typeof _!="string"?"sc":m0(_);If[S]=(If[S]||0)+1;var T="".concat(S,"-").concat(Bg(rd+S+If[S]));return x?"".concat(x,"-").concat(T):T}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(_){return xf(_)?"styled.".concat(_):"Styled(".concat(A3(_),")")}(t):d,f=e.displayName&&e.componentId?"".concat(m0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;y=function(_,x){return v(_,x)&&E(_,x)}}else y=v}var m=new oj(n,f,r?i.componentStyle:void 0);function h(_,x){return function(S,T,b){var D=S.attrs,$=S.componentStyle,W=S.defaultProps,Fe=S.foldedComponentIds,we=S.styledComponentId,vt=S.target,Wi=ut.useContext(Kg),qr=uc(),_n=S.shouldForwardProp||qr.shouldForwardProp,O=MT(T,Wi,W)||Bs,M=function(et,He,_t){for(var Xn,rn=Qe(Qe({},He),{className:void 0,theme:_t}),Bi=0;Bi<et.length;Bi+=1){var Jn=Vs(Xn=et[Bi])?Xn(rn):Xn;for(var sn in Jn)rn[sn]=sn==="className"?oi(rn[sn],Jn[sn]):sn==="style"?Qe(Qe({},rn[sn]),Jn[sn]):Jn[sn]}return He.className&&(rn.className=oi(rn.className,He.className)),rn}(D,T,O),U=M.as||vt,X={};for(var Y in M)M[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&M.theme===O||(Y==="forwardedAs"?X.as=M.forwardedAs:_n&&!_n(Y,U)||(X[Y]=M[Y]));var nn=function(et,He){var _t=uc(),Xn=et.generateAndInjectStyles(He,_t.styleSheet,_t.stylis);return Xn}($,M),Ze=oi(Fe,we);return nn&&(Ze+=" "+nn),M.className&&(Ze+=" "+M.className),X[xf(U)&&!$T.has(U)?"class":"className"]=Ze,X.ref=b,w.createElement(U,X)}(g,_,x)}h.displayName=c;var g=ut.forwardRef(h);return g.attrs=p,g.componentStyle=m,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?oi(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=r?i.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(x){for(var S=[],T=1;T<arguments.length;T++)S[T-1]=arguments[T];for(var b=0,D=S;b<D.length;b++)wp(x,D[b],!0);return x}({},i.defaultProps,_):_}}),Hg(g,function(){return".".concat(g.styledComponentId)}),s&&BT(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function S0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var C0=function(t){return Object.assign(t,{isCss:!0})};function bi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Vs(t)||Ia(t))return C0(Rr(S0(id,js([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Rr(r):C0(Rr(S0(r,e)))}function Sp(t,e,n){if(n===void 0&&(n=Bs),!e)throw Qa(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,bi.apply(void 0,js([i],s,!1)))};return r.attrs=function(i){return Sp(t,e,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sp(t,e,Qe(Qe({},n),i))},r}var XT=function(t){return Sp(aj,t)},R=XT;$T.forEach(function(t){R[t]=XT(t)});var lj=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=QT(e),lc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(oc(Rr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&lc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function uj(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=bi.apply(void 0,js([t],e,!1)),i="sc-global-".concat(Bg(JSON.stringify(r))),s=new lj(r,i),o=function(l){var u=uc(),d=ut.useContext(Kg),c=ut.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),ut.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,f){if(s.isStatic)s.renderStyles(l,P3,d,f);else{var p=Qe(Qe({},u),{theme:MT(u,c,o.defaultProps)});s.renderStyles(l,p,d,f)}}return ut.memo(o)}function Li(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=oc(bi.apply(void 0,js([t],e,!1))),i=Bg(r);return new KT(i,r)}const cj=uj`
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
  height: auto;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  font-family: "Roboto", sans-serif;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d7e3ff;
    border-radius: 100px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #6191ff;
  }
}

button,
a {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0;
  cursor: pointer;

}

a {
  text-decoration: none;
}`,Ce={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},dj=R(Rm)`
  height: 28px;
`,fj=R.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 20px 128px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 560px) {
    padding: 20px 15px;
  }
`,hj=R(Rm)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,pj=R.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,mj=R.div`
  display: flex;
  align-items: center;
  gap: 28px;
`,bf=R(Rm)`
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  /* font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320))); */
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;

  &:hover,
  &:focus {
    color: ${Ce.LIGHT_YELLOW};
  }

  &.active {
    font-weight: 500;
    color: ${Ce.YELLOW};
  }
`,gj=R.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,yj=R.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: ${Ce.LIGHT_YELLOW};
  }
`,vj=R.button`
  height: 48px;
  width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${Ce.WHITE};
  font-family: Roboto;
  font-size: 16px;
  //font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`,_j=R.span`
  max-width: 20px;
  height: 20px;
`,wj=R.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,Ej=R.div`
  display: flex;
  align-items: center;
`,qg=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=WE(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}},Sj=R.div`
  display: flex;
  gap: 8px;
`,Cj=R.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: ${Ce.YELLOW_BUTTON};
  color: ${Ce.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,Tj=R.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,xj=()=>{const t=Nc(),{name:e}=qg(),n=()=>{t(sC())};return C.jsxs(Sj,{children:[C.jsx(Tj,{children:`Welcome, ${e}`}),C.jsx(Cj,{type:"button",onClick:()=>n(),children:"Log Out"})]})},JT=({setNamePopUp:t})=>{const{isLoggedIn:e}=qg(),n=()=>(t("login"),C.jsx(Dh,{to:"/login"})),r=()=>(t("signin"),C.jsx(Dh,{to:"/login"}));return C.jsxs(fj,{children:[C.jsx(wj,{children:C.jsxs(pj,{children:[C.jsxs(dj,{to:"/",children:[C.jsx("img",{src:s3,alt:"Ukraine Flag"})," "]}),C.jsx(hj,{to:"/",children:"LearnLingo"})]})}),C.jsxs(mj,{children:[C.jsx(bf,{to:"/",children:"Home"}),C.jsx(bf,{to:"teachers",children:"Teachers"}),e&&C.jsx(bf,{to:"favorites",children:"Favorites"})]}),C.jsx(Ej,{children:e?C.jsx(xj,{}):C.jsxs(gj,{children:[C.jsxs(yj,{type:"button",onClick:n,children:[C.jsxs(_j,{children:[C.jsx("img",{src:o3,alt:"Log In"})," "]}),"Log in"]}),C.jsx(vj,{type:"button",onClick:()=>r(),children:"Registration"})]})})]})};JT.propTypes={setNamePopUp:Bn.func.isRequired};const Ij=R.div`
  max-width: 100%;
  text-align: center;
`,bj="#4fa94d",kj={"aria-busy":!0,role:"progressbar"},Pj=R.div`
  display: ${t=>t.$visible?"flex":"none"};
`,Rj="http://www.w3.org/2000/svg",Oj=({height:t="100",width:e="100",color:n=bj,ariaLabel:r="audio-loading",wrapperStyle:i={},wrapperClass:s,visible:o=!0})=>C.jsx(Pj,{$visible:o,style:{...i},className:s,"data-testid":"audio-loading","aria-label":r,...kj,children:C.jsxs("svg",{height:`${t}`,width:`${e}`,fill:n,viewBox:"0 0 55 80",xmlns:Rj,"data-testid":"audio-svg",children:[C.jsx("title",{children:"Audio Visualization"}),C.jsx("desc",{children:"Animated representation of audio data"}),C.jsxs("g",{transform:"matrix(1 0 0 -1 0 80)",children:[C.jsx("rect",{width:"10",height:"20",rx:"3",children:C.jsx("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),C.jsx("rect",{x:"15",width:"10",height:"80",rx:"3",children:C.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),C.jsx("rect",{x:"30",width:"10",height:"50",rx:"3",children:C.jsx("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),C.jsx("rect",{x:"45",width:"10",height:"30",rx:"3",children:C.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}),Wt=242.776657104492,Nj=1.6,Aj=Li`
12.5% {
  stroke-dasharray: ${Wt*.14}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.11}px;
}
43.75% {
  stroke-dasharray: ${Wt*.35}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.35}px;
}
100% {
  stroke-dasharray: ${Wt*.01}px, ${Wt}px;
  stroke-dashoffset: -${Wt*.99}px;
}
`;R.path`
  stroke-dasharray: ${Wt*.01}px, ${Wt};
  stroke-dashoffset: 0;
  animation: ${Aj} ${Nj}s linear infinite;
`;const Dj=Li`
to {
   transform: rotate(360deg);
 }
`;R.svg`
  animation: ${Dj} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;R.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Lj=Li`
to {
   stroke-dashoffset: 136;
 }
`;R.polygon`
  stroke-dasharray: 17;
  animation: ${Lj} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;R.svg`
  transform-origin: 50% 65%;
`;const Mj=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,$j=()=>C.jsx(Mj,{children:C.jsx(Oj,{height:"80",width:"80",radius:"9",color:Ce.YELLOW,ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}),ZT=({setNamePopUp:t})=>C.jsxs(C.Fragment,{children:[C.jsx(JT,{setNamePopUp:t}),C.jsx(Ij,{children:C.jsx(w.Suspense,{fallback:C.jsx($j,{}),children:C.jsx(_P,{})})})]});ZT.propTypes={setNamePopUp:Bn.func.isRequired};var Fj=function(e){return jj(e)&&!Uj(e)};function jj(t){return!!t&&typeof t=="object"}function Uj(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Bj(t)}var zj=typeof Symbol=="function"&&Symbol.for,Wj=zj?Symbol.for("react.element"):60103;function Bj(t){return t.$$typeof===Wj}function Vj(t){return Array.isArray(t)?[]:{}}function cc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?ba(Vj(t),t,e):t}function Hj(t,e,n){return t.concat(e).map(function(r){return cc(r,n)})}function Gj(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=cc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=cc(e[i],n):r[i]=ba(t[i],e[i],n)}),r}function ba(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Hj,n.isMergeableObject=n.isMergeableObject||Fj;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):Gj(t,e,n):cc(e,n)}ba.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return ba(r,i,n)},{})};var Cp=ba,ex=typeof global=="object"&&global&&global.Object===Object&&global,Kj=typeof self=="object"&&self&&self.Object===Object&&self,vn=ex||Kj||Function("return this")(),jr=vn.Symbol,tx=Object.prototype,qj=tx.hasOwnProperty,Yj=tx.toString,wo=jr?jr.toStringTag:void 0;function Qj(t){var e=qj.call(t,wo),n=t[wo];try{t[wo]=void 0;var r=!0}catch{}var i=Yj.call(t);return r&&(e?t[wo]=n:delete t[wo]),i}var Xj=Object.prototype,Jj=Xj.toString;function Zj(t){return Jj.call(t)}var e4="[object Null]",t4="[object Undefined]",T0=jr?jr.toStringTag:void 0;function Mi(t){return t==null?t===void 0?t4:e4:T0&&T0 in Object(t)?Qj(t):Zj(t)}function nx(t,e){return function(n){return t(e(n))}}var Yg=nx(Object.getPrototypeOf,Object);function $i(t){return t!=null&&typeof t=="object"}var n4="[object Object]",r4=Function.prototype,i4=Object.prototype,rx=r4.toString,s4=i4.hasOwnProperty,o4=rx.call(Object);function x0(t){if(!$i(t)||Mi(t)!=n4)return!1;var e=Yg(t);if(e===null)return!0;var n=s4.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&rx.call(n)==o4}var I0=Array.isArray,b0=Object.keys,a4=Object.prototype.hasOwnProperty,l4=typeof Element<"u";function Tp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=I0(t),r=I0(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Tp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=b0(t);if(s=c.length,s!==b0(e).length)return!1;for(i=s;i--!==0;)if(!a4.call(e,c[i]))return!1;if(l4&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!Tp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var u4=function(e,n){try{return Tp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const ir=Gs(u4);function c4(){this.__data__=[],this.size=0}function ix(t,e){return t===e||t!==t&&e!==e}function sd(t,e){for(var n=t.length;n--;)if(ix(t[n][0],e))return n;return-1}var d4=Array.prototype,f4=d4.splice;function h4(t){var e=this.__data__,n=sd(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():f4.call(e,n,1),--this.size,!0}function p4(t){var e=this.__data__,n=sd(e,t);return n<0?void 0:e[n][1]}function m4(t){return sd(this.__data__,t)>-1}function g4(t,e){var n=this.__data__,r=sd(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Qn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qn.prototype.clear=c4;Qn.prototype.delete=h4;Qn.prototype.get=p4;Qn.prototype.has=m4;Qn.prototype.set=g4;function y4(){this.__data__=new Qn,this.size=0}function v4(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function _4(t){return this.__data__.get(t)}function w4(t){return this.__data__.has(t)}function Xa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var E4="[object AsyncFunction]",S4="[object Function]",C4="[object GeneratorFunction]",T4="[object Proxy]";function sx(t){if(!Xa(t))return!1;var e=Mi(t);return e==S4||e==C4||e==E4||e==T4}var kf=vn["__core-js_shared__"],k0=function(){var t=/[^.]+$/.exec(kf&&kf.keys&&kf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function x4(t){return!!k0&&k0 in t}var I4=Function.prototype,b4=I4.toString;function Fi(t){if(t!=null){try{return b4.call(t)}catch{}try{return t+""}catch{}}return""}var k4=/[\\^$.*+?()[\]{}|]/g,P4=/^\[object .+?Constructor\]$/,R4=Function.prototype,O4=Object.prototype,N4=R4.toString,A4=O4.hasOwnProperty,D4=RegExp("^"+N4.call(A4).replace(k4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function L4(t){if(!Xa(t)||x4(t))return!1;var e=sx(t)?D4:P4;return e.test(Fi(t))}function M4(t,e){return t==null?void 0:t[e]}function ji(t,e){var n=M4(t,e);return L4(n)?n:void 0}var ka=ji(vn,"Map"),Pa=ji(Object,"create");function $4(){this.__data__=Pa?Pa(null):{},this.size=0}function F4(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var j4="__lodash_hash_undefined__",U4=Object.prototype,z4=U4.hasOwnProperty;function W4(t){var e=this.__data__;if(Pa){var n=e[t];return n===j4?void 0:n}return z4.call(e,t)?e[t]:void 0}var B4=Object.prototype,V4=B4.hasOwnProperty;function H4(t){var e=this.__data__;return Pa?e[t]!==void 0:V4.call(e,t)}var G4="__lodash_hash_undefined__";function K4(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Pa&&e===void 0?G4:e,this}function ki(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ki.prototype.clear=$4;ki.prototype.delete=F4;ki.prototype.get=W4;ki.prototype.has=H4;ki.prototype.set=K4;function q4(){this.size=0,this.__data__={hash:new ki,map:new(ka||Qn),string:new ki}}function Y4(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function od(t,e){var n=t.__data__;return Y4(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Q4(t){var e=od(this,t).delete(t);return this.size-=e?1:0,e}function X4(t){return od(this,t).get(t)}function J4(t){return od(this,t).has(t)}function Z4(t,e){var n=od(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Kr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kr.prototype.clear=q4;Kr.prototype.delete=Q4;Kr.prototype.get=X4;Kr.prototype.has=J4;Kr.prototype.set=Z4;var e6=200;function t6(t,e){var n=this.__data__;if(n instanceof Qn){var r=n.__data__;if(!ka||r.length<e6-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Kr(r)}return n.set(t,e),this.size=n.size,this}function oo(t){var e=this.__data__=new Qn(t);this.size=e.size}oo.prototype.clear=y4;oo.prototype.delete=v4;oo.prototype.get=_4;oo.prototype.has=w4;oo.prototype.set=t6;function n6(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var P0=function(){try{var t=ji(Object,"defineProperty");return t({},"",{}),t}catch{}}();function ox(t,e,n){e=="__proto__"&&P0?P0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var r6=Object.prototype,i6=r6.hasOwnProperty;function ax(t,e,n){var r=t[e];(!(i6.call(t,e)&&ix(r,n))||n===void 0&&!(e in t))&&ox(t,e,n)}function ad(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?ox(n,a,l):ax(n,a,l)}return n}function s6(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var o6="[object Arguments]";function R0(t){return $i(t)&&Mi(t)==o6}var lx=Object.prototype,a6=lx.hasOwnProperty,l6=lx.propertyIsEnumerable,u6=R0(function(){return arguments}())?R0:function(t){return $i(t)&&a6.call(t,"callee")&&!l6.call(t,"callee")},Ja=Array.isArray;function c6(){return!1}var ux=typeof exports=="object"&&exports&&!exports.nodeType&&exports,O0=ux&&typeof module=="object"&&module&&!module.nodeType&&module,d6=O0&&O0.exports===ux,N0=d6?vn.Buffer:void 0,f6=N0?N0.isBuffer:void 0,cx=f6||c6,h6=9007199254740991,p6=/^(?:0|[1-9]\d*)$/;function m6(t,e){var n=typeof t;return e=e??h6,!!e&&(n=="number"||n!="symbol"&&p6.test(t))&&t>-1&&t%1==0&&t<e}var g6=9007199254740991;function dx(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=g6}var y6="[object Arguments]",v6="[object Array]",_6="[object Boolean]",w6="[object Date]",E6="[object Error]",S6="[object Function]",C6="[object Map]",T6="[object Number]",x6="[object Object]",I6="[object RegExp]",b6="[object Set]",k6="[object String]",P6="[object WeakMap]",R6="[object ArrayBuffer]",O6="[object DataView]",N6="[object Float32Array]",A6="[object Float64Array]",D6="[object Int8Array]",L6="[object Int16Array]",M6="[object Int32Array]",$6="[object Uint8Array]",F6="[object Uint8ClampedArray]",j6="[object Uint16Array]",U6="[object Uint32Array]",de={};de[N6]=de[A6]=de[D6]=de[L6]=de[M6]=de[$6]=de[F6]=de[j6]=de[U6]=!0;de[y6]=de[v6]=de[R6]=de[_6]=de[O6]=de[w6]=de[E6]=de[S6]=de[C6]=de[T6]=de[x6]=de[I6]=de[b6]=de[k6]=de[P6]=!1;function z6(t){return $i(t)&&dx(t.length)&&!!de[Mi(t)]}function Qg(t){return function(e){return t(e)}}var fx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ho=fx&&typeof module=="object"&&module&&!module.nodeType&&module,W6=Ho&&Ho.exports===fx,Pf=W6&&ex.process,Hs=function(){try{var t=Ho&&Ho.require&&Ho.require("util").types;return t||Pf&&Pf.binding&&Pf.binding("util")}catch{}}(),A0=Hs&&Hs.isTypedArray,B6=A0?Qg(A0):z6,V6=Object.prototype,H6=V6.hasOwnProperty;function hx(t,e){var n=Ja(t),r=!n&&u6(t),i=!n&&!r&&cx(t),s=!n&&!r&&!i&&B6(t),o=n||r||i||s,a=o?s6(t.length,String):[],l=a.length;for(var u in t)(e||H6.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||m6(u,l)))&&a.push(u);return a}var G6=Object.prototype;function Xg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||G6;return t===n}var K6=nx(Object.keys,Object),q6=Object.prototype,Y6=q6.hasOwnProperty;function Q6(t){if(!Xg(t))return K6(t);var e=[];for(var n in Object(t))Y6.call(t,n)&&n!="constructor"&&e.push(n);return e}function px(t){return t!=null&&dx(t.length)&&!sx(t)}function Jg(t){return px(t)?hx(t):Q6(t)}function X6(t,e){return t&&ad(e,Jg(e),t)}function J6(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var Z6=Object.prototype,eU=Z6.hasOwnProperty;function tU(t){if(!Xa(t))return J6(t);var e=Xg(t),n=[];for(var r in t)r=="constructor"&&(e||!eU.call(t,r))||n.push(r);return n}function Zg(t){return px(t)?hx(t,!0):tU(t)}function nU(t,e){return t&&ad(e,Zg(e),t)}var mx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,D0=mx&&typeof module=="object"&&module&&!module.nodeType&&module,rU=D0&&D0.exports===mx,L0=rU?vn.Buffer:void 0,M0=L0?L0.allocUnsafe:void 0;function iU(t,e){if(e)return t.slice();var n=t.length,r=M0?M0(n):new t.constructor(n);return t.copy(r),r}function gx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function sU(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function yx(){return[]}var oU=Object.prototype,aU=oU.propertyIsEnumerable,$0=Object.getOwnPropertySymbols,ey=$0?function(t){return t==null?[]:(t=Object(t),sU($0(t),function(e){return aU.call(t,e)}))}:yx;function lU(t,e){return ad(t,ey(t),e)}function vx(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var uU=Object.getOwnPropertySymbols,_x=uU?function(t){for(var e=[];t;)vx(e,ey(t)),t=Yg(t);return e}:yx;function cU(t,e){return ad(t,_x(t),e)}function wx(t,e,n){var r=e(t);return Ja(t)?r:vx(r,n(t))}function dU(t){return wx(t,Jg,ey)}function fU(t){return wx(t,Zg,_x)}var xp=ji(vn,"DataView"),Ip=ji(vn,"Promise"),bp=ji(vn,"Set"),kp=ji(vn,"WeakMap"),F0="[object Map]",hU="[object Object]",j0="[object Promise]",U0="[object Set]",z0="[object WeakMap]",W0="[object DataView]",pU=Fi(xp),mU=Fi(ka),gU=Fi(Ip),yU=Fi(bp),vU=Fi(kp),ti=Mi;(xp&&ti(new xp(new ArrayBuffer(1)))!=W0||ka&&ti(new ka)!=F0||Ip&&ti(Ip.resolve())!=j0||bp&&ti(new bp)!=U0||kp&&ti(new kp)!=z0)&&(ti=function(t){var e=Mi(t),n=e==hU?t.constructor:void 0,r=n?Fi(n):"";if(r)switch(r){case pU:return W0;case mU:return F0;case gU:return j0;case yU:return U0;case vU:return z0}return e});const ty=ti;var _U=Object.prototype,wU=_U.hasOwnProperty;function EU(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&wU.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var B0=vn.Uint8Array;function ny(t){var e=new t.constructor(t.byteLength);return new B0(e).set(new B0(t)),e}function SU(t,e){var n=e?ny(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var CU=/\w*$/;function TU(t){var e=new t.constructor(t.source,CU.exec(t));return e.lastIndex=t.lastIndex,e}var V0=jr?jr.prototype:void 0,H0=V0?V0.valueOf:void 0;function xU(t){return H0?Object(H0.call(t)):{}}function IU(t,e){var n=e?ny(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var bU="[object Boolean]",kU="[object Date]",PU="[object Map]",RU="[object Number]",OU="[object RegExp]",NU="[object Set]",AU="[object String]",DU="[object Symbol]",LU="[object ArrayBuffer]",MU="[object DataView]",$U="[object Float32Array]",FU="[object Float64Array]",jU="[object Int8Array]",UU="[object Int16Array]",zU="[object Int32Array]",WU="[object Uint8Array]",BU="[object Uint8ClampedArray]",VU="[object Uint16Array]",HU="[object Uint32Array]";function GU(t,e,n){var r=t.constructor;switch(e){case LU:return ny(t);case bU:case kU:return new r(+t);case MU:return SU(t,n);case $U:case FU:case jU:case UU:case zU:case WU:case BU:case VU:case HU:return IU(t,n);case PU:return new r;case RU:case AU:return new r(t);case OU:return TU(t);case NU:return new r;case DU:return xU(t)}}var G0=Object.create,KU=function(){function t(){}return function(e){if(!Xa(e))return{};if(G0)return G0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function qU(t){return typeof t.constructor=="function"&&!Xg(t)?KU(Yg(t)):{}}var YU="[object Map]";function QU(t){return $i(t)&&ty(t)==YU}var K0=Hs&&Hs.isMap,XU=K0?Qg(K0):QU,JU="[object Set]";function ZU(t){return $i(t)&&ty(t)==JU}var q0=Hs&&Hs.isSet,e5=q0?Qg(q0):ZU,t5=1,n5=2,r5=4,Ex="[object Arguments]",i5="[object Array]",s5="[object Boolean]",o5="[object Date]",a5="[object Error]",Sx="[object Function]",l5="[object GeneratorFunction]",u5="[object Map]",c5="[object Number]",Cx="[object Object]",d5="[object RegExp]",f5="[object Set]",h5="[object String]",p5="[object Symbol]",m5="[object WeakMap]",g5="[object ArrayBuffer]",y5="[object DataView]",v5="[object Float32Array]",_5="[object Float64Array]",w5="[object Int8Array]",E5="[object Int16Array]",S5="[object Int32Array]",C5="[object Uint8Array]",T5="[object Uint8ClampedArray]",x5="[object Uint16Array]",I5="[object Uint32Array]",oe={};oe[Ex]=oe[i5]=oe[g5]=oe[y5]=oe[s5]=oe[o5]=oe[v5]=oe[_5]=oe[w5]=oe[E5]=oe[S5]=oe[u5]=oe[c5]=oe[Cx]=oe[d5]=oe[f5]=oe[h5]=oe[p5]=oe[C5]=oe[T5]=oe[x5]=oe[I5]=!0;oe[a5]=oe[Sx]=oe[m5]=!1;function Go(t,e,n,r,i,s){var o,a=e&t5,l=e&n5,u=e&r5;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Xa(t))return t;var d=Ja(t);if(d){if(o=EU(t),!a)return gx(t,o)}else{var c=ty(t),f=c==Sx||c==l5;if(cx(t))return iU(t,a);if(c==Cx||c==Ex||f&&!i){if(o=l||f?{}:qU(t),!a)return l?cU(t,nU(o,t)):lU(t,X6(o,t))}else{if(!oe[c])return i?t:{};o=GU(t,c,a)}}s||(s=new oo);var p=s.get(t);if(p)return p;s.set(t,o),e5(t)?t.forEach(function(E){o.add(Go(E,e,n,E,t,s))}):XU(t)&&t.forEach(function(E,m){o.set(m,Go(E,e,n,m,t,s))});var y=u?l?fU:dU:l?Zg:Jg,v=d?void 0:y(t);return n6(v||t,function(E,m){v&&(m=E,E=t[m]),ax(o,m,Go(E,e,n,m,t,s))}),o}var b5=4;function Y0(t){return Go(t,b5)}function Tx(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var k5="[object Symbol]";function ry(t){return typeof t=="symbol"||$i(t)&&Mi(t)==k5}var P5="Expected a function";function iy(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(P5);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(iy.Cache||Kr),n}iy.Cache=Kr;var R5=500;function O5(t){var e=iy(t,function(r){return n.size===R5&&n.clear(),r}),n=e.cache;return e}var N5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,A5=/\\(\\)?/g,D5=O5(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(N5,function(n,r,i,s){e.push(i?s.replace(A5,"$1"):r||n)}),e});const L5=D5;var M5=1/0;function $5(t){if(typeof t=="string"||ry(t))return t;var e=t+"";return e=="0"&&1/t==-M5?"-0":e}var F5=1/0,Q0=jr?jr.prototype:void 0,X0=Q0?Q0.toString:void 0;function xx(t){if(typeof t=="string")return t;if(Ja(t))return Tx(t,xx)+"";if(ry(t))return X0?X0.call(t):"";var e=t+"";return e=="0"&&1/t==-F5?"-0":e}function j5(t){return t==null?"":xx(t)}function Ix(t){return Ja(t)?Tx(t,$5):ry(t)?[t]:gx(L5(j5(t)))}var bx={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,sy=$e?Symbol.for("react.element"):60103,oy=$e?Symbol.for("react.portal"):60106,ld=$e?Symbol.for("react.fragment"):60107,ud=$e?Symbol.for("react.strict_mode"):60108,cd=$e?Symbol.for("react.profiler"):60114,dd=$e?Symbol.for("react.provider"):60109,fd=$e?Symbol.for("react.context"):60110,ay=$e?Symbol.for("react.async_mode"):60111,hd=$e?Symbol.for("react.concurrent_mode"):60111,pd=$e?Symbol.for("react.forward_ref"):60112,md=$e?Symbol.for("react.suspense"):60113,U5=$e?Symbol.for("react.suspense_list"):60120,gd=$e?Symbol.for("react.memo"):60115,yd=$e?Symbol.for("react.lazy"):60116,z5=$e?Symbol.for("react.block"):60121,W5=$e?Symbol.for("react.fundamental"):60117,B5=$e?Symbol.for("react.responder"):60118,V5=$e?Symbol.for("react.scope"):60119;function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case sy:switch(t=t.type,t){case ay:case hd:case ld:case cd:case ud:case md:return t;default:switch(t=t&&t.$$typeof,t){case fd:case pd:case yd:case gd:case dd:return t;default:return e}}case oy:return e}}}function kx(t){return Nt(t)===hd}re.AsyncMode=ay;re.ConcurrentMode=hd;re.ContextConsumer=fd;re.ContextProvider=dd;re.Element=sy;re.ForwardRef=pd;re.Fragment=ld;re.Lazy=yd;re.Memo=gd;re.Portal=oy;re.Profiler=cd;re.StrictMode=ud;re.Suspense=md;re.isAsyncMode=function(t){return kx(t)||Nt(t)===ay};re.isConcurrentMode=kx;re.isContextConsumer=function(t){return Nt(t)===fd};re.isContextProvider=function(t){return Nt(t)===dd};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===sy};re.isForwardRef=function(t){return Nt(t)===pd};re.isFragment=function(t){return Nt(t)===ld};re.isLazy=function(t){return Nt(t)===yd};re.isMemo=function(t){return Nt(t)===gd};re.isPortal=function(t){return Nt(t)===oy};re.isProfiler=function(t){return Nt(t)===cd};re.isStrictMode=function(t){return Nt(t)===ud};re.isSuspense=function(t){return Nt(t)===md};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ld||t===hd||t===cd||t===ud||t===md||t===U5||typeof t=="object"&&t!==null&&(t.$$typeof===yd||t.$$typeof===gd||t.$$typeof===dd||t.$$typeof===fd||t.$$typeof===pd||t.$$typeof===W5||t.$$typeof===B5||t.$$typeof===V5||t.$$typeof===z5)};re.typeOf=Nt;bx.exports=re;var H5=bx.exports,ly=H5,G5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},K5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Px={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uy={};uy[ly.ForwardRef]=q5;uy[ly.Memo]=Px;function J0(t){return ly.isMemo(t)?Px:uy[t.$$typeof]||G5}var Y5=Object.defineProperty,Q5=Object.getOwnPropertyNames,Z0=Object.getOwnPropertySymbols,X5=Object.getOwnPropertyDescriptor,J5=Object.getPrototypeOf,ew=Object.prototype;function Rx(t,e,n){if(typeof e!="string"){if(ew){var r=J5(e);r&&r!==ew&&Rx(t,r,n)}var i=Q5(e);Z0&&(i=i.concat(Z0(e)));for(var s=J0(t),o=J0(e),a=0;a<i.length;++a){var l=i[a];if(!K5[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=X5(e,l);try{Y5(t,l,u)}catch{}}}}return t}var Z5=Rx;const e8=Gs(Z5);var t8=1,n8=4;function r8(t){return Go(t,t8|n8)}function te(){return te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},te.apply(this,arguments)}function Ox(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function mr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tw(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var vd=w.createContext(void 0);vd.displayName="FormikContext";var i8=vd.Provider,s8=vd.Consumer;function Nx(){var t=w.useContext(vd);return t}var nw=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},Za=function(e){return e!==null&&typeof e=="object"},o8=function(e){return String(Math.floor(Number(e)))===e},Rf=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ax=function(e){return w.Children.count(e)===0},Of=function(e){return Za(e)&&ze(e.then)};function pe(t,e,n,r){r===void 0&&(r=0);for(var i=Ix(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function gn(t,e,n){for(var r=Y0(t),i=r,s=0,o=Ix(e);s<o.length-1;s++){var a=o[s],l=pe(t,o.slice(0,s+1));if(l&&(Za(l)||Array.isArray(l)))i=i[a]=Y0(l);else{var u=o[s+1];i=i[a]=o8(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function Dx(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];Za(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},Dx(a,e,n,r[o])):r[o]=e}return r}function a8(t,e){switch(e.type){case"SET_VALUES":return te({},t,{values:e.payload});case"SET_TOUCHED":return te({},t,{touched:e.payload});case"SET_ERRORS":return ir(t.errors,e.payload)?t:te({},t,{errors:e.payload});case"SET_STATUS":return te({},t,{status:e.payload});case"SET_ISSUBMITTING":return te({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return te({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return te({},t,{values:gn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return te({},t,{touched:gn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return te({},t,{errors:gn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return te({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return te({},t,{touched:Dx(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return te({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return te({},t,{isSubmitting:!1});default:return t}}var Yr={},xl={};function l8(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=mr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=te({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=w.useRef(f.initialValues),y=w.useRef(f.initialErrors||Yr),v=w.useRef(f.initialTouched||xl),E=w.useRef(f.initialStatus),m=w.useRef(!1),h=w.useRef({});w.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var g=w.useState(0),_=g[1],x=w.useRef({values:f.initialValues,errors:f.initialErrors||Yr,touched:f.initialTouched||xl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=x.current,T=w.useCallback(function(I){var N=x.current;x.current=a8(N,I),N!==x.current&&_(function(L){return L+1})},[]),b=w.useCallback(function(I,N){return new Promise(function(L,F){var V=f.validate(I,N);V==null?L(Yr):Of(V)?V.then(function(ee){L(ee||Yr)},function(ee){F(ee)}):L(V)})},[f.validate]),D=w.useCallback(function(I,N){var L=f.validationSchema,F=ze(L)?L(N):L,V=N&&F.validateAt?F.validateAt(N,I):c8(I,F);return new Promise(function(ee,Oe){V.then(function(){ee(Yr)},function(wn){wn.name==="ValidationError"?ee(u8(wn)):Oe(wn)})})},[f.validationSchema]),$=w.useCallback(function(I,N){return new Promise(function(L){return L(h.current[I].validate(N))})},[]),W=w.useCallback(function(I){var N=Object.keys(h.current).filter(function(F){return ze(h.current[F].validate)}),L=N.length>0?N.map(function(F){return $(F,pe(I,F))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(L).then(function(F){return F.reduce(function(V,ee,Oe){return ee==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ee&&(V=gn(V,N[Oe],ee)),V},{})})},[$]),Fe=w.useCallback(function(I){return Promise.all([W(I),f.validationSchema?D(I):{},f.validate?b(I):{}]).then(function(N){var L=N[0],F=N[1],V=N[2],ee=Cp.all([L,F,V],{arrayMerge:d8});return ee})},[f.validate,f.validationSchema,W,b,D]),we=At(function(I){return I===void 0&&(I=S.values),T({type:"SET_ISVALIDATING",payload:!0}),Fe(I).then(function(N){return m.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:N})),N})});w.useEffect(function(){o&&m.current===!0&&ir(p.current,f.initialValues)&&we(p.current)},[o,we]);var vt=w.useCallback(function(I){var N=I&&I.values?I.values:p.current,L=I&&I.errors?I.errors:y.current?y.current:f.initialErrors||{},F=I&&I.touched?I.touched:v.current?v.current:f.initialTouched||{},V=I&&I.status?I.status:E.current?E.current:f.initialStatus;p.current=N,y.current=L,v.current=F,E.current=V;var ee=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:L,touched:F,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Oe=f.onReset(S.values,vy);Of(Oe)?Oe.then(ee):ee()}else ee()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);w.useEffect(function(){m.current===!0&&!ir(p.current,f.initialValues)&&u&&(p.current=f.initialValues,vt(),o&&we(p.current))},[u,f.initialValues,vt,o,we]),w.useEffect(function(){u&&m.current===!0&&!ir(y.current,f.initialErrors)&&(y.current=f.initialErrors||Yr,T({type:"SET_ERRORS",payload:f.initialErrors||Yr}))},[u,f.initialErrors]),w.useEffect(function(){u&&m.current===!0&&!ir(v.current,f.initialTouched)&&(v.current=f.initialTouched||xl,T({type:"SET_TOUCHED",payload:f.initialTouched||xl}))},[u,f.initialTouched]),w.useEffect(function(){u&&m.current===!0&&!ir(E.current,f.initialStatus)&&(E.current=f.initialStatus,T({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Wi=At(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=pe(S.values,I),L=h.current[I].validate(N);return Of(L)?(T({type:"SET_ISVALIDATING",payload:!0}),L.then(function(F){return F}).then(function(F){T({type:"SET_FIELD_ERROR",payload:{field:I,value:F}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:I,value:L}}),Promise.resolve(L))}else if(f.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),D(S.values,I).then(function(F){return F}).then(function(F){T({type:"SET_FIELD_ERROR",payload:{field:I,value:pe(F,I)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),qr=w.useCallback(function(I,N){var L=N.validate;h.current[I]={validate:L}},[]),_n=w.useCallback(function(I){delete h.current[I]},[]),O=At(function(I,N){T({type:"SET_TOUCHED",payload:I});var L=N===void 0?i:N;return L?we(S.values):Promise.resolve()}),M=w.useCallback(function(I){T({type:"SET_ERRORS",payload:I})},[]),U=At(function(I,N){var L=ze(I)?I(S.values):I;T({type:"SET_VALUES",payload:L});var F=N===void 0?n:N;return F?we(L):Promise.resolve()}),X=w.useCallback(function(I,N){T({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Y=At(function(I,N,L){T({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var F=L===void 0?n:L;return F?we(gn(S.values,I,N)):Promise.resolve()}),nn=w.useCallback(function(I,N){var L=N,F=I,V;if(!Rf(I)){I.persist&&I.persist();var ee=I.target?I.target:I.currentTarget,Oe=ee.type,wn=ee.name,Id=ee.id,bd=ee.value,rI=ee.checked,pW=ee.outerHTML,_y=ee.options,iI=ee.multiple;L=N||wn||Id,F=/number|range/.test(Oe)?(V=parseFloat(bd),isNaN(V)?"":V):/checkbox/.test(Oe)?h8(pe(S.values,L),rI,bd):_y&&iI?f8(_y):bd}L&&Y(L,F)},[Y,S.values]),Ze=At(function(I){if(Rf(I))return function(N){return nn(N,I)};nn(I)}),et=At(function(I,N,L){N===void 0&&(N=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var F=L===void 0?i:L;return F?we(S.values):Promise.resolve()}),He=w.useCallback(function(I,N){I.persist&&I.persist();var L=I.target,F=L.name,V=L.id,ee=L.outerHTML,Oe=N||F||V;et(Oe,!0)},[et]),_t=At(function(I){if(Rf(I))return function(N){return He(N,I)};He(I)}),Xn=w.useCallback(function(I){ze(I)?T({type:"SET_FORMIK_STATE",payload:I}):T({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),rn=w.useCallback(function(I){T({type:"SET_STATUS",payload:I})},[]),Bi=w.useCallback(function(I){T({type:"SET_ISSUBMITTING",payload:I})},[]),Jn=At(function(){return T({type:"SUBMIT_ATTEMPT"}),we().then(function(I){var N=I instanceof Error,L=!N&&Object.keys(I).length===0;if(L){var F;try{if(F=Qx(),F===void 0)return}catch(V){throw V}return Promise.resolve(F).then(function(V){return m.current&&T({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(m.current)throw T({type:"SUBMIT_FAILURE"}),V})}else if(m.current&&(T({type:"SUBMIT_FAILURE"}),N))throw I})}),sn=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),Jn().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),vy={resetForm:vt,validateForm:we,validateField:Wi,setErrors:M,setFieldError:X,setFieldTouched:et,setFieldValue:Y,setStatus:rn,setSubmitting:Bi,setTouched:O,setValues:U,setFormikState:Xn,submitForm:Jn},Qx=At(function(){return d(S.values,vy)}),Xx=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),vt()}),Jx=w.useCallback(function(I){return{value:pe(S.values,I),error:pe(S.errors,I),touched:!!pe(S.touched,I),initialValue:pe(p.current,I),initialTouched:!!pe(v.current,I),initialError:pe(y.current,I)}},[S.errors,S.touched,S.values]),Zx=w.useCallback(function(I){return{setValue:function(L,F){return Y(I,L,F)},setTouched:function(L,F){return et(I,L,F)},setError:function(L){return X(I,L)}}},[Y,et,X]),eI=w.useCallback(function(I){var N=Za(I),L=N?I.name:I,F=pe(S.values,L),V={name:L,value:F,onChange:Ze,onBlur:_t};if(N){var ee=I.type,Oe=I.value,wn=I.as,Id=I.multiple;ee==="checkbox"?Oe===void 0?V.checked=!!F:(V.checked=!!(Array.isArray(F)&&~F.indexOf(Oe)),V.value=Oe):ee==="radio"?(V.checked=F===Oe,V.value=Oe):wn==="select"&&Id&&(V.value=V.value||[],V.multiple=!0)}return V},[_t,Ze,S.values]),xd=w.useMemo(function(){return!ir(p.current,S.values)},[p.current,S.values]),tI=w.useMemo(function(){return typeof a<"u"?xd?S.errors&&Object.keys(S.errors).length===0:a!==!1&&ze(a)?a(f):a:S.errors&&Object.keys(S.errors).length===0},[a,xd,S.errors,f]),nI=te({},S,{initialValues:p.current,initialErrors:y.current,initialTouched:v.current,initialStatus:E.current,handleBlur:_t,handleChange:Ze,handleReset:Xx,handleSubmit:sn,resetForm:vt,setErrors:M,setFormikState:Xn,setFieldTouched:et,setFieldValue:Y,setFieldError:X,setStatus:rn,setSubmitting:Bi,setTouched:O,setValues:U,submitForm:Jn,validateForm:we,validateField:Wi,isValid:tI,dirty:xd,unregisterField:_n,registerField:qr,getFieldProps:eI,getFieldMeta:Jx,getFieldHelpers:Zx,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return nI}function cy(t){var e=l8(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return w.useImperativeHandle(s,function(){return e}),w.createElement(i8,{value:e},n?w.createElement(n,e):i?i(e):r?ze(r)?r(e):Ax(r)?null:w.Children.only(r):null)}function u8(t){var e={};if(t.inner){if(t.inner.length===0)return gn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;pe(e,o.path)||(e=gn(e,o.path,o.message))}}return e}function c8(t,e,n,r){n===void 0&&(n=!1);var i=Pp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Pp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||x0(i)?Pp(i):i!==""?i:void 0}):x0(t[r])?e[r]=Pp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function d8(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Cp(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Cp(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function f8(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function h8(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var p8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function At(t){var e=w.useRef(t);return p8(function(){e.current=t}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function _d(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=mr(t,["validate","name","render","children","as","component","className"]),u=Nx(),d=mr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;w.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(te({name:n},l)),y=d.getFieldMeta(n),v={field:p,form:d};if(r)return r(te({},v,{meta:y}));if(ze(i))return i(te({},v,{meta:y}));if(o){if(typeof o=="string"){var E=l.innerRef,m=mr(l,["innerRef"]);return w.createElement(o,te({ref:E},p,m,{className:a}),i)}return w.createElement(o,te({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var g=l.innerRef,_=mr(l,["innerRef"]);return w.createElement(h,te({ref:g},p,_,{className:a}),i)}return w.createElement(h,te({},p,l,{className:a}),i)}var wd=w.forwardRef(function(t,e){var n=t.action,r=mr(t,["action"]),i=n??"#",s=Nx(),o=s.handleReset,a=s.handleSubmit;return w.createElement("form",te({onSubmit:a,ref:e,onReset:o,action:i},r))});wd.displayName="Form";function m8(t){var e=function(i){return w.createElement(s8,null,function(s){return w.createElement(t,te({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",e8(e,t)}var g8=function(e,n,r){var i=Pi(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},y8=function(e,n,r){var i=Pi(e),s=i[n];return i[n]=i[r],i[r]=s,i},Nf=function(e,n,r){var i=Pi(e);return i.splice(n,0,r),i},v8=function(e,n,r){var i=Pi(e);return i[n]=r,i},Pi=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(te({},e,{length:n+1}))}else return[]},rw=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||Za(i)){var s=Pi(i);return r(s)}return i}},_8=function(t){Ox(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=rw(a,s),p=rw(o,s),y=gn(c.values,u,s(pe(c.values,u))),v=a?f(pe(c.errors,u)):void 0,E=o?p(pe(c.touched,u)):void 0;return nw(v)&&(v=void 0),nw(E)&&(E=void 0),te({},c,{values:y,errors:a?gn(c.errors,u,v):c.errors,touched:o?gn(c.touched,u,E):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(Pi(o),[r8(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return y8(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return g8(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Nf(a,s,o)},function(a){return Nf(a,s,null)},function(a){return Nf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return v8(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(tw(i)),i.pop=i.pop.bind(tw(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!ir(pe(i.formik.values,i.name),pe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?Pi(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=mr(d,["validate","validationSchema"]),f=te({},i,{form:c,name:u});return o?w.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):Ax(l)?null:w.Children.only(l):null},e}(w.Component);_8.defaultProps={validateOnChange:!0};var w8=function(t){Ox(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return pe(this.props.formik.errors,this.props.name)!==pe(i.formik.errors,this.props.name)||pe(this.props.formik.touched,this.props.name)!==pe(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=mr(i,["component","formik","render","children","name"]),c=pe(o.touched,u),f=pe(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?w.createElement(s,d,f):f:null},e}(w.Component),Cs=m8(w8);const E8=Li`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,S8=Li`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,C8=t=>{switch(t.$closing){case!1:return bi`
        animation: ${E8} 350ms ease 1 normal forwards;
      `;case!0:return bi`
        animation: ${S8} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},T8=Li`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,x8=Li`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,I8=t=>{switch(t.$closing){case!1:return bi`
        animation: ${T8} 350ms 350ms ease 1 normal forwards;
      `;case!0:return bi`
        animation: ${x8} 350ms ease 1 normal forwards;
      `;default:return null}},b8=R.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${C8}
`,k8=R.div`
  opacity: 0;
  ${I8}
`,P8=R.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,dy=({children:t,onClose:e})=>{const[n,r]=w.useState(!1);document.body.style.overflow="hidden";const i=w.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return w.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),IE.createPortal(C.jsx(b8,{id:"modalWrap",$closing:n,onClick:i,children:C.jsx(P8,{children:C.jsx(k8,{$closing:n,children:t})})}),document.querySelector("#root"))},R8=R.div`
  position: relative;
  max-width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 4.444vw;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,O8=R.h3`
  color: ${Ce.BLACK_TEXT};
  //font-size: 40px;
  font-size: calc(28px + (40 - 28) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,N8=R.p`
  color: ${Ce.BLACK_TEXT};
  font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,iw=R(_d)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${Ce.BLACK_TEXT};
  }
  margin-bottom: ${t=>t.marginbottom||"18px"};
`,A8=R.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: ${Ce.YELLOW_BUTTON};
  &:hover {
    background-color: ${Ce.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${Ce.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,D8=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,L8=R.div`
  position: relative;
`,M8=R.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,$8=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,F8=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function Ui(t){this._maxSize=t,this.clear()}Ui.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ui.prototype.get=function(t){return this._values[t]};Ui.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var j8=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Lx=/^\d+$/,U8=/^\d/,z8=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,W8=/^\s*(['"]?)(.*?)(\1)\s*$/,fy=512,sw=new Ui(fy),ow=new Ui(fy),aw=new Ui(fy),hi={Cache:Ui,split:Rp,normalizePath:Af,setter:function(t){var e=Af(t);return ow.get(t)||ow.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Af(t);return aw.get(t)||aw.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(hy(n)||Lx.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){B8(Array.isArray(t)?t:Rp(t),e,n)}};function Af(t){return sw.get(t)||sw.set(t,Rp(t).map(function(e){return e.replace(W8,"$2")}))}function Rp(t){return t.match(j8)||[""]}function B8(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(G8(i)&&(i='"'+i+'"'),a=hy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function hy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function V8(t){return t.match(U8)&&!t.match(Lx)}function H8(t){return z8.test(t)}function G8(t){return!hy(t)&&(V8(t)||H8(t))}const K8=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ed=t=>t.match(K8)||[],Sd=t=>t[0].toUpperCase()+t.slice(1),py=(t,e)=>Ed(t).join(e).toLowerCase(),Mx=t=>Ed(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),q8=t=>Sd(Mx(t)),Y8=t=>py(t,"_"),Q8=t=>py(t,"-"),X8=t=>Sd(py(t," ")),J8=t=>Ed(t).map(Sd).join(" ");var Df={words:Ed,upperFirst:Sd,camelCase:Mx,pascalCase:q8,snakeCase:Y8,kebabCase:Q8,sentenceCase:X8,titleCase:J8},my={exports:{}};my.exports=function(t){return $x(Z8(t),t)};my.exports.array=$x;function $x(t,e){var n=t.length,r=new Array(n),i={},s=n,o=ez(e),a=tz(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var y=p[--d];l(y,a.get(y),c)}while(d);c.delete(u)}r[--n]=u}}}function Z8(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function ez(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function tz(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var nz=my.exports;const rz=Gs(nz),iz=Object.prototype.toString,sz=Error.prototype.toString,oz=RegExp.prototype.toString,az=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",lz=/^Symbol\((.*)\)(.*)$/;function uz(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function lw(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return uz(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return az.call(t).replace(lz,"Symbol($1)");const r=iz.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+sz.call(t)+"]":r==="RegExp"?oz.call(t):null}function Or(t,e){let n=lw(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=lw(this[r],e);return s!==null?s:i},2)}function Fx(t){return t==null?[]:[].concat(t)}let jx,Ux,zx,cz=/\$\{\s*(\w+)\s*\}/g;jx=Symbol.toStringTag;class uw{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[jx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Fx(e).forEach(s=>{if(lt.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Ux=Symbol.hasInstance;zx=Symbol.toStringTag;class lt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(cz,(i,s)=>Or(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new uw(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[zx]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,lt)}static[Ux](e){return uw[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Or(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Or(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Or(n,!0)}\``+i}},ot={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},dz={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Op={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},fz={isValue:"${path} field must be ${value}"},Np={noUnknown:"${path} field has unspecified keys: ${unknown}"},hz={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},pz={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Or(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Or(n,!0)}\``}return lt.formatError(ln.notType,t)}};Object.assign(Object.create(null),{mixed:ln,string:ot,number:dz,date:Op,object:Np,array:hz,boolean:fz,tuple:pz});const gy=t=>t&&t.__isYupSchema__;class dc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new dc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!gy(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Il={context:"$",value:"."};class zi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Il.context,this.isValue=this.key[0]===Il.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Il.context:this.isValue?Il.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&hi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}zi.prototype.__isYupRef=!0;const ai=t=>t==null;function Ki(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:y,context:v,abortEarly:E=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(W){return zi.isRef(W)?W.getValue(n,y,v):W}function g(W={}){const Fe=Object.assign({value:n,originalValue:s,label:o.spec.label,path:W.path||r,spec:o.spec,disableStackTrace:W.disableStackTrace||m},c,W.params);for(const vt of Object.keys(Fe))Fe[vt]=h(Fe[vt]);const we=new lt(lt.formatError(W.message||f,Fe),n,Fe.path,W.type||u,Fe.disableStackTrace);return we.params=Fe,we}const _=E?a:l;let x={path:r,parent:y,type:u,from:i.from,createError:g,resolve:h,options:i,originalValue:s,schema:o};const S=W=>{lt.isError(W)?_(W):W?l(null):_(g())},T=W=>{lt.isError(W)?_(W):a(W)};if(p&&ai(n))return S(!0);let D;try{var $;if(D=d.call(x,n,x),typeof(($=D)==null?void 0:$.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(D).then(S,T)}}catch(W){T(W);return}S(D)}return e.OPTIONS=t,e}function mz(t,e,n,r=n){let i,s,o;return e?(hi.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class fc extends Set{describe(){const e=[];for(const n of this.values())e.push(zi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new fc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ds(t,e=new Map){if(gy(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ds(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,ds(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ds(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=ds(i,e)}else throw Error(`Unable to clone ${t}`);return n}class yn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fc,this._blacklist=new fc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ds(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ai(s))return s;let o=Or(e),a=Or(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=v=>{i||(i=!0,n(v,o))},c=v=>{i||(i=!0,r(v,o))},f=s.length,p=[];if(!f)return c([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const E=s[v];E(y,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{lt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new lt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw lt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new lt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ds(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ki({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ki({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=ln.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ln.notNull){return this.nullability(!1,e)}required(e=ln.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ki(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=Fx(e).map(s=>new zi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new dc(i,n):dc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ki({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=ln.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ki({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=ln.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ki({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}yn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])yn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=mz(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])yn.prototype[t]=yn.prototype.oneOf;for(const t of["not","nope"])yn.prototype[t]=yn.prototype.notOneOf;const gz=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function yz(t){const e=Ap(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Ap(t){var e,n;const r=gz.exec(t);return r?{year:Cn(r[1]),month:Cn(r[2],1)-1,day:Cn(r[3],1),hour:Cn(r[4]),minute:Cn(r[5]),second:Cn(r[6]),millisecond:r[7]?Cn(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Cn(r[10]),minuteOffset:Cn(r[11])}:null}function Cn(t,e=0){return Number(t)||e}let vz=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_z=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,wz=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Ez="^\\d{4}-\\d{2}-\\d{2}",Sz="\\d{2}:\\d{2}:\\d{2}",Cz="(([+-]\\d{2}(:?\\d{2})?)|Z)",Tz=new RegExp(`${Ez}T${Sz}(\\.\\d+)?${Cz}$`),xz=t=>ai(t)||t===t.trim(),Iz={}.toString();function dn(){return new Wx}class Wx extends yn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Iz?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=ot.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=ot.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=ot.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||ot.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=ot.email){return this.matches(vz,{name:"email",message:e,excludeEmptyString:!0})}url(e=ot.url){return this.matches(_z,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=ot.uuid){return this.matches(wz,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(Tz,{name:"datetime",message:n||ot.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||ot.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=Ap(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||ot.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=Ap(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=ot.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:xz})}lowercase(e=ot.lowercase){return this.transform(n=>ai(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toLowerCase()})}uppercase(e=ot.uppercase){return this.transform(n=>ai(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toUpperCase()})}}dn.prototype=Wx.prototype;let bz=new Date(""),kz=t=>Object.prototype.toString.call(t)==="[object Date]";class Cd extends yn{constructor(){super({type:"date",check(e){return kz(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=yz(e),isNaN(e)?Cd.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(zi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Op.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Op.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Cd.INVALID_DATE=bz;Cd.prototype;function Pz(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=hi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),zi.isRef(a)&&a.isSibling?s(a.path,o):gy(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return rz.array(Array.from(r),n).reverse()}function cw(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function Bx(t){return(e,n)=>cw(t,e)-cw(t,n)}const Rz=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function ru(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=ru(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=ru(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(ru)}):"optional"in t?t.optional():t}const Oz=(t,e)=>{const n=[...hi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=hi.getter(hi.join(n),!0)(t);return!!(i&&r in i)};let dw=t=>Object.prototype.toString.call(t)==="[object Object]";function Nz(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const Az=Bx([]);function Td(t){return new Vx(t)}class Vx extends yn{constructor(e){super({type:"object",check(n){return dw(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=Az,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let y,v=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:v,context:n.context,parent:l});let E=f instanceof yn?f.spec:void 0,m=E==null?void 0:E.strict;if(E!=null&&E.strip){d=d||c in i;continue}y=!n.__validating||!m?f.cast(i[c],u):i[c],y!==void 0&&(l[c]=y)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!dw(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||zi.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=Pz(e,n),r._sortErrors=Bx(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return ru(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=hi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return Oz(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(Rz)}noUnknown(e=!0,n=Np.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=Nz(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Np.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Df.camelCase)}snakeCase(){return this.transformKeys(Df.snakeCase)}constantCase(){return this.transformKeys(e=>Df.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Td.prototype=Vx.prototype;const Dz="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9502%2012.9499C13.5257%2014.0358%2011.7911%2014.6373%2010.0002%2014.6666C4.16683%2014.6666%200.833496%207.99994%200.833496%207.99994C1.87007%206.06819%203.30778%204.38045%205.05016%203.04994M8.25016%201.53327C8.82377%201.39901%209.41105%201.33189%2010.0002%201.33327C15.8335%201.33327%2019.1668%207.99994%2019.1668%207.99994C18.661%208.94628%2018.0577%209.83722%2017.3668%2010.6583M11.7668%209.76661C11.538%2010.0122%2011.262%2010.2092%2010.9553%2010.3459C10.6486%2010.4825%2010.3176%2010.556%209.98191%2010.5619C9.64623%2010.5678%209.3128%2010.5061%209.00151%2010.3803C8.69021%2010.2546%208.40743%2010.0675%208.17004%209.83007C7.93264%209.59267%207.74549%209.30989%207.61975%208.9986C7.49402%208.6873%207.43227%208.35387%207.43819%208.0182C7.44411%207.68252%207.51759%207.35148%207.65423%207.04481C7.79087%206.73815%207.98787%206.46215%208.2335%206.23327'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Hx="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_27_348)'%3e%3cpath%20d='M14.9502%2014.9499C13.5257%2016.0358%2011.7911%2016.6373%2010.0002%2016.6666C4.16683%2016.6666%200.833496%209.99994%200.833496%209.99994C1.87007%208.06819%203.30778%206.38045%205.05016%205.04994M8.25016%203.53327C8.82377%203.39901%209.41105%203.33189%2010.0002%203.33327C15.8335%203.33327%2019.1668%209.99994%2019.1668%209.99994C18.661%2010.9463%2018.0577%2011.8372%2017.3668%2012.6583M11.7668%2011.7666C11.538%2012.0122%2011.262%2012.2092%2010.9553%2012.3459C10.6486%2012.4825%2010.3176%2012.556%209.98191%2012.5619C9.64623%2012.5678%209.3128%2012.5061%209.00151%2012.3803C8.69021%2012.2546%208.40743%2012.0675%208.17004%2011.8301C7.93264%2011.5927%207.74549%2011.3099%207.61975%2010.9986C7.49402%2010.6873%207.43227%2010.3539%207.43819%2010.0182C7.44411%209.68252%207.51759%209.35148%207.65423%209.04481C7.79087%208.73815%207.98787%208.46215%208.2335%208.23327'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M0.833496%200.833374L19.1668%2019.1667'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_27_348'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",yy="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20fill='none'%3e%3cpath%20stroke='%23121417'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.5'%20d='M24%208%208%2024M8%208l16%2016'/%3e%3c/svg%3e",Lz={email:"",password:""},Mz=Td().shape({email:dn().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:dn().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),Gx=({onClose:t})=>{const[e,n]=w.useState(!1),r=Nc(),i=(o,{resetForm:a})=>{r(iC({value:o})),a(),t()},s=({name:o})=>{switch(o){case"email":return C.jsx(Cs,{name:o,component:$8});case"password":return C.jsx(Cs,{name:o,component:F8})}};return C.jsx(dy,{onClose:t,children:C.jsx(R8,{children:C.jsx(cy,{initialValues:Lz,validationSchema:Mz,onSubmit:i,children:C.jsxs(wd,{children:[C.jsx(D8,{onClick:t,children:C.jsx("img",{src:yy,alt:"Close"})}),C.jsx(O8,{children:"Log In"}),C.jsx(N8,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),C.jsxs(L8,{children:[C.jsx(iw,{type:"text",name:"email",placeholder:"Email"}),C.jsx(s,{name:"email"}),C.jsx(iw,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),C.jsx(s,{name:"password"}),C.jsx(A8,{type:"submit",children:"Log In"}),C.jsx(M8,{type:"button",onClick:()=>{n(!e)},children:e?C.jsx("img",{src:Dz,alt:"Eye On"}):C.jsx("img",{src:Hx,alt:"Eye Off"})})]})]})})})})};Gx.propTypes={onClose:Bn.func.isRequired,name:Bn.string};const $z=R.div`
  position: relative;
  max-width: 566px;
  background-color: #fff;
  padding: 64px 4.444vw 64px 4.444vw;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,Fz=R.h3`
  color: ${Ce.BLACK_TEXT};
  //font-size: 40px;
  font-size: calc(28px + (40 - 28) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,jz=R.p`
  color: ${Ce.BLACK_TEXT};
  //font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,Lf=R(_d)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${Ce.BLACK_TEXT};
  }
`,Uz=R.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: ${Ce.YELLOW_BUTTON};
  &:hover {
    background-color: ${Ce.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${Ce.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,zz=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,Wz=R.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,Bz=R.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,Vz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,Hz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,Gz=R.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,Kz={name:"",email:"",password:""},qz=Td().shape({name:dn().required("Be sure to enter your name"),email:dn().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:dn().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),Kx=({onClose:t})=>{const[e,n]=w.useState(!1),r=Nc(),i=o=>{r(rC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return C.jsx(Cs,{name:o,component:Vz});case"email":return C.jsx(Cs,{name:o,component:Hz});case"password":return C.jsx(Cs,{name:o,component:Gz})}};return C.jsx(dy,{onClose:t,children:C.jsx($z,{children:C.jsx(cy,{initialValues:Kz,validationSchema:qz,onSubmit:i,children:C.jsxs(wd,{children:[C.jsx(zz,{onClick:t,children:C.jsx("img",{src:yy,alt:"Close"})}),C.jsx(Fz,{children:"Registration"}),C.jsxs(jz,{children:["Thank you for your interest in our platform! In order to register",C.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),C.jsxs(Wz,{children:[C.jsx(Lf,{type:"text",name:"name",placeholder:"Name"}),C.jsx(s,{name:"name"}),C.jsx(Lf,{type:"text",name:"email",placeholder:"Email"}),C.jsx(s,{name:"email"}),C.jsx(Lf,{type:e?"text":"password",name:"password",placeholder:"Password"}),C.jsx(s,{name:"password"}),C.jsx(Bz,{type:"button",onClick:()=>{n(!e)},children:e?C.jsx(EyeOn,{}):C.jsx("img",{src:Hx,alt:"Eye Off"})})]}),C.jsx(Uz,{type:"submit",children:"Sign Up"})]})})})})};Kx.propTypes={onClose:Bn.func.isRequired,name:Bn.string};const Yz=R.div`
  max-width: 600px;
  padding: 64px;
  background-color: ${Ce.WHITE};
  border-radius: 30px;
`,Qz=R.div`
  margin-block-end: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`,Eo=R(_d)`
  margin-inline-end: 8px;
  cursor: pointer;
  position: relative;
  top: 5px;
  block-size: 22px;
  inline-size: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid rgba(18, 20, 23, 0.1);
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    border: 2px solid #f4c550;
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 12px;
    block-size: 12px;
    border-radius: 50%;
    background-color: #f4c550;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`,Mf=R(_d)`
  inline-size: 100%;
  margin-block-end: 18px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`,$f=R(Cs)`
  font-size: 12px;
  color: red;
  margin-block-end: 18px;
`,Xz=R.button`
  padding-block: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
  transition: background-color 350ms linear;
  width: 100%;
  margin-top: 22px;

  &:hover {
    background-color: #ffdc86;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.555;
    white-space: nowrap;
  }
`,Jz=R.h1`
  color: rgb(18, 20, 23);
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`,Zz=R.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
`,eW=R.img`
  width: 44px;
  border-radius: 100%;
`,tW=R.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;
`,nW=R.p`
  color: rgb(138, 138, 137);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,rW=R.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,iW=R.h3`
  color: rgb(18, 20, 23);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
`,sW=R.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,_W=t=>t.teachers.teachersCard,wW=t=>t.teachers.favorite,oW=t=>t.teachers.card,aW={reason:"",name:"",email:"",phone:""},lW=Td().shape({reason:dn().required("Please choose a reason for learning English"),name:dn().min(3,"Minimum 3 characters").max(30,"Maximum 30 characters").required("Required"),email:dn().email("Invalid email address").required("Fill in the mandatory email field"),phone:dn().required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes.")}),qx=({onClose:t})=>{const{avatar_url:e,name:n,surname:r}=WE(oW),i=(s,{resetForm:o})=>{eg.success("Trial lesson successfully ordered."),o(),t()};return C.jsx(C.Fragment,{children:C.jsx(dy,{onClose:t,children:C.jsx(Yz,{children:C.jsx(cy,{initialValues:aW,validationSchema:lW,onSubmit:i,children:C.jsxs(wd,{children:[C.jsx(sW,{onClick:t,children:C.jsx("img",{src:yy,alt:"Close"})}),C.jsx(Jz,{children:"Book trial lesson"}),C.jsx(Zz,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),C.jsxs(tW,{children:[C.jsx(eW,{src:e,alt:"avatar"}),C.jsxs("div",{children:[C.jsx(nW,{children:"Your teacher"}),C.jsxs(rW,{children:[n," ",r]})]})]}),C.jsx(iW,{children:"What is your main reason for learning English?"}),C.jsxs(Qz,{children:[C.jsxs("label",{children:[C.jsx(Eo,{type:"radio",name:"reason",value:"CaB"}),"Career and business"]}),C.jsxs("label",{children:[C.jsx(Eo,{type:"radio",name:"reason",value:"LfK"}),"Lesson for kids"]}),C.jsxs("label",{children:[C.jsx(Eo,{type:"radio",name:"reason",value:"LA"}),"Living abroad"]}),C.jsxs("label",{children:[C.jsx(Eo,{type:"radio",name:"reason",value:"EaC"}),"Exams and coursework"]}),C.jsxs("label",{children:[C.jsx(Eo,{type:"radio",name:"reason",value:"fiv"}),"Culture, travel or hobby"]})]}),C.jsxs("label",{"aria-label":"Field for Full name",children:[C.jsx(Mf,{type:"text",name:"name",placeholder:"Name"}),C.jsx($f,{name:"name",component:"div"})]}),C.jsxs("label",{"aria-label":"Field for Email",children:[C.jsx(Mf,{type:"email",name:"email",placeholder:"Email"}),C.jsx($f,{name:"email",component:"div"})]}),C.jsxs("label",{"aria-label":"Field for Phone number",children:[C.jsx(Mf,{type:"tel",name:"phone",placeholder:"Phone number"}),C.jsx($f,{name:"phone",component:"div"})]}),C.jsx(Xz,{type:"submit",children:C.jsx("span",{children:"Book"})})]})})})})})};qx.propTypes={onClose:Bn.func.isRequired};const Yx=({namePopUp:t,onClose:e})=>{switch(t){case"login":return C.jsx(Gx,{onClose:e});case"signin":return C.jsx(Kx,{onClose:e});case"trial":return C.jsx(qx,{onClose:e})}return C.jsx(C.Fragment,{})};Yx.propTypes={namePopUp:Bn.string.isRequired,onClose:Bn.func.isRequired};const uW=({children:t})=>{const e=qg(),n=e.isLoggedIn,r=e.isLoggedIn;return!n&&!r?C.jsx(Dh,{to:"/"}):t},fw=w.lazy(()=>Fg(()=>import("./Home-BA3NIAQ4.js"),__vite__mapDeps([]))),cW=w.lazy(()=>Fg(()=>import("./Teachers-CYAAljGZ.js"),__vite__mapDeps([0,1]))),dW=w.lazy(()=>Fg(()=>import("./Favorite-DZB_08rZ.js"),__vite__mapDeps([2,1]))),fW=()=>{const[t,e]=w.useState(""),n=Nc();return w.useEffect(()=>{n(Gl())},[n]),C.jsxs(C.Fragment,{children:[C.jsxs(EP,{children:[C.jsxs(qi,{path:"/",element:C.jsx(ZT,{setNamePopUp:e}),children:[C.jsx(qi,{index:!0,element:C.jsx(fw,{})}),C.jsx(qi,{path:"/teachers",element:C.jsx(cW,{setNamePopUp:e})}),C.jsx(qi,{path:"favorites",element:C.jsx(uW,{children:C.jsx(dW,{setNamePopUp:e})})})]}),C.jsx(qi,{path:"*",element:C.jsx(fw,{})})]}),C.jsx(Yx,{namePopUp:t,onClose:()=>e("")}),C.jsx(KD,{})]})},EW=R.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  max-width: 968px;
  margin-bottom: 32px;
`,SW=R.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;R.img`
  border-radius: 100px;
`;const CW=R.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,TW=R.li``,xW=R.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,IW=R.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,bW=R.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,kW=R.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,PW=R.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,hW=({children:t})=>C.jsx(rj,{shouldForwardProp:e=>e!=="avatarUrl",children:t});jf.createRoot(document.getElementById("root")).render(C.jsx(ut.StrictMode,{children:C.jsx(CT,{loading:null,persistor:KF,children:C.jsx(PP,{basename:"/lingo-app/",children:C.jsx(tR,{store:ST,children:C.jsxs(hW,{children:[C.jsx(fW,{}),C.jsx(cj,{})]})})})})}));export{PW as C,EW as E,NP as L,SW as R,kW as S,IW as W,eg as _,WE as a,Nc as b,Ce as c,wW as d,TW as e,CW as f,Sf as g,xW as h,bW as i,C as j,gW as k,qg as l,yW as m,vW as n,Bn as p,w as r,_W as s,R as u};
