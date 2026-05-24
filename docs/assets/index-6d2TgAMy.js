var _0=Object.defineProperty;var y0=(t,e,n)=>e in t?_0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yf=(t,e,n)=>y0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Qm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jm={exports:{}},Xl={},eg={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),S0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),A0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),$f=Symbol.iterator;function L0(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function qs(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rg(){}rg.prototype=qs.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}var Od=Fd.prototype=new rg;Od.constructor=Fd;ng(Od,qs.prototype);Od.isPureReactComponent=!0;var qf=Array.isArray,sg=Object.prototype.hasOwnProperty,kd={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:kd.current}}function N0(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function D0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D0(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case S0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ec(a,0):i,qf(r)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),nl(r,e,n,"",function(c){return c})):r!=null&&(Bd(r)&&(r=N0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",qf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ec(s,o);a+=nl(s,e,n,l,r)}else if(l=L0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,o++),a+=nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function uo(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function I0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},il={transition:null},U0={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:il,ReactCurrentOwner:kd};function lg(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=qs;Ve.Fragment=E0;Ve.Profiler=w0;Ve.PureComponent=Fd;Ve.StrictMode=M0;Ve.Suspense=C0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;Ve.act=lg;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ng({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)sg.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:b0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T0,_context:t},t.Consumer=t};Ve.createElement=og;Ve.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:A0,render:t}};Ve.isValidElement=Bd;Ve.lazy=function(t){return{$$typeof:P0,_payload:{_status:-1,_result:t},_init:I0}};Ve.memo=function(t,e){return{$$typeof:R0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};Ve.unstable_act=lg;Ve.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ve.useContext=function(t){return rn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ve.useId=function(){return rn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ve.useRef=function(t){return rn.current.useRef(t)};Ve.useState=function(t){return rn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return rn.current.useTransition()};Ve.version="18.3.1";eg.exports=Ve;var ge=eg.exports;const cg=Qm(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=ge,O0=Symbol.for("react.element"),k0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,z0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)B0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O0,type:t,key:s,ref:a,props:r,_owner:z0.current}}Xl.Fragment=k0;Xl.jsx=ug;Xl.jsxs=ug;Jm.exports=Xl;var u=Jm.exports,Lu={},dg={exports:{}},Sn={},fg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,k){var j=U.length;U.push(k);e:for(;0<j;){var P=j-1>>>1,z=U[P];if(0<r(z,k))U[P]=k,U[j]=z,j=P;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],j=U.pop();if(j!==k){U[0]=j;e:for(var P=0,z=U.length,re=z>>>1;P<re;){var oe=2*(P+1)-1,me=U[oe],ye=oe+1,Me=U[ye];if(0>r(me,j))ye<z&&0>r(Me,me)?(U[P]=Me,U[ye]=j,P=ye):(U[P]=me,U[oe]=j,P=oe);else if(ye<z&&0>r(Me,j))U[P]=Me,U[ye]=j,P=ye;else break e}}return k}function r(U,k){var j=U.sortIndex-k.sortIndex;return j!==0?j:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,d=3,m=!1,x=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=U)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function E(U){if(S=!1,v(U),!x)if(n(l)!==null)x=!0,N(M);else{var k=n(c);k!==null&&I(E,k.startTime-U)}}function M(U,k){x=!1,S&&(S=!1,f(F),F=-1),m=!0;var j=d;try{for(v(k),p=n(l);p!==null&&(!(p.expirationTime>k)||U&&!K());){var P=p.callback;if(typeof P=="function"){p.callback=null,d=p.priorityLevel;var z=P(p.expirationTime<=k);k=t.unstable_now(),typeof z=="function"?p.callback=z:p===n(l)&&i(l),v(k)}else i(l);p=n(l)}if(p!==null)var re=!0;else{var oe=n(c);oe!==null&&I(E,oe.startTime-k),re=!1}return re}finally{p=null,d=j,m=!1}}var R=!1,T=null,F=-1,y=5,b=-1;function K(){return!(t.unstable_now()-b<y)}function Z(){if(T!==null){var U=t.unstable_now();b=U;var k=!0;try{k=T(!0,U)}finally{k?H():(R=!1,T=null)}}else R=!1}var H;if(typeof _=="function")H=function(){_(Z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,A=Y.port2;Y.port1.onmessage=Z,H=function(){A.postMessage(null)}}else H=function(){g(Z,0)};function N(U){T=U,R||(R=!0,H())}function I(U,k){F=g(function(){U(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,N(M))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var j=d;d=k;try{return U()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=d;d=U;try{return k()}finally{d=j}},t.unstable_scheduleCallback=function(U,k,j){var P=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?P+j:P):j=P,U){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=j+z,U={id:h++,callback:k,priorityLevel:U,startTime:j,expirationTime:z,sortIndex:-1},j>P?(U.sortIndex=j,e(c,U),n(l)===null&&U===n(c)&&(S?(f(F),F=-1):S=!0,I(E,j-P))):(U.sortIndex=z,e(l,U),x||m||(x=!0,N(M))),U},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(U){var k=d;return function(){var j=d;d=k;try{return U.apply(this,arguments)}finally{d=j}}}})(hg);fg.exports=hg;var H0=fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=ge,yn=H0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,Ua={};function Br(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ua[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},Qf={};function W0(t){return Nu.call(Qf,t)?!0:Nu.call(Zf,t)?!1:G0.test(t)?Qf[t]=!0:(Zf[t]=!0,!1)}function X0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y0(t,e,n,i){if(e===null||typeof e>"u"||X0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,jd);Bt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,jd);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,jd);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y0(e,n,r,i)&&(n=null),i||r===null?W0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Mc;function _a(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function $0(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Du:return"Profiler";case Vd:return"StrictMode";case Iu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K0(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=K0(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ou(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function ku(t,e){yg(t,e);var n=sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bu(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bu(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ya(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function Sg(t,e){var n=sr(e.value),i=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,Mg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(t){Z0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ta[e]=Ta[t]})});function wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ta.hasOwnProperty(t)&&Ta[t]?(""+e).trim():e+"px"}function Tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Q0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(Q0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Rs=null,Ps=null;function rh(t){if(t=io(t)){if(typeof Wu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Zl(e),Wu(t.stateNode,t.type,e))}}function bg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function Ag(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function Cg(t,e){return t(e)}function Rg(){}var bc=!1;function Pg(t,e,n){if(bc)return t(e,n);bc=!0;try{return Cg(t,e,n)}finally{bc=!1,(Rs!==null||Ps!==null)&&(Rg(),Ag())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Xu=!1;if(bi)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Xu=!1}function J0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ba=!1,xl=null,_l=!1,Yu=null,e_={onError:function(t){ba=!0,xl=t}};function t_(t,e,n,i,r,s,a,o,l){ba=!1,xl=null,J0.apply(e_,arguments)}function n_(t,e,n,i,r,s,a,o,l){if(t_.apply(this,arguments),ba){if(ba){var c=xl;ba=!1,xl=null}else throw Error(ne(198));_l||(_l=!0,Yu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sh(t){if(zr(t)!==t)throw Error(ne(188))}function i_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sh(r),t;if(s===i)return sh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ng(t){return t=i_(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ig=yn.unstable_scheduleCallback,ah=yn.unstable_cancelCallback,r_=yn.unstable_shouldYield,s_=yn.unstable_requestPaint,xt=yn.unstable_now,a_=yn.unstable_getCurrentPriorityLevel,Yd=yn.unstable_ImmediatePriority,Ug=yn.unstable_UserBlockingPriority,yl=yn.unstable_NormalPriority,o_=yn.unstable_LowPriority,Fg=yn.unstable_IdlePriority,Yl=null,ti=null;function l_(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:d_,c_=Math.log,u_=Math.LN2;function d_(t){return t>>>=0,t===0?32:31-(c_(t)/u_|0)|0}var mo=64,go=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Sa(o):(s&=a,s!==0&&(i=Sa(s)))}else a=n&~r,a!==0?i=Sa(a):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function f_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=f_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function $u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=mo;return mo<<=1,!(mo&4194240)&&(mo=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function p_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bg,qd,zg,jg,Hg,qu=!1,vo=[],$i=null,qi=null,Ki=null,ka=new Map,Ba=new Map,Vi=[],m_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function g_(t,e,n,i,r){switch(e){case"focusin":return $i=ra($i,t,e,n,i,r),!0;case"dragenter":return qi=ra(qi,t,e,n,i,r),!0;case"mouseover":return Ki=ra(Ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ka.set(s,ra(ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ba.set(s,ra(Ba.get(s)||null,t,e,n,i,r)),!0}return!1}function Vg(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lg(n),e!==null){t.blockedOn=e,Hg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=io(n),e!==null&&qd(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){rl(t)&&n.delete(e)}function v_(){qu=!1,$i!==null&&rl($i)&&($i=null),qi!==null&&rl(qi)&&(qi=null),Ki!==null&&rl(Ki)&&(Ki=null),ka.forEach(lh),Ba.forEach(lh)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,qu||(qu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,v_)))}function za(t){function e(r){return sa(r,t)}if(0<vo.length){sa(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&sa($i,t),qi!==null&&sa(qi,t),Ki!==null&&sa(Ki,t),ka.forEach(e),Ba.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Vi.shift()}var Ls=Ni.ReactCurrentBatchConfig,El=!0;function x_(t,e,n,i){var r=Ze,s=Ls.transition;Ls.transition=null;try{Ze=1,Kd(t,e,n,i)}finally{Ze=r,Ls.transition=s}}function __(t,e,n,i){var r=Ze,s=Ls.transition;Ls.transition=null;try{Ze=4,Kd(t,e,n,i)}finally{Ze=r,Ls.transition=s}}function Kd(t,e,n,i){if(El){var r=Ku(t,e,n,i);if(r===null)Oc(t,e,i,Ml,n),oh(t,i);else if(g_(r,t,e,n,i))i.stopPropagation();else if(oh(t,i),e&4&&-1<m_.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&Bg(s),s=Ku(t,e,n,i),s===null&&Oc(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var Ml=null;function Ku(t,e,n,i){if(Ml=null,t=Xd(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case Yd:return 1;case Ug:return 4;case yl:case o_:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Wi=null,Zd=null,sl=null;function Wg(){if(sl)return sl;var t,e=Zd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function ch(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:ch,this.isPropagationStopped=ch,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=En(Ks),no=ht({},Ks,{view:0,detail:0}),y_=En(no),Cc,Rc,aa,$l=ht({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Cc=t.screenX-aa.screenX,Rc=t.screenY-aa.screenY):Rc=Cc=0,aa=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),uh=En($l),S_=ht({},$l,{dataTransfer:0}),E_=En(S_),M_=ht({},no,{relatedTarget:0}),Pc=En(M_),w_=ht({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=En(w_),b_=ht({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A_=En(b_),C_=ht({},Ks,{data:0}),dh=En(C_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L_[t])?!!e[t]:!1}function Jd(){return N_}var D_=ht({},no,{key:function(t){if(t.key){var e=R_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=En(D_),U_=ht({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=En(U_),F_=ht({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),O_=En(F_),k_=ht({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=En(k_),z_=ht({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=En(z_),H_=[9,13,27,32],ef=bi&&"CompositionEvent"in window,Aa=null;bi&&"documentMode"in document&&(Aa=document.documentMode);var V_=bi&&"TextEvent"in window&&!Aa,Xg=bi&&(!ef||Aa&&8<Aa&&11>=Aa),hh=" ",ph=!1;function Yg(t,e){switch(t){case"keyup":return H_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function G_(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(ph=!0,hh);case"textInput":return t=e.data,t===hh&&ph?null:t;default:return null}}function W_(t,e){if(vs)return t==="compositionend"||!ef&&Yg(t,e)?(t=Wg(),sl=Zd=Wi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X_[t.type]:e==="textarea"}function qg(t,e,n,i){bg(i),e=wl(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ca=null,ja=null;function Y_(t){av(t,0)}function ql(t){var e=ys(t);if(_g(e))return t}function $_(t,e){if(t==="change")return e}var Kg=!1;if(bi){var Lc;if(bi){var Nc="oninput"in document;if(!Nc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Nc=typeof gh.oninput=="function"}Lc=Nc}else Lc=!1;Kg=Lc&&(!document.documentMode||9<document.documentMode)}function vh(){Ca&&(Ca.detachEvent("onpropertychange",Zg),ja=Ca=null)}function Zg(t){if(t.propertyName==="value"&&ql(ja)){var e=[];qg(e,ja,t,Xd(t)),Pg(Y_,e)}}function q_(t,e,n){t==="focusin"?(vh(),Ca=e,ja=n,Ca.attachEvent("onpropertychange",Zg)):t==="focusout"&&vh()}function K_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(ja)}function Z_(t,e){if(t==="click")return ql(e)}function Q_(t,e){if(t==="input"||t==="change")return ql(e)}function J_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:J_;function Ha(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _h(t,e){var n=xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ey(t){var e=Jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_h(n,s);var a=_h(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ty=bi&&"documentMode"in document&&11>=document.documentMode,xs=null,Zu=null,Ra=null,Qu=!1;function yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||xs==null||xs!==vl(i)||(i=xs,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ra&&Ha(Ra,i)||(Ra=i,i=wl(Zu,"onSelect"),0<i.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function _o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Dc={},ev={};bi&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Kl(t){if(Dc[t])return Dc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return Dc[t]=e[n];return t}var tv=Kl("animationend"),nv=Kl("animationiteration"),iv=Kl("animationstart"),rv=Kl("transitionend"),sv=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){sv.set(t,e),Br(e,[t])}for(var Ic=0;Ic<Sh.length;Ic++){var Uc=Sh[Ic],ny=Uc.toLowerCase(),iy=Uc[0].toUpperCase()+Uc.slice(1);or(ny,"on"+iy)}or(tv,"onAnimationEnd");or(nv,"onAnimationIteration");or(iv,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(rv,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Eh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,n_(i,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,o,c),s=l}}}if(_l)throw t=Yu,_l=!1,Yu=null,t}function rt(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var i=t+"__bubble";n.has(i)||(ov(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),ov(n,t,i,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[yo]){t[yo]=!0,pg.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,Fc("selectionchange",!1,e))}}function ov(t,e,n,i){switch(Gg(e)){case 1:var r=x_;break;case 4:r=__;break;default:r=Kd}n=r.bind(null,e,n,t),r=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Pg(function(){var c=s,h=Xd(n),p=[];e:{var d=sv.get(t);if(d!==void 0){var m=Qd,x=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":m=I_;break;case"focusin":x="focus",m=Pc;break;case"focusout":x="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=O_;break;case tv:case nv:case iv:m=T_;break;case rv:m=B_;break;case"scroll":m=y_;break;case"wheel":m=j_;break;case"copy":case"cut":case"paste":m=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fh}var S=(e&4)!==0,g=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,v;_!==null;){v=_;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=Oa(_,f),E!=null&&S.push(Ga(_,E,v)))),g)break;_=_.return}0<S.length&&(d=new m(d,x,null,n,h),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Gu&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[Ai]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Er(x):null,x!==null&&(g=zr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(S=uh,E="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=fh,E="onPointerLeave",f="onPointerEnter",_="pointer"),g=m==null?d:ys(m),v=x==null?d:ys(x),d=new S(E,_+"leave",m,n,h),d.target=g,d.relatedTarget=v,E=null,Er(h)===c&&(S=new S(f,_+"enter",x,n,h),S.target=v,S.relatedTarget=g,E=S),g=E,m&&x)t:{for(S=m,f=x,_=0,v=S;v;v=Hr(v))_++;for(v=0,E=f;E;E=Hr(E))v++;for(;0<_-v;)S=Hr(S),_--;for(;0<v-_;)f=Hr(f),v--;for(;_--;){if(S===f||f!==null&&S===f.alternate)break t;S=Hr(S),f=Hr(f)}S=null}else S=null;m!==null&&Mh(p,d,m,S,!1),x!==null&&g!==null&&Mh(p,g,x,S,!0)}}e:{if(d=c?ys(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var M=$_;else if(mh(d))if(Kg)M=Q_;else{M=K_;var R=q_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=Z_);if(M&&(M=M(t,c))){qg(p,M,n,h);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Bu(d,"number",d.value)}switch(R=c?ys(c):window,t){case"focusin":(mh(R)||R.contentEditable==="true")&&(xs=R,Zu=c,Ra=null);break;case"focusout":Ra=Zu=xs=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,yh(p,n,h);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":yh(p,n,h)}var T;if(ef)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else vs?Yg(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Xg&&n.locale!=="ko"&&(vs||F!=="onCompositionStart"?F==="onCompositionEnd"&&vs&&(T=Wg()):(Wi=h,Zd="value"in Wi?Wi.value:Wi.textContent,vs=!0)),R=wl(c,F),0<R.length&&(F=new dh(F,t,null,n,h),p.push({event:F,listeners:R}),T?F.data=T:(T=$g(n),T!==null&&(F.data=T)))),(T=V_?G_(t,n):W_(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(h=new dh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=T))}av(p,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Oa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Oa(n,s),l!=null&&a.unshift(Ga(n,l,o))):r||(l=Oa(n,s),l!=null&&a.push(Ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var sy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(sy,`
`).replace(ay,"")}function So(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(ne(425))}function Tl(){}var Ju=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(cy)}:nd;function cy(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);za(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Zs,Wa="__reactProps$"+Zs,Ai="__reactContainer$"+Zs,id="__reactEvents$"+Zs,uy="__reactListeners$"+Zs,dy="__reactHandles$"+Zs;function Er(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bh(t);t!==null;){if(n=t[ei])return n;t=bh(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[ei]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Zl(t){return t[Wa]||null}var rd=[],Ss=-1;function lr(t){return{current:t}}function st(t){0>Ss||(t.current=rd[Ss],rd[Ss]=null,Ss--)}function tt(t,e){Ss++,rd[Ss]=t.current,t.current=e}var ar={},$t=lr(ar),ln=lr(!1),Dr=ar;function Os(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function bl(){st(ln),st($t)}function Ah(t,e,n){if($t.current!==ar)throw Error(ne(168));tt($t,e),tt(ln,n)}function lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,q0(t)||"Unknown",r));return ht({},n,i)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Dr=$t.current,tt($t,t),tt(ln,ln.current),!0}function Ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=lv(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,st(ln),st($t),tt($t,t)):st(ln),tt(ln,n)}var gi=null,Ql=!1,Bc=!1;function cv(t){gi===null?gi=[t]:gi.push(t)}function fy(t){Ql=!0,cv(t)}function cr(){if(!Bc&&gi!==null){Bc=!0;var t=0,e=Ze;try{var n=gi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Ql=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Ig(Yd,cr),r}finally{Ze=e,Bc=!1}}return null}var Es=[],Ms=0,Cl=null,Rl=0,An=[],Cn=0,Ir=null,_i=1,yi="";function vr(t,e){Es[Ms++]=Rl,Es[Ms++]=Cl,Cl=t,Rl=e}function uv(t,e,n){An[Cn++]=_i,An[Cn++]=yi,An[Cn++]=Ir,Ir=t;var i=_i;t=yi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,_i=1<<32-Xn(e)+r|n<<r|i,yi=s+t}else _i=1<<s|n<<r|i,yi=t}function nf(t){t.return!==null&&(vr(t,1),uv(t,1,0))}function rf(t){for(;t===Cl;)Cl=Es[--Ms],Es[Ms]=null,Rl=Es[--Ms],Es[Ms]=null;for(;t===Ir;)Ir=An[--Cn],An[Cn]=null,yi=An[--Cn],An[Cn]=null,_i=An[--Cn],An[Cn]=null}var _n=null,xn=null,ot=!1,Vn=null;function dv(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,xn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:_i,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,xn=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(ot){var e=xn;if(e){var n=e;if(!Rh(t,e)){if(sd(t))throw Error(ne(418));e=Zi(n.nextSibling);var i=_n;e&&Rh(t,e)?dv(i,n):(t.flags=t.flags&-4097|2,ot=!1,_n=t)}}else{if(sd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ot=!1,_n=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Eo(t){if(t!==_n)return!1;if(!ot)return Ph(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=xn)){if(sd(t))throw fv(),Error(ne(418));for(;e;)dv(t,e),e=Zi(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=_n?Zi(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=xn;t;)t=Zi(t.nextSibling)}function ks(){xn=_n=null,ot=!1}function sf(t){Vn===null?Vn=[t]:Vn.push(t)}var hy=Ni.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Mo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function hv(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=tr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,_,v,E){return _===null||_.tag!==6?(_=Xc(v,f.mode,E),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,E){var M=v.type;return M===gs?h(f,_,v.props.children,E,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zi&&Lh(M)===_.type)?(E=r(_,v.props),E.ref=oa(f,_,v),E.return=f,E):(E=hl(v.type,v.key,v.props,null,f.mode,E),E.ref=oa(f,_,v),E.return=f,E)}function c(f,_,v,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Yc(v,f.mode,E),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function h(f,_,v,E,M){return _===null||_.tag!==7?(_=br(v,f.mode,E,M),_.return=f,_):(_=r(_,v),_.return=f,_)}function p(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xc(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fo:return v=hl(_.type,_.key,_.props,null,f.mode,v),v.ref=oa(f,null,_),v.return=f,v;case ms:return _=Yc(_,f.mode,v),_.return=f,_;case zi:var E=_._init;return p(f,E(_._payload),v)}if(ya(_)||na(_))return _=br(_,f.mode,v,null),_.return=f,_;Mo(f,_)}return null}function d(f,_,v,E){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:o(f,_,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:return v.key===M?l(f,_,v,E):null;case ms:return v.key===M?c(f,_,v,E):null;case zi:return M=v._init,d(f,_,M(v._payload),E)}if(ya(v)||na(v))return M!==null?null:h(f,_,v,E,null);Mo(f,v)}return null}function m(f,_,v,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,o(_,f,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fo:return f=f.get(E.key===null?v:E.key)||null,l(_,f,E,M);case ms:return f=f.get(E.key===null?v:E.key)||null,c(_,f,E,M);case zi:var R=E._init;return m(f,_,v,R(E._payload),M)}if(ya(E)||na(E))return f=f.get(v)||null,h(_,f,E,M,null);Mo(_,E)}return null}function x(f,_,v,E){for(var M=null,R=null,T=_,F=_=0,y=null;T!==null&&F<v.length;F++){T.index>F?(y=T,T=null):y=T.sibling;var b=d(f,T,v[F],E);if(b===null){T===null&&(T=y);break}t&&T&&b.alternate===null&&e(f,T),_=s(b,_,F),R===null?M=b:R.sibling=b,R=b,T=y}if(F===v.length)return n(f,T),ot&&vr(f,F),M;if(T===null){for(;F<v.length;F++)T=p(f,v[F],E),T!==null&&(_=s(T,_,F),R===null?M=T:R.sibling=T,R=T);return ot&&vr(f,F),M}for(T=i(f,T);F<v.length;F++)y=m(T,f,F,v[F],E),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?F:y.key),_=s(y,_,F),R===null?M=y:R.sibling=y,R=y);return t&&T.forEach(function(K){return e(f,K)}),ot&&vr(f,F),M}function S(f,_,v,E){var M=na(v);if(typeof M!="function")throw Error(ne(150));if(v=M.call(v),v==null)throw Error(ne(151));for(var R=M=null,T=_,F=_=0,y=null,b=v.next();T!==null&&!b.done;F++,b=v.next()){T.index>F?(y=T,T=null):y=T.sibling;var K=d(f,T,b.value,E);if(K===null){T===null&&(T=y);break}t&&T&&K.alternate===null&&e(f,T),_=s(K,_,F),R===null?M=K:R.sibling=K,R=K,T=y}if(b.done)return n(f,T),ot&&vr(f,F),M;if(T===null){for(;!b.done;F++,b=v.next())b=p(f,b.value,E),b!==null&&(_=s(b,_,F),R===null?M=b:R.sibling=b,R=b);return ot&&vr(f,F),M}for(T=i(f,T);!b.done;F++,b=v.next())b=m(T,f,F,b.value,E),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?F:b.key),_=s(b,_,F),R===null?M=b:R.sibling=b,R=b);return t&&T.forEach(function(Z){return e(f,Z)}),ot&&vr(f,F),M}function g(f,_,v,E){if(typeof v=="object"&&v!==null&&v.type===gs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:e:{for(var M=v.key,R=_;R!==null;){if(R.key===M){if(M=v.type,M===gs){if(R.tag===7){n(f,R.sibling),_=r(R,v.props.children),_.return=f,f=_;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zi&&Lh(M)===R.type){n(f,R.sibling),_=r(R,v.props),_.ref=oa(f,R,v),_.return=f,f=_;break e}n(f,R);break}else e(f,R);R=R.sibling}v.type===gs?(_=br(v.props.children,f.mode,E,v.key),_.return=f,f=_):(E=hl(v.type,v.key,v.props,null,f.mode,E),E.ref=oa(f,_,v),E.return=f,f=E)}return a(f);case ms:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Yc(v,f.mode,E),_.return=f,f=_}return a(f);case zi:return R=v._init,g(f,_,R(v._payload),E)}if(ya(v))return x(f,_,v,E);if(na(v))return S(f,_,v,E);Mo(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Xc(v,f.mode,E),_.return=f,f=_),a(f)):n(f,_)}return g}var Bs=hv(!0),pv=hv(!1),Pl=lr(null),Ll=null,ws=null,af=null;function of(){af=ws=Ll=null}function lf(t){var e=Pl.current;st(Pl),t._currentValue=e}function od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Ll=t,af=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Ll===null)throw Error(ne(308));ws=t,Ll.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Mr=null;function cf(t){Mr===null?Mr=[t]:Mr.push(t)}function mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$d(t,n)}}function Nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(d=e,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){p=x.call(m,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,d=typeof x=="function"?x.call(m,p,d):x,d==null)break e;p=ht({},p,d);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=p}}function Dh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ro={},ni=lr(ro),Xa=lr(ro),Ya=lr(ro);function wr(t){if(t===ro)throw Error(ne(174));return t}function df(t,e){switch(tt(Ya,e),tt(Xa,t),tt(ni,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}st(ni),tt(ni,e)}function zs(){st(ni),st(Xa),st(Ya)}function vv(t){wr(Ya.current);var e=wr(ni.current),n=ju(e,t.type);e!==n&&(tt(Xa,t),tt(ni,n))}function ff(t){Xa.current===t&&(st(ni),st(Xa))}var ut=lr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function hf(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var ll=Ni.ReactCurrentDispatcher,jc=Ni.ReactCurrentBatchConfig,Ur=0,ft=null,At=null,Dt=null,Il=!1,Pa=!1,$a=0,py=0;function zt(){throw Error(ne(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(Ur=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?xy:_y,t=n(i,r),Pa){s=0;do{if(Pa=!1,$a=0,25<=s)throw Error(ne(301));s+=1,Dt=At=null,e.updateQueue=null,ll.current=yy,t=n(i,r)}while(Pa)}if(ll.current=Ul,e=At!==null&&At.next!==null,Ur=0,Dt=At=ft=null,Il=!1,e)throw Error(ne(300));return t}function gf(){var t=$a!==0;return $a=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ft.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?ft.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?ft.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function qa(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,ft.lanes|=h,Fr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);qn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xv(){}function _v(t,e){var n=ft,i=Un(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,vf(Ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,Sv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ne(349));Ur&30||yv(n,e,r)}return r}function yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sv(t,e,n,i){e.value=n,e.getSnapshot=i,Mv(e)&&wv(t)}function Ev(t,e,n){return n(function(){Mv(e)&&wv(t)})}function Mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function wv(t){var e=Ci(t,1);e!==null&&Yn(e,t,1,-1)}function Ih(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=vy.bind(null,ft,t),[e.memoizedState,t]}function Ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Tv(){return Un().memoizedState}function cl(t,e,n,i){var r=Qn();ft.flags|=t,r.memoizedState=Ka(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&pf(i,a.deps)){r.memoizedState=Ka(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ka(1|e,n,s,i)}function Uh(t,e){return cl(8390656,8,t,e)}function vf(t,e){return Jl(2048,8,t,e)}function bv(t,e){return Jl(4,2,t,e)}function Av(t,e){return Jl(4,4,t,e)}function Cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rv(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,Cv.bind(null,e,t),n)}function xf(){}function Pv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Nv(t,e,n){return Ur&21?(qn(n,e)||(n=Og(),ft.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function my(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{Ze=n,jc.transition=i}}function Dv(){return Un().memoizedState}function gy(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iv(t))Uv(e,n);else if(n=mv(t,e,n,i),n!==null){var r=nn();Yn(n,t,i,r),Fv(n,e,i)}}function vy(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iv(t))Uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,qn(o,a)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mv(t,e,r,i),n!==null&&(r=nn(),Yn(n,t,i,r),Fv(n,e,i))}}function Iv(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Uv(t,e){Pa=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$d(t,n)}}var Ul={readContext:In,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},xy={readContext:In,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,Cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=gy.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Ih,useDebugValue:xf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Ih(!1),e=t[0];return t=my.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Qn();if(ot){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),It===null)throw Error(ne(349));Ur&30||yv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Uh(Ev.bind(null,i,s,t),[t]),i.flags|=2048,Ka(9,Sv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=It.identifierPrefix;if(ot){var n=yi,i=_i;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=py++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_y={readContext:In,useCallback:Pv,useContext:In,useEffect:vf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:Av,useMemo:Lv,useReducer:Hc,useRef:Tv,useState:function(){return Hc(qa)},useDebugValue:xf,useDeferredValue:function(t){var e=Un();return Nv(e,At.memoizedState,t)},useTransition:function(){var t=Hc(qa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1},yy={readContext:In,useCallback:Pv,useContext:In,useEffect:vf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:Av,useMemo:Lv,useReducer:Vc,useRef:Tv,useState:function(){return Vc(qa)},useDebugValue:xf,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:Nv(e,At.memoizedState,t)},useTransition:function(){var t=Vc(qa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=er(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Yn(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=er(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Yn(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=er(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(Yn(e,t,i,n),ol(e,t,i))}};function Fh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,i)||!Ha(r,s):!0}function Ov(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=cn(e)?Dr:$t.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=cn(e)?Dr:$t.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=$0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sy=typeof WeakMap=="function"?WeakMap:Map;function kv(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,yd=i),ud(t,e)},n}function Bv(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Uy.bind(null,t,e,n),e.then(t,t))}function Bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var Ey=Ni.ReactCurrentOwner,on=!1;function en(t,e,n,i){e.child=t===null?pv(e,null,n,i):Bs(e,t.child,n,i)}function jh(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ot&&n&&nf(e),e.flags|=1,en(t,e,i,r),e.child)}function Hh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zv(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(a,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ha(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return dd(t,e,n,i,r)}function jv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(bs,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(bs,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(bs,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(bs,gn),gn|=i;return en(t,e,r,n),e.child}function Hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,i,r){var s=cn(n)?Dr:$t.current;return s=Os(e,s),Ns(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ot&&i&&nf(e),e.flags|=1,en(t,e,n,r),e.child)}function Vh(t,e,n,i,r){if(cn(n)){var s=!0;Al(e)}else s=!1;if(Ns(e,r),e.stateNode===null)ul(t,e),Ov(e,n,i),cd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=cn(n)?Dr:$t.current,c=Os(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Oh(e,a,i,c),ji=!1;var d=e.memoizedState;a.state=d,Nl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||ln.current||ji?(typeof h=="function"&&(ld(e,n,h,i),l=e.memoizedState),(o=ji||Fh(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,gv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=cn(n)?Dr:$t.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Oh(e,a,i,l),ji=!1,d=e.memoizedState,a.state=d,Nl(e,i,a,r);var x=e.memoizedState;o!==p||d!==x||ln.current||ji?(typeof m=="function"&&(ld(e,n,m,i),x=e.memoizedState),(c=ji||Fh(e,n,c,i,d,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return fd(t,e,n,i,s,r)}function fd(t,e,n,i,r,s){Hv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ch(e,n,!1),Ri(t,e,s);i=e.stateNode,Ey.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&Ch(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?Ah(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ah(t,e.context,!1),df(t,e.containerInfo)}function Gh(t,e,n,i,r){return ks(),sf(r),e.flags|=256,en(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gv(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ut,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ic(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=hd,t):_f(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return My(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=tr(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?pd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _f(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wo(t,e,n,i){return i!==null&&sf(i),Bs(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function My(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(ne(422))),wo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,a),e.child.memoizedState=pd(a),e.memoizedState=hd,s);if(!(e.mode&1))return wo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Gc(s,i,void 0),wo(t,e,a,i)}if(o=(a&t.childLanes)!==0,on||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Yn(i,t,r,-1))}return Tf(),i=Gc(Error(ne(421))),wo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=Zi(r.nextSibling),_n=e,ot=!0,Vn=null,t!==null&&(An[Cn++]=_i,An[Cn++]=yi,An[Cn++]=Ir,_i=t.id,yi=t.overflow,Ir=e),e=_f(e,i.children),e.flags|=4096,e)}function Wh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),od(t.return,e,n)}function Wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,n,e);else if(t.tag===19)Wh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wy(t,e,n){switch(e.tag){case 3:Vv(e),ks();break;case 5:vv(e);break;case 1:cn(e.type)&&Al(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Gv(t,e,n):(tt(ut,ut.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,jv(t,e,n)}return Ri(t,e,n)}var Xv,md,Yv,$v;Xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};Yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ni.current);var s=null;switch(n){case"input":r=Ou(t,r),i=Ou(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=zu(t,r),i=zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}Hu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$v=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ty(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return cn(e.type)&&bl(),jt(e),null;case 3:return i=e.stateNode,zs(),st(ln),st($t),hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Md(Vn),Vn=null))),md(t,e),jt(e),null;case 5:ff(e);var r=wr(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)Yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(t=wr(ni.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)rt(Ea[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":eh(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":nh(i,s),rt("invalid",i)}Hu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&So(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&So(i.textContent,o,t),r=["children",""+o]):Ua.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":ho(i),th(i,s,!0);break;case"textarea":ho(i),ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ei]=e,t[Wa]=i,Xv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Vu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)rt(Ea[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":eh(t,i),r=Ou(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":nh(t,i),r=zu(t,i),rt("invalid",t);break;default:r=i}Hu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Tg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(t,l):typeof l=="number"&&Fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Hd(t,s,l,a))}switch(n){case"input":ho(t),th(t,i,!1);break;case"textarea":ho(t),ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)$v(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=wr(Ya.current),wr(ni.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:So(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&So(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return jt(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&xn!==null&&e.mode&1&&!(e.flags&128))fv(),ks(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ei]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Vn!==null&&(Md(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Ct===0&&(Ct=3):Tf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return zs(),md(t,e),t===null&&Va(e.stateNode.containerInfo),jt(e),null;case 10:return lf(e.type._context),jt(e),null;case 17:return cn(e.type)&&bl(),jt(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Dl(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Hs&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ot)return jt(e),null}else 2*xt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ut.current,tt(ut,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function by(t,e){switch(rf(e),e.tag){case 1:return cn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),st(ln),st($t),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return zs(),null;case 10:return lf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var To=!1,Wt=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function gd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Xh=!1;function Cy(t,e){if(Ju=El,t=Jg(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},El=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,g=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:zn(e.type,S),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Xh,Xh=!1,x}function La(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gd(e,n,s)}r=r.next}while(r!==i)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Wa],delete e[id],delete e[uy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Ft=null,Hn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Wt||Ts(n,e);case 6:var i=Ft,r=Hn;Ft=null,Ii(t,e,n),Ft=i,Hn=r,Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),za(t)):kc(Ft,n.stateNode));break;case 4:i=Ft,r=Hn,Ft=n.stateNode.containerInfo,Hn=!0,Ii(t,e,n),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gd(n,e,a),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Wt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ii(t,e,n),Wt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function $h(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ay),e.forEach(function(i){var r=Oy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,Hn=!1;break e;case 3:Ft=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ft===null)throw Error(ne(160));Zv(s,a,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Zn(t),i&4){try{La(3,t,t.return),tc(3,t)}catch(S){mt(t,t.return,S)}try{La(5,t,t.return)}catch(S){mt(t,t.return,S)}}break;case 1:Fn(e,t),Zn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Fn(e,t),Zn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Fa(r,"")}catch(S){mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&yg(r,s),Vu(o,a);var c=Vu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Tg(r,p):h==="dangerouslySetInnerHTML"?Mg(r,p):h==="children"?Fa(r,p):Hd(r,h,p,c)}switch(o){case"input":ku(r,s);break;case"textarea":Sg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(S){mt(t,t.return,S)}}break;case 6:if(Fn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){mt(t,t.return,S)}}break;case 3:if(Fn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(S){mt(t,t.return,S)}break;case 4:Fn(e,t),Zn(t);break;case 13:Fn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ef=xt())),i&4&&$h(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||h,Fn(e,t),Wt=c):Fn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ve=t,h=t.child;h!==null;){for(p=ve=h;ve!==null;){switch(d=ve,m=d.child,d.tag){case 0:case 11:case 14:case 15:La(4,d,d.return);break;case 1:Ts(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){mt(i,n,S)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){Kh(p);continue}}m!==null?(m.return=d,ve=m):Kh(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=wg("display",a))}catch(S){mt(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){mt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),Zn(t),i&4&&$h(t);break;case 21:break;default:Fn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var s=Yh(t);_d(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Yh(t);xd(t,o,a);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ry(t,e,n){ve=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||To;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Wt;o=To;var c=Wt;if(To=a,(Wt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Zh(r):l!==null?(l.return=a,ve=l):Zh(r);for(;s!==null;)ve=s,Jv(s),s=s.sibling;ve=r,To=o,Wt=c}qh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):qh(t)}}function qh(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&za(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Wt||e.flags&512&&vd(e)}catch(d){mt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Kh(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Zh(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{vd(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Py=Math.ceil,Fl=Ni.ReactCurrentDispatcher,yf=Ni.ReactCurrentOwner,Dn=Ni.ReactCurrentBatchConfig,$e=0,It=null,Mt=null,kt=0,gn=0,bs=lr(0),Ct=0,Za=null,Fr=0,nc=0,Sf=0,Na=null,an=null,Ef=0,Hs=1/0,mi=null,Ol=!1,yd=null,Ji=null,bo=!1,Xi=null,kl=0,Da=0,Sd=null,dl=-1,fl=0;function nn(){return $e&6?xt():dl!==-1?dl:dl=xt()}function er(t){return t.mode&1?$e&2&&kt!==0?kt&-kt:hy.transition!==null?(fl===0&&(fl=Og()),fl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function Yn(t,e,n,i){if(50<Da)throw Da=0,Sd=null,Error(ne(185));to(t,n,i),(!($e&2)||t!==It)&&(t===It&&(!($e&2)&&(nc|=n),Ct===4&&Gi(t,kt)),un(t,i),n===1&&$e===0&&!(e.mode&1)&&(Hs=xt()+500,Ql&&cr()))}function un(t,e){var n=t.callbackNode;h_(t,e);var i=Sl(t,t===It?kt:0);if(i===0)n!==null&&ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ah(n),e===1)t.tag===0?fy(Qh.bind(null,t)):cv(Qh.bind(null,t)),ly(function(){!($e&6)&&cr()}),n=null;else{switch(kg(i)){case 1:n=Yd;break;case 4:n=Ug;break;case 16:n=yl;break;case 536870912:n=Fg;break;default:n=yl}n=ox(n,ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ex(t,e){if(dl=-1,fl=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Sl(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=$e;$e|=2;var s=nx();(It!==t||kt!==e)&&(mi=null,Hs=xt()+500,Tr(t,e));do try{Dy();break}catch(o){tx(t,o)}while(!0);of(),Fl.current=s,$e=r,Mt!==null?e=0:(It=null,kt=0,e=Ct)}if(e!==0){if(e===2&&(r=$u(t),r!==0&&(i=r,e=Ed(t,r))),e===1)throw n=Za,Tr(t,0),Gi(t,i),un(t,xt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ly(r)&&(e=Bl(t,i),e===2&&(s=$u(t),s!==0&&(i=s,e=Ed(t,s))),e===1))throw n=Za,Tr(t,0),Gi(t,i),un(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:xr(t,an,mi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Ef+500-xt(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nd(xr.bind(null,t,an,mi),e);break}xr(t,an,mi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Py(i/1960))-i,10<i){t.timeoutHandle=nd(xr.bind(null,t,an,mi),i);break}xr(t,an,mi);break;case 5:xr(t,an,mi);break;default:throw Error(ne(329))}}}return un(t,xt()),t.callbackNode===n?ex.bind(null,t):null}function Ed(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=an,an=n,e!==null&&Md(e)),t}function Md(t){an===null?an=t:an.push.apply(an,t)}function Ly(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~Sf,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Qh(t){if($e&6)throw Error(ne(327));Ds();var e=Sl(t,0);if(!(e&1))return un(t,xt()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=$u(t);i!==0&&(e=i,n=Ed(t,i))}if(n===1)throw n=Za,Tr(t,0),Gi(t,e),un(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,an,mi),un(t,xt()),null}function Mf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Hs=xt()+500,Ql&&cr())}}function Or(t){Xi!==null&&Xi.tag===0&&!($e&6)&&Ds();var e=$e;$e|=1;var n=Dn.transition,i=Ze;try{if(Dn.transition=null,Ze=1,t)return t()}finally{Ze=i,Dn.transition=n,$e=e,!($e&6)&&cr()}}function wf(){gn=bs.current,st(bs)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:zs(),st(ln),st($t),hf();break;case 5:ff(i);break;case 4:zs();break;case 13:st(ut);break;case 19:st(ut);break;case 10:lf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(It=t,Mt=t=tr(t.current,null),kt=gn=e,Ct=0,Za=null,Sf=nc=Fr=0,an=Na=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Mr=null}return t}function tx(t,e){do{var n=Mt;try{if(of(),ll.current=Ul,Il){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Il=!1}if(Ur=0,Dt=At=ft=null,Pa=!1,$a=0,yf.current=null,n===null||n.return===null){Ct=1,Za=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Bh(a);if(m!==null){m.flags&=-257,zh(m,a,o,s,e),m.mode&1&&kh(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){kh(s,c,e),Tf();break e}l=Error(ne(426))}}else if(ot&&o.mode&1){var g=Bh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),zh(g,a,o,s,e),sf(js(l,o));break e}}s=l=js(l,o),Ct!==4&&(Ct=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=kv(s,l,e);Nh(s,f);break e;case 1:o=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ji===null||!Ji.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Bv(s,o,e);Nh(s,E);break e}}s=s.return}while(s!==null)}rx(n)}catch(M){e=M,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function nx(){var t=Fl.current;return Fl.current=Ul,t===null?Ul:t}function Tf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Fr&268435455)&&!(nc&268435455)||Gi(It,kt)}function Bl(t,e){var n=$e;$e|=2;var i=nx();(It!==t||kt!==e)&&(mi=null,Tr(t,e));do try{Ny();break}catch(r){tx(t,r)}while(!0);if(of(),$e=n,Fl.current=i,Mt!==null)throw Error(ne(261));return It=null,kt=0,Ct}function Ny(){for(;Mt!==null;)ix(Mt)}function Dy(){for(;Mt!==null&&!r_();)ix(Mt)}function ix(t){var e=ax(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?rx(t):Mt=e,yf.current=null}function rx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=by(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Mt=null;return}}else if(n=Ty(n,e,gn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Ct===0&&(Ct=5)}function xr(t,e,n){var i=Ze,r=Dn.transition;try{Dn.transition=null,Ze=1,Iy(t,e,n,i)}finally{Dn.transition=r,Ze=i}return null}function Iy(t,e,n,i){do Ds();while(Xi!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(p_(t,s),t===It&&(Mt=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,ox(yl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=Ze;Ze=1;var o=$e;$e|=4,yf.current=null,Cy(t,n),Qv(n,t),ey(ed),El=!!Ju,ed=Ju=null,t.current=n,Ry(n),s_(),$e=o,Ze=a,Dn.transition=s}else t.current=n;if(bo&&(bo=!1,Xi=t,kl=r),s=t.pendingLanes,s===0&&(Ji=null),l_(n.stateNode),un(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=yd,yd=null,t;return kl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Sd?Da++:(Da=0,Sd=t):Da=0,cr(),null}function Ds(){if(Xi!==null){var t=kg(kl),e=Dn.transition,n=Ze;try{if(Dn.transition=null,Ze=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,kl=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var h=ve;switch(h.tag){case 0:case 11:case 15:La(8,h,s)}var p=h.child;if(p!==null)p.return=h,ve=p;else for(;ve!==null;){h=ve;var d=h.sibling,m=h.return;if(qv(h),h===c){ve=null;break}if(d!==null){d.return=m,ve=d;break}ve=m}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){a=ve;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ve=v;else e:for(a=_;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tc(9,o)}}catch(M){mt(o,o.return,M)}if(o===a){ve=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,ve=E;break e}ve=o.return}}if($e=r,cr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{Ze=n,Dn.transition=e}}return!1}function Jh(t,e,n){e=js(n,e),e=kv(t,e,1),t=Qi(t,e,1),e=nn(),t!==null&&(to(t,1,e),un(t,e))}function mt(t,e,n){if(t.tag===3)Jh(t,t,n);else for(;e!==null;){if(e.tag===3){Jh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=js(n,t),t=Bv(e,t,1),e=Qi(e,t,1),t=nn(),e!==null&&(to(e,1,t),un(e,t));break}}e=e.return}}function Uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(Ct===4||Ct===3&&(kt&130023424)===kt&&500>xt()-Ef?Tr(t,0):Sf|=n),un(t,e)}function sx(t,e){e===0&&(t.mode&1?(e=go,go<<=1,!(go&130023424)&&(go=4194304)):e=1);var n=nn();t=Ci(t,e),t!==null&&(to(t,e,n),un(t,n))}function Fy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sx(t,n)}function Oy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),sx(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,wy(t,e,n);on=!!(t.flags&131072)}else on=!1,ot&&e.flags&1048576&&uv(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=Os(e,$t.current);Ns(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,cd(e,i,t,n),e=fd(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&nf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=zn(i,t),r){case 0:e=dd(null,e,i,t,n);break e;case 1:e=Vh(null,e,i,t,n);break e;case 11:e=jh(null,e,i,t,n);break e;case 14:e=Hh(null,e,i,zn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Vh(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gv(t,e),Nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ne(423)),e),e=Gh(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ne(424)),e),e=Gh(t,e,i,n,r);break e}else for(xn=Zi(e.stateNode.containerInfo.firstChild),_n=e,ot=!0,Vn=null,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return vv(e),t===null&&ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,td(i,r)?a=null:s!==null&&td(i,s)&&(e.flags|=32),Hv(t,e),en(t,e,a,n),e.child;case 6:return t===null&&ad(e),null;case 13:return Gv(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),jh(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,tt(Pl,i._currentValue),i._currentValue=a,s!==null)if(qn(s.value,a)){if(s.children===r.children&&!ln.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),od(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),od(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=In(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Hh(t,e,i,r,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ul(t,e),e.tag=1,cn(i)?(t=!0,Al(e)):t=!1,Ns(e,n),Ov(e,i,r),cd(e,i,r,n),fd(null,e,i,!0,t,n);case 19:return Wv(t,e,n);case 22:return jv(t,e,n)}throw Error(ne(156,e.tag))};function ox(t,e){return Ig(t,e)}function ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new ky(t,e,n,i)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Wd)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")bf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return br(n.children,r,s,e);case Vd:a=8,r|=8;break;case Du:return t=Nn(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Iu:return t=Nn(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Uu:return t=Nn(19,n,e,r),t.elementType=Uu,t.lanes=s,t;case vg:return ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:a=10;break e;case gg:a=9;break e;case Gd:a=11;break e;case Wd:a=14;break e;case zi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ic(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Af(t,e,n,i,r,s,a,o,l){return t=new zy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function jy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function lx(t){if(!t)return ar;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return lv(t,n,e)}return e}function cx(t,e,n,i,r,s,a,o,l){return t=Af(n,i,!0,t,r,s,a,o,l),t.context=lx(null),n=t.current,i=nn(),r=er(n),s=Mi(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,to(t,r,i),un(t,i),t}function rc(t,e,n,i){var r=e.current,s=nn(),a=er(r);return n=lx(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,a),t!==null&&(Yn(t,r,a,s),ol(t,r,a)),a}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){ep(t,e),(t=t.alternate)&&ep(t,e)}function Hy(){return null}var ux=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}sc.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));rc(t,e,null,null)};sc.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){rc(null,t,null,null)}),e[Ai]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&Vg(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tp(){}function Vy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=cx(e,i,t,0,null,!1,!1,"",tp);return t._reactRootContainer=a,t[Ai]=a.current,Va(t.nodeType===8?t.parentNode:t),Or(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=zl(l);o.call(c)}}var l=Af(t,0,!1,null,null,!1,!1,"",tp);return t._reactRootContainer=l,t[Ai]=l.current,Va(t.nodeType===8?t.parentNode:t),Or(function(){rc(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zl(a);o.call(l)}}rc(e,a,t,r)}else a=Vy(n,e,t,r,i);return zl(a)}Bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&($d(e,n|1),un(e,xt()),!($e&6)&&(Hs=xt()+500,cr()))}break;case 13:Or(function(){var i=Ci(t,1);if(i!==null){var r=nn();Yn(i,t,1,r)}}),Cf(t,1)}};qd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=nn();Yn(e,t,134217728,n)}Cf(t,134217728)}};zg=function(t){if(t.tag===13){var e=er(t),n=Ci(t,e);if(n!==null){var i=nn();Yn(n,t,e,i)}Cf(t,e)}};jg=function(){return Ze};Hg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Wu=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(ne(90));_g(i),ku(i,r)}}}break;case"textarea":Sg(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Cg=Mf;Rg=Or;var Gy={usingClientEntryPoint:!1,Events:[io,ys,Zl,bg,Ag,Mf]},ca={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wy={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Yl=Ao.inject(Wy),ti=Ao}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(ne(200));return jy(t,e,null,n)};Sn.createRoot=function(t,e){if(!Pf(t))throw Error(ne(299));var n=!1,i="",r=ux;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Af(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Va(t.nodeType===8?t.parentNode:t),new Rf(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Or(t)};Sn.hydrate=function(t,e,n){if(!ac(e))throw Error(ne(200));return oc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ux;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=cx(e,null,t,1,n??null,r,!1,s,a),t[Ai]=e.current,Va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sc(e)};Sn.render=function(t,e,n){if(!ac(e))throw Error(ne(200));return oc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(ne(40));return t._reactRootContainer?(Or(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Sn.unstable_batchedUpdates=Mf;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return oc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dx)}catch(t){console.error(t)}}dx(),dg.exports=Sn;var Xy=dg.exports,np=Xy;Lu.createRoot=np.createRoot,Lu.hydrateRoot=np.hydrateRoot;const Yy={},ip=t=>{let e;const n=new Set,i=(h,p)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const m=e;e=p??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(x=>x(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Yy?"ghpages":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},$y=t=>t?ip(t):ip;var fx={exports:{}},hx={},px={exports:{}},mx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=ge;function qy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ky=typeof Object.is=="function"?Object.is:qy,Zy=Vs.useState,Qy=Vs.useEffect,Jy=Vs.useLayoutEffect,eS=Vs.useDebugValue;function tS(t,e){var n=e(),i=Zy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Jy(function(){r.value=n,r.getSnapshot=e,$c(r)&&s({inst:r})},[t,n,e]),Qy(function(){return $c(r)&&s({inst:r}),t(function(){$c(r)&&s({inst:r})})},[t]),eS(n),n}function $c(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ky(t,n)}catch{return!0}}function nS(t,e){return e()}var iS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nS:tS;mx.useSyncExternalStore=Vs.useSyncExternalStore!==void 0?Vs.useSyncExternalStore:iS;px.exports=mx;var rS=px.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=ge,sS=rS;function aS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oS=typeof Object.is=="function"?Object.is:aS,lS=sS.useSyncExternalStore,cS=lc.useRef,uS=lc.useEffect,dS=lc.useMemo,fS=lc.useDebugValue;hx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=cS(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=dS(function(){function l(m){if(!c){if(c=!0,h=m,m=i(m),r!==void 0&&a.hasValue){var x=a.value;if(r(x,m))return p=x}return p=m}if(x=p,oS(h,m))return x;var S=i(m);return r!==void 0&&r(x,S)?(h=m,x):(h=m,p=S)}var c=!1,h,p,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=lS(t,s[0],s[1]);return uS(function(){a.hasValue=!0,a.value=o},[o]),fS(o),o};fx.exports=hx;var hS=fx.exports;const pS=Qm(hS),gx={},{useDebugValue:mS}=cg,{useSyncExternalStoreWithSelector:gS}=pS;let rp=!1;const vS=t=>t;function xS(t,e=vS,n){(gx?"ghpages":void 0)!=="production"&&n&&!rp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),rp=!0);const i=gS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return mS(i),i}const sp=t=>{(gx?"ghpages":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?$y(t):t,n=(i,r)=>xS(e,i,r);return Object.assign(n,e),n},Qs=t=>t?sp(t):sp,vx="pixel-skin-studio:gallery:v2",ap="pixel-skin-studio:gallery:v1",_S=()=>Math.random().toString(36).slice(2,10),Vr=t=>{try{localStorage.setItem(vx,JSON.stringify(t))}catch(e){console.warn("Could not persist gallery (storage full?)",e)}},op=t=>t.filter(e=>!e.id.startsWith("seed-")),Ar=Qs((t,e)=>({skins:[],hydrate:()=>{try{let n=localStorage.getItem(vx);if(!n){const r=localStorage.getItem(ap);if(r){const s=JSON.parse(r);if(Array.isArray(s)){const a=op(s);Vr(a),localStorage.removeItem(ap),t({skins:a});return}}t({skins:[]});return}const i=JSON.parse(n);if(Array.isArray(i)){const r=op(i);r.length!==i.length&&Vr(r),t({skins:r})}}catch{}},save:n=>{const i={...n,id:_S(),createdAt:Date.now()};return t(r=>{const s=[i,...r.skins];return Vr(s),{skins:s}}),i},remove:n=>{t(i=>{const r=i.skins.filter(s=>s.id!==n);return Vr(r),{skins:r}})},rename:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,name:i}:a);return Vr(s),{skins:s}})},update:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,...i}:a);return Vr(s),{skins:s}})}}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="156",Gr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,lp=1,SS=2,xx=1,ES=2,hi=3,ii=0,dn=1,Ln=2,wi=0,Is=1,cp=2,up=3,dp=4,MS=5,ps=100,wS=101,TS=102,fp=103,hp=104,bS=200,AS=201,CS=202,RS=203,_x=204,yx=205,PS=206,LS=207,NS=208,DS=209,IS=210,US=0,FS=1,OS=2,wd=3,kS=4,BS=5,zS=6,jS=7,Sx=0,HS=1,VS=2,nr=0,GS=1,WS=2,XS=3,YS=4,$S=5,Ex=300,Gs=301,Ws=302,jl=303,Td=304,cc=306,bd=1e3,Gn=1001,Ad=1002,dt=1003,pp=1004,qc=1005,Rn=1006,qS=1007,Qa=1008,ir=1009,KS=1010,ZS=1011,Nf=1012,Mx=1013,Yi=1014,Si=1015,Xs=1016,wx=1017,Tx=1018,Cr=1020,QS=1021,Wn=1023,JS=1024,eE=1025,Rr=1026,Ys=1027,tE=1028,bx=1029,nE=1030,Ax=1031,Cx=1033,Kc=33776,Zc=33777,Qc=33778,Jc=33779,mp=35840,gp=35841,vp=35842,xp=35843,iE=36196,_p=37492,yp=37496,Sp=37808,Ep=37809,Mp=37810,wp=37811,Tp=37812,bp=37813,Ap=37814,Cp=37815,Rp=37816,Pp=37817,Lp=37818,Np=37819,Dp=37820,Ip=37821,eu=36492,Up=36494,Fp=36495,rE=36283,Op=36284,kp=36285,Bp=36286,Rx=3e3,Pr=3001,sE=3200,aE=3201,Px=0,oE=1,Lr="",at="srgb",ri="srgb-linear",uc="display-p3",tu=7680,lE=519,cE=512,uE=513,dE=514,fE=515,hE=516,pE=517,mE=518,gE=519,Cd=35044,zp="300 es",Rd=1035,Ei=2e3,Hl=2001;class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Pd=180/Math.PI;function rr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function vE(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function jp(t){return(t&t-1)===0&&t!==0}function Ld(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xE={DEG2RAD:pl};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],m=i[5],x=i[8],S=r[0],g=r[3],f=r[6],_=r[1],v=r[4],E=r[7],M=r[2],R=r[5],T=r[8];return s[0]=a*S+o*_+l*M,s[3]=a*g+o*v+l*R,s[6]=a*f+o*E+l*T,s[1]=c*S+h*_+p*M,s[4]=c*g+h*v+p*R,s[7]=c*f+h*E+p*T,s[2]=d*S+m*_+x*M,s[5]=d*g+m*v+x*R,s[8]=d*f+m*E+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,d=o*l-h*s,m=c*s-a*l,x=n*p+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new ze;function Lx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _E(){const t=Vl("canvas");return t.style.display="block",t}const Hp={};function Ia(t){t in Hp||(Hp[t]=!0,console.warn(t))}function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const yE=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),SE=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function EE(t){return t.convertSRGBToLinear().applyMatrix3(SE)}function ME(t){return t.applyMatrix3(yE).convertLinearToSRGB()}const wE={[ri]:t=>t,[at]:t=>t.convertSRGBToLinear(),[uc]:EE},TE={[ri]:t=>t,[at]:t=>t.convertLinearToSRGB(),[uc]:ME},bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ri},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wE[e],r=TE[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Xr;class Nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=Vl("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class Dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(su(r[a].image)):s.push(su(r[a]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Nx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AE=0;class Xt extends jr{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Rn,a=Qa,o=Wn,l=ir,c=Xt.DEFAULT_ANISOTROPY,h=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=rr(),this.name="",this.source=new Dx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pr?at:Lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Pr:Rx}set encoding(e){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?at:Lr}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ex;Xt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],x=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(m+1)/2,M=(f+1)/2,R=(h+d)/4,T=(p+S)/4,F=(x+g)/4;return v>E&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=T/i):E>M?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=F/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=T/s,r=F/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-x)*(g-x)+(p-S)*(p-S)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(p-S)/_,this.z=(d-h)/_,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?at:Lr),this.texture=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Rn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends CE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ix extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RE extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=S;return}if(p!==S||l!==d||c!==m||h!==x){let g=1-o;const f=l*d+c*m+h*x+p*S,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),R=Math.atan2(M,f*_);g=Math.sin(g*R)/M,o=Math.sin(o*R)/M}const E=o*_;if(l=l*g+d*E,c=c*g+m*E,h=h*g+x*E,p=p*g+S*E,g===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+l*m-c*d,e[n+1]=l*x+h*d+c*p-o*m,e[n+2]=c*x+h*m+o*d-l*p,e[n+3]=h*x-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*p+c*m*x,this._y=c*m*p-d*h*x,this._z=c*h*x+d*m*p,this._w=c*h*p-d*m*x;break;case"YXZ":this._x=d*h*p+c*m*x,this._y=c*m*p-d*h*x,this._z=c*h*x-d*m*p,this._w=c*h*p+d*m*x;break;case"ZXY":this._x=d*h*p-c*m*x,this._y=c*m*p+d*h*x,this._z=c*h*x+d*m*p,this._w=c*h*p-d*m*x;break;case"ZYX":this._x=d*h*p-c*m*x,this._y=c*m*p+d*h*x,this._z=c*h*x-d*m*p,this._w=c*h*p+d*m*x;break;case"YZX":this._x=d*h*p+c*m*x,this._y=c*m*p+d*h*x,this._z=c*h*x-d*m*p,this._w=c*h*p-d*m*x;break;case"XZY":this._x=d*h*p-c*m*x,this._y=c*m*p-d*h*x,this._z=c*h*x+d*m*p,this._w=c*h*p+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,h=l*i+o*n-s*r,p=l*r+s*i-a*n,d=-s*n-a*i-o*r;return this.x=c*l+d*-s+h*-o-p*-a,this.y=h*l+d*-a+p*-s-c*-o,this.z=p*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new B,Vp=new kr;class so{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)li.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else r.boundingBox===null&&r.computeBoundingBox(),Yr.copy(r.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Co.subVectors(this.max,ua),$r.subVectors(e.a,ua),qr.subVectors(e.b,ua),Kr.subVectors(e.c,ua),Ui.subVectors(qr,$r),Fi.subVectors(Kr,qr),fr.subVectors($r,Kr);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-fr.z,fr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,fr.z,0,-fr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-fr.y,fr.x,0];return!ou(n,$r,qr,Kr,Co)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,$r,qr,Kr,Co))?!1:(Ro.crossVectors(Ui,Fi),n=[Ro.x,Ro.y,Ro.z],ou(n,$r,qr,Kr,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new B,new B,new B,new B,new B,new B,new B,new B],li=new B,Yr=new so,$r=new B,qr=new B,Kr=new B,Ui=new B,Fi=new B,fr=new B,ua=new B,Co=new B,Ro=new B,hr=new B;function ou(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const PE=new so,da=new B,lu=new B;class Df{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(lu)),this.expandByPoint(da.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new B,cu=new B,Po=new B,Oi=new B,uu=new B,Lo=new B,du=new B;class Ux{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(cu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Po),o=Oi.dot(this.direction),l=-Oi.dot(Po),c=Oi.lengthSq(),h=Math.abs(1-a*a);let p,d,m,x;if(h>0)if(p=a*l-o,d=a*o-l,x=s*h,p>=0)if(d>=-x)if(d<=x){const S=1/h;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(cu).addScaledVector(Po,d),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){uu.subVectors(n,e),Lo.subVectors(i,e),du.crossVectors(uu,Lo);let a=this.direction.dot(du),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Lo.crossVectors(Oi,Lo));if(l<0)return null;const c=o*this.direction.dot(uu.cross(Oi));if(c<0||l+c>a)return null;const h=-o*Oi.dot(du);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,a,o,l,c,h,p,d,m,x,S,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,d,m,x,S,g)}set(e,n,i,r,s,a,o,l,c,h,p,d,m,x,S,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=x,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,x=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+x*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,x=c*h,S=c*p;n[0]=d+S*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,x=c*h,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*p,x=o*h,S=o*p;n[0]=l*h,n[4]=x*c-m,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=S-d*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+x,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=d*p+S,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,NE)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ki.crossVectors(i,pn),ki.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ki.crossVectors(i,pn)),ki.normalize(),No.crossVectors(pn,ki),r[0]=ki.x,r[4]=No.x,r[8]=pn.x,r[1]=ki.y,r[5]=No.y,r[9]=pn.y,r[2]=ki.z,r[6]=No.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],m=i[13],x=i[2],S=i[6],g=i[10],f=i[14],_=i[3],v=i[7],E=i[11],M=i[15],R=r[0],T=r[4],F=r[8],y=r[12],b=r[1],K=r[5],Z=r[9],H=r[13],Y=r[2],A=r[6],N=r[10],I=r[14],U=r[3],k=r[7],j=r[11],P=r[15];return s[0]=a*R+o*b+l*Y+c*U,s[4]=a*T+o*K+l*A+c*k,s[8]=a*F+o*Z+l*N+c*j,s[12]=a*y+o*H+l*I+c*P,s[1]=h*R+p*b+d*Y+m*U,s[5]=h*T+p*K+d*A+m*k,s[9]=h*F+p*Z+d*N+m*j,s[13]=h*y+p*H+d*I+m*P,s[2]=x*R+S*b+g*Y+f*U,s[6]=x*T+S*K+g*A+f*k,s[10]=x*F+S*Z+g*N+f*j,s[14]=x*y+S*H+g*I+f*P,s[3]=_*R+v*b+E*Y+M*U,s[7]=_*T+v*K+E*A+M*k,s[11]=_*F+v*Z+E*N+M*j,s[15]=_*y+v*H+E*I+M*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],x=e[3],S=e[7],g=e[11],f=e[15];return x*(+s*l*p-r*c*p-s*o*d+i*c*d+r*o*m-i*l*m)+S*(+n*l*m-n*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*h-i*c*h)+f*(-r*o*h-n*l*p+n*o*d+r*a*p-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],x=e[12],S=e[13],g=e[14],f=e[15],_=p*g*c-S*d*c+S*l*m-o*g*m-p*l*f+o*d*f,v=x*d*c-h*g*c-x*l*m+a*g*m+h*l*f-a*d*f,E=h*S*c-x*p*c+x*o*m-a*S*m-h*o*f+a*p*f,M=x*p*l-h*S*l-x*o*d+a*S*d+h*o*g-a*p*g,R=n*_+i*v+r*E+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=_*T,e[1]=(S*d*s-p*g*s-S*r*m+i*g*m+p*r*f-i*d*f)*T,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*f+i*l*f)*T,e[3]=(p*l*s-o*d*s-p*r*c+i*d*c+o*r*m-i*l*m)*T,e[4]=v*T,e[5]=(h*g*s-x*d*s+x*r*m-n*g*m-h*r*f+n*d*f)*T,e[6]=(x*l*s-a*g*s-x*r*c+n*g*c+a*r*f-n*l*f)*T,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*m+n*l*m)*T,e[8]=E*T,e[9]=(x*p*s-h*S*s-x*i*m+n*S*m+h*i*f-n*p*f)*T,e[10]=(a*S*s-x*o*s+x*i*c-n*S*c-a*i*f+n*o*f)*T,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*m-n*o*m)*T,e[12]=M*T,e[13]=(h*S*r-x*p*r+x*i*d-n*S*d-h*i*g+n*p*g)*T,e[14]=(x*o*r-a*S*r-x*i*l+n*S*l+a*i*g-n*o*g)*T,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*d+n*o*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,d=s*c,m=s*h,x=s*p,S=a*h,g=a*p,f=o*p,_=l*c,v=l*h,E=l*p,M=i.x,R=i.y,T=i.z;return r[0]=(1-(S+f))*M,r[1]=(m+E)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(d+f))*R,r[6]=(g+_)*R,r[7]=0,r[8]=(x+v)*T,r[9]=(g-_)*T,r[10]=(1-(d+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const a=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,h=1/a,p=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ei){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(o===Ei)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Hl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ei){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),d=(n+e)*c,m=(i+r)*h;let x,S;if(o===Ei)x=(a+s)*p,S=-2*p;else if(o===Hl)x=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new B,On=new _t,LE=new B(0,0,0),NE=new B(1,1,1),ki=new B,No=new B,pn=new B,Gp=new _t,Wp=new kr;class dc{constructor(e=0,n=0,i=0,r=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dc.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const Xp=new B,Qr=new kr,ui=new _t,Do=new B,fa=new B,IE=new B,UE=new kr,Yp=new B(1,0,0),$p=new B(0,1,0),qp=new B(0,0,1),FE={type:"added"},OE={type:"removed"};class Yt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new B,n=new dc,i=new kr,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Do.copy(e):Do.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(fa,Do,this.up):ui.lookAt(Do,fa,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(ui),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new B(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,di=new B,fu=new B,fi=new B,Jr=new B,es=new B,Kp=new B,hu=new B,pu=new B,mu=new B;let Io=!1;class Pn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),di.subVectors(i,n),fu.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(di),l=kn.dot(fu),c=di.dot(di),h=di.dot(fu),p=a*c-o*o;if(p===0)return s.set(-2,-1,-1);const d=1/p,m=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi),fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi),l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),di.subVectors(e,n),kn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),hu.subVectors(e,i);const l=Jr.dot(hu),c=es.dot(hu);if(l<=0&&c<=0)return n.copy(i);pu.subVectors(e,r);const h=Jr.dot(pu),p=es.dot(pu);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Jr,a);mu.subVectors(e,s);const m=Jr.dot(mu),x=es.dot(mu);if(x>=0&&m<=x)return n.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(es,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return Kp.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(Kp,o);const f=1/(g+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kE=0;class Js extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Is,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_x,this.blendDst=yx,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tu,this.stencilZFail=tu,this.stencilZPass=tu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=bn.workingColorSpace){return this.r=e,this.g=n,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=bn.workingColorSpace){if(e=vE(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,n=at){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=at){const i=Ox[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return bn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(tn(Vt.r*255,0,255))*65536+Math.round(tn(Vt.g*255,0,255))*256+Math.round(tn(Vt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bn.workingColorSpace){bn.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=bn.workingColorSpace){return bn.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=at){bn.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==at?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=n,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bn),e.getHSL(Uo);const i=nu(Bn.h,Uo.h,n),r=nu(Bn.s,Uo.s,n),s=nu(Bn.l,Uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new qe;qe.NAMES=Ox;class kx extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new B,Fo=new Se;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cd,this.updateRange={offset:0,count:-1},this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fo.fromBufferAttribute(this,n),Fo.applyMatrix3(e),this.setXY(n,Fo.x,Fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bx extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zx extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ti extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BE=0;const wn=new _t,vu=new Yt,ts=new B,mn=new so,ha=new so,Nt=new B;class Di extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lx(e)?zx:Bx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Df);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(mn.min,ha.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,ha.max),mn.expandByPoint(Nt)):(mn.expandByPoint(ha.min),mn.expandByPoint(ha.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Nt.add(ts)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new B,h[b]=new B;const p=new B,d=new B,m=new B,x=new Se,S=new Se,g=new Se,f=new B,_=new B;function v(b,K,Z){p.fromArray(r,b*3),d.fromArray(r,K*3),m.fromArray(r,Z*3),x.fromArray(a,b*2),S.fromArray(a,K*2),g.fromArray(a,Z*2),d.sub(p),m.sub(p),S.sub(x),g.sub(x);const H=1/(S.x*g.y-g.x*S.y);isFinite(H)&&(f.copy(d).multiplyScalar(g.y).addScaledVector(m,-S.y).multiplyScalar(H),_.copy(m).multiplyScalar(S.x).addScaledVector(d,-g.x).multiplyScalar(H),c[b].add(f),c[K].add(f),c[Z].add(f),h[b].add(_),h[K].add(_),h[Z].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,K=E.length;b<K;++b){const Z=E[b],H=Z.start,Y=Z.count;for(let A=H,N=H+Y;A<N;A+=3)v(i[A+0],i[A+1],i[A+2])}const M=new B,R=new B,T=new B,F=new B;function y(b){T.fromArray(s,b*3),F.copy(T);const K=c[b];M.copy(K),M.sub(T.multiplyScalar(T.dot(K))).normalize(),R.crossVectors(F,K);const H=R.dot(h[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=H}for(let b=0,K=E.length;b<K;++b){const Z=E[b],H=Z.start,Y=Z.count;for(let A=H,N=H+Y;A<N;A+=3)y(i[A+0]),y(i[A+1]),y(i[A+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let m=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[m++]}return new $n(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new _t,pr=new Ux,Oo=new Df,Qp=new B,ns=new B,is=new B,rs=new B,xu=new B,ko=new B,Bo=new Se,zo=new Se,jo=new Se,Jp=new B,em=new B,tm=new B,Ho=new B,Vo=new B;class et extends Yt{constructor(e=new Di,n=new kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(xu.fromBufferAttribute(p,e),a?ko.addScaledVector(xu,h):ko.addScaledVector(xu.sub(n),h))}n.add(ko)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Oo.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Oo,Qp)===null||pr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=_,M=v;E<M;E+=3){const R=o.getX(E),T=o.getX(E+1),F=o.getX(E+2);r=Go(this,f,e,i,c,h,p,R,T,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=x,f=S;g<f;g+=3){const _=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=Go(this,a,e,i,c,h,p,_,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=_,M=v;E<M;E+=3){const R=E,T=E+1,F=E+2;r=Go(this,f,e,i,c,h,p,R,T,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=x,f=S;g<f;g+=3){const _=g,v=g+1,E=g+2;r=Go(this,a,e,i,c,h,p,_,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function zE(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vo);return c<n.near||c>n.far?null:{distance:c,point:Vo.clone(),object:t}}function Go(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const h=zE(t,e,n,i,ns,is,rs,Ho);if(h){r&&(Bo.fromBufferAttribute(r,o),zo.fromBufferAttribute(r,l),jo.fromBufferAttribute(r,c),h.uv=Pn.getInterpolation(Ho,ns,is,rs,Bo,zo,jo,new Se)),s&&(Bo.fromBufferAttribute(s,o),zo.fromBufferAttribute(s,l),jo.fromBufferAttribute(s,c),h.uv1=Pn.getInterpolation(Ho,ns,is,rs,Bo,zo,jo,new Se),h.uv2=h.uv1),a&&(Jp.fromBufferAttribute(a,o),em.fromBufferAttribute(a,l),tm.fromBufferAttribute(a,c),h.normal=Pn.getInterpolation(Ho,ns,is,rs,Jp,em,tm,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new B,materialIndex:0};Pn.getNormal(ns,is,rs,p.normal),h.face=p}return h}class vt extends Di{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(h,3)),this.setAttribute("uv",new Ti(p,2));function x(S,g,f,_,v,E,M,R,T,F,y){const b=E/T,K=M/F,Z=E/2,H=M/2,Y=R/2,A=T+1,N=F+1;let I=0,U=0;const k=new B;for(let j=0;j<N;j++){const P=j*K-H;for(let z=0;z<A;z++){const re=z*b-Z;k[S]=re*_,k[g]=P*v,k[f]=Y,c.push(k.x,k.y,k.z),k[S]=0,k[g]=0,k[f]=R>0?1:-1,h.push(k.x,k.y,k.z),p.push(z/T),p.push(1-j/F),I+=1}}for(let j=0;j<F;j++)for(let P=0;P<T;P++){const z=d+P+A*j,re=d+P+A*(j+1),oe=d+(P+1)+A*(j+1),me=d+(P+1)+A*j;l.push(z,re,me),l.push(re,oe,me),U+=6}o.addGroup(m,U,y),m+=U,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function jE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jx(t){return t.getRenderTarget()===null?t.outputColorSpace:ri}const Hx={clone:$s,merge:Jt};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vx extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends Vx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class GE extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new vn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new vn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new vn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new vn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new vn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new vn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Gx extends Xt{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WE extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?at:Lr),this.texture=new Gx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vt(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:wi});s.uniforms.tEquirect.value=n;const a=new et(r,s),o=n.minFilter;return n.minFilter===Qa&&(n.minFilter=Rn),new GE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new B,XE=new B,YE=new ze;class Hi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(XE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YE.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Df,Wo=new B;class If{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],d=r[7],m=r[8],x=r[9],S=r[10],g=r[11],f=r[12],_=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,g-m,E-f).normalize(),i[1].setComponents(l+s,d+c,g+m,E+f).normalize(),i[2].setComponents(l+a,d+h,g+x,E+_).normalize(),i[3].setComponents(l-a,d-h,g-x,E-_).normalize(),i[4].setComponents(l-o,d-p,g-S,E-v).normalize(),n===Ei)i[5].setComponents(l+o,d+p,g+S,E+v).normalize();else if(n===Hl)i[5].setComponents(o,p,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $E(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,d=c.usage,m=t.createBuffer();t.bindBuffer(h,m),t.bufferData(h,p,d),c.onUploadCallback();let x;if(p instanceof Float32Array)x=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=t.SHORT;else if(p instanceof Uint32Array)x=t.UNSIGNED_INT;else if(p instanceof Int32Array)x=t.INT;else if(p instanceof Int8Array)x=t.BYTE;else if(p instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,p){const d=h.array,m=h.updateRange;t.bindBuffer(p,c),m.count===-1?t.bufferSubData(p,0,d):(n?t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,h)):p.version<c.version&&(s(p.buffer,c,h),p.version=c.version)}return{get:a,remove:o,update:l}}class Uf extends Di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,d=n/l,m=[],x=[],S=[],g=[];for(let f=0;f<h;f++){const _=f*d-a;for(let v=0;v<c;v++){const E=v*p-s;x.push(E,-_,0),S.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const v=_+c*f,E=_+c*(f+1),M=_+1+c*(f+1),R=_+1+c*f;m.push(v,E,R),m.push(E,M,R)}this.setIndex(m),this.setAttribute("position",new Ti(x,3)),this.setAttribute("normal",new Ti(S,3)),this.setAttribute("uv",new Ti(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.width,e.height,e.widthSegments,e.heightSegments)}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KE=`#ifdef USE_ALPHAHASH
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
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,oM=`#ifdef USE_BUMPMAP
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gM=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,XM=`struct PhysicalMaterial {
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
}`,YM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iw=`#if defined( USE_POINTS_UV )
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
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
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
#endif`,lw=`#ifdef USE_MORPHTARGETS
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
#endif`,cw=`#ifdef USE_MORPHTARGETS
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
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
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
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lw=`float getShadowMask() {
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
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
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
#endif`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
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
}`,Jw=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,o1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,h1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,x1=`#define TOON
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
}`,_1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,M1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:qE,alphahash_pars_fragment:KE,alphamap_fragment:ZE,alphamap_pars_fragment:QE,alphatest_fragment:JE,alphatest_pars_fragment:eM,aomap_fragment:tM,aomap_pars_fragment:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:dM,color_fragment:fM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:_M,displacementmap_vertex:yM,emissivemap_fragment:SM,emissivemap_pars_fragment:EM,colorspace_fragment:MM,colorspace_pars_fragment:wM,envmap_fragment:TM,envmap_common_pars_fragment:bM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:zM,envmap_vertex:RM,fog_vertex:PM,fog_pars_vertex:LM,fog_fragment:NM,fog_pars_fragment:DM,gradientmap_pars_fragment:IM,lightmap_fragment:UM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:kM,lights_pars_begin:BM,lights_toon_fragment:jM,lights_toon_pars_fragment:HM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:YM,lights_fragment_maps:$M,lights_fragment_end:qM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:JM,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphcolor_vertex:aw,morphnormal_vertex:ow,morphtarget_pars_vertex:lw,morphtarget_vertex:cw,normal_fragment_begin:uw,normal_fragment_maps:dw,normal_pars_fragment:fw,normal_pars_vertex:hw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:xw,iridescence_pars_fragment:_w,opaque_fragment:yw,packing:Sw,premultiplied_alpha_fragment:Ew,project_vertex:Mw,dithering_fragment:ww,dithering_pars_fragment:Tw,roughnessmap_fragment:bw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:Rw,shadowmap_vertex:Pw,shadowmask_pars_fragment:Lw,skinbase_vertex:Nw,skinning_pars_vertex:Dw,skinning_vertex:Iw,skinnormal_vertex:Uw,specularmap_fragment:Fw,specularmap_pars_fragment:Ow,tonemapping_fragment:kw,tonemapping_pars_fragment:Bw,transmission_fragment:zw,transmission_pars_fragment:jw,uv_pars_fragment:Hw,uv_pars_vertex:Vw,uv_vertex:Gw,worldpos_vertex:Ww,background_vert:Xw,background_frag:Yw,backgroundCube_vert:$w,backgroundCube_frag:qw,cube_vert:Kw,cube_frag:Zw,depth_vert:Qw,depth_frag:Jw,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:a1,meshbasic_frag:o1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:u1,meshmatcap_frag:d1,meshnormal_vert:f1,meshnormal_frag:h1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:v1,meshtoon_vert:x1,meshtoon_frag:_1,points_vert:y1,points_frag:S1,shadow_vert:E1,shadow_frag:M1,sprite_vert:w1,sprite_frag:T1},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Jn={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jn.physical={uniforms:Jt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Xo={r:0,b:0,g:0};function b1(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,p=null,d=0,m=null;function x(g,f){let _=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?S(o,l):v&&v.isColor&&(S(v,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cc)?(h===void 0&&(h=new et(new vt(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:$s(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==at,(p!==v||d!==v.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=v,d=v.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new et(new Uf(2,2),new Li({name:"BackgroundMaterial",uniforms:$s(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||d!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=v,d=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function S(g,f){g.getRGB(Xo,jx(t)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),l=f,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,S(o,l)},render:x}}function A1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function p(Y,A,N,I,U){let k=!1;if(a){const j=S(I,N,A);c!==j&&(c=j,m(c.object)),k=f(Y,I,N,U),k&&_(Y,I,N,U)}else{const j=A.wireframe===!0;(c.geometry!==I.id||c.program!==N.id||c.wireframe!==j)&&(c.geometry=I.id,c.program=N.id,c.wireframe=j,k=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,F(Y,A,N,I),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(Y){return i.isWebGL2?t.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function x(Y){return i.isWebGL2?t.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function S(Y,A,N){const I=N.wireframe===!0;let U=o[Y.id];U===void 0&&(U={},o[Y.id]=U);let k=U[A.id];k===void 0&&(k={},U[A.id]=k);let j=k[I];return j===void 0&&(j=g(d()),k[I]=j),j}function g(Y){const A=[],N=[],I=[];for(let U=0;U<r;U++)A[U]=0,N[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:I,object:Y,attributes:{},index:null}}function f(Y,A,N,I){const U=c.attributes,k=A.attributes;let j=0;const P=N.getAttributes();for(const z in P)if(P[z].location>=0){const oe=U[z];let me=k[z];if(me===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(me=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(me=Y.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;j++}return c.attributesNum!==j||c.index!==I}function _(Y,A,N,I){const U={},k=A.attributes;let j=0;const P=N.getAttributes();for(const z in P)if(P[z].location>=0){let oe=k[z];oe===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(oe=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(oe=Y.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),U[z]=me,j++}c.attributes=U,c.attributesNum=j,c.index=I}function v(){const Y=c.newAttributes;for(let A=0,N=Y.length;A<N;A++)Y[A]=0}function E(Y){M(Y,0)}function M(Y,A){const N=c.newAttributes,I=c.enabledAttributes,U=c.attributeDivisors;N[Y]=1,I[Y]===0&&(t.enableVertexAttribArray(Y),I[Y]=1),U[Y]!==A&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,A),U[Y]=A)}function R(){const Y=c.newAttributes,A=c.enabledAttributes;for(let N=0,I=A.length;N<I;N++)A[N]!==Y[N]&&(t.disableVertexAttribArray(N),A[N]=0)}function T(Y,A,N,I,U,k,j){j===!0?t.vertexAttribIPointer(Y,A,N,U,k):t.vertexAttribPointer(Y,A,N,I,U,k)}function F(Y,A,N,I){if(i.isWebGL2===!1&&(Y.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=I.attributes,k=N.getAttributes(),j=A.defaultAttributeValues;for(const P in k){const z=k[P];if(z.location>=0){let re=U[P];if(re===void 0&&(P==="instanceMatrix"&&Y.instanceMatrix&&(re=Y.instanceMatrix),P==="instanceColor"&&Y.instanceColor&&(re=Y.instanceColor)),re!==void 0){const oe=re.normalized,me=re.itemSize,ye=n.get(re);if(ye===void 0)continue;const Me=ye.buffer,we=ye.type,Xe=ye.bytesPerElement,Ut=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||re.gpuType===Mx);if(re.isInterleavedBufferAttribute){const Ue=re.data,G=Ue.stride,wt=re.offset;if(Ue.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)M(z.location+Te,Ue.meshPerAttribute);Y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Te=0;Te<z.locationSize;Te++)E(z.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Te=0;Te<z.locationSize;Te++)T(z.location+Te,me/z.locationSize,we,oe,G*Xe,(wt+me/z.locationSize*Te)*Xe,Ut)}else{if(re.isInstancedBufferAttribute){for(let Ue=0;Ue<z.locationSize;Ue++)M(z.location+Ue,re.meshPerAttribute);Y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)E(z.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ue=0;Ue<z.locationSize;Ue++)T(z.location+Ue,me/z.locationSize,we,oe,me*Xe,me/z.locationSize*Ue*Xe,Ut)}}else if(j!==void 0){const oe=j[P];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(z.location,oe);break;case 3:t.vertexAttrib3fv(z.location,oe);break;case 4:t.vertexAttrib4fv(z.location,oe);break;default:t.vertexAttrib1fv(z.location,oe)}}}}R()}function y(){Z();for(const Y in o){const A=o[Y];for(const N in A){const I=A[N];for(const U in I)x(I[U].object),delete I[U];delete A[N]}delete o[Y]}}function b(Y){if(o[Y.id]===void 0)return;const A=o[Y.id];for(const N in A){const I=A[N];for(const U in I)x(I[U].object),delete I[U];delete A[N]}delete o[Y.id]}function K(Y){for(const A in o){const N=o[A];if(N[Y.id]===void 0)continue;const I=N[Y.id];for(const U in I)x(I[U].object),delete I[U];delete N[Y.id]}}function Z(){H(),h=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:H,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:K,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function C1(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,h){t.drawArrays(s,c,h),n.update(h,s,1)}function l(c,h,p){if(p===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,p),n.update(h,s,p)}this.setMode=a,this.render=o,this.renderInstances=l}function R1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),M=v&&E,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:R}}function P1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const x=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,v=_*4;let E=f.clippingState||null;l.value=E,E=h(x,d,v,m);for(let M=0;M!==v;++M)E[M]=n[M];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,x){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const f=m+S*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,E=m;v!==S;++v,E+=4)a.copy(p[v]).applyMatrix4(_,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function L1(t){let e=new WeakMap;function n(a,o){return o===jl?a.mapping=Gs:o===Td&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===jl||o===Td)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xx extends Vx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,nm=[.125,.215,.35,.446,.526,.582],yr=20,yu=new Xx,im=new qe;let Su=null;const _r=(1+Math.sqrt(5))/2,os=1/_r,rm=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,_r,os),new B(0,_r,-os),new B(os,0,_r),new B(-os,0,_r),new B(_r,os,0),new B(-_r,os,0)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su),e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Xs,format:Wn,colorSpace:ri,depthBuffer:!1},r=am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N1(s)),this._blurMaterial=D1(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,yu)}_sceneToCubeUV(e,n,i,r){const o=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(im),h.toneMapping=nr,h.autoClear=!1;const m=new kx({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new et(new vt,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(im),S=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Yo(r,_*v,f>2?v:0,v,v),h.setRenderTarget(r),S&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rm[(r-1)%rm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new et(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),S=s/x,g=isFinite(s)?1+Math.floor(h*S):yr;g>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const f=[];let _=0;for(let T=0;T<yr;++T){const F=T/S,y=Math.exp(-F*F/2);f.push(y),T===0?_+=y:T<g&&(_+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const E=this._sizeLods[r],M=3*E*(r>v-As?r-v+As:0),R=4*(this._cubeSize-E);Yo(n,M,R,3*E,2*E),l.setRenderTarget(n),l.render(p,yu)}}function N1(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+nm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-As?l=nm[a-t+As-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,S=3,g=2,f=1,_=new Float32Array(S*x*m),v=new Float32Array(g*x*m),E=new Float32Array(f*x*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,F=R>2?0:-1,y=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];_.set(y,S*x*R),v.set(d,g*x*R);const b=[R,R,R,R,R,R];E.set(b,f*x*R)}const M=new Di;M.setAttribute("position",new $n(_,S)),M.setAttribute("uv",new $n(v,g)),M.setAttribute("faceIndex",new $n(E,f)),e.push(M),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function am(t,e,n){const i=new Pi(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function D1(t,e,n){const i=new Float32Array(yr),r=new B(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function om(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lm(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ff(){return`

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
	`}function I1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===jl||l===Td,h=l===Gs||l===Ws;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new sm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new sm(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function U1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function F1(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const S=d.morphAttributes[x];for(let g=0,f=S.length;g<f;g++)e.remove(S[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const x in m){const S=m[x];for(let g=0,f=S.length;g<f;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,x=p.attributes.position;let S=0;if(m!==null){const _=m.array;S=m.version;for(let v=0,E=_.length;v<E;v+=3){const M=_[v+0],R=_[v+1],T=_[v+2];d.push(M,R,R,T,T,M)}}else if(x!==void 0){const _=x.array;S=x.version;for(let v=0,E=_.length/3-1;v<E;v+=3){const M=v+0,R=v+1,T=v+2;d.push(M,R,R,T,T,M)}}else return;const g=new(Lx(d)?zx:Bx)(d,1);g.version=S;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function O1(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){t.drawElements(s,m,o,d*l),n.update(m,s,1)}function p(d,m,x){if(x===0)return;let S,g;if(r)S=t,g="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[g](s,m,o,d*l,x),n.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=p}function k1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e){return t[0]-e[0]}function z1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function j1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==S){let A=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var m=A;g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),E===!0&&(y=2),M===!0&&(y=3);let b=h.attributes.position.count*y,K=1;b>e.maxTextureSize&&(K=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Z=new Float32Array(b*K*4*S),H=new Ix(Z,b,K,S);H.type=Si,H.needsUpdate=!0;const Y=y*4;for(let N=0;N<S;N++){const I=R[N],U=T[N],k=F[N],j=b*K*4*N;for(let P=0;P<I.count;P++){const z=P*Y;v===!0&&(a.fromBufferAttribute(I,P),Z[j+z+0]=a.x,Z[j+z+1]=a.y,Z[j+z+2]=a.z,Z[j+z+3]=0),E===!0&&(a.fromBufferAttribute(U,P),Z[j+z+4]=a.x,Z[j+z+5]=a.y,Z[j+z+6]=a.z,Z[j+z+7]=0),M===!0&&(a.fromBufferAttribute(k,P),Z[j+z+8]=a.x,Z[j+z+9]=a.y,Z[j+z+10]=a.z,Z[j+z+11]=k.itemSize===4?a.w:1)}}g={count:S,texture:H,size:new Se(b,K)},s.set(h,g),h.addEventListener("dispose",A)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const _=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",d),p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=d===void 0?0:d.length;let S=i[h.id];if(S===void 0||S.length!==x){S=[];for(let E=0;E<x;E++)S[E]=[E,0];i[h.id]=S}for(let E=0;E<x;E++){const M=S[E];M[0]=E,M[1]=d[E]}S.sort(z1);for(let E=0;E<8;E++)E<x&&S[E][1]?(o[E][0]=S[E][0],o[E][1]=S[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(B1);const g=h.morphAttributes.position,f=h.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const M=o[E],R=M[0],T=M[1];R!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+E)!==g[R]&&h.setAttribute("morphTarget"+E,g[R]),f&&h.getAttribute("morphNormal"+E)!==f[R]&&h.setAttribute("morphNormal"+E,f[R]),r[E]=T,_+=T):(g&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),f&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const v=h.morphTargetsRelative?1:1-_;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function H1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Yx=new Xt,$x=new Ix,qx=new RE,Kx=new Gx,cm=[],um=[],dm=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function V1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;hm.set(i),t.uniformMatrix2fv(this.addr,!1,hm),Pt(n,i)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;fm.set(i),t.uniformMatrix3fv(this.addr,!1,fm),Pt(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;dm.set(i),t.uniformMatrix4fv(this.addr,!1,dm),Pt(n,i)}}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Yx,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qx,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kx,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$x,r)}function lT(t){switch(t){case 5126:return V1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return Y1;case 35675:return $1;case 35676:return q1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return oT}}function cT(t,e){t.uniform1fv(this.addr,e)}function uT(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function dT(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function fT(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function hT(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pT(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mT(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gT(t,e){t.uniform1iv(this.addr,e)}function vT(t,e){t.uniform2iv(this.addr,e)}function xT(t,e){t.uniform3iv(this.addr,e)}function _T(t,e){t.uniform4iv(this.addr,e)}function yT(t,e){t.uniform1uiv(this.addr,e)}function ST(t,e){t.uniform2uiv(this.addr,e)}function ET(t,e){t.uniform3uiv(this.addr,e)}function MT(t,e){t.uniform4uiv(this.addr,e)}function wT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Yx,s[a])}function TT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||qx,s[a])}function bT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kx,s[a])}function AT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$x,s[a])}function CT(t){switch(t){case 5126:return cT;case 35664:return uT;case 35665:return dT;case 35666:return fT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return _T;case 5125:return yT;case 36294:return ST;case 36295:return ET;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return AT}}class RT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lT(n.type)}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=CT(n.type)}}class LT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function pm(t,e){t.seq.push(e),t.map[e.id]=e}function NT(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),a=Eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pm(n,c===void 0?new RT(o,t,e):new PT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new LT(o),pm(n,p)),n=p}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);NT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let DT=0;function IT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function UT(t){switch(t){case ri:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+IT(t.getShaderSource(e),a)}else return r}function FT(t,e){const n=UT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function OT(t,e){let n;switch(e){case GS:n="Linear";break;case WS:n="Reinhard";break;case XS:n="OptimizedCineon";break;case YS:n="ACESFilmic";break;case $S:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function kT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ma).join(`
`)}function BT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ma(t){return t!==""}function vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(jT,VT)}const HT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VT(t,e){let n=Oe[e];if(n===void 0){const i=HT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(GT,WT)}function WT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $T(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sx:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function KT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=XT(n),c=YT(n),h=$T(n),p=qT(n),d=KT(n),m=n.isWebGL2?"":kT(n),x=BT(s),S=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),g.length>0&&(g+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),f.length>0&&(f+=`
`)):(g=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),f=[m,ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==nr?OT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,FT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Nd(a),a=vm(a,n),a=xm(a,n),o=Nd(o),o=vm(o,n),o=xm(o,n),a=_m(a),o=_m(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+g+a,E=_+f+o,M=mm(r,r.VERTEX_SHADER,v),R=mm(r,r.FRAGMENT_SHADER,E);if(r.attachShader(S,M),r.attachShader(S,R),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),t.debug.checkShaderErrors){const y=r.getProgramInfoLog(S).trim(),b=r.getShaderInfoLog(M).trim(),K=r.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,M,R);else{const Y=gm(r,M,"vertex"),A=gm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+Y+`
`+A)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||K==="")&&(H=!1);H&&(this.diagnostics={runnable:Z,programLog:y,vertexShader:{log:b,prefix:g},fragmentShader:{log:K,prefix:f}})}r.deleteShader(M),r.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new ml(r,S)),T};let F;return this.getAttributes=function(){return F===void 0&&(F=zT(r,S)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=R,this}let QT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eb(e),n.set(e,i)),i}}class eb{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function tb(t,e,n,i,r,s,a){const o=new Fx,l=new JT,c=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return y===0?"uv":`uv${y}`}function g(y,b,K,Z,H){const Y=Z.fog,A=H.geometry,N=y.isMeshStandardMaterial?Z.environment:null,I=(y.isMeshStandardMaterial?n:e).get(y.envMap||N),U=I&&I.mapping===cc?I.image.height:null,k=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,P=j!==void 0?j.length:0;let z=0;A.morphAttributes.position!==void 0&&(z=1),A.morphAttributes.normal!==void 0&&(z=2),A.morphAttributes.color!==void 0&&(z=3);let re,oe,me,ye;if(k){const it=Jn[k];re=it.vertexShader,oe=it.fragmentShader}else re=y.vertexShader,oe=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const Me=t.getRenderTarget(),we=H.isInstancedMesh===!0,Xe=!!y.map,Ut=!!y.matcap,Ue=!!I,G=!!y.aoMap,wt=!!y.lightMap,Te=!!y.bumpMap,De=!!y.normalMap,Ce=!!y.displacementMap,nt=!!y.emissiveMap,Be=!!y.metalnessMap,Ie=!!y.roughnessMap,Ye=y.anisotropy>0,Tt=y.clearcoat>0,Lt=y.iridescence>0,L=y.sheen>0,w=y.transmission>0,X=Ye&&!!y.anisotropyMap,se=Tt&&!!y.clearcoatMap,te=Tt&&!!y.clearcoatNormalMap,ae=Tt&&!!y.clearcoatRoughnessMap,Ee=Lt&&!!y.iridescenceMap,le=Lt&&!!y.iridescenceThicknessMap,$=L&&!!y.sheenColorMap,D=L&&!!y.sheenRoughnessMap,ee=!!y.specularMap,pe=!!y.specularColorMap,ue=!!y.specularIntensityMap,he=w&&!!y.transmissionMap,Le=w&&!!y.thicknessMap,We=!!y.gradientMap,O=!!y.alphaMap,fe=y.alphaTest>0,q=!!y.alphaHash,ie=!!y.extensions,ce=!!A.attributes.uv1,je=!!A.attributes.uv2,Ke=!!A.attributes.uv3;let Je=nr;return y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:h,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:oe,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:we,instancingColor:we&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ri,map:Xe,matcap:Ut,envMap:Ue,envMapMode:Ue&&I.mapping,envMapCubeUVHeight:U,aoMap:G,lightMap:wt,bumpMap:Te,normalMap:De,displacementMap:d&&Ce,emissiveMap:nt,normalMapObjectSpace:De&&y.normalMapType===oE,normalMapTangentSpace:De&&y.normalMapType===Px,metalnessMap:Be,roughnessMap:Ie,anisotropy:Ye,anisotropyMap:X,clearcoat:Tt,clearcoatMap:se,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,iridescence:Lt,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:L,sheenColorMap:$,sheenRoughnessMap:D,specularMap:ee,specularColorMap:pe,specularIntensityMap:ue,transmission:w,transmissionMap:he,thicknessMap:Le,gradientMap:We,opaque:y.transparent===!1&&y.blending===Is,alphaMap:O,alphaTest:fe,alphaHash:q,combine:y.combine,mapUv:Xe&&S(y.map.channel),aoMapUv:G&&S(y.aoMap.channel),lightMapUv:wt&&S(y.lightMap.channel),bumpMapUv:Te&&S(y.bumpMap.channel),normalMapUv:De&&S(y.normalMap.channel),displacementMapUv:Ce&&S(y.displacementMap.channel),emissiveMapUv:nt&&S(y.emissiveMap.channel),metalnessMapUv:Be&&S(y.metalnessMap.channel),roughnessMapUv:Ie&&S(y.roughnessMap.channel),anisotropyMapUv:X&&S(y.anisotropyMap.channel),clearcoatMapUv:se&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:$&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:D&&S(y.sheenRoughnessMap.channel),specularMapUv:ee&&S(y.specularMap.channel),specularColorMapUv:pe&&S(y.specularColorMap.channel),specularIntensityMapUv:ue&&S(y.specularIntensityMap.channel),transmissionMapUv:he&&S(y.transmissionMap.channel),thicknessMapUv:Le&&S(y.thicknessMap.channel),alphaMapUv:O&&S(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(De||Ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:je,vertexUv3s:Ke,pointsUvs:H.isPoints===!0&&!!A.attributes.uv&&(Xe||O),fog:!!Y,useFog:y.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:H.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&K.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&y.map.colorSpace===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ie&&y.extensions.derivatives===!0,extensionFragDepth:ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)b.push(K),b.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(_(b,y),v(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function E(y){const b=x[y.type];let K;if(b){const Z=Jn[b];K=Hx.clone(Z.uniforms)}else K=y.uniforms;return K}function M(y,b){let K;for(let Z=0,H=c.length;Z<H;Z++){const Y=c[Z];if(Y.cacheKey===b){K=Y,++K.usedTimes;break}}return K===void 0&&(K=new ZT(t,b,y,s),c.push(K)),K}function R(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:E,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:F}}function nb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ib(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,d,m,x,S,g){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:m,groupOrder:x,renderOrder:p.renderOrder,z:S,group:g},t[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=m,f.groupOrder=x,f.renderOrder=p.renderOrder,f.z=S,f.group=g),e++,f}function o(p,d,m,x,S,g){const f=a(p,d,m,x,S,g);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(p,d,m,x,S,g){const f=a(p,d,m,x,S,g);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,d){n.length>1&&n.sort(p||ib),i.length>1&&i.sort(d||Sm),r.length>1&&r.sort(d||Sm)}function h(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function rb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Em,t.set(i,[a])):r>=s.length?(a=new Em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new qe};break;case"SpotLight":n={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function ab(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ob=0;function lb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cb(t,e){const n=new sb,i=ab(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,a=new _t,o=new _t;function l(h,p){let d=0,m=0,x=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let S=0,g=0,f=0,_=0,v=0,E=0,M=0,R=0,T=0,F=0;h.sort(lb);const y=p===!0?Math.PI:1;for(let K=0,Z=h.length;K<Z;K++){const H=h[K],Y=H.color,A=H.intensity,N=H.distance,I=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=Y.r*A*y,m+=Y.g*A*y,x+=Y.b*A*y;else if(H.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],A);else if(H.isDirectionalLight){const U=n.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity*y),H.castShadow){const k=H.shadow,j=i.get(H);j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=I,r.directionalShadowMatrix[S]=H.shadow.matrix,E++}r.directional[S]=U,S++}else if(H.isSpotLight){const U=n.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(Y).multiplyScalar(A*y),U.distance=N,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[f]=U;const k=H.shadow;if(H.map&&(r.spotLightMap[T]=H.map,T++,k.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[f]=k.matrix,H.castShadow){const j=i.get(H);j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,r.spotShadow[f]=j,r.spotShadowMap[f]=I,R++}f++}else if(H.isRectAreaLight){const U=n.get(H);U.color.copy(Y).multiplyScalar(A),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=U,_++}else if(H.isPointLight){const U=n.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity*y),U.distance=H.distance,U.decay=H.decay,H.castShadow){const k=H.shadow,j=i.get(H);j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,r.pointShadow[g]=j,r.pointShadowMap[g]=I,r.pointShadowMatrix[g]=H.shadow.matrix,M++}r.point[g]=U,g++}else if(H.isHemisphereLight){const U=n.get(H);U.skyColor.copy(H.color).multiplyScalar(A*y),U.groundColor.copy(H.groundColor).multiplyScalar(A*y),r.hemi[v]=U,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const b=r.hash;(b.directionalLength!==S||b.pointLength!==g||b.spotLength!==f||b.rectAreaLength!==_||b.hemiLength!==v||b.numDirectionalShadows!==E||b.numPointShadows!==M||b.numSpotShadows!==R||b.numSpotMaps!==T)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=_,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+T-F,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=F,b.directionalLength=S,b.pointLength=g,b.spotLength=f,b.rectAreaLength=_,b.hemiLength=v,b.numDirectionalShadows=E,b.numPointShadows=M,b.numSpotShadows=R,b.numSpotMaps=T,r.version=ob++)}function c(h,p){let d=0,m=0,x=0,S=0,g=0;const f=p.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const E=h[_];if(E.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(E.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),x++}else if(E.isRectAreaLight){const M=r.rectArea[S];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:r}}function Mm(t,e){const n=new cb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ub(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Mm(t,e),n.set(s,[l])):a>=o.length?(l=new Mm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class db extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
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
}`;function mb(t,e,n){let i=new If;const r=new Se,s=new Se,a=new lt,o=new db({depthPacking:aE}),l=new fb,c={},h=n.maxTextureSize,p={[ii]:dn,[dn]:ii,[Ln]:Ln},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:hb,fragmentShader:pb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Di;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new et(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xx;let f=this.type;this.render=function(M,R,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const F=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),K=t.state;K.setBlending(wi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Z=f!==hi&&this.type===hi,H=f===hi&&this.type!==hi;for(let Y=0,A=M.length;Y<A;Y++){const N=M[Y],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const U=I.getFrameExtents();if(r.multiply(U),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,I.mapSize.y=s.y)),I.map===null||Z===!0||H===!0){const j=this.type!==hi?{minFilter:dt,magFilter:dt}:{};I.map!==null&&I.map.dispose(),I.map=new Pi(r.x,r.y,j),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const k=I.getViewportCount();for(let j=0;j<k;j++){const P=I.getViewport(j);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),K.viewport(a),I.updateMatrices(N,j),i=I.getFrustum(),E(R,T,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&_(I,T),I.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(F,y,b)};function _(M,R){const T=e.update(S);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Pi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(R,null,T,d,S,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(R,null,T,m,S,null)}function v(M,R,T,F){let y=null;const b=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)y=b;else if(y=T.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=y.uuid,Z=R.uuid;let H=c[K];H===void 0&&(H={},c[K]=H);let Y=H[Z];Y===void 0&&(Y=y.clone(),H[Z]=Y),y=Y}if(y.visible=R.visible,y.wireframe=R.wireframe,F===hi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:p[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=t.properties.get(y);K.light=T}return y}function E(M,R,T,F,y){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===hi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),H=M.material;if(Array.isArray(H)){const Y=Z.groups;for(let A=0,N=Y.length;A<N;A++){const I=Y[A],U=H[I.materialIndex];if(U&&U.visible){const k=v(M,U,F,y);t.renderBufferDirect(T,null,Z,k,M,I)}}}else if(H.visible){const Y=v(M,H,F,y);t.renderBufferDirect(T,null,Z,Y,M,null)}}const K=M.children;for(let Z=0,H=K.length;Z<H;Z++)E(K[Z],R,T,F,y)}}function gb(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const fe=new lt;let q=null;const ie=new lt(0,0,0,0);return{setMask:function(ce){q!==ce&&!O&&(t.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){O=ce},setClear:function(ce,je,Ke,Je,fn){fn===!0&&(ce*=Je,je*=Je,Ke*=Je),fe.set(ce,je,Ke,Je),ie.equals(fe)===!1&&(t.clearColor(ce,je,Ke,Je),ie.copy(fe))},reset:function(){O=!1,q=null,ie.set(-1,0,0,0)}}}function s(){let O=!1,fe=null,q=null,ie=null;return{setTest:function(ce){ce?Me(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ce){fe!==ce&&!O&&(t.depthMask(ce),fe=ce)},setFunc:function(ce){if(q!==ce){switch(ce){case US:t.depthFunc(t.NEVER);break;case FS:t.depthFunc(t.ALWAYS);break;case OS:t.depthFunc(t.LESS);break;case wd:t.depthFunc(t.LEQUAL);break;case kS:t.depthFunc(t.EQUAL);break;case BS:t.depthFunc(t.GEQUAL);break;case zS:t.depthFunc(t.GREATER);break;case jS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=ce}},setLocked:function(ce){O=ce},setClear:function(ce){ie!==ce&&(t.clearDepth(ce),ie=ce)},reset:function(){O=!1,fe=null,q=null,ie=null}}}function a(){let O=!1,fe=null,q=null,ie=null,ce=null,je=null,Ke=null,Je=null,fn=null;return{setTest:function(it){O||(it?Me(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!O&&(t.stencilMask(it),fe=it)},setFunc:function(it,Kn,Kt){(q!==it||ie!==Kn||ce!==Kt)&&(t.stencilFunc(it,Kn,Kt),q=it,ie=Kn,ce=Kt)},setOp:function(it,Kn,Kt){(je!==it||Ke!==Kn||Je!==Kt)&&(t.stencilOp(it,Kn,Kt),je=it,Ke=Kn,Je=Kt)},setLocked:function(it){O=it},setClear:function(it){fn!==it&&(t.clearStencil(it),fn=it)},reset:function(){O=!1,fe=null,q=null,ie=null,ce=null,je=null,Ke=null,Je=null,fn=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,p=new WeakMap;let d={},m={},x=new WeakMap,S=[],g=null,f=!1,_=null,v=null,E=null,M=null,R=null,T=null,F=null,y=!1,b=null,K=null,Z=null,H=null,Y=null;const A=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=I>=1):U.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=I>=2);let k=null,j={};const P=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),re=new lt().fromArray(P),oe=new lt().fromArray(z);function me(O,fe,q,ie){const ce=new Uint8Array(4),je=t.createTexture();t.bindTexture(O,je),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<q;Ke++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(fe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return je}const ye={};ye[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(t.DEPTH_TEST),l.setFunc(wd),Ce(!1),nt(lp),Me(t.CULL_FACE),Te(wi);function Me(O){d[O]!==!0&&(t.enable(O),d[O]=!0)}function we(O){d[O]!==!1&&(t.disable(O),d[O]=!1)}function Xe(O,fe){return m[O]!==fe?(t.bindFramebuffer(O,fe),m[O]=fe,i&&(O===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),O===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function Ut(O,fe){let q=S,ie=!1;if(O)if(q=x.get(fe),q===void 0&&(q=[],x.set(fe,q)),O.isWebGLMultipleRenderTargets){const ce=O.texture;if(q.length!==ce.length||q[0]!==t.COLOR_ATTACHMENT0){for(let je=0,Ke=ce.length;je<Ke;je++)q[je]=t.COLOR_ATTACHMENT0+je;q.length=ce.length,ie=!0}}else q[0]!==t.COLOR_ATTACHMENT0&&(q[0]=t.COLOR_ATTACHMENT0,ie=!0);else q[0]!==t.BACK&&(q[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Ue(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const G={[ps]:t.FUNC_ADD,[wS]:t.FUNC_SUBTRACT,[TS]:t.FUNC_REVERSE_SUBTRACT};if(i)G[fp]=t.MIN,G[hp]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(G[fp]=O.MIN_EXT,G[hp]=O.MAX_EXT)}const wt={[bS]:t.ZERO,[AS]:t.ONE,[CS]:t.SRC_COLOR,[_x]:t.SRC_ALPHA,[IS]:t.SRC_ALPHA_SATURATE,[NS]:t.DST_COLOR,[PS]:t.DST_ALPHA,[RS]:t.ONE_MINUS_SRC_COLOR,[yx]:t.ONE_MINUS_SRC_ALPHA,[DS]:t.ONE_MINUS_DST_COLOR,[LS]:t.ONE_MINUS_DST_ALPHA};function Te(O,fe,q,ie,ce,je,Ke,Je){if(O===wi){f===!0&&(we(t.BLEND),f=!1);return}if(f===!1&&(Me(t.BLEND),f=!0),O!==MS){if(O!==_||Je!==y){if((v!==ps||R!==ps)&&(t.blendEquation(t.FUNC_ADD),v=ps,R=ps),Je)switch(O){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cp:t.blendFunc(t.ONE,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,M=null,T=null,F=null,_=O,y=Je}return}ce=ce||fe,je=je||q,Ke=Ke||ie,(fe!==v||ce!==R)&&(t.blendEquationSeparate(G[fe],G[ce]),v=fe,R=ce),(q!==E||ie!==M||je!==T||Ke!==F)&&(t.blendFuncSeparate(wt[q],wt[ie],wt[je],wt[Ke]),E=q,M=ie,T=je,F=Ke),_=O,y=!1}function De(O,fe){O.side===Ln?we(t.CULL_FACE):Me(t.CULL_FACE);let q=O.side===dn;fe&&(q=!q),Ce(q),O.blending===Is&&O.transparent===!1?Te(wi):Te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const ie=O.stencilWrite;c.setTest(ie),ie&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(O){b!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),b=O)}function nt(O){O!==yS?(Me(t.CULL_FACE),O!==K&&(O===lp?t.cullFace(t.BACK):O===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),K=O}function Be(O){O!==Z&&(N&&t.lineWidth(O),Z=O)}function Ie(O,fe,q){O?(Me(t.POLYGON_OFFSET_FILL),(H!==fe||Y!==q)&&(t.polygonOffset(fe,q),H=fe,Y=q)):we(t.POLYGON_OFFSET_FILL)}function Ye(O){O?Me(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Tt(O){O===void 0&&(O=t.TEXTURE0+A-1),k!==O&&(t.activeTexture(O),k=O)}function Lt(O,fe,q){q===void 0&&(k===null?q=t.TEXTURE0+A-1:q=k);let ie=j[q];ie===void 0&&(ie={type:void 0,texture:void 0},j[q]=ie),(ie.type!==O||ie.texture!==fe)&&(k!==q&&(t.activeTexture(q),k=q),t.bindTexture(O,fe||ye[O]),ie.type=O,ie.texture=fe)}function L(){const O=j[k];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){re.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function ue(O){oe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),oe.copy(O))}function he(O,fe){let q=p.get(fe);q===void 0&&(q=new WeakMap,p.set(fe,q));let ie=q.get(O);ie===void 0&&(ie=t.getUniformBlockIndex(fe,O.name),q.set(O,ie))}function Le(O,fe){const ie=p.get(fe).get(O);h.get(fe)!==ie&&(t.uniformBlockBinding(fe,ie,O.__bindingPointIndex),h.set(fe,ie))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},k=null,j={},m={},x=new WeakMap,S=[],g=null,f=!1,_=null,v=null,E=null,M=null,R=null,T=null,F=null,y=!1,b=null,K=null,Z=null,H=null,Y=null,re.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:we,bindFramebuffer:Xe,drawBuffers:Ut,useProgram:Ue,setBlending:Te,setMaterial:De,setFlipSided:Ce,setCullFace:nt,setLineWidth:Be,setPolygonOffset:Ie,setScissorTest:Ye,activeTexture:Tt,bindTexture:Lt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:D,texImage3D:ee,updateUBOMapping:he,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:$,texSubImage2D:se,texSubImage3D:te,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ee,scissor:pe,viewport:ue,reset:We}}function vb(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,p=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let S;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return f?new OffscreenCanvas(L,w):Vl("canvas")}function v(L,w,X,se){let te=1;if((L.width>se||L.height>se)&&(te=se/Math.max(L.width,L.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=w?Ld:Math.floor,Ee=ae(te*L.width),le=ae(te*L.height);S===void 0&&(S=_(Ee,le));const $=X?_(Ee,le):S;return $.width=Ee,$.height=le,$.getContext("2d").drawImage(L,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ee+"x"+le+")."),$}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function E(L){return jp(L.width)&&jp(L.height)}function M(L){return o?!1:L.wrapS!==Gn||L.wrapT!==Gn||L.minFilter!==dt&&L.minFilter!==Rn}function R(L,w){return L.generateMipmaps&&w&&L.minFilter!==dt&&L.minFilter!==Rn}function T(L){t.generateMipmap(L)}function F(L,w,X,se,te=!1){if(o===!1)return w;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=w;return w===t.RED&&(X===t.FLOAT&&(ae=t.R32F),X===t.HALF_FLOAT&&(ae=t.R16F),X===t.UNSIGNED_BYTE&&(ae=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.R8UI),X===t.UNSIGNED_SHORT&&(ae=t.R16UI),X===t.UNSIGNED_INT&&(ae=t.R32UI),X===t.BYTE&&(ae=t.R8I),X===t.SHORT&&(ae=t.R16I),X===t.INT&&(ae=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ae=t.RG32F),X===t.HALF_FLOAT&&(ae=t.RG16F),X===t.UNSIGNED_BYTE&&(ae=t.RG8)),w===t.RGBA&&(X===t.FLOAT&&(ae=t.RGBA32F),X===t.HALF_FLOAT&&(ae=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ae=se===at&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(L,w,X){return R(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==dt&&L.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function b(L){return L===dt||L===pp||L===qc?t.NEAREST:t.LINEAR}function K(L){const w=L.target;w.removeEventListener("dispose",K),H(w),w.isVideoTexture&&x.delete(w)}function Z(L){const w=L.target;w.removeEventListener("dispose",Z),A(w)}function H(L){const w=i.get(L);if(w.__webglInit===void 0)return;const X=L.source,se=g.get(X);if(se){const te=se[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&Y(L),Object.keys(se).length===0&&g.delete(X)}i.remove(L)}function Y(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const X=L.source,se=g.get(X);delete se[w.__cacheKey],a.memory.textures--}function A(L){const w=L.texture,X=i.get(L),se=i.get(w);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(X.__webglFramebuffer[te]))for(let ae=0;ae<X.__webglFramebuffer[te].length;ae++)t.deleteFramebuffer(X.__webglFramebuffer[te][ae]);else t.deleteFramebuffer(X.__webglFramebuffer[te]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[te])}else{if(Array.isArray(X.__webglFramebuffer))for(let te=0;te<X.__webglFramebuffer.length;te++)t.deleteFramebuffer(X.__webglFramebuffer[te]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let te=0,ae=w.length;te<ae;te++){const Ee=i.get(w[te]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(L)}let N=0;function I(){N=0}function U(){const L=N;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),N+=1,L}function k(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function j(L,w){const X=i.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,L,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function P(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Xe(X,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function z(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Xe(X,L,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function re(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Ut(X,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const oe={[bd]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},me={[dt]:t.NEAREST,[pp]:t.NEAREST_MIPMAP_NEAREST,[qc]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[qS]:t.LINEAR_MIPMAP_NEAREST,[Qa]:t.LINEAR_MIPMAP_LINEAR},ye={[cE]:t.NEVER,[gE]:t.ALWAYS,[uE]:t.LESS,[fE]:t.LEQUAL,[dE]:t.EQUAL,[mE]:t.GEQUAL,[hE]:t.GREATER,[pE]:t.NOTEQUAL};function Me(L,w,X){if(X?(t.texParameteri(L,t.TEXTURE_WRAP_S,oe[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,oe[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,oe[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,me[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,me[w.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==Gn||w.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,b(w.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==dt&&w.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===dt||w.minFilter!==qc&&w.minFilter!==Qa||w.type===Si&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Xs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function we(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",K));const se=w.source;let te=g.get(se);te===void 0&&(te={},g.set(se,te));const ae=k(w);if(ae!==L.__cacheKey){te[ae]===void 0&&(te[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[ae].usedTimes++;const Ee=te[L.__cacheKey];Ee!==void 0&&(te[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&Y(w)),L.__cacheKey=ae,L.__webglTexture=te[ae].texture}return X}function Xe(L,w,X){let se=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=t.TEXTURE_3D);const te=we(L,w),ae=w.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+X);const Ee=i.get(ae);if(ae.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=M(w)&&E(w.image)===!1;let $=v(w.image,le,!1,h);$=Lt(w,$);const D=E($)||o,ee=s.convert(w.format,w.colorSpace);let pe=s.convert(w.type),ue=F(w.internalFormat,ee,pe,w.colorSpace,w.isVideoTexture);Me(se,w,D);let he;const Le=w.mipmaps,We=o&&w.isVideoTexture!==!0,O=Ee.__version===void 0||te===!0,fe=y(w,$,D);if(w.isDepthTexture)ue=t.DEPTH_COMPONENT,o?w.type===Si?ue=t.DEPTH_COMPONENT32F:w.type===Yi?ue=t.DEPTH_COMPONENT24:w.type===Cr?ue=t.DEPTH24_STENCIL8:ue=t.DEPTH_COMPONENT16:w.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Rr&&ue===t.DEPTH_COMPONENT&&w.type!==Nf&&w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yi,pe=s.convert(w.type)),w.format===Ys&&ue===t.DEPTH_COMPONENT&&(ue=t.DEPTH_STENCIL,w.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Cr,pe=s.convert(w.type))),O&&(We?n.texStorage2D(t.TEXTURE_2D,1,ue,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,ue,$.width,$.height,0,ee,pe,null));else if(w.isDataTexture)if(Le.length>0&&D){We&&O&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let q=0,ie=Le.length;q<ie;q++)he=Le[q],We?n.texSubImage2D(t.TEXTURE_2D,q,0,0,he.width,he.height,ee,pe,he.data):n.texImage2D(t.TEXTURE_2D,q,ue,he.width,he.height,0,ee,pe,he.data);w.generateMipmaps=!1}else We?(O&&n.texStorage2D(t.TEXTURE_2D,fe,ue,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,ee,pe,$.data)):n.texImage2D(t.TEXTURE_2D,0,ue,$.width,$.height,0,ee,pe,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Le[0].width,Le[0].height,$.depth);for(let q=0,ie=Le.length;q<ie;q++)he=Le[q],w.format!==Wn?ee!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,$.depth,ee,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ue,he.width,he.height,$.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,$.depth,ee,pe,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,ue,he.width,he.height,$.depth,0,ee,pe,he.data)}else{We&&O&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let q=0,ie=Le.length;q<ie;q++)he=Le[q],w.format!==Wn?ee!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,he.width,he.height,ee,he.data):n.compressedTexImage2D(t.TEXTURE_2D,q,ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,q,0,0,he.width,he.height,ee,pe,he.data):n.texImage2D(t.TEXTURE_2D,q,ue,he.width,he.height,0,ee,pe,he.data)}else if(w.isDataArrayTexture)We?(O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ee,pe,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,$.width,$.height,$.depth,0,ee,pe,$.data);else if(w.isData3DTexture)We?(O&&n.texStorage3D(t.TEXTURE_3D,fe,ue,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ee,pe,$.data)):n.texImage3D(t.TEXTURE_3D,0,ue,$.width,$.height,$.depth,0,ee,pe,$.data);else if(w.isFramebufferTexture){if(O)if(We)n.texStorage2D(t.TEXTURE_2D,fe,ue,$.width,$.height);else{let q=$.width,ie=$.height;for(let ce=0;ce<fe;ce++)n.texImage2D(t.TEXTURE_2D,ce,ue,q,ie,0,ee,pe,null),q>>=1,ie>>=1}}else if(Le.length>0&&D){We&&O&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let q=0,ie=Le.length;q<ie;q++)he=Le[q],We?n.texSubImage2D(t.TEXTURE_2D,q,0,0,ee,pe,he):n.texImage2D(t.TEXTURE_2D,q,ue,ee,pe,he);w.generateMipmaps=!1}else We?(O&&n.texStorage2D(t.TEXTURE_2D,fe,ue,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee,pe,$)):n.texImage2D(t.TEXTURE_2D,0,ue,ee,pe,$);R(w,D)&&T(se),Ee.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ut(L,w,X){if(w.image.length!==6)return;const se=we(L,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const ae=i.get(te);if(te.version!==ae.__version||se===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,$=[];for(let q=0;q<6;q++)!Ee&&!le?$[q]=v(w.image[q],!1,!0,c):$[q]=le?w.image[q].image:w.image[q],$[q]=Lt(w,$[q]);const D=$[0],ee=E(D)||o,pe=s.convert(w.format,w.colorSpace),ue=s.convert(w.type),he=F(w.internalFormat,pe,ue,w.colorSpace),Le=o&&w.isVideoTexture!==!0,We=ae.__version===void 0||se===!0;let O=y(w,D,ee);Me(t.TEXTURE_CUBE_MAP,w,ee);let fe;if(Ee){Le&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,he,D.width,D.height);for(let q=0;q<6;q++){fe=$[q].mipmaps;for(let ie=0;ie<fe.length;ie++){const ce=fe[ie];w.format!==Wn?pe!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ce.width,ce.height,pe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ce.width,ce.height,pe,ue,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,he,ce.width,ce.height,0,pe,ue,ce.data)}}}else{fe=w.mipmaps,Le&&We&&(fe.length>0&&O++,n.texStorage2D(t.TEXTURE_CUBE_MAP,O,he,$[0].width,$[0].height));for(let q=0;q<6;q++)if(le){Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,$[q].width,$[q].height,pe,ue,$[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,he,$[q].width,$[q].height,0,pe,ue,$[q].data);for(let ie=0;ie<fe.length;ie++){const je=fe[ie].image[q].image;Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,je.width,je.height,pe,ue,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,he,je.width,je.height,0,pe,ue,je.data)}}else{Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe,ue,$[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,he,pe,ue,$[q]);for(let ie=0;ie<fe.length;ie++){const ce=fe[ie];Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,pe,ue,ce.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,he,pe,ue,ce.image[q])}}}R(w,ee)&&T(t.TEXTURE_CUBE_MAP),ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ue(L,w,X,se,te,ae){const Ee=s.convert(X.format,X.colorSpace),le=s.convert(X.type),$=F(X.internalFormat,Ee,le,X.colorSpace);if(!i.get(w).__hasExternalTextures){const ee=Math.max(1,w.width>>ae),pe=Math.max(1,w.height>>ae);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ae,$,ee,pe,w.depth,0,Ee,le,null):n.texImage2D(te,ae,$,ee,pe,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Ye(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,te,i.get(X).__webglTexture,0,Ie(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,te,i.get(X).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(L,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let se=t.DEPTH_COMPONENT16;if(X||Ye(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Si?se=t.DEPTH_COMPONENT32F:te.type===Yi&&(se=t.DEPTH_COMPONENT24));const ae=Ie(w);Ye(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const se=Ie(w);X&&Ye(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):Ye(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<se.length;te++){const ae=se[te],Ee=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),$=F(ae.internalFormat,Ee,le,ae.colorSpace),D=Ie(w);X&&Ye(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,D,$,w.width,w.height):Ye(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,$,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,$,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function wt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,te=Ie(w);if(w.depthTexture.format===Rr)Ye(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Ys)Ye(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Te(L){const w=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");wt(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=t.createRenderbuffer(),G(w.__webglDepthbuffer[se],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),G(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(L,w,X){const se=i.get(L);w!==void 0&&Ue(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Te(L)}function Ce(L){const w=L.texture,X=i.get(L),se=i.get(w);L.addEventListener("dispose",Z),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=w.version,a.memory.textures++);const te=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,Ee=E(L)||o;if(te){X.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[le]=[];for(let $=0;$<w.mipmaps.length;$++)X.__webglFramebuffer[le][$]=t.createFramebuffer()}else X.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)X.__webglFramebuffer[le]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const le=L.texture;for(let $=0,D=le.length;$<D;$++){const ee=i.get(le[$]);ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ye(L)===!1){const le=ae?w:[w];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<le.length;$++){const D=le[$];X.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const ee=s.convert(D.format,D.colorSpace),pe=s.convert(D.type),ue=F(D.internalFormat,ee,pe,D.colorSpace,L.isXRRenderTarget===!0),he=Ie(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ue,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,X.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),G(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Me(t.TEXTURE_CUBE_MAP,w,Ee);for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)Ue(X.__webglFramebuffer[le][$],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,$);else Ue(X.__webglFramebuffer[le],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);R(w,Ee)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=L.texture;for(let $=0,D=le.length;$<D;$++){const ee=le[$],pe=i.get(ee);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Me(t.TEXTURE_2D,ee,Ee),Ue(X.__webglFramebuffer,L,ee,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D,0),R(ee,Ee)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,se.__webglTexture),Me(le,w,Ee),o&&w.mipmaps&&w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)Ue(X.__webglFramebuffer[$],L,w,t.COLOR_ATTACHMENT0,le,$);else Ue(X.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,le,0);R(w,Ee)&&T(le),n.unbindTexture()}L.depthBuffer&&Te(L)}function nt(L){const w=E(L)||o,X=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,te=X.length;se<te;se++){const ae=X[se];if(R(ae,w)){const Ee=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(Ee,le),T(Ee),n.unbindTexture()}}}function Be(L){if(o&&L.samples>0&&Ye(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],X=L.width,se=L.height;let te=t.COLOR_BUFFER_BIT;const ae=[],Ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(L),$=L.isWebGLMultipleRenderTargets===!0;if($)for(let D=0;D<w.length;D++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let D=0;D<w.length;D++){ae.push(t.COLOR_ATTACHMENT0+D),L.depthBuffer&&ae.push(Ee);const ee=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ee===!1&&(L.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[D]),ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),$){const pe=i.get(w[D]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let D=0;D<w.length;D++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.RENDERBUFFER,le.__webglColorRenderbuffer[D]);const ee=i.get(w[D]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(L){return Math.min(p,L.samples)}function Ye(L){const w=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(L){const w=a.render.frame;x.get(L)!==w&&(x.set(L,w),L.update())}function Lt(L,w){const X=L.colorSpace,se=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Rd||X!==ri&&X!==Lr&&(X===at||X===uc?o===!1?e.has("EXT_sRGB")===!0&&se===Wn?(L.format=Rd,L.minFilter=Rn,L.generateMipmaps=!1):w=Nx.sRGBToLinear(w):(se!==Wn||te!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=re,this.rebindTextures=De,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ye}const xb=0,bt=1;function _b(t,e,n){const i=n.isWebGL2;function r(s,a=Lr){let o;const l=a===at||a===uc?bt:xb;if(s===ir)return t.UNSIGNED_BYTE;if(s===wx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Tx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===KS)return t.BYTE;if(s===ZS)return t.SHORT;if(s===Nf)return t.UNSIGNED_SHORT;if(s===Mx)return t.INT;if(s===Yi)return t.UNSIGNED_INT;if(s===Si)return t.FLOAT;if(s===Xs)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===QS)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===JS)return t.LUMINANCE;if(s===eE)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Ys)return t.DEPTH_STENCIL;if(s===Rd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===tE)return t.RED;if(s===bx)return t.RED_INTEGER;if(s===nE)return t.RG;if(s===Ax)return t.RG_INTEGER;if(s===Cx)return t.RGBA_INTEGER;if(s===Kc||s===Zc||s===Qc||s===Jc)if(l===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Kc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Kc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===vp||s===xp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_p||s===yp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_p)return l===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sp||s===Ep||s===Mp||s===wp||s===Tp||s===bp||s===Ap||s===Cp||s===Rp||s===Pp||s===Lp||s===Np||s===Dp||s===Ip)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ep)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ap)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Np)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dp)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ip)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eu||s===Up||s===Fp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===eu)return l===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rE||s===Op||s===kp||s===Bp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===eu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Op)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class yb extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ot extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Zx extends Xt{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Rr,h!==Rr&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rr&&(i=Yi),i===void 0&&h===Ys&&(i=Cr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Eb extends jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,x=null;const S=n.getContextAttributes();let g=null,f=null;const _=[],v=[],E=new vn;E.layers.enable(1),E.viewport=new lt;const M=new vn;M.layers.enable(2),M.viewport=new lt;const R=[E,M],T=new yb;T.layers.enable(1),T.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let z=_[P];return z===void 0&&(z=new Mu,_[P]=z),z.getTargetRaySpace()},this.getControllerGrip=function(P){let z=_[P];return z===void 0&&(z=new Mu,_[P]=z),z.getGripSpace()},this.getHand=function(P){let z=_[P];return z===void 0&&(z=new Mu,_[P]=z),z.getHandSpace()};function b(P){const z=v.indexOf(P.inputSource);if(z===-1)return;const re=_[z];re!==void 0&&(re.update(P.inputSource,P.frame,c||a),re.dispatchEvent({type:P.type,data:P.inputSource}))}function K(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let P=0;P<_.length;P++){const z=v[P];z!==null&&(v[P]=null,_[P].disconnect(z))}F=null,y=null,e.setRenderTarget(g),m=null,d=null,p=null,r=null,f=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:m}),f=new Pi(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let z=null,re=null,oe=null;S.depth&&(oe=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=S.stencil?Ys:Rr,re=S.stencil?Cr:Yi);const me={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(me),r.updateRenderState({layers:[d]}),f=new Pi(d.textureWidth,d.textureHeight,{format:Wn,type:ir,depthTexture:new Zx(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const ye=e.properties.get(f);ye.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(P){for(let z=0;z<P.removed.length;z++){const re=P.removed[z],oe=v.indexOf(re);oe>=0&&(v[oe]=null,_[oe].disconnect(re))}for(let z=0;z<P.added.length;z++){const re=P.added[z];let oe=v.indexOf(re);if(oe===-1){for(let ye=0;ye<_.length;ye++)if(ye>=v.length){v.push(re),oe=ye;break}else if(v[ye]===null){v[ye]=re,oe=ye;break}if(oe===-1)break}const me=_[oe];me&&me.connect(re)}}const H=new B,Y=new B;function A(P,z,re){H.setFromMatrixPosition(z.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);const oe=H.distanceTo(Y),me=z.projectionMatrix.elements,ye=re.projectionMatrix.elements,Me=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],Ut=(me[9]-1)/me[5],Ue=(me[8]-1)/me[0],G=(ye[8]+1)/ye[0],wt=Me*Ue,Te=Me*G,De=oe/(-Ue+G),Ce=De*-Ue;z.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ce),P.translateZ(De),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const nt=Me+De,Be=we+De,Ie=wt-Ce,Ye=Te+(oe-Ce),Tt=Xe*we/Be*nt,Lt=Ut*we/Be*nt;P.projectionMatrix.makePerspective(Ie,Ye,Tt,Lt,nt,Be),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function N(P,z){z===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(z.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;T.near=M.near=E.near=P.near,T.far=M.far=E.far=P.far,(F!==T.near||y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,y=T.far);const z=P.parent,re=T.cameras;N(T,z);for(let oe=0;oe<re.length;oe++)N(re[oe],z);re.length===2?A(T,E,M):T.projectionMatrix.copy(E.projectionMatrix),I(P,T,z)};function I(P,z,re){re===null?P.matrix.copy(z.matrixWorld):(P.matrix.copy(re.matrixWorld),P.matrix.invert(),P.matrix.multiply(z.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(z.projectionMatrix),P.projectionMatrixInverse.copy(z.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Pd*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let U=null;function k(P,z){if(h=z.getViewerPose(c||a),x=z,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let oe=!1;re.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let me=0;me<re.length;me++){const ye=re[me];let Me=null;if(m!==null)Me=m.getViewport(ye);else{const Xe=p.getViewSubImage(d,ye);Me=Xe.viewport,me===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let we=R[me];we===void 0&&(we=new vn,we.layers.enable(me),we.viewport=new lt,R[me]=we),we.matrix.fromArray(ye.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ye.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Me.x,Me.y,Me.width,Me.height),me===0&&(T.matrix.copy(we.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),oe===!0&&T.cameras.push(we)}}for(let re=0;re<_.length;re++){const oe=v[re],me=_[re];oe!==null&&me!==void 0&&me.update(oe,z,c||a)}U&&U(P,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),x=null}const j=new Wx;j.setAnimationLoop(k),this.setAnimationLoop=function(P){U=P},this.dispose=function(){}}}function Mb(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,jx(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,E)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===dn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===dn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const E=v.program;i.uniformBlockBinding(_,E)}function c(_,v){let E=r[_.id];E===void 0&&(x(_),E=h(_),r[_.id]=E,_.addEventListener("dispose",g));const M=v.program;i.updateUBOMapping(_,M);const R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function h(_){const v=p();_.__bindingPointIndex=v;const E=t.createBuffer(),M=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,M,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function p(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],E=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,T=E.length;R<T;R++){const F=E[R];if(m(F,R,M)===!0){const y=F.__offset,b=Array.isArray(F.value)?F.value:[F.value];let K=0;for(let Z=0;Z<b.length;Z++){const H=b[Z],Y=S(H);typeof H=="number"?(F.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,y+K,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=H.elements[0],F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=H.elements[0],F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=H.elements[0]):(H.toArray(F.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,F.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,E){const M=_.value;if(E[v]===void 0){if(typeof M=="number")E[v]=M;else{const R=Array.isArray(M)?M:[M],T=[];for(let F=0;F<R.length;F++)T.push(R[F].clone());E[v]=T}return!0}else if(typeof M=="number"){if(E[v]!==M)return E[v]=M,!0}else{const R=Array.isArray(E[v])?E[v]:[E[v]],T=Array.isArray(M)?M:[M];for(let F=0;F<R.length;F++){const y=R[F];if(y.equals(T[F])===!1)return y.copy(T[F]),!0}}return!1}function x(_){const v=_.uniforms;let E=0;const M=16;let R=0;for(let T=0,F=v.length;T<F;T++){const y=v[T],b={boundary:0,storage:0},K=Array.isArray(y.value)?y.value:[y.value];for(let Z=0,H=K.length;Z<H;Z++){const Y=K[Z],A=S(Y);b.boundary+=A.boundary,b.storage+=A.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=E,T>0){R=E%M;const Z=M-R;R!==0&&Z-b.boundary<0&&(E+=M-R,y.__offset=E)}E+=b.storage}return R=E%M,R>0&&(E+=M-R),_.__size=E,_.__cache={},this}function S(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Qx{constructor(e={}){const{canvas:n=_E(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let S=null,g=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const v=this;let E=!1,M=0,R=0,T=null,F=-1,y=null;const b=new lt,K=new lt;let Z=null;const H=new qe(0);let Y=0,A=n.width,N=n.height,I=1,U=null,k=null;const j=new lt(0,0,A,N),P=new lt(0,0,A,N);let z=!1;const re=new If;let oe=!1,me=!1,ye=null;const Me=new _t,we=new Se,Xe=new B,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?I:1}let G=i;function wt(C,V){for(let Q=0;Q<C.length;Q++){const W=C[Q],J=n.getContext(W,V);if(J!==null)return J}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",ie,!1),G===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),G=wt(V,C),G===null)throw wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,De,Ce,nt,Be,Ie,Ye,Tt,Lt,L,w,X,se,te,ae,Ee,le,$,D,ee,pe,ue,he,Le;function We(){Te=new U1(G),De=new R1(G,Te,e),Te.init(De),ue=new _b(G,Te,De),Ce=new gb(G,Te,De),nt=new k1(G),Be=new nb,Ie=new vb(G,Te,Ce,Be,De,ue,nt),Ye=new L1(v),Tt=new I1(v),Lt=new $E(G,De),he=new A1(G,Te,Lt,De),L=new F1(G,Lt,nt,he),w=new H1(G,L,Lt,nt),D=new j1(G,De,Ie),Ee=new P1(Be),X=new tb(v,Ye,Tt,Te,De,he,Ee),se=new Mb(v,Be),te=new rb,ae=new ub(Te,De),$=new b1(v,Ye,Tt,Ce,w,d,l),le=new mb(v,w,De),Le=new wb(G,nt,De,Ce),ee=new C1(G,Te,nt,De),pe=new O1(G,Te,nt,De),nt.programs=X.programs,v.capabilities=De,v.extensions=Te,v.properties=Be,v.renderLists=te,v.shadowMap=le,v.state=Ce,v.info=nt}We();const O=new Eb(v,G);this.xr=O,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(A,N,!1))},this.getSize=function(C){return C.set(A,N)},this.setSize=function(C,V,Q=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,N=V,n.width=Math.floor(C*I),n.height=Math.floor(V*I),Q===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(A*I,N*I).floor()},this.setDrawingBufferSize=function(C,V,Q){A=C,N=V,I=Q,n.width=Math.floor(C*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,V,Q,W){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,V,Q,W),Ce.viewport(b.copy(j).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,V,Q,W){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,V,Q,W),Ce.scissor(K.copy(P).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){Ce.setScissorTest(z=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(C=!0,V=!0,Q=!0){let W=0;if(C){let J=!1;if(T!==null){const _e=T.texture.format;J=_e===Cx||_e===Ax||_e===bx}if(J){const _e=T.texture.type,be=_e===ir||_e===Yi||_e===Nf||_e===Cr||_e===wx||_e===Tx,Re=$.getClearColor(),Pe=$.getClearAlpha(),He=Re.r,Ae=Re.g,Fe=Re.b;be?(m[0]=He,m[1]=Ae,m[2]=Fe,m[3]=Pe,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=He,x[1]=Ae,x[2]=Fe,x[3]=Pe,G.clearBufferiv(G.COLOR,0,x))}else W|=G.COLOR_BUFFER_BIT}V&&(W|=G.DEPTH_BUFFER_BIT),Q&&(W|=G.STENCIL_BUFFER_BIT),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),te.dispose(),ae.dispose(),Be.dispose(),Ye.dispose(),Tt.dispose(),w.dispose(),he.dispose(),Le.dispose(),X.dispose(),O.dispose(),O.removeEventListener("sessionstart",it),O.removeEventListener("sessionend",Kn),ye&&(ye.dispose(),ye=null),Kt.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=nt.autoReset,V=le.enabled,Q=le.autoUpdate,W=le.needsUpdate,J=le.type;We(),nt.autoReset=C,le.enabled=V,le.autoUpdate=Q,le.needsUpdate=W,le.type=J}function ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const V=C.target;V.removeEventListener("dispose",ce),je(V)}function je(C){Ke(C),Be.remove(C)}function Ke(C){const V=Be.get(C).programs;V!==void 0&&(V.forEach(function(Q){X.releaseProgram(Q)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Q,W,J,_e){V===null&&(V=Ut);const be=J.isMesh&&J.matrixWorld.determinant()<0,Re=m0(C,V,Q,W,J);Ce.setMaterial(W,be);let Pe=Q.index,He=1;if(W.wireframe===!0){if(Pe=L.getWireframeAttribute(Q),Pe===void 0)return;He=2}const Ae=Q.drawRange,Fe=Q.attributes.position;let pt=Ae.start*He,gt=(Ae.start+Ae.count)*He;_e!==null&&(pt=Math.max(pt,_e.start*He),gt=Math.min(gt,(_e.start+_e.count)*He)),Pe!==null?(pt=Math.max(pt,0),gt=Math.min(gt,Pe.count)):Fe!=null&&(pt=Math.max(pt,0),gt=Math.min(gt,Fe.count));const Mn=gt-pt;if(Mn<0||Mn===1/0)return;he.setup(J,W,Re,Q,Pe);let ai,yt=ee;if(Pe!==null&&(ai=Lt.get(Pe),yt=pe,yt.setIndex(ai)),J.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*Ue()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(J.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),Ce.setLineWidth(Ge*Ue()),J.isLineSegments?yt.setMode(G.LINES):J.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else J.isPoints?yt.setMode(G.POINTS):J.isSprite&&yt.setMode(G.TRIANGLES);if(J.isInstancedMesh)yt.renderInstances(pt,Mn,J.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,xc=Math.min(Q.instanceCount,Ge);yt.renderInstances(pt,Mn,xc)}else yt.render(pt,Mn)},this.compile=function(C,V){function Q(W,J,_e){W.transparent===!0&&W.side===Ln&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,co(W,J,_e),W.side=ii,W.needsUpdate=!0,co(W,J,_e),W.side=Ln):co(W,J,_e)}g=ae.get(C),g.init(),_.push(g),C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(v._useLegacyLights),C.traverse(function(W){const J=W.material;if(J)if(Array.isArray(J))for(let _e=0;_e<J.length;_e++){const be=J[_e];Q(be,C,W)}else Q(J,C,W)}),_.pop(),g=null};let Je=null;function fn(C){Je&&Je(C)}function it(){Kt.stop()}function Kn(){Kt.start()}const Kt=new Wx;Kt.setAnimationLoop(fn),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){Je=C,O.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},O.addEventListener("sessionstart",it),O.addEventListener("sessionend",Kn),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(V),V=O.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,T),g=ae.get(C,_.length),g.init(),_.push(g),Me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(Me),me=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,me),S=te.get(C,f.length),S.init(),f.push(S),jf(C,V,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(U,k),this.info.render.frame++,oe===!0&&Ee.beginShadows();const Q=g.state.shadowsArray;if(le.render(Q,C,V),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(S,C),g.setupLights(v._useLegacyLights),V.isArrayCamera){const W=V.cameras;for(let J=0,_e=W.length;J<_e;J++){const be=W[J];Hf(S,C,be,be.viewport)}}else Hf(S,C,V);T!==null&&(Ie.updateMultisampleRenderTarget(T),Ie.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,V),he.resetDefaultState(),F=-1,y=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function jf(C,V,Q,W){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||re.intersectsSprite(C)){W&&Xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const be=w.update(C),Re=C.material;Re.visible&&S.push(C,be,Re,Q,Xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||re.intersectsObject(C))){const be=w.update(C),Re=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const Pe=be.groups;for(let He=0,Ae=Pe.length;He<Ae;He++){const Fe=Pe[He],pt=Re[Fe.materialIndex];pt&&pt.visible&&S.push(C,be,pt,Q,Xe.z,Fe)}}else Re.visible&&S.push(C,be,Re,Q,Xe.z,null)}}const _e=C.children;for(let be=0,Re=_e.length;be<Re;be++)jf(_e[be],V,Q,W)}function Hf(C,V,Q,W){const J=C.opaque,_e=C.transmissive,be=C.transparent;g.setupLightsView(Q),oe===!0&&Ee.setGlobalState(v.clippingPlanes,Q),_e.length>0&&p0(J,_e,V,Q),W&&Ce.viewport(b.copy(W)),J.length>0&&lo(J,V,Q),_e.length>0&&lo(_e,V,Q),be.length>0&&lo(be,V,Q),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function p0(C,V,Q,W){const J=De.isWebGL2;ye===null&&(ye=new Pi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Xs:ir,minFilter:Qa,samples:J?4:0})),v.getDrawingBufferSize(we),J?ye.setSize(we.x,we.y):ye.setSize(Ld(we.x),Ld(we.y));const _e=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(H),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=nr,lo(C,Q,W),Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye);let Re=!1;for(let Pe=0,He=V.length;Pe<He;Pe++){const Ae=V[Pe],Fe=Ae.object,pt=Ae.geometry,gt=Ae.material,Mn=Ae.group;if(gt.side===Ln&&Fe.layers.test(W.layers)){const ai=gt.side;gt.side=dn,gt.needsUpdate=!0,Vf(Fe,Q,W,pt,gt,Mn),gt.side=ai,gt.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye)),v.setRenderTarget(_e),v.setClearColor(H,Y),v.toneMapping=be}function lo(C,V,Q){const W=V.isScene===!0?V.overrideMaterial:null;for(let J=0,_e=C.length;J<_e;J++){const be=C[J],Re=be.object,Pe=be.geometry,He=W===null?be.material:W,Ae=be.group;Re.layers.test(Q.layers)&&Vf(Re,V,Q,Pe,He,Ae)}}function Vf(C,V,Q,W,J,_e){C.onBeforeRender(v,V,Q,W,J,_e),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(v,V,Q,W,C,_e),J.transparent===!0&&J.side===Ln&&J.forceSinglePass===!1?(J.side=dn,J.needsUpdate=!0,v.renderBufferDirect(Q,V,W,J,C,_e),J.side=ii,J.needsUpdate=!0,v.renderBufferDirect(Q,V,W,J,C,_e),J.side=Ln):v.renderBufferDirect(Q,V,W,J,C,_e),C.onAfterRender(v,V,Q,W,J,_e)}function co(C,V,Q){V.isScene!==!0&&(V=Ut);const W=Be.get(C),J=g.state.lights,_e=g.state.shadowsArray,be=J.state.version,Re=X.getParameters(C,J.state,_e,V,Q),Pe=X.getProgramCacheKey(Re);let He=W.programs;W.environment=C.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(C.isMeshStandardMaterial?Tt:Ye).get(C.envMap||W.environment),He===void 0&&(C.addEventListener("dispose",ce),He=new Map,W.programs=He);let Ae=He.get(Pe);if(Ae!==void 0){if(W.currentProgram===Ae&&W.lightsStateVersion===be)return Gf(C,Re),Ae}else Re.uniforms=X.getUniforms(C),C.onBuild(Q,Re,v),C.onBeforeCompile(Re,v),Ae=X.acquireProgram(Re,Pe),He.set(Pe,Ae),W.uniforms=Re.uniforms;const Fe=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),Gf(C,Re),W.needsLights=v0(C),W.lightsStateVersion=be,W.needsLights&&(Fe.ambientLightColor.value=J.state.ambient,Fe.lightProbe.value=J.state.probe,Fe.directionalLights.value=J.state.directional,Fe.directionalLightShadows.value=J.state.directionalShadow,Fe.spotLights.value=J.state.spot,Fe.spotLightShadows.value=J.state.spotShadow,Fe.rectAreaLights.value=J.state.rectArea,Fe.ltc_1.value=J.state.rectAreaLTC1,Fe.ltc_2.value=J.state.rectAreaLTC2,Fe.pointLights.value=J.state.point,Fe.pointLightShadows.value=J.state.pointShadow,Fe.hemisphereLights.value=J.state.hemi,Fe.directionalShadowMap.value=J.state.directionalShadowMap,Fe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Fe.spotShadowMap.value=J.state.spotShadowMap,Fe.spotLightMatrix.value=J.state.spotLightMatrix,Fe.spotLightMap.value=J.state.spotLightMap,Fe.pointShadowMap.value=J.state.pointShadowMap,Fe.pointShadowMatrix.value=J.state.pointShadowMatrix);const pt=Ae.getUniforms(),gt=ml.seqWithValue(pt.seq,Fe);return W.currentProgram=Ae,W.uniformsList=gt,Ae}function Gf(C,V){const Q=Be.get(C);Q.outputColorSpace=V.outputColorSpace,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function m0(C,V,Q,W,J){V.isScene!==!0&&(V=Ut),Ie.resetTextureUnits();const _e=V.fog,be=W.isMeshStandardMaterial?V.environment:null,Re=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ri,Pe=(W.isMeshStandardMaterial?Tt:Ye).get(W.envMap||be),He=W.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ae=!!Q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,gt=!!Q.morphAttributes.color;let Mn=nr;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mn=v.toneMapping);const ai=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=ai!==void 0?ai.length:0,Ge=Be.get(W),xc=g.state.lights;if(oe===!0&&(me===!0||C!==y)){const hn=C===y&&W.id===F;Ee.setState(W,C,hn)}let St=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==xc.state.version||Ge.outputColorSpace!==Re||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||Ge.envMap!==Pe||W.fog===!0&&Ge.fog!==_e||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ee.numPlanes||Ge.numIntersection!==Ee.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ae||Ge.morphTargets!==Fe||Ge.morphNormals!==pt||Ge.morphColors!==gt||Ge.toneMapping!==Mn||De.isWebGL2===!0&&Ge.morphTargetsCount!==yt)&&(St=!0):(St=!0,Ge.__version=W.version);let ur=Ge.currentProgram;St===!0&&(ur=co(W,V,J));let Wf=!1,ta=!1,_c=!1;const Zt=ur.getUniforms(),dr=Ge.uniforms;if(Ce.useProgram(ur.program)&&(Wf=!0,ta=!0,_c=!0),W.id!==F&&(F=W.id,ta=!0),Wf||y!==C){Zt.setValue(G,"projectionMatrix",C.projectionMatrix),Zt.setValue(G,"viewMatrix",C.matrixWorldInverse);const hn=Zt.map.cameraPosition;hn!==void 0&&hn.setValue(G,Xe.setFromMatrixPosition(C.matrixWorld)),De.logarithmicDepthBuffer&&Zt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Zt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,ta=!0,_c=!0)}if(J.isSkinnedMesh){Zt.setOptional(G,J,"bindMatrix"),Zt.setOptional(G,J,"bindMatrixInverse");const hn=J.skeleton;hn&&(De.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Zt.setValue(G,"boneTexture",hn.boneTexture,Ie),Zt.setValue(G,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yc=Q.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0&&De.isWebGL2===!0)&&D.update(J,Q,ur),(ta||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,Zt.setValue(G,"receiveShadow",J.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(dr.envMap.value=Pe,dr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ta&&(Zt.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&g0(dr,_c),_e&&W.fog===!0&&se.refreshFogUniforms(dr,_e),se.refreshMaterialUniforms(dr,W,I,N,ye),ml.upload(G,Ge.uniformsList,dr,Ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ml.upload(G,Ge.uniformsList,dr,Ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Zt.setValue(G,"center",J.center),Zt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Zt.setValue(G,"normalMatrix",J.normalMatrix),Zt.setValue(G,"modelMatrix",J.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let Sc=0,x0=hn.length;Sc<x0;Sc++)if(De.isWebGL2){const Xf=hn[Sc];Le.update(Xf,ur),Le.bind(Xf,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function g0(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function v0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,V,Q){Be.get(C.texture).__webglTexture=V,Be.get(C.depthTexture).__webglTexture=Q;const W=Be.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Q===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const Q=Be.get(C);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Q=0){T=C,M=V,R=Q;let W=!0,J=null,_e=!1,be=!1;if(C){const Pe=Be.get(C);Pe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(G.FRAMEBUFFER,null),W=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):Pe.__hasExternalTextures&&Ie.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ae=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[V])?J=Ae[V][Q]:J=Ae[V],_e=!0):De.isWebGL2&&C.samples>0&&Ie.useMultisampledRTT(C)===!1?J=Be.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?J=Ae[Q]:J=Ae,b.copy(C.viewport),K.copy(C.scissor),Z=C.scissorTest}else b.copy(j).multiplyScalar(I).floor(),K.copy(P).multiplyScalar(I).floor(),Z=z;if(Ce.bindFramebuffer(G.FRAMEBUFFER,J)&&De.drawBuffers&&W&&Ce.drawBuffers(C,J),Ce.viewport(b),Ce.scissor(K),Ce.setScissorTest(Z),_e){const Pe=Be.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,Q)}else if(be){const Pe=Be.get(C.texture),He=V||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,Q||0,He)}F=-1},this.readRenderTargetPixels=function(C,V,Q,W,J,_e,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){Ce.bindFramebuffer(G.FRAMEBUFFER,Re);try{const Pe=C.texture,He=Pe.format,Ae=Pe.type;if(He!==Wn&&ue.convert(He)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ae===Xs&&(Te.has("EXT_color_buffer_half_float")||De.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ae!==ir&&ue.convert(Ae)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Si&&(De.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-W&&Q>=0&&Q<=C.height-J&&G.readPixels(V,Q,W,J,ue.convert(He),ue.convert(Ae),_e)}finally{const Pe=T!==null?Be.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(C,V,Q=0){const W=Math.pow(2,-Q),J=Math.floor(V.image.width*W),_e=Math.floor(V.image.height*W);Ie.setTexture2D(V,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,C.x,C.y,J,_e),Ce.unbindTexture()},this.copyTextureToTexture=function(C,V,Q,W=0){const J=V.image.width,_e=V.image.height,be=ue.convert(Q.format),Re=ue.convert(Q.type);Ie.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,C.x,C.y,J,_e,be,Re,V.image.data):V.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,be,V.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,W,C.x,C.y,be,Re,V.image),W===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Q,W,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,Re=C.max.z-C.min.z+1,Pe=ue.convert(W.format),He=ue.convert(W.type);let Ae;if(W.isData3DTexture)Ie.setTexture3D(W,0),Ae=G.TEXTURE_3D;else if(W.isDataArrayTexture)Ie.setTexture2DArray(W,0),Ae=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Fe=G.getParameter(G.UNPACK_ROW_LENGTH),pt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gt=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),ai=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(Ae,J,V.x,V.y,V.z,_e,be,Re,Pe,He,yt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ae,J,V.x,V.y,V.z,_e,be,Re,Pe,yt.data)):G.texSubImage3D(Ae,J,V.x,V.y,V.z,_e,be,Re,Pe,He,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),J===0&&W.generateMipmaps&&G.generateMipmap(Ae),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){M=0,R=0,T=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Pr:Rx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?at:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tb extends Qx{}Tb.prototype.isWebGL1Renderer=!0;class bb extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ab{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new B;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new $n(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jx extends Js{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const pa=new B,cs=new B,us=new B,ds=new Se,ma=new Se,e0=new _t,$o=new B,ga=new B,qo=new B,wm=new Se,wu=new Se,Tm=new Se;class Cb extends Yt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Di;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ab(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Gl(i,3,0,!1)),ls.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=ls,this.material=e!==void 0?e:new Jx,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),e0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ko($o.set(-.5,-.5,0),us,a,cs,r,s),Ko(ga.set(.5,-.5,0),us,a,cs,r,s),Ko(qo.set(.5,.5,0),us,a,cs,r,s),wm.set(0,0),wu.set(1,0),Tm.set(1,1);let o=e.ray.intersectTriangle($o,ga,qo,!1,pa);if(o===null&&(Ko(ga.set(-.5,.5,0),us,a,cs,r,s),wu.set(0,1),o=e.ray.intersectTriangle($o,qo,ga,!1,pa),o===null))return;const l=e.ray.origin.distanceTo(pa);l<e.near||l>e.far||n.push({distance:l,point:pa.clone(),uv:Pn.getInterpolation(pa,$o,ga,qo,wm,wu,Tm,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ko(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ma.x=s*ds.x-r*ds.y,ma.y=r*ds.x+s*ds.y):ma.copy(ds),t.copy(e),t.x+=ma.x,t.y+=ma.y,t.applyMatrix4(e0)}class gl extends Xt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ja extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Px,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t0 extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new _t,bm=new B,Am=new B;class Rb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cm=new _t,va=new B,bu=new B;class Pb extends Rb{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),bu.copy(i.position),bu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bu),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),Cm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cm)}}class Lb extends t0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nb extends t0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class n0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Rm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Rm(){return(typeof performance>"u"?Date:performance).now()}class Pm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);function Of(t,e,n,i,r,s,a,o){const l=(T,F,y,b)=>[new Se(T/a,1-b/o),new Se(y/a,1-b/o),new Se(y/a,1-F/o),new Se(T/a,1-F/o)],c=l(e+s,n,e+i+s,n+s),h=l(e+i+s,n,e+i*2+s,n+s),p=l(e,n+s,e+s,n+s+r),d=l(e+s,n+s,e+i+s,n+s+r),m=l(e+i+s,n+s,e+i+s*2,n+r+s),x=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),S=t.attributes.uv,g=[m[3],m[2],m[0],m[1]],f=[p[3],p[2],p[0],p[1]],_=[c[3],c[2],c[0],c[1]],v=[h[0],h[1],h[3],h[2]],E=[d[3],d[2],d[0],d[1]],M=[x[3],x[2],x[0],x[1]],R=[];for(const T of[g,f,_,v,E,M])for(const F of T)R.push(F.x,F.y);S.set(new Float32Array(R)),S.needsUpdate=!0}function Tn(t,e,n,i,r,s){Of(t,e,n,i,r,s,64,64)}function Dd(t,e,n,i,r,s){Of(t,e,n,i,r,s,64,32)}class gr extends Ot{constructor(e,n){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:n}),e.name="inner",n.name="outer"}}class Db extends Ot{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Ja({side:ii}),this.layer2Material=new Ja({side:Ln,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new vt(8,8,8);Tn(e,0,0,8,8,8);const n=new et(e,this.layer1Material),i=new vt(9,9,9);Tn(i,32,0,8,8,8);const r=new et(i,this.layer2Material);this.head=new gr(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new vt(8,12,4);Tn(s,16,16,8,12,4);const a=new et(s,this.layer1Material),o=new vt(8.5,12.5,4.5);Tn(o,16,32,8,12,4);const l=new et(o,this.layer2Material);this.body=new gr(a,l),this.body.name="body",this.body.add(a,l),this.body.position.y=-6,this.add(this.body);const c=new vt,h=new et(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3:4,h.scale.y=12,h.scale.z=4,Tn(c,40,16,this.slim?3:4,12,4)});const p=new vt,d=new et(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,Tn(p,40,32,this.slim?3:4,12,4)});const m=new Ot;m.add(h,d),this.modelListeners.push(()=>{m.position.x=this.slim?-.5:-1}),m.position.y=-4,this.rightArm=new gr(h,d),this.rightArm.name="rightArm",this.rightArm.add(m),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const x=new vt,S=new et(x,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Tn(x,32,48,this.slim?3:4,12,4)});const g=new vt,f=new et(g,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Tn(g,48,48,this.slim?3:4,12,4)});const _=new Ot;_.add(S,f),this.modelListeners.push(()=>{_.position.x=this.slim?.5:1}),_.position.y=-4,this.leftArm=new gr(S,f),this.leftArm.name="leftArm",this.leftArm.add(_),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const v=new vt(4,12,4);Tn(v,0,16,4,12,4);const E=new et(v,this.layer1MaterialBiased),M=new vt(4.5,12.5,4.5);Tn(M,0,32,4,12,4);const R=new et(M,this.layer2MaterialBiased),T=new Ot;T.add(E,R),T.position.y=-6,this.rightLeg=new gr(E,R),this.rightLeg.name="rightLeg",this.rightLeg.add(T),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const F=new vt(4,12,4);Tn(F,16,48,4,12,4);const y=new et(F,this.layer1MaterialBiased),b=new vt(4.5,12.5,4.5);Tn(b,0,48,4,12,4);const K=new et(b,this.layer2MaterialBiased),Z=new Ot;Z.add(y,K),Z.position.y=-6,this.leftLeg=new gr(y,K),this.leftLeg.name="leftLeg",this.leftLeg.add(Z),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Ib extends Ot{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:Ln,transparent:!0,alphaTest:1e-5});const e=new vt(10,16,1);Dd(e,0,0,10,16,1),this.cape=new et(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Ub extends Ot{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:Ln,transparent:!0,alphaTest:1e-5});const e=new vt(12,22,4);Dd(e,22,0,10,20,2);const n=new et(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new Ot,this.leftWing.add(n),this.add(this.leftWing);const i=new vt(12,22,4);Dd(i,22,0,10,20,2);const r=new et(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new Ot,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Fb extends Ot{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:ii});const e=new vt(8,8,4/3);Of(e,0,0,6,6,1,14,7),this.rightEar=new et(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new et(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Lm=10.8*Math.PI/180;class Ob extends Ot{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Db,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Ib,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Lm,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Ub,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Fb,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Lm,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Zo(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function Id(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(s.data[l+3]!==255)return!0}return!1}function hc(t){return t/64}function Nm(t,e,n){if(n){if(Id(t,0,0,e,e))return}else if(Id(t,0,0,e,e/2))return;const i=hc(e),r=(s,a,o,l)=>t.clearRect(s*i,a*i,o*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function kb(t,e){t.save(),t.scale(-1,1);const n=hc(e),i=(r,s,a,o,l,c)=>t.drawImage(t.canvas,r*n,s*n,a*n,o*n,-l*n,c*n,-a*n,o*n);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),t.restore()}function Bb(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d",{willReadFrequently:!0});if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),kb(i,r),Nm(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),Nm(i,t.width,!0)}function zb(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function jb(t,e){const n=zb(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function Hb(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function Vb(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function Gb(t){const e=hc(t.width),n=t.getContext("2d",{willReadFrequently:!0}),i=(o,l,c,h)=>Id(n,o*e,l*e,c*e,h*e),r=(o,l,c,h)=>Hb(n,o*e,l*e,c*e,h*e),s=(o,l,c,h)=>Vb(n,o*e,l*e,c*e,h*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function Wb(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function Xb(t,e){const n=Wb(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function Dm(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=hc(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function Qo(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const Im={type:"change"},Au={type:"start"},Um={type:"end"},Jo=new Ux,Fm=new Hi,Yb=Math.cos(70*xE.DEG2RAD);class $b extends jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",w),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Im),i.update(),s=r.NONE},this.update=function(){const D=new B,ee=new kr().setFromUnitVectors(e.up,new B(0,1,0)),pe=ee.clone().invert(),ue=new B,he=new kr,Le=new B,We=2*Math.PI;return function(fe=null){const q=i.object.position;D.copy(q).sub(i.target),D.applyQuaternion(ee),o.setFromVector3(D),i.autoRotate&&s===r.NONE&&K(y(fe)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ie=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(ie)&&isFinite(ce)&&(ie<-Math.PI?ie+=We:ie>Math.PI&&(ie-=We),ce<-Math.PI?ce+=We:ce>Math.PI&&(ce-=We),ie<=ce?o.theta=Math.max(ie,Math.min(ce,o.theta)):o.theta=o.theta>(ie+ce)/2?Math.max(ie,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=k(o.radius):o.radius=k(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(pe),q.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let je=!1;if(i.zoomToCursor&&R){let Ke=null;if(i.object.isPerspectiveCamera){const Je=D.length();Ke=k(Je*c);const fn=Je-Ke;i.object.position.addScaledVector(E,fn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Je=new B(M.x,M.y,0);Je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),je=!0;const fn=new B(M.x,M.y,0);fn.unproject(i.object),i.object.position.sub(fn).add(Je),i.object.updateMatrixWorld(),Ke=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ke).add(i.object.position):(Jo.origin.copy(i.object.position),Jo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Jo.direction))<Yb?e.lookAt(i.target):(Fm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Jo.intersectPlane(Fm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),je=!0);return c=1,R=!1,je||ue.distanceToSquared(i.object.position)>a||8*(1-he.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Im),ue.copy(i.object.position),he.copy(i.object.quaternion),Le.copy(i.target),je=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",Be),i.domElement.removeEventListener("pointercancel",Ye),i.domElement.removeEventListener("wheel",L),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Ye),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Pm,l=new Pm;let c=1;const h=new B,p=new Se,d=new Se,m=new Se,x=new Se,S=new Se,g=new Se,f=new Se,_=new Se,v=new Se,E=new B,M=new Se;let R=!1;const T=[],F={};function y(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function K(D){l.theta-=D}function Z(D){l.phi-=D}const H=function(){const D=new B;return function(pe,ue){D.setFromMatrixColumn(ue,0),D.multiplyScalar(-pe),h.add(D)}}(),Y=function(){const D=new B;return function(pe,ue){i.screenSpacePanning===!0?D.setFromMatrixColumn(ue,1):(D.setFromMatrixColumn(ue,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(pe),h.add(D)}}(),A=function(){const D=new B;return function(pe,ue){const he=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;D.copy(Le).sub(i.target);let We=D.length();We*=Math.tan(i.object.fov/2*Math.PI/180),H(2*pe*We/he.clientHeight,i.object.matrix),Y(2*ue*We/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(pe*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),Y(ue*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(D){if(!i.zoomToCursor)return;R=!0;const ee=i.domElement.getBoundingClientRect(),pe=D.clientX-ee.left,ue=D.clientY-ee.top,he=ee.width,Le=ee.height;M.x=pe/he*2-1,M.y=-(ue/Le)*2+1,E.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function j(D){p.set(D.clientX,D.clientY)}function P(D){U(D),f.set(D.clientX,D.clientY)}function z(D){x.set(D.clientX,D.clientY)}function re(D){d.set(D.clientX,D.clientY),m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;K(2*Math.PI*m.x/ee.clientHeight),Z(2*Math.PI*m.y/ee.clientHeight),p.copy(d),i.update()}function oe(D){_.set(D.clientX,D.clientY),v.subVectors(_,f),v.y>0?N(b()):v.y<0&&I(b()),f.copy(_),i.update()}function me(D){S.set(D.clientX,D.clientY),g.subVectors(S,x).multiplyScalar(i.panSpeed),A(g.x,g.y),x.copy(S),i.update()}function ye(D){U(D),D.deltaY<0?I(b()):D.deltaY>0&&N(b()),i.update()}function Me(D){let ee=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):A(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):A(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):A(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):A(-i.keyPanSpeed,0),ee=!0;break}ee&&(D.preventDefault(),i.update())}function we(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const D=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);p.set(D,ee)}}function Xe(){if(T.length===1)x.set(T[0].pageX,T[0].pageY);else{const D=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);x.set(D,ee)}}function Ut(){const D=T[0].pageX-T[1].pageX,ee=T[0].pageY-T[1].pageY,pe=Math.sqrt(D*D+ee*ee);f.set(0,pe)}function Ue(){i.enableZoom&&Ut(),i.enablePan&&Xe()}function G(){i.enableZoom&&Ut(),i.enableRotate&&we()}function wt(D){if(T.length==1)d.set(D.pageX,D.pageY);else{const pe=$(D),ue=.5*(D.pageX+pe.x),he=.5*(D.pageY+pe.y);d.set(ue,he)}m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;K(2*Math.PI*m.x/ee.clientHeight),Z(2*Math.PI*m.y/ee.clientHeight),p.copy(d)}function Te(D){if(T.length===1)S.set(D.pageX,D.pageY);else{const ee=$(D),pe=.5*(D.pageX+ee.x),ue=.5*(D.pageY+ee.y);S.set(pe,ue)}g.subVectors(S,x).multiplyScalar(i.panSpeed),A(g.x,g.y),x.copy(S)}function De(D){const ee=$(D),pe=D.pageX-ee.x,ue=D.pageY-ee.y,he=Math.sqrt(pe*pe+ue*ue);_.set(0,he),v.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),N(v.y),f.copy(_)}function Ce(D){i.enableZoom&&De(D),i.enablePan&&Te(D)}function nt(D){i.enableZoom&&De(D),i.enableRotate&&wt(D)}function Be(D){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",Ye)),ae(D),D.pointerType==="touch"?X(D):Tt(D))}function Ie(D){i.enabled!==!1&&(D.pointerType==="touch"?se(D):Lt(D))}function Ye(D){Ee(D),T.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Ye)),i.dispatchEvent(Um),s=r.NONE}function Tt(D){let ee;switch(D.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Gr.DOLLY:if(i.enableZoom===!1)return;P(D),s=r.DOLLY;break;case Gr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;z(D),s=r.PAN}else{if(i.enableRotate===!1)return;j(D),s=r.ROTATE}break;case Gr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;j(D),s=r.ROTATE}else{if(i.enablePan===!1)return;z(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function Lt(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;re(D);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(D);break;case r.PAN:if(i.enablePan===!1)return;me(D);break}}function L(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Au),ye(D),i.dispatchEvent(Um))}function w(D){i.enabled===!1||i.enablePan===!1||Me(D)}function X(D){switch(le(D),T.length){case 1:switch(i.touches.ONE){case Wr.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case Wr.PAN:if(i.enablePan===!1)return;Xe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function se(D){switch(le(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;wt(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(D),i.update();break;default:s=r.NONE}}function te(D){i.enabled!==!1&&D.preventDefault()}function ae(D){T.push(D)}function Ee(D){delete F[D.pointerId];for(let ee=0;ee<T.length;ee++)if(T[ee].pointerId==D.pointerId){T.splice(ee,1);return}}function le(D){let ee=F[D.pointerId];ee===void 0&&(ee=new Se,F[D.pointerId]=ee),ee.set(D.pageX,D.pageY)}function $(D){const ee=D.pointerId===T[0].pointerId?T[1]:T[0];return F[ee.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",Ye),i.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}const qb={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class pc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kb=new Xx(-1,1,1,-1,0,1),kf=new Di;kf.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3));kf.setAttribute("uv",new Ti([0,2,0,0,2,0],2));class Zb{constructor(e){this._mesh=new et(kf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class i0 extends pc{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Li?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hx.clone(e.uniforms),this.material=new Li({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zb(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Om extends pc{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Qb extends pc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Se);this._width=i.width,this._height=i.height,n=new Pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xs}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new i0(qb),this.copyPass.material.blending=wi,this.clock=new n0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Om!==void 0&&(a instanceof Om?i=!0:a instanceof Qb&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eA extends pc{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const tA={uniforms:{tDiffuse:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

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
	`};class Bf{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,n){if(this.paused)return;const i=n*this.speed;this.animate(e,i),this.animationObjects.forEach((r,s)=>{const a=this.progress0.get(s);r(e,this.progress-a,s)}),this.progress+=i}addAnimation(e){const n=this.currentId++;return this.progress0.set(n,this.progress),this.animationObjects.set(n,e),n}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class nA extends Bf{animate(e){const n=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n)*.01+r}}class iA extends Bf{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const n=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(n)*.5,e.skin.rightLeg.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(n)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(n/4)*.2,e.skin.head.rotation.x=Math.sin(n/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n/1.5)*.06+r}}class rA extends Bf{constructor(e="left"){super(),Object.defineProperty(this,"whichArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.whichArm=e}animate(e){const n=this.progress*2*Math.PI*.5,i=this.whichArm==="left"?e.skin.leftArm:e.skin.rightArm;i.rotation.x=180,i.rotation.z=Math.sin(n)*.5}}class sA extends Cb{constructor(e="",n={}){const i=new Jx({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new gl(e);r.magFilter=dt,r.minFilter=dt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class aA{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Nb(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Lb(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new bb,this.camera=new vn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),bn.enabled=!1,this.renderer=new Qx({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new Pi(0,0,{depthTexture:new Zx(0,0,Si)})),this.composer=new Jb(this.renderer,n),this.renderPass=new eA(this.scene,this.camera),this.fxaaPass=new i0(tA),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Ob,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new Ot,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new $b(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new n0,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new gl(this.skinCanvas),this.skinTexture.magFilter=dt,this.skinTexture.minFilter=dt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new gl(this.capeCanvas),this.capeTexture.magFilter=dt,this.capeTexture.minFilter=dt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new gl(this.earsCanvas),this.earsTexture.magFilter=dt,this.earsTexture.minFilter=dt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(Zo(e))Bb(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=Gb(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&(Dm(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Qo(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(Zo(e))jb(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return Qo(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(Zo(e))n.textureType==="skin"?Dm(this.earsCanvas,e):Xb(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Qo(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,jl)}loadBackground(e,n){if(Zo(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Xt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Qo(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new B).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Se).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Se).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof qe||e instanceof Xt?this.scene.background=e:this.scene.background=new qe(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Yt||(e=new sA(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const mc=({imageUrl:t,model:e,width:n=220,height:i=320,pose:r="walk",rotate:s=!0,interactive:a=!1,zoom:o=.95,className:l})=>{const c=ge.useRef(null),h=ge.useRef(null),[p,d]=ge.useState(!1);return ge.useEffect(()=>{if(!c.current)return;let m=null;try{const x=document.createElement("canvas");x.width=n,x.height=i,x.style.width="100%",x.style.height="100%",x.style.imageRendering="pixelated",c.current.innerHTML="",c.current.appendChild(x),m=new aA({canvas:x,width:n,height:i,preserveDrawingBuffer:!0}),m.zoom=o,m.fov=50,m.background=null,m.controls.enableRotate=a,m.controls.enableZoom=a,m.controls.enablePan=!1,m.autoRotate=s,m.autoRotateSpeed=.6,r==="walk"?m.animation=new iA:r==="wave"?m.animation=new rA:r==="idle"?m.animation=new nA:m.animation=null,h.current=m}catch(x){console.warn("SkinViewer init failed (likely no WebGL):",x),d(!0)}return()=>{try{m==null||m.dispose()}catch{}h.current=null}},[n,i,r,s,a,o]),ge.useEffect(()=>{const m=h.current;if(m)try{if(!t){m.resetSkin();return}m.loadSkin(t,{model:e==="slim"?"slim":"default"}).catch(()=>{})}catch{}},[t,e]),p?u.jsx("div",{className:l,style:{width:n,height:i,background:"repeating-conic-gradient(#E9D6B4 0% 25%, #D9BF8E 0% 50%) 50%/16px 16px",border:"3px solid #2A2138",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"VT323, monospace",fontSize:14,color:"#2A2138",textAlign:"center",padding:8},children:"3D preview unavailable"}):u.jsx("div",{ref:c,className:l,style:{width:n,height:i,lineHeight:0}})},Ne=({name:t,size:e=14,color:n="#2A2138",className:i})=>{const r=n,s=a=>u.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",shapeRendering:"crispEdges",className:i,style:{display:"inline-block",verticalAlign:"middle"},children:a});switch(t){case"plus":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"x":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r})]}));case"pencil":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"10",y:"2",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"8",y:"4",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"4",y:"8",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"13",width:"3",height:"1",fill:"#5B3A1F"})]}));case"eraser":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"9",width:"10",height:"4",fill:"#FF9FB1"}),u.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"13",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"9",width:"1",height:"4",fill:r}),u.jsx("rect",{x:"12",y:"9",width:"1",height:"4",fill:r}),u.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#FFFBEA"})]}));case"fill":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"6",height:"2",fill:"#F5C04A"}),u.jsx("rect",{x:"5",y:"11",width:"4",height:"1",fill:r}),u.jsx("rect",{x:"11",y:"9",width:"2",height:"3",fill:"#3FB6A8"})]}));case"eyedropper":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"10",y:"2",width:"3",height:"2",fill:"#7B7F87"}),u.jsx("rect",{x:"9",y:"4",width:"3",height:"2",fill:"#C8CCD2"}),u.jsx("rect",{x:"7",y:"6",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"8",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"10",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"12",width:"2",height:"2",fill:r})]}));case"shade":return s(u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"8",cy:"8",r:"5",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"5",height:"3",fill:"#1B1424"})]}));case"lighten":return s(u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"8",cy:"8",r:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"7",width:"13",height:"3",fill:"#FFFBEA"})]}));case"download":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"7",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"12",width:"10",height:"2",fill:r})]}));case"upload":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"6",width:"2",height:"7",fill:r}),u.jsx("rect",{x:"5",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"2",width:"10",height:"2",fill:r})]}));case"trash":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"9",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"1",height:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"10",y:"7",width:"1",height:"5",fill:"#F5C04A"})]}));case"eye":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),u.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"4",y:"10",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#FFFBEA"}),u.jsx("rect",{x:"7",y:"7",width:"3",height:"3",fill:"#3FB6A8"}),u.jsx("rect",{x:"8",y:"8",width:"1",height:"1",fill:r})]}));case"eye-off":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#7B7F87"}),u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r})]}));case"lock":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"unlock":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"mirror":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"12",fill:r}),u.jsx("rect",{x:"2",y:"4",width:"4",height:"8",fill:"#F5C04A"}),u.jsx("rect",{x:"2",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"}),u.jsx("rect",{x:"10",y:"4",width:"4",height:"8",fill:"#3FB6A8"}),u.jsx("rect",{x:"10",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"})]}));case"grid":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"6",y:"3",width:"1",height:"10",fill:r}),u.jsx("rect",{x:"9",y:"3",width:"1",height:"10",fill:r})]}));case"mask":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"6",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#F7E6CF"})]}));case"undo":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"6",width:"4",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"10",width:"2",height:"2",fill:r})]}));case"redo":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"12",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"6",width:"4",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"10",width:"2",height:"2",fill:r})]}));case"home":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"3",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"6",y:"9",width:"4",height:"5",fill:"#F5C04A"})]}));case"save":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"2",width:"12",height:"12",fill:r}),u.jsx("rect",{x:"4",y:"3",width:"8",height:"4",fill:"#F7E6CF"}),u.jsx("rect",{x:"5",y:"4",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"4",fill:"#F7E6CF"})]}));case"folder":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"5",width:"5",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"6",width:"12",height:"8",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"6",fill:"#F5C04A"})]}));case"folder-big":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"1",y:"4",width:"7",height:"2",fill:r}),u.jsx("rect",{x:"1",y:"5",width:"14",height:"10",fill:r}),u.jsx("rect",{x:"2",y:"7",width:"12",height:"7",fill:"#F5C04A"})]}));case"merge":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"2",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"2",stroke:r,fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"11",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"8",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"1",fill:r})]}));case"duplicate":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"2",width:"9",height:"9",fill:r}),u.jsx("rect",{x:"3",y:"3",width:"7",height:"7",fill:"#F5C04A"}),u.jsx("rect",{x:"5",y:"5",width:"9",height:"9",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"7",height:"7",fill:"#F7E6CF"})]}));case"up":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"down":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"check":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"10",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"6",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"8",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"10",y:"4",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"12",y:"2",width:"2",height:"2",fill:r})]}));case"face":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#C39979"}),u.jsx("rect",{x:"5",y:"6",width:"1",height:"1",fill:r}),u.jsx("rect",{x:"10",y:"6",width:"1",height:"1",fill:r}),u.jsx("rect",{x:"6",y:"9",width:"4",height:"1",fill:r})]}));case"hair":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3D2614"}),u.jsx("rect",{x:"3",y:"6",width:"2",height:"6",fill:"#3D2614"}),u.jsx("rect",{x:"11",y:"6",width:"2",height:"6",fill:"#3D2614"})]}));case"shirt":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"10",height:"2",fill:"#2F8FCF"}),u.jsx("rect",{x:"2",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),u.jsx("rect",{x:"12",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"7",fill:"#2F8FCF"}),u.jsx("rect",{x:"6",y:"4",width:"4",height:"1",fill:"#F7E6CF"})]}));case"pants":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3B5BA3"}),u.jsx("rect",{x:"3",y:"6",width:"4",height:"8",fill:"#3B5BA3"}),u.jsx("rect",{x:"9",y:"6",width:"4",height:"8",fill:"#3B5BA3"})]}));case"shoes":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),u.jsx("rect",{x:"9",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),u.jsx("rect",{x:"2",y:"12",width:"12",height:"2",fill:"#2A2138"})]}));case"star":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"3",fill:r})]}))}},oA=({onNew:t,onEdit:e})=>{const n=Ar(v=>v.skins),i=Ar(v=>v.remove),r=Ar(v=>v.rename),[s,a]=ge.useState("all"),[o,l]=ge.useState(""),[c,h]=ge.useState(null),[p,d]=ge.useState(""),m=ge.useMemo(()=>n.filter(v=>s==="all"?!0:v.model===s).filter(v=>o.trim()?v.name.toLowerCase().includes(o.trim().toLowerCase()):!0),[n,s,o]),x=new Date,S=x.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),g=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\s/g,""),f=x.getFullYear(),_=`${S} ${g} ${f}`;return u.jsxs("div",{className:"h-full w-full p-3 lg:p-4 overflow-hidden flex flex-col",children:[u.jsx(lA,{dateStr:_}),u.jsxs("div",{className:"mt-3 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-3 overflow-hidden",children:[u.jsx(cA,{filter:s,setFilter:a,search:o,setSearch:l,filtered:m,onNew:t,onEdit:e,remove:i,rename:r,renamingId:c,setRenamingId:h,renameValue:p,setRenameValue:d}),u.jsx(fA,{onNew:t,count:n.length})]})]})},lA=({dateStr:t})=>u.jsxs("div",{className:"flex items-center justify-between gap-3 px-2",children:[u.jsx("div",{className:"flex items-center gap-3",children:u.jsx("span",{className:"pixel-text text-[14px] text-accent-cream",children:"PIXEL SKIN STUDIO"})}),u.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[u.jsx("span",{className:"pixel-text-sm text-accent-cream/80",children:"JAVA 64x64"}),u.jsx("span",{className:"pixel-text-sm text-accent-yellow",children:t})]})]}),cA=t=>u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full overflow-hidden",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"/SKINS/MY-CREATIONS"}),u.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[u.jsx(Cu,{label:"ALL",active:t.filter==="all",onClick:()=>t.setFilter("all")}),u.jsx(Cu,{label:"CLASSIC",active:t.filter==="classic",onClick:()=>t.setFilter("classic")}),u.jsx(Cu,{label:"SLIM",active:t.filter==="slim",onClick:()=>t.setFilter("slim")}),u.jsx("button",{"aria-label":"close",className:"ml-2 w-6 h-6 grid place-items-center bg-accent-cream text-ink border-2 border-accent-cream",onClick:()=>{},children:u.jsx(Ne,{name:"x",size:10})})]})]}),u.jsxs("div",{className:"px-4 py-3 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-3",children:[u.jsxs("button",{onClick:t.onNew,className:"pixel-button cream flex items-center gap-2",children:[u.jsx(Ne,{name:"plus"})," NEW SKIN"]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"pixel-text-sm",children:"SEARCH"}),u.jsx("input",{className:"pixel-input w-40",placeholder:"name...",value:t.search,onChange:e=>t.setSearch(e.target.value)})]}),u.jsxs("div",{className:"ml-auto pixel-text-sm flex items-center gap-2",children:[u.jsx(Ne,{name:"folder"}),u.jsxs("span",{children:[t.filtered.length," ITEMS"]})]})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk2 p-5",children:t.filtered.length===0?u.jsx(uA,{onNew:t.onNew}):u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5",children:t.filtered.map((e,n)=>u.jsx(dA,{skin:e,index:n,onEdit:()=>t.onEdit(e.id),onDelete:()=>t.remove(e.id),renaming:t.renamingId===e.id,renameValue:t.renameValue,onStartRename:()=>{t.setRenamingId(e.id),t.setRenameValue(e.name)},onChangeRename:t.setRenameValue,onCommitRename:()=>{t.renameValue.trim()&&t.rename(e.id,t.renameValue.trim()),t.setRenamingId(null)},onCancelRename:()=>t.setRenamingId(null)},e.id))})}),u.jsx("div",{className:"h-4 bg-accent-yellow border-t-[3px] border-ink"})]}),Cu=({label:t,active:e,onClick:n})=>u.jsx("button",{onClick:n,className:"pixel-button compact",style:{background:e?"#F5C04A":"transparent",color:e?"#2A2138":"#F7E6CF",borderColor:e?"#2A2138":"#F7E6CF",boxShadow:e?"2px 2px 0 0 #1B1424":"2px 2px 0 0 #F7E6CF"},children:t}),uA=({onNew:t})=>u.jsx("div",{className:"h-full min-h-0 grid place-items-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"mx-auto w-20 h-20 mb-3 grid place-items-center",children:u.jsx(Ne,{name:"folder-big",size:48})}),u.jsx("div",{className:"pixel-text text-[12px] mb-2",children:"NO SKINS YET"}),u.jsx("div",{className:"font-body text-[18px] mb-4 text-ink/70",children:"Boot up your first creation!"}),u.jsxs("button",{onClick:t,className:"pixel-button danger flex items-center gap-2 mx-auto",children:[u.jsx(Ne,{name:"plus"})," CREATE SKIN"]})]})}),dA=({skin:t,index:e,onEdit:n,onDelete:i,renaming:r,renameValue:s,onStartRename:a,onChangeRename:o,onCommitRename:l,onCancelRename:c})=>u.jsx("div",{className:"slide-in-up",style:{animationDelay:`${e*30}ms`},children:u.jsxs("div",{className:"pixel-card group cursor-pointer relative overflow-hidden p-0",children:[u.jsx("div",{className:"h-44 grid place-items-center",style:{background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)",borderBottom:"3px solid #2A2138"},onClick:n,children:u.jsx(mc,{imageUrl:t.dataUrl,model:t.model,width:120,height:160,pose:"idle",rotate:!0})}),u.jsxs("div",{className:"p-2 flex items-center gap-2 bg-accent-cream",children:[r?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:s,onChange:h=>o(h.target.value),onBlur:l,onKeyDown:h=>{h.key==="Enter"&&l(),h.key==="Escape"&&c()}}):u.jsx("button",{className:"pixel-text-sm text-left flex-1 truncate min-w-0",onClick:a,title:t.name,children:t.name}),u.jsx("button",{className:"pixel-chip",style:{background:t.model==="slim"?"#3FB6A8":"#F5C04A",color:"#2A2138"},children:t.model.toUpperCase()})]}),u.jsxs("div",{className:"flex border-t-[3px] border-ink",children:[u.jsxs("button",{onClick:n,className:"flex-1 p-2 pixel-text-sm bg-accent-yellow hover:bg-[#FFCF63] border-r-[3px] border-ink flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"pencil"})," EDIT"]}),u.jsxs("button",{onClick:()=>{const h=document.createElement("a");h.href=t.dataUrl,h.download=`${t.name}.png`,h.click()},className:"flex-1 p-2 pixel-text-sm bg-accent-teal text-ink border-r-[3px] border-ink flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"download"})," SAVE"]}),u.jsxs("button",{onClick:()=>{confirm(`Delete "${t.name}"?`)&&i()},className:"flex-1 p-2 pixel-text-sm bg-accent-red text-accent-cream flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"trash"})," BIN"]})]})]})}),fA=({onNew:t,count:e})=>u.jsxs("div",{className:"hidden lg:flex flex-col gap-3 min-h-0 overflow-hidden",children:[u.jsx(xa,{label:"HD",sublabel:`${e} skins`,onClick:()=>{},svg:u.jsx(hA,{})}),u.jsx(xa,{label:"CURRENT PROJECT",sublabel:"floppy.dat",onClick:t,svg:u.jsx(km,{variant:"red"})}),u.jsx(xa,{label:"NEW PROJECT",sublabel:"64x64 atlas",onClick:t,svg:u.jsx(km,{variant:"cream"})}),u.jsx(xa,{label:"CLIPBOARD",sublabel:"paste skin",onClick:()=>{var n;(n=window.__skin_upload)==null||n.call(window)},svg:u.jsx(pA,{})}),u.jsx(xa,{label:"BIN",sublabel:"clear cache",onClick:()=>{confirm("Clear local cache? This does not delete saved skins.")&&location.reload()},svg:u.jsx(mA,{})})]}),xa=({label:t,sublabel:e,onClick:n,svg:i})=>u.jsxs("button",{onClick:n,className:"pixel-card text-center hover:translate-y-[-2px] transition-transform",children:[u.jsx("div",{className:"h-16 grid place-items-center mb-1 float-anim",children:i}),u.jsx("div",{className:"pixel-text-sm",children:t}),e&&u.jsx("div",{className:"font-body text-[14px] text-ink/70",children:e})]}),km=({variant:t})=>u.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"1",y:"1",width:"14",height:"14",fill:t==="red"?"#D54B4B":"#F5C04A"}),u.jsx("rect",{x:"1",y:"1",width:"14",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"14",width:"14",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"1",width:"1",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"14",y:"1",width:"1",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"2",width:"10",height:"4",fill:"#F7E6CF"}),u.jsx("rect",{x:"5",y:"3",width:"2",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"9",y:"3",width:"2",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"8",width:"10",height:"6",fill:"#F7E6CF"}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:"#B07B47"}),u.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#B07B47"}),u.jsx("rect",{x:"4",y:"13",width:"8",height:"1",fill:"#B07B47"})]}),hA=()=>u.jsxs("svg",{width:"56",height:"48",viewBox:"0 0 16 14",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"0",y:"0",width:"16",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"1",width:"14",height:"6",fill:"#F5C04A"}),u.jsx("rect",{x:"2",y:"2",width:"12",height:"4",fill:"#E68E2E"}),u.jsx("rect",{x:"3",y:"3",width:"10",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"1",y:"8",width:"14",height:"5",fill:"#B07B47"}),u.jsx("rect",{x:"2",y:"10",width:"2",height:"2",fill:"#3FB6A8"}),u.jsx("rect",{x:"5",y:"10",width:"9",height:"2",fill:"#2A2138"})]}),pA=()=>u.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"2",y:"2",width:"10",height:"13",fill:"#F5C04A",stroke:"#2A2138"}),u.jsx("rect",{x:"2",y:"2",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"2",y:"14",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"2",y:"2",width:"1",height:"13",fill:"#2A2138"}),u.jsx("rect",{x:"11",y:"2",width:"1",height:"13",fill:"#2A2138"}),u.jsx("rect",{x:"4",y:"3",width:"6",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"5",y:"2",width:"4",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"3",y:"6",width:"8",height:"1",fill:"#FFFBEA"}),u.jsx("rect",{x:"3",y:"8",width:"8",height:"1",fill:"#FFFBEA"}),u.jsx("rect",{x:"3",y:"10",width:"6",height:"1",fill:"#FFFBEA"})]}),mA=()=>u.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"10",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"14",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"5",width:"1",height:"10",fill:"#2A2138"}),u.jsx("rect",{x:"12",y:"5",width:"1",height:"10",fill:"#2A2138"}),u.jsx("rect",{x:"5",y:"7",width:"2",height:"6",fill:"#2A2138"}),u.jsx("rect",{x:"9",y:"7",width:"2",height:"6",fill:"#2A2138"}),u.jsx("path",{d:"M7 10 l1 1 -1 1",stroke:"#3FB6A8"})]}),ke=64,ct=64,Gt=(t,e,n,i,r)=>({top:{x:t+r,y:e,w:n,h:r},bottom:{x:t+r+n,y:e,w:n,h:r},right:{x:t,y:e+r,w:r,h:i},front:{x:t+r,y:e+r,w:n,h:i},left:{x:t+r+n,y:e+r,w:r,h:i},back:{x:t+r+n+r,y:e+r,w:n,h:i}}),r0={head:Gt(0,0,8,8,8),head_overlay:Gt(32,0,8,8,8),body:Gt(16,16,8,12,4),body_overlay:Gt(16,32,8,12,4),right_arm:Gt(40,16,4,12,4),right_arm_overlay:Gt(40,32,4,12,4),left_arm:Gt(32,48,4,12,4),left_arm_overlay:Gt(48,48,4,12,4),right_leg:Gt(0,16,4,12,4),right_leg_overlay:Gt(0,32,4,12,4),left_leg:Gt(16,48,4,12,4),left_leg_overlay:Gt(0,48,4,12,4)},gA={...r0,right_arm:Gt(40,16,3,12,4),right_arm_overlay:Gt(40,32,3,12,4),left_arm:Gt(32,48,3,12,4),left_arm_overlay:Gt(48,48,3,12,4)},gc=t=>t==="slim"?gA:r0,vA=t=>{const e=Object.values(t),n=Math.min(...e.map(a=>a.x)),i=Math.min(...e.map(a=>a.y)),r=Math.max(...e.map(a=>a.x+a.w)),s=Math.max(...e.map(a=>a.y+a.h));return{x:n,y:i,w:r-n,h:s-i}},xA=[{key:"head",label:"Head",overlayKey:"head_overlay"},{key:"body",label:"Body",overlayKey:"body_overlay"},{key:"right_arm",label:"Right Arm",overlayKey:"right_arm_overlay"},{key:"left_arm",label:"Left Arm",overlayKey:"left_arm_overlay"},{key:"right_leg",label:"Right Leg",overlayKey:"right_leg_overlay"},{key:"left_leg",label:"Left Leg",overlayKey:"left_leg_overlay"}],s0=t=>{const e=new Uint8Array(ke*ct),n=gc(t);for(const i of Object.values(n))for(const r of Object.values(i))for(let s=0;s<r.h;s++)for(let a=0;a<r.w;a++){const o=r.x+a,l=r.y+s;o>=0&&l>=0&&o<ke&&l<ct&&(e[l*ke+o]=1)}return e},_A=s0("classic"),yA=s0("slim"),SA=t=>t==="slim"?yA:_A,EA={skin:{light:"#F0C8B0",mid:"#E0B49A",dark:"#C99582",shadow:"#A87B68"}},MA=(t,e)=>(t*374761393+e*668265263>>>0)%997,wA=(t,e,n,i)=>{const r=(e-n.y)/Math.max(1,n.h-1),s=MA(t,e)%5;return r<.2?s===0?i.light:i.mid:r<.55?s<2?i.mid:i.light:r<.8?s<2?i.dark:i.mid:i.shadow??i.dark},TA=(t,e,n)=>{for(let i=0;i<e.h;i++)for(let r=0;r<e.w;r++)t.fillStyle=wA(e.x+r,e.y+i,e,n),t.fillRect(e.x+r,e.y+i,1,1)},fs=(t,e,n,i)=>{t.fillStyle=i,t.fillRect(e,n,1,1)},si=(t=ke,e=ct)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n},qt=t=>{const e=t.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("2d context unavailable");return e.imageSmoothingEnabled=!1,e},wa=t=>{const e=si(t.width,t.height);return qt(e).drawImage(t,0,0),e},Nr=(t,e=ke,n=ct)=>new Promise((i,r)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=si(e,n),o=qt(a),l=s.height===32?32:n;o.drawImage(s,0,0,s.width,s.height,0,0,e,l),i(a)},s.onerror=r,s.src=t}),bA=t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{if(typeof i.result!="string")return n("bad read");Nr(i.result).then(e,n)},i.onerror=n,i.readAsDataURL(t)}),AA=t=>(t.hue??0)!==0||(t.saturation??1)!==1||(t.brightness??1)!==1,zf=(t,e)=>{if(!e.visible)return;const n=e.hue??0,i=e.saturation??1,r=e.brightness??1;if(AA(e)){const s=si(e.canvas.width,e.canvas.height),a=qt(s);a.filter=`hue-rotate(${n}deg) saturate(${i*100}%) brightness(${r*100}%)`,a.drawImage(e.canvas,0,0),a.filter="none",t.globalAlpha=e.opacity,t.drawImage(s,0,0)}else t.globalAlpha=e.opacity,t.drawImage(e.canvas,0,0);t.globalAlpha=1},a0=t=>{const e=si();return zf(qt(e),{...t,opacity:1,visible:!0}),ao(e)},Wl=t=>{const e=si(),n=qt(e);for(const i of t)zf(n,i);return e},ao=t=>t.toDataURL("image/png"),CA=(t,e)=>{t.toBlob(n=>{if(!n)return;const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e.endsWith(".png")?e:`${e}.png`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),500)},"image/png")},o0=t=>{const e=si(),n=qt(e);n.imageSmoothingEnabled=!1;const i=gc(t),r=EA.skin,s=["head","body","right_arm","left_arm","right_leg","left_leg"];for(const o of s)for(const l of Object.values(i[o]))TA(n,l,r);const a=i.head.front;return n.fillStyle="#FFF5EE",fs(n,a.x+2,a.y+4,"#FFF5EE"),fs(n,a.x+5,a.y+4,"#FFF5EE"),n.fillStyle="#5A9A8A",fs(n,a.x+2,a.y+4,"#5A9A8A"),fs(n,a.x+5,a.y+4,"#5A9A8A"),n.fillStyle="#2A2428",fs(n,a.x+2,a.y+5,"#2A2428"),fs(n,a.x+5,a.y+5,"#2A2428"),e},RA=t=>o0(t),PA=(t,e,n)=>{const i=qt(t).getImageData(e,n,1,1).data,r=s=>s.toString(16).padStart(2,"0");return`#${r(i[0])}${r(i[1])}${r(i[2])}${r(i[3])}`},l0=t=>{if(t.startsWith("#")){const r=t.slice(1);if(r.length===6)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),255];if(r.length===8)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),parseInt(r.slice(6,8),16)];if(r.length===3){const s=parseInt(r[0]+r[0],16),a=parseInt(r[1]+r[1],16),o=parseInt(r[2]+r[2],16);return[s,a,o,255]}}const e=si(1,1),n=qt(e);n.fillStyle=t,n.fillRect(0,0,1,1);const i=n.getImageData(0,0,1,1).data;return[i[0],i[1],i[2],i[3]]},Sr=()=>Math.random().toString(36).slice(2,9),Ru=(t,e)=>({layers:t.map(n=>({id:n.id,dataUrl:ao(n.canvas)})),activeLayerId:e??""}),LA=40,Bm=t=>{const e=RA(t);return[{id:Sr(),name:"Base",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:e},{id:Sr(),name:"Paint",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:si()}]},xe=Qs((t,e)=>{const n=Bm("slim");return{model:"slim",layers:n,activeLayerId:n[n.length-1].id,tool:"pencil",color:"#E68E2E",recentColors:["#E68E2E","#D54B4B","#F5C04A","#3FB6A8","#7E4FB8","#C39979","#2A2138","#FFFBEA","#46367E","#3D2614"],brushSize:1,mirror:!1,showOverlay:!0,showGrid:!0,showOnlyValid:!0,activePart:"all",history:[],future:[],setModel:i=>t({model:i}),setTool:i=>t({tool:i}),setColor:i=>t({color:i}),pushRecentColor:i=>t(r=>({recentColors:[i,...r.recentColors.filter(s=>s!==i)].slice(0,16)})),setBrushSize:i=>t({brushSize:Math.max(1,Math.min(4,i))}),toggleMirror:()=>t(i=>({mirror:!i.mirror})),toggleOverlay:()=>t(i=>({showOverlay:!i.showOverlay})),toggleGrid:()=>t(i=>({showGrid:!i.showGrid})),toggleOnlyValid:()=>t(i=>({showOnlyValid:!i.showOnlyValid})),setActivePart:i=>t({activePart:i}),setActiveLayer:i=>t({activeLayerId:i}),addBlankLayer:(i="Layer")=>{e().snapshot();const r={id:Sr(),name:i,visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:si()};t(s=>({layers:[...s.layers,r],activeLayerId:r.id}))},addLayerFromCanvas:(i,r="Imported")=>{e().snapshot();const s={id:Sr(),name:r,visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:wa(i)};t(a=>({layers:[...a.layers,s],activeLayerId:s.id}))},addLayerFromDataUrl:async(i,r="Imported")=>{const s=await Nr(i);e().addLayerFromCanvas(s,r)},duplicateLayer:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(c=>c.id===i);if(s===-1)return r;const a=r.layers[s],o={...a,id:Sr(),name:`${a.name} copy`,canvas:wa(a.canvas)},l=[...r.layers];return l.splice(s+1,0,o),{layers:l,activeLayerId:o.id}})},deleteLayer:i=>{e().snapshot(),t(r=>{if(r.layers.length<=1)return r;const s=r.layers.findIndex(l=>l.id===i);if(s===-1)return r;const a=r.layers.filter(l=>l.id!==i),o=r.activeLayerId===i?a[Math.min(s,a.length-1)].id:r.activeLayerId;return{layers:a,activeLayerId:o}})},toggleLayerVisible:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,visible:!s.visible}:s)}))},toggleLayerLocked:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,locked:!s.locked}:s)}))},setLayerOpacity:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,opacity:r}:a)}))},setLayerAdjustments:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id!==i?a:{...a,hue:r.hue??a.hue,saturation:r.saturation??a.saturation,brightness:r.brightness??a.brightness})}))},resetLayerAdjustments:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,hue:0,saturation:1,brightness:1}:s)}))},renameLayer:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,name:r}:a)}))},moveLayer:(i,r)=>{e().snapshot(),t(s=>{const a=s.layers.findIndex(h=>h.id===i);if(a===-1)return s;const o=a+r;if(o<0||o>=s.layers.length)return s;const l=[...s.layers],[c]=l.splice(a,1);return l.splice(o,0,c),{layers:l}})},mergeDown:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(p=>p.id===i);if(s<=0)return r;const a=r.layers[s],o=r.layers[s-1],l=wa(o.canvas),c=qt(l);c.globalAlpha=a.opacity,c.drawImage(a.canvas,0,0),c.globalAlpha=1;const h=[...r.layers];return h.splice(s,1),h[s-1]={...o,canvas:l},{layers:h,activeLayerId:o.id}})},snapshot:()=>{t(i=>{const r=Ru(i.layers,i.activeLayerId),s=[...i.history,r];return s.length>LA&&s.shift(),{history:s,future:[]}})},undo:()=>{const i=e();if(i.history.length===0)return;const r=i.history[i.history.length-1],s=Ru(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Nr(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const h=o.layers.find(m=>m.id===l.id),p=o.layers[c],d=h??p;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,hue:(d==null?void 0:d.hue)??0,saturation:(d==null?void 0:d.saturation)??1,brightness:(d==null?void 0:d.brightness)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:o.history.slice(0,-1),future:[...o.future,s]}))})},redo:()=>{const i=e();if(i.future.length===0)return;const r=i.future[i.future.length-1],s=Ru(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Nr(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const h=o.layers.find(m=>m.id===l.id),p=o.layers[c],d=h??p;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,hue:(d==null?void 0:d.hue)??0,saturation:(d==null?void 0:d.saturation)??1,brightness:(d==null?void 0:d.brightness)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:[...o.history,s],future:o.future.slice(0,-1)}))})},composite:()=>Wl(e().layers),reset:i=>{const r=i??"slim",s=Bm(r);t({layers:s,activeLayerId:s[s.length-1].id,model:r,history:[],future:[]})},loadSkinAsBase:i=>{const r={id:Sr(),name:"Base",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:wa(i)},s={id:Sr(),name:"Paint",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:si()};t({layers:[r,s],activeLayerId:s.id,history:[],future:[]})}}}),zm=(t,e,n,i,r,s,a)=>{if(e<0||n<0||e>=ke||n>=ct)return;const o=(n*ke+e)*4;t[o]=i,t[o+1]=r,t[o+2]=s,t[o+3]=a},NA=(t,e,n,i,r)=>{const s=qt(t),a=s.getImageData(0,0,ke,ct),[o,l,c,h]=l0(i.color),p=Math.max(1,Math.floor(i.size)),d=Math.floor(p/2);for(let m=0;m<p;m++)for(let x=0;x<p;x++){const S=e-d+x,g=n-d+m;if(!(r&&(S<0||g<0||S>=ke||g>=ct||!r[g*ke+S]))&&(zm(a.data,S,g,o,l,c,h),i.mirror)){const f=c0(S,g);if(f){if(r&&!r[f.y*ke+f.x])continue;zm(a.data,f.x,f.y,o,l,c,h)}}}s.putImageData(a,0,0)},DA=(t,e,n,i=1,r=!1)=>{const s=qt(t);s.save(),s.globalCompositeOperation="destination-out",s.fillStyle="#000";const a=Math.floor(i/2);if(s.fillRect(e-a,n-a,i,i),r){const o=c0(e,n);o&&s.fillRect(o.x-a,o.y-a,i,i)}s.restore()},c0=(t,e)=>{const n=[{x:8,y:8,w:8,h:8},{x:40,y:8,w:8,h:8},{x:20,y:20,w:8,h:12},{x:20,y:36,w:8,h:12}];for(const i of n)if(t>=i.x&&t<i.x+i.w&&e>=i.y&&e<i.y+i.h){const r=t-i.x;return{x:i.x+(i.w-1-r),y:e}}return null},IA=(t,e,n,i,r)=>{if(e<0||n<0||e>=ke||n>=ct||r&&!r[n*ke+e])return;const s=qt(t),a=s.getImageData(0,0,ke,ct),o=a.data,l=(v,E)=>(E*ke+v)*4,c=l(e,n),h=o[c],p=o[c+1],d=o[c+2],m=o[c+3],[x,S,g,f]=l0(i);if(h===x&&p===S&&d===g&&m===f)return;const _=[[e,n]];for(;_.length;){const[v,E]=_.pop();if(v<0||E<0||v>=ke||E>=ct||r&&!r[E*ke+v])continue;const M=l(v,E);o[M]!==h||o[M+1]!==p||o[M+2]!==d||o[M+3]!==m||(o[M]=x,o[M+1]=S,o[M+2]=g,o[M+3]=f,_.push([v+1,E],[v-1,E],[v,E+1],[v,E-1]))}s.putImageData(a,0,0)},jm=(t,e,n,i,r=1,s)=>{const a=qt(t),o=a.getImageData(0,0,ke,ct),l=o.data,c=Math.floor(r/2);for(let h=0;h<r;h++)for(let p=0;p<r;p++){const d=e-c+p,m=n-c+h;if(d<0||m<0||d>=ke||m>=ct||s&&!s[m*ke+d])continue;const x=(m*ke+d)*4;if(l[x+3]===0)continue;const S=1+i;l[x]=Math.max(0,Math.min(255,Math.round(l[x]*S))),l[x+1]=Math.max(0,Math.min(255,Math.round(l[x+1]*S))),l[x+2]=Math.max(0,Math.min(255,Math.round(l[x+2]*S)))}a.putImageData(o,0,0)},UA=(t,e,n,i,r,s)=>{let a=e,o=n;const l=Math.abs(i-e),c=-Math.abs(r-n),h=e<i?1:-1,p=n<r?1:-1;let d=l+c;for(;s(t,a,o),!(a===i&&o===r);){const m=2*d;m>=c&&(d+=c,a+=h),m<=l&&(d+=l,o+=p)}},FA=({model:t,partFilter:e="all"})=>{const n=ge.useRef(null),i=ge.useRef(null),r=xe(A=>A.layers),s=xe(A=>A.activeLayerId),a=xe(A=>A.tool),o=xe(A=>A.color),l=xe(A=>A.brushSize),c=xe(A=>A.mirror),h=xe(A=>A.showGrid),p=xe(A=>A.showOnlyValid),d=xe(A=>A.setColor),m=xe(A=>A.pushRecentColor),x=xe(A=>A.snapshot),S=xe(A=>A.setTool),[g,f]=ge.useState({w:512,h:512}),_=ge.useRef(null),v=ge.useRef(null),E=ge.useRef(!1),M=ge.useRef(!1),R=SA(t),T=OA(t,e,R);ge.useEffect(()=>{const A=_.current;if(!A)return;const N=new ResizeObserver(()=>{const I=A.getBoundingClientRect(),U=Math.floor(Math.min(I.width,I.height));f({w:U,h:U})});return N.observe(A),()=>N.disconnect()},[]),ge.useEffect(()=>{const A=n.current;if(!A)return;const N=qt(A);N.clearRect(0,0,A.width,A.height),N.imageSmoothingEnabled=!1;for(const I of r)I.visible&&(N.globalAlpha=I.opacity,N.drawImage(I.canvas,0,0));N.globalAlpha=1},[r]),ge.useEffect(()=>{const A=i.current;if(!A)return;const N=A.getContext("2d");if(!N)return;N.clearRect(0,0,A.width,A.height),N.imageSmoothingEnabled=!1;const I=A.width/ke;if(p){N.getImageData(0,0,A.width,A.height),N.fillStyle="rgba(20, 14, 28, 0.62)";for(let k=0;k<ct;k++)for(let j=0;j<ke;j++)R[k*ke+j]||N.fillRect(j*I,k*I,I,I)}if(e!=="all"){N.fillStyle="rgba(20, 14, 28, 0.55)";for(let k=0;k<ct;k++)for(let j=0;j<ke;j++)R[k*ke+j]&&!T[k*ke+j]&&N.fillRect(j*I,k*I,I,I)}if(h&&I>=6){N.strokeStyle=I>=16?"rgba(42,33,56,.32)":"rgba(42,33,56,.18)",N.lineWidth=1,N.beginPath();for(let k=0;k<=ke;k++)N.moveTo(Math.round(k*I)+.5,0),N.lineTo(Math.round(k*I)+.5,A.height);for(let k=0;k<=ct;k++)N.moveTo(0,Math.round(k*I)+.5),N.lineTo(A.width,Math.round(k*I)+.5);N.stroke(),N.strokeStyle="rgba(42,33,56,.7)",N.lineWidth=1,N.beginPath();for(let k=0;k<=ke;k+=8)N.moveTo(Math.round(k*I)+.5,0),N.lineTo(Math.round(k*I)+.5,A.height);for(let k=0;k<=ct;k+=8)N.moveTo(0,Math.round(k*I)+.5),N.lineTo(A.width,Math.round(k*I)+.5);N.stroke()}const U=gc(t);N.strokeStyle="rgba(213,75,75,.85)",N.lineWidth=2;for(const[k,j]of Object.entries(U)){if(e!=="all"&&k!==e&&!k.startsWith(e+"_"))continue;const P=vA(j);N.strokeRect(Math.round(P.x*I)+.5,Math.round(P.y*I)+.5,Math.round(P.w*I)-1,Math.round(P.h*I)-1)}},[h,p,t,e,R,T,g]);const F=ge.useCallback(A=>{const N=n.current;if(!N)return null;const I=N.getBoundingClientRect(),U=(A.clientX-I.left)/I.width*ke,k=(A.clientY-I.top)/I.height*ct;return{x:Math.max(0,Math.min(ke-1,Math.floor(U))),y:Math.max(0,Math.min(ct-1,Math.floor(k)))}},[]),y=r.find(A=>A.id===s)??null,b=ge.useCallback((A,N)=>{if(!y||y.locked)return;const I=y.canvas;a==="pencil"?NA(I,A,N,{color:o,size:l,mirror:c},T):a==="eraser"?DA(I,A,N,l,c):a==="shade"?jm(I,A,N,-.15,l,T):a==="lighten"&&jm(I,A,N,.18,l,T),M.current=!0,xe.setState(U=>({layers:[...U.layers]}))},[y,l,o,c,T,a]),K=A=>{A.preventDefault(),A.target.setPointerCapture(A.pointerId);const N=F(A);if(N){if(a==="eyedropper"){const I=n.current;if(!I)return;const U=PA(I,N.x*(I.width/ke),N.y*(I.height/ct));if(U.length===9&&U.endsWith("00"))return;const k="#"+U.slice(1,7);d(k),m(k),S("pencil");return}if(a==="fill"){if(!y||y.locked)return;x(),IA(y.canvas,N.x,N.y,o,T),xe.setState(I=>({layers:[...I.layers]}));return}x(),E.current=!0,M.current=!1,v.current=N,b(N.x,N.y)}},Z=A=>{if(!E.current)return;const N=F(A);if(!N)return;const I=v.current;I&&(I.x!==N.x||I.y!==N.y)?UA(n.current,I.x,I.y,N.x,N.y,(U,k,j)=>{b(k,j)}):b(N.x,N.y),v.current=N},H=A=>{var N,I;E.current=!1,v.current=null,M.current&&o&&m(o),M.current=!1,(I=(N=A.target).releasePointerCapture)==null||I.call(N,A.pointerId)},Y=Math.max(ke*4,Math.floor(Math.min(g.w,g.h)/ke)*ke);return u.jsx("div",{ref:_,className:"relative w-full h-full flex items-center justify-center",style:{touchAction:"none"},children:u.jsxs("div",{className:"relative border-[3px] border-ink shadow-[6px_6px_0_0_#2A2138]",style:{width:Y,height:Y,background:"repeating-conic-gradient(#E9D6B4 0% 25%, #D9BF8E 0% 50%) 50%/24px 24px"},children:[u.jsx("canvas",{ref:n,width:ke*16,height:ct*16,style:{position:"absolute",inset:0,width:"100%",height:"100%",imageRendering:"pixelated",pointerEvents:"none"}}),u.jsx("canvas",{ref:i,width:ke*16,height:ct*16,onPointerDown:K,onPointerMove:Z,onPointerUp:H,onPointerCancel:H,style:{position:"absolute",inset:0,width:"100%",height:"100%",cursor:a==="eyedropper"?"crosshair":a==="fill"?"cell":"crosshair",touchAction:"none"}})]})})},OA=(t,e,n)=>ge.useMemo(()=>{if(e==="all")return n;const i=new Uint8Array(ke*ct),r=gc(t),s=[];for(const a of Object.keys(r))(a===e||a===e+"_overlay")&&s.push(a);for(const a of s){const o=r[a];for(const l of Object.values(o))for(let c=0;c<l.h;c++)for(let h=0;h<l.w;h++){const p=l.x+h,d=l.y+c;p>=0&&d>=0&&p<ke&&d<ct&&(i[d*ke+p]=1)}}return i},[t,e,n]);let kA=1;const Ud=Qs(t=>({items:[],show:e=>{const n=kA++;t(i=>({items:[...i.items,{id:n,message:e}]})),setTimeout(()=>{t(i=>({items:i.items.filter(r=>r.id!==n)}))},2400)},dismiss:e=>t(n=>({items:n.items.filter(i=>i.id!==e)}))})),vc=()=>({show:Ud(e=>e.show)}),BA=()=>{const t=Ud(n=>n.items),e=Ud(n=>n.dismiss);return ge.useEffect(()=>{},[t]),u.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center pointer-events-none",children:t.map(n=>u.jsx("div",{className:"pixel-window slide-in-up pointer-events-auto",style:{background:"#F5C04A"},children:u.jsxs("div",{className:"px-4 py-2 flex items-center gap-3",children:[u.jsx("span",{className:"pixel-text-sm",children:n.message}),u.jsx("button",{className:"pixel-text-sm hover:underline",onClick:()=>e(n.id),children:"X"})]})},n.id))})},vi=Qs((t,e)=>({confirm:null,savePreset:null,saveColor:null,askConfirm:n=>new Promise(i=>{t({confirm:{...n,resolve:i}})}),askSavePreset:n=>new Promise(i=>{t({savePreset:{...n,resolve:i}})}),askSaveColor:n=>new Promise(i=>{t({saveColor:{...n,resolve:i}})}),closeConfirm:n=>{const i=e().confirm;i&&i.resolve(n),t({confirm:null})},closeSavePreset:n=>{const i=e().savePreset;i&&i.resolve(n),t({savePreset:null})},closeSaveColor:n=>{const i=e().saveColor;i&&i.resolve(n),t({saveColor:null})}})),oo=()=>{const t=vi(i=>i.askConfirm),e=vi(i=>i.askSavePreset),n=vi(i=>i.askSaveColor);return{askConfirm:t,askSavePreset:e,askSaveColor:n}},u0="pixel-skin-studio:presets:v2",zA="pixel-skin-studio:presets:v1",Hm=()=>Math.random().toString(36).slice(2,10),Bi=t=>{try{localStorage.setItem(u0,JSON.stringify(t))}catch(e){console.warn("Could not persist presets",e)}},jA=()=>{try{const t=localStorage.getItem(zA);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>({...n,folderId:n.folderId??null})):[]}catch{return[]}},jn=Qs(t=>({folders:[],presets:[],hydrate:()=>{try{const e=localStorage.getItem(u0);if(e){const i=JSON.parse(e);if(i&&Array.isArray(i.presets)){t({folders:Array.isArray(i.folders)?i.folders:[],presets:i.presets.map(r=>({...r,folderId:r.folderId??null}))});return}}const n=jA();if(n.length>0){const i={folders:[],presets:n};Bi(i),t(i)}}catch{}},saveFromLayer:({name:e,model:n,dataUrl:i,folderId:r=null})=>{const s={id:Hm(),name:e.trim()||"Untitled Preset",model:n,dataUrl:i,folderId:r,createdAt:Date.now()};return t(a=>{const o=[s,...a.presets];return Bi({folders:a.folders,presets:o}),{presets:o}}),s},remove:e=>{t(n=>{const i=n.presets.filter(r=>r.id!==e);return Bi({folders:n.folders,presets:i}),{presets:i}})},rename:(e,n)=>{t(i=>{const r=i.presets.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return Bi({folders:i.folders,presets:r}),{presets:r}})},moveToFolder:(e,n)=>{t(i=>{const r=i.presets.map(s=>s.id===e?{...s,folderId:n}:s);return Bi({folders:i.folders,presets:r}),{presets:r}})},addFolder:e=>{const n={id:Hm(),name:e.trim()||"New Folder",createdAt:Date.now()};return t(i=>{const r=[...i.folders,n];return Bi({folders:r,presets:i.presets}),{folders:r}}),n},renameFolder:(e,n)=>{t(i=>{const r=i.folders.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return Bi({folders:r,presets:i.presets}),{folders:r}})},removeFolder:e=>{t(n=>{const i=n.folders.filter(s=>s.id!==e),r=n.presets.map(s=>s.folderId===e?{...s,folderId:null}:s);return Bi({folders:i,presets:r}),{folders:i,presets:r}})}})),HA=t=>[{id:null,name:"Unfiled"},...t.map(e=>({id:e.id,name:e.name}))],d0=()=>{const{askSavePreset:t}=oo(),e=jn(r=>r.folders),n=jn(r=>r.saveFromLayer);return{promptSavePreset:ge.useCallback(async r=>{const s=await t({defaultName:r.defaultName,model:r.model,dataUrl:r.dataUrl,folderOptions:HA(e),defaultFolderId:r.defaultFolderId??null});return s?n({name:s.name,model:r.model,dataUrl:r.dataUrl,folderId:s.folderId}):null},[t,e,n])}},Vm=()=>{const t=xe(y=>y.layers),e=xe(y=>y.activeLayerId),n=xe(y=>y.setActiveLayer),i=xe(y=>y.addBlankLayer),r=xe(y=>y.duplicateLayer),s=xe(y=>y.deleteLayer),a=xe(y=>y.toggleLayerVisible),o=xe(y=>y.toggleLayerLocked),l=xe(y=>y.setLayerOpacity),c=xe(y=>y.setLayerAdjustments),h=xe(y=>y.resetLayerAdjustments),p=xe(y=>y.moveLayer),d=xe(y=>y.renameLayer),m=xe(y=>y.mergeDown),x=xe(y=>y.addLayerFromCanvas),S=xe(y=>y.model),{promptSavePreset:g}=d0(),{askConfirm:f}=oo(),_=vc(),v=ge.useRef(null),[E,M]=ge.useState(null);typeof window<"u"&&(window.__skin_upload=()=>{var y;return(y=v.current)==null?void 0:y.click()});const R=[...t].reverse(),T=async(y,b)=>{const K=t.find(H=>H.id===y);if(!K)return;const Z=await g({defaultName:b,model:S,dataUrl:a0(K)});Z&&_.show(`Preset "${Z.name}" saved.`)},F=async(y,b)=>{if(t.length<=1)return;await f({title:"Delete Layer",message:`Delete layer "${b}"? This cannot be undone.`,confirmLabel:"Delete",variant:"danger"})&&s(y)};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"LAYERS"}),u.jsx("span",{className:"ml-auto panel-label text-accent-cream/90",children:t.length})]}),u.jsxs("div",{className:"p-2 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-1",children:[u.jsxs("button",{onClick:()=>i("Layer"),className:"pixel-button compact flex items-center gap-1",title:"New blank layer",children:[u.jsx(Ne,{name:"plus"})," NEW"]}),u.jsxs("button",{onClick:()=>{var y;return(y=v.current)==null?void 0:y.click()},className:"pixel-button compact teal flex items-center gap-1",title:"Upload skin as a layer",children:[u.jsx(Ne,{name:"upload"})," UPLOAD"]}),u.jsx("input",{ref:v,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:async y=>{const b=Array.from(y.target.files??[]);for(const K of b)try{const Z=await bA(K);x(Z,K.name.replace(/\.[^.]+$/,""))}catch(Z){console.warn("Could not load file",Z)}v.current&&(v.current.value="")},multiple:!0})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk",children:R.map(y=>{const b=y.id===e,K=y.hue!==0||y.saturation!==1||y.brightness!==1;return u.jsxs("div",{className:`relative border-b-[3px] border-ink ${b?"bg-accent-yellow":"bg-accent-cream"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 p-2",children:[u.jsx("button",{className:"pixel-button compact icon",onClick:()=>a(y.id),title:y.visible?"Hide":"Show",children:u.jsx(Ne,{name:y.visible?"eye":"eye-off"})}),u.jsxs("button",{onClick:()=>n(y.id),className:"flex items-center gap-2 flex-1 min-w-0 text-left",children:[u.jsx(VA,{layer:y,active:b}),u.jsx("input",{className:"bg-transparent outline-none w-full truncate panel-text",value:y.name,onChange:Z=>d(y.id,Z.target.value),onFocus:()=>n(y.id)})]}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>o(y.id),title:y.locked?"Unlock":"Lock",children:u.jsx(Ne,{name:y.locked?"lock":"unlock"})}),u.jsx("button",{className:"pixel-button compact icon purple",onClick:()=>T(y.id,y.name),title:"Save this layer as a preset",children:u.jsx(Ne,{name:"star",color:"#FFFBEA",size:10})}),u.jsx("button",{className:`pixel-button compact ${E===y.id?"active":""}`,onClick:()=>M(Z=>Z===y.id?null:y.id),title:"Show layer adjustments",children:"FX"})]}),E===y.id&&u.jsxs("div",{className:"px-2 pb-2 space-y-2 border-t border-ink/20 pt-2 mx-2",children:[u.jsxs("div",{className:"panel-label flex items-center justify-between",children:[u.jsx("span",{children:"Adjustments"}),K&&u.jsx("button",{className:"panel-text underline opacity-80 hover:opacity-100",onClick:()=>h(y.id),children:"Reset"})]}),u.jsx(el,{label:"Opacity",min:0,max:1,step:.05,value:y.opacity,display:`${Math.round(y.opacity*100)}%`,onChange:Z=>l(y.id,Z)}),u.jsx(el,{label:"Hue",min:-180,max:180,step:1,value:y.hue,display:`${y.hue}°`,onChange:Z=>c(y.id,{hue:Z})}),u.jsx(el,{label:"Saturation",min:0,max:2,step:.05,value:y.saturation,display:`${Math.round(y.saturation*100)}%`,onChange:Z=>c(y.id,{saturation:Z})}),u.jsx(el,{label:"Brightness",min:0,max:2,step:.05,value:y.brightness,display:`${Math.round(y.brightness*100)}%`,onChange:Z=>c(y.id,{brightness:Z})})]}),u.jsxs("div",{className:"px-2 pb-2 flex items-center gap-1 flex-wrap",children:[u.jsx("button",{className:"pixel-button compact icon",onClick:()=>p(y.id,1),title:"Move up",children:u.jsx(Ne,{name:"up"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>p(y.id,-1),title:"Move down",children:u.jsx(Ne,{name:"down"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>r(y.id),title:"Duplicate",children:u.jsx(Ne,{name:"duplicate"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>m(y.id),title:"Merge down",children:u.jsx(Ne,{name:"merge"})}),u.jsx("button",{className:"pixel-button compact icon danger ml-auto",onClick:()=>F(y.id,y.name),title:"Delete",disabled:t.length<=1,children:u.jsx(Ne,{name:"trash",color:"#FFFBEA"})})]})]},y.id)})})]})},el=({label:t,min:e,max:n,step:i,value:r,display:s,onChange:a})=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"panel-text w-20 shrink-0 opacity-80",children:t}),u.jsx("input",{type:"range",min:e,max:n,step:i,value:r,onChange:o=>a(Number(o.target.value)),className:"flex-1 pixel-range"}),u.jsx("span",{className:"panel-text w-12 text-right shrink-0",children:s})]}),VA=({layer:t,active:e})=>{const n=ge.useRef(null);return ge.useEffect(()=>{const i=n.current;if(!i)return;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.clearRect(0,0,i.width,i.height);const s=4;for(let l=0;l<i.height;l+=s)for(let c=0;c<i.width;c+=s)r.fillStyle=(c/s+l/s)%2===0?"#E9D6B4":"#B07B47",r.fillRect(c,l,s,s);const a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=qt(a);zf(o,{...t,opacity:1}),r.drawImage(a,0,0)},[t]),u.jsx("canvas",{ref:n,width:32,height:32,className:`border-2 ${e?"border-ink":"border-ink/70"}`,style:{imageRendering:"pixelated"}})},Gm=()=>{const t=xe(r=>r.layers),e=xe(r=>r.model),[n,i]=ge.useState(null);return ge.useEffect(()=>{const r=window.setTimeout(()=>{i(ao(Wl(t)))},80);return()=>clearTimeout(r)},[t]),u.jsxs("div",{className:"pixel-window shrink-0",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"PREVIEW"})}),u.jsx("div",{className:"p-2 flex justify-center",style:{background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)"},children:u.jsx(mc,{imageUrl:n,model:e,width:100,height:140,pose:"idle",rotate:!0,interactive:!0,zoom:.88})})]})},GA=[{key:"pencil",label:"Pencil",icon:"pencil",shortcut:"B"},{key:"eraser",label:"Eraser",icon:"eraser",shortcut:"E"},{key:"fill",label:"Fill",icon:"fill",shortcut:"G"},{key:"eyedropper",label:"Pick",icon:"eyedropper",shortcut:"I"},{key:"shade",label:"Shade",icon:"shade",shortcut:"S"},{key:"lighten",label:"Lighten",icon:"lighten",shortcut:"L"}],Wm=()=>{const t=xe(x=>x.tool),e=xe(x=>x.setTool),n=xe(x=>x.brushSize),i=xe(x=>x.setBrushSize),r=xe(x=>x.mirror),s=xe(x=>x.toggleMirror),a=xe(x=>x.showGrid),o=xe(x=>x.toggleGrid),l=xe(x=>x.showOnlyValid),c=xe(x=>x.toggleOnlyValid),h=xe(x=>x.undo),p=xe(x=>x.redo),d=xe(x=>x.history),m=xe(x=>x.future);return u.jsxs("div",{className:"pixel-window",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"TOOLS"})}),u.jsx("div",{className:"p-2 grid grid-cols-3 gap-2 bg-bg-desk2",children:GA.map(x=>u.jsxs("button",{onClick:()=>e(x.key),title:`${x.label} (${x.shortcut})`,className:`pixel-button compact ${t===x.key?"active":""} flex flex-col items-center gap-1 py-3`,children:[u.jsx(Ne,{name:x.icon,size:16,color:t===x.key?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:x.label.toUpperCase()})]},x.key))}),u.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk space-y-2",children:[u.jsxs("div",{children:[u.jsx("div",{className:"pixel-text-sm mb-1",children:"BRUSH"}),u.jsx("div",{className:"grid grid-cols-4 gap-1",children:[1,2,3,4].map(x=>u.jsx("button",{onClick:()=>i(x),className:`pixel-button compact ${n===x?"active":""} grid place-items-center py-2`,children:u.jsx("div",{className:"bg-ink",style:{width:x*3,height:x*3}})},x))})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[u.jsxs("button",{onClick:s,className:`pixel-button compact ${r?"active":""} flex items-center justify-center gap-1`,title:"Mirror across X axis",children:[u.jsx(Ne,{name:"mirror",color:r?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"MIRROR"})]}),u.jsxs("button",{onClick:o,className:`pixel-button compact ${a?"active":""} flex items-center justify-center gap-1`,children:[u.jsx(Ne,{name:"grid",color:a?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"GRID"})]}),u.jsxs("button",{onClick:c,className:`pixel-button compact ${l?"active":""} flex items-center justify-center gap-1 col-span-2`,title:"Hide pixels that Minecraft doesn't use",children:[u.jsx(Ne,{name:"mask",color:l?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"SAFE MASK"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[u.jsxs("button",{disabled:d.length===0,onClick:h,className:"pixel-button compact flex items-center justify-center gap-1",title:"Undo (Ctrl+Z)",children:[u.jsx(Ne,{name:"undo"})," ",u.jsx("span",{style:{fontSize:8},children:"UNDO"})]}),u.jsxs("button",{disabled:m.length===0,onClick:p,className:"pixel-button compact flex items-center justify-center gap-1",title:"Redo (Ctrl+Y)",children:[u.jsx(Ne,{name:"redo"})," ",u.jsx("span",{style:{fontSize:8},children:"REDO"})]})]})]})]})},f0="pixel-skin-studio:colors:v1",WA=()=>Math.random().toString(36).slice(2,10),XA=t=>{const e=t.trim().toLowerCase();return/^#[0-9a-f]{6}$/.test(e)?e:/^#[0-9a-f]{3}$/.test(e)?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:null},hs=(t,e)=>{try{localStorage.setItem(f0,JSON.stringify({palettes:t,activePaletteId:e}))}catch(n){console.warn("Could not persist color palettes",n)}},pi=Qs(t=>({palettes:[],activePaletteId:null,hydrate:()=>{var e;try{const n=localStorage.getItem(f0);if(!n)return;const i=JSON.parse(n);Array.isArray(i.palettes)&&t({palettes:i.palettes,activePaletteId:i.activePaletteId??((e=i.palettes[0])==null?void 0:e.id)??null})}catch{}},createPalette:e=>{const n={id:WA(),name:e.trim()||"My Palette",colors:[],createdAt:Date.now()};return t(i=>{const r=[...i.palettes,n],s=i.activePaletteId??n.id;return hs(r,s),{palettes:r,activePaletteId:s}}),n},removePalette:e=>{t(n=>{var s;const i=n.palettes.filter(a=>a.id!==e),r=n.activePaletteId===e?((s=i[0])==null?void 0:s.id)??null:n.activePaletteId;return hs(i,r),{palettes:i,activePaletteId:r}})},renamePalette:(e,n)=>{t(i=>{const r=i.palettes.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return hs(r,i.activePaletteId),{palettes:r}})},setActivePalette:e=>{t(n=>(hs(n.palettes,e),{activePaletteId:e}))},addColor:(e,n)=>{const i=XA(n);i&&t(r=>{const s=r.palettes.map(a=>a.id!==e||a.colors.some(o=>o.toLowerCase()===i)?a:{...a,colors:[i,...a.colors]});return hs(s,r.activePaletteId),{palettes:s}})},removeColor:(e,n)=>{t(i=>{const r=i.palettes.map(s=>s.id===e?{...s,colors:s.colors.filter(a=>a!==n)}:s);return hs(r,i.activePaletteId),{palettes:r}})}})),YA=["#FFE0BD","#FFCB94","#E6B17A","#C39979","#A87B5C","#7A4F2A","#5B3A1F","#3D2614","#FF6B6B","#D54B4B","#A82F38","#7A1A1A","#FFB14A","#E68E2E","#B96B16","#7A4416","#FFEC8B","#F5C04A","#C98E20","#7E5A12","#A6E3C8","#3FB6A8","#1F7A70","#0E4A45","#7EC8F5","#3B5BA3","#1F3262","#0E1A3A","#C7A2F0","#7E4FB8","#4A2C6E","#291643","#FFC0E2","#FF7AB6","#B3437E","#6E1E50","#FFFFFF","#FFFBEA","#F7E6CF","#E9D6B4","#B07B47","#7B7F87","#3B3344","#2A2138","#1B1424","#000000"],Xm=()=>{const t=xe(A=>A.color),e=xe(A=>A.setColor),n=xe(A=>A.recentColors),i=pi(A=>A.palettes),r=pi(A=>A.activePaletteId),s=pi(A=>A.createPalette),a=pi(A=>A.removePalette),o=pi(A=>A.renamePalette),l=pi(A=>A.setActivePalette),c=pi(A=>A.addColor),h=pi(A=>A.removeColor),{askConfirm:p,askSaveColor:d}=oo(),m=vc(),[x,S]=ge.useState(!1),[g,f]=ge.useState(t),[_,v]=ge.useState("swatches"),[E,M]=ge.useState(""),[R,T]=ge.useState(null),[F,y]=ge.useState(""),b=i.find(A=>A.id===r)??null;ge.useEffect(()=>f(t),[t]);const K=async()=>{let A=i.map(U=>({id:U.id,name:U.name})),N=r;if(A.length===0){if(!await p({title:"Create Palette",message:'You need a palette first. Create "My Colors" now?',confirmLabel:"Create"}))return;const k=s("My Colors");A=[{id:k.id,name:k.name}],N=k.id}const I=await d({color:t,paletteOptions:A,defaultPaletteId:N});I&&(c(I.paletteId,t),m.show(`Color ${t.toUpperCase()} saved.`))},Z=async()=>{const A=E.trim();if(!A||!await p({title:"Create Palette",message:`Create palette "${A}"?`,confirmLabel:"Create"}))return;const I=s(A);l(I.id),M(""),m.show(`Palette "${A}" created.`)},H=async(A,N)=>{await p({title:"Delete Palette",message:`Delete palette "${N}" and all saved colors in it?`,confirmLabel:"Delete",variant:"danger"})&&a(A)},Y=async(A,N)=>{await p({title:"Remove Color",message:`Remove ${N.toUpperCase()} from this palette?`,confirmLabel:"Remove",variant:"danger"})&&h(A,N)};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"COLORS"})}),u.jsxs("div",{className:"p-2 bg-bg-desk2 flex items-center gap-2 border-b-[3px] border-ink",children:[u.jsx("div",{className:"w-12 h-12 border-[3px] border-ink shrink-0",style:{background:t}}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"panel-label mb-1",children:"Hex"}),u.jsx("input",{className:"pixel-input w-full",value:g,onChange:A=>f(A.target.value),onBlur:()=>{/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(g)?e(g):f(t)}})]}),u.jsx("button",{className:"pixel-button icon shrink-0",title:"Open native picker",onClick:()=>S(A=>!A),children:u.jsx($A,{})})]}),x&&u.jsx("div",{className:"p-2 bg-bg-desk2 border-b-[3px] border-ink",children:u.jsx("input",{type:"color",value:t.slice(0,7),onChange:A=>{e(A.target.value),f(A.target.value)},className:"w-full h-12"})}),u.jsxs("div",{className:"flex border-b-[3px] border-ink bg-bg-desk",children:[u.jsx(Ym,{active:_==="swatches",onClick:()=>v("swatches"),children:"Swatches"}),u.jsx(Ym,{active:_==="library",onClick:()=>v("library"),children:"My palettes"})]}),_==="swatches"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"p-2 grid grid-cols-8 gap-1 bg-bg-desk flex-1 min-h-0 overflow-y-auto pixel-scroll",children:YA.map(A=>u.jsx(Pu,{color:A,active:A.toLowerCase()===t.toLowerCase(),onClick:()=>e(A)},A))}),n.length>0&&u.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk2",children:[u.jsx("div",{className:"panel-label mb-1",children:"Recent"}),u.jsx("div",{className:"grid grid-cols-8 gap-1",children:n.slice(0,8).map((A,N)=>u.jsx(Pu,{color:A,active:A.toLowerCase()===t.toLowerCase(),onClick:()=>e(A)},A+N))})]}),u.jsx("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk2",children:u.jsxs("button",{onClick:K,className:"pixel-button compact teal w-full flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"save",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Save color"})]})})]}):u.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-2 space-y-3",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("div",{className:"panel-label",children:"New palette"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{className:"pixel-input flex-1 min-w-0",placeholder:"Palette name…",value:E,onChange:A=>M(A.target.value),onKeyDown:A=>A.key==="Enter"&&Z()}),u.jsx("button",{onClick:Z,disabled:!E.trim(),className:"pixel-button compact teal shrink-0",children:u.jsx("span",{className:"panel-btn-text",children:"Add"})})]})]}),i.length===0?u.jsx("p",{className:"panel-text text-ink/70 text-center py-4",children:"No palettes yet. Create one to save your favorite colors."}):i.map(A=>u.jsxs("div",{className:`border-[3px] border-ink p-2 ${A.id===r?"bg-accent-yellow":"bg-accent-cream"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[R===A.id?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:F,onChange:N=>y(N.target.value),onBlur:()=>{F.trim()&&o(A.id,F),T(null)},onKeyDown:N=>{N.key==="Enter"&&(F.trim()&&o(A.id,F),T(null)),N.key==="Escape"&&T(null)}}):u.jsx("button",{className:"panel-text font-bold flex-1 text-left truncate",onClick:()=>l(A.id),children:A.name}),u.jsx("button",{onClick:()=>{T(A.id),y(A.name)},className:"pixel-button compact icon",title:"Rename palette",children:u.jsx(Ne,{name:"pencil",size:10})}),u.jsx("button",{onClick:()=>H(A.id,A.name),className:"pixel-button compact icon danger",children:u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:10})})]}),A.colors.length===0?u.jsx("p",{className:"panel-text text-ink/60",children:"No colors saved yet."}):u.jsx("div",{className:"grid grid-cols-8 gap-1",children:A.colors.map(N=>u.jsx(Pu,{color:N,active:N.toLowerCase()===t.toLowerCase(),onClick:()=>e(N),onRemove:()=>Y(A.id,N)},N))})]},A.id)),b&&u.jsxs("button",{onClick:K,className:"pixel-button compact purple w-full flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"save",color:"#FFFBEA",size:12}),u.jsxs("span",{className:"panel-btn-text",children:["Save current to ",b.name]})]})]})]})},Ym=({active:t,onClick:e,children:n})=>u.jsx("button",{onClick:e,className:`flex-1 py-2 panel-btn-text border-r-[3px] last:border-r-0 border-ink ${t?"bg-accent-yellow":"bg-bg-desk2 hover:bg-accent-cream"}`,children:n}),Pu=({color:t,active:e,onClick:n,onRemove:i})=>u.jsxs("div",{className:"relative group",children:[u.jsx("button",{onClick:n,className:"aspect-square w-full border-2",style:{background:t,borderColor:e?"#D54B4B":"#2A2138",boxShadow:e?"inset 0 0 0 2px #FFFBEA":"none"},title:t}),i&&u.jsx("button",{onClick:r=>{r.stopPropagation(),i()},className:"absolute -top-1 -right-1 hidden group-hover:flex w-4 h-4 bg-accent-red border border-ink items-center justify-center text-[10px] text-accent-cream leading-none",title:"Remove color",children:"×"})]}),$A=()=>u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"6",y:"2",width:"4",height:"3",fill:"#D54B4B"}),u.jsx("rect",{x:"10",y:"3",width:"3",height:"4",fill:"#F5C04A"}),u.jsx("rect",{x:"11",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),u.jsx("rect",{x:"8",y:"11",width:"4",height:"3",fill:"#7E4FB8"}),u.jsx("rect",{x:"3",y:"11",width:"4",height:"3",fill:"#3B5BA3"}),u.jsx("rect",{x:"2",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),u.jsx("rect",{x:"3",y:"3",width:"3",height:"4",fill:"#FF7AB6"}),u.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#FFFBEA"})]}),qA=({dataUrl:t,model:e,width:n=88,height:i=132})=>{const[r,s]=ge.useState(null);return ge.useEffect(()=>{if(!t){s(null);return}const a=o0(e),o=new Image;o.onload=()=>{const l=a.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(o,0,0),s(ao(a))},o.src=t},[t,e]),u.jsx("div",{className:"grid place-items-center overflow-hidden",style:{width:"100%",height:i+8,background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)"},children:u.jsx(mc,{imageUrl:r,model:e,width:n,height:i,pose:"idle",rotate:!1,zoom:.9})})},$m=()=>{const t=xe(P=>P.model),e=xe(P=>P.layers),n=xe(P=>P.activeLayerId),i=xe(P=>P.addLayerFromCanvas),r=xe(P=>P.snapshot),s=jn(P=>P.folders),a=jn(P=>P.presets),o=jn(P=>P.remove),l=jn(P=>P.rename),c=jn(P=>P.moveToFolder),h=jn(P=>P.addFolder),p=jn(P=>P.renameFolder),d=jn(P=>P.removeFolder),{promptSavePreset:m}=d0(),{askConfirm:x}=oo(),S=vc(),[g,f]=ge.useState(null),[_,v]=ge.useState(new Set),[E,M]=ge.useState(null),[R,T]=ge.useState(null),[F,y]=ge.useState(""),[b,K]=ge.useState(""),Z=e.find(P=>P.id===n)??null,H=ge.useMemo(()=>a.filter(P=>!P.folderId),[a]),Y=ge.useMemo(()=>{const P=new Map;for(const z of s)P.set(z.id,[]);for(const z of a)z.folderId&&P.has(z.folderId)&&P.get(z.folderId).push(z);return P},[s,a]),A=async()=>{if(!Z)return;const P=await m({defaultName:Z.name||"My Preset",model:t,dataUrl:a0(Z),defaultFolderId:g});P&&S.show(`Preset "${P.name}" saved.`)},N=async()=>{const P=b.trim();!P||!await x({title:"Create Folder",message:`Create folder "${P}"?`,confirmLabel:"Create"})||(h(P),K(""),S.show(`Folder "${P}" created.`))},I=async(P,z)=>{const re=await Nr(P.dataUrl);if(z==="merge"){const oe=e.find(Me=>Me.id===n);if(!oe||oe.locked||!await x({title:"Merge Preset",message:`Merge "${P.name}" into the active layer?`,confirmLabel:"Merge"}))return;r(),qt(oe.canvas).drawImage(re,0,0),xe.setState(Me=>({layers:[...Me.layers]}));return}i(wa(re),P.name)},U=async P=>{await x({title:"Delete Preset",message:`Delete preset "${P.name}"? This cannot be undone.`,confirmLabel:"Delete",variant:"danger"})&&o(P.id)},k=async P=>{var oe;const z=((oe=Y.get(P.id))==null?void 0:oe.length)??0;await x({title:"Delete Folder",message:z>0?`Delete folder "${P.name}"? ${z} preset(s) will move to Unfiled.`:`Delete folder "${P.name}"?`,confirmLabel:"Delete",variant:"danger"})&&d(P.id)},j=P=>{v(z=>{const re=new Set(z);return re.has(P)?re.delete(P):re.add(P),re})};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"MY PRESETS"}),u.jsx("span",{className:"ml-auto panel-label text-accent-cream/90",children:a.length})]}),u.jsxs("div",{className:"p-3 border-b-[3px] border-ink bg-bg-desk2 space-y-2",children:[u.jsx("div",{className:"panel-label",children:"Save active layer"}),u.jsx("div",{className:"flex gap-2",children:u.jsxs("button",{onClick:A,disabled:!Z,className:"pixel-button compact purple flex items-center gap-1 shrink-0 flex-1 justify-center",title:"Save the selected layer as a reusable preset",children:[u.jsx(Ne,{name:"star",color:"#FFFBEA",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Save preset"})]})}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Default folder"}),u.jsxs("select",{className:"pixel-input w-full",value:g??"",onChange:P=>f(P.target.value?P.target.value:null),children:[u.jsx("option",{value:"",children:"Unfiled"}),s.map(P=>u.jsx("option",{value:P.id,children:P.name},P.id))]})]}),!Z&&u.jsx("p",{className:"panel-text text-ink/70",children:"Select a layer to save it as a preset."})]}),u.jsxs("div",{className:"p-3 border-b-[3px] border-ink bg-bg-desk space-y-2",children:[u.jsx("div",{className:"panel-label",children:"New folder"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{className:"pixel-input flex-1 min-w-0",placeholder:"Folder name…",value:b,onChange:P=>K(P.target.value),onKeyDown:P=>P.key==="Enter"&&N()}),u.jsxs("button",{onClick:N,disabled:!b.trim(),className:"pixel-button compact teal flex items-center gap-1 shrink-0",children:[u.jsx(Ne,{name:"folder",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Add"})]})]})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-3",children:a.length===0&&s.length===0?u.jsxs("div",{className:"text-center py-8 px-3",children:[u.jsx(Ne,{name:"star",size:28,className:"mb-2 opacity-40"}),u.jsx("div",{className:"panel-label mb-2",children:"No presets yet"}),u.jsx("p",{className:"panel-text text-ink/75",children:"Paint on a layer, create folders to organize, then save presets here. Apply them to any skin as a new layer."})]}):u.jsxs("div",{className:"space-y-4",children:[s.map(P=>u.jsx(KA,{folder:P,presets:Y.get(P.id)??[],model:t,collapsed:_.has(P.id),renaming:R===P.id,renameValue:F,onToggle:()=>j(P.id),onStartRename:()=>{T(P.id),y(P.name)},onChangeRename:y,onCommitRename:()=>{F.trim()&&p(P.id,F),T(null)},onCancelRename:()=>T(null),onDelete:()=>k(P),renamingPresetId:E,onStartPresetRename:(z,re)=>{M(z),y(re)},onCommitPresetRename:z=>{F.trim()&&l(z,F),M(null)},onCancelPresetRename:()=>M(null),onAdd:z=>I(z,"new-layer"),onMerge:z=>I(z,"merge"),onDeletePreset:U,folders:s,onMovePreset:c},P.id)),H.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"panel-label mb-2 flex items-center gap-2",children:[u.jsx(Ne,{name:"folder",size:14}),"Unfiled",u.jsxs("span",{className:"text-ink/60",children:["(",H.length,")"]})]}),u.jsx("div",{className:"grid grid-cols-1 gap-3",children:H.map(P=>u.jsx(h0,{preset:P,model:t,folders:s,renaming:E===P.id,renameValue:F,onStartRename:()=>{M(P.id),y(P.name)},onChangeRename:y,onCommitRename:()=>{F.trim()&&l(P.id,F),M(null)},onCancelRename:()=>M(null),onAdd:()=>I(P,"new-layer"),onMerge:()=>I(P,"merge"),onDelete:()=>U(P),onMoveFolder:z=>c(P.id,z)},P.id))})]})]})})]})},KA=({folder:t,presets:e,model:n,collapsed:i,renaming:r,renameValue:s,onToggle:a,onStartRename:o,onChangeRename:l,onCommitRename:c,onCancelRename:h,onDelete:p,renamingPresetId:d,onStartPresetRename:m,onCommitPresetRename:x,onCancelPresetRename:S,onAdd:g,onMerge:f,onDeletePreset:_,folders:v,onMovePreset:E})=>u.jsxs("div",{className:"border-[3px] border-ink bg-accent-cream/50",children:[u.jsxs("div",{className:"flex items-center gap-2 p-2 bg-accent-yellow border-b-[3px] border-ink",children:[u.jsx("button",{onClick:a,className:"pixel-button compact icon shrink-0",title:i?"Expand":"Collapse",children:u.jsx(Ne,{name:i?"down":"up",size:12})}),u.jsx(Ne,{name:"folder-big",size:16}),r?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:s,onChange:M=>l(M.target.value),onBlur:c,onKeyDown:M=>{M.key==="Enter"&&c(),M.key==="Escape"&&h()}}):u.jsx("button",{className:"panel-text flex-1 truncate text-left font-bold",onClick:o,title:"Click to rename folder",children:t.name}),u.jsx("span",{className:"panel-text text-ink/60 shrink-0",children:e.length}),u.jsx("button",{onClick:p,className:"pixel-button compact icon danger shrink-0",title:"Delete folder",children:u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:10})})]}),!i&&u.jsx("div",{className:"p-2 space-y-3",children:e.length===0?u.jsx("p",{className:"panel-text text-ink/60 text-center py-2",children:"No presets in this folder yet."}):e.map(M=>u.jsx(h0,{preset:M,model:n,folders:v,renaming:d===M.id,renameValue:s,onStartRename:()=>m(M.id,M.name),onChangeRename:l,onCommitRename:()=>x(M.id),onCancelRename:S,onAdd:()=>g(M),onMerge:()=>f(M),onDelete:()=>_(M),onMoveFolder:R=>E(M.id,R)},M.id))})]}),h0=({preset:t,model:e,folders:n,renaming:i,renameValue:r,onStartRename:s,onChangeRename:a,onCommitRename:o,onCancelRename:l,onAdd:c,onMerge:h,onDelete:p,onMoveFolder:d})=>u.jsxs("div",{className:"pixel-card p-0",children:[u.jsx(qA,{dataUrl:t.dataUrl,model:e,width:88,height:132}),u.jsxs("div",{className:"p-2 bg-accent-yellow border-t-[3px] border-ink space-y-2",children:[i?u.jsx("input",{autoFocus:!0,className:"pixel-input w-full",value:r,onChange:m=>a(m.target.value),onBlur:o,onKeyDown:m=>{m.key==="Enter"&&o(),m.key==="Escape"&&l()}}):u.jsx("button",{className:"panel-text w-full truncate text-left font-bold",onClick:s,title:"Click to rename",children:t.name}),u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:"pixel-chip shrink-0 panel-btn-text",style:{background:t.model==="slim"?"#3FB6A8":"#F5C04A",color:"#2A2138",fontSize:14},children:t.model}),n.length>0&&u.jsxs("select",{className:"pixel-input flex-1 min-w-0 text-base py-1",value:t.folderId??"",onChange:m=>d(m.target.value?m.target.value:null),title:"Move to folder",children:[u.jsx("option",{value:"",children:"Unfiled"}),n.map(m=>u.jsx("option",{value:m.id,children:m.name},m.id))]})]})]}),u.jsxs("div",{className:"grid grid-cols-3 border-t-[3px] border-ink",children:[u.jsxs("button",{onClick:c,className:"bg-accent-cream hover:bg-[#FFF1D4] border-r-[3px] border-ink p-2 flex items-center justify-center gap-1",title:"Add as new layer",children:[u.jsx(Ne,{name:"plus",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Layer"})]}),u.jsxs("button",{onClick:h,className:"bg-accent-teal hover:brightness-110 border-r-[3px] border-ink p-2 flex items-center justify-center gap-1",title:"Merge into active layer",children:[u.jsx(Ne,{name:"merge",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Merge"})]}),u.jsxs("button",{onClick:p,className:"bg-accent-red text-accent-cream p-2 flex items-center justify-center gap-1",title:"Delete preset",children:[u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Del"})]})]})]}),ZA=({editId:t,onExit:e,onSaved:n})=>{const i=xe(N=>N.layers),r=xe(N=>N.model),s=xe(N=>N.setModel),a=xe(N=>N.reset),o=xe(N=>N.loadSkinAsBase),l=xe(N=>N.setTool),c=xe(N=>N.setActivePart),h=xe(N=>N.activePart),p=xe(N=>N.undo),d=xe(N=>N.redo),{askConfirm:m}=oo(),x=Ar(N=>N.skins),S=Ar(N=>N.save),g=Ar(N=>N.update),[f,_]=ge.useState("Untitled Skin"),[v,E]=ge.useState(null),M=ge.useRef(null),[R,T]=ge.useState("canvas"),[F,y]=ge.useState(!1),[b,K]=ge.useState("tools");ge.useEffect(()=>{let N=!1;return(async()=>{if(t){const I=x.find(k=>k.id===t);if(!I||N)return;_(I.name),s(I.model);const U=await Nr(I.dataUrl);if(N)return;o(U)}else a("slim"),s("slim")})(),()=>{N=!0}},[t]),ge.useEffect(()=>{let N=0,I=null;const U=()=>{const k=Wl(i);E(ao(k)),N=0};return I=window.setTimeout(()=>{N=requestAnimationFrame(U)},60),()=>{N&&cancelAnimationFrame(N),I&&clearTimeout(I)}},[i]),ge.useEffect(()=>{const N=I=>{var k;if(((k=I.target)==null?void 0:k.tagName)==="INPUT")return;if((I.ctrlKey||I.metaKey)&&I.key.toLowerCase()==="z"){I.preventDefault(),I.shiftKey?d():p();return}if((I.ctrlKey||I.metaKey)&&I.key.toLowerCase()==="y"){I.preventDefault(),d();return}const U=I.key.toLowerCase();U==="b"&&l("pencil"),U==="e"&&l("eraser"),U==="g"&&l("fill"),U==="i"&&l("eyedropper"),U==="s"&&l("shade"),U==="l"&&l("lighten")};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[l,p,d]);const Z=async()=>{!v||!await m({title:"Save Skin",message:`Save "${f}" to your gallery?`,confirmLabel:"Save"})||(t?g(t,{name:f,model:r,dataUrl:v}):S({name:f,model:r,dataUrl:v}),n(f))},H=async()=>{if(!await m({title:"Download Skin",message:`Download "${f||"minecraft-skin"}.png"?`,confirmLabel:"Download"}))return;const I=Wl(i);CA(I,f||"minecraft-skin")},Y=async N=>{try{const I=await Nr(URL.createObjectURL(N));xe.getState().addLayerFromCanvas(I,N.name.replace(/\.[^.]+$/,""))}catch(I){console.warn(I)}},A=R==="canvas"?"preview":"canvas";return u.jsxs("div",{className:"h-full w-full p-1 sm:p-2 lg:p-3 grid gap-2 grid-rows-[auto_1fr] overflow-hidden min-h-0",children:[u.jsx(QA,{name:f,onName:_,model:r,setModel:N=>s(N),onExit:e,onSave:Z,onDownload:H,onUpload:N=>Y(N),fileInputRef:M,presetsOpen:F,setPresetsOpen:y}),u.jsxs("div",{className:"grid gap-2 min-h-0 grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_280px_320px]",children:[u.jsxs("div",{className:"hidden xl:flex flex-col gap-2 min-h-0",children:[u.jsx(Wm,{}),u.jsx("div",{className:"min-h-[200px]",children:u.jsx(Xm,{})})]}),u.jsxs("div",{className:"flex flex-col gap-2 min-h-0",children:[u.jsxs("div",{className:"pixel-window flex-1 min-h-0 flex flex-col",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:R==="canvas"?"ATLAS PAINT":"MODEL PAINT PREVIEW"}),u.jsxs("div",{className:"ml-auto flex gap-1",children:[u.jsx(Km,{active:R==="canvas",label:"ATLAS",onClick:()=>T("canvas")}),u.jsx(Km,{active:R==="preview",label:"3D MODEL",onClick:()=>T("preview")})]})]}),u.jsx(JA,{activePart:h,setActivePart:c}),u.jsx("div",{className:"flex-1 min-h-0 p-2 bg-bg-desk2",children:u.jsxs("div",{className:"h-full min-h-0 grid grid-rows-[minmax(0,1fr)_180px] md:grid-rows-[minmax(0,1fr)_220px] gap-2",children:[u.jsx(qm,{kind:R,model:r,previewDataUrl:v,activePart:h}),u.jsxs("div",{className:"pixel-window overflow-hidden min-h-0",children:[u.jsxs("div",{className:"pixel-title-bar !text-[9px] !py-2",children:[u.jsx("span",{children:A==="canvas"?"ATLAS":"3D MODEL"}),u.jsx("button",{className:"pixel-button compact ml-auto",onClick:()=>T(A),children:"SWAP"})]}),u.jsx("div",{className:"h-[calc(100%-36px)] min-h-0 p-1 bg-bg-desk2",children:u.jsx(qm,{kind:A,model:r,previewDataUrl:v,activePart:h})})]})]})})]}),u.jsxs("div",{className:"xl:hidden pixel-window",children:[u.jsxs("div",{className:"px-2 py-2 bg-bg-desk border-b-[3px] border-ink flex gap-1 flex-wrap",children:[u.jsx(tl,{active:b==="tools",label:"TOOLS",onClick:()=>K("tools")}),u.jsx(tl,{active:b==="colors",label:"COLORS",onClick:()=>K("colors")}),u.jsx(tl,{active:b==="layers",label:"LAYERS",onClick:()=>K("layers")}),u.jsx(tl,{active:b==="preview",label:"PREVIEW",onClick:()=>K("preview")})]}),u.jsxs("div",{className:"h-[38vh] min-h-[220px] max-h-[420px]",children:[b==="tools"&&u.jsx(Wm,{}),b==="colors"&&u.jsx(Xm,{}),b==="layers"&&u.jsx(Vm,{}),b==="preview"&&u.jsx(Gm,{})]})]})]}),u.jsxs("div",{className:"hidden xl:flex flex-col gap-2 min-h-0",children:[u.jsx("div",{className:"flex-1 min-h-0",children:u.jsx(Vm,{})}),u.jsx(Gm,{})]}),u.jsx("div",{className:"hidden xl:flex flex-col min-h-0 flex-1",children:u.jsx($m,{})})]}),F&&u.jsx("div",{className:"fixed inset-0 z-40 bg-bg-deep/70 grid place-items-center p-4 xl:hidden",children:u.jsx("div",{className:"w-[640px] max-w-[96vw] h-[80vh]",children:u.jsxs("div",{className:"relative h-full",children:[u.jsx($m,{}),u.jsx("button",{className:"absolute top-2 right-2 pixel-button icon danger",onClick:()=>y(!1),children:u.jsx(Ne,{name:"x",color:"#FFFBEA"})})]})})})]})},QA=t=>u.jsxs("div",{className:"pixel-window",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"EDITOR // /skins/"}),u.jsx("input",{className:"pixel-input ml-2 flex-1 min-w-0 max-w-[220px]",value:t.name,onChange:e=>t.onName(e.target.value)}),u.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-wrap",children:[u.jsx("button",{onClick:()=>t.setModel("slim"),className:`pixel-button compact teal ${t.model==="slim"?"active":""}`,children:"SLIM"}),u.jsx("button",{onClick:()=>t.setModel("classic"),className:`pixel-button compact ${t.model==="classic"?"active":""}`,children:"CLASSIC"})]})]}),u.jsxs("div",{className:"px-3 py-2 bg-bg-desk2 flex items-center gap-2 flex-wrap",children:[u.jsxs("button",{onClick:t.onExit,className:"pixel-button compact flex items-center gap-1",title:"Back to gallery",children:[u.jsx(Ne,{name:"home"})," HOME"]}),u.jsxs("button",{onClick:()=>{var e;return(e=t.fileInputRef.current)==null?void 0:e.click()},className:"pixel-button compact teal flex items-center gap-1",children:[u.jsx(Ne,{name:"upload"})," UPLOAD"]}),u.jsx("input",{ref:t.fileInputRef,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:e=>{var i;const n=(i=e.target.files)==null?void 0:i[0];n&&t.onUpload(n),t.fileInputRef.current&&(t.fileInputRef.current.value="")}}),u.jsxs("button",{onClick:()=>t.setPresetsOpen(!t.presetsOpen),className:"pixel-button compact purple flex items-center gap-1 xl:hidden",children:[u.jsx(Ne,{name:"star",color:"#FFFBEA"})," MY PRESETS"]}),u.jsxs("div",{className:"ml-auto flex items-center gap-1 sm:gap-2",children:[u.jsxs("button",{onClick:t.onDownload,className:"pixel-button compact teal flex items-center gap-1",children:[u.jsx(Ne,{name:"download"})," DOWNLOAD"]}),u.jsxs("button",{onClick:t.onSave,className:"pixel-button compact danger flex items-center gap-1",children:[u.jsx(Ne,{name:"save",color:"#FFFBEA"})," SAVE"]})]})]})]}),qm=({kind:t,model:e,previewDataUrl:n,activePart:i})=>t==="canvas"?u.jsx("div",{className:"h-full min-h-0",children:u.jsx(FA,{model:e,partFilter:i})}):u.jsx("div",{className:"h-full w-full flex items-center justify-center bg-bg-desk border-[3px] border-ink shadow-[4px_4px_0_0_#2A2138]",children:u.jsx(mc,{imageUrl:n,model:e,width:280,height:360,pose:"none",rotate:!1,interactive:!0,zoom:.95})}),Km=({active:t,label:e,onClick:n})=>u.jsx("button",{onClick:n,className:`pixel-button compact ${t?"active":""}`,children:e}),tl=({active:t,label:e,onClick:n})=>u.jsx("button",{onClick:n,className:`pixel-button compact ${t?"active":""}`,children:e}),JA=({activePart:t,setActivePart:e})=>u.jsxs("div",{className:"px-2 py-2 border-b-[3px] border-ink bg-bg-desk overflow-x-auto pixel-scroll flex items-center gap-1",children:[u.jsx(Zm,{label:"ALL",active:t==="all",onClick:()=>e("all")}),xA.map(n=>u.jsx(Zm,{label:n.label.toUpperCase(),active:t===n.key,onClick:()=>e(n.key)},n.key))]}),Zm=({label:t,active:e,onClick:n})=>u.jsx("button",{onClick:n,className:`pixel-button compact ${e?"active":""} whitespace-nowrap`,children:u.jsx("span",{style:{fontSize:8},children:t})}),e2=()=>{const t=vi(d=>d.confirm),e=vi(d=>d.savePreset),n=vi(d=>d.saveColor),i=vi(d=>d.closeConfirm),r=vi(d=>d.closeSavePreset),s=vi(d=>d.closeSaveColor),[a,o]=ge.useState(""),[l,c]=ge.useState(null),[h,p]=ge.useState(null);return ge.useEffect(()=>{e&&(o(e.defaultName),c(e.defaultFolderId))},[e]),ge.useEffect(()=>{var d;n&&p(n.defaultPaletteId??((d=n.paletteOptions[0])==null?void 0:d.id)??null)},[n]),!t&&!e&&!n?null:u.jsxs("div",{className:"dialog-backdrop",children:[t&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:t.title}),u.jsx("div",{className:"dialog-body",children:u.jsx("p",{className:"panel-text",children:t.message})}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>i(!1),children:t.cancelLabel??"Cancel"}),u.jsx("button",{className:`pixel-button compact ${t.variant==="danger"?"danger":"teal"}`,onClick:()=>i(!0),children:t.confirmLabel??"Confirm"})]})]}),e&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:"Save Preset"}),u.jsxs("div",{className:"dialog-body space-y-3",children:[u.jsx("p",{className:"panel-text",children:"Save this layer as a reusable preset?"}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Preset name"}),u.jsx("input",{autoFocus:!0,className:"pixel-input w-full",value:a,onChange:d=>o(d.target.value),onKeyDown:d=>{d.key==="Enter"&&r({name:a.trim()||e.defaultName,folderId:l})}})]}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Folder"}),u.jsxs("select",{className:"pixel-input w-full",value:l??"",onChange:d=>c(d.target.value?d.target.value:null),children:[u.jsx("option",{value:"",children:"Unfiled"}),e.folderOptions.filter(d=>d.id!==null).map(d=>u.jsx("option",{value:d.id,children:d.name},d.id))]})]})]}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>r(null),children:"Cancel"}),u.jsx("button",{className:"pixel-button compact purple",onClick:()=>r({name:a.trim()||e.defaultName,folderId:l}),children:"Save Preset"})]})]}),n&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:"Save Color"}),u.jsxs("div",{className:"dialog-body space-y-3",children:[u.jsx("p",{className:"panel-text",children:"Add this color to a palette?"}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-12 h-12 border-[3px] border-ink shrink-0",style:{background:n.color}}),u.jsx("span",{className:"panel-text font-mono",children:n.color.toUpperCase()})]}),n.paletteOptions.length===0?u.jsx("p",{className:"panel-text text-ink/70",children:"Create a palette first in the Colors panel."}):u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Palette"}),u.jsx("select",{className:"pixel-input w-full",value:h??"",onChange:d=>p(d.target.value),children:n.paletteOptions.map(d=>u.jsx("option",{value:d.id,children:d.name},d.id))})]})]}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>s(null),children:"Cancel"}),u.jsx("button",{className:"pixel-button compact teal",disabled:!h||n.paletteOptions.length===0,onClick:()=>h&&s({paletteId:h}),children:"Save Color"})]})]})]})},t2=()=>{const[t,e]=ge.useState({name:"home"}),n=vc();return u.jsxs("div",{className:"app-shell",children:[t.name==="home"&&u.jsx(oA,{onNew:()=>e({name:"editor"}),onEdit:i=>e({name:"editor",editId:i})}),t.name==="editor"&&u.jsx(ZA,{editId:t.editId,onExit:()=>e({name:"home"}),onSaved:i=>{n.show(`Saved "${i}" to your project floppy.`)}}),u.jsx(BA,{}),u.jsx(e2,{})]})};class n2 extends ge.Component{constructor(){super(...arguments);Yf(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,i){console.error("Pixel Skin Studio failed to render",n,i)}render(){return this.state.error?u.jsx("div",{className:"min-h-full flex items-center justify-center p-6",style:{background:"radial-gradient(ellipse at center, #2A2138 0%, #1B1424 70%, #0c0712 100%)"},children:u.jsxs("div",{className:"pixel-window max-w-lg w-full",children:[u.jsx("div",{className:"pixel-title-bar",children:"Something went wrong"}),u.jsxs("div",{className:"p-4 space-y-3 bg-bg-desk2",children:[u.jsx("p",{className:"panel-text",children:"The app hit an error while loading. Try refreshing the page."}),u.jsx("p",{className:"panel-text text-ink/70 text-base break-all",children:this.state.error.message}),u.jsx("button",{className:"pixel-button compact teal",onClick:()=>window.location.reload(),children:"Reload"})]})]})}):this.props.children}}const i2=()=>{if(!(typeof window>"u")){try{Ar.getState().hydrate()}catch(t){console.warn("Could not restore gallery",t)}try{jn.getState().hydrate()}catch(t){console.warn("Could not restore presets",t)}try{pi.getState().hydrate()}catch(t){console.warn("Could not restore color palettes",t)}}};function r2(){const t=document.getElementById("boot");t&&(t.style.display="none")}function s2(t){const e=document.getElementById("boot");e&&(e.innerHTML='<div style="max-width:480px;padding:24px;text-align:center;"><div style="font-size:28px;margin-bottom:12px;">Could not start</div><div style="margin-bottom:18px;">'+t+'</div><button onclick="location.reload()" style="font-family:VT323,monospace;font-size:20px;padding:8px 16px;background:#3FB6A8;color:#1B1424;border:3px solid #2A2138;cursor:pointer;">Reload</button></div>',e.style.display="flex")}try{i2();const t=document.getElementById("root");if(!t)throw new Error("App root element not found.");Lu.createRoot(t).render(u.jsx(cg.StrictMode,{children:u.jsx(n2,{children:u.jsx(t2,{})})})),requestAnimationFrame(()=>requestAnimationFrame(r2))}catch(t){console.error("Pixel Skin Studio failed to start",t),s2(t instanceof Error?t.message:"The app failed to load. Check your connection and refresh.")}
