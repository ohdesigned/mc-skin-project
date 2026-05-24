var w0=Object.defineProperty;var T0=(t,e,n)=>e in t?w0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Qf=(t,e,n)=>T0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ig(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rg={exports:{}},Yl={},sg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),b0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),Jf=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,lg={};function qs(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=qs.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}var kd=Od.prototype=new cg;kd.constructor=Od;og(kd,qs.prototype);kd.isPureReactComponent=!0;var eh=Array.isArray,ug=Object.prototype.hasOwnProperty,Bd={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:no,type:t,key:s,ref:a,props:r,_owner:Bd.current}}function O0(t,e){return{$$typeof:no,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===no}function k0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var th=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k0(""+t.key):e.toString(36)}function rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case no:case b0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Sc(a,0):i,eh(r)?(n="",t!=null&&(n=t.replace(th,"$&/")+"/"),rl(r,e,n,"",function(c){return c})):r!=null&&(zd(r)&&(r=O0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(th,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",eh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Sc(s,o);a+=rl(s,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Sc(s,o++),a+=rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},sl={transition:null},z0={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:sl,ReactCurrentOwner:Bd};function hg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=qs;He.Fragment=A0;He.Profiler=R0;He.PureComponent=Od;He.StrictMode=C0;He.Suspense=D0;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;He.act=hg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ug.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:no,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:L0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};He.createElement=fg;He.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:N0,render:t}};He.isValidElement=zd;He.lazy=function(t){return{$$typeof:U0,_payload:{_status:-1,_result:t},_init:B0}};He.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=sl.transition;sl.transition={};try{t()}finally{sl.transition=e}};He.unstable_act=hg;He.useCallback=function(t,e){return nn.current.useCallback(t,e)};He.useContext=function(t){return nn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};He.useEffect=function(t,e){return nn.current.useEffect(t,e)};He.useId=function(){return nn.current.useId()};He.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return nn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};He.useRef=function(t){return nn.current.useRef(t)};He.useState=function(t){return nn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return nn.current.useTransition()};He.version="18.3.1";sg.exports=He;var me=sg.exports;const pg=ig(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=me,H0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,W0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)G0.call(e,i)&&!X0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H0,type:t,key:s,ref:a,props:r,_owner:W0.current}}Yl.Fragment=V0;Yl.jsx=mg;Yl.jsxs=mg;rg.exports=Yl;var u=rg.exports,Pu={},gg={exports:{}},Sn={},vg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var X=F.length;F.push(H);e:for(;0<X;){var R=X-1>>>1,B=F[R];if(0<r(B,H))F[R]=H,F[X]=B,X=R;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var H=F[0],X=F.pop();if(X!==H){F[0]=X;e:for(var R=0,B=F.length,re=B>>>1;R<re;){var oe=2*(R+1)-1,ge=F[oe],Se=oe+1,Me=F[Se];if(0>r(ge,X))Se<B&&0>r(Me,ge)?(F[R]=Me,F[Se]=X,R=Se):(F[R]=ge,F[oe]=X,R=oe);else if(Se<B&&0>r(Me,X))F[R]=Me,F[Se]=X,R=Se;else break e}}return H}function r(F,H){var X=F.sortIndex-H.sortIndex;return X!==0?X:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,d=3,m=!1,v=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=F)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function E(F){if(S=!1,g(F),!v)if(n(l)!==null)v=!0,Z(M);else{var H=n(c);H!==null&&q(E,H.startTime-F)}}function M(F,H){v=!1,S&&(S=!1,f(C),C=-1),m=!0;var X=d;try{for(g(H),p=n(l);p!==null&&(!(p.expirationTime>H)||F&&!G());){var R=p.callback;if(typeof R=="function"){p.callback=null,d=p.priorityLevel;var B=R(p.expirationTime<=H);H=t.unstable_now(),typeof B=="function"?p.callback=B:p===n(l)&&i(l),g(H)}else i(l);p=n(l)}if(p!==null)var re=!0;else{var oe=n(c);oe!==null&&q(E,oe.startTime-H),re=!1}return re}finally{p=null,d=X,m=!1}}var P=!1,b=null,C=-1,_=5,T=-1;function G(){return!(t.unstable_now()-T<_)}function K(){if(b!==null){var F=t.unstable_now();T=F;var H=!0;try{H=b(!0,F)}finally{H?I():(P=!1,b=null)}}else P=!1}var I;if(typeof y=="function")I=function(){y(K)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,N=k.port2;k.port1.onmessage=K,I=function(){N.postMessage(null)}}else I=function(){x(K,0)};function Z(F){b=F,P||(P=!0,I())}function q(F,H){C=x(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Z(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var X=d;d=H;try{return F()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=d;d=F;try{return H()}finally{d=X}},t.unstable_scheduleCallback=function(F,H,X){var R=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?R+X:R):X=R,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=X+B,F={id:h++,callback:H,priorityLevel:F,startTime:X,expirationTime:B,sortIndex:-1},X>R?(F.sortIndex=X,e(c,F),n(l)===null&&F===n(c)&&(S?(f(C),C=-1):S=!0,q(E,X-R))):(F.sortIndex=B,e(l,F),v||m||(v=!0,Z(M))),F},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(F){var H=d;return function(){var X=d;d=H;try{return F.apply(this,arguments)}finally{d=X}}}})(xg);vg.exports=xg;var Y0=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=me,yn=Y0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,Fa={};function jr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Fa[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nh={},ih={};function K0(t){return Lu.call(ih,t)?!0:Lu.call(nh,t)?!1:q0.test(t)?ih[t]=!0:(nh[t]=!0,!1)}function Z0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q0(t,e,n,i){if(e===null||typeof e>"u"||Z0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Hd);kt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Hd);kt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Hd);kt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q0(e,n,r,i)&&(n=null),i||r===null?K0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),rh=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Ec;function ya(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Mc=!1;function wc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function J0(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Nu:return"Profiler";case Gd:return"StrictMode";case Du:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sg:return(t.displayName||"Context")+".Consumer";case yg:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function e_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t_(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=t_(t))}function wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function Ou(t,e){Tg(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Sa(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function bg(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n_=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){n_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function Rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var i_=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(i_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,Rs=null,Ps=null;function ch(t){if(t=so(t)){if(typeof Gu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Ql(e),Gu(t.stateNode,t.type,e))}}function Lg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function Ng(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,ch(t),e)for(t=0;t<e.length;t++)ch(e[t])}}function Dg(t,e){return t(e)}function Ig(){}var Tc=!1;function Ug(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return Dg(t,e,n)}finally{Tc=!1,(Rs!==null||Ps!==null)&&(Ig(),Ng())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var i=Ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Wu=!1;if(Ai)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Wu=!1}function r_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Aa=!1,yl=null,Sl=!1,Xu=null,s_={onError:function(t){Aa=!0,yl=t}};function a_(t,e,n,i,r,s,a,o,l){Aa=!1,yl=null,r_.apply(s_,arguments)}function o_(t,e,n,i,r,s,a,o,l){if(a_.apply(this,arguments),Aa){if(Aa){var c=yl;Aa=!1,yl=null}else throw Error(ne(198));Sl||(Sl=!0,Xu=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uh(t){if(Hr(t)!==t)throw Error(ne(188))}function l_(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return uh(r),t;if(s===i)return uh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Og(t){return t=l_(t),t!==null?kg(t):null}function kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=yn.unstable_scheduleCallback,dh=yn.unstable_cancelCallback,c_=yn.unstable_shouldYield,u_=yn.unstable_requestPaint,vt=yn.unstable_now,d_=yn.unstable_getCurrentPriorityLevel,$d=yn.unstable_ImmediatePriority,zg=yn.unstable_UserBlockingPriority,El=yn.unstable_NormalPriority,f_=yn.unstable_LowPriority,jg=yn.unstable_IdlePriority,$l=null,ni=null;function h_(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:g_,p_=Math.log,m_=Math.LN2;function g_(t){return t>>>=0,t===0?32:31-(p_(t)/m_|0)|0}var go=64,vo=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ea(o):(s&=a,s!==0&&(i=Ea(s)))}else a=n&~r,a!==0?i=Ea(a):s!==0&&(i=Ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function v_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=v_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function __(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Kd,Wg,Xg,Yg,$u=!1,xo=[],Ki=null,Zi=null,Qi=null,Ba=new Map,za=new Map,Wi=[],y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function S_(t,e,n,i,r){switch(e){case"focusin":return Ki=sa(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=sa(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=sa(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,sa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,sa(za.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=wr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,Yg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vu=i,n.target.dispatchEvent(i),Vu=null}else return e=so(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function hh(t,e,n){al(t)&&n.delete(e)}function E_(){$u=!1,Ki!==null&&al(Ki)&&(Ki=null),Zi!==null&&al(Zi)&&(Zi=null),Qi!==null&&al(Qi)&&(Qi=null),Ba.forEach(hh),za.forEach(hh)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,E_)))}function ja(t){function e(r){return aa(r,t)}if(0<xo.length){aa(xo[0],t);for(var n=1;n<xo.length;n++){var i=xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&aa(Ki,t),Zi!==null&&aa(Zi,t),Qi!==null&&aa(Qi,t),Ba.forEach(e),za.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&Wi.shift()}var Ls=Di.ReactCurrentBatchConfig,wl=!0;function M_(t,e,n,i){var r=Ke,s=Ls.transition;Ls.transition=null;try{Ke=1,Zd(t,e,n,i)}finally{Ke=r,Ls.transition=s}}function w_(t,e,n,i){var r=Ke,s=Ls.transition;Ls.transition=null;try{Ke=4,Zd(t,e,n,i)}finally{Ke=r,Ls.transition=s}}function Zd(t,e,n,i){if(wl){var r=qu(t,e,n,i);if(r===null)Fc(t,e,i,Tl,n),fh(t,i);else if(S_(r,t,e,n,i))i.stopPropagation();else if(fh(t,i),e&4&&-1<y_.indexOf(t)){for(;r!==null;){var s=so(r);if(s!==null&&Gg(s),s=qu(t,e,n,i),s===null&&Fc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fc(t,e,i,null,n)}}var Tl=null;function qu(t,e,n,i){if(Tl=null,t=Yd(i),t=wr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d_()){case $d:return 1;case zg:return 4;case El:case f_:return 16;case jg:return 536870912;default:return 16}default:return 16}}var Yi=null,Qd=null,ol=null;function Kg(){if(ol)return ol;var t,e=Qd,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ol=r.slice(t,1<i?1-i:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function ph(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:ph,this.isPropagationStopped=ph,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=En(Ks),ro=ft({},Ks,{view:0,detail:0}),T_=En(ro),Ac,Cc,oa,ql=ft({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Ac=t.screenX-oa.screenX,Cc=t.screenY-oa.screenY):Cc=Ac=0,oa=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),mh=En(ql),b_=ft({},ql,{dataTransfer:0}),A_=En(b_),C_=ft({},ro,{relatedTarget:0}),Rc=En(C_),R_=ft({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=En(R_),L_=ft({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N_=En(L_),D_=ft({},Ks,{data:0}),gh=En(D_),I_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F_[t])?!!e[t]:!1}function ef(){return O_}var k_=ft({},ro,{key:function(t){if(t.key){var e=I_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=En(k_),z_=ft({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=En(z_),j_=ft({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),H_=En(j_),V_=ft({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=En(V_),W_=ft({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=En(W_),Y_=[9,13,27,32],tf=Ai&&"CompositionEvent"in window,Ca=null;Ai&&"documentMode"in document&&(Ca=document.documentMode);var $_=Ai&&"TextEvent"in window&&!Ca,Zg=Ai&&(!tf||Ca&&8<Ca&&11>=Ca),xh=" ",_h=!1;function Qg(t,e){switch(t){case"keyup":return Y_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function q_(t,e){switch(t){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(_h=!0,xh);case"textInput":return t=e.data,t===xh&&_h?null:t;default:return null}}function K_(t,e){if(vs)return t==="compositionend"||!tf&&Qg(t,e)?(t=Kg(),ol=Qd=Yi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var Z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z_[t.type]:e==="textarea"}function ev(t,e,n,i){Lg(i),e=bl(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Ha=null;function Q_(t){dv(t,0)}function Kl(t){var e=ys(t);if(wg(e))return t}function J_(t,e){if(t==="change")return e}var tv=!1;if(Ai){var Pc;if(Ai){var Lc="oninput"in document;if(!Lc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Lc=typeof Sh.oninput=="function"}Pc=Lc}else Pc=!1;tv=Pc&&(!document.documentMode||9<document.documentMode)}function Eh(){Ra&&(Ra.detachEvent("onpropertychange",nv),Ha=Ra=null)}function nv(t){if(t.propertyName==="value"&&Kl(Ha)){var e=[];ev(e,Ha,t,Yd(t)),Ug(Q_,e)}}function ey(t,e,n){t==="focusin"?(Eh(),Ra=e,Ha=n,Ra.attachEvent("onpropertychange",nv)):t==="focusout"&&Eh()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Ha)}function ny(t,e){if(t==="click")return Kl(e)}function iy(t,e){if(t==="input"||t==="change")return Kl(e)}function ry(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:ry;function Va(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rv(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sy(t){var e=rv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iv(n.ownerDocument.documentElement,n)){if(i!==null&&nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wh(n,s);var a=wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ay=Ai&&"documentMode"in document&&11>=document.documentMode,xs=null,Ku=null,Pa=null,Zu=!1;function Th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||xs==null||xs!==_l(i)||(i=xs,"selectionStart"in i&&nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Va(Pa,i)||(Pa=i,i=bl(Ku,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Nc={},sv={};Ai&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Zl(t){if(Nc[t])return Nc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sv)return Nc[t]=e[n];return t}var av=Zl("animationend"),ov=Zl("animationiteration"),lv=Zl("animationstart"),cv=Zl("transitionend"),uv=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){uv.set(t,e),jr(e,[t])}for(var Dc=0;Dc<bh.length;Dc++){var Ic=bh[Dc],oy=Ic.toLowerCase(),ly=Ic[0].toUpperCase()+Ic.slice(1);cr(oy,"on"+ly)}cr(av,"onAnimationEnd");cr(ov,"onAnimationIteration");cr(lv,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(cv,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Ah(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,o_(i,e,void 0,t),t.currentTarget=null}function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,o,c),s=l}}}if(Sl)throw t=Xu,Sl=!1,Xu=null,t}function it(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(fv(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),fv(n,t,i,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[So]){t[So]=!0,_g.forEach(function(n){n!=="selectionchange"&&(cy.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Uc("selectionchange",!1,e))}}function fv(t,e,n,i){switch(qg(e)){case 1:var r=M_;break;case 4:r=w_;break;default:r=Zd}n=r.bind(null,e,n,t),r=void 0,!Wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ug(function(){var c=s,h=Yd(n),p=[];e:{var d=uv.get(t);if(d!==void 0){var m=Jd,v=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":m=B_;break;case"focusin":v="focus",m=Rc;break;case"focusout":v="blur",m=Rc;break;case"beforeblur":case"afterblur":m=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=H_;break;case av:case ov:case lv:m=P_;break;case cv:m=G_;break;case"scroll":m=T_;break;case"wheel":m=X_;break;case"copy":case"cut":case"paste":m=N_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vh}var S=(e&4)!==0,x=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var y=c,g;y!==null;){g=y;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=ka(y,f),E!=null&&S.push(Wa(y,E,g)))),x)break;y=y.return}0<S.length&&(d=new m(d,v,null,n,h),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Vu&&(v=n.relatedTarget||n.fromElement)&&(wr(v)||v[Ci]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?wr(v):null,v!==null&&(x=Hr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(S=mh,E="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(S=vh,E="onPointerLeave",f="onPointerEnter",y="pointer"),x=m==null?d:ys(m),g=v==null?d:ys(v),d=new S(E,y+"leave",m,n,h),d.target=x,d.relatedTarget=g,E=null,wr(h)===c&&(S=new S(f,y+"enter",v,n,h),S.target=g,S.relatedTarget=x,E=S),x=E,m&&v)t:{for(S=m,f=v,y=0,g=S;g;g=Gr(g))y++;for(g=0,E=f;E;E=Gr(E))g++;for(;0<y-g;)S=Gr(S),y--;for(;0<g-y;)f=Gr(f),g--;for(;y--;){if(S===f||f!==null&&S===f.alternate)break t;S=Gr(S),f=Gr(f)}S=null}else S=null;m!==null&&Ch(p,d,m,S,!1),v!==null&&x!==null&&Ch(p,x,v,S,!0)}}e:{if(d=c?ys(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var M=J_;else if(yh(d))if(tv)M=iy;else{M=ty;var P=ey}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=ny);if(M&&(M=M(t,c))){ev(p,M,n,h);break e}P&&P(t,d,c),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&ku(d,"number",d.value)}switch(P=c?ys(c):window,t){case"focusin":(yh(P)||P.contentEditable==="true")&&(xs=P,Ku=c,Pa=null);break;case"focusout":Pa=Ku=xs=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Th(p,n,h);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":Th(p,n,h)}var b;if(tf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else vs?Qg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Zg&&n.locale!=="ko"&&(vs||C!=="onCompositionStart"?C==="onCompositionEnd"&&vs&&(b=Kg()):(Yi=h,Qd="value"in Yi?Yi.value:Yi.textContent,vs=!0)),P=bl(c,C),0<P.length&&(C=new gh(C,t,null,n,h),p.push({event:C,listeners:P}),b?C.data=b:(b=Jg(n),b!==null&&(C.data=b)))),(b=$_?q_(t,n):K_(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(h=new gh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}dv(p,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ka(t,n),s!=null&&i.unshift(Wa(t,s,r)),s=ka(t,e),s!=null&&i.push(Wa(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ka(n,s),l!=null&&a.unshift(Wa(n,l,o))):r||(l=ka(n,s),l!=null&&a.push(Wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var uy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Rh(t){return(typeof t=="string"?t:""+t).replace(uy,`
`).replace(dy,"")}function Eo(t,e,n){if(e=Rh(e),Rh(t)!==e&&n)throw Error(ne(425))}function Al(){}var Qu=null,Ju=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(t){return Ph.resolve(null).then(t).catch(py)}:td;function py(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ja(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ti="__reactFiber$"+Zs,Xa="__reactProps$"+Zs,Ci="__reactContainer$"+Zs,nd="__reactEvents$"+Zs,my="__reactListeners$"+Zs,gy="__reactHandles$"+Zs;function wr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lh(t);t!==null;){if(n=t[ti])return n;t=Lh(t)}return e}t=n,n=t.parentNode}return null}function so(t){return t=t[ti]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Ql(t){return t[Xa]||null}var id=[],Ss=-1;function ur(t){return{current:t}}function rt(t){0>Ss||(t.current=id[Ss],id[Ss]=null,Ss--)}function et(t,e){Ss++,id[Ss]=t.current,t.current=e}var lr={},Yt=ur(lr),on=ur(!1),Ur=lr;function Os(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Cl(){rt(on),rt(Yt)}function Nh(t,e,n){if(Yt.current!==lr)throw Error(ne(168));et(Yt,e),et(on,n)}function hv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,e_(t)||"Unknown",r));return ft({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ur=Yt.current,et(Yt,t),et(on,on.current),!0}function Dh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=hv(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,rt(on),rt(Yt),et(Yt,t)):rt(on),et(on,n)}var gi=null,Jl=!1,kc=!1;function pv(t){gi===null?gi=[t]:gi.push(t)}function vy(t){Jl=!0,pv(t)}function dr(){if(!kc&&gi!==null){kc=!0;var t=0,e=Ke;try{var n=gi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Jl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Bg($d,dr),r}finally{Ke=e,kc=!1}}return null}var Es=[],Ms=0,Pl=null,Ll=0,An=[],Cn=0,Fr=null,yi=1,Si="";function _r(t,e){Es[Ms++]=Ll,Es[Ms++]=Pl,Pl=t,Ll=e}function mv(t,e,n){An[Cn++]=yi,An[Cn++]=Si,An[Cn++]=Fr,Fr=t;var i=yi;t=Si;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,yi=1<<32-Xn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function rf(t){t.return!==null&&(_r(t,1),mv(t,1,0))}function sf(t){for(;t===Pl;)Pl=Es[--Ms],Es[Ms]=null,Ll=Es[--Ms],Es[Ms]=null;for(;t===Fr;)Fr=An[--Cn],An[Cn]=null,Si=An[--Cn],An[Cn]=null,yi=An[--Cn],An[Cn]=null}var _n=null,xn=null,at=!1,Vn=null;function gv(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ih(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,xn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,xn=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(at){var e=xn;if(e){var n=e;if(!Ih(t,e)){if(rd(t))throw Error(ne(418));e=Ji(n.nextSibling);var i=_n;e&&Ih(t,e)?gv(i,n):(t.flags=t.flags&-4097|2,at=!1,_n=t)}}else{if(rd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,_n=t}}}function Uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Mo(t){if(t!==_n)return!1;if(!at)return Uh(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=xn)){if(rd(t))throw vv(),Error(ne(418));for(;e;)gv(t,e),e=Ji(e.nextSibling)}if(Uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=_n?Ji(t.stateNode.nextSibling):null;return!0}function vv(){for(var t=xn;t;)t=Ji(t.nextSibling)}function ks(){xn=_n=null,at=!1}function af(t){Vn===null?Vn=[t]:Vn.push(t)}var xy=Di.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fh(t){var e=t._init;return e(t._payload)}function xv(t){function e(f,y){if(t){var g=f.deletions;g===null?(f.deletions=[y],f.flags|=16):g.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function i(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function r(f,y){return f=ir(f,y),f.index=0,f.sibling=null,f}function s(f,y,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<y?(f.flags|=2,y):g):(f.flags|=2,y)):(f.flags|=1048576,y)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,y,g,E){return y===null||y.tag!==6?(y=Wc(g,f.mode,E),y.return=f,y):(y=r(y,g),y.return=f,y)}function l(f,y,g,E){var M=g.type;return M===gs?h(f,y,g.props.children,E,g.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ji&&Fh(M)===y.type)?(E=r(y,g.props),E.ref=la(f,y,g),E.return=f,E):(E=ml(g.type,g.key,g.props,null,f.mode,E),E.ref=la(f,y,g),E.return=f,E)}function c(f,y,g,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Xc(g,f.mode,E),y.return=f,y):(y=r(y,g.children||[]),y.return=f,y)}function h(f,y,g,E,M){return y===null||y.tag!==7?(y=Cr(g,f.mode,E,M),y.return=f,y):(y=r(y,g),y.return=f,y)}function p(f,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Wc(""+y,f.mode,g),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return g=ml(y.type,y.key,y.props,null,f.mode,g),g.ref=la(f,null,y),g.return=f,g;case ms:return y=Xc(y,f.mode,g),y.return=f,y;case ji:var E=y._init;return p(f,E(y._payload),g)}if(Sa(y)||ia(y))return y=Cr(y,f.mode,g,null),y.return=f,y;wo(f,y)}return null}function d(f,y,g,E){var M=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:o(f,y,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:return g.key===M?l(f,y,g,E):null;case ms:return g.key===M?c(f,y,g,E):null;case ji:return M=g._init,d(f,y,M(g._payload),E)}if(Sa(g)||ia(g))return M!==null?null:h(f,y,g,E,null);wo(f,g)}return null}function m(f,y,g,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,o(y,f,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ho:return f=f.get(E.key===null?g:E.key)||null,l(y,f,E,M);case ms:return f=f.get(E.key===null?g:E.key)||null,c(y,f,E,M);case ji:var P=E._init;return m(f,y,g,P(E._payload),M)}if(Sa(E)||ia(E))return f=f.get(g)||null,h(y,f,E,M,null);wo(y,E)}return null}function v(f,y,g,E){for(var M=null,P=null,b=y,C=y=0,_=null;b!==null&&C<g.length;C++){b.index>C?(_=b,b=null):_=b.sibling;var T=d(f,b,g[C],E);if(T===null){b===null&&(b=_);break}t&&b&&T.alternate===null&&e(f,b),y=s(T,y,C),P===null?M=T:P.sibling=T,P=T,b=_}if(C===g.length)return n(f,b),at&&_r(f,C),M;if(b===null){for(;C<g.length;C++)b=p(f,g[C],E),b!==null&&(y=s(b,y,C),P===null?M=b:P.sibling=b,P=b);return at&&_r(f,C),M}for(b=i(f,b);C<g.length;C++)_=m(b,f,C,g[C],E),_!==null&&(t&&_.alternate!==null&&b.delete(_.key===null?C:_.key),y=s(_,y,C),P===null?M=_:P.sibling=_,P=_);return t&&b.forEach(function(G){return e(f,G)}),at&&_r(f,C),M}function S(f,y,g,E){var M=ia(g);if(typeof M!="function")throw Error(ne(150));if(g=M.call(g),g==null)throw Error(ne(151));for(var P=M=null,b=y,C=y=0,_=null,T=g.next();b!==null&&!T.done;C++,T=g.next()){b.index>C?(_=b,b=null):_=b.sibling;var G=d(f,b,T.value,E);if(G===null){b===null&&(b=_);break}t&&b&&G.alternate===null&&e(f,b),y=s(G,y,C),P===null?M=G:P.sibling=G,P=G,b=_}if(T.done)return n(f,b),at&&_r(f,C),M;if(b===null){for(;!T.done;C++,T=g.next())T=p(f,T.value,E),T!==null&&(y=s(T,y,C),P===null?M=T:P.sibling=T,P=T);return at&&_r(f,C),M}for(b=i(f,b);!T.done;C++,T=g.next())T=m(b,f,C,T.value,E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?C:T.key),y=s(T,y,C),P===null?M=T:P.sibling=T,P=T);return t&&b.forEach(function(K){return e(f,K)}),at&&_r(f,C),M}function x(f,y,g,E){if(typeof g=="object"&&g!==null&&g.type===gs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:e:{for(var M=g.key,P=y;P!==null;){if(P.key===M){if(M=g.type,M===gs){if(P.tag===7){n(f,P.sibling),y=r(P,g.props.children),y.return=f,f=y;break e}}else if(P.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ji&&Fh(M)===P.type){n(f,P.sibling),y=r(P,g.props),y.ref=la(f,P,g),y.return=f,f=y;break e}n(f,P);break}else e(f,P);P=P.sibling}g.type===gs?(y=Cr(g.props.children,f.mode,E,g.key),y.return=f,f=y):(E=ml(g.type,g.key,g.props,null,f.mode,E),E.ref=la(f,y,g),E.return=f,f=E)}return a(f);case ms:e:{for(P=g.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){n(f,y.sibling),y=r(y,g.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=Xc(g,f.mode,E),y.return=f,f=y}return a(f);case ji:return P=g._init,x(f,y,P(g._payload),E)}if(Sa(g))return v(f,y,g,E);if(ia(g))return S(f,y,g,E);wo(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,y!==null&&y.tag===6?(n(f,y.sibling),y=r(y,g),y.return=f,f=y):(n(f,y),y=Wc(g,f.mode,E),y.return=f,f=y),a(f)):n(f,y)}return x}var Bs=xv(!0),_v=xv(!1),Nl=ur(null),Dl=null,ws=null,of=null;function lf(){of=ws=Dl=null}function cf(t){var e=Nl.current;rt(Nl),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Dl=t,of=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Dl===null)throw Error(ne(308));ws=t,Dl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Tr=null;function uf(t){Tr===null?Tr=[t]:Tr.push(t)}function yv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}function Oh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(d=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(m,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(m,p,d):v,d==null)break e;p=ft({},p,d);break e;case 2:Hi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=p}}function kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ao={},ii=ur(ao),Ya=ur(ao),$a=ur(ao);function br(t){if(t===ao)throw Error(ne(174));return t}function ff(t,e){switch(et($a,e),et(Ya,t),et(ii,ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}rt(ii),et(ii,e)}function zs(){rt(ii),rt(Ya),rt($a)}function Ev(t){br($a.current);var e=br(ii.current),n=zu(e,t.type);e!==n&&(et(Ya,t),et(ii,n))}function hf(t){Ya.current===t&&(rt(ii),rt(Ya))}var ct=ur(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function pf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ul=Di.ReactCurrentDispatcher,zc=Di.ReactCurrentBatchConfig,Or=0,dt=null,bt=null,Nt=null,Fl=!1,La=!1,qa=0,_y=0;function Bt(){throw Error(ne(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function gf(t,e,n,i,r,s){if(Or=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?My:wy,t=n(i,r),La){s=0;do{if(La=!1,qa=0,25<=s)throw Error(ne(301));s+=1,Nt=bt=null,e.updateQueue=null,ul.current=Ty,t=n(i,r)}while(La)}if(ul.current=Ol,e=bt!==null&&bt.next!==null,Or=0,Nt=bt=dt=null,Fl=!1,e)throw Error(ne(300));return t}function vf(){var t=qa!==0;return qa=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?dt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Nt===null?dt.memoizedState:Nt.next;if(e!==null)Nt=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?dt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ka(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Or&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,dt.lanes|=h,kr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mv(){}function wv(t,e){var n=dt,i=Un(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,xf(Av.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Za(9,bv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Or&30||Tv(n,e,r)}return r}function Tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,i){e.value=n,e.getSnapshot=i,Cv(e)&&Rv(t)}function Av(t,e,n){return n(function(){Cv(e)&&Rv(t)})}function Cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function Rv(t){var e=Ri(t,1);e!==null&&Yn(e,t,1,-1)}function Bh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},e.queue=t,t=t.dispatch=Ey.bind(null,dt,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Pv(){return Un().memoizedState}function dl(t,e,n,i){var r=Jn();dt.flags|=t,r.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function ec(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&mf(i,a.deps)){r.memoizedState=Za(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Za(1|e,n,s,i)}function zh(t,e){return dl(8390656,8,t,e)}function xf(t,e){return ec(2048,8,t,e)}function Lv(t,e){return ec(4,2,t,e)}function Nv(t,e){return ec(4,4,t,e)}function Dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iv(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,Dv.bind(null,e,t),n)}function _f(){}function Uv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ov(t,e,n){return Or&21?(qn(n,e)||(n=Hg(),dt.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function yy(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{Ke=n,zc.transition=i}}function kv(){return Un().memoizedState}function Sy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Bv(t))zv(e,n);else if(n=yv(t,e,n,i),n!==null){var r=tn();Yn(n,t,i,r),jv(n,e,i)}}function Ey(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bv(t))zv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,qn(o,a)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=yv(t,e,r,i),n!==null&&(r=tn(),Yn(n,t,i,r),jv(n,e,i))}}function Bv(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function zv(t,e){La=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}var Ol={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},My={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,Dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sy.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Bh,useDebugValue:_f,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Bh(!1),e=t[0];return t=yy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Jn();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Or&30||Tv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zh(Av.bind(null,i,s,t),[t]),i.flags|=2048,Za(9,bv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Dt.identifierPrefix;if(at){var n=Si,i=yi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_y++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wy={readContext:In,useCallback:Uv,useContext:In,useEffect:xf,useImperativeHandle:Iv,useInsertionEffect:Lv,useLayoutEffect:Nv,useMemo:Fv,useReducer:jc,useRef:Pv,useState:function(){return jc(Ka)},useDebugValue:_f,useDeferredValue:function(t){var e=Un();return Ov(e,bt.memoizedState,t)},useTransition:function(){var t=jc(Ka)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:wv,useId:kv,unstable_isNewReconciler:!1},Ty={readContext:In,useCallback:Uv,useContext:In,useEffect:xf,useImperativeHandle:Iv,useInsertionEffect:Lv,useLayoutEffect:Nv,useMemo:Fv,useReducer:Hc,useRef:Pv,useState:function(){return Hc(Ka)},useDebugValue:_f,useDeferredValue:function(t){var e=Un();return bt===null?e.memoizedState=t:Ov(e,bt.memoizedState,t)},useTransition:function(){var t=Hc(Ka)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:wv,useId:kv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Yn(e,t,r,i),cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Yn(e,t,r,i),cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Yn(e,t,i,n),cl(e,t,i))}};function jh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Va(n,i)||!Va(r,s):!0}function Hv(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=ln(e)?Ur:Yt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=ln(e)?Ur:Yt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=J0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var by=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,_d=i),cd(t,e)},n}function Gv(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Vh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new by;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zy.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Ay=Di.ReactCurrentOwner,an=!1;function Jt(t,e,n,i){e.child=t===null?_v(e,null,n,i):Bs(e,t.child,n,i)}function Xh(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=gf(t,e,n,i,s,r),n=vf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(at&&n&&rf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Yh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wv(t,e,s,i,r)):(t=ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Va(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return ud(t,e,n,i,r)}function Xv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(bs,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(bs,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(bs,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(bs,gn),gn|=i;return Jt(t,e,r,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var s=ln(n)?Ur:Yt.current;return s=Os(e,s),Ns(e,r),n=gf(t,e,n,i,s,r),i=vf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(at&&i&&rf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(ln(n)){var s=!0;Rl(e)}else s=!1;if(Ns(e,r),e.stateNode===null)fl(t,e),Hv(e,n,i),ld(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=ln(n)?Ur:Yt.current,c=Os(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Hh(e,a,i,c),Hi=!1;var d=e.memoizedState;a.state=d,Il(e,i,a,r),l=e.memoizedState,o!==i||d!==l||on.current||Hi?(typeof h=="function"&&(od(e,n,h,i),l=e.memoizedState),(o=Hi||jh(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Sv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=ln(n)?Ur:Yt.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Hh(e,a,i,l),Hi=!1,d=e.memoizedState,a.state=d,Il(e,i,a,r);var v=e.memoizedState;o!==p||d!==v||on.current||Hi?(typeof m=="function"&&(od(e,n,m,i),v=e.memoizedState),(c=Hi||jh(e,n,c,i,d,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return dd(t,e,n,i,s,r)}function dd(t,e,n,i,r,s){Yv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dh(e,n,!1),Pi(t,e,s);i=e.stateNode,Ay.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,o,s)):Jt(t,e,o,s),e.memoizedState=i.state,r&&Dh(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?Nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nh(t,e.context,!1),ff(t,e.containerInfo)}function qh(t,e,n,i,r){return ks(),af(r),e.flags|=256,Jt(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qv(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ct,r&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=rc(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hd(n),e.memoizedState=fd,t):yf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Cy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ir(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?hd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yf(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,i){return i!==null&&af(i),Bs(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(ne(422))),To(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,a),e.child.memoizedState=hd(a),e.memoizedState=fd,s);if(!(e.mode&1))return To(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Vc(s,i,void 0),To(t,e,a,i)}if(o=(a&t.childLanes)!==0,an||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Yn(i,t,r,-1))}return bf(),i=Vc(Error(ne(421))),To(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=Ji(r.nextSibling),_n=e,at=!0,Vn=null,t!==null&&(An[Cn++]=yi,An[Cn++]=Si,An[Cn++]=Fr,yi=t.id,Si=t.overflow,Fr=e),e=yf(e,i.children),e.flags|=4096,e)}function Kh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ad(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Kv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ry(t,e,n){switch(e.tag){case 3:$v(e),ks();break;case 5:Ev(e);break;case 1:ln(e.type)&&Rl(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?qv(t,e,n):(et(ct,ct.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);et(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Kv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Xv(t,e,n)}return Pi(t,e,n)}var Zv,pd,Qv,Jv;Zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};Qv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ii.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ca(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Py(t,e,n){var i=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return ln(e.type)&&Cl(),zt(e),null;case 3:return i=e.stateNode,zs(),rt(on),rt(Yt),pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Ed(Vn),Vn=null))),pd(t,e),zt(e),null;case 5:hf(e);var r=br($a.current);if(n=e.type,t!==null&&e.stateNode!=null)Qv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=br(ii.current),Mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)it(Ma[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":sh(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":oh(i,s),it("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",""+o]):Fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":po(i),ah(i,s,!0);break;case"textarea":po(i),lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[Xa]=i,Zv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)it(Ma[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":sh(t,i),r=Fu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":oh(t,i),r=Bu(t,i),it("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(t,l):typeof l=="number"&&Oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Vd(t,s,l,a))}switch(n){case"input":po(t),ah(t,i,!1);break;case"textarea":po(t),lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Jv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=br($a.current),br(ii.current),Mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return zt(e),null;case 13:if(rt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&xn!==null&&e.mode&1&&!(e.flags&128))vv(),ks(),e.flags|=98560,s=!1;else if(s=Mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ti]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Vn!==null&&(Ed(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?At===0&&(At=3):bf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return zs(),pd(t,e),t===null&&Ga(e.stateNode.containerInfo),zt(e),null;case 10:return cf(e.type._context),zt(e),null;case 17:return ln(e.type)&&Cl(),zt(e),null;case 19:if(rt(ct),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ca(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Hs&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return zt(e),null}else 2*vt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ct.current,et(ct,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Tf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Ly(t,e){switch(sf(e),e.tag){case 1:return ln(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),rt(on),rt(Yt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(rt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ct),null;case 4:return zs(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var bo=!1,Gt=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function md(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Zh=!1;function Dy(t,e){if(Qu=wl,t=rv(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},wl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,x=v.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:zn(e.type,S),x);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){pt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=Zh,Zh=!1,v}function Na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&md(e,n,s)}r=r.next}while(r!==i)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ex(t){var e=t.alternate;e!==null&&(t.alternate=null,ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Xa],delete e[nd],delete e[my],delete e[gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tx(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var Ut=null,Hn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)nx(t,e,n),n=n.sibling}function nx(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Gt||Ts(n,e);case 6:var i=Ut,r=Hn;Ut=null,Ui(t,e,n),Ut=i,Hn=r,Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),ja(t)):Oc(Ut,n.stateNode));break;case 4:i=Ut,r=Hn,Ut=n.stateNode.containerInfo,Hn=!0,Ui(t,e,n),Ut=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&md(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Gt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ui(t,e,n),Gt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function Jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ny),e.forEach(function(i){var r=Hy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Hn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ut===null)throw Error(ne(160));nx(s,a,r),Ut=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ix(e,t),e=e.sibling}function ix(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Qn(t),i&4){try{Na(3,t,t.return),nc(3,t)}catch(S){pt(t,t.return,S)}try{Na(5,t,t.return)}catch(S){pt(t,t.return,S)}}break;case 1:Fn(e,t),Qn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Fn(e,t),Qn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Oa(r,"")}catch(S){pt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Tg(r,s),Hu(o,a);var c=Hu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Pg(r,p):h==="dangerouslySetInnerHTML"?Cg(r,p):h==="children"?Oa(r,p):Vd(r,h,p,c)}switch(o){case"input":Ou(r,s);break;case"textarea":bg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(S){pt(t,t.return,S)}}break;case 6:if(Fn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){pt(t,t.return,S)}}break;case 3:if(Fn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(S){pt(t,t.return,S)}break;case 4:Fn(e,t),Qn(t);break;case 13:Fn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=vt())),i&4&&Jh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||h,Fn(e,t),Gt=c):Fn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(p=xe=h;xe!==null;){switch(d=xe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Na(4,d,d.return);break;case 1:Ts(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){pt(i,n,S)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){tp(p);continue}}m!==null?(m.return=d,xe=m):tp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Rg("display",a))}catch(S){pt(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){pt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),Qn(t),i&4&&Jh(t);break;case 21:break;default:Fn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tx(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var s=Qh(t);xd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Qh(t);vd(t,o,a);break;default:throw Error(ne(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Iy(t,e,n){xe=t,rx(t)}function rx(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||bo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=bo;var c=Gt;if(bo=a,(Gt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?np(r):l!==null?(l.return=a,xe=l):np(r);for(;s!==null;)xe=s,rx(s),s=s.sibling;xe=r,bo=o,Gt=c}ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):ep(t)}}function ep(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Gt||e.flags&512&&gd(e)}catch(d){pt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function tp(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function np(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{gd(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{gd(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var Uy=Math.ceil,kl=Di.ReactCurrentDispatcher,Sf=Di.ReactCurrentOwner,Dn=Di.ReactCurrentBatchConfig,Ye=0,Dt=null,Et=null,Ot=0,gn=0,bs=ur(0),At=0,Qa=null,kr=0,ic=0,Ef=0,Da=null,sn=null,Mf=0,Hs=1/0,mi=null,Bl=!1,_d=null,tr=null,Ao=!1,$i=null,zl=0,Ia=0,yd=null,hl=-1,pl=0;function tn(){return Ye&6?vt():hl!==-1?hl:hl=vt()}function nr(t){return t.mode&1?Ye&2&&Ot!==0?Ot&-Ot:xy.transition!==null?(pl===0&&(pl=Hg()),pl):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:qg(t.type)),t):1}function Yn(t,e,n,i){if(50<Ia)throw Ia=0,yd=null,Error(ne(185));io(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(ic|=n),At===4&&Xi(t,Ot)),cn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Hs=vt()+500,Jl&&dr()))}function cn(t,e){var n=t.callbackNode;x_(t,e);var i=Ml(t,t===Dt?Ot:0);if(i===0)n!==null&&dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dh(n),e===1)t.tag===0?vy(ip.bind(null,t)):pv(ip.bind(null,t)),hy(function(){!(Ye&6)&&dr()}),n=null;else{switch(Vg(i)){case 1:n=$d;break;case 4:n=zg;break;case 16:n=El;break;case 536870912:n=jg;break;default:n=El}n=fx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(hl=-1,pl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Ml(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jl(t,i);else{e=i;var r=Ye;Ye|=2;var s=ox();(Dt!==t||Ot!==e)&&(mi=null,Hs=vt()+500,Ar(t,e));do try{ky();break}catch(o){ax(t,o)}while(!0);lf(),kl.current=s,Ye=r,Et!==null?e=0:(Dt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Yu(t),r!==0&&(i=r,e=Sd(t,r))),e===1)throw n=Qa,Ar(t,0),Xi(t,i),cn(t,vt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fy(r)&&(e=jl(t,i),e===2&&(s=Yu(t),s!==0&&(i=s,e=Sd(t,s))),e===1))throw n=Qa,Ar(t,0),Xi(t,i),cn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:yr(t,sn,mi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Mf+500-vt(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=td(yr.bind(null,t,sn,mi),e);break}yr(t,sn,mi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uy(i/1960))-i,10<i){t.timeoutHandle=td(yr.bind(null,t,sn,mi),i);break}yr(t,sn,mi);break;case 5:yr(t,sn,mi);break;default:throw Error(ne(329))}}}return cn(t,vt()),t.callbackNode===n?sx.bind(null,t):null}function Sd(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=jl(t,e),t!==2&&(e=sn,sn=n,e!==null&&Ed(e)),t}function Ed(t){sn===null?sn=t:sn.push.apply(sn,t)}function Fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Ef,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function ip(t){if(Ye&6)throw Error(ne(327));Ds();var e=Ml(t,0);if(!(e&1))return cn(t,vt()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var i=Yu(t);i!==0&&(e=i,n=Sd(t,i))}if(n===1)throw n=Qa,Ar(t,0),Xi(t,e),cn(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,sn,mi),cn(t,vt()),null}function wf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Hs=vt()+500,Jl&&dr())}}function Br(t){$i!==null&&$i.tag===0&&!(Ye&6)&&Ds();var e=Ye;Ye|=1;var n=Dn.transition,i=Ke;try{if(Dn.transition=null,Ke=1,t)return t()}finally{Ke=i,Dn.transition=n,Ye=e,!(Ye&6)&&dr()}}function Tf(){gn=bs.current,rt(bs)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fy(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:zs(),rt(on),rt(Yt),pf();break;case 5:hf(i);break;case 4:zs();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:cf(i.type._context);break;case 22:case 23:Tf()}n=n.return}if(Dt=t,Et=t=ir(t.current,null),Ot=gn=e,At=0,Qa=null,Ef=ic=kr=0,sn=Da=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function ax(t,e){do{var n=Et;try{if(lf(),ul.current=Ol,Fl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(Or=0,Nt=bt=dt=null,La=!1,qa=0,Sf.current=null,n===null||n.return===null){At=1,Qa=e,Et=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Gh(a);if(m!==null){m.flags&=-257,Wh(m,a,o,s,e),m.mode&1&&Vh(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Vh(s,c,e),bf();break e}l=Error(ne(426))}}else if(at&&o.mode&1){var x=Gh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Wh(x,a,o,s,e),af(js(l,o));break e}}s=l=js(l,o),At!==4&&(At=2),Da===null?Da=[s]:Da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Vv(s,l,e);Oh(s,f);break e;case 1:o=l;var y=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tr===null||!tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Gv(s,o,e);Oh(s,E);break e}}s=s.return}while(s!==null)}cx(n)}catch(M){e=M,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function ox(){var t=kl.current;return kl.current=Ol,t===null?Ol:t}function bf(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(kr&268435455)&&!(ic&268435455)||Xi(Dt,Ot)}function jl(t,e){var n=Ye;Ye|=2;var i=ox();(Dt!==t||Ot!==e)&&(mi=null,Ar(t,e));do try{Oy();break}catch(r){ax(t,r)}while(!0);if(lf(),Ye=n,kl.current=i,Et!==null)throw Error(ne(261));return Dt=null,Ot=0,At}function Oy(){for(;Et!==null;)lx(Et)}function ky(){for(;Et!==null&&!c_();)lx(Et)}function lx(t){var e=dx(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?cx(t):Et=e,Sf.current=null}function cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ly(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=Py(n,e,gn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function yr(t,e,n){var i=Ke,r=Dn.transition;try{Dn.transition=null,Ke=1,By(t,e,n,i)}finally{Dn.transition=r,Ke=i}return null}function By(t,e,n,i){do Ds();while($i!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(__(t,s),t===Dt&&(Et=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,fx(El,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=Ke;Ke=1;var o=Ye;Ye|=4,Sf.current=null,Dy(t,n),ix(n,t),sy(Ju),wl=!!Qu,Ju=Qu=null,t.current=n,Iy(n),u_(),Ye=o,Ke=a,Dn.transition=s}else t.current=n;if(Ao&&(Ao=!1,$i=t,zl=r),s=t.pendingLanes,s===0&&(tr=null),h_(n.stateNode),cn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=_d,_d=null,t;return zl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===yd?Ia++:(Ia=0,yd=t):Ia=0,dr(),null}function Ds(){if($i!==null){var t=Vg(zl),e=Dn.transition,n=Ke;try{if(Dn.transition=null,Ke=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,zl=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:Na(8,h,s)}var p=h.child;if(p!==null)p.return=h,xe=p;else for(;xe!==null;){h=xe;var d=h.sibling,m=h.return;if(ex(h),h===c){xe=null;break}if(d!==null){d.return=m,xe=d;break}xe=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,xe=f;break e}xe=s.return}}var y=t.current;for(xe=y;xe!==null;){a=xe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,xe=g;else e:for(a=y;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:nc(9,o)}}catch(M){pt(o,o.return,M)}if(o===a){xe=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,xe=E;break e}xe=o.return}}if(Ye=r,dr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Ke=n,Dn.transition=e}}return!1}function rp(t,e,n){e=js(n,e),e=Vv(t,e,1),t=er(t,e,1),e=tn(),t!==null&&(io(t,1,e),cn(t,e))}function pt(t,e,n){if(t.tag===3)rp(t,t,n);else for(;e!==null;){if(e.tag===3){rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=js(n,t),t=Gv(e,t,1),e=er(e,t,1),t=tn(),e!==null&&(io(e,1,t),cn(e,t));break}}e=e.return}}function zy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>vt()-Mf?Ar(t,0):Ef|=n),cn(t,e)}function ux(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=tn();t=Ri(t,e),t!==null&&(io(t,e,n),cn(t,n))}function jy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ux(t,n)}function Hy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),ux(t,n)}var dx;dx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Ry(t,e,n);an=!!(t.flags&131072)}else an=!1,at&&e.flags&1048576&&mv(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fl(t,e),t=e.pendingProps;var r=Os(e,Yt.current);Ns(e,n),r=gf(null,e,i,t,r,n);var s=vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,df(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,ld(e,i,t,n),e=dd(null,e,i,!0,s,n)):(e.tag=0,at&&s&&rf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Gy(i),t=zn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=Xh(null,e,i,t,n);break e;case 14:e=Yh(null,e,i,zn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),$h(t,e,i,r,n);case 3:e:{if($v(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sv(t,e),Il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ne(423)),e),e=qh(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ne(424)),e),e=qh(t,e,i,n,r);break e}else for(xn=Ji(e.stateNode.containerInfo.firstChild),_n=e,at=!0,Vn=null,n=_v(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Pi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Ev(e),t===null&&sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ed(i,r)?a=null:s!==null&&ed(i,s)&&(e.flags|=32),Yv(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&sd(e),null;case 13:return qv(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Xh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,et(Nl,i._currentValue),i._currentValue=a,s!==null)if(qn(s.value,a)){if(s.children===r.children&&!on.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ad(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ad(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=In(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Yh(t,e,i,r,n);case 15:return Wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),fl(t,e),e.tag=1,ln(i)?(t=!0,Rl(e)):t=!1,Ns(e,n),Hv(e,i,r),ld(e,i,r,n),dd(null,e,i,!0,t,n);case 19:return Kv(t,e,n);case 22:return Xv(t,e,n)}throw Error(ne(156,e.tag))};function fx(t,e){return Bg(t,e)}function Vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new Vy(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gy(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Xd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Af(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Cr(n.children,r,s,e);case Gd:a=8,r|=8;break;case Nu:return t=Nn(12,n,e,r|2),t.elementType=Nu,t.lanes=s,t;case Du:return t=Nn(13,n,e,r),t.elementType=Du,t.lanes=s,t;case Iu:return t=Nn(19,n,e,r),t.elementType=Iu,t.lanes=s,t;case Eg:return rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yg:a=10;break e;case Sg:a=9;break e;case Wd:a=11;break e;case Xd:a=14;break e;case ji:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function rc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,i,r,s,a,o,l){return t=new Wy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function Xy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function hx(t){if(!t)return lr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(ln(n))return hv(t,n,e)}return e}function px(t,e,n,i,r,s,a,o,l){return t=Cf(n,i,!0,t,r,s,a,o,l),t.context=hx(null),n=t.current,i=tn(),r=nr(n),s=wi(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,io(t,r,i),cn(t,i),t}function sc(t,e,n,i){var r=e.current,s=tn(),a=nr(r);return n=hx(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,a),t!==null&&(Yn(t,r,a,s),cl(t,r,a)),a}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rf(t,e){sp(t,e),(t=t.alternate)&&sp(t,e)}function Yy(){return null}var mx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pf(t){this._internalRoot=t}ac.prototype.render=Pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));sc(t,e,null,null)};ac.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){sc(null,t,null,null)}),e[Ci]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&$g(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ap(){}function $y(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hl(a);s.call(c)}}var a=px(e,i,t,0,null,!1,!1,"",ap);return t._reactRootContainer=a,t[Ci]=a.current,Ga(t.nodeType===8?t.parentNode:t),Br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Hl(l);o.call(c)}}var l=Cf(t,0,!1,null,null,!1,!1,"",ap);return t._reactRootContainer=l,t[Ci]=l.current,Ga(t.nodeType===8?t.parentNode:t),Br(function(){sc(e,l,n,i)}),l}function lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Hl(a);o.call(l)}}sc(e,a,t,r)}else a=$y(n,e,t,r,i);return Hl(a)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(qd(e,n|1),cn(e,vt()),!(Ye&6)&&(Hs=vt()+500,dr()))}break;case 13:Br(function(){var i=Ri(t,1);if(i!==null){var r=tn();Yn(i,t,1,r)}}),Rf(t,1)}};Kd=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=tn();Yn(e,t,134217728,n)}Rf(t,134217728)}};Wg=function(t){if(t.tag===13){var e=nr(t),n=Ri(t,e);if(n!==null){var i=tn();Yn(n,t,e,i)}Rf(t,e)}};Xg=function(){return Ke};Yg=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Gu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ql(i);if(!r)throw Error(ne(90));wg(i),Ou(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Dg=wf;Ig=Br;var qy={usingClientEntryPoint:!1,Events:[so,ys,Ql,Lg,Ng,wf]},ua={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Og(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||Yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{$l=Co.inject(Ky),ni=Co}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(ne(200));return Xy(t,e,null,n)};Sn.createRoot=function(t,e){if(!Lf(t))throw Error(ne(299));var n=!1,i="",r=mx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Ga(t.nodeType===8?t.parentNode:t),new Pf(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Og(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Br(t)};Sn.hydrate=function(t,e,n){if(!oc(e))throw Error(ne(200));return lc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=mx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=px(e,null,t,1,n??null,r,!1,s,a),t[Ci]=e.current,Ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ac(e)};Sn.render=function(t,e,n){if(!oc(e))throw Error(ne(200));return lc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!oc(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Sn.unstable_batchedUpdates=wf;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!oc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return lc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(t){console.error(t)}}gx(),gg.exports=Sn;var Zy=gg.exports,op=Zy;Pu.createRoot=op.createRoot,Pu.hydrateRoot=op.hydrateRoot;const Qy={},lp=t=>{let e;const n=new Set,i=(h,p)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const m=e;e=p??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(v=>v(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Qy?"ghpages":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Jy=t=>t?lp(t):lp;var vx={exports:{}},xx={},_x={exports:{}},yx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=me;function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tS=typeof Object.is=="function"?Object.is:eS,nS=Vs.useState,iS=Vs.useEffect,rS=Vs.useLayoutEffect,sS=Vs.useDebugValue;function aS(t,e){var n=e(),i=nS({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return rS(function(){r.value=n,r.getSnapshot=e,Yc(r)&&s({inst:r})},[t,n,e]),iS(function(){return Yc(r)&&s({inst:r}),t(function(){Yc(r)&&s({inst:r})})},[t]),sS(n),n}function Yc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tS(t,n)}catch{return!0}}function oS(t,e){return e()}var lS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oS:aS;yx.useSyncExternalStore=Vs.useSyncExternalStore!==void 0?Vs.useSyncExternalStore:lS;_x.exports=yx;var cS=_x.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc=me,uS=cS;function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fS=typeof Object.is=="function"?Object.is:dS,hS=uS.useSyncExternalStore,pS=cc.useRef,mS=cc.useEffect,gS=cc.useMemo,vS=cc.useDebugValue;xx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=pS(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=gS(function(){function l(m){if(!c){if(c=!0,h=m,m=i(m),r!==void 0&&a.hasValue){var v=a.value;if(r(v,m))return p=v}return p=m}if(v=p,fS(h,m))return v;var S=i(m);return r!==void 0&&r(v,S)?(h=m,v):(h=m,p=S)}var c=!1,h,p,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=hS(t,s[0],s[1]);return mS(function(){a.hasValue=!0,a.value=o},[o]),vS(o),o};vx.exports=xx;var xS=vx.exports;const _S=ig(xS),Sx={},{useDebugValue:yS}=pg,{useSyncExternalStoreWithSelector:SS}=_S;let cp=!1;const ES=t=>t;function MS(t,e=ES,n){(Sx?"ghpages":void 0)!=="production"&&n&&!cp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),cp=!0);const i=SS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return yS(i),i}const up=t=>{(Sx?"ghpages":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Jy(t):t,n=(i,r)=>MS(e,i,r);return Object.assign(n,e),n},Qs=t=>t?up(t):up,Ex="pixel-skin-studio:gallery:v2",dp="pixel-skin-studio:gallery:v1",wS=()=>Math.random().toString(36).slice(2,10),Wr=t=>{try{localStorage.setItem(Ex,JSON.stringify(t))}catch(e){console.warn("Could not persist gallery (storage full?)",e)}},fp=t=>t.filter(e=>!e.id.startsWith("seed-")),Rr=Qs((t,e)=>({skins:[],hydrate:()=>{try{let n=localStorage.getItem(Ex);if(!n){const r=localStorage.getItem(dp);if(r){const s=JSON.parse(r);if(Array.isArray(s)){const a=fp(s);Wr(a),localStorage.removeItem(dp),t({skins:a});return}}t({skins:[]});return}const i=JSON.parse(n);if(Array.isArray(i)){const r=fp(i);r.length!==i.length&&Wr(r),t({skins:r})}}catch{}},save:n=>{const i={...n,id:wS(),createdAt:Date.now()};return t(r=>{const s=[i,...r.skins];return Wr(s),{skins:s}}),i},remove:n=>{t(i=>{const r=i.skins.filter(s=>s.id!==n);return Wr(r),{skins:r}})},rename:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,name:i}:a);return Wr(s),{skins:s}})},update:(n,i)=>{t(r=>{const s=r.skins.map(a=>a.id===n?{...a,...i}:a);return Wr(s),{skins:s}})}}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="156",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TS=0,hp=1,bS=2,Mx=1,AS=2,hi=3,ri=0,un=1,Ln=2,Ti=0,Is=1,pp=2,mp=3,gp=4,CS=5,ps=100,RS=101,PS=102,vp=103,xp=104,LS=200,NS=201,DS=202,IS=203,wx=204,Tx=205,US=206,FS=207,OS=208,kS=209,BS=210,zS=0,jS=1,HS=2,Md=3,VS=4,GS=5,WS=6,XS=7,bx=0,YS=1,$S=2,rr=0,qS=1,KS=2,ZS=3,QS=4,JS=5,Ax=300,Gs=301,Ws=302,Vl=303,wd=304,uc=306,Td=1e3,Gn=1001,bd=1002,ut=1003,_p=1004,$c=1005,Rn=1006,eE=1007,Ja=1008,sr=1009,tE=1010,nE=1011,Df=1012,Cx=1013,qi=1014,Ei=1015,Xs=1016,Rx=1017,Px=1018,Pr=1020,iE=1021,Wn=1023,rE=1024,sE=1025,Lr=1026,Ys=1027,aE=1028,Lx=1029,oE=1030,Nx=1031,Dx=1033,qc=33776,Kc=33777,Zc=33778,Qc=33779,yp=35840,Sp=35841,Ep=35842,Mp=35843,lE=36196,wp=37492,Tp=37496,bp=37808,Ap=37809,Cp=37810,Rp=37811,Pp=37812,Lp=37813,Np=37814,Dp=37815,Ip=37816,Up=37817,Fp=37818,Op=37819,kp=37820,Bp=37821,Jc=36492,zp=36494,jp=36495,cE=36283,Hp=36284,Vp=36285,Gp=36286,Ix=3e3,Nr=3001,uE=3200,dE=3201,Ux=0,fE=1,Dr="",st="srgb",si="srgb-linear",dc="display-p3",eu=7680,hE=519,pE=512,mE=513,gE=514,vE=515,xE=516,_E=517,yE=518,SE=519,Ad=35044,Wp="300 es",Cd=1035,Mi=2e3,Gl=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,Rd=180/Math.PI;function ar(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function EE(t,e){return(t%e+e)%e}function tu(t,e,n){return(1-n)*t+n*e}function Xp(t){return(t&t-1)===0&&t!==0}function Pd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ze(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ME={DEG2RAD:gl};class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],m=i[5],v=i[8],S=r[0],x=r[3],f=r[6],y=r[1],g=r[4],E=r[7],M=r[2],P=r[5],b=r[8];return s[0]=a*S+o*y+l*M,s[3]=a*x+o*g+l*P,s[6]=a*f+o*E+l*b,s[1]=c*S+h*y+p*M,s[4]=c*x+h*g+p*P,s[7]=c*f+h*E+p*b,s[2]=d*S+m*y+v*M,s[5]=d*x+m*g+v*P,s[8]=d*f+m*E+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,d=o*l-h*s,m=c*s-a*l,v=n*p+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(nu.makeScale(e,n)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new Be;function Fx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wE(){const t=Wl("canvas");return t.style.display="block",t}const Yp={};function Ua(t){t in Yp||(Yp[t]=!0,console.warn(t))}function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const TE=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),bE=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function AE(t){return t.convertSRGBToLinear().applyMatrix3(bE)}function CE(t){return t.applyMatrix3(TE).convertLinearToSRGB()}const RE={[si]:t=>t,[st]:t=>t.convertSRGBToLinear(),[dc]:AE},PE={[si]:t=>t,[st]:t=>t.convertLinearToSRGB(),[dc]:CE},bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return si},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=RE[e],r=PE[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Xr;class Ox{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=Wl("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LE=0;class kx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ru(r[a].image)):s.push(ru(r[a]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ox.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NE=0;class Wt extends Vr{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Rn,a=Ja,o=Wn,l=sr,c=Wt.DEFAULT_ANISOTROPY,h=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ar(),this.name="",this.source=new kx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nr?st:Dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?Nr:Ix}set encoding(e){Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?st:Dr}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ax;Wt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],v=l[9],S=l[2],x=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-S)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+S)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(m+1)/2,M=(f+1)/2,P=(h+d)/4,b=(p+S)/4,C=(v+x)/4;return g>E&&g>M?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=P/i,s=b/i):E>M?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=C/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=C/s),this.set(i,r,s,n),this}let y=Math.sqrt((x-v)*(x-v)+(p-S)*(p-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-v)/y,this.y=(p-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DE extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?st:Dr),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Rn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends DE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Bx extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IE extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(p!==S||l!==d||c!==m||h!==v){let x=1-o;const f=l*d+c*m+h*v+p*S,y=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const M=Math.sqrt(g),P=Math.atan2(M,f*y);x=Math.sin(x*P)/M,o=Math.sin(o*P)/M}const E=o*y;if(l=l*x+d*E,c=c*x+m*E,h=h*x+v*E,p=p*x+S*E,x===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*m-c*d,e[n+1]=l*v+h*d+c*p-o*m,e[n+2]=c*v+h*m+o*d-l*p,e[n+3]=h*v-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*p+c*m*v,this._y=c*m*p-d*h*v,this._z=c*h*v+d*m*p,this._w=c*h*p-d*m*v;break;case"YXZ":this._x=d*h*p+c*m*v,this._y=c*m*p-d*h*v,this._z=c*h*v-d*m*p,this._w=c*h*p+d*m*v;break;case"ZXY":this._x=d*h*p-c*m*v,this._y=c*m*p+d*h*v,this._z=c*h*v+d*m*p,this._w=c*h*p-d*m*v;break;case"ZYX":this._x=d*h*p-c*m*v,this._y=c*m*p+d*h*v,this._z=c*h*v-d*m*p,this._w=c*h*p+d*m*v;break;case"YZX":this._x=d*h*p+c*m*v,this._y=c*m*p+d*h*v,this._z=c*h*v-d*m*p,this._w=c*h*p-d*m*v;break;case"XZY":this._x=d*h*p-c*m*v,this._y=c*m*p-d*h*v,this._z=c*h*v+d*m*p,this._w=c*h*p+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,h=l*i+o*n-s*r,p=l*r+s*i-a*n,d=-s*n-a*i-o*r;return this.x=c*l+d*-s+h*-o-p*-a,this.y=h*l+d*-a+p*-s-c*-o,this.z=p*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new O,$p=new zr;class oo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)li.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else r.boundingBox===null&&r.computeBoundingBox(),Yr.copy(r.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Ro.subVectors(this.max,da),$r.subVectors(e.a,da),qr.subVectors(e.b,da),Kr.subVectors(e.c,da),Fi.subVectors(qr,$r),Oi.subVectors(Kr,qr),pr.subVectors($r,Kr);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-pr.z,pr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,pr.z,0,-pr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-pr.y,pr.x,0];return!au(n,$r,qr,Kr,Ro)||(n=[1,0,0,0,1,0,0,0,1],!au(n,$r,qr,Kr,Ro))?!1:(Po.crossVectors(Fi,Oi),n=[Po.x,Po.y,Po.z],au(n,$r,qr,Kr,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],li=new O,Yr=new oo,$r=new O,qr=new O,Kr=new O,Fi=new O,Oi=new O,pr=new O,da=new O,Ro=new O,Po=new O,mr=new O;function au(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const UE=new oo,fa=new O,ou=new O;class If{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):UE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(ou)),this.expandByPoint(fa.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new O,lu=new O,Lo=new O,ki=new O,cu=new O,No=new O,uu=new O;class Uf{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Lo),o=ki.dot(this.direction),l=-ki.dot(Lo),c=ki.lengthSq(),h=Math.abs(1-a*a);let p,d,m,v;if(h>0)if(p=a*l-o,d=a*o-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const S=1/h;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(lu).addScaledVector(Lo,d),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),No.subVectors(i,e),uu.crossVectors(cu,No);let a=this.direction.dot(uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(ki,No));if(l<0)return null;const c=o*this.direction.dot(cu.cross(ki));if(c<0||l+c>a)return null;const h=-o*ki.dot(uu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,a,o,l,c,h,p,d,m,v,S,x){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,d,m,v,S,x)}set(e,n,i,r,s,a,o,l,c,h,p,d,m,v,S,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=v,f[11]=S,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,v=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,v=c*h,S=c*p;n[0]=d+S*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,v=c*h,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*p,v=o*h,S=o*p;n[0]=l*h,n[4]=v*c-m,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*h,n[4]=S-d*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+v,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=d*p+S,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,OE)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Bi.crossVectors(i,pn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Bi.crossVectors(i,pn)),Bi.normalize(),Do.crossVectors(pn,Bi),r[0]=Bi.x,r[4]=Do.x,r[8]=pn.x,r[1]=Bi.y,r[5]=Do.y,r[9]=pn.y,r[2]=Bi.z,r[6]=Do.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],m=i[13],v=i[2],S=i[6],x=i[10],f=i[14],y=i[3],g=i[7],E=i[11],M=i[15],P=r[0],b=r[4],C=r[8],_=r[12],T=r[1],G=r[5],K=r[9],I=r[13],k=r[2],N=r[6],Z=r[10],q=r[14],F=r[3],H=r[7],X=r[11],R=r[15];return s[0]=a*P+o*T+l*k+c*F,s[4]=a*b+o*G+l*N+c*H,s[8]=a*C+o*K+l*Z+c*X,s[12]=a*_+o*I+l*q+c*R,s[1]=h*P+p*T+d*k+m*F,s[5]=h*b+p*G+d*N+m*H,s[9]=h*C+p*K+d*Z+m*X,s[13]=h*_+p*I+d*q+m*R,s[2]=v*P+S*T+x*k+f*F,s[6]=v*b+S*G+x*N+f*H,s[10]=v*C+S*K+x*Z+f*X,s[14]=v*_+S*I+x*q+f*R,s[3]=y*P+g*T+E*k+M*F,s[7]=y*b+g*G+E*N+M*H,s[11]=y*C+g*K+E*Z+M*X,s[15]=y*_+g*I+E*q+M*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],v=e[3],S=e[7],x=e[11],f=e[15];return v*(+s*l*p-r*c*p-s*o*d+i*c*d+r*o*m-i*l*m)+S*(+n*l*m-n*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+x*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*h-i*c*h)+f*(-r*o*h-n*l*p+n*o*d+r*a*p-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],v=e[12],S=e[13],x=e[14],f=e[15],y=p*x*c-S*d*c+S*l*m-o*x*m-p*l*f+o*d*f,g=v*d*c-h*x*c-v*l*m+a*x*m+h*l*f-a*d*f,E=h*S*c-v*p*c+v*o*m-a*S*m-h*o*f+a*p*f,M=v*p*l-h*S*l-v*o*d+a*S*d+h*o*x-a*p*x,P=n*y+i*g+r*E+s*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=y*b,e[1]=(S*d*s-p*x*s-S*r*m+i*x*m+p*r*f-i*d*f)*b,e[2]=(o*x*s-S*l*s+S*r*c-i*x*c-o*r*f+i*l*f)*b,e[3]=(p*l*s-o*d*s-p*r*c+i*d*c+o*r*m-i*l*m)*b,e[4]=g*b,e[5]=(h*x*s-v*d*s+v*r*m-n*x*m-h*r*f+n*d*f)*b,e[6]=(v*l*s-a*x*s-v*r*c+n*x*c+a*r*f-n*l*f)*b,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*m+n*l*m)*b,e[8]=E*b,e[9]=(v*p*s-h*S*s-v*i*m+n*S*m+h*i*f-n*p*f)*b,e[10]=(a*S*s-v*o*s+v*i*c-n*S*c-a*i*f+n*o*f)*b,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*m-n*o*m)*b,e[12]=M*b,e[13]=(h*S*r-v*p*r+v*i*d-n*S*d-h*i*x+n*p*x)*b,e[14]=(v*o*r-a*S*r-v*i*l+n*S*l+a*i*x-n*o*x)*b,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*d+n*o*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,d=s*c,m=s*h,v=s*p,S=a*h,x=a*p,f=o*p,y=l*c,g=l*h,E=l*p,M=i.x,P=i.y,b=i.z;return r[0]=(1-(S+f))*M,r[1]=(m+E)*M,r[2]=(v-g)*M,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(d+f))*P,r[6]=(x+y)*P,r[7]=0,r[8]=(v+g)*b,r[9]=(x-y)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const a=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,h=1/a,p=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Mi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(o===Mi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Gl)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Mi){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),d=(n+e)*c,m=(i+r)*h;let v,S;if(o===Mi)v=(a+s)*p,S=-2*p;else if(o===Gl)v=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new O,On=new xt,FE=new O(0,0,0),OE=new O(1,1,1),Bi=new O,Do=new O,pn=new O,qp=new xt,Kp=new zr;class fc{constructor(e=0,n=0,i=0,r=fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fc.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const Zp=new O,Qr=new zr,ui=new xt,Io=new O,ha=new O,BE=new O,zE=new zr,Qp=new O(1,0,0),Jp=new O(0,1,0),em=new O(0,0,1),jE={type:"added"},HE={type:"removed"};class Xt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new O,n=new fc,i=new zr,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Be}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Io.copy(e):Io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(ha,Io,this.up):ui.lookAt(Io,ha,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(ui),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new O(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new O,di=new O,du=new O,fi=new O,Jr=new O,es=new O,tm=new O,fu=new O,hu=new O,pu=new O;let Uo=!1;class Pn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),di.subVectors(i,n),du.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(di),l=kn.dot(du),c=di.dot(di),h=di.dot(du),p=a*c-o*o;if(p===0)return s.set(-2,-1,-1);const d=1/p,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi),fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi),l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),di.subVectors(e,n),kn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),fu.subVectors(e,i);const l=Jr.dot(fu),c=es.dot(fu);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const h=Jr.dot(hu),p=es.dot(hu);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Jr,a);pu.subVectors(e,s);const m=Jr.dot(pu),v=es.dot(pu);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return tm.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(tm,o);const f=1/(x+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let VE=0;class Js extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Is,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wx,this.blendDst=Tx,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Md,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eu,this.stencilZFail=eu,this.stencilZPass=eu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=bn.workingColorSpace){return this.r=e,this.g=n,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=bn.workingColorSpace){if(e=EE(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,n=st){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=st){const i=zx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return bn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(en(Ht.r*255,0,255))*65536+Math.round(en(Ht.g*255,0,255))*256+Math.round(en(Ht.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bn.workingColorSpace){bn.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=bn.workingColorSpace){return bn.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=st){bn.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==st?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=n,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bn),e.getHSL(Fo);const i=tu(Bn.h,Fo.h,n),r=tu(Bn.s,Fo.s,n),s=tu(Bn.l,Fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new $e;$e.NAMES=zx;class jx extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,Oo=new ye;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ad,this.updateRange={offset:0,count:-1},this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_i(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_i(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_i(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_i(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hx extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vx extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bi extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GE=0;const wn=new xt,gu=new Xt,ts=new O,mn=new oo,pa=new oo,Lt=new O;class Ii extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Vx:Hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new If);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(mn.min,pa.min),mn.expandByPoint(Lt),Lt.addVectors(mn.max,pa.max),mn.expandByPoint(Lt)):(mn.expandByPoint(pa.min),mn.expandByPoint(pa.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Lt.add(ts)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new O,h[T]=new O;const p=new O,d=new O,m=new O,v=new ye,S=new ye,x=new ye,f=new O,y=new O;function g(T,G,K){p.fromArray(r,T*3),d.fromArray(r,G*3),m.fromArray(r,K*3),v.fromArray(a,T*2),S.fromArray(a,G*2),x.fromArray(a,K*2),d.sub(p),m.sub(p),S.sub(v),x.sub(v);const I=1/(S.x*x.y-x.x*S.y);isFinite(I)&&(f.copy(d).multiplyScalar(x.y).addScaledVector(m,-S.y).multiplyScalar(I),y.copy(m).multiplyScalar(S.x).addScaledVector(d,-x.x).multiplyScalar(I),c[T].add(f),c[G].add(f),c[K].add(f),h[T].add(y),h[G].add(y),h[K].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,G=E.length;T<G;++T){const K=E[T],I=K.start,k=K.count;for(let N=I,Z=I+k;N<Z;N+=3)g(i[N+0],i[N+1],i[N+2])}const M=new O,P=new O,b=new O,C=new O;function _(T){b.fromArray(s,T*3),C.copy(b);const G=c[T];M.copy(G),M.sub(b.multiplyScalar(b.dot(G))).normalize(),P.crossVectors(C,G);const I=P.dot(h[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=I}for(let T=0,G=E.length;T<G;++T){const K=E[T],I=K.start,k=K.count;for(let N=I,Z=I+k;N<Z;N+=3)_(i[N+0]),_(i[N+1]),_(i[N+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),S=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let f=0;f<h;f++)d[v++]=c[m++]}return new $n(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ii,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new xt,gr=new Uf,ko=new If,im=new O,ns=new O,is=new O,rs=new O,vu=new O,Bo=new O,zo=new ye,jo=new ye,Ho=new ye,rm=new O,sm=new O,am=new O,Vo=new O,Go=new O;class Je extends Xt{constructor(e=new Ii,n=new jx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(vu.fromBufferAttribute(p,e),a?Bo.addScaledVector(vu,h):Bo.addScaledVector(vu.sub(n),h))}n.add(Bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(ko.containsPoint(gr.origin)===!1&&(gr.intersectSphere(ko,im)===null||gr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const x=d[v],f=a[x.materialIndex],y=Math.max(x.start,m.start),g=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let E=y,M=g;E<M;E+=3){const P=o.getX(E),b=o.getX(E+1),C=o.getX(E+2);r=Wo(this,f,e,i,c,h,p,P,b,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let x=v,f=S;x<f;x+=3){const y=o.getX(x),g=o.getX(x+1),E=o.getX(x+2);r=Wo(this,a,e,i,c,h,p,y,g,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const x=d[v],f=a[x.materialIndex],y=Math.max(x.start,m.start),g=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let E=y,M=g;E<M;E+=3){const P=E,b=E+1,C=E+2;r=Wo(this,f,e,i,c,h,p,P,b,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let x=v,f=S;x<f;x+=3){const y=x,g=x+1,E=x+2;r=Wo(this,a,e,i,c,h,p,y,g,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function WE(t,e,n,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ri,o),l===null)return null;Go.copy(o),Go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Go);return c<n.near||c>n.far?null:{distance:c,point:Go.clone(),object:t}}function Wo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const h=WE(t,e,n,i,ns,is,rs,Vo);if(h){r&&(zo.fromBufferAttribute(r,o),jo.fromBufferAttribute(r,l),Ho.fromBufferAttribute(r,c),h.uv=Pn.getInterpolation(Vo,ns,is,rs,zo,jo,Ho,new ye)),s&&(zo.fromBufferAttribute(s,o),jo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),h.uv1=Pn.getInterpolation(Vo,ns,is,rs,zo,jo,Ho,new ye),h.uv2=h.uv1),a&&(rm.fromBufferAttribute(a,o),sm.fromBufferAttribute(a,l),am.fromBufferAttribute(a,c),h.normal=Pn.getInterpolation(Vo,ns,is,rs,rm,sm,am,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new O,materialIndex:0};Pn.getNormal(ns,is,rs,p.normal),h.face=p}return h}class gt extends Ii{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(p,2));function v(S,x,f,y,g,E,M,P,b,C,_){const T=E/b,G=M/C,K=E/2,I=M/2,k=P/2,N=b+1,Z=C+1;let q=0,F=0;const H=new O;for(let X=0;X<Z;X++){const R=X*G-I;for(let B=0;B<N;B++){const re=B*T-K;H[S]=re*y,H[x]=R*g,H[f]=k,c.push(H.x,H.y,H.z),H[S]=0,H[x]=0,H[f]=P>0?1:-1,h.push(H.x,H.y,H.z),p.push(B/b),p.push(1-X/C),q+=1}}for(let X=0;X<C;X++)for(let R=0;R<b;R++){const B=d+R+N*X,re=d+R+N*(X+1),oe=d+(R+1)+N*(X+1),ge=d+(R+1)+N*X;l.push(B,re,ge),l.push(re,oe,ge),F+=6}o.addGroup(m,F,_),m+=F,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function XE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gx(t){return t.getRenderTarget()===null?t.outputColorSpace:si}const Wx={clone:$s,merge:Qt};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=XE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xx extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends Xx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class qE extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new vn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new vn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new vn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new vn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new vn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new vn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Yx extends Wt{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?st:Dr),this.texture=new Yx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gt(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Je(r,s),o=n.minFilter;return n.minFilter===Ja&&(n.minFilter=Rn),new qE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new O,ZE=new O,QE=new Be;class Gi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(ZE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QE.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new If,Xo=new O;class Of{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],d=r[7],m=r[8],v=r[9],S=r[10],x=r[11],f=r[12],y=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,x-m,E-f).normalize(),i[1].setComponents(l+s,d+c,x+m,E+f).normalize(),i[2].setComponents(l+a,d+h,x+v,E+y).normalize(),i[3].setComponents(l-a,d-h,x-v,E-y).normalize(),i[4].setComponents(l-o,d-p,x-S,E-g).normalize(),n===Mi)i[5].setComponents(l+o,d+p,x+S,E+g).normalize();else if(n===Gl)i[5].setComponents(o,p,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $x(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,d=c.usage,m=t.createBuffer();t.bindBuffer(h,m),t.bufferData(h,p,d),c.onUploadCallback();let v;if(p instanceof Float32Array)v=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=t.SHORT;else if(p instanceof Uint32Array)v=t.UNSIGNED_INT;else if(p instanceof Int32Array)v=t.INT;else if(p instanceof Int8Array)v=t.BYTE;else if(p instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,p){const d=h.array,m=h.updateRange;t.bindBuffer(p,c),m.count===-1?t.bufferSubData(p,0,d):(n?t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,h)):p.version<c.version&&(s(p.buffer,c,h),p.version=c.version)}return{get:a,remove:o,update:l}}class kf extends Ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,d=n/l,m=[],v=[],S=[],x=[];for(let f=0;f<h;f++){const y=f*d-a;for(let g=0;g<c;g++){const E=g*p-s;v.push(E,-y,0),S.push(0,0,1),x.push(g/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const g=y+c*f,E=y+c*(f+1),M=y+1+c*(f+1),P=y+1+c*f;m.push(g,E,P),m.push(E,M,P)}this.setIndex(m),this.setAttribute("position",new bi(v,3)),this.setAttribute("normal",new bi(S,3)),this.setAttribute("uv",new bi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.width,e.height,e.widthSegments,e.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
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
#endif`,ZM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
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
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ow=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lw=`#if defined( USE_POINTS_UV )
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
#endif`,cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fw=`#ifdef USE_MORPHNORMALS
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
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,pw=`#ifdef USE_MORPHTARGETS
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
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yw=`#ifdef USE_NORMALMAP
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
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fw=`float getShadowMask() {
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
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kw=`#ifdef USE_SKINNING
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
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ww=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#ifdef USE_TRANSMISSION
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qw=`uniform sampler2D t2D;
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,r1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,v1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,S1=`#define STANDARD
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
}`,E1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,w1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,P1=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:aM,aomap_pars_fragment:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:_M,color_vertex:yM,common:SM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:MM,displacementmap_pars_vertex:wM,displacementmap_vertex:TM,emissivemap_fragment:bM,emissivemap_pars_fragment:AM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:WM,envmap_vertex:IM,fog_vertex:UM,fog_pars_vertex:FM,fog_fragment:OM,fog_pars_fragment:kM,gradientmap_pars_fragment:BM,lightmap_fragment:zM,lightmap_pars_fragment:jM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:GM,lights_toon_fragment:XM,lights_toon_pars_fragment:YM,lights_phong_fragment:$M,lights_phong_pars_fragment:qM,lights_physical_fragment:KM,lights_physical_pars_fragment:ZM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:ew,logdepthbuf_fragment:tw,logdepthbuf_pars_fragment:nw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:rw,map_fragment:sw,map_pars_fragment:aw,map_particle_fragment:ow,map_particle_pars_fragment:lw,metalnessmap_fragment:cw,metalnessmap_pars_fragment:uw,morphcolor_vertex:dw,morphnormal_vertex:fw,morphtarget_pars_vertex:hw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:gw,normal_pars_fragment:vw,normal_pars_vertex:xw,normal_vertex:_w,normalmap_pars_fragment:yw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:ww,opaque_fragment:Tw,packing:bw,premultiplied_alpha_fragment:Aw,project_vertex:Cw,dithering_fragment:Rw,dithering_pars_fragment:Pw,roughnessmap_fragment:Lw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Dw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Uw,shadowmask_pars_fragment:Fw,skinbase_vertex:Ow,skinning_pars_vertex:kw,skinning_vertex:Bw,skinnormal_vertex:zw,specularmap_fragment:jw,specularmap_pars_fragment:Hw,tonemapping_fragment:Vw,tonemapping_pars_fragment:Gw,transmission_fragment:Ww,transmission_pars_fragment:Xw,uv_pars_fragment:Yw,uv_pars_vertex:$w,uv_vertex:qw,worldpos_vertex:Kw,background_vert:Zw,background_frag:Qw,backgroundCube_vert:Jw,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:a1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:d1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:v1,meshnormal_frag:x1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:S1,meshphysical_frag:E1,meshtoon_vert:M1,meshtoon_frag:w1,points_vert:T1,points_frag:b1,shadow_vert:A1,shadow_frag:C1,sprite_vert:R1,sprite_frag:P1},de={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([de.lights,de.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yo={r:0,b:0,g:0};function L1(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,h,p=null,d=0,m=null;function v(x,f){let y=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?S(o,l):g&&g.isColor&&(S(g,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===uc)?(h===void 0&&(h=new Je(new gt(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:$s(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=g.colorSpace!==st,(p!==g||d!==g.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=g,d=g.version,m=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Je(new kf(2,2),new Ni({name:"BackgroundMaterial",uniforms:$s(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(p!==g||d!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=g,d=g.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function S(x,f){x.getRGB(Yo,Gx(t)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(x,f=1){o.set(x),l=f,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,S(o,l)},render:v}}function N1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=x(null);let c=l,h=!1;function p(k,N,Z,q,F){let H=!1;if(a){const X=S(q,Z,N);c!==X&&(c=X,m(c.object)),H=f(k,q,Z,F),H&&y(k,q,Z,F)}else{const X=N.wireframe===!0;(c.geometry!==q.id||c.program!==Z.id||c.wireframe!==X)&&(c.geometry=q.id,c.program=Z.id,c.wireframe=X,H=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,C(k,N,Z,q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function v(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function S(k,N,Z){const q=Z.wireframe===!0;let F=o[k.id];F===void 0&&(F={},o[k.id]=F);let H=F[N.id];H===void 0&&(H={},F[N.id]=H);let X=H[q];return X===void 0&&(X=x(d()),H[q]=X),X}function x(k){const N=[],Z=[],q=[];for(let F=0;F<r;F++)N[F]=0,Z[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:q,object:k,attributes:{},index:null}}function f(k,N,Z,q){const F=c.attributes,H=N.attributes;let X=0;const R=Z.getAttributes();for(const B in R)if(R[B].location>=0){const oe=F[B];let ge=H[B];if(ge===void 0&&(B==="instanceMatrix"&&k.instanceMatrix&&(ge=k.instanceMatrix),B==="instanceColor"&&k.instanceColor&&(ge=k.instanceColor)),oe===void 0||oe.attribute!==ge||ge&&oe.data!==ge.data)return!0;X++}return c.attributesNum!==X||c.index!==q}function y(k,N,Z,q){const F={},H=N.attributes;let X=0;const R=Z.getAttributes();for(const B in R)if(R[B].location>=0){let oe=H[B];oe===void 0&&(B==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),B==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));const ge={};ge.attribute=oe,oe&&oe.data&&(ge.data=oe.data),F[B]=ge,X++}c.attributes=F,c.attributesNum=X,c.index=q}function g(){const k=c.newAttributes;for(let N=0,Z=k.length;N<Z;N++)k[N]=0}function E(k){M(k,0)}function M(k,N){const Z=c.newAttributes,q=c.enabledAttributes,F=c.attributeDivisors;Z[k]=1,q[k]===0&&(t.enableVertexAttribArray(k),q[k]=1),F[k]!==N&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,N),F[k]=N)}function P(){const k=c.newAttributes,N=c.enabledAttributes;for(let Z=0,q=N.length;Z<q;Z++)N[Z]!==k[Z]&&(t.disableVertexAttribArray(Z),N[Z]=0)}function b(k,N,Z,q,F,H,X){X===!0?t.vertexAttribIPointer(k,N,Z,F,H):t.vertexAttribPointer(k,N,Z,q,F,H)}function C(k,N,Z,q){if(i.isWebGL2===!1&&(k.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const F=q.attributes,H=Z.getAttributes(),X=N.defaultAttributeValues;for(const R in H){const B=H[R];if(B.location>=0){let re=F[R];if(re===void 0&&(R==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),R==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){const oe=re.normalized,ge=re.itemSize,Se=n.get(re);if(Se===void 0)continue;const Me=Se.buffer,we=Se.type,We=Se.bytesPerElement,It=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||re.gpuType===Cx);if(re.isInterleavedBufferAttribute){const Ue=re.data,j=Ue.stride,Mt=re.offset;if(Ue.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)M(B.location+Te,Ue.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Te=0;Te<B.locationSize;Te++)E(B.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Te=0;Te<B.locationSize;Te++)b(B.location+Te,ge/B.locationSize,we,oe,j*We,(Mt+ge/B.locationSize*Te)*We,It)}else{if(re.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)M(B.location+Ue,re.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)E(B.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ue=0;Ue<B.locationSize;Ue++)b(B.location+Ue,ge/B.locationSize,we,oe,ge*We,ge/B.locationSize*Ue*We,It)}}else if(X!==void 0){const oe=X[R];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(B.location,oe);break;case 3:t.vertexAttrib3fv(B.location,oe);break;case 4:t.vertexAttrib4fv(B.location,oe);break;default:t.vertexAttrib1fv(B.location,oe)}}}}P()}function _(){K();for(const k in o){const N=o[k];for(const Z in N){const q=N[Z];for(const F in q)v(q[F].object),delete q[F];delete N[Z]}delete o[k]}}function T(k){if(o[k.id]===void 0)return;const N=o[k.id];for(const Z in N){const q=N[Z];for(const F in q)v(q[F].object),delete q[F];delete N[Z]}delete o[k.id]}function G(k){for(const N in o){const Z=o[N];if(Z[k.id]===void 0)continue;const q=Z[k.id];for(const F in q)v(q[F].object),delete q[F];delete Z[k.id]}}function K(){I(),h=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:K,resetDefaultState:I,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:E,disableUnusedAttributes:P}}function D1(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,h){t.drawArrays(s,c,h),n.update(h,s,1)}function l(c,h,p){if(p===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,p),n.update(h,s,p)}this.setMode=a,this.render=o,this.renderInstances=l}function I1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,E=a||e.has("OES_texture_float"),M=g&&E,P=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:P}}function U1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Gi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const v=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!x)s?h(null):c();else{const y=s?0:i,g=y*4;let E=f.clippingState||null;l.value=E,E=h(v,d,g,m);for(let M=0;M!==g;++M)E[M]=n[M];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,v){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=l.value,v!==!0||x===null){const f=m+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<f)&&(x=new Float32Array(f));for(let g=0,E=m;g!==S;++g,E+=4)a.copy(p[g]).applyMatrix4(y,o),a.normal.toArray(x,E),x[E+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function F1(t){let e=new WeakMap;function n(a,o){return o===Vl?a.mapping=Gs:o===wd&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vl||o===wd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new KE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qx extends Xx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,om=[.125,.215,.35,.446,.526,.582],Er=20,_u=new qx,lm=new $e;let yu=null;const Sr=(1+Math.sqrt(5))/2,os=1/Sr,cm=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Sr,os),new O(0,Sr,-os),new O(os,0,Sr),new O(-os,0,Sr),new O(Sr,os,0),new O(-Sr,os,0)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu),e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Xs,format:Wn,colorSpace:si,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O1(s)),this._blurMaterial=k1(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,_u)}_sceneToCubeUV(e,n,i,r){const o=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(lm),h.toneMapping=rr,h.autoClear=!1;const m=new jx({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new Je(new gt,m);let S=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,S=!0):(m.color.copy(lm),S=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;$o(r,y*g,f>2?g:0,g,g),h.setRenderTarget(r),S&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,_u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cm[(r-1)%cm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Je(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Er-1),S=s/v,x=isFinite(s)?1+Math.floor(h*S):Er;x>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Er}`);const f=[];let y=0;for(let b=0;b<Er;++b){const C=b/S,_=Math.exp(-C*C/2);f.push(_),b===0?y+=_:b<x&&(y+=2*_)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const E=this._sizeLods[r],M=3*E*(r>g-As?r-g+As:0),P=4*(this._cubeSize-E);$o(n,M,P,3*E,2*E),l.setRenderTarget(n),l.render(p,_u)}}function O1(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-As?l=om[a-t+As-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,S=3,x=2,f=1,y=new Float32Array(S*v*m),g=new Float32Array(x*v*m),E=new Float32Array(f*v*m);for(let P=0;P<m;P++){const b=P%3*2/3-1,C=P>2?0:-1,_=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(_,S*v*P),g.set(d,x*v*P);const T=[P,P,P,P,P,P];E.set(T,f*v*P)}const M=new Ii;M.setAttribute("position",new $n(y,S)),M.setAttribute("uv",new $n(g,x)),M.setAttribute("faceIndex",new $n(E,f)),e.push(M),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function k1(t,e,n){const i=new Float32Array(Er),r=new O(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function fm(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hm(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function B1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vl||l===wd,h=l===Gs||l===Ws;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new um(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new um(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function z1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function j1(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const S=d.morphAttributes[v];for(let x=0,f=S.length;x<f;x++)e.remove(S[x])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const S=m[v];for(let x=0,f=S.length;x<f;x++)e.update(S[x],t.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,v=p.attributes.position;let S=0;if(m!==null){const y=m.array;S=m.version;for(let g=0,E=y.length;g<E;g+=3){const M=y[g+0],P=y[g+1],b=y[g+2];d.push(M,P,P,b,b,M)}}else if(v!==void 0){const y=v.array;S=v.version;for(let g=0,E=y.length/3-1;g<E;g+=3){const M=g+0,P=g+1,b=g+2;d.push(M,P,P,b,b,M)}}else return;const x=new(Fx(d)?Vx:Hx)(d,1);x.version=S;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function H1(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){t.drawElements(s,m,o,d*l),n.update(m,s,1)}function p(d,m,v){if(v===0)return;let S,x;if(r)S=t,x="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[x](s,m,o,d*l,v),n.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=p}function V1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function G1(t,e){return t[0]-e[0]}function W1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function X1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let S=s.get(h);if(S===void 0||S.count!==v){let k=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",k)};S!==void 0&&S.texture.dispose();const y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let C=0;y===!0&&(C=1),g===!0&&(C=2),E===!0&&(C=3);let _=h.attributes.position.count*C,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const G=new Float32Array(_*T*4*v),K=new Bx(G,_,T,v);K.type=Ei,K.needsUpdate=!0;const I=C*4;for(let N=0;N<v;N++){const Z=M[N],q=P[N],F=b[N],H=_*T*4*N;for(let X=0;X<Z.count;X++){const R=X*I;y===!0&&(a.fromBufferAttribute(Z,X),G[H+R+0]=a.x,G[H+R+1]=a.y,G[H+R+2]=a.z,G[H+R+3]=0),g===!0&&(a.fromBufferAttribute(q,X),G[H+R+4]=a.x,G[H+R+5]=a.y,G[H+R+6]=a.z,G[H+R+7]=0),E===!0&&(a.fromBufferAttribute(F,X),G[H+R+8]=a.x,G[H+R+9]=a.y,G[H+R+10]=a.z,G[H+R+11]=F.itemSize===4?a.w:1)}}S={count:v,texture:K,size:new ye(_,T)},s.set(h,S),h.addEventListener("dispose",k)}let x=0;for(let y=0;y<d.length;y++)x+=d[y];const f=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",f),p.getUniforms().setValue(t,"morphTargetInfluences",d),p.getUniforms().setValue(t,"morphTargetsTexture",S.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",S.size)}else{const m=d===void 0?0:d.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];i[h.id]=v}for(let g=0;g<m;g++){const E=v[g];E[0]=g,E[1]=d[g]}v.sort(W1);for(let g=0;g<8;g++)g<m&&v[g][1]?(o[g][0]=v[g][0],o[g][1]=v[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(G1);const S=h.morphAttributes.position,x=h.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const E=o[g],M=E[0],P=E[1];M!==Number.MAX_SAFE_INTEGER&&P?(S&&h.getAttribute("morphTarget"+g)!==S[M]&&h.setAttribute("morphTarget"+g,S[M]),x&&h.getAttribute("morphNormal"+g)!==x[M]&&h.setAttribute("morphNormal"+g,x[M]),r[g]=P,f+=P):(S&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),x&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),r[g]=0)}const y=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(t,"morphTargetBaseInfluence",y),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Y1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Kx=new Wt,Zx=new Bx,Qx=new IE,Jx=new Yx,pm=[],mm=[],gm=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Rt(n,i)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),Rt(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),Rt(n,i)}}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Kx,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qx,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jx,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zx,r)}function hT(t){switch(t){case 5126:return $1;case 35664:return q1;case 35665:return K1;case 35666:return Z1;case 35674:return Q1;case 35675:return J1;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return aT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function pT(t,e){t.uniform1fv(this.addr,e)}function mT(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function gT(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function vT(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function xT(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _T(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yT(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ST(t,e){t.uniform1iv(this.addr,e)}function ET(t,e){t.uniform2iv(this.addr,e)}function MT(t,e){t.uniform3iv(this.addr,e)}function wT(t,e){t.uniform4iv(this.addr,e)}function TT(t,e){t.uniform1uiv(this.addr,e)}function bT(t,e){t.uniform2uiv(this.addr,e)}function AT(t,e){t.uniform3uiv(this.addr,e)}function CT(t,e){t.uniform4uiv(this.addr,e)}function RT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Kx,s[a])}function PT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Qx,s[a])}function LT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Jx,s[a])}function NT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Zx,s[a])}function DT(t){switch(t){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return vT;case 35674:return xT;case 35675:return _T;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return ET;case 35668:case 35672:return MT;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return bT;case 36295:return AT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class IT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=hT(n.type)}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DT(n.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function OT(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),a=Su.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_m(n,c===void 0?new IT(o,t,e):new UT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new FT(o),_m(n,p)),n=p}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);OT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let kT=0;function BT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function zT(t){switch(t){case si:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+BT(t.getShaderSource(e),a)}else return r}function jT(t,e){const n=zT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function HT(t,e){let n;switch(e){case qS:n="Linear";break;case KS:n="Reinhard";break;case ZS:n="OptimizedCineon";break;case QS:n="ACESFilmic";break;case JS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wa).join(`
`)}function GT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function wa(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(XT,$T)}const YT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $T(t,e){let n=Oe[e];if(n===void 0){const i=YT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(n)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(qT,KT)}function KT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===AS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function QT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bx:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function tb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ZT(n),c=QT(n),h=JT(n),p=eb(n),d=tb(n),m=n.isWebGL2?"":VT(n),v=GT(s),S=r.createProgram();let x,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wa).join(`
`),x.length>0&&(x+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wa).join(`
`),f.length>0&&(f+=`
`)):(x=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),f=[m,Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==rr?HT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,jT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),a=Ld(a),a=Em(a,n),a=Mm(a,n),o=Ld(o),o=Em(o,n),o=Mm(o,n),a=wm(a),o=wm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=y+x+a,E=y+f+o,M=ym(r,r.VERTEX_SHADER,g),P=ym(r,r.FRAGMENT_SHADER,E);if(r.attachShader(S,M),r.attachShader(S,P),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),t.debug.checkShaderErrors){const _=r.getProgramInfoLog(S).trim(),T=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(P).trim();let K=!0,I=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,M,P);else{const k=Sm(r,M,"vertex"),N=Sm(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+k+`
`+N)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(T===""||G==="")&&(I=!1);I&&(this.diagnostics={runnable:K,programLog:_,vertexShader:{log:T,prefix:x},fragmentShader:{log:G,prefix:f}})}r.deleteShader(M),r.deleteShader(P);let b;this.getUniforms=function(){return b===void 0&&(b=new vl(r,S)),b};let C;return this.getAttributes=function(){return C===void 0&&(C=WT(r,S)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=P,this}let ib=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sb(e),n.set(e,i)),i}}class sb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ab(t,e,n,i,r,s,a){const o=new Ff,l=new rb,c=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return _===0?"uv":`uv${_}`}function x(_,T,G,K,I){const k=K.fog,N=I.geometry,Z=_.isMeshStandardMaterial?K.environment:null,q=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),F=q&&q.mapping===uc?q.image.height:null,H=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,R=X!==void 0?X.length:0;let B=0;N.morphAttributes.position!==void 0&&(B=1),N.morphAttributes.normal!==void 0&&(B=2),N.morphAttributes.color!==void 0&&(B=3);let re,oe,ge,Se;if(H){const nt=ei[H];re=nt.vertexShader,oe=nt.fragmentShader}else re=_.vertexShader,oe=_.fragmentShader,l.update(_),ge=l.getVertexShaderID(_),Se=l.getFragmentShaderID(_);const Me=t.getRenderTarget(),we=I.isInstancedMesh===!0,We=!!_.map,It=!!_.matcap,Ue=!!q,j=!!_.aoMap,Mt=!!_.lightMap,Te=!!_.bumpMap,De=!!_.normalMap,Ce=!!_.displacementMap,tt=!!_.emissiveMap,ke=!!_.metalnessMap,Ie=!!_.roughnessMap,Xe=_.anisotropy>0,wt=_.clearcoat>0,Pt=_.iridescence>0,L=_.sheen>0,w=_.transmission>0,W=Xe&&!!_.anisotropyMap,se=wt&&!!_.clearcoatMap,te=wt&&!!_.clearcoatNormalMap,ae=wt&&!!_.clearcoatRoughnessMap,Ee=Pt&&!!_.iridescenceMap,le=Pt&&!!_.iridescenceThicknessMap,Y=L&&!!_.sheenColorMap,D=L&&!!_.sheenRoughnessMap,ee=!!_.specularMap,pe=!!_.specularColorMap,ue=!!_.specularIntensityMap,he=w&&!!_.transmissionMap,Le=w&&!!_.thicknessMap,Ge=!!_.gradientMap,U=!!_.alphaMap,fe=_.alphaTest>0,$=!!_.alphaHash,ie=!!_.extensions,ce=!!N.attributes.uv1,ze=!!N.attributes.uv2,qe=!!N.attributes.uv3;let Qe=rr;return _.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=t.toneMapping),{isWebGL2:h,shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:oe,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:we,instancingColor:we&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:si,map:We,matcap:It,envMap:Ue,envMapMode:Ue&&q.mapping,envMapCubeUVHeight:F,aoMap:j,lightMap:Mt,bumpMap:Te,normalMap:De,displacementMap:d&&Ce,emissiveMap:tt,normalMapObjectSpace:De&&_.normalMapType===fE,normalMapTangentSpace:De&&_.normalMapType===Ux,metalnessMap:ke,roughnessMap:Ie,anisotropy:Xe,anisotropyMap:W,clearcoat:wt,clearcoatMap:se,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,iridescence:Pt,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:L,sheenColorMap:Y,sheenRoughnessMap:D,specularMap:ee,specularColorMap:pe,specularIntensityMap:ue,transmission:w,transmissionMap:he,thicknessMap:Le,gradientMap:Ge,opaque:_.transparent===!1&&_.blending===Is,alphaMap:U,alphaTest:fe,alphaHash:$,combine:_.combine,mapUv:We&&S(_.map.channel),aoMapUv:j&&S(_.aoMap.channel),lightMapUv:Mt&&S(_.lightMap.channel),bumpMapUv:Te&&S(_.bumpMap.channel),normalMapUv:De&&S(_.normalMap.channel),displacementMapUv:Ce&&S(_.displacementMap.channel),emissiveMapUv:tt&&S(_.emissiveMap.channel),metalnessMapUv:ke&&S(_.metalnessMap.channel),roughnessMapUv:Ie&&S(_.roughnessMap.channel),anisotropyMapUv:W&&S(_.anisotropyMap.channel),clearcoatMapUv:se&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:D&&S(_.sheenRoughnessMap.channel),specularMapUv:ee&&S(_.specularMap.channel),specularColorMapUv:pe&&S(_.specularColorMap.channel),specularIntensityMapUv:ue&&S(_.specularIntensityMap.channel),transmissionMapUv:he&&S(_.transmissionMap.channel),thicknessMapUv:Le&&S(_.thicknessMap.channel),alphaMapUv:U&&S(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(De||Xe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:ze,vertexUv3s:qe,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(We||U),fog:!!k,useFog:_.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&_.map.colorSpace===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ie&&_.extensions.derivatives===!0,extensionFragDepth:ie&&_.extensions.fragDepth===!0,extensionDrawBuffers:ie&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)T.push(G),T.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(y(T,_),g(T,_),T.push(t.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function y(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function g(_,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function E(_){const T=v[_.type];let G;if(T){const K=ei[T];G=Wx.clone(K.uniforms)}else G=_.uniforms;return G}function M(_,T){let G;for(let K=0,I=c.length;K<I;K++){const k=c[K];if(k.cacheKey===T){G=k,++G.usedTimes;break}}return G===void 0&&(G=new nb(t,T,_,s),c.push(G)),G}function P(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),_.destroy()}}function b(_){l.remove(_)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:E,acquireProgram:M,releaseProgram:P,releaseShaderCache:b,programs:c,dispose:C}}function ob(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function lb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,d,m,v,S,x){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:m,groupOrder:v,renderOrder:p.renderOrder,z:S,group:x},t[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=p.renderOrder,f.z=S,f.group=x),e++,f}function o(p,d,m,v,S,x){const f=a(p,d,m,v,S,x);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(p,d,m,v,S,x){const f=a(p,d,m,v,S,x);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,d){n.length>1&&n.sort(p||lb),i.length>1&&i.sort(d||bm),r.length>1&&r.sort(d||bm)}function h(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function cb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Am,t.set(i,[a])):r>=s.length?(a=new Am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ub(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new $e};break;case"SpotLight":n={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function db(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fb=0;function hb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pb(t,e){const n=new ub,i=db(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new O);const s=new O,a=new xt,o=new xt;function l(h,p){let d=0,m=0,v=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let S=0,x=0,f=0,y=0,g=0,E=0,M=0,P=0,b=0,C=0;h.sort(hb);const _=p===!0?Math.PI:1;for(let G=0,K=h.length;G<K;G++){const I=h[G],k=I.color,N=I.intensity,Z=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=k.r*N*_,m+=k.g*N*_,v+=k.b*N*_;else if(I.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],N);else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*_),I.castShadow){const H=I.shadow,X=i.get(I);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=I.shadow.matrix,E++}r.directional[S]=F,S++}else if(I.isSpotLight){const F=n.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(k).multiplyScalar(N*_),F.distance=Z,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[f]=F;const H=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,H.updateMatrices(I),I.castShadow&&C++),r.spotLightMatrix[f]=H.matrix,I.castShadow){const X=i.get(I);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.spotShadow[f]=X,r.spotShadowMap[f]=q,P++}f++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(k).multiplyScalar(N),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=F,y++}else if(I.isPointLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*_),F.distance=I.distance,F.decay=I.decay,I.castShadow){const H=I.shadow,X=i.get(I);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,r.pointShadow[x]=X,r.pointShadowMap[x]=q,r.pointShadowMatrix[x]=I.shadow.matrix,M++}r.point[x]=F,x++}else if(I.isHemisphereLight){const F=n.get(I);F.skyColor.copy(I.color).multiplyScalar(N*_),F.groundColor.copy(I.groundColor).multiplyScalar(N*_),r.hemi[g]=F,g++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==S||T.pointLength!==x||T.spotLength!==f||T.rectAreaLength!==y||T.hemiLength!==g||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==P||T.numSpotMaps!==b)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=y,r.point.length=x,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=P+b-C,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=C,T.directionalLength=S,T.pointLength=x,T.spotLength=f,T.rectAreaLength=y,T.hemiLength=g,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=P,T.numSpotMaps=b,r.version=fb++)}function c(h,p){let d=0,m=0,v=0,S=0,x=0;const f=p.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){const E=h[y];if(E.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(E.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),v++}else if(E.isRectAreaLight){const M=r.rectArea[S];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const M=r.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),x++}}}return{setup:l,setupView:c,state:r}}function Cm(t,e){const n=new pb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mb(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Cm(t,e),n.set(s,[l])):a>=o.length?(l=new Cm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class gb extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vb extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
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
}`;function yb(t,e,n){let i=new Of;const r=new ye,s=new ye,a=new ot,o=new gb({depthPacking:dE}),l=new vb,c={},h=n.maxTextureSize,p={[ri]:un,[un]:ri,[Ln]:Ln},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:xb,fragmentShader:_b}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ii;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Je(v,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mx;let f=this.type;this.render=function(M,P,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const C=t.getRenderTarget(),_=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Ti),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=f!==hi&&this.type===hi,I=f===hi&&this.type!==hi;for(let k=0,N=M.length;k<N;k++){const Z=M[k],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const F=q.getFrameExtents();if(r.multiply(F),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,q.mapSize.y=s.y)),q.map===null||K===!0||I===!0){const X=this.type!==hi?{minFilter:ut,magFilter:ut}:{};q.map!==null&&q.map.dispose(),q.map=new Li(r.x,r.y,X),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const H=q.getViewportCount();for(let X=0;X<H;X++){const R=q.getViewport(X);a.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),G.viewport(a),q.updateMatrices(Z,X),i=q.getFrustum(),E(P,b,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===hi&&y(q,b),q.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(C,_,T)};function y(M,P){const b=e.update(S);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Li(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(P,null,b,d,S,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(P,null,b,m,S,null)}function g(M,P,b,C){let _=null;const T=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)_=T;else if(_=b.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=_.uuid,K=P.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let k=I[K];k===void 0&&(k=_.clone(),I[K]=k),_=k}if(_.visible=P.visible,_.wireframe=P.wireframe,C===hi?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:p[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=t.properties.get(_);G.light=b}return _}function E(M,P,b,C,_){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===hi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const K=e.update(M),I=M.material;if(Array.isArray(I)){const k=K.groups;for(let N=0,Z=k.length;N<Z;N++){const q=k[N],F=I[q.materialIndex];if(F&&F.visible){const H=g(M,F,C,_);t.renderBufferDirect(b,null,K,H,M,q)}}}else if(I.visible){const k=g(M,I,C,_);t.renderBufferDirect(b,null,K,k,M,null)}}const G=M.children;for(let K=0,I=G.length;K<I;K++)E(G[K],P,b,C,_)}}function Sb(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const fe=new ot;let $=null;const ie=new ot(0,0,0,0);return{setMask:function(ce){$!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ze,qe,Qe,fn){fn===!0&&(ce*=Qe,ze*=Qe,qe*=Qe),fe.set(ce,ze,qe,Qe),ie.equals(fe)===!1&&(t.clearColor(ce,ze,qe,Qe),ie.copy(fe))},reset:function(){U=!1,$=null,ie.set(-1,0,0,0)}}}function s(){let U=!1,fe=null,$=null,ie=null;return{setTest:function(ce){ce?Me(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ce){fe!==ce&&!U&&(t.depthMask(ce),fe=ce)},setFunc:function(ce){if($!==ce){switch(ce){case zS:t.depthFunc(t.NEVER);break;case jS:t.depthFunc(t.ALWAYS);break;case HS:t.depthFunc(t.LESS);break;case Md:t.depthFunc(t.LEQUAL);break;case VS:t.depthFunc(t.EQUAL);break;case GS:t.depthFunc(t.GEQUAL);break;case WS:t.depthFunc(t.GREATER);break;case XS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=ce}},setLocked:function(ce){U=ce},setClear:function(ce){ie!==ce&&(t.clearDepth(ce),ie=ce)},reset:function(){U=!1,fe=null,$=null,ie=null}}}function a(){let U=!1,fe=null,$=null,ie=null,ce=null,ze=null,qe=null,Qe=null,fn=null;return{setTest:function(nt){U||(nt?Me(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!U&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,Zn,qt){($!==nt||ie!==Zn||ce!==qt)&&(t.stencilFunc(nt,Zn,qt),$=nt,ie=Zn,ce=qt)},setOp:function(nt,Zn,qt){(ze!==nt||qe!==Zn||Qe!==qt)&&(t.stencilOp(nt,Zn,qt),ze=nt,qe=Zn,Qe=qt)},setLocked:function(nt){U=nt},setClear:function(nt){fn!==nt&&(t.clearStencil(nt),fn=nt)},reset:function(){U=!1,fe=null,$=null,ie=null,ce=null,ze=null,qe=null,Qe=null,fn=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,p=new WeakMap;let d={},m={},v=new WeakMap,S=[],x=null,f=!1,y=null,g=null,E=null,M=null,P=null,b=null,C=null,_=!1,T=null,G=null,K=null,I=null,k=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,q=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=q>=2);let H=null,X={};const R=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),re=new ot().fromArray(R),oe=new ot().fromArray(B);function ge(U,fe,$,ie){const ce=new Uint8Array(4),ze=t.createTexture();t.bindTexture(U,ze),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<$;qe++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ze}const Se={};Se[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(t.DEPTH_TEST),l.setFunc(Md),Ce(!1),tt(hp),Me(t.CULL_FACE),Te(Ti);function Me(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function we(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function We(U,fe){return m[U]!==fe?(t.bindFramebuffer(U,fe),m[U]=fe,i&&(U===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function It(U,fe){let $=S,ie=!1;if(U)if($=v.get(fe),$===void 0&&($=[],v.set(fe,$)),U.isWebGLMultipleRenderTargets){const ce=U.texture;if($.length!==ce.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ze=0,qe=ce.length;ze<qe;ze++)$[ze]=t.COLOR_ATTACHMENT0+ze;$.length=ce.length,ie=!0}}else $[0]!==t.COLOR_ATTACHMENT0&&($[0]=t.COLOR_ATTACHMENT0,ie=!0);else $[0]!==t.BACK&&($[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ue(U){return x!==U?(t.useProgram(U),x=U,!0):!1}const j={[ps]:t.FUNC_ADD,[RS]:t.FUNC_SUBTRACT,[PS]:t.FUNC_REVERSE_SUBTRACT};if(i)j[vp]=t.MIN,j[xp]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(j[vp]=U.MIN_EXT,j[xp]=U.MAX_EXT)}const Mt={[LS]:t.ZERO,[NS]:t.ONE,[DS]:t.SRC_COLOR,[wx]:t.SRC_ALPHA,[BS]:t.SRC_ALPHA_SATURATE,[OS]:t.DST_COLOR,[US]:t.DST_ALPHA,[IS]:t.ONE_MINUS_SRC_COLOR,[Tx]:t.ONE_MINUS_SRC_ALPHA,[kS]:t.ONE_MINUS_DST_COLOR,[FS]:t.ONE_MINUS_DST_ALPHA};function Te(U,fe,$,ie,ce,ze,qe,Qe){if(U===Ti){f===!0&&(we(t.BLEND),f=!1);return}if(f===!1&&(Me(t.BLEND),f=!0),U!==CS){if(U!==y||Qe!==_){if((g!==ps||P!==ps)&&(t.blendEquation(t.FUNC_ADD),g=ps,P=ps),Qe)switch(U){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,M=null,b=null,C=null,y=U,_=Qe}return}ce=ce||fe,ze=ze||$,qe=qe||ie,(fe!==g||ce!==P)&&(t.blendEquationSeparate(j[fe],j[ce]),g=fe,P=ce),($!==E||ie!==M||ze!==b||qe!==C)&&(t.blendFuncSeparate(Mt[$],Mt[ie],Mt[ze],Mt[qe]),E=$,M=ie,b=ze,C=qe),y=U,_=!1}function De(U,fe){U.side===Ln?we(t.CULL_FACE):Me(t.CULL_FACE);let $=U.side===un;fe&&($=!$),Ce($),U.blending===Is&&U.transparent===!1?Te(Ti):Te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const ie=U.stencilWrite;c.setTest(ie),ie&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function tt(U){U!==TS?(Me(t.CULL_FACE),U!==G&&(U===hp?t.cullFace(t.BACK):U===bS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),G=U}function ke(U){U!==K&&(Z&&t.lineWidth(U),K=U)}function Ie(U,fe,$){U?(Me(t.POLYGON_OFFSET_FILL),(I!==fe||k!==$)&&(t.polygonOffset(fe,$),I=fe,k=$)):we(t.POLYGON_OFFSET_FILL)}function Xe(U){U?Me(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function wt(U){U===void 0&&(U=t.TEXTURE0+N-1),H!==U&&(t.activeTexture(U),H=U)}function Pt(U,fe,$){$===void 0&&(H===null?$=t.TEXTURE0+N-1:$=H);let ie=X[$];ie===void 0&&(ie={type:void 0,texture:void 0},X[$]=ie),(ie.type!==U||ie.texture!==fe)&&(H!==$&&(t.activeTexture($),H=$),t.bindTexture(U,fe||Se[U]),ie.type=U,ie.texture=fe)}function L(){const U=X[H];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function w(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function ue(U){oe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function he(U,fe){let $=p.get(fe);$===void 0&&($=new WeakMap,p.set(fe,$));let ie=$.get(U);ie===void 0&&(ie=t.getUniformBlockIndex(fe,U.name),$.set(U,ie))}function Le(U,fe){const ie=p.get(fe).get(U);h.get(fe)!==ie&&(t.uniformBlockBinding(fe,ie,U.__bindingPointIndex),h.set(fe,ie))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},H=null,X={},m={},v=new WeakMap,S=[],x=null,f=!1,y=null,g=null,E=null,M=null,P=null,b=null,C=null,_=!1,T=null,G=null,K=null,I=null,k=null,re.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:we,bindFramebuffer:We,drawBuffers:It,useProgram:Ue,setBlending:Te,setMaterial:De,setFlipSided:Ce,setCullFace:tt,setLineWidth:ke,setPolygonOffset:Ie,setScissorTest:Xe,activeTexture:wt,bindTexture:Pt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:W,texImage2D:D,texImage3D:ee,updateUBOMapping:he,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:Y,texSubImage2D:se,texSubImage3D:te,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ee,scissor:pe,viewport:ue,reset:Ge}}function Eb(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,p=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let S;const x=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,w){return f?new OffscreenCanvas(L,w):Wl("canvas")}function g(L,w,W,se){let te=1;if((L.width>se||L.height>se)&&(te=se/Math.max(L.width,L.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=w?Pd:Math.floor,Ee=ae(te*L.width),le=ae(te*L.height);S===void 0&&(S=y(Ee,le));const Y=W?y(Ee,le):S;return Y.width=Ee,Y.height=le,Y.getContext("2d").drawImage(L,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ee+"x"+le+")."),Y}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function E(L){return Xp(L.width)&&Xp(L.height)}function M(L){return o?!1:L.wrapS!==Gn||L.wrapT!==Gn||L.minFilter!==ut&&L.minFilter!==Rn}function P(L,w){return L.generateMipmaps&&w&&L.minFilter!==ut&&L.minFilter!==Rn}function b(L){t.generateMipmap(L)}function C(L,w,W,se,te=!1){if(o===!1)return w;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=w;return w===t.RED&&(W===t.FLOAT&&(ae=t.R32F),W===t.HALF_FLOAT&&(ae=t.R16F),W===t.UNSIGNED_BYTE&&(ae=t.R8)),w===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ae=t.R8UI),W===t.UNSIGNED_SHORT&&(ae=t.R16UI),W===t.UNSIGNED_INT&&(ae=t.R32UI),W===t.BYTE&&(ae=t.R8I),W===t.SHORT&&(ae=t.R16I),W===t.INT&&(ae=t.R32I)),w===t.RG&&(W===t.FLOAT&&(ae=t.RG32F),W===t.HALF_FLOAT&&(ae=t.RG16F),W===t.UNSIGNED_BYTE&&(ae=t.RG8)),w===t.RGBA&&(W===t.FLOAT&&(ae=t.RGBA32F),W===t.HALF_FLOAT&&(ae=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ae=se===st&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(L,w,W){return P(L,W)===!0||L.isFramebufferTexture&&L.minFilter!==ut&&L.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){return L===ut||L===_p||L===$c?t.NEAREST:t.LINEAR}function G(L){const w=L.target;w.removeEventListener("dispose",G),I(w),w.isVideoTexture&&v.delete(w)}function K(L){const w=L.target;w.removeEventListener("dispose",K),N(w)}function I(L){const w=i.get(L);if(w.__webglInit===void 0)return;const W=L.source,se=x.get(W);if(se){const te=se[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&k(L),Object.keys(se).length===0&&x.delete(W)}i.remove(L)}function k(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const W=L.source,se=x.get(W);delete se[w.__cacheKey],a.memory.textures--}function N(L){const w=L.texture,W=i.get(L),se=i.get(w);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(W.__webglFramebuffer[te]))for(let ae=0;ae<W.__webglFramebuffer[te].length;ae++)t.deleteFramebuffer(W.__webglFramebuffer[te][ae]);else t.deleteFramebuffer(W.__webglFramebuffer[te]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[te])}else{if(Array.isArray(W.__webglFramebuffer))for(let te=0;te<W.__webglFramebuffer.length;te++)t.deleteFramebuffer(W.__webglFramebuffer[te]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let te=0,ae=w.length;te<ae;te++){const Ee=i.get(w[te]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(L)}let Z=0;function q(){Z=0}function F(){const L=Z;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Z+=1,L}function H(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function X(L,w){const W=i.get(L);if(L.isVideoTexture&&wt(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(W,L,w);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+w)}function R(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){We(W,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+w)}function B(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){We(W,L,w);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+w)}function re(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){It(W,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+w)}const oe={[Td]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[bd]:t.MIRRORED_REPEAT},ge={[ut]:t.NEAREST,[_p]:t.NEAREST_MIPMAP_NEAREST,[$c]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[eE]:t.LINEAR_MIPMAP_NEAREST,[Ja]:t.LINEAR_MIPMAP_LINEAR},Se={[pE]:t.NEVER,[SE]:t.ALWAYS,[mE]:t.LESS,[vE]:t.LEQUAL,[gE]:t.EQUAL,[yE]:t.GEQUAL,[xE]:t.GREATER,[_E]:t.NOTEQUAL};function Me(L,w,W){if(W?(t.texParameteri(L,t.TEXTURE_WRAP_S,oe[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,oe[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,oe[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,ge[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,ge[w.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==Gn||w.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,T(w.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==ut&&w.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===ut||w.minFilter!==$c&&w.minFilter!==Ja||w.type===Ei&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Xs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function we(L,w){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",G));const se=w.source;let te=x.get(se);te===void 0&&(te={},x.set(se,te));const ae=H(w);if(ae!==L.__cacheKey){te[ae]===void 0&&(te[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[ae].usedTimes++;const Ee=te[L.__cacheKey];Ee!==void 0&&(te[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&k(w)),L.__cacheKey=ae,L.__webglTexture=te[ae].texture}return W}function We(L,w,W){let se=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=t.TEXTURE_3D);const te=we(L,w),ae=w.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+W);const Ee=i.get(ae);if(ae.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=M(w)&&E(w.image)===!1;let Y=g(w.image,le,!1,h);Y=Pt(w,Y);const D=E(Y)||o,ee=s.convert(w.format,w.colorSpace);let pe=s.convert(w.type),ue=C(w.internalFormat,ee,pe,w.colorSpace,w.isVideoTexture);Me(se,w,D);let he;const Le=w.mipmaps,Ge=o&&w.isVideoTexture!==!0,U=Ee.__version===void 0||te===!0,fe=_(w,Y,D);if(w.isDepthTexture)ue=t.DEPTH_COMPONENT,o?w.type===Ei?ue=t.DEPTH_COMPONENT32F:w.type===qi?ue=t.DEPTH_COMPONENT24:w.type===Pr?ue=t.DEPTH24_STENCIL8:ue=t.DEPTH_COMPONENT16:w.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Lr&&ue===t.DEPTH_COMPONENT&&w.type!==Df&&w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qi,pe=s.convert(w.type)),w.format===Ys&&ue===t.DEPTH_COMPONENT&&(ue=t.DEPTH_STENCIL,w.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Pr,pe=s.convert(w.type))),U&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,ue,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,ue,Y.width,Y.height,0,ee,pe,null));else if(w.isDataTexture)if(Le.length>0&&D){Ge&&U&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],Ge?n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,ee,pe,he.data):n.texImage2D(t.TEXTURE_2D,$,ue,he.width,he.height,0,ee,pe,he.data);w.generateMipmaps=!1}else Ge?(U&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,ee,pe,Y.data)):n.texImage2D(t.TEXTURE_2D,0,ue,Y.width,Y.height,0,ee,pe,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Le[0].width,Le[0].height,Y.depth);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],w.format!==Wn?ee!==null?Ge?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Y.depth,ee,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ue,he.width,he.height,Y.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Y.depth,ee,pe,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ue,he.width,he.height,Y.depth,0,ee,pe,he.data)}else{Ge&&U&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],w.format!==Wn?ee!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,ee,he.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,ee,pe,he.data):n.texImage2D(t.TEXTURE_2D,$,ue,he.width,he.height,0,ee,pe,he.data)}else if(w.isDataArrayTexture)Ge?(U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ee,pe,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,Y.width,Y.height,Y.depth,0,ee,pe,Y.data);else if(w.isData3DTexture)Ge?(U&&n.texStorage3D(t.TEXTURE_3D,fe,ue,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ee,pe,Y.data)):n.texImage3D(t.TEXTURE_3D,0,ue,Y.width,Y.height,Y.depth,0,ee,pe,Y.data);else if(w.isFramebufferTexture){if(U)if(Ge)n.texStorage2D(t.TEXTURE_2D,fe,ue,Y.width,Y.height);else{let $=Y.width,ie=Y.height;for(let ce=0;ce<fe;ce++)n.texImage2D(t.TEXTURE_2D,ce,ue,$,ie,0,ee,pe,null),$>>=1,ie>>=1}}else if(Le.length>0&&D){Ge&&U&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Le[0].width,Le[0].height);for(let $=0,ie=Le.length;$<ie;$++)he=Le[$],Ge?n.texSubImage2D(t.TEXTURE_2D,$,0,0,ee,pe,he):n.texImage2D(t.TEXTURE_2D,$,ue,ee,pe,he);w.generateMipmaps=!1}else Ge?(U&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee,pe,Y)):n.texImage2D(t.TEXTURE_2D,0,ue,ee,pe,Y);P(w,D)&&b(se),Ee.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function It(L,w,W){if(w.image.length!==6)return;const se=we(L,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const ae=i.get(te);if(te.version!==ae.__version||se===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let $=0;$<6;$++)!Ee&&!le?Y[$]=g(w.image[$],!1,!0,c):Y[$]=le?w.image[$].image:w.image[$],Y[$]=Pt(w,Y[$]);const D=Y[0],ee=E(D)||o,pe=s.convert(w.format,w.colorSpace),ue=s.convert(w.type),he=C(w.internalFormat,pe,ue,w.colorSpace),Le=o&&w.isVideoTexture!==!0,Ge=ae.__version===void 0||se===!0;let U=_(w,D,ee);Me(t.TEXTURE_CUBE_MAP,w,ee);let fe;if(Ee){Le&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,he,D.width,D.height);for(let $=0;$<6;$++){fe=Y[$].mipmaps;for(let ie=0;ie<fe.length;ie++){const ce=fe[ie];w.format!==Wn?pe!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,ce.width,ce.height,pe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,ce.width,ce.height,pe,ue,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,he,ce.width,ce.height,0,pe,ue,ce.data)}}}else{fe=w.mipmaps,Le&&Ge&&(fe.length>0&&U++,n.texStorage2D(t.TEXTURE_CUBE_MAP,U,he,Y[0].width,Y[0].height));for(let $=0;$<6;$++)if(le){Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Y[$].width,Y[$].height,pe,ue,Y[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,he,Y[$].width,Y[$].height,0,pe,ue,Y[$].data);for(let ie=0;ie<fe.length;ie++){const ze=fe[ie].image[$].image;Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,ze.width,ze.height,pe,ue,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,he,ze.width,ze.height,0,pe,ue,ze.data)}}else{Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe,ue,Y[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,he,pe,ue,Y[$]);for(let ie=0;ie<fe.length;ie++){const ce=fe[ie];Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,pe,ue,ce.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,he,pe,ue,ce.image[$])}}}P(w,ee)&&b(t.TEXTURE_CUBE_MAP),ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ue(L,w,W,se,te,ae){const Ee=s.convert(W.format,W.colorSpace),le=s.convert(W.type),Y=C(W.internalFormat,Ee,le,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ee=Math.max(1,w.width>>ae),pe=Math.max(1,w.height>>ae);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ae,Y,ee,pe,w.depth,0,Ee,le,null):n.texImage2D(te,ae,Y,ee,pe,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,te,i.get(W).__webglTexture,0,Ie(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,te,i.get(W).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function j(L,w,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let se=t.DEPTH_COMPONENT16;if(W||Xe(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Ei?se=t.DEPTH_COMPONENT32F:te.type===qi&&(se=t.DEPTH_COMPONENT24));const ae=Ie(w);Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const se=Ie(w);W&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<se.length;te++){const ae=se[te],Ee=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),Y=C(ae.internalFormat,Ee,le,ae.colorSpace),D=Ie(w);W&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,D,Y,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,Y,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Mt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,te=Ie(w);if(w.depthTexture.format===Lr)Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Ys)Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Te(L){const w=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Mt(w.__webglFramebuffer,L)}else if(W){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=t.createRenderbuffer(),j(w.__webglDepthbuffer[se],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),j(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(L,w,W){const se=i.get(L);w!==void 0&&Ue(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Te(L)}function Ce(L){const w=L.texture,W=i.get(L),se=i.get(w);L.addEventListener("dispose",K),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=w.version,a.memory.textures++);const te=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,Ee=E(L)||o;if(te){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let Y=0;Y<w.mipmaps.length;Y++)W.__webglFramebuffer[le][Y]=t.createFramebuffer()}else W.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)W.__webglFramebuffer[le]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const le=L.texture;for(let Y=0,D=le.length;Y<D;Y++){const ee=i.get(le[Y]);ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Xe(L)===!1){const le=ae?w:[w];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Y=0;Y<le.length;Y++){const D=le[Y];W.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Y]);const ee=s.convert(D.format,D.colorSpace),pe=s.convert(D.type),ue=C(D.internalFormat,ee,pe,D.colorSpace,L.isXRRenderTarget===!0),he=Ie(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ue,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,W.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),j(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Me(t.TEXTURE_CUBE_MAP,w,Ee);for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)Ue(W.__webglFramebuffer[le][Y],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Y);else Ue(W.__webglFramebuffer[le],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);P(w,Ee)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=L.texture;for(let Y=0,D=le.length;Y<D;Y++){const ee=le[Y],pe=i.get(ee);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Me(t.TEXTURE_2D,ee,Ee),Ue(W.__webglFramebuffer,L,ee,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),P(ee,Ee)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,se.__webglTexture),Me(le,w,Ee),o&&w.mipmaps&&w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)Ue(W.__webglFramebuffer[Y],L,w,t.COLOR_ATTACHMENT0,le,Y);else Ue(W.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,le,0);P(w,Ee)&&b(le),n.unbindTexture()}L.depthBuffer&&Te(L)}function tt(L){const w=E(L)||o,W=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,te=W.length;se<te;se++){const ae=W[se];if(P(ae,w)){const Ee=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(Ee,le),b(Ee),n.unbindTexture()}}}function ke(L){if(o&&L.samples>0&&Xe(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],W=L.width,se=L.height;let te=t.COLOR_BUFFER_BIT;const ae=[],Ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(L),Y=L.isWebGLMultipleRenderTargets===!0;if(Y)for(let D=0;D<w.length;D++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let D=0;D<w.length;D++){ae.push(t.COLOR_ATTACHMENT0+D),L.depthBuffer&&ae.push(Ee);const ee=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ee===!1&&(L.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[D]),ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),Y){const pe=i.get(w[D]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,W,se,0,0,W,se,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let D=0;D<w.length;D++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.RENDERBUFFER,le.__webglColorRenderbuffer[D]);const ee=i.get(w[D]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(L){return Math.min(p,L.samples)}function Xe(L){const w=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(L){const w=a.render.frame;v.get(L)!==w&&(v.set(L,w),L.update())}function Pt(L,w){const W=L.colorSpace,se=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Cd||W!==si&&W!==Dr&&(W===st||W===dc?o===!1?e.has("EXT_sRGB")===!0&&se===Wn?(L.format=Cd,L.minFilter=Rn,L.generateMipmaps=!1):w=Ox.sRGBToLinear(w):(se!==Wn||te!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=X,this.setTexture2DArray=R,this.setTexture3D=B,this.setTextureCube=re,this.rebindTextures=De,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Xe}const Mb=0,Tt=1;function wb(t,e,n){const i=n.isWebGL2;function r(s,a=Dr){let o;const l=a===st||a===dc?Tt:Mb;if(s===sr)return t.UNSIGNED_BYTE;if(s===Rx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Px)return t.UNSIGNED_SHORT_5_5_5_1;if(s===tE)return t.BYTE;if(s===nE)return t.SHORT;if(s===Df)return t.UNSIGNED_SHORT;if(s===Cx)return t.INT;if(s===qi)return t.UNSIGNED_INT;if(s===Ei)return t.FLOAT;if(s===Xs)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===iE)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===rE)return t.LUMINANCE;if(s===sE)return t.LUMINANCE_ALPHA;if(s===Lr)return t.DEPTH_COMPONENT;if(s===Ys)return t.DEPTH_STENCIL;if(s===Cd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===aE)return t.RED;if(s===Lx)return t.RED_INTEGER;if(s===oE)return t.RG;if(s===Nx)return t.RG_INTEGER;if(s===Dx)return t.RGBA_INTEGER;if(s===qc||s===Kc||s===Zc||s===Qc)if(l===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yp||s===Sp||s===Ep||s===Mp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ep)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wp||s===Tp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===wp)return l===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Tp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bp||s===Ap||s===Cp||s===Rp||s===Pp||s===Lp||s===Np||s===Dp||s===Ip||s===Up||s===Fp||s===Op||s===kp||s===Bp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Np)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ip)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Up)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Op)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return l===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jc||s===zp||s===jp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Jc)return l===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cE||s===Hp||s===Vp||s===Gp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Jc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Hp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Tb extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ft extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),f=this._getHandJoint(c,S);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class e0 extends Wt{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Lr,h!==Lr&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Lr&&(i=qi),i===void 0&&h===Ys&&(i=Pr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ab extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,v=null;const S=n.getContextAttributes();let x=null,f=null;const y=[],g=[],E=new vn;E.layers.enable(1),E.viewport=new ot;const M=new vn;M.layers.enable(2),M.viewport=new ot;const P=[E,M],b=new Tb;b.layers.enable(1),b.layers.enable(2);let C=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let B=y[R];return B===void 0&&(B=new Eu,y[R]=B),B.getTargetRaySpace()},this.getControllerGrip=function(R){let B=y[R];return B===void 0&&(B=new Eu,y[R]=B),B.getGripSpace()},this.getHand=function(R){let B=y[R];return B===void 0&&(B=new Eu,y[R]=B),B.getHandSpace()};function T(R){const B=g.indexOf(R.inputSource);if(B===-1)return;const re=y[B];re!==void 0&&(re.update(R.inputSource,R.frame,c||a),re.dispatchEvent({type:R.type,data:R.inputSource}))}function G(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let R=0;R<y.length;R++){const B=g[R];B!==null&&(g[R]=null,y[R].disconnect(B))}C=null,_=null,e.setRenderTarget(x),m=null,d=null,p=null,r=null,f=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:m}),f=new Li(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let B=null,re=null,oe=null;S.depth&&(oe=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=S.stencil?Ys:Lr,re=S.stencil?Pr:qi);const ge={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),f=new Li(d.textureWidth,d.textureHeight,{format:Wn,type:sr,depthTexture:new e0(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(R){for(let B=0;B<R.removed.length;B++){const re=R.removed[B],oe=g.indexOf(re);oe>=0&&(g[oe]=null,y[oe].disconnect(re))}for(let B=0;B<R.added.length;B++){const re=R.added[B];let oe=g.indexOf(re);if(oe===-1){for(let Se=0;Se<y.length;Se++)if(Se>=g.length){g.push(re),oe=Se;break}else if(g[Se]===null){g[Se]=re,oe=Se;break}if(oe===-1)break}const ge=y[oe];ge&&ge.connect(re)}}const I=new O,k=new O;function N(R,B,re){I.setFromMatrixPosition(B.matrixWorld),k.setFromMatrixPosition(re.matrixWorld);const oe=I.distanceTo(k),ge=B.projectionMatrix.elements,Se=re.projectionMatrix.elements,Me=ge[14]/(ge[10]-1),we=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],It=(ge[9]-1)/ge[5],Ue=(ge[8]-1)/ge[0],j=(Se[8]+1)/Se[0],Mt=Me*Ue,Te=Me*j,De=oe/(-Ue+j),Ce=De*-Ue;B.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ce),R.translateZ(De),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const tt=Me+De,ke=we+De,Ie=Mt-Ce,Xe=Te+(oe-Ce),wt=We*we/ke*tt,Pt=It*we/ke*tt;R.projectionMatrix.makePerspective(Ie,Xe,wt,Pt,tt,ke),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function Z(R,B){B===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(B.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;b.near=M.near=E.near=R.near,b.far=M.far=E.far=R.far,(C!==b.near||_!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,_=b.far);const B=R.parent,re=b.cameras;Z(b,B);for(let oe=0;oe<re.length;oe++)Z(re[oe],B);re.length===2?N(b,E,M):b.projectionMatrix.copy(E.projectionMatrix),q(R,b,B)};function q(R,B,re){re===null?R.matrix.copy(B.matrixWorld):(R.matrix.copy(re.matrixWorld),R.matrix.invert(),R.matrix.multiply(B.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(B.projectionMatrix),R.projectionMatrixInverse.copy(B.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Rd*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(R){l=R,d!==null&&(d.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)};let F=null;function H(R,B){if(h=B.getViewerPose(c||a),v=B,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let oe=!1;re.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let ge=0;ge<re.length;ge++){const Se=re[ge];let Me=null;if(m!==null)Me=m.getViewport(Se);else{const We=p.getViewSubImage(d,Se);Me=We.viewport,ge===0&&(e.setRenderTargetTextures(f,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let we=P[ge];we===void 0&&(we=new vn,we.layers.enable(ge),we.viewport=new ot,P[ge]=we),we.matrix.fromArray(Se.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Se.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Me.x,Me.y,Me.width,Me.height),ge===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(we)}}for(let re=0;re<y.length;re++){const oe=g[re],ge=y[re];oe!==null&&ge!==void 0&&ge.update(oe,B,c||a)}F&&F(R,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),v=null}const X=new $x;X.setAnimationLoop(H),this.setAnimationLoop=function(R){F=R},this.dispose=function(){}}}function Cb(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Gx(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,y,g,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(x,f):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&m(x,f,E)):f.isMeshMatcapMaterial?(s(x,f),v(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),S(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,y,g):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===un&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===un&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(x.envMap.value=y,x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap){x.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,x.lightMapTransform)}f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,y,g){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*y,x.scale.value=g*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),e.get(f).envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,y){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&x.clearcoatNormalScale.value.negate())),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function S(x,f){const y=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){const E=g.program;i.uniformBlockBinding(y,E)}function c(y,g){let E=r[y.id];E===void 0&&(v(y),E=h(y),r[y.id]=E,y.addEventListener("dispose",x));const M=g.program;i.updateUBOMapping(y,M);const P=e.render.frame;s[y.id]!==P&&(d(y),s[y.id]=P)}function h(y){const g=p();y.__bindingPointIndex=g;const E=t.createBuffer(),M=y.__size,P=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,M,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const g=r[y.id],E=y.uniforms,M=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let P=0,b=E.length;P<b;P++){const C=E[P];if(m(C,P,M)===!0){const _=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let K=0;K<T.length;K++){const I=T[K],k=S(I);typeof I=="number"?(C.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,_+G,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,G),G+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,_,C.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,g,E){const M=y.value;if(E[g]===void 0){if(typeof M=="number")E[g]=M;else{const P=Array.isArray(M)?M:[M],b=[];for(let C=0;C<P.length;C++)b.push(P[C].clone());E[g]=b}return!0}else if(typeof M=="number"){if(E[g]!==M)return E[g]=M,!0}else{const P=Array.isArray(E[g])?E[g]:[E[g]],b=Array.isArray(M)?M:[M];for(let C=0;C<P.length;C++){const _=P[C];if(_.equals(b[C])===!1)return _.copy(b[C]),!0}}return!1}function v(y){const g=y.uniforms;let E=0;const M=16;let P=0;for(let b=0,C=g.length;b<C;b++){const _=g[b],T={boundary:0,storage:0},G=Array.isArray(_.value)?_.value:[_.value];for(let K=0,I=G.length;K<I;K++){const k=G[K],N=S(k);T.boundary+=N.boundary,T.storage+=N.storage}if(_.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=E,b>0){P=E%M;const K=M-P;P!==0&&K-T.boundary<0&&(E+=M-P,_.__offset=E)}E+=T.storage}return P=E%M,P>0&&(E+=M-P),y.__size=E,y.__cache={},this}function S(y){const g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function x(y){const g=y.target;g.removeEventListener("dispose",x);const E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class t0{constructor(e={}){const{canvas:n=wE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,x=null;const f=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let E=!1,M=0,P=0,b=null,C=-1,_=null;const T=new ot,G=new ot;let K=null;const I=new $e(0);let k=0,N=n.width,Z=n.height,q=1,F=null,H=null;const X=new ot(0,0,N,Z),R=new ot(0,0,N,Z);let B=!1;const re=new Of;let oe=!1,ge=!1,Se=null;const Me=new xt,we=new ye,We=new O,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return b===null?q:1}let j=i;function Mt(A,z){for(let Q=0;Q<A.length;Q++){const V=A[Q],J=n.getContext(V,z);if(J!==null)return J}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",ie,!1),j===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),j=Mt(z,A),j===null)throw Mt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,De,Ce,tt,ke,Ie,Xe,wt,Pt,L,w,W,se,te,ae,Ee,le,Y,D,ee,pe,ue,he,Le;function Ge(){Te=new z1(j),De=new I1(j,Te,e),Te.init(De),ue=new wb(j,Te,De),Ce=new Sb(j,Te,De),tt=new V1(j),ke=new ob,Ie=new Eb(j,Te,Ce,ke,De,ue,tt),Xe=new F1(g),wt=new B1(g),Pt=new JE(j,De),he=new N1(j,Te,Pt,De),L=new j1(j,Pt,tt,he),w=new Y1(j,L,Pt,tt),D=new X1(j,De,Ie),Ee=new U1(ke),W=new ab(g,Xe,wt,Te,De,he,Ee),se=new Cb(g,ke),te=new cb,ae=new mb(Te,De),Y=new L1(g,Xe,wt,Ce,w,d,l),le=new yb(g,w,De),Le=new Rb(j,tt,De,Ce),ee=new D1(j,Te,tt,De),pe=new H1(j,Te,tt,De),tt.programs=W.programs,g.capabilities=De,g.extensions=Te,g.properties=ke,g.renderLists=te,g.shadowMap=le,g.state=Ce,g.info=tt}Ge();const U=new Ab(g,j);this.xr=U,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(N,Z,!1))},this.getSize=function(A){return A.set(N,Z)},this.setSize=function(A,z,Q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Z=z,n.width=Math.floor(A*q),n.height=Math.floor(z*q),Q===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*q,Z*q).floor()},this.setDrawingBufferSize=function(A,z,Q){N=A,Z=z,q=Q,n.width=Math.floor(A*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,z,Q,V){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,z,Q,V),Ce.viewport(T.copy(X).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(R)},this.setScissor=function(A,z,Q,V){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,z,Q,V),Ce.scissor(G.copy(R).multiplyScalar(q).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(A){Ce.setScissorTest(B=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,z=!0,Q=!0){let V=0;if(A){let J=!1;if(b!==null){const _e=b.texture.format;J=_e===Dx||_e===Nx||_e===Lx}if(J){const _e=b.texture.type,be=_e===sr||_e===qi||_e===Df||_e===Pr||_e===Rx||_e===Px,Re=Y.getClearColor(),Pe=Y.getClearAlpha(),je=Re.r,Ae=Re.g,Fe=Re.b;be?(m[0]=je,m[1]=Ae,m[2]=Fe,m[3]=Pe,j.clearBufferuiv(j.COLOR,0,m)):(v[0]=je,v[1]=Ae,v[2]=Fe,v[3]=Pe,j.clearBufferiv(j.COLOR,0,v))}else V|=j.COLOR_BUFFER_BIT}z&&(V|=j.DEPTH_BUFFER_BIT),Q&&(V|=j.STENCIL_BUFFER_BIT),j.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),te.dispose(),ae.dispose(),ke.dispose(),Xe.dispose(),wt.dispose(),w.dispose(),he.dispose(),Le.dispose(),W.dispose(),U.dispose(),U.removeEventListener("sessionstart",nt),U.removeEventListener("sessionend",Zn),Se&&(Se.dispose(),Se=null),qt.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=tt.autoReset,z=le.enabled,Q=le.autoUpdate,V=le.needsUpdate,J=le.type;Ge(),tt.autoReset=A,le.enabled=z,le.autoUpdate=Q,le.needsUpdate=V,le.type=J}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const z=A.target;z.removeEventListener("dispose",ce),ze(z)}function ze(A){qe(A),ke.remove(A)}function qe(A){const z=ke.get(A).programs;z!==void 0&&(z.forEach(function(Q){W.releaseProgram(Q)}),A.isShaderMaterial&&W.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,V,J,_e){z===null&&(z=It);const be=J.isMesh&&J.matrixWorld.determinant()<0,Re=y0(A,z,Q,V,J);Ce.setMaterial(V,be);let Pe=Q.index,je=1;if(V.wireframe===!0){if(Pe=L.getWireframeAttribute(Q),Pe===void 0)return;je=2}const Ae=Q.drawRange,Fe=Q.attributes.position;let ht=Ae.start*je,mt=(Ae.start+Ae.count)*je;_e!==null&&(ht=Math.max(ht,_e.start*je),mt=Math.min(mt,(_e.start+_e.count)*je)),Pe!==null?(ht=Math.max(ht,0),mt=Math.min(mt,Pe.count)):Fe!=null&&(ht=Math.max(ht,0),mt=Math.min(mt,Fe.count));const Mn=mt-ht;if(Mn<0||Mn===1/0)return;he.setup(J,V,Re,Q,Pe);let ai,_t=ee;if(Pe!==null&&(ai=Pt.get(Pe),_t=pe,_t.setIndex(ai)),J.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Ue()),_t.setMode(j.LINES)):_t.setMode(j.TRIANGLES);else if(J.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),Ce.setLineWidth(Ve*Ue()),J.isLineSegments?_t.setMode(j.LINES):J.isLineLoop?_t.setMode(j.LINE_LOOP):_t.setMode(j.LINE_STRIP)}else J.isPoints?_t.setMode(j.POINTS):J.isSprite&&_t.setMode(j.TRIANGLES);if(J.isInstancedMesh)_t.renderInstances(ht,Mn,J.count);else if(Q.isInstancedBufferGeometry){const Ve=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,vc=Math.min(Q.instanceCount,Ve);_t.renderInstances(ht,Mn,vc)}else _t.render(ht,Mn)},this.compile=function(A,z){function Q(V,J,_e){V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,uo(V,J,_e),V.side=ri,V.needsUpdate=!0,uo(V,J,_e),V.side=Ln):uo(V,J,_e)}x=ae.get(A),x.init(),y.push(x),A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(x.pushLight(V),V.castShadow&&x.pushShadow(V))}),x.setupLights(g._useLegacyLights),A.traverse(function(V){const J=V.material;if(J)if(Array.isArray(J))for(let _e=0;_e<J.length;_e++){const be=J[_e];Q(be,A,V)}else Q(J,A,V)}),y.pop(),x=null};let Qe=null;function fn(A){Qe&&Qe(A)}function nt(){qt.stop()}function Zn(){qt.start()}const qt=new $x;qt.setAnimationLoop(fn),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){Qe=A,U.setAnimationLoop(A),A===null?qt.stop():qt.start()},U.addEventListener("sessionstart",nt),U.addEventListener("sessionend",Zn),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(z),z=U.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,z,b),x=ae.get(A,y.length),x.init(),y.push(x),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),re.setFromProjectionMatrix(Me),ge=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,ge),S=te.get(A,f.length),S.init(),f.push(S),Xf(A,z,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(F,H),this.info.render.frame++,oe===!0&&Ee.beginShadows();const Q=x.state.shadowsArray;if(le.render(Q,A,z),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(S,A),x.setupLights(g._useLegacyLights),z.isArrayCamera){const V=z.cameras;for(let J=0,_e=V.length;J<_e;J++){const be=V[J];Yf(S,A,be,be.viewport)}}else Yf(S,A,z);b!==null&&(Ie.updateMultisampleRenderTarget(b),Ie.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(g,A,z),he.resetDefaultState(),C=-1,_=null,y.pop(),y.length>0?x=y[y.length-1]:x=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function Xf(A,z,Q,V){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){V&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const be=w.update(A),Re=A.material;Re.visible&&S.push(A,be,Re,Q,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const be=w.update(A),Re=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),We.copy(be.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const Pe=be.groups;for(let je=0,Ae=Pe.length;je<Ae;je++){const Fe=Pe[je],ht=Re[Fe.materialIndex];ht&&ht.visible&&S.push(A,be,ht,Q,We.z,Fe)}}else Re.visible&&S.push(A,be,Re,Q,We.z,null)}}const _e=A.children;for(let be=0,Re=_e.length;be<Re;be++)Xf(_e[be],z,Q,V)}function Yf(A,z,Q,V){const J=A.opaque,_e=A.transmissive,be=A.transparent;x.setupLightsView(Q),oe===!0&&Ee.setGlobalState(g.clippingPlanes,Q),_e.length>0&&_0(J,_e,z,Q),V&&Ce.viewport(T.copy(V)),J.length>0&&co(J,z,Q),_e.length>0&&co(_e,z,Q),be.length>0&&co(be,z,Q),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function _0(A,z,Q,V){const J=De.isWebGL2;Se===null&&(Se=new Li(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Xs:sr,minFilter:Ja,samples:J?4:0})),g.getDrawingBufferSize(we),J?Se.setSize(we.x,we.y):Se.setSize(Pd(we.x),Pd(we.y));const _e=g.getRenderTarget();g.setRenderTarget(Se),g.getClearColor(I),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear();const be=g.toneMapping;g.toneMapping=rr,co(A,Q,V),Ie.updateMultisampleRenderTarget(Se),Ie.updateRenderTargetMipmap(Se);let Re=!1;for(let Pe=0,je=z.length;Pe<je;Pe++){const Ae=z[Pe],Fe=Ae.object,ht=Ae.geometry,mt=Ae.material,Mn=Ae.group;if(mt.side===Ln&&Fe.layers.test(V.layers)){const ai=mt.side;mt.side=un,mt.needsUpdate=!0,$f(Fe,Q,V,ht,mt,Mn),mt.side=ai,mt.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(Se),Ie.updateRenderTargetMipmap(Se)),g.setRenderTarget(_e),g.setClearColor(I,k),g.toneMapping=be}function co(A,z,Q){const V=z.isScene===!0?z.overrideMaterial:null;for(let J=0,_e=A.length;J<_e;J++){const be=A[J],Re=be.object,Pe=be.geometry,je=V===null?be.material:V,Ae=be.group;Re.layers.test(Q.layers)&&$f(Re,z,Q,Pe,je,Ae)}}function $f(A,z,Q,V,J,_e){A.onBeforeRender(g,z,Q,V,J,_e),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(g,z,Q,V,A,_e),J.transparent===!0&&J.side===Ln&&J.forceSinglePass===!1?(J.side=un,J.needsUpdate=!0,g.renderBufferDirect(Q,z,V,J,A,_e),J.side=ri,J.needsUpdate=!0,g.renderBufferDirect(Q,z,V,J,A,_e),J.side=Ln):g.renderBufferDirect(Q,z,V,J,A,_e),A.onAfterRender(g,z,Q,V,J,_e)}function uo(A,z,Q){z.isScene!==!0&&(z=It);const V=ke.get(A),J=x.state.lights,_e=x.state.shadowsArray,be=J.state.version,Re=W.getParameters(A,J.state,_e,z,Q),Pe=W.getProgramCacheKey(Re);let je=V.programs;V.environment=A.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(A.isMeshStandardMaterial?wt:Xe).get(A.envMap||V.environment),je===void 0&&(A.addEventListener("dispose",ce),je=new Map,V.programs=je);let Ae=je.get(Pe);if(Ae!==void 0){if(V.currentProgram===Ae&&V.lightsStateVersion===be)return qf(A,Re),Ae}else Re.uniforms=W.getUniforms(A),A.onBuild(Q,Re,g),A.onBeforeCompile(Re,g),Ae=W.acquireProgram(Re,Pe),je.set(Pe,Ae),V.uniforms=Re.uniforms;const Fe=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),qf(A,Re),V.needsLights=E0(A),V.lightsStateVersion=be,V.needsLights&&(Fe.ambientLightColor.value=J.state.ambient,Fe.lightProbe.value=J.state.probe,Fe.directionalLights.value=J.state.directional,Fe.directionalLightShadows.value=J.state.directionalShadow,Fe.spotLights.value=J.state.spot,Fe.spotLightShadows.value=J.state.spotShadow,Fe.rectAreaLights.value=J.state.rectArea,Fe.ltc_1.value=J.state.rectAreaLTC1,Fe.ltc_2.value=J.state.rectAreaLTC2,Fe.pointLights.value=J.state.point,Fe.pointLightShadows.value=J.state.pointShadow,Fe.hemisphereLights.value=J.state.hemi,Fe.directionalShadowMap.value=J.state.directionalShadowMap,Fe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Fe.spotShadowMap.value=J.state.spotShadowMap,Fe.spotLightMatrix.value=J.state.spotLightMatrix,Fe.spotLightMap.value=J.state.spotLightMap,Fe.pointShadowMap.value=J.state.pointShadowMap,Fe.pointShadowMatrix.value=J.state.pointShadowMatrix);const ht=Ae.getUniforms(),mt=vl.seqWithValue(ht.seq,Fe);return V.currentProgram=Ae,V.uniformsList=mt,Ae}function qf(A,z){const Q=ke.get(A);Q.outputColorSpace=z.outputColorSpace,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function y0(A,z,Q,V,J){z.isScene!==!0&&(z=It),Ie.resetTextureUnits();const _e=z.fog,be=V.isMeshStandardMaterial?z.environment:null,Re=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:si,Pe=(V.isMeshStandardMaterial?wt:Xe).get(V.envMap||be),je=V.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ae=!!Q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,mt=!!Q.morphAttributes.color;let Mn=rr;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mn=g.toneMapping);const ai=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=ai!==void 0?ai.length:0,Ve=ke.get(V),vc=x.state.lights;if(oe===!0&&(ge===!0||A!==_)){const hn=A===_&&V.id===C;Ee.setState(V,A,hn)}let yt=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==vc.state.version||Ve.outputColorSpace!==Re||J.isInstancedMesh&&Ve.instancing===!1||!J.isInstancedMesh&&Ve.instancing===!0||J.isSkinnedMesh&&Ve.skinning===!1||!J.isSkinnedMesh&&Ve.skinning===!0||J.isInstancedMesh&&Ve.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ve.instancingColor===!1&&J.instanceColor!==null||Ve.envMap!==Pe||V.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==Ae||Ve.morphTargets!==Fe||Ve.morphNormals!==ht||Ve.morphColors!==mt||Ve.toneMapping!==Mn||De.isWebGL2===!0&&Ve.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,Ve.__version=V.version);let fr=Ve.currentProgram;yt===!0&&(fr=uo(V,z,J));let Kf=!1,na=!1,xc=!1;const Kt=fr.getUniforms(),hr=Ve.uniforms;if(Ce.useProgram(fr.program)&&(Kf=!0,na=!0,xc=!0),V.id!==C&&(C=V.id,na=!0),Kf||_!==A){Kt.setValue(j,"projectionMatrix",A.projectionMatrix),Kt.setValue(j,"viewMatrix",A.matrixWorldInverse);const hn=Kt.map.cameraPosition;hn!==void 0&&hn.setValue(j,We.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&Kt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Kt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,na=!0,xc=!0)}if(J.isSkinnedMesh){Kt.setOptional(j,J,"bindMatrix"),Kt.setOptional(j,J,"bindMatrixInverse");const hn=J.skeleton;hn&&(De.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Kt.setValue(j,"boneTexture",hn.boneTexture,Ie),Kt.setValue(j,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _c=Q.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&De.isWebGL2===!0)&&D.update(J,Q,fr),(na||Ve.receiveShadow!==J.receiveShadow)&&(Ve.receiveShadow=J.receiveShadow,Kt.setValue(j,"receiveShadow",J.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hr.envMap.value=Pe,hr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),na&&(Kt.setValue(j,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&S0(hr,xc),_e&&V.fog===!0&&se.refreshFogUniforms(hr,_e),se.refreshMaterialUniforms(hr,V,q,Z,Se),vl.upload(j,Ve.uniformsList,hr,Ie)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vl.upload(j,Ve.uniformsList,hr,Ie),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Kt.setValue(j,"center",J.center),Kt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Kt.setValue(j,"normalMatrix",J.normalMatrix),Kt.setValue(j,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let yc=0,M0=hn.length;yc<M0;yc++)if(De.isWebGL2){const Zf=hn[yc];Le.update(Zf,fr),Le.bind(Zf,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function S0(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function E0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,z,Q){ke.get(A.texture).__webglTexture=z,ke.get(A.depthTexture).__webglTexture=Q;const V=ke.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Q===void 0,V.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const Q=ke.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){b=A,M=z,P=Q;let V=!0,J=null,_e=!1,be=!1;if(A){const Pe=ke.get(A);Pe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(j.FRAMEBUFFER,null),V=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(A):Pe.__hasExternalTextures&&Ie.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);const Ae=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ae[z])?J=Ae[z][Q]:J=Ae[z],_e=!0):De.isWebGL2&&A.samples>0&&Ie.useMultisampledRTT(A)===!1?J=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Ae)?J=Ae[Q]:J=Ae,T.copy(A.viewport),G.copy(A.scissor),K=A.scissorTest}else T.copy(X).multiplyScalar(q).floor(),G.copy(R).multiplyScalar(q).floor(),K=B;if(Ce.bindFramebuffer(j.FRAMEBUFFER,J)&&De.drawBuffers&&V&&Ce.drawBuffers(A,J),Ce.viewport(T),Ce.scissor(G),Ce.setScissorTest(K),_e){const Pe=ke.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Q)}else if(be){const Pe=ke.get(A.texture),je=z||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Pe.__webglTexture,Q||0,je)}C=-1},this.readRenderTargetPixels=function(A,z,Q,V,J,_e,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){Ce.bindFramebuffer(j.FRAMEBUFFER,Re);try{const Pe=A.texture,je=Pe.format,Ae=Pe.type;if(je!==Wn&&ue.convert(je)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ae===Xs&&(Te.has("EXT_color_buffer_half_float")||De.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ae!==sr&&ue.convert(Ae)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Ei&&(De.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-V&&Q>=0&&Q<=A.height-J&&j.readPixels(z,Q,V,J,ue.convert(je),ue.convert(Ae),_e)}finally{const Pe=b!==null?ke.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(j.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,z,Q=0){const V=Math.pow(2,-Q),J=Math.floor(z.image.width*V),_e=Math.floor(z.image.height*V);Ie.setTexture2D(z,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,A.x,A.y,J,_e),Ce.unbindTexture()},this.copyTextureToTexture=function(A,z,Q,V=0){const J=z.image.width,_e=z.image.height,be=ue.convert(Q.format),Re=ue.convert(Q.type);Ie.setTexture2D(Q,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment),z.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,V,A.x,A.y,J,_e,be,Re,z.image.data):z.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,V,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,V,A.x,A.y,be,Re,z.image),V===0&&Q.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Q,V,J=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,be=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Pe=ue.convert(V.format),je=ue.convert(V.type);let Ae;if(V.isData3DTexture)Ie.setTexture3D(V,0),Ae=j.TEXTURE_3D;else if(V.isDataArrayTexture)Ie.setTexture2DArray(V,0),Ae=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,V.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,V.unpackAlignment);const Fe=j.getParameter(j.UNPACK_ROW_LENGTH),ht=j.getParameter(j.UNPACK_IMAGE_HEIGHT),mt=j.getParameter(j.UNPACK_SKIP_PIXELS),Mn=j.getParameter(j.UNPACK_SKIP_ROWS),ai=j.getParameter(j.UNPACK_SKIP_IMAGES),_t=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,_t.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_t.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,A.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,A.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(Ae,J,z.x,z.y,z.z,_e,be,Re,Pe,je,_t.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ae,J,z.x,z.y,z.z,_e,be,Re,Pe,_t.data)):j.texSubImage3D(Ae,J,z.x,z.y,z.z,_e,be,Re,Pe,je,_t),j.pixelStorei(j.UNPACK_ROW_LENGTH,Fe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ht),j.pixelStorei(j.UNPACK_SKIP_PIXELS,mt),j.pixelStorei(j.UNPACK_SKIP_ROWS,Mn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ai),J===0&&V.generateMipmaps&&j.generateMipmap(Ae),Ce.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ie.setTextureCube(A,0):A.isData3DTexture?Ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ie.setTexture2DArray(A,0):Ie.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){M=0,P=0,b=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?Nr:Ix}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?st:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Pb extends t0{}Pb.prototype.isWebGL1Renderer=!0;class Lb extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Nb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ad,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new O;class Xl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}setX(e,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=_i(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=_i(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=_i(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=_i(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new $n(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class n0 extends Js{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const ma=new O,cs=new O,us=new O,ds=new ye,ga=new ye,i0=new xt,qo=new O,va=new O,Ko=new O,Rm=new ye,Mu=new ye,Pm=new ye;class Db extends Xt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ii;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nb(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Xl(i,3,0,!1)),ls.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=ls,this.material=e!==void 0?e:new n0,this.center=new ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),i0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Zo(qo.set(-.5,-.5,0),us,a,cs,r,s),Zo(va.set(.5,-.5,0),us,a,cs,r,s),Zo(Ko.set(.5,.5,0),us,a,cs,r,s),Rm.set(0,0),Mu.set(1,0),Pm.set(1,1);let o=e.ray.intersectTriangle(qo,va,Ko,!1,ma);if(o===null&&(Zo(va.set(-.5,.5,0),us,a,cs,r,s),Mu.set(0,1),o=e.ray.intersectTriangle(qo,Ko,va,!1,ma),o===null))return;const l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||n.push({distance:l,point:ma.clone(),uv:Pn.getInterpolation(ma,qo,va,Ko,Rm,Mu,Pm,new ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zo(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*ds.x-r*ds.y,ga.y=r*ds.x+s*ds.y):ga.copy(ds),t.copy(e),t.x+=ga.x,t.y+=ga.y,t.applyMatrix4(i0)}class xl extends Wt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ux,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class r0 extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const wu=new xt,Lm=new O,Nm=new O;class Ib{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Nm),n.updateMatrixWorld(),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dm=new xt,xa=new O,Tu=new O;class Ub extends Ib{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(xa),Tu.copy(i.position),Tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tu),i.updateMatrixWorld(),r.makeTranslation(-xa.x,-xa.y,-xa.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}}class Fb extends r0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ub}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ob extends r0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class s0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Im();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Im(){return(typeof performance>"u"?Date:performance).now()}class kb{constructor(e,n,i=0,r=1/0){this.ray=new Uf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Nd(e,this,i,n),i.sort(Um),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nd(e[r],this,i,n);return i.sort(Um),i}}function Um(t,e){return t.distance-e.distance}function Nd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Nd(r[s],e,n,!0)}}class Fm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);function zf(t,e,n,i,r,s,a,o){const l=(b,C,_,T)=>[new ye(b/a,1-T/o),new ye(_/a,1-T/o),new ye(_/a,1-C/o),new ye(b/a,1-C/o)],c=l(e+s,n,e+i+s,n+s),h=l(e+i+s,n,e+i*2+s,n+s),p=l(e,n+s,e+s,n+s+r),d=l(e+s,n+s,e+i+s,n+s+r),m=l(e+i+s,n+s,e+i+s*2,n+r+s),v=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),S=t.attributes.uv,x=[m[3],m[2],m[0],m[1]],f=[p[3],p[2],p[0],p[1]],y=[c[3],c[2],c[0],c[1]],g=[h[0],h[1],h[3],h[2]],E=[d[3],d[2],d[0],d[1]],M=[v[3],v[2],v[0],v[1]],P=[];for(const b of[x,f,y,g,E,M])for(const C of b)P.push(C.x,C.y);S.set(new Float32Array(P)),S.needsUpdate=!0}function Tn(t,e,n,i,r,s){zf(t,e,n,i,r,s,64,64)}function Dd(t,e,n,i,r,s){zf(t,e,n,i,r,s,64,32)}class xr extends Ft{constructor(e,n){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:n}),e.name="inner",n.name="outer"}}class Bb extends Ft{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new eo({side:ri}),this.layer2Material=new eo({side:Ln,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new gt(8,8,8);Tn(e,0,0,8,8,8);const n=new Je(e,this.layer1Material),i=new gt(9,9,9);Tn(i,32,0,8,8,8);const r=new Je(i,this.layer2Material);this.head=new xr(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new gt(8,12,4);Tn(s,16,16,8,12,4);const a=new Je(s,this.layer1Material),o=new gt(8.5,12.5,4.5);Tn(o,16,32,8,12,4);const l=new Je(o,this.layer2Material);this.body=new xr(a,l),this.body.name="body",this.body.add(a,l),this.body.position.y=-6,this.add(this.body);const c=new gt,h=new Je(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3:4,h.scale.y=12,h.scale.z=4,Tn(c,40,16,this.slim?3:4,12,4)});const p=new gt,d=new Je(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,Tn(p,40,32,this.slim?3:4,12,4)});const m=new Ft;m.add(h,d),this.modelListeners.push(()=>{m.position.x=this.slim?-.5:-1}),m.position.y=-4,this.rightArm=new xr(h,d),this.rightArm.name="rightArm",this.rightArm.add(m),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const v=new gt,S=new Je(v,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Tn(v,32,48,this.slim?3:4,12,4)});const x=new gt,f=new Je(x,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Tn(x,48,48,this.slim?3:4,12,4)});const y=new Ft;y.add(S,f),this.modelListeners.push(()=>{y.position.x=this.slim?.5:1}),y.position.y=-4,this.leftArm=new xr(S,f),this.leftArm.name="leftArm",this.leftArm.add(y),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const g=new gt(4,12,4);Tn(g,0,16,4,12,4);const E=new Je(g,this.layer1MaterialBiased),M=new gt(4.5,12.5,4.5);Tn(M,0,32,4,12,4);const P=new Je(M,this.layer2MaterialBiased),b=new Ft;b.add(E,P),b.position.y=-6,this.rightLeg=new xr(E,P),this.rightLeg.name="rightLeg",this.rightLeg.add(b),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const C=new gt(4,12,4);Tn(C,16,48,4,12,4);const _=new Je(C,this.layer1MaterialBiased),T=new gt(4.5,12.5,4.5);Tn(T,0,48,4,12,4);const G=new Je(T,this.layer2MaterialBiased),K=new Ft;K.add(_,G),K.position.y=-6,this.leftLeg=new xr(_,G),this.leftLeg.name="leftLeg",this.leftLeg.add(K),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof xr)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class zb extends Ft{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:Ln,transparent:!0,alphaTest:1e-5});const e=new gt(10,16,1);Dd(e,0,0,10,16,1),this.cape=new Je(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class jb extends Ft{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:Ln,transparent:!0,alphaTest:1e-5});const e=new gt(12,22,4);Dd(e,22,0,10,20,2);const n=new Je(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new Ft,this.leftWing.add(n),this.add(this.leftWing);const i=new gt(12,22,4);Dd(i,22,0,10,20,2);const r=new Je(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new Ft,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Hb extends Ft{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new eo({side:ri});const e=new gt(8,8,4/3);zf(e,0,0,6,6,1,14,7),this.rightEar=new Je(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Je(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Om=10.8*Math.PI/180;class Vb extends Ft{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Bb,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new zb,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Om,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new jb,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Hb,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Om,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Qo(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function Id(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(s.data[l+3]!==255)return!0}return!1}function pc(t){return t/64}function km(t,e,n){if(n){if(Id(t,0,0,e,e))return}else if(Id(t,0,0,e,e/2))return;const i=pc(e),r=(s,a,o,l)=>t.clearRect(s*i,a*i,o*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Gb(t,e){t.save(),t.scale(-1,1);const n=pc(e),i=(r,s,a,o,l,c)=>t.drawImage(t.canvas,r*n,s*n,a*n,o*n,-l*n,c*n,-a*n,o*n);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),t.restore()}function Wb(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d",{willReadFrequently:!0});if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Gb(i,r),km(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),km(i,t.width,!0)}function Xb(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function Yb(t,e){const n=Xb(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function $b(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function qb(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function Kb(t){const e=pc(t.width),n=t.getContext("2d",{willReadFrequently:!0}),i=(o,l,c,h)=>Id(n,o*e,l*e,c*e,h*e),r=(o,l,c,h)=>$b(n,o*e,l*e,c*e,h*e),s=(o,l,c,h)=>qb(n,o*e,l*e,c*e,h*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function Zb(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function Qb(t,e){const n=Zb(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function Bm(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=pc(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function Jo(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const zm={type:"change"},bu={type:"start"},jm={type:"end"},el=new Uf,Hm=new Gi,Jb=Math.cos(70*ME.DEG2RAD);class eA extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",w),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(zm),i.update(),s=r.NONE},this.update=function(){const D=new O,ee=new zr().setFromUnitVectors(e.up,new O(0,1,0)),pe=ee.clone().invert(),ue=new O,he=new zr,Le=new O,Ge=2*Math.PI;return function(fe=null){const $=i.object.position;D.copy($).sub(i.target),D.applyQuaternion(ee),o.setFromVector3(D),i.autoRotate&&s===r.NONE&&G(_(fe)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ie=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(ie)&&isFinite(ce)&&(ie<-Math.PI?ie+=Ge:ie>Math.PI&&(ie-=Ge),ce<-Math.PI?ce+=Ge:ce>Math.PI&&(ce-=Ge),ie<=ce?o.theta=Math.max(ie,Math.min(ce,o.theta)):o.theta=o.theta>(ie+ce)/2?Math.max(ie,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.zoomToCursor&&P||i.object.isOrthographicCamera?o.radius=H(o.radius):o.radius=H(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(pe),$.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ze=!1;if(i.zoomToCursor&&P){let qe=null;if(i.object.isPerspectiveCamera){const Qe=D.length();qe=H(Qe*c);const fn=Qe-qe;i.object.position.addScaledVector(E,fn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new O(M.x,M.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ze=!0;const fn=new O(M.x,M.y,0);fn.unproject(i.object),i.object.position.sub(fn).add(Qe),i.object.updateMatrixWorld(),qe=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qe).add(i.object.position):(el.origin.copy(i.object.position),el.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(el.direction))<Jb?e.lookAt(i.target):(Hm.setFromNormalAndCoplanarPoint(i.object.up,i.target),el.intersectPlane(Hm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ze=!0);return c=1,P=!1,ze||ue.distanceToSquared(i.object.position)>a||8*(1-he.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(zm),ue.copy(i.object.position),he.copy(i.object.quaternion),Le.copy(i.target),ze=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",Xe),i.domElement.removeEventListener("wheel",L),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Xe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Fm,l=new Fm;let c=1;const h=new O,p=new ye,d=new ye,m=new ye,v=new ye,S=new ye,x=new ye,f=new ye,y=new ye,g=new ye,E=new O,M=new ye;let P=!1;const b=[],C={};function _(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function G(D){l.theta-=D}function K(D){l.phi-=D}const I=function(){const D=new O;return function(pe,ue){D.setFromMatrixColumn(ue,0),D.multiplyScalar(-pe),h.add(D)}}(),k=function(){const D=new O;return function(pe,ue){i.screenSpacePanning===!0?D.setFromMatrixColumn(ue,1):(D.setFromMatrixColumn(ue,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(pe),h.add(D)}}(),N=function(){const D=new O;return function(pe,ue){const he=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;D.copy(Le).sub(i.target);let Ge=D.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),I(2*pe*Ge/he.clientHeight,i.object.matrix),k(2*ue*Ge/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(pe*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),k(ue*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(D){if(!i.zoomToCursor)return;P=!0;const ee=i.domElement.getBoundingClientRect(),pe=D.clientX-ee.left,ue=D.clientY-ee.top,he=ee.width,Le=ee.height;M.x=pe/he*2-1,M.y=-(ue/Le)*2+1,E.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function H(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function X(D){p.set(D.clientX,D.clientY)}function R(D){F(D),f.set(D.clientX,D.clientY)}function B(D){v.set(D.clientX,D.clientY)}function re(D){d.set(D.clientX,D.clientY),m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;G(2*Math.PI*m.x/ee.clientHeight),K(2*Math.PI*m.y/ee.clientHeight),p.copy(d),i.update()}function oe(D){y.set(D.clientX,D.clientY),g.subVectors(y,f),g.y>0?Z(T()):g.y<0&&q(T()),f.copy(y),i.update()}function ge(D){S.set(D.clientX,D.clientY),x.subVectors(S,v).multiplyScalar(i.panSpeed),N(x.x,x.y),v.copy(S),i.update()}function Se(D){F(D),D.deltaY<0?q(T()):D.deltaY>0&&Z(T()),i.update()}function Me(D){let ee=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),ee=!0;break}ee&&(D.preventDefault(),i.update())}function we(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),ee=.5*(b[0].pageY+b[1].pageY);p.set(D,ee)}}function We(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),ee=.5*(b[0].pageY+b[1].pageY);v.set(D,ee)}}function It(){const D=b[0].pageX-b[1].pageX,ee=b[0].pageY-b[1].pageY,pe=Math.sqrt(D*D+ee*ee);f.set(0,pe)}function Ue(){i.enableZoom&&It(),i.enablePan&&We()}function j(){i.enableZoom&&It(),i.enableRotate&&we()}function Mt(D){if(b.length==1)d.set(D.pageX,D.pageY);else{const pe=Y(D),ue=.5*(D.pageX+pe.x),he=.5*(D.pageY+pe.y);d.set(ue,he)}m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;G(2*Math.PI*m.x/ee.clientHeight),K(2*Math.PI*m.y/ee.clientHeight),p.copy(d)}function Te(D){if(b.length===1)S.set(D.pageX,D.pageY);else{const ee=Y(D),pe=.5*(D.pageX+ee.x),ue=.5*(D.pageY+ee.y);S.set(pe,ue)}x.subVectors(S,v).multiplyScalar(i.panSpeed),N(x.x,x.y),v.copy(S)}function De(D){const ee=Y(D),pe=D.pageX-ee.x,ue=D.pageY-ee.y,he=Math.sqrt(pe*pe+ue*ue);y.set(0,he),g.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),Z(g.y),f.copy(y)}function Ce(D){i.enableZoom&&De(D),i.enablePan&&Te(D)}function tt(D){i.enableZoom&&De(D),i.enableRotate&&Mt(D)}function ke(D){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",Xe)),ae(D),D.pointerType==="touch"?W(D):wt(D))}function Ie(D){i.enabled!==!1&&(D.pointerType==="touch"?se(D):Pt(D))}function Xe(D){Ee(D),b.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Xe)),i.dispatchEvent(jm),s=r.NONE}function wt(D){let ee;switch(D.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case vi.DOLLY:if(i.enableZoom===!1)return;R(D),s=r.DOLLY;break;case vi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;B(D),s=r.PAN}else{if(i.enableRotate===!1)return;X(D),s=r.ROTATE}break;case vi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;X(D),s=r.ROTATE}else{if(i.enablePan===!1)return;B(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(bu)}function Pt(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;re(D);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(D);break;case r.PAN:if(i.enablePan===!1)return;ge(D);break}}function L(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(bu),Se(D),i.dispatchEvent(jm))}function w(D){i.enabled===!1||i.enablePan===!1||Me(D)}function W(D){switch(le(D),b.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;We(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(bu)}function se(D){switch(le(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(D),i.update();break;default:s=r.NONE}}function te(D){i.enabled!==!1&&D.preventDefault()}function ae(D){b.push(D)}function Ee(D){delete C[D.pointerId];for(let ee=0;ee<b.length;ee++)if(b[ee].pointerId==D.pointerId){b.splice(ee,1);return}}function le(D){let ee=C[D.pointerId];ee===void 0&&(ee=new ye,C[D.pointerId]=ee),ee.set(D.pageX,D.pageY)}function Y(D){const ee=D.pointerId===b[0].pointerId?b[1]:b[0];return C[ee.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",Xe),i.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}const tA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class mc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nA=new qx(-1,1,1,-1,0,1),jf=new Ii;jf.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3));jf.setAttribute("uv",new bi([0,2,0,0,2,0],2));class iA{constructor(e){this._mesh=new Je(jf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class a0 extends mc{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ni?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wx.clone(e.uniforms),this.material=new Ni({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new iA(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vm extends mc{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class rA extends mc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ye);this._width=i.width,this._height=i.height,n=new Li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xs}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a0(tA),this.copyPass.material.blending=Ti,this.clock=new s0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vm!==void 0&&(a instanceof Vm?i=!0:a instanceof rA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aA extends mc{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const oA={uniforms:{tDiffuse:{value:null},resolution:{value:new ye(1/1024,1/512)}},vertexShader:`

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
	`};class Hf{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,n){if(this.paused)return;const i=n*this.speed;this.animate(e,i),this.animationObjects.forEach((r,s)=>{const a=this.progress0.get(s);r(e,this.progress-a,s)}),this.progress+=i}addAnimation(e){const n=this.currentId++;return this.progress0.set(n,this.progress),this.animationObjects.set(n,e),n}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class lA extends Hf{animate(e){const n=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n)*.01+r}}class cA extends Hf{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const n=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(n)*.5,e.skin.rightLeg.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(n+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(n)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(n/4)*.2,e.skin.head.rotation.x=Math.sin(n/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n/1.5)*.06+r}}class uA extends Hf{constructor(e="left"){super(),Object.defineProperty(this,"whichArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.whichArm=e}animate(e){const n=this.progress*2*Math.PI*.5,i=this.whichArm==="left"?e.skin.leftArm:e.skin.rightArm;i.rotation.x=180,i.rotation.z=Math.sin(n)*.5}}class dA extends Db{constructor(e="",n={}){const i=new n0({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new xl(e);r.magFilter=ut,r.minFilter=ut,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class o0{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ob(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Fb(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new Lb,this.camera=new vn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),bn.enabled=!1,this.renderer=new t0({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new Li(0,0,{depthTexture:new e0(0,0,Ei)})),this.composer=new sA(this.renderer,n),this.renderPass=new aA(this.scene,this.camera),this.fxaaPass=new a0(oA),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Vb,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new Ft,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new eA(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new s0,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new xl(this.skinCanvas),this.skinTexture.magFilter=ut,this.skinTexture.minFilter=ut,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new xl(this.capeCanvas),this.capeTexture.magFilter=ut,this.capeTexture.minFilter=ut,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new xl(this.earsCanvas),this.earsTexture.magFilter=ut,this.earsTexture.minFilter=ut,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(Qo(e))Wb(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=Kb(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&(Bm(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Jo(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(Qo(e))Yb(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return Jo(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(Qo(e))n.textureType==="skin"?Bm(this.earsCanvas,e):Qb(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Jo(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Vl)}loadBackground(e,n){if(Qo(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Wt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Jo(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new O).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new ye).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new ye).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof $e||e instanceof Wt?this.scene.background=e:this.scene.background=new $e(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Xt||(e=new dA(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const fA=""+new URL("valley-birch-DQGKi2_1.png",import.meta.url).href,hA=""+new URL("forest-sunset-DReQOex4.png",import.meta.url).href,pA=""+new URL("wheat-field-C0FZ0Fc_.png",import.meta.url).href,mA=""+new URL("mossy-cave-DipE7VBg.png",import.meta.url).href,Ud=[{id:"none",label:"None",url:""},{id:"valley-birch",label:"Birch Valley",url:fA},{id:"forest-sunset",label:"Forest Sunset",url:hA},{id:"wheat-field",label:"Wheat Field",url:pA},{id:"mossy-cave",label:"Mossy Cave",url:mA}],gA=t=>Ud.find(e=>e.id===t)??Ud[0],vA="linear-gradient(180deg, #8EC5E8 0%, #6BAF7A 55%, #4A8F5C 100%)",l0=({backgroundId:t,children:e,className:n,inset:i=0})=>{const r=gA(t),s=r.url!==""?{backgroundImage:`url(${r.url})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:vA};return u.jsxs("div",{className:`relative h-full w-full min-h-0 ${n??""}`,children:[u.jsx("div",{className:"absolute overflow-hidden border-[2px] border-ink/20 shadow-[inset_0_0_0_1px_rgba(255,251,234,0.15)]",style:{top:i,right:i,bottom:i,left:i,...s}}),u.jsx("div",{className:"absolute inset-0 z-10",children:e})]})},Vf=({imageUrl:t,model:e,width:n=220,height:i=320,pose:r="walk",rotate:s=!0,interactive:a=!1,zoom:o=.95,backgroundId:l="valley-birch",className:c})=>{const h=me.useRef(null),p=me.useRef(null),[d,m]=me.useState(!1);return me.useEffect(()=>{if(!h.current)return;let v=null;try{const S=document.createElement("canvas");S.width=n,S.height=i,S.style.width="100%",S.style.height="100%",S.style.imageRendering="pixelated",h.current.innerHTML="",h.current.appendChild(S),v=new o0({canvas:S,width:n,height:i,preserveDrawingBuffer:!0}),v.zoom=o,v.fov=50,v.background=null,v.controls.enableRotate=a,v.controls.enableZoom=a,v.controls.enablePan=!1,v.autoRotate=s,v.autoRotateSpeed=.6,r==="walk"?v.animation=new cA:r==="wave"?v.animation=new uA:r==="idle"?v.animation=new lA:v.animation=null,p.current=v}catch(S){console.warn("SkinViewer init failed (likely no WebGL):",S),m(!0)}return()=>{try{v==null||v.dispose()}catch{}p.current=null}},[n,i,r,s,a,o]),me.useEffect(()=>{const v=p.current;if(v)try{if(!t){v.resetSkin();return}v.loadSkin(t,{model:e==="slim"?"slim":"default"}).catch(()=>{})}catch{}},[t,e]),d?u.jsx("div",{className:c,style:{width:n,height:i,background:"repeating-conic-gradient(#E9D6B4 0% 25%, #D9BF8E 0% 50%) 50%/16px 16px",border:"3px solid #2A2138",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"VT323, monospace",fontSize:14,color:"#2A2138",textAlign:"center",padding:8},children:"3D preview unavailable"}):u.jsx("div",{style:{width:n,height:i},className:c,children:u.jsx(l0,{backgroundId:l,inset:4,children:u.jsx("div",{ref:h,style:{width:"100%",height:"100%",lineHeight:0}})})})},Ne=({name:t,size:e=14,color:n="#2A2138",className:i})=>{const r=n,s=a=>u.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",shapeRendering:"crispEdges",className:i,style:{display:"inline-block",verticalAlign:"middle"},children:a});switch(t){case"plus":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"x":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r})]}));case"pencil":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"10",y:"2",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"8",y:"4",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"4",y:"8",width:"3",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"13",width:"3",height:"1",fill:"#5B3A1F"})]}));case"eraser":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"9",width:"10",height:"4",fill:"#FF9FB1"}),u.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"13",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"9",width:"1",height:"4",fill:r}),u.jsx("rect",{x:"12",y:"9",width:"1",height:"4",fill:r}),u.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#FFFBEA"})]}));case"fill":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"6",height:"2",fill:"#F5C04A"}),u.jsx("rect",{x:"5",y:"11",width:"4",height:"1",fill:r}),u.jsx("rect",{x:"11",y:"9",width:"2",height:"3",fill:"#3FB6A8"})]}));case"eyedropper":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"10",y:"2",width:"3",height:"2",fill:"#7B7F87"}),u.jsx("rect",{x:"9",y:"4",width:"3",height:"2",fill:"#C8CCD2"}),u.jsx("rect",{x:"7",y:"6",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"8",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"10",width:"3",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"12",width:"2",height:"2",fill:r})]}));case"shade":return s(u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"8",cy:"8",r:"5",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"5",height:"3",fill:"#1B1424"})]}));case"lighten":return s(u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"8",cy:"8",r:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"7",width:"13",height:"3",fill:"#FFFBEA"})]}));case"download":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"7",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"12",width:"10",height:"2",fill:r})]}));case"upload":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"6",width:"2",height:"7",fill:r}),u.jsx("rect",{x:"5",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"2",width:"10",height:"2",fill:r})]}));case"trash":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"9",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"1",height:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"5",fill:"#F5C04A"}),u.jsx("rect",{x:"10",y:"7",width:"1",height:"5",fill:"#F5C04A"})]}));case"eye":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),u.jsx("rect",{x:"4",y:"6",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"4",y:"10",width:"8",height:"1",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#FFFBEA"}),u.jsx("rect",{x:"7",y:"7",width:"3",height:"3",fill:"#3FB6A8"}),u.jsx("rect",{x:"8",y:"8",width:"1",height:"1",fill:r})]}));case"eye-off":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"7",width:"10",height:"3",fill:r}),u.jsx("rect",{x:"5",y:"7",width:"6",height:"3",fill:"#7B7F87"}),u.jsx("rect",{x:"3",y:"3",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"9",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"2",fill:r})]}));case"lock":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"unlock":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"4",y:"3",width:"8",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"5",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"7",y:"9",width:"2",height:"3",fill:"#F5C04A"})]}));case"mirror":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"12",fill:r}),u.jsx("rect",{x:"2",y:"4",width:"4",height:"8",fill:"#F5C04A"}),u.jsx("rect",{x:"2",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"}),u.jsx("rect",{x:"10",y:"4",width:"4",height:"8",fill:"#3FB6A8"}),u.jsx("rect",{x:"10",y:"4",width:"4",height:"8",stroke:r,strokeWidth:"1",fill:"none"})]}));case"grid":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"3",y:"9",width:"10",height:"1",fill:r}),u.jsx("rect",{x:"6",y:"3",width:"1",height:"10",fill:r}),u.jsx("rect",{x:"9",y:"3",width:"1",height:"10",fill:r})]}));case"mask":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"none",stroke:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"6",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#F7E6CF"})]}));case"undo":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"6",width:"4",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"10",width:"2",height:"2",fill:r})]}));case"redo":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"6",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"12",y:"7",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"11",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"9",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"6",width:"4",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"10",width:"2",height:"2",fill:r})]}));case"home":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"3",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"7",fill:r}),u.jsx("rect",{x:"6",y:"9",width:"4",height:"5",fill:"#F5C04A"})]}));case"save":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"2",width:"12",height:"12",fill:r}),u.jsx("rect",{x:"4",y:"3",width:"8",height:"4",fill:"#F7E6CF"}),u.jsx("rect",{x:"5",y:"4",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"4",fill:"#F7E6CF"})]}));case"folder":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"5",width:"5",height:"2",fill:r}),u.jsx("rect",{x:"2",y:"6",width:"12",height:"8",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"6",fill:"#F5C04A"})]}));case"folder-big":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"1",y:"4",width:"7",height:"2",fill:r}),u.jsx("rect",{x:"1",y:"5",width:"14",height:"10",fill:r}),u.jsx("rect",{x:"2",y:"7",width:"12",height:"7",fill:"#F5C04A"})]}));case"merge":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"2",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"2",stroke:r,fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"11",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"7",y:"8",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"1",fill:r})]}));case"duplicate":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"2",width:"9",height:"9",fill:r}),u.jsx("rect",{x:"3",y:"3",width:"7",height:"7",fill:"#F5C04A"}),u.jsx("rect",{x:"5",y:"5",width:"9",height:"9",fill:r}),u.jsx("rect",{x:"6",y:"6",width:"7",height:"7",fill:"#F7E6CF"})]}));case"up":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"down":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"3",width:"2",height:"10",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r})]}));case"check":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"4",y:"10",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"6",y:"8",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"8",y:"6",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"10",y:"4",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"12",y:"2",width:"2",height:"2",fill:r})]}));case"face":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"10",fill:"#C39979"}),u.jsx("rect",{x:"5",y:"6",width:"1",height:"1",fill:r}),u.jsx("rect",{x:"10",y:"6",width:"1",height:"1",fill:r}),u.jsx("rect",{x:"6",y:"9",width:"4",height:"1",fill:r})]}));case"hair":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3D2614"}),u.jsx("rect",{x:"3",y:"6",width:"2",height:"6",fill:"#3D2614"}),u.jsx("rect",{x:"11",y:"6",width:"2",height:"6",fill:"#3D2614"})]}));case"shirt":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"10",height:"2",fill:"#2F8FCF"}),u.jsx("rect",{x:"2",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),u.jsx("rect",{x:"12",y:"5",width:"2",height:"4",fill:"#2F8FCF"}),u.jsx("rect",{x:"3",y:"6",width:"10",height:"7",fill:"#2F8FCF"}),u.jsx("rect",{x:"6",y:"4",width:"4",height:"1",fill:"#F7E6CF"})]}));case"pants":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"3",fill:"#3B5BA3"}),u.jsx("rect",{x:"3",y:"6",width:"4",height:"8",fill:"#3B5BA3"}),u.jsx("rect",{x:"9",y:"6",width:"4",height:"8",fill:"#3B5BA3"})]}));case"shoes":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"2",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),u.jsx("rect",{x:"9",y:"10",width:"5",height:"3",fill:"#5B3A1F"}),u.jsx("rect",{x:"2",y:"12",width:"12",height:"2",fill:"#2A2138"})]}));case"star":return s(u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"7",y:"2",width:"2",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"5",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"7",width:"10",height:"2",fill:r}),u.jsx("rect",{x:"5",y:"9",width:"6",height:"2",fill:r}),u.jsx("rect",{x:"3",y:"11",width:"2",height:"3",fill:r}),u.jsx("rect",{x:"11",y:"11",width:"2",height:"3",fill:r})]}))}},xA=({onNew:t,onEdit:e})=>{const n=Rr(g=>g.skins),i=Rr(g=>g.remove),r=Rr(g=>g.rename),[s,a]=me.useState("all"),[o,l]=me.useState(""),[c,h]=me.useState(null),[p,d]=me.useState(""),m=me.useMemo(()=>n.filter(g=>s==="all"?!0:g.model===s).filter(g=>o.trim()?g.name.toLowerCase().includes(o.trim().toLowerCase()):!0),[n,s,o]),v=new Date,S=v.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),x=v.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\s/g,""),f=v.getFullYear(),y=`${S} ${x} ${f}`;return u.jsxs("div",{className:"h-full w-full p-3 lg:p-4 overflow-hidden flex flex-col",children:[u.jsx(_A,{dateStr:y}),u.jsxs("div",{className:"mt-3 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-3 overflow-hidden",children:[u.jsx(yA,{filter:s,setFilter:a,search:o,setSearch:l,filtered:m,onNew:t,onEdit:e,remove:i,rename:r,renamingId:c,setRenamingId:h,renameValue:p,setRenameValue:d}),u.jsx(MA,{onNew:t,count:n.length})]})]})},_A=({dateStr:t})=>u.jsxs("div",{className:"flex items-center justify-between gap-3 px-2",children:[u.jsx("div",{className:"flex items-center gap-3",children:u.jsx("span",{className:"pixel-text text-[14px] text-accent-cream",children:"PIXEL SKIN STUDIO"})}),u.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[u.jsx("span",{className:"pixel-text-sm text-accent-cream/80",children:"JAVA 64x64"}),u.jsx("span",{className:"pixel-text-sm text-accent-yellow",children:t})]})]}),yA=t=>u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full overflow-hidden",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"/SKINS/MY-CREATIONS"}),u.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[u.jsx(Au,{label:"ALL",active:t.filter==="all",onClick:()=>t.setFilter("all")}),u.jsx(Au,{label:"CLASSIC",active:t.filter==="classic",onClick:()=>t.setFilter("classic")}),u.jsx(Au,{label:"SLIM",active:t.filter==="slim",onClick:()=>t.setFilter("slim")}),u.jsx("button",{"aria-label":"close",className:"ml-2 w-6 h-6 grid place-items-center bg-accent-cream text-ink border-2 border-accent-cream",onClick:()=>{},children:u.jsx(Ne,{name:"x",size:10})})]})]}),u.jsxs("div",{className:"px-4 py-3 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-3",children:[u.jsxs("button",{onClick:t.onNew,className:"pixel-button cream flex items-center gap-2",children:[u.jsx(Ne,{name:"plus"})," NEW SKIN"]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"pixel-text-sm",children:"SEARCH"}),u.jsx("input",{className:"pixel-input w-40",placeholder:"name...",value:t.search,onChange:e=>t.setSearch(e.target.value)})]}),u.jsxs("div",{className:"ml-auto pixel-text-sm flex items-center gap-2",children:[u.jsx(Ne,{name:"folder"}),u.jsxs("span",{children:[t.filtered.length," ITEMS"]})]})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk2 p-5",children:t.filtered.length===0?u.jsx(SA,{onNew:t.onNew}):u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5",children:t.filtered.map((e,n)=>u.jsx(EA,{skin:e,index:n,onEdit:()=>t.onEdit(e.id),onDelete:()=>t.remove(e.id),renaming:t.renamingId===e.id,renameValue:t.renameValue,onStartRename:()=>{t.setRenamingId(e.id),t.setRenameValue(e.name)},onChangeRename:t.setRenameValue,onCommitRename:()=>{t.renameValue.trim()&&t.rename(e.id,t.renameValue.trim()),t.setRenamingId(null)},onCancelRename:()=>t.setRenamingId(null)},e.id))})}),u.jsx("div",{className:"h-4 bg-accent-yellow border-t-[3px] border-ink"})]}),Au=({label:t,active:e,onClick:n})=>u.jsx("button",{onClick:n,className:"pixel-button compact",style:{background:e?"#F5C04A":"transparent",color:e?"#2A2138":"#F7E6CF",borderColor:e?"#2A2138":"#F7E6CF",boxShadow:e?"2px 2px 0 0 #1B1424":"2px 2px 0 0 #F7E6CF"},children:t}),SA=({onNew:t})=>u.jsx("div",{className:"h-full min-h-0 grid place-items-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"mx-auto w-20 h-20 mb-3 grid place-items-center",children:u.jsx(Ne,{name:"folder-big",size:48})}),u.jsx("div",{className:"pixel-text text-[12px] mb-2",children:"NO SKINS YET"}),u.jsx("div",{className:"font-body text-[18px] mb-4 text-ink/70",children:"Boot up your first creation!"}),u.jsxs("button",{onClick:t,className:"pixel-button danger flex items-center gap-2 mx-auto",children:[u.jsx(Ne,{name:"plus"})," CREATE SKIN"]})]})}),EA=({skin:t,index:e,onEdit:n,onDelete:i,renaming:r,renameValue:s,onStartRename:a,onChangeRename:o,onCommitRename:l,onCancelRename:c})=>u.jsx("div",{className:"slide-in-up",style:{animationDelay:`${e*30}ms`},children:u.jsxs("div",{className:"pixel-card group cursor-pointer relative overflow-hidden p-0",children:[u.jsx("div",{className:"h-44 grid place-items-center",style:{background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)",borderBottom:"3px solid #2A2138"},onClick:n,children:u.jsx(Vf,{imageUrl:t.dataUrl,model:t.model,width:120,height:160,pose:"idle",rotate:!0})}),u.jsxs("div",{className:"p-2 flex items-center gap-2 bg-accent-cream",children:[r?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:s,onChange:h=>o(h.target.value),onBlur:l,onKeyDown:h=>{h.key==="Enter"&&l(),h.key==="Escape"&&c()}}):u.jsx("button",{className:"pixel-text-sm text-left flex-1 truncate min-w-0",onClick:a,title:t.name,children:t.name}),u.jsx("button",{className:"pixel-chip",style:{background:t.model==="slim"?"#3FB6A8":"#F5C04A",color:"#2A2138"},children:t.model.toUpperCase()})]}),u.jsxs("div",{className:"flex border-t-[3px] border-ink",children:[u.jsxs("button",{onClick:n,className:"flex-1 p-2 pixel-text-sm bg-accent-yellow hover:bg-[#FFCF63] border-r-[3px] border-ink flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"pencil"})," EDIT"]}),u.jsxs("button",{onClick:()=>{const h=document.createElement("a");h.href=t.dataUrl,h.download=`${t.name}.png`,h.click()},className:"flex-1 p-2 pixel-text-sm bg-accent-teal text-ink border-r-[3px] border-ink flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"download"})," SAVE"]}),u.jsxs("button",{onClick:()=>{confirm(`Delete "${t.name}"?`)&&i()},className:"flex-1 p-2 pixel-text-sm bg-accent-red text-accent-cream flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"trash"})," BIN"]})]})]})}),MA=({onNew:t,count:e})=>u.jsxs("div",{className:"hidden lg:flex flex-col gap-3 min-h-0 overflow-hidden",children:[u.jsx(_a,{label:"HD",sublabel:`${e} skins`,onClick:()=>{},svg:u.jsx(wA,{})}),u.jsx(_a,{label:"CURRENT PROJECT",sublabel:"floppy.dat",onClick:t,svg:u.jsx(Gm,{variant:"red"})}),u.jsx(_a,{label:"NEW PROJECT",sublabel:"64x64 atlas",onClick:t,svg:u.jsx(Gm,{variant:"cream"})}),u.jsx(_a,{label:"CLIPBOARD",sublabel:"paste skin",onClick:()=>{var n;(n=window.__skin_upload)==null||n.call(window)},svg:u.jsx(TA,{})}),u.jsx(_a,{label:"BIN",sublabel:"clear cache",onClick:()=>{confirm("Clear local cache? This does not delete saved skins.")&&location.reload()},svg:u.jsx(bA,{})})]}),_a=({label:t,sublabel:e,onClick:n,svg:i})=>u.jsxs("button",{onClick:n,className:"pixel-card text-center hover:translate-y-[-2px] transition-transform",children:[u.jsx("div",{className:"h-16 grid place-items-center mb-1 float-anim",children:i}),u.jsx("div",{className:"pixel-text-sm",children:t}),e&&u.jsx("div",{className:"font-body text-[14px] text-ink/70",children:e})]}),Gm=({variant:t})=>u.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"1",y:"1",width:"14",height:"14",fill:t==="red"?"#D54B4B":"#F5C04A"}),u.jsx("rect",{x:"1",y:"1",width:"14",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"14",width:"14",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"1",width:"1",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"14",y:"1",width:"1",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"2",width:"10",height:"4",fill:"#F7E6CF"}),u.jsx("rect",{x:"5",y:"3",width:"2",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"9",y:"3",width:"2",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"8",width:"10",height:"6",fill:"#F7E6CF"}),u.jsx("rect",{x:"4",y:"9",width:"8",height:"1",fill:"#B07B47"}),u.jsx("rect",{x:"4",y:"11",width:"8",height:"1",fill:"#B07B47"}),u.jsx("rect",{x:"4",y:"13",width:"8",height:"1",fill:"#B07B47"})]}),wA=()=>u.jsxs("svg",{width:"56",height:"48",viewBox:"0 0 16 14",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"0",y:"0",width:"16",height:"14",fill:"#2A2138"}),u.jsx("rect",{x:"1",y:"1",width:"14",height:"6",fill:"#F5C04A"}),u.jsx("rect",{x:"2",y:"2",width:"12",height:"4",fill:"#E68E2E"}),u.jsx("rect",{x:"3",y:"3",width:"10",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"1",y:"8",width:"14",height:"5",fill:"#B07B47"}),u.jsx("rect",{x:"2",y:"10",width:"2",height:"2",fill:"#3FB6A8"}),u.jsx("rect",{x:"5",y:"10",width:"9",height:"2",fill:"#2A2138"})]}),TA=()=>u.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"2",y:"2",width:"10",height:"13",fill:"#F5C04A",stroke:"#2A2138"}),u.jsx("rect",{x:"2",y:"2",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"2",y:"14",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"2",y:"2",width:"1",height:"13",fill:"#2A2138"}),u.jsx("rect",{x:"11",y:"2",width:"1",height:"13",fill:"#2A2138"}),u.jsx("rect",{x:"4",y:"3",width:"6",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"5",y:"2",width:"4",height:"1",fill:"#F7E6CF"}),u.jsx("rect",{x:"3",y:"6",width:"8",height:"1",fill:"#FFFBEA"}),u.jsx("rect",{x:"3",y:"8",width:"8",height:"1",fill:"#FFFBEA"}),u.jsx("rect",{x:"3",y:"10",width:"6",height:"1",fill:"#FFFBEA"})]}),bA=()=>u.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"3",y:"3",width:"10",height:"2",fill:"#2A2138"}),u.jsx("rect",{x:"6",y:"2",width:"4",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"10",fill:"#F5C04A"}),u.jsx("rect",{x:"3",y:"5",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"14",width:"10",height:"1",fill:"#2A2138"}),u.jsx("rect",{x:"3",y:"5",width:"1",height:"10",fill:"#2A2138"}),u.jsx("rect",{x:"12",y:"5",width:"1",height:"10",fill:"#2A2138"}),u.jsx("rect",{x:"5",y:"7",width:"2",height:"6",fill:"#2A2138"}),u.jsx("rect",{x:"9",y:"7",width:"2",height:"6",fill:"#2A2138"}),u.jsx("path",{d:"M7 10 l1 1 -1 1",stroke:"#3FB6A8"})]}),lt=64,dn=64,Vt=(t,e,n,i,r)=>({top:{x:t+r,y:e,w:n,h:r},bottom:{x:t+r+n,y:e,w:n,h:r},right:{x:t,y:e+r,w:r,h:i},front:{x:t+r,y:e+r,w:n,h:i},left:{x:t+r+n,y:e+r,w:r,h:i},back:{x:t+r+n+r,y:e+r,w:n,h:i}}),c0={head:Vt(0,0,8,8,8),head_overlay:Vt(32,0,8,8,8),body:Vt(16,16,8,12,4),body_overlay:Vt(16,32,8,12,4),right_arm:Vt(40,16,4,12,4),right_arm_overlay:Vt(40,32,4,12,4),left_arm:Vt(32,48,4,12,4),left_arm_overlay:Vt(48,48,4,12,4),right_leg:Vt(0,16,4,12,4),right_leg_overlay:Vt(0,32,4,12,4),left_leg:Vt(16,48,4,12,4),left_leg_overlay:Vt(0,48,4,12,4)},AA={...c0,right_arm:Vt(40,16,3,12,4),right_arm_overlay:Vt(40,32,3,12,4),left_arm:Vt(32,48,3,12,4),left_arm_overlay:Vt(48,48,3,12,4)},Gf=t=>t==="slim"?AA:c0,CA=[{key:"head",label:"Head",overlayKey:"head_overlay"},{key:"body",label:"Body",overlayKey:"body_overlay"},{key:"right_arm",label:"Right Arm",overlayKey:"right_arm_overlay"},{key:"left_arm",label:"Left Arm",overlayKey:"left_arm_overlay"},{key:"right_leg",label:"Right Leg",overlayKey:"right_leg_overlay"},{key:"left_leg",label:"Left Leg",overlayKey:"left_leg_overlay"}],u0=t=>{const e=new Uint8Array(lt*dn),n=Gf(t);for(const i of Object.values(n))for(const r of Object.values(i))for(let s=0;s<r.h;s++)for(let a=0;a<r.w;a++){const o=r.x+a,l=r.y+s;o>=0&&l>=0&&o<lt&&l<dn&&(e[l*lt+o]=1)}return e},RA=u0("classic"),PA=u0("slim"),LA=t=>t==="slim"?PA:RA,NA={skin:{light:"#F0C8B0",mid:"#E0B49A",dark:"#C99582",shadow:"#A87B68"}},DA=(t,e)=>(t*374761393+e*668265263>>>0)%997,IA=(t,e,n,i)=>{const r=(e-n.y)/Math.max(1,n.h-1),s=DA(t,e)%5;return r<.2?s===0?i.light:i.mid:r<.55?s<2?i.mid:i.light:r<.8?s<2?i.dark:i.mid:i.shadow??i.dark},UA=(t,e,n)=>{for(let i=0;i<e.h;i++)for(let r=0;r<e.w;r++)t.fillStyle=IA(e.x+r,e.y+i,e,n),t.fillRect(e.x+r,e.y+i,1,1)},fs=(t,e,n,i)=>{t.fillStyle=i,t.fillRect(e,n,1,1)},Kn=(t=lt,e=dn)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n},$t=t=>{const e=t.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("2d context unavailable");return e.imageSmoothingEnabled=!1,e},Ta=t=>{const e=Kn(t.width,t.height);return $t(e).drawImage(t,0,0),e},Ir=(t,e=lt,n=dn)=>new Promise((i,r)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{const a=Kn(e,n),o=$t(a),l=s.height===32?32:n;o.drawImage(s,0,0,s.width,s.height,0,0,e,l),i(a)},s.onerror=r,s.src=t}),FA=t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{if(typeof i.result!="string")return n("bad read");Ir(i.result).then(e,n)},i.onerror=n,i.readAsDataURL(t)}),OA=t=>(t.hue??0)!==0||(t.saturation??1)!==1||(t.brightness??1)!==1,Wf=(t,e)=>{if(!e.visible)return;const n=e.hue??0,i=e.saturation??1,r=e.brightness??1;if(OA(e)){const s=Kn(e.canvas.width,e.canvas.height),a=$t(s);a.filter=`hue-rotate(${n}deg) saturate(${i*100}%) brightness(${r*100}%)`,a.drawImage(e.canvas,0,0),a.filter="none",t.globalAlpha=e.opacity,t.drawImage(s,0,0)}else t.globalAlpha=e.opacity,t.drawImage(e.canvas,0,0);t.globalAlpha=1},d0=t=>{const e=Kn();return Wf($t(e),{...t,opacity:1,visible:!0}),ta(e)},to=t=>{const e=Kn(),n=$t(e);for(const i of t)Wf(n,i);return e},ta=t=>t.toDataURL("image/png"),kA=(t,e)=>{t.toBlob(n=>{if(!n)return;const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e.endsWith(".png")?e:`${e}.png`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),500)},"image/png")},BA=t=>{const e=Kn(),n=$t(e);n.clearRect(0,0,e.width,e.height);const i=Gf(t),r={head:"#3BCEFF",body:"#7FFF7F",right_arm:"#FF7F7F",left_arm:"#FFBF7F",right_leg:"#7F7FFF",left_leg:"#FF7FFF"};for(const s of["head","body","right_arm","left_arm","right_leg","left_leg"]){const a=r[s];for(const o of Object.values(i[s]))n.fillStyle=a,n.fillRect(o.x,o.y,o.w,o.h)}return e},zA=t=>BA(t),jA=t=>{const e=Kn(),n=$t(e);n.imageSmoothingEnabled=!1;const i=Gf(t),r=NA.skin,s=["head","body","right_arm","left_arm","right_leg","left_leg"];for(const o of s)for(const l of Object.values(i[o]))UA(n,l,r);const a=i.head.front;return n.fillStyle="#FFF5EE",fs(n,a.x+2,a.y+4,"#FFF5EE"),fs(n,a.x+5,a.y+4,"#FFF5EE"),n.fillStyle="#5A9A8A",fs(n,a.x+2,a.y+4,"#5A9A8A"),fs(n,a.x+5,a.y+4,"#5A9A8A"),n.fillStyle="#2A2428",fs(n,a.x+2,a.y+5,"#2A2428"),fs(n,a.x+5,a.y+5,"#2A2428"),e},HA=(t,e,n)=>{const i=$t(t).getImageData(e,n,1,1).data,r=s=>s.toString(16).padStart(2,"0");return`#${r(i[0])}${r(i[1])}${r(i[2])}${r(i[3])}`},f0=t=>{if(t.startsWith("#")){const r=t.slice(1);if(r.length===6)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),255];if(r.length===8)return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),parseInt(r.slice(6,8),16)];if(r.length===3){const s=parseInt(r[0]+r[0],16),a=parseInt(r[1]+r[1],16),o=parseInt(r[2]+r[2],16);return[s,a,o,255]}}const e=Kn(1,1),n=$t(e);n.fillStyle=t,n.fillRect(0,0,1,1);const i=n.getImageData(0,0,1,1).data;return[i[0],i[1],i[2],i[3]]},VA=["head","body","right_arm","left_arm","right_leg","left_leg"],tl=()=>Object.fromEntries(VA.map(t=>[t,0])),Mr=()=>Math.random().toString(36).slice(2,9),Cu=(t,e)=>({layers:t.map(n=>({id:n.id,dataUrl:ta(n.canvas)})),activeLayerId:e??""}),GA=40,Wm=t=>{const e=zA(t);return[{id:Mr(),name:"Base",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:e},{id:Mr(),name:"Paint",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:Kn()}]},ve=Qs((t,e)=>{const n=Wm("slim");return{model:"slim",layers:n,activeLayerId:n[n.length-1].id,tool:"pencil",color:"#E68E2E",recentColors:["#E68E2E","#D54B4B","#F5C04A","#3FB6A8","#7E4FB8","#C39979","#2A2138","#FFFBEA","#46367E","#3D2614"],brushSize:1,mirror:!1,showOverlay:!0,showGrid:!0,showOnlyValid:!0,activePart:"all",partLayerModes:tl(),previewBackground:"valley-birch",history:[],future:[],setModel:i=>t({model:i}),setTool:i=>t({tool:i}),setColor:i=>t({color:i}),pushRecentColor:i=>t(r=>({recentColors:[i,...r.recentColors.filter(s=>s!==i)].slice(0,16)})),setBrushSize:i=>t({brushSize:Math.max(1,Math.min(4,i))}),toggleMirror:()=>t(i=>({mirror:!i.mirror})),toggleOverlay:()=>t(i=>({showOverlay:!i.showOverlay})),toggleGrid:()=>t(i=>({showGrid:!i.showGrid})),toggleOnlyValid:()=>t(i=>({showOnlyValid:!i.showOnlyValid})),setActivePart:i=>t({activePart:i}),cyclePartLayerMode:i=>t(r=>{const a=((r.partLayerModes[i]??0)+1)%3;return{activePart:i,partLayerModes:{...r.partLayerModes,[i]:a}}}),resetPartLayerModes:()=>t({partLayerModes:tl(),activePart:"all"}),setPreviewBackground:i=>t({previewBackground:i}),setActiveLayer:i=>t({activeLayerId:i}),addBlankLayer:(i="Layer")=>{e().snapshot();const r={id:Mr(),name:i,visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:Kn()};t(s=>({layers:[...s.layers,r],activeLayerId:r.id}))},addLayerFromCanvas:(i,r="Imported")=>{e().snapshot();const s={id:Mr(),name:r,visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:Ta(i)};t(a=>({layers:[...a.layers,s],activeLayerId:s.id}))},addLayerFromDataUrl:async(i,r="Imported")=>{const s=await Ir(i);e().addLayerFromCanvas(s,r)},duplicateLayer:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(c=>c.id===i);if(s===-1)return r;const a=r.layers[s],o={...a,id:Mr(),name:`${a.name} copy`,canvas:Ta(a.canvas)},l=[...r.layers];return l.splice(s+1,0,o),{layers:l,activeLayerId:o.id}})},deleteLayer:i=>{e().snapshot(),t(r=>{if(r.layers.length<=1)return r;const s=r.layers.findIndex(l=>l.id===i);if(s===-1)return r;const a=r.layers.filter(l=>l.id!==i),o=r.activeLayerId===i?a[Math.min(s,a.length-1)].id:r.activeLayerId;return{layers:a,activeLayerId:o}})},toggleLayerVisible:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,visible:!s.visible}:s)}))},toggleLayerLocked:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,locked:!s.locked}:s)}))},setLayerOpacity:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,opacity:r}:a)}))},setLayerAdjustments:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id!==i?a:{...a,hue:r.hue??a.hue,saturation:r.saturation??a.saturation,brightness:r.brightness??a.brightness})}))},resetLayerAdjustments:i=>{t(r=>({layers:r.layers.map(s=>s.id===i?{...s,hue:0,saturation:1,brightness:1}:s)}))},renameLayer:(i,r)=>{t(s=>({layers:s.layers.map(a=>a.id===i?{...a,name:r}:a)}))},moveLayer:(i,r)=>{e().snapshot(),t(s=>{const a=s.layers.findIndex(h=>h.id===i);if(a===-1)return s;const o=a+r;if(o<0||o>=s.layers.length)return s;const l=[...s.layers],[c]=l.splice(a,1);return l.splice(o,0,c),{layers:l}})},mergeDown:i=>{e().snapshot(),t(r=>{const s=r.layers.findIndex(p=>p.id===i);if(s<=0)return r;const a=r.layers[s],o=r.layers[s-1],l=Ta(o.canvas),c=$t(l);c.globalAlpha=a.opacity,c.drawImage(a.canvas,0,0),c.globalAlpha=1;const h=[...r.layers];return h.splice(s,1),h[s-1]={...o,canvas:l},{layers:h,activeLayerId:o.id}})},snapshot:()=>{t(i=>{const r=Cu(i.layers,i.activeLayerId),s=[...i.history,r];return s.length>GA&&s.shift(),{history:s,future:[]}})},undo:()=>{const i=e();if(i.history.length===0)return;const r=i.history[i.history.length-1],s=Cu(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Ir(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const h=o.layers.find(m=>m.id===l.id),p=o.layers[c],d=h??p;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,hue:(d==null?void 0:d.hue)??0,saturation:(d==null?void 0:d.saturation)??1,brightness:(d==null?void 0:d.brightness)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:o.history.slice(0,-1),future:[...o.future,s]}))})},redo:()=>{const i=e();if(i.future.length===0)return;const r=i.future[i.future.length-1],s=Cu(i.layers,i.activeLayerId);Promise.all(r.layers.map(async a=>{const o=await Ir(a.dataUrl);return{id:a.id,canvas:o}})).then(a=>{t(o=>({layers:a.map((l,c)=>{const h=o.layers.find(m=>m.id===l.id),p=o.layers[c],d=h??p;return{id:l.id,name:(d==null?void 0:d.name)??`Layer ${c+1}`,visible:(d==null?void 0:d.visible)??!0,locked:(d==null?void 0:d.locked)??!1,opacity:(d==null?void 0:d.opacity)??1,hue:(d==null?void 0:d.hue)??0,saturation:(d==null?void 0:d.saturation)??1,brightness:(d==null?void 0:d.brightness)??1,canvas:l.canvas}}),activeLayerId:r.activeLayerId||o.activeLayerId,history:[...o.history,s],future:o.future.slice(0,-1)}))})},composite:()=>to(e().layers),reset:i=>{const r=i??"slim",s=Wm(r);t({layers:s,activeLayerId:s[s.length-1].id,model:r,history:[],future:[],partLayerModes:tl(),activePart:"all"})},loadSkinAsBase:i=>{const r={id:Mr(),name:"Base",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:Ta(i)},s={id:Mr(),name:"Paint",visible:!0,locked:!1,opacity:1,hue:0,saturation:1,brightness:1,canvas:Kn()};t({layers:[r,s],activeLayerId:s.id,history:[],future:[],partLayerModes:tl(),activePart:"all"})}}});let WA=1;const Fd=Qs(t=>({items:[],show:e=>{const n=WA++;t(i=>({items:[...i.items,{id:n,message:e}]})),setTimeout(()=>{t(i=>({items:i.items.filter(r=>r.id!==n)}))},2400)},dismiss:e=>t(n=>({items:n.items.filter(i=>i.id!==e)}))})),gc=()=>({show:Fd(e=>e.show)}),XA=()=>{const t=Fd(n=>n.items),e=Fd(n=>n.dismiss);return me.useEffect(()=>{},[t]),u.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center pointer-events-none",children:t.map(n=>u.jsx("div",{className:"pixel-window slide-in-up pointer-events-auto",style:{background:"#F5C04A"},children:u.jsxs("div",{className:"px-4 py-2 flex items-center gap-3",children:[u.jsx("span",{className:"pixel-text-sm",children:n.message}),u.jsx("button",{className:"pixel-text-sm hover:underline",onClick:()=>e(n.id),children:"X"})]})},n.id))})},xi=Qs((t,e)=>({confirm:null,savePreset:null,saveColor:null,askConfirm:n=>new Promise(i=>{t({confirm:{...n,resolve:i}})}),askSavePreset:n=>new Promise(i=>{t({savePreset:{...n,resolve:i}})}),askSaveColor:n=>new Promise(i=>{t({saveColor:{...n,resolve:i}})}),closeConfirm:n=>{const i=e().confirm;i&&i.resolve(n),t({confirm:null})},closeSavePreset:n=>{const i=e().savePreset;i&&i.resolve(n),t({savePreset:null})},closeSaveColor:n=>{const i=e().saveColor;i&&i.resolve(n),t({saveColor:null})}})),lo=()=>{const t=xi(i=>i.askConfirm),e=xi(i=>i.askSavePreset),n=xi(i=>i.askSaveColor);return{askConfirm:t,askSavePreset:e,askSaveColor:n}},h0="pixel-skin-studio:presets:v2",YA="pixel-skin-studio:presets:v1",Xm=()=>Math.random().toString(36).slice(2,10),zi=t=>{try{localStorage.setItem(h0,JSON.stringify(t))}catch(e){console.warn("Could not persist presets",e)}},$A=()=>{try{const t=localStorage.getItem(YA);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>({...n,folderId:n.folderId??null})):[]}catch{return[]}},jn=Qs(t=>({folders:[],presets:[],hydrate:()=>{try{const e=localStorage.getItem(h0);if(e){const i=JSON.parse(e);if(i&&Array.isArray(i.presets)){t({folders:Array.isArray(i.folders)?i.folders:[],presets:i.presets.map(r=>({...r,folderId:r.folderId??null}))});return}}const n=$A();if(n.length>0){const i={folders:[],presets:n};zi(i),t(i)}}catch{}},saveFromLayer:({name:e,model:n,dataUrl:i,folderId:r=null})=>{const s={id:Xm(),name:e.trim()||"Untitled Preset",model:n,dataUrl:i,folderId:r,createdAt:Date.now()};return t(a=>{const o=[s,...a.presets];return zi({folders:a.folders,presets:o}),{presets:o}}),s},remove:e=>{t(n=>{const i=n.presets.filter(r=>r.id!==e);return zi({folders:n.folders,presets:i}),{presets:i}})},rename:(e,n)=>{t(i=>{const r=i.presets.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return zi({folders:i.folders,presets:r}),{presets:r}})},moveToFolder:(e,n)=>{t(i=>{const r=i.presets.map(s=>s.id===e?{...s,folderId:n}:s);return zi({folders:i.folders,presets:r}),{presets:r}})},addFolder:e=>{const n={id:Xm(),name:e.trim()||"New Folder",createdAt:Date.now()};return t(i=>{const r=[...i.folders,n];return zi({folders:r,presets:i.presets}),{folders:r}}),n},renameFolder:(e,n)=>{t(i=>{const r=i.folders.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return zi({folders:r,presets:i.presets}),{folders:r}})},removeFolder:e=>{t(n=>{const i=n.folders.filter(s=>s.id!==e),r=n.presets.map(s=>s.folderId===e?{...s,folderId:null}:s);return zi({folders:i,presets:r}),{folders:i,presets:r}})}})),qA=t=>[{id:null,name:"Unfiled"},...t.map(e=>({id:e.id,name:e.name}))],p0=()=>{const{askSavePreset:t}=lo(),e=jn(r=>r.folders),n=jn(r=>r.saveFromLayer);return{promptSavePreset:me.useCallback(async r=>{const s=await t({defaultName:r.defaultName,model:r.model,dataUrl:r.dataUrl,folderOptions:qA(e),defaultFolderId:r.defaultFolderId??null});return s?n({name:s.name,model:r.model,dataUrl:r.dataUrl,folderId:s.folderId}):null},[t,e,n])}},Ym=()=>{const t=ve(_=>_.layers),e=ve(_=>_.activeLayerId),n=ve(_=>_.setActiveLayer),i=ve(_=>_.addBlankLayer),r=ve(_=>_.duplicateLayer),s=ve(_=>_.deleteLayer),a=ve(_=>_.toggleLayerVisible),o=ve(_=>_.toggleLayerLocked),l=ve(_=>_.setLayerOpacity),c=ve(_=>_.setLayerAdjustments),h=ve(_=>_.resetLayerAdjustments),p=ve(_=>_.moveLayer),d=ve(_=>_.renameLayer),m=ve(_=>_.mergeDown),v=ve(_=>_.addLayerFromCanvas),S=ve(_=>_.model),{promptSavePreset:x}=p0(),{askConfirm:f}=lo(),y=gc(),g=me.useRef(null),[E,M]=me.useState(null);typeof window<"u"&&(window.__skin_upload=()=>{var _;return(_=g.current)==null?void 0:_.click()});const P=[...t].reverse(),b=async(_,T)=>{const G=t.find(I=>I.id===_);if(!G)return;const K=await x({defaultName:T,model:S,dataUrl:d0(G)});K&&y.show(`Preset "${K.name}" saved.`)},C=async(_,T)=>{if(t.length<=1)return;await f({title:"Delete Layer",message:`Delete layer "${T}"? This cannot be undone.`,confirmLabel:"Delete",variant:"danger"})&&s(_)};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"LAYERS"}),u.jsx("span",{className:"ml-auto panel-label text-accent-cream/90",children:t.length})]}),u.jsxs("div",{className:"p-2 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-1",children:[u.jsxs("button",{onClick:()=>i("Layer"),className:"pixel-button compact flex items-center gap-1",title:"New blank layer",children:[u.jsx(Ne,{name:"plus"})," NEW"]}),u.jsxs("button",{onClick:()=>{var _;return(_=g.current)==null?void 0:_.click()},className:"pixel-button compact teal flex items-center gap-1",title:"Upload skin as a layer",children:[u.jsx(Ne,{name:"upload"})," UPLOAD"]}),u.jsx("input",{ref:g,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:async _=>{const T=Array.from(_.target.files??[]);for(const G of T)try{const K=await FA(G);v(K,G.name.replace(/\.[^.]+$/,""))}catch(K){console.warn("Could not load file",K)}g.current&&(g.current.value="")},multiple:!0})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk",children:P.map(_=>{const T=_.id===e,G=_.hue!==0||_.saturation!==1||_.brightness!==1;return u.jsxs("div",{className:`relative border-b-[3px] border-ink ${T?"bg-accent-yellow":"bg-accent-cream"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 p-2",children:[u.jsx("button",{className:"pixel-button compact icon",onClick:()=>a(_.id),title:_.visible?"Hide":"Show",children:u.jsx(Ne,{name:_.visible?"eye":"eye-off"})}),u.jsxs("button",{onClick:()=>n(_.id),className:"flex items-center gap-2 flex-1 min-w-0 text-left",children:[u.jsx(KA,{layer:_,active:T}),u.jsx("input",{className:"bg-transparent outline-none w-full truncate panel-text",value:_.name,onChange:K=>d(_.id,K.target.value),onFocus:()=>n(_.id)})]}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>o(_.id),title:_.locked?"Unlock":"Lock",children:u.jsx(Ne,{name:_.locked?"lock":"unlock"})}),u.jsx("button",{className:"pixel-button compact icon purple",onClick:()=>b(_.id,_.name),title:"Save this layer as a preset",children:u.jsx(Ne,{name:"star",color:"#FFFBEA",size:10})}),u.jsx("button",{className:`pixel-button compact ${E===_.id?"active":""}`,onClick:()=>M(K=>K===_.id?null:_.id),title:"Show layer adjustments",children:"FX"})]}),E===_.id&&u.jsxs("div",{className:"px-2 pb-2 space-y-2 border-t border-ink/20 pt-2 mx-2",children:[u.jsxs("div",{className:"panel-label flex items-center justify-between",children:[u.jsx("span",{children:"Adjustments"}),G&&u.jsx("button",{className:"panel-text underline opacity-80 hover:opacity-100",onClick:()=>h(_.id),children:"Reset"})]}),u.jsx(nl,{label:"Opacity",min:0,max:1,step:.05,value:_.opacity,display:`${Math.round(_.opacity*100)}%`,onChange:K=>l(_.id,K)}),u.jsx(nl,{label:"Hue",min:-180,max:180,step:1,value:_.hue,display:`${_.hue}°`,onChange:K=>c(_.id,{hue:K})}),u.jsx(nl,{label:"Saturation",min:0,max:2,step:.05,value:_.saturation,display:`${Math.round(_.saturation*100)}%`,onChange:K=>c(_.id,{saturation:K})}),u.jsx(nl,{label:"Brightness",min:0,max:2,step:.05,value:_.brightness,display:`${Math.round(_.brightness*100)}%`,onChange:K=>c(_.id,{brightness:K})})]}),u.jsxs("div",{className:"px-2 pb-2 flex items-center gap-1 flex-wrap",children:[u.jsx("button",{className:"pixel-button compact icon",onClick:()=>p(_.id,1),title:"Move up",children:u.jsx(Ne,{name:"up"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>p(_.id,-1),title:"Move down",children:u.jsx(Ne,{name:"down"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>r(_.id),title:"Duplicate",children:u.jsx(Ne,{name:"duplicate"})}),u.jsx("button",{className:"pixel-button compact icon",onClick:()=>m(_.id),title:"Merge down",children:u.jsx(Ne,{name:"merge"})}),u.jsx("button",{className:"pixel-button compact icon danger ml-auto",onClick:()=>C(_.id,_.name),title:"Delete",disabled:t.length<=1,children:u.jsx(Ne,{name:"trash",color:"#FFFBEA"})})]})]},_.id)})})]})},nl=({label:t,min:e,max:n,step:i,value:r,display:s,onChange:a})=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"panel-text w-20 shrink-0 opacity-80",children:t}),u.jsx("input",{type:"range",min:e,max:n,step:i,value:r,onChange:o=>a(Number(o.target.value)),className:"flex-1 pixel-range"}),u.jsx("span",{className:"panel-text w-12 text-right shrink-0",children:s})]}),KA=({layer:t,active:e})=>{const n=me.useRef(null);return me.useEffect(()=>{const i=n.current;if(!i)return;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.clearRect(0,0,i.width,i.height);const s=4;for(let l=0;l<i.height;l+=s)for(let c=0;c<i.width;c+=s)r.fillStyle=(c/s+l/s)%2===0?"#E9D6B4":"#B07B47",r.fillRect(c,l,s,s);const a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=$t(a);Wf(o,{...t,opacity:1}),r.drawImage(a,0,0)},[t]),u.jsx("canvas",{ref:n,width:32,height:32,className:`border-2 ${e?"border-ink":"border-ink/70"}`,style:{imageRendering:"pixelated"}})},$m=()=>{const t=ve(s=>s.layers),e=ve(s=>s.model),n=ve(s=>s.previewBackground),[i,r]=me.useState(null);return me.useEffect(()=>{const s=window.setTimeout(()=>{r(ta(to(t)))},80);return()=>clearTimeout(s)},[t]),u.jsxs("div",{className:"pixel-window shrink-0",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"PREVIEW"})}),u.jsx("div",{className:"p-2 flex justify-center bg-bg-desk2",children:u.jsx(Vf,{imageUrl:i,model:e,width:100,height:140,pose:"none",rotate:!1,interactive:!0,zoom:.88,backgroundId:n})})]})},ZA=[{key:"pencil",label:"Pencil",icon:"pencil",shortcut:"B"},{key:"eraser",label:"Eraser",icon:"eraser",shortcut:"E"},{key:"fill",label:"Fill",icon:"fill",shortcut:"G"},{key:"eyedropper",label:"Pick",icon:"eyedropper",shortcut:"I"},{key:"shade",label:"Shade",icon:"shade",shortcut:"S"},{key:"lighten",label:"Lighten",icon:"lighten",shortcut:"L"}],qm=()=>{const t=ve(v=>v.tool),e=ve(v=>v.setTool),n=ve(v=>v.brushSize),i=ve(v=>v.setBrushSize),r=ve(v=>v.mirror),s=ve(v=>v.toggleMirror),a=ve(v=>v.showGrid),o=ve(v=>v.toggleGrid),l=ve(v=>v.showOnlyValid),c=ve(v=>v.toggleOnlyValid),h=ve(v=>v.undo),p=ve(v=>v.redo),d=ve(v=>v.history),m=ve(v=>v.future);return u.jsxs("div",{className:"pixel-window",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"TOOLS"})}),u.jsx("div",{className:"p-2 grid grid-cols-3 gap-2 bg-bg-desk2",children:ZA.map(v=>u.jsxs("button",{onClick:()=>e(v.key),title:`${v.label} (${v.shortcut})`,className:`pixel-button compact ${t===v.key?"active":""} flex flex-col items-center gap-1 py-3`,children:[u.jsx(Ne,{name:v.icon,size:16,color:t===v.key?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:v.label.toUpperCase()})]},v.key))}),u.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk space-y-2",children:[u.jsxs("div",{children:[u.jsx("div",{className:"pixel-text-sm mb-1",children:"BRUSH"}),u.jsx("div",{className:"grid grid-cols-4 gap-1",children:[1,2,3,4].map(v=>u.jsx("button",{onClick:()=>i(v),className:`pixel-button compact ${n===v?"active":""} grid place-items-center py-2`,children:u.jsx("div",{className:"bg-ink",style:{width:v*3,height:v*3}})},v))})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[u.jsxs("button",{onClick:s,className:`pixel-button compact ${r?"active":""} flex items-center justify-center gap-1`,title:"Mirror across X axis",children:[u.jsx(Ne,{name:"mirror",color:r?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"MIRROR"})]}),u.jsxs("button",{onClick:o,className:`pixel-button compact ${a?"active":""} flex items-center justify-center gap-1`,children:[u.jsx(Ne,{name:"grid",color:a?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"GRID"})]}),u.jsxs("button",{onClick:c,className:`pixel-button compact ${l?"active":""} flex items-center justify-center gap-1 col-span-2`,title:"Hide pixels that Minecraft doesn't use",children:[u.jsx(Ne,{name:"mask",color:l?"#F5C04A":"#2A2138"}),u.jsx("span",{style:{fontSize:8},children:"SAFE MASK"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[u.jsxs("button",{disabled:d.length===0,onClick:h,className:"pixel-button compact flex items-center justify-center gap-1",title:"Undo (Ctrl+Z)",children:[u.jsx(Ne,{name:"undo"})," ",u.jsx("span",{style:{fontSize:8},children:"UNDO"})]}),u.jsxs("button",{disabled:m.length===0,onClick:p,className:"pixel-button compact flex items-center justify-center gap-1",title:"Redo (Ctrl+Y)",children:[u.jsx(Ne,{name:"redo"})," ",u.jsx("span",{style:{fontSize:8},children:"REDO"})]})]})]})]})},m0="pixel-skin-studio:colors:v1",QA=()=>Math.random().toString(36).slice(2,10),JA=t=>{const e=t.trim().toLowerCase();return/^#[0-9a-f]{6}$/.test(e)?e:/^#[0-9a-f]{3}$/.test(e)?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:null},hs=(t,e)=>{try{localStorage.setItem(m0,JSON.stringify({palettes:t,activePaletteId:e}))}catch(n){console.warn("Could not persist color palettes",n)}},pi=Qs(t=>({palettes:[],activePaletteId:null,hydrate:()=>{var e;try{const n=localStorage.getItem(m0);if(!n)return;const i=JSON.parse(n);Array.isArray(i.palettes)&&t({palettes:i.palettes,activePaletteId:i.activePaletteId??((e=i.palettes[0])==null?void 0:e.id)??null})}catch{}},createPalette:e=>{const n={id:QA(),name:e.trim()||"My Palette",colors:[],createdAt:Date.now()};return t(i=>{const r=[...i.palettes,n],s=i.activePaletteId??n.id;return hs(r,s),{palettes:r,activePaletteId:s}}),n},removePalette:e=>{t(n=>{var s;const i=n.palettes.filter(a=>a.id!==e),r=n.activePaletteId===e?((s=i[0])==null?void 0:s.id)??null:n.activePaletteId;return hs(i,r),{palettes:i,activePaletteId:r}})},renamePalette:(e,n)=>{t(i=>{const r=i.palettes.map(s=>s.id===e?{...s,name:n.trim()||s.name}:s);return hs(r,i.activePaletteId),{palettes:r}})},setActivePalette:e=>{t(n=>(hs(n.palettes,e),{activePaletteId:e}))},addColor:(e,n)=>{const i=JA(n);i&&t(r=>{const s=r.palettes.map(a=>a.id!==e||a.colors.some(o=>o.toLowerCase()===i)?a:{...a,colors:[i,...a.colors]});return hs(s,r.activePaletteId),{palettes:s}})},removeColor:(e,n)=>{t(i=>{const r=i.palettes.map(s=>s.id===e?{...s,colors:s.colors.filter(a=>a!==n)}:s);return hs(r,i.activePaletteId),{palettes:r}})}})),e2=["#FFE0BD","#FFCB94","#E6B17A","#C39979","#A87B5C","#7A4F2A","#5B3A1F","#3D2614","#FF6B6B","#D54B4B","#A82F38","#7A1A1A","#FFB14A","#E68E2E","#B96B16","#7A4416","#FFEC8B","#F5C04A","#C98E20","#7E5A12","#A6E3C8","#3FB6A8","#1F7A70","#0E4A45","#7EC8F5","#3B5BA3","#1F3262","#0E1A3A","#C7A2F0","#7E4FB8","#4A2C6E","#291643","#FFC0E2","#FF7AB6","#B3437E","#6E1E50","#FFFFFF","#FFFBEA","#F7E6CF","#E9D6B4","#B07B47","#7B7F87","#3B3344","#2A2138","#1B1424","#000000"],Km=()=>{const t=ve(N=>N.color),e=ve(N=>N.setColor),n=ve(N=>N.recentColors),i=pi(N=>N.palettes),r=pi(N=>N.activePaletteId),s=pi(N=>N.createPalette),a=pi(N=>N.removePalette),o=pi(N=>N.renamePalette),l=pi(N=>N.setActivePalette),c=pi(N=>N.addColor),h=pi(N=>N.removeColor),{askConfirm:p,askSaveColor:d}=lo(),m=gc(),[v,S]=me.useState(!1),[x,f]=me.useState(t),[y,g]=me.useState("swatches"),[E,M]=me.useState(""),[P,b]=me.useState(null),[C,_]=me.useState(""),T=i.find(N=>N.id===r)??null;me.useEffect(()=>f(t),[t]);const G=async()=>{let N=i.map(F=>({id:F.id,name:F.name})),Z=r;if(N.length===0){if(!await p({title:"Create Palette",message:'You need a palette first. Create "My Colors" now?',confirmLabel:"Create"}))return;const H=s("My Colors");N=[{id:H.id,name:H.name}],Z=H.id}const q=await d({color:t,paletteOptions:N,defaultPaletteId:Z});q&&(c(q.paletteId,t),m.show(`Color ${t.toUpperCase()} saved.`))},K=async()=>{const N=E.trim();if(!N||!await p({title:"Create Palette",message:`Create palette "${N}"?`,confirmLabel:"Create"}))return;const q=s(N);l(q.id),M(""),m.show(`Palette "${N}" created.`)},I=async(N,Z)=>{await p({title:"Delete Palette",message:`Delete palette "${Z}" and all saved colors in it?`,confirmLabel:"Delete",variant:"danger"})&&a(N)},k=async(N,Z)=>{await p({title:"Remove Color",message:`Remove ${Z.toUpperCase()} from this palette?`,confirmLabel:"Remove",variant:"danger"})&&h(N,Z)};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsx("div",{className:"pixel-title-bar",children:u.jsx("span",{children:"COLORS"})}),u.jsxs("div",{className:"p-2 bg-bg-desk2 flex items-center gap-2 border-b-[3px] border-ink",children:[u.jsx("div",{className:"w-12 h-12 border-[3px] border-ink shrink-0",style:{background:t}}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"panel-label mb-1",children:"Hex"}),u.jsx("input",{className:"pixel-input w-full",value:x,onChange:N=>f(N.target.value),onBlur:()=>{/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(x)?e(x):f(t)}})]}),u.jsx("button",{className:"pixel-button icon shrink-0",title:"Open native picker",onClick:()=>S(N=>!N),children:u.jsx(t2,{})})]}),v&&u.jsx("div",{className:"p-2 bg-bg-desk2 border-b-[3px] border-ink",children:u.jsx("input",{type:"color",value:t.slice(0,7),onChange:N=>{e(N.target.value),f(N.target.value)},className:"w-full h-12"})}),u.jsxs("div",{className:"flex border-b-[3px] border-ink bg-bg-desk",children:[u.jsx(Zm,{active:y==="swatches",onClick:()=>g("swatches"),children:"Swatches"}),u.jsx(Zm,{active:y==="library",onClick:()=>g("library"),children:"My palettes"})]}),y==="swatches"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"p-2 grid grid-cols-8 gap-1 bg-bg-desk flex-1 min-h-0 overflow-y-auto pixel-scroll",children:e2.map(N=>u.jsx(Ru,{color:N,active:N.toLowerCase()===t.toLowerCase(),onClick:()=>e(N)},N))}),n.length>0&&u.jsxs("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk2",children:[u.jsx("div",{className:"panel-label mb-1",children:"Recent"}),u.jsx("div",{className:"grid grid-cols-8 gap-1",children:n.slice(0,8).map((N,Z)=>u.jsx(Ru,{color:N,active:N.toLowerCase()===t.toLowerCase(),onClick:()=>e(N)},N+Z))})]}),u.jsx("div",{className:"p-2 border-t-[3px] border-ink bg-bg-desk2",children:u.jsxs("button",{onClick:G,className:"pixel-button compact teal w-full flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"save",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Save color"})]})})]}):u.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-2 space-y-3",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("div",{className:"panel-label",children:"New palette"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{className:"pixel-input flex-1 min-w-0",placeholder:"Palette name…",value:E,onChange:N=>M(N.target.value),onKeyDown:N=>N.key==="Enter"&&K()}),u.jsx("button",{onClick:K,disabled:!E.trim(),className:"pixel-button compact teal shrink-0",children:u.jsx("span",{className:"panel-btn-text",children:"Add"})})]})]}),i.length===0?u.jsx("p",{className:"panel-text text-ink/70 text-center py-4",children:"No palettes yet. Create one to save your favorite colors."}):i.map(N=>u.jsxs("div",{className:`border-[3px] border-ink p-2 ${N.id===r?"bg-accent-yellow":"bg-accent-cream"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[P===N.id?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:C,onChange:Z=>_(Z.target.value),onBlur:()=>{C.trim()&&o(N.id,C),b(null)},onKeyDown:Z=>{Z.key==="Enter"&&(C.trim()&&o(N.id,C),b(null)),Z.key==="Escape"&&b(null)}}):u.jsx("button",{className:"panel-text font-bold flex-1 text-left truncate",onClick:()=>l(N.id),children:N.name}),u.jsx("button",{onClick:()=>{b(N.id),_(N.name)},className:"pixel-button compact icon",title:"Rename palette",children:u.jsx(Ne,{name:"pencil",size:10})}),u.jsx("button",{onClick:()=>I(N.id,N.name),className:"pixel-button compact icon danger",children:u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:10})})]}),N.colors.length===0?u.jsx("p",{className:"panel-text text-ink/60",children:"No colors saved yet."}):u.jsx("div",{className:"grid grid-cols-8 gap-1",children:N.colors.map(Z=>u.jsx(Ru,{color:Z,active:Z.toLowerCase()===t.toLowerCase(),onClick:()=>e(Z),onRemove:()=>k(N.id,Z)},Z))})]},N.id)),T&&u.jsxs("button",{onClick:G,className:"pixel-button compact purple w-full flex items-center justify-center gap-1",children:[u.jsx(Ne,{name:"save",color:"#FFFBEA",size:12}),u.jsxs("span",{className:"panel-btn-text",children:["Save current to ",T.name]})]})]})]})},Zm=({active:t,onClick:e,children:n})=>u.jsx("button",{onClick:e,className:`flex-1 py-2 panel-btn-text border-r-[3px] last:border-r-0 border-ink ${t?"bg-accent-yellow":"bg-bg-desk2 hover:bg-accent-cream"}`,children:n}),Ru=({color:t,active:e,onClick:n,onRemove:i})=>u.jsxs("div",{className:"relative group",children:[u.jsx("button",{onClick:n,className:"aspect-square w-full border-2",style:{background:t,borderColor:e?"#D54B4B":"#2A2138",boxShadow:e?"inset 0 0 0 2px #FFFBEA":"none"},title:t}),i&&u.jsx("button",{onClick:r=>{r.stopPropagation(),i()},className:"absolute -top-1 -right-1 hidden group-hover:flex w-4 h-4 bg-accent-red border border-ink items-center justify-center text-[10px] text-accent-cream leading-none",title:"Remove color",children:"×"})]}),t2=()=>u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",shapeRendering:"crispEdges",children:[u.jsx("rect",{x:"6",y:"2",width:"4",height:"3",fill:"#D54B4B"}),u.jsx("rect",{x:"10",y:"3",width:"3",height:"4",fill:"#F5C04A"}),u.jsx("rect",{x:"11",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),u.jsx("rect",{x:"8",y:"11",width:"4",height:"3",fill:"#7E4FB8"}),u.jsx("rect",{x:"3",y:"11",width:"4",height:"3",fill:"#3B5BA3"}),u.jsx("rect",{x:"2",y:"7",width:"3",height:"4",fill:"#3FB6A8"}),u.jsx("rect",{x:"3",y:"3",width:"3",height:"4",fill:"#FF7AB6"}),u.jsx("rect",{x:"6",y:"6",width:"4",height:"4",fill:"#FFFBEA"})]}),n2=({dataUrl:t,model:e,width:n=88,height:i=132})=>{const[r,s]=me.useState(null);return me.useEffect(()=>{if(!t){s(null);return}const a=jA(e),o=new Image;o.onload=()=>{const l=a.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(o,0,0),s(ta(a))},o.src=t},[t,e]),u.jsx("div",{className:"grid place-items-center overflow-hidden",style:{width:"100%",height:i+8,background:"linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)"},children:u.jsx(Vf,{imageUrl:r,model:e,width:n,height:i,pose:"idle",rotate:!1,zoom:.9})})},Qm=()=>{const t=ve(R=>R.model),e=ve(R=>R.layers),n=ve(R=>R.activeLayerId),i=ve(R=>R.addLayerFromCanvas),r=ve(R=>R.snapshot),s=jn(R=>R.folders),a=jn(R=>R.presets),o=jn(R=>R.remove),l=jn(R=>R.rename),c=jn(R=>R.moveToFolder),h=jn(R=>R.addFolder),p=jn(R=>R.renameFolder),d=jn(R=>R.removeFolder),{promptSavePreset:m}=p0(),{askConfirm:v}=lo(),S=gc(),[x,f]=me.useState(null),[y,g]=me.useState(new Set),[E,M]=me.useState(null),[P,b]=me.useState(null),[C,_]=me.useState(""),[T,G]=me.useState(""),K=e.find(R=>R.id===n)??null,I=me.useMemo(()=>a.filter(R=>!R.folderId),[a]),k=me.useMemo(()=>{const R=new Map;for(const B of s)R.set(B.id,[]);for(const B of a)B.folderId&&R.has(B.folderId)&&R.get(B.folderId).push(B);return R},[s,a]),N=async()=>{if(!K)return;const R=await m({defaultName:K.name||"My Preset",model:t,dataUrl:d0(K),defaultFolderId:x});R&&S.show(`Preset "${R.name}" saved.`)},Z=async()=>{const R=T.trim();!R||!await v({title:"Create Folder",message:`Create folder "${R}"?`,confirmLabel:"Create"})||(h(R),G(""),S.show(`Folder "${R}" created.`))},q=async(R,B)=>{const re=await Ir(R.dataUrl);if(B==="merge"){const oe=e.find(Me=>Me.id===n);if(!oe||oe.locked||!await v({title:"Merge Preset",message:`Merge "${R.name}" into the active layer?`,confirmLabel:"Merge"}))return;r(),$t(oe.canvas).drawImage(re,0,0),ve.setState(Me=>({layers:[...Me.layers]}));return}i(Ta(re),R.name)},F=async R=>{await v({title:"Delete Preset",message:`Delete preset "${R.name}"? This cannot be undone.`,confirmLabel:"Delete",variant:"danger"})&&o(R.id)},H=async R=>{var oe;const B=((oe=k.get(R.id))==null?void 0:oe.length)??0;await v({title:"Delete Folder",message:B>0?`Delete folder "${R.name}"? ${B} preset(s) will move to Unfiled.`:`Delete folder "${R.name}"?`,confirmLabel:"Delete",variant:"danger"})&&d(R.id)},X=R=>{g(B=>{const re=new Set(B);return re.has(R)?re.delete(R):re.add(R),re})};return u.jsxs("div",{className:"pixel-window flex flex-col min-h-0 h-full",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"MY PRESETS"}),u.jsx("span",{className:"ml-auto panel-label text-accent-cream/90",children:a.length})]}),u.jsxs("div",{className:"p-3 border-b-[3px] border-ink bg-bg-desk2 space-y-2",children:[u.jsx("div",{className:"panel-label",children:"Save active layer"}),u.jsx("div",{className:"flex gap-2",children:u.jsxs("button",{onClick:N,disabled:!K,className:"pixel-button compact purple flex items-center gap-1 shrink-0 flex-1 justify-center",title:"Save the selected layer as a reusable preset",children:[u.jsx(Ne,{name:"star",color:"#FFFBEA",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Save preset"})]})}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Default folder"}),u.jsxs("select",{className:"pixel-input w-full",value:x??"",onChange:R=>f(R.target.value?R.target.value:null),children:[u.jsx("option",{value:"",children:"Unfiled"}),s.map(R=>u.jsx("option",{value:R.id,children:R.name},R.id))]})]}),!K&&u.jsx("p",{className:"panel-text text-ink/70",children:"Select a layer to save it as a preset."})]}),u.jsxs("div",{className:"p-3 border-b-[3px] border-ink bg-bg-desk space-y-2",children:[u.jsx("div",{className:"panel-label",children:"New folder"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{className:"pixel-input flex-1 min-w-0",placeholder:"Folder name…",value:T,onChange:R=>G(R.target.value),onKeyDown:R=>R.key==="Enter"&&Z()}),u.jsxs("button",{onClick:Z,disabled:!T.trim(),className:"pixel-button compact teal flex items-center gap-1 shrink-0",children:[u.jsx(Ne,{name:"folder",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Add"})]})]})]}),u.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-3",children:a.length===0&&s.length===0?u.jsxs("div",{className:"text-center py-8 px-3",children:[u.jsx(Ne,{name:"star",size:28,className:"mb-2 opacity-40"}),u.jsx("div",{className:"panel-label mb-2",children:"No presets yet"}),u.jsx("p",{className:"panel-text text-ink/75",children:"Paint on a layer, create folders to organize, then save presets here. Apply them to any skin as a new layer."})]}):u.jsxs("div",{className:"space-y-4",children:[s.map(R=>u.jsx(i2,{folder:R,presets:k.get(R.id)??[],model:t,collapsed:y.has(R.id),renaming:P===R.id,renameValue:C,onToggle:()=>X(R.id),onStartRename:()=>{b(R.id),_(R.name)},onChangeRename:_,onCommitRename:()=>{C.trim()&&p(R.id,C),b(null)},onCancelRename:()=>b(null),onDelete:()=>H(R),renamingPresetId:E,onStartPresetRename:(B,re)=>{M(B),_(re)},onCommitPresetRename:B=>{C.trim()&&l(B,C),M(null)},onCancelPresetRename:()=>M(null),onAdd:B=>q(B,"new-layer"),onMerge:B=>q(B,"merge"),onDeletePreset:F,folders:s,onMovePreset:c},R.id)),I.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"panel-label mb-2 flex items-center gap-2",children:[u.jsx(Ne,{name:"folder",size:14}),"Unfiled",u.jsxs("span",{className:"text-ink/60",children:["(",I.length,")"]})]}),u.jsx("div",{className:"grid grid-cols-1 gap-3",children:I.map(R=>u.jsx(g0,{preset:R,model:t,folders:s,renaming:E===R.id,renameValue:C,onStartRename:()=>{M(R.id),_(R.name)},onChangeRename:_,onCommitRename:()=>{C.trim()&&l(R.id,C),M(null)},onCancelRename:()=>M(null),onAdd:()=>q(R,"new-layer"),onMerge:()=>q(R,"merge"),onDelete:()=>F(R),onMoveFolder:B=>c(R.id,B)},R.id))})]})]})})]})},i2=({folder:t,presets:e,model:n,collapsed:i,renaming:r,renameValue:s,onToggle:a,onStartRename:o,onChangeRename:l,onCommitRename:c,onCancelRename:h,onDelete:p,renamingPresetId:d,onStartPresetRename:m,onCommitPresetRename:v,onCancelPresetRename:S,onAdd:x,onMerge:f,onDeletePreset:y,folders:g,onMovePreset:E})=>u.jsxs("div",{className:"border-[3px] border-ink bg-accent-cream/50",children:[u.jsxs("div",{className:"flex items-center gap-2 p-2 bg-accent-yellow border-b-[3px] border-ink",children:[u.jsx("button",{onClick:a,className:"pixel-button compact icon shrink-0",title:i?"Expand":"Collapse",children:u.jsx(Ne,{name:i?"down":"up",size:12})}),u.jsx(Ne,{name:"folder-big",size:16}),r?u.jsx("input",{autoFocus:!0,className:"pixel-input flex-1 min-w-0",value:s,onChange:M=>l(M.target.value),onBlur:c,onKeyDown:M=>{M.key==="Enter"&&c(),M.key==="Escape"&&h()}}):u.jsx("button",{className:"panel-text flex-1 truncate text-left font-bold",onClick:o,title:"Click to rename folder",children:t.name}),u.jsx("span",{className:"panel-text text-ink/60 shrink-0",children:e.length}),u.jsx("button",{onClick:p,className:"pixel-button compact icon danger shrink-0",title:"Delete folder",children:u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:10})})]}),!i&&u.jsx("div",{className:"p-2 space-y-3",children:e.length===0?u.jsx("p",{className:"panel-text text-ink/60 text-center py-2",children:"No presets in this folder yet."}):e.map(M=>u.jsx(g0,{preset:M,model:n,folders:g,renaming:d===M.id,renameValue:s,onStartRename:()=>m(M.id,M.name),onChangeRename:l,onCommitRename:()=>v(M.id),onCancelRename:S,onAdd:()=>x(M),onMerge:()=>f(M),onDelete:()=>y(M),onMoveFolder:P=>E(M.id,P)},M.id))})]}),g0=({preset:t,model:e,folders:n,renaming:i,renameValue:r,onStartRename:s,onChangeRename:a,onCommitRename:o,onCancelRename:l,onAdd:c,onMerge:h,onDelete:p,onMoveFolder:d})=>u.jsxs("div",{className:"pixel-card p-0",children:[u.jsx(n2,{dataUrl:t.dataUrl,model:e,width:88,height:132}),u.jsxs("div",{className:"p-2 bg-accent-yellow border-t-[3px] border-ink space-y-2",children:[i?u.jsx("input",{autoFocus:!0,className:"pixel-input w-full",value:r,onChange:m=>a(m.target.value),onBlur:o,onKeyDown:m=>{m.key==="Enter"&&o(),m.key==="Escape"&&l()}}):u.jsx("button",{className:"panel-text w-full truncate text-left font-bold",onClick:s,title:"Click to rename",children:t.name}),u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:"pixel-chip shrink-0 panel-btn-text",style:{background:t.model==="slim"?"#3FB6A8":"#F5C04A",color:"#2A2138",fontSize:14},children:t.model}),n.length>0&&u.jsxs("select",{className:"pixel-input flex-1 min-w-0 text-base py-1",value:t.folderId??"",onChange:m=>d(m.target.value?m.target.value:null),title:"Move to folder",children:[u.jsx("option",{value:"",children:"Unfiled"}),n.map(m=>u.jsx("option",{value:m.id,children:m.name},m.id))]})]})]}),u.jsxs("div",{className:"grid grid-cols-3 border-t-[3px] border-ink",children:[u.jsxs("button",{onClick:c,className:"bg-accent-cream hover:bg-[#FFF1D4] border-r-[3px] border-ink p-2 flex items-center justify-center gap-1",title:"Add as new layer",children:[u.jsx(Ne,{name:"plus",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Layer"})]}),u.jsxs("button",{onClick:h,className:"bg-accent-teal hover:brightness-110 border-r-[3px] border-ink p-2 flex items-center justify-center gap-1",title:"Merge into active layer",children:[u.jsx(Ne,{name:"merge",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Merge"})]}),u.jsxs("button",{onClick:p,className:"bg-accent-red text-accent-cream p-2 flex items-center justify-center gap-1",title:"Delete preset",children:[u.jsx(Ne,{name:"trash",color:"#FFFBEA",size:12}),u.jsx("span",{className:"panel-btn-text",children:"Del"})]})]})]}),r2={0:"",1:"OUT",2:"OFF"},s2=[{key:"head",part:t=>t.head},{key:"body",part:t=>t.body},{key:"right_arm",part:t=>t.rightArm},{key:"left_arm",part:t=>t.leftArm},{key:"right_leg",part:t=>t.rightLeg},{key:"left_leg",part:t=>t.leftLeg}],a2=(t,e)=>{for(const{key:n,part:i}of s2){const r=e[n]??0,s=i(t);s.innerLayer.visible=r<2,s.outerLayer.visible=r<1}},o2={head:"head_overlay",body:"body_overlay",right_arm:"right_arm_overlay",left_arm:"left_arm_overlay",right_leg:"right_leg_overlay",left_leg:"left_leg_overlay",head_overlay:"head_overlay",body_overlay:"body_overlay",right_arm_overlay:"right_arm_overlay",left_arm_overlay:"left_arm_overlay",right_leg_overlay:"right_leg_overlay",left_leg_overlay:"left_leg_overlay"},Jm=(t,e,n,i)=>{t.traverse(r=>{r.isMesh&&i.push({mesh:r,bodyPart:e,layer:n})})},l2=(t,e)=>{const n=[],i=[{key:"head",inner:t.head.innerLayer,outer:t.head.outerLayer},{key:"body",inner:t.body.innerLayer,outer:t.body.outerLayer},{key:"right_arm",inner:t.rightArm.innerLayer,outer:t.rightArm.outerLayer},{key:"left_arm",inner:t.leftArm.innerLayer,outer:t.leftArm.outerLayer},{key:"right_leg",inner:t.rightLeg.innerLayer,outer:t.rightLeg.outerLayer},{key:"left_leg",inner:t.leftLeg.innerLayer,outer:t.leftLeg.outerLayer}];for(const r of i){const s=e[r.key]??0;s<2&&Jm(r.inner,r.key,"inner",n),s<1&&Jm(r.outer,r.key,"outer",n)}return n},c2=(t,e)=>{const n=Math.min(lt-1,Math.max(0,Math.floor(t*lt))),i=Math.min(dn-1,Math.max(0,Math.floor((1-e)*dn)));return{px:n,py:i}},u2=(t,e,n,i,r)=>{const s=e.getBoundingClientRect(),a=new ye((n-s.left)/s.width*2-1,-((i-s.top)/s.height)*2+1),o=new kb;o.setFromCamera(a,t);const l=r.map(h=>h.mesh),c=o.intersectObjects(l,!1);if(c.length===0)return null;for(const h of c){const p=r.find(x=>x.mesh===h.object);if(!p||!h.uv)continue;const d=`${p.bodyPart}_overlay`,m=p.layer==="outer"?o2[p.bodyPart]??d:p.bodyPart,{px:v,py:S}=c2(h.uv.x,h.uv.y);return{px:v,py:S,bodyPart:m,layer:p.layer}}return null},eg=(t,e,n,i,r,s,a)=>{if(e<0||n<0||e>=lt||n>=dn)return;const o=(n*lt+e)*4;t[o]=i,t[o+1]=r,t[o+2]=s,t[o+3]=a},d2=(t,e,n,i,r)=>{const s=$t(t),a=s.getImageData(0,0,lt,dn),[o,l,c,h]=f0(i.color),p=Math.max(1,Math.floor(i.size)),d=Math.floor(p/2);for(let m=0;m<p;m++)for(let v=0;v<p;v++){const S=e-d+v,x=n-d+m;if(!(r&&(S<0||x<0||S>=lt||x>=dn||!r[x*lt+S]))&&(eg(a.data,S,x,o,l,c,h),i.mirror)){const f=v0(S,x);if(f){if(r&&!r[f.y*lt+f.x])continue;eg(a.data,f.x,f.y,o,l,c,h)}}}s.putImageData(a,0,0)},f2=(t,e,n,i=1,r=!1)=>{const s=$t(t);s.save(),s.globalCompositeOperation="destination-out",s.fillStyle="#000";const a=Math.floor(i/2);if(s.fillRect(e-a,n-a,i,i),r){const o=v0(e,n);o&&s.fillRect(o.x-a,o.y-a,i,i)}s.restore()},v0=(t,e)=>{const n=[{x:8,y:8,w:8,h:8},{x:40,y:8,w:8,h:8},{x:20,y:20,w:8,h:12},{x:20,y:36,w:8,h:12}];for(const i of n)if(t>=i.x&&t<i.x+i.w&&e>=i.y&&e<i.y+i.h){const r=t-i.x;return{x:i.x+(i.w-1-r),y:e}}return null},h2=(t,e,n,i,r)=>{if(e<0||n<0||e>=lt||n>=dn||r&&!r[n*lt+e])return;const s=$t(t),a=s.getImageData(0,0,lt,dn),o=a.data,l=(g,E)=>(E*lt+g)*4,c=l(e,n),h=o[c],p=o[c+1],d=o[c+2],m=o[c+3],[v,S,x,f]=f0(i);if(h===v&&p===S&&d===x&&m===f)return;const y=[[e,n]];for(;y.length;){const[g,E]=y.pop();if(g<0||E<0||g>=lt||E>=dn||r&&!r[E*lt+g])continue;const M=l(g,E);o[M]!==h||o[M+1]!==p||o[M+2]!==d||o[M+3]!==m||(o[M]=v,o[M+1]=S,o[M+2]=x,o[M+3]=f,y.push([g+1,E],[g-1,E],[g,E+1],[g,E-1]))}s.putImageData(a,0,0)},tg=(t,e,n,i,r=1,s)=>{const a=$t(t),o=a.getImageData(0,0,lt,dn),l=o.data,c=Math.floor(r/2);for(let h=0;h<r;h++)for(let p=0;p<r;p++){const d=e-c+p,m=n-c+h;if(d<0||m<0||d>=lt||m>=dn||s&&!s[m*lt+d])continue;const v=(m*lt+d)*4;if(l[v+3]===0)continue;const S=1+i;l[v]=Math.max(0,Math.min(255,Math.round(l[v]*S))),l[v+1]=Math.max(0,Math.min(255,Math.round(l[v+1]*S))),l[v+2]=Math.max(0,Math.min(255,Math.round(l[v+2]*S)))}a.putImageData(o,0,0)},p2=(t,e,n,i,r,s)=>{let a=e,o=n;const l=Math.abs(i-e),c=-Math.abs(r-n),h=e<i?1:-1,p=n<r?1:-1;let d=l+c;for(;s(t,a,o),!(a===i&&o===r);){const m=2*d;m>=c&&(d+=c,a+=h),m<=l&&(d+=l,o+=p)}},x0=(t,e,n)=>{const i=ve.getState(),r=i.layers.find(v=>v.id===i.activeLayerId);if(!r||r.locked)return!1;const s=LA(i.model);if(!s[e*lt+t])return!1;const{tool:a,color:o,brushSize:l,mirror:c,setColor:h,pushRecentColor:p,setTool:d}=i;if(a==="eyedropper"){const v=HA(n,t,e);if(v.length===9&&v.endsWith("00"))return!1;const S="#"+v.slice(1,7);return h(S),p(S),d("pencil"),!0}return a==="fill"?(h2(r.canvas,t,e,o,s),ve.setState(v=>({layers:[...v.layers]})),!0):((()=>{a==="pencil"?d2(r.canvas,t,e,{color:o,size:l,mirror:c},s):a==="eraser"?f2(r.canvas,t,e,l,c):a==="shade"?tg(r.canvas,t,e,-.15,l,s):a==="lighten"&&tg(r.canvas,t,e,.18,l,s),ve.setState(v=>({layers:[...v.layers]}))})(),!0)},m2=(t,e,n,i,r)=>{const s=ve.getState().layers.find(a=>a.id===ve.getState().activeLayerId);s&&p2(s.canvas,t,e,n,i,(a,o,l)=>{x0(o,l,r)})},g2=({model:t,className:e})=>{const n=me.useRef(null),i=me.useRef(null),[r,s]=me.useState({w:400,h:480}),[a,o]=me.useState(!1),l=ve(C=>C.layers),c=ve(C=>C.partLayerModes),h=ve(C=>C.previewBackground),p=ve(C=>C.tool),d=ve(C=>C.color),m=ve(C=>C.pushRecentColor),v=ve(C=>C.snapshot),S=me.useRef(!1),x=me.useRef(null),f=me.useRef(!1),y=me.useRef(null);me.useEffect(()=>{const C=n.current;if(!C)return;const _=new ResizeObserver(()=>{const T=C.getBoundingClientRect();s({w:Math.max(200,Math.floor(T.width)),h:Math.max(240,Math.floor(T.height))})});return _.observe(C),()=>_.disconnect()},[]),me.useEffect(()=>{if(!n.current)return;let C=null;try{const _=document.createElement("canvas");_.style.width="100%",_.style.height="100%",_.style.imageRendering="pixelated",_.style.touchAction="none",n.current.innerHTML="",n.current.appendChild(_),C=new o0({canvas:_,width:r.w,height:r.h,preserveDrawingBuffer:!0}),C.zoom=.92,C.fov=50,C.background=null,C.autoRotate=!1,C.animation=null,C.controls.enablePan=!1,C.controls.enableZoom=!0,C.controls.enableRotate=!0,C.controls.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.ROTATE},C.controls.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_ROTATE},i.current=C}catch(_){console.warn("SkinPaintCanvas init failed",_),o(!0)}return()=>{C==null||C.dispose(),i.current=null}},[]),me.useEffect(()=>{const C=i.current;C&&C.setSize(r.w,r.h)},[r.w,r.h]),me.useEffect(()=>{const C=i.current;if(!C)return;const _=to(l);y.current=_;try{C.loadSkin(_,{model:t==="slim"?"slim":"default"})}catch{C.loadSkin(ta(_),{model:t==="slim"?"slim":"default"})}},[l,t]),me.useEffect(()=>{const C=i.current;C&&(a2(C.playerObject.skin,c),C.render())},[c]);const g=me.useRef(p),E=me.useRef(d),M=me.useRef(c);g.current=p,E.current=d,M.current=c;const P=(C,_)=>{const T=i.current;if(!T)return null;const G=l2(T.playerObject.skin,M.current);return u2(T.camera,T.canvas,C,_,G)},b=(C,_)=>{const T=y.current,G=P(C,_);return!G||!T?null:(x0(G.px,G.py,T)&&g.current!=="eyedropper"&&g.current!=="fill"&&(f.current=!0),G)};return me.useEffect(()=>{const C=i.current;if(!C||a)return;const _=C.canvas,T=I=>{if(I.button!==0)return;if(!P(I.clientX,I.clientY)){S.current=!1,C.controls.enabled=!0;return}I.preventDefault(),I.stopPropagation(),_.setPointerCapture(I.pointerId),C.controls.enabled=!1,g.current!=="eyedropper"&&v(),S.current=!0,f.current=!1,x.current=null;const N=b(I.clientX,I.clientY);N&&(x.current={x:N.px,y:N.py})},G=I=>{if(!S.current||g.current==="fill"||g.current==="eyedropper")return;const k=b(I.clientX,I.clientY);if(!k)return;const N=x.current,Z=y.current;N&&Z&&(N.x!==k.px||N.y!==k.py)&&m2(N.x,N.y,k.px,k.py,Z),x.current={x:k.px,y:k.py}},K=()=>{S.current=!1,x.current=null,C.controls.enabled=!0,f.current&&E.current&&m(E.current),f.current=!1};return _.addEventListener("pointerdown",T),_.addEventListener("pointermove",G),_.addEventListener("pointerup",K),_.addEventListener("pointercancel",K),_.addEventListener("contextmenu",I=>I.preventDefault()),()=>{_.removeEventListener("pointerdown",T),_.removeEventListener("pointermove",G),_.removeEventListener("pointerup",K),_.removeEventListener("pointercancel",K)}},[a,m,v]),a?u.jsx("div",{className:`h-full w-full grid place-items-center panel-text text-ink p-4 text-center ${e??""}`,children:"3D paint view unavailable on this device."}):u.jsx(l0,{backgroundId:h,className:`border-[3px] border-ink shadow-[4px_4px_0_0_#2A2138] ${e??""}`,inset:12,children:u.jsx("div",{ref:n,className:"h-full w-full min-h-0",style:{touchAction:"none"}})})},v2=()=>{const t=ve(n=>n.previewBackground),e=ve(n=>n.setPreviewBackground);return u.jsxs("div",{className:"px-2 py-2 border-b-[3px] border-ink bg-bg-desk flex items-center gap-2 overflow-x-auto pixel-scroll",children:[u.jsx("span",{className:"panel-label text-[10px] shrink-0 text-accent-cream/80",children:"SCENE"}),Ud.map(n=>u.jsx("button",{type:"button",onClick:()=>e(n.id),className:`shrink-0 w-12 h-9 border-[2px] border-ink overflow-hidden ${t===n.id?"ring-2 ring-accent-gold ring-offset-1 ring-offset-bg-desk":"opacity-85 hover:opacity-100"}`,title:n.label,children:n.url?u.jsx("img",{src:n.url,alt:"",className:"w-full h-full object-cover",draggable:!1}):u.jsx("div",{className:"w-full h-full",style:{background:"linear-gradient(180deg, #8EC5E8 0%, #6BAF7A 100%)"}})},n.id))]})},x2=({editId:t,onExit:e,onSaved:n})=>{const i=ve(I=>I.layers),r=ve(I=>I.model),s=ve(I=>I.setModel),a=ve(I=>I.reset),o=ve(I=>I.loadSkinAsBase),l=ve(I=>I.setTool),c=ve(I=>I.activePart),h=ve(I=>I.partLayerModes),p=ve(I=>I.cyclePartLayerMode),d=ve(I=>I.resetPartLayerModes),m=ve(I=>I.undo),v=ve(I=>I.redo),{askConfirm:S}=lo(),x=Rr(I=>I.skins),f=Rr(I=>I.save),y=Rr(I=>I.update),[g,E]=me.useState("Untitled Skin"),M=me.useRef(null),[P,b]=me.useState(!1),[C,_]=me.useState("tools");me.useEffect(()=>{let I=!1;return(async()=>{if(t){const k=x.find(Z=>Z.id===t);if(!k||I)return;E(k.name),s(k.model);const N=await Ir(k.dataUrl);if(I)return;o(N)}else a("slim"),s("slim")})(),()=>{I=!0}},[t]),me.useEffect(()=>{const I=k=>{var Z;if(((Z=k.target)==null?void 0:Z.tagName)==="INPUT")return;if((k.ctrlKey||k.metaKey)&&k.key.toLowerCase()==="z"){k.preventDefault(),k.shiftKey?v():m();return}if((k.ctrlKey||k.metaKey)&&k.key.toLowerCase()==="y"){k.preventDefault(),v();return}const N=k.key.toLowerCase();N==="b"&&l("pencil"),N==="e"&&l("eraser"),N==="g"&&l("fill"),N==="i"&&l("eyedropper"),N==="s"&&l("shade"),N==="l"&&l("lighten")};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[l,m,v]);const T=async()=>{const I=ta(to(i));await S({title:"Save Skin",message:`Save "${g}" to your gallery?`,confirmLabel:"Save"})&&(t?y(t,{name:g,model:r,dataUrl:I}):f({name:g,model:r,dataUrl:I}),n(g))},G=async()=>{await S({title:"Download Skin",message:`Download "${g||"minecraft-skin"}.png"?`,confirmLabel:"Download"})&&kA(to(i),g||"minecraft-skin")},K=async I=>{try{const k=await Ir(URL.createObjectURL(I));ve.getState().addLayerFromCanvas(k,I.name.replace(/\.[^.]+$/,""))}catch(k){console.warn(k)}};return u.jsxs("div",{className:"h-full w-full p-1 sm:p-2 lg:p-3 grid gap-2 grid-rows-[auto_1fr] overflow-hidden min-h-0",children:[u.jsx(_2,{name:g,onName:E,model:r,setModel:I=>s(I),onExit:e,onSave:T,onDownload:G,onUpload:I=>K(I),fileInputRef:M,presetsOpen:P,setPresetsOpen:b}),u.jsxs("div",{className:"grid gap-2 min-h-0 grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_280px_320px]",children:[u.jsxs("div",{className:"hidden xl:flex flex-col gap-2 min-h-0",children:[u.jsx(qm,{}),u.jsx("div",{className:"min-h-[200px] flex-1 min-h-0",children:u.jsx(Km,{})})]}),u.jsxs("div",{className:"flex flex-col gap-2 min-h-0",children:[u.jsxs("div",{className:"pixel-window flex-1 min-h-0 flex flex-col",children:[u.jsxs("div",{className:"pixel-title-bar flex-wrap gap-y-1",children:[u.jsx("span",{children:"MODEL PAINT"}),u.jsx("span",{className:"ml-auto panel-label text-accent-cream/80 text-sm",children:"Tap/click paint · Right-click rotate · Scroll/pinch zoom"})]}),u.jsx(y2,{activePart:c,partLayerModes:h,onAll:()=>d(),onPart:I=>p(I)}),u.jsx(v2,{}),u.jsx("div",{className:"flex-1 min-h-0 p-2 bg-bg-desk2",children:u.jsx(g2,{model:r})})]}),u.jsxs("div",{className:"xl:hidden pixel-window",children:[u.jsxs("div",{className:"px-2 py-2 bg-bg-desk border-b-[3px] border-ink flex gap-1 flex-wrap",children:[u.jsx(il,{active:C==="tools",label:"TOOLS",onClick:()=>_("tools")}),u.jsx(il,{active:C==="colors",label:"COLORS",onClick:()=>_("colors")}),u.jsx(il,{active:C==="layers",label:"LAYERS",onClick:()=>_("layers")}),u.jsx(il,{active:C==="preview",label:"PREVIEW",onClick:()=>_("preview")})]}),u.jsxs("div",{className:"h-[38vh] min-h-[220px] max-h-[420px]",children:[C==="tools"&&u.jsx(qm,{}),C==="colors"&&u.jsx(Km,{}),C==="layers"&&u.jsx(Ym,{}),C==="preview"&&u.jsx($m,{})]})]})]}),u.jsxs("div",{className:"hidden xl:flex flex-col gap-2 min-h-0",children:[u.jsx("div",{className:"flex-1 min-h-0",children:u.jsx(Ym,{})}),u.jsx($m,{})]}),u.jsx("div",{className:"hidden xl:flex flex-col min-h-0 flex-1",children:u.jsx(Qm,{})})]}),P&&u.jsx("div",{className:"fixed inset-0 z-40 bg-bg-deep/70 grid place-items-center p-4 xl:hidden",children:u.jsx("div",{className:"w-[640px] max-w-[96vw] h-[80vh]",children:u.jsxs("div",{className:"relative h-full",children:[u.jsx(Qm,{}),u.jsx("button",{className:"absolute top-2 right-2 pixel-button icon danger",onClick:()=>b(!1),children:u.jsx(Ne,{name:"x",color:"#FFFBEA"})})]})})})]})},_2=t=>u.jsxs("div",{className:"pixel-window",children:[u.jsxs("div",{className:"pixel-title-bar",children:[u.jsx("span",{children:"EDITOR // /skins/"}),u.jsx("input",{className:"pixel-input ml-2 flex-1 min-w-0 max-w-[220px]",value:t.name,onChange:e=>t.onName(e.target.value)}),u.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-wrap",children:[u.jsx("button",{onClick:()=>t.setModel("slim"),className:`pixel-button compact teal ${t.model==="slim"?"active":""}`,children:"SLIM"}),u.jsx("button",{onClick:()=>t.setModel("classic"),className:`pixel-button compact ${t.model==="classic"?"active":""}`,children:"CLASSIC"})]})]}),u.jsxs("div",{className:"px-3 py-2 bg-bg-desk2 flex items-center gap-2 flex-wrap",children:[u.jsxs("button",{onClick:t.onExit,className:"pixel-button compact flex items-center gap-1",title:"Back to gallery",children:[u.jsx(Ne,{name:"home"})," HOME"]}),u.jsxs("button",{onClick:()=>{var e;return(e=t.fileInputRef.current)==null?void 0:e.click()},className:"pixel-button compact teal flex items-center gap-1",children:[u.jsx(Ne,{name:"upload"})," UPLOAD"]}),u.jsx("input",{ref:t.fileInputRef,type:"file",accept:"image/png,image/jpeg,image/jpg",hidden:!0,onChange:e=>{var i;const n=(i=e.target.files)==null?void 0:i[0];n&&t.onUpload(n),t.fileInputRef.current&&(t.fileInputRef.current.value="")}}),u.jsxs("button",{onClick:()=>t.setPresetsOpen(!t.presetsOpen),className:"pixel-button compact purple flex items-center gap-1 xl:hidden",children:[u.jsx(Ne,{name:"star",color:"#FFFBEA"})," MY PRESETS"]}),u.jsxs("div",{className:"ml-auto flex items-center gap-1 sm:gap-2",children:[u.jsxs("button",{onClick:t.onDownload,className:"pixel-button compact teal flex items-center gap-1",children:[u.jsx(Ne,{name:"download"})," DOWNLOAD"]}),u.jsxs("button",{onClick:t.onSave,className:"pixel-button compact danger flex items-center gap-1",children:[u.jsx(Ne,{name:"save",color:"#FFFBEA"})," SAVE"]})]})]})]}),il=({active:t,label:e,onClick:n})=>u.jsx("button",{onClick:n,className:`pixel-button compact ${t?"active":""}`,children:e}),y2=({activePart:t,partLayerModes:e,onAll:n,onPart:i})=>u.jsxs("div",{className:"px-2 py-2 border-b-[3px] border-ink bg-bg-desk overflow-x-auto pixel-scroll flex items-center gap-1",children:[u.jsx(ng,{label:"ALL",badge:"",active:t==="all",onClick:n}),CA.map(r=>{const s=e[r.key]??0;return u.jsx(ng,{label:r.label.toUpperCase(),badge:r2[s],active:t===r.key,onClick:()=>i(r.key)},r.key)})]}),ng=({label:t,badge:e,active:n,onClick:i})=>u.jsxs("button",{onClick:i,className:`pixel-button compact ${n?"active":""} whitespace-nowrap flex items-center gap-1`,title:e==="OUT"?"Outer layer hidden — click again":e==="OFF"?"Both layers hidden — click to restore":"Click to hide outer layer on this part",children:[u.jsx("span",{style:{fontSize:8},children:t}),e&&u.jsx("span",{className:"panel-btn-text text-[10px] opacity-90",children:e})]}),S2=()=>{const t=xi(d=>d.confirm),e=xi(d=>d.savePreset),n=xi(d=>d.saveColor),i=xi(d=>d.closeConfirm),r=xi(d=>d.closeSavePreset),s=xi(d=>d.closeSaveColor),[a,o]=me.useState(""),[l,c]=me.useState(null),[h,p]=me.useState(null);return me.useEffect(()=>{e&&(o(e.defaultName),c(e.defaultFolderId))},[e]),me.useEffect(()=>{var d;n&&p(n.defaultPaletteId??((d=n.paletteOptions[0])==null?void 0:d.id)??null)},[n]),!t&&!e&&!n?null:u.jsxs("div",{className:"dialog-backdrop",children:[t&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:t.title}),u.jsx("div",{className:"dialog-body",children:u.jsx("p",{className:"panel-text",children:t.message})}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>i(!1),children:t.cancelLabel??"Cancel"}),u.jsx("button",{className:`pixel-button compact ${t.variant==="danger"?"danger":"teal"}`,onClick:()=>i(!0),children:t.confirmLabel??"Confirm"})]})]}),e&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:"Save Preset"}),u.jsxs("div",{className:"dialog-body space-y-3",children:[u.jsx("p",{className:"panel-text",children:"Save this layer as a reusable preset?"}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Preset name"}),u.jsx("input",{autoFocus:!0,className:"pixel-input w-full",value:a,onChange:d=>o(d.target.value),onKeyDown:d=>{d.key==="Enter"&&r({name:a.trim()||e.defaultName,folderId:l})}})]}),u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Folder"}),u.jsxs("select",{className:"pixel-input w-full",value:l??"",onChange:d=>c(d.target.value?d.target.value:null),children:[u.jsx("option",{value:"",children:"Unfiled"}),e.folderOptions.filter(d=>d.id!==null).map(d=>u.jsx("option",{value:d.id,children:d.name},d.id))]})]})]}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>r(null),children:"Cancel"}),u.jsx("button",{className:"pixel-button compact purple",onClick:()=>r({name:a.trim()||e.defaultName,folderId:l}),children:"Save Preset"})]})]}),n&&u.jsxs("div",{className:"dialog-box",children:[u.jsx("div",{className:"dialog-title-bar",children:"Save Color"}),u.jsxs("div",{className:"dialog-body space-y-3",children:[u.jsx("p",{className:"panel-text",children:"Add this color to a palette?"}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-12 h-12 border-[3px] border-ink shrink-0",style:{background:n.color}}),u.jsx("span",{className:"panel-text font-mono",children:n.color.toUpperCase()})]}),n.paletteOptions.length===0?u.jsx("p",{className:"panel-text text-ink/70",children:"Create a palette first in the Colors panel."}):u.jsxs("div",{children:[u.jsx("label",{className:"panel-label block mb-1",children:"Palette"}),u.jsx("select",{className:"pixel-input w-full",value:h??"",onChange:d=>p(d.target.value),children:n.paletteOptions.map(d=>u.jsx("option",{value:d.id,children:d.name},d.id))})]})]}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"pixel-button compact cream",onClick:()=>s(null),children:"Cancel"}),u.jsx("button",{className:"pixel-button compact teal",disabled:!h||n.paletteOptions.length===0,onClick:()=>h&&s({paletteId:h}),children:"Save Color"})]})]})]})},E2=()=>{const[t,e]=me.useState({name:"home"}),n=gc();return u.jsxs("div",{className:"app-shell",children:[t.name==="home"&&u.jsx(xA,{onNew:()=>e({name:"editor"}),onEdit:i=>e({name:"editor",editId:i})}),t.name==="editor"&&u.jsx(x2,{editId:t.editId,onExit:()=>e({name:"home"}),onSaved:i=>{n.show(`Saved "${i}" to your project floppy.`)}}),u.jsx(XA,{}),u.jsx(S2,{})]})};class M2 extends me.Component{constructor(){super(...arguments);Qf(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,i){console.error("Pixel Skin Studio failed to render",n,i)}render(){return this.state.error?u.jsx("div",{className:"min-h-full flex items-center justify-center p-6",style:{background:"radial-gradient(ellipse at center, #2A2138 0%, #1B1424 70%, #0c0712 100%)"},children:u.jsxs("div",{className:"pixel-window max-w-lg w-full",children:[u.jsx("div",{className:"pixel-title-bar",children:"Something went wrong"}),u.jsxs("div",{className:"p-4 space-y-3 bg-bg-desk2",children:[u.jsx("p",{className:"panel-text",children:"The app hit an error while loading. Try refreshing the page."}),u.jsx("p",{className:"panel-text text-ink/70 text-base break-all",children:this.state.error.message}),u.jsx("button",{className:"pixel-button compact teal",onClick:()=>window.location.reload(),children:"Reload"})]})]})}):this.props.children}}const w2=()=>{if(!(typeof window>"u")){try{Rr.getState().hydrate()}catch(t){console.warn("Could not restore gallery",t)}try{jn.getState().hydrate()}catch(t){console.warn("Could not restore presets",t)}try{pi.getState().hydrate()}catch(t){console.warn("Could not restore color palettes",t)}}};function T2(){const t=document.getElementById("boot");t&&(t.style.display="none")}function b2(t){const e=document.getElementById("boot");e&&(e.innerHTML='<div style="max-width:480px;padding:24px;text-align:center;"><div style="font-size:28px;margin-bottom:12px;">Could not start</div><div style="margin-bottom:18px;">'+t+'</div><button onclick="location.reload()" style="font-family:VT323,monospace;font-size:20px;padding:8px 16px;background:#3FB6A8;color:#1B1424;border:3px solid #2A2138;cursor:pointer;">Reload</button></div>',e.style.display="flex")}try{w2();const t=document.getElementById("root");if(!t)throw new Error("App root element not found.");Pu.createRoot(t).render(u.jsx(pg.StrictMode,{children:u.jsx(M2,{children:u.jsx(E2,{})})})),requestAnimationFrame(()=>requestAnimationFrame(T2))}catch(t){console.error("Pixel Skin Studio failed to start",t),b2(t instanceof Error?t.message:"The app failed to load. Check your connection and refresh.")}
