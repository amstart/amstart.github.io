(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{8872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(8754),o=n(1757),i=o._(n(7294)),l=n(3935),a=r._(n(2636)),s=n(5471),u=n(3735),c=n(3341);n(4210);let d=n(9955),f=r._(n(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,i.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:l,width:a,decoding:s,className:u,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:E,onLoad:S,onError:P,...C}=e;return i.default.createElement("img",{...C,...g(d),loading:p,width:a,height:l,decoding:s,"data-nimg":v?"fill":"1",className:u,style:c,sizes:o,srcSet:r,src:n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&m(e,f,b,y,w,h))},[n,f,b,y,w,P,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,b,y,w,h)},onError:e=>{E(!0),"blur"===f&&w(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t?((0,l.preload)(n.src,r),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let b=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(d.RouterContext),r=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let g=(0,i.useRef)(a);(0,i.useEffect)(()=>{g.current=a},[a]);let[b,y]=(0,i.useState)(!1),[w,E]=(0,i.useState)(!1),{props:S,meta:P}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:w});return i.default.createElement(i.default.Fragment,null,i.default.createElement(h,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:E,ref:t}),P.priority?i.default.createElement(v,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(4210);let r=n(7757),o=n(3735);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:b,fill:y=!1,style:w,onLoad:E,onLoadingComplete:S,placeholder:P="empty",blurDataURL:C,fetchPriority:j,layout:k,objectFit:I,objectPosition:O,lazyBoundary:x,lazyRoot:R,...D}=e,{imgConf:_,showAltText:N,blurComplete:M,defaultLoader:z}=t,T=_||o.imageConfigDefault;if("allSizes"in T)a=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);a={...T,allSizes:e,deviceSizes:t}}let L=D.loader||z;delete D.loader,delete D.srcSet;let A="__next_img_default"in L;if(A){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!d&&(d=t)}let B="",F=l(v),H=l(b);if("object"==typeof(n=c)&&(i(n)||void 0!==n.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,B=e.src,!y){if(F||H){if(F&&!H){let t=F/e.width;H=Math.round(e.height*t)}else if(!F&&H){let t=H/e.height;F=Math.round(e.width*t)}}else F=e.width,H=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),A&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(j="high");let $=l(h),W=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:O}:{},N?{}:{color:"transparent"},w),G="blur"===P&&C&&!M?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:H,blurWidth:s,blurHeight:u,blurDataURL:C,objectFit:W.objectFit})+'")'}:{},V=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,r)=>a({config:t,src:n,quality:i,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:n,quality:i,width:s[c]})}}({config:a,src:c,unoptimized:f,width:F,quality:$,sizes:d,loader:L}),K={...D,loading:U?"lazy":m,fetchPriority:j,width:F,height:H,decoding:"async",className:g,style:{...W,...G},sizes:V.sizes,srcSet:V.srcSet,src:V.src},Y={unoptimized:f,priority:p,placeholder:P,fill:y};return{props:K,meta:Y}}},7757:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=r?40*r:t,s=o?40*o:n,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},2555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let r=n(8754),o=n(5471),i=n(4210),l=n(8872),a=r._(n(7746)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=l.Image},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5675:function(e,t,n){n(2555)},689:function(e,t,n){"use strict";n.d(t,{p:function(){return K}});var r,o,i,l,a,s,u,c,d=n(7294);function f(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,f),r}function p(...e){return e.filter(Boolean).join(" ")}var m=((r=m||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),g=((o=g||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function h({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l}){let a=b(t,e);if(i)return v(a,n,r,l);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return v(t,n,r,l)}if(1&s){let{unmount:e=!0,...t}=a;return f(e?0:1,{0:()=>null,1:()=>v({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return v(a,n,r,l)}function v(e,t={},n,r){let{as:o=n,children:i,refName:l="ref",...a}=E(e,["unmount","static"]),s=void 0!==e.ref?{[l]:e.ref}:{},u="function"==typeof i?i(t):i;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===d.Fragment&&Object.keys(w(a)).length>0){if(!(0,d.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=u.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>p(null==e?void 0:e.className(...t),a.className):p(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,d.cloneElement)(u,Object.assign({},b(u.props,w(E(a,["ref"]))),c,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(u.ref,s.ref),n))}return(0,d.createElement)(o,Object.assign({},E(a,["ref"]),o!==d.Fragment&&s,o!==d.Fragment&&c),u)}function b(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function y(e){var t;return Object.assign((0,d.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function w(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function E(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var S=Object.defineProperty,P=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>(P(e,"symbol"!=typeof t?t+"":t,n),n);let j=new class{constructor(){C(this,"current",this.detect()),C(this,"handoffState","pending"),C(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},k=(e,t)=>{j.isServer?(0,d.useEffect)(e,t):(0,d.useLayoutEffect)(e,t)},I=function(e){let t;let n=(t=(0,d.useRef)(e),k(()=>{t.current=e},[e]),t);return d.useCallback((...e)=>n.current(...e),[n])},O=Symbol();function x(...e){let t=(0,d.useRef)(e);(0,d.useEffect)(()=>{t.current=e},[e]);let n=I(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[O]))?void 0:n}let R=null!=(u=d.useId)?u:function(){let e=function(){let[e,t]=(0,d.useState)(j.isHandoffComplete);return e&&!1===j.isHandoffComplete&&t(!1),(0,d.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,d.useEffect)(()=>j.handoff(),[]),e}(),[t,n]=d.useState(e?()=>j.nextId():null);return k(()=>{null===t&&n(j.nextId())},[t]),null!=t?""+t:void 0};var D=((i=D||{}).Space=" ",i.Enter="Enter",i.Escape="Escape",i.Backspace="Backspace",i.Delete="Delete",i.ArrowLeft="ArrowLeft",i.ArrowUp="ArrowUp",i.ArrowRight="ArrowRight",i.ArrowDown="ArrowDown",i.Home="Home",i.End="End",i.PageUp="PageUp",i.PageDown="PageDown",i.Tab="Tab",i);let _=(0,d.createContext)(null);_.displayName="OpenClosedContext";var N=((l=N||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function M({value:e,children:t}){return d.createElement(_.Provider,{value:e},t)}function z(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let T=null!=(c=d.startTransition)?c:function(e){e()};var L=((a=L||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),A=((s=A||{})[s.ToggleDisclosure=0]="ToggleDisclosure",s[s.CloseDisclosure=1]="CloseDisclosure",s[s.SetButtonId=2]="SetButtonId",s[s.SetPanelId=3]="SetPanelId",s[s.LinkPanel=4]="LinkPanel",s[s.UnlinkPanel=5]="UnlinkPanel",s);let B={0:e=>({...e,disclosureState:f(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},F=(0,d.createContext)(null);function H(e){let t=(0,d.useContext)(F);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,H),t}return t}F.displayName="DisclosureContext";let U=(0,d.createContext)(null);U.displayName="DisclosureAPIContext";let $=(0,d.createContext)(null);function W(e,t){return f(t.type,B,e,t)}$.displayName="DisclosurePanelContext";let G=d.Fragment,V=m.RenderStrategy|m.Static,K=Object.assign(y(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,d.useRef)(null),i=x(t,function(e,t=!0){return Object.assign(e,{[O]:t})}(e=>{o.current=e},void 0===e.as||e.as===d.Fragment)),l=(0,d.useRef)(null),a=(0,d.useRef)(null),s=(0,d.useReducer)(W,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:a,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:c},p]=s,m=I(e=>{p({type:1});let t=j.isServer?null:o instanceof Node?o.ownerDocument:null!=o&&o.hasOwnProperty("current")&&o.current instanceof Node?o.current.ownerDocument:document;if(!t||!c)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()}),g=(0,d.useMemo)(()=>({close:m}),[m]),v=(0,d.useMemo)(()=>({open:0===u,close:m}),[u,m]);return d.createElement(F.Provider,{value:s},d.createElement(U.Provider,{value:g},d.createElement(M,{value:f(u,{0:N.Open,1:N.Closed})},h({ourProps:{ref:i},theirProps:r,slot:v,defaultTag:G,name:"Disclosure"}))))}),{Button:y(function(e,t){let n=R(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[i,l]=H("Disclosure.Button"),a=(0,d.useContext)($),s=null!==a&&a===i.panelId,u=(0,d.useRef)(null),c=x(u,t,s?null:i.buttonRef);(0,d.useEffect)(()=>{if(!s)return l({type:2,buttonId:r}),()=>{l({type:2,buttonId:null})}},[r,l,s]);let f=I(e=>{var t;if(s){if(1===i.disclosureState)return;switch(e.key){case D.Space:case D.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=i.buttonRef.current)||t.focus()}}else switch(e.key){case D.Space:case D.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),p=I(e=>{e.key===D.Space&&e.preventDefault()}),m=I(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(s?(l({type:0}),null==(n=i.buttonRef.current)||n.focus()):l({type:0}))}),g=(0,d.useMemo)(()=>({open:0===i.disclosureState}),[i]),v=function(e,t){let[n,r]=(0,d.useState)(()=>z(e));return k(()=>{r(z(e))},[e.type,e.as]),k(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,u);return h({ourProps:s?{ref:c,type:v,onKeyDown:f,onClick:m}:{ref:c,id:r,type:v,"aria-expanded":0===i.disclosureState,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:f,onKeyUp:p,onClick:m},theirProps:o,slot:g,defaultTag:"button",name:"Disclosure.Button"})}),Panel:y(function(e,t){let n=R(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[i,l]=H("Disclosure.Panel"),{close:a}=function e(t){let n=(0,d.useContext)(U);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),s=x(t,i.panelRef,e=>{T(()=>l({type:e?4:5}))});(0,d.useEffect)(()=>(l({type:3,panelId:r}),()=>{l({type:3,panelId:null})}),[r,l]);let u=(0,d.useContext)(_),c=null!==u?(u&N.Open)===N.Open:0===i.disclosureState,f=(0,d.useMemo)(()=>({open:0===i.disclosureState,close:a}),[i,a]);return d.createElement($.Provider,{value:i.panelId},h({ourProps:{ref:s,id:r},theirProps:o,slot:f,defaultTag:"div",features:V,visible:c,name:"Disclosure.Panel"}))})})},3407:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},1415:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);