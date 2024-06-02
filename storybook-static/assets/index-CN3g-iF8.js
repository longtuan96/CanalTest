import{r as i,$ as Y}from"./index-lToYTJ1z.js";import{R as q}from"./index-BqsqxRHE.js";import{c as J,a as Q,m as Z,E as ee,D as B,b as W,R as te,u as ne,N as z,s as O,d as ae,e as D,f as H,g as ie,h as F,i as M,j as V}from"./index-Di5JfxvG.js";/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},P.apply(this,arguments)}function K(t,n){if(t==null)return{};var e={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(e[a]=t[a]);return e}function re(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oe(t,n){return t.button===0&&(!n||n==="_self")&&!re(t)}const se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],le=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ue="6";try{window.__reactRouterVersion=ue}catch{}function be(t,n){return J({basename:void 0,future:P({},void 0,{v7_prependBasename:!0}),history:Q({window:void 0}),hydrationData:ce(),routes:t,mapRouteProperties:Z,unstable_dataStrategy:void 0,window:void 0}).initialize()}function ce(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=P({},n,{errors:fe(n.errors)})),n}function fe(t){if(!t)return null;let n=Object.entries(t),e={};for(let[r,a]of n)if(a&&a.__type==="RouteErrorResponse")e[r]=new ee(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let o=window[a.__subType];if(typeof o=="function")try{let s=new o(a.message);s.stack="",e[r]=s}catch{}}if(e[r]==null){let o=new Error(a.message);o.stack="",e[r]=o}}else e[r]=a;return e}const $=i.createContext({isTransitioning:!1}),de=i.createContext(new Map),he="startTransition",j=Y[he],ve="flushSync",I=q[ve];function pe(t){j?j(t):t()}function U(t){I?I(t):t()}class me{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",e(r))}})}}function _e(t){let{fallbackElement:n,router:e,future:r}=t,[a,o]=i.useState(e.state),[s,w]=i.useState(),[v,l]=i.useState({isTransitioning:!1}),[u,y]=i.useState(),[p,L]=i.useState(),[m,x]=i.useState(),T=i.useRef(new Map),{v7_startTransition:E}=r||{},d=i.useCallback(f=>{E?pe(f):f()},[E]),h=i.useCallback((f,S)=>{let{deletedFetchers:g,unstable_flushSync:_,unstable_viewTransitionOpts:R}=S;g.forEach(b=>T.current.delete(b)),f.fetchers.forEach((b,X)=>{b.data!==void 0&&T.current.set(X,b.data)});let G=e.window==null||e.window.document==null||typeof e.window.document.startViewTransition!="function";if(!R||G){_?U(()=>o(f)):d(()=>o(f));return}if(_){U(()=>{p&&(u&&u.resolve(),p.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation})});let b=e.window.document.startViewTransition(()=>{U(()=>o(f))});b.finished.finally(()=>{U(()=>{y(void 0),L(void 0),w(void 0),l({isTransitioning:!1})})}),U(()=>L(b));return}p?(u&&u.resolve(),p.skipTransition(),x({state:f,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(w(f),l({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[e.window,p,u,T,d]);i.useLayoutEffect(()=>e.subscribe(h),[e,h]),i.useEffect(()=>{v.isTransitioning&&!v.flushSync&&y(new me)},[v]),i.useEffect(()=>{if(u&&s&&e.window){let f=s,S=u.promise,g=e.window.document.startViewTransition(async()=>{d(()=>o(f)),await S});g.finished.finally(()=>{y(void 0),L(void 0),w(void 0),l({isTransitioning:!1})}),L(g)}},[d,s,u,e.window]),i.useEffect(()=>{u&&s&&a.location.key===s.location.key&&u.resolve()},[u,p,a.location,s]),i.useEffect(()=>{!v.isTransitioning&&m&&(w(m.state),l({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),x(void 0))},[v.isTransitioning,m]),i.useEffect(()=>{},[]);let c=i.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:f=>e.navigate(f),push:(f,S,g)=>e.navigate(f,{state:S,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(f,S,g)=>e.navigate(f,{replace:!0,state:S,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[e]),C=e.basename||"/",k=i.useMemo(()=>({router:e,navigator:c,static:!1,basename:C}),[e,c,C]);return i.createElement(i.Fragment,null,i.createElement(B.Provider,{value:k},i.createElement(W.Provider,{value:a},i.createElement(de.Provider,{value:T.current},i.createElement($.Provider,{value:v},i.createElement(te,{basename:C,location:a.location,navigationType:a.historyAction,navigator:c,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},a.initialized||e.future.v7_partialHydration?i.createElement(we,{routes:e.routes,future:e.future,state:a}):n))))),null)}function we(t){let{routes:n,future:e,state:r}=t;return ne(n,void 0,r,e)}const ge=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ye=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=i.forwardRef(function(n,e){let{onClick:r,relative:a,reloadDocument:o,replace:s,state:w,target:v,to:l,preventScrollReset:u,unstable_viewTransition:y}=n,p=K(n,se),{basename:L}=i.useContext(z),m,x=!1;if(typeof l=="string"&&ye.test(l)&&(m=l,ge))try{let h=new URL(window.location.href),c=l.startsWith("//")?new URL(h.protocol+l):new URL(l),C=O(c.pathname,L);c.origin===h.origin&&C!=null?l=C+c.search+c.hash:x=!0}catch{}let T=ae(l,{relative:a}),E=Re(l,{replace:s,state:w,target:v,preventScrollReset:u,relative:a,unstable_viewTransition:y});function d(h){r&&r(h),h.defaultPrevented||E(h)}return i.createElement("a",P({},p,{href:m||T,onClick:x||o?r:d,ref:e,target:v}))}),Pe=i.forwardRef(function(n,e){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:s=!1,style:w,to:v,unstable_viewTransition:l,children:u}=n,y=K(n,le),p=D(v,{relative:y.relative}),L=H(),m=i.useContext(W),{navigator:x,basename:T}=i.useContext(z),E=m!=null&&Le(p)&&l===!0,d=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,h=L.pathname,c=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(h=h.toLowerCase(),c=c?c.toLowerCase():null,d=d.toLowerCase()),c&&T&&(c=O(c,T)||c);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let k=h===d||!s&&h.startsWith(d)&&h.charAt(C)==="/",f=c!=null&&(c===d||!s&&c.startsWith(d)&&c.charAt(d.length)==="/"),S={isActive:k,isPending:f,isTransitioning:E},g=k?r:void 0,_;typeof o=="function"?_=o(S):_=[o,k?"active":null,f?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let R=typeof w=="function"?w(S):w;return i.createElement(Se,P({},y,{"aria-current":g,className:_,ref:e,style:R,to:v,unstable_viewTransition:l}),typeof u=="function"?u(S):u)});var N;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(N||(N={}));var A;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(A||(A={}));function Te(t){let n=i.useContext(B);return n||M(!1),n}function Re(t,n){let{target:e,replace:r,state:a,preventScrollReset:o,relative:s,unstable_viewTransition:w}=n===void 0?{}:n,v=ie(),l=H(),u=D(t,{relative:s});return i.useCallback(y=>{if(oe(y,e)){y.preventDefault();let p=r!==void 0?r:F(l)===F(u);v(t,{replace:p,state:a,preventScrollReset:o,relative:s,unstable_viewTransition:w})}},[l,v,u,r,a,e,t,o,s,w])}function Le(t,n){n===void 0&&(n={});let e=i.useContext($);e==null&&M(!1);let{basename:r}=Te(N.useViewTransitionState),a=D(t,{relative:n.relative});if(!e.isTransitioning)return!1;let o=O(e.currentLocation.pathname,r)||e.currentLocation.pathname,s=O(e.nextLocation.pathname,r)||e.nextLocation.pathname;return V(a.pathname,s)!=null||V(a.pathname,o)!=null}export{Se as L,Pe as N,_e as R,be as c};
