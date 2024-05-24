import{r as u,R as h,o as ze,B as Te}from"./index-267a3523.js";import{s as I,o as b,l as B,e as Ne,V as C,y as D,b as re,u as P,X as k,T as Je,c as ke,I as X,j as Se,a as Ze,w as H,d as et}from"./keyboard-5d9d3865.js";import{C as xe,d as R,r as tt,c as nt}from"./open-closed-267b4283.js";import{t as se,a as rt,F as ot,I as ae,L as Q,h as Pe,s as Fe,S as U,N as lt}from"./hidden-ef9f944f.js";function oe(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,o,i,l){return r.addEventListener(o,i,l),n.add(()=>r.removeEventListener(o,i,l))},requestAnimationFrame(...r){let o=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(o))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let o=setTimeout(...r);return n.add(()=>clearTimeout(o))},microTask(...r){let o={current:!0};return se(()=>{o.current&&r[0]()}),n.add(()=>{o.current=!1})},add(r){return e.push(r),()=>{let o=e.indexOf(r);if(o>=0){let[i]=e.splice(o,1);i()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()},style(r,o,i){let l=r.style.getPropertyValue(o);return Object.assign(r.style,{[o]:i}),this.add(()=>{Object.assign(r.style,{[o]:l})})}};return n}function Oe(){let[e]=u.useState(oe);return u.useEffect(()=>()=>e.dispose(),[e]),e}function be(e,t,n){let r=I(t);u.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function it(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,a){if(!r.current||l.defaultPrevented)return;let s=function d(v){return typeof v=="function"?d(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e),c=a(l);if(c!==null&&c.getRootNode().contains(c)){for(let d of s){if(d===null)continue;let v=d instanceof HTMLElement?d:d.current;if(v!=null&&v.contains(c)||l.composed&&l.composedPath().includes(v))return}return!rt(c,ot.Loose)&&c.tabIndex!==-1&&l.preventDefault(),t(l,c)}}let i=u.useRef(null);be("mousedown",l=>{var a,s;r.current&&(i.current=((s=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:s[0])||l.target)},!0),be("click",l=>{!i.current||(o(l,()=>i.current),i.current=null)},!0),be("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function je(e,t){let n=u.useRef([]),r=b(e);u.useEffect(()=>{let o=[...n.current];for(let[i,l]of t.entries())if(n.current[i]!==l){let a=r(t,o);return n.current=t,a}},[r,...t])}function at(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ut(e,t,n){let r=I(t);u.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var ne=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ne||{});function st(){let e=u.useRef(0);return ut("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ce(){let e=u.useRef(!1);return B(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function de(...e){return u.useMemo(()=>Ne(...e),[...e])}function Ae(e,t,n,r){let o=I(n);u.useEffect(()=>{e=e??window;function i(l){o.current(l)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}let ct="div";var Ve=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ve||{});let te=Object.assign(C(function(e,t){let n=u.useRef(null),r=D(n,t),{initialFocus:o,containers:i,features:l=30,...a}=e;re()||(l=1);let s=de(n);dt({ownerDocument:s},!!(l&16));let c=ft({ownerDocument:s,container:n,initialFocus:o},!!(l&2));pt({ownerDocument:s,container:n,containers:i,previousActiveElement:c},!!(l&8));let d=st(),v=b(g=>{let p=n.current;p&&(E=>E())(()=>{P(d.current,{[ne.Forwards]:()=>{ae(p,Q.First,{skipElements:[g.relatedTarget]})},[ne.Backwards]:()=>{ae(p,Q.Last,{skipElements:[g.relatedTarget]})}})})}),$=Oe(),m=u.useRef(!1),f={ref:r,onKeyDown(g){g.key=="Tab"&&(m.current=!0,$.requestAnimationFrame(()=>{m.current=!1}))},onBlur(g){let p=new Set(i==null?void 0:i.current);p.add(n);let E=g.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(qe(p,E)||(m.current?ae(n.current,P(d.current,{[ne.Forwards]:()=>Q.Next,[ne.Backwards]:()=>Q.Previous})|Q.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&U(g.target)))}};return h.createElement(h.Fragment,null,!!(l&4)&&h.createElement(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:Fe.Focusable}),k({ourProps:f,theirProps:a,defaultTag:ct,name:"FocusTrap"}),!!(l&4)&&h.createElement(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:Fe.Focusable}))}),{features:Ve});function dt({ownerDocument:e},t){let n=u.useRef(null);Ae(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),je(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&U(n.current),n.current=null)},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,se(()=>{!r.current||(U(n.current),n.current=null)})}),[])}function ft({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),i=ce();return je(()=>{if(!r)return;let l=t.current;!l||se(()=>{if(!i.current)return;let a=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){o.current=a;return}}else if(l.contains(a)){o.current=a;return}n!=null&&n.current?U(n.current):ae(l,Q.First)===lt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function pt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=ce();Ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!i.current)return;let a=new Set(n==null?void 0:n.current);a.add(t);let s=r.current;if(!s)return;let c=l.target;c&&c instanceof HTMLElement?qe(a,c)?(r.current=c,U(c)):(l.preventDefault(),l.stopPropagation(),U(s)):U(r.current)},!0)}function qe(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let K=new Set,M=new Map;function He(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Ie(e){let t=M.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function mt(e,t=!0){B(()=>{if(!t||!e.current)return;let n=e.current,r=Ne(n);if(r){K.add(n);for(let o of M.keys())o.contains(n)&&(Ie(o),M.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let i of K)if(o.contains(i))return;K.size===1&&(M.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),He(o))}}),()=>{if(K.delete(n),K.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!M.has(o)){for(let i of K)if(o.contains(i))return;M.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),He(o)}});else for(let o of M.keys())Ie(o),M.delete(o)}}},[t])}let Ue=u.createContext(!1);function vt(){return u.useContext(Ue)}function Re(e){return h.createElement(Ue.Provider,{value:e.force},e.children)}function ht(e){let t=vt(),n=u.useContext(We),r=de(e),[o,i]=u.useState(()=>{if(!t&&n!==null||ke.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),o}let gt=u.Fragment,Et=C(function(e,t){let n=e,r=u.useRef(null),o=D(Je(d=>{r.current=d}),t),i=de(r),l=ht(r),[a]=u.useState(()=>{var d;return ke.isServer?null:(d=i==null?void 0:i.createElement("div"))!=null?d:null}),s=re(),c=u.useRef(!1);return B(()=>{if(c.current=!1,!(!l||!a))return l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a)),()=>{c.current=!0,se(()=>{var d;!c.current||!l||!a||(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l)))})}},[l,a]),s?!l||!a?null:ze.createPortal(k({ourProps:{ref:o},theirProps:n,defaultTag:gt,name:"Portal"}),a):null}),bt=u.Fragment,We=u.createContext(null),wt=C(function(e,t){let{target:n,...r}=e,o={ref:D(t)};return h.createElement(We.Provider,{value:n},k({ourProps:o,theirProps:r,defaultTag:bt,name:"Popover.Group"}))}),Ce=Object.assign(Et,{Group:wt}),Ye=u.createContext(null);function _e(){let e=u.useContext(Ye);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,_e),t}return e}function $t(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=b(i=>(t(l=>[...l,i]),()=>t(l=>{let a=l.slice(),s=a.indexOf(i);return s!==-1&&a.splice(s,1),a}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return h.createElement(Ye.Provider,{value:o},n.children)},[t])]}let yt="p",Tt=C(function(e,t){let n=X(),{id:r=`headlessui-description-${n}`,...o}=e,i=_e(),l=D(t);B(()=>i.register(r),[r,i.register]);let a={ref:l,...i.props,id:r};return k({ourProps:a,theirProps:o,slot:i.slot||{},defaultTag:yt,name:i.name||"Description"})}),Me=u.createContext(()=>{});Me.displayName="StackContext";var Le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Le||{});function St(){return u.useContext(Me)}function Pt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=St(),l=b((...a)=>{t==null||t(...a),i(...a)});return B(()=>{let a=o===void 0||o===!0;return a&&l(0,n,r),()=>{a&&l(1,n,r)}},[l,n,r,o]),h.createElement(Me.Provider,{value:l},e)}function Ft(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Rt=typeof Object.is=="function"?Object.is:Ft,{useState:Ct,useEffect:Lt,useLayoutEffect:Dt,useDebugValue:kt}=Te;function xt(e,t,n){const r=t(),[{inst:o},i]=Ct({inst:{value:r,getSnapshot:t}});return Dt(()=>{o.value=r,o.getSnapshot=t,we(o)&&i({inst:o})},[e,r,t]),Lt(()=>(we(o)&&i({inst:o}),e(()=>{we(o)&&i({inst:o})})),[e]),kt(r),r}function we(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Rt(n,r)}catch{return!0}}function Ot(e,t,n){return t()}const At=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mt=!At,Ht=Mt?Ot:xt,It="useSyncExternalStore"in Te?(e=>e.useSyncExternalStore)(Te):Ht;function Bt(e){return It(e.subscribe,e.getSnapshot,e.getSnapshot)}function Nt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...i){let l=t[o].call(n,...i);l&&(n=l,r.forEach(a=>a()))}}}function jt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,i=e-o;n.style(r,"paddingRight",`${i}px`)}}}function Vt(){if(!at())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(a=>a()).some(a=>a.contains(l))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let i=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let a=l.target.closest("a");if(!a)return;let{hash:s}=new URL(a.href),c=t.querySelector(s);c&&!o(c)&&(i=c)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!o(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ut(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=Nt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:oe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ut(n)},o=[Vt(),jt(),qt()];o.forEach(({before:i})=>i==null?void 0:i(r)),o.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Wt(e,t,n){let r=Bt(q),o=e?r.get(e):void 0,i=o?o.count>0:!1;return B(()=>{if(!(!e||!t))return q.dispatch("PUSH",e,n),()=>q.dispatch("POP",e,n)},[t,e]),i}var Yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Yt||{}),_t=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(_t||{});let Gt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ue=u.createContext(null);ue.displayName="DialogContext";function le(e){let t=u.useContext(ue);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,le),n}return t}function Kt(e,t,n=()=>[document.body]){Wt(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Qt(e,t){return P(t.type,Gt,e,t)}let Xt="div",zt=Se.RenderStrategy|Se.Static,Jt=C(function(e,t){let n=X(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:i,initialFocus:l,__demoMode:a=!1,...s}=e,[c,d]=u.useState(0),v=xe();o===void 0&&v!==null&&(o=(v&R.Open)===R.Open);let $=u.useRef(new Set),m=u.useRef(null),f=D(m,t),g=u.useRef(null),p=de(m),E=e.hasOwnProperty("open")||v!==null,F=e.hasOwnProperty("onClose");if(!E&&!F)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!E)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!F)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof i!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let y=o?0:1,[w,z]=u.useReducer(Qt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),x=b(()=>i(!1)),N=b(T=>z({type:0,id:T})),O=re()?a?!1:y===0:!1,A=c>1,J=u.useContext(ue)!==null,W=A?"parent":"leaf",Y=v!==null?(v&R.Closing)===R.Closing:!1,Z=(()=>!A||Y?!1:O)();mt(m,Z);let ie=b(()=>{var T,G;return[...Array.from((T=p==null?void 0:p.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?T:[]).filter(S=>!(S===document.body||S===document.head||!(S instanceof HTMLElement)||S.contains(g.current)||w.panelRef.current&&S.contains(w.panelRef.current))),(G=w.panelRef.current)!=null?G:m.current]}),j=(()=>!(!O||A))();it(()=>ie(),x,j);let ve=(()=>!(A||y!==0))();Ae(p==null?void 0:p.defaultView,"keydown",T=>{!ve||T.defaultPrevented||T.key===Ze.Escape&&(T.preventDefault(),T.stopPropagation(),x())});let he=(()=>!(Y||y!==0||J))();Kt(p,he,ie),u.useEffect(()=>{if(y!==0||!m.current)return;let T=new IntersectionObserver(G=>{for(let S of G)S.boundingClientRect.x===0&&S.boundingClientRect.y===0&&S.boundingClientRect.width===0&&S.boundingClientRect.height===0&&x()});return T.observe(m.current),()=>T.disconnect()},[y,m,x]);let[_,ee]=$t(),ge=u.useMemo(()=>[{dialogState:y,close:x,setTitleId:N},w],[y,w,x,N]),L=u.useMemo(()=>({open:y===0}),[y]),Xe={ref:f,id:r,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":w.titleId,"aria-describedby":_};return h.createElement(Pt,{type:"Dialog",enabled:y===0,element:m,onUpdate:b((T,G,S)=>{G==="Dialog"&&P(T,{[Le.Add](){$.current.add(S),d(Ee=>Ee+1)},[Le.Remove](){$.current.add(S),d(Ee=>Ee-1)}})})},h.createElement(Re,{force:!0},h.createElement(Ce,null,h.createElement(ue.Provider,{value:ge},h.createElement(Ce.Group,{target:m},h.createElement(Re,{force:!1},h.createElement(ee,{slot:L,name:"Dialog.Description"},h.createElement(te,{initialFocus:l,containers:$,features:O?P(W,{parent:te.features.RestoreFocus,leaf:te.features.All&~te.features.FocusLock}):te.features.None},k({ourProps:Xe,theirProps:s,slot:L,defaultTag:Xt,features:zt,visible:y===0,name:"Dialog"})))))))),h.createElement(Pe,{features:Fe.Hidden,ref:g}))}),Zt="div",en=C(function(e,t){let n=X(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:i,close:l}]=le("Dialog.Overlay"),a=D(t),s=b(d=>{if(d.target===d.currentTarget){if(tt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),l()}}),c=u.useMemo(()=>({open:i===0}),[i]);return k({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:c,defaultTag:Zt,name:"Dialog.Overlay"})}),tn="div",nn=C(function(e,t){let n=X(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:i},l]=le("Dialog.Backdrop"),a=D(t);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=u.useMemo(()=>({open:i===0}),[i]);return h.createElement(Re,{force:!0},h.createElement(Ce,null,k({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:tn,name:"Dialog.Backdrop"})))}),rn="div",on=C(function(e,t){let n=X(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:i},l]=le("Dialog.Panel"),a=D(t,l.panelRef),s=u.useMemo(()=>({open:i===0}),[i]),c=b(d=>{d.stopPropagation()});return k({ourProps:{ref:a,id:r,onClick:c},theirProps:o,slot:s,defaultTag:rn,name:"Dialog.Panel"})}),ln="h2",an=C(function(e,t){let n=X(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:i,setTitleId:l}]=le("Dialog.Title"),a=D(t);u.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=u.useMemo(()=>({open:i===0}),[i]);return k({ourProps:{ref:a,id:r},theirProps:o,slot:s,defaultTag:ln,name:"Dialog.Title"})}),Pn=Object.assign(Jt,{Backdrop:nn,Panel:on,Overlay:en,Title:an,Description:Tt});function un(e=0){let[t,n]=u.useState(e),r=u.useCallback(a=>n(s=>s|a),[t]),o=u.useCallback(a=>!!(t&a),[t]),i=u.useCallback(a=>n(s=>s&~a),[n]),l=u.useCallback(a=>n(s=>s^a),[n]);return{flags:t,addFlag:r,hasFlag:o,removeFlag:i,toggleFlag:l}}function sn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function ye(e,...t){e&&t.length>0&&e.classList.remove(...t)}function cn(e,t){let n=oe();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(a=>{let[s=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return s});if(i+l!==0){let a=n.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t(),a())})}else t();return n.add(()=>t()),n.dispose}function dn(e,t,n,r){let o=n?"enter":"leave",i=oe(),l=r!==void 0?sn(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=P(o,{enter:()=>t.enter,leave:()=>t.leave}),s=P(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=P(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return ye(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),$e(e,...a,...c),i.nextFrame(()=>{ye(e,...c),$e(e,...s),cn(e,()=>(ye(e,...a),$e(e,...t.entered),l()))}),i.dispose}function fn({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=ce(),l=Oe(),a=I(t);B(()=>{let s=oe();l.add(s.dispose);let c=e.current;if(c&&a.current!=="idle"&&i.current)return s.dispose(),r.current(a.current),s.add(dn(c,n.current,a.current==="enter",()=>{s.dispose(),o.current(a.current)})),s.dispose},[t])}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let fe=u.createContext(null);fe.displayName="TransitionContext";var pn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(pn||{});function mn(){let e=u.useContext(fe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function vn(){let e=u.useContext(pe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let pe=u.createContext(null);pe.displayName="NestingContext";function me(e){return"children"in e?me(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ge(e,t){let n=I(e),r=u.useRef([]),o=ce(),i=Oe(),l=b((m,f=H.Hidden)=>{let g=r.current.findIndex(({el:p})=>p===m);g!==-1&&(P(f,{[H.Unmount](){r.current.splice(g,1)},[H.Hidden](){r.current[g].state="hidden"}}),i.microTask(()=>{var p;!me(r)&&o.current&&((p=n.current)==null||p.call(n))}))}),a=b(m=>{let f=r.current.find(({el:g})=>g===m);return f?f.state!=="visible"&&(f.state="visible"):r.current.push({el:m,state:"visible"}),()=>l(m,H.Unmount)}),s=u.useRef([]),c=u.useRef(Promise.resolve()),d=u.useRef({enter:[],leave:[],idle:[]}),v=b((m,f,g)=>{s.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([p])=>p!==m)),t==null||t.chains.current[f].push([m,new Promise(p=>{s.current.push(p)})]),t==null||t.chains.current[f].push([m,new Promise(p=>{Promise.all(d.current[f].map(([E,F])=>F)).then(()=>p())})]),f==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(f)):g(f)}),$=b((m,f,g)=>{Promise.all(d.current[f].splice(0).map(([p,E])=>E)).then(()=>{var p;(p=s.current.shift())==null||p()}).then(()=>g(f))});return u.useMemo(()=>({children:r,register:a,unregister:l,onStart:v,onStop:$,wait:c,chains:d}),[a,l,r,v,$,d,c])}function hn(){}let gn=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Be(e){var t;let n={};for(let r of gn)n[r]=(t=e[r])!=null?t:hn;return n}function En(e){let t=u.useRef(Be(e));return u.useEffect(()=>{t.current=Be(e)},[e]),t}let bn="div",Ke=Se.RenderStrategy,Qe=C(function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:i,enter:l,enterFrom:a,enterTo:s,entered:c,leave:d,leaveFrom:v,leaveTo:$,...m}=e,f=u.useRef(null),g=D(f,t),p=m.unmount?H.Unmount:H.Hidden,{show:E,appear:F,initial:y}=mn(),[w,z]=u.useState(E?"visible":"hidden"),x=vn(),{register:N,unregister:O}=x,A=u.useRef(null);u.useEffect(()=>N(f),[N,f]),u.useEffect(()=>{if(p===H.Hidden&&f.current){if(E&&w!=="visible"){z("visible");return}return P(w,{hidden:()=>O(f),visible:()=>N(f)})}},[w,f,N,O,E,p]);let J=I({enter:V(l),enterFrom:V(a),enterTo:V(s),entered:V(c),leave:V(d),leaveFrom:V(v),leaveTo:V($)}),W=En({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:i}),Y=re();u.useEffect(()=>{if(Y&&w==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,w,Y]);let Z=y&&!F,ie=(()=>!Y||Z||A.current===E?"idle":E?"enter":"leave")(),j=un(0),ve=b(L=>P(L,{enter:()=>{j.addFlag(R.Opening),W.current.beforeEnter()},leave:()=>{j.addFlag(R.Closing),W.current.beforeLeave()},idle:()=>{}})),he=b(L=>P(L,{enter:()=>{j.removeFlag(R.Opening),W.current.afterEnter()},leave:()=>{j.removeFlag(R.Closing),W.current.afterLeave()},idle:()=>{}})),_=Ge(()=>{z("hidden"),O(f)},x);fn({container:f,classes:J,direction:ie,onStart:I(L=>{_.onStart(f,L,ve)}),onStop:I(L=>{_.onStop(f,L,he),L==="leave"&&!me(_)&&(z("hidden"),O(f))})}),u.useEffect(()=>{!Z||(p===H.Hidden?A.current=null:A.current=E)},[E,Z,w]);let ee=m,ge={ref:g};return F&&E&&ke.isServer&&(ee={...ee,className:et(m.className,...J.current.enter,...J.current.enterFrom)}),h.createElement(pe.Provider,{value:_},h.createElement(nt,{value:P(w,{visible:R.Open,hidden:R.Closed})|j.flags},k({ourProps:ge,theirProps:ee,defaultTag:bn,features:Ke,visible:w==="visible",name:"Transition.Child"})))}),De=C(function(e,t){let{show:n,appear:r=!1,unmount:o,...i}=e,l=u.useRef(null),a=D(l,t);re();let s=xe();if(n===void 0&&s!==null&&(n=(s&R.Open)===R.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=u.useState(n?"visible":"hidden"),v=Ge(()=>{d("hidden")}),[$,m]=u.useState(!0),f=u.useRef([n]);B(()=>{$!==!1&&f.current[f.current.length-1]!==n&&(f.current.push(n),m(!1))},[f,n]);let g=u.useMemo(()=>({show:n,appear:r,initial:$}),[n,r,$]);u.useEffect(()=>{if(n)d("visible");else if(!me(v))d("hidden");else{let E=l.current;if(!E)return;let F=E.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&d("hidden")}},[n,v]);let p={unmount:o};return h.createElement(pe.Provider,{value:v},h.createElement(fe.Provider,{value:g},k({ourProps:{...p,as:u.Fragment,children:h.createElement(Qe,{ref:a,...p,...i})},theirProps:{},defaultTag:u.Fragment,features:Ke,visible:c==="visible",name:"Transition"})))}),wn=C(function(e,t){let n=u.useContext(fe)!==null,r=xe()!==null;return h.createElement(h.Fragment,null,!n&&r?h.createElement(De,{ref:t,...e}):h.createElement(Qe,{ref:t,...e}))}),Fn=Object.assign(De,{Child:wn,Root:De});export{Fn as Y,Pn as y};
