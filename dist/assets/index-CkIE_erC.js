(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hm={exports:{}},Gl={},jm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),n0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),Vd=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Wm={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Vm}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=Ks.prototype;function Nf(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Vm}var If=Nf.prototype=new Xm;If.constructor=Nf;Gm(If,Ks.prototype);If.isPureReactComponent=!0;var Gd=Array.isArray,Ym=Object.prototype.hasOwnProperty,Uf={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,i)&&!$m.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:to,type:t,key:s,ref:a,props:r,_owner:Uf.current}}function h0(t,e){return{$$typeof:to,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function p0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wd=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p0(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case to:case n0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vc(a,0):i,Gd(r)?(n="",t!=null&&(n=t.replace(Wd,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(Ff(r)&&(r=h0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Wd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Gd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vc(s,o);a+=tl(s,e,n,l,r)}else if(l=d0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,o++),a+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function co(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function m0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},nl={transition:null},g0={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Uf};function Km(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ks;Ve.Fragment=i0;Ve.Profiler=s0;Ve.PureComponent=Nf;Ve.StrictMode=r0;Ve.Suspense=c0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;Ve.act=Km;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ym.call(e,l)&&!$m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:to,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a0,_context:t},t.Consumer=t};Ve.createElement=qm;Ve.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:l0,render:t}};Ve.isValidElement=Ff;Ve.lazy=function(t){return{$$typeof:f0,_payload:{_status:-1,_result:t},_init:m0}};Ve.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};Ve.unstable_act=Km;Ve.useCallback=function(t,e){return an.current.useCallback(t,e)};Ve.useContext=function(t){return an.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return an.current.useEffect(t,e)};Ve.useId=function(){return an.current.useId()};Ve.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return an.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ve.useRef=function(t){return an.current.useRef(t)};Ve.useState=function(t){return an.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return an.current.useTransition()};Ve.version="18.3.1";jm.exports=Ve;var Ee=jm.exports;const Zm=zm(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=Ee,x0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),y0=Object.prototype.hasOwnProperty,S0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)y0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x0,type:t,key:s,ref:a,props:r,_owner:S0.current}}Gl.Fragment=_0;Gl.jsx=Qm;Gl.jsxs=Qm;Hm.exports=Gl;var p=Hm.exports,Tu={},Jm={exports:{}},Mn={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var H=N.length;N.push(O);e:for(;0<H;){var z=H-1>>>1,q=N[z];if(0<r(q,O))N[z]=O,N[H]=q,H=z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],H=N.pop();if(H!==O){N[0]=H;e:for(var z=0,q=N.length,ce=q>>>1;z<ce;){var ue=2*(z+1)-1,me=N[ue],ye=ue+1,Ae=N[ye];if(0>r(me,H))ye<q&&0>r(Ae,me)?(N[z]=Ae,N[ye]=H,z=ye):(N[z]=me,N[ue]=H,z=ue);else if(ye<q&&0>r(Ae,H))N[z]=Ae,N[ye]=H,z=ye;else break e}}return O}function r(N,O){var H=N.sortIndex-O.sortIndex;return H!==0?H:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,g=!1,x=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(N){if(_=!1,m(N),!x)if(n(l)!==null)x=!0,B(w);else{var O=n(c);O!==null&&F(S,O.startTime-N)}}function w(N,O){x=!1,_&&(_=!1,u(I),I=-1),g=!0;var H=d;try{for(m(O),h=n(l);h!==null&&(!(h.expirationTime>O)||N&&!Q());){var z=h.callback;if(typeof z=="function"){h.callback=null,d=h.priorityLevel;var q=z(h.expirationTime<=O);O=t.unstable_now(),typeof q=="function"?h.callback=q:h===n(l)&&i(l),m(O)}else i(l);h=n(l)}if(h!==null)var ce=!0;else{var ue=n(c);ue!==null&&F(S,ue.startTime-O),ce=!1}return ce}finally{h=null,d=H,g=!1}}var R=!1,T=null,I=-1,E=5,A=-1;function Q(){return!(t.unstable_now()-A<E)}function ee(){if(T!==null){var N=t.unstable_now();A=N;var O=!0;try{O=T(!0,N)}finally{O?W():(R=!1,T=null)}}else R=!1}var W;if(typeof y=="function")W=function(){y(ee)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,P=U.port2;U.port1.onmessage=ee,W=function(){P.postMessage(null)}}else W=function(){v(ee,0)};function B(N){T=N,R||(R=!0,W())}function F(N,O){I=v(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,B(w))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var H=d;d=O;try{return N()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=d;d=N;try{return O()}finally{d=H}},t.unstable_scheduleCallback=function(N,O,H){var z=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?z+H:z):H=z,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=H+q,N={id:f++,callback:O,priorityLevel:N,startTime:H,expirationTime:q,sortIndex:-1},H>z?(N.sortIndex=H,e(c,N),n(l)===null&&N===n(c)&&(_?(u(I),I=-1):_=!0,F(S,H-z))):(N.sortIndex=q,e(l,N),x||g||(x=!0,B(w))),N},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(N){var O=d;return function(){var H=d;d=O;try{return N.apply(this,arguments)}finally{d=H}}}})(tg);eg.exports=tg;var M0=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=Ee,En=M0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,Fa={};function Hr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Fa[t]=e,t=0;t<e.length;t++)ng.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,T0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},Yd={};function A0(t){return Au.call(Yd,t)?!0:Au.call(Xd,t)?!1:T0.test(t)?Yd[t]=!0:(Xd[t]=!0,!1)}function b0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C0(t,e,n,i){if(e===null||typeof e>"u"||b0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Of,kf);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Of,kf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Of,kf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C0(e,n,r,i)&&(n=null),i||r===null?A0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),rg=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),$d=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,xc;function Sa(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var _c=!1;function yc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function R0(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case bu:return"Profiler";case zf:return"StrictMode";case Cu:return"Suspense";case Ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rg:return(t.displayName||"Context")+".Consumer";case ig:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function P0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L0(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fo(t){t._valueTracker||(t._valueTracker=L0(t))}function og(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lg(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function Du(t,e){lg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ea(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function cg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ug(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ug(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ho,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D0=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){D0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var N0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(N0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bu=null,Rs=null,Ps=null;function Jd(t){if(t=ro(t)){if(typeof Bu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=ql(e),Bu(t.stateNode,t.type,e))}}function pg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function mg(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function gg(t,e){return t(e)}function vg(){}var Sc=!1;function xg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return gg(t,e,n)}finally{Sc=!1,(Rs!==null||Ps!==null)&&(vg(),mg())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var zu=!1;if(Ci)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){zu=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{zu=!1}function I0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ba=!1,vl=null,xl=!1,Hu=null,U0={onError:function(t){ba=!0,vl=t}};function F0(t,e,n,i,r,s,a,o,l){ba=!1,vl=null,I0.apply(U0,arguments)}function O0(t,e,n,i,r,s,a,o,l){if(F0.apply(this,arguments),ba){if(ba){var c=vl;ba=!1,vl=null}else throw Error(ne(198));xl||(xl=!0,Hu=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(jr(t)!==t)throw Error(ne(188))}function k0(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eh(r),t;if(s===i)return eh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function yg(t){return t=k0(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=En.unstable_scheduleCallback,th=En.unstable_cancelCallback,B0=En.unstable_shouldYield,z0=En.unstable_requestPaint,yt=En.unstable_now,H0=En.unstable_getCurrentPriorityLevel,Gf=En.unstable_ImmediatePriority,Mg=En.unstable_UserBlockingPriority,_l=En.unstable_NormalPriority,j0=En.unstable_LowPriority,wg=En.unstable_IdlePriority,Wl=null,ii=null;function V0(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:X0,G0=Math.log,W0=Math.LN2;function X0(t){return t>>>=0,t===0?32:31-(G0(t)/W0|0)|0}var po=64,mo=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ma(o):(s&=a,s!==0&&(i=Ma(s)))}else a=n&~r,a!==0?i=Ma(a):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function Y0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Yn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Y0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tg(){var t=po;return po<<=1,!(po&4194240)&&(po=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function no(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,Xf,Cg,Rg,Pg,Vu=!1,go=[],qi=null,Ki=null,Zi=null,Ba=new Map,za=new Map,Gi=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ro(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Z0(t,e,n,i,r){switch(e){case"focusin":return qi=ra(qi,t,e,n,i,r),!0;case"dragenter":return Ki=ra(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=ra(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,ra(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,ra(za.get(s)||null,t,e,n,i,r)),!0}return!1}function Lg(t){var e=Tr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=_g(n),e!==null){t.blockedOn=e,Pg(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ku=i,n.target.dispatchEvent(i),ku=null}else return e=ro(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){il(t)&&n.delete(e)}function Q0(){Vu=!1,qi!==null&&il(qi)&&(qi=null),Ki!==null&&il(Ki)&&(Ki=null),Zi!==null&&il(Zi)&&(Zi=null),Ba.forEach(ih),za.forEach(ih)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Q0)))}function Ha(t){function e(r){return sa(r,t)}if(0<go.length){sa(go[0],t);for(var n=1;n<go.length;n++){var i=go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&sa(qi,t),Ki!==null&&sa(Ki,t),Zi!==null&&sa(Zi,t),Ba.forEach(e),za.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)Lg(n),n.blockedOn===null&&Gi.shift()}var Ls=Ii.ReactCurrentBatchConfig,Sl=!0;function J0(t,e,n,i){var r=Je,s=Ls.transition;Ls.transition=null;try{Je=1,Yf(t,e,n,i)}finally{Je=r,Ls.transition=s}}function e_(t,e,n,i){var r=Je,s=Ls.transition;Ls.transition=null;try{Je=4,Yf(t,e,n,i)}finally{Je=r,Ls.transition=s}}function Yf(t,e,n,i){if(Sl){var r=Gu(t,e,n,i);if(r===null)Dc(t,e,i,El,n),nh(t,i);else if(Z0(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<K0.indexOf(t)){for(;r!==null;){var s=ro(r);if(s!==null&&bg(s),s=Gu(t,e,n,i),s===null&&Dc(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dc(t,e,i,null,n)}}var El=null;function Gu(t,e,n,i){if(El=null,t=Vf(i),t=Tr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H0()){case Gf:return 1;case Mg:return 4;case _l:case j0:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Xi=null,$f=null,rl=null;function Ng(){if(rl)return rl;var t,e=$f,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function rh(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vo:rh,this.isPropagationStopped=rh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=wn(Zs),io=mt({},Zs,{view:0,detail:0}),t_=wn(io),Mc,wc,aa,Xl=mt({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Mc=t.screenX-aa.screenX,wc=t.screenY-aa.screenY):wc=Mc=0,aa=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),sh=wn(Xl),n_=mt({},Xl,{dataTransfer:0}),i_=wn(n_),r_=mt({},io,{relatedTarget:0}),Tc=wn(r_),s_=mt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=wn(s_),o_=mt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l_=wn(o_),c_=mt({},Zs,{data:0}),ah=wn(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d_[t])?!!e[t]:!1}function Kf(){return h_}var p_=mt({},io,{key:function(t){if(t.key){var e=u_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m_=wn(p_),g_=mt({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=wn(g_),v_=mt({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),x_=wn(v_),__=mt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=wn(__),S_=mt({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E_=wn(S_),M_=[9,13,27,32],Zf=Ci&&"CompositionEvent"in window,Ca=null;Ci&&"documentMode"in document&&(Ca=document.documentMode);var w_=Ci&&"TextEvent"in window&&!Ca,Ig=Ci&&(!Zf||Ca&&8<Ca&&11>=Ca),lh=" ",ch=!1;function Ug(t,e){switch(t){case"keyup":return M_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function T_(t,e){switch(t){case"compositionend":return Fg(e);case"keypress":return e.which!==32?null:(ch=!0,lh);case"textInput":return t=e.data,t===lh&&ch?null:t;default:return null}}function A_(t,e){if(vs)return t==="compositionend"||!Zf&&Ug(t,e)?(t=Ng(),rl=$f=Xi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ig&&e.locale!=="ko"?null:e.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b_[t.type]:e==="textarea"}function Og(t,e,n,i){pg(i),e=Ml(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,ja=null;function C_(t){$g(t,0)}function Yl(t){var e=ys(t);if(og(e))return t}function R_(t,e){if(t==="change")return e}var kg=!1;if(Ci){var Ac;if(Ci){var bc="oninput"in document;if(!bc){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),bc=typeof fh.oninput=="function"}Ac=bc}else Ac=!1;kg=Ac&&(!document.documentMode||9<document.documentMode)}function dh(){Ra&&(Ra.detachEvent("onpropertychange",Bg),ja=Ra=null)}function Bg(t){if(t.propertyName==="value"&&Yl(ja)){var e=[];Og(e,ja,t,Vf(t)),xg(C_,e)}}function P_(t,e,n){t==="focusin"?(dh(),Ra=e,ja=n,Ra.attachEvent("onpropertychange",Bg)):t==="focusout"&&dh()}function L_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(ja)}function D_(t,e){if(t==="click")return Yl(e)}function N_(t,e){if(t==="input"||t==="change")return Yl(e)}function I_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:I_;function Va(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Au.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hg(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U_(t){var e=Hg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(i!==null&&Qf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ph(n,s);var a=ph(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var F_=Ci&&"documentMode"in document&&11>=document.documentMode,xs=null,Wu=null,Pa=null,Xu=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||xs==null||xs!==gl(i)||(i=xs,"selectionStart"in i&&Qf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Va(Pa,i)||(Pa=i,i=Ml(Wu,"onSelect"),0<i.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Cc={},jg={};Ci&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function $l(t){if(Cc[t])return Cc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Cc[t]=e[n];return t}var Vg=$l("animationend"),Gg=$l("animationiteration"),Wg=$l("animationstart"),Xg=$l("transitionend"),Yg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Yg.set(t,e),Hr(e,[t])}for(var Rc=0;Rc<gh.length;Rc++){var Pc=gh[Rc],O_=Pc.toLowerCase(),k_=Pc[0].toUpperCase()+Pc.slice(1);lr(O_,"on"+k_)}lr(Vg,"onAnimationEnd");lr(Gg,"onAnimationIteration");lr(Wg,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Xg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O0(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;vh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;vh(r,o,c),s=l}}}if(xl)throw t=Hu,xl=!1,Hu=null,t}function at(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(qg(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),qg(n,t,i,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[_o]){t[_o]=!0,ng.forEach(function(n){n!=="selectionchange"&&(B_.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Lc("selectionchange",!1,e))}}function qg(t,e,n,i){switch(Dg(e)){case 1:var r=J0;break;case 4:r=e_;break;default:r=Yf}n=r.bind(null,e,n,t),r=void 0,!zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xg(function(){var c=s,f=Vf(n),h=[];e:{var d=Yg.get(t);if(d!==void 0){var g=qf,x=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":g=m_;break;case"focusin":x="focus",g=Tc;break;case"focusout":x="blur",g=Tc;break;case"beforeblur":case"afterblur":g=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=x_;break;case Vg:case Gg:case Wg:g=a_;break;case Xg:g=y_;break;case"scroll":g=t_;break;case"wheel":g=E_;break;case"copy":case"cut":case"paste":g=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=oh}var _=(e&4)!==0,v=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var y=c,m;y!==null;){m=y;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,u!==null&&(S=ka(y,u),S!=null&&_.push(Wa(y,S,m)))),v)break;y=y.return}0<_.length&&(d=new g(d,x,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ku&&(x=n.relatedTarget||n.fromElement)&&(Tr(x)||x[Ri]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Tr(x):null,x!==null&&(v=jr(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(_=sh,S="onMouseLeave",u="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=oh,S="onPointerLeave",u="onPointerEnter",y="pointer"),v=g==null?d:ys(g),m=x==null?d:ys(x),d=new _(S,y+"leave",g,n,f),d.target=v,d.relatedTarget=m,S=null,Tr(f)===c&&(_=new _(u,y+"enter",x,n,f),_.target=m,_.relatedTarget=v,S=_),v=S,g&&x)t:{for(_=g,u=x,y=0,m=_;m;m=Gr(m))y++;for(m=0,S=u;S;S=Gr(S))m++;for(;0<y-m;)_=Gr(_),y--;for(;0<m-y;)u=Gr(u),m--;for(;y--;){if(_===u||u!==null&&_===u.alternate)break t;_=Gr(_),u=Gr(u)}_=null}else _=null;g!==null&&xh(h,d,g,_,!1),x!==null&&v!==null&&xh(h,v,x,_,!0)}}e:{if(d=c?ys(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var w=R_;else if(uh(d))if(kg)w=N_;else{w=L_;var R=P_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=D_);if(w&&(w=w(t,c))){Og(h,w,n,f);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Nu(d,"number",d.value)}switch(R=c?ys(c):window,t){case"focusin":(uh(R)||R.contentEditable==="true")&&(xs=R,Wu=c,Pa=null);break;case"focusout":Pa=Wu=xs=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,mh(h,n,f);break;case"selectionchange":if(F_)break;case"keydown":case"keyup":mh(h,n,f)}var T;if(Zf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else vs?Ug(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Ig&&n.locale!=="ko"&&(vs||I!=="onCompositionStart"?I==="onCompositionEnd"&&vs&&(T=Ng()):(Xi=f,$f="value"in Xi?Xi.value:Xi.textContent,vs=!0)),R=Ml(c,I),0<R.length&&(I=new ah(I,t,null,n,f),h.push({event:I,listeners:R}),T?I.data=T:(T=Fg(n),T!==null&&(I.data=T)))),(T=w_?T_(t,n):A_(t,n))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(f=new ah("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}$g(h,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ka(t,n),s!=null&&i.unshift(Wa(t,s,r)),s=ka(t,e),s!=null&&i.push(Wa(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ka(n,s),l!=null&&a.unshift(Wa(n,l,o))):r||(l=ka(n,s),l!=null&&a.push(Wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var z_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function _h(t){return(typeof t=="string"?t:""+t).replace(z_,`
`).replace(H_,"")}function yo(t,e,n){if(e=_h(e),_h(t)!==e&&n)throw Error(ne(425))}function wl(){}var Yu=null,$u=null;function qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,j_=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,V_=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(G_)}:Ku;function G_(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ha(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Qs,Xa="__reactProps$"+Qs,Ri="__reactContainer$"+Qs,Zu="__reactEvents$"+Qs,W_="__reactListeners$"+Qs,X_="__reactHandles$"+Qs;function Tr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[ni])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function ql(t){return t[Xa]||null}var Qu=[],Ss=-1;function cr(t){return{current:t}}function ot(t){0>Ss||(t.current=Qu[Ss],Qu[Ss]=null,Ss--)}function it(t,e){Ss++,Qu[Ss]=t.current,t.current=e}var or={},Zt=cr(or),un=cr(!1),Ur=or;function ks(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Tl(){ot(un),ot(Zt)}function Eh(t,e,n){if(Zt.current!==or)throw Error(ne(168));it(Zt,e),it(un,n)}function Kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,P0(t)||"Unknown",r));return mt({},n,i)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ur=Zt.current,it(Zt,t),it(un,un.current),!0}function Mh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Kg(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,ot(un),ot(Zt),it(Zt,t)):ot(un),it(un,n)}var _i=null,Kl=!1,Ic=!1;function Zg(t){_i===null?_i=[t]:_i.push(t)}function Y_(t){Kl=!0,Zg(t)}function ur(){if(!Ic&&_i!==null){Ic=!0;var t=0,e=Je;try{var n=_i;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Kl=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Eg(Gf,ur),r}finally{Je=e,Ic=!1}}return null}var Es=[],Ms=0,bl=null,Cl=0,Rn=[],Pn=0,Fr=null,Si=1,Ei="";function yr(t,e){Es[Ms++]=Cl,Es[Ms++]=bl,bl=t,Cl=e}function Qg(t,e,n){Rn[Pn++]=Si,Rn[Pn++]=Ei,Rn[Pn++]=Fr,Fr=t;var i=Si;t=Ei;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Yn(e)+r|n<<r|i,Ei=s+t}else Si=1<<s|n<<r|i,Ei=t}function Jf(t){t.return!==null&&(yr(t,1),Qg(t,1,0))}function ed(t){for(;t===bl;)bl=Es[--Ms],Es[Ms]=null,Cl=Es[--Ms],Es[Ms]=null;for(;t===Fr;)Fr=Rn[--Pn],Rn[Pn]=null,Ei=Rn[--Pn],Rn[Pn]=null,Si=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,ct=!1,Gn=null;function Jg(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ef(t){if(ct){var e=yn;if(e){var n=e;if(!wh(t,e)){if(Ju(t))throw Error(ne(418));e=Qi(n.nextSibling);var i=Sn;e&&wh(t,e)?Jg(i,n):(t.flags=t.flags&-4097|2,ct=!1,Sn=t)}}else{if(Ju(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,Sn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function So(t){if(t!==Sn)return!1;if(!ct)return Th(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qu(t.type,t.memoizedProps)),e&&(e=yn)){if(Ju(t))throw ev(),Error(ne(418));for(;e;)Jg(t,e),e=Qi(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?Qi(t.stateNode.nextSibling):null;return!0}function ev(){for(var t=yn;t;)t=Qi(t.nextSibling)}function Bs(){yn=Sn=null,ct=!1}function td(t){Gn===null?Gn=[t]:Gn.push(t)}var $_=Ii.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Eo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ah(t){var e=t._init;return e(t._payload)}function tv(t){function e(u,y){if(t){var m=u.deletions;m===null?(u.deletions=[y],u.flags|=16):m.push(y)}}function n(u,y){if(!t)return null;for(;y!==null;)e(u,y),y=y.sibling;return null}function i(u,y){for(u=new Map;y!==null;)y.key!==null?u.set(y.key,y):u.set(y.index,y),y=y.sibling;return u}function r(u,y){return u=nr(u,y),u.index=0,u.sibling=null,u}function s(u,y,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<y?(u.flags|=2,y):m):(u.flags|=2,y)):(u.flags|=1048576,y)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,y,m,S){return y===null||y.tag!==6?(y=Hc(m,u.mode,S),y.return=u,y):(y=r(y,m),y.return=u,y)}function l(u,y,m,S){var w=m.type;return w===gs?f(u,y,m.props.children,S,m.key):y!==null&&(y.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Hi&&Ah(w)===y.type)?(S=r(y,m.props),S.ref=oa(u,y,m),S.return=u,S):(S=dl(m.type,m.key,m.props,null,u.mode,S),S.ref=oa(u,y,m),S.return=u,S)}function c(u,y,m,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==m.containerInfo||y.stateNode.implementation!==m.implementation?(y=jc(m,u.mode,S),y.return=u,y):(y=r(y,m.children||[]),y.return=u,y)}function f(u,y,m,S,w){return y===null||y.tag!==7?(y=Rr(m,u.mode,S,w),y.return=u,y):(y=r(y,m),y.return=u,y)}function h(u,y,m){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Hc(""+y,u.mode,m),y.return=u,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case uo:return m=dl(y.type,y.key,y.props,null,u.mode,m),m.ref=oa(u,null,y),m.return=u,m;case ms:return y=jc(y,u.mode,m),y.return=u,y;case Hi:var S=y._init;return h(u,S(y._payload),m)}if(Ea(y)||na(y))return y=Rr(y,u.mode,m,null),y.return=u,y;Eo(u,y)}return null}function d(u,y,m,S){var w=y!==null?y.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:o(u,y,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:return m.key===w?l(u,y,m,S):null;case ms:return m.key===w?c(u,y,m,S):null;case Hi:return w=m._init,d(u,y,w(m._payload),S)}if(Ea(m)||na(m))return w!==null?null:f(u,y,m,S,null);Eo(u,m)}return null}function g(u,y,m,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(m)||null,o(y,u,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uo:return u=u.get(S.key===null?m:S.key)||null,l(y,u,S,w);case ms:return u=u.get(S.key===null?m:S.key)||null,c(y,u,S,w);case Hi:var R=S._init;return g(u,y,m,R(S._payload),w)}if(Ea(S)||na(S))return u=u.get(m)||null,f(y,u,S,w,null);Eo(y,S)}return null}function x(u,y,m,S){for(var w=null,R=null,T=y,I=y=0,E=null;T!==null&&I<m.length;I++){T.index>I?(E=T,T=null):E=T.sibling;var A=d(u,T,m[I],S);if(A===null){T===null&&(T=E);break}t&&T&&A.alternate===null&&e(u,T),y=s(A,y,I),R===null?w=A:R.sibling=A,R=A,T=E}if(I===m.length)return n(u,T),ct&&yr(u,I),w;if(T===null){for(;I<m.length;I++)T=h(u,m[I],S),T!==null&&(y=s(T,y,I),R===null?w=T:R.sibling=T,R=T);return ct&&yr(u,I),w}for(T=i(u,T);I<m.length;I++)E=g(T,u,I,m[I],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?I:E.key),y=s(E,y,I),R===null?w=E:R.sibling=E,R=E);return t&&T.forEach(function(Q){return e(u,Q)}),ct&&yr(u,I),w}function _(u,y,m,S){var w=na(m);if(typeof w!="function")throw Error(ne(150));if(m=w.call(m),m==null)throw Error(ne(151));for(var R=w=null,T=y,I=y=0,E=null,A=m.next();T!==null&&!A.done;I++,A=m.next()){T.index>I?(E=T,T=null):E=T.sibling;var Q=d(u,T,A.value,S);if(Q===null){T===null&&(T=E);break}t&&T&&Q.alternate===null&&e(u,T),y=s(Q,y,I),R===null?w=Q:R.sibling=Q,R=Q,T=E}if(A.done)return n(u,T),ct&&yr(u,I),w;if(T===null){for(;!A.done;I++,A=m.next())A=h(u,A.value,S),A!==null&&(y=s(A,y,I),R===null?w=A:R.sibling=A,R=A);return ct&&yr(u,I),w}for(T=i(u,T);!A.done;I++,A=m.next())A=g(T,u,I,A.value,S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?I:A.key),y=s(A,y,I),R===null?w=A:R.sibling=A,R=A);return t&&T.forEach(function(ee){return e(u,ee)}),ct&&yr(u,I),w}function v(u,y,m,S){if(typeof m=="object"&&m!==null&&m.type===gs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:e:{for(var w=m.key,R=y;R!==null;){if(R.key===w){if(w=m.type,w===gs){if(R.tag===7){n(u,R.sibling),y=r(R,m.props.children),y.return=u,u=y;break e}}else if(R.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Hi&&Ah(w)===R.type){n(u,R.sibling),y=r(R,m.props),y.ref=oa(u,R,m),y.return=u,u=y;break e}n(u,R);break}else e(u,R);R=R.sibling}m.type===gs?(y=Rr(m.props.children,u.mode,S,m.key),y.return=u,u=y):(S=dl(m.type,m.key,m.props,null,u.mode,S),S.ref=oa(u,y,m),S.return=u,u=S)}return a(u);case ms:e:{for(R=m.key;y!==null;){if(y.key===R)if(y.tag===4&&y.stateNode.containerInfo===m.containerInfo&&y.stateNode.implementation===m.implementation){n(u,y.sibling),y=r(y,m.children||[]),y.return=u,u=y;break e}else{n(u,y);break}else e(u,y);y=y.sibling}y=jc(m,u.mode,S),y.return=u,u=y}return a(u);case Hi:return R=m._init,v(u,y,R(m._payload),S)}if(Ea(m))return x(u,y,m,S);if(na(m))return _(u,y,m,S);Eo(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,y!==null&&y.tag===6?(n(u,y.sibling),y=r(y,m),y.return=u,u=y):(n(u,y),y=Hc(m,u.mode,S),y.return=u,u=y),a(u)):n(u,y)}return v}var zs=tv(!0),nv=tv(!1),Rl=cr(null),Pl=null,ws=null,nd=null;function id(){nd=ws=Pl=null}function rd(t){var e=Rl.current;ot(Rl),t._currentValue=e}function tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Pl=t,nd=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Pl===null)throw Error(ne(308));ws=t,Pl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Ar=null;function sd(t){Ar===null?Ar=[t]:Ar.push(t)}function iv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}function bh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(d=e,g=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(g,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(g,h,d):x,d==null)break e;h=mt({},h,d);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=h}}function Ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var so={},ri=cr(so),Ya=cr(so),$a=cr(so);function br(t){if(t===so)throw Error(ne(174));return t}function od(t,e){switch(it($a,e),it(Ya,t),it(ri,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}ot(ri),it(ri,e)}function Hs(){ot(ri),ot(Ya),ot($a)}function sv(t){br($a.current);var e=br(ri.current),n=Uu(e,t.type);e!==n&&(it(Ya,t),it(ri,n))}function ld(t){Ya.current===t&&(ot(ri),ot(Ya))}var dt=cr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function cd(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var ol=Ii.ReactCurrentDispatcher,Fc=Ii.ReactCurrentBatchConfig,Or=0,pt=null,Rt=null,Ut=null,Nl=!1,La=!1,qa=0,q_=0;function Vt(){throw Error(ne(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function fd(t,e,n,i,r,s){if(Or=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?J_:ey,t=n(i,r),La){s=0;do{if(La=!1,qa=0,25<=s)throw Error(ne(301));s+=1,Ut=Rt=null,e.updateQueue=null,ol.current=ty,t=n(i,r)}while(La)}if(ol.current=Il,e=Rt!==null&&Rt.next!==null,Or=0,Ut=Rt=pt=null,Nl=!1,e)throw Error(ne(300));return t}function dd(){var t=qa!==0;return qa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?pt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function On(){if(Rt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?pt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(ne(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?pt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ka(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=On(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Or&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,pt.lanes|=f,kr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=On(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function av(){}function ov(t,e){var n=pt,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,hd(uv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Za(9,cv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));Or&30||lv(n,e,r)}return r}function lv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cv(t,e,n,i){e.value=n,e.getSnapshot=i,fv(e)&&dv(t)}function uv(t,e,n){return n(function(){fv(e)&&dv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function dv(t){var e=Pi(t,1);e!==null&&$n(e,t,1,-1)}function Rh(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},e.queue=t,t=t.dispatch=Q_.bind(null,pt,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function hv(){return On().memoizedState}function ll(t,e,n,i){var r=ei();pt.flags|=t,r.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var a=Rt.memoizedState;if(s=a.destroy,i!==null&&ud(i,a.deps)){r.memoizedState=Za(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Za(1|e,n,s,i)}function Ph(t,e){return ll(8390656,8,t,e)}function hd(t,e){return Zl(2048,8,t,e)}function pv(t,e){return Zl(4,2,t,e)}function mv(t,e){return Zl(4,4,t,e)}function gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vv(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,gv.bind(null,e,t),n)}function pd(){}function xv(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _v(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yv(t,e,n){return Or&21?(Kn(n,e)||(n=Tg(),pt.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function K_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{Je=n,Fc.transition=i}}function Sv(){return On().memoizedState}function Z_(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))Mv(e,n);else if(n=iv(t,e,n,i),n!==null){var r=sn();$n(n,t,i,r),wv(n,e,i)}}function Q_(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))Mv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=iv(t,e,r,i),n!==null&&(r=sn(),$n(n,t,i,r),wv(n,e,i))}}function Ev(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Mv(t,e){La=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}var Il={readContext:Fn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},J_={readContext:Fn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Z_.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Rh,useDebugValue:pd,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Rh(!1),e=t[0];return t=K_.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=ei();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));Or&30||lv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ph(uv.bind(null,i,s,t),[t]),i.flags|=2048,Za(9,cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ft.identifierPrefix;if(ct){var n=Ei,i=Si;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=q_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ey={readContext:Fn,useCallback:xv,useContext:Fn,useEffect:hd,useImperativeHandle:vv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:_v,useReducer:Oc,useRef:hv,useState:function(){return Oc(Ka)},useDebugValue:pd,useDeferredValue:function(t){var e=On();return yv(e,Rt.memoizedState,t)},useTransition:function(){var t=Oc(Ka)[0],e=On().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:ov,useId:Sv,unstable_isNewReconciler:!1},ty={readContext:Fn,useCallback:xv,useContext:Fn,useEffect:hd,useImperativeHandle:vv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:_v,useReducer:kc,useRef:hv,useState:function(){return kc(Ka)},useDebugValue:pd,useDeferredValue:function(t){var e=On();return Rt===null?e.memoizedState=t:yv(e,Rt.memoizedState,t)},useTransition:function(){var t=kc(Ka)[0],e=On().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:ov,useId:Sv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=tr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&($n(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=tr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&($n(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=tr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&($n(e,t,i,n),al(e,t,i))}};function Lh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Va(n,i)||!Va(r,s):!0}function Tv(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=fn(e)?Ur:Zt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=fn(e)?Ur:Zt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=R0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Av(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,mf=i),sf(t,e)},n}function bv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sf(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Nh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gy.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var iy=Ii.ReactCurrentOwner,cn=!1;function nn(t,e,n,i){e.child=t===null?nv(e,null,n,i):zs(e,t.child,n,i)}function Fh(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=fd(t,e,n,i,s,r),n=dd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ct&&n&&Jf(e),e.flags|=1,nn(t,e,i,r),e.child)}function Oh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Va(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return af(t,e,n,i,r)}function Rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(As,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(As,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(As,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(As,xn),xn|=i;return nn(t,e,r,n),e.child}function Pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=fn(n)?Ur:Zt.current;return s=ks(e,s),Ds(e,r),n=fd(t,e,n,i,s,r),i=dd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ct&&i&&Jf(e),e.flags|=1,nn(t,e,n,r),e.child)}function kh(t,e,n,i,r){if(fn(n)){var s=!0;Al(e)}else s=!1;if(Ds(e,r),e.stateNode===null)cl(t,e),Tv(e,n,i),rf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=fn(n)?Ur:Zt.current,c=ks(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Dh(e,a,i,c),ji=!1;var d=e.memoizedState;a.state=d,Ll(e,i,a,r),l=e.memoizedState,o!==i||d!==l||un.current||ji?(typeof f=="function"&&(nf(e,n,f,i),l=e.memoizedState),(o=ji||Lh(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,rv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=fn(n)?Ur:Zt.current,l=ks(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Dh(e,a,i,l),ji=!1,d=e.memoizedState,a.state=d,Ll(e,i,a,r);var x=e.memoizedState;o!==h||d!==x||un.current||ji?(typeof g=="function"&&(nf(e,n,g,i),x=e.memoizedState),(c=ji||Lh(e,n,c,i,d,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return of(t,e,n,i,s,r)}function of(t,e,n,i,r,s){Pv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Mh(e,n,!1),Li(t,e,s);i=e.stateNode,iy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&Mh(e,n,!0),e.child}function Lv(t){var e=t.stateNode;e.pendingContext?Eh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Eh(t,e.context,!1),od(t,e.containerInfo)}function Bh(t,e,n,i,r){return Bs(),td(r),e.flags|=256,nn(t,e,n,i),e.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tc(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cf(n),e.memoizedState=lf,t):md(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ry(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=nr(o,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?cf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=lf,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function md(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,i){return i!==null&&td(i),zs(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ry(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(ne(422))),Mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=cf(a),e.memoizedState=lf,s);if(!(e.mode&1))return Mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Bc(s,i,void 0),Mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),$n(i,t,r,-1))}return Sd(),i=Bc(Error(ne(421))),Mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Qi(r.nextSibling),Sn=e,ct=!0,Gn=null,t!==null&&(Rn[Pn++]=Si,Rn[Pn++]=Ei,Rn[Pn++]=Fr,Si=t.id,Ei=t.overflow,Fr=e),e=md(e,i.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),tf(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sy(t,e,n){switch(e.tag){case 3:Lv(e),Bs();break;case 5:sv(e);break;case 1:fn(e.type)&&Al(e);break;case 4:od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Dv(t,e,n):(it(dt,dt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(t,e,n)}return Li(t,e,n)}var Iv,uf,Uv,Fv;Iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uf=function(){};Uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ri.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}Fu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Fv=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&Tl(),Gt(e),null;case 3:return i=e.stateNode,Hs(),ot(un),ot(Zt),cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(So(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(xf(Gn),Gn=null))),uf(t,e),Gt(e),null;case 5:ld(e);var r=br($a.current);if(n=e.type,t!==null&&e.stateNode!=null)Uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Gt(e),null}if(t=br(ri.current),So(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)at(wa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":qd(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Zd(i,s),at("invalid",i)}Fu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),r=["children",""+o]):Fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":fo(i),Kd(i,s,!0);break;case"textarea":fo(i),Qd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ug(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Xa]=i,Iv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ou(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)at(wa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":qd(t,i),r=Lu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Zd(t,i),r=Iu(t,i),at("invalid",t);break;default:r=i}Fu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(t,l):typeof l=="number"&&Oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Bf(t,s,l,a))}switch(n){case"input":fo(t),Kd(t,i,!1);break;case"textarea":fo(t),Qd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)Fv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=br($a.current),br(ri.current),So(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Gt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&yn!==null&&e.mode&1&&!(e.flags&128))ev(),Bs(),e.flags|=98560,s=!1;else if(s=So(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ni]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Gn!==null&&(xf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Pt===0&&(Pt=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Hs(),uf(t,e),t===null&&Ga(e.stateNode.containerInfo),Gt(e),null;case 10:return rd(e.type._context),Gt(e),null;case 17:return fn(e.type)&&Tl(),Gt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Dl(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Vs&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Gt(e),null}else 2*yt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return yd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function oy(t,e){switch(ed(e),e.tag){case 1:return fn(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ot(un),ot(Zt),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return Hs(),null;case 10:return rd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var wo=!1,$t=!1,ly=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function ff(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Hh=!1;function cy(t,e){if(Yu=Sl,t=Hg(),Qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},Sl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,v=x.memoizedState,u=e.stateNode,y=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),v);u.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return x=Hh,Hh=!1,x}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ff(e,n,s)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ov(t){var e=t.alternate;e!==null&&(t.alternate=null,Ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Xa],delete e[Zu],delete e[W_],delete e[X_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kv(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}var Bt=null,Vn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:$t||Ts(n,e);case 6:var i=Bt,r=Vn;Bt=null,Fi(t,e,n),Bt=i,Vn=r,Bt!==null&&(Vn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Vn?(t=Bt,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),Ha(t)):Nc(Bt,n.stateNode));break;case 4:i=Bt,r=Vn,Bt=n.stateNode.containerInfo,Vn=!0,Fi(t,e,n),Bt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ff(n,e,a),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!$t&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Fi(t,e,n),$t=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ly),e.forEach(function(i){var r=xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Vn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Vn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(Bt===null)throw Error(ne(160));Bv(s,a,r),Bt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,t),e=e.sibling}function zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Qn(t),i&4){try{Da(3,t,t.return),Jl(3,t)}catch(_){vt(t,t.return,_)}try{Da(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:kn(e,t),Qn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(kn(e,t),Qn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Oa(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&lg(r,s),Ou(o,a);var c=Ou(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?hg(r,h):f==="dangerouslySetInnerHTML"?fg(r,h):f==="children"?Oa(r,h):Bf(r,f,h,c)}switch(o){case"input":Du(r,s);break;case"textarea":cg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(_){vt(t,t.return,_)}}break;case 6:if(kn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){vt(t,t.return,_)}}break;case 3:if(kn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:kn(e,t),Qn(t);break;case 13:kn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xd=yt())),i&4&&Vh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||f,kn(e,t),$t=c):kn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,g=d.child,d.tag){case 0:case 11:case 14:case 15:Da(4,d,d.return);break;case 1:Ts(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){Wh(h);continue}}g!==null?(g.return=d,ge=g):Wh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=dg("display",a))}catch(_){vt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){vt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Qn(t),i&4&&Vh(t);break;case 21:break;default:kn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var s=jh(t);pf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=jh(t);hf(t,o,a);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uy(t,e,n){ge=t,Hv(t)}function Hv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||wo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=wo;var c=$t;if(wo=a,($t=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Xh(r):l!==null?(l.return=a,ge=l):Xh(r);for(;s!==null;)ge=s,Hv(s),s=s.sibling;ge=r,wo=o,$t=c}Gh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Gh(t)}}function Gh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ch(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ch(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&df(e)}catch(d){vt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Wh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Xh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{df(e)}catch(l){vt(e,s,l)}break;case 5:var a=e.return;try{df(e)}catch(l){vt(e,a,l)}}}catch(l){vt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var fy=Math.ceil,Ul=Ii.ReactCurrentDispatcher,gd=Ii.ReactCurrentOwner,Un=Ii.ReactCurrentBatchConfig,qe=0,Ft=null,Tt=null,Ht=0,xn=0,As=cr(0),Pt=0,Qa=null,kr=0,ec=0,vd=0,Na=null,ln=null,xd=0,Vs=1/0,xi=null,Fl=!1,mf=null,er=null,To=!1,Yi=null,Ol=0,Ia=0,gf=null,ul=-1,fl=0;function sn(){return qe&6?yt():ul!==-1?ul:ul=yt()}function tr(t){return t.mode&1?qe&2&&Ht!==0?Ht&-Ht:$_.transition!==null?(fl===0&&(fl=Tg()),fl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function $n(t,e,n,i){if(50<Ia)throw Ia=0,gf=null,Error(ne(185));no(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(ec|=n),Pt===4&&Wi(t,Ht)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Vs=yt()+500,Kl&&ur()))}function dn(t,e){var n=t.callbackNode;$0(t,e);var i=yl(t,t===Ft?Ht:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?Y_(Yh.bind(null,t)):Zg(Yh.bind(null,t)),V_(function(){!(qe&6)&&ur()}),n=null;else{switch(Ag(i)){case 1:n=Gf;break;case 4:n=Mg;break;case 16:n=_l;break;case 536870912:n=wg;break;default:n=_l}n=qv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(ul=-1,fl=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=yl(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var r=qe;qe|=2;var s=Gv();(Ft!==t||Ht!==e)&&(xi=null,Vs=yt()+500,Cr(t,e));do try{py();break}catch(o){Vv(t,o)}while(!0);id(),Ul.current=s,qe=r,Tt!==null?e=0:(Ft=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=Qa,Cr(t,0),Wi(t,i),dn(t,yt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!dy(r)&&(e=kl(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=vf(t,s))),e===1))throw n=Qa,Cr(t,0),Wi(t,i),dn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Sr(t,ln,xi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=xd+500-yt(),10<e)){if(yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(Sr.bind(null,t,ln,xi),e);break}Sr(t,ln,xi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Yn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fy(i/1960))-i,10<i){t.timeoutHandle=Ku(Sr.bind(null,t,ln,xi),i);break}Sr(t,ln,xi);break;case 5:Sr(t,ln,xi);break;default:throw Error(ne(329))}}}return dn(t,yt()),t.callbackNode===n?jv.bind(null,t):null}function vf(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=ln,ln=n,e!==null&&xf(e)),t}function xf(t){ln===null?ln=t:ln.push.apply(ln,t)}function dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~vd,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Yh(t){if(qe&6)throw Error(ne(327));Ns();var e=yl(t,0);if(!(e&1))return dn(t,yt()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=Qa,Cr(t,0),Wi(t,e),dn(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,ln,xi),dn(t,yt()),null}function _d(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Vs=yt()+500,Kl&&ur())}}function Br(t){Yi!==null&&Yi.tag===0&&!(qe&6)&&Ns();var e=qe;qe|=1;var n=Un.transition,i=Je;try{if(Un.transition=null,Je=1,t)return t()}finally{Je=i,Un.transition=n,qe=e,!(qe&6)&&ur()}}function yd(){xn=As.current,ot(As)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,j_(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:Hs(),ot(un),ot(Zt),cd();break;case 5:ld(i);break;case 4:Hs();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:rd(i.type._context);break;case 22:case 23:yd()}n=n.return}if(Ft=t,Tt=t=nr(t.current,null),Ht=xn=e,Pt=0,Qa=null,vd=ec=kr=0,ln=Na=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function Vv(t,e){do{var n=Tt;try{if(id(),ol.current=Il,Nl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Or=0,Ut=Rt=pt=null,La=!1,qa=0,gd.current=null,n===null||n.return===null){Pt=1,Qa=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Ih(a);if(g!==null){g.flags&=-257,Uh(g,a,o,s,e),g.mode&1&&Nh(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Nh(s,c,e),Sd();break e}l=Error(ne(426))}}else if(ct&&o.mode&1){var v=Ih(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Uh(v,a,o,s,e),td(js(l,o));break e}}s=l=js(l,o),Pt!==4&&(Pt=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Av(s,l,e);bh(s,u);break e;case 1:o=l;var y=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=bv(s,o,e);bh(s,S);break e}}s=s.return}while(s!==null)}Xv(n)}catch(w){e=w,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Gv(){var t=Ul.current;return Ul.current=Il,t===null?Il:t}function Sd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(kr&268435455)&&!(ec&268435455)||Wi(Ft,Ht)}function kl(t,e){var n=qe;qe|=2;var i=Gv();(Ft!==t||Ht!==e)&&(xi=null,Cr(t,e));do try{hy();break}catch(r){Vv(t,r)}while(!0);if(id(),qe=n,Ul.current=i,Tt!==null)throw Error(ne(261));return Ft=null,Ht=0,Pt}function hy(){for(;Tt!==null;)Wv(Tt)}function py(){for(;Tt!==null&&!B0();)Wv(Tt)}function Wv(t){var e=$v(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Xv(t):Tt=e,gd.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Tt=null;return}}else if(n=ay(n,e,xn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Pt===0&&(Pt=5)}function Sr(t,e,n){var i=Je,r=Un.transition;try{Un.transition=null,Je=1,my(t,e,n,i)}finally{Un.transition=r,Je=i}return null}function my(t,e,n,i){do Ns();while(Yi!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(q0(t,s),t===Ft&&(Tt=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,qv(_l,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=Je;Je=1;var o=qe;qe|=4,gd.current=null,cy(t,n),zv(n,t),U_($u),Sl=!!Yu,$u=Yu=null,t.current=n,uy(n),z0(),qe=o,Je=a,Un.transition=s}else t.current=n;if(To&&(To=!1,Yi=t,Ol=r),s=t.pendingLanes,s===0&&(er=null),V0(n.stateNode),dn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=mf,mf=null,t;return Ol&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===gf?Ia++:(Ia=0,gf=t):Ia=0,ur(),null}function Ns(){if(Yi!==null){var t=Ag(Ol),e=Un.transition,n=Je;try{if(Un.transition=null,Je=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Ol=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:Da(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,g=f.return;if(Ov(f),f===c){ge=null;break}if(d!==null){d.return=g,ge=d;break}ge=g}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var y=t.current;for(ge=y;ge!==null;){a=ge;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,ge=m;else e:for(a=y;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jl(9,o)}}catch(w){vt(o,o.return,w)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(qe=r,ur(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{Je=n,Un.transition=e}}return!1}function $h(t,e,n){e=js(n,e),e=Av(t,e,1),t=Ji(t,e,1),e=sn(),t!==null&&(no(t,1,e),dn(t,e))}function vt(t,e,n){if(t.tag===3)$h(t,t,n);else for(;e!==null;){if(e.tag===3){$h(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=js(n,t),t=bv(e,t,1),e=Ji(e,t,1),t=sn(),e!==null&&(no(e,1,t),dn(e,t));break}}e=e.return}}function gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>yt()-xd?Cr(t,0):vd|=n),dn(t,e)}function Yv(t,e){e===0&&(t.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var n=sn();t=Pi(t,e),t!==null&&(no(t,e,n),dn(t,n))}function vy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yv(t,n)}function xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Yv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,sy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ct&&e.flags&1048576&&Qg(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=ks(e,Zt.current);Ds(e,n),r=fd(null,e,i,t,r,n);var s=dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,rf(e,i,t,n),e=of(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Jf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yy(i),t=jn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=kh(null,e,i,t,n);break e;case 11:e=Fh(null,e,i,t,n);break e;case 14:e=Oh(null,e,i,jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),kh(t,e,i,r,n);case 3:e:{if(Lv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,rv(t,e),Ll(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ne(423)),e),e=Bh(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ne(424)),e),e=Bh(t,e,i,n,r);break e}else for(yn=Qi(e.stateNode.containerInfo.firstChild),Sn=e,ct=!0,Gn=null,n=nv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Li(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return sv(e),t===null&&ef(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,qu(i,r)?a=null:s!==null&&qu(i,s)&&(e.flags|=32),Pv(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&ef(e),null;case 13:return Dv(t,e,n);case 4:return od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Fh(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(Rl,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!un.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),tf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Fn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Oh(t,e,i,r,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),cl(t,e),e.tag=1,fn(i)?(t=!0,Al(e)):t=!1,Ds(e,n),Tv(e,i,r),rf(e,i,r,n),of(null,e,i,!0,t,n);case 19:return Nv(t,e,n);case 22:return Rv(t,e,n)}throw Error(ne(156,e.tag))};function qv(t,e){return Eg(t,e)}function _y(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new _y(t,e,n,i)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yy(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===jf)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ed(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Rr(n.children,r,s,e);case zf:a=8,r|=8;break;case bu:return t=In(12,n,e,r|2),t.elementType=bu,t.lanes=s,t;case Cu:return t=In(13,n,e,r),t.elementType=Cu,t.lanes=s,t;case Ru:return t=In(19,n,e,r),t.elementType=Ru,t.lanes=s,t;case sg:return tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ig:a=10;break e;case rg:a=9;break e;case Hf:a=11;break e;case jf:a=14;break e;case Hi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function tc(t,e,n,i){return t=In(22,t,i,e),t.elementType=sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Md(t,e,n,i,r,s,a,o,l){return t=new Sy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function Ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Kv(t){if(!t)return or;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return Kg(t,n,e)}return e}function Zv(t,e,n,i,r,s,a,o,l){return t=Md(n,i,!0,t,r,s,a,o,l),t.context=Kv(null),n=t.current,i=sn(),r=tr(n),s=Ti(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,no(t,r,i),dn(t,i),t}function nc(t,e,n,i){var r=e.current,s=sn(),a=tr(r);return n=Kv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,a),t!==null&&($n(t,r,a,s),al(t,r,a)),a}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function My(){return null}var Qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}ic.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));nc(t,e,null,null)};ic.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){nc(null,t,null,null)}),e[Ri]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&Lg(t)}};function Ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bl(a);s.call(c)}}var a=Zv(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=a,t[Ri]=a.current,Ga(t.nodeType===8?t.parentNode:t),Br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Bl(l);o.call(c)}}var l=Md(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[Ri]=l.current,Ga(t.nodeType===8?t.parentNode:t),Br(function(){nc(e,l,n,i)}),l}function sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Bl(a);o.call(l)}}nc(e,a,t,r)}else a=wy(n,e,t,r,i);return Bl(a)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(Wf(e,n|1),dn(e,yt()),!(qe&6)&&(Vs=yt()+500,ur()))}break;case 13:Br(function(){var i=Pi(t,1);if(i!==null){var r=sn();$n(i,t,1,r)}}),wd(t,1)}};Xf=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=sn();$n(e,t,134217728,n)}wd(t,134217728)}};Cg=function(t){if(t.tag===13){var e=tr(t),n=Pi(t,e);if(n!==null){var i=sn();$n(n,t,e,i)}wd(t,e)}};Rg=function(){return Je};Pg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Bu=function(t,e,n){switch(e){case"input":if(Du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ne(90));og(i),Du(i,r)}}}break;case"textarea":cg(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};gg=_d;vg=Br;var Ty={usingClientEntryPoint:!1,Events:[ro,ys,ql,pg,mg,_d]},ca={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yg(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||My,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Wl=Ao.inject(Ay),ii=Ao}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(ne(200));return Ey(t,e,null,n)};Mn.createRoot=function(t,e){if(!Ad(t))throw Error(ne(299));var n=!1,i="",r=Qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Md(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Ga(t.nodeType===8?t.parentNode:t),new Td(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=yg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Br(t)};Mn.hydrate=function(t,e,n){if(!rc(e))throw Error(ne(200));return sc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Ad(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Zv(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,Ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ic(e)};Mn.render=function(t,e,n){if(!rc(e))throw Error(ne(200));return sc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!rc(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Mn.unstable_batchedUpdates=_d;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return sc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv)}catch(t){console.error(t)}}Jv(),Jm.exports=Mn;var by=Jm.exports,Zh=by;Tu.createRoot=Zh.createRoot,Tu.hydrateRoot=Zh.hydrateRoot;const Cy="modulepreload",Ry=function(t){return"/"+t},Qh={},Py=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Ry(l),l in Qh)return;Qh[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Cy,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Ly={},Jh=t=>{let e;const n=new Set,i=(f,h)=>{const d=typeof f=="function"?f(e):f;if(!Object.is(d,e)){const g=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(x=>x(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(Ly?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Dy=t=>t?Jh(t):Jh;var ex={exports:{}},tx={},nx={exports:{}},ix={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Ee;function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Iy=typeof Object.is=="function"?Object.is:Ny,Uy=Gs.useState,Fy=Gs.useEffect,Oy=Gs.useLayoutEffect,ky=Gs.useDebugValue;function By(t,e){var n=e(),i=Uy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Oy(function(){r.value=n,r.getSnapshot=e,Vc(r)&&s({inst:r})},[t,n,e]),Fy(function(){return Vc(r)&&s({inst:r}),t(function(){Vc(r)&&s({inst:r})})},[t]),ky(n),n}function Vc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Iy(t,n)}catch{return!0}}function zy(t,e){return e()}var Hy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zy:By;ix.useSyncExternalStore=Gs.useSyncExternalStore!==void 0?Gs.useSyncExternalStore:Hy;nx.exports=ix;var jy=nx.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=Ee,Vy=jy;function Gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wy=typeof Object.is=="function"?Object.is:Gy,Xy=Vy.useSyncExternalStore,Yy=ac.useRef,$y=ac.useEffect,qy=ac.useMemo,Ky=ac.useDebugValue;tx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Yy(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=qy(function(){function l(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var x=a.value;if(r(x,g))return h=x}return h=g}if(x=h,Wy(f,g))return x;var _=i(g);return r!==void 0&&r(x,_)?(f=g,x):(f=g,h=_)}var c=!1,f,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=Xy(t,s[0],s[1]);return $y(function(){a.hasValue=!0,a.value=o},[o]),Ky(o),o};ex.exports=tx;var Zy=ex.exports;const Qy=zm(Zy),rx={},{useDebugValue:Jy}=Zm,{useSyncExternalStoreWithSelector:eS}=Qy;let ep=!1;const tS=t=>t;function nS(t,e=tS,n){(rx?"production":void 0)!=="production"&&n&&!ep&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ep=!0);const i=eS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Jy(i),i}const tp=t=>{(rx?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Dy(t):t,n=(i,r)=>nS(e,i,r);return Object.assign(n,e),n},bd=t=>t?tp(t):tp,sx="pixel-skin-studio:gallery:v1",iS=()=>Math.random().toString(36).slice(2,10),ua=t=>{try{localStorage.setItem(sx,JSON.stringify(t))}catch(e){console.warn("Could not persist gallery (storage full?)",e)}},Pr=bd((t,e)=>({skins:[],hydrate:()=>{try{const n=localStorage.getItem(sx);if(n){const i=JSON.parse(n);if(Array.isArray(i)){t({skins:i});return}}Py(async()=>{const{generateSampleSkins:i}=await import("./samples-oqEE9jsH.js");return{generateSampleSkins:i}},[]).then(({generateSampleSkins:i})=>{const r=i(),s=Date.now(),a=r.map((o,l)=>({id:`seed-${l}-${Math.random().toString(36).slice(2,7)}`,name:o.name,model:o.model,dataUrl:o.dataUrl,createdAt:s-l*6e4}));ua(a),t({skins:a})})}catch{}},save:n=>{const i={...n,id:iS(),createdAt:Date.now()};return t(r=>{const s=[i,...r.skins];return ua(s),{skins:s}}),i},remove:n=>{t(i=>{const r=i.skins.filter(s=>s.id!==n);return ua(r),{skins:r}})},rename:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,name:i}:a);return ua(s),{skins:s}})},update:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,...i}:a);return ua(s),{skins:s}})}}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="156",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rS=0,np=1,sS=2,ax=1,aS=2,vi=3,si=0,hn=1,Nn=2,Ai=0,Is=1,ip=2,rp=3,sp=4,oS=5,ps=100,lS=101,cS=102,ap=103,op=104,uS=200,fS=201,dS=202,hS=203,ox=204,lx=205,pS=206,mS=207,gS=208,vS=209,xS=210,_S=0,yS=1,SS=2,_f=3,ES=4,MS=5,wS=6,TS=7,cx=0,AS=1,bS=2,ir=0,CS=1,RS=2,PS=3,LS=4,DS=5,ux=300,Ws=301,Xs=302,zl=303,yf=304,oc=306,Sf=1e3,Wn=1001,Ef=1002,ht=1003,lp=1004,Gc=1005,Ln=1006,NS=1007,Ja=1008,rr=1009,IS=1010,US=1011,Rd=1012,fx=1013,$i=1014,Mi=1015,Ys=1016,dx=1017,hx=1018,Lr=1020,FS=1021,Xn=1023,OS=1024,kS=1025,Dr=1026,$s=1027,BS=1028,px=1029,zS=1030,mx=1031,gx=1033,Wc=33776,Xc=33777,Yc=33778,$c=33779,cp=35840,up=35841,fp=35842,dp=35843,HS=36196,hp=37492,pp=37496,mp=37808,gp=37809,vp=37810,xp=37811,_p=37812,yp=37813,Sp=37814,Ep=37815,Mp=37816,wp=37817,Tp=37818,Ap=37819,bp=37820,Cp=37821,qc=36492,Rp=36494,Pp=36495,jS=36283,Lp=36284,Dp=36285,Np=36286,vx=3e3,Nr=3001,VS=3200,GS=3201,xx=0,WS=1,Ir="",lt="srgb",ai="srgb-linear",lc="display-p3",Kc=7680,XS=519,YS=512,$S=513,qS=514,KS=515,ZS=516,QS=517,JS=518,eE=519,Mf=35044,Ip="300 es",wf=1035,wi=2e3,Hl=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,Tf=180/Math.PI;function sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function tE(t,e){return(t%e+e)%e}function Zc(t,e,n){return(1-n)*t+n*e}function Up(t){return(t&t-1)===0&&t!==0}function Af(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function et(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const nE={DEG2RAD:hl};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],x=i[8],_=r[0],v=r[3],u=r[6],y=r[1],m=r[4],S=r[7],w=r[2],R=r[5],T=r[8];return s[0]=a*_+o*y+l*w,s[3]=a*v+o*m+l*R,s[6]=a*u+o*S+l*T,s[1]=c*_+f*y+h*w,s[4]=c*v+f*m+h*R,s[7]=c*u+f*S+h*T,s[2]=d*_+g*y+x*w,s[5]=d*v+g*m+x*R,s[8]=d*u+g*S+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,g=c*s-a*l,x=n*h+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new ze;function _x(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iE(){const t=jl("canvas");return t.style.display="block",t}const Fp={};function Ua(t){t in Fp||(Fp[t]=!0,console.warn(t))}function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const rE=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),sE=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function aE(t){return t.convertSRGBToLinear().applyMatrix3(sE)}function oE(t){return t.applyMatrix3(rE).convertLinearToSRGB()}const lE={[ai]:t=>t,[lt]:t=>t.convertSRGBToLinear(),[lc]:aE},cE={[ai]:t=>t,[lt]:t=>t.convertLinearToSRGB(),[lc]:oE},Cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ai},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=lE[e],r=cE[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Yr;class yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=jl("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uE=0;class Sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fE=0;class qt extends Vr{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Ln,a=Ja,o=Xn,l=rr,c=qt.DEFAULT_ANISOTROPY,f=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=sr(),this.name="",this.source=new Sx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Nr?lt:Ir),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Nr:vx}set encoding(e){Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?lt:Ir}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ux;qt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],x=l[9],_=l[2],v=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-v)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+v)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(g+1)/2,w=(u+1)/2,R=(f+d)/4,T=(h+_)/4,I=(x+v)/4;return m>S&&m>w?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=R/i,s=T/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=I/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=I/s),this.set(i,r,s,n),this}let y=Math.sqrt((v-x)*(v-x)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(v-x)/y,this.y=(h-_)/y,this.z=(d-f)/y,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dE extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?lt:Ir),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends dE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ex extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hE extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],g=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==d||c!==g||f!==x){let v=1-o;const u=l*d+c*g+f*x+h*_,y=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const w=Math.sqrt(m),R=Math.atan2(w,u*y);v=Math.sin(v*R)/w,o=Math.sin(o*R)/w}const S=o*y;if(l=l*v+d*S,c=c*v+g*S,f=f*v+x*S,h=h*v+_*S,v===1-o){const w=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=w,c*=w,f*=w,h*=w}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],g=s[a+2],x=s[a+3];return e[n]=o*x+f*h+l*g-c*d,e[n+1]=l*x+f*d+c*h-o*g,e[n+2]=c*x+f*g+o*d-l*h,e[n+3]=f*x-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h-d*g*x;break;case"YXZ":this._x=d*f*h+c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h+d*g*x;break;case"ZXY":this._x=d*f*h-c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h-d*g*x;break;case"ZYX":this._x=d*f*h-c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h+d*g*x;break;case"YZX":this._x=d*f*h+c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h-d*g*x;break;case"XZY":this._x=d*f*h-c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,f=l*i+o*n-s*r,h=l*r+s*i-a*n,d=-s*n-a*i-o*r;return this.x=c*l+d*-s+f*-o-h*-a,this.y=f*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tu=new k,Op=new zr;class ao{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)fi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else r.boundingBox===null&&r.computeBoundingBox(),$r.copy(r.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),bo.subVectors(this.max,fa),qr.subVectors(e.a,fa),Kr.subVectors(e.b,fa),Zr.subVectors(e.c,fa),Oi.subVectors(Kr,qr),ki.subVectors(Zr,Kr),hr.subVectors(qr,Zr);let n=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-hr.z,hr.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,hr.z,0,-hr.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-hr.y,hr.x,0];return!nu(n,qr,Kr,Zr,bo)||(n=[1,0,0,0,1,0,0,0,1],!nu(n,qr,Kr,Zr,bo))?!1:(Co.crossVectors(Oi,ki),n=[Co.x,Co.y,Co.z],nu(n,qr,Kr,Zr,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new k,new k,new k,new k,new k,new k,new k,new k],fi=new k,$r=new ao,qr=new k,Kr=new k,Zr=new k,Oi=new k,ki=new k,hr=new k,fa=new k,bo=new k,Co=new k,pr=new k;function nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const pE=new ao,da=new k,iu=new k;class Pd{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(iu)),this.expandByPoint(da.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new k,ru=new k,Ro=new k,Bi=new k,su=new k,Po=new k,au=new k;class Mx{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ru.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=Bi.dot(this.direction),l=-Bi.dot(Ro),c=Bi.lengthSq(),f=Math.abs(1-a*a);let h,d,g,x;if(f>0)if(h=a*l-o,d=a*o-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const _=1/f;h*=_,d*=_,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ru).addScaledVector(Ro,d),g}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){su.subVectors(n,e),Po.subVectors(i,e),au.crossVectors(su,Po);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(Po.crossVectors(Bi,Po));if(l<0)return null;const c=o*this.direction.dot(su.cross(Bi));if(c<0||l+c>a)return null;const f=-o*Bi.dot(au);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,a,o,l,c,f,h,d,g,x,_,v){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,g,x,_,v)}set(e,n,i,r,s,a,o,l,c,f,h,d,g,x,_,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=x,u[11]=_,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*h,x=o*f,_=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+x*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=x+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,x=c*f,_=c*h;n[0]=d+_*o,n[4]=x*o-g,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-x,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,x=c*f,_=c*h;n[0]=d-_*o,n[4]=-a*h,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*f,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*h,x=o*f,_=o*h;n[0]=l*f,n[4]=x*c-g,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=g*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,x=o*l,_=o*c;n[0]=l*f,n[4]=_-d*h,n[8]=x*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*h+x,n[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,g=a*c,x=o*l,_=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+_,n[5]=a*f,n[9]=g*h-x,n[2]=x*h-g,n[6]=o*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mE,e,gE)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),zi.crossVectors(i,gn),zi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),zi.crossVectors(i,gn)),zi.normalize(),Lo.crossVectors(gn,zi),r[0]=zi.x,r[4]=Lo.x,r[8]=gn.x,r[1]=zi.y,r[5]=Lo.y,r[9]=gn.y,r[2]=zi.z,r[6]=Lo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],x=i[2],_=i[6],v=i[10],u=i[14],y=i[3],m=i[7],S=i[11],w=i[15],R=r[0],T=r[4],I=r[8],E=r[12],A=r[1],Q=r[5],ee=r[9],W=r[13],U=r[2],P=r[6],B=r[10],F=r[14],N=r[3],O=r[7],H=r[11],z=r[15];return s[0]=a*R+o*A+l*U+c*N,s[4]=a*T+o*Q+l*P+c*O,s[8]=a*I+o*ee+l*B+c*H,s[12]=a*E+o*W+l*F+c*z,s[1]=f*R+h*A+d*U+g*N,s[5]=f*T+h*Q+d*P+g*O,s[9]=f*I+h*ee+d*B+g*H,s[13]=f*E+h*W+d*F+g*z,s[2]=x*R+_*A+v*U+u*N,s[6]=x*T+_*Q+v*P+u*O,s[10]=x*I+_*ee+v*B+u*H,s[14]=x*E+_*W+v*F+u*z,s[3]=y*R+m*A+S*U+w*N,s[7]=y*T+m*Q+S*P+w*O,s[11]=y*I+m*ee+S*B+w*H,s[15]=y*E+m*W+S*F+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],x=e[3],_=e[7],v=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*g-i*l*g)+_*(+n*l*g-n*c*d+s*a*d-r*a*g+r*c*f-s*l*f)+v*(+n*c*h-n*o*g-s*a*h+i*a*g+s*o*f-i*c*f)+u*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],x=e[12],_=e[13],v=e[14],u=e[15],y=h*v*c-_*d*c+_*l*g-o*v*g-h*l*u+o*d*u,m=x*d*c-f*v*c-x*l*g+a*v*g+f*l*u-a*d*u,S=f*_*c-x*h*c+x*o*g-a*_*g-f*o*u+a*h*u,w=x*h*l-f*_*l-x*o*d+a*_*d+f*o*v-a*h*v,R=n*y+i*m+r*S+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(_*d*s-h*v*s-_*r*g+i*v*g+h*r*u-i*d*u)*T,e[2]=(o*v*s-_*l*s+_*r*c-i*v*c-o*r*u+i*l*u)*T,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*g-i*l*g)*T,e[4]=m*T,e[5]=(f*v*s-x*d*s+x*r*g-n*v*g-f*r*u+n*d*u)*T,e[6]=(x*l*s-a*v*s-x*r*c+n*v*c+a*r*u-n*l*u)*T,e[7]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*g+n*l*g)*T,e[8]=S*T,e[9]=(x*h*s-f*_*s-x*i*g+n*_*g+f*i*u-n*h*u)*T,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*u+n*o*u)*T,e[11]=(f*o*s-a*h*s-f*i*c+n*h*c+a*i*g-n*o*g)*T,e[12]=w*T,e[13]=(f*_*r-x*h*r+x*i*d-n*_*d-f*i*v+n*h*v)*T,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*v-n*o*v)*T,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,g=s*f,x=s*h,_=a*f,v=a*h,u=o*h,y=l*c,m=l*f,S=l*h,w=i.x,R=i.y,T=i.z;return r[0]=(1-(_+u))*w,r[1]=(g+S)*w,r[2]=(x-m)*w,r[3]=0,r[4]=(g-S)*R,r[5]=(1-(d+u))*R,r[6]=(v+y)*R,r[7]=0,r[8]=(x+m)*T,r[9]=(v-y)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const a=Qr.set(r[4],r[5],r[6]).length(),o=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,f=1/a,h=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=wi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,x;if(o===wi)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Hl)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*c,g=(i+r)*f;let x,_;if(o===wi)x=(a+s)*h,_=-2*h;else if(o===Hl)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new k,Bn=new St,mE=new k(0,0,0),gE=new k(1,1,1),zi=new k,Lo=new k,gn=new k,kp=new St,Bp=new zr;class cc{constructor(e=0,n=0,i=0,r=cc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cc.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vE=0;const zp=new k,Jr=new zr,hi=new St,Do=new k,ha=new k,xE=new k,_E=new zr,Hp=new k(1,0,0),jp=new k(0,1,0),Vp=new k(0,0,1),yE={type:"added"},SE={type:"removed"};class Kt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new k,n=new cc,i=new zr,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new ze}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Do.copy(e):Do.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ha,Do,this.up):hi.lookAt(Do,ha,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(hi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new k,pi=new k,ou=new k,mi=new k,es=new k,ts=new k,Gp=new k,lu=new k,cu=new k,uu=new k;let No=!1;class Dn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),pi.subVectors(i,n),ou.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(pi),l=zn.dot(ou),c=pi.dot(pi),f=pi.dot(ou),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,g=(c*l-o*f)*d,x=(a*f-o*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,n,i,r,s,a,o,l){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,mi),l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),pi.subVectors(e,n),zn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),lu.subVectors(e,i);const l=es.dot(lu),c=ts.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const f=es.dot(cu),h=ts.dot(cu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(es,a);uu.subVectors(e,s);const g=es.dot(uu),x=ts.dot(uu);if(x>=0&&g<=x)return n.copy(s);const _=g*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ts,o);const v=f*x-g*h;if(v<=0&&h-f>=0&&g-x>=0)return Gp.subVectors(s,r),o=(h-f)/(h-f+(g-x)),n.copy(r).addScaledVector(Gp,o);const u=1/(v+_+d);return a=_*u,o=d*u,n.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let EE=0;class Js extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Is,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ox,this.blendDst=lx,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_f,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kc,this.stencilZFail=Kc,this.stencilZPass=Kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Io={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Cn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Cn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Cn.workingColorSpace){if(e=tE(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return Cn.toWorkingColorSpace(this,r),this}setStyle(e,n=lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=lt){const i=Tx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Cn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Cn.workingColorSpace){Cn.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Cn.workingColorSpace){return Cn.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=lt){Cn.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hn),Hn.h+=e,Hn.s+=n,Hn.l+=i,this.setHSL(Hn.h,Hn.s,Hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hn),e.getHSL(Io);const i=Zc(Hn.h,Io.h,n),r=Zc(Hn.s,Io.s,n),s=Zc(Hn.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ze;Ze.NAMES=Tx;class Ax extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,Uo=new _e;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mf,this.updateRange={offset:0,count:-1},this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bx extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cx extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bi extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ME=0;const An=new St,du=new Kt,ns=new k,vn=new ao,pa=new ao,It=new k;class Ui extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Cx:bx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(vn.min,pa.min),vn.expandByPoint(It),It.addVectors(vn.max,pa.max),vn.expandByPoint(It)):(vn.expandByPoint(pa.min),vn.expandByPoint(pa.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)It.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),It.add(ns)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let A=0;A<o;A++)c[A]=new k,f[A]=new k;const h=new k,d=new k,g=new k,x=new _e,_=new _e,v=new _e,u=new k,y=new k;function m(A,Q,ee){h.fromArray(r,A*3),d.fromArray(r,Q*3),g.fromArray(r,ee*3),x.fromArray(a,A*2),_.fromArray(a,Q*2),v.fromArray(a,ee*2),d.sub(h),g.sub(h),_.sub(x),v.sub(x);const W=1/(_.x*v.y-v.x*_.y);isFinite(W)&&(u.copy(d).multiplyScalar(v.y).addScaledVector(g,-_.y).multiplyScalar(W),y.copy(g).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(W),c[A].add(u),c[Q].add(u),c[ee].add(u),f[A].add(y),f[Q].add(y),f[ee].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,Q=S.length;A<Q;++A){const ee=S[A],W=ee.start,U=ee.count;for(let P=W,B=W+U;P<B;P+=3)m(i[P+0],i[P+1],i[P+2])}const w=new k,R=new k,T=new k,I=new k;function E(A){T.fromArray(s,A*3),I.copy(T);const Q=c[A];w.copy(Q),w.sub(T.multiplyScalar(T.dot(Q))).normalize(),R.crossVectors(I,Q);const W=R.dot(f[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=W}for(let A=0,Q=S.length;A<Q;++A){const ee=S[A],W=ee.start,U=ee.count;for(let P=W,B=W+U;P<B;P+=3)E(i[P+0]),E(i[P+1]),E(i[P+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,f=new k,h=new k;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,v),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let g=0,x=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*f;for(let u=0;u<f;u++)d[x++]=c[g++]}return new qn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new St,mr=new Mx,Fo=new Pd,Xp=new k,is=new k,rs=new k,ss=new k,hu=new k,Oo=new k,ko=new _e,Bo=new _e,zo=new _e,Yp=new k,$p=new k,qp=new k,Ho=new k,jo=new k;class nt extends Kt{constructor(e=new Ui,n=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(hu.fromBufferAttribute(h,e),a?Oo.addScaledVector(hu,f):Oo.addScaledVector(hu.sub(n),f))}n.add(Oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Fo.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Fo,Xp)===null||mr.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Wp),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const v=d[x],u=a[v.materialIndex],y=Math.max(v.start,g.start),m=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let S=y,w=m;S<w;S+=3){const R=o.getX(S),T=o.getX(S+1),I=o.getX(S+2);r=Vo(this,u,e,i,c,f,h,R,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let v=x,u=_;v<u;v+=3){const y=o.getX(v),m=o.getX(v+1),S=o.getX(v+2);r=Vo(this,a,e,i,c,f,h,y,m,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const v=d[x],u=a[v.materialIndex],y=Math.max(v.start,g.start),m=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=y,w=m;S<w;S+=3){const R=S,T=S+1,I=S+2;r=Vo(this,u,e,i,c,f,h,R,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let v=x,u=_;v<u;v+=3){const y=v,m=v+1,S=v+2;r=Vo(this,a,e,i,c,f,h,y,m,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function wE(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Vo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,is),t.getVertexPosition(l,rs),t.getVertexPosition(c,ss);const f=wE(t,e,n,i,is,rs,ss,Ho);if(f){r&&(ko.fromBufferAttribute(r,o),Bo.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,c),f.uv=Dn.getInterpolation(Ho,is,rs,ss,ko,Bo,zo,new _e)),s&&(ko.fromBufferAttribute(s,o),Bo.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,c),f.uv1=Dn.getInterpolation(Ho,is,rs,ss,ko,Bo,zo,new _e),f.uv2=f.uv1),a&&(Yp.fromBufferAttribute(a,o),$p.fromBufferAttribute(a,l),qp.fromBufferAttribute(a,c),f.normal=Dn.getInterpolation(Ho,is,rs,ss,Yp,$p,qp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};Dn.getNormal(is,rs,ss,h.normal),f.face=h}return f}class _t extends Ui{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(f,3)),this.setAttribute("uv",new bi(h,2));function x(_,v,u,y,m,S,w,R,T,I,E){const A=S/T,Q=w/I,ee=S/2,W=w/2,U=R/2,P=T+1,B=I+1;let F=0,N=0;const O=new k;for(let H=0;H<B;H++){const z=H*Q-W;for(let q=0;q<P;q++){const ce=q*A-ee;O[_]=ce*y,O[v]=z*m,O[u]=U,c.push(O.x,O.y,O.z),O[_]=0,O[v]=0,O[u]=R>0?1:-1,f.push(O.x,O.y,O.z),h.push(q/T),h.push(1-H/I),F+=1}}for(let H=0;H<I;H++)for(let z=0;z<T;z++){const q=d+z+P*H,ce=d+z+P*(H+1),ue=d+(z+1)+P*(H+1),me=d+(z+1)+P*H;l.push(q,ce,me),l.push(ce,ue,me),N+=6}o.addGroup(g,N,E),g+=N,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function TE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rx(t){return t.getRenderTarget()===null?t.outputColorSpace:ai}const Px={clone:qs,merge:tn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=TE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lx extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tf*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,os=1;class CE extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new _n(as,os,e,n);r.layers=this.layers,this.add(r);const s=new _n(as,os,e,n);s.layers=this.layers,this.add(s);const a=new _n(as,os,e,n);a.layers=this.layers,this.add(a);const o=new _n(as,os,e,n);o.layers=this.layers,this.add(o);const l=new _n(as,os,e,n);l.layers=this.layers,this.add(l);const c=new _n(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,f=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(f),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Dx extends qt{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RE extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?lt:Ir),this.texture=new Dx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _t(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ai});s.uniforms.tEquirect.value=n;const a=new nt(r,s),o=n.minFilter;return n.minFilter===Ja&&(n.minFilter=Ln),new CE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const pu=new k,PE=new k,LE=new ze;class Vi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(PE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LE.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Pd,Go=new k;class Ld{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],_=r[10],v=r[11],u=r[12],y=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,v-g,S-u).normalize(),i[1].setComponents(l+s,d+c,v+g,S+u).normalize(),i[2].setComponents(l+a,d+f,v+x,S+y).normalize(),i[3].setComponents(l-a,d-f,v-x,S-y).normalize(),i[4].setComponents(l-o,d-h,v-_,S-m).normalize(),n===wi)i[5].setComponents(l+o,d+h,v+_,S+m).normalize();else if(n===Hl)i[5].setComponents(o,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,h){const d=f.array,g=f.updateRange;t.bindBuffer(h,c),g.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,f)):h.version<c.version&&(s(h.buffer,c,f),h.version=c.version)}return{get:a,remove:o,update:l}}class Dd extends Ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,g=[],x=[],_=[],v=[];for(let u=0;u<f;u++){const y=u*d-a;for(let m=0;m<c;m++){const S=m*h-s;x.push(S,-y,0),_.push(0,0,1),v.push(m/o),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const m=y+c*u,S=y+c*(u+1),w=y+1+c*(u+1),R=y+1+c*u;g.push(m,S,R),g.push(S,w,R)}this.setIndex(g),this.setAttribute("position",new bi(x,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dd(e.width,e.height,e.widthSegments,e.heightSegments)}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ww=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:NE,alphahash_pars_fragment:IE,alphamap_fragment:UE,alphamap_pars_fragment:FE,alphatest_fragment:OE,alphatest_pars_fragment:kE,aomap_fragment:BE,aomap_pars_fragment:zE,begin_vertex:HE,beginnormal_vertex:jE,bsdfs:VE,iridescence_fragment:GE,bumpmap_pars_fragment:WE,clipping_planes_fragment:XE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:$E,clipping_planes_vertex:qE,color_fragment:KE,color_pars_fragment:ZE,color_pars_vertex:QE,color_vertex:JE,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:aM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:fM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:wM,envmap_vertex:hM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_fragment:_M,lightmap_pars_fragment:yM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:EM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:AM,lights_phong_fragment:bM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:LM,lights_fragment_maps:DM,lights_fragment_end:NM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:kM,map_pars_fragment:BM,map_particle_fragment:zM,map_particle_pars_fragment:HM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:VM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:XM,morphtarget_vertex:YM,normal_fragment_begin:$M,normal_fragment_maps:qM,normal_pars_fragment:KM,normal_pars_vertex:ZM,normal_vertex:QM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:rw,packing:sw,premultiplied_alpha_fragment:aw,project_vertex:ow,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:hw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:vw,skinning_vertex:xw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:Ew,tonemapping_pars_fragment:Mw,transmission_fragment:ww,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:bw,uv_vertex:Cw,worldpos_vertex:Rw,background_vert:Pw,background_frag:Lw,backgroundCube_vert:Dw,backgroundCube_frag:Nw,cube_vert:Iw,cube_frag:Uw,depth_vert:Fw,depth_frag:Ow,distanceRGBA_vert:kw,distanceRGBA_frag:Bw,equirect_vert:zw,equirect_frag:Hw,linedashed_vert:jw,linedashed_frag:Vw,meshbasic_vert:Gw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:$w,meshmatcap_frag:qw,meshnormal_vert:Kw,meshnormal_frag:Zw,meshphong_vert:Qw,meshphong_frag:Jw,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:a1,shadow_frag:o1,sprite_vert:l1,sprite_frag:c1},fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ti={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wo={r:0,b:0,g:0};function u1(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function x(v,u){let y=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?_(o,l):m&&m.isColor&&(_(m,1),y=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===oc)?(f===void 0&&(f=new nt(new _t(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=m,f.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=m.colorSpace!==lt,(h!==m||d!==m.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=m,d=m.version,g=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new nt(new Dd(2,2),new Ni({name:"BackgroundMaterial",uniforms:qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=m.colorSpace!==lt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,g=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function _(v,u){v.getRGB(Wo,Rx(t)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(v,u=1){o.set(v),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,_(o,l)},render:x}}function f1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=v(null);let c=l,f=!1;function h(U,P,B,F,N){let O=!1;if(a){const H=_(F,B,P);c!==H&&(c=H,g(c.object)),O=u(U,F,B,N),O&&y(U,F,B,N)}else{const H=P.wireframe===!0;(c.geometry!==F.id||c.program!==B.id||c.wireframe!==H)&&(c.geometry=F.id,c.program=B.id,c.wireframe=H,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,I(U,P,B,F),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function x(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,P,B){const F=B.wireframe===!0;let N=o[U.id];N===void 0&&(N={},o[U.id]=N);let O=N[P.id];O===void 0&&(O={},N[P.id]=O);let H=O[F];return H===void 0&&(H=v(d()),O[F]=H),H}function v(U){const P=[],B=[],F=[];for(let N=0;N<r;N++)P[N]=0,B[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:U,attributes:{},index:null}}function u(U,P,B,F){const N=c.attributes,O=P.attributes;let H=0;const z=B.getAttributes();for(const q in z)if(z[q].location>=0){const ue=N[q];let me=O[q];if(me===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;H++}return c.attributesNum!==H||c.index!==F}function y(U,P,B,F){const N={},O=P.attributes;let H=0;const z=B.getAttributes();for(const q in z)if(z[q].location>=0){let ue=O[q];ue===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),N[q]=me,H++}c.attributes=N,c.attributesNum=H,c.index=F}function m(){const U=c.newAttributes;for(let P=0,B=U.length;P<B;P++)U[P]=0}function S(U){w(U,0)}function w(U,P){const B=c.newAttributes,F=c.enabledAttributes,N=c.attributeDivisors;B[U]=1,F[U]===0&&(t.enableVertexAttribArray(U),F[U]=1),N[U]!==P&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,P),N[U]=P)}function R(){const U=c.newAttributes,P=c.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==U[B]&&(t.disableVertexAttribArray(B),P[B]=0)}function T(U,P,B,F,N,O,H){H===!0?t.vertexAttribIPointer(U,P,B,N,O):t.vertexAttribPointer(U,P,B,F,N,O)}function I(U,P,B,F){if(i.isWebGL2===!1&&(U.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=F.attributes,O=B.getAttributes(),H=P.defaultAttributeValues;for(const z in O){const q=O[z];if(q.location>=0){let ce=N[z];if(ce===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor)),ce!==void 0){const ue=ce.normalized,me=ce.itemSize,ye=n.get(ce);if(ye===void 0)continue;const Ae=ye.buffer,Me=ye.type,Ye=ye.bytesPerElement,kt=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||ce.gpuType===fx);if(ce.isInterleavedBufferAttribute){const Ue=ce.data,V=Ue.stride,At=ce.offset;if(Ue.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)w(q.location+we,Ue.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let we=0;we<q.locationSize;we++)S(q.location+we);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let we=0;we<q.locationSize;we++)T(q.location+we,me/q.locationSize,Me,ue,V*Ye,(At+me/q.locationSize*we)*Ye,kt)}else{if(ce.isInstancedBufferAttribute){for(let Ue=0;Ue<q.locationSize;Ue++)w(q.location+Ue,ce.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)S(q.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let Ue=0;Ue<q.locationSize;Ue++)T(q.location+Ue,me/q.locationSize,Me,ue,me*Ye,me/q.locationSize*Ue*Ye,kt)}}else if(H!==void 0){const ue=H[z];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(q.location,ue);break;case 3:t.vertexAttrib3fv(q.location,ue);break;case 4:t.vertexAttrib4fv(q.location,ue);break;default:t.vertexAttrib1fv(q.location,ue)}}}}R()}function E(){ee();for(const U in o){const P=o[U];for(const B in P){const F=P[B];for(const N in F)x(F[N].object),delete F[N];delete P[B]}delete o[U]}}function A(U){if(o[U.id]===void 0)return;const P=o[U.id];for(const B in P){const F=P[B];for(const N in F)x(F[N].object),delete F[N];delete P[B]}delete o[U.id]}function Q(U){for(const P in o){const B=o[P];if(B[U.id]===void 0)continue;const F=B[U.id];for(const N in F)x(F[N].object),delete F[N];delete B[U.id]}}function ee(){W(),f=!0,c!==l&&(c=l,g(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:W,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:Q,initAttributes:m,enableAttribute:S,disableUnusedAttributes:R}}function d1(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,h){if(h===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,c,f,h),n.update(f,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function h1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,S=a||e.has("OES_texture_float"),w=m&&S,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:v,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:R}}function p1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Vi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!v)s?f(null):c();else{const y=s?0:i,m=y*4;let S=u.clippingState||null;l.value=S,S=f(x,d,m,g);for(let w=0;w!==m;++w)S[w]=n[w];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,x){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=l.value,x!==!0||v===null){const u=g+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<u)&&(v=new Float32Array(u));for(let m=0,S=g;m!==_;++m,S+=4)a.copy(h[m]).applyMatrix4(y,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function m1(t){let e=new WeakMap;function n(a,o){return o===zl?a.mapping=Ws:o===yf&&(a.mapping=Xs),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zl||o===yf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new RE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ix extends Lx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=4,Kp=[.125,.215,.35,.446,.526,.582],Mr=20,mu=new Ix,Zp=new Ze;let gu=null;const Er=(1+Math.sqrt(5))/2,ls=1/Er,Qp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Er,ls),new k(0,Er,-ls),new k(ls,0,Er),new k(-ls,0,Er),new k(Er,ls,0),new k(-Er,ls,0)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ys,format:Xn,colorSpace:ai,depthBuffer:!1},r=em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(s)),this._blurMaterial=v1(s,e,n)}return r}_compileMaterial(e){const n=new nt(this._lodPlanes[0],e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Zp),f.toneMapping=ir,f.autoClear=!1;const g=new Ax({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),x=new nt(new _t,g);let _=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,_=!0):(g.color.copy(Zp),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):y===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const m=this._cubeSize;Xo(r,y*m,u>2?m:0,m,m),f.setRenderTarget(r),_&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,mu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qp[(r-1)%Qp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new nt(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Mr-1),_=s/x,v=isFinite(s)?1+Math.floor(f*_):Mr;v>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mr}`);const u=[];let y=0;for(let T=0;T<Mr;++T){const I=T/_,E=Math.exp(-I*I/2);u.push(E),T===0?y+=E:T<v&&(y+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:m}=this;d.dTheta.value=x,d.mipInt.value=m-i;const S=this._sizeLods[r],w=3*S*(r>m-bs?r-m+bs:0),R=4*(this._cubeSize-S);Xo(n,w,R,3*S,2*S),l.setRenderTarget(n),l.render(h,mu)}}function g1(t){const e=[],n=[],i=[];let r=t;const s=t-bs+1+Kp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-bs?l=Kp[a-t+bs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,x=6,_=3,v=2,u=1,y=new Float32Array(_*x*g),m=new Float32Array(v*x*g),S=new Float32Array(u*x*g);for(let R=0;R<g;R++){const T=R%3*2/3-1,I=R>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(E,_*x*R),m.set(d,v*x*R);const A=[R,R,R,R,R,R];S.set(A,u*x*R)}const w=new Ui;w.setAttribute("position",new qn(y,_)),w.setAttribute("uv",new qn(m,v)),w.setAttribute("faceIndex",new qn(S,u)),e.push(w),r>bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function em(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function v1(t,e,n){const i=new Float32Array(Mr),r=new k(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function tm(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function nm(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===zl||l===yf,f=l===Ws||l===Xs;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Jp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Jp(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y1(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let v=0,u=_.length;v<u;v++)e.remove(_[v])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const _=g[x];for(let v=0,u=_.length;v<u;v++)e.update(_[v],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,x=h.attributes.position;let _=0;if(g!==null){const y=g.array;_=g.version;for(let m=0,S=y.length;m<S;m+=3){const w=y[m+0],R=y[m+1],T=y[m+2];d.push(w,R,R,T,T,w)}}else if(x!==void 0){const y=x.array;_=x.version;for(let m=0,S=y.length/3-1;m<S;m+=3){const w=m+0,R=m+1,T=m+2;d.push(w,R,R,T,T,w)}}else return;const v=new(_x(d)?Cx:bx)(d,1);v.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,v)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function S1(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function f(d,g){t.drawElements(s,g,o,d*l),n.update(g,s,1)}function h(d,g,x){if(x===0)return;let _,v;if(r)_=t,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,g,o,d*l,x),n.update(g,s,x)}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=h}function E1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function M1(t,e){return t[0]-e[0]}function w1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function T1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==x){let U=function(){ee.dispose(),s.delete(f),f.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,m=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let I=0;y===!0&&(I=1),m===!0&&(I=2),S===!0&&(I=3);let E=f.attributes.position.count*I,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Q=new Float32Array(E*A*4*x),ee=new Ex(Q,E,A,x);ee.type=Mi,ee.needsUpdate=!0;const W=I*4;for(let P=0;P<x;P++){const B=w[P],F=R[P],N=T[P],O=E*A*4*P;for(let H=0;H<B.count;H++){const z=H*W;y===!0&&(a.fromBufferAttribute(B,H),Q[O+z+0]=a.x,Q[O+z+1]=a.y,Q[O+z+2]=a.z,Q[O+z+3]=0),m===!0&&(a.fromBufferAttribute(F,H),Q[O+z+4]=a.x,Q[O+z+5]=a.y,Q[O+z+6]=a.z,Q[O+z+7]=0),S===!0&&(a.fromBufferAttribute(N,H),Q[O+z+8]=a.x,Q[O+z+9]=a.y,Q[O+z+10]=a.z,Q[O+z+11]=N.itemSize===4?a.w:1)}}_={count:x,texture:ee,size:new _e(E,A)},s.set(f,_),f.addEventListener("dispose",U)}let v=0;for(let y=0;y<d.length;y++)v+=d[y];const u=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",u),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const g=d===void 0?0:d.length;let x=i[f.id];if(x===void 0||x.length!==g){x=[];for(let m=0;m<g;m++)x[m]=[m,0];i[f.id]=x}for(let m=0;m<g;m++){const S=x[m];S[0]=m,S[1]=d[m]}x.sort(w1);for(let m=0;m<8;m++)m<g&&x[m][1]?(o[m][0]=x[m][0],o[m][1]=x[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(M1);const _=f.morphAttributes.position,v=f.morphAttributes.normal;let u=0;for(let m=0;m<8;m++){const S=o[m],w=S[0],R=S[1];w!==Number.MAX_SAFE_INTEGER&&R?(_&&f.getAttribute("morphTarget"+m)!==_[w]&&f.setAttribute("morphTarget"+m,_[w]),v&&f.getAttribute("morphNormal"+m)!==v[w]&&f.setAttribute("morphNormal"+m,v[w]),r[m]=R,u+=R):(_&&f.hasAttribute("morphTarget"+m)===!0&&f.deleteAttribute("morphTarget"+m),v&&f.hasAttribute("morphNormal"+m)===!0&&f.deleteAttribute("morphNormal"+m),r[m]=0)}const y=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",y),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function A1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Ux=new qt,Fx=new Ex,Ox=new hE,kx=new Dx,im=[],rm=[],sm=new Float32Array(16),am=new Float32Array(9),om=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=im[r];if(s===void 0&&(s=new Float32Array(r),im[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function L1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Dt(n,i)}}function D1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;am.set(i),t.uniformMatrix3fv(this.addr,!1,am),Dt(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;sm.set(i),t.uniformMatrix4fv(this.addr,!1,sm),Dt(n,i)}}function I1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function k1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ux,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ox,r)}function G1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kx,r)}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fx,r)}function X1(t){switch(t){case 5126:return b1;case 35664:return C1;case 35665:return R1;case 35666:return P1;case 35674:return L1;case 35675:return D1;case 35676:return N1;case 5124:case 35670:return I1;case 35667:case 35671:return U1;case 35668:case 35672:return F1;case 35669:case 35673:return O1;case 5125:return k1;case 36294:return B1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}function Y1(t,e){t.uniform1fv(this.addr,e)}function $1(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function q1(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function K1(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function Z1(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Q1(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function J1(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eT(t,e){t.uniform1iv(this.addr,e)}function tT(t,e){t.uniform2iv(this.addr,e)}function nT(t,e){t.uniform3iv(this.addr,e)}function iT(t,e){t.uniform4iv(this.addr,e)}function rT(t,e){t.uniform1uiv(this.addr,e)}function sT(t,e){t.uniform2uiv(this.addr,e)}function aT(t,e){t.uniform3uiv(this.addr,e)}function oT(t,e){t.uniform4uiv(this.addr,e)}function lT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ux,s[a])}function cT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ox,s[a])}function uT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kx,s[a])}function fT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fx,s[a])}function dT(t){switch(t){case 5126:return Y1;case 35664:return $1;case 35665:return q1;case 35666:return K1;case 35674:return Z1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return aT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}class hT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=X1(n.type)}}class pT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=dT(n.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function lm(t,e){t.seq.push(e),t.map[e.id]=e}function gT(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lm(n,c===void 0?new hT(o,t,e):new pT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new mT(o),lm(n,h)),n=h}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);gT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let vT=0;function xT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function _T(t){switch(t){case ai:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xT(t.getShaderSource(e),a)}else return r}function yT(t,e){const n=_T(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function ST(t,e){let n;switch(e){case CS:n="Linear";break;case RS:n="Reinhard";break;case PS:n="OptimizedCineon";break;case LS:n="ACESFilmic";break;case DS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ET(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ta).join(`
`)}function MT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ta(t){return t!==""}function fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(t){return t.replace(TT,bT)}const AT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bT(t,e){let n=Oe[e];if(n===void 0){const i=AT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(t){return t.replace(CT,RT)}function RT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ax?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function LT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function NT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cx:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function IT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=PT(n),c=LT(n),f=DT(n),h=NT(n),d=IT(n),g=n.isWebGL2?"":ET(n),x=MT(s),_=r.createProgram();let v,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ta).join(`
`),v.length>0&&(v+=`
`),u=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ta).join(`
`),u.length>0&&(u+=`
`)):(v=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),u=[g,pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ir?ST("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,yT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),a=bf(a),a=fm(a,n),a=dm(a,n),o=bf(o),o=fm(o,n),o=dm(o,n),a=hm(a),o=hm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const m=y+v+a,S=y+u+o,w=cm(r,r.VERTEX_SHADER,m),R=cm(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,w),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(w).trim(),Q=r.getShaderInfoLog(R).trim();let ee=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,R);else{const U=um(r,w,"vertex"),P=um(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+U+`
`+P)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||Q==="")&&(W=!1);W&&(this.diagnostics={runnable:ee,programLog:E,vertexShader:{log:A,prefix:v},fragmentShader:{log:Q,prefix:u}})}r.deleteShader(w),r.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new pl(r,_)),T};let I;return this.getAttributes=function(){return I===void 0&&(I=wT(r,_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let FT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kT(e),n.set(e,i)),i}}class kT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function BT(t,e,n,i,r,s,a){const o=new wx,l=new OT,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function v(E,A,Q,ee,W){const U=ee.fog,P=W.geometry,B=E.isMeshStandardMaterial?ee.environment:null,F=(E.isMeshStandardMaterial?n:e).get(E.envMap||B),N=F&&F.mapping===oc?F.image.height:null,O=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=H!==void 0?H.length:0;let q=0;P.morphAttributes.position!==void 0&&(q=1),P.morphAttributes.normal!==void 0&&(q=2),P.morphAttributes.color!==void 0&&(q=3);let ce,ue,me,ye;if(O){const st=ti[O];ce=st.vertexShader,ue=st.fragmentShader}else ce=E.vertexShader,ue=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const Ae=t.getRenderTarget(),Me=W.isInstancedMesh===!0,Ye=!!E.map,kt=!!E.matcap,Ue=!!F,V=!!E.aoMap,At=!!E.lightMap,we=!!E.bumpMap,Ne=!!E.normalMap,Ce=!!E.displacementMap,rt=!!E.emissiveMap,Be=!!E.metalnessMap,Ie=!!E.roughnessMap,$e=E.anisotropy>0,bt=E.clearcoat>0,Nt=E.iridescence>0,C=E.sheen>0,M=E.transmission>0,X=$e&&!!E.anisotropyMap,re=bt&&!!E.clearcoatMap,te=bt&&!!E.clearcoatNormalMap,se=bt&&!!E.clearcoatRoughnessMap,Se=Nt&&!!E.iridescenceMap,ae=Nt&&!!E.iridescenceThicknessMap,Y=C&&!!E.sheenColorMap,L=C&&!!E.sheenRoughnessMap,J=!!E.specularMap,pe=!!E.specularColorMap,le=!!E.specularIntensityMap,he=M&&!!E.transmissionMap,Le=M&&!!E.thicknessMap,We=!!E.gradientMap,D=!!E.alphaMap,de=E.alphaTest>0,$=!!E.alphaHash,ie=!!E.extensions,oe=!!P.attributes.uv1,He=!!P.attributes.uv2,Qe=!!P.attributes.uv3;let tt=ir;return E.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:ue,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,instancing:Me,instancingColor:Me&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ai,map:Ye,matcap:kt,envMap:Ue,envMapMode:Ue&&F.mapping,envMapCubeUVHeight:N,aoMap:V,lightMap:At,bumpMap:we,normalMap:Ne,displacementMap:d&&Ce,emissiveMap:rt,normalMapObjectSpace:Ne&&E.normalMapType===WS,normalMapTangentSpace:Ne&&E.normalMapType===xx,metalnessMap:Be,roughnessMap:Ie,anisotropy:$e,anisotropyMap:X,clearcoat:bt,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Nt,iridescenceMap:Se,iridescenceThicknessMap:ae,sheen:C,sheenColorMap:Y,sheenRoughnessMap:L,specularMap:J,specularColorMap:pe,specularIntensityMap:le,transmission:M,transmissionMap:he,thicknessMap:Le,gradientMap:We,opaque:E.transparent===!1&&E.blending===Is,alphaMap:D,alphaTest:de,alphaHash:$,combine:E.combine,mapUv:Ye&&_(E.map.channel),aoMapUv:V&&_(E.aoMap.channel),lightMapUv:At&&_(E.lightMap.channel),bumpMapUv:we&&_(E.bumpMap.channel),normalMapUv:Ne&&_(E.normalMap.channel),displacementMapUv:Ce&&_(E.displacementMap.channel),emissiveMapUv:rt&&_(E.emissiveMap.channel),metalnessMapUv:Be&&_(E.metalnessMap.channel),roughnessMapUv:Ie&&_(E.roughnessMap.channel),anisotropyMapUv:X&&_(E.anisotropyMap.channel),clearcoatMapUv:re&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(E.sheenRoughnessMap.channel),specularMapUv:J&&_(E.specularMap.channel),specularColorMapUv:pe&&_(E.specularColorMap.channel),specularIntensityMapUv:le&&_(E.specularIntensityMap.channel),transmissionMapUv:he&&_(E.transmissionMap.channel),thicknessMapUv:Le&&_(E.thicknessMap.channel),alphaMapUv:D&&_(E.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ne||$e),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:He,vertexUv3s:Qe,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(Ye||D),fog:!!U,useFog:E.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&E.map.colorSpace===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ie&&E.extensions.derivatives===!0,extensionFragDepth:ie&&E.extensions.fragDepth===!0,extensionDrawBuffers:ie&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)A.push(Q),A.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(y(A,E),m(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function y(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function m(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const A=x[E.type];let Q;if(A){const ee=ti[A];Q=Px.clone(ee.uniforms)}else Q=E.uniforms;return Q}function w(E,A){let Q;for(let ee=0,W=c.length;ee<W;ee++){const U=c[ee];if(U.cacheKey===A){Q=U,++Q.usedTimes;break}}return Q===void 0&&(Q=new UT(t,A,E,s),c.push(Q)),Q}function R(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:I}}function zT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function HT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,g,x,_,v){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:_,group:v},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=v),e++,u}function o(h,d,g,x,_,v){const u=a(h,d,g,x,_,v);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,x,_,v){const u=a(h,d,g,x,_,v);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||HT),i.length>1&&i.sort(d||mm),r.length>1&&r.sort(d||mm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function jT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new gm,t.set(i,[a])):r>=s.length?(a=new gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function VT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ze};break;case"SpotLight":n={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WT=0;function XT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YT(t,e){const n=new VT,i=GT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new k);const s=new k,a=new St,o=new St;function l(f,h){let d=0,g=0,x=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let _=0,v=0,u=0,y=0,m=0,S=0,w=0,R=0,T=0,I=0;f.sort(XT);const E=h===!0?Math.PI:1;for(let Q=0,ee=f.length;Q<ee;Q++){const W=f[Q],U=W.color,P=W.intensity,B=W.distance,F=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)d+=U.r*P*E,g+=U.g*P*E,x+=U.b*P*E;else if(W.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(W.sh.coefficients[N],P);else if(W.isDirectionalLight){const N=n.get(W);if(N.color.copy(W.color).multiplyScalar(W.intensity*E),W.castShadow){const O=W.shadow,H=i.get(W);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,r.directionalShadow[_]=H,r.directionalShadowMap[_]=F,r.directionalShadowMatrix[_]=W.shadow.matrix,S++}r.directional[_]=N,_++}else if(W.isSpotLight){const N=n.get(W);N.position.setFromMatrixPosition(W.matrixWorld),N.color.copy(U).multiplyScalar(P*E),N.distance=B,N.coneCos=Math.cos(W.angle),N.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),N.decay=W.decay,r.spot[u]=N;const O=W.shadow;if(W.map&&(r.spotLightMap[T]=W.map,T++,O.updateMatrices(W),W.castShadow&&I++),r.spotLightMatrix[u]=O.matrix,W.castShadow){const H=i.get(W);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,r.spotShadow[u]=H,r.spotShadowMap[u]=F,R++}u++}else if(W.isRectAreaLight){const N=n.get(W);N.color.copy(U).multiplyScalar(P),N.halfWidth.set(W.width*.5,0,0),N.halfHeight.set(0,W.height*.5,0),r.rectArea[y]=N,y++}else if(W.isPointLight){const N=n.get(W);if(N.color.copy(W.color).multiplyScalar(W.intensity*E),N.distance=W.distance,N.decay=W.decay,W.castShadow){const O=W.shadow,H=i.get(W);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,r.pointShadow[v]=H,r.pointShadowMap[v]=F,r.pointShadowMatrix[v]=W.shadow.matrix,w++}r.point[v]=N,v++}else if(W.isHemisphereLight){const N=n.get(W);N.skyColor.copy(W.color).multiplyScalar(P*E),N.groundColor.copy(W.groundColor).multiplyScalar(P*E),r.hemi[m]=N,m++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==_||A.pointLength!==v||A.spotLength!==u||A.rectAreaLength!==y||A.hemiLength!==m||A.numDirectionalShadows!==S||A.numPointShadows!==w||A.numSpotShadows!==R||A.numSpotMaps!==T)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=y,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,A.directionalLength=_,A.pointLength=v,A.spotLength=u,A.rectAreaLength=y,A.hemiLength=m,A.numDirectionalShadows=S,A.numPointShadows=w,A.numSpotShadows=R,A.numSpotMaps=T,r.version=WT++)}function c(f,h){let d=0,g=0,x=0,_=0,v=0;const u=h.matrixWorldInverse;for(let y=0,m=f.length;y<m;y++){const S=f[y];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),d++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const w=r.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(u),v++}}}return{setup:l,setupView:c,state:r}}function vm(t,e){const n=new YT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $T(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new vm(t,e),n.set(s,[l])):a>=o.length?(l=new vm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qT extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KT extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JT(t,e,n){let i=new Ld;const r=new _e,s=new _e,a=new ut,o=new qT({depthPacking:GS}),l=new KT,c={},f=n.maxTextureSize,h={[si]:hn,[hn]:si,[Nn]:Nn},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ZT,fragmentShader:QT}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ui;x.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(x,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ax;let u=this.type;this.render=function(w,R,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const I=t.getRenderTarget(),E=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Ai),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ee=u!==vi&&this.type===vi,W=u===vi&&this.type!==vi;for(let U=0,P=w.length;U<P;U++){const B=w[U],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const N=F.getFrameExtents();if(r.multiply(N),s.copy(F.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,F.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,F.mapSize.y=s.y)),F.map===null||ee===!0||W===!0){const H=this.type!==vi?{minFilter:ht,magFilter:ht}:{};F.map!==null&&F.map.dispose(),F.map=new Di(r.x,r.y,H),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const O=F.getViewportCount();for(let H=0;H<O;H++){const z=F.getViewport(H);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),Q.viewport(a),F.updateMatrices(B,H),i=F.getFrustum(),S(R,T,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===vi&&y(F,T),F.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(I,E,A)};function y(w,R){const T=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Di(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,T,d,_,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,T,g,_,null)}function m(w,R,T,I){let E=null;const A=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)E=A;else if(E=T.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Q=E.uuid,ee=R.uuid;let W=c[Q];W===void 0&&(W={},c[Q]=W);let U=W[ee];U===void 0&&(U=E.clone(),W[ee]=U),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,I===vi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=t.properties.get(E);Q.light=T}return E}function S(w,R,T,I,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===vi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),W=w.material;if(Array.isArray(W)){const U=ee.groups;for(let P=0,B=U.length;P<B;P++){const F=U[P],N=W[F.materialIndex];if(N&&N.visible){const O=m(w,N,I,E);t.renderBufferDirect(T,null,ee,O,w,F)}}}else if(W.visible){const U=m(w,W,I,E);t.renderBufferDirect(T,null,ee,U,w,null)}}const Q=w.children;for(let ee=0,W=Q.length;ee<W;ee++)S(Q[ee],R,T,I,E)}}function eA(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const de=new ut;let $=null;const ie=new ut(0,0,0,0);return{setMask:function(oe){$!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){D=oe},setClear:function(oe,He,Qe,tt,pn){pn===!0&&(oe*=tt,He*=tt,Qe*=tt),de.set(oe,He,Qe,tt),ie.equals(de)===!1&&(t.clearColor(oe,He,Qe,tt),ie.copy(de))},reset:function(){D=!1,$=null,ie.set(-1,0,0,0)}}}function s(){let D=!1,de=null,$=null,ie=null;return{setTest:function(oe){oe?Ae(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(oe){de!==oe&&!D&&(t.depthMask(oe),de=oe)},setFunc:function(oe){if($!==oe){switch(oe){case _S:t.depthFunc(t.NEVER);break;case yS:t.depthFunc(t.ALWAYS);break;case SS:t.depthFunc(t.LESS);break;case _f:t.depthFunc(t.LEQUAL);break;case ES:t.depthFunc(t.EQUAL);break;case MS:t.depthFunc(t.GEQUAL);break;case wS:t.depthFunc(t.GREATER);break;case TS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=oe}},setLocked:function(oe){D=oe},setClear:function(oe){ie!==oe&&(t.clearDepth(oe),ie=oe)},reset:function(){D=!1,de=null,$=null,ie=null}}}function a(){let D=!1,de=null,$=null,ie=null,oe=null,He=null,Qe=null,tt=null,pn=null;return{setTest:function(st){D||(st?Ae(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(st){de!==st&&!D&&(t.stencilMask(st),de=st)},setFunc:function(st,Zn,Qt){($!==st||ie!==Zn||oe!==Qt)&&(t.stencilFunc(st,Zn,Qt),$=st,ie=Zn,oe=Qt)},setOp:function(st,Zn,Qt){(He!==st||Qe!==Zn||tt!==Qt)&&(t.stencilOp(st,Zn,Qt),He=st,Qe=Zn,tt=Qt)},setLocked:function(st){D=st},setClear:function(st){pn!==st&&(t.clearStencil(st),pn=st)},reset:function(){D=!1,de=null,$=null,ie=null,oe=null,He=null,Qe=null,tt=null,pn=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,h=new WeakMap;let d={},g={},x=new WeakMap,_=[],v=null,u=!1,y=null,m=null,S=null,w=null,R=null,T=null,I=null,E=!1,A=null,Q=null,ee=null,W=null,U=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=F>=1):N.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=F>=2);let O=null,H={};const z=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),ce=new ut().fromArray(z),ue=new ut().fromArray(q);function me(D,de,$,ie){const oe=new Uint8Array(4),He=t.createTexture();t.bindTexture(D,He),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<$;Qe++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(de+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return He}const ye={};ye[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(t.DEPTH_TEST),l.setFunc(_f),Ce(!1),rt(np),Ae(t.CULL_FACE),we(Ai);function Ae(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Me(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ye(D,de){return g[D]!==de?(t.bindFramebuffer(D,de),g[D]=de,i&&(D===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function kt(D,de){let $=_,ie=!1;if(D)if($=x.get(de),$===void 0&&($=[],x.set(de,$)),D.isWebGLMultipleRenderTargets){const oe=D.texture;if($.length!==oe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let He=0,Qe=oe.length;He<Qe;He++)$[He]=t.COLOR_ATTACHMENT0+He;$.length=oe.length,ie=!0}}else $[0]!==t.COLOR_ATTACHMENT0&&($[0]=t.COLOR_ATTACHMENT0,ie=!0);else $[0]!==t.BACK&&($[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ue(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const V={[ps]:t.FUNC_ADD,[lS]:t.FUNC_SUBTRACT,[cS]:t.FUNC_REVERSE_SUBTRACT};if(i)V[ap]=t.MIN,V[op]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(V[ap]=D.MIN_EXT,V[op]=D.MAX_EXT)}const At={[uS]:t.ZERO,[fS]:t.ONE,[dS]:t.SRC_COLOR,[ox]:t.SRC_ALPHA,[xS]:t.SRC_ALPHA_SATURATE,[gS]:t.DST_COLOR,[pS]:t.DST_ALPHA,[hS]:t.ONE_MINUS_SRC_COLOR,[lx]:t.ONE_MINUS_SRC_ALPHA,[vS]:t.ONE_MINUS_DST_COLOR,[mS]:t.ONE_MINUS_DST_ALPHA};function we(D,de,$,ie,oe,He,Qe,tt){if(D===Ai){u===!0&&(Me(t.BLEND),u=!1);return}if(u===!1&&(Ae(t.BLEND),u=!0),D!==oS){if(D!==y||tt!==E){if((m!==ps||R!==ps)&&(t.blendEquation(t.FUNC_ADD),m=ps,R=ps),tt)switch(D){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,T=null,I=null,y=D,E=tt}return}oe=oe||de,He=He||$,Qe=Qe||ie,(de!==m||oe!==R)&&(t.blendEquationSeparate(V[de],V[oe]),m=de,R=oe),($!==S||ie!==w||He!==T||Qe!==I)&&(t.blendFuncSeparate(At[$],At[ie],At[He],At[Qe]),S=$,w=ie,T=He,I=Qe),y=D,E=!1}function Ne(D,de){D.side===Nn?Me(t.CULL_FACE):Ae(t.CULL_FACE);let $=D.side===hn;de&&($=!$),Ce($),D.blending===Is&&D.transparent===!1?we(Ai):we(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ie=D.stencilWrite;c.setTest(ie),ie&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){A!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),A=D)}function rt(D){D!==rS?(Ae(t.CULL_FACE),D!==Q&&(D===np?t.cullFace(t.BACK):D===sS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),Q=D}function Be(D){D!==ee&&(B&&t.lineWidth(D),ee=D)}function Ie(D,de,$){D?(Ae(t.POLYGON_OFFSET_FILL),(W!==de||U!==$)&&(t.polygonOffset(de,$),W=de,U=$)):Me(t.POLYGON_OFFSET_FILL)}function $e(D){D?Ae(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function bt(D){D===void 0&&(D=t.TEXTURE0+P-1),O!==D&&(t.activeTexture(D),O=D)}function Nt(D,de,$){$===void 0&&(O===null?$=t.TEXTURE0+P-1:$=O);let ie=H[$];ie===void 0&&(ie={type:void 0,texture:void 0},H[$]=ie),(ie.type!==D||ie.texture!==de)&&(O!==$&&(t.activeTexture($),O=$),t.bindTexture(D,de||ye[D]),ie.type=D,ie.texture=de)}function C(){const D=H[O];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function le(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function he(D,de){let $=h.get(de);$===void 0&&($=new WeakMap,h.set(de,$));let ie=$.get(D);ie===void 0&&(ie=t.getUniformBlockIndex(de,D.name),$.set(D,ie))}function Le(D,de){const ie=h.get(de).get(D);f.get(de)!==ie&&(t.uniformBlockBinding(de,ie,D.__bindingPointIndex),f.set(de,ie))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,H={},g={},x=new WeakMap,_=[],v=null,u=!1,y=null,m=null,S=null,w=null,R=null,T=null,I=null,E=!1,A=null,Q=null,ee=null,W=null,U=null,ce.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:Me,bindFramebuffer:Ye,drawBuffers:kt,useProgram:Ue,setBlending:we,setMaterial:Ne,setFlipSided:Ce,setCullFace:rt,setLineWidth:Be,setPolygonOffset:Ie,setScissorTest:$e,activeTexture:bt,bindTexture:Nt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:L,texImage3D:J,updateUBOMapping:he,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:Y,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:Se,scissor:pe,viewport:le,reset:We}}function tA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const v=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return u?new OffscreenCanvas(C,M):jl("canvas")}function m(C,M,X,re){let te=1;if((C.width>re||C.height>re)&&(te=re/Math.max(C.width,C.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=M?Af:Math.floor,Se=se(te*C.width),ae=se(te*C.height);_===void 0&&(_=y(Se,ae));const Y=X?y(Se,ae):_;return Y.width=Se,Y.height=ae,Y.getContext("2d").drawImage(C,0,0,Se,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+ae+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return Up(C.width)&&Up(C.height)}function w(C){return o?!1:C.wrapS!==Wn||C.wrapT!==Wn||C.minFilter!==ht&&C.minFilter!==Ln}function R(C,M){return C.generateMipmaps&&M&&C.minFilter!==ht&&C.minFilter!==Ln}function T(C){t.generateMipmap(C)}function I(C,M,X,re,te=!1){if(o===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=M;return M===t.RED&&(X===t.FLOAT&&(se=t.R32F),X===t.HALF_FLOAT&&(se=t.R16F),X===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(se=t.R8UI),X===t.UNSIGNED_SHORT&&(se=t.R16UI),X===t.UNSIGNED_INT&&(se=t.R32UI),X===t.BYTE&&(se=t.R8I),X===t.SHORT&&(se=t.R16I),X===t.INT&&(se=t.R32I)),M===t.RG&&(X===t.FLOAT&&(se=t.RG32F),X===t.HALF_FLOAT&&(se=t.RG16F),X===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA&&(X===t.FLOAT&&(se=t.RGBA32F),X===t.HALF_FLOAT&&(se=t.RGBA16F),X===t.UNSIGNED_BYTE&&(se=re===lt&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(C,M,X){return R(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==ht&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){return C===ht||C===lp||C===Gc?t.NEAREST:t.LINEAR}function Q(C){const M=C.target;M.removeEventListener("dispose",Q),W(M),M.isVideoTexture&&x.delete(M)}function ee(C){const M=C.target;M.removeEventListener("dispose",ee),P(M)}function W(C){const M=i.get(C);if(M.__webglInit===void 0)return;const X=C.source,re=v.get(X);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(C),Object.keys(re).length===0&&v.delete(X)}i.remove(C)}function U(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const X=C.source,re=v.get(X);delete re[M.__cacheKey],a.memory.textures--}function P(C){const M=C.texture,X=i.get(C),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(X.__webglFramebuffer[te]))for(let se=0;se<X.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(X.__webglFramebuffer[te][se]);else t.deleteFramebuffer(X.__webglFramebuffer[te]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[te])}else{if(Array.isArray(X.__webglFramebuffer))for(let te=0;te<X.__webglFramebuffer.length;te++)t.deleteFramebuffer(X.__webglFramebuffer[te]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const Se=i.get(M[te]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(C)}let B=0;function F(){B=0}function N(){const C=B;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),B+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function H(C,M){const X=i.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(X,C,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function z(C,M){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Ye(X,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function q(C,M){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Ye(X,C,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function ce(C,M){const X=i.get(C);if(C.version>0&&X.__version!==C.version){kt(X,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const ue={[Sf]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Ef]:t.MIRRORED_REPEAT},me={[ht]:t.NEAREST,[lp]:t.NEAREST_MIPMAP_NEAREST,[Gc]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[NS]:t.LINEAR_MIPMAP_NEAREST,[Ja]:t.LINEAR_MIPMAP_LINEAR},ye={[YS]:t.NEVER,[eE]:t.ALWAYS,[$S]:t.LESS,[KS]:t.LEQUAL,[qS]:t.EQUAL,[JS]:t.GEQUAL,[ZS]:t.GREATER,[QS]:t.NOTEQUAL};function Ae(C,M,X){if(X?(t.texParameteri(C,t.TEXTURE_WRAP_S,ue[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ue[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ue[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,me[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,me[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Wn||M.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==ht&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ht||M.minFilter!==Gc&&M.minFilter!==Ja||M.type===Mi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Me(C,M){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",Q));const re=M.source;let te=v.get(re);te===void 0&&(te={},v.set(re,te));const se=O(M);if(se!==C.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[se].usedTimes++;const Se=te[C.__cacheKey];Se!==void 0&&(te[C.__cacheKey].usedTimes--,Se.usedTimes===0&&U(M)),C.__cacheKey=se,C.__webglTexture=te[se].texture}return X}function Ye(C,M,X){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=Me(C,M),se=M.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+X);const Se=i.get(se);if(se.version!==Se.__version||te===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ae=w(M)&&S(M.image)===!1;let Y=m(M.image,ae,!1,f);Y=Nt(M,Y);const L=S(Y)||o,J=s.convert(M.format,M.colorSpace);let pe=s.convert(M.type),le=I(M.internalFormat,J,pe,M.colorSpace,M.isVideoTexture);Ae(re,M,L);let he;const Le=M.mipmaps,We=o&&M.isVideoTexture!==!0,D=Se.__version===void 0||te===!0,de=E(M,Y,L);if(M.isDepthTexture)le=t.DEPTH_COMPONENT,o?M.type===Mi?le=t.DEPTH_COMPONENT32F:M.type===$i?le=t.DEPTH_COMPONENT24:M.type===Lr?le=t.DEPTH24_STENCIL8:le=t.DEPTH_COMPONENT16:M.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Dr&&le===t.DEPTH_COMPONENT&&M.type!==Rd&&M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$i,pe=s.convert(M.type)),M.format===$s&&le===t.DEPTH_COMPONENT&&(le=t.DEPTH_STENCIL,M.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Lr,pe=s.convert(M.type))),D&&(We?n.texStorage2D(t.TEXTURE_2D,1,le,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,le,Y.width,Y.height,0,J,pe,null));else if(M.isDataTexture)if(Le.length>0&&L){We&&D&&n.texStorage2D(t.TEXTURE_2D,de,le,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],We?n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,J,pe,he.data):n.texImage2D(t.TEXTURE_2D,$,le,he.width,he.height,0,J,pe,he.data);M.generateMipmaps=!1}else We?(D&&n.texStorage2D(t.TEXTURE_2D,de,le,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,J,pe,Y.data)):n.texImage2D(t.TEXTURE_2D,0,le,Y.width,Y.height,0,J,pe,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,le,Le[0].width,Le[0].height,Y.depth);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],M.format!==Xn?J!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Y.depth,J,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,le,he.width,he.height,Y.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Y.depth,J,pe,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,le,he.width,he.height,Y.depth,0,J,pe,he.data)}else{We&&D&&n.texStorage2D(t.TEXTURE_2D,de,le,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],M.format!==Xn?J!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,J,he.data):n.compressedTexImage2D(t.TEXTURE_2D,$,le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,J,pe,he.data):n.texImage2D(t.TEXTURE_2D,$,le,he.width,he.height,0,J,pe,he.data)}else if(M.isDataArrayTexture)We?(D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,le,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,J,pe,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,Y.width,Y.height,Y.depth,0,J,pe,Y.data);else if(M.isData3DTexture)We?(D&&n.texStorage3D(t.TEXTURE_3D,de,le,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,J,pe,Y.data)):n.texImage3D(t.TEXTURE_3D,0,le,Y.width,Y.height,Y.depth,0,J,pe,Y.data);else if(M.isFramebufferTexture){if(D)if(We)n.texStorage2D(t.TEXTURE_2D,de,le,Y.width,Y.height);else{let $=Y.width,ie=Y.height;for(let oe=0;oe<de;oe++)n.texImage2D(t.TEXTURE_2D,oe,le,$,ie,0,J,pe,null),$>>=1,ie>>=1}}else if(Le.length>0&&L){We&&D&&n.texStorage2D(t.TEXTURE_2D,de,le,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],We?n.texSubImage2D(t.TEXTURE_2D,$,0,0,J,pe,he):n.texImage2D(t.TEXTURE_2D,$,le,J,pe,he);M.generateMipmaps=!1}else We?(D&&n.texStorage2D(t.TEXTURE_2D,de,le,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J,pe,Y)):n.texImage2D(t.TEXTURE_2D,0,le,J,pe,Y);R(M,L)&&T(re),Se.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function kt(C,M,X){if(M.image.length!==6)return;const re=Me(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+X);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let $=0;$<6;$++)!Se&&!ae?Y[$]=m(M.image[$],!1,!0,c):Y[$]=ae?M.image[$].image:M.image[$],Y[$]=Nt(M,Y[$]);const L=Y[0],J=S(L)||o,pe=s.convert(M.format,M.colorSpace),le=s.convert(M.type),he=I(M.internalFormat,pe,le,M.colorSpace),Le=o&&M.isVideoTexture!==!0,We=se.__version===void 0||re===!0;let D=E(M,L,J);Ae(t.TEXTURE_CUBE_MAP,M,J);let de;if(Se){Le&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,he,L.width,L.height);for(let $=0;$<6;$++){de=Y[$].mipmaps;for(let ie=0;ie<de.length;ie++){const oe=de[ie];M.format!==Xn?pe!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,oe.width,oe.height,pe,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,oe.width,oe.height,pe,le,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,he,oe.width,oe.height,0,pe,le,oe.data)}}}else{de=M.mipmaps,Le&&We&&(de.length>0&&D++,n.texStorage2D(t.TEXTURE_CUBE_MAP,D,he,Y[0].width,Y[0].height));for(let $=0;$<6;$++)if(ae){Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Y[$].width,Y[$].height,pe,le,Y[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,he,Y[$].width,Y[$].height,0,pe,le,Y[$].data);for(let ie=0;ie<de.length;ie++){const He=de[ie].image[$].image;Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,He.width,He.height,pe,le,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,he,He.width,He.height,0,pe,le,He.data)}}else{Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe,le,Y[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,he,pe,le,Y[$]);for(let ie=0;ie<de.length;ie++){const oe=de[ie];Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,pe,le,oe.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,he,pe,le,oe.image[$])}}}R(M,J)&&T(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,X,re,te,se){const Se=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),Y=I(X.internalFormat,Se,ae,X.colorSpace);if(!i.get(M).__hasExternalTextures){const J=Math.max(1,M.width>>se),pe=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,Y,J,pe,M.depth,0,Se,ae,null):n.texImage2D(te,se,Y,J,pe,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(X).__webglTexture,0,Ie(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(X).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(C,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let re=t.DEPTH_COMPONENT16;if(X||$e(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Mi?re=t.DEPTH_COMPONENT32F:te.type===$i&&(re=t.DEPTH_COMPONENT24));const se=Ie(M);$e(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const re=Ie(M);X&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):$e(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],Se=s.convert(se.format,se.colorSpace),ae=s.convert(se.type),Y=I(se.internalFormat,Se,ae,se.colorSpace),L=Ie(M);X&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,L,Y,M.width,M.height):$e(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function At(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=Ie(M);if(M.depthTexture.format===Dr)$e(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===$s)$e(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function we(C){const M=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,C)}else if(X){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),V(M.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),V(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,M,X){const re=i.get(C);M!==void 0&&Ue(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&we(C)}function Ce(C){const M=C.texture,X=i.get(C),re=i.get(M);C.addEventListener("dispose",ee),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Se=S(C)||o;if(te){X.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ae]=[];for(let Y=0;Y<M.mipmaps.length;Y++)X.__webglFramebuffer[ae][Y]=t.createFramebuffer()}else X.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)X.__webglFramebuffer[ae]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ae=C.texture;for(let Y=0,L=ae.length;Y<L;Y++){const J=i.get(ae[Y]);J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&$e(C)===!1){const ae=se?M:[M];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<ae.length;Y++){const L=ae[Y];X.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const J=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),le=I(L.internalFormat,J,pe,L.colorSpace,C.isXRRenderTarget===!0),he=Ie(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,le,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),V(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M,Se);for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)Ue(X.__webglFramebuffer[ae][Y],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Y);else Ue(X.__webglFramebuffer[ae],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);R(M,Se)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ae=C.texture;for(let Y=0,L=ae.length;Y<L;Y++){const J=ae[Y],pe=i.get(J);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Ae(t.TEXTURE_2D,J,Se),Ue(X.__webglFramebuffer,C,J,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),R(J,Se)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,re.__webglTexture),Ae(ae,M,Se),o&&M.mipmaps&&M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)Ue(X.__webglFramebuffer[Y],C,M,t.COLOR_ATTACHMENT0,ae,Y);else Ue(X.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ae,0);R(M,Se)&&T(ae),n.unbindTexture()}C.depthBuffer&&we(C)}function rt(C){const M=S(C)||o,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,te=X.length;re<te;re++){const se=X[re];if(R(se,M)){const Se=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(se).__webglTexture;n.bindTexture(Se,ae),T(Se),n.unbindTexture()}}}function Be(C){if(o&&C.samples>0&&$e(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,re=C.height;let te=t.COLOR_BUFFER_BIT;const se=[],Se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let L=0;L<M.length;L++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let L=0;L<M.length;L++){se.push(t.COLOR_ATTACHMENT0+L),C.depthBuffer&&se.push(Se);const J=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(J===!1&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[L]),J===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),Y){const pe=i.get(M[L]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,X,re,0,0,X,re,te,t.NEAREST),g&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let L=0;L<M.length;L++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,ae.__webglColorRenderbuffer[L]);const J=i.get(M[L]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(h,C.samples)}function $e(C){const M=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(C){const M=a.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function Nt(C,M){const X=C.colorSpace,re=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===wf||X!==ai&&X!==Ir&&(X===lt||X===lc?o===!1?e.has("EXT_sRGB")===!0&&re===Xn?(C.format=wf,C.minFilter=Ln,C.generateMipmaps=!1):M=yx.sRGBToLinear(M):(re!==Xn||te!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=ce,this.rebindTextures=Ne,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=$e}const nA=0,Ct=1;function iA(t,e,n){const i=n.isWebGL2;function r(s,a=Ir){let o;const l=a===lt||a===lc?Ct:nA;if(s===rr)return t.UNSIGNED_BYTE;if(s===dx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===hx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===IS)return t.BYTE;if(s===US)return t.SHORT;if(s===Rd)return t.UNSIGNED_SHORT;if(s===fx)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Mi)return t.FLOAT;if(s===Ys)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===FS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===OS)return t.LUMINANCE;if(s===kS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===$s)return t.DEPTH_STENCIL;if(s===wf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===BS)return t.RED;if(s===px)return t.RED_INTEGER;if(s===zS)return t.RG;if(s===mx)return t.RG_INTEGER;if(s===gx)return t.RGBA_INTEGER;if(s===Wc||s===Xc||s===Yc||s===$c)if(l===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cp||s===up||s===fp||s===dp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===up)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===HS)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hp||s===pp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===hp)return l===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mp||s===gp||s===vp||s===xp||s===_p||s===yp||s===Sp||s===Ep||s===Mp||s===wp||s===Tp||s===Ap||s===bp||s===Cp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===mp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_p)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ap)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cp)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc||s===Rp||s===Pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===qc)return l===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jS||s===Lp||s===Dp||s===Np)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===qc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Np)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class rA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const v=n.getJointPose(_,i),u=this._getHandJoint(c,_);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Bx extends qt{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:Dr,f!==Dr&&f!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Dr&&(i=$i),i===void 0&&f===$s&&(i=Lr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aA extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,x=null;const _=n.getContextAttributes();let v=null,u=null;const y=[],m=[],S=new _n;S.layers.enable(1),S.viewport=new ut;const w=new _n;w.layers.enable(2),w.viewport=new ut;const R=[S,w],T=new rA;T.layers.enable(1),T.layers.enable(2);let I=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=y[z];return q===void 0&&(q=new xu,y[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=y[z];return q===void 0&&(q=new xu,y[z]=q),q.getGripSpace()},this.getHand=function(z){let q=y[z];return q===void 0&&(q=new xu,y[z]=q),q.getHandSpace()};function A(z){const q=m.indexOf(z.inputSource);if(q===-1)return;const ce=y[q];ce!==void 0&&(ce.update(z.inputSource,z.frame,c||a),ce.dispatchEvent({type:z.type,data:z.inputSource}))}function Q(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ee);for(let z=0;z<y.length;z++){const q=m[z];q!==null&&(m[z]=null,y[z].disconnect(q))}I=null,E=null,e.setRenderTarget(v),g=null,d=null,h=null,r=null,u=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:g}),u=new Di(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ce=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=_.stencil?$s:Dr,ce=_.stencil?Lr:$i);const me={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),u=new Di(d.textureWidth,d.textureHeight,{format:Xn,type:rr,depthTexture:new Bx(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(u);ye.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(z){for(let q=0;q<z.removed.length;q++){const ce=z.removed[q],ue=m.indexOf(ce);ue>=0&&(m[ue]=null,y[ue].disconnect(ce))}for(let q=0;q<z.added.length;q++){const ce=z.added[q];let ue=m.indexOf(ce);if(ue===-1){for(let ye=0;ye<y.length;ye++)if(ye>=m.length){m.push(ce),ue=ye;break}else if(m[ye]===null){m[ye]=ce,ue=ye;break}if(ue===-1)break}const me=y[ue];me&&me.connect(ce)}}const W=new k,U=new k;function P(z,q,ce){W.setFromMatrixPosition(q.matrixWorld),U.setFromMatrixPosition(ce.matrixWorld);const ue=W.distanceTo(U),me=q.projectionMatrix.elements,ye=ce.projectionMatrix.elements,Ae=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],kt=(me[9]-1)/me[5],Ue=(me[8]-1)/me[0],V=(ye[8]+1)/ye[0],At=Ae*Ue,we=Ae*V,Ne=ue/(-Ue+V),Ce=Ne*-Ue;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ce),z.translateZ(Ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const rt=Ae+Ne,Be=Me+Ne,Ie=At-Ce,$e=we+(ue-Ce),bt=Ye*Me/Be*rt,Nt=kt*Me/Be*rt;z.projectionMatrix.makePerspective(Ie,$e,bt,Nt,rt,Be),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function B(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;T.near=w.near=S.near=z.near,T.far=w.far=S.far=z.far,(I!==T.near||E!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,E=T.far);const q=z.parent,ce=T.cameras;B(T,q);for(let ue=0;ue<ce.length;ue++)B(ce[ue],q);ce.length===2?P(T,S,w):T.projectionMatrix.copy(S.projectionMatrix),F(z,T,q)};function F(z,q,ce){ce===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(ce.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Tf*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)};let N=null;function O(z,q){if(f=q.getViewerPose(c||a),x=q,f!==null){const ce=f.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let ue=!1;ce.length!==T.cameras.length&&(T.cameras.length=0,ue=!0);for(let me=0;me<ce.length;me++){const ye=ce[me];let Ae=null;if(g!==null)Ae=g.getViewport(ye);else{const Ye=h.getViewSubImage(d,ye);Ae=Ye.viewport,me===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Me=R[me];Me===void 0&&(Me=new _n,Me.layers.enable(me),Me.viewport=new ut,R[me]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(T.matrix.copy(Me.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ue===!0&&T.cameras.push(Me)}}for(let ce=0;ce<y.length;ce++){const ue=m[ce],me=y[ce];ue!==null&&me!==void 0&&me.update(ue,q,c||a)}N&&N(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),x=null}const H=new Nx;H.setAnimationLoop(O),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}function oA(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,Rx(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,y,m,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),h(v,u)):u.isMeshPhongMaterial?(s(v,u),f(v,u)):u.isMeshStandardMaterial?(s(v,u),d(v,u),u.isMeshPhysicalMaterial&&g(v,u,S)):u.isMeshMatcapMaterial?(s(v,u),x(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),_(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(a(v,u),u.isLineDashedMaterial&&o(v,u)):u.isPointsMaterial?l(v,u,y,m):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===hn&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===hn&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap){v.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,v.lightMapTransform)}u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function a(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function o(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,y,m){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*y,v.scale.value=m*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function f(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function h(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function d(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),e.get(u).envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function g(v,u,y){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&v.clearcoatNormalScale.value.negate())),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,u){u.matcap&&(v.matcap.value=u.matcap)}function _(v,u){const y=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,m){const S=m.program;i.uniformBlockBinding(y,S)}function c(y,m){let S=r[y.id];S===void 0&&(x(y),S=f(y),r[y.id]=S,y.addEventListener("dispose",v));const w=m.program;i.updateUBOMapping(y,w);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function f(y){const m=h();y.__bindingPointIndex=m;const S=t.createBuffer(),w=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const m=r[y.id],S=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let R=0,T=S.length;R<T;R++){const I=S[R];if(g(I,R,w)===!0){const E=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let ee=0;ee<A.length;ee++){const W=A[ee],U=_(W);typeof W=="number"?(I.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,E+Q,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=W.elements[0],I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=W.elements[0],I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=W.elements[0]):(W.toArray(I.__data,Q),Q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(y,m,S){const w=y.value;if(S[m]===void 0){if(typeof w=="number")S[m]=w;else{const R=Array.isArray(w)?w:[w],T=[];for(let I=0;I<R.length;I++)T.push(R[I].clone());S[m]=T}return!0}else if(typeof w=="number"){if(S[m]!==w)return S[m]=w,!0}else{const R=Array.isArray(S[m])?S[m]:[S[m]],T=Array.isArray(w)?w:[w];for(let I=0;I<R.length;I++){const E=R[I];if(E.equals(T[I])===!1)return E.copy(T[I]),!0}}return!1}function x(y){const m=y.uniforms;let S=0;const w=16;let R=0;for(let T=0,I=m.length;T<I;T++){const E=m[T],A={boundary:0,storage:0},Q=Array.isArray(E.value)?E.value:[E.value];for(let ee=0,W=Q.length;ee<W;ee++){const U=Q[ee],P=_(U);A.boundary+=P.boundary,A.storage+=P.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,T>0){R=S%w;const ee=w-R;R!==0&&ee-A.boundary<0&&(S+=w-R,E.__offset=S)}S+=A.storage}return R=S%w,R>0&&(S+=w-R),y.__size=S,y.__cache={},this}function _(y){const m={boundary:0,storage:0};return typeof y=="number"?(m.boundary=4,m.storage=4):y.isVector2?(m.boundary=8,m.storage=8):y.isVector3||y.isColor?(m.boundary=16,m.storage=12):y.isVector4?(m.boundary=16,m.storage=16):y.isMatrix3?(m.boundary=48,m.storage=48):y.isMatrix4?(m.boundary=64,m.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),m}function v(y){const m=y.target;m.removeEventListener("dispose",v);const S=a.indexOf(m.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class zx{constructor(e={}){const{canvas:n=iE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,v=null;const u=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const m=this;let S=!1,w=0,R=0,T=null,I=-1,E=null;const A=new ut,Q=new ut;let ee=null;const W=new Ze(0);let U=0,P=n.width,B=n.height,F=1,N=null,O=null;const H=new ut(0,0,P,B),z=new ut(0,0,P,B);let q=!1;const ce=new Ld;let ue=!1,me=!1,ye=null;const Ae=new St,Me=new _e,Ye=new k,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?F:1}let V=i;function At(b,j){for(let K=0;K<b.length;K++){const G=b[K],Z=n.getContext(G,j);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cd}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",ie,!1),V===null){const j=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&j.shift(),V=At(j,b),V===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,Ne,Ce,rt,Be,Ie,$e,bt,Nt,C,M,X,re,te,se,Se,ae,Y,L,J,pe,le,he,Le;function We(){we=new _1(V),Ne=new h1(V,we,e),we.init(Ne),le=new iA(V,we,Ne),Ce=new eA(V,we,Ne),rt=new E1(V),Be=new zT,Ie=new tA(V,we,Ce,Be,Ne,le,rt),$e=new m1(m),bt=new x1(m),Nt=new DE(V,Ne),he=new f1(V,we,Nt,Ne),C=new y1(V,Nt,rt,he),M=new A1(V,C,Nt,rt),L=new T1(V,Ne,Ie),Se=new p1(Be),X=new BT(m,$e,bt,we,Ne,he,Se),re=new oA(m,Be),te=new jT,se=new $T(we,Ne),Y=new u1(m,$e,bt,Ce,M,d,l),ae=new JT(m,M,Ne),Le=new lA(V,rt,Ne,Ce),J=new d1(V,we,rt,Ne),pe=new S1(V,we,rt,Ne),rt.programs=X.programs,m.capabilities=Ne,m.extensions=we,m.properties=Be,m.renderLists=te,m.shadowMap=ae,m.state=Ce,m.info=rt}We();const D=new aA(m,V);this.xr=D,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(P,B,!1))},this.getSize=function(b){return b.set(P,B)},this.setSize=function(b,j,K=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,B=j,n.width=Math.floor(b*F),n.height=Math.floor(j*F),K===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(P*F,B*F).floor()},this.setDrawingBufferSize=function(b,j,K){P=b,B=j,F=K,n.width=Math.floor(b*K),n.height=Math.floor(j*K),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,j,K,G){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,j,K,G),Ce.viewport(A.copy(H).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,j,K,G){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,j,K,G),Ce.scissor(Q.copy(z).multiplyScalar(F).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(b){Ce.setScissorTest(q=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(b=!0,j=!0,K=!0){let G=0;if(b){let Z=!1;if(T!==null){const ve=T.texture.format;Z=ve===gx||ve===mx||ve===px}if(Z){const ve=T.texture.type,Te=ve===rr||ve===$i||ve===Rd||ve===Lr||ve===dx||ve===hx,Re=Y.getClearColor(),Pe=Y.getClearAlpha(),je=Re.r,be=Re.g,Fe=Re.b;Te?(g[0]=je,g[1]=be,g[2]=Fe,g[3]=Pe,V.clearBufferuiv(V.COLOR,0,g)):(x[0]=je,x[1]=be,x[2]=Fe,x[3]=Pe,V.clearBufferiv(V.COLOR,0,x))}else G|=V.COLOR_BUFFER_BIT}j&&(G|=V.DEPTH_BUFFER_BIT),K&&(G|=V.STENCIL_BUFFER_BIT),V.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),te.dispose(),se.dispose(),Be.dispose(),$e.dispose(),bt.dispose(),M.dispose(),he.dispose(),Le.dispose(),X.dispose(),D.dispose(),D.removeEventListener("sessionstart",st),D.removeEventListener("sessionend",Zn),ye&&(ye.dispose(),ye=null),Qt.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=rt.autoReset,j=ae.enabled,K=ae.autoUpdate,G=ae.needsUpdate,Z=ae.type;We(),rt.autoReset=b,ae.enabled=j,ae.autoUpdate=K,ae.needsUpdate=G,ae.type=Z}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const j=b.target;j.removeEventListener("dispose",oe),He(j)}function He(b){Qe(b),Be.remove(b)}function Qe(b){const j=Be.get(b).programs;j!==void 0&&(j.forEach(function(K){X.releaseProgram(K)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,K,G,Z,ve){j===null&&(j=kt);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=Qx(b,j,K,G,Z);Ce.setMaterial(G,Te);let Pe=K.index,je=1;if(G.wireframe===!0){if(Pe=C.getWireframeAttribute(K),Pe===void 0)return;je=2}const be=K.drawRange,Fe=K.attributes.position;let gt=be.start*je,xt=(be.start+be.count)*je;ve!==null&&(gt=Math.max(gt,ve.start*je),xt=Math.min(xt,(ve.start+ve.count)*je)),Pe!==null?(gt=Math.max(gt,0),xt=Math.min(xt,Pe.count)):Fe!=null&&(gt=Math.max(gt,0),xt=Math.min(xt,Fe.count));const Tn=xt-gt;if(Tn<0||Tn===1/0)return;he.setup(Z,G,Re,K,Pe);let ci,Et=J;if(Pe!==null&&(ci=Nt.get(Pe),Et=pe,Et.setIndex(ci)),Z.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*Ue()),Et.setMode(V.LINES)):Et.setMode(V.TRIANGLES);else if(Z.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),Ce.setLineWidth(Ge*Ue()),Z.isLineSegments?Et.setMode(V.LINES):Z.isLineLoop?Et.setMode(V.LINE_LOOP):Et.setMode(V.LINE_STRIP)}else Z.isPoints?Et.setMode(V.POINTS):Z.isSprite&&Et.setMode(V.TRIANGLES);if(Z.isInstancedMesh)Et.renderInstances(gt,Tn,Z.count);else if(K.isInstancedBufferGeometry){const Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,hc=Math.min(K.instanceCount,Ge);Et.renderInstances(gt,Tn,hc)}else Et.render(gt,Tn)},this.compile=function(b,j){function K(G,Z,ve){G.transparent===!0&&G.side===Nn&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,lo(G,Z,ve),G.side=si,G.needsUpdate=!0,lo(G,Z,ve),G.side=Nn):lo(G,Z,ve)}v=se.get(b),v.init(),y.push(v),b.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights(m._useLegacyLights),b.traverse(function(G){const Z=G.material;if(Z)if(Array.isArray(Z))for(let ve=0;ve<Z.length;ve++){const Te=Z[ve];K(Te,b,G)}else K(Z,b,G)}),y.pop(),v=null};let tt=null;function pn(b){tt&&tt(b)}function st(){Qt.stop()}function Zn(){Qt.start()}const Qt=new Nx;Qt.setAnimationLoop(pn),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){tt=b,D.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},D.addEventListener("sessionstart",st),D.addEventListener("sessionend",Zn),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(j),j=D.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,j,T),v=se.get(b,y.length),v.init(),y.push(v),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ce.setFromProjectionMatrix(Ae),me=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,me),_=te.get(b,u.length),_.init(),u.push(_),Od(b,j,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(N,O),this.info.render.frame++,ue===!0&&Se.beginShadows();const K=v.state.shadowsArray;if(ae.render(K,b,j),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,b),v.setupLights(m._useLegacyLights),j.isArrayCamera){const G=j.cameras;for(let Z=0,ve=G.length;Z<ve;Z++){const Te=G[Z];kd(_,b,Te,Te.viewport)}}else kd(_,b,j);T!==null&&(Ie.updateMultisampleRenderTarget(T),Ie.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(m,b,j),he.resetDefaultState(),I=-1,E=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Od(b,j,K,G){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ce.intersectsSprite(b)){G&&Ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Te=M.update(b),Re=b.material;Re.visible&&_.push(b,Te,Re,K,Ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ce.intersectsObject(b))){const Te=M.update(b),Re=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ye.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ye.copy(Te.boundingSphere.center)),Ye.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Re)){const Pe=Te.groups;for(let je=0,be=Pe.length;je<be;je++){const Fe=Pe[je],gt=Re[Fe.materialIndex];gt&&gt.visible&&_.push(b,Te,gt,K,Ye.z,Fe)}}else Re.visible&&_.push(b,Te,Re,K,Ye.z,null)}}const ve=b.children;for(let Te=0,Re=ve.length;Te<Re;Te++)Od(ve[Te],j,K,G)}function kd(b,j,K,G){const Z=b.opaque,ve=b.transmissive,Te=b.transparent;v.setupLightsView(K),ue===!0&&Se.setGlobalState(m.clippingPlanes,K),ve.length>0&&Zx(Z,ve,j,K),G&&Ce.viewport(A.copy(G)),Z.length>0&&oo(Z,j,K),ve.length>0&&oo(ve,j,K),Te.length>0&&oo(Te,j,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Zx(b,j,K,G){const Z=Ne.isWebGL2;ye===null&&(ye=new Di(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Ys:rr,minFilter:Ja,samples:Z?4:0})),m.getDrawingBufferSize(Me),Z?ye.setSize(Me.x,Me.y):ye.setSize(Af(Me.x),Af(Me.y));const ve=m.getRenderTarget();m.setRenderTarget(ye),m.getClearColor(W),U=m.getClearAlpha(),U<1&&m.setClearColor(16777215,.5),m.clear();const Te=m.toneMapping;m.toneMapping=ir,oo(b,K,G),Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye);let Re=!1;for(let Pe=0,je=j.length;Pe<je;Pe++){const be=j[Pe],Fe=be.object,gt=be.geometry,xt=be.material,Tn=be.group;if(xt.side===Nn&&Fe.layers.test(G.layers)){const ci=xt.side;xt.side=hn,xt.needsUpdate=!0,Bd(Fe,K,G,gt,xt,Tn),xt.side=ci,xt.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye)),m.setRenderTarget(ve),m.setClearColor(W,U),m.toneMapping=Te}function oo(b,j,K){const G=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,ve=b.length;Z<ve;Z++){const Te=b[Z],Re=Te.object,Pe=Te.geometry,je=G===null?Te.material:G,be=Te.group;Re.layers.test(K.layers)&&Bd(Re,j,K,Pe,je,be)}}function Bd(b,j,K,G,Z,ve){b.onBeforeRender(m,j,K,G,Z,ve),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(m,j,K,G,b,ve),Z.transparent===!0&&Z.side===Nn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,m.renderBufferDirect(K,j,G,Z,b,ve),Z.side=si,Z.needsUpdate=!0,m.renderBufferDirect(K,j,G,Z,b,ve),Z.side=Nn):m.renderBufferDirect(K,j,G,Z,b,ve),b.onAfterRender(m,j,K,G,Z,ve)}function lo(b,j,K){j.isScene!==!0&&(j=kt);const G=Be.get(b),Z=v.state.lights,ve=v.state.shadowsArray,Te=Z.state.version,Re=X.getParameters(b,Z.state,ve,j,K),Pe=X.getProgramCacheKey(Re);let je=G.programs;G.environment=b.isMeshStandardMaterial?j.environment:null,G.fog=j.fog,G.envMap=(b.isMeshStandardMaterial?bt:$e).get(b.envMap||G.environment),je===void 0&&(b.addEventListener("dispose",oe),je=new Map,G.programs=je);let be=je.get(Pe);if(be!==void 0){if(G.currentProgram===be&&G.lightsStateVersion===Te)return zd(b,Re),be}else Re.uniforms=X.getUniforms(b),b.onBuild(K,Re,m),b.onBeforeCompile(Re,m),be=X.acquireProgram(Re,Pe),je.set(Pe,be),G.uniforms=Re.uniforms;const Fe=G.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Se.uniform),zd(b,Re),G.needsLights=e0(b),G.lightsStateVersion=Te,G.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.directionalShadowMap.value=Z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotShadowMap.value=Z.state.spotShadowMap,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMap.value=Z.state.pointShadowMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const gt=be.getUniforms(),xt=pl.seqWithValue(gt.seq,Fe);return G.currentProgram=be,G.uniformsList=xt,be}function zd(b,j){const K=Be.get(b);K.outputColorSpace=j.outputColorSpace,K.instancing=j.instancing,K.instancingColor=j.instancingColor,K.skinning=j.skinning,K.morphTargets=j.morphTargets,K.morphNormals=j.morphNormals,K.morphColors=j.morphColors,K.morphTargetsCount=j.morphTargetsCount,K.numClippingPlanes=j.numClippingPlanes,K.numIntersection=j.numClipIntersection,K.vertexAlphas=j.vertexAlphas,K.vertexTangents=j.vertexTangents,K.toneMapping=j.toneMapping}function Qx(b,j,K,G,Z){j.isScene!==!0&&(j=kt),Ie.resetTextureUnits();const ve=j.fog,Te=G.isMeshStandardMaterial?j.environment:null,Re=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ai,Pe=(G.isMeshStandardMaterial?bt:$e).get(G.envMap||Te),je=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,be=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,xt=!!K.morphAttributes.color;let Tn=ir;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tn=m.toneMapping);const ci=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=ci!==void 0?ci.length:0,Ge=Be.get(G),hc=v.state.lights;if(ue===!0&&(me===!0||b!==E)){const mn=b===E&&G.id===I;Se.setState(G,b,mn)}let Mt=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hc.state.version||Ge.outputColorSpace!==Re||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Ge.envMap!==Pe||G.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Se.numPlanes||Ge.numIntersection!==Se.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==be||Ge.morphTargets!==Fe||Ge.morphNormals!==gt||Ge.morphColors!==xt||Ge.toneMapping!==Tn||Ne.isWebGL2===!0&&Ge.morphTargetsCount!==Et)&&(Mt=!0):(Mt=!0,Ge.__version=G.version);let fr=Ge.currentProgram;Mt===!0&&(fr=lo(G,j,Z));let Hd=!1,ta=!1,pc=!1;const Jt=fr.getUniforms(),dr=Ge.uniforms;if(Ce.useProgram(fr.program)&&(Hd=!0,ta=!0,pc=!0),G.id!==I&&(I=G.id,ta=!0),Hd||E!==b){Jt.setValue(V,"projectionMatrix",b.projectionMatrix),Jt.setValue(V,"viewMatrix",b.matrixWorldInverse);const mn=Jt.map.cameraPosition;mn!==void 0&&mn.setValue(V,Ye.setFromMatrixPosition(b.matrixWorld)),Ne.logarithmicDepthBuffer&&Jt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Jt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ta=!0,pc=!0)}if(Z.isSkinnedMesh){Jt.setOptional(V,Z,"bindMatrix"),Jt.setOptional(V,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(Ne.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Jt.setValue(V,"boneTexture",mn.boneTexture,Ie),Jt.setValue(V,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mc=K.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&Ne.isWebGL2===!0)&&L.update(Z,K,fr),(ta||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Jt.setValue(V,"receiveShadow",Z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dr.envMap.value=Pe,dr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ta&&(Jt.setValue(V,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&Jx(dr,pc),ve&&G.fog===!0&&re.refreshFogUniforms(dr,ve),re.refreshMaterialUniforms(dr,G,F,B,ye),pl.upload(V,Ge.uniformsList,dr,Ie)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pl.upload(V,Ge.uniformsList,dr,Ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Jt.setValue(V,"center",Z.center),Jt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Jt.setValue(V,"normalMatrix",Z.normalMatrix),Jt.setValue(V,"modelMatrix",Z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const mn=G.uniformsGroups;for(let gc=0,t0=mn.length;gc<t0;gc++)if(Ne.isWebGL2){const jd=mn[gc];Le.update(jd,fr),Le.bind(jd,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function Jx(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function e0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,j,K){Be.get(b.texture).__webglTexture=j,Be.get(b.depthTexture).__webglTexture=K;const G=Be.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=K===void 0,G.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,j){const K=Be.get(b);K.__webglFramebuffer=j,K.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,K=0){T=b,w=j,R=K;let G=!0,Z=null,ve=!1,Te=!1;if(b){const Pe=Be.get(b);Pe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(V.FRAMEBUFFER,null),G=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(b):Pe.__hasExternalTextures&&Ie.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const je=b.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const be=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[j])?Z=be[j][K]:Z=be[j],ve=!0):Ne.isWebGL2&&b.samples>0&&Ie.useMultisampledRTT(b)===!1?Z=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?Z=be[K]:Z=be,A.copy(b.viewport),Q.copy(b.scissor),ee=b.scissorTest}else A.copy(H).multiplyScalar(F).floor(),Q.copy(z).multiplyScalar(F).floor(),ee=q;if(Ce.bindFramebuffer(V.FRAMEBUFFER,Z)&&Ne.drawBuffers&&G&&Ce.drawBuffers(b,Z),Ce.viewport(A),Ce.scissor(Q),Ce.setScissorTest(ee),ve){const Pe=Be.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,K)}else if(Te){const Pe=Be.get(b.texture),je=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,je)}I=-1},this.readRenderTargetPixels=function(b,j,K,G,Z,ve,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){Ce.bindFramebuffer(V.FRAMEBUFFER,Re);try{const Pe=b.texture,je=Pe.format,be=Pe.type;if(je!==Xn&&le.convert(je)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=be===Ys&&(we.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&we.has("EXT_color_buffer_float"));if(be!==rr&&le.convert(be)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Mi&&(Ne.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-G&&K>=0&&K<=b.height-Z&&V.readPixels(j,K,G,Z,le.convert(je),le.convert(be),ve)}finally{const Pe=T!==null?Be.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,j,K=0){const G=Math.pow(2,-K),Z=Math.floor(j.image.width*G),ve=Math.floor(j.image.height*G);Ie.setTexture2D(j,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,b.x,b.y,Z,ve),Ce.unbindTexture()},this.copyTextureToTexture=function(b,j,K,G=0){const Z=j.image.width,ve=j.image.height,Te=le.convert(K.format),Re=le.convert(K.type);Ie.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),j.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,G,b.x,b.y,Z,ve,Te,Re,j.image.data):j.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,G,b.x,b.y,j.mipmaps[0].width,j.mipmaps[0].height,Te,j.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,G,b.x,b.y,Te,Re,j.image),G===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,j,K,G,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Pe=le.convert(G.format),je=le.convert(G.type);let be;if(G.isData3DTexture)Ie.setTexture3D(G,0),be=V.TEXTURE_3D;else if(G.isDataArrayTexture)Ie.setTexture2DArray(G,0),be=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);const Fe=V.getParameter(V.UNPACK_ROW_LENGTH),gt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),xt=V.getParameter(V.UNPACK_SKIP_PIXELS),Tn=V.getParameter(V.UNPACK_SKIP_ROWS),ci=V.getParameter(V.UNPACK_SKIP_IMAGES),Et=K.isCompressedTexture?K.mipmaps[0]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Et.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(be,Z,j.x,j.y,j.z,ve,Te,Re,Pe,je,Et.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(be,Z,j.x,j.y,j.z,ve,Te,Re,Pe,Et.data)):V.texSubImage3D(be,Z,j.x,j.y,j.z,ve,Te,Re,Pe,je,Et),V.pixelStorei(V.UNPACK_ROW_LENGTH,Fe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,gt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),Z===0&&G.generateMipmaps&&V.generateMipmap(be),Ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){w=0,R=0,T=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Nr:vx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?lt:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cA extends zx{}cA.prototype.isWebGL1Renderer=!0;class uA extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class fA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Mf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new k;class Vl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=yi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=yi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=yi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=yi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new qn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hx extends Js{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const ma=new k,us=new k,fs=new k,ds=new _e,ga=new _e,jx=new St,Yo=new k,va=new k,$o=new k,xm=new _e,_u=new _e,_m=new _e;class dA extends Kt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ui;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fA(n,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Vl(i,3,0,!1)),cs.setAttribute("uv",new Vl(i,2,3,!1))}this.geometry=cs,this.material=e!==void 0?e:new Hx,this.center=new _e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),jx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;qo(Yo.set(-.5,-.5,0),fs,a,us,r,s),qo(va.set(.5,-.5,0),fs,a,us,r,s),qo($o.set(.5,.5,0),fs,a,us,r,s),xm.set(0,0),_u.set(1,0),_m.set(1,1);let o=e.ray.intersectTriangle(Yo,va,$o,!1,ma);if(o===null&&(qo(va.set(-.5,.5,0),fs,a,us,r,s),_u.set(0,1),o=e.ray.intersectTriangle(Yo,$o,va,!1,ma),o===null))return;const l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||n.push({distance:l,point:ma.clone(),uv:Dn.getInterpolation(ma,Yo,va,$o,xm,_u,_m,new _e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qo(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*ds.x-r*ds.y,ga.y=r*ds.x+s*ds.y):ga.copy(ds),t.copy(e),t.x+=ga.x,t.y+=ga.y,t.applyMatrix4(jx)}class ml extends qt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xx,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vx extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const yu=new St,ym=new k,Sm=new k;class hA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(ym),Sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sm),n.updateMatrixWorld(),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Em=new St,xa=new k,Su=new k;class pA extends hA{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(xa),Su.copy(i.position),Su.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Su),i.updateMatrixWorld(),r.makeTranslation(-xa.x,-xa.y,-xa.z),Em.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Em)}}class mA extends Vx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gA extends Vx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Mm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Mm(){return(typeof performance>"u"?Date:performance).now()}class wm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);function Id(t,e,n,i,r,s,a,o){const l=(T,I,E,A)=>[new _e(T/a,1-A/o),new _e(E/a,1-A/o),new _e(E/a,1-I/o),new _e(T/a,1-I/o)],c=l(e+s,n,e+i+s,n+s),f=l(e+i+s,n,e+i*2+s,n+s),h=l(e,n+s,e+s,n+s+r),d=l(e+s,n+s,e+i+s,n+s+r),g=l(e+i+s,n+s,e+i+s*2,n+r+s),x=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),_=t.attributes.uv,v=[g[3],g[2],g[0],g[1]],u=[h[3],h[2],h[0],h[1]],y=[c[3],c[2],c[0],c[1]],m=[f[0],f[1],f[3],f[2]],S=[d[3],d[2],d[0],d[1]],w=[x[3],x[2],x[0],x[1]],R=[];for(const T of[v,u,y,m,S,w])for(const I of T)R.push(I.x,I.y);_.set(new Float32Array(R)),_.needsUpdate=!0}function bn(t,e,n,i,r,s){Id(t,e,n,i,r,s,64,64)}function Cf(t,e,n,i,r,s){Id(t,e,n,i,r,s,64,32)}class vr extends zt{constructor(e,n){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:n}),e.name="inner",n.name="outer"}}class vA extends zt{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new eo({side:si}),this.layer2Material=new eo({side:Nn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new _t(8,8,8);bn(e,0,0,8,8,8);const n=new nt(e,this.layer1Material),i=new _t(9,9,9);bn(i,32,0,8,8,8);const r=new nt(i,this.layer2Material);this.head=new vr(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new _t(8,12,4);bn(s,16,16,8,12,4);const a=new nt(s,this.layer1Material),o=new _t(8.5,12.5,4.5);bn(o,16,32,8,12,4);const l=new nt(o,this.layer2Material);this.body=new vr(a,l),this.body.name="body",this.body.add(a,l),this.body.position.y=-6,this.add(this.body);const c=new _t,f=new nt(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3:4,f.scale.y=12,f.scale.z=4,bn(c,40,16,this.slim?3:4,12,4)});const h=new _t,d=new nt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,bn(h,40,32,this.slim?3:4,12,4)});const g=new zt;g.add(f,d),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new vr(f,d),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const x=new _t,_=new nt(x,this.layer1MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3:4,_.scale.y=12,_.scale.z=4,bn(x,32,48,this.slim?3:4,12,4)});const v=new _t,u=new nt(v,this.layer2MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3.5:4.5,u.scale.y=12.5,u.scale.z=4.5,bn(v,48,48,this.slim?3:4,12,4)});const y=new zt;y.add(_,u),this.modelListeners.push(()=>{y.position.x=this.slim?.5:1}),y.position.y=-4,this.leftArm=new vr(_,u),this.leftArm.name="leftArm",this.leftArm.add(y),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const m=new _t(4,12,4);bn(m,0,16,4,12,4);const S=new nt(m,this.layer1MaterialBiased),w=new _t(4.5,12.5,4.5);bn(w,0,32,4,12,4);const R=new nt(w,this.layer2MaterialBiased),T=new zt;T.add(S,R),T.position.y=-6,this.rightLeg=new vr(S,R),this.rightLeg.name="rightLeg",this.rightLeg.add(T),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const I=new _t(4,12,4);bn(I,16,48,4,12,4);const E=new nt(I,this.layer1MaterialBiased),A=new _t(4.5,12.5,4.5);bn(A,0,48,4,12,4);const Q=new nt(A,this.layer2MaterialBiased),ee=new zt;ee.add(E,Q),ee.position.y=-6,this.leftLeg=new vr(E,Q),this.leftLeg.name="leftLeg",this.leftLeg.add(ee),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof vr)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class xA extends zt{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:Nn,transparent:!0,alphaTest:1e-5});const e=new _t(10,16,1);Cf(e,0,0,10,16,1),this.cape=new nt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class _A extends zt{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:Nn,transparent:!0,alphaTest:1e-5});const e=new _t(12,22,4);Cf(e,22,0,10,20,2);const n=new nt(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new zt,this.leftWing.add(n),this.add(this.leftWing);const i=new _t(12,22,4);Cf(i,22,0,10,20,2);const r=new nt(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new zt,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class yA extends zt{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:si});const e=new _t(8,8,4/3);Id(e,0,0,6,6,1,14,7),this.rightEar=new nt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new nt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Tm=10.8*Math.PI/180;class SA extends zt{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new vA,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new xA,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Tm,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new _A,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new yA,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Tm,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ko(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function Rf(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(s.data[l+3]!==255)return!0}return!1}function fc(t){return t/64}function Am(t,e,n){if(n){if(Rf(t,0,0,e,e))return}else if(Rf(t,0,0,e,e/2))return;const i=fc(e),r=(s,a,o,l)=>t.clearRect(s*i,a*i,o*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function EA(t,e){t.save(),t.scale(-1,1);const n=fc(e),i=(r,s,a,o,l,c)=>t.drawImage(t.canvas,r*n,s*n,a*n,o*n,-l*n,c*n,-a*n,o*n);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),t.restore()}function MA(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d",{willReadFrequently:!0});if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),EA(i,r),Am(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),Am(i,t.width,!0)}function wA(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function TA(t,e){const n=wA(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function AA(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function bA(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function CA(t){const e=fc(t.width),n=t.getContext("2d",{willReadFrequently:!0}),i=(o,l,c,f)=>Rf(n,o*e,l*e,c*e,f*e),r=(o,l,c,f)=>AA(n,o*e,l*e,c*e,f*e),s=(o,l,c,f)=>bA(n,o*e,l*e,c*e,f*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function RA(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function PA(t,e){const n=RA(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function bm(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=fc(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function Zo(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const Cm={type:"change"},Eu={type:"start"},Rm={type:"end"},Qo=new Mx,Pm=new Vi,LA=Math.cos(70*nE.DEG2RAD);class DA extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",M),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Cm),i.update(),s=r.NONE},this.update=function(){const L=new k,J=new zr().setFromUnitVectors(e.up,new k(0,1,0)),pe=J.clone().invert(),le=new k,he=new zr,Le=new k,We=2*Math.PI;return function(de=null){const $=i.object.position;L.copy($).sub(i.target),L.applyQuaternion(J),o.setFromVector3(L),i.autoRotate&&s===r.NONE&&Q(E(de)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ie=i.minAzimuthAngle,oe=i.maxAzimuthAngle;isFinite(ie)&&isFinite(oe)&&(ie<-Math.PI?ie+=We:ie>Math.PI&&(ie-=We),oe<-Math.PI?oe+=We:oe>Math.PI&&(oe-=We),ie<=oe?o.theta=Math.max(ie,Math.min(oe,o.theta)):o.theta=o.theta>(ie+oe)/2?Math.max(ie,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=O(o.radius):o.radius=O(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(pe),$.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let He=!1;if(i.zoomToCursor&&R){let Qe=null;if(i.object.isPerspectiveCamera){const tt=L.length();Qe=O(tt*c);const pn=tt-Qe;i.object.position.addScaledVector(S,pn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const tt=new k(w.x,w.y,0);tt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),He=!0;const pn=new k(w.x,w.y,0);pn.unproject(i.object),i.object.position.sub(pn).add(tt),i.object.updateMatrixWorld(),Qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Qe).add(i.object.position):(Qo.origin.copy(i.object.position),Qo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Qo.direction))<LA?e.lookAt(i.target):(Pm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Qo.intersectPlane(Pm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),He=!0);return c=1,R=!1,He||le.distanceToSquared(i.object.position)>a||8*(1-he.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Cm),le.copy(i.object.position),he.copy(i.object.quaternion),Le.copy(i.target),He=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",Be),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",C),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new wm,l=new wm;let c=1;const f=new k,h=new _e,d=new _e,g=new _e,x=new _e,_=new _e,v=new _e,u=new _e,y=new _e,m=new _e,S=new k,w=new _e;let R=!1;const T=[],I={};function E(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function Q(L){l.theta-=L}function ee(L){l.phi-=L}const W=function(){const L=new k;return function(pe,le){L.setFromMatrixColumn(le,0),L.multiplyScalar(-pe),f.add(L)}}(),U=function(){const L=new k;return function(pe,le){i.screenSpacePanning===!0?L.setFromMatrixColumn(le,1):(L.setFromMatrixColumn(le,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(pe),f.add(L)}}(),P=function(){const L=new k;return function(pe,le){const he=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;L.copy(Le).sub(i.target);let We=L.length();We*=Math.tan(i.object.fov/2*Math.PI/180),W(2*pe*We/he.clientHeight,i.object.matrix),U(2*le*We/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(pe*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),U(le*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(L){if(!i.zoomToCursor)return;R=!0;const J=i.domElement.getBoundingClientRect(),pe=L.clientX-J.left,le=L.clientY-J.top,he=J.width,Le=J.height;w.x=pe/he*2-1,w.y=-(le/Le)*2+1,S.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function O(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function H(L){h.set(L.clientX,L.clientY)}function z(L){N(L),u.set(L.clientX,L.clientY)}function q(L){x.set(L.clientX,L.clientY)}function ce(L){d.set(L.clientX,L.clientY),g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;Q(2*Math.PI*g.x/J.clientHeight),ee(2*Math.PI*g.y/J.clientHeight),h.copy(d),i.update()}function ue(L){y.set(L.clientX,L.clientY),m.subVectors(y,u),m.y>0?B(A()):m.y<0&&F(A()),u.copy(y),i.update()}function me(L){_.set(L.clientX,L.clientY),v.subVectors(_,x).multiplyScalar(i.panSpeed),P(v.x,v.y),x.copy(_),i.update()}function ye(L){N(L),L.deltaY<0?F(A()):L.deltaY>0&&B(A()),i.update()}function Ae(L){let J=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(-i.keyPanSpeed,0),J=!0;break}J&&(L.preventDefault(),i.update())}function Me(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),J=.5*(T[0].pageY+T[1].pageY);h.set(L,J)}}function Ye(){if(T.length===1)x.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),J=.5*(T[0].pageY+T[1].pageY);x.set(L,J)}}function kt(){const L=T[0].pageX-T[1].pageX,J=T[0].pageY-T[1].pageY,pe=Math.sqrt(L*L+J*J);u.set(0,pe)}function Ue(){i.enableZoom&&kt(),i.enablePan&&Ye()}function V(){i.enableZoom&&kt(),i.enableRotate&&Me()}function At(L){if(T.length==1)d.set(L.pageX,L.pageY);else{const pe=Y(L),le=.5*(L.pageX+pe.x),he=.5*(L.pageY+pe.y);d.set(le,he)}g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;Q(2*Math.PI*g.x/J.clientHeight),ee(2*Math.PI*g.y/J.clientHeight),h.copy(d)}function we(L){if(T.length===1)_.set(L.pageX,L.pageY);else{const J=Y(L),pe=.5*(L.pageX+J.x),le=.5*(L.pageY+J.y);_.set(pe,le)}v.subVectors(_,x).multiplyScalar(i.panSpeed),P(v.x,v.y),x.copy(_)}function Ne(L){const J=Y(L),pe=L.pageX-J.x,le=L.pageY-J.y,he=Math.sqrt(pe*pe+le*le);y.set(0,he),m.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),B(m.y),u.copy(y)}function Ce(L){i.enableZoom&&Ne(L),i.enablePan&&we(L)}function rt(L){i.enableZoom&&Ne(L),i.enableRotate&&At(L)}function Be(L){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",$e)),se(L),L.pointerType==="touch"?X(L):bt(L))}function Ie(L){i.enabled!==!1&&(L.pointerType==="touch"?re(L):Nt(L))}function $e(L){Se(L),T.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(Rm),s=r.NONE}function bt(L){let J;switch(L.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Wr.DOLLY:if(i.enableZoom===!1)return;z(L),s=r.DOLLY;break;case Wr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;q(L),s=r.PAN}else{if(i.enableRotate===!1)return;H(L),s=r.ROTATE}break;case Wr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;H(L),s=r.ROTATE}else{if(i.enablePan===!1)return;q(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eu)}function Nt(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ce(L);break;case r.DOLLY:if(i.enableZoom===!1)return;ue(L);break;case r.PAN:if(i.enablePan===!1)return;me(L);break}}function C(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Eu),ye(L),i.dispatchEvent(Rm))}function M(L){i.enabled===!1||i.enablePan===!1||Ae(L)}function X(L){switch(ae(L),T.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;Me(),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;Ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;V(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eu)}function re(L){switch(ae(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;At(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;we(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;rt(L),i.update();break;default:s=r.NONE}}function te(L){i.enabled!==!1&&L.preventDefault()}function se(L){T.push(L)}function Se(L){delete I[L.pointerId];for(let J=0;J<T.length;J++)if(T[J].pointerId==L.pointerId){T.splice(J,1);return}}function ae(L){let J=I[L.pointerId];J===void 0&&(J=new _e,I[L.pointerId]=J),J.set(L.pageX,L.pageY)}function Y(L){const J=L.pointerId===T[0].pointerId?T[1]:T[0];return I[J.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}const NA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class dc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IA=new Ix(-1,1,1,-1,0,1),Ud=new Ui;Ud.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3));Ud.setAttribute("uv",new bi([0,2,0,0,2,0],2));class UA{constructor(e){this._mesh=new nt(Ud,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wx extends dc{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ni?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Px.clone(e.uniforms),this.material=new Ni({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new UA(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lm extends dc{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class FA extends dc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class OA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new _e);this._width=i.width,this._height=i.height,n=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ys}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wx(NA),this.copyPass.material.blending=Ai,this.clock=new Gx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lm!==void 0&&(a instanceof Lm?i=!0:a instanceof FA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kA extends dc{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const BA={uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class Fd{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,n){if(this.paused)return;const i=n*this.speed;this.animate(e,i),this.animationObjects.forEach((r,s)=>{const a=this.progress0.get(s);r(e,this.progress-a,s)}),this.progress+=i}addAnimation(e){const n=this.currentId++;return this.progress0.set(n,this.progress),this.animationObjects.set(n,e),n}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class zA extends Fd{animate(e){const n=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n)*.01+r}}class HA extends Fd{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const n=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(n)*.5,e.skin.rightLeg.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(n)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(n/4)*.2,e.skin.head.rotation.x=Math.sin(n/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n/1.5)*.06+r}}class jA extends Fd{constructor(e="left"){super(),Object.defineProperty(this,"whichArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.whichArm=e}animate(e){const n=this.progress*2*Math.PI*.5,i=this.whichArm==="left"?e.skin.leftArm:e.skin.rightArm;i.rotation.x=180,i.rotation.z=Math.sin(n)*.5}}class VA extends dA{constructor(e="",n={}){const i=new Hx({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new ml(e);r.magFilter=ht,r.minFilter=ht,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class GA{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new gA(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new mA(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new uA,this.camera=new _n,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Cn.enabled=!1,this.renderer=new zx({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new Di(0,0,{depthTexture:new Bx(0,0,Mi)})),this.composer=new OA(this.renderer,n),this.renderPass=new kA(this.scene,this.camera),this.fxaaPass=new Wx(BA),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new SA,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new zt,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new DA(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Gx,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new ml(this.skinCanvas),this.skinTexture.magFilter=ht,this.skinTexture.minFilter=ht,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new ml(this.capeCanvas),this.capeTexture.magFilter=ht,this.capeTexture.minFilter=ht,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new ml(this.earsCanvas),this.earsTexture.magFilter=ht,this.earsTexture.minFilter=ht,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(Ko(e))MA(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=CA(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&(bm(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Zo(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(Ko(e))TA(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return Zo(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(Ko(e))n.textureType==="skin"?bm(this.earsCanvas,e):PA(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Zo(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,zl)}loadBackground(e,n){if(Ko(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new qt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Zo(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new k).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new _e).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new _e).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Ze||e instanceof qt?this.scene.background=e:this.scene.background=new Ze(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Kt||(e=new VA(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const Pf=({imageUrl:t,model:e,width:n=220,height:i=320,pose:r="walk",rotate:s=!0,interactive:a=!1,zoom:o=.95,className:l})=>{const c=Ee.useRef(null),f=Ee.useRef(null);return Ee.useEffect(()=>{if(!c.current)return;const h=document.createElement("canvas");h.width=n,h.height=i,h.style.width="100%",h.style.height="100%",h.style.imageRendering="pixelated",c.current.innerHTML="",c.current.appendChild(h);const d=new GA({canvas:h,width:n,height:i,preserveDrawingBuffer:!0});return d.zoom=o,d.fov=50,d.background=null,d.controls.enableRotate=a,d.controls.enableZoom=a,d.controls.enablePan=!1,d.autoRotate=s,d.autoRotateSpeed=.6,r==="walk"?d.animation=new HA:r==="wave"?d.animation=new jA:r==="idle"?d.animation=new zA:d.animation=null,f.current=d,()=>{d.dispose(),f.current=null}},[n,i,r,s,a,o]),Ee.useEffect(()=>{const h=f.current;if(h){if(!t){h.resetSkin();return}h.loadSkin(t,{model:e==="slim"?"slim":"default"}).catch(()=>{})}},[t,e]),p.jsx("div",{ref:c,className:l,style:{width:n,height:i,lineHeight:0}})},Ke=({name:t,size:e=14,color:n="#2A2138",className:i})=>{const r=n,s=a=>p.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",shapeRendering:"crispEdges",className:i,style:{display:"inline-block",verticalAlign:"middle"},children:a});switch(t){case"plus":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"x":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"3",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"9",y:"5",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"9",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r})]}));case"pencil":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"10",y:"2",width:"3",height:"3",fill:r}),p.jsx("rect",{x:"8",y:"4",width:"3",height:"3",fill:r}),p.jsx("rect",{x:"6",y:"6",width:"3",height:"3",fill:r}),p.jsx("rect",{x:"4",y:"8",width:"3",height:"3",fill:r}),p.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"2",y:"13",width:"3",height:"1",fill:"#5B3A1F"})]}));case"eraser":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"9",width:"10",height:"4",fill:"#FF9FB1"}),p.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"13",width:"10",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"9",width:"1",height:"4",fill:r}),p.jsx("rect",{x:"12",y:"9",width:"1",height:"4",fill:r}),p.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#FFFBEA"})]}));case"fill":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"4",y:"9",width:"6",height:"2",fill:"#F5C04A"}),p.jsx("rect",{x:"5",y:"11",width:"4",height:"1",fill:r}),p.jsx("rect",{x:"11",y:"9",width:"2",height:"3",fill:"#3FB6A8"})]}));case"eyedropper":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"10",y:"2",width:"3",height:"2",fill:"#7B7F87"}),p.jsx("rect",{x:"9",y:"4",width:"3",height:"2",fill:"#C8CCD2"}),p.jsx("rect",{x:"7",y:"6",width:"3",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"8",width:"3",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"10",width:"3",height:"2",fill:r}),p.jsx("rect",{x:"2",y:"12",width:"2",height:"2",fill:r})]}));case"shade":return s(p.jsxs(p.Fragment,{children:[p.jsx("circle",{cx:"8",cy:"8",r:"5",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"5",height:"3",fill:"#1B1424"})]}));case"lighten":return s(p.jsxs(p.Fragment,{children:[p.jsx("circle",{cx:"8",cy:"8",r:"5",fill:"#F5C04A"}),p.jsx("rect",{x:"3",y:"7",width:"13",height:"3",fill:"#FFFBEA"})]}));case"download":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"2",width:"2",height:"7",fill:r}),p.jsx("rect",{x:"5",y:"7",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"12",width:"10",height:"2",fill:r})]}));case"upload":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"6",width:"2",height:"7",fill:r}),p.jsx("rect",{x:"5",y:"6",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"2",width:"10",height:"2",fill:r})]}));case"trash":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),p.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"5",width:"10",height:"9",fill:r}),p.jsx("rect",{x:"5",y:"7",width:"1",height:"5",fill:"#F5C04A"}),p.jsx("rect",{x:"7",y:"7",width:"2",height:"5",fill:"#F5C04A"}),p.jsx("rect",{x:"10",y:"7",width:"1",height:"5",fill:"#F5C04A"})]}));case"eye":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),p.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),p.jsx("rect",{x:"4",y:"10",width:"8",height:"1",fill:r}),p.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#FFFBEA"}),p.jsx("rect",{x:"7",y:"7",width:"3",height:"3",fill:"#3FB6A8"}),p.jsx("rect",{x:"8",y:"8",width:"1",height:"1",fill:r})]}));case"eye-off":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),p.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#7B7F87"}),p.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r})]}));case"lock":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"5",width:"2",height:"3",fill:r}),p.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),p.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"unlock":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),p.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"mirror":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"2",width:"2",height:"12",fill:r}),p.jsx("rect",{x:"2",y:"4",width:"4",height:"8",fill:"#F5C04A"}),p.jsx("rect",{x:"2",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"}),p.jsx("rect",{x:"10",y:"4",width:"4",height:"8",fill:"#3FB6A8"}),p.jsx("rect",{x:"10",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"})]}));case"grid":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),p.jsx("rect",{x:"3",y:"6",width:"10",height:"1",fill:r}),p.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),p.jsx("rect",{x:"6",y:"3",width:"1",height:"10",fill:r}),p.jsx("rect",{x:"9",y:"3",width:"1",height:"10",fill:r})]}));case"mask":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#F5C04A"}),p.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),p.jsx("rect",{x:"5",y:"5",width:"6",height:"6",fill:r}),p.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#F7E6CF"})]}));case"undo":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"6",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"2",y:"7",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"6",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"9",y:"6",width:"4",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"10",width:"2",height:"2",fill:r})]}));case"redo":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"6",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"12",y:"7",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"9",y:"6",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"6",width:"4",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"10",width:"2",height:"2",fill:r})]}));case"home":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"3",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"5",width:"10",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),p.jsx("rect",{x:"6",y:"9",width:"4",height:"5",fill:"#F5C04A"})]}));case"save":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"2",y:"2",width:"12",height:"12",fill:r}),p.jsx("rect",{x:"4",y:"3",width:"8",height:"4",fill:"#F7E6CF"}),p.jsx("rect",{x:"5",y:"4",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"4",y:"9",width:"8",height:"4",fill:"#F7E6CF"})]}));case"folder":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"2",y:"5",width:"5",height:"2",fill:r}),p.jsx("rect",{x:"2",y:"6",width:"12",height:"8",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"6",fill:"#F5C04A"})]}));case"folder-big":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"1",y:"4",width:"7",height:"2",fill:r}),p.jsx("rect",{x:"1",y:"5",width:"14",height:"10",fill:r}),p.jsx("rect",{x:"2",y:"7",width:"12",height:"7",fill:"#F5C04A"})]}));case"merge":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"6",width:"10",height:"2",fill:"#F5C04A"}),p.jsx("rect",{x:"3",y:"6",width:"10",height:"2",stroke:r,fill:"#F5C04A"}),p.jsx("rect",{x:"3",y:"11",width:"10",height:"2",fill:r}),p.jsx("rect",{x:"7",y:"8",width:"2",height:"3",fill:r}),p.jsx("rect",{x:"5",y:"9",width:"6",height:"1",fill:r})]}));case"duplicate":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"2",y:"2",width:"9",height:"9",fill:r}),p.jsx("rect",{x:"3",y:"3",width:"7",height:"7",fill:"#F5C04A"}),p.jsx("rect",{x:"5",y:"5",width:"9",height:"9",fill:r}),p.jsx("rect",{x:"6",y:"6",width:"7",height:"7",fill:"#F7E6CF"})]}));case"up":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),p.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"down":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),p.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"check":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"2",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"4",y:"10",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"6",y:"8",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"8",y:"6",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"10",y:"4",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"12",y:"2",width:"2",height:"2",fill:r})]}));case"face":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#C39979"}),p.jsx("rect",{x:"5",y:"6",width:"1",height:"1",fill:r}),p.jsx("rect",{x:"10",y:"6",width:"1",height:"1",fill:r}),p.jsx("rect",{x:"6",y:"9",width:"4",height:"1",fill:r})]}));case"hair":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3D2614"}),p.jsx("rect",{x:"3",y:"6",width:"2",height:"6",fill:"#3D2614"}),p.jsx("rect",{x:"11",y:"6",width:"2",height:"6",fill:"#3D2614"})]}));case"shirt":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"4",width:"10",height:"2",fill:"#2F8FCF"}),p.jsx("rect",{x:"2",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),p.jsx("rect",{x:"12",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),p.jsx("rect",{x:"3",y:"6",width:"10",height:"7",fill:"#2F8FCF"}),p.jsx("rect",{x:"6",y:"4",width:"4",height:"1",fill:"#F7E6CF"})]}));case"pants":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3B5BA3"}),p.jsx("rect",{x:"3",y:"6",width:"4",height:"8",fill:"#3B5BA3"}),p.jsx("rect",{x:"9",y:"6",width:"4",height:"8",fill:"#3B5BA3"})]}));case"shoes":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"2",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),p.jsx("rect",{x:"9",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),p.jsx("rect",{x:"2",y:"12",width:"12",height:"2",fill:"#2A2138"})]}));case"star":return s(p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r}),p.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),p.jsx("rect",{x:"3",y:"11",width:"2",height:"3",fill:r}),p.jsx("rect",{x:"11",y:"11",width:"2",height:"3",fill:r})]}))}},WA=({onNew:t,onEdit:e})=>{const n=Pr(m=>m.skins),i=Pr(m=>m.remove),r=Pr(m=>m.rename),[s,a]=Ee.useState("all"),[o,l]=Ee.useState(""),[c,f]=Ee.useState(null),[h,d]=Ee.useState(""),g=Ee.useMemo(()=>n.filter(m=>s==="all"?!0:m.model===s).filter(m=>o.trim()?m.name.toLowerCase().includes(o.trim().toLowerCase()):!0),[n,s,o]),x=new Date,_=x.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),v=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\s/g,""),u=x.getFullYear(),y=`${_} ${v} ${u}`;return p.jsxs("div",{className:"h-full w-full p-4 lg:p-6 overflow-hidden flex flex-col",children:[p.jsx(XA,{dateStr:y}),p.jsxs("div",{className:"mt-4 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4",children:[p.jsx(YA,{filter:s,setFilter:a,search:o,setSearch:l,filtered:g,onNew:t,onEdit:e,remove:i,rename:r,renamingId:c,setRenamingId:f,renameValue:h,setRenameValue:d}),p.jsx(KA,{onNew:t,count:n.length})]}),p.jsx("div",{className:"crt-overlay"})]})},XA=({dateStr:t})=>p.jsxs("div",{className:"flex items-center justify-between gap-3 px-2",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"inline-block w-12 h-4 scanline-stripes"}),p.jsx("span",{className:"pixel-text text-[14px] text-accent-cream",children:"PIXEL SKIN STUDIO"})]}),p.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[p.jsx("span",{className:"pixel-text-sm text-accent-cream/80",children:"JAVA 64x64"}),p.jsx("span",{className:"pixel-text-sm text-accent-yellow",children:t})]})]}),YA=t=>p.jsxs("div",{className:"pixel-window flex flex-col min-h-0",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"/SKINS/MY-CREATIONS"}),p.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[p.jsx(Mu,{label:"ALL",active:t.filter==="all",onClick:()=>t.setFilter("all")}),p.jsx(Mu,{label:"CLASSIC",active:t.filter==="classic",onClick:()=>t.setFilter("classic")}),p.jsx(Mu,{label:"SLIM",active:t.filter==="slim",onClick:()=>t.setFilter("slim")}),p.jsx("button",{"aria-label":"close",className:"ml-2 w-6 h-6 grid place-items-center bg-accent-cream text-ink border-2 border-accent-cream",onClick:()=>{},children:p.jsx(Ke,{name:"x",size:10})})]})]}),p.jsxs("div",{className:"px-4 py-3 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-3",children:[p.jsxs("button",{onClick:t.onNew,className:"pixel-button cream flex items-center gap-2",children:[p.jsx(Ke,{name:"plus"})," NEW SKIN"]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"pixel-text-sm",children:"SEARCH"}),p.jsx("input",{className:"pixel-input w-40",placeholder:"name...",value:t.search,onChange:e=>t.setSearch(e.target.value)})]}),p.jsxs("div",{className:"ml-auto pixel-text-sm flex items-center gap-2",children:[p.jsx(Ke,{name:"folder"}),p.jsxs("span",{children:[t.filtered.length," ITEMS"]})]})]}),p.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk2 p-5",children:t.filtered.length===0?p.jsx($A,{onNew:t.onNew}):p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5",children:t.filtered.map((e,n)=>p.jsx(qA,{skin:e,index:n,onEdit:()=>t.onEdit(e.id),onDelete:()=>t.remove(e.id),renaming:t.renamingId===e.id,renameValue:t.renameValue,onStartRename:()=>{t.setRenamingId(e.id),t.setRenameValue(e.name)},onChangeRename:t.setRenameValue,onCommitRename:()=>{t.renameValue.trim()&&t.rename(e.id,t.renameValue.trim()),t.setRenamingId(null)},onCancelRename:()=>t.setRenamingId(null)},e.id))})}),p.jsx("div",{className:"h-4 bg-accent-yellow border-t-[3px] border-ink"})]}),Mu=({label:t,active:e,onClick:n})=>p.jsx("button",{onClick:n,className:"pixel-button compact",style:{background:e?"#F5C04A":"transparent",color:e?"#2A2138":"#F7E6CF",borderColor:e?"#2A2138":"#F7E6CF",boxShadow:e?"2px 2px 0 0 #1B1424":"2px 2px 0 0 #F7E6CF"},children:t}),$A=({onNew:t})=>p.jsx("div",{className:"h-full min-h-[300px] grid place-items-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"mx-auto w-20 h-20 mb-3 grid place-items-center",children:p.jsx(Ke,{name:"folder-big",size:48})}),p.jsx("div",{className:"pixel-text text-[12px] mb-2",children:"NO SKINS YET"}),p.jsx("div",{className:"font-body text-[18px] mb-4 text-ink/70",children:"Boot up your first creation!"}),p.jsxs("button",{onClick:t,className:"pixel-button danger flex items-center gap-2 mx-auto",children:[p.jsx(Ke,{name:"plus"})," CREATE SKIN"]})]})}),qA=({skin:t,index:e,onEdit:n,onDelete:i,renaming:r,renameValue:s,onStartRename:a,onChangeRename:o,onCommitRename:l,onCancelRename:c})=>p.jsx("div",{className:"slide-in-up",style:{animationDelay:`${e*30}ms`},children:p.jsxs("div",{className:"pixel-card group cursor-pointer relative overflow-hidden p-0",children:[p.jsx("div",{className:"h-44 grid place-items-center",style:{background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)",borderBottom:"3px solid #2A2138"},onClick:n,children:p.jsx(Pf,{imageUrl:t.dataUrl,model:t.model,width:120,height:160,pose:"idle",rotate:!0})}),p.jsxs("div",{className:"p-2 flex items-center gap-2 bg-accent-cream",children:[r?p.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:s,onChange:f=>o(f.target.value),onBlur:l,onKeyDown:f=>{f.key==="Enter"&&l(),f.key==="Escape"&&c()}}):p.jsx("button",{className:"pixel-text-sm text-left flex-1 truncate min-w-0",onClick:a,title:t.name,children:t.name}),p.jsx("button",{className:"pixel-chip",style:{background:t.model==="slim"?"#3FB6A8":"#F5C04A",color:"#2A2138"},children:t.model.toUpperCase()})]}),p.jsxs("div",{className:"flex border-t-[3px] border-ink",children:[p.jsxs("button",{onClick:n,className:"flex-1 p-2 pixel-text-sm bg-accent-yellow hover:bg-[#FFCF63] border-r-[3px] border-ink flex items-center justify-center gap-1",children:[p.jsx(Ke,{name:"pencil"})," EDIT"]}),p.jsxs("button",{onClick:()=>{const f=document.createElement("a");f.href=t.dataUrl,f.download=`${t.name}.png`,f.click()},className:"flex-1 p-2 pixel-text-sm bg-accent-teal text-ink border-r-[3px] border-ink flex items-center justify-center gap-1",children:[p.jsx(Ke,{name:"download"})," SAVE"]}),p.jsxs("button",{onClick:()=>{confirm(`Delete "${t.name}"?`)&&i()},className:"flex-1 p-2 pixel-text-sm bg-accent-red text-accent-cream flex items-center justify-center gap-1",children:[p.jsx(Ke,{name:"trash"})," BIN"]})]})]})}),KA=({onNew:t,count:e})=>p.jsxs("div",{className:"hidden lg:flex flex-col gap-4",children:[p.jsx(_a,{label:"HD",sublabel:`${e} skins`,onClick:()=>{},svg:p.jsx(ZA,{})}),p.jsx(_a,{label:"CURRENT PROJECT",sublabel:"floppy.dat",onClick:t,svg:p.jsx(Dm,{variant:"red"})}),p.jsx(_a,{label:"NEW PROJECT",sublabel:"64x64 atlas",onClick:t,svg:p.jsx(Dm,{variant:"cream"})}),p.jsx(_a,{label:"CLIPBOARD",sublabel:"paste skin",onClick:()=>{var n;(n=window.__skin_upload)==null||n.call(window)},svg:p.jsx(QA,{})}),p.jsx(_a,{label:"BIN",sublabel:"clear cache",onClick:()=>{confirm("Clear local cache? This does not delete saved skins.")&&location.reload()},svg:p.jsx(JA,{})})]}),_a=({label:t,sublabel:e,onClick:n,svg:i})=>p.jsxs("button",{onClick:n,className:"pixel-card text-center hover:translate-y-[-2px] transition-transform",children:[p.jsx("div",{className:"h-16 grid place-items-center mb-1 float-anim",children:i}),p.jsx("div",{className:"pixel-text-sm",children:t}),e&&p.jsx("div",{className:"font-body text-[14px] text-ink/70",children:e})]}),Dm=({variant:t})=>p.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"1",y:"1",width:"14",height:"14",fill:t==="red"?"#D54B4B":"#F5C04A"}),p.jsx("rect",{x:"1",y:"1",width:"14",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"1",y:"14",width:"14",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"1",y:"1",width:"1",height:"14",fill:"#2A2138"}),p.jsx("rect",{x:"14",y:"1",width:"1",height:"14",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"2",width:"10",height:"4",fill:"#F7E6CF"}),p.jsx("rect",{x:"5",y:"3",width:"2",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"9",y:"3",width:"2",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"8",width:"10",height:"6",fill:"#F7E6CF"}),p.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:"#B07B47"}),p.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#B07B47"}),p.jsx("rect",{x:"4",y:"13",width:"8",height:"1",fill:"#B07B47"})]}),ZA=()=>p.jsxs("svg",{width:"56",height:"48",viewBox:"0 0 16 14",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"0",y:"0",width:"16",height:"14",fill:"#2A2138"}),p.jsx("rect",{x:"1",y:"1",width:"14",height:"6",fill:"#F5C04A"}),p.jsx("rect",{x:"2",y:"2",width:"12",height:"4",fill:"#E68E2E"}),p.jsx("rect",{x:"3",y:"3",width:"10",height:"1",fill:"#F7E6CF"}),p.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#F7E6CF"}),p.jsx("rect",{x:"1",y:"8",width:"14",height:"5",fill:"#B07B47"}),p.jsx("rect",{x:"2",y:"10",width:"2",height:"2",fill:"#3FB6A8"}),p.jsx("rect",{x:"5",y:"10",width:"9",height:"2",fill:"#2A2138"})]}),QA=()=>p.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"2",y:"2",width:"10",height:"13",fill:"#F5C04A",stroke:"#2A2138"}),p.jsx("rect",{x:"2",y:"2",width:"10",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"2",y:"14",width:"10",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"2",y:"2",width:"1",height:"13",fill:"#2A2138"}),p.jsx("rect",{x:"11",y:"2",width:"1",height:"13",fill:"#2A2138"}),p.jsx("rect",{x:"4",y:"3",width:"6",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"5",y:"2",width:"4",height:"1",fill:"#F7E6CF"}),p.jsx("rect",{x:"3",y:"6",width:"8",height:"1",fill:"#FFFBEA"}),p.jsx("rect",{x:"3",y:"8",width:"8",height:"1",fill:"#FFFBEA"}),p.jsx("rect",{x:"3",y:"10",width:"6",height:"1",fill:"#FFFBEA"})]}),JA=()=>p.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"5",width:"10",height:"10",fill:"#F5C04A"}),p.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"14",width:"10",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"5",width:"1",height:"10",fill:"#2A2138"}),p.jsx("rect",{x:"12",y:"5",width:"1",height:"10",fill:"#2A2138"}),p.jsx("rect",{x:"5",y:"7",width:"2",height:"6",fill:"#2A2138"}),p.jsx("rect",{x:"9",y:"7",width:"2",height:"6",fill:"#2A2138"}),p.jsx("path",{d:"M7 10 l1 1 -1 1",stroke:"#3FB6A8"})]}),ke=64,ft=64,Yt=(t,e,n,i,r)=>({top:{x:t+r,y:e,w:n,h:r},bottom:{x:t+r+n,y:e,w:n,h:r},right:{x:t,y:e+r,w:r,h:i},front:{x:t+r,y:e+r,w:n,h:i},left:{x:t+r+n,y:e+r,w:r,h:i},back:{x:t+r+n+r,y:e+r,w:n,h:i}}),Xx={head:Yt(0,0,8,8,8),head_overlay:Yt(32,0,8,8,8),body:Yt(16,16,8,12,4),body_overlay:Yt(16,32,8,12,4),right_arm:Yt(40,16,4,12,4),right_arm_overlay:Yt(40,32,4,12,4),left_arm:Yt(32,48,4,12,4),left_arm_overlay:Yt(48,48,4,12,4),right_leg:Yt(0,16,4,12,4),right_leg_overlay:Yt(0,32,4,12,4),left_leg:Yt(16,48,4,12,4),left_leg_overlay:Yt(0,48,4,12,4)},eb={...Xx,right_arm:Yt(40,16,3,12,4),right_arm_overlay:Yt(40,32,3,12,4),left_arm:Yt(32,48,3,12,4),left_arm_overlay:Yt(48,48,3,12,4)},oi=t=>t==="slim"?eb:Xx,tb=t=>{const e=Object.values(t),n=Math.min(...e.map(a=>a.x)),i=Math.min(...e.map(a=>a.y)),r=Math.max(...e.map(a=>a.x+a.w)),s=Math.max(...e.map(a=>a.y+a.h));return{x:n,y:i,w:r-n,h:s-i}},nb=[{key:"head",label:"Head",overlayKey:"head_overlay"},{key:"body",label:"Body",overlayKey:"body_overlay"},{key:"right_arm",label:"Right Arm",overlayKey:"right_arm_overlay"},{key:"left_arm",label:"Left Arm",overlayKey:"left_arm_overlay"},{key:"right_leg",label:"Right Leg",overlayKey:"right_leg_overlay"},{key:"left_leg",label:"Left Leg",overlayKey:"left_leg_overlay"}],Yx=t=>{const e=new Uint8Array(ke*ft),n=oi(t);for(const i of Object.values(n))for(const r of Object.values(i))for(let s=0;s<r.h;s++)for(let a=0;a<r.w;a++){const o=r.x+a,l=r.y+s;o>=0&&l>=0&&o<ke&&l<ft&&(e[l*ke+o]=1)}return e},ib=Yx("classic"),rb=Yx("slim"),sb=t=>t==="slim"?rb:ib,li=(t=ke,e=ft)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n},Ot=t=>{const e=t.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("2d context unavailable");return e.imageSmoothingEnabled=!1,e},Jo=t=>{const e=li(t.width,t.height);return Ot(e).drawImage(t,0,0),e},Fs=(t,e=ke,n=ft)=>new Promise((i,r)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=li(e,n),o=Ot(a),l=s.height===32?32:n;o.drawImage(s,0,0,s.width,s.height,0,0,e,l),i(a)},s.onerror=r,s.src=t}),ab=t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{if(typeof i.result!="string")return n("bad read");Fs(i.result).then(e,n)},i.onerror=n,i.readAsDataURL(t)}),Lf=t=>{const e=li(),n=Ot(e);for(const i of t)i.visible&&(n.globalAlpha=i.opacity,n.drawImage(i.canvas,0,0));return n.globalAlpha=1,e},$x=t=>t.toDataURL("image/png"),ob=(t,e)=>{t.toBlob(n=>{if(!n)return;const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e.endsWith(".png")?e:`${e}.png`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),500)},"image/png")},lb=t=>{const e=li(),n=Ot(e);n.imageSmoothingEnabled=!1;const i=oi(t),r="#C39979",s="#A87B5C",a="#3B2A1E",o="#7A3B2C",l="#3D2614",c="#2F8FCF",f="#1E5F8E",h="#46367E",d="#2E2456",g="#5B3A1F",x=(y,m)=>{const S=i[y];for(const w of Object.values(S))n.fillStyle=m,n.fillRect(w.x,w.y,w.w,w.h)};x("head",r),x("body",r),x("right_arm",r),x("left_arm",r),x("right_leg",r),x("left_leg",r);const _=i.head;n.fillStyle=l,n.fillRect(_.top.x,_.top.y,_.top.w,_.top.h),n.fillRect(_.front.x,_.front.y,_.front.w,2),n.fillRect(_.back.x,_.back.y,_.back.w,2),n.fillRect(_.left.x,_.left.y,_.left.w,2),n.fillRect(_.right.x,_.right.y,_.right.w,2);const v=_.front;n.fillStyle="#FFFFFF",n.fillRect(v.x+2,v.y+4,1,1),n.fillRect(v.x+5,v.y+4,1,1),n.fillStyle=a,n.fillRect(v.x+2,v.y+4,1,1),n.fillRect(v.x+5,v.y+4,1,1),n.fillStyle=o,n.fillRect(v.x+3,v.y+6,2,1),n.fillStyle=s,n.fillRect(v.x,v.y+7,1,1),n.fillRect(v.x+7,v.y+7,1,1);const u=i.body;n.fillStyle=c,n.fillRect(u.front.x,u.front.y,u.front.w,u.front.h),n.fillRect(u.back.x,u.back.y,u.back.w,u.back.h),n.fillRect(u.left.x,u.left.y,u.left.w,u.left.h),n.fillRect(u.right.x,u.right.y,u.right.w,u.right.h),n.fillStyle=f,n.fillRect(u.front.x,u.front.y+u.front.h-1,u.front.w,1),n.fillRect(u.back.x,u.back.y+u.back.h-1,u.back.w,1);for(const y of["right_arm","left_arm"]){const m=i[y];n.fillStyle=c,n.fillRect(m.front.x,m.front.y,m.front.w,4),n.fillRect(m.back.x,m.back.y,m.back.w,4),n.fillRect(m.left.x,m.left.y,m.left.w,4),n.fillRect(m.right.x,m.right.y,m.right.w,4),n.fillStyle=f,n.fillRect(m.top.x,m.top.y,m.top.w,m.top.h)}for(const y of["right_leg","left_leg"]){const m=i[y];n.fillStyle=h;for(const S of Object.values(m))n.fillRect(S.x,S.y,S.w,S.h);n.fillStyle=g,n.fillRect(m.front.x,m.front.y+m.front.h-2,m.front.w,2),n.fillRect(m.back.x,m.back.y+m.back.h-2,m.back.w,2),n.fillRect(m.left.x,m.left.y+m.left.h-2,m.left.w,2),n.fillRect(m.right.x,m.right.y+m.right.h-2,m.right.w,2),n.fillRect(m.bottom.x,m.bottom.y,m.bottom.w,m.bottom.h),n.fillStyle=d,n.fillRect(m.top.x,m.top.y,m.top.w,m.top.h)}return e},cb=(t,e,n)=>{const i=Ot(t).getImageData(e,n,1,1).data,r=s=>s.toString(16).padStart(2,"0");return`#${r(i[0])}${r(i[1])}${r(i[2])}${r(i[3])}`},qx=t=>{if(t.startsWith("#")){const r=t.slice(1);if(r.length===6)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),255];if(r.length===8)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),parseInt(r.slice(6,8),16)];if(r.length===3){const s=parseInt(r[0]+r[0],16),a=parseInt(r[1]+r[1],16),o=parseInt(r[2]+r[2],16);return[s,a,o,255]}}const e=li(1,1),n=Ot(e);n.fillStyle=t,n.fillRect(0,0,1,1);const i=n.getImageData(0,0,1,1).data;return[i[0],i[1],i[2],i[3]]},wr=()=>Math.random().toString(36).slice(2,9),wu=(t,e)=>({layers:t.map(n=>({id:n.id,dataUrl:$x(n.canvas)})),activeLayerId:e??""}),ub=40,Nm=t=>{const e=lb(t);return[{id:wr(),name:"Base",visible:!0,locked:!1,opacity:1,canvas:e},{id:wr(),name:"Paint",visible:!0,locked:!1,opacity:1,canvas:li()}]},xe=bd((t,e)=>{const n=Nm("classic");return{model:"classic",layers:n,activeLayerId:n[n.length-1].id,tool:"pencil",color:"#E68E2E",recentColors:["#E68E2E","#D54B4B","#F5C04A","#3FB6A8","#7E4FB8","#C39979","#2A2138","#FFFBEA","#46367E","#3D2614"],brushSize:1,mirror:!1,showOverlay:!0,showGrid:!0,showOnlyValid:!0,activePart:"all",history:[],future:[],setModel:i=>t({model:i}),setTool:i=>t({tool:i}),setColor:i=>t({color:i}),pushRecentColor:i=>t(r=>({recentColors:[i,...r.recentColors.filter(s=>s!==i)].slice(0,16)})),setBrushSize:i=>t({brushSize:Math.max(1,Math.min(4,i))}),toggleMirror:()=>t(i=>({mirror:!i.mirror})),toggleOverlay:()=>t(i=>({showOverlay:!i.showOverlay})),toggleGrid:()=>t(i=>({showGrid:!i.showGrid})),toggleOnlyValid:()=>t(i=>({showOnlyValid:!i.showOnlyValid})),setActivePart:i=>t({activePart:i}),setActiveLayer:i=>t({activeLayerId:i}),addBlankLayer:(i="Layer")=>{e().snapshot();const r={id:wr(),name:i,visible:!0,locked:!1,opacity:1,canvas:li()};t(s=>({layers:[...s.layers,r],activeLayerId:r.id}))},addLayerFromCanvas:(i,r="Imported")=>{e().snapshot();const s={id:wr(),name:r,visible:!0,locked:!1,opacity:1,canvas:Jo(i)};t(a=>({layers:[...a.layers,s],activeLayerId:s.id}))},addLayerFromDataUrl:async(i,r="Imported")=>{const s=await Fs(i);e().addLayerFromCanvas(s,r)},duplicateLayer:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(c=>c.id===i);if(s===-1)return r;const a=r.layers[s],o={...a,id:wr(),name:`${a.name} copy`,canvas:Jo(a.canvas)},l=[...r.layers];return l.splice(s+1,0,o),{layers:l,activeLayerId:o.id}})},deleteLayer:i=>{e().snapshot(),t(r=>{if(r.layers.length<=1)return r;const s=r.layers.findIndex(l=>l.id===i);if(s===-1)return r;const a=r.layers.filter(l=>l.id!==i),o=r.activeLayerId===i?a[Math.min(s,a.length-1)].id:r.activeLayerId;return{layers:a,activeLayerId:o}})},toggleLayerVisible:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,visible:!s.visible}:s)}))},toggleLayerLocked:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,locked:!s.locked}:s)}))},setLayerOpacity:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,opacity:r}:a)}))},renameLayer:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,name:r}:a)}))},moveLayer:(i,r)=>{e().snapshot(),t(s=>{const a=s.layers.findIndex(f=>f.id===i);if(a===-1)return s;const o=a+r;if(o<0||o>=s.layers.length)return s;const l=[...s.layers],[c]=l.splice(a,1);return l.splice(o,0,c),{layers:l}})},mergeDown:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(h=>h.id===i);if(s<=0)return r;const a=r.layers[s],o=r.layers[s-1],l=Jo(o.canvas),c=Ot(l);c.globalAlpha=a.opacity,c.drawImage(a.canvas,0,0),c.globalAlpha=1;const f=[...r.layers];return f.splice(s,1),f[s-1]={...o,canvas:l},{layers:f,activeLayerId:o.id}})},snapshot:()=>{t(i=>{const r=wu(i.layers,i.activeLayerId),s=[...i.history,r];return s.length>ub&&s.shift(),{history:s,future:[]}})},undo:()=>{const i=e();if(i.history.length===0)return;const r=i.history[i.history.length-1],s=wu(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Fs(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const f=o.layers.find(g=>g.id===l.id),h=o.layers[c],d=f??h;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:o.history.slice(0,-1),future:[...o.future,s]}))})},redo:()=>{const i=e();if(i.future.length===0)return;const r=i.future[i.future.length-1],s=wu(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Fs(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const f=o.layers.find(g=>g.id===l.id),h=o.layers[c],d=f??h;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:[...o.history,s],future:o.future.slice(0,-1)}))})},composite:()=>Lf(e().layers),reset:i=>{const r=i??e().model,s=Nm(r);t({layers:s,activeLayerId:s[s.length-1].id,model:r,history:[],future:[]})},loadSkinAsBase:i=>{const r={id:wr(),name:"Base",visible:!0,locked:!1,opacity:1,canvas:Jo(i)},s={id:wr(),name:"Paint",visible:!0,locked:!1,opacity:1,canvas:li()};t({layers:[r,s],activeLayerId:s.id,history:[],future:[]})}}}),Im=(t,e,n,i,r,s,a)=>{if(e<0||n<0||e>=ke||n>=ft)return;const o=(n*ke+e)*4;t[o]=i,t[o+1]=r,t[o+2]=s,t[o+3]=a},fb=(t,e,n,i,r)=>{const s=Ot(t),a=s.getImageData(0,0,ke,ft),[o,l,c,f]=qx(i.color),h=Math.max(1,Math.floor(i.size)),d=Math.floor(h/2);for(let g=0;g<h;g++)for(let x=0;x<h;x++){const _=e-d+x,v=n-d+g;if(!(r&&(_<0||v<0||_>=ke||v>=ft||!r[v*ke+_]))&&(Im(a.data,_,v,o,l,c,f),i.mirror)){const u=Kx(_,v);if(u){if(r&&!r[u.y*ke+u.x])continue;Im(a.data,u.x,u.y,o,l,c,f)}}}s.putImageData(a,0,0)},db=(t,e,n,i=1,r=!1)=>{const s=Ot(t);s.save(),s.globalCompositeOperation="destination-out",s.fillStyle="#000";const a=Math.floor(i/2);if(s.fillRect(e-a,n-a,i,i),r){const o=Kx(e,n);o&&s.fillRect(o.x-a,o.y-a,i,i)}s.restore()},Kx=(t,e)=>{const n=[{x:8,y:8,w:8,h:8},{x:40,y:8,w:8,h:8},{x:20,y:20,w:8,h:12},{x:20,y:36,w:8,h:12}];for(const i of n)if(t>=i.x&&t<i.x+i.w&&e>=i.y&&e<i.y+i.h){const r=t-i.x;return{x:i.x+(i.w-1-r),y:e}}return null},hb=(t,e,n,i,r)=>{if(e<0||n<0||e>=ke||n>=ft||r&&!r[n*ke+e])return;const s=Ot(t),a=s.getImageData(0,0,ke,ft),o=a.data,l=(m,S)=>(S*ke+m)*4,c=l(e,n),f=o[c],h=o[c+1],d=o[c+2],g=o[c+3],[x,_,v,u]=qx(i);if(f===x&&h===_&&d===v&&g===u)return;const y=[[e,n]];for(;y.length;){const[m,S]=y.pop();if(m<0||S<0||m>=ke||S>=ft||r&&!r[S*ke+m])continue;const w=l(m,S);o[w]!==f||o[w+1]!==h||o[w+2]!==d||o[w+3]!==g||(o[w]=x,o[w+1]=_,o[w+2]=v,o[w+3]=u,y.push([m+1,S],[m-1,S],[m,S+1],[m,S-1]))}s.putImageData(a,0,0)},Um=(t,e,n,i,r=1,s)=>{const a=Ot(t),o=a.getImageData(0,0,ke,ft),l=o.data,c=Math.floor(r/2);for(let f=0;f<r;f++)for(let h=0;h<r;h++){const d=e-c+h,g=n-c+f;if(d<0||g<0||d>=ke||g>=ft||s&&!s[g*ke+d])continue;const x=(g*ke+d)*4;if(l[x+3]===0)continue;const _=1+i;l[x]=Math.max(0,Math.min(255,Math.round(l[x]*_))),l[x+1]=Math.max(0,Math.min(255,Math.round(l[x+1]*_))),l[x+2]=Math.max(0,Math.min(255,Math.round(l[x+2]*_)))}a.putImageData(o,0,0)},pb=(t,e,n,i,r,s)=>{let a=e,o=n;const l=Math.abs(i-e),c=-Math.abs(r-n),f=e<i?1:-1,h=n<r?1:-1;let d=l+c;for(;s(t,a,o),!(a===i&&o===r);){const g=2*d;g>=c&&(d+=c,a+=f),g<=l&&(d+=l,o+=h)}},mb=({model:t,partFilter:e="all"})=>{const n=Ee.useRef(null),i=Ee.useRef(null),r=xe(P=>P.layers),s=xe(P=>P.activeLayerId),a=xe(P=>P.tool),o=xe(P=>P.color),l=xe(P=>P.brushSize),c=xe(P=>P.mirror),f=xe(P=>P.showGrid),h=xe(P=>P.showOnlyValid),d=xe(P=>P.setColor),g=xe(P=>P.pushRecentColor),x=xe(P=>P.snapshot),_=xe(P=>P.setTool),[v,u]=Ee.useState({w:512,h:512}),y=Ee.useRef(null),m=Ee.useRef(null),S=Ee.useRef(!1),w=Ee.useRef(!1),R=sb(t),T=gb(t,e,R);Ee.useEffect(()=>{const P=y.current;if(!P)return;const B=new ResizeObserver(()=>{const F=P.getBoundingClientRect(),N=Math.floor(Math.min(F.width,F.height));u({w:N,h:N})});return B.observe(P),()=>B.disconnect()},[]),Ee.useEffect(()=>{const P=n.current;if(!P)return;const B=Ot(P);B.clearRect(0,0,P.width,P.height),B.imageSmoothingEnabled=!1;for(const F of r)F.visible&&(B.globalAlpha=F.opacity,B.drawImage(F.canvas,0,0));B.globalAlpha=1},[r]),Ee.useEffect(()=>{const P=i.current;if(!P)return;const B=P.getContext("2d");if(!B)return;B.clearRect(0,0,P.width,P.height),B.imageSmoothingEnabled=!1;const F=P.width/ke;if(h){B.getImageData(0,0,P.width,P.height),B.fillStyle="rgba(20, 14, 28, 0.62)";for(let O=0;O<ft;O++)for(let H=0;H<ke;H++)R[O*ke+H]||B.fillRect(H*F,O*F,F,F)}if(e!=="all"){B.fillStyle="rgba(20, 14, 28, 0.55)";for(let O=0;O<ft;O++)for(let H=0;H<ke;H++)R[O*ke+H]&&!T[O*ke+H]&&B.fillRect(H*F,O*F,F,F)}if(f&&F>=6){B.strokeStyle=F>=16?"rgba(42,33,56,.32)":"rgba(42,33,56,.18)",B.lineWidth=1,B.beginPath();for(let O=0;O<=ke;O++)B.moveTo(Math.round(O*F)+.5,0),B.lineTo(Math.round(O*F)+.5,P.height);for(let O=0;O<=ft;O++)B.moveTo(0,Math.round(O*F)+.5),B.lineTo(P.width,Math.round(O*F)+.5);B.stroke(),B.strokeStyle="rgba(42,33,56,.7)",B.lineWidth=1,B.beginPath();for(let O=0;O<=ke;O+=8)B.moveTo(Math.round(O*F)+.5,0),B.lineTo(Math.round(O*F)+.5,P.height);for(let O=0;O<=ft;O+=8)B.moveTo(0,Math.round(O*F)+.5),B.lineTo(P.width,Math.round(O*F)+.5);B.stroke()}const N=oi(t);B.strokeStyle="rgba(213,75,75,.85)",B.lineWidth=2;for(const[O,H]of Object.entries(N)){if(e!=="all"&&O!==e&&!O.startsWith(e+"_"))continue;const z=tb(H);B.strokeRect(Math.round(z.x*F)+.5,Math.round(z.y*F)+.5,Math.round(z.w*F)-1,Math.round(z.h*F)-1)}},[f,h,t,e,R,T,v]);const I=Ee.useCallback(P=>{const B=n.current;if(!B)return null;const F=B.getBoundingClientRect(),N=(P.clientX-F.left)/F.width*ke,O=(P.clientY-F.top)/F.height*ft;return{x:Math.max(0,Math.min(ke-1,Math.floor(N))),y:Math.max(0,Math.min(ft-1,Math.floor(O)))}},[]),E=r.find(P=>P.id===s)??null,A=Ee.useCallback((P,B)=>{if(!E||E.locked)return;const F=E.canvas;a==="pencil"?fb(F,P,B,{color:o,size:l,mirror:c},T):a==="eraser"?db(F,P,B,l,c):a==="shade"?Um(F,P,B,-.15,l,T):a==="lighten"&&Um(F,P,B,.18,l,T),w.current=!0,xe.setState(N=>({layers:[...N.layers]}))},[E,l,o,c,T,a]),Q=P=>{P.preventDefault(),P.target.setPointerCapture(P.pointerId);const B=I(P);if(B){if(a==="eyedropper"){const F=n.current;if(!F)return;const N=cb(F,B.x*(F.width/ke),B.y*(F.height/ft));if(N.length===9&&N.endsWith("00"))return;const O="#"+N.slice(1,7);d(O),g(O),_("pencil");return}if(a==="fill"){if(!E||E.locked)return;x(),hb(E.canvas,B.x,B.y,o,T),xe.setState(F=>({layers:[...F.layers]}));return}x(),S.current=!0,w.current=!1,m.current=B,A(B.x,B.y)}},ee=P=>{if(!S.current)return;const B=I(P);if(!B)return;const F=m.current;F&&(F.x!==B.x||F.y!==B.y)?pb(n.current,F.x,F.y,B.x,B.y,(N,O,H)=>{A(O,H)}):A(B.x,B.y),m.current=B},W=P=>{var B,F;S.current=!1,m.current=null,w.current&&o&&g(o),w.current=!1,(F=(B=P.target).releasePointerCapture)==null||F.call(B,P.pointerId)},U=Math.max(ke*4,Math.floor(Math.min(v.w,v.h)/ke)*ke);return p.jsx("div",{ref:y,className:"relative w-full h-full flex items-center justify-center",style:{touchAction:"none"},children:p.jsxs("div",{className:"relative border-[3px] border-ink shadow-[6px_6px_0_0_#2A2138]",style:{width:U,height:U,background:"repeating-conic-gradient(#E9D6B4 0% 25%, #D9BF8E 0% 50%) 50%/24px 24px"},children:[p.jsx("canvas",{ref:n,width:ke*16,height:ft*16,style:{position:"absolute",inset:0,width:"100%",height:"100%",imageRendering:"pixelated",pointerEvents:"none"}}),p.jsx("canvas",{ref:i,width:ke*16,height:ft*16,onPointerDown:Q,onPointerMove:ee,onPointerUp:W,onPointerCancel:W,style:{position:"absolute",inset:0,width:"100%",height:"100%",cursor:a==="eyedropper"?"crosshair":a==="fill"?"cell":"crosshair",touchAction:"none"}})]})})},gb=(t,e,n)=>Ee.useMemo(()=>{if(e==="all")return n;const i=new Uint8Array(ke*ft),r=oi(t),s=[];for(const a of Object.keys(r))(a===e||a===e+"_overlay")&&s.push(a);for(const a of s){const o=r[a];for(const l of Object.values(o))for(let c=0;c<l.h;c++)for(let f=0;f<l.w;f++){const h=l.x+f,d=l.y+c;h>=0&&d>=0&&h<ke&&d<ft&&(i[d*ke+h]=1)}}return i},[t,e,n]),vb=()=>{const t=xe(_=>_.layers),e=xe(_=>_.activeLayerId),n=xe(_=>_.setActiveLayer),i=xe(_=>_.addBlankLayer),r=xe(_=>_.duplicateLayer),s=xe(_=>_.deleteLayer),a=xe(_=>_.toggleLayerVisible),o=xe(_=>_.toggleLayerLocked),l=xe(_=>_.setLayerOpacity),c=xe(_=>_.moveLayer),f=xe(_=>_.renameLayer),h=xe(_=>_.mergeDown),d=xe(_=>_.addLayerFromCanvas),g=Ee.useRef(null);typeof window<"u"&&(window.__skin_upload=()=>{var _;return(_=g.current)==null?void 0:_.click()});const x=[...t].reverse();return p.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"LAYERS"}),p.jsx("span",{className:"ml-auto pixel-text-sm text-accent-cream/80",children:t.length})]}),p.jsxs("div",{className:"p-2 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-1",children:[p.jsxs("button",{onClick:()=>i("Layer"),className:"pixel-button compact flex items-center gap-1",title:"New blank layer",children:[p.jsx(Ke,{name:"plus"})," NEW"]}),p.jsxs("button",{onClick:()=>{var _;return(_=g.current)==null?void 0:_.click()},className:"pixel-button compact teal flex items-center gap-1",title:"Upload skin as a layer",children:[p.jsx(Ke,{name:"upload"})," UPLOAD"]}),p.jsx("input",{ref:g,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:async _=>{const v=Array.from(_.target.files??[]);for(const u of v)try{const y=await ab(u);d(y,u.name.replace(/\.[^.]+$/,""))}catch(y){console.warn("Could not load file",y)}g.current&&(g.current.value="")},multiple:!0})]}),p.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk",children:x.map(_=>{const v=_.id===e;return p.jsxs("div",{className:`relative border-b-[3px] border-ink ${v?"bg-accent-yellow":"bg-accent-cream"}`,children:[p.jsxs("div",{className:"flex items-center gap-2 p-2",children:[p.jsx("button",{className:"pixel-button compact icon",onClick:()=>a(_.id),title:_.visible?"Hide":"Show",children:p.jsx(Ke,{name:_.visible?"eye":"eye-off"})}),p.jsxs("button",{onClick:()=>n(_.id),className:"flex items-center gap-2 flex-1 min-w-0 text-left",children:[p.jsx(xb,{canvas:_.canvas,active:v}),p.jsx("input",{className:"bg-transparent outline-none w-full truncate pixel-text-sm",value:_.name,onChange:u=>f(_.id,u.target.value),onFocus:()=>n(_.id)})]}),p.jsx("button",{className:"pixel-button compact icon",onClick:()=>o(_.id),title:_.locked?"Unlock":"Lock",children:p.jsx(Ke,{name:_.locked?"lock":"unlock"})})]}),p.jsxs("div",{className:"px-2 pb-2 flex items-center gap-2",children:[p.jsx("span",{className:"pixel-text-sm opacity-70",children:"OPACITY"}),p.jsx("input",{type:"range",min:0,max:1,step:.05,value:_.opacity,onChange:u=>l(_.id,Number(u.target.value)),className:"flex-1"}),p.jsx("span",{className:"pixel-text-sm w-8 text-right",children:Math.round(_.opacity*100)})]}),p.jsxs("div",{className:"px-2 pb-2 flex items-center gap-1 flex-wrap",children:[p.jsx("button",{className:"pixel-button compact icon",onClick:()=>c(_.id,1),title:"Move up",children:p.jsx(Ke,{name:"up"})}),p.jsx("button",{className:"pixel-button compact icon",onClick:()=>c(_.id,-1),title:"Move down",children:p.jsx(Ke,{name:"down"})}),p.jsx("button",{className:"pixel-button compact icon",onClick:()=>r(_.id),title:"Duplicate",children:p.jsx(Ke,{name:"duplicate"})}),p.jsx("button",{className:"pixel-button compact icon",onClick:()=>h(_.id),title:"Merge down",children:p.jsx(Ke,{name:"merge"})}),p.jsx("button",{className:"pixel-button compact icon danger ml-auto",onClick:()=>s(_.id),title:"Delete",disabled:t.length<=1,children:p.jsx(Ke,{name:"trash",color:"#FFFBEA"})})]})]},_.id)})})]})},xb=({canvas:t,active:e})=>{const n=Ee.useRef(null);return Ee.useEffect(()=>{const i=n.current;if(!i)return;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.clearRect(0,0,i.width,i.height);const s=4;for(let a=0;a<i.height;a+=s)for(let o=0;o<i.width;o+=s)r.fillStyle=(o/s+a/s)%2===0?"#E9D6B4":"#B07B47",r.fillRect(o,a,s,s);r.drawImage(t,0,0,i.width,i.height)}),p.jsx("canvas",{ref:n,width:32,height:32,className:`border-2 ${e?"border-ink":"border-ink/70"}`,style:{imageRendering:"pixelated"}})},_b=[{key:"pencil",label:"Pencil",icon:"pencil",shortcut:"B"},{key:"eraser",label:"Eraser",icon:"eraser",shortcut:"E"},{key:"fill",label:"Fill",icon:"fill",shortcut:"G"},{key:"eyedropper",label:"Pick",icon:"eyedropper",shortcut:"I"},{key:"shade",label:"Shade",icon:"shade",shortcut:"S"},{key:"lighten",label:"Lighten",icon:"lighten",shortcut:"L"}],Fm=()=>{const t=xe(x=>x.tool),e=xe(x=>x.setTool),n=xe(x=>x.brushSize),i=xe(x=>x.setBrushSize),r=xe(x=>x.mirror),s=xe(x=>x.toggleMirror),a=xe(x=>x.showGrid),o=xe(x=>x.toggleGrid),l=xe(x=>x.showOnlyValid),c=xe(x=>x.toggleOnlyValid),f=xe(x=>x.undo),h=xe(x=>x.redo),d=xe(x=>x.history),g=xe(x=>x.future);return p.jsxs("div",{className:"pixel-window",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"TOOLS"})]}),p.jsx("div",{className:"p-2 grid grid-cols-3 gap-2 bg-bg-desk2",children:_b.map(x=>p.jsxs("button",{onClick:()=>e(x.key),title:`${x.label} (${x.shortcut})`,className:`pixel-button compact ${t===x.key?"active":""} flex flex-col items-center gap-1 py-3`,children:[p.jsx(Ke,{name:x.icon,size:16,color:t===x.key?"#F5C04A":"#2A2138"}),p.jsx("span",{style:{fontSize:8},children:x.label.toUpperCase()})]},x.key))}),p.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk space-y-2",children:[p.jsxs("div",{children:[p.jsx("div",{className:"pixel-text-sm mb-1",children:"BRUSH"}),p.jsx("div",{className:"grid grid-cols-4 gap-1",children:[1,2,3,4].map(x=>p.jsx("button",{onClick:()=>i(x),className:`pixel-button compact ${n===x?"active":""} grid place-items-center py-2`,children:p.jsx("div",{className:"bg-ink",style:{width:x*3,height:x*3}})},x))})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[p.jsxs("button",{onClick:s,className:`pixel-button compact ${r?"active":""} flex items-center justify-center gap-1`,title:"Mirror across X axis",children:[p.jsx(Ke,{name:"mirror",color:r?"#F5C04A":"#2A2138"}),p.jsx("span",{style:{fontSize:8},children:"MIRROR"})]}),p.jsxs("button",{onClick:o,className:`pixel-button compact ${a?"active":""} flex items-center justify-center gap-1`,children:[p.jsx(Ke,{name:"grid",color:a?"#F5C04A":"#2A2138"}),p.jsx("span",{style:{fontSize:8},children:"GRID"})]}),p.jsxs("button",{onClick:c,className:`pixel-button compact ${l?"active":""} flex items-center justify-center gap-1 col-span-2`,title:"Hide pixels that Minecraft doesn't use",children:[p.jsx(Ke,{name:"mask",color:l?"#F5C04A":"#2A2138"}),p.jsx("span",{style:{fontSize:8},children:"SAFE MASK"})]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[p.jsxs("button",{disabled:d.length===0,onClick:f,className:"pixel-button compact flex items-center justify-center gap-1",title:"Undo (Ctrl+Z)",children:[p.jsx(Ke,{name:"undo"})," ",p.jsx("span",{style:{fontSize:8},children:"UNDO"})]}),p.jsxs("button",{disabled:g.length===0,onClick:h,className:"pixel-button compact flex items-center justify-center gap-1",title:"Redo (Ctrl+Y)",children:[p.jsx(Ke,{name:"redo"})," ",p.jsx("span",{style:{fontSize:8},children:"REDO"})]})]})]})]})},yb=["#FFE0BD","#FFCB94","#E6B17A","#C39979","#A87B5C","#7A4F2A","#5B3A1F","#3D2614","#FF6B6B","#D54B4B","#A82F38","#7A1A1A","#FFB14A","#E68E2E","#B96B16","#7A4416","#FFEC8B","#F5C04A","#C98E20","#7E5A12","#A6E3C8","#3FB6A8","#1F7A70","#0E4A45","#7EC8F5","#3B5BA3","#1F3262","#0E1A3A","#C7A2F0","#7E4FB8","#4A2C6E","#291643","#FFC0E2","#FF7AB6","#B3437E","#6E1E50","#FFFFFF","#FFFBEA","#F7E6CF","#E9D6B4","#B07B47","#7B7F87","#3B3344","#2A2138","#1B1424","#000000"],Sb=()=>{const t=xe(o=>o.color),e=xe(o=>o.setColor),n=xe(o=>o.recentColors),[i,r]=Ee.useState(!1),[s,a]=Ee.useState(t);return Ee.useEffect(()=>a(t),[t]),p.jsxs("div",{className:"pixel-window",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"COLORS"})]}),p.jsxs("div",{className:"p-2 bg-bg-desk2 flex items-center gap-2",children:[p.jsx("div",{className:"w-12 h-12 border-[3px] border-ink",style:{background:t}}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"pixel-text-sm mb-1",children:"HEX"}),p.jsx("input",{className:"pixel-input w-full",value:s,onChange:o=>a(o.target.value),onBlur:()=>{/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(s)?e(s):a(t)}})]}),p.jsx("button",{className:"pixel-button icon",title:"Open native picker",onClick:()=>r(o=>!o),children:p.jsx(Eb,{})})]}),i&&p.jsx("div",{className:"p-2 bg-bg-desk2 border-t-[3px] border-ink",children:p.jsx("input",{type:"color",value:t.slice(0,7),onChange:o=>{e(o.target.value),a(o.target.value)},className:"w-full h-12"})}),p.jsx("div",{className:"p-2 grid grid-cols-8 gap-1 bg-bg-desk",children:yb.map(o=>p.jsx(Om,{color:o,active:o.toLowerCase()===t.toLowerCase(),onClick:()=>e(o)},o))}),n.length>0&&p.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk2",children:[p.jsx("div",{className:"pixel-text-sm mb-1",children:"RECENT"}),p.jsx("div",{className:"grid grid-cols-8 gap-1",children:n.map((o,l)=>p.jsx(Om,{color:o,active:o.toLowerCase()===t.toLowerCase(),onClick:()=>e(o)},o+l))})]})]})},Om=({color:t,active:e,onClick:n})=>p.jsx("button",{onClick:n,className:"aspect-square border-2",style:{background:t,borderColor:e?"#D54B4B":"#2A2138",boxShadow:e?"inset 0 0 0 2px #FFFBEA":"none"},title:t}),Eb=()=>p.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"6",y:"2",width:"4",height:"3",fill:"#D54B4B"}),p.jsx("rect",{x:"10",y:"3",width:"3",height:"4",fill:"#F5C04A"}),p.jsx("rect",{x:"11",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),p.jsx("rect",{x:"8",y:"11",width:"4",height:"3",fill:"#7E4FB8"}),p.jsx("rect",{x:"3",y:"11",width:"4",height:"3",fill:"#3B5BA3"}),p.jsx("rect",{x:"2",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),p.jsx("rect",{x:"3",y:"3",width:"3",height:"4",fill:"#FF7AB6"}),p.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#FFFBEA"})]}),Jn=(t,e,n)=>{t.fillStyle=n,t.fillRect(e.x,e.y,e.w,e.h)},De=(t,e,n,i,r,s,a)=>{t.fillStyle=a,t.fillRect(e.x+n,e.y+i,r,s)},Xe=(t,e,n,i,r)=>{t.fillStyle=r,t.fillRect(e.x+n,e.y+i,1,1)},hs=(t,e,n,i,r)=>({id:t,name:e,category:"face",description:n,swatch:i,render:(s,a)=>{const o=Ot(s),l=oi(a).head;r(o,l)}}),Mb=[hs("face-classic","Classic","A traditional Minecraft face",["#FFFFFF","#3B2A1E"],(t,e)=>{const n=e.front;Xe(t,n,2,4,"#FFFFFF"),Xe(t,n,5,4,"#FFFFFF"),Xe(t,n,2,4,"#3B2A1E"),Xe(t,n,5,4,"#3B2A1E"),De(t,n,3,6,2,1,"#7A3B2C")}),hs("face-smile","Happy","A wide cheerful smile",["#3B2A1E","#D54B4B"],(t,e)=>{const n=e.front;Xe(t,n,2,4,"#3B2A1E"),Xe(t,n,5,4,"#3B2A1E"),De(t,n,2,6,4,1,"#7A3B2C"),Xe(t,n,1,6,"#D54B4B"),Xe(t,n,6,6,"#D54B4B")}),hs("face-pirate","Pirate","Eye patch with a sly grin",["#2A2138","#3B2A1E"],(t,e)=>{const n=e.front;De(t,n,1,3,3,2,"#2A2138"),Xe(t,n,1,5,"#2A2138"),Xe(t,n,5,4,"#3B2A1E"),De(t,n,3,6,3,1,"#7A3B2C")}),hs("face-blush","Blushy","Soft eyes with pink cheeks",["#3B2A1E","#FF9FB1"],(t,e)=>{const n=e.front;Xe(t,n,2,4,"#3B2A1E"),Xe(t,n,5,4,"#3B2A1E"),Xe(t,n,1,5,"#FF9FB1"),Xe(t,n,6,5,"#FF9FB1"),De(t,n,3,6,2,1,"#D54B4B")}),hs("face-cool","Sunglasses","Cool sunglasses across the eyes",["#1B1424","#F5C04A"],(t,e)=>{const n=e.front;De(t,n,1,4,6,1,"#1B1424"),De(t,n,1,4,2,2,"#1B1424"),De(t,n,5,4,2,2,"#1B1424"),Xe(t,n,3,4,"#1B1424"),Xe(t,n,4,4,"#1B1424"),De(t,n,3,6,2,1,"#7A3B2C")}),hs("face-robot","Robot","Glowing pixel eyes",["#3FB6A8","#A6E3C8"],(t,e)=>{const n=e.front;Xe(t,n,2,4,"#3FB6A8"),Xe(t,n,5,4,"#3FB6A8"),De(t,n,2,5,4,1,"#A6E3C8"),De(t,n,1,6,6,1,"#1B1424"),Xe(t,n,2,6,"#FFFBEA"),Xe(t,n,5,6,"#FFFBEA")})],xr=(t,e,n,i,r,s)=>({id:t,name:e,category:"hair",description:n,swatch:[i,r],render:(a,o)=>{const l=Ot(a),c=oi(o).head,f=oi(o).head_overlay;s(l,c,f,i,r)}}),wb=[xr("hair-short-brown","Short Brown","A simple cropped style","#5B3A1F","#3D2614",(t,e,n,i,r)=>{Jn(t,e.top,i),De(t,e.front,0,0,8,2,i),De(t,e.back,0,0,8,2,i),De(t,e.left,0,0,8,2,i),De(t,e.right,0,0,8,2,i),Xe(t,e.front,0,2,r),Xe(t,e.front,7,2,r)}),xr("hair-long-blonde","Long Blonde","Flowing locks down the back","#F5C04A","#C98E20",(t,e,n,i,r)=>{Jn(t,e.top,i),De(t,e.front,0,0,8,3,i),Xe(t,e.front,3,3,i),Xe(t,e.front,4,3,i),Jn(t,e.back,i),Jn(t,e.left,i),Jn(t,e.right,i),De(t,e.front,0,0,8,1,r),De(t,e.back,0,0,8,1,r)}),xr("hair-mohawk","Mohawk","Bold center stripe","#D54B4B","#A82F38",(t,e,n,i,r)=>{De(t,e.top,3,0,2,8,i),De(t,e.front,3,0,2,1,i),De(t,e.back,3,0,2,1,i),De(t,e.top,3,0,2,1,r),De(t,e.top,3,7,2,1,r)}),xr("hair-curly","Curly","Bouncy curls all around","#3D2614","#1F1208",(t,e,n,i,r)=>{Jn(t,e.top,i),Jn(t,n.top,i),De(t,n.front,0,0,8,3,i),De(t,n.back,0,0,8,3,i),De(t,n.left,0,0,8,3,i),De(t,n.right,0,0,8,3,i),Xe(t,e.top,1,1,r),Xe(t,e.top,6,1,r),Xe(t,e.top,1,6,r),Xe(t,e.top,6,6,r),Xe(t,e.top,3,3,r),Xe(t,e.top,4,4,r)}),xr("hair-ponytail","Ponytail","Tied back hair","#7E4FB8","#4A2C6E",(t,e,n,i,r)=>{Jn(t,e.top,i),De(t,e.front,0,0,8,2,i),De(t,e.left,0,0,8,2,i),De(t,e.right,0,0,8,2,i),De(t,e.back,2,0,4,8,i),De(t,e.back,3,0,2,8,r)}),xr("hair-buzz","Buzz Cut","Clean and minimal","#2A2138","#1B1424",(t,e,n,i,r)=>{Jn(t,e.top,i),De(t,e.front,0,0,8,1,i),De(t,e.back,0,0,8,1,i),De(t,e.left,0,0,8,1,i),De(t,e.right,0,0,8,1,i)}),xr("hair-hat","Beanie","Cozy knit cap","#3FB6A8","#1F7A70",(t,e,n,i,r)=>{Jn(t,n.top,i),De(t,n.front,0,0,8,3,i),De(t,n.back,0,0,8,3,i),De(t,n.left,0,0,8,3,i),De(t,n.right,0,0,8,3,i),De(t,n.front,0,2,8,1,r),De(t,n.back,0,2,8,1,r),De(t,n.left,0,2,8,1,r),De(t,n.right,0,2,8,1,r)})],_r=(t,e,n,i,r,s)=>({id:t,name:e,category:"shirt",description:n,swatch:[i,r],render:(a,o)=>{const l=Ot(a),c=oi(o),f=c.body,h=c.right_arm,d=c.left_arm;if(s){s(l,f,h,d,i,r);return}for(const g of Object.values(f))l.fillStyle=i,l.fillRect(g.x,g.y,g.w,g.h);for(const g of[h,d])l.fillStyle=i,l.fillRect(g.front.x,g.front.y,g.front.w,4),l.fillRect(g.back.x,g.back.y,g.back.w,4),l.fillRect(g.left.x,g.left.y,g.left.w,4),l.fillRect(g.right.x,g.right.y,g.right.w,4),l.fillStyle=r,l.fillRect(g.top.x,g.top.y,g.top.w,g.top.h);l.fillStyle=r,l.fillRect(f.top.x,f.top.y,f.top.w,f.top.h)}}),Tb=[_r("shirt-cyan","Cyan Tee","Classic blue t-shirt","#2F8FCF","#1E5F8E"),_r("shirt-red","Red Tee","Bright red shirt","#D54B4B","#A82F38"),_r("shirt-gold","Gold Tunic","Warm yellow tunic","#F5C04A","#C98E20"),_r("shirt-purple","Purple Robe","Wizardly purple","#7E4FB8","#4A2C6E"),_r("shirt-stripes","Stripey","Horizontal stripes","#FFFBEA","#D54B4B",(t,e,n,i,r,s)=>{for(const a of[e.front,e.back,e.left,e.right])for(let o=0;o<a.h;o++)t.fillStyle=o%2===0?r:s,t.fillRect(a.x,a.y+o,a.w,1);for(const a of[n,i])t.fillStyle=r,t.fillRect(a.front.x,a.front.y,a.front.w,4),t.fillRect(a.back.x,a.back.y,a.back.w,4),t.fillRect(a.left.x,a.left.y,a.left.w,4),t.fillRect(a.right.x,a.right.y,a.right.w,4)}),_r("shirt-armor","Iron Armor","Metal chestplate","#C8CCD2","#7B7F87",(t,e,n,i,r,s)=>{for(const a of[e.front,e.back,e.left,e.right])t.fillStyle=r,t.fillRect(a.x,a.y,a.w,a.h);t.fillStyle=s,t.fillRect(e.front.x,e.front.y,2,e.front.h),t.fillRect(e.front.x+e.front.w-2,e.front.y,2,e.front.h),t.fillRect(e.front.x+3,e.front.y,2,1),t.fillRect(e.front.x,e.front.y+e.front.h-1,e.front.w,1),t.fillRect(e.back.x,e.back.y+e.back.h-1,e.back.w,1);for(const a of[n,i]){for(const o of Object.values(a))t.fillStyle=r,t.fillRect(o.x,o.y,o.w,4);t.fillStyle=s,t.fillRect(a.front.x,a.front.y+3,a.front.w,1),t.fillRect(a.back.x,a.back.y+3,a.back.w,1)}}),_r("shirt-hoodie","Hoodie","Comfy hoodie with pocket","#46367E","#2E2456",(t,e,n,i,r,s)=>{for(const a of Object.values(e))t.fillStyle=r,t.fillRect(a.x,a.y,a.w,a.h);t.fillStyle=s,t.fillRect(e.front.x+2,e.front.y+6,4,3),t.fillRect(e.front.x+2,e.front.y+6,4,1),Xe(t,e.front,3,1,s),Xe(t,e.front,4,1,s),Xe(t,e.front,3,2,s),Xe(t,e.front,4,2,s);for(const a of[n,i])for(const o of Object.values(a))t.fillStyle=r,t.fillRect(o.x,o.y,o.w,o.h)})],ya=(t,e,n,i,r,s)=>({id:t,name:e,category:"pants",description:n,swatch:[i,r],render:(a,o)=>{const l=Ot(a),c=oi(o),f=c.right_leg,h=c.left_leg;if(s){s(l,f,h,i,r);return}for(const d of[f,h]){for(const g of[d.front,d.back,d.left,d.right])l.fillStyle=i,l.fillRect(g.x,g.y,g.w,g.h);l.fillStyle=r,l.fillRect(d.top.x,d.top.y,d.top.w,d.top.h)}}}),Ab=[ya("pants-jeans","Jeans","Sturdy denim","#3B5BA3","#1F3262"),ya("pants-shorts","Shorts","Summer shorts","#D54B4B","#A82F38",(t,e,n,i,r)=>{for(const s of[e,n]){for(const a of[s.front,s.back,s.left,s.right])t.fillStyle=i,t.fillRect(a.x,a.y,a.w,6);t.fillStyle=r,t.fillRect(s.top.x,s.top.y,s.top.w,s.top.h),t.fillStyle=r,t.fillRect(s.front.x,s.front.y+5,s.front.w,1)}}),ya("pants-cargo","Cargo","Khaki cargo pants","#9C8B5A","#6B5C32"),ya("pants-fancy","Royal","Fancy purple trousers","#7E4FB8","#4A2C6E"),ya("pants-skirt","Skirt","A puffy pixel skirt","#FF7AB6","#B3437E",(t,e,n,i,r)=>{for(const s of[e,n]){for(const a of Object.values(s))t.fillStyle=i,t.fillRect(a.x,a.y,a.w,5);t.fillStyle=r,t.fillRect(s.front.x,s.front.y+4,s.front.w,1),t.fillRect(s.back.x,s.back.y+4,s.back.w,1)}})],el=(t,e,n,i,r,s)=>({id:t,name:e,category:"shoes",description:n,swatch:[i,r],render:(a,o)=>{const l=Ot(a),c=oi(o),f=c.right_leg,h=c.left_leg;if(s){s(l,f,h,i,r);return}for(const d of[f,h]){for(const x of[d.front,d.back,d.left,d.right])l.fillStyle=i,l.fillRect(x.x,x.y+x.h-2,x.w,2);l.fillStyle=r,l.fillRect(d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h)}}}),bb=[el("shoes-boots","Boots","Leather boots","#5B3A1F","#3D2614"),el("shoes-sneakers","Sneakers","White sneakers","#FFFBEA","#C8CCD2",(t,e,n,i,r)=>{for(const s of[e,n]){for(const a of[s.front,s.back,s.left,s.right])t.fillStyle=i,t.fillRect(a.x,a.y+a.h-3,a.w,3);t.fillStyle=r,t.fillRect(s.bottom.x,s.bottom.y,s.bottom.w,s.bottom.h),t.fillStyle="#D54B4B",t.fillRect(s.front.x,s.front.y+s.front.h-2,s.front.w,1)}}),el("shoes-iron","Iron Boots","Heavy iron armor boots","#C8CCD2","#7B7F87",(t,e,n,i,r)=>{for(const s of[e,n]){for(const a of[s.front,s.back,s.left,s.right])t.fillStyle=i,t.fillRect(a.x,a.y+a.h-4,a.w,4);t.fillStyle=r,t.fillRect(s.front.x,s.front.y+s.front.h-1,s.front.w,1),t.fillRect(s.bottom.x,s.bottom.y,s.bottom.w,s.bottom.h)}}),el("shoes-flames","Flame Kicks","Hot red flames","#1B1424","#D54B4B",(t,e,n,i,r)=>{for(const s of[e,n]){for(const a of[s.front,s.back,s.left,s.right])t.fillStyle=i,t.fillRect(a.x,a.y+a.h-3,a.w,3),t.fillStyle=r,t.fillRect(a.x,a.y+a.h-3,a.w,1);t.fillStyle="#F5C04A",t.fillRect(s.front.x+1,s.front.y+s.front.h-3,1,1),t.fillRect(s.front.x+s.front.w-2,s.front.y+s.front.h-3,1,1)}})],Cb=[...Mb,...wb,...Tb,...Ab,...bb],Rb=t=>Cb.filter(e=>e.category===t),Pb=[{key:"face",label:"Faces",icon:"face"},{key:"hair",label:"Hair",icon:"hair"},{key:"shirt",label:"Shirts",icon:"shirt"},{key:"pants",label:"Pants",icon:"pants"},{key:"shoes",label:"Shoes",icon:"shoes"}],km=()=>{const[t,e]=Ee.useState("face"),n=xe(l=>l.model),i=xe(l=>l.addLayerFromCanvas),r=xe(l=>l.layers),s=xe(l=>l.activeLayerId);xe(l=>l.setActiveLayer);const a=xe(l=>l.snapshot),o=(l,c)=>{if(c==="merge"){const h=r.find(d=>d.id===s);if(!h||h.locked)return;a(),l.render(h.canvas,n),xe.setState(d=>({layers:[...d.layers]}));return}const f=li();l.render(f,n),i(f,l.name)};return p.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"PRESETS"})]}),p.jsx("div",{className:"grid grid-cols-5 gap-1 p-2 bg-bg-desk2 border-b-[3px] border-ink",children:Pb.map(l=>p.jsxs("button",{onClick:()=>e(l.key),className:`pixel-button compact ${t===l.key?"active":""} flex flex-col items-center gap-1 py-2`,title:l.label,children:[p.jsx(Ke,{name:l.icon,size:14,color:t===l.key?"#F5C04A":"#2A2138"}),p.jsx("span",{style:{fontSize:7},children:l.label.toUpperCase()})]},l.key))}),p.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-2 grid grid-cols-2 gap-2 content-start",children:Rb(t).map(l=>p.jsx(Lb,{preset:l,model:n,onAdd:()=>o(l,"new-layer"),onMerge:()=>o(l,"merge")},l.id))})]})},Lb=({preset:t,model:e,onAdd:n,onMerge:i})=>{const r=Ee.useRef(null);return Ee.useEffect(()=>{const s=r.current;if(!s)return;const a=li();t.render(a,e);const o=Ot(s);o.clearRect(0,0,s.width,s.height);const l=4;for(let c=0;c<s.height;c+=l)for(let f=0;f<s.width;f+=l)o.fillStyle=(f/l+c/l)%2===0?"#E9D6B4":"#B07B47",o.fillRect(f,c,l,l);o.drawImage(a,0,0,s.width,s.height)},[t,e]),p.jsxs("div",{className:"pixel-card p-0 group",children:[p.jsx("button",{onClick:n,className:"block w-full p-2 bg-accent-cream hover:bg-[#FFF1D4] border-b-[3px] border-ink",title:"Click to add as new layer",children:p.jsx("canvas",{ref:r,width:64,height:64,style:{imageRendering:"pixelated",width:"100%",height:"auto"}})}),p.jsx("div",{className:"p-1.5 flex items-center gap-1 bg-accent-yellow",children:p.jsx("span",{className:"pixel-text-sm flex-1 truncate",title:t.description,children:t.name})}),p.jsxs("div",{className:"grid grid-cols-2 border-t-[3px] border-ink",children:[p.jsxs("button",{onClick:n,className:"bg-accent-cream hover:bg-[#FFF1D4] border-r-[3px] border-ink p-1.5 flex items-center justify-center gap-1",title:"Add as new layer",children:[p.jsx(Ke,{name:"plus",size:10}),p.jsx("span",{style:{fontSize:8},children:"NEW"})]}),p.jsxs("button",{onClick:i,className:"bg-accent-teal hover:brightness-110 p-1.5 flex items-center justify-center gap-1",title:"Paint into current layer",children:[p.jsx(Ke,{name:"merge",size:10}),p.jsx("span",{style:{fontSize:8},children:"MERGE"})]})]})]})},Db=({editId:t,onExit:e,onSaved:n})=>{const i=xe(U=>U.layers),r=xe(U=>U.model),s=xe(U=>U.setModel),a=xe(U=>U.reset),o=xe(U=>U.loadSkinAsBase),l=xe(U=>U.setTool),c=xe(U=>U.setActivePart),f=xe(U=>U.activePart),h=xe(U=>U.undo),d=xe(U=>U.redo),g=Pr(U=>U.skins),x=Pr(U=>U.save),_=Pr(U=>U.update),[v,u]=Ee.useState("Untitled Skin"),[y,m]=Ee.useState(null),[S,w]=Ee.useState("walk"),R=Ee.useRef(null),[T,I]=Ee.useState("canvas"),[E,A]=Ee.useState(!1);Ee.useEffect(()=>{let U=!1;return(async()=>{if(t){const P=g.find(F=>F.id===t);if(!P||U)return;u(P.name),s(P.model);const B=await Fs(P.dataUrl);if(U)return;o(B)}else a(r)})(),()=>{U=!0}},[t]),Ee.useEffect(()=>{let U=0,P=null;const B=()=>{const F=Lf(i);m($x(F)),U=0};return P=window.setTimeout(()=>{U=requestAnimationFrame(B)},60),()=>{U&&cancelAnimationFrame(U),P&&clearTimeout(P)}},[i]),Ee.useEffect(()=>{const U=P=>{var F;if(((F=P.target)==null?void 0:F.tagName)==="INPUT")return;if((P.ctrlKey||P.metaKey)&&P.key.toLowerCase()==="z"){P.preventDefault(),P.shiftKey?d():h();return}if((P.ctrlKey||P.metaKey)&&P.key.toLowerCase()==="y"){P.preventDefault(),d();return}const B=P.key.toLowerCase();B==="b"&&l("pencil"),B==="e"&&l("eraser"),B==="g"&&l("fill"),B==="i"&&l("eyedropper"),B==="s"&&l("shade"),B==="l"&&l("lighten")};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[l,h,d]);const Q=()=>{y&&(t?_(t,{name:v,model:r,dataUrl:y}):x({name:v,model:r,dataUrl:y}),n(v))},ee=()=>{const U=Lf(i);ob(U,v||"minecraft-skin")},W=async U=>{try{const P=await Fs(URL.createObjectURL(U));xe.getState().addLayerFromCanvas(P,U.name.replace(/\.[^.]+$/,""))}catch(P){console.warn(P)}};return p.jsxs("div",{className:"h-full w-full p-3 lg:p-4 grid gap-3 grid-rows-[auto_1fr] overflow-hidden",children:[p.jsx(Nb,{name:v,onName:u,model:r,setModel:U=>s(U),onExit:e,onSave:Q,onDownload:ee,onUpload:U=>W(U),fileInputRef:R,view:T,setView:I,presetsOpen:E,setPresetsOpen:A}),p.jsxs("div",{className:"grid gap-3 min-h-0 grid-cols-1 md:grid-cols-[260px_1fr_260px] xl:grid-cols-[260px_1fr_300px_320px]",children:[p.jsxs("div",{className:"hidden md:flex flex-col gap-3 min-h-0",children:[p.jsx(Fm,{}),p.jsx("div",{className:"min-h-[200px]",children:p.jsx(Sb,{})})]}),p.jsxs("div",{className:"flex flex-col gap-3 min-h-0",children:[p.jsxs("div",{className:"pixel-window flex-1 min-h-0 flex flex-col",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:T==="canvas"?"ATLAS // 64x64":"3D PREVIEW"}),p.jsxs("div",{className:"ml-auto flex gap-1 md:hidden",children:[p.jsx("button",{onClick:()=>I("canvas"),className:"pixel-button compact",style:{background:T==="canvas"?"#F5C04A":"transparent",color:T==="canvas"?"#2A2138":"#F7E6CF",borderColor:T==="canvas"?"#2A2138":"#F7E6CF"},children:"PAINT"}),p.jsx("button",{onClick:()=>I("preview"),className:"pixel-button compact",style:{background:T==="preview"?"#F5C04A":"transparent",color:T==="preview"?"#2A2138":"#F7E6CF",borderColor:T==="preview"?"#2A2138":"#F7E6CF"},children:"3D"})]})]}),p.jsx(Ib,{activePart:f,setActivePart:c}),p.jsx("div",{className:"flex-1 min-h-0 p-3 bg-bg-desk2",children:T==="canvas"?p.jsx(mb,{model:r,partFilter:f}):p.jsx("div",{className:"h-full w-full flex items-center justify-center bg-bg-desk border-[3px] border-ink shadow-[6px_6px_0_0_#2A2138]",children:p.jsx(Pf,{imageUrl:y,model:r,width:320,height:480,pose:S,rotate:S!=="none",interactive:!0,zoom:.95})})})]}),p.jsx("div",{className:"md:hidden",children:p.jsx(Fm,{})})]}),p.jsx("div",{className:"hidden md:flex flex-col gap-3 min-h-0",children:p.jsx(vb,{})}),p.jsxs("div",{className:"hidden xl:flex flex-col gap-3 min-h-0",children:[p.jsxs("div",{className:"pixel-window",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"3D PREVIEW"})]}),p.jsxs("div",{className:"bg-bg-desk2 p-3 flex flex-col items-center gap-2",children:[p.jsx("div",{className:"border-[3px] border-ink",style:{background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)"},children:p.jsx(Pf,{imageUrl:y,model:r,width:260,height:340,pose:S,rotate:S!=="none",interactive:!0,zoom:.95})}),p.jsx("div",{className:"grid grid-cols-4 gap-1 w-full",children:["idle","walk","wave","none"].map(U=>p.jsx("button",{onClick:()=>w(U),className:`pixel-button compact ${S===U?"active":""}`,children:p.jsx("span",{style:{fontSize:8},children:U.toUpperCase()})},U))})]})]}),p.jsx("div",{className:"min-h-[280px] flex-1",children:p.jsx(km,{})})]})]}),E&&p.jsx("div",{className:"fixed inset-0 z-40 bg-bg-deep/70 grid place-items-center p-4 xl:hidden",children:p.jsx("div",{className:"w-[640px] max-w-[96vw] h-[80vh]",children:p.jsxs("div",{className:"relative h-full",children:[p.jsx(km,{}),p.jsx("button",{className:"absolute top-2 right-2 pixel-button icon danger",onClick:()=>A(!1),children:p.jsx(Ke,{name:"x",color:"#FFFBEA"})})]})})}),p.jsx("div",{className:"crt-overlay"})]})},Nb=t=>p.jsxs("div",{className:"pixel-window",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"EDITOR // /skins/"}),p.jsx("input",{className:"pixel-input ml-2 max-w-[200px]",value:t.name,onChange:e=>t.onName(e.target.value)}),p.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-wrap",children:[p.jsx("button",{onClick:()=>t.setModel("classic"),className:`pixel-button compact ${t.model==="classic"?"active":""}`,children:"CLASSIC"}),p.jsx("button",{onClick:()=>t.setModel("slim"),className:`pixel-button compact teal ${t.model==="slim"?"active":""}`,children:"SLIM"})]})]}),p.jsxs("div",{className:"px-3 py-2 bg-bg-desk2 flex items-center gap-2 flex-wrap",children:[p.jsxs("button",{onClick:t.onExit,className:"pixel-button compact flex items-center gap-1",title:"Back to gallery",children:[p.jsx(Ke,{name:"home"})," HOME"]}),p.jsxs("button",{onClick:()=>{var e;return(e=t.fileInputRef.current)==null?void 0:e.click()},className:"pixel-button compact teal flex items-center gap-1",children:[p.jsx(Ke,{name:"upload"})," UPLOAD"]}),p.jsx("input",{ref:t.fileInputRef,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:e=>{var i;const n=(i=e.target.files)==null?void 0:i[0];n&&t.onUpload(n),t.fileInputRef.current&&(t.fileInputRef.current.value="")}}),p.jsxs("button",{onClick:()=>t.setPresetsOpen(!t.presetsOpen),className:"pixel-button compact purple flex items-center gap-1 xl:hidden",children:[p.jsx(Ke,{name:"star",color:"#FFFBEA"})," PRESETS"]}),p.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[p.jsxs("button",{onClick:t.onDownload,className:"pixel-button compact teal flex items-center gap-1",children:[p.jsx(Ke,{name:"download"})," DOWNLOAD"]}),p.jsxs("button",{onClick:t.onSave,className:"pixel-button compact danger flex items-center gap-1",children:[p.jsx(Ke,{name:"save",color:"#FFFBEA"})," SAVE"]})]})]})]}),Ib=({activePart:t,setActivePart:e})=>p.jsxs("div",{className:"px-2 py-2 border-b-[3px] border-ink bg-bg-desk overflow-x-auto pixel-scroll flex items-center gap-1",children:[p.jsx(Bm,{label:"ALL",active:t==="all",onClick:()=>e("all")}),nb.map(n=>p.jsx(Bm,{label:n.label.toUpperCase(),active:t===n.key,onClick:()=>e(n.key)},n.key))]}),Bm=({label:t,active:e,onClick:n})=>p.jsx("button",{onClick:n,className:`pixel-button compact ${e?"active":""} whitespace-nowrap`,children:p.jsx("span",{style:{fontSize:8},children:t})}),gi=["> Booting PIXEL SKIN STUDIO v1.0...","> Loading palette.dat ........... OK","> Mounting /skins ............... OK","> Loading presets/face .......... OK","> Loading presets/hair .......... OK","> Loading presets/wardrobe ...... OK","> Calibrating 64x64 atlas ....... OK","> Ready."],Ub=({onDone:t})=>{var o,l;const[e,n]=Ee.useState(0),[i,r]=Ee.useState(0),[s,a]=Ee.useState(!1);return Ee.useEffect(()=>{if(s)return;if(e>=gi.length){a(!0);const h=setTimeout(()=>t(),750);return()=>clearTimeout(h)}const c=gi[e];if(i>=c.length){const h=setTimeout(()=>{n(d=>d+1),r(0)},90);return()=>clearTimeout(h)}const f=setTimeout(()=>r(h=>h+1),14);return()=>clearTimeout(f)},[i,e,s,t]),p.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"radial-gradient(ellipse at center, #2A2138 0%, #1B1424 70%, #0c0712 100%)",opacity:s?0:1,transition:"opacity .4s ease-in",pointerEvents:s?"none":"auto"},children:[p.jsx("div",{className:"w-[640px] max-w-[92vw]",children:p.jsxs("div",{className:"pixel-window",children:[p.jsxs("div",{className:"pixel-title-bar",children:[p.jsx("span",{className:"stripes"}),p.jsx("span",{children:"PIXEL SKIN STUDIO"}),p.jsx("span",{className:"ml-auto animate-blink",children:"|"})]}),p.jsxs("div",{className:"p-6 font-body text-[18px] leading-tight min-h-[260px]",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[p.jsx(Fb,{}),p.jsxs("div",{children:[p.jsx("div",{className:"pixel-text text-[14px] mb-1",children:"WELCOME, CREATOR"}),p.jsx("div",{className:"text-ink-soft",children:"Initializing your pixel studio..."})]})]}),p.jsxs("div",{className:"text-ink",children:[gi.slice(0,e).map((c,f)=>p.jsx("div",{children:c},f)),e<gi.length&&p.jsxs("div",{children:[gi[e].slice(0,i),p.jsx("span",{className:"animate-blink",children:"_"})]})]})]}),p.jsxs("div",{className:"px-4 py-2 flex items-center gap-2 border-t-[3px] border-ink",children:[p.jsx("div",{className:"h-3 flex-1 bg-bg-desk2 border-2 border-ink overflow-hidden",children:p.jsx("div",{className:"h-full bg-accent-yellow transition-all",style:{width:`${Math.min(100,(e+i/Math.max(1,((o=gi[e])==null?void 0:o.length)??1))/gi.length*100)}%`}})}),p.jsxs("span",{className:"pixel-text-sm text-ink",children:[s?"READY":Math.floor((e+i/Math.max(1,((l=gi[e])==null?void 0:l.length)??1))/gi.length*100),"%"]})]})]})}),p.jsx("div",{className:"crt-overlay"})]})},Fb=()=>p.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 16 16",className:"float-anim",shapeRendering:"crispEdges",children:[p.jsx("rect",{x:"1",y:"1",width:"14",height:"14",fill:"#D54B4B"}),p.jsx("rect",{x:"3",y:"2",width:"10",height:"4",fill:"#F7E6CF"}),p.jsx("rect",{x:"5",y:"3",width:"2",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"9",y:"3",width:"2",height:"2",fill:"#2A2138"}),p.jsx("rect",{x:"3",y:"8",width:"10",height:"6",fill:"#F7E6CF"}),p.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:"#B07B47"}),p.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#B07B47"}),p.jsx("rect",{x:"1",y:"1",width:"14",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"1",y:"14",width:"14",height:"1",fill:"#2A2138"}),p.jsx("rect",{x:"1",y:"1",width:"1",height:"14",fill:"#2A2138"}),p.jsx("rect",{x:"14",y:"1",width:"1",height:"14",fill:"#2A2138"})]});let Ob=1;const Df=bd(t=>({items:[],show:e=>{const n=Ob++;t(i=>({items:[...i.items,{id:n,message:e}]})),setTimeout(()=>{t(i=>({items:i.items.filter(r=>r.id!==n)}))},2400)},dismiss:e=>t(n=>({items:n.items.filter(i=>i.id!==e)}))})),kb=()=>({show:Df(e=>e.show)}),Bb=()=>{const t=Df(n=>n.items),e=Df(n=>n.dismiss);return Ee.useEffect(()=>{},[t]),p.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center pointer-events-none",children:t.map(n=>p.jsx("div",{className:"pixel-window slide-in-up pointer-events-auto",style:{background:"#F5C04A"},children:p.jsxs("div",{className:"px-4 py-2 flex items-center gap-3",children:[p.jsx("span",{className:"pixel-text-sm",children:n.message}),p.jsx("button",{className:"pixel-text-sm hover:underline",onClick:()=>e(n.id),children:"X"})]})},n.id))})},zb=()=>{const[t,e]=Ee.useState({name:"home"}),[n,i]=Ee.useState(!1),r=Pr(a=>a.hydrate),s=kb();return Ee.useEffect(()=>{r()},[r]),p.jsxs("div",{className:"relative h-full w-full overflow-hidden",children:[!n&&p.jsx(Ub,{onDone:()=>i(!0)}),p.jsxs("div",{className:"h-full w-full",style:{opacity:n?1:0,transition:"opacity .25s ease-out .05s"},children:[t.name==="home"&&p.jsx(WA,{onNew:()=>e({name:"editor"}),onEdit:a=>e({name:"editor",editId:a})}),t.name==="editor"&&p.jsx(Db,{editId:t.editId,onExit:()=>e({name:"home"}),onSaved:a=>{s.show(`Saved "${a}" to your project floppy.`)}})]}),p.jsx(Bb,{})]})};Tu.createRoot(document.getElementById("root")).render(p.jsx(Zm.StrictMode,{children:p.jsx(zb,{})}));export{Cb as P,lb as b,li as c,Ot as g,$x as t};
