import{c as Fc,D as gr,t as Ci,w as st,m as Ei,p as am,d as yr,P as sm,F as Yt,E as Ro,b as om,l as Qn,r as lm,a as Ks,g as hm,e as Do,f as Nc,O as Bc,h as um,s as cm,i as zc,j as G,k as Ol,n as $c,o as Gc,q as Uc,u as va,v as ko,x as dm,M as fm,y as B,z as pm,A as Fr,B as mm,C as Ja,K as ts,G as es,H as tt,I as Po,J as br,L as vm,N as _m,Q as is,R as Vc,S as Lo,T as Ne,U as Yc,V as gm,W as Wc,X as rs,Y as xr,Z as Ce,_ as Hc,$ as Cn,a0 as ns,a1 as as,a2 as En,a3 as ss,a4 as ym,a5 as jc,a6 as Sn,a7 as qc,a8 as Tn,a9 as ue,aa as bm,ab as ai,ac as Fo,ad as xm,ae as os,af as wm,ag as Am,ah as No,ai as Mn,aj as In,ak as On,al as Xc,am as Zc,an as Kc,ao as Qc,ap as Cm,aq as Em,ar as Sm,as as Tm,at as Bo,au as Mm,av as Im,aw as Om,ax as Rm,ay as Dm,az as km,aA as Pm,aB as Lm,aC as Jc,aD as Fm,aE as Nm,aF as Bm,aG as zm,aH as $m,aI as Gm,aJ as Um,aK as Vm,aL as Ym,aM as Wm,aN as Hm,aO as jm,aP as qm,aQ as Xm,aR as Zm}from"./generated-flow-imports.ac3c1413.js";import{i as O,r as I,T as q,a as zo,c as td,t as ed,D as Km}from"./indexhtml.5d9181b7.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ls=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Sa;function Rl(i){i&&i.shimcssproperties?Sa=!1:Sa=ls||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let ln;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ln=window.ShadyCSS.cssBuild);const id=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Sa=window.ShadyCSS.nativeCss:window.ShadyCSS?(Rl(window.ShadyCSS),window.ShadyCSS=void 0):Rl(window.WebComponents&&window.WebComponents.flags);const $o=Sa;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Dl{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function rd(i){return i=Qm(i),nd(Jm(i),i)}function Qm(i){return i.replace(Pe.comments,"").replace(Pe.port,"")}function Jm(i){let t=new Dl;t.start=0,t.end=i.length;let e=t;for(let r=0,n=i.length;r<n;r++)if(i[r]===sd){e.rules||(e.rules=[]);let a=e,s=a.rules[a.rules.length-1]||null;e=new Dl,e.start=r+1,e.parent=a,e.previous=s,a.rules.push(e)}else i[r]===od&&(e.end=r+1,e=e.parent||t);return t}function nd(i,t){let e=t.substring(i.start,i.end-1);if(i.parsedCssText=i.cssText=e.trim(),i.parent){let n=i.previous?i.previous.end:i.parent.start;e=t.substring(n,i.start-1),e=tv(e),e=e.replace(Pe.multipleSpaces," "),e=e.substring(e.lastIndexOf(";")+1);let a=i.parsedSelector=i.selector=e.trim();i.atRule=a.indexOf(sv)===0,i.atRule?a.indexOf(av)===0?i.type=Je.MEDIA_RULE:a.match(Pe.keyframesRule)&&(i.type=Je.KEYFRAMES_RULE,i.keyframesName=i.selector.split(Pe.multipleSpaces).pop()):a.indexOf(ld)===0?i.type=Je.MIXIN_RULE:i.type=Je.STYLE_RULE}let r=i.rules;if(r)for(let n=0,a=r.length,s;n<a&&(s=r[n]);n++)nd(s,t);return i}function tv(i){return i.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}function ad(i,t,e=""){let r="";if(i.cssText||i.rules){let n=i.rules;if(n&&!ev(n))for(let a=0,s=n.length,o;a<s&&(o=n[a]);a++)r=ad(o,t,r);else r=t?i.cssText:iv(i.cssText),r=r.trim(),r&&(r="  "+r+`
`)}return r&&(i.selector&&(e+=i.selector+" "+sd+`
`),e+=r,i.selector&&(e+=od+`

`)),e}function ev(i){let t=i[0];return Boolean(t)&&Boolean(t.selector)&&t.selector.indexOf(ld)===0}function iv(i){return i=rv(i),nv(i)}function rv(i){return i.replace(Pe.customProp,"").replace(Pe.mixinProp,"")}function nv(i){return i.replace(Pe.mixinApply,"").replace(Pe.varApply,"")}const Je={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},sd="{",od="}",Pe={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ld="--",av="@media",sv="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qs=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ta=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ov=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kl=new Set,lv="shady-unscoped";function hv(i){const t=i.textContent;if(!kl.has(t)){kl.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function uv(i){return i.hasAttribute(lv)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Js(i,t){return i?(typeof i=="string"&&(i=rd(i)),t&&tn(i,t),ad(i,$o)):""}function Pl(i){return!i.__cssRules&&i.textContent&&(i.__cssRules=rd(i.textContent)),i.__cssRules||null}function tn(i,t,e,r){if(!i)return;let n=!1,a=i.type;if(r&&a===Je.MEDIA_RULE){let o=i.selector.match(ov);o&&(window.matchMedia(o[1]).matches||(n=!0))}a===Je.STYLE_RULE?t(i):e&&a===Je.KEYFRAMES_RULE?e(i):a===Je.MIXIN_RULE&&(n=!0);let s=i.rules;if(s&&!n)for(let o=0,l=s.length,h;o<l&&(h=s[o]);o++)tn(h,t,e,r)}function cv(i,t){let e=0;for(let r=t,n=i.length;r<n;r++)if(i[r]==="(")e++;else if(i[r]===")"&&--e===0)return r;return-1}function hd(i,t){let e=i.indexOf("var(");if(e===-1)return t(i,"","","");let r=cv(i,e+3),n=i.substring(e+4,r),a=i.substring(0,e),s=hd(i.substring(r+1),t),o=n.indexOf(",");if(o===-1)return t(a,n.trim(),"",s);let l=n.substring(0,o).trim(),h=n.substring(o+1).trim();return t(a,l,h,s)}window.ShadyDOM&&window.ShadyDOM.wrap;function dv(i){let t=i.localName,e="",r="";return t?t.indexOf("-")>-1?e=t:(r=t,e=i.getAttribute&&i.getAttribute("is")||""):(e=i.is,r=i.extends),{is:e,typeExtension:r}}function fv(i){const t=[],e=i.querySelectorAll("style");for(let r=0;r<e.length;r++){const n=e[r];uv(n)?ls||(hv(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}const ud="css-build";function pv(i){if(ln!==void 0)return ln;if(i.__cssBuild===void 0){const t=i.getAttribute(ud);if(t)i.__cssBuild=t;else{const e=mv(i);e!==""&&vv(i),i.__cssBuild=e}}return i.__cssBuild||""}function Ll(i){return pv(i)!==""}function mv(i){const t=i.localName==="template"?i.content.firstChild:i.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===ud)return e[1]}return""}function vv(i){const t=i.localName==="template"?i.content.firstChild:i.firstChild;t.parentNode.removeChild(t)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function to(i,t){for(let e in t)e===null?i.style.removeProperty(e):i.style.setProperty(e,t[e])}function cd(i,t){const e=window.getComputedStyle(i).getPropertyValue(t);return e?e.trim():""}function _v(i){const t=Ta.test(i)||Qs.test(i);return Ta.lastIndex=0,Qs.lastIndex=0,t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gv=/;\s*/m,yv=/^\s*(initial)|(inherit)\s*$/,Fl=/\s*!important/,eo="_-_";class bv{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Ma=null;class Bt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new bv}detectMixin(t){return _v(t)}gatherStyles(t){const e=fv(t.content);if(e){const r=document.createElement("style");return r.textContent=e,t.content.insertBefore(r,t.content.firstChild),r}return null}transformTemplate(t,e){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const r=t._gatheredStyle;return r?this.transformStyle(r,e):null}transformStyle(t,e=""){let r=Pl(t);return this.transformRules(r,e),t.textContent=Js(r),r}transformCustomStyle(t){let e=Pl(t);return tn(e,r=>{r.selector===":root"&&(r.selector="html"),this.transformRule(r)}),t.textContent=Js(e),e}transformRules(t,e){this._currentElement=e,tn(t,r=>{this.transformRule(r)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(Qs,(r,n,a,s)=>this._produceCssProperties(r,n,a,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const r={};let n=!1;return tn(e,a=>{n=n||a===t,!n&&a.selector===t.selector&&Object.assign(r,this._cssTextToMap(a.parsedCssText))}),r}_consumeCssProperties(t,e){let r=null;for(;r=Ta.exec(t);){let n=r[0],a=r[1],s=r.index,o=s+n.indexOf("@apply"),l=s+n.length,h=t.slice(0,o),u=t.slice(l),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(h));let d=this._atApplyToCssProperties(a,c);t=`${h}${d}${u}`,Ta.lastIndex=s+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(gv,"");let r=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let a,s,o;const l=n.properties;for(a in l)o=e&&e[a],s=[a,": var(",t,eo,a],o&&s.push(",",o.replace(Fl,"")),s.push(")"),Fl.test(l[a])&&s.push(" !important"),r.push(s.join(""))}return r.join("; ")}_replaceInitialOrInherit(t,e){let r=yv.exec(e);return r&&(r[1]?e=this._getInitialValueForProperty(t):e="apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let r=t.split(";"),n,a,s={};for(let o=0,l,h;o<r.length;o++)l=r[o],l&&(h=l.split(":"),h.length>1&&(n=h[0].trim(),a=h.slice(1).join(":"),e&&(a=this._replaceInitialOrInherit(n,a)),s[n]=a));return s}_invalidateMixinEntry(t){if(!!Ma)for(let e in t.dependants)e!==this._currentElement&&Ma(e)}_produceCssProperties(t,e,r,n,a){if(r&&hd(r,(v,_)=>{_&&this._map.get(_)&&(n=`@apply ${_};`)}),!n)return t;let s=this._consumeCssProperties(""+n,a),o=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(s,!0),h=l,u=this._map.get(e),c=u&&u.properties;c?h=Object.assign(Object.create(c),l):this._map.set(e,h);let d=[],f,p,m=!1;for(f in h)p=l[f],p===void 0&&(p="initial"),c&&!(f in c)&&(m=!0),d.push(`${e}${eo}${f}: ${p}`);return m&&this._invalidateMixinEntry(u),u&&(u.properties=h),r&&(o=`${t};${o}`),`${o}${d.join("; ")};`}}Bt.prototype.detectMixin=Bt.prototype.detectMixin;Bt.prototype.transformStyle=Bt.prototype.transformStyle;Bt.prototype.transformCustomStyle=Bt.prototype.transformCustomStyle;Bt.prototype.transformRules=Bt.prototype.transformRules;Bt.prototype.transformRule=Bt.prototype.transformRule;Bt.prototype.transformTemplate=Bt.prototype.transformTemplate;Bt.prototype._separator=eo;Object.defineProperty(Bt.prototype,"invalidCallback",{get(){return Ma},set(i){Ma=i}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const io={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ia="_applyShimCurrentVersion",hr="_applyShimNextVersion",Oa="_applyShimValidatingVersion",xv=Promise.resolve();function wv(i){let t=io[i];t&&Av(t)}function Av(i){i[Ia]=i[Ia]||0,i[Oa]=i[Oa]||0,i[hr]=(i[hr]||0)+1}function dd(i){return i[Ia]===i[hr]}function Cv(i){return!dd(i)&&i[Oa]===i[hr]}function Ev(i){i[Oa]=i[hr],i._validating||(i._validating=!0,xv.then(function(){i[Ia]=i[hr],i._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ts=null,Nl=window.HTMLImports&&window.HTMLImports.whenReady||null,Ms;function Bl(i){requestAnimationFrame(function(){Nl?Nl(i):(Ts||(Ts=new Promise(t=>{Ms=t}),document.readyState==="complete"?Ms():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Ms()})),Ts.then(function(){i&&i()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zl="__seenByShadyCSS",Jn="__shadyCSSCachedStyle";let Ra=null,en=null;class hi{constructor(){this.customStyles=[],this.enqueued=!1,Bl(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!en||(this.enqueued=!0,Bl(en))}addCustomStyle(t){t[zl]||(t[zl]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Jn])return t[Jn];let e;return t.getStyle?e=t.getStyle():e=t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const r=t[e];if(r[Jn])continue;const n=this.getStyleForCustomStyle(r);if(n){const a=n.__appliedElement||n;Ra&&Ra(a),r[Jn]=a}}return t}}hi.prototype.addCustomStyle=hi.prototype.addCustomStyle;hi.prototype.getStyleForCustomStyle=hi.prototype.getStyleForCustomStyle;hi.prototype.processStyles=hi.prototype.processStyles;Object.defineProperties(hi.prototype,{transformCallback:{get(){return Ra},set(i){Ra=i}},validateCallback:{get(){return en},set(i){let t=!1;en||(t=!0),en=i,t&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Hr=new Bt;class Sv{constructor(){this.customStyleInterface=null,Hr.invalidCallback=wv}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Hr.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Ll(t))return;io[e]=t;let r=Hr.transformTemplate(t,e);t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(!!this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let r=t[e],n=this.customStyleInterface.getStyleForCustomStyle(r);n&&Hr.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&to(t,e),t.shadowRoot){this.styleElement(t);let r=t.shadowRoot.children||t.shadowRoot.childNodes;for(let n=0;n<r.length;n++)this.styleSubtree(r[n])}else{let r=t.children||t.childNodes;for(let n=0;n<r.length;n++)this.styleSubtree(r[n])}}styleElement(t){this.ensure();let{is:e}=dv(t),r=io[e];if(!(r&&Ll(r))&&r&&!dd(r)){Cv(r)||(this.prepareTemplate(r,e),Ev(r));let n=t.shadowRoot;if(n){let a=n.querySelector("style");a&&(a.__cssRules=r._styleAst,a.textContent=Js(r._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const i=new Sv;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,r,n){i.flushCustomStyles(),i.prepareTemplate(e,r)},prepareTemplateStyles(e,r,n){window.ShadyCSS.prepareTemplate(e,r,n)},prepareTemplateDom(e,r){},styleSubtree(e,r){i.flushCustomStyles(),i.styleSubtree(e,r)},styleElement(e){i.flushCustomStyles(),i.styleElement(e)},styleDocument(e){i.flushCustomStyles(),i.styleDocument(e)},getComputedStyleValue(e,r){return cd(e,r)},flushCustomStyles(){i.flushCustomStyles()},nativeCss:$o,nativeShadow:ls,cssBuild:ln,disableRuntime:id},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Hr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Go=typeof document.head.style.touchAction=="string",Da="__polymerGestures",_a="__polymerGesturesHandled",ro="__polymerGesturesTouchAction",$l=25,Gl=5,Tv=2,Mv=2500,fd=["mousedown","mousemove","mouseup","click"],Iv=[0,1,4,2],Ov=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Uo(i){return fd.indexOf(i)>-1}let Vo=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){Vo=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function pd(i){if(!(Uo(i)||i==="touchend")&&Go&&Vo&&am)return{passive:!0}}let md=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const no=[],Rv={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Dv={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function kv(i){return Rv[i.localName]||!1}function Pv(i){let t=Array.prototype.slice.call(i.labels||[]);if(!t.length){t=[];try{let e=i.getRootNode();if(i.id){let r=e.querySelectorAll(`label[for = '${i.id}']`);for(let n=0;n<r.length;n++)t.push(r[n])}}catch{}}return t}let Ul=function(i){let t=i.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(i[_a]={skip:!0},i.type==="click")){let e=!1,r=hs(i);for(let n=0;n<r.length;n++){if(r[n].nodeType===Node.ELEMENT_NODE){if(r[n].localName==="label")no.push(r[n]);else if(kv(r[n])){let a=Pv(r[n]);for(let s=0;s<a.length;s++)e=e||no.indexOf(a[s])>-1}}if(r[n]===Ot.mouse.target)return}if(e)return;i.preventDefault(),i.stopPropagation()}};function Vl(i){let t=md?["click"]:fd;for(let e=0,r;e<t.length;e++)r=t[e],i?(no.length=0,document.addEventListener(r,Ul,!0)):document.removeEventListener(r,Ul,!0)}function Lv(i){if(!Fc)return;Ot.mouse.mouseIgnoreJob||Vl(!0);let t=function(){Vl(),Ot.mouse.target=null,Ot.mouse.mouseIgnoreJob=null};Ot.mouse.target=hs(i)[0],Ot.mouse.mouseIgnoreJob=gr.debounce(Ot.mouse.mouseIgnoreJob,Ci.after(Mv),t)}function Si(i){let t=i.type;if(!Uo(t))return!1;if(t==="mousemove"){let e=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Ov&&(e=Iv[i.which]||0),Boolean(e&1)}else return(i.button===void 0?0:i.button)===0}function Fv(i){if(i.type==="click"){if(i.detail===0)return!0;let t=si(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let e=t.getBoundingClientRect(),r=i.pageX,n=i.pageY;return!(r>=e.left&&r<=e.right&&n>=e.top&&n<=e.bottom)}return!1}let Ot={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Nv(i){let t="auto",e=hs(i);for(let r=0,n;r<e.length;r++)if(n=e[r],n[ro]){t=n[ro];break}return t}function vd(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function nr(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}Fc&&document.addEventListener("touchend",Lv,Vo?{passive:!0}:!1);const hs=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],Rn={},bi=[];function Bv(i,t){let e=document.elementFromPoint(i,t),r=e;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(i,t),n===r)break;r&&(e=r)}return e}function si(i){const t=hs(i);return t.length>0?t[0]:i.target}function _d(i){let t,e=i.type,n=i.currentTarget[Da];if(!n)return;let a=n[e];if(!!a){if(!i[_a]&&(i[_a]={},e.slice(0,5)==="touch")){i=i;let s=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(Ot.touch.id=s.identifier),Ot.touch.id!==s.identifier)return;Go||(e==="touchstart"||e==="touchmove")&&zv(i)}if(t=i[_a],!t.skip){for(let s=0,o;s<bi.length;s++)o=bi[s],a[o.name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(i.type)>-1&&o.reset&&o.reset();for(let s=0,o;s<bi.length;s++)o=bi[s],a[o.name]&&!t[o.name]&&(t[o.name]=!0,o[e](i))}}}function zv(i){let t=i.changedTouches[0],e=i.type;if(e==="touchstart")Ot.touch.x=t.clientX,Ot.touch.y=t.clientY,Ot.touch.scrollDecided=!1;else if(e==="touchmove"){if(Ot.touch.scrollDecided)return;Ot.touch.scrollDecided=!0;let r=Nv(i),n=!1,a=Math.abs(Ot.touch.x-t.clientX),s=Math.abs(Ot.touch.y-t.clientY);i.cancelable&&(r==="none"?n=!0:r==="pan-x"?n=s>a:r==="pan-y"&&(n=a>s)),n?i.preventDefault():ka("track")}}function $v(i,t,e){return Rn[t]?(Uv(i,t,e),!0):!1}function Gv(i,t,e){return Rn[t]?(Vv(i,t,e),!0):!1}function Uv(i,t,e){let r=Rn[t],n=r.deps,a=r.name,s=i[Da];s||(i[Da]=s={});for(let o=0,l,h;o<n.length;o++)l=n[o],!(md&&Uo(l)&&l!=="click")&&(h=s[l],h||(s[l]=h={_count:0}),h._count===0&&i.addEventListener(l,_d,pd(l)),h[a]=(h[a]||0)+1,h._count=(h._count||0)+1);i.addEventListener(t,e),r.touchAction&&gd(i,r.touchAction)}function Vv(i,t,e){let r=Rn[t],n=r.deps,a=r.name,s=i[Da];if(s)for(let o=0,l,h;o<n.length;o++)l=n[o],h=s[l],h&&h[a]&&(h[a]=(h[a]||1)-1,h._count=(h._count||1)-1,h._count===0&&i.removeEventListener(l,_d,pd(l)));i.removeEventListener(t,e)}function Yo(i){bi.push(i);for(let t=0;t<i.emits.length;t++)Rn[i.emits[t]]=i}function Yv(i){for(let t=0,e;t<bi.length;t++){e=bi[t];for(let r=0,n;r<e.emits.length;r++)if(n=e.emits[r],n===i)return e}return null}function gd(i,t){Go&&i instanceof HTMLElement&&Ei.run(()=>{i.style.touchAction=t}),i[ro]=t}function Wo(i,t,e){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=e,st(i).dispatchEvent(r),r.defaultPrevented){let n=e.preventer||e.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function ka(i){let t=Yv(i);t.info&&(t.info.prevent=!0)}Yo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){nr(this.info)},mousedown:function(i){if(!Si(i))return;let t=si(i),e=this,r=function(s){Si(s)||(Nr("up",t,s),nr(e.info))},n=function(s){Si(s)&&Nr("up",t,s),nr(e.info)};vd(this.info,r,n),Nr("down",t,i)},touchstart:function(i){Nr("down",si(i),i.changedTouches[0],i)},touchend:function(i){Nr("up",si(i),i.changedTouches[0],i)}});function Nr(i,t,e,r){!t||Wo(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r,prevent:function(n){return ka(n)}})}Yo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>Tv&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,nr(this.info)},mousedown:function(i){if(!Si(i))return;let t=si(i),e=this,r=function(s){let o=s.clientX,l=s.clientY;Yl(e.info,o,l)&&(e.info.state=e.info.started?s.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&ka("tap"),e.info.addMove({x:o,y:l}),Si(s)||(e.info.state="end",nr(e.info)),t&&Is(e.info,t,s),e.info.started=!0)},n=function(s){e.info.started&&r(s),nr(e.info)};vd(this.info,r,n),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(i){let t=si(i),e=i.changedTouches[0],r=e.clientX,n=e.clientY;Yl(this.info,r,n)&&(this.info.state==="start"&&ka("tap"),this.info.addMove({x:r,y:n}),Is(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend:function(i){let t=si(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Is(this.info,t,e))}});function Yl(i,t,e){if(i.prevent)return!1;if(i.started)return!0;let r=Math.abs(i.x-t),n=Math.abs(i.y-e);return r>=Gl||n>=Gl}function Is(i,t,e){if(!t)return;let r=i.moves[i.moves.length-2],n=i.moves[i.moves.length-1],a=n.x-i.x,s=n.y-i.y,o,l=0;r&&(o=n.x-r.x,l=n.y-r.y),Wo(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:a,dy:s,ddx:o,ddy:l,sourceEvent:e,hover:function(){return Bv(e.clientX,e.clientY)}})}Yo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){Si(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){Si(i)&&Wl(this.info,i)},touchstart:function(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(i){Wl(this.info,i.changedTouches[0],i)}});function Wl(i,t,e){let r=Math.abs(t.clientX-i.x),n=Math.abs(t.clientY-i.y),a=si(e||t);!a||Dv[a.localName]&&a.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=$l&&n<=$l||Fv(t))&&(i.prevent||Wo(a,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yd=yr(i=>{class t extends i{_addEventListenerToNode(r,n,a){$v(r,n,a)||super._addEventListenerToNode(r,n,a)}_removeEventListenerFromNode(r,n,a){Gv(r,n,a)||super._removeEventListenerFromNode(r,n,a)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Wv=/:host\(:dir\((ltr|rtl)\)\)/g,Hv=':host([dir="$1"])',jv=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,qv=':host([dir="$2"]) $1',Xv=/:dir\((?:ltr|rtl)\)/,Hl=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),rn=[];let nn=null,Ho="";function bd(){Ho=document.documentElement.getAttribute("dir")}function xd(i){i.__autoDirOptOut||i.setAttribute("dir",Ho)}function wd(){bd(),Ho=document.documentElement.getAttribute("dir");for(let i=0;i<rn.length;i++)xd(rn[i])}function Zv(){nn&&nn.takeRecords().length&&wd()}const Kv=yr(i=>{Hl||nn||(bd(),nn=new MutationObserver(wd),nn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=sm(i);class e extends t{static _processStyleText(n,a){return n=t._processStyleText.call(this,n,a),!Hl&&Xv.test(n)&&(n=this._replaceDirInCssText(n),this.__activateDir=!0),n}static _replaceDirInCssText(n){let a=n;return a=a.replace(Wv,Hv),a=a.replace(jv,qv),a}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Zv(),rn.push(this),xd(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const n=rn.indexOf(this);n>-1&&rn.splice(n,1)}}}return e.__activateDir=!1,e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function jl(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?jl():window.addEventListener("DOMContentLoaded",jl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $i=Element.prototype,Qv=$i.matches||$i.matchesSelector||$i.mozMatchesSelector||$i.msMatchesSelector||$i.oMatchesSelector||$i.webkitMatchesSelector,Ad=function(i,t){return Qv.call(i,t)};class at{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Yt(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(st(this.node).contains(t))return!0;let e=t,r=t.ownerDocument;for(;e&&e!==r&&e!==this.node;)e=st(e).parentNode||st(e).host;return e===this.node}getOwnerRoot(){return st(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?st(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=st(this.node).assignedSlot;for(;e;)t.push(e),e=st(e).assignedSlot;return t}importNode(t,e){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return st(r).importNode(t,e)}getEffectiveChildNodes(){return Yt.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),r=[];for(let n=0,a=e.length,s;n<a&&(s=e[n]);n++)s.nodeType===Node.ELEMENT_NODE&&Ad(s,t)&&r.push(s);return r}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function Jv(i,t){for(let e=0;e<t.length;e++){let r=t[e];i[r]=function(){return this.node[r].apply(this.node,arguments)}}}function ql(i,t){for(let e=0;e<t.length;e++){let r=t[e];Object.defineProperty(i,r,{get:function(){return this.node[r]},configurable:!0})}}function t_(i,t){for(let e=0;e<t.length;e++){let r=t[e];Object.defineProperty(i,r,{get:function(){return this.node[r]},set:function(n){this.node[r]=n},configurable:!0})}}class ao{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}at.prototype.cloneNode;at.prototype.appendChild;at.prototype.insertBefore;at.prototype.removeChild;at.prototype.replaceChild;at.prototype.setAttribute;at.prototype.removeAttribute;at.prototype.querySelector;at.prototype.querySelectorAll;at.prototype.parentNode;at.prototype.firstChild;at.prototype.lastChild;at.prototype.nextSibling;at.prototype.previousSibling;at.prototype.firstElementChild;at.prototype.lastElementChild;at.prototype.nextElementSibling;at.prototype.previousElementSibling;at.prototype.childNodes;at.prototype.children;at.prototype.classList;at.prototype.textContent;at.prototype.innerHTML;let so=at;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class i extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(at.prototype).forEach(t=>{t!="activeElement"&&(i.prototype[t]=at.prototype[t])}),ql(i.prototype,["classList"]),so=i,Object.defineProperties(ao.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&Ft(t).getOwnerRoot(),r=this.path;for(let n=0;n<r.length;n++){const a=r[n];if(Ft(a).getOwnerRoot()===e)return a}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Jv(at.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),ql(at.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),t_(at.prototype,["textContent","innerHTML","className"]);const Ft=function(i){if(i=i||document,i instanceof so||i instanceof ao)return i;let t=i.__domApi;return t||(i instanceof Event?t=new ao(i):t=new so(i),i.__domApi=t),t};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Os=window.ShadyDOM,Xl=window.ShadyCSS;function Zl(i,t){return st(i).getRootNode()===t}function e_(i,t=!1){if(!Os||!Xl||!Os.handlesDynamicScoping)return null;const e=Xl.ScopingShim;if(!e)return null;const r=e.scopeForNode(i),n=st(i).getRootNode(),a=s=>{if(!Zl(s,n))return;const o=Array.from(Os.nativeMethods.querySelectorAll.call(s,"*"));o.push(s);for(let l=0;l<o.length;l++){const h=o[l];if(!Zl(h,n))continue;const u=e.currentScopeForNode(h);u!==r&&(u!==""&&e.unscopeNode(h,u),e.scopeNode(h,r))}};if(a(i),t){const s=new MutationObserver(o=>{for(let l=0;l<o.length;l++){const h=o[l];for(let u=0;u<h.addedNodes.length;u++){const c=h.addedNodes[u];c.nodeType===Node.ELEMENT_NODE&&a(c)}}});return s.observe(i,{childList:!0,subtree:!0}),s}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Rs="disable-upgrade",Cd=i=>{for(;i;){const t=Object.getOwnPropertyDescriptor(i,"observedAttributes");if(t)return t.get;i=Object.getPrototypeOf(i.prototype).constructor}return()=>[]},i_=yr(i=>{const t=Ro(i);let e=Cd(t);class r extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return e.call(this).concat(Rs)}_initializeProperties(){this.hasAttribute(Rs)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}attributeChangedCallback(a,s,o,l){a==Rs?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,st(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(a,s,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ta="disable-upgrade";let r_=window.ShadyCSS;const Ed=yr(i=>{const t=yd(Ro(i)),e=om?t:Kv(t),r=Cd(e),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class a extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,h){(this.__dataAttributes&&this.__dataAttributes[o]||o===ta)&&this.attributeChangedCallback(o,l,h,null)}setAttribute(o,l){if(Qn&&!this._legacyForceObservedAttributes){const h=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,h,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(Qn&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return Qn&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],lm(this.prototype)),this.__observedAttributes):r.call(this).concat(ta)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,h,u){l!==h&&(o==ta?this.__isUpgradeDisabled&&h==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,st(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,h,u),this.attributeChanged(o,l,h)))}attributeChanged(o,l,h){}_initializeProperties(){if(Ks&&this.hasAttribute(ta))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Qn&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,h){this._propertyToAttribute(o,l,h)}serializeValueToAttribute(o,l,h){this._valueToNodeAttribute(h||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let h=Object.getOwnPropertyNames(l);for(let u=0,c;u<h.length&&(c=h[u]);u++){let d=Object.getOwnPropertyDescriptor(l,c);d&&Object.defineProperty(o,c,d)}return o}mixin(o,l){for(let h in l)o[h]=l[h];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,h){h=h||{},l=l==null?{}:l;let u=new Event(o,{bubbles:h.bubbles===void 0?!0:h.bubbles,cancelable:Boolean(h.cancelable),composed:h.composed===void 0?!0:h.composed});u.detail=l;let c=h.node||this;return st(c).dispatchEvent(u),u}listen(o,l,h){o=o||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),c=u.get(o);c||(c={},u.set(o,c));let d=l+h;c[d]||(c[d]=this._addMethodEventListenerToNode(o,l,h,this))}unlisten(o,l,h){o=o||this;let u=this.__boundListeners&&this.__boundListeners.get(o),c=l+h,d=u&&u[c];d&&(this._removeEventListenerFromNode(o,l,d),u[c]=null)}setScrollDirection(o,l){gd(l||this,n[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=st(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const l=Ft(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ft(this).getEffectiveChildNodes()}queryDistributedElements(o){return Ft(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let h=0,u;u=o[h];h++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?Ft(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(h){return h.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const l=this;return l!==o&&st(l).contains(o)&&st(l).getRootNode()===st(o).getRootNode()}isLocalDescendant(o){return this.root===st(o).getRootNode()}scopeSubtree(o,l=!1){return e_(o,l)}getComputedStyleValue(o){return r_.getComputedStyleValue(this,o)}debounce(o,l,h){return this._debouncers=this._debouncers||{},this._debouncers[o]=gr.debounce(this._debouncers[o],h>0?Ci.after(h):Ei,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?Ci.run(o.bind(this),l):~Ei.run(o.bind(this))}cancelAsync(o){o<0?Ei.cancel(~o):Ci.cancel(o)}create(o,l){let h=document.createElement(o);if(l)if(h.setProperties)h.setProperties(l);else for(let u in l)h[u]=l[u];return h}elementMatches(o,l){return Ad(l||this,o)}toggleAttribute(o,l){let h=this;return arguments.length===3&&(h=arguments[2]),arguments.length==1&&(l=!h.hasAttribute(o)),l?(st(h).setAttribute(o,""),!0):(st(h).removeAttribute(o),!1)}toggleClass(o,l,h){h=h||this,arguments.length==1&&(l=!h.classList.contains(o)),l?h.classList.add(o):h.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,h,u){u=u||this,this.transform("translate3d("+o+","+l+","+h+")",u)}arrayDelete(o,l){let h;if(Array.isArray(o)){if(h=o.indexOf(l),h>=0)return o.splice(h,1)}else if(h=hm(this,o).indexOf(l),h>=0)return this.splice(o,h,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return a.prototype.is="",a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n_={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Sd={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a_=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Sd);function s_(i,t,e){const r=i._noAccessors,n=Object.getOwnPropertyNames(i);for(let a=0;a<n.length;a++){let s=n[a];if(!(s in e))if(r)t[s]=i[s];else{let o=Object.getOwnPropertyDescriptor(i,s);o&&(o.configurable=!0,Object.defineProperty(t,s,o))}}}function o_(i,t,e){for(let r=0;r<t.length;r++)Td(i,t[r],e,a_)}function Td(i,t,e,r){s_(t,i,r);for(let n in n_)t[n]&&(e[n]=e[n]||[],e[n].push(t[n]))}function Md(i,t,e){t=t||[];for(let r=i.length-1;r>=0;r--){let n=i[r];n?Array.isArray(n)?Md(n,t):t.indexOf(n)<0&&(!e||e.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function Kl(i,t){for(const e in t){const r=i[e],n=t[e];!("value"in n)&&r&&"value"in r?i[e]=Object.assign({value:r.value},n):i[e]=n}}const Ql=Ed(HTMLElement);function l_(i,t,e){let r;const n={};class a extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(r)for(let l=0,h;l<r.length;l++)h=r[l],h.properties&&this.createProperties(h.properties),h.observers&&this.createObservers(h.observers,h.properties);i.properties&&this.createProperties(i.properties),i.observers&&this.createObservers(i.observers,i.properties),this._prepareTemplate()}}static get properties(){const l={};if(r)for(let h=0;h<r.length;h++)Kl(l,r[h].properties);return Kl(l,i.properties),l}static get observers(){let l=[];if(r)for(let h=0,u;h<r.length;h++)u=r[h],u.observers&&(l=l.concat(u.observers));return i.observers&&(l=l.concat(i.observers)),l}created(){super.created();const l=n.created;if(l)for(let h=0;h<l.length;h++)l[h].call(this)}_registered(){const l=a.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Ks&&s(l);const h=Object.getPrototypeOf(this);let u=n.beforeRegister;if(u)for(let c=0;c<u.length;c++)u[c].call(h);if(u=n.registered,u)for(let c=0;c<u.length;c++)u[c].call(h)}}_applyListeners(){super._applyListeners();const l=n.listeners;if(l)for(let h=0;h<l.length;h++){const u=l[h];if(u)for(let c in u)this._addMethodEventListenerToNode(this,c,u[c])}}_ensureAttributes(){const l=n.hostAttributes;if(l)for(let h=l.length-1;h>=0;h--){const u=l[h];for(let c in u)this._ensureAttribute(c,u[c])}super._ensureAttributes()}ready(){super.ready();let l=n.ready;if(l)for(let h=0;h<l.length;h++)l[h].call(this)}attached(){super.attached();let l=n.attached;if(l)for(let h=0;h<l.length;h++)l[h].call(this)}detached(){super.detached();let l=n.detached;if(l)for(let h=0;h<l.length;h++)l[h].call(this)}attributeChanged(l,h,u){super.attributeChanged();let c=n.attributeChanged;if(c)for(let d=0;d<c.length;d++)c[d].call(this,l,h,u)}}if(e){Array.isArray(e)||(e=[e]);let o=t.prototype.behaviors;r=Md(e,null,o),a.prototype.behaviors=o?o.concat(e):r}const s=o=>{r&&o_(o,r,n),Td(o,i,n,Sd)};return Ks||s(a.prototype),a.generatedFrom=i,a}const h_=function(i,t){i||console.warn("Polymer.Class requires `info` argument");let e=t?t(Ql):Ql;return e=l_(i,e,i.behaviors),e.is=e.prototype.is=i.is,e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dn=function(i){let t;return typeof i=="function"?t=i:t=Dn.Class(i),i._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=i._legacyForceObservedAttributes),customElements.define(t.is,t),t};Dn.Class=h_;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u_={templatize(i,t){this._templatizerTemplate=i,this.ctor=Do(i,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(i){return new this.ctor(i)},modelForElement(i){return Nc(this._templatizerTemplate,i)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const c_=yd(Bc(um(HTMLElement)));class d_ extends c_{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),cm)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,r,n){this.mutableData=!0}connectedCallback(){zc()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){st(st(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),t)e.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});e.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",d_);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f_=Bc(G);class Jl extends f_{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ol,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),zc()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=st(st(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Do(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(n,a){let s=this.__instances;for(let o=0,l;o<s.length&&(l=s[o]);o++)l.forwardHostProp(n,a)},notifyInstanceProp:function(n,a,s){if($c(this.as,a)){let o=n[this.itemsIndexAs];a==this.as&&(this.items[o]=s);let l=Gc(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,a);this.notifyPath(l,s)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)t.indexOf(e[r])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=gr.debounce(this.__renderDebouncer,e>0?Ci.after(e):Ei,t.bind(this)),Uc(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),va()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Ol||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((r,n,a)=>this.__filterFn(t[r],n,a))),this.__sortFn&&e.sort((r,n)=>this.__sortFn(t[r],t[n])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-r,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const n=this.__itemsIdxToInstIdx={};let a;for(a=0;a<e;a++){let s=this.__instances[a],o=r[a],l=t[o];n[o]=a,s?(s._setPendingProperty(this.as,l),s._setPendingProperty(this.indexAs,a),s._setPendingProperty(this.itemsIndexAs,o),s._flushProperties()):this.__insertInstance(l,a,o)}for(let s=this.__instances.length-1;s>=a;s--)this.__detachAndRemoveInstance(s)}__detachInstance(t){let e=this.__instances[t];const r=st(e.root);for(let n=0;n<e.children.length;n++){let a=e.children[n];r.appendChild(a)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(t,e,r){const n=this.__stampInstance(t,e,r);let a=this.__instances[e+1],s=a?a.children[0]:this;return st(st(this).parentNode).insertBefore(n.root,s),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),n=r.indexOf("."),a=n<0?r:r.substring(0,n);if(a==parseInt(a,10)){let s=n<0?"":r.substring(n+1);this.__handleObservedPaths(s);let o=this.__itemsIdxToInstIdx[a],l=this.__instances[o];if(l){let h=this.as+(s?"."+s:"");l._setPendingPropertyOrPath(h,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Nc(this.template,t)}}customElements.define(Jl.is,Jl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let p_=yr(i=>{let t=Ro(i);class e extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,a){let s=a.path;if(s==JSCompiler_renameProperty("items",this)){let o=a.base||[],l=this.__lastItems,h=this.__lastMulti;if(n!==h&&this.clearSelection(),l){let u=ko(o,l);this.__applySplices(u)}this.__lastItems=o,this.__lastMulti=n}else if(a.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(a.value.indexSplices);else{let o=s.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(n){let a=this.__selectedMap;for(let o=0;o<n.length;o++){let l=n[o];a.forEach((h,u)=>{h<l.index||(h>=l.index+l.removed.length?a.set(u,h+l.addedCount-l.removed.length):a.set(u,-1))});for(let h=0;h<l.addedCount;h++){let u=l.index+h;a.has(this.items[u])&&a.set(this.items[u],u)}}this.__updateLinks();let s=0;a.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null,a.delete(l)):s++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(a=>{a>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${a}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let a=this.__selectedIndexForItemIndex(n);if(a>=0){let s=0;this.__selectedMap.forEach((o,l)=>{a==s++&&this.deselect(l)})}}__selectedIndexForItemIndex(n){let a=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(a)return parseInt(a.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let a=this.__selectedMap.get(n);if(a>=0){this.__selectedMap.delete(n);let s;this.multi&&(s=this.__selectedIndexForItemIndex(a)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let a=this.items[n];this.isSelected(a)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(a,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),a):this.selected=this.selectedItem=a)}}return e}),m_=p_(G);class th extends m_{static get is(){return"array-selector"}static get template(){return null}}customElements.define(th.is,th);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ga=new hi;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(i,t,e){},prepareTemplateDom(i,t){},prepareTemplateStyles(i,t,e){},styleSubtree(i,t){ga.processStyles(),to(i,t)},styleElement(i){ga.processStyles()},styleDocument(i){ga.processStyles(),to(document.body,i)},getComputedStyleValue(i,t){return cd(i,t)},flushCustomStyles(){},nativeCss:$o,nativeShadow:ls,cssBuild:ln,disableRuntime:id});window.ShadyCSS.CustomStyleInterface=ga;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const eh="include",v_=window.ShadyCSS.CustomStyleInterface;class __ extends HTMLElement{constructor(){super(),this._style=null,v_.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(eh);return e&&(t.removeAttribute(eh),t.textContent=dm(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",__);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Id;Id=fm._mutablePropertyChange;const g_={properties:{mutableData:Boolean},_shouldPropertyChange(i,t,e){return Id(this,i,t,e,this.mutableData)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y_=Ed(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Od=B`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Od.setAttribute("style","display: none;");document.head.appendChild(Od.content);var Rd=document.createElement("style");Rd.textContent="[hidden] { display: none !important; }";document.head.appendChild(Rd);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ee{constructor(t){ee[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return ee.types[t]&&ee.types[t][e]}set value(t){var e=this.type,r=this.key;e&&r&&(e=ee.types[e]=ee.types[e]||{},t==null?delete e[r]:e[r]=t)}get list(){var t=this.type;if(t){var e=ee.types[this.type];return e?Object.keys(e).map(function(r){return b_[this.type][r]},this):[]}}byKey(t){return this.key=t,this.value}}ee[" "]=function(){};ee.types={};var b_=ee.types;Dn({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(i,t,e){var r=new ee({type:i,key:t});return e!==void 0&&e!==r.value?r.value=e:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(i){i&&(this.value=this)},byKey:function(i){return new ee({type:this.type,key:i}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Dn({_template:B`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:y_.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(i){var t=(i||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(i){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Ft(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Ft(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ea=new Set;const x_={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ea.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(i){this.resizerShouldNotify(i)&&this._notifyDescendant(i)},this),this._fireResize())},assignParentResizable:function(i){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=i,i&&i._interestedResizables.indexOf(this)===-1&&(i._interestedResizables.push(this),i._subscribeIronResize(this))},stopResizeNotificationsFor:function(i){var t=this._interestedResizables.indexOf(i);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(i))},_subscribeIronResize:function(i){i.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(i){i.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(i){return!0},_onDescendantIronResize:function(i){if(this._notifyingDescendant){i.stopPropagation();return}pm||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(i){var t=Ft(i).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),i.stopPropagation())},_parentResizableChanged:function(i){i&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(i){!this.isAttached||(this._notifyingDescendant=!0,i.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var i=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),i()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(ea.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ea.delete(this):ea.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const w_={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(i,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!t)if(i==="document")this.scrollTarget=this._doc;else if(typeof i=="string"){var e=this.domHost;this.scrollTarget=e&&e.$?e.$[i]:Ft(this.ownerDocument).querySelector("#"+i)}else this._isValidScrollTarget()&&(this._oldScrollTarget=i,this._toggleScrollListener(this._shouldHaveListener,i))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(i){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,i):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=i)},set _scrollLeft(i){this.scrollTarget===this._doc?window.scrollTo(i,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i)},scroll:function(i,t){var e;typeof i=="object"?(e=i.left,t=i.top):e=i,e=e||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(e,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(i,t){var e=t===this._doc?window:t;i?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),e.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(e.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(i){this._shouldHaveListener=i,this._toggleScrollListener(i,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ih=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),A_=ih&&ih[1]>=8,rh=3,nh="-10000px",Br=-100;Dn({_template:B`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[u_,x_,w_,g_],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var i=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return i-this._viewportHeight},get _itemsParent(){return Ft(Ft(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var i=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,i-this._physicalCount)},set _virtualStart(i){i=this._clamp(i,0,this._maxVirtualStart),this.grid&&(i=i-i%this._itemsPerRow),this._virtualStartVal=i},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(i){i=i%this._physicalCount,i<0&&(i=this._physicalCount+i),this.grid&&(i=i-i%this._itemsPerRow),this._physicalStartVal=i},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(i){this._physicalCountVal=i},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var i=this._firstVisibleIndexVal;if(i==null){var t=this._physicalTop+this._scrollOffset;i=this._iterateItems(function(e,r){if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return this.grid?r-r%this._itemsPerRow:r;if(this.grid&&this._virtualCount-1===r)return r-r%this._itemsPerRow})||0,this._firstVisibleIndexVal=i}return i},get lastVisibleIndex(){var i=this._lastVisibleIndexVal;if(i==null){if(this.grid)i=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(e,r){t<this._scrollBottom&&(i=r),t+=this._getPhysicalSizeIncrement(e)})}this._lastVisibleIndexVal=i}return i},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,Fr),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(i){this.style.webkitOverflowScrolling=i===this?"touch":"",this.style.overflowY=i===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,Fr)},updateViewportBoundaries:function(){var i=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=Boolean(i.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var i=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=i-this._scrollPosition,e=t>=0;if(this._scrollPosition=i,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t=t-this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var n=this._getReusables(e);e?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,e?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ei)}},_getReusables:function(i){var t,e,r,n=[],a=this._hiddenContentSize*this._ratio,s=this._virtualStart,o=this._virtualEnd,l=this._physicalCount,h=this._physicalTop+this._scrollOffset,u=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,d=this._scrollBottom;for(i?(t=this._physicalStart,this._physicalEnd,e=c-h):(t=this._physicalEnd,this._physicalStart,e=u-d);r=this._getPhysicalSizeIncrement(t),e=e-r,!(n.length>=l||e<=a);)if(i){if(o+n.length+1>=this._virtualCount||h+r>=c-this._scrollOffset)break;n.push(t),h=h+r,t=(t+1)%l}else{if(s-n.length<=0||h+this._physicalSize-r<=d)break;n.push(t),h=h-r,t=t===0?l-1:t-1}return{indexes:n,physicalTop:h-this._scrollOffset}},_update:function(i,t){if(!(i&&i.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(i),this._updateMetrics(i),t)for(;t.length;){var e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(i){this._ensureTemplatized();var t,e,r=new Array(i);for(t=0;t<i;t++)e=this.stamp(null),r[t]=e.root.querySelector("*"),this._itemsParent.appendChild(e.root);return r},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(i){var t=this._clamp(this._physicalCount+i,rh,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var e=t%this._itemsPerRow;e&&t-e<=this._physicalCount&&(t+=this._itemsPerRow),t-=e}var r=t-this._physicalCount,n=Math.round(this._physicalCount*.5);if(!(r<0)){if(r>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(r));for(var s=0;s<r;s++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+r,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+r),this._update(),this._templateCost=(window.performance.now()-a)/r,n=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||n===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),mm):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),Ei))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var i=this._getReusables(!0);this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length,this._update(i.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(rh))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var i={};i.__key__=!0,i[this.as]=!0,i[this.indexAs]=!0,i[this.selectedAs]=!0,i.tabIndex=!0,this._instanceProps=i,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(i,t){typeof t>"u"||(this.notifyResize(),va(),i&&this._updateGridMetrics())},_itemsChanged:function(i){if(i.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,Fr);else if(i.path==="items.splices"){this._adjustVirtualIndex(i.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var t=i.value.indexSplices.some(function(n){return n.addedCount>0||n.removed.length>0});if(t){var e=this._getActiveElement();this.contains(e)&&e.blur()}var r=i.value.indexSplices.some(function(n){return n.index+n.addedCount>=this._virtualStart&&n.index<=this._virtualEnd},this);(!this._isClientFull()||r)&&this._debounce("_render",this._render,Fr)}else i.path!=="items.length"&&this._forwardItemPath(i.path,i.value)},_forwardItemPath:function(i,t){i=i.slice(6);var e=i.indexOf(".");e===-1&&(e=i.length);var r,n,a,s=this.modelForElement(this._offscreenFocusedItem),o=parseInt(i.substring(0,e),10);r=this._isIndexRendered(o),r?(n=this._getPhysicalIndex(o),a=this.modelForElement(this._physicalItems[n])):s&&(a=s),!(!a||a[this.indexAs]!==o)&&(i=i.substring(e+1),i=this.as+(i?"."+i:""),a._setPendingPropertyOrPath(i,t,!1,!0),a._flushProperties&&a._flushProperties(),r&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(i){i.forEach(function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}},this)},_removeItem:function(i){this.$.selector.deselect(i),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===i&&this._removeFocusedItem()},_iterateItems:function(i,t){var e,r,n,a;if(arguments.length===2&&t){for(a=0;a<t.length;a++)if(e=t[a],r=this._computeVidx(e),(n=i.call(this,e,r))!=null)return n}else{for(e=this._physicalStart,r=this._virtualStart;e<this._physicalCount;e++,r++)if((n=i.call(this,e,r))!=null)return n;for(e=0;e<this._physicalStart;e++,r++)if((n=i.call(this,e,r))!=null)return n}},_computeVidx:function(i){return i>=this._physicalStart?this._virtualStart+(i-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+i},_assignModels:function(i){this._iterateItems(function(t,e){var r=this._physicalItems[t],n=this.items&&this.items[e];if(n!=null){var a=this.modelForElement(r);a.__key__=null,this._forwardProperty(a,this.as,n),this._forwardProperty(a,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(a,this.indexAs,e),this._forwardProperty(a,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[a.__key__]=t,a._flushProperties&&a._flushProperties(!0),r.removeAttribute("hidden")}else r.setAttribute("hidden","")},i)},_updateMetrics:function(i){va();var t=0,e=0,r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems(function(a,s){e+=this._physicalSizes[a],this._physicalSizes[a]=this._physicalItems[a].offsetHeight,t+=this._physicalSizes[a],this._physicalAverageCount+=this._physicalSizes[a]?1:0},i),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(e=this._itemsPerRow===1?e:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-e,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var i=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,e=(this._viewportWidth-t)/2;this._iterateItems(function(r,n){var a=n%this._itemsPerRow,s=Math.floor(a*this._itemWidth+e);this._isRTL&&(s=s*-1),this.translate3d(s+"px",i+"px",0,this._physicalItems[r]),this._shouldRenderNextRow(n)&&(i+=this._rowHeight)})}else{const r=[];this._iterateItems(function(n,a){const s=this._physicalItems[n];this.translate3d(0,i+"px",0,s),i+=this._physicalSizes[n];const o=s.id;o&&r.push(o)}),r.length&&this.setAttribute("aria-owns",r.join(" "))}},_getPhysicalSizeIncrement:function(i){return this.grid?this._computeVidx(i)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[i]},_shouldRenderNextRow:function(i){return i%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var i=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(i!==0){this._physicalTop=this._physicalTop-i;var t=this._scrollPosition;!A_&&t>0&&this._resetScrollPosition(t-i)}},_resetScrollPosition:function(i){this.scrollTarget&&i>=0&&(this._scrollTop=i,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(i){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,i=i||this._scrollHeight===0,i=i||this._scrollPosition>=this._estScrollHeight-this._physicalSize,i=i||this.grid&&this.$.items.style.height<this._estScrollHeight,(i||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(i){return this.scrollToIndex(this.items.indexOf(i))},scrollToIndex:function(i){if(!(typeof i!="number"||i<0||i>this.items.length-1)&&(va(),this._physicalCount!==0)){i=this._clamp(i,0,this._virtualCount-1),(!this._isIndexRendered(i)||i>=this._maxVirtualStart)&&(this._virtualStart=this.grid?i-this._itemsPerRow*2:i-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,e=this._virtualStart,r=0,n=this._hiddenContentSize;e<i&&r<=n;)r=r+this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Fr)},selectItem:function(i){return this.selectIndex(this.items.indexOf(i))},selectIndex:function(i){if(!(i<0||i>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(i)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(i)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(i)}this.$.selector.selectIndex(i)}},deselectItem:function(i){return this.deselectIndex(this.items.indexOf(i))},deselectIndex:function(i){if(!(i<0||i>=this._virtualCount)){if(this._isIndexRendered(i)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(i)]);t[this.selectedAs]=!1,this.updateSizeForIndex(i)}this.$.selector.deselectIndex(i)}},toggleSelectionForItem:function(i){return this.toggleSelectionForIndex(this.items.indexOf(i))},toggleSelectionForIndex:function(i){var t=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(i):this.$.selector.isSelected(this.items[i]);t?this.deselectIndex(i):this.selectIndex(i)},clearSelection:function(){this._iterateItems(function(i,t){this.modelForElement(this._physicalItems[i])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(i){var t=i?this.listen:this.unlisten;t.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(i){var t=this.modelForElement(i.target);if(!!t){var e,r,n=Ft(i).path[0],a=this._getActiveElement(),s=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];n.localName==="input"||n.localName==="button"||n.localName==="select"||(e=t.tabIndex,t.tabIndex=Br,r=a?a.tabIndex:-1,t.tabIndex=e,!(a&&s!==a&&s.contains(a)&&r!==Br)&&this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(i){this.clearSelection(),this.$.selector.multi=i},updateSizeForItem:function(i){return this.updateSizeForIndex(this.items.indexOf(i))},updateSizeForIndex:function(i){return this._isIndexRendered(i)&&(this._updateMetrics([this._getPhysicalIndex(i)]),this._positionItems()),null},_manageFocus:function(){var i=this._focusedVirtualIndex;i>=0&&i<this._virtualCount?this._isIndexRendered(i)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(i){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(i/this._itemsPerRow)*this._itemsPerRow:i},_isIndexRendered:function(i){return i>=this._virtualStart&&i<=this._virtualEnd},_isIndexVisible:function(i){return i>=this.firstVisibleIndex&&i<=this.lastVisibleIndex},_getPhysicalIndex:function(i){return(this._physicalStart+(i-this._virtualStart))%this._physicalCount},focusItem:function(i){this._focusPhysicalItem(i)},_focusPhysicalItem:function(i){if(!(i<0||i>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(i)||this.scrollToIndex(i);var t=this._physicalItems[this._getPhysicalIndex(i)],e=this.modelForElement(t),r;e.tabIndex=Br,t.tabIndex===Br&&(r=t),r||(r=Ft(t).querySelector('[tabindex="'+Br+'"]')),e.tabIndex=0,this._focusedVirtualIndex=i,r&&r.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var i=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[i],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[i]=this._focusBackfillItem,this._focusedPhysicalIndex=i,this.translate3d(0,nh,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var i=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[i];if(!!t){var e=this.modelForElement(t),r=this.modelForElement(this._offscreenFocusedItem);e[this.as]===r[this.as]?(this._focusBackfillItem=t,e.tabIndex=-1,this._physicalItems[i]=this._offscreenFocusedItem,this.translate3d(0,nh,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(i){var t=this.modelForElement(i.target),e=this.modelForElement(this._focusedItem),r=this._offscreenFocusedItem!==null,n=this._focusedVirtualIndex;!t||(e===t?this._isIndexVisible(n)||this.scrollToIndex(n):(this._restoreFocusedItem(),e&&(e.tabIndex=-1),t.tabIndex=0,n=t[this.indexAs],this._focusedVirtualIndex=n,this._focusedPhysicalIndex=this._getPhysicalIndex(n),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],r&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(i){switch(i.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&i.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&i.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(i);break}},_clamp:function(i,t,e){return Math.min(e,Math.max(t,i))},_debounce:function(i,t,e){this._debouncers=this._debouncers||{},this._debouncers[i]=gr.debounce(this._debouncers[i],e,t.bind(this)),Uc(this._debouncers[i])},_forwardProperty:function(i,t,e){i._setPendingProperty(t,e)},_forwardHostPropV2:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).forwardHostProp(i,t)},this)},_notifyInstancePropV2:function(i,t,e){if($c(this.as,t)){var r=i[this.indexAs];t==this.as&&(this.items[r]=e),this.notifyPath(Gc(this.as,"items."+r,t),e)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(i,t,e){t.indexOf(this.as+".")===0&&this.notifyPath("items."+i.__key__+"."+t.slice(this.as.length+1),e)},_forwardParentPath:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).notifyPath(i,t)},this)},_forwardParentProp:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&(this.modelForElement(e)[i]=t)},this)},_getActiveElement:function(){var i=this._itemsParent.node.domHost;return Ft(i?i.root:document).activeElement}});const Dd=O`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;I("vaadin-details",Dd,{moduleId:"lumo-details"});const C_=O`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;I("vaadin-accordion-panel",[Dd,C_],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const E_=i=>class extends Ja(ts(i)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(e){super._onKeyDown(e),!e.defaultPrevented&&e.keyCode===9&&e.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(e){if(!this.disabled&&this.focusElement){const r=e.composedPath();if(r[0]===this&&this._keyboardActive&&this.focusElement.focus(),r[0]===this||r.includes(this.focusElement))return!0}return!1}_tabindexChanged(e){e!==void 0&&(this.focusElement.tabIndex=e),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oo extends E_(tt(q(G))){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready(),this._contentId=`${this.constructor.is}-content-${es()}`,this._collapsible.addEventListener("keydown",t=>{t.shiftKey&&t.keyCode===9&&t.stopPropagation()})}_getAriaExpanded(t){return t?"true":"false"}_getAriaHidden(t){return t?"false":"true"}_openedChanged(t){this._collapsible.style.maxHeight=t?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(t){[13,32].indexOf(t.keyCode)>-1&&(t.preventDefault(),this.opened=!this.opened)}}customElements.define(oo.is,oo);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lo extends oo{static get is(){return"vaadin-accordion-panel"}}customElements.define(lo.is,lo);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ah extends q(tt(G)){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){if(this._observer&&this._observer.flush(),Array.isArray(this.items)){const t=this._getAvailableIndex(0);t>=0&&this.items[t].focus()}}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this._observer=new Yt(this,t=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(t.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(t){return t.filter(e=>e instanceof lo)}_updateItems(t,e){if(t){const r=t[e];t.forEach(n=>{n.opened=n===r})}}_onKeydown(t){const e=t.composedPath()[0];if(!this.items.some(s=>s.focusElement===e))return;const r=this.items.indexOf(this.focused);let n,a;switch(t.key){case"ArrowUp":a=-1,n=r-1;break;case"ArrowDown":a=1,n=r+1;break;case"Home":a=1,n=0;break;case"End":a=-1,n=this.items.length-1;break}n=this._getAvailableIndex(n,a),n>=0&&(this.items[n].focus(),this.items[n].setAttribute("focus-ring",""),t.preventDefault())}_getAvailableIndex(t,e){const r=this.items.length;let n=t;for(let a=0;typeof n=="number"&&a<r;a++,n+=e||1)if(n<0?n=r-1:n>=r&&(n=0),!this.items[n].disabled)return n;return-1}_updateOpened(t){const e=this._filterItems(t.composedPath())[0],r=this.items.indexOf(e);if(t.detail.value){if(e.disabled||r===-1)return;this.opened=r}else this.items.some(n=>n.opened)||(this.opened=null)}}customElements.define(ah.is,ah);I("vaadin-app-layout",O`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const kd=document.createElement("template");kd.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(kd.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Pd(){if(Po){const i=window.innerHeight,e=window.innerWidth>i,r=document.documentElement.clientHeight;e&&r>i?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-i}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Pd();window.addEventListener("resize",Pd);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sh extends tt(q(br(G))){static get template(){return B`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new vm(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),_m(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new Yt(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new Yt(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new Yt(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),n=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${n.height}px`);const s=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${s.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,r=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",r)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),t&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),is(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(sh.is,sh);const S_=O`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;I("vaadin-drawer-toggle",[Vc,S_],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oh extends Lo{static get template(){return B`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot>
        <div part="icon"></div>
      </slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(oh.is,oh);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T_=O`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,Ld=document.createElement("template");Ld.innerHTML=`<style>${T_.toString().replace(":host","html")}</style>`;document.head.appendChild(Ld.content);const Fd=document.createElement("style");Fd.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(Fd);I("vaadin-avatar",O`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nd=document.createElement("template");Nd.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Nd.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ho extends Ne(tt(q(G))){static get template(){return B`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),!this.name&&!this.abbr&&this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}__colorIndexChanged(t){if(t!=null){const e=`--vaadin-user-color-${t}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(e))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(t,e,r){if(this.__updateVisibility(),e&&e!==this.__generatedAbbr){this.__setTitle(r?`${r} (${e})`:e);return}r?this.abbr=this.__generatedAbbr=r.split(" ").map(n=>n.charAt(0)).join(""):this.abbr=void 0,this.__setTitle(r)}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTitle(t){t?this.setAttribute("title",t):this.setAttribute("title",this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(ho.is,ho);I("vaadin-avatar-group",O`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const M_=O`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;I("vaadin-avatar-group-overlay",[Yc,gm,M_],{moduleId:"lumo-avatar-group-overlay"});I("vaadin-avatar-group-list-box",O`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});I("vaadin-item",O`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lh extends Wc{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(lh.is,lh);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hh extends rs(xr){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(hh.is,hh);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ce=document.createElement("div");ce.style.position="fixed";ce.style.clip="rect(0px, 0px, 0px, 0px)";ce.setAttribute("aria-live","polite");document.body.appendChild(ce);let ia;function De(i,t={}){const e=t.mode||"polite",r=t.timeout===void 0?150:t.timeout;e==="alert"?(ce.removeAttribute("aria-live"),ce.removeAttribute("role"),ia=Ce.debounce(ia,Hc,()=>{ce.setAttribute("role","alert")})):(ia&&ia.cancel(),ce.removeAttribute("role"),ce.setAttribute("aria-live",e)),ce.textContent="",setTimeout(()=>{ce.textContent=i},r)}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ds=2;class uh extends Cn(tt(q(G))){static get template(){return B`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[_theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[_theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        ></vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      >
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[_theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),this._overlayElement.positionTarget=this.$.overflow,is(this,()=>{this.__setItemsInView()})}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Esc"||/^(Tab)$/.test(t.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}__computeItems(t,e,r){const n=t.base||[],a=this.__getLimit(n.length,e,r);return a?n.slice(0,a):n}__computeExtraItems(t,e,r){const n=t.base||[],a=this.__getLimit(n.length,e,r);return a?n.slice(a):n}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__computeMore(t,e,r){return`+${t-this.__getLimit(t,e,r)}`}__computeMoreHidden(t,e,r){return!r&&!(e&&e<t)}__computeMoreTitle(t,e,r){const n=this.__getLimit(t,e,r);if(n==null)return;const a=[];for(let s=n;s<t;s++){const o=this.items[s];o&&a.push(o.name||o.abbr||"anonymous")}this.$.overflow.setAttribute("title",a.join(`
`))}__getLimit(t,e,r){let n=null;const a=this.__getMax(r);return r!=null&&a<t?n=a-1:e&&e<t&&(n=e),Math.min(n,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,Ds)}__itemsChanged(t,e){const r=e.base;this.$.items.render(),this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(n=>{this.__announceItemsChange(r,n)}):Array.isArray(r)&&Array.isArray(this.__oldItems)&&ko(r,this.__oldItems).forEach(a=>{this.__announceItemsChange(r,a)}),this.__oldItems=r}__announceItemsChange(t,e){const{addedCount:r,index:n,removed:a}=e;let s=[],o=[];r&&(s=t.slice(n,n+r).map(h=>this.__getMessage(h,this.i18n.joined||"{user} joined"))),a&&(o=a.map(h=>this.__getMessage(h,this.i18n.left||"{user} left")));const l=o.concat(s);l.length>0&&De(l.join(", "))}__i18nItemsChanged(t,e){const{base:r}=t;if(r&&r.activeUsers){const n=e===1?"one":"many";r.activeUsers[n]&&this.setAttribute("aria-label",r.activeUsers[n].replace("{count}",e||0))}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.querySelectorAll("vaadin-avatar").forEach(n=>n.removeAttribute("title")),this._menuElement.focus()):e&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring","")),this.$.overflow.setAttribute("aria-expanded",t===!0)}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let r=this.__calculateAvatarsFitWidth();r===e.length-1&&(r=e.length),r>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=r}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<Ds)return Ds;const t=this._avatars,e=t[0].clientWidth,{marginLeft:r,marginRight:n}=getComputedStyle(t[1]),a=this.getAttribute("dir")==="rtl"?parseInt(n,0)-parseInt(r,0):parseInt(r,0)-parseInt(n,0);return Math.floor((this.$.container.offsetWidth-e)/(e+a))}}customElements.define(uh.is,uh);const I_=O`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;I("vaadin-checkbox-group",[ns,as,I_],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ch extends En(Ne(ss(tt(q(G))))){static get is(){return"vaadin-checkbox-group"}static get template(){return B`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new Yt(this,({addedNodes:t,removedNodes:e})=>{const r=this.__filterCheckboxes(t),n=this.__filterCheckboxes(e);r.forEach(this.__registerCheckbox),n.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(r)})}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof ym)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(t){t.some(r=>{const{value:n}=r;return!r.hasAttribute("value")&&(!n||n==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(r=>{r.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){t.length===0&&e===void 0||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(r=>{r.checked=t.includes(r.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(ch.is,ch);const O_=O`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;I("vaadin-dialog-overlay",[Yc,O_],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Pa(i){return i.touches?i.touches[0]:i}function Bd(i){return i.clientX>=0&&i.clientX<=window.innerWidth&&i.clientY>=0&&i.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R_=i=>class extends i{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:jc},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const r=this.$.overlay.$.resizerContainer,n=e.target===r,a=e.offsetX>r.clientWidth||e.offsetY>r.clientHeight,s=e.target===this.$.overlay.$.content,o=e.composedPath().some((l,h)=>{if(!l.classList)return!1;const u=l.classList.contains(this.__dragHandleClassName||"draggable"),c=l.classList.contains("draggable-leaf-only"),d=h===0;return c&&d||u&&(!c||d)});if(n&&!a||s||o){o||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=Pa(e);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const r=Pa(e);if(Bd(r)){const n=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top),a=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:n,left:a})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-dialog-overlay",O`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const D_=i=>class extends i{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const r=document.createElement("div");this._resizeListeners.start[e]=n=>this._startResize(n,e),this._resizeListeners.resize[e]=n=>this._resize(n,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&r.classList.add("edge"),r.classList.add("resizer"),r.classList.add(e),r.addEventListener("mousedown",this._resizeListeners.start[e]),r.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(r)})}_startResize(e,r){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const n=Pa(e);this._originalMouseCoords={top:n.pageY,left:n.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[r]),window.addEventListener("touchmove",this._resizeListeners.resize[r]),window.addEventListener("mouseup",this._resizeListeners.stop[r]),window.addEventListener("touchend",this._resizeListeners.stop[r]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,r){const n=Pa(e);Bd(n)&&r.split("").forEach(s=>{switch(s){case"n":{const o=this._originalBounds.height-(n.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(n.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({top:l,height:o});break}case"e":{const o=this._originalBounds.width+(n.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({width:o});break}case"s":{const o=this._originalBounds.height+(n.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({height:o});break}case"w":{const o=this._originalBounds.width-(n.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(n.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({left:l,width:o});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:r,height:n}=getComputedStyle(this.$.overlay.$.overlay),a=this.$.overlay.$.content;a.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:s,height:o}=getComputedStyle(a);return a.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:r,height:n,contentWidth:s,contentHeight:o}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-dialog-overlay",O`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let zr;class uo extends xr{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!zr){zr=super.template.cloneNode(!0);const t=zr.content.querySelector('[part="content"]'),e=zr.content.querySelector('[part="overlay"]'),r=document.createElement("section");r.id="resizerContainer",r.classList.add("resizer-container"),r.appendChild(t),e.appendChild(r);const n=document.createElement("header");n.setAttribute("part","header"),r.insertBefore(n,t);const a=document.createElement("div");a.setAttribute("part","title"),n.appendChild(a);const s=document.createElement("slot");s.setAttribute("name","title"),a.appendChild(s);const o=document.createElement("div");o.setAttribute("part","header-content"),n.appendChild(o);const l=document.createElement("slot");l.setAttribute("name","header-content"),o.appendChild(l);const h=document.createElement("footer");h.setAttribute("part","footer"),r.appendChild(h);const u=document.createElement("slot");u.setAttribute("name","footer"),h.appendChild(u)}return zr}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(t){const e=document.createElement("div");return e.setAttribute("slot",t),e}__clearContainer(t){t.innerHTML="",delete t._$litPart$}__initContainer(t,e){return t?this.__clearContainer(t):t=this.__createContainer(e),t}_headerFooterRendererChange(t,e,r){const n=this.__oldHeaderRenderer!==t;this.__oldHeaderRenderer=t;const a=this.__oldFooterRenderer!==e;this.__oldFooterRenderer=e;const s=this._oldOpenedFooterHeader!==r;this._oldOpenedFooterHeader=r,this.toggleAttribute("has-header",!!t),this.toggleAttribute("has-footer",!!e),n&&(t?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),a&&(e?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(t&&(n||s)||e&&(a||s))&&r&&this.requestContentUpdate()}_headerTitleChanged(t,e){this.toggleAttribute("has-title",!!t),e&&(t||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=t}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(t){const e=this.$.overlay,r={...t};e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow()),Object.keys(r).forEach(n=>{typeof r[n]=="number"&&(r[n]=`${r[n]}px`)}),Object.assign(e.style,r)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),r=t.top-e.top,n=t.left-e.left,a=t.width,s=t.height;return{top:r,left:n,width:a,height:s}}__forceSafariReflow(){const t=this.$.resizerContainer.scrollTop,e=this.$.overlay;e.style.display="block",requestAnimationFrame(()=>{e.style.display="",this.$.resizerContainer.scrollTop=t})}__updateOverflow(){let t="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const r=this.$.content;r.scrollTop>0&&(t+=" top"),r.scrollTop<r.scrollHeight-r.clientHeight&&(t+=" bottom")}const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):e.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(uo.is,uo);class co extends zo(tt(R_(D_(G)))){static get template(){return B`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),Sn(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(t,e,r){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:r})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(co.is,co);I("vaadin-confirm-dialog-overlay",O`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-confirm-dialog-overlay",O`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let Gi;const k_=B`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class dh extends uo{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!Gi){Gi=super.template.cloneNode(!0);const t=Gi.content.querySelector('[part="header"]');t.innerHTML="";const e=document.createElement("slot");e.setAttribute("name","header"),t.appendChild(e);const r=Gi.content.querySelector('[part="content"]'),n=r.querySelector("slot:not([name])"),a=document.createElement("div");a.setAttribute("part","message"),r.appendChild(a),a.appendChild(n);const s=Gi.content.querySelector('[part="footer"]');s.setAttribute("role","toolbar");const o=s.querySelector("slot");s.removeChild(o),s.appendChild(k_.content.cloneNode(!0))}return Gi}_finishClosing(){super._finishClosing(),this.dispatchEvent(new CustomEvent("vaadin-confirm-dialog-close"))}_headerFooterRendererChange(t,e,r){super._headerFooterRendererChange(t,e,r),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(dh.is,dh);class fh extends co{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return B`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}customElements.define(fh.is,fh);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zd=yr(i=>class extends i{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(e=>{if(!(this._getDirectSlotChild(e)!==void 0)){const n=this.slots[e],a=n();a instanceof Element&&(e!==""&&a.setAttribute("slot",e),this.appendChild(a))}})}_getDirectSlotChild(e){return Array.from(this.childNodes).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.slot===e||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&e==="")}});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ph extends zd(tt(zo(G))){static get template(){return B`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},reject:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancel:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},_cancelButton:{type:HTMLElement,observer:"_cancelButtonChanged"},_confirmButton:{type:HTMLElement,observer:"_confirmButtonChanged"},_headerNode:{type:HTMLElement},_messageNode:{type:HTMLElement},_rejectButton:{type:HTMLElement,observer:"_rejectButtonChanged"}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancel)","__updateHeaderNode(_headerNode, header)","__updateMessageNode(_messageNode, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, reject)"]}get slots(){return{...super.slots,header:()=>{const t=document.createElement("h3");return this.__defaultHeader=t,t},"":()=>{const t=document.createElement("div");return this.__defaultMessage=t,t},"cancel-button":()=>{const t=document.createElement("vaadin-button");return t.setAttribute("theme",this.cancelTheme),t.textContent=this.cancelText,t._isDefaultButton=!0,t},"reject-button":()=>{const t=document.createElement("vaadin-button");return t.setAttribute("theme",this.rejectTheme),t.textContent=this.rejectText,t._isDefaultButton=!0,t},"confirm-button":()=>{const t=document.createElement("vaadin-button");return t._isDefaultButton=!0,t}}}constructor(){super(),this.__slottedNodes=[],this._observer=new Yt(this,t=>{this.__onDomChange(t.addedNodes)})}ready(){super.ready(),this.__boundCancel=this._cancel.bind(this),this.__boundConfirm=this._confirm.bind(this),this.__boundReject=this._reject.bind(this),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-confirm-dialog-close",()=>this.__onDialogClosed()),this._dimensions&&Object.keys(this._dimensions).forEach(t=>{this._setDimension(t,this._dimensions[t])})}__onDialogOpened(){const t=this._overlayElement;this.__slottedNodes.forEach(r=>{t.appendChild(r)});const e=t.querySelector('[slot="confirm-button"]');e&&e.focus()}__onDialogClosed(){const t=this.__slottedNodes;this.__slottedNodes=[],t.forEach(e=>{this.appendChild(e)})}__onDomChange(t){t.forEach(e=>{this.__slottedNodes.push(e);const r=e.nodeType===Node.ELEMENT_NODE,n=r?e.getAttribute("slot"):"";if(n)if(n.indexOf("button")>=0){const[a]=n.split("-");this[`_${a}Button`]=e}else n==="header"&&(this._headerNode=e);else(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==""||r&&e.slot==="")&&(this._messageNode=e)})}_cancelButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundCancel)}_confirmButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundConfirm)}_rejectButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundReject)}__setupSlottedButton(t,e,r){e&&e.parentElement&&e.remove(),t.addEventListener("click",r)}__updateCancelButton(t,e,r,n){t&&(t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",r)),t.toggleAttribute("hidden",!n))}__updateConfirmButton(t,e,r){t&&t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",r))}__updateHeaderNode(t,e){t&&t===this.__defaultHeader&&(t.textContent=e)}__updateMessageNode(t,e){t&&t===this.__defaultMessage&&(t.textContent=e)}__updateRejectButton(t,e,r,n){t&&(t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",r)),t.toggleAttribute("hidden",!n))}_escPressed(t){t.defaultPrevented||this._cancel()}_confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}_cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}_reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(t){return t||"confirmation"}_setWidth(t){this._setDimensionIfAttached("width",t)}_setHeight(t){this._setDimensionIfAttached("height",t)}_setDimensionIfAttached(t,e){this._overlayElement?this._setDimension(t,e):(this._dimensions=this._dimensions||{},this._dimensions[t]=e)}_setDimension(t,e){this._overlayElement.style.setProperty(`--_vaadin-confirm-dialog-content-${t}`,e)}}customElements.define(ph.is,ph);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $d=O`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;I("vaadin-custom-field",[ns,as,$d],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mh extends En(Ne(ts(q(tt(G))))){static get is(){return"vaadin-custom-field"}static get template(){return B`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue(t){return t.split("	")},formatValue(t){return t.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new Yt(this.$.slot,()=>{this.__setInputsFromSlot()})}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some(r=>e===(r.focusElement||r))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}_onKeyDown(t){t.key==="Tab"&&(this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let r;return t.tagName==="SLOT"?r=t.assignedElements({flatten:!0}):(e.push(t),r=Array.from(t.children)),r.forEach(n=>e.push(...this.__queryAllAssignedElements(n))),e}__isInput(t){return!(t.getAttribute("slot")==="input"||t.getAttribute("slot")==="textarea")&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(t=>this.__isInput(t))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",t!==null&&t.trim()!=="")}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const r=this.i18n.parseValue(t);if(!r||r.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((n,a)=>{n.value=r[a]}),e!==void 0&&this.validate()}}customElements.define(mh.is,mh);const P_=O`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;I("vaadin-date-picker-overlay",[qc,P_],{moduleId:"lumo-date-picker-overlay"});I("vaadin-date-picker-overlay-content",O`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 20%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});I("vaadin-month-calendar",O`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const Gd=document.createElement("template");Gd.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(Gd.content);const L_=O`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;I("vaadin-date-picker",[Tn,L_],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F_=O`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='value']::placeholder {
    direction: rtl;
    text-align: left;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,N_=O`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-date-picker-overlay",N_,{moduleId:"vaadin-date-picker-overlay-styles"});let ra;class vh extends i_(rs(xr)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return ra||(ra=super.template.cloneNode(!0),ra.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),ra}}customElements.define(vh.is,vh);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function B_(i){let t=i.getDay();t===0&&(t=7);const e=4-t,r=new Date(i.getTime()+e*24*3600*1e3),n=new Date(0,0);n.setFullYear(r.getFullYear());const a=r.getTime()-n.getTime(),s=Math.round(a/(24*3600*1e3));return Math.floor(s/7+1)}function Xt(i,t){return i instanceof Date&&t instanceof Date&&i.getFullYear()===t.getFullYear()&&i.getMonth()===t.getMonth()&&i.getDate()===t.getDate()}function an(i,t,e){return(!t||i>=t)&&(!e||i<=e)}function Ud(i,t){return t.filter(e=>e!==void 0).reduce((e,r)=>{if(!r)return e;if(!e)return r;const n=Math.abs(i.getTime()-r.getTime()),a=Math.abs(e.getTime()-i.getTime());return n<a?r:e})}function Vd(i){return{day:i.getDate(),month:i.getMonth(),year:i.getFullYear()}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _h extends Ne(q(G)){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]">[[item.weekDayShort]]</th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),ue(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(t=>Xt(t.date,this.focusedDate))}_isDisabled(t,e,r){const n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(1);const a=new Date(0,0);return a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()+1),a.setDate(0),e&&r&&e.getMonth()===r.getMonth()&&e.getMonth()===t.getMonth()&&r.getDate()-e.getDate()>=0?!1:!an(n,e,r)&&!an(a,e,r)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,r,n){if(!(t===void 0||e===void 0||r===void 0||n===void 0))return t=this._applyFirstDayOfWeek(t,n),e=this._applyFirstDayOfWeek(e,n),t=t.map((a,s)=>({weekDay:a,weekDayShort:e[s]})),t}__focusedDateChanged(t,e){e.some(r=>Xt(r,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return Xt(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return;const r=new Date(0,0);for(r.setFullYear(t.getFullYear()),r.setMonth(t.getMonth()),r.setDate(1);r.getDay()!==e;)this._dateAdd(r,-1);const n=[],a=r.getMonth(),s=t.getMonth();for(;r.getMonth()===s||r.getMonth()===a;)n.push(r.getMonth()===s?new Date(r.getTime()):null),this._dateAdd(r,1);return n}_getWeeks(t){return t.reduce((e,r,n)=>(n%7===0&&e.push([]),e[e.length-1].push(r),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getWeekNumber(t){const e=t.reduce((r,n)=>!r&&n?n:r);return B_(e)}__isDayFocused(t,e){return Xt(t,e)}__isDaySelected(t,e){return Xt(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,r){return!an(t,e,r)}__getDayAriaDisabled(t,e,r){if(!(t===void 0||e===void 0||r===void 0)&&this.__isDayDisabled(t,e,r))return"true"}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}__getWeekNumbers(t){return t.map(e=>this.__getWeekNumber(e,t)).filter((e,r,n)=>n.indexOf(e)===r)}}customElements.define(_h.is,_h);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hn extends G{static get template(){return B`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=`${this._initialScroll*2}px`;const t=this.querySelector("template");this._TemplateClass=Do(t,this,{forwardHostProp(e,r){e!=="index"&&this._buffers.forEach(n=>{[].forEach.call(n.children,a=>{a._itemWrapper.instance[e]=r})})}}),bm&&(this.$.scroller.tabIndex=-1)}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[].forEach.call(t.children,e=>this._ensureStampedInstance(e._itemWrapper))}),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,r=t>this._buffers[1].translateY+e,n=t<this._buffers[0].translateY+e;(r||n)&&(this._translateBuffer(n),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=Ce.debounce(this._debouncerScrollFinish,ai.after(200),()=>{const a=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],a)&&!this._isVisible(this._buffers[1],a)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const r=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(r)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=Ce.debounce(this._debouncerUpdateClones,ai.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let r=0;r<this.bufferSize;r++){const n=document.createElement("div");n.style.height=`${this.itemHeight}px`,n.instance={};const s=`vaadin-infinite-scroller-item-content-${hn._contentIndex=hn._contentIndex+1||0}`,o=document.createElement("slot");o.setAttribute("name",s),o._itemWrapper=n,e.appendChild(o),n.setAttribute("slot",s),this.appendChild(n),setTimeout(()=>{this._isVisible(n,t)&&this._ensureStampedInstance(n)},1)}}),setTimeout(()=>{is(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=new this._TemplateClass({}),t.appendChild(t.instance.root),Object.keys(e).forEach(r=>{t.instance.set(r,e[r])})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((r,n)=>{if(!r.updated){const a=this._firstIndex+this.bufferSize*n;[].forEach.call(r.children,(s,o)=>{const l=s._itemWrapper;(!t||this._isVisible(l,e))&&(l.instance.index=a+o)}),r.updated=!0}})}_isVisible(t,e){const r=t.getBoundingClientRect();return r.bottom>e.top&&r.top<e.bottom}}customElements.define(hn.is,hn);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gh extends br(q(os(G))){static get template(){return B`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get calendars(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")]}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),ue(this.$.scrollers,"track",this._track.bind(this)),ue(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),ue(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),ue(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),ue(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),ue(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),ue(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new Fo(this._desktopMediaQuery,t=>{this._desktopMode=t}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),xm(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(t,e){this._scrollToPosition(this._differenceInMonths(t,this._originDate),e)}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_focusedDateChanged(t){this.revealDate(t)}_isCurrentYear(t){return t===0}_isSelectedYear(t,e){if(e)return e.getFullYear()===this._originDate.getFullYear()+t}revealDate(t,e=!0){if(t){const r=this._differenceInMonths(t,this._originDate),n=this.$.monthScroller.position>r,s=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,o=this.$.monthScroller.position+s-1<r;n?this._scrollToPosition(r,e):o&&this._scrollToPosition(r-s+1,e)}}_initialPositionChanged(t){this.scrollToDate(t)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=Ce.debounce(this._debouncer,ai.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,r){return t?e(Vd(t)):r}_onTodayTap(){const t=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const r=(t.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+r*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this.$.monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let r;this._revealPromise=new Promise(l=>{r=l});const n=(l,h,u,c)=>(l/=c/2,l<1?u/2*l*l+h:(l-=1,-u/2*(l*(l-2)-1)+h));let a=0;const s=this.$.monthScroller.position,o=l=>{a=a||l;const h=l-a;if(h<this.scrollDuration){const u=n(h,s,this._targetPosition-s,this.scrollDuration);this.$.monthScroller.position=u,window.requestAnimationFrame(o)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:s}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,r(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(o)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXYears(t){const e=new Date(this._originDate);return e.setFullYear(parseInt(t)+this._originDate.getFullYear()),e.getFullYear()}_yearAfterXMonths(t){return this._dateAfterXMonths(t).getFullYear()}_dateAfterXMonths(t){const e=new Date(this._originDate);return e.setDate(1),e.setMonth(parseInt(t)+this._originDate.getMonth()),e}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_differenceInYears(t,e){return this._differenceInMonths(t,e)/12}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){Xt(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.$.cancelButton.focus():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&Xt(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const r=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=r,e||(this._focusedMonthDate=r.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{setTimeout(e)}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(Ud(t,[this.minDate,this.maxDate]))}_moveFocusByDays(t){const e=this.focusedDate,r=new Date(0,0);r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(e.getDate()+t),this._dateAllowed(r,this.minDate,this.maxDate)?this.focusDate(r):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusByMonths(t){const e=this.focusedDate,r=new Date(0,0);r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()+t);const n=r.getMonth();r.setDate(this._focusedMonthDate||(this._focusedMonthDate=e.getDate())),r.getMonth()!==n&&r.setDate(0),this._dateAllowed(r,this.minDate,this.maxDate)?this.focusDate(r,!0):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusInsideMonth(t,e){const r=new Date(0,0);r.setFullYear(t.getFullYear()),e==="minDate"?(r.setMonth(t.getMonth()),r.setDate(1)):(r.setMonth(t.getMonth()+1),r.setDate(0)),this._dateAllowed(r,this.minDate,this.maxDate)?this.focusDate(r):this._dateAllowed(t,this.minDate,this.maxDate)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e,r){return(!e||t>=e)&&(!r||t<=r)}_isTodayAllowed(t,e){const r=new Date,n=new Date(0,0);return n.setFullYear(r.getFullYear()),n.setMonth(r.getMonth()),n.setDate(r.getDate()),this._dateAllowed(n,t,e)}}customElements.define(gh.is,gh);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z_=i=>class extends br(Ja(wm(ts(i)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",formatDate:e=>{const r=String(e.year).replace(/\d+/,n=>"0000".substr(n.length)+n);return[e.month+1,e.day,r].join("/")},parseDate:e=>{const r=e.split("/"),n=new Date;let a,s=n.getMonth(),o=n.getFullYear();if(r.length===3?(o=parseInt(r[2]),r[2].length<3&&o>=0&&(o+=o<50?2e3:1900),s=parseInt(r[0])-1,a=parseInt(r[1])):r.length===2?(s=parseInt(r[0])-1,a=parseInt(r[1])):r.length===1&&(a=parseInt(r[0])),a!==void 0)return{day:a,month:s,year:o}},formatTitle:(e,r)=>`${e} ${r}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Po},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(e){this.inputElement&&(this.inputElement.value=e)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){if(super._onBlur(e),!this.opened){if(this.autoOpenDisabled){const r=this._getParsedDate();this._isValidDate(r)&&this._selectDate(r)}this.validate(),this._inputValue===""&&this.value!==""&&(this.value="")}}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Fo(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new Am(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,r,n){super._propertiesChanged(e,r,n),"value"in r&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>{this.opened=e.detail.value}),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",()=>{this._close()}),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date),this._close()}),this._overlayContent.addEventListener("date-selected",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}checkValidity(){const e=!this._inputValue||!!this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),r=!this._selectedDate||an(this._selectedDate,this._minDate,this._maxDate);let n=!0;return this.inputElement&&(this.inputElement.checkValidity?n=this.inputElement.checkValidity():this.inputElement.validate&&(n=this.inputElement.validate())),e&&r&&n}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}_selectDate(e){const r=this._formatISO(e);this.value!==r&&(this.__dispatchChange=!0),this._selectedDate=e}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_parseDate(e){const r=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(!r)return;const n=new Date(0,0);return n.setFullYear(parseInt(r[1],10)),n.setMonth(parseInt(r[2],10)-1),n.setDate(parseInt(r[3],10)),n}_isNoInput(e,r,n,a,s,o){return!e||r&&(!o||s)||n&&s||!a.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const r=(u,c="00")=>(c+u).substr((c+u).length-c.length);let n="",a="0000",s=e.getFullYear();s<0?(s=-s,n="-",a="000000"):e.getFullYear()>=1e4&&(n="+",a="000000");const o=n+r(s,a),l=r(e.getMonth()+1),h=r(e.getDate());return[o,l,h].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,r){if(e===void 0||r===void 0)return;const n=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),n!==this.value&&(this.validate(),this.value=n),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,r){e===void 0||r===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}__getOverlayTheme(e,r){if(r)return e}_valueChanged(e,r){const n=this._parseDate(e);if(e&&!n){this.value=r;return}e?Xt(this._selectedDate,n)||(this._selectedDate=n,r!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}_onOverlayOpened(){const e=this._parseDate(this.initialPosition),r=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||an(r,this._minDate,this._maxDate)?this._overlayContent.initialPosition=r:this._overlayContent.initialPosition=Ud(r,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputValue||"",r=this._getParsedDate(e);this._isValidDate(r)?this._selectDate(r):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,r){return e(Vd(r))}_setSelectionRange(e,r){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,r)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this._inputValue===""&&(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const r=this._getParsedDate(),n=this._isValidDate(r);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&n&&this._selectDate(this._overlayContent.focusedDate),this.close();else if(!n&&this.inputElement.value!=="")this.validate();else{const a=this.value;this._selectParsedOrFocusedDate(),a===this.value&&this.validate()}}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&!!this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(e=this._inputValue){const r=this.i18n.parseDate&&this.i18n.parseDate(e);return r&&this._parseDate(`${r.year}-${r.month+1}-${r.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this.opened&&this._inputValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,Xt(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}__computeMinOrMaxDate(e){return this._parseDate(e)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-date-picker",[On,F_],{moduleId:"vaadin-date-picker-styles"});class fo extends z_(No(q(tt(G)))){static get is(){return"vaadin-date-picker"}static get template(){return B`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Mn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new In(this.inputElement,this._labelController)),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(fo.is,fo);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_=O`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;I("vaadin-time-picker",[Tn,$_],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yh extends Xc{static get is(){return"vaadin-time-picker-item"}}customElements.define(yh.is,yh);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bh extends Zc{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(bh.is,bh);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-time-picker-overlay",O`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class xh extends Kc{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(xh.is,xh);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wh extends Qc(q(G)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return B`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(wh.is,wh);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ah="00:00:00.000",Ch="23:59:59.999";I("vaadin-time-picker",On,{moduleId:"vaadin-time-picker-styles"});class ur extends Cm(No(q(tt(G)))){static get is(){return"vaadin-time-picker"}static get template(){return B`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(n=0,a="00")=>(a+n).substr((a+n).length-a.length);let r=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(r+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(r+=`.${e(t.milliseconds,"000")}`),r},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",r="(\\d|[0-5]\\d)",n=r,a="(\\d{1,3})",o=new RegExp(`^${e}(?::${r}(?::${n}(?:\\.${a})?)?)?$`).exec(t);if(o){if(o[4])for(;o[4].length<3;)o[4]+="0";return{hours:o[1],minutes:o[2],seconds:o[3],milliseconds:o[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Mn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new In(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,r){t===0&&e<0&&(t=24*60*60*1e3);const n=e*1e3,a=t%n;n<0&&a&&r?t-=a:n>0&&a&&r?t-=a-n:t+=n;const s=Math.floor(t/1e3/60/60);t-=s*1e3*60*60;const o=Math.floor(t/1e3/60);t-=o*1e3*60;const l=Math.floor(t/1e3);return t-=l*1e3,{hours:s<24?s:0,minutes:o,seconds:l,milliseconds:t}}__updateDropdownItems(t,e,r,n){const a=this.__validateTime(this.__parseISO(e||Ah)),s=this.__getSec(a),o=this.__validateTime(this.__parseISO(r||Ch)),l=this.__getSec(o);if(this.__adjustValue(s,l,a,o),this.__dropdownItems=this.__generateDropdownList(s,l,n),n!==this.__oldStep){this.__oldStep=n;const h=this.__validateTime(this.__parseISO(this.value));this.__updateValue(h)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,r){if(r<15*60||!this.__validDayDivisor(r))return[];const n=[];r=r||3600;let a=-r+t;for(;a+r>=t&&a+r<=e;){const s=this.__validateTime(this.__addStep(a*1e3,r));a+=r;const o=this.i18n.formatTime(s);n.push({label:o,value:o})}return n}__adjustValue(t,e,r,n){if(!this.__memoValue)return;const a=this.__getSec(this.__memoValue);a<t?this.__updateValue(r):a>e&&this.__updateValue(n)}_valueChanged(t,e){const r=this.__memoValue=this.__parseISO(t),n=this.__formatISO(r)||"";t!==""&&t!==null&&!r?this.value=e===void 0?"":e:t!==n?this.value=n:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(r),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const r=this.i18n.parseTime(t),n=this.i18n.formatTime(r)||"";r?t!==n?this._comboBoxValue=n:this.__updateValue(r):(t!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){return t&&(t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=this.__stepSegment<3?void 0:parseInt(t.seconds||0),t.milliseconds=this.__stepSegment<4?void 0:parseInt(t.milliseconds||0)),t}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return ur.properties.i18n.value().formatTime(t)}__parseISO(t){return ur.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||Ah),r=this.i18n.parseTime(this.max||Ch);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(r)||this.__getMsec(t)<=this.__getMsec(r))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(ur.is,ur);I("vaadin-date-time-picker",[ns,as,$d],{moduleId:"lumo-date-time-picker"});I("vaadin-date-time-picker-date-picker",O`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});I("vaadin-date-time-picker-time-picker",O`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Eh extends fo{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(Eh.is,Eh);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sh extends ur{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(Sh.is,Sh);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-date-time-picker",On,{moduleId:"vaadin-date-time-picker"});function Yd(i,t){for(;i;){if(i.properties&&i.properties[t])return i.properties[t];i=Object.getPrototypeOf(i)}}const po=customElements.get("vaadin-date-time-picker-date-picker"),G_=customElements.get("vaadin-date-time-picker-time-picker"),Wd=Yd(po,"i18n").value(),ya=Yd(G_,"i18n").value(),Th=Object.keys(Wd),Mh=Object.keys(ya);class Ih extends En(zd(ss(Ne(q(tt(G)))))){static get template(){return B`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Wd,...ya})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const t=document.createElement("vaadin-date-time-picker-date-picker");return t.__defaultPicker=!0,t},"time-picker":()=>{const t=document.createElement("vaadin-date-time-picker-time-picker");return t.__defaultPicker=!0,t}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new Yt(this,t=>{this.__onDomChange(t.addedNodes)})}ready(){super.ready(),this.addEventListener("focusout",t=>{t.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this.ariaTarget=this}focus(){this.__datePicker.focus()}_shouldRemoveFocus(t){const e=t.relatedTarget;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||e===this.__datePicker.$.overlay)}__syncI18n(t,e,r){r=r||Object.keys(e.i18n),r.forEach(n=>{e.i18n&&e.i18n.hasOwnProperty(n)&&t.set(`i18n.${n}`,e.i18n[n])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(t){t.filter(e=>e.nodeType===Node.ELEMENT_NODE).forEach(e=>{const r=e.getAttribute("slot");r==="date-picker"?this.__datePicker=e:r==="time-picker"&&(this.__timePicker=e)}),this.value&&(this.min||this.max)&&this.validate()}__datePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,Th)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,Th)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,Mh)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,Mh)),this.__updateTimePickerMinMax(),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=Xt(this.__minDateTime,this.__maxDateTime),r=this.__timePicker.value;this.__minDateTime&&Xt(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Xt(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==r&&(this.__timePicker.value=r)}}__i18nChanged(t){this.__datePicker&&this.__datePicker.set(t.path,t.value),this.__timePicker&&this.__timePicker.set(t.path,t.value)}__datePlaceholderChanged(t){this.__datePicker&&(this.__datePicker.placeholder=t)}__timePlaceholderChanged(t){this.__timePicker&&(this.__timePicker.placeholder=t)}__stepChanged(t){this.__timePicker&&this.__timePicker.step!==t&&(this.__timePicker.step=t)}__initialPositionChanged(t){this.__datePicker&&(this.__datePicker.initialPosition=t)}__showWeekNumbersChanged(t){this.__datePicker&&(this.__datePicker.showWeekNumbers=t)}__invalidChanged(t){this.__datePicker&&(this.__datePicker.invalid=t),this.__timePicker&&(this.__timePicker.invalid=t)}__requiredChanged(t){this.__datePicker&&(this.__datePicker.required=t),this.__timePicker&&(this.__timePicker.required=t)}__disabledChanged(t){this.__datePicker&&(this.__datePicker.disabled=t),this.__timePicker&&(this.__timePicker.disabled=t)}__readonlyChanged(t){this.__datePicker&&(this.__datePicker.readonly=t),this.__timePicker&&(this.__timePicker.readonly=t)}__parseDate(t){return po.prototype._parseDate(t)}__formatDateISO(t,e){return t?po.prototype._formatISO(t):e}__formatTimeISO(t){return ya.formatTime(t)}__parseTimeISO(t){return ya.parseTime(t)}__parseDateTime(t){const[e,r]=t.split("T");if(!(e&&r))return;const n=this.__parseDate(e);if(!n)return;const a=this.__parseTimeISO(r);if(!!a)return n.setHours(parseInt(a.hours)),n.setMinutes(parseInt(a.minutes||0)),n.setSeconds(parseInt(a.seconds||0)),n.setMilliseconds(parseInt(a.milliseconds||0)),n}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),r=this.__dateToIsoTimeString(t);return`${e}T${r}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){return t&&(t.seconds=this.__stepSegment<3?void 0:t.seconds,t.milliseconds=this.__stepSegment<4?void 0:t.milliseconds),t}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const t=this.__inputs.some(r=>!r.checkValidity()),e=this.required&&this.__inputs.some(r=>!r.value);return!(t||e)}get __stepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return Xt(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,r,n){if(!r){this[t]="",this[e]="";return}const a=this.__parseDateTime(r);if(!a){this[t]=n;return}this.__dateTimeEquals(this[e],a)||(this[e]=a)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[n,a]=this.value.split("T");this.__datePicker.value=n||"",this.__timePicker.value=a||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const t=this.__datePicker.value,e=this.__timePicker.value;return t&&e?[t,e].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,r]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&r?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t){this.__datePicker&&(this.__datePicker.autoOpenDisabled=t),this.__timePicker&&(this.__timePicker.autoOpenDisabled=t)}__themeChanged(t,e,r){!e||!r||[e,r].forEach(n=>{t?n.setAttribute("theme",t):n.removeAttribute("theme")})}__pickersChanged(t,e){!t||!e||t.__defaultPicker===e.__defaultPicker&&(t.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(Ih.is,Ih);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-field-outline",O`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-user-tags-overlay",O`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});I("vaadin-user-tag",O`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oh extends q(os(G)){static get is(){return"vaadin-user-tag"}static get template(){return B`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){t!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(Oh.is,Oh);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-user-tags-overlay",O`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class Rh extends rs(xr){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(Rh.is,Rh);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dh=(i,t)=>new Promise(e=>{const r=()=>{i.removeEventListener(t,r),e()};i.addEventListener(t,r)});class kh extends G{static get is(){return"vaadin-user-tags"}static get template(){return B`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){if(this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(t&&this.hasFocus){this.opened=!0;return}!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).filter(e=>e.uid===t.id)[0]}getChangedTags(t,e){const r=e.map(a=>this.getTagForUser(a));return{added:t.map(a=>this.getTagForUser(a)||this.createUserTag(a)),removed:r}}getChangedUsers(t,e){const r=[],n=[];e.forEach(o=>{for(let l=0;l<o.removed.length;l++)n.push(o.removed[l]);for(let l=o.addedCount-1;l>=0;l--)r.push(t[o.index+l])});const a=r.filter(o=>!n.some(l=>o.id===l.id)),s=n.filter(o=>!r.some(l=>o.id===l.id));return{addedUsers:a,removedUsers:s}}applyTagsStart({added:t,removed:e}){const r=this.wrapper;e.forEach(n=>{n&&(n.classList.add("removing"),n.classList.remove("show"))}),t.forEach(n=>r.insertBefore(n,r.firstChild))}applyTagsEnd({added:t,removed:e}){const r=this.wrapper;e.forEach(n=>{n&&n.parentNode===r&&r.removeChild(n)}),t.forEach(n=>n&&n.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=ko(t,this.users);if(e.length===0)return;const{addedUsers:r,removedUsers:n}=this.getChangedUsers(t,e);if(r.length===0&&n.length===0)return;const a=this.getChangedTags(r,n);if(this.__flashQueue.length>0){for(let s=0;s<n.length;s++)if(a.removed[s]===null)for(let o=0;o<this.__flashQueue.length;o++)this.__flashQueue[o].some(l=>l.uid===n[s].id)&&this.splice("__flashQueue",s,1)}if(this.opened&&this.hasFocus)this.updateTags(t,a);else if(r.length>0&&document.visibilityState!=="hidden"){const s=a.added,o=a.removed;this.updateTagsSync(t,{added:[],removed:o}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",s):this.flashTags(s)}else this.updateTagsSync(t,a)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,r=Array.from(e.children);r.forEach(n=>{n.style.display="none"}),t.forEach(n=>{e.insertBefore(n,e.firstChild)}),this.flashPromise=new Promise(n=>{Dh(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=Ce.debounce(this._debounceFlashStart,ai.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(a=>a.classList.remove("show")),this._debounceFlashEnd=Ce.debounce(this._debounceFlashEnd,ai.after(this.duration),()=>{const a=()=>{r.forEach(s=>{s.style.display="block"}),this.flashing=!1,n()};this.hasFocus?a():(Dh(this.$.overlay,"animationend").then(()=>{a()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const n=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(n)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=Ce.debounce(this._debounceRender,ai.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),t.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(kh.is,kh);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ph extends q(os(G)){static get is(){return"vaadin-field-outline"}static get template(){return B`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",Boolean(t));const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",r="--_active-user-color";this.style.setProperty(r,e),this._field&&this._field.style.setProperty(r,e)}}customElements.define(Ph.is,Ph);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U_=(i,t)=>{switch(t){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return i.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return i.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return i.shadowRoot.querySelector('[part="radio"]');default:return i}},ks=new WeakMap,V_=i=>{if(!ks.has(i)){const t=i.tagName.toLowerCase(),e=U_(i,t);e.style.position="relative",t.endsWith("text-area")&&(e.style.overflow="visible");const r=document.createElement("style");r.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,i.shadowRoot.appendChild(r);const n=document.createElement("vaadin-field-outline");(e===i?i.shadowRoot:e).appendChild(n),n.setAttribute("context",t),ks.set(i,{root:i,target:e,outline:n})}return ks.get(i)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jo{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",r=>{r.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=Ce.debounce(this._mouseDebouncer,ai.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",r=>{r.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",r=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",r=>{this._hasFocus=!1,this._mouse||(this._debouncer=Ce.debounce(this._debouncer,ai.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",r=>{r.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((r,n)=>{const{outline:a}=V_(r),s=e.length===1?0:t.map(o=>o.fieldIndex).indexOf(n);a.user=t[s]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${t}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wr extends jo{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Y_ extends wr{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(r=>e.includes(r))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hd extends jo{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",e=>this.onBlur(e),!0),t.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onBlur(t){this.datePicker._fullscreen&&t.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0)}onFocusIn(t){if(t.relatedTarget!==this.overlay){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(t){this.fullscreenFocus||t.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){t.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),t.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class W_ extends Hd{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class H_ extends wr{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class j_ extends jo{constructor(t){super(t);const[e,r]=this.getFields();this.dateObserver=new W_(e,t),this.timeObserver=new H_(r,t)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class q_ extends wr{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(r=>e.includes(r))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class X_ extends wr{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(r=>e.includes(r))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Z_ extends wr{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&e.detail.value===!1&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K_=i=>{let t;switch(i.tagName.toLowerCase()){case"vaadin-date-picker":t=new Hd(i);break;case"vaadin-date-time-picker":t=new j_(i);break;case"vaadin-select":t=new Z_(i);break;case"vaadin-checkbox-group":t=new Y_(i);break;case"vaadin-radio-group":t=new X_(i);break;case"vaadin-list-box":t=new q_(i);break;default:t=new wr(i)}return t};class Q_{get user(){return this._user}set user(t){if(this._user=t,t){const e=`${t.name} started editing`,{label:r}=this.host;De(r?`${e} ${r}`:e)}}constructor(t){this.host=t,this.user=null,this.users=[]}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&t.id!==void 0){let e;for(let r=0;r<this.users.length;r++)if(this.users[r].id===t.id){e=r;break}e!==void 0&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class J_ extends HTMLElement{static init(t){if(!t._highlighterController){const e=new Q_(t);t.setAttribute("has-highlighter",""),e.observer=K_(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}customElements.define("vaadin-field-highlighter",J_);(function(){function i(e){const r=e._overlayElement;r&&(r.className=e.className)}const t=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&i(r.target)})});window.Vaadin.Flow.confirmDialogConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",r=>{r.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){function i(e){const r=e._getPopup();r&&(r.className=e.className)}const t=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&i(r.target)})});window.Vaadin.Flow.cookieConsentConnector={initLazy:function(e){e.$connector||(e.$connector={},t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();function wt(i,t){if(t.length<i)throw new TypeError(i+" argument"+(i>1?"s":"")+" required, but only "+t.length+" present")}function tg(i){return wt(1,arguments),i instanceof Date||typeof i=="object"&&Object.prototype.toString.call(i)==="[object Date]"}function Dt(i){wt(1,arguments);var t=Object.prototype.toString.call(i);return i instanceof Date||typeof i=="object"&&t==="[object Date]"?new Date(i.getTime()):typeof i=="number"||t==="[object Number]"?new Date(i):((typeof i=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function jd(i){if(wt(1,arguments),!tg(i)&&typeof i!="number")return!1;var t=Dt(i);return!isNaN(Number(t))}var eg={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ig=function(i,t,e){var r,n=eg[i];return typeof n=="string"?r=n:t===1?r=n.one:r=n.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};const rg=ig;function Ps(i){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):i.defaultWidth,r=i.formats[e]||i.formats[i.defaultWidth];return r}}var ng={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ag={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sg={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},og={date:Ps({formats:ng,defaultWidth:"full"}),time:Ps({formats:ag,defaultWidth:"full"}),dateTime:Ps({formats:sg,defaultWidth:"full"})};const lg=og;var hg={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ug=function(i,t,e,r){return hg[i]};const cg=ug;function $r(i){return function(t,e){var r=e||{},n=r.context?String(r.context):"standalone",a;if(n==="formatting"&&i.formattingValues){var s=i.defaultFormattingWidth||i.defaultWidth,o=r.width?String(r.width):s;a=i.formattingValues[o]||i.formattingValues[s]}else{var l=i.defaultWidth,h=r.width?String(r.width):i.defaultWidth;a=i.values[h]||i.values[l]}var u=i.argumentCallback?i.argumentCallback(t):t;return a[u]}}var dg={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},fg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},pg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},mg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},_g={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gg=function(i,t){var e=Number(i),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},yg={ordinalNumber:gg,era:$r({values:dg,defaultWidth:"wide"}),quarter:$r({values:fg,defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:$r({values:pg,defaultWidth:"wide"}),day:$r({values:mg,defaultWidth:"wide"}),dayPeriod:$r({values:vg,defaultWidth:"wide",formattingValues:_g,defaultFormattingWidth:"wide"})};const bg=yg;function Gr(i){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&i.matchPatterns[r]||i.matchPatterns[i.defaultMatchWidth],a=t.match(n);if(!a)return null;var s=a[0],o=r&&i.parsePatterns[r]||i.parsePatterns[i.defaultParseWidth],l=Array.isArray(o)?wg(o,function(c){return c.test(s)}):xg(o,function(c){return c.test(s)}),h;h=i.valueCallback?i.valueCallback(l):l,h=e.valueCallback?e.valueCallback(h):h;var u=t.slice(s.length);return{value:h,rest:u}}}function xg(i,t){for(var e in i)if(i.hasOwnProperty(e)&&t(i[e]))return e}function wg(i,t){for(var e=0;e<i.length;e++)if(t(i[e]))return e}function Ag(i){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(i.matchPattern);if(!r)return null;var n=r[0],a=t.match(i.parsePattern);if(!a)return null;var s=i.valueCallback?i.valueCallback(a[0]):a[0];s=e.valueCallback?e.valueCallback(s):s;var o=t.slice(n.length);return{value:s,rest:o}}}var Cg=/^(\d+)(th|st|nd|rd)?/i,Eg=/\d+/i,Sg={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Tg={any:[/^b/i,/^(a|c)/i]},Mg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ig={any:[/1/i,/2/i,/3/i,/4/i]},Og={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Rg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kg={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Pg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Fg={ordinalNumber:Ag({matchPattern:Cg,parsePattern:Eg,valueCallback:function(i){return parseInt(i,10)}}),era:Gr({matchPatterns:Sg,defaultMatchWidth:"wide",parsePatterns:Tg,defaultParseWidth:"any"}),quarter:Gr({matchPatterns:Mg,defaultMatchWidth:"wide",parsePatterns:Ig,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:Gr({matchPatterns:Og,defaultMatchWidth:"wide",parsePatterns:Rg,defaultParseWidth:"any"}),day:Gr({matchPatterns:Dg,defaultMatchWidth:"wide",parsePatterns:kg,defaultParseWidth:"any"}),dayPeriod:Gr({matchPatterns:Pg,defaultMatchWidth:"any",parsePatterns:Lg,defaultParseWidth:"any"})};const Ng=Fg;var Bg={code:"en-US",formatDistance:rg,formatLong:lg,formatRelative:cg,localize:bg,match:Ng,options:{weekStartsOn:0,firstWeekContainsDate:1}};const qd=Bg;function _t(i){if(i===null||i===!0||i===!1)return NaN;var t=Number(i);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function zg(i,t){wt(2,arguments);var e=Dt(i).getTime(),r=_t(t);return new Date(e+r)}function Xd(i,t){wt(2,arguments);var e=_t(t);return zg(i,-e)}var $g=864e5;function Gg(i){wt(1,arguments);var t=Dt(i),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/$g)+1}function cr(i){wt(1,arguments);var t=1,e=Dt(i),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function Zd(i){wt(1,arguments);var t=Dt(i),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=cr(r),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var s=cr(a);return t.getTime()>=n.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function Ug(i){wt(1,arguments);var t=Zd(i),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=cr(e);return r}var Vg=6048e5;function Kd(i){wt(1,arguments);var t=Dt(i),e=cr(t).getTime()-Ug(t).getTime();return Math.round(e/Vg)+1}function Ti(i,t){wt(1,arguments);var e=t||{},r=e.locale,n=r&&r.options&&r.options.weekStartsOn,a=n==null?0:_t(n),s=e.weekStartsOn==null?a:_t(e.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var o=Dt(i),l=o.getUTCDay(),h=(l<s?7:0)+l-s;return o.setUTCDate(o.getUTCDate()-h),o.setUTCHours(0,0,0,0),o}function qo(i,t){wt(1,arguments);var e=Dt(i),r=e.getUTCFullYear(),n=t||{},a=n.locale,s=a&&a.options&&a.options.firstWeekContainsDate,o=s==null?1:_t(s),l=n.firstWeekContainsDate==null?o:_t(n.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(r+1,0,l),h.setUTCHours(0,0,0,0);var u=Ti(h,t),c=new Date(0);c.setUTCFullYear(r,0,l),c.setUTCHours(0,0,0,0);var d=Ti(c,t);return e.getTime()>=u.getTime()?r+1:e.getTime()>=d.getTime()?r:r-1}function Yg(i,t){wt(1,arguments);var e=t||{},r=e.locale,n=r&&r.options&&r.options.firstWeekContainsDate,a=n==null?1:_t(n),s=e.firstWeekContainsDate==null?a:_t(e.firstWeekContainsDate),o=qo(i,t),l=new Date(0);l.setUTCFullYear(o,0,s),l.setUTCHours(0,0,0,0);var h=Ti(l,t);return h}var Wg=6048e5;function Qd(i,t){wt(1,arguments);var e=Dt(i),r=Ti(e,t).getTime()-Yg(e,t).getTime();return Math.round(r/Wg)+1}function nt(i,t){for(var e=i<0?"-":"",r=Math.abs(i).toString();r.length<t;)r="0"+r;return e+r}var Hg={y:function(i,t){var e=i.getUTCFullYear(),r=e>0?e:1-e;return nt(t==="yy"?r%100:r,t.length)},M:function(i,t){var e=i.getUTCMonth();return t==="M"?String(e+1):nt(e+1,2)},d:function(i,t){return nt(i.getUTCDate(),t.length)},a:function(i,t){var e=i.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(i,t){return nt(i.getUTCHours()%12||12,t.length)},H:function(i,t){return nt(i.getUTCHours(),t.length)},m:function(i,t){return nt(i.getUTCMinutes(),t.length)},s:function(i,t){return nt(i.getUTCSeconds(),t.length)},S:function(i,t){var e=t.length,r=i.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,e-3));return nt(n,t.length)}};const Ve=Hg;var Ui={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},jg={G:function(i,t,e){var r=i.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})}},y:function(i,t,e){if(t==="yo"){var r=i.getUTCFullYear(),n=r>0?r:1-r;return e.ordinalNumber(n,{unit:"year"})}return Ve.y(i,t)},Y:function(i,t,e,r){var n=qo(i,r),a=n>0?n:1-n;if(t==="YY"){var s=a%100;return nt(s,2)}return t==="Yo"?e.ordinalNumber(a,{unit:"year"}):nt(a,t.length)},R:function(i,t){var e=Zd(i);return nt(e,t.length)},u:function(i,t){var e=i.getUTCFullYear();return nt(e,t.length)},Q:function(i,t,e){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return nt(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(i,t,e){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return nt(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(i,t,e){var r=i.getUTCMonth();switch(t){case"M":case"MM":return Ve.M(i,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(i,t,e){var r=i.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return nt(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(i,t,e,r){var n=Qd(i,r);return t==="wo"?e.ordinalNumber(n,{unit:"week"}):nt(n,t.length)},I:function(i,t,e){var r=Kd(i);return t==="Io"?e.ordinalNumber(r,{unit:"week"}):nt(r,t.length)},d:function(i,t,e){return t==="do"?e.ordinalNumber(i.getUTCDate(),{unit:"date"}):Ve.d(i,t)},D:function(i,t,e){var r=Gg(i);return t==="Do"?e.ordinalNumber(r,{unit:"dayOfYear"}):nt(r,t.length)},E:function(i,t,e){var r=i.getUTCDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(i,t,e,r){var n=i.getUTCDay(),a=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return nt(a,2);case"eo":return e.ordinalNumber(a,{unit:"day"});case"eee":return e.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(n,{width:"short",context:"formatting"});case"eeee":default:return e.day(n,{width:"wide",context:"formatting"})}},c:function(i,t,e,r){var n=i.getUTCDay(),a=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return nt(a,t.length);case"co":return e.ordinalNumber(a,{unit:"day"});case"ccc":return e.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(n,{width:"narrow",context:"standalone"});case"cccccc":return e.day(n,{width:"short",context:"standalone"});case"cccc":default:return e.day(n,{width:"wide",context:"standalone"})}},i:function(i,t,e){var r=i.getUTCDay(),n=r===0?7:r;switch(t){case"i":return String(n);case"ii":return nt(n,t.length);case"io":return e.ordinalNumber(n,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});case"iiii":default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(i,t,e){var r=i.getUTCHours(),n=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(i,t,e){var r=i.getUTCHours(),n;switch(r===12?n=Ui.noon:r===0?n=Ui.midnight:n=r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(i,t,e){var r=i.getUTCHours(),n;switch(r>=17?n=Ui.evening:r>=12?n=Ui.afternoon:r>=4?n=Ui.morning:n=Ui.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(i,t,e){if(t==="ho"){var r=i.getUTCHours()%12;return r===0&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return Ve.h(i,t)},H:function(i,t,e){return t==="Ho"?e.ordinalNumber(i.getUTCHours(),{unit:"hour"}):Ve.H(i,t)},K:function(i,t,e){var r=i.getUTCHours()%12;return t==="Ko"?e.ordinalNumber(r,{unit:"hour"}):nt(r,t.length)},k:function(i,t,e){var r=i.getUTCHours();return r===0&&(r=24),t==="ko"?e.ordinalNumber(r,{unit:"hour"}):nt(r,t.length)},m:function(i,t,e){return t==="mo"?e.ordinalNumber(i.getUTCMinutes(),{unit:"minute"}):Ve.m(i,t)},s:function(i,t,e){return t==="so"?e.ordinalNumber(i.getUTCSeconds(),{unit:"second"}):Ve.s(i,t)},S:function(i,t){return Ve.S(i,t)},X:function(i,t,e,r){var n=r._originalDate||i,a=n.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return Fh(a);case"XXXX":case"XX":return _i(a);case"XXXXX":case"XXX":default:return _i(a,":")}},x:function(i,t,e,r){var n=r._originalDate||i,a=n.getTimezoneOffset();switch(t){case"x":return Fh(a);case"xxxx":case"xx":return _i(a);case"xxxxx":case"xxx":default:return _i(a,":")}},O:function(i,t,e,r){var n=r._originalDate||i,a=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Lh(a,":");case"OOOO":default:return"GMT"+_i(a,":")}},z:function(i,t,e,r){var n=r._originalDate||i,a=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Lh(a,":");case"zzzz":default:return"GMT"+_i(a,":")}},t:function(i,t,e,r){var n=r._originalDate||i,a=Math.floor(n.getTime()/1e3);return nt(a,t.length)},T:function(i,t,e,r){var n=r._originalDate||i,a=n.getTime();return nt(a,t.length)}};function Lh(i,t){var e=i>0?"-":"+",r=Math.abs(i),n=Math.floor(r/60),a=r%60;if(a===0)return e+String(n);var s=t||"";return e+String(n)+s+nt(a,2)}function Fh(i,t){if(i%60===0){var e=i>0?"-":"+";return e+nt(Math.abs(i)/60,2)}return _i(i,t)}function _i(i,t){var e=t||"",r=i>0?"-":"+",n=Math.abs(i),a=nt(Math.floor(n/60),2),s=nt(n%60,2);return r+a+e+s}const qg=jg;function Nh(i,t){switch(i){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Jd(i,t){switch(i){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function Xg(i,t){var e=i.match(/(P+)(p+)?/)||[],r=e[1],n=e[2];if(!n)return Nh(i,t);var a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Nh(r,t)).replace("{{time}}",Jd(n,t))}var Zg={p:Jd,P:Xg};const tf=Zg;function ef(i){var t=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return t.setUTCFullYear(i.getFullYear()),i.getTime()-t.getTime()}var Kg=["D","DD"],Qg=["YY","YYYY"];function rf(i){return Kg.indexOf(i)!==-1}function nf(i){return Qg.indexOf(i)!==-1}function La(i,t,e){if(i==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(i==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(i==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(i==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"))}var Jg=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ty=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ey=/^'([^]*?)'?$/,iy=/''/g,ry=/[a-zA-Z]/;function ny(i,t,e){wt(2,arguments);var r=String(t),n=e||{},a=n.locale||qd,s=a.options&&a.options.firstWeekContainsDate,o=s==null?1:_t(s),l=n.firstWeekContainsDate==null?o:_t(n.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=a.options&&a.options.weekStartsOn,u=h==null?0:_t(h),c=n.weekStartsOn==null?u:_t(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!a.localize)throw new RangeError("locale must contain localize property");if(!a.formatLong)throw new RangeError("locale must contain formatLong property");var d=Dt(i);if(!jd(d))throw new RangeError("Invalid time value");var f=ef(d),p=Xd(d,f),m={firstWeekContainsDate:l,weekStartsOn:c,locale:a,_originalDate:d},v=r.match(ty).map(function(_){var g=_[0];if(g==="p"||g==="P"){var y=tf[g];return y(_,a.formatLong,m)}return _}).join("").match(Jg).map(function(_){if(_==="''")return"'";var g=_[0];if(g==="'")return ay(_);var y=qg[g];if(y)return!n.useAdditionalWeekYearTokens&&nf(_)&&La(_,t,i),!n.useAdditionalDayOfYearTokens&&rf(_)&&La(_,t,i),y(p,_,a.localize,m);if(g.match(ry))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return _}).join("");return v}function ay(i){return i.match(ey)[1].replace(iy,"'")}function sy(i,t){if(i==null)throw new TypeError("assign requires that input parameter not be null or undefined");t=t||{};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i}function Ls(i,t,e){wt(2,arguments);var r=e||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,s=a==null?0:_t(a),o=r.weekStartsOn==null?s:_t(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=Dt(i),h=_t(t),u=l.getUTCDay(),c=h%7,d=(c+7)%7,f=(d<o?7:0)+h-u;return l.setUTCDate(l.getUTCDate()+f),l}function oy(i,t){wt(2,arguments);var e=_t(t);e%7===0&&(e=e-7);var r=1,n=Dt(i),a=n.getUTCDay(),s=e%7,o=(s+7)%7,l=(o<r?7:0)+e-a;return n.setUTCDate(n.getUTCDate()+l),n}function ly(i,t){wt(2,arguments);var e=Dt(i),r=_t(t),n=Kd(e)-r;return e.setUTCDate(e.getUTCDate()-n*7),e}function hy(i,t,e){wt(2,arguments);var r=Dt(i),n=_t(t),a=Qd(r,e)-n;return r.setUTCDate(r.getUTCDate()-a*7),r}var uy=36e5,cy=6e4,dy=1e3,gt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},_e={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ct(i,t,e){var r=t.match(i);if(!r)return null;var n=parseInt(r[0],10);return{value:e?e(n):n,rest:t.slice(r[0].length)}}function ge(i,t){var e=t.match(i);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var r=e[1]==="+"?1:-1,n=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,s=e[5]?parseInt(e[5],10):0;return{value:r*(n*uy+a*cy+s*dy),rest:t.slice(e[0].length)}}function Bh(i,t){return ct(gt.anyDigitsSigned,i,t)}function vt(i,t,e){switch(i){case 1:return ct(gt.singleDigit,t,e);case 2:return ct(gt.twoDigits,t,e);case 3:return ct(gt.threeDigits,t,e);case 4:return ct(gt.fourDigits,t,e);default:return ct(new RegExp("^\\d{1,"+i+"}"),t,e)}}function na(i,t,e){switch(i){case 1:return ct(gt.singleDigitSigned,t,e);case 2:return ct(gt.twoDigitsSigned,t,e);case 3:return ct(gt.threeDigitsSigned,t,e);case 4:return ct(gt.fourDigitsSigned,t,e);default:return ct(new RegExp("^-?\\d{1,"+i+"}"),t,e)}}function Fs(i){switch(i){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function zh(i,t){var e=t>0,r=e?t:1-t,n;if(r<=50)n=i||100;else{var a=r+50,s=Math.floor(a/100)*100,o=i>=a%100;n=i+s-(o?100:0)}return e?n:1-n}var fy=[31,28,31,30,31,30,31,31,30,31,30,31],py=[31,29,31,30,31,30,31,31,30,31,30,31];function $h(i){return i%400===0||i%4===0&&i%100!==0}var my={G:{priority:140,parse:function(i,t,e,r){switch(t){case"G":case"GG":case"GGG":return e.era(i,{width:"abbreviated"})||e.era(i,{width:"narrow"});case"GGGGG":return e.era(i,{width:"narrow"});case"GGGG":default:return e.era(i,{width:"wide"})||e.era(i,{width:"abbreviated"})||e.era(i,{width:"narrow"})}},set:function(i,t,e,r){return t.era=e,i.setUTCFullYear(e,0,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(i,t,e,r){var n=function(a){return{year:a,isTwoDigitYear:t==="yy"}};switch(t){case"y":return vt(4,i,n);case"yo":return e.ordinalNumber(i,{unit:"year",valueCallback:n});default:return vt(t.length,i,n)}},validate:function(i,t,e){return t.isTwoDigitYear||t.year>0},set:function(i,t,e,r){var n=i.getUTCFullYear();if(e.isTwoDigitYear){var a=zh(e.year,n);return i.setUTCFullYear(a,0,1),i.setUTCHours(0,0,0,0),i}var s=!("era"in t)||t.era===1?e.year:1-e.year;return i.setUTCFullYear(s,0,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(i,t,e,r){var n=function(a){return{year:a,isTwoDigitYear:t==="YY"}};switch(t){case"Y":return vt(4,i,n);case"Yo":return e.ordinalNumber(i,{unit:"year",valueCallback:n});default:return vt(t.length,i,n)}},validate:function(i,t,e){return t.isTwoDigitYear||t.year>0},set:function(i,t,e,r){var n=qo(i,r);if(e.isTwoDigitYear){var a=zh(e.year,n);return i.setUTCFullYear(a,0,r.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Ti(i,r)}var s=!("era"in t)||t.era===1?e.year:1-e.year;return i.setUTCFullYear(s,0,r.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Ti(i,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(i,t,e,r){return na(t==="R"?4:t.length,i)},set:function(i,t,e,r){var n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),cr(n)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(i,t,e,r){return na(t==="u"?4:t.length,i)},set:function(i,t,e,r){return i.setUTCFullYear(e,0,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(i,t,e,r){switch(t){case"Q":case"QQ":return vt(t.length,i);case"Qo":return e.ordinalNumber(i,{unit:"quarter"});case"QQQ":return e.quarter(i,{width:"abbreviated",context:"formatting"})||e.quarter(i,{width:"narrow",context:"formatting"});case"QQQQQ":return e.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(i,{width:"wide",context:"formatting"})||e.quarter(i,{width:"abbreviated",context:"formatting"})||e.quarter(i,{width:"narrow",context:"formatting"})}},validate:function(i,t,e){return t>=1&&t<=4},set:function(i,t,e,r){return i.setUTCMonth((e-1)*3,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(i,t,e,r){switch(t){case"q":case"qq":return vt(t.length,i);case"qo":return e.ordinalNumber(i,{unit:"quarter"});case"qqq":return e.quarter(i,{width:"abbreviated",context:"standalone"})||e.quarter(i,{width:"narrow",context:"standalone"});case"qqqqq":return e.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(i,{width:"wide",context:"standalone"})||e.quarter(i,{width:"abbreviated",context:"standalone"})||e.quarter(i,{width:"narrow",context:"standalone"})}},validate:function(i,t,e){return t>=1&&t<=4},set:function(i,t,e,r){return i.setUTCMonth((e-1)*3,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(i,t,e,r){var n=function(a){return a-1};switch(t){case"M":return ct(gt.month,i,n);case"MM":return vt(2,i,n);case"Mo":return e.ordinalNumber(i,{unit:"month",valueCallback:n});case"MMM":return e.month(i,{width:"abbreviated",context:"formatting"})||e.month(i,{width:"narrow",context:"formatting"});case"MMMMM":return e.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(i,{width:"wide",context:"formatting"})||e.month(i,{width:"abbreviated",context:"formatting"})||e.month(i,{width:"narrow",context:"formatting"})}},validate:function(i,t,e){return t>=0&&t<=11},set:function(i,t,e,r){return i.setUTCMonth(e,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(i,t,e,r){var n=function(a){return a-1};switch(t){case"L":return ct(gt.month,i,n);case"LL":return vt(2,i,n);case"Lo":return e.ordinalNumber(i,{unit:"month",valueCallback:n});case"LLL":return e.month(i,{width:"abbreviated",context:"standalone"})||e.month(i,{width:"narrow",context:"standalone"});case"LLLLL":return e.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(i,{width:"wide",context:"standalone"})||e.month(i,{width:"abbreviated",context:"standalone"})||e.month(i,{width:"narrow",context:"standalone"})}},validate:function(i,t,e){return t>=0&&t<=11},set:function(i,t,e,r){return i.setUTCMonth(e,1),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(i,t,e,r){switch(t){case"w":return ct(gt.week,i);case"wo":return e.ordinalNumber(i,{unit:"week"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=1&&t<=53},set:function(i,t,e,r){return Ti(hy(i,e,r),r)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(i,t,e,r){switch(t){case"I":return ct(gt.week,i);case"Io":return e.ordinalNumber(i,{unit:"week"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=1&&t<=53},set:function(i,t,e,r){return cr(ly(i,e,r),r)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(i,t,e,r){switch(t){case"d":return ct(gt.date,i);case"do":return e.ordinalNumber(i,{unit:"date"});default:return vt(t.length,i)}},validate:function(i,t,e){var r=i.getUTCFullYear(),n=$h(r),a=i.getUTCMonth();return n?t>=1&&t<=py[a]:t>=1&&t<=fy[a]},set:function(i,t,e,r){return i.setUTCDate(e),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(i,t,e,r){switch(t){case"D":case"DD":return ct(gt.dayOfYear,i);case"Do":return e.ordinalNumber(i,{unit:"date"});default:return vt(t.length,i)}},validate:function(i,t,e){var r=i.getUTCFullYear(),n=$h(r);return n?t>=1&&t<=366:t>=1&&t<=365},set:function(i,t,e,r){return i.setUTCMonth(0,e),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(i,t,e,r){switch(t){case"E":case"EE":case"EEE":return e.day(i,{width:"abbreviated",context:"formatting"})||e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"});case"EEEEE":return e.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"});case"EEEE":default:return e.day(i,{width:"wide",context:"formatting"})||e.day(i,{width:"abbreviated",context:"formatting"})||e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"})}},validate:function(i,t,e){return t>=0&&t<=6},set:function(i,t,e,r){return i=Ls(i,e,r),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(i,t,e,r){var n=function(a){var s=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+s};switch(t){case"e":case"ee":return vt(t.length,i,n);case"eo":return e.ordinalNumber(i,{unit:"day",valueCallback:n});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"})||e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})||e.day(i,{width:"abbreviated",context:"formatting"})||e.day(i,{width:"short",context:"formatting"})||e.day(i,{width:"narrow",context:"formatting"})}},validate:function(i,t,e){return t>=0&&t<=6},set:function(i,t,e,r){return i=Ls(i,e,r),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(i,t,e,r){var n=function(a){var s=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+s};switch(t){case"c":case"cc":return vt(t.length,i,n);case"co":return e.ordinalNumber(i,{unit:"day",valueCallback:n});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"})||e.day(i,{width:"short",context:"standalone"})||e.day(i,{width:"narrow",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"})||e.day(i,{width:"narrow",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})||e.day(i,{width:"abbreviated",context:"standalone"})||e.day(i,{width:"short",context:"standalone"})||e.day(i,{width:"narrow",context:"standalone"})}},validate:function(i,t,e){return t>=0&&t<=6},set:function(i,t,e,r){return i=Ls(i,e,r),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(i,t,e,r){var n=function(a){return a===0?7:a};switch(t){case"i":case"ii":return vt(t.length,i);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(i,{width:"abbreviated",context:"formatting",valueCallback:n})||e.day(i,{width:"short",context:"formatting",valueCallback:n})||e.day(i,{width:"narrow",context:"formatting",valueCallback:n});case"iiiii":return e.day(i,{width:"narrow",context:"formatting",valueCallback:n});case"iiiiii":return e.day(i,{width:"short",context:"formatting",valueCallback:n})||e.day(i,{width:"narrow",context:"formatting",valueCallback:n});case"iiii":default:return e.day(i,{width:"wide",context:"formatting",valueCallback:n})||e.day(i,{width:"abbreviated",context:"formatting",valueCallback:n})||e.day(i,{width:"short",context:"formatting",valueCallback:n})||e.day(i,{width:"narrow",context:"formatting",valueCallback:n})}},validate:function(i,t,e){return t>=1&&t<=7},set:function(i,t,e,r){return i=oy(i,e,r),i.setUTCHours(0,0,0,0),i},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(i,t,e,r){switch(t){case"a":case"aa":case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})||e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"})}},set:function(i,t,e,r){return i.setUTCHours(Fs(e),0,0,0),i},incompatibleTokens:["b","B","H","k","t","T"]},b:{priority:80,parse:function(i,t,e,r){switch(t){case"b":case"bb":case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})||e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"})}},set:function(i,t,e,r){return i.setUTCHours(Fs(e),0,0,0),i},incompatibleTokens:["a","B","H","k","t","T"]},B:{priority:80,parse:function(i,t,e,r){switch(t){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})||e.dayPeriod(i,{width:"abbreviated",context:"formatting"})||e.dayPeriod(i,{width:"narrow",context:"formatting"})}},set:function(i,t,e,r){return i.setUTCHours(Fs(e),0,0,0),i},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(i,t,e,r){switch(t){case"h":return ct(gt.hour12h,i);case"ho":return e.ordinalNumber(i,{unit:"hour"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=1&&t<=12},set:function(i,t,e,r){var n=i.getUTCHours()>=12;return n&&e<12?i.setUTCHours(e+12,0,0,0):!n&&e===12?i.setUTCHours(0,0,0,0):i.setUTCHours(e,0,0,0),i},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(i,t,e,r){switch(t){case"H":return ct(gt.hour23h,i);case"Ho":return e.ordinalNumber(i,{unit:"hour"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=0&&t<=23},set:function(i,t,e,r){return i.setUTCHours(e,0,0,0),i},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(i,t,e,r){switch(t){case"K":return ct(gt.hour11h,i);case"Ko":return e.ordinalNumber(i,{unit:"hour"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=0&&t<=11},set:function(i,t,e,r){var n=i.getUTCHours()>=12;return n&&e<12?i.setUTCHours(e+12,0,0,0):i.setUTCHours(e,0,0,0),i},incompatibleTokens:["h","H","k","t","T"]},k:{priority:70,parse:function(i,t,e,r){switch(t){case"k":return ct(gt.hour24h,i);case"ko":return e.ordinalNumber(i,{unit:"hour"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=1&&t<=24},set:function(i,t,e,r){var n=e<=24?e%24:e;return i.setUTCHours(n,0,0,0),i},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(i,t,e,r){switch(t){case"m":return ct(gt.minute,i);case"mo":return e.ordinalNumber(i,{unit:"minute"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=0&&t<=59},set:function(i,t,e,r){return i.setUTCMinutes(e,0,0),i},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(i,t,e,r){switch(t){case"s":return ct(gt.second,i);case"so":return e.ordinalNumber(i,{unit:"second"});default:return vt(t.length,i)}},validate:function(i,t,e){return t>=0&&t<=59},set:function(i,t,e,r){return i.setUTCSeconds(e,0),i},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(i,t,e,r){var n=function(a){return Math.floor(a*Math.pow(10,-t.length+3))};return vt(t.length,i,n)},set:function(i,t,e,r){return i.setUTCMilliseconds(e),i},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(i,t,e,r){switch(t){case"X":return ge(_e.basicOptionalMinutes,i);case"XX":return ge(_e.basic,i);case"XXXX":return ge(_e.basicOptionalSeconds,i);case"XXXXX":return ge(_e.extendedOptionalSeconds,i);case"XXX":default:return ge(_e.extended,i)}},set:function(i,t,e,r){return t.timestampIsSet?i:new Date(i.getTime()-e)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(i,t,e,r){switch(t){case"x":return ge(_e.basicOptionalMinutes,i);case"xx":return ge(_e.basic,i);case"xxxx":return ge(_e.basicOptionalSeconds,i);case"xxxxx":return ge(_e.extendedOptionalSeconds,i);case"xxx":default:return ge(_e.extended,i)}},set:function(i,t,e,r){return t.timestampIsSet?i:new Date(i.getTime()-e)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(i,t,e,r){return Bh(i)},set:function(i,t,e,r){return[new Date(e*1e3),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(i,t,e,r){return Bh(i)},set:function(i,t,e,r){return[new Date(e),{timestampIsSet:!0}]},incompatibleTokens:"*"}};const vy=my;var _y=10,gy=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yy=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,by=/^'([^]*?)'?$/,xy=/''/g,wy=/\S/,Ay=/[a-zA-Z]/;function Cy(i,t,e,r){wt(3,arguments);var n=String(i),a=String(t),s=r||{},o=s.locale||qd;if(!o.match)throw new RangeError("locale must contain match property");var l=o.options&&o.options.firstWeekContainsDate,h=l==null?1:_t(l),u=s.firstWeekContainsDate==null?h:_t(s.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=c==null?0:_t(c),f=s.weekStartsOn==null?d:_t(s.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(a==="")return n===""?Dt(e):new Date(NaN);var p={firstWeekContainsDate:u,weekStartsOn:f,locale:o},m=[{priority:_y,subPriority:-1,set:Ey,index:0}],v,_=a.match(yy).map(function(k){var V=k[0];if(V==="p"||V==="P"){var j=tf[V];return j(k,o.formatLong,p)}return k}).join("").match(gy),g=[];for(v=0;v<_.length;v++){var y=_[v];!s.useAdditionalWeekYearTokens&&nf(y)&&La(y,a,i),!s.useAdditionalDayOfYearTokens&&rf(y)&&La(y,a,i);var b=y[0],x=vy[b];if(x){var w=x.incompatibleTokens;if(Array.isArray(w)){for(var C=void 0,A=0;A<g.length;A++){var T=g[A].token;if(w.indexOf(T)!==-1||T===b){C=g[A];break}}if(C)throw new RangeError("The format string mustn't contain `".concat(C.fullToken,"` and `").concat(y,"` at the same time"))}else if(x.incompatibleTokens==="*"&&g.length)throw new RangeError("The format string mustn't contain `".concat(y,"` and any other token at the same time"));g.push({token:b,fullToken:y});var R=x.parse(n,y,o.match,p);if(!R)return new Date(NaN);m.push({priority:x.priority,subPriority:x.subPriority||0,set:x.set,validate:x.validate,value:R.value,index:m.length}),n=R.rest}else{if(b.match(Ay))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");if(y==="''"?y="'":b==="'"&&(y=Sy(y)),n.indexOf(y)===0)n=n.slice(y.length);else return new Date(NaN)}}if(n.length>0&&wy.test(n))return new Date(NaN);var L=m.map(function(k){return k.priority}).sort(function(k,V){return V-k}).filter(function(k,V,j){return j.indexOf(k)===V}).map(function(k){return m.filter(function(V){return V.priority===k}).sort(function(V,j){return j.subPriority-V.subPriority})}).map(function(k){return k[0]}),F=Dt(e);if(isNaN(F))return new Date(NaN);var P=Xd(F,ef(F)),U={};for(v=0;v<L.length;v++){var N=L[v];if(N.validate&&!N.validate(P,N.value,p))return new Date(NaN);var z=N.set(P,U,N.value,p);z[0]?(P=z[0],sy(U,z[1])):P=z}return P}function Ey(i,t){if(t.timestampIsSet)return i;var e=new Date(0);return e.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),e.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),e}function Sy(i){return i.match(by)[1].replace(xy,"'")}(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker")};class t{constructor(r){this.initial=r,this.index=0,this.value=0}static compare(r,n){return r.index<n.index?-1:r.index>n.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:e=>i(function(r){if(r.$connector)return;r.$connector={},r.$connector.dayPart=new t("22"),r.$connector.monthPart=new t("11"),r.$connector.yearPart=new t("1987"),r.$connector.parts=[r.$connector.dayPart,r.$connector.monthPart,r.$connector.yearPart],r.addEventListener("blur",i(o=>{!o.target.value&&o.target.invalid&&console.warn("Invalid value in the DatePicker.")}));const n=i(function(o){return o.replace(/[^\x00-\x7F]/g,"")});i(function(){let o="";try{o=r._inputValue}catch{o=r.value||""}return o});const a=i(function(o){try{new Date().toLocaleDateString(o)}catch{o="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}let l=new Date(Date.UTC(r.$connector.yearPart.initial,r.$connector.monthPart.initial-1,r.$connector.dayPart.initial)),h=n(l.toLocaleDateString(o,{timeZone:"UTC"}));r.$connector.parts.forEach(function(d){d.index=h.indexOf(d.initial)}),r.$connector.parts.sort(t.compare),r.$connector.regex=h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(r.$connector.dayPart.initial,"(\\d{1,2})").replace(r.$connector.monthPart.initial,"(\\d{1,2})").replace(r.$connector.yearPart.initial,"(\\d{1,4})");function u(d){let f=r._parseDate(`${d.year}-${d.month+1}-${d.day}`);return f.setHours(12),n(f.toLocaleDateString(o))}function c(d){if(d=n(d),d.length==0)return;let f=d.match(r.$connector.regex);if(f&&f.length==4){for(let p=1;p<4;p++)r.$connector.parts[p-1].value=parseInt(f[p]);return{day:r.$connector.dayPart.value,month:r.$connector.monthPart.value-1,year:r.$connector.yearPart.value}}else return!1}return{formatDate:u,parseDate:c}}),s=i(function(o){if(!o||o.length===0)throw new Error("Array of custom date formats is null or empty");function l(u){const c=o[0],d=r._parseDate(`${u.year}-${u.month+1}-${u.day}`);return ny(d,c)}function h(u){for(let c of o){const d=Cy(u,c,new Date);if(jd(d))return{day:d.getDate(),month:d.getMonth(),year:d.getFullYear()}}return!1}return{formatDate:l,parseDate:h}});r.$connector.updateI18n=i(function(o,l){const u=l&&l.dateFormats&&l.dateFormats.length>0?s(l.dateFormats):o?a(o):null;r.i18n=Object.assign({},r.i18n,l,u)})})(e)}})();(function(){function i(e){const r=e.$.overlay;r&&(r.className=e.className)}const t=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&i(r.target)})});window.Vaadin.Flow.dialogConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",r=>{r.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid Pro")};function t(e,r){return e.__edited&&e.__edited.model.item.key===r.item.key}window.Vaadin.Flow.gridProConnector={setEditModeRenderer:(e,r)=>i(function(n,a){n.editModeRenderer=i(function(o,l,h){if(!t(this._grid,h)){this._grid._stopEdit();return}a.parentNode!==o&&(o.appendChild(a),this._grid._cancelStopEdit(),a.focus())}),n._setEditorValue=function(s,o){},n._getEditorValue=function(s){}})(e,r),patchEditModeRenderer:e=>i(function(r){r.__editModeRenderer=i(function(a,s,o){const l=a.assignedSlot.parentNode,h=s._grid;if(!t(h,o)){h._stopEdit();return}const u=s._getEditorTagName(l);(!a.firstElementChild||a.firstElementChild.localName.toLowerCase()!==u)&&(a.innerHTML=`<${u}></${u}>`)})})(e)}})();window.Vaadin.Flow.ironListConnector={initLazy:function(i){if(i.$connector)return;const t=20;let e=[0,0];i.$connector={},i.$connector.placeholderItem={__placeholder:!0};const r=function(){let o=i._virtualStart,l=i._virtualEnd,h=Math.max(0,o-t),u=Math.min(l+t,i.items.length);if(e[0]!=h||e[1]!=u){e=[h,u];const c=1+u-h;i.$server.setRequestedRange(h,c)}};let n;const a=function(){n=gr.debounce(n,Ci.after(10),r)},s=i._assignModels;i._assignModels=function(){const o=[],l=i._virtualStart,h=Math.min(i.items.length,i._physicalCount);for(let u=0;u<h;u++)i.items[l+u]===void 0&&(o.push(u),i.items[l+u]=i.$connector.placeholderItem);s.apply(i,arguments);for(let u=0;u<o.length;u++)delete i.items[l+o[u]];a()},i.items=[],i.$connector.set=function(o,l){for(let h=0;h<l.length;h++){const u=o+h;i.items[u]=l[h]}i._render()},i.$connector.updateData=function(o){const l=i.items,h={};let u=o.length;for(let c=0;c<o.length;c++){const d=o[c];h[d.key]=d}for(let c=0;c<l.length;c++){const d=l[c],f=h[d.key];if(f&&(i.items[c]=f,i.notifyPath("items."+c),u--,u==0))break}},i.$connector.clear=function(o,l){for(let h=0;h<l;h++){const u=o+h;delete i.items[u],i.notifyPath("items."+u)}},i.$connector.updateSize=function(o){const l=o-i.items.length;if(l>0)i.items.length=o,i.notifySplices("items",[{index:o-l,removed:[],addedCount:l,object:i.items,type:"splice"}]);else if(l<0){const h=i.items.slice(o,i.items.length);i.items.splice(o),i.notifySplices("items",[{index:o,removed:h,addedCount:0,object:i.items,type:"splice"}])}},i.$connector.setPlaceholderItem=function(o){o||(o={}),o.__placeholder=!0,i.$connector.placeholderItem=o}}};const af=document.createElement("template");af.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild(af.content);(function(){function i(e){const r=e.$.vaadinLoginOverlayWrapper;r&&(r.className=e.className)}const t=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&i(r.target)})});window.Vaadin.Flow.loginOverlayConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",r=>{r.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function t(e,r){if(e.$connector)return;const n=new MutationObserver(a=>{a.some(o=>{const l=o.oldValue,h=o.target.getAttribute(o.attributeName);return l!==h})&&e.$connector.generateItems()});e.$connector={generateItems:i(a=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(a));return}a&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(r,a));let s=e.__generatedItems||[];s.forEach(o=>o.disabled=o.component.disabled),s=s.filter(o=>!o.component.hidden),s.forEach(o=>{n.observe(o.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),e.items=s,e._buttons.forEach(o=>{o.item&&o.item.component&&o.addEventListener("click",l=>{l.composedPath().indexOf(o.item.component)===-1&&(o.item.component.click(),l.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...e){return i(t)(...e)}}})();(function(){const i=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,r)=>i(function(n,a,s){const o=new Intl.DateTimeFormat(s,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.items=a.map(l=>l.time?Object.assign(l,{time:o.format(new Date(l.time))}):l)})(t,e,r)}})();(function(){function i(e){const r=e._card;r&&(r.className=e.className)}const t=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&i(r.target)})});window.Vaadin.Flow.notificationConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",r=>{r.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>i(function(e){const r=i(function(){for(let n=0;n<e.childElementCount;n++){const a=e.children[n];if(a.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return a}});e.$connector||(e.$connector={},e.renderer=i(function(n){const a=r();a&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(a))}))})(t)}})();(function(){let i;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return i||(i=super.template.cloneNode(!0),i.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),i}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(r,n){this.allowedCharPattern="[\\d-+"+r+"]",this.value&&n&&(this.value=this.value.split(n).join(r))}}customElements.define(t.is,t)})})();var Ar={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},re={};re[Ar.RADIANS]=6370997/(2*Math.PI);re[Ar.DEGREES]=2*Math.PI*6370997/360;re[Ar.FEET]=.3048;re[Ar.METERS]=1;re[Ar.USFEET]=1200/3937;const Le=Ar;var Ty=function(){function i(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}return i.prototype.canWrapX=function(){return this.canWrapX_},i.prototype.getCode=function(){return this.code_},i.prototype.getExtent=function(){return this.extent_},i.prototype.getUnits=function(){return this.units_},i.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||re[this.units_]},i.prototype.getWorldExtent=function(){return this.worldExtent_},i.prototype.getAxisOrientation=function(){return this.axisOrientation_},i.prototype.isGlobal=function(){return this.global_},i.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)},i.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},i.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},i.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)},i.prototype.setWorldExtent=function(t){this.worldExtent_=t},i.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},i.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},i}();const Xo=Ty;function bt(i,t,e){return Math.min(Math.max(i,t),e)}var My=function(){var i;return"cosh"in Math?i=Math.cosh:i=function(t){var e=Math.exp(t);return(e+1/e)/2},i}(),Iy=function(){var i;return"log2"in Math?i=Math.log2:i=function(t){return Math.log(t)*Math.LOG2E},i}();function Oy(i,t,e,r,n,a){var s=n-e,o=a-r;if(s!==0||o!==0){var l=((i-e)*s+(t-r)*o)/(s*s+o*o);l>1?(e=n,r=a):l>0&&(e+=s*l,r+=o*l)}return ar(i,t,e,r)}function ar(i,t,e,r){var n=e-i,a=r-t;return n*n+a*a}function Ry(i){for(var t=i.length,e=0;e<t;e++){for(var r=e,n=Math.abs(i[e][e]),a=e+1;a<t;a++){var s=Math.abs(i[a][e]);s>n&&(n=s,r=a)}if(n===0)return null;var o=i[r];i[r]=i[e],i[e]=o;for(var l=e+1;l<t;l++)for(var h=-i[l][e]/i[e][e],u=e;u<t+1;u++)e==u?i[l][u]=0:i[l][u]+=h*i[e][u]}for(var c=new Array(t),d=t-1;d>=0;d--){c[d]=i[d][t]/i[d][d];for(var f=d-1;f>=0;f--)i[f][t]-=i[f][d]*c[d]}return c}function ba(i){return i*Math.PI/180}function Mi(i,t){var e=i%t;return e*t<0?e+t:e}function gi(i,t,e){return i+e*(t-i)}function Zo(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}function Gh(i,t){return Math.round(Zo(i,t))}function Zi(i,t){return Math.floor(Zo(i,t))}function ti(i,t){return Math.ceil(Zo(i,t))}var Dy=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),kn=6378137,Ki=Math.PI*kn,ky=[-Ki,-Ki,Ki,Ki],Py=[-180,-85,180,85],aa=kn*Math.log(Math.tan(Math.PI/2)),Vi=function(i){Dy(t,i);function t(e){return i.call(this,{code:e,units:Le.METERS,extent:ky,global:!0,worldExtent:Py,getPointResolution:function(r,n){return r/My(n[1]/kn)}})||this}return t}(Xo),Uh=[new Vi("EPSG:3857"),new Vi("EPSG:102100"),new Vi("EPSG:102113"),new Vi("EPSG:900913"),new Vi("http://www.opengis.net/def/crs/EPSG/0/3857"),new Vi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function Ly(i,t,e){var r=i.length,n=e>1?e:2,a=t;a===void 0&&(n>2?a=i.slice():a=new Array(r));for(var s=0;s<r;s+=n){a[s]=Ki*i[s]/180;var o=kn*Math.log(Math.tan(Math.PI*(+i[s+1]+90)/360));o>aa?o=aa:o<-aa&&(o=-aa),a[s+1]=o}return a}function Fy(i,t,e){var r=i.length,n=e>1?e:2,a=t;a===void 0&&(n>2?a=i.slice():a=new Array(r));for(var s=0;s<r;s+=n)a[s]=180*i[s]/Ki,a[s+1]=360*Math.atan(Math.exp(i[s+1]/kn))/Math.PI-90;return a}var Ny=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),By=6378137,Vh=[-180,-90,180,90],zy=Math.PI*By/180,vi=function(i){Ny(t,i);function t(e,r){return i.call(this,{code:e,units:Le.DEGREES,extent:Vh,axisOrientation:r,global:!0,metersPerUnit:zy,worldExtent:Vh})||this}return t}(Xo),Yh=[new vi("CRS:84"),new vi("EPSG:4326","neu"),new vi("urn:ogc:def:crs:OGC:1.3:CRS84"),new vi("urn:ogc:def:crs:OGC:2:84"),new vi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new vi("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new vi("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],mo={};function $y(i){return mo[i]||mo[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Gy(i,t){mo[i]=t}var ht=typeof Object.assign=="function"?Object.assign:function(i,t){if(i==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(i),r=1,n=arguments.length;r<n;++r){var a=arguments[r];if(a!=null)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e};function Ko(i){for(var t in i)delete i[t]}var Uy=typeof Object.values=="function"?Object.values:function(i){var t=[];for(var e in i)t.push(i[e]);return t};function un(i){var t;for(t in i)return!1;return!t}var sr={};function dr(i,t,e){var r=i.getCode(),n=t.getCode();r in sr||(sr[r]={}),sr[r][n]=e}function sf(i,t){var e;return i in sr&&t in sr[i]&&(e=sr[i][t]),e}const jr={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},Ct={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Q(){return function(){throw new Error("Unimplemented abstract method.")}()}var Vy=0;function ot(i){return i.ol_uid||(i.ol_uid=String(++Vy))}var Yy="6.13.0",Wy=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Hy=function(i){Wy(t,i);function t(e){var r=this,n="v"+Yy.split("-")[0],a="Assertion failed. See https://openlayers.org/en/"+n+"/doc/errors/#"+e+" for details.";return r=i.call(this,a)||this,r.code=e,r.name="AssertionError",r.message=a,r}return t}(Error);const of=Hy;function J(i,t){if(!i)throw new of(t)}function Wh(i){for(var t=ne(),e=0,r=i.length;e<r;++e)sn(t,i[e]);return t}function jy(i,t,e){var r=Math.min.apply(null,i),n=Math.min.apply(null,t),a=Math.max.apply(null,i),s=Math.max.apply(null,t);return Se(r,n,a,s,e)}function cn(i,t,e){return e?(e[0]=i[0]-t,e[1]=i[1]-t,e[2]=i[2]+t,e[3]=i[3]+t,e):[i[0]-t,i[1]-t,i[2]+t,i[3]+t]}function qy(i,t){return t?(t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t):i.slice()}function lf(i,t,e){var r,n;return t<i[0]?r=i[0]-t:i[2]<t?r=t-i[2]:r=0,e<i[1]?n=i[1]-e:i[3]<e?n=e-i[3]:n=0,r*r+n*n}function Cr(i,t){return hf(i,t[0],t[1])}function ei(i,t){return i[0]<=t[0]&&t[2]<=i[2]&&i[1]<=t[1]&&t[3]<=i[3]}function hf(i,t,e){return i[0]<=t&&t<=i[2]&&i[1]<=e&&e<=i[3]}function vo(i,t){var e=i[0],r=i[1],n=i[2],a=i[3],s=t[0],o=t[1],l=Ct.UNKNOWN;return s<e?l=l|Ct.LEFT:s>n&&(l=l|Ct.RIGHT),o<r?l=l|Ct.BELOW:o>a&&(l=l|Ct.ABOVE),l===Ct.UNKNOWN&&(l=Ct.INTERSECTING),l}function ne(){return[1/0,1/0,-1/0,-1/0]}function Se(i,t,e,r,n){return n?(n[0]=i,n[1]=t,n[2]=e,n[3]=r,n):[i,t,e,r]}function Qo(i){return Se(1/0,1/0,-1/0,-1/0,i)}function Xy(i,t){var e=i[0],r=i[1];return Se(e,r,e,r,t)}function Zy(i,t,e,r,n){var a=Qo(n);return uf(a,i,t,e,r)}function us(i,t){return i[0]==t[0]&&i[2]==t[2]&&i[1]==t[1]&&i[3]==t[3]}function Ky(i,t){return t[0]<i[0]&&(i[0]=t[0]),t[2]>i[2]&&(i[2]=t[2]),t[1]<i[1]&&(i[1]=t[1]),t[3]>i[3]&&(i[3]=t[3]),i}function sn(i,t){t[0]<i[0]&&(i[0]=t[0]),t[0]>i[2]&&(i[2]=t[0]),t[1]<i[1]&&(i[1]=t[1]),t[1]>i[3]&&(i[3]=t[1])}function uf(i,t,e,r,n){for(;e<r;e+=n)Qy(i,t[e],t[e+1]);return i}function Qy(i,t,e){i[0]=Math.min(i[0],t),i[1]=Math.min(i[1],e),i[2]=Math.max(i[2],t),i[3]=Math.max(i[3],e)}function cf(i,t){var e;return e=t(cs(i)),e||(e=t(ds(i)),e)||(e=t(fs(i)),e)||(e=t(Di(i)),e)?e:!1}function _o(i){var t=0;return Jo(i)||(t=lt(i)*Rt(i)),t}function cs(i){return[i[0],i[1]]}function ds(i){return[i[2],i[1]]}function ui(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function Jy(i,t){var e;return t===jr.BOTTOM_LEFT?e=cs(i):t===jr.BOTTOM_RIGHT?e=ds(i):t===jr.TOP_LEFT?e=Di(i):t===jr.TOP_RIGHT?e=fs(i):J(!1,13),e}function xa(i,t,e,r,n){var a=t*r[0]/2,s=t*r[1]/2,o=Math.cos(e),l=Math.sin(e),h=a*o,u=a*l,c=s*o,d=s*l,f=i[0],p=i[1],m=f-h+d,v=f-h-d,_=f+h-d,g=f+h+d,y=p-u-c,b=p-u+c,x=p+u+c,w=p+u-c;return Se(Math.min(m,v,_,g),Math.min(y,b,x,w),Math.max(m,v,_,g),Math.max(y,b,x,w),n)}function Rt(i){return i[3]-i[1]}function or(i,t,e){var r=e||ne();return Lt(i,t)?(i[0]>t[0]?r[0]=i[0]:r[0]=t[0],i[1]>t[1]?r[1]=i[1]:r[1]=t[1],i[2]<t[2]?r[2]=i[2]:r[2]=t[2],i[3]<t[3]?r[3]=i[3]:r[3]=t[3]):Qo(r),r}function Di(i){return[i[0],i[3]]}function fs(i){return[i[2],i[3]]}function lt(i){return i[2]-i[0]}function Lt(i,t){return i[0]<=t[2]&&i[2]>=t[0]&&i[1]<=t[3]&&i[3]>=t[1]}function Jo(i){return i[2]<i[0]||i[3]<i[1]}function t0(i,t){return t?(t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t):i}function e0(i,t,e){var r=!1,n=vo(i,t),a=vo(i,e);if(n===Ct.INTERSECTING||a===Ct.INTERSECTING)r=!0;else{var s=i[0],o=i[1],l=i[2],h=i[3],u=t[0],c=t[1],d=e[0],f=e[1],p=(f-c)/(d-u),m=void 0,v=void 0;!!(a&Ct.ABOVE)&&!(n&Ct.ABOVE)&&(m=d-(f-h)/p,r=m>=s&&m<=l),!r&&!!(a&Ct.RIGHT)&&!(n&Ct.RIGHT)&&(v=f-(d-l)*p,r=v>=o&&v<=h),!r&&!!(a&Ct.BELOW)&&!(n&Ct.BELOW)&&(m=d-(f-o)/p,r=m>=s&&m<=l),!r&&!!(a&Ct.LEFT)&&!(n&Ct.LEFT)&&(v=f-(d-s)*p,r=v>=o&&v<=h)}return r}function i0(i,t,e,r){var n=[];if(r>1)for(var a=i[2]-i[0],s=i[3]-i[1],o=0;o<r;++o)n.push(i[0]+a*o/r,i[1],i[2],i[1]+s*o/r,i[2]-a*o/r,i[3],i[0],i[3]-s*o/r);else n=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]];t(n,n,2);for(var l=[],h=[],o=0,u=n.length;o<u;o+=2)l.push(n[o]),h.push(n[o+1]);return jy(l,h,e)}function r0(i,t){var e=t.getExtent(),r=ui(i);if(t.canWrapX()&&(r[0]<e[0]||r[0]>=e[2])){var n=lt(e),a=Math.floor((r[0]-e[0])/n),s=a*n;i[0]-=s,i[2]-=s}return i}function df(i,t){for(var e=(""+i).split("."),r=(""+t).split("."),n=0;n<Math.max(e.length,r.length);n++){var a=parseInt(e[n]||"0",10),s=parseInt(r[n]||"0",10);if(a>s)return 1;if(s>a)return-1}return 0}function n0(i,t){return i[0]+=+t[0],i[1]+=+t[1],i}function Fa(i,t){for(var e=!0,r=i.length-1;r>=0;--r)if(i[r]!=t[r]){e=!1;break}return e}function a0(i,t){var e=Math.cos(t),r=Math.sin(t),n=i[0]*e-i[1]*r,a=i[1]*e+i[0]*r;return i[0]=n,i[1]=a,i}function s0(i,t){if(t.canWrapX()){var e=lt(t.getExtent()),r=ff(i,t,e);r&&(i[0]-=r*e)}return i}function ff(i,t,e){var r=t.getExtent(),n=0;if(t.canWrapX()&&(i[0]<r[0]||i[0]>r[2])){var a=e||lt(r);n=Math.floor((i[0]-r[0])/a)}return n}const X={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"};var o0=63710088e-1;function Hh(i,t,e){var r=e||o0,n=ba(i[1]),a=ba(t[1]),s=(a-n)/2,o=ba(t[0]-i[0])/2,l=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(n)*Math.cos(a);return 2*r*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}var go=!0;function l0(i){var t=i===void 0?!0:i;go=!t}function tl(i,t,e){var r;if(t!==void 0){for(var n=0,a=i.length;n<a;++n)t[n]=i[n];r=t}else r=i.slice();return r}function pf(i,t,e){if(t!==void 0&&i!==t){for(var r=0,n=i.length;r<n;++r)t[r]=i[r];i=t}return i}function mf(i){Gy(i.getCode(),i),dr(i,i,tl)}function h0(i){i.forEach(mf)}function xt(i){return typeof i=="string"?$y(i):i||null}function jh(i,t,e,r){i=xt(i);var n,a=i.getPointResolutionFunc();if(a){if(n=a(t,e),r&&r!==i.getUnits()){var s=i.getMetersPerUnit();s&&(n=n*s/re[r])}}else{var o=i.getUnits();if(o==Le.DEGREES&&!r||r==Le.DEGREES)n=t;else{var l=ps(i,xt("EPSG:4326"));if(l===pf&&o!==Le.DEGREES)n=t*i.getMetersPerUnit();else{var h=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];h=l(h,h,2);var u=Hh(h.slice(0,2),h.slice(2,4)),c=Hh(h.slice(4,6),h.slice(6,8));n=(u+c)/2}var s=r?re[r]:i.getMetersPerUnit();s!==void 0&&(n/=s)}}return n}function yo(i){h0(i),i.forEach(function(t){i.forEach(function(e){t!==e&&dr(t,e,tl)})})}function u0(i,t,e,r){i.forEach(function(n){t.forEach(function(a){dr(n,a,e),dr(a,n,r)})})}function el(i,t){return i?typeof i=="string"?xt(i):i:xt(t)}function qh(i){return function(t,e,r){for(var n=t.length,a=r!==void 0?r:2,s=e!==void 0?e:new Array(n),o=0;o<n;o+=a){var l=i([t[o],t[o+1]]);s[o]=l[0],s[o+1]=l[1];for(var h=a-1;h>=2;--h)s[o+h]=t[o+h]}return s}}function c0(i,t,e,r){var n=xt(i),a=xt(t);dr(n,a,qh(e)),dr(a,n,qh(r))}function Qe(i,t){if(i===t)return!0;var e=i.getUnits()===t.getUnits();if(i.getCode()===t.getCode())return e;var r=ps(i,t);return r===tl&&e}function ps(i,t){var e=i.getCode(),r=t.getCode(),n=sf(e,r);return n||(n=pf),n}function dn(i,t){var e=xt(i),r=xt(t);return ps(e,r)}function Pn(i,t,e){var r=dn(t,e);return r(i,void 0,i.length)}function il(i,t,e,r){var n=dn(t,e);return i0(i,n,void 0,r)}var ae=null;function vf(i){ae=xt(i)}function _f(){return ae}function Xh(i,t){return ae?Pn(i,t,ae):i}function Ye(i,t){return ae?Pn(i,ae,t):(go&&!Fa(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(go=!1,console.warn("Call useGeographic() ol/proj once to work with [longitude, latitude] coordinates.")),i)}function bo(i,t){return ae?il(i,t,ae):i}function ke(i,t){return ae?il(i,ae,t):i}function d0(i,t){if(!ae)return i;var e=xt(t).getUnits(),r=ae.getUnits();return e&&r?i*re[e]/re[r]:i}function Zh(i,t,e){return function(r){var n=r[0],a=r[1],s,o;if(i.canWrapX()){var l=i.getExtent(),h=lt(l);o=ff(r,i,h),o&&(n=n-o*h),n=bt(n,l[0],l[2]),a=bt(a,l[1],l[3]),s=e([n,a])}else s=e(r);return o&&t.canWrapX()&&(s[0]+=o*lt(t.getExtent())),s}}function f0(){yo(Uh),yo(Yh),u0(Yh,Uh,Ly,Fy)}f0();function p0(i){var t=Object.keys(i.defs),e=t.length,r,n;for(r=0;r<e;++r){var a=t[r];if(!xt(a)){var s=i.defs(a),o=s.units;!o&&s.projName==="longlat"&&(o=Le.DEGREES),mf(new Xo({code:a,axisOrientation:s.axis,metersPerUnit:s.to_meter,units:o}))}}for(r=0;r<e;++r){var l=t[r],h=xt(l);for(n=0;n<e;++n){var u=t[n],c=xt(u);if(!sf(l,u))if(i.defs[l]===i.defs[u])yo([h,c]);else{var d=i(l,u);c0(h,c,Zh(h,c,d.forward),Zh(c,h,d.inverse))}}}}function m0(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var Oi=1,Ri=2,wa=3,v0=4,xo=5,Kh=6378137,_0=6356752314e-3,Qh=.0066943799901413165,on=484813681109536e-20,E=Math.PI/2,g0=.16666666666666666,y0=.04722222222222222,b0=.022156084656084655,M=1e-10,Tt=.017453292519943295,we=57.29577951308232,et=Math.PI/4,fn=Math.PI*2,yt=3.14159265359,Ht={};Ht.greenwich=0;Ht.lisbon=-9.131906111111;Ht.paris=2.337229166667;Ht.bogota=-74.080916666667;Ht.madrid=-3.687938888889;Ht.rome=12.452333333333;Ht.bern=7.439583333333;Ht.jakarta=106.807719444444;Ht.ferro=-17.666666666667;Ht.brussels=4.367975;Ht.stockholm=18.058277777778;Ht.athens=23.7163375;Ht.oslo=10.722916666667;const x0={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var Jh=/[\s_\-\/\(\)]/g;function ci(i,t){if(i[t])return i[t];for(var e=Object.keys(i),r=t.toLowerCase().replace(Jh,""),n=-1,a,s;++n<e.length;)if(a=e[n],s=a.toLowerCase().replace(Jh,""),s===r)return i[a]}function wo(i){var t={},e=i.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,l){var h=l.split("=");return h.push(!0),o[h[0].toLowerCase()]=h[1],o},{}),r,n,a,s={proj:"projName",datum:"datumCode",rf:function(o){t.rf=parseFloat(o)},lat_0:function(o){t.lat0=o*Tt},lat_1:function(o){t.lat1=o*Tt},lat_2:function(o){t.lat2=o*Tt},lat_ts:function(o){t.lat_ts=o*Tt},lon_0:function(o){t.long0=o*Tt},lon_1:function(o){t.long1=o*Tt},lon_2:function(o){t.long2=o*Tt},alpha:function(o){t.alpha=parseFloat(o)*Tt},gamma:function(o){t.rectified_grid_angle=parseFloat(o)},lonc:function(o){t.longc=o*Tt},x_0:function(o){t.x0=parseFloat(o)},y_0:function(o){t.y0=parseFloat(o)},k_0:function(o){t.k0=parseFloat(o)},k:function(o){t.k0=parseFloat(o)},a:function(o){t.a=parseFloat(o)},b:function(o){t.b=parseFloat(o)},r_a:function(){t.R_A=!0},zone:function(o){t.zone=parseInt(o,10)},south:function(){t.utmSouth=!0},towgs84:function(o){t.datum_params=o.split(",").map(function(l){return parseFloat(l)})},to_meter:function(o){t.to_meter=parseFloat(o)},units:function(o){t.units=o;var l=ci(x0,o);l&&(t.to_meter=l.to_meter)},from_greenwich:function(o){t.from_greenwich=o*Tt},pm:function(o){var l=ci(Ht,o);t.from_greenwich=(l||parseFloat(o))*Tt},nadgrids:function(o){o==="@null"?t.datumCode="none":t.nadgrids=o},axis:function(o){var l="ewnsud";o.length===3&&l.indexOf(o.substr(0,1))!==-1&&l.indexOf(o.substr(1,1))!==-1&&l.indexOf(o.substr(2,1))!==-1&&(t.axis=o)},approx:function(){t.approx=!0}};for(r in e)n=e[r],r in s?(a=s[r],typeof a=="function"?a(n):t[a]=n):t[r]=n;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var pn=1,gf=2,yf=3,Na=4,bf=5,rl=-1,w0=/\s/,A0=/[A-Za-z]/,C0=/[A-Za-z84_]/,ms=/[,\]]/,xf=/[\d\.E\-\+]/;function Be(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=pn}Be.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==Na)for(;w0.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case pn:return this.neutral(i);case gf:return this.keyword(i);case Na:return this.quoted(i);case bf:return this.afterquote(i);case yf:return this.number(i);case rl:return}};Be.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=Na;return}if(ms.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)};Be.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=pn;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=pn,this.currentObject=this.stack.pop(),this.currentObject||(this.state=rl);return}};Be.prototype.number=function(i){if(xf.test(i)){this.word+=i;return}if(ms.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)};Be.prototype.quoted=function(i){if(i==='"'){this.state=bf;return}this.word+=i};Be.prototype.keyword=function(i){if(C0.test(i)){this.word+=i;return}if(i==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=pn;return}if(ms.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)};Be.prototype.neutral=function(i){if(A0.test(i)){this.word=i,this.state=gf;return}if(i==='"'){this.word="",this.state=Na;return}if(xf.test(i)){this.word=i,this.state=yf;return}if(ms.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)};Be.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===rl)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function E0(i){var t=new Be(i);return t.output()}function tu(i,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var r=t?{}:i,n=e.reduce(function(a,s){return Qi(s,a),a},r);t&&(i[t]=n)}function Qi(i,t){if(!Array.isArray(i)){t[i]=!0;return}var e=i.shift();if(e==="PARAMETER"&&(e=i.shift()),i.length===1){if(Array.isArray(i[0])){t[e]={},Qi(i[0],t[e]);return}t[e]=i[0];return}if(!i.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=i;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(i);return}Array.isArray(e)||(t[e]={});var r;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&Qi(i[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:i[0],a:i[1],rf:i[2]},i.length===4&&Qi(i[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":i[0]=["name",i[0]],tu(t,e,i);return;default:for(r=-1;++r<i.length;)if(!Array.isArray(i[r]))return Qi(i,t[e]);return tu(t,e,i)}}var S0=.017453292519943295;function T0(i,t){var e=t[0],r=t[1];!(e in i)&&r in i&&(i[e]=i[r],t.length===3&&(i[e]=t[2](i[e])))}function ye(i){return i*S0}function M0(i){if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var t="",e=0,r=i.AXIS.length;e<r;++e){var n=[i.AXIS[e][0].toLowerCase(),i.AXIS[e][1].toLowerCase()];n[0].indexOf("north")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="north"?t+="n":n[0].indexOf("south")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="south"?t+="s":n[0].indexOf("east")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="east"?t+="e":(n[0].indexOf("west")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(i.axis=t)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var a=i.GEOGCS;i.type==="GEOGCS"&&(a=i),a&&(a.DATUM?i.datumCode=a.DATUM.name.toLowerCase():i.datumCode=a.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),(i.datumCode==="new_zealand_geodetic_datum_1949"||i.datumCode==="new_zealand_1949")&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode.slice(-6)==="_ferro"&&(i.datumCode=i.datumCode.slice(0,-6)),i.datumCode.slice(-8)==="_jakarta"&&(i.datumCode=i.datumCode.slice(0,-8)),~i.datumCode.indexOf("belge")&&(i.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(i.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=a.DATUM.SPHEROID.a,i.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(i.datum_params=a.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a);function s(h){var u=i.to_meter||1;return h*u}var o=function(h){return T0(i,h)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",ye],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",ye],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",ye],["lat0","latitude_of_origin",ye],["lat0","standard_parallel_1",ye],["lat1","standard_parallel_1",ye],["lat2","standard_parallel_2",ye],["azimuth","Azimuth"],["alpha","azimuth",ye],["srsCode","name"]];l.forEach(o),!i.long0&&i.longc&&(i.projName==="Albers_Conic_Equal_Area"||i.projName==="Lambert_Azimuthal_Equal_Area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(i.projName==="Stereographic_South_Pole"||i.projName==="Polar Stereographic (variant B)")?(i.lat0=ye(i.lat1>0?90:-90),i.lat_ts=i.lat1):!i.lat_ts&&i.lat0&&i.projName==="Polar_Stereographic"&&(i.lat_ts=i.lat0,i.lat0=ye(i.lat0>0?90:-90))}function wf(i){var t=E0(i),e=t.shift(),r=t.shift();t.unshift(["name",r]),t.unshift(["type",e]);var n={};return Qi(t,n),M0(n),n}function Pt(i){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Pt[i]=wo(arguments[1]):Pt[i]=wf(arguments[1]):Pt[i]=e}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(r){Array.isArray(r)?Pt.apply(t,r):Pt(r)});if(typeof i=="string"){if(i in Pt)return Pt[i]}else"EPSG"in i?Pt["EPSG:"+i.EPSG]=i:"ESRI"in i?Pt["ESRI:"+i.ESRI]=i:"IAU2000"in i?Pt["IAU2000:"+i.IAU2000]=i:console.log(i);return}}m0(Pt);function I0(i){return typeof i=="string"}function O0(i){return i in Pt}var R0=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function D0(i){return R0.some(function(t){return i.indexOf(t)>-1})}var k0=["3857","900913","3785","102113"];function P0(i){var t=ci(i,"authority");if(!!t){var e=ci(t,"epsg");return e&&k0.indexOf(e)>-1}}function L0(i){var t=ci(i,"extension");if(!!t)return ci(t,"proj4")}function F0(i){return i[0]==="+"}function N0(i){if(I0(i)){if(O0(i))return Pt[i];if(D0(i)){var t=wf(i);if(P0(t))return Pt["EPSG:3857"];var e=L0(t);return e?wo(e):t}if(F0(i))return wo(i)}else return i}function eu(i,t){i=i||{};var e,r;if(!t)return i;for(r in t)e=t[r],e!==void 0&&(i[r]=e);return i}function Te(i,t,e){var r=i*t;return e/Math.sqrt(1-r*r)}function Ln(i){return i<0?-1:1}function D(i){return Math.abs(i)<=yt?i:i-Ln(i)*fn}function fe(i,t,e){var r=i*e,n=.5*i;return r=Math.pow((1-r)/(1+r),n),Math.tan(.5*(E-t))/r}function mn(i,t){for(var e=.5*i,r,n,a=E-2*Math.atan(t),s=0;s<=15;s++)if(r=i*Math.sin(a),n=E-2*Math.atan(t*Math.pow((1-r)/(1+r),e))-a,a+=n,Math.abs(n)<=1e-10)return a;return-9999}function B0(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function z0(i){var t=i.x,e=i.y;if(e*we>90&&e*we<-90&&t*we>180&&t*we<-180)return null;var r,n;if(Math.abs(Math.abs(e)-E)<=M)return null;if(this.sphere)r=this.x0+this.a*this.k0*D(t-this.long0),n=this.y0+this.a*this.k0*Math.log(Math.tan(et+.5*e));else{var a=Math.sin(e),s=fe(this.e,e,a);r=this.x0+this.a*this.k0*D(t-this.long0),n=this.y0-this.a*this.k0*Math.log(s)}return i.x=r,i.y=n,i}function $0(i){var t=i.x-this.x0,e=i.y-this.y0,r,n;if(this.sphere)n=E-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var a=Math.exp(-e/(this.a*this.k0));if(n=mn(this.e,a),n===-9999)return null}return r=D(this.long0+t/(this.a*this.k0)),i.x=r,i.y=n,i}var G0=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const U0={init:B0,forward:z0,inverse:$0,names:G0};function V0(){}function iu(i){return i}var Y0=["longlat","identity"];const W0={init:V0,forward:iu,inverse:iu,names:Y0};var H0=[U0,W0],Aa={},Ba=[];function Af(i,t){var e=Ba.length;return i.names?(Ba[e]=i,i.names.forEach(function(r){Aa[r.toLowerCase()]=e}),this):(console.log(t),!0)}function j0(i){if(!i)return!1;var t=i.toLowerCase();if(typeof Aa[t]<"u"&&Ba[Aa[t]])return Ba[Aa[t]]}function q0(){H0.forEach(Af)}const X0={start:q0,add:Af,get:j0};var H={};H.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};H.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};H.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};H.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};H.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};H.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};H.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};H.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};H.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};H.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};H.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};H.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};H.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};H.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};H.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};H.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};H.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};H.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};H.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};H.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};H.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};H.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};H.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};H.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};H.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};H.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};H.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};H.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};H.hough={a:6378270,rf:297,ellipseName:"Hough"};H.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};H.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};H.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};H.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};H.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};H.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};H.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};H.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};H.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};H.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};H.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};H.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var Z0=H.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};H.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function K0(i,t,e,r){var n=i*i,a=t*t,s=(n-a)/n,o=0;r?(i*=1-s*(g0+s*(y0+s*b0)),n=i*i,s=0):o=Math.sqrt(s);var l=(n-a)/a;return{es:s,e:o,ep2:l}}function Q0(i,t,e,r,n){if(!i){var a=ci(H,r);a||(a=Z0),i=a.a,t=a.b,e=a.rf}return e&&!t&&(t=(1-1/e)*i),(e===0||Math.abs(i-t)<M)&&(n=!0,t=i),{a:i,b:t,rf:e,sphere:n}}var Et={};Et.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};Et.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};Et.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};Et.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};Et.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};Et.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};Et.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};Et.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};Et.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};Et.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};Et.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};Et.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};Et.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};Et.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};Et.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};Et.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};Et.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function J0(i,t,e,r,n,a,s){var o={};return i===void 0||i==="none"?o.datum_type=xo:o.datum_type=v0,t&&(o.datum_params=t.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=Oi),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=Ri,o.datum_params[3]*=on,o.datum_params[4]*=on,o.datum_params[5]*=on,o.datum_params[6]=o.datum_params[6]/1e6+1)),s&&(o.datum_type=wa,o.grids=s),o.a=e,o.b=r,o.es=n,o.ep2=a,o}var Cf={};function tb(i,t){var e=new DataView(t),r=rb(e),n=nb(e,r);n.nSubgrids>1&&console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");var a=ab(e,n,r),s={header:n,subgrids:a};return Cf[i]=s,s}function eb(i){if(i===void 0)return null;var t=i.split(",");return t.map(ib)}function ib(i){if(i.length===0)return null;var t=i[0]==="@";return t&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:i,mandatory:!t,grid:Cf[i]||null,isNull:!1}}function Ji(i){return i/3600*Math.PI/180}function rb(i){var t=i.getInt32(8,!1);return t===11?!1:(t=i.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function nb(i,t){return{nFields:i.getInt32(8,t),nSubgridFields:i.getInt32(24,t),nSubgrids:i.getInt32(40,t),shiftType:Ao(i,56,56+8).trim(),fromSemiMajorAxis:i.getFloat64(120,t),fromSemiMinorAxis:i.getFloat64(136,t),toSemiMajorAxis:i.getFloat64(152,t),toSemiMinorAxis:i.getFloat64(168,t)}}function Ao(i,t,e){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(t,e)))}function ab(i,t,e){for(var r=176,n=[],a=0;a<t.nSubgrids;a++){var s=ob(i,r,e),o=lb(i,r,s,e),l=Math.round(1+(s.upperLongitude-s.lowerLongitude)/s.longitudeInterval),h=Math.round(1+(s.upperLatitude-s.lowerLatitude)/s.latitudeInterval);n.push({ll:[Ji(s.lowerLongitude),Ji(s.lowerLatitude)],del:[Ji(s.longitudeInterval),Ji(s.latitudeInterval)],lim:[l,h],count:s.gridNodeCount,cvs:sb(o)})}return n}function sb(i){return i.map(function(t){return[Ji(t.longitudeShift),Ji(t.latitudeShift)]})}function ob(i,t,e){return{name:Ao(i,t+8,t+16).trim(),parent:Ao(i,t+24,t+24+8).trim(),lowerLatitude:i.getFloat64(t+72,e),upperLatitude:i.getFloat64(t+88,e),lowerLongitude:i.getFloat64(t+104,e),upperLongitude:i.getFloat64(t+120,e),latitudeInterval:i.getFloat64(t+136,e),longitudeInterval:i.getFloat64(t+152,e),gridNodeCount:i.getInt32(t+168,e)}}function lb(i,t,e,r){for(var n=t+176,a=16,s=[],o=0;o<e.gridNodeCount;o++){var l={latitudeShift:i.getFloat32(n+o*a,r),longitudeShift:i.getFloat32(n+o*a+4,r),latitudeAccuracy:i.getFloat32(n+o*a+8,r),longitudeAccuracy:i.getFloat32(n+o*a+12,r)};s.push(l)}return s}function Ee(i,t){if(!(this instanceof Ee))return new Ee(i);t=t||function(h){if(h)throw h};var e=N0(i);if(typeof e!="object"){t(i);return}var r=Ee.projections.get(e.projName);if(!r){t(i);return}if(e.datumCode&&e.datumCode!=="none"){var n=ci(Et,e.datumCode);n&&(e.datum_params=e.datum_params||(n.towgs84?n.towgs84.split(","):null),e.ellps=n.ellipse,e.datumName=n.datumName?n.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var a=Q0(e.a,e.b,e.rf,e.ellps,e.sphere),s=K0(a.a,a.b,a.rf,e.R_A),o=eb(e.nadgrids),l=e.datum||J0(e.datumCode,e.datum_params,a.a,a.b,s.es,s.ep2,o);eu(this,e),eu(this,r),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=s.es,this.e=s.e,this.ep2=s.ep2,this.datum=l,this.init(),t(null,this)}Ee.projections=X0;Ee.projections.start();function hb(i,t){return i.datum_type!==t.datum_type||i.a!==t.a||Math.abs(i.es-t.es)>5e-11?!1:i.datum_type===Oi?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]:i.datum_type===Ri?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]&&i.datum_params[3]===t.datum_params[3]&&i.datum_params[4]===t.datum_params[4]&&i.datum_params[5]===t.datum_params[5]&&i.datum_params[6]===t.datum_params[6]:!0}function Ef(i,t,e){var r=i.x,n=i.y,a=i.z?i.z:0,s,o,l,h;if(n<-E&&n>-1.001*E)n=-E;else if(n>E&&n<1.001*E)n=E;else{if(n<-E)return{x:-1/0,y:-1/0,z:i.z};if(n>E)return{x:1/0,y:1/0,z:i.z}}return r>Math.PI&&(r-=2*Math.PI),o=Math.sin(n),h=Math.cos(n),l=o*o,s=e/Math.sqrt(1-t*l),{x:(s+a)*h*Math.cos(r),y:(s+a)*h*Math.sin(r),z:(s*(1-t)+a)*o}}function Sf(i,t,e,r){var n=1e-12,a=n*n,s=30,o,l,h,u,c,d,f,p,m,v,_,g,y,b=i.x,x=i.y,w=i.z?i.z:0,C,A,T;if(o=Math.sqrt(b*b+x*x),l=Math.sqrt(b*b+x*x+w*w),o/e<n){if(C=0,l/e<n)return A=E,T=-r,{x:i.x,y:i.y,z:i.z}}else C=Math.atan2(x,b);h=w/l,u=o/l,c=1/Math.sqrt(1-t*(2-t)*u*u),p=u*(1-t)*c,m=h*c,y=0;do y++,f=e/Math.sqrt(1-t*m*m),T=o*p+w*m-f*(1-t*m*m),d=t*f/(f+T),c=1/Math.sqrt(1-d*(2-d)*u*u),v=u*(1-d)*c,_=h*c,g=_*p-v*m,p=v,m=_;while(g*g>a&&y<s);return A=Math.atan(_/Math.abs(v)),{x:C,y:A,z:T}}function ub(i,t,e){if(t===Oi)return{x:i.x+e[0],y:i.y+e[1],z:i.z+e[2]};if(t===Ri){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],l=e[5],h=e[6];return{x:h*(i.x-l*i.y+o*i.z)+r,y:h*(l*i.x+i.y-s*i.z)+n,z:h*(-o*i.x+s*i.y+i.z)+a}}}function cb(i,t,e){if(t===Oi)return{x:i.x-e[0],y:i.y-e[1],z:i.z-e[2]};if(t===Ri){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=(i.x-r)/h,c=(i.y-n)/h,d=(i.z-a)/h;return{x:u+l*c-o*d,y:-l*u+c+s*d,z:o*u-s*c+d}}}function sa(i){return i===Oi||i===Ri}function db(i,t,e){if(hb(i,t)||i.datum_type===xo||t.datum_type===xo)return e;var r=i.a,n=i.es;if(i.datum_type===wa){var a=ru(i,!1,e);if(a!==0)return;r=Kh,n=Qh}var s=t.a,o=t.b,l=t.es;if(t.datum_type===wa&&(s=Kh,o=_0,l=Qh),n===l&&r===s&&!sa(i.datum_type)&&!sa(t.datum_type))return e;if(e=Ef(e,n,r),sa(i.datum_type)&&(e=ub(e,i.datum_type,i.datum_params)),sa(t.datum_type)&&(e=cb(e,t.datum_type,t.datum_params)),e=Sf(e,l,s,o),t.datum_type===wa){var h=ru(t,!0,e);if(h!==0)return}return e}function ru(i,t,e){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;for(var r={x:-e.x,y:e.y},n={x:Number.NaN,y:Number.NaN},a=[],s=0;s<i.grids.length;s++){var o=i.grids[s];if(a.push(o.name),o.isNull){n=r;break}if(o.mandatory,o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}var l=o.grid.subgrids[0],h=(Math.abs(l.del[1])+Math.abs(l.del[0]))/1e4,u=l.ll[0]-h,c=l.ll[1]-h,d=l.ll[0]+(l.lim[0]-1)*l.del[0]+h,f=l.ll[1]+(l.lim[1]-1)*l.del[1]+h;if(!(c>r.y||u>r.x||f<r.y||d<r.x)&&(n=fb(r,t,l),!isNaN(n.x)))break}return isNaN(n.x)?(console.log("Failed to find a grid shift table for location '"+-r.x*we+" "+r.y*we+" tried: '"+a+"'"),-1):(e.x=-n.x,e.y=n.y,0)}function fb(i,t,e){var r={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return r;var n={x:i.x,y:i.y};n.x-=e.ll[0],n.y-=e.ll[1],n.x=D(n.x-Math.PI)+Math.PI;var a=nu(n,e);if(t){if(isNaN(a.x))return r;a.x=n.x-a.x,a.y=n.y-a.y;var s=9,o=1e-12,l,h;do{if(h=nu(a,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:n.x-(h.x+a.x),y:n.y-(h.y+a.y)},a.x+=l.x,a.y+=l.y}while(s--&&Math.abs(l.x)>o&&Math.abs(l.y)>o);if(s<0)return console.log("Inverse grid shift iterator failed to converge."),r;r.x=D(a.x+e.ll[0]),r.y=a.y+e.ll[1]}else isNaN(a.x)||(r.x=i.x+a.x,r.y=i.y+a.y);return r}function nu(i,t){var e={x:i.x/t.del[0],y:i.y/t.del[1]},r={x:Math.floor(e.x),y:Math.floor(e.y)},n={x:e.x-1*r.x,y:e.y-1*r.y},a={x:Number.NaN,y:Number.NaN},s;if(r.x<0||r.x>=t.lim[0]||r.y<0||r.y>=t.lim[1])return a;s=r.y*t.lim[0]+r.x;var o={x:t.cvs[s][0],y:t.cvs[s][1]};s++;var l={x:t.cvs[s][0],y:t.cvs[s][1]};s+=t.lim[0];var h={x:t.cvs[s][0],y:t.cvs[s][1]};s--;var u={x:t.cvs[s][0],y:t.cvs[s][1]},c=n.x*n.y,d=n.x*(1-n.y),f=(1-n.x)*(1-n.y),p=(1-n.x)*n.y;return a.x=f*o.x+d*l.x+p*u.x+c*h.x,a.y=f*o.y+d*l.y+p*u.y+c*h.y,a}function au(i,t,e){var r=e.x,n=e.y,a=e.z||0,s,o,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(s=r,"ew".indexOf(i.axis[l])!==-1?o="x":o="y"):l===1?(s=n,"ns".indexOf(i.axis[l])!==-1?o="y":o="x"):(s=a,o="z"),i.axis[l]){case"e":h[o]=s;break;case"w":h[o]=-s;break;case"n":h[o]=s;break;case"s":h[o]=-s;break;case"u":e[o]!==void 0&&(h.z=s);break;case"d":e[o]!==void 0&&(h.z=-s);break;default:return null}return h}function Tf(i){var t={x:i[0],y:i[1]};return i.length>2&&(t.z=i[2]),i.length>3&&(t.m=i[3]),t}function pb(i){su(i.x),su(i.y)}function su(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function mb(i,t){return(i.datum.datum_type===Oi||i.datum.datum_type===Ri)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Oi||t.datum.datum_type===Ri)&&i.datumCode!=="WGS84"}function za(i,t,e,r){var n;if(Array.isArray(e)&&(e=Tf(e)),pb(e),i.datum&&t.datum&&mb(i,t)&&(n=new Ee("WGS84"),e=za(i,n,e,r),i=n),r&&i.axis!=="enu"&&(e=au(i,!1,e)),i.projName==="longlat")e={x:e.x*Tt,y:e.y*Tt,z:e.z||0};else if(i.to_meter&&(e={x:e.x*i.to_meter,y:e.y*i.to_meter,z:e.z||0}),e=i.inverse(e),!e)return;if(i.from_greenwich&&(e.x+=i.from_greenwich),e=db(i.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*we,y:e.y*we,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),r&&t.axis!=="enu"?au(t,!0,e):e}var ou=Ee("WGS84");function Ns(i,t,e,r){var n,a,s;return Array.isArray(e)?(n=za(i,t,e,r)||{x:NaN,y:NaN},e.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof n.z=="number"?[n.x,n.y,n.z].concat(e.splice(3)):[n.x,n.y,e[2]].concat(e.splice(3)):[n.x,n.y].concat(e.splice(2)):[n.x,n.y]):(a=za(i,t,e,r),s=Object.keys(e),s.length===2||s.forEach(function(o){if(typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;a[o]=e[o]}),a)}function lu(i){return i instanceof Ee?i:i.oProj?i.oProj:Ee(i)}function Wt(i,t,e){i=lu(i);var r=!1,n;return typeof t>"u"?(t=i,i=ou,r=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=i,i=ou,r=!0),t=lu(t),e?Ns(i,t,e):(n={forward:function(a,s){return Ns(i,t,a,s)},inverse:function(a,s){return Ns(t,i,a,s)}},r&&(n.oProj=t),n)}var hu=6,Mf="AJSAJS",If="AFAFAF",tr=65,Ut=73,te=79,qr=86,Xr=90;const vb={forward:Of,inverse:_b,toPoint:Rf};function Of(i,t){return t=t||5,bb(gb({lat:i[1],lon:i[0]}),t)}function _b(i){var t=nl(kf(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Rf(i){var t=nl(kf(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function Bs(i){return i*(Math.PI/180)}function uu(i){return 180*(i/Math.PI)}function gb(i){var t=i.lat,e=i.lon,r=6378137,n=.00669438,a=.9996,s,o,l,h,u,c,d,f=Bs(t),p=Bs(e),m,v;v=Math.floor((e+180)/6)+1,e===180&&(v=60),t>=56&&t<64&&e>=3&&e<12&&(v=32),t>=72&&t<84&&(e>=0&&e<9?v=31:e>=9&&e<21?v=33:e>=21&&e<33?v=35:e>=33&&e<42&&(v=37)),s=(v-1)*6-180+3,m=Bs(s),o=n/(1-n),l=r/Math.sqrt(1-n*Math.sin(f)*Math.sin(f)),h=Math.tan(f)*Math.tan(f),u=o*Math.cos(f)*Math.cos(f),c=Math.cos(f)*(p-m),d=r*((1-n/4-3*n*n/64-5*n*n*n/256)*f-(3*n/8+3*n*n/32+45*n*n*n/1024)*Math.sin(2*f)+(15*n*n/256+45*n*n*n/1024)*Math.sin(4*f)-35*n*n*n/3072*Math.sin(6*f));var _=a*l*(c+(1-h+u)*c*c*c/6+(5-18*h+h*h+72*u-58*o)*c*c*c*c*c/120)+5e5,g=a*(d+l*Math.tan(f)*(c*c/2+(5-h+9*u+4*u*u)*c*c*c*c/24+(61-58*h+h*h+600*u-330*o)*c*c*c*c*c*c/720));return t<0&&(g+=1e7),{northing:Math.round(g),easting:Math.round(_),zoneNumber:v,zoneLetter:yb(t)}}function nl(i){var t=i.northing,e=i.easting,r=i.zoneLetter,n=i.zoneNumber;if(n<0||n>60)return null;var a=.9996,s=6378137,o=.00669438,l,h=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),u,c,d,f,p,m,v,_,g,y=e-5e5,b=t;r<"N"&&(b-=1e7),v=(n-1)*6-180+3,l=o/(1-o),m=b/a,_=m/(s*(1-o/4-3*o*o/64-5*o*o*o/256)),g=_+(3*h/2-27*h*h*h/32)*Math.sin(2*_)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*_)+151*h*h*h/96*Math.sin(6*_),u=s/Math.sqrt(1-o*Math.sin(g)*Math.sin(g)),c=Math.tan(g)*Math.tan(g),d=l*Math.cos(g)*Math.cos(g),f=s*(1-o)/Math.pow(1-o*Math.sin(g)*Math.sin(g),1.5),p=y/(u*a);var x=g-u*Math.tan(g)/f*(p*p/2-(5+3*c+10*d-4*d*d-9*l)*p*p*p*p/24+(61+90*c+298*d+45*c*c-252*l-3*d*d)*p*p*p*p*p*p/720);x=uu(x);var w=(p-(1+2*c+d)*p*p*p/6+(5-2*d+28*c-3*d*d+8*l+24*c*c)*p*p*p*p*p/120)/Math.cos(g);w=v+uu(w);var C;if(i.accuracy){var A=nl({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});C={top:A.lat,right:A.lon,bottom:x,left:w}}else C={lat:x,lon:w};return C}function yb(i){var t="Z";return 84>=i&&i>=72?t="X":72>i&&i>=64?t="W":64>i&&i>=56?t="V":56>i&&i>=48?t="U":48>i&&i>=40?t="T":40>i&&i>=32?t="S":32>i&&i>=24?t="R":24>i&&i>=16?t="Q":16>i&&i>=8?t="P":8>i&&i>=0?t="N":0>i&&i>=-8?t="M":-8>i&&i>=-16?t="L":-16>i&&i>=-24?t="K":-24>i&&i>=-32?t="J":-32>i&&i>=-40?t="H":-40>i&&i>=-48?t="G":-48>i&&i>=-56?t="F":-56>i&&i>=-64?t="E":-64>i&&i>=-72?t="D":-72>i&&i>=-80&&(t="C"),t}function bb(i,t){var e="00000"+i.easting,r="00000"+i.northing;return i.zoneNumber+i.zoneLetter+xb(i.easting,i.northing,i.zoneNumber)+e.substr(e.length-5,t)+r.substr(r.length-5,t)}function xb(i,t,e){var r=Df(e),n=Math.floor(i/1e5),a=Math.floor(t/1e5)%20;return wb(n,a,r)}function Df(i){var t=i%hu;return t===0&&(t=hu),t}function wb(i,t,e){var r=e-1,n=Mf.charCodeAt(r),a=If.charCodeAt(r),s=n+i-1,o=a+t,l=!1;s>Xr&&(s=s-Xr+tr-1,l=!0),(s===Ut||n<Ut&&s>Ut||(s>Ut||n<Ut)&&l)&&s++,(s===te||n<te&&s>te||(s>te||n<te)&&l)&&(s++,s===Ut&&s++),s>Xr&&(s=s-Xr+tr-1),o>qr?(o=o-qr+tr-1,l=!0):l=!1,(o===Ut||a<Ut&&o>Ut||(o>Ut||a<Ut)&&l)&&o++,(o===te||a<te&&o>te||(o>te||a<te)&&l)&&(o++,o===Ut&&o++),o>qr&&(o=o-qr+tr-1);var h=String.fromCharCode(s)+String.fromCharCode(o);return h}function kf(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var t=i.length,e=null,r="",n,a=0;!/[A-Z]/.test(n=i.charAt(a));){if(a>=2)throw"MGRSPoint bad conversion from: "+i;r+=n,a++}var s=parseInt(r,10);if(a===0||a+3>t)throw"MGRSPoint bad conversion from: "+i;var o=i.charAt(a++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+i;e=i.substring(a,a+=2);for(var l=Df(s),h=Ab(e.charAt(0),l),u=Cb(e.charAt(1),l);u<Eb(o);)u+=2e6;var c=t-a;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var d=c/2,f=0,p=0,m,v,_,g,y;return d>0&&(m=1e5/Math.pow(10,d),v=i.substring(a,a+d),f=parseFloat(v)*m,_=i.substring(a+d),p=parseFloat(_)*m),g=f+h,y=p+u,{easting:g,northing:y,zoneLetter:o,zoneNumber:s,accuracy:m}}function Ab(i,t){for(var e=Mf.charCodeAt(t-1),r=1e5,n=!1;e!==i.charCodeAt(0);){if(e++,e===Ut&&e++,e===te&&e++,e>Xr){if(n)throw"Bad character: "+i;e=tr,n=!0}r+=1e5}return r}function Cb(i,t){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var e=If.charCodeAt(t-1),r=0,n=!1;e!==i.charCodeAt(0);){if(e++,e===Ut&&e++,e===te&&e++,e>qr){if(n)throw"Bad character: "+i;e=tr,n=!0}r+=1e5}return r}function Eb(i){var t;switch(i){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+i}function fr(i,t,e){if(!(this instanceof fr))return new fr(i,t,e);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof t>"u"){var r=i.split(",");this.x=parseFloat(r[0],10),this.y=parseFloat(r[1],10),this.z=parseFloat(r[2],10)||0}else this.x=i,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}fr.fromMGRS=function(i){return new fr(Rf(i))};fr.prototype.toMGRS=function(i){return Of([this.x,this.y],i)};var Sb=1,Tb=.25,cu=.046875,du=.01953125,fu=.01068115234375,Mb=.75,Ib=.46875,Ob=.013020833333333334,Rb=.007120768229166667,Db=.3645833333333333,kb=.005696614583333333,Pb=.3076171875;function Pf(i){var t=[];t[0]=Sb-i*(Tb+i*(cu+i*(du+i*fu))),t[1]=i*(Mb-i*(cu+i*(du+i*fu)));var e=i*i;return t[2]=e*(Ib-i*(Ob+i*Rb)),e*=i,t[3]=e*(Db-i*kb),t[4]=e*i*Pb,t}function vs(i,t,e,r){return e*=t,t*=t,r[0]*i-e*(r[1]+t*(r[2]+t*(r[3]+t*r[4])))}var Lb=20;function Lf(i,t,e){for(var r=1/(1-t),n=i,a=Lb;a;--a){var s=Math.sin(n),o=1-t*s*s;if(o=(vs(n,s,Math.cos(n),e)-i)*(o*Math.sqrt(o))*r,n-=o,Math.abs(o)<M)return n}return n}function Fb(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Pf(this.es),this.ml0=vs(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Nb(i){var t=i.x,e=i.y,r=D(t-this.long0),n,a,s,o=Math.sin(e),l=Math.cos(e);if(this.es){var u=l*r,c=Math.pow(u,2),d=this.ep2*Math.pow(l,2),f=Math.pow(d,2),p=Math.abs(l)>M?Math.tan(e):0,m=Math.pow(p,2),v=Math.pow(m,2);n=1-this.es*Math.pow(o,2),u=u/Math.sqrt(n);var _=vs(e,o,l,this.en);a=this.a*(this.k0*u*(1+c/6*(1-m+d+c/20*(5-18*m+v+14*d-58*m*d+c/42*(61+179*v-v*m-479*m)))))+this.x0,s=this.a*(this.k0*(_-this.ml0+o*r*u/2*(1+c/12*(5-m+9*d+4*f+c/30*(61+v-58*m+270*d-330*m*d+c/56*(1385+543*v-v*m-3111*m))))))+this.y0}else{var h=l*Math.sin(r);if(Math.abs(Math.abs(h)-1)<M)return 93;if(a=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,s=l*Math.cos(r)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(s),h>=1){if(h-1>M)return 93;s=0}else s=Math.acos(s);e<0&&(s=-s),s=this.a*this.k0*(s-this.lat0)+this.y0}return i.x=a,i.y=s,i}function Bb(i){var t,e,r,n,a=(i.x-this.x0)*(1/this.a),s=(i.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+s/this.k0,e=Lf(t,this.es,this.en),Math.abs(e)<E){var c=Math.sin(e),d=Math.cos(e),f=Math.abs(d)>M?Math.tan(e):0,p=this.ep2*Math.pow(d,2),m=Math.pow(p,2),v=Math.pow(f,2),_=Math.pow(v,2);t=1-this.es*Math.pow(c,2);var g=a*Math.sqrt(t)/this.k0,y=Math.pow(g,2);t=t*f,r=e-t*y/(1-this.es)*.5*(1-y/12*(5+3*v-9*p*v+p-4*m-y/30*(61+90*v-252*p*v+45*_+46*p-y/56*(1385+3633*v+4095*_+1574*_*v)))),n=D(this.long0+g*(1-y/6*(1+2*v+p-y/20*(5+28*v+24*_+8*p*v+6*p-y/42*(61+662*v+1320*_+720*_*v))))/d)}else r=E*Ln(s),n=0;else{var o=Math.exp(a/this.k0),l=.5*(o-1/o),h=this.lat0+s/this.k0,u=Math.cos(h);t=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),r=Math.asin(t),s<0&&(r=-r),l===0&&u===0?n=0:n=D(Math.atan2(l,u)+this.long0)}return i.x=n,i.y=r,i}var zb=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Ca={init:Fb,forward:Nb,inverse:Bb,names:zb};function Ff(i){var t=Math.exp(i);return t=(t-1/t)/2,t}function de(i,t){i=Math.abs(i),t=Math.abs(t);var e=Math.max(i,t),r=Math.min(i,t)/(e||1);return e*Math.sqrt(1+Math.pow(r,2))}function $b(i){var t=1+i,e=t-1;return e===0?i:i*Math.log(t)/e}function Gb(i){var t=Math.abs(i);return t=$b(t*(1+t/(de(1,t)+1))),i<0?-t:t}function al(i,t){for(var e=2*Math.cos(2*t),r=i.length-1,n=i[r],a=0,s;--r>=0;)s=-a+e*n+i[r],a=n,n=s;return t+s*Math.sin(2*t)}function Ub(i,t){for(var e=2*Math.cos(t),r=i.length-1,n=i[r],a=0,s;--r>=0;)s=-a+e*n+i[r],a=n,n=s;return Math.sin(t)*s}function Vb(i){var t=Math.exp(i);return t=(t+1/t)/2,t}function Nf(i,t,e){for(var r=Math.sin(t),n=Math.cos(t),a=Ff(e),s=Vb(e),o=2*n*s,l=-2*r*a,h=i.length-1,u=i[h],c=0,d=0,f=0,p,m;--h>=0;)p=d,m=c,d=u,c=f,u=-p+o*d-l*c+i[h],f=-m+l*d+o*c;return o=r*s,l=n*a,[o*u-l*f,o*f+l*u]}function Yb(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Ca.init.apply(this),this.forward=Ca.forward,this.inverse=Ca.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),t=i/(2-i),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var r=al(this.cbg,this.lat0);this.Zb=-this.Qn*(r+Ub(this.gtu,2*r))}function Wb(i){var t=D(i.x-this.long0),e=i.y;e=al(this.cbg,e);var r=Math.sin(e),n=Math.cos(e),a=Math.sin(t),s=Math.cos(t);e=Math.atan2(r,s*n),t=Math.atan2(a*n,de(r,n*s)),t=Gb(Math.tan(t));var o=Nf(this.gtu,2*e,2*t);e=e+o[0],t=t+o[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),i.x=l,i.y=h,i}function Hb(i){var t=(i.x-this.x0)*(1/this.a),e=(i.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var r,n;if(Math.abs(t)<=2.623395162778){var a=Nf(this.utg,2*e,2*t);e=e+a[0],t=t+a[1],t=Math.atan(Ff(t));var s=Math.sin(e),o=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(s*h,de(l,h*o)),t=Math.atan2(l,h*o),r=D(t+this.long0),n=al(this.cgb,e)}else r=1/0,n=1/0;return i.x=r,i.y=n,i}var jb=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const Ea={init:Yb,forward:Wb,inverse:Hb,names:jb};function qb(i,t){if(i===void 0){if(i=Math.floor((D(t)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var Xb="etmerc";function Zb(){var i=qb(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*Tt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Ea.init.apply(this),this.forward=Ea.forward,this.inverse=Ea.inverse}var Kb=["Universal Transverse Mercator System","utm"];const Qb={init:Zb,names:Kb,dependsOn:Xb};function sl(i,t){return Math.pow((1-i)/(1+i),t)}var Jb=20;function tx(){var i=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+et)/(Math.pow(Math.tan(.5*this.lat0+et),this.C)*sl(this.e*i,this.ratexp))}function ex(i){var t=i.x,e=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+et),this.C)*sl(this.e*Math.sin(e),this.ratexp))-E,i.x=this.C*t,i}function ix(i){for(var t=1e-14,e=i.x/this.C,r=i.y,n=Math.pow(Math.tan(.5*r+et)/this.K,1/this.C),a=Jb;a>0&&(r=2*Math.atan(n*sl(this.e*Math.sin(i.y),-.5*this.e))-E,!(Math.abs(r-i.y)<t));--a)i.y=r;return a?(i.x=e,i.y=r,i):null}var rx=["gauss"];const ol={init:tx,forward:ex,inverse:ix,names:rx};function nx(){ol.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function ax(i){var t,e,r,n;return i.x=D(i.x-this.long0),ol.forward.apply(this,[i]),t=Math.sin(i.y),e=Math.cos(i.y),r=Math.cos(i.x),n=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*r),i.x=n*e*Math.sin(i.x),i.y=n*(this.cosc0*t-this.sinc0*e*r),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function sx(i){var t,e,r,n,a;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,a=Math.sqrt(i.x*i.x+i.y*i.y)){var s=2*Math.atan2(a,this.R2);t=Math.sin(s),e=Math.cos(s),n=Math.asin(e*this.sinc0+i.y*t*this.cosc0/a),r=Math.atan2(i.x*t,a*this.cosc0*e-i.y*this.sinc0*t)}else n=this.phic0,r=0;return i.x=r,i.y=n,ol.inverse.apply(this,[i]),i.x=D(i.x+this.long0),i}var ox=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const lx={init:nx,forward:ax,inverse:sx,names:ox};function hx(i,t,e){return t*=e,Math.tan(.5*(E+i))*Math.pow((1-t)/(1+t),.5*e)}function ux(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=M&&(this.k0=.5*(1+Ln(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=M&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=M&&(this.k0=.5*this.cons*Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/fe(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Te(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-E,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function cx(i){var t=i.x,e=i.y,r=Math.sin(e),n=Math.cos(e),a,s,o,l,h,u,c=D(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=M&&Math.abs(e+this.lat0)<=M?(i.x=NaN,i.y=NaN,i):this.sphere?(a=2*this.k0/(1+this.sinlat0*r+this.coslat0*n*Math.cos(c)),i.x=this.a*a*n*Math.sin(c)+this.x0,i.y=this.a*a*(this.coslat0*r-this.sinlat0*n*Math.cos(c))+this.y0,i):(s=2*Math.atan(this.ssfn_(e,r,this.e))-E,l=Math.cos(s),o=Math.sin(s),Math.abs(this.coslat0)<=M?(h=fe(this.e,e*this.con,this.con*r),u=2*this.a*this.k0*h/this.cons,i.x=this.x0+u*Math.sin(t-this.long0),i.y=this.y0-this.con*u*Math.cos(t-this.long0),i):(Math.abs(this.sinlat0)<M?(a=2*this.a*this.k0/(1+l*Math.cos(c)),i.y=a*o):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*l*Math.cos(c))),i.y=a*(this.cosX0*o-this.sinX0*l*Math.cos(c))+this.y0),i.x=a*l*Math.sin(c)+this.x0,i))}function dx(i){i.x-=this.x0,i.y-=this.y0;var t,e,r,n,a,s=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var o=2*Math.atan(s/(2*this.a*this.k0));return t=this.long0,e=this.lat0,s<=M?(i.x=t,i.y=e,i):(e=Math.asin(Math.cos(o)*this.sinlat0+i.y*Math.sin(o)*this.coslat0/s),Math.abs(this.coslat0)<M?this.lat0>0?t=D(this.long0+Math.atan2(i.x,-1*i.y)):t=D(this.long0+Math.atan2(i.x,i.y)):t=D(this.long0+Math.atan2(i.x*Math.sin(o),s*this.coslat0*Math.cos(o)-i.y*this.sinlat0*Math.sin(o))),i.x=t,i.y=e,i)}else if(Math.abs(this.coslat0)<=M){if(s<=M)return e=this.lat0,t=this.long0,i.x=t,i.y=e,i;i.x*=this.con,i.y*=this.con,r=s*this.cons/(2*this.a*this.k0),e=this.con*mn(this.e,r),t=this.con*D(this.con*this.long0+Math.atan2(i.x,-1*i.y))}else n=2*Math.atan(s*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,s<=M?a=this.X0:(a=Math.asin(Math.cos(n)*this.sinX0+i.y*Math.sin(n)*this.cosX0/s),t=D(this.long0+Math.atan2(i.x*Math.sin(n),s*this.cosX0*Math.cos(n)-i.y*this.sinX0*Math.sin(n)))),e=-1*mn(this.e,Math.tan(.5*(E+a)));return i.x=t,i.y=e,i}var fx=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"];const px={init:ux,forward:cx,inverse:dx,names:fx,ssfn_:hx};function mx(){var i=this.lat0;this.lambda0=this.long0;var t=Math.sin(i),e=this.a,r=this.rf,n=1/r,a=2*n-Math.pow(n,2),s=this.e=Math.sqrt(a);this.R=this.k0*e*Math.sqrt(1-a)/(1-a*Math.pow(t,2)),this.alpha=Math.sqrt(1+a/(1-a)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(t/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+i/2)),h=Math.log((1+s*t)/(1-s*t));this.K=o-this.alpha*l+this.alpha*s/2*h}function vx(i){var t=Math.log(Math.tan(Math.PI/4-i.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),r=-this.alpha*(t+e)+this.K,n=2*(Math.atan(Math.exp(r))-Math.PI/4),a=this.alpha*(i.x-this.lambda0),s=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(n)+Math.cos(this.b0)*Math.cos(a))),o=Math.asin(Math.cos(this.b0)*Math.sin(n)-Math.sin(this.b0)*Math.cos(n)*Math.cos(a));return i.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,i.x=this.R*s+this.x0,i}function _x(i){for(var t=i.x-this.x0,e=i.y-this.y0,r=t/this.R,n=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(n)+Math.sin(this.b0)*Math.cos(n)*Math.cos(r)),s=Math.atan(Math.sin(r)/(Math.cos(this.b0)*Math.cos(r)-Math.sin(this.b0)*Math.tan(n))),o=this.lambda0+s/this.alpha,l=0,h=a,u=-1e3,c=0;Math.abs(h-u)>1e-7;){if(++c>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),u=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return i.x=o,i.y=h,i}var gx=["somerc"];const yx={init:mx,forward:vx,inverse:_x,names:gx};var ji=1e-7;function bx(i){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof i.PROJECTION=="object"?Object.keys(i.PROJECTION)[0]:i.PROJECTION;return"no_uoff"in i||"no_off"in i||t.indexOf(e)!==-1}function xx(){var i,t,e,r,n,a,s,o,l,h,u=0,c,d=0,f=0,p=0,m=0,v=0,_=0;this.no_off=bx(this),this.no_rot="no_rot"in this;var g=!1;"alpha"in this&&(g=!0);var y=!1;if("rectified_grid_angle"in this&&(y=!0),g&&(_=this.alpha),y&&(u=this.rectified_grid_angle*Tt),g||y)d=this.longc;else if(f=this.long1,m=this.lat1,p=this.long2,v=this.lat2,Math.abs(m-v)<=ji||(i=Math.abs(m))<=ji||Math.abs(i-E)<=ji||Math.abs(Math.abs(this.lat0)-E)<=ji||Math.abs(Math.abs(v)-E)<=ji)throw new Error;var b=1-this.es;t=Math.sqrt(b),Math.abs(this.lat0)>M?(o=Math.sin(this.lat0),e=Math.cos(this.lat0),i=1-this.es*o*o,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*t/i,r=this.B*t/(e*Math.sqrt(i)),n=r*r-1,n<=0?n=0:(n=Math.sqrt(n),this.lat0<0&&(n=-n)),this.E=n+=r,this.E*=Math.pow(fe(this.e,this.lat0,o),this.B)):(this.B=1/t,this.A=this.k0,this.E=r=n=1),g||y?(g?(c=Math.asin(Math.sin(_)/r),y||(u=_)):(c=u,_=Math.asin(r*Math.sin(c))),this.lam0=d-Math.asin(.5*(n-1/n)*Math.tan(c))/this.B):(a=Math.pow(fe(this.e,m,Math.sin(m)),this.B),s=Math.pow(fe(this.e,v,Math.sin(v)),this.B),n=this.E/a,l=(s-a)/(s+a),h=this.E*this.E,h=(h-s*a)/(h+s*a),i=f-p,i<-Math.pi?p-=fn:i>Math.pi&&(p+=fn),this.lam0=D(.5*(f+p)-Math.atan(h*Math.tan(.5*this.B*(f-p))/l)/this.B),c=Math.atan(2*Math.sin(this.B*D(f-this.lam0))/(n-1/n)),u=_=Math.asin(r*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(r*r-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),n=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan(et-n)),this.v_pole_s=this.ArB*Math.log(Math.tan(et+n))}function wx(i){var t={},e,r,n,a,s,o,l,h;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-E)>M){if(s=this.E/Math.pow(fe(this.e,i.y,Math.sin(i.y)),this.B),o=1/s,e=.5*(s-o),r=.5*(s+o),a=Math.sin(this.B*i.x),n=(e*this.singam-a*this.cosgam)/r,Math.abs(Math.abs(n)-1)<M)throw new Error;h=.5*this.ArB*Math.log((1-n)/(1+n)),o=Math.cos(this.B*i.x),Math.abs(o)<ji?l=this.A*i.x:l=this.ArB*Math.atan2(e*this.cosgam+a*this.singam,o)}else h=i.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*i.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function Ax(i){var t,e,r,n,a,s,o,l={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(e=i.y,t=i.x):(e=i.x*this.cosrot-i.y*this.sinrot,t=i.y*this.cosrot+i.x*this.sinrot+this.u_0),r=Math.exp(-this.BrA*e),n=.5*(r-1/r),a=.5*(r+1/r),s=Math.sin(this.BrA*t),o=(s*this.cosgam+n*this.singam)/a,Math.abs(Math.abs(o)-1)<M)l.x=0,l.y=o<0?-E:E;else{if(l.y=this.E/Math.sqrt((1+o)/(1-o)),l.y=mn(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(n*this.cosgam-s*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var Cx=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Ex={init:xx,forward:wx,inverse:Ax,names:Cx};function Sx(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<M)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),r=Te(this.e,t,e),n=fe(this.e,this.lat1,t),a=Math.sin(this.lat2),s=Math.cos(this.lat2),o=Te(this.e,a,s),l=fe(this.e,this.lat2,a),h=fe(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>M?this.ns=Math.log(r/o)/Math.log(n/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=r/(this.ns*Math.pow(n,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Tx(i){var t=i.x,e=i.y;Math.abs(2*Math.abs(e)-Math.PI)<=M&&(e=Ln(e)*(E-2*M));var r=Math.abs(Math.abs(e)-E),n,a;if(r>M)n=fe(this.e,e,Math.sin(e)),a=this.a*this.f0*Math.pow(n,this.ns);else{if(r=e*this.ns,r<=0)return null;a=0}var s=this.ns*D(t-this.long0);return i.x=this.k0*(a*Math.sin(s))+this.x0,i.y=this.k0*(this.rh-a*Math.cos(s))+this.y0,i}function Mx(i){var t,e,r,n,a,s=(i.x-this.x0)/this.k0,o=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(s*s+o*o),e=1):(t=-Math.sqrt(s*s+o*o),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*s,e*o)),t!==0||this.ns>0){if(e=1/this.ns,r=Math.pow(t/(this.a*this.f0),e),n=mn(this.e,r),n===-9999)return null}else n=-E;return a=D(l/this.ns+this.long0),i.x=a,i.y=n,i}var Ix=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const Ox={init:Sx,forward:Tx,inverse:Mx,names:Ix};function Rx(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Dx(i){var t,e,r,n,a,s,o,l=i.x,h=i.y,u=D(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),r=-u*this.alfa,n=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(r)),a=Math.asin(Math.cos(e)*Math.sin(r)/Math.cos(n)),s=this.n*a,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(n/2+this.s45),this.n),i.y=o*Math.cos(s)/1,i.x=o*Math.sin(s)/1,this.czech||(i.y*=-1,i.x*=-1),i}function kx(i){var t,e,r,n,a,s,o,l,h=i.x;i.x=i.y,i.y=h,this.czech||(i.y*=-1,i.x*=-1),s=Math.sqrt(i.x*i.x+i.y*i.y),a=Math.atan2(i.y,i.x),n=a/Math.sin(this.s0),r=2*(Math.atan(Math.pow(this.ro0/s,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(r)-Math.sin(this.ad)*Math.cos(r)*Math.cos(n)),e=Math.asin(Math.cos(r)*Math.sin(n)/Math.cos(t)),i.x=this.long0-e/this.alfa,o=t,l=0;var u=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-i.y)<1e-10&&(l=1),o=i.y,u+=1;while(l===0&&u<15);return u>=15?null:i}var Px=["Krovak","krovak"];const Lx={init:Rx,forward:Dx,inverse:kx,names:Px};function Nt(i,t,e,r,n){return i*n-t*Math.sin(2*n)+e*Math.sin(4*n)-r*Math.sin(6*n)}function Fn(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function Nn(i){return .375*i*(1+.25*i*(1+.46875*i))}function Bn(i){return .05859375*i*i*(1+.75*i)}function zn(i){return i*i*i*(35/3072)}function pr(i,t,e){var r=t*e;return i/Math.sqrt(1-r*r)}function Er(i){return Math.abs(i)<E?i:i-Ln(i)*Math.PI}function $a(i,t,e,r,n){var a,s;a=i/t;for(var o=0;o<15;o++)if(s=(i-(t*a-e*Math.sin(2*a)+r*Math.sin(4*a)-n*Math.sin(6*a)))/(t-2*e*Math.cos(2*a)+4*r*Math.cos(4*a)-6*n*Math.cos(6*a)),a+=s,Math.abs(s)<=1e-10)return a;return NaN}function Fx(){this.sphere||(this.e0=Fn(this.es),this.e1=Nn(this.es),this.e2=Bn(this.es),this.e3=zn(this.es),this.ml0=this.a*Nt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Nx(i){var t,e,r=i.x,n=i.y;if(r=D(r-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(n)*Math.sin(r)),e=this.a*(Math.atan2(Math.tan(n),Math.cos(r))-this.lat0);else{var a=Math.sin(n),s=Math.cos(n),o=pr(this.a,this.e,a),l=Math.tan(n)*Math.tan(n),h=r*Math.cos(n),u=h*h,c=this.es*s*s/(1-this.es),d=this.a*Nt(this.e0,this.e1,this.e2,this.e3,n);t=o*h*(1-u*l*(1/6-(8-l+8*c)*u/120)),e=d-this.ml0+o*a/s*u*(.5+(5-l+6*c)*u/24)}return i.x=t+this.x0,i.y=e+this.y0,i}function Bx(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,r,n;if(this.sphere){var a=e+this.lat0;r=Math.asin(Math.sin(a)*Math.cos(t)),n=Math.atan2(Math.tan(t),Math.cos(a))}else{var s=this.ml0/this.a+e,o=$a(s,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-E)<=M)return i.x=this.long0,i.y=E,e<0&&(i.y*=-1),i;var l=pr(this.a,this.e,Math.sin(o)),h=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(o),2),c=t*this.a/l,d=c*c;r=o-l*Math.tan(o)/h*c*c*(.5-(1+3*u)*c*c/24),n=c*(1-d*(u/3+(1+3*u)*u*d/15))/Math.cos(o)}return i.x=D(n+this.long0),i.y=Er(r),i}var zx=["Cassini","Cassini_Soldner","cass"];const $x={init:Fx,forward:Nx,inverse:Bx,names:zx};function oi(i,t){var e;return i>1e-7?(e=i*t,(1-i*i)*(t/(1-e*e)-.5/i*Math.log((1-e)/(1+e)))):2*t}var Gx=1,Ux=2,Vx=3,Yx=4;function Wx(){var i=Math.abs(this.lat0);if(Math.abs(i-E)<M?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(i)<M?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=oi(this.e,1),this.mmf=.5/(1-this.es),this.apa=tw(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=oi(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Hx(i){var t,e,r,n,a,s,o,l,h,u,c=i.x,d=i.y;if(c=D(c-this.long0),this.sphere){if(a=Math.sin(d),u=Math.cos(d),r=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+u*r:1+this.sinph0*a+this.cosph0*u*r,e<=M)return null;e=Math.sqrt(2/e),t=e*u*Math.sin(c),e*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*u*r}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(r=-r),Math.abs(d+this.lat0)<M)return null;e=et-d*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(c),e*=r}}else{switch(o=0,l=0,h=0,r=Math.cos(c),n=Math.sin(c),a=Math.sin(d),s=oi(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=s/this.qp,l=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:h=1+this.sinb1*o+this.cosb1*l*r;break;case this.EQUIT:h=1+l*r;break;case this.N_POLE:h=E+d,s=this.qp-s;break;case this.S_POLE:h=d-E,s=this.qp+s;break}if(Math.abs(h)<M)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*o-this.sinb1*l*r):e=(h=Math.sqrt(2/(1+l*r)))*o*this.ymf,t=this.xmf*h*l*n;break;case this.N_POLE:case this.S_POLE:s>=0?(t=(h=Math.sqrt(s))*n,e=r*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return i.x=this.a*t+this.x0,i.y=this.a*e+this.y0,i}function jx(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,r,n,a,s,o,l,h;if(this.sphere){var u=0,c,d=0;if(c=Math.sqrt(t*t+e*e),n=c*.5,n>1)return null;switch(n=2*Math.asin(n),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(n),u=Math.cos(n)),this.mode){case this.EQUIT:n=Math.abs(c)<=M?0:Math.asin(e*d/c),t*=d,e=u*c;break;case this.OBLIQ:n=Math.abs(c)<=M?this.lat0:Math.asin(u*this.sinph0+e*d*this.cosph0/c),t*=d*this.cosph0,e=(u-Math.sin(n)*this.sinph0)*c;break;case this.N_POLE:e=-e,n=E-n;break;case this.S_POLE:n-=E;break}r=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<M)return i.x=this.long0,i.y=this.lat0,i;s=2*Math.asin(.5*l/this.rq),a=Math.cos(s),t*=s=Math.sin(s),this.mode===this.OBLIQ?(h=a*this.sinb1+e*s*this.cosb1/l,o=this.qp*h,e=l*this.cosb1*a-e*this.sinb1*s):(h=e*s/l,o=this.qp*h,e=l*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),o=t*t+e*e,!o)return i.x=this.long0,i.y=this.lat0,i;h=1-o/this.qp,this.mode===this.S_POLE&&(h=-h)}r=Math.atan2(t,e),n=ew(Math.asin(h),this.apa)}return i.x=D(this.long0+r),i.y=n,i}var qx=.3333333333333333,Xx=.17222222222222222,Zx=.10257936507936508,Kx=.06388888888888888,Qx=.0664021164021164,Jx=.016415012942191543;function tw(i){var t,e=[];return e[0]=i*qx,t=i*i,e[0]+=t*Xx,e[1]=t*Kx,t*=i,e[0]+=t*Zx,e[1]+=t*Qx,e[2]=t*Jx,e}function ew(i,t){var e=i+i;return i+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var iw=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const rw={init:Wx,forward:Hx,inverse:jx,names:iw,S_POLE:Gx,N_POLE:Ux,EQUIT:Vx,OBLIQ:Yx};function di(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function nw(){Math.abs(this.lat1+this.lat2)<M||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Te(this.e3,this.sin_po,this.cos_po),this.qs1=oi(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Te(this.e3,this.sin_po,this.cos_po),this.qs2=oi(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=oi(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>M?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function aw(i){var t=i.x,e=i.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var r=oi(this.e3,this.sin_phi,this.cos_phi),n=this.a*Math.sqrt(this.c-this.ns0*r)/this.ns0,a=this.ns0*D(t-this.long0),s=n*Math.sin(a)+this.x0,o=this.rh-n*Math.cos(a)+this.y0;return i.x=s,i.y=o,i}function sw(i){var t,e,r,n,a,s;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(t=Math.sqrt(i.x*i.x+i.y*i.y),r=1):(t=-Math.sqrt(i.x*i.x+i.y*i.y),r=-1),n=0,t!==0&&(n=Math.atan2(r*i.x,r*i.y)),r=t*this.ns0/this.a,this.sphere?s=Math.asin((this.c-r*r)/(2*this.ns0)):(e=(this.c-r*r)/this.ns0,s=this.phi1z(this.e3,e)),a=D(n/this.ns0+this.long0),i.x=a,i.y=s,i}function ow(i,t){var e,r,n,a,s,o=di(.5*t);if(i<M)return o;for(var l=i*i,h=1;h<=25;h++)if(e=Math.sin(o),r=Math.cos(o),n=i*e,a=1-n*n,s=.5*a*a/r*(t/(1-l)-e/a+.5/i*Math.log((1-n)/(1+n))),o=o+s,Math.abs(s)<=1e-7)return o;return null}var lw=["Albers_Conic_Equal_Area","Albers","aea"];const hw={init:nw,forward:aw,inverse:sw,names:lw,phi1z:ow};function uw(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function cw(i){var t,e,r,n,a,s,o,l,h=i.x,u=i.y;return r=D(h-this.long0),t=Math.sin(u),e=Math.cos(u),n=Math.cos(r),s=this.sin_p14*t+this.cos_p14*e*n,a=1,s>0||Math.abs(s)<=M?(o=this.x0+this.a*a*e*Math.sin(r)/s,l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*n)/s):(o=this.x0+this.infinity_dist*e*Math.sin(r),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*n)),i.x=o,i.y=l,i}function dw(i){var t,e,r,n,a,s;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(t=Math.sqrt(i.x*i.x+i.y*i.y))?(n=Math.atan2(t,this.rc),e=Math.sin(n),r=Math.cos(n),s=di(r*this.sin_p14+i.y*e*this.cos_p14/t),a=Math.atan2(i.x*e,t*this.cos_p14*r-i.y*this.sin_p14*e),a=D(this.long0+a)):(s=this.phic0,a=0),i.x=a,i.y=s,i}var fw=["gnom"];const pw={init:uw,forward:cw,inverse:dw,names:fw};function mw(i,t){var e=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*E:E;for(var r=Math.asin(.5*t),n,a,s,o,l=0;l<30;l++)if(a=Math.sin(r),s=Math.cos(r),o=i*a,n=Math.pow(1-o*o,2)/(2*s)*(t/(1-i*i)-a/(1-o*o)+.5/i*Math.log((1-o)/(1+o))),r+=n,Math.abs(n)<=1e-10)return r;return NaN}function vw(){this.sphere||(this.k0=Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function _w(i){var t=i.x,e=i.y,r,n,a=D(t-this.long0);if(this.sphere)r=this.x0+this.a*a*Math.cos(this.lat_ts),n=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var s=oi(this.e,Math.sin(e));r=this.x0+this.a*this.k0*a,n=this.y0+this.a*s*.5/this.k0}return i.x=r,i.y=n,i}function gw(i){i.x-=this.x0,i.y-=this.y0;var t,e;return this.sphere?(t=D(this.long0+i.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(e=mw(this.e,2*i.y*this.k0/this.a),t=D(this.long0+i.x/(this.a*this.k0))),i.x=t,i.y=e,i}var yw=["cea"];const bw={init:vw,forward:_w,inverse:gw,names:yw};function xw(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function ww(i){var t=i.x,e=i.y,r=D(t-this.long0),n=Er(e-this.lat0);return i.x=this.x0+this.a*r*this.rc,i.y=this.y0+this.a*n,i}function Aw(i){var t=i.x,e=i.y;return i.x=D(this.long0+(t-this.x0)/(this.a*this.rc)),i.y=Er(this.lat0+(e-this.y0)/this.a),i}var Cw=["Equirectangular","Equidistant_Cylindrical","eqc"];const Ew={init:xw,forward:ww,inverse:Aw,names:Cw};var pu=20;function Sw(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Fn(this.es),this.e1=Nn(this.es),this.e2=Bn(this.es),this.e3=zn(this.es),this.ml0=this.a*Nt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Tw(i){var t=i.x,e=i.y,r,n,a,s=D(t-this.long0);if(a=s*Math.sin(e),this.sphere)Math.abs(e)<=M?(r=this.a*s,n=-1*this.a*this.lat0):(r=this.a*Math.sin(a)/Math.tan(e),n=this.a*(Er(e-this.lat0)+(1-Math.cos(a))/Math.tan(e)));else if(Math.abs(e)<=M)r=this.a*s,n=-1*this.ml0;else{var o=pr(this.a,this.e,Math.sin(e))/Math.tan(e);r=o*Math.sin(a),n=this.a*Nt(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+o*(1-Math.cos(a))}return i.x=r+this.x0,i.y=n+this.y0,i}function Mw(i){var t,e,r,n,a,s,o,l,h;if(r=i.x-this.x0,n=i.y-this.y0,this.sphere)if(Math.abs(n+this.a*this.lat0)<=M)t=D(r/this.a+this.long0),e=0;else{s=this.lat0+n/this.a,o=r*r/this.a/this.a+s*s,l=s;var u;for(a=pu;a;--a)if(u=Math.tan(l),h=-1*(s*(l*u+1)-l-.5*(l*l+o)*u)/((l-s)/u-1),l+=h,Math.abs(h)<=M){e=l;break}t=D(this.long0+Math.asin(r*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(n+this.ml0)<=M)e=0,t=D(this.long0+r/this.a);else{s=(this.ml0+n)/this.a,o=r*r/this.a/this.a+s*s,l=s;var c,d,f,p,m;for(a=pu;a;--a)if(m=this.e*Math.sin(l),c=Math.sqrt(1-m*m)*Math.tan(l),d=this.a*Nt(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),p=d/this.a,h=(s*(c*p+1)-p-.5*c*(p*p+o))/(this.es*Math.sin(2*l)*(p*p+o-2*s*p)/(4*c)+(s-p)*(c*f-2/Math.sin(2*l))-f),l-=h,Math.abs(h)<=M){e=l;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=D(this.long0+Math.asin(r*c/this.a)/Math.sin(e))}return i.x=t,i.y=e,i}var Iw=["Polyconic","poly"];const Ow={init:Sw,forward:Tw,inverse:Mw,names:Iw};function Rw(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Dw(i){var t,e=i.x,r=i.y,n=r-this.lat0,a=e-this.long0,s=n/on*1e-5,o=a,l=1,h=0;for(t=1;t<=10;t++)l=l*s,h=h+this.A[t]*l;var u=h,c=o,d=1,f=0,p,m,v=0,_=0;for(t=1;t<=6;t++)p=d*u-f*c,m=f*u+d*c,d=p,f=m,v=v+this.B_re[t]*d-this.B_im[t]*f,_=_+this.B_im[t]*d+this.B_re[t]*f;return i.x=_*this.a+this.x0,i.y=v*this.a+this.y0,i}function kw(i){var t,e=i.x,r=i.y,n=e-this.x0,a=r-this.y0,s=a/this.a,o=n/this.a,l=1,h=0,u,c,d=0,f=0;for(t=1;t<=6;t++)u=l*s-h*o,c=h*s+l*o,l=u,h=c,d=d+this.C_re[t]*l-this.C_im[t]*h,f=f+this.C_im[t]*l+this.C_re[t]*h;for(var p=0;p<this.iterations;p++){var m=d,v=f,_,g,y=s,b=o;for(t=2;t<=6;t++)_=m*d-v*f,g=v*d+m*f,m=_,v=g,y=y+(t-1)*(this.B_re[t]*m-this.B_im[t]*v),b=b+(t-1)*(this.B_im[t]*m+this.B_re[t]*v);m=1,v=0;var x=this.B_re[1],w=this.B_im[1];for(t=2;t<=6;t++)_=m*d-v*f,g=v*d+m*f,m=_,v=g,x=x+t*(this.B_re[t]*m-this.B_im[t]*v),w=w+t*(this.B_im[t]*m+this.B_re[t]*v);var C=x*x+w*w;d=(y*x+b*w)/C,f=(b*x-y*w)/C}var A=d,T=f,R=1,L=0;for(t=1;t<=9;t++)R=R*A,L=L+this.D[t]*R;var F=this.lat0+L*on*1e5,P=this.long0+T;return i.x=P,i.y=F,i}var Pw=["New_Zealand_Map_Grid","nzmg"];const Lw={init:Rw,forward:Dw,inverse:kw,names:Pw};function Fw(){}function Nw(i){var t=i.x,e=i.y,r=D(t-this.long0),n=this.x0+this.a*r,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return i.x=n,i.y=a,i}function Bw(i){i.x-=this.x0,i.y-=this.y0;var t=D(this.long0+i.x/this.a),e=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=t,i.y=e,i}var zw=["Miller_Cylindrical","mill"];const $w={init:Fw,forward:Nw,inverse:Bw,names:zw};var Gw=20;function Uw(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Pf(this.es)}function Vw(i){var t,e,r=i.x,n=i.y;if(r=D(r-this.long0),this.sphere){if(!this.m)n=this.n!==1?Math.asin(this.n*Math.sin(n)):n;else for(var a=this.n*Math.sin(n),s=Gw;s;--s){var o=(this.m*n+Math.sin(n)-a)/(this.m+Math.cos(n));if(n-=o,Math.abs(o)<M)break}t=this.a*this.C_x*r*(this.m+Math.cos(n)),e=this.a*this.C_y*n}else{var l=Math.sin(n),h=Math.cos(n);e=this.a*vs(n,l,h,this.en),t=this.a*r*h/Math.sqrt(1-this.es*l*l)}return i.x=t,i.y=e,i}function Yw(i){var t,e,r,n;return i.x-=this.x0,r=i.x/this.a,i.y-=this.y0,t=i.y/this.a,this.sphere?(t/=this.C_y,r=r/(this.C_x*(this.m+Math.cos(t))),this.m?t=di((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=di(Math.sin(t)/this.n)),r=D(r+this.long0),t=Er(t)):(t=Lf(i.y/this.a,this.es,this.en),n=Math.abs(t),n<E?(n=Math.sin(t),e=this.long0+i.x*Math.sqrt(1-this.es*n*n)/(this.a*Math.cos(t)),r=D(e)):n-M<E&&(r=this.long0)),i.x=r,i.y=t,i}var Ww=["Sinusoidal","sinu"];const Hw={init:Uw,forward:Vw,inverse:Yw,names:Ww};function jw(){}function qw(i){for(var t=i.x,e=i.y,r=D(t-this.long0),n=e,a=Math.PI*Math.sin(e);;){var s=-(n+Math.sin(n)-a)/(1+Math.cos(n));if(n+=s,Math.abs(s)<M)break}n/=2,Math.PI/2-Math.abs(e)<M&&(r=0);var o=.900316316158*this.a*r*Math.cos(n)+this.x0,l=1.4142135623731*this.a*Math.sin(n)+this.y0;return i.x=o,i.y=l,i}function Xw(i){var t,e;i.x-=this.x0,i.y-=this.y0,e=i.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var r=D(this.long0+i.x/(.900316316158*this.a*Math.cos(t)));r<-Math.PI&&(r=-Math.PI),r>Math.PI&&(r=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var n=Math.asin(e);return i.x=r,i.y=n,i}var Zw=["Mollweide","moll"];const Kw={init:jw,forward:qw,inverse:Xw,names:Zw};function Qw(){Math.abs(this.lat1+this.lat2)<M||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Fn(this.es),this.e1=Nn(this.es),this.e2=Bn(this.es),this.e3=zn(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Te(this.e,this.sinphi,this.cosphi),this.ml1=Nt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<M?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Te(this.e,this.sinphi,this.cosphi),this.ml2=Nt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Nt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function Jw(i){var t=i.x,e=i.y,r;if(this.sphere)r=this.a*(this.g-e);else{var n=Nt(this.e0,this.e1,this.e2,this.e3,e);r=this.a*(this.g-n)}var a=this.ns*D(t-this.long0),s=this.x0+r*Math.sin(a),o=this.y0+this.rh-r*Math.cos(a);return i.x=s,i.y=o,i}function t1(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var t,e,r,n;this.ns>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),t=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),t=-1);var a=0;if(e!==0&&(a=Math.atan2(t*i.x,t*i.y)),this.sphere)return n=D(this.long0+a/this.ns),r=Er(this.g-e/this.a),i.x=n,i.y=r,i;var s=this.g-e/this.a;return r=$a(s,this.e0,this.e1,this.e2,this.e3),n=D(this.long0+a/this.ns),i.x=n,i.y=r,i}var e1=["Equidistant_Conic","eqdc"];const i1={init:Qw,forward:Jw,inverse:t1,names:e1};function r1(){this.R=this.a}function n1(i){var t=i.x,e=i.y,r=D(t-this.long0),n,a;Math.abs(e)<=M&&(n=this.x0+this.R*r,a=this.y0);var s=di(2*Math.abs(e/Math.PI));(Math.abs(r)<=M||Math.abs(Math.abs(e)-E)<=M)&&(n=this.x0,e>=0?a=this.y0+Math.PI*this.R*Math.tan(.5*s):a=this.y0+Math.PI*this.R*-Math.tan(.5*s));var o=.5*Math.abs(Math.PI/r-r/Math.PI),l=o*o,h=Math.sin(s),u=Math.cos(s),c=u/(h+u-1),d=c*c,f=c*(2/h-1),p=f*f,m=Math.PI*this.R*(o*(c-p)+Math.sqrt(l*(c-p)*(c-p)-(p+l)*(d-p)))/(p+l);r<0&&(m=-m),n=this.x0+m;var v=l+c;return m=Math.PI*this.R*(f*v-o*Math.sqrt((p+l)*(l+1)-v*v))/(p+l),e>=0?a=this.y0+m:a=this.y0-m,i.x=n,i.y=a,i}function a1(i){var t,e,r,n,a,s,o,l,h,u,c,d,f;return i.x-=this.x0,i.y-=this.y0,c=Math.PI*this.R,r=i.x/c,n=i.y/c,a=r*r+n*n,s=-Math.abs(n)*(1+a),o=s-2*n*n+r*r,l=-2*s+1+2*n*n+a*a,f=n*n/l+(2*o*o*o/l/l/l-9*s*o/l/l)/27,h=(s-o*o/3/l)/l,u=2*Math.sqrt(-h/3),c=3*f/h/u,Math.abs(c)>1&&(c>=0?c=1:c=-1),d=Math.acos(c)/3,i.y>=0?e=(-u*Math.cos(d+Math.PI/3)-o/3/l)*Math.PI:e=-(-u*Math.cos(d+Math.PI/3)-o/3/l)*Math.PI,Math.abs(r)<M?t=this.long0:t=D(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(r*r-n*n)+a*a))/2/r),i.x=t,i.y=e,i}var s1=["Van_der_Grinten_I","VanDerGrinten","vandg"];const o1={init:r1,forward:n1,inverse:a1,names:s1};function l1(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function h1(i){var t=i.x,e=i.y,r=Math.sin(i.y),n=Math.cos(i.y),a=D(t-this.long0),s,o,l,h,u,c,d,f,p,m,v,_,g,y,b,x,w,C,A,T,R,L,F;return this.sphere?Math.abs(this.sin_p12-1)<=M?(i.x=this.x0+this.a*(E-e)*Math.sin(a),i.y=this.y0-this.a*(E-e)*Math.cos(a),i):Math.abs(this.sin_p12+1)<=M?(i.x=this.x0+this.a*(E+e)*Math.sin(a),i.y=this.y0+this.a*(E+e)*Math.cos(a),i):(C=this.sin_p12*r+this.cos_p12*n*Math.cos(a),x=Math.acos(C),w=x?x/Math.sin(x):1,i.x=this.x0+this.a*w*n*Math.sin(a),i.y=this.y0+this.a*w*(this.cos_p12*r-this.sin_p12*n*Math.cos(a)),i):(s=Fn(this.es),o=Nn(this.es),l=Bn(this.es),h=zn(this.es),Math.abs(this.sin_p12-1)<=M?(u=this.a*Nt(s,o,l,h,E),c=this.a*Nt(s,o,l,h,e),i.x=this.x0+(u-c)*Math.sin(a),i.y=this.y0-(u-c)*Math.cos(a),i):Math.abs(this.sin_p12+1)<=M?(u=this.a*Nt(s,o,l,h,E),c=this.a*Nt(s,o,l,h,e),i.x=this.x0+(u+c)*Math.sin(a),i.y=this.y0+(u+c)*Math.cos(a),i):(d=r/n,f=pr(this.a,this.e,this.sin_p12),p=pr(this.a,this.e,r),m=Math.atan((1-this.es)*d+this.es*f*this.sin_p12/(p*n)),v=Math.atan2(Math.sin(a),this.cos_p12*Math.tan(m)-this.sin_p12*Math.cos(a)),v===0?A=Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):Math.abs(Math.abs(v)-Math.PI)<=M?A=-Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):A=Math.asin(Math.sin(a)*Math.cos(m)/Math.sin(v)),_=this.e*this.sin_p12/Math.sqrt(1-this.es),g=this.e*this.cos_p12*Math.cos(v)/Math.sqrt(1-this.es),y=_*g,b=g*g,T=A*A,R=T*A,L=R*A,F=L*A,x=f*A*(1-T*b*(1-b)/6+R/8*y*(1-2*b)+L/120*(b*(4-7*b)-3*_*_*(1-7*b))-F/48*y),i.x=this.x0+x*Math.sin(v),i.y=this.y0+x*Math.cos(v),i))}function u1(i){i.x-=this.x0,i.y-=this.y0;var t,e,r,n,a,s,o,l,h,u,c,d,f,p,m,v,_,g,y,b,x,w,C,A;return this.sphere?(t=Math.sqrt(i.x*i.x+i.y*i.y),t>2*E*this.a?void 0:(e=t/this.a,r=Math.sin(e),n=Math.cos(e),a=this.long0,Math.abs(t)<=M?s=this.lat0:(s=di(n*this.sin_p12+i.y*r*this.cos_p12/t),o=Math.abs(this.lat0)-E,Math.abs(o)<=M?this.lat0>=0?a=D(this.long0+Math.atan2(i.x,-i.y)):a=D(this.long0-Math.atan2(-i.x,i.y)):a=D(this.long0+Math.atan2(i.x*r,t*this.cos_p12*n-i.y*this.sin_p12*r))),i.x=a,i.y=s,i)):(l=Fn(this.es),h=Nn(this.es),u=Bn(this.es),c=zn(this.es),Math.abs(this.sin_p12-1)<=M?(d=this.a*Nt(l,h,u,c,E),t=Math.sqrt(i.x*i.x+i.y*i.y),f=d-t,s=$a(f/this.a,l,h,u,c),a=D(this.long0+Math.atan2(i.x,-1*i.y)),i.x=a,i.y=s,i):Math.abs(this.sin_p12+1)<=M?(d=this.a*Nt(l,h,u,c,E),t=Math.sqrt(i.x*i.x+i.y*i.y),f=t-d,s=$a(f/this.a,l,h,u,c),a=D(this.long0+Math.atan2(i.x,i.y)),i.x=a,i.y=s,i):(t=Math.sqrt(i.x*i.x+i.y*i.y),v=Math.atan2(i.x,i.y),p=pr(this.a,this.e,this.sin_p12),_=Math.cos(v),g=this.e*this.cos_p12*_,y=-g*g/(1-this.es),b=3*this.es*(1-y)*this.sin_p12*this.cos_p12*_/(1-this.es),x=t/p,w=x-y*(1+y)*Math.pow(x,3)/6-b*(1+3*y)*Math.pow(x,4)/24,C=1-y*w*w/2-x*w*w*w/6,m=Math.asin(this.sin_p12*Math.cos(w)+this.cos_p12*Math.sin(w)*_),a=D(this.long0+Math.asin(Math.sin(v)*Math.sin(w)/Math.cos(m))),A=Math.sin(m),s=Math.atan2((A-this.es*C*this.sin_p12)*Math.tan(m),A*(1-this.es)),i.x=a,i.y=s,i))}var c1=["Azimuthal_Equidistant","aeqd"];const d1={init:l1,forward:h1,inverse:u1,names:c1};function f1(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function p1(i){var t,e,r,n,a,s,o,l,h=i.x,u=i.y;return r=D(h-this.long0),t=Math.sin(u),e=Math.cos(u),n=Math.cos(r),s=this.sin_p14*t+this.cos_p14*e*n,a=1,(s>0||Math.abs(s)<=M)&&(o=this.a*a*e*Math.sin(r),l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*n)),i.x=o,i.y=l,i}function m1(i){var t,e,r,n,a,s,o;return i.x-=this.x0,i.y-=this.y0,t=Math.sqrt(i.x*i.x+i.y*i.y),e=di(t/this.a),r=Math.sin(e),n=Math.cos(e),s=this.long0,Math.abs(t)<=M?(o=this.lat0,i.x=s,i.y=o,i):(o=di(n*this.sin_p14+i.y*r*this.cos_p14/t),a=Math.abs(this.lat0)-E,Math.abs(a)<=M?(this.lat0>=0?s=D(this.long0+Math.atan2(i.x,-i.y)):s=D(this.long0-Math.atan2(-i.x,i.y)),i.x=s,i.y=o,i):(s=D(this.long0+Math.atan2(i.x*r,t*this.cos_p14*n-i.y*this.sin_p14*r)),i.x=s,i.y=o,i))}var v1=["ortho"];const _1={init:f1,forward:p1,inverse:m1,names:v1};var dt={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},it={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function g1(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=E-et/2?this.face=dt.TOP:this.lat0<=-(E-et/2)?this.face=dt.BOTTOM:Math.abs(this.long0)<=et?this.face=dt.FRONT:Math.abs(this.long0)<=E+et?this.face=this.long0>0?dt.RIGHT:dt.LEFT:this.face=dt.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function y1(i){var t={x:0,y:0},e,r,n,a,s,o,l={value:0};if(i.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):e=i.y,r=i.x,this.face===dt.TOP)a=E-e,r>=et&&r<=E+et?(l.value=it.AREA_0,n=r-E):r>E+et||r<=-(E+et)?(l.value=it.AREA_1,n=r>0?r-yt:r+yt):r>-(E+et)&&r<=-et?(l.value=it.AREA_2,n=r+E):(l.value=it.AREA_3,n=r);else if(this.face===dt.BOTTOM)a=E+e,r>=et&&r<=E+et?(l.value=it.AREA_0,n=-r+E):r<et&&r>=-et?(l.value=it.AREA_1,n=-r):r<-et&&r>=-(E+et)?(l.value=it.AREA_2,n=-r-E):(l.value=it.AREA_3,n=r>0?-r+yt:-r-yt);else{var h,u,c,d,f,p,m;this.face===dt.RIGHT?r=lr(r,+E):this.face===dt.BACK?r=lr(r,+yt):this.face===dt.LEFT&&(r=lr(r,-E)),d=Math.sin(e),f=Math.cos(e),p=Math.sin(r),m=Math.cos(r),h=f*m,u=f*p,c=d,this.face===dt.FRONT?(a=Math.acos(h),n=oa(a,c,u,l)):this.face===dt.RIGHT?(a=Math.acos(u),n=oa(a,c,-h,l)):this.face===dt.BACK?(a=Math.acos(-h),n=oa(a,c,-u,l)):this.face===dt.LEFT?(a=Math.acos(-u),n=oa(a,c,h,l)):(a=n=0,l.value=it.AREA_0)}return o=Math.atan(12/yt*(n+Math.acos(Math.sin(n)*Math.cos(et))-E)),s=Math.sqrt((1-Math.cos(a))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(n))))),l.value===it.AREA_1?o+=E:l.value===it.AREA_2?o+=yt:l.value===it.AREA_3&&(o+=1.5*yt),t.x=s*Math.cos(o),t.y=s*Math.sin(o),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,i.x=t.x,i.y=t.y,i}function b1(i){var t={lam:0,phi:0},e,r,n,a,s,o,l,h,u,c={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,r=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),e=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?c.value=it.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(c.value=it.AREA_1,e-=E):i.x<0&&-i.x>=Math.abs(i.y)?(c.value=it.AREA_2,e=e<0?e+yt:e-yt):(c.value=it.AREA_3,e+=E),u=yt/12*Math.tan(e),s=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),o=Math.atan(s),n=Math.cos(e),a=Math.tan(r),l=1-n*n*a*a*(1-Math.cos(Math.atan(1/Math.cos(o)))),l<-1?l=-1:l>1&&(l=1),this.face===dt.TOP)h=Math.acos(l),t.phi=E-h,c.value===it.AREA_0?t.lam=o+E:c.value===it.AREA_1?t.lam=o<0?o+yt:o-yt:c.value===it.AREA_2?t.lam=o-E:t.lam=o;else if(this.face===dt.BOTTOM)h=Math.acos(l),t.phi=h-E,c.value===it.AREA_0?t.lam=-o+E:c.value===it.AREA_1?t.lam=-o:c.value===it.AREA_2?t.lam=-o-E:t.lam=o<0?-o-yt:-o+yt;else{var d,f,p;d=l,u=d*d,u>=1?p=0:p=Math.sqrt(1-u)*Math.sin(o),u+=p*p,u>=1?f=0:f=Math.sqrt(1-u),c.value===it.AREA_1?(u=f,f=-p,p=u):c.value===it.AREA_2?(f=-f,p=-p):c.value===it.AREA_3&&(u=f,f=p,p=-u),this.face===dt.RIGHT?(u=d,d=-f,f=u):this.face===dt.BACK?(d=-d,f=-f):this.face===dt.LEFT&&(u=d,d=f,f=-u),t.phi=Math.acos(-p)-E,t.lam=Math.atan2(f,d),this.face===dt.RIGHT?t.lam=lr(t.lam,-E):this.face===dt.BACK?t.lam=lr(t.lam,-yt):this.face===dt.LEFT&&(t.lam=lr(t.lam,+E))}if(this.es!==0){var m,v,_;m=t.phi<0?1:0,v=Math.tan(t.phi),_=this.b/Math.sqrt(v*v+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),m&&(t.phi=-t.phi)}return t.lam+=this.long0,i.x=t.lam,i.y=t.phi,i}function oa(i,t,e,r){var n;return i<M?(r.value=it.AREA_0,n=0):(n=Math.atan2(t,e),Math.abs(n)<=et?r.value=it.AREA_0:n>et&&n<=E+et?(r.value=it.AREA_1,n-=E):n>E+et||n<=-(E+et)?(r.value=it.AREA_2,n=n>=0?n-yt:n+yt):(r.value=it.AREA_3,n+=E)),n}function lr(i,t){var e=i+t;return e<-yt?e+=fn:e>+yt&&(e-=fn),e}var x1=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const w1={init:g1,forward:y1,inverse:b1,names:x1};var Co=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Zr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Bf=.8487,zf=1.3523,$f=we/5,A1=1/$f,er=18,Ga=function(i,t){return i[0]+t*(i[1]+t*(i[2]+t*i[3]))},C1=function(i,t){return i[1]+t*(2*i[2]+t*3*i[3])};function E1(i,t,e,r){for(var n=t;r;--r){var a=i(n);if(n-=a,Math.abs(a)<e)break}return n}function S1(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function T1(i){var t=D(i.x-this.long0),e=Math.abs(i.y),r=Math.floor(e*$f);r<0?r=0:r>=er&&(r=er-1),e=we*(e-A1*r);var n={x:Ga(Co[r],e)*t,y:Ga(Zr[r],e)};return i.y<0&&(n.y=-n.y),n.x=n.x*this.a*Bf+this.x0,n.y=n.y*this.a*zf+this.y0,n}function M1(i){var t={x:(i.x-this.x0)/(this.a*Bf),y:Math.abs(i.y-this.y0)/(this.a*zf)};if(t.y>=1)t.x/=Co[er][0],t.y=i.y<0?-E:E;else{var e=Math.floor(t.y*er);for(e<0?e=0:e>=er&&(e=er-1);;)if(Zr[e][0]>t.y)--e;else if(Zr[e+1][0]<=t.y)++e;else break;var r=Zr[e],n=5*(t.y-r[0])/(Zr[e+1][0]-r[0]);n=E1(function(a){return(Ga(r,a)-t.y)/C1(r,a)},n,M,100),t.x/=Ga(Co[e],n),t.y=(5*e+n)*Tt,i.y<0&&(t.y=-t.y)}return t.x=D(t.x+this.long0),t}var I1=["Robinson","robin"];const O1={init:S1,forward:T1,inverse:M1,names:I1};function R1(){this.name="geocent"}function D1(i){var t=Ef(i,this.es,this.a);return t}function k1(i){var t=Sf(i,this.es,this.a,this.b);return t}var P1=["Geocentric","geocentric","geocent","Geocent"];const L1={init:R1,forward:D1,inverse:k1,names:P1};var It={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ur={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function F1(){if(Object.keys(Ur).forEach(function(e){if(typeof this[e]>"u")this[e]=Ur[e].def;else{if(Ur[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Ur[e].num&&(this[e]=parseFloat(this[e]))}Ur[e].degrees&&(this[e]=this[e]*Tt)}.bind(this)),Math.abs(Math.abs(this.lat0)-E)<M?this.mode=this.lat0<0?It.S_POLE:It.N_POLE:Math.abs(this.lat0)<M?this.mode=It.EQUIT:(this.mode=It.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(i),this.sw=Math.sin(i)}function N1(i){i.x-=this.long0;var t=Math.sin(i.y),e=Math.cos(i.y),r=Math.cos(i.x),n,a;switch(this.mode){case It.OBLIQ:a=this.sinph0*t+this.cosph0*e*r;break;case It.EQUIT:a=e*r;break;case It.S_POLE:a=-t;break;case It.N_POLE:a=t;break}switch(a=this.pn1/(this.p-a),n=a*e*Math.sin(i.x),this.mode){case It.OBLIQ:a*=this.cosph0*t-this.sinph0*e*r;break;case It.EQUIT:a*=t;break;case It.N_POLE:a*=-(e*r);break;case It.S_POLE:a*=e*r;break}var s,o;return s=a*this.cg+n*this.sg,o=1/(s*this.sw*this.h1+this.cw),n=(n*this.cg-a*this.sg)*this.cw*o,a=s*o,i.x=n*this.a,i.y=a*this.a,i}function B1(i){i.x/=this.a,i.y/=this.a;var t={x:i.x,y:i.y},e,r,n;n=1/(this.pn1-i.y*this.sw),e=this.pn1*i.x*n,r=this.pn1*i.y*this.cw*n,i.x=e*this.cg+r*this.sg,i.y=r*this.cg-e*this.sg;var a=de(i.x,i.y);if(Math.abs(a)<M)t.x=0,t.y=i.y;else{var s,o;switch(o=1-a*a*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/a+a/this.pn1),s=Math.sqrt(1-o*o),this.mode){case It.OBLIQ:t.y=Math.asin(s*this.sinph0+i.y*o*this.cosph0/a),i.y=(s-this.sinph0*Math.sin(t.y))*a,i.x*=o*this.cosph0;break;case It.EQUIT:t.y=Math.asin(i.y*o/a),i.y=s*a,i.x*=o;break;case It.N_POLE:t.y=Math.asin(s),i.y=-i.y;break;case It.S_POLE:t.y=-Math.asin(s);break}t.x=Math.atan2(i.x,i.y)}return i.x=t.x+this.long0,i.y=t.y,i}var z1=["Tilted_Perspective","tpers"];const $1={init:F1,forward:N1,inverse:B1,names:z1};function G1(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,t=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function U1(i){var t=i.x,e=i.y,r,n,a,s;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var o=this.radius_p/de(this.radius_p*Math.cos(e),Math.sin(e));if(n=o*Math.cos(t)*Math.cos(e),a=o*Math.sin(t)*Math.cos(e),s=o*Math.sin(e),(this.radius_g-n)*n-a*a-s*s*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;r=this.radius_g-n,this.flip_axis?(i.x=this.radius_g_1*Math.atan(a/de(s,r)),i.y=this.radius_g_1*Math.atan(s/r)):(i.x=this.radius_g_1*Math.atan(a/r),i.y=this.radius_g_1*Math.atan(s/de(a,r)))}else this.shape==="sphere"&&(r=Math.cos(e),n=Math.cos(t)*r,a=Math.sin(t)*r,s=Math.sin(e),r=this.radius_g-n,this.flip_axis?(i.x=this.radius_g_1*Math.atan(a/de(s,r)),i.y=this.radius_g_1*Math.atan(s/r)):(i.x=this.radius_g_1*Math.atan(a/r),i.y=this.radius_g_1*Math.atan(s/de(a,r))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function V1(i){var t=-1,e=0,r=0,n,a,s,o;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(r=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*de(1,r)):(e=Math.tan(i.x/this.radius_g_1),r=Math.tan(i.y/this.radius_g_1)*de(1,e));var l=r/this.radius_p;if(n=e*e+l*l+t*t,a=2*this.radius_g*t,s=a*a-4*n*this.C,s<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-a-Math.sqrt(s))/(2*n),t=this.radius_g+o*t,e*=o,r*=o,i.x=Math.atan2(e,t),i.y=Math.atan(r*Math.cos(i.x)/t),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(r=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+r*r)):(e=Math.tan(i.x/this.radius_g_1),r=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+e*e)),n=e*e+r*r+t*t,a=2*this.radius_g*t,s=a*a-4*n*this.C,s<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-a-Math.sqrt(s))/(2*n),t=this.radius_g+o*t,e*=o,r*=o,i.x=Math.atan2(e,t),i.y=Math.atan(r*Math.cos(i.x)/t)}return i.x=i.x+this.long0,i}var Y1=["Geostationary Satellite View","Geostationary_Satellite","geos"];const W1={init:G1,forward:U1,inverse:V1,names:Y1};function H1(i){i.Proj.projections.add(Ca),i.Proj.projections.add(Ea),i.Proj.projections.add(Qb),i.Proj.projections.add(lx),i.Proj.projections.add(px),i.Proj.projections.add(yx),i.Proj.projections.add(Ex),i.Proj.projections.add(Ox),i.Proj.projections.add(Lx),i.Proj.projections.add($x),i.Proj.projections.add(rw),i.Proj.projections.add(hw),i.Proj.projections.add(pw),i.Proj.projections.add(bw),i.Proj.projections.add(Ew),i.Proj.projections.add(Ow),i.Proj.projections.add(Lw),i.Proj.projections.add($w),i.Proj.projections.add(Hw),i.Proj.projections.add(Kw),i.Proj.projections.add(i1),i.Proj.projections.add(o1),i.Proj.projections.add(d1),i.Proj.projections.add(_1),i.Proj.projections.add(w1),i.Proj.projections.add(O1),i.Proj.projections.add(L1),i.Proj.projections.add($1),i.Proj.projections.add(W1)}Wt.defaultDatum="WGS84";Wt.Proj=Ee;Wt.WGS84=new Wt.Proj("WGS84");Wt.Point=fr;Wt.toPoint=Tf;Wt.defs=Pt;Wt.nadgrid=tb;Wt.transform=za;Wt.mgrs=vb;Wt.version="__VERSION__";H1(Wt);var j1=function(){function i(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}return i.prototype.preventDefault=function(){this.defaultPrevented=!0},i.prototype.stopPropagation=function(){this.propagationStopped=!0},i}();const ki=j1,Gf={PROPERTYCHANGE:"propertychange"};var q1=function(){function i(){this.disposed=!1}return i.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},i.prototype.disposeInternal=function(){},i}();const X1=q1;function mr(i,t){return i>t?1:i<t?-1:0}function _s(i,t,e){var r=i.length;if(i[0]<=t)return 0;if(t<=i[r-1])return r-1;var n=void 0;if(e>0){for(n=1;n<r;++n)if(i[n]<t)return n-1}else if(e<0){for(n=1;n<r;++n)if(i[n]<=t)return n}else for(n=1;n<r;++n){if(i[n]==t)return n;if(i[n]<t)return typeof e=="function"?e(t,i[n-1],i[n])>0?n-1:n:i[n-1]-t<t-i[n]?n-1:n}return r-1}function Z1(i,t,e){for(;t<e;){var r=i[t];i[t]=i[e],i[e]=r,++t,--e}}function Uf(i,t){for(var e=Array.isArray(t)?t:[t],r=e.length,n=0;n<r;n++)i[i.length]=e[n]}function Sr(i,t){var e=i.length;if(e!==t.length)return!1;for(var r=0;r<e;r++)if(i[r]!==t[r])return!1;return!0}function K1(i,t,e){var r=t||mr;return i.every(function(n,a){if(a===0)return!0;var s=r(i[a-1],n);return!(s>0||e&&s===0)})}function Q1(){return!0}function vn(){}function J1(i){var t=!1,e,r,n;return function(){var a=Array.prototype.slice.call(arguments);return(!t||this!==n||!Sr(a,r))&&(t=!0,n=this,r=a,e=i.apply(this,arguments)),e}}var tA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),eA=function(i){tA(t,i);function t(e){var r=i.call(this)||this;return r.eventTarget_=e,r.pendingRemovals_=null,r.dispatching_=null,r.listeners_=null,r}return t.prototype.addEventListener=function(e,r){if(!(!e||!r)){var n=this.listeners_||(this.listeners_={}),a=n[e]||(n[e]=[]);a.indexOf(r)===-1&&a.push(r)}},t.prototype.dispatchEvent=function(e){var r=typeof e=="string",n=r?e:e.type,a=this.listeners_&&this.listeners_[n];if(!!a){var s=r?new ki(e):e;s.target||(s.target=this.eventTarget_||this);var o=this.dispatching_||(this.dispatching_={}),l=this.pendingRemovals_||(this.pendingRemovals_={});n in o||(o[n]=0,l[n]=0),++o[n];for(var h,u=0,c=a.length;u<c;++u)if("handleEvent"in a[u]?h=a[u].handleEvent(s):h=a[u].call(this,s),h===!1||s.propagationStopped){h=!1;break}if(--o[n]===0){var d=l[n];for(delete l[n];d--;)this.removeEventListener(n,vn);delete o[n]}return h}},t.prototype.disposeInternal=function(){this.listeners_&&Ko(this.listeners_)},t.prototype.getListeners=function(e){return this.listeners_&&this.listeners_[e]||void 0},t.prototype.hasListener=function(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1},t.prototype.removeEventListener=function(e,r){var n=this.listeners_&&this.listeners_[e];if(n){var a=n.indexOf(r);a!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[a]=vn,++this.pendingRemovals_[e]):(n.splice(a,1),n.length===0&&delete this.listeners_[e]))}},t}(X1);const $n=eA,Mt={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function pe(i,t,e,r,n){if(r&&r!==i&&(e=e.bind(r)),n){var a=e;e=function(){i.removeEventListener(t,e),a.apply(this,arguments)}}var s={target:i,type:t,listener:e};return i.addEventListener(t,e),s}function Ua(i,t,e,r){return pe(i,t,e,r,!0)}function ie(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),Ko(i))}var iA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),gs=function(i){iA(t,i);function t(){var e=i.call(this)||this;return e.on=e.onInternal,e.once=e.onceInternal,e.un=e.unInternal,e.revision_=0,e}return t.prototype.changed=function(){++this.revision_,this.dispatchEvent(Mt.CHANGE)},t.prototype.getRevision=function(){return this.revision_},t.prototype.onInternal=function(e,r){if(Array.isArray(e)){for(var n=e.length,a=new Array(n),s=0;s<n;++s)a[s]=pe(this,e[s],r);return a}else return pe(this,e,r)},t.prototype.onceInternal=function(e,r){var n;if(Array.isArray(e)){var a=e.length;n=new Array(a);for(var s=0;s<a;++s)n[s]=Ua(this,e[s],r)}else n=Ua(this,e,r);return r.ol_key=n,n},t.prototype.unInternal=function(e,r){var n=r.ol_key;if(n)rA(n);else if(Array.isArray(e))for(var a=0,s=e.length;a<s;++a)this.removeEventListener(e[a],r);else this.removeEventListener(e,r)},t}($n);gs.prototype.on;gs.prototype.once;gs.prototype.un;function rA(i){if(Array.isArray(i))for(var t=0,e=i.length;t<e;++t)ie(i[t]);else ie(i)}const Vf=gs;var Yf=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),mu=function(i){Yf(t,i);function t(e,r,n){var a=i.call(this,e)||this;return a.key=r,a.oldValue=n,a}return t}(ki),nA=function(i){Yf(t,i);function t(e){var r=i.call(this)||this;return r.on,r.once,r.un,ot(r),r.values_=null,e!==void 0&&r.setProperties(e),r}return t.prototype.get=function(e){var r;return this.values_&&this.values_.hasOwnProperty(e)&&(r=this.values_[e]),r},t.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},t.prototype.getProperties=function(){return this.values_&&ht({},this.values_)||{}},t.prototype.hasProperties=function(){return!!this.values_},t.prototype.notify=function(e,r){var n;n="change:".concat(e),this.hasListener(n)&&this.dispatchEvent(new mu(n,e,r)),n=Gf.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new mu(n,e,r))},t.prototype.addChangeListener=function(e,r){this.addEventListener("change:".concat(e),r)},t.prototype.removeChangeListener=function(e,r){this.removeEventListener("change:".concat(e),r)},t.prototype.set=function(e,r,n){var a=this.values_||(this.values_={});if(n)a[e]=r;else{var s=a[e];a[e]=r,s!==r&&this.notify(e,s)}},t.prototype.setProperties=function(e,r){for(var n in e)this.set(n,e[n],r)},t.prototype.applyProperties=function(e){!e.values_||ht(this.values_||(this.values_={}),e.values_)},t.prototype.unset=function(e,r){if(this.values_&&e in this.values_){var n=this.values_[e];delete this.values_[e],un(this.values_)&&(this.values_=null),r||this.notify(e,n)}},t}(Vf);const Pi=nA;var aA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),sA=function(i){aA(t,i);function t(e){var r=i.call(this)||this;if(r.on,r.once,r.un,r.id_=void 0,r.geometryName_="geometry",r.style_=null,r.styleFunction_=void 0,r.geometryChangeKey_=null,r.addChangeListener(r.geometryName_,r.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){var n=e;r.setGeometry(n)}else{var a=e;r.setProperties(a)}return r}return t.prototype.clone=function(){var e=new t(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&e.setGeometry(r.clone());var n=this.getStyle();return n&&e.setStyle(n),e},t.prototype.getGeometry=function(){return this.get(this.geometryName_)},t.prototype.getId=function(){return this.id_},t.prototype.getGeometryName=function(){return this.geometryName_},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.handleGeometryChange_=function(){this.changed()},t.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(ie(this.geometryChangeKey_),this.geometryChangeKey_=null);var e=this.getGeometry();e&&(this.geometryChangeKey_=pe(e,Mt.CHANGE,this.handleGeometryChange_,this)),this.changed()},t.prototype.setGeometry=function(e){this.set(this.geometryName_,e)},t.prototype.setStyle=function(e){this.style_=e,this.styleFunction_=e?oA(e):void 0,this.changed()},t.prototype.setId=function(e){this.id_=e,this.changed()},t.prototype.setGeometryName=function(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()},t}(Pi);function oA(i){if(typeof i=="function")return i;var t;if(Array.isArray(i))t=i;else{J(typeof i.getZIndex=="function",41);var e=i;t=[e]}return function(){return t}}const lA=sA;var vr=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"";vr.indexOf("firefox");vr.indexOf("safari")!==-1&&vr.indexOf("chrom")==-1;vr.indexOf("webkit")!==-1&&vr.indexOf("edge")==-1;vr.indexOf("macintosh");var ys=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,hA=typeof Image<"u"&&Image.prototype.decode;(function(){var i=!1;try{var t=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return i})();new Array(6);function li(){return[1,0,0,1,0,0]}function uA(i,t,e,r,n,a,s){return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i[4]=a,i[5]=s,i}function cA(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i}function At(i,t){var e=t[0],r=t[1];return t[0]=i[0]*e+i[2]*r+i[4],t[1]=i[1]*e+i[3]*r+i[5],t}function dA(i,t,e){return uA(i,t,0,0,e,0,0)}function Me(i,t,e,r,n,a,s,o){var l=Math.sin(a),h=Math.cos(a);return i[0]=r*h,i[1]=n*l,i[2]=-r*l,i[3]=n*h,i[4]=s*r*h-o*r*l+t,i[5]=s*n*l+o*n*h+e,i}function ll(i,t){var e=fA(t);J(e!==0,32);var r=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5];return i[0]=s/e,i[1]=-n/e,i[2]=-a/e,i[3]=r/e,i[4]=(a*l-s*o)/e,i[5]=-(r*l-n*o)/e,i}function fA(i){return i[0]*i[3]-i[1]*i[2]}var vu;function hl(i){var t="matrix("+i.join(", ")+")";if(ys)return t;var e=vu||(vu=document.createElement("div"));return e.style.transform=t,e.style.transform}function Ii(i,t,e,r,n,a){for(var s=a||[],o=0,l=t;l<e;l+=r){var h=i[l],u=i[l+1];s[o++]=n[0]*h+n[2]*u+n[4],s[o++]=n[1]*h+n[3]*u+n[5]}return a&&s.length!=o&&(s.length=o),s}function Wf(i,t,e,r,n,a,s){for(var o=s||[],l=Math.cos(n),h=Math.sin(n),u=a[0],c=a[1],d=0,f=t;f<e;f+=r){var p=i[f]-u,m=i[f+1]-c;o[d++]=u+p*l-m*h,o[d++]=c+p*h+m*l;for(var v=f+2;v<f+r;++v)o[d++]=i[v]}return s&&o.length!=d&&(o.length=d),o}function pA(i,t,e,r,n,a,s,o){for(var l=o||[],h=s[0],u=s[1],c=0,d=t;d<e;d+=r){var f=i[d]-h,p=i[d+1]-u;l[c++]=h+n*f,l[c++]=u+a*p;for(var m=d+2;m<d+r;++m)l[c++]=i[m]}return o&&l.length!=c&&(l.length=c),l}function mA(i,t,e,r,n,a,s){for(var o=s||[],l=0,h=t;h<e;h+=r){o[l++]=i[h]+n,o[l++]=i[h+1]+a;for(var u=h+2;u<h+r;++u)o[l++]=i[u]}return s&&o.length!=l&&(o.length=l),o}var vA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),_u=li(),_A=function(i){vA(t,i);function t(){var e=i.call(this)||this;return e.extent_=ne(),e.extentRevision_=-1,e.simplifiedGeometryMaxMinSquaredTolerance=0,e.simplifiedGeometryRevision=0,e.simplifyTransformedInternal=J1(function(r,n,a){if(!a)return this.getSimplifiedGeometry(n);var s=this.clone();return s.applyTransform(a),s.getSimplifiedGeometry(n)}),e}return t.prototype.simplifyTransformed=function(e,r){return this.simplifyTransformedInternal(this.getRevision(),e,r)},t.prototype.clone=function(){return Q()},t.prototype.closestPointXY=function(e,r,n,a){return Q()},t.prototype.containsXY=function(e,r){var n=this.getClosestPoint([e,r]);return n[0]===e&&n[1]===r},t.prototype.getClosestPoint=function(e,r){var n=r||[NaN,NaN];return this.closestPointXY(e[0],e[1],n,1/0),n},t.prototype.intersectsCoordinate=function(e){return this.containsXY(e[0],e[1])},t.prototype.computeExtent=function(e){return Q()},t.prototype.getExtent=function(e){if(this.extentRevision_!=this.getRevision()){var r=this.computeExtent(this.extent_);(isNaN(r[0])||isNaN(r[1]))&&Qo(r),this.extentRevision_=this.getRevision()}return t0(this.extent_,e)},t.prototype.rotate=function(e,r){Q()},t.prototype.scale=function(e,r,n){Q()},t.prototype.simplify=function(e){return this.getSimplifiedGeometry(e*e)},t.prototype.getSimplifiedGeometry=function(e){return Q()},t.prototype.getType=function(){return Q()},t.prototype.applyTransform=function(e){Q()},t.prototype.intersectsExtent=function(e){return Q()},t.prototype.translate=function(e,r){Q()},t.prototype.transform=function(e,r){var n=xt(e),a=n.getUnits()==Le.TILE_PIXELS?function(s,o,l){var h=n.getExtent(),u=n.getWorldExtent(),c=Rt(u)/Rt(h);return Me(_u,u[0],u[3],c,-c,0,0,0),Ii(s,0,s.length,l,_u,o),dn(n,r)(s,o,l)}:dn(n,r);return this.applyTransform(a),this},t}(Pi);const gA=_A,Kt={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"};var yA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),bA=function(i){yA(t,i);function t(){var e=i.call(this)||this;return e.layout=Kt.XY,e.stride=2,e.flatCoordinates=null,e}return t.prototype.computeExtent=function(e){return Zy(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)},t.prototype.getCoordinates=function(){return Q()},t.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},t.prototype.getFlatCoordinates=function(){return this.flatCoordinates},t.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},t.prototype.getLayout=function(){return this.layout},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var r=this.getSimplifiedGeometryInternal(e),n=r.getFlatCoordinates();return n.length<this.flatCoordinates.length?r:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)},t.prototype.getSimplifiedGeometryInternal=function(e){return this},t.prototype.getStride=function(){return this.stride},t.prototype.setFlatCoordinates=function(e,r){this.stride=gu(e),this.layout=e,this.flatCoordinates=r},t.prototype.setCoordinates=function(e,r){Q()},t.prototype.setLayout=function(e,r,n){var a;if(e)a=gu(e);else{for(var s=0;s<n;++s)if(r.length===0){this.layout=Kt.XY,this.stride=2;return}else r=r[0];a=r.length,e=xA(a)}this.layout=e,this.stride=a},t.prototype.applyTransform=function(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},t.prototype.rotate=function(e,r){var n=this.getFlatCoordinates();if(n){var a=this.getStride();Wf(n,0,n.length,a,e,r,n),this.changed()}},t.prototype.scale=function(e,r,n){var a=r;a===void 0&&(a=e);var s=n;s||(s=ui(this.getExtent()));var o=this.getFlatCoordinates();if(o){var l=this.getStride();pA(o,0,o.length,l,e,a,s,o),this.changed()}},t.prototype.translate=function(e,r){var n=this.getFlatCoordinates();if(n){var a=this.getStride();mA(n,0,n.length,a,e,r,n),this.changed()}},t}(gA);function xA(i){var t;return i==2?t=Kt.XY:i==3?t=Kt.XYZ:i==4&&(t=Kt.XYZM),t}function gu(i){var t;return i==Kt.XY?t=2:i==Kt.XYZ||i==Kt.XYM?t=3:i==Kt.XYZM&&(t=4),t}function wA(i,t,e){var r=i.getFlatCoordinates();if(r){var n=i.getStride();return Ii(r,0,r.length,n,t,e)}else return null}const ul=bA;function AA(i,t,e,r){for(var n=0,a=e.length;n<a;++n)i[t++]=e[n];return t}function Hf(i,t,e,r){for(var n=0,a=e.length;n<a;++n)for(var s=e[n],o=0;o<r;++o)i[t++]=s[o];return t}function CA(i,t,e,r,n){for(var a=n||[],s=0,o=0,l=e.length;o<l;++o){var h=Hf(i,t,e[o],r);a[s++]=h,t=h}return a.length=s,a}var EA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),SA=function(i){EA(t,i);function t(e,r){var n=i.call(this)||this;return n.setCoordinates(e,r),n}return t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,r,n,a){var s=this.flatCoordinates,o=ar(e,r,s[0],s[1]);if(o<a){for(var l=this.stride,h=0;h<l;++h)n[h]=s[h];return n.length=l,o}else return a},t.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},t.prototype.computeExtent=function(e){return Xy(this.flatCoordinates,e)},t.prototype.getType=function(){return X.POINT},t.prototype.intersectsExtent=function(e){return hf(e,this.flatCoordinates[0],this.flatCoordinates[1])},t.prototype.setCoordinates=function(e,r){this.setLayout(r,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=AA(this.flatCoordinates,0,e,this.stride),this.changed()},t}(ul);const jf=SA,Vt={ANIMATING:0,INTERACTING:1},oe={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};var TA=42,cl=256;function yu(i,t,e){return function(r,n,a,s,o){if(!!r){if(!n&&!t)return r;var l=t?0:a[0]*n,h=t?0:a[1]*n,u=o?o[0]:0,c=o?o[1]:0,d=i[0]+l/2+u,f=i[2]-l/2+u,p=i[1]+h/2+c,m=i[3]-h/2+c;d>f&&(d=(f+d)/2,f=d),p>m&&(p=(m+p)/2,m=p);var v=bt(r[0],d,f),_=bt(r[1],p,m);if(s&&e&&n){var g=30*n;v+=-g*Math.log(1+Math.max(0,d-r[0])/g)+g*Math.log(1+Math.max(0,r[0]-f)/g),_+=-g*Math.log(1+Math.max(0,p-r[1])/g)+g*Math.log(1+Math.max(0,r[1]-m)/g)}return[v,_]}}}function MA(i){return i}function dl(i,t,e,r){var n=lt(t)/e[0],a=Rt(t)/e[1];return r?Math.min(i,Math.max(n,a)):Math.min(i,Math.min(n,a))}function fl(i,t,e){var r=Math.min(i,t),n=50;return r*=Math.log(1+n*Math.max(0,i/t-1))/n+1,e&&(r=Math.max(r,e),r/=Math.log(1+n*Math.max(0,e/i-1))/n+1),bt(r,e/2,t*2)}function IA(i,t,e,r){return function(n,a,s,o){if(n!==void 0){var l=i[0],h=i[i.length-1],u=e?dl(l,e,s,r):l;if(o){var c=t!==void 0?t:!0;return c?fl(n,u,h):bt(n,h,u)}var d=Math.min(u,n),f=Math.floor(_s(i,d,a));return i[f]>u&&f<i.length-1?i[f+1]:i[f]}else return}}function OA(i,t,e,r,n,a){return function(s,o,l,h){if(s!==void 0){var u=n?dl(t,n,l,a):t,c=e!==void 0?e:0;if(h){var d=r!==void 0?r:!0;return d?fl(s,u,c):bt(s,c,u)}var f=1e-9,p=Math.ceil(Math.log(t/u)/Math.log(i)-f),m=-o*(.5-f)+.5,v=Math.min(u,s),_=Math.floor(Math.log(t/v)/Math.log(i)+m),g=Math.max(p,_),y=t/Math.pow(i,g);return bt(y,c,u)}else return}}function bu(i,t,e,r,n){return function(a,s,o,l){if(a!==void 0){var h=r?dl(i,r,o,n):i,u=e!==void 0?e:!0;return!u||!l?bt(a,t,h):fl(a,h,t)}else return}}function RA(i){if(i!==void 0)return 0}function xu(i){if(i!==void 0)return i}function DA(i){var t=2*Math.PI/i;return function(e,r){if(r)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e}}function kA(i){var t=i||ba(5);return function(e,r){if(r)return e;if(e!==void 0)return Math.abs(e)<=t?0:e}}function qf(i){return Math.pow(i,3)}function PA(i){return 1-qf(1-i)}function LA(i){return 3*i*i-2*i*i*i}function wu(i,t,e,r,n,a,s){var o=i[t],l=i[t+1],h=i[e]-o,u=i[e+1]-l,c;if(h===0&&u===0)c=t;else{var d=((n-o)*h+(a-l)*u)/(h*h+u*u);if(d>1)c=e;else if(d>0){for(var f=0;f<r;++f)s[f]=gi(i[t+f],i[e+f],d);s.length=r;return}else c=t}for(var f=0;f<r;++f)s[f]=i[c+f];s.length=r}function Xf(i,t,e,r,n){var a=i[t],s=i[t+1];for(t+=r;t<e;t+=r){var o=i[t],l=i[t+1],h=ar(a,s,o,l);h>n&&(n=h),a=o,s=l}return n}function FA(i,t,e,r,n){for(var a=0,s=e.length;a<s;++a){var o=e[a];n=Xf(i,t,o,r,n),t=o}return n}function Zf(i,t,e,r,n,a,s,o,l,h,u){if(t==e)return h;var c,d;if(n===0)if(d=ar(s,o,i[t],i[t+1]),d<h){for(c=0;c<r;++c)l[c]=i[t+c];return l.length=r,d}else return h;for(var f=u||[NaN,NaN],p=t+r;p<e;)if(wu(i,p-r,p,r,s,o,f),d=ar(s,o,f[0],f[1]),d<h){for(h=d,c=0;c<r;++c)l[c]=f[c];l.length=r,p+=r}else p+=r*Math.max((Math.sqrt(d)-Math.sqrt(h))/n|0,1);if(a&&(wu(i,e-r,t,r,s,o,f),d=ar(s,o,f[0],f[1]),d<h)){for(h=d,c=0;c<r;++c)l[c]=f[c];l.length=r}return h}function NA(i,t,e,r,n,a,s,o,l,h,u){for(var c=u||[NaN,NaN],d=0,f=e.length;d<f;++d){var p=e[d];h=Zf(i,t,p,r,n,a,s,o,l,h,c),t=p}return h}function BA(i,t,e,r,n,a,s){var o=(e-t)/r;if(o<3){for(;t<e;t+=r)a[s++]=i[t],a[s++]=i[t+1];return s}var l=new Array(o);l[0]=1,l[o-1]=1;for(var h=[t,e-r],u=0;h.length>0;){for(var c=h.pop(),d=h.pop(),f=0,p=i[d],m=i[d+1],v=i[c],_=i[c+1],g=d+r;g<c;g+=r){var y=i[g],b=i[g+1],x=Oy(y,b,p,m,v,_);x>f&&(u=g,f=x)}f>n&&(l[(u-t)/r]=1,d+r<u&&h.push(d,u),u+r<c&&h.push(u,c))}for(var g=0;g<o;++g)l[g]&&(a[s++]=i[t+g*r],a[s++]=i[t+g*r+1]);return s}function yi(i,t){return t*Math.round(i/t)}function zA(i,t,e,r,n,a,s){if(t==e)return s;var o=yi(i[t],n),l=yi(i[t+1],n);t+=r,a[s++]=o,a[s++]=l;var h,u;do if(h=yi(i[t],n),u=yi(i[t+1],n),t+=r,t==e)return a[s++]=h,a[s++]=u,s;while(h==o&&u==l);for(;t<e;){var c=yi(i[t],n),d=yi(i[t+1],n);if(t+=r,!(c==h&&d==u)){var f=h-o,p=u-l,m=c-o,v=d-l;if(f*v==p*m&&(f<0&&m<f||f==m||f>0&&m>f)&&(p<0&&v<p||p==v||p>0&&v>p)){h=c,u=d;continue}a[s++]=h,a[s++]=u,o=h,l=u,h=c,u=d}}return a[s++]=h,a[s++]=u,s}function $A(i,t,e,r,n,a,s,o){for(var l=0,h=e.length;l<h;++l){var u=e[l];s=zA(i,t,u,r,n,a,s),o.push(s),t=u}return s}function ir(i,t,e,r,n){for(var a=n!==void 0?n:[],s=0,o=t;o<e;o+=r)a[s++]=i.slice(o,o+r);return a.length=s,a}function Va(i,t,e,r,n){for(var a=n!==void 0?n:[],s=0,o=0,l=e.length;o<l;++o){var h=e[o];a[s++]=ir(i,t,h,r,a[s]),t=h}return a.length=s,a}function Au(i,t,e,r,n){for(var a=n!==void 0?n:[],s=0,o=0,l=e.length;o<l;++o){var h=e[o];a[s++]=Va(i,t,h,r,a[s]),t=h[h.length-1]}return a.length=s,a}function Kf(i,t,e,r){for(var n=0,a=i[e-r],s=i[e-r+1];t<e;t+=r){var o=i[t],l=i[t+1];n+=s*o-a*l,a=o,s=l}return n/2}function GA(i,t,e,r){for(var n=0,a=0,s=e.length;a<s;++a){var o=e[a];n+=Kf(i,t,o,r),t=o}return n}var UA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),VA=function(i){UA(t,i);function t(e,r){var n=i.call(this)||this;return n.maxDelta_=-1,n.maxDeltaRevision_=-1,r!==void 0&&!Array.isArray(e[0])?n.setFlatCoordinates(r,e):n.setCoordinates(e,r),n}return t.prototype.clone=function(){return new t(this.flatCoordinates.slice(),this.layout)},t.prototype.closestPointXY=function(e,r,n,a){return a<lf(this.getExtent(),e,r)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Xf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Zf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,r,n,a))},t.prototype.getArea=function(){return Kf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getCoordinates=function(){return ir(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getSimplifiedGeometryInternal=function(e){var r=[];return r.length=BA(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,r,0),new t(r,Kt.XY)},t.prototype.getType=function(){return X.LINEAR_RING},t.prototype.intersectsExtent=function(e){return!1},t.prototype.setCoordinates=function(e,r){this.setLayout(r,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Hf(this.flatCoordinates,0,e,this.stride),this.changed()},t}(ul);const Cu=VA;function YA(i,t,e,r,n){var a=cf(n,function(s){return!xi(i,t,e,r,s[0],s[1])});return!a}function xi(i,t,e,r,n,a){for(var s=0,o=i[e-r],l=i[e-r+1];t<e;t+=r){var h=i[t],u=i[t+1];l<=a?u>a&&(h-o)*(a-l)-(n-o)*(u-l)>0&&s++:u<=a&&(h-o)*(a-l)-(n-o)*(u-l)<0&&s--,o=h,l=u}return s!==0}function Qf(i,t,e,r,n,a){if(e.length===0||!xi(i,t,e[0],r,n,a))return!1;for(var s=1,o=e.length;s<o;++s)if(xi(i,e[s-1],e[s],r,n,a))return!1;return!0}function WA(i,t,e,r,n,a,s){for(var o,l,h,u,c,d,f,p=n[a+1],m=[],v=0,_=e.length;v<_;++v){var g=e[v];for(u=i[g-r],d=i[g-r+1],o=t;o<g;o+=r)c=i[o],f=i[o+1],(p<=d&&f<=p||d<=p&&p<=f)&&(h=(p-d)/(f-d)*(c-u)+u,m.push(h)),u=c,d=f}var y=NaN,b=-1/0;for(m.sort(mr),u=m[0],o=1,l=m.length;o<l;++o){c=m[o];var x=Math.abs(c-u);x>b&&(h=(u+c)/2,Qf(i,t,e,r,h,p)&&(y=h,b=x)),u=c}return isNaN(y)&&(y=n[a]),s?(s.push(y,p,b),s):[y,p,b]}function HA(i,t,e,r,n){var a;for(t+=r;t<e;t+=r)if(a=n(i.slice(t-r,t),i.slice(t,t+r)),a)return a;return!1}function Jf(i,t,e,r,n){var a=uf(ne(),i,t,e,r);return Lt(n,a)?ei(n,a)||a[0]>=n[0]&&a[2]<=n[2]||a[1]>=n[1]&&a[3]<=n[3]?!0:HA(i,t,e,r,function(s,o){return e0(n,s,o)}):!1}function jA(i,t,e,r,n){return!!(Jf(i,t,e,r,n)||xi(i,t,e,r,n[0],n[1])||xi(i,t,e,r,n[0],n[3])||xi(i,t,e,r,n[2],n[1])||xi(i,t,e,r,n[2],n[3]))}function qA(i,t,e,r,n){if(!jA(i,t,e[0],r,n))return!1;if(e.length===1)return!0;for(var a=1,s=e.length;a<s;++a)if(YA(i,e[a-1],e[a],r,n)&&!Jf(i,e[a-1],e[a],r,n))return!1;return!0}function XA(i,t,e,r){for(;t<e-r;){for(var n=0;n<r;++n){var a=i[t+n];i[t+n]=i[e-r+n],i[e-r+n]=a}t+=r,e-=r}}function tp(i,t,e,r){for(var n=0,a=i[e-r],s=i[e-r+1];t<e;t+=r){var o=i[t],l=i[t+1];n+=(o-a)*(l+s),a=o,s=l}return n===0?void 0:n>0}function ZA(i,t,e,r,n){for(var a=n!==void 0?n:!1,s=0,o=e.length;s<o;++s){var l=e[s],h=tp(i,t,l,r);if(s===0){if(a&&h||!a&&!h)return!1}else if(a&&!h||!a&&h)return!1;t=l}return!0}function Eu(i,t,e,r,n){for(var a=n!==void 0?n:!1,s=0,o=e.length;s<o;++s){var l=e[s],h=tp(i,t,l,r),u=s===0?a&&h||!a&&!h:a&&!h||!a&&h;u&&XA(i,t,l,r),t=l}return t}var KA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),QA=function(i){KA(t,i);function t(e,r,n){var a=i.call(this)||this;return a.ends_=[],a.flatInteriorPointRevision_=-1,a.flatInteriorPoint_=null,a.maxDelta_=-1,a.maxDeltaRevision_=-1,a.orientedRevision_=-1,a.orientedFlatCoordinates_=null,r!==void 0&&n?(a.setFlatCoordinates(r,e),a.ends_=n):a.setCoordinates(e,r),a}return t.prototype.appendLinearRing=function(e){this.flatCoordinates?Uf(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,r,n,a){return a<lf(this.getExtent(),e,r)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(FA(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),NA(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,r,n,a))},t.prototype.containsXY=function(e,r){return Qf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,r)},t.prototype.getArea=function(){return GA(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},t.prototype.getCoordinates=function(e){var r;return e!==void 0?(r=this.getOrientedFlatCoordinates().slice(),Eu(r,0,this.ends_,this.stride,e)):r=this.flatCoordinates,Va(r,0,this.ends_,this.stride)},t.prototype.getEnds=function(){return this.ends_},t.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var e=ui(this.getExtent());this.flatInteriorPoint_=WA(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},t.prototype.getInteriorPoint=function(){return new jf(this.getFlatInteriorPoint(),Kt.XYM)},t.prototype.getLinearRingCount=function(){return this.ends_.length},t.prototype.getLinearRing=function(e){return e<0||this.ends_.length<=e?null:new Cu(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)},t.prototype.getLinearRings=function(){for(var e=this.layout,r=this.flatCoordinates,n=this.ends_,a=[],s=0,o=0,l=n.length;o<l;++o){var h=n[o],u=new Cu(r.slice(s,h),e);a.push(u),s=h}return a},t.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var e=this.flatCoordinates;ZA(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Eu(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},t.prototype.getSimplifiedGeometryInternal=function(e){var r=[],n=[];return r.length=$A(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),r,0,n),new t(r,Kt.XY,n)},t.prototype.getType=function(){return X.POLYGON},t.prototype.intersectsExtent=function(e){return qA(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)},t.prototype.setCoordinates=function(e,r){this.setLayout(r,e,2),this.flatCoordinates||(this.flatCoordinates=[]);var n=CA(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()},t}(ul);function Su(i){var t=i[0],e=i[1],r=i[2],n=i[3],a=[t,e,t,n,r,n,r,e,t,e];return new QA(a,Kt.XY,[a.length])}var JA=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),zs=0,tC=function(i){JA(t,i);function t(e){var r=i.call(this)||this;r.on,r.once,r.un;var n=ht({},e);return r.hints_=[0,0],r.animations_=[],r.updateAnimationKey_,r.projection_=el(n.projection,"EPSG:3857"),r.viewportSize_=[100,100],r.targetCenter_=null,r.targetResolution_,r.targetRotation_,r.nextCenter_=null,r.nextResolution_,r.nextRotation_,r.cancelAnchor_=void 0,n.center&&(n.center=Ye(n.center,r.projection_)),n.extent&&(n.extent=ke(n.extent,r.projection_)),n.projection&&l0(),r.applyOptions_(n),r}return t.prototype.applyOptions_=function(e){var r=ht({},e);for(var n in oe)delete r[n];this.setProperties(r,!0);var a=iC(e);this.maxResolution_=a.maxResolution,this.minResolution_=a.minResolution,this.zoomFactor_=a.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=a.minZoom;var s=eC(e),o=a.constraint,l=rC(e);this.constraints_={center:s,resolution:o,rotation:l},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)},Object.defineProperty(t.prototype,"padding",{get:function(){return this.padding_},set:function(e){var r=this.padding_;this.padding_=e;var n=this.getCenter();if(n){var a=e||[0,0,0,0];r=r||[0,0,0,0];var s=this.getResolution(),o=s/2*(a[3]-r[3]+r[1]-a[1]),l=s/2*(a[0]-r[0]+r[2]-a[2]);this.setCenterInternal([n[0]+o,n[1]-l])}},enumerable:!1,configurable:!0}),t.prototype.getUpdatedOptions_=function(e){var r=this.getProperties();return r.resolution!==void 0?r.resolution=this.getResolution():r.zoom=this.getZoom(),r.center=this.getCenterInternal(),r.rotation=this.getRotation(),ht({},r,e)},t.prototype.animate=function(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var r=new Array(arguments.length),n=0;n<r.length;++n){var a=arguments[n];a.center&&(a=ht({},a),a.center=Ye(a.center,this.getProjection())),a.anchor&&(a=ht({},a),a.anchor=Ye(a.anchor,this.getProjection())),r[n]=a}this.animateInternal.apply(this,r)},t.prototype.animateInternal=function(e){var r=arguments.length,n;r>1&&typeof arguments[r-1]=="function"&&(n=arguments[r-1],--r);for(var a=0;a<r&&!this.isDef();++a){var s=arguments[a];s.center&&this.setCenterInternal(s.center),s.zoom!==void 0?this.setZoom(s.zoom):s.resolution&&this.setResolution(s.resolution),s.rotation!==void 0&&this.setRotation(s.rotation)}if(a===r){n&&la(n,!0);return}for(var o=Date.now(),l=this.targetCenter_.slice(),h=this.targetResolution_,u=this.targetRotation_,c=[];a<r;++a){var d=arguments[a],f={start:o,complete:!1,anchor:d.anchor,duration:d.duration!==void 0?d.duration:1e3,easing:d.easing||LA,callback:n};if(d.center&&(f.sourceCenter=l,f.targetCenter=d.center.slice(),l=f.targetCenter),d.zoom!==void 0?(f.sourceResolution=h,f.targetResolution=this.getResolutionForZoom(d.zoom),h=f.targetResolution):d.resolution&&(f.sourceResolution=h,f.targetResolution=d.resolution,h=f.targetResolution),d.rotation!==void 0){f.sourceRotation=u;var p=Mi(d.rotation-u+Math.PI,2*Math.PI)-Math.PI;f.targetRotation=u+p,u=f.targetRotation}nC(f)?f.complete=!0:o+=f.duration,c.push(f)}this.animations_.push(c),this.setHint(Vt.ANIMATING,1),this.updateAnimations_()},t.prototype.getAnimating=function(){return this.hints_[Vt.ANIMATING]>0},t.prototype.getInteracting=function(){return this.hints_[Vt.INTERACTING]>0},t.prototype.cancelAnimations=function(){this.setHint(Vt.ANIMATING,-this.hints_[Vt.ANIMATING]);for(var e,r=0,n=this.animations_.length;r<n;++r){var a=this.animations_[r];if(a[0].callback&&la(a[0].callback,!1),!e)for(var s=0,o=a.length;s<o;++s){var l=a[s];if(!l.complete){e=l.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN},t.prototype.updateAnimations_=function(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!!this.getAnimating()){for(var e=Date.now(),r=!1,n=this.animations_.length-1;n>=0;--n){for(var a=this.animations_[n],s=!0,o=0,l=a.length;o<l;++o){var h=a[o];if(!h.complete){var u=e-h.start,c=h.duration>0?u/h.duration:1;c>=1?(h.complete=!0,c=1):s=!1;var d=h.easing(c);if(h.sourceCenter){var f=h.sourceCenter[0],p=h.sourceCenter[1],m=h.targetCenter[0],v=h.targetCenter[1];this.nextCenter_=h.targetCenter;var _=f+d*(m-f),g=p+d*(v-p);this.targetCenter_=[_,g]}if(h.sourceResolution&&h.targetResolution){var y=d===1?h.targetResolution:h.sourceResolution+d*(h.targetResolution-h.sourceResolution);if(h.anchor){var b=this.getViewportSize_(this.getRotation()),x=this.constraints_.resolution(y,0,b,!0);this.targetCenter_=this.calculateCenterZoom(x,h.anchor)}this.nextResolution_=h.targetResolution,this.targetResolution_=y,this.applyTargetState_(!0)}if(h.sourceRotation!==void 0&&h.targetRotation!==void 0){var w=d===1?Mi(h.targetRotation+Math.PI,2*Math.PI)-Math.PI:h.sourceRotation+d*(h.targetRotation-h.sourceRotation);if(h.anchor){var C=this.constraints_.rotation(w,!0);this.targetCenter_=this.calculateCenterRotate(C,h.anchor)}this.nextRotation_=h.targetRotation,this.targetRotation_=w}if(this.applyTargetState_(!0),r=!0,!h.complete)break}}if(s){this.animations_[n]=null,this.setHint(Vt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;var A=a[0].callback;A&&la(A,!0)}}this.animations_=this.animations_.filter(Boolean),r&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},t.prototype.calculateCenterRotate=function(e,r){var n,a=this.getCenterInternal();return a!==void 0&&(n=[a[0]-r[0],a[1]-r[1]],a0(n,e-this.getRotation()),n0(n,r)),n},t.prototype.calculateCenterZoom=function(e,r){var n,a=this.getCenterInternal(),s=this.getResolution();if(a!==void 0&&s!==void 0){var o=r[0]-e*(r[0]-a[0])/s,l=r[1]-e*(r[1]-a[1])/s;n=[o,l]}return n},t.prototype.getViewportSize_=function(e){var r=this.viewportSize_;if(e){var n=r[0],a=r[1];return[Math.abs(n*Math.cos(e))+Math.abs(a*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(a*Math.cos(e))]}else return r},t.prototype.setViewportSize=function(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},t.prototype.getCenter=function(){var e=this.getCenterInternal();return e&&Xh(e,this.getProjection())},t.prototype.getCenterInternal=function(){return this.get(oe.CENTER)},t.prototype.getConstraints=function(){return this.constraints_},t.prototype.getConstrainResolution=function(){return this.get("constrainResolution")},t.prototype.getHints=function(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()},t.prototype.calculateExtent=function(e){var r=this.calculateExtentInternal(e);return bo(r,this.getProjection())},t.prototype.calculateExtentInternal=function(e){var r=e||this.getViewportSizeMinusPadding_(),n=this.getCenterInternal();J(n,1);var a=this.getResolution();J(a!==void 0,2);var s=this.getRotation();return J(s!==void 0,3),xa(n,a,s,r)},t.prototype.getMaxResolution=function(){return this.maxResolution_},t.prototype.getMinResolution=function(){return this.minResolution_},t.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},t.prototype.setMaxZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))},t.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},t.prototype.setMinZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))},t.prototype.setConstrainResolution=function(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))},t.prototype.getProjection=function(){return this.projection_},t.prototype.getResolution=function(){return this.get(oe.RESOLUTION)},t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.getResolutionForExtent=function(e,r){return this.getResolutionForExtentInternal(ke(e,this.getProjection()),r)},t.prototype.getResolutionForExtentInternal=function(e,r){var n=r||this.getViewportSizeMinusPadding_(),a=lt(e)/n[0],s=Rt(e)/n[1];return Math.max(a,s)},t.prototype.getResolutionForValueFunction=function(e){var r=e||2,n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,s=Math.log(n/a)/Math.log(r);return function(o){var l=n/Math.pow(r,o*s);return l}},t.prototype.getRotation=function(){return this.get(oe.ROTATION)},t.prototype.getValueForResolutionFunction=function(e){var r=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,s=Math.log(n/a)/r;return function(o){var l=Math.log(n/o)/r/s;return l}},t.prototype.getViewportSizeMinusPadding_=function(e){var r=this.getViewportSize_(e),n=this.padding_;return n&&(r=[r[0]-n[1]-n[3],r[1]-n[0]-n[2]]),r},t.prototype.getState=function(){var e=this.getProjection(),r=this.getResolution(),n=this.getRotation(),a=this.getCenterInternal(),s=this.padding_;if(s){var o=this.getViewportSizeMinusPadding_();a=$s(a,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],r,n)}return{center:a.slice(0),projection:e!==void 0?e:null,resolution:r,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}},t.prototype.getZoom=function(){var e,r=this.getResolution();return r!==void 0&&(e=this.getZoomForResolution(r)),e},t.prototype.getZoomForResolution=function(e){var r=this.minZoom_||0,n,a;if(this.resolutions_){var s=_s(this.resolutions_,e,1);r=s,n=this.resolutions_[s],s==this.resolutions_.length-1?a=2:a=n/this.resolutions_[s+1]}else n=this.maxResolution_,a=this.zoomFactor_;return r+Math.log(n/e)/Math.log(a)},t.prototype.getResolutionForZoom=function(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var r=bt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[r]/this.resolutions_[r+1];return this.resolutions_[r]/Math.pow(n,bt(e-r,0,1))}else return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)},t.prototype.fit=function(e,r){var n;if(J(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function",24),Array.isArray(e)){J(!Jo(e),25);var a=ke(e,this.getProjection());n=Su(a)}else if(e.getType()===X.CIRCLE){var a=ke(e.getExtent(),this.getProjection());n=Su(a),n.rotate(this.getRotation(),ui(a))}else{var s=_f();s?n=e.clone().transform(s,this.getProjection()):n=e}this.fitInternal(n,r)},t.prototype.rotatedExtentForGeometry=function(e){for(var r=this.getRotation(),n=Math.cos(r),a=Math.sin(-r),s=e.getFlatCoordinates(),o=e.getStride(),l=1/0,h=1/0,u=-1/0,c=-1/0,d=0,f=s.length;d<f;d+=o){var p=s[d]*n-s[d+1]*a,m=s[d]*a+s[d+1]*n;l=Math.min(l,p),h=Math.min(h,m),u=Math.max(u,p),c=Math.max(c,m)}return[l,h,u,c]},t.prototype.fitInternal=function(e,r){var n=r||{},a=n.size;a||(a=this.getViewportSizeMinusPadding_());var s=n.padding!==void 0?n.padding:[0,0,0,0],o=n.nearest!==void 0?n.nearest:!1,l;n.minResolution!==void 0?l=n.minResolution:n.maxZoom!==void 0?l=this.getResolutionForZoom(n.maxZoom):l=0;var h=this.rotatedExtentForGeometry(e),u=this.getResolutionForExtentInternal(h,[a[0]-s[1]-s[3],a[1]-s[0]-s[2]]);u=isNaN(u)?l:Math.max(u,l),u=this.getConstrainedResolution(u,o?0:1);var c=this.getRotation(),d=Math.sin(c),f=Math.cos(c),p=ui(h);p[0]+=(s[1]-s[3])/2*u,p[1]+=(s[0]-s[2])/2*u;var m=p[0]*f-p[1]*d,v=p[1]*f+p[0]*d,_=this.getConstrainedCenter([m,v],u),g=n.callback?n.callback:vn;n.duration!==void 0?this.animateInternal({resolution:u,center:_,duration:n.duration,easing:n.easing},g):(this.targetResolution_=u,this.targetCenter_=_,this.applyTargetState_(!1,!0),la(g,!0))},t.prototype.centerOn=function(e,r,n){this.centerOnInternal(Ye(e,this.getProjection()),r,n)},t.prototype.centerOnInternal=function(e,r,n){this.setCenterInternal($s(e,r,n,this.getResolution(),this.getRotation()))},t.prototype.calculateCenterShift=function(e,r,n,a){var s,o=this.padding_;if(o&&e){var l=this.getViewportSizeMinusPadding_(-n),h=$s(e,a,[l[0]/2+o[3],l[1]/2+o[0]],r,n);s=[e[0]-h[0],e[1]-h[1]]}return s},t.prototype.isDef=function(){return!!this.getCenterInternal()&&this.getResolution()!==void 0},t.prototype.adjustCenter=function(e){var r=Xh(this.targetCenter_,this.getProjection());this.setCenter([r[0]+e[0],r[1]+e[1]])},t.prototype.adjustCenterInternal=function(e){var r=this.targetCenter_;this.setCenterInternal([r[0]+e[0],r[1]+e[1]])},t.prototype.adjustResolution=function(e,r){var n=r&&Ye(r,this.getProjection());this.adjustResolutionInternal(e,n)},t.prototype.adjustResolutionInternal=function(e,r){var n=this.getAnimating()||this.getInteracting(),a=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,a,n);r&&(this.targetCenter_=this.calculateCenterZoom(s,r)),this.targetResolution_*=e,this.applyTargetState_()},t.prototype.adjustZoom=function(e,r){this.adjustResolution(Math.pow(this.zoomFactor_,-e),r)},t.prototype.adjustRotation=function(e,r){r&&(r=Ye(r,this.getProjection())),this.adjustRotationInternal(e,r)},t.prototype.adjustRotationInternal=function(e,r){var n=this.getAnimating()||this.getInteracting(),a=this.constraints_.rotation(this.targetRotation_+e,n);r&&(this.targetCenter_=this.calculateCenterRotate(a,r)),this.targetRotation_+=e,this.applyTargetState_()},t.prototype.setCenter=function(e){this.setCenterInternal(e&&Ye(e,this.getProjection()))},t.prototype.setCenterInternal=function(e){this.targetCenter_=e,this.applyTargetState_()},t.prototype.setHint=function(e,r){return this.hints_[e]+=r,this.changed(),this.hints_[e]},t.prototype.setResolution=function(e){this.targetResolution_=e,this.applyTargetState_()},t.prototype.setRotation=function(e){this.targetRotation_=e,this.applyTargetState_()},t.prototype.setZoom=function(e){this.setResolution(this.getResolutionForZoom(e))},t.prototype.applyTargetState_=function(e,r){var n=this.getAnimating()||this.getInteracting()||r,a=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(a),o=this.constraints_.resolution(this.targetResolution_,0,s,n),l=this.constraints_.center(this.targetCenter_,o,s,n,this.calculateCenterShift(this.targetCenter_,o,a,s));this.get(oe.ROTATION)!==a&&this.set(oe.ROTATION,a),this.get(oe.RESOLUTION)!==o&&(this.set(oe.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!l||!this.get(oe.CENTER)||!Fa(this.get(oe.CENTER),l))&&this.set(oe.CENTER,l),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0},t.prototype.resolveConstraints=function(e,r,n){var a=e!==void 0?e:200,s=r||0,o=this.constraints_.rotation(this.targetRotation_),l=this.getViewportSize_(o),h=this.constraints_.resolution(this.targetResolution_,s,l),u=this.constraints_.center(this.targetCenter_,h,l,!1,this.calculateCenterShift(this.targetCenter_,h,o,l));if(a===0&&!this.cancelAnchor_){this.targetResolution_=h,this.targetRotation_=o,this.targetCenter_=u,this.applyTargetState_();return}var c=n||(a===0?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,(this.getResolution()!==h||this.getRotation()!==o||!this.getCenterInternal()||!Fa(this.getCenterInternal(),u))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:u,resolution:h,duration:a,easing:PA,anchor:c}))},t.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(Vt.INTERACTING,1)},t.prototype.endInteraction=function(e,r,n){var a=n&&Ye(n,this.getProjection());this.endInteractionInternal(e,r,a)},t.prototype.endInteractionInternal=function(e,r,n){this.setHint(Vt.INTERACTING,-1),this.resolveConstraints(e,r,n)},t.prototype.getConstrainedCenter=function(e,r){var n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,r||this.getResolution(),n)},t.prototype.getConstrainedZoom=function(e,r){var n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,r))},t.prototype.getConstrainedResolution=function(e,r){var n=r||0,a=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,n,a)},t}(Pi);function la(i,t){setTimeout(function(){i(t)},0)}function eC(i){if(i.extent!==void 0){var t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return yu(i.extent,i.constrainOnlyCenter,t)}var e=el(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){var r=e.getExtent().slice();return r[0]=-1/0,r[2]=1/0,yu(r,!1,!1)}return MA}function iC(i){var t,e,r,n=28,a=2,s=i.minZoom!==void 0?i.minZoom:zs,o=i.maxZoom!==void 0?i.maxZoom:n,l=i.zoomFactor!==void 0?i.zoomFactor:a,h=i.multiWorld!==void 0?i.multiWorld:!1,u=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,c=i.showFullExtent!==void 0?i.showFullExtent:!1,d=el(i.projection,"EPSG:3857"),f=d.getExtent(),p=i.constrainOnlyCenter,m=i.extent;if(!h&&!m&&d.isGlobal()&&(p=!1,m=f),i.resolutions!==void 0){var v=i.resolutions;e=v[s],r=v[o]!==void 0?v[o]:v[v.length-1],i.constrainResolution?t=IA(v,u,!p&&m,c):t=bu(e,r,u,!p&&m,c)}else{var _=f?Math.max(lt(f),Rt(f)):360*re[Le.DEGREES]/d.getMetersPerUnit(),g=_/cl/Math.pow(a,zs),y=g/Math.pow(a,n-zs);e=i.maxResolution,e!==void 0?s=0:e=g/Math.pow(l,s),r=i.minResolution,r===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?r=e/Math.pow(l,o):r=g/Math.pow(l,o):r=y),o=s+Math.floor(Math.log(e/r)/Math.log(l)),r=e/Math.pow(l,o-s),i.constrainResolution?t=OA(l,e,r,u,!p&&m,c):t=bu(e,r,u,!p&&m,c)}return{constraint:t,maxResolution:e,minResolution:r,minZoom:s,zoomFactor:l}}function rC(i){var t=i.enableRotation!==void 0?i.enableRotation:!0;if(t){var e=i.constrainRotation;return e===void 0||e===!0?kA():e===!1?xu:typeof e=="number"?DA(e):xu}else return RA}function nC(i){return!(i.sourceCenter&&i.targetCenter&&!Fa(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function $s(i,t,e,r,n){var a=Math.cos(-n),s=Math.sin(-n),o=i[0]*a-i[1]*s,l=i[1]*a+i[0]*s;o+=(t[0]/2-e[0])*r,l+=(e[1]-t[1]/2)*r,s=-s;var h=o*a-l*s,u=l*a+o*s;return[h,u]}const aC=tC,rt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};var sC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),oC=function(i){sC(t,i);function t(e){var r=i.call(this)||this;r.on,r.once,r.un,r.background_=e.background;var n=ht({},e);return typeof e.properties=="object"&&(delete n.properties,ht(n,e.properties)),n[rt.OPACITY]=e.opacity!==void 0?e.opacity:1,J(typeof n[rt.OPACITY]=="number",64),n[rt.VISIBLE]=e.visible!==void 0?e.visible:!0,n[rt.Z_INDEX]=e.zIndex,n[rt.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,n[rt.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,n[rt.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,n[rt.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,r.className_=n.className!==void 0?n.className:"ol-layer",delete n.className,r.setProperties(n),r.state_=null,r}return t.prototype.getBackground=function(){return this.background_},t.prototype.getClassName=function(){return this.className_},t.prototype.getLayerState=function(e){var r=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return r.opacity=bt(Math.round(this.getOpacity()*100)/100,0,1),r.visible=this.getVisible(),r.extent=this.getExtent(),r.zIndex=n===void 0&&!r.managed?1/0:n,r.maxResolution=this.getMaxResolution(),r.minResolution=Math.max(this.getMinResolution(),0),r.minZoom=this.getMinZoom(),r.maxZoom=this.getMaxZoom(),this.state_=r,r},t.prototype.getLayersArray=function(e){return Q()},t.prototype.getLayerStatesArray=function(e){return Q()},t.prototype.getExtent=function(){return this.get(rt.EXTENT)},t.prototype.getMaxResolution=function(){return this.get(rt.MAX_RESOLUTION)},t.prototype.getMinResolution=function(){return this.get(rt.MIN_RESOLUTION)},t.prototype.getMinZoom=function(){return this.get(rt.MIN_ZOOM)},t.prototype.getMaxZoom=function(){return this.get(rt.MAX_ZOOM)},t.prototype.getOpacity=function(){return this.get(rt.OPACITY)},t.prototype.getSourceState=function(){return Q()},t.prototype.getVisible=function(){return this.get(rt.VISIBLE)},t.prototype.getZIndex=function(){return this.get(rt.Z_INDEX)},t.prototype.setBackground=function(e){this.background_=e,this.changed()},t.prototype.setExtent=function(e){this.set(rt.EXTENT,e)},t.prototype.setMaxResolution=function(e){this.set(rt.MAX_RESOLUTION,e)},t.prototype.setMinResolution=function(e){this.set(rt.MIN_RESOLUTION,e)},t.prototype.setMaxZoom=function(e){this.set(rt.MAX_ZOOM,e)},t.prototype.setMinZoom=function(e){this.set(rt.MIN_ZOOM,e)},t.prototype.setOpacity=function(e){J(typeof e=="number",64),this.set(rt.OPACITY,e)},t.prototype.setVisible=function(e){this.set(rt.VISIBLE,e)},t.prototype.setZIndex=function(e){this.set(rt.Z_INDEX,e)},t.prototype.disposeInternal=function(){this.state_&&(this.state_.layer=null,this.state_=null),i.prototype.disposeInternal.call(this)},t}(Pi);const lC=oC,Eo={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},bs={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"};var hC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),uC=function(i){hC(t,i);function t(e){var r=this,n=ht({},e);delete n.source,r=i.call(this,n)||this,r.on,r.once,r.un,r.mapPrecomposeKey_=null,r.mapRenderKey_=null,r.sourceChangeKey_=null,r.renderer_=null,r.rendered=!1,e.render&&(r.render=e.render),e.map&&r.setMap(e.map),r.addChangeListener(rt.SOURCE,r.handleSourcePropertyChange_);var a=e.source?e.source:null;return r.setSource(a),r}return t.prototype.getLayersArray=function(e){var r=e||[];return r.push(this),r},t.prototype.getLayerStatesArray=function(e){var r=e||[];return r.push(this.getLayerState()),r},t.prototype.getSource=function(){return this.get(rt.SOURCE)||null},t.prototype.getRenderSource=function(){return this.getSource()},t.prototype.getSourceState=function(){var e=this.getSource();return e?e.getState():bs.UNDEFINED},t.prototype.handleSourceChange_=function(){this.changed()},t.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&(ie(this.sourceChangeKey_),this.sourceChangeKey_=null);var e=this.getSource();e&&(this.sourceChangeKey_=pe(e,Mt.CHANGE,this.handleSourceChange_,this)),this.changed()},t.prototype.getFeatures=function(e){return this.renderer_?this.renderer_.getFeatures(e):new Promise(function(r){return r([])})},t.prototype.getData=function(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)},t.prototype.render=function(e,r){var n=this.getRenderer();if(n.prepareFrame(e))return this.rendered=!0,n.renderFrame(e,r)},t.prototype.unrender=function(){this.rendered=!1},t.prototype.setMapInternal=function(e){e||this.unrender(),this.set(rt.MAP,e)},t.prototype.getMapInternal=function(){return this.get(rt.MAP)},t.prototype.setMap=function(e){this.mapPrecomposeKey_&&(ie(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(ie(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=pe(e,Eo.PRECOMPOSE,function(r){var n=r,a=n.frameState.layerStatesArray,s=this.getLayerState(!1);J(!a.some(function(o){return o.layer===s.layer}),67),a.push(s)},this),this.mapRenderKey_=pe(this,Mt.CHANGE,e.render,e),this.changed())},t.prototype.setSource=function(e){this.set(rt.SOURCE,e)},t.prototype.getRenderer=function(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_},t.prototype.hasRenderer=function(){return!!this.renderer_},t.prototype.createRenderer=function(){return null},t.prototype.disposeInternal=function(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),i.prototype.disposeInternal.call(this)},t}(lC);const pl=uC;var cC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),dC=function(i){cC(t,i);function t(e){var r=e||{};return i.call(this,r)||this}return t}(pl);const fC=dC,Z={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var pC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),mC=function(i){pC(t,i);function t(e){var r=i.call(this)||this;return r.ready=!0,r.boundHandleImageChange_=r.handleImageChange_.bind(r),r.layer_=e,r.declutterExecutorGroup=null,r}return t.prototype.getFeatures=function(e){return Q()},t.prototype.getData=function(e){return null},t.prototype.prepareFrame=function(e){return Q()},t.prototype.renderFrame=function(e,r){return Q()},t.prototype.loadedTileCallback=function(e,r,n){e[r]||(e[r]={}),e[r][n.tileCoord.toString()]=n},t.prototype.createLoadedTileFinder=function(e,r,n){return function(a,s){var o=this.loadedTileCallback.bind(this,n,a);return e.forEachLoadedTile(r,a,s,o)}.bind(this)},t.prototype.forEachFeatureAtCoordinate=function(e,r,n,a,s){},t.prototype.getDataAtPixel=function(e,r,n){return null},t.prototype.getLayer=function(){return this.layer_},t.prototype.handleFontsChanged=function(){},t.prototype.handleImageChange_=function(e){var r=e.target;r.getState()===Z.LOADED&&this.renderIfReadyAndVisible()},t.prototype.loadImage=function(e){var r=e.getState();return r!=Z.LOADED&&r!=Z.ERROR&&e.addEventListener(Mt.CHANGE,this.boundHandleImageChange_),r==Z.IDLE&&(e.load(),r=e.getState()),r==Z.LOADED},t.prototype.renderIfReadyAndVisible=function(){var e=this.getLayer();e.getVisible()&&e.getSourceState()==bs.READY&&e.changed()},t.prototype.disposeInternal=function(){delete this.layer_,i.prototype.disposeInternal.call(this)},t}(Vf);const vC=mC;var _C=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),gC=function(i){_C(t,i);function t(e,r,n,a){var s=i.call(this,e)||this;return s.inversePixelTransform=r,s.frameState=n,s.context=a,s}return t}(ki);const yC=gC;var bC=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,xC=/^([a-z]*)$|^hsla?\(.*\)$/i;function ep(i){return typeof i=="string"?i:ip(i)}function wC(i){var t=document.createElement("div");if(t.style.color=i,t.style.color!==""){document.body.appendChild(t);var e=getComputedStyle(t).color;return document.body.removeChild(t),e}else return""}var AC=function(){var i=1024,t={},e=0;return function(r){var n;if(t.hasOwnProperty(r))n=t[r];else{if(e>=i){var a=0;for(var s in t)(a++&3)===0&&(delete t[s],--e)}n=CC(r),t[r]=n,++e}return n}}();function Ya(i){return Array.isArray(i)?i:AC(i)}function CC(i){var t,e,r,n,a;if(xC.exec(i)&&(i=wC(i)),bC.exec(i)){var s=i.length-1,o=void 0;s<=4?o=1:o=2;var l=s===4||s===8;t=parseInt(i.substr(1+0*o,o),16),e=parseInt(i.substr(1+1*o,o),16),r=parseInt(i.substr(1+2*o,o),16),l?n=parseInt(i.substr(1+3*o,o),16):n=255,o==1&&(t=(t<<4)+t,e=(e<<4)+e,r=(r<<4)+r,l&&(n=(n<<4)+n)),a=[t,e,r,n/255]}else i.indexOf("rgba(")==0?(a=i.slice(5,-1).split(",").map(Number),Tu(a)):i.indexOf("rgb(")==0?(a=i.slice(4,-1).split(",").map(Number),a.push(1),Tu(a)):J(!1,14);return a}function Tu(i){return i[0]=bt(i[0]+.5|0,0,255),i[1]=bt(i[1]+.5|0,0,255),i[2]=bt(i[2]+.5|0,0,255),i[3]=bt(i[3],0,1),i}function ip(i){var t=i[0];t!=(t|0)&&(t=t+.5|0);var e=i[1];e!=(e|0)&&(e=e+.5|0);var r=i[2];r!=(r|0)&&(r=r+.5|0);var n=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+t+","+e+","+r+","+n+")"}function se(i,t,e,r){var n;return e&&e.length?n=e.shift():ys?n=new OffscreenCanvas(i||300,t||300):n=document.createElement("canvas"),i&&(n.width=i),t&&(n.height=t),n.getContext("2d",r)}var EC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Kr=null;function SC(){var i=document.createElement("canvas");i.width=1,i.height=1,Kr=i.getContext("2d")}var TC=function(i){EC(t,i);function t(e){var r=i.call(this,e)||this;return r.container=null,r.renderedResolution,r.tempTransform=li(),r.pixelTransform=li(),r.inversePixelTransform=li(),r.context=null,r.containerReused=!1,r.pixelContext_=null,r.frameState=null,r}return t.prototype.getImageData=function(e,r,n){Kr||SC(),Kr.clearRect(0,0,1,1);var a;try{Kr.drawImage(e,r,n,1,1,0,0,1,1),a=Kr.getImageData(0,0,1,1).data}catch{return null}return a},t.prototype.getBackground=function(e){var r=this.getLayer(),n=r.getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0},t.prototype.useContainer=function(e,r,n,a){var s=this.getLayer().getClassName(),o,l;if(e&&e.className===s&&e.style.opacity===""&&n===1&&(!a||e.style.backgroundColor&&Sr(Ya(e.style.backgroundColor),Ya(a)))){var h=e.firstElementChild;h instanceof HTMLCanvasElement&&(l=h.getContext("2d"))}if(l&&l.canvas.style.transform===r?(this.container=e,this.context=l,this.containerReused=!0):this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1),!this.container){o=document.createElement("div"),o.className=s;var u=o.style;u.position="absolute",u.width="100%",u.height="100%",a&&(u.backgroundColor=a),l=se();var h=l.canvas;o.appendChild(h),u=h.style,u.position="absolute",u.left="0",u.transformOrigin="top left",this.container=o,this.context=l}},t.prototype.clipUnrotated=function(e,r,n){var a=Di(n),s=fs(n),o=ds(n),l=cs(n);At(r.coordinateToPixelTransform,a),At(r.coordinateToPixelTransform,s),At(r.coordinateToPixelTransform,o),At(r.coordinateToPixelTransform,l);var h=this.inversePixelTransform;At(h,a),At(h,s),At(h,o),At(h,l),e.save(),e.beginPath(),e.moveTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(l[0]),Math.round(l[1])),e.clip()},t.prototype.dispatchRenderEvent_=function(e,r,n){var a=this.getLayer();if(a.hasListener(e)){var s=new yC(e,this.inversePixelTransform,n,r);a.dispatchEvent(s)}},t.prototype.preRender=function(e,r){this.frameState=r,this.dispatchRenderEvent_(Eo.PRERENDER,e,r)},t.prototype.postRender=function(e,r){this.dispatchRenderEvent_(Eo.POSTRENDER,e,r)},t.prototype.getRenderTransform=function(e,r,n,a,s,o,l){var h=s/2,u=o/2,c=a/r,d=-c,f=-e[0]+l,p=-e[1];return Me(this.tempTransform,h,u,c,d,-n,f,p)},t.prototype.getDataAtPixel=function(e,r,n){var a=At(this.inversePixelTransform,e.slice()),s=this.context,o=this.getLayer(),l=o.getExtent();if(l){var h=At(r.pixelToCoordinateTransform,e.slice());if(!Cr(l,h))return null}var u=Math.round(a[0]),c=Math.round(a[1]),d=this.pixelContext_;if(!d){var f=document.createElement("canvas");f.width=1,f.height=1,d=f.getContext("2d"),this.pixelContext_=d}d.clearRect(0,0,1,1);var p;try{d.drawImage(s.canvas,u,c,1,1,0,0,1,1),p=d.getImageData(0,0,1,1).data}catch(m){return m.name==="SecurityError"?(this.pixelContext_=null,new Uint8Array):p}return p[3]===0?null:p},t.prototype.disposeInternal=function(){delete this.frameState,i.prototype.disposeInternal.call(this)},t}(vC);const ml=TC;var rp=.5,he=!0,Wa={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1},np={imageSmoothingEnabled:!0,msImageSmoothingEnabled:!0},MC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),IC=function(i){MC(t,i);function t(e){var r=i.call(this,e)||this;return r.image_=null,r}return t.prototype.getImage=function(){return this.image_?this.image_.getImage():null},t.prototype.prepareFrame=function(e){var r=e.layerStatesArray[e.layerIndex],n=e.pixelRatio,a=e.viewState,s=a.resolution,o=this.getLayer().getSource(),l=e.viewHints,h=e.extent;if(r.extent!==void 0&&(h=or(h,ke(r.extent,a.projection))),!l[Vt.ANIMATING]&&!l[Vt.INTERACTING]&&!Jo(h))if(o){var u=a.projection;if(!he){var c=o.getProjection();c&&(u=c)}var d=o.getImage(h,s,n,u);d&&this.loadImage(d)?this.image_=d:this.image_=null}else this.image_=null;return!!this.image_},t.prototype.getData=function(e){var r=this.frameState;if(!r)return null;var n=this.getLayer(),a=At(r.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!Cr(s,a))return null;var o=this.image_.getExtent(),l=this.image_.getImage(),h=lt(o),u=Math.floor(l.width*((a[0]-o[0])/h));if(u<0||u>=l.width)return null;var c=Rt(o),d=Math.floor(l.height*((o[3]-a[1])/c));return d<0||d>=l.height?null:this.getImageData(l,u,d)},t.prototype.renderFrame=function(e,r){var n=this.image_,a=n.getExtent(),s=n.getResolution(),o=n.getPixelRatio(),l=e.layerStatesArray[e.layerIndex],h=e.pixelRatio,u=e.viewState,c=u.center,d=u.resolution,f=e.size,p=h*s/(d*o),m=Math.round(f[0]*h),v=Math.round(f[1]*h),_=u.rotation;if(_){var g=Math.round(Math.sqrt(m*m+v*v));m=g,v=g}Me(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/h,1/h,_,-m/2,-v/2),ll(this.inversePixelTransform,this.pixelTransform);var y=hl(this.pixelTransform);this.useContainer(r,y,l.opacity,this.getBackground(e));var b=this.context,x=b.canvas;x.width!=m||x.height!=v?(x.width=m,x.height=v):this.containerReused||b.clearRect(0,0,m,v);var w=!1,C=!0;if(l.extent){var A=ke(l.extent,u.projection);C=Lt(A,e.extent),w=C&&!ei(A,e.extent),w&&this.clipUnrotated(b,e,A)}var T=n.getImage(),R=Me(this.tempTransform,m/2,v/2,p,p,0,o*(a[0]-c[0])/s,o*(c[1]-a[3])/s);this.renderedResolution=s*h/o;var L=T.width*R[0],F=T.height*R[3];if(this.getLayer().getSource().getInterpolate()||ht(b,Wa),this.preRender(b,e),C&&L>=.5&&F>=.5){var P=R[4],U=R[5],N=l.opacity,z=void 0;N!==1&&(z=b.globalAlpha,b.globalAlpha=N),b.drawImage(T,0,0,+T.width,+T.height,Math.round(P),Math.round(U),Math.round(L),Math.round(F)),N!==1&&(b.globalAlpha=z)}return this.postRender(b,e),w&&b.restore(),ht(b,np),y!==x.style.transform&&(x.style.transform=y),this.container},t}(ml);const OC=IC;var RC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),DC=function(i){RC(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new OC(this)},t.prototype.getData=function(e){return i.prototype.getData.call(this,e)},t}(fC);const kC=DC,ha={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};var PC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),LC=function(i){PC(t,i);function t(e){var r=this,n=e||{},a=ht({},n);return delete a.preload,delete a.useInterimTilesOnError,r=i.call(this,a)||this,r.on,r.once,r.un,r.setPreload(n.preload!==void 0?n.preload:0),r.setUseInterimTilesOnError(n.useInterimTilesOnError!==void 0?n.useInterimTilesOnError:!0),r}return t.prototype.getPreload=function(){return this.get(ha.PRELOAD)},t.prototype.setPreload=function(e){this.set(ha.PRELOAD,e)},t.prototype.getUseInterimTilesOnError=function(){return this.get(ha.USE_INTERIM_TILES_ON_ERROR)},t.prototype.setUseInterimTilesOnError=function(e){this.set(ha.USE_INTERIM_TILES_ON_ERROR,e)},t.prototype.getData=function(e){return i.prototype.getData.call(this,e)},t}(pl);const FC=LC,Y={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var NC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),BC=function(i){NC(t,i);function t(e,r,n){var a=i.call(this)||this,s=n||{};return a.tileCoord=e,a.state=r,a.interimTile=null,a.key="",a.transition_=s.transition===void 0?250:s.transition,a.transitionStarts_={},a.interpolate=!!s.interpolate,a}return t.prototype.changed=function(){this.dispatchEvent(Mt.CHANGE)},t.prototype.release=function(){},t.prototype.getKey=function(){return this.key+"/"+this.tileCoord},t.prototype.getInterimTile=function(){if(!this.interimTile)return this;var e=this.interimTile;do{if(e.getState()==Y.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this},t.prototype.refreshInterimChain=function(){if(!!this.interimTile){var e=this.interimTile,r=this;do{if(e.getState()==Y.LOADED){e.interimTile=null;break}else e.getState()==Y.LOADING?r=e:e.getState()==Y.IDLE?r.interimTile=e.interimTile:r=e;e=r.interimTile}while(e)}},t.prototype.getTileCoord=function(){return this.tileCoord},t.prototype.getState=function(){return this.state},t.prototype.setState=function(e){if(this.state!==Y.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()},t.prototype.load=function(){Q()},t.prototype.getAlpha=function(e,r){if(!this.transition_)return 1;var n=this.transitionStarts_[e];if(!n)n=r,this.transitionStarts_[e]=n;else if(n===-1)return 1;var a=r-n+1e3/60;return a>=this.transition_?1:qf(a/this.transition_)},t.prototype.inTransition=function(e){return this.transition_?this.transitionStarts_[e]!==-1:!1},t.prototype.endTransition=function(e){this.transition_&&(this.transitionStarts_[e]=-1)},t}($n);const ap=BC;var zC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),$C=function(i){zC(t,i);function t(e,r,n,a){var s=i.call(this)||this;return s.extent=e,s.pixelRatio_=n,s.resolution=r,s.state=a,s}return t.prototype.changed=function(){this.dispatchEvent(Mt.CHANGE)},t.prototype.getExtent=function(){return this.extent},t.prototype.getImage=function(){return Q()},t.prototype.getPixelRatio=function(){return this.pixelRatio_},t.prototype.getResolution=function(){return this.resolution},t.prototype.getState=function(){return this.state},t.prototype.load=function(){Q()},t}($n);const sp=$C;var GC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),UC=function(i){GC(t,i);function t(e,r,n,a,s,o){var l=i.call(this,e,r,n,Z.IDLE)||this;return l.src_=a,l.image_=new Image,s!==null&&(l.image_.crossOrigin=s),l.unlisten_=null,l.state=Z.IDLE,l.imageLoadFunction_=o,l}return t.prototype.getImage=function(){return this.image_},t.prototype.handleImageError_=function(){this.state=Z.ERROR,this.unlistenImage_(),this.changed()},t.prototype.handleImageLoad_=function(){this.resolution===void 0&&(this.resolution=Rt(this.extent)/this.image_.height),this.state=Z.LOADED,this.unlistenImage_(),this.changed()},t.prototype.load=function(){(this.state==Z.IDLE||this.state==Z.ERROR)&&(this.state=Z.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=vl(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.setImage=function(e){this.image_=e,this.resolution=Rt(this.extent)/this.image_.height},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(sp);function vl(i,t,e){var r=i,n=!0,a=!1,s=!1,o=[Ua(r,Mt.LOAD,function(){s=!0,a||t()})];return r.src&&hA?(a=!0,r.decode().then(function(){n&&t()}).catch(function(l){n&&(s?t():e())})):o.push(Ua(r,Mt.ERROR,e)),function(){n=!1,o.forEach(ie)}}const VC=UC;var YC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),WC=function(i){YC(t,i);function t(e,r,n,a,s,o){var l=i.call(this,e,r,o)||this;return l.crossOrigin_=a,l.src_=n,l.key=n,l.image_=new Image,a!==null&&(l.image_.crossOrigin=a),l.unlisten_=null,l.tileLoadFunction_=s,l}return t.prototype.getImage=function(){return this.image_},t.prototype.setImage=function(e){this.image_=e,this.state=Y.LOADED,this.unlistenImage_(),this.changed()},t.prototype.handleImageError_=function(){this.state=Y.ERROR,this.unlistenImage_(),this.image_=HC(),this.changed()},t.prototype.handleImageLoad_=function(){var e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=Y.LOADED:this.state=Y.EMPTY,this.unlistenImage_(),this.changed()},t.prototype.load=function(){this.state==Y.ERROR&&(this.state=Y.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==Y.IDLE&&(this.state=Y.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=vl(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(ap);function HC(){var i=se(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const op=WC;var jC=10,Mu=.25,qC=function(){function i(t,e,r,n,a,s){this.sourceProj_=t,this.targetProj_=e;var o={},l=dn(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){var b=y[0]+"/"+y[1];return o[b]||(o[b]=l(y)),o[b]},this.maxSourceExtent_=n,this.errorThresholdSquared_=a*a,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!n&&!!this.sourceProj_.getExtent()&&lt(n)==lt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?lt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?lt(this.targetProj_.getExtent()):null;var h=Di(r),u=fs(r),c=ds(r),d=cs(r),f=this.transformInv_(h),p=this.transformInv_(u),m=this.transformInv_(c),v=this.transformInv_(d),_=jC+(s?Math.max(0,Math.ceil(Iy(_o(r)/(s*s*256*256)))):0);if(this.addQuad_(h,u,c,d,f,p,m,v,_),this.wrapsXInSource_){var g=1/0;this.triangles_.forEach(function(y,b,x){g=Math.min(g,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(function(y){if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-g>this.sourceWorldWidth_/2){var b=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];b[0][0]-g>this.sourceWorldWidth_/2&&(b[0][0]-=this.sourceWorldWidth_),b[1][0]-g>this.sourceWorldWidth_/2&&(b[1][0]-=this.sourceWorldWidth_),b[2][0]-g>this.sourceWorldWidth_/2&&(b[2][0]-=this.sourceWorldWidth_);var x=Math.min(b[0][0],b[1][0],b[2][0]),w=Math.max(b[0][0],b[1][0],b[2][0]);w-x<this.sourceWorldWidth_/2&&(y.source=b)}}.bind(this))}o={}}return i.prototype.addTriangle_=function(t,e,r,n,a,s){this.triangles_.push({source:[n,a,s],target:[t,e,r]})},i.prototype.addQuad_=function(t,e,r,n,a,s,o,l,h){var u=Wh([a,s,o,l]),c=this.sourceWorldWidth_?lt(u)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&c>.5&&c<1,p=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var m=Wh([t,e,r,n]),v=lt(m)/this.targetWorldWidth_;p=v>Mu||p}!f&&this.sourceProj_.isGlobal()&&c&&(p=c>Mu||p)}if(!(!p&&this.maxSourceExtent_&&isFinite(u[0])&&isFinite(u[1])&&isFinite(u[2])&&isFinite(u[3])&&!Lt(u,this.maxSourceExtent_))){var _=0;if(!p&&(!isFinite(a[0])||!isFinite(a[1])||!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)p=!0;else if(_=(!isFinite(a[0])||!isFinite(a[1])?8:0)+(!isFinite(s[0])||!isFinite(s[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(h>0){if(!p){var g=[(t[0]+r[0])/2,(t[1]+r[1])/2],y=this.transformInv_(g),b=void 0;if(f){var x=(Mi(a[0],d)+Mi(o[0],d))/2;b=x-Mi(y[0],d)}else b=(a[0]+o[0])/2-y[0];var w=(a[1]+o[1])/2-y[1],C=b*b+w*w;p=C>this.errorThresholdSquared_}if(p){if(Math.abs(t[0]-r[0])<=Math.abs(t[1]-r[1])){var A=[(e[0]+r[0])/2,(e[1]+r[1])/2],T=this.transformInv_(A),R=[(n[0]+t[0])/2,(n[1]+t[1])/2],L=this.transformInv_(R);this.addQuad_(t,e,A,R,a,s,T,L,h-1),this.addQuad_(R,A,r,n,L,T,o,l,h-1)}else{var F=[(t[0]+e[0])/2,(t[1]+e[1])/2],P=this.transformInv_(F),U=[(r[0]+n[0])/2,(r[1]+n[1])/2],N=this.transformInv_(U);this.addQuad_(t,F,U,n,a,P,N,l,h-1),this.addQuad_(F,e,r,U,P,s,o,N,h-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(_&11)==0&&this.addTriangle_(t,r,n,a,o,l),(_&14)==0&&this.addTriangle_(t,r,e,a,o,s),_&&((_&13)==0&&this.addTriangle_(e,n,t,s,l,a),(_&7)==0&&this.addTriangle_(e,n,r,s,l,o))}},i.prototype.calculateSourceExtent=function(){var t=ne();return this.triangles_.forEach(function(e,r,n){var a=e.source;sn(t,a[0]),sn(t,a[1]),sn(t,a[2])}),t},i.prototype.getTriangles=function(){return this.triangles_},i}();const lp=qC;var Gs;function Iu(i,t,e,r,n){i.beginPath(),i.moveTo(0,0),i.lineTo(t,e),i.lineTo(r,n),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(t,r)+1,Math.max(e,n)),i.restore()}function Us(i,t){return Math.abs(i[t*4]-210)>2||Math.abs(i[t*4+3]-.75*255)>2}function XC(){if(Gs===void 0){var i=document.createElement("canvas").getContext("2d");i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",Iu(i,4,5,4,0),Iu(i,4,5,0,5);var t=i.getImageData(0,0,3,3).data;Gs=Us(t,0)||Us(t,4)||Us(t,8)}return Gs}function _n(i,t,e,r){var n=Pn(e,t,i),a=jh(t,r,e),s=t.getMetersPerUnit();s!==void 0&&(a*=s);var o=i.getMetersPerUnit();o!==void 0&&(a/=o);var l=i.getExtent();if(!l||Cr(l,n)){var h=jh(i,a,n)/a;isFinite(h)&&h>0&&(a/=h)}return a}function ZC(i,t,e,r){var n=ui(e),a=_n(i,t,n,r);return(!isFinite(a)||a<=0)&&cf(e,function(s){return a=_n(i,t,s,r),isFinite(a)&&a>0}),a}function hp(i,t,e,r,n,a,s,o,l,h,u,c){var d=se(Math.round(e*i),Math.round(e*t));if(c||ht(d,Wa),l.length===0)return d.canvas;d.scale(e,e);function f(b){return Math.round(b*e)/e}d.globalCompositeOperation="lighter";var p=ne();l.forEach(function(b,x,w){Ky(p,b.extent)});var m=lt(p),v=Rt(p),_=se(Math.round(e*m/r),Math.round(e*v/r));c||ht(_,Wa);var g=e/r;l.forEach(function(b,x,w){var C=b.extent[0]-p[0],A=-(b.extent[3]-p[3]),T=lt(b.extent),R=Rt(b.extent);b.image.width>0&&b.image.height>0&&_.drawImage(b.image,h,h,b.image.width-2*h,b.image.height-2*h,C*g,A*g,T*g,R*g)});var y=Di(s);return o.getTriangles().forEach(function(b,x,w){var C=b.source,A=b.target,T=C[0][0],R=C[0][1],L=C[1][0],F=C[1][1],P=C[2][0],U=C[2][1],N=f((A[0][0]-y[0])/a),z=f(-(A[0][1]-y[1])/a),k=f((A[1][0]-y[0])/a),V=f(-(A[1][1]-y[1])/a),j=f((A[2][0]-y[0])/a),K=f(-(A[2][1]-y[1])/a),ut=T,S=R;T=0,R=0,L-=ut,F-=S,P-=ut,U-=S;var pt=[[L,F,0,0,k-N],[P,U,0,0,j-N],[0,0,L,F,V-z],[0,0,P,U,K-z]],W=Ry(pt);if(!!W){if(d.save(),d.beginPath(),XC()||!c){d.moveTo(k,V);for(var mt=4,kt=N-k,jt=z-V,zt=0;zt<mt;zt++)d.lineTo(k+f((zt+1)*kt/mt),V+f(zt*jt/(mt-1))),zt!=mt-1&&d.lineTo(k+f((zt+1)*kt/mt),V+f((zt+1)*jt/(mt-1)));d.lineTo(j,K)}else d.moveTo(k,V),d.lineTo(N,z),d.lineTo(j,K);d.clip(),d.transform(W[0],W[2],W[1],W[3],N,z),d.translate(p[0]-ut,p[3]-S),d.scale(r/e,-r/e),d.drawImage(_.canvas,0,0),d.restore()}}),u&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,o.getTriangles().forEach(function(b,x,w){var C=b.target,A=(C[0][0]-y[0])/a,T=-(C[0][1]-y[1])/a,R=(C[1][0]-y[0])/a,L=-(C[1][1]-y[1])/a,F=(C[2][0]-y[0])/a,P=-(C[2][1]-y[1])/a;d.beginPath(),d.moveTo(R,L),d.lineTo(A,T),d.lineTo(F,P),d.closePath(),d.stroke()}),d.restore()),d.canvas}var KC=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),QC=function(i){KC(t,i);function t(e,r,n,a,s,o,l,h,u,c,d,f){var p=i.call(this,s,Y.IDLE,{interpolate:!!f})||this;p.renderEdges_=d!==void 0?d:!1,p.pixelRatio_=l,p.gutter_=h,p.canvas_=null,p.sourceTileGrid_=r,p.targetTileGrid_=a,p.wrappedTileCoord_=o||s,p.sourceTiles_=[],p.sourcesListenerKeys_=null,p.sourceZ_=0;var m=a.getTileCoordExtent(p.wrappedTileCoord_),v=p.targetTileGrid_.getExtent(),_=p.sourceTileGrid_.getExtent(),g=v?or(m,v):m;if(_o(g)===0)return p.state=Y.EMPTY,p;var y=e.getExtent();y&&(_?_=or(_,y):_=y);var b=a.getResolution(p.wrappedTileCoord_[0]),x=ZC(e,n,g,b);if(!isFinite(x)||x<=0)return p.state=Y.EMPTY,p;var w=c!==void 0?c:rp;if(p.triangulation_=new lp(e,n,g,_,x*w,b),p.triangulation_.getTriangles().length===0)return p.state=Y.EMPTY,p;p.sourceZ_=r.getZForResolution(x);var C=p.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(C[1]=bt(C[1],_[1],_[3]),C[3]=bt(C[3],_[1],_[3])):C=or(C,_)),!_o(C))p.state=Y.EMPTY;else{for(var A=r.getTileRangeForExtentAndZ(C,p.sourceZ_),T=A.minX;T<=A.maxX;T++)for(var R=A.minY;R<=A.maxY;R++){var L=u(p.sourceZ_,T,R,l);L&&p.sourceTiles_.push(L)}p.sourceTiles_.length===0&&(p.state=Y.EMPTY)}return p}return t.prototype.getImage=function(){return this.canvas_},t.prototype.reproject_=function(){var e=[];if(this.sourceTiles_.forEach(function(u,c,d){u&&u.getState()==Y.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(u.tileCoord),image:u.getImage()})}.bind(this)),this.sourceTiles_.length=0,e.length===0)this.state=Y.ERROR;else{var r=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(r),a=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(r),l=this.sourceTileGrid_.getResolution(this.sourceZ_),h=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=hp(a,s,this.pixelRatio_,l,this.sourceTileGrid_.getExtent(),o,h,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=Y.LOADED}this.changed()},t.prototype.load=function(){if(this.state==Y.IDLE){this.state=Y.LOADING,this.changed();var e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(r,n,a){var s=r.getState();if(s==Y.IDLE||s==Y.LOADING){e++;var o=pe(r,Mt.CHANGE,function(l){var h=r.getState();(h==Y.LOADED||h==Y.ERROR||h==Y.EMPTY)&&(ie(o),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(o)}}.bind(this)),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(r,n,a){var s=r.getState();s==Y.IDLE&&r.load()})}},t.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(ie),this.sourcesListenerKeys_=null},t}(ap);const up=QC;var cp=function(){function i(t,e,r,n){this.minX=t,this.maxX=e,this.minY=r,this.maxY=n}return i.prototype.contains=function(t){return this.containsXY(t[1],t[2])},i.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},i.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},i.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},i.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},i.prototype.getHeight=function(){return this.maxY-this.minY+1},i.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},i.prototype.getWidth=function(){return this.maxX-this.minX+1},i.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},i}();function Yi(i,t,e,r,n){return n!==void 0?(n.minX=i,n.maxX=t,n.minY=e,n.maxY=r,n):new cp(i,t,e,r)}const dp=cp;var JC=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),Ou=["style","variant","weight","size","lineHeight","family"],fp=function(i){var t=i.match(JC);if(!t)return null;for(var e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"},r=0,n=Ou.length;r<n;++r){var a=t[r+1];a!==void 0&&(e[Ou[r]]=a)}return e.families=e.family.split(/,\s?/),e};function pp(i){return i===1?"":String(Math.round(i*100)/100)}function Ru(i,t,e){return e===void 0&&(e=[0,0]),e[0]=i[0]+2*t,e[1]=i[1]+2*t,e}function mp(i,t,e){return e===void 0&&(e=[0,0]),e[0]=i[0]*t+.5|0,e[1]=i[1]*t+.5|0,e}function Zt(i,t){return Array.isArray(i)?i:(t===void 0?t=[i,i]:(t[0]=i,t[1]=i),t)}var tE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),eE=function(i){tE(t,i);function t(e){var r=i.call(this,e)||this;return r.extentChanged=!0,r.renderedExtent_=null,r.renderedPixelRatio,r.renderedProjection=null,r.renderedRevision,r.renderedTiles=[],r.newTiles_=!1,r.tmpExtent=ne(),r.tmpTileRange_=new dp(0,0,0,0),r}return t.prototype.isDrawableTile=function(e){var r=this.getLayer(),n=e.getState(),a=r.getUseInterimTilesOnError();return n==Y.LOADED||n==Y.EMPTY||n==Y.ERROR&&!a},t.prototype.getTile=function(e,r,n,a){var s=a.pixelRatio,o=a.viewState.projection,l=this.getLayer(),h=l.getSource(),u=h.getTile(e,r,n,s,o);return u.getState()==Y.ERROR&&(l.getUseInterimTilesOnError()?l.getPreload()>0&&(this.newTiles_=!0):u.setState(Y.LOADED)),this.isDrawableTile(u)||(u=u.getInterimTile()),u},t.prototype.getData=function(e){var r=this.frameState;if(!r)return null;var n=this.getLayer(),a=At(r.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!Cr(s,a))return null;for(var o=r.pixelRatio,l=r.viewState.projection,h=r.viewState,u=n.getRenderSource(),c=u.getTileGridForProjection(h.projection),d=u.getTilePixelRatio(r.pixelRatio),f=c.getZForResolution(h.resolution);f>=c.getMinZoom();--f){var p=c.getTileCoordForCoordAndZ(a,f),m=u.getTile(f,p[1],p[2],o,l);if(!(m instanceof op||m instanceof up))return null;if(m.getState()===Y.LOADED){var v=c.getOrigin(f),_=Zt(c.getTileSize(f)),g=c.getResolution(f),y=Math.floor(d*((a[0]-v[0])/g-p[1]*_[0])),b=Math.floor(d*((v[1]-a[1])/g-p[2]*_[1]));return this.getImageData(m.getImage(),y,b)}}return null},t.prototype.loadedTileCallback=function(e,r,n){return this.isDrawableTile(n)?i.prototype.loadedTileCallback.call(this,e,r,n):!1},t.prototype.prepareFrame=function(e){return!!this.getLayer().getSource()},t.prototype.renderFrame=function(e,r){var n=e.layerStatesArray[e.layerIndex],a=e.viewState,s=a.projection,o=a.resolution,l=a.center,h=a.rotation,u=e.pixelRatio,c=this.getLayer(),d=c.getSource(),f=d.getRevision(),p=d.getTileGridForProjection(s),m=p.getZForResolution(o,d.zDirection),v=p.getResolution(m),_=e.extent,g=n.extent&&ke(n.extent,s);g&&(_=or(_,ke(n.extent,s)));var y=d.getTilePixelRatio(u),b=Math.round(e.size[0]*y),x=Math.round(e.size[1]*y);if(h){var w=Math.round(Math.sqrt(b*b+x*x));b=w,x=w}var C=v*b/2/y,A=v*x/2/y,T=[l[0]-C,l[1]-A,l[0]+C,l[1]+A],R=p.getTileRangeForExtentAndZ(_,m),L={};L[m]={};var F=this.createLoadedTileFinder(d,s,L),P=this.tmpExtent,U=this.tmpTileRange_;this.newTiles_=!1;for(var N=R.minX;N<=R.maxX;++N)for(var z=R.minY;z<=R.maxY;++z){var k=this.getTile(m,N,z,e);if(this.isDrawableTile(k)){var V=ot(this);if(k.getState()==Y.LOADED){L[m][k.tileCoord.toString()]=k;var j=k.inTransition(V);!this.newTiles_&&(j||this.renderedTiles.indexOf(k)===-1)&&(this.newTiles_=!0)}if(k.getAlpha(V,e.time)===1)continue}var K=p.getTileCoordChildTileRange(k.tileCoord,U,P),ut=!1;K&&(ut=F(m+1,K)),ut||p.forEachTileCoordParentTileRange(k.tileCoord,F,U,P)}var S=v/o;Me(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/y,1/y,h,-b/2,-x/2);var pt=hl(this.pixelTransform);this.useContainer(r,pt,n.opacity,this.getBackground(e));var W=this.context,mt=W.canvas;ll(this.inversePixelTransform,this.pixelTransform),Me(this.tempTransform,b/2,x/2,S,S,0,-b/2,-x/2),mt.width!=b||mt.height!=x?(mt.width=b,mt.height=x):this.containerReused||W.clearRect(0,0,b,x),g&&this.clipUnrotated(W,e,g),d.getInterpolate()||ht(W,Wa),this.preRender(W,e),this.renderedTiles.length=0;var kt=Object.keys(L).map(Number);kt.sort(mr);var jt,zt,qt;n.opacity===1&&(!this.containerReused||d.getOpaque(e.viewState.projection))?kt=kt.reverse():(jt=[],zt=[]);for(var Li=kt.length-1;Li>=0;--Li){var me=kt[Li],Vn=d.getTilePixelSize(me,u,s),Yn=p.getResolution(me),$e=Yn/v,Fi=Vn[0]*$e*S,Wn=Vn[1]*$e*S,Tr=p.getTileCoordForCoordAndZ(Di(T),me),Hn=p.getTileCoordExtent(Tr),fi=At(this.tempTransform,[y*(Hn[0]-T[0])/v,y*(T[3]-Hn[3])/v]),Mr=y*d.getGutterForProjection(s),jn=L[me];for(var Ni in jn){var k=jn[Ni],Ge=k.tileCoord,Bi=Tr[1]-Ge[1],ws=Math.round(fi[0]-(Bi-1)*Fi),qn=Tr[2]-Ge[2],Ir=Math.round(fi[1]-(qn-1)*Wn),N=Math.round(fi[0]-Bi*Fi),z=Math.round(fi[1]-qn*Wn),Ie=ws-N,ve=Ir-z,pi=m===me,j=pi&&k.getAlpha(ot(this),e.time)!==1,Or=!1;if(!j)if(jt){qt=[N,z,N+Ie,z,N+Ie,z+ve,N,z+ve];for(var $t=0,Xn=jt.length;$t<Xn;++$t)if(m!==me&&me<zt[$t]){var St=jt[$t];Lt([N,z,N+Ie,z+ve],[St[0],St[3],St[4],St[7]])&&(Or||(W.save(),Or=!0),W.beginPath(),W.moveTo(qt[0],qt[1]),W.lineTo(qt[2],qt[3]),W.lineTo(qt[4],qt[5]),W.lineTo(qt[6],qt[7]),W.moveTo(St[6],St[7]),W.lineTo(St[4],St[5]),W.lineTo(St[2],St[3]),W.lineTo(St[0],St[1]),W.clip())}jt.push(qt),zt.push(me)}else W.clearRect(N,z,Ie,ve);this.drawTileImage(k,e,N,z,Ie,ve,Mr,pi),jt&&!j?(Or&&W.restore(),this.renderedTiles.unshift(k)):this.renderedTiles.push(k),this.updateUsedTiles(e.usedTiles,d,k)}}this.renderedRevision=f,this.renderedResolution=v,this.extentChanged=!this.renderedExtent_||!us(this.renderedExtent_,T),this.renderedExtent_=T,this.renderedPixelRatio=u,this.renderedProjection=s,this.manageTilePyramid(e,d,p,u,s,_,m,c.getPreload()),this.scheduleExpireCache(e,d),this.postRender(W,e),n.extent&&W.restore(),ht(W,np),pt!==mt.style.transform&&(mt.style.transform=pt);var zi=pp(n.opacity),mi=this.container;return zi!==mi.style.opacity&&(mi.style.opacity=zi),this.container},t.prototype.drawTileImage=function(e,r,n,a,s,o,l,h){var u=this.getTileImage(e);if(!!u){var c=ot(this),d=h?e.getAlpha(c,r.time):1,f=d!==this.context.globalAlpha;f&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(u,l,l,u.width-2*l,u.height-2*l,n,a,s,o),f&&this.context.restore(),d!==1?r.animate=!0:h&&e.endTransition(c)}},t.prototype.getImage=function(){var e=this.context;return e?e.canvas:null},t.prototype.getTileImage=function(e){return e.getImage()},t.prototype.scheduleExpireCache=function(e,r){if(r.canExpireCache()){var n=function(a,s,o){var l=ot(a);l in o.usedTiles&&a.expireCache(o.viewState.projection,o.usedTiles[l])}.bind(null,r);e.postRenderFunctions.push(n)}},t.prototype.updateUsedTiles=function(e,r,n){var a=ot(r);a in e||(e[a]={}),e[a][n.getKey()]=!0},t.prototype.manageTilePyramid=function(e,r,n,a,s,o,l,h,u){var c=ot(r);c in e.wantedTiles||(e.wantedTiles[c]={});var d=e.wantedTiles[c],f=e.tileQueue,p=n.getMinZoom(),m=0,v,_,g,y,b,x;for(x=p;x<=l;++x)for(_=n.getTileRangeForExtentAndZ(o,x,_),g=n.getResolution(x),y=_.minX;y<=_.maxX;++y)for(b=_.minY;b<=_.maxY;++b)l-x<=h?(++m,v=r.getTile(x,y,b,a,s),v.getState()==Y.IDLE&&(d[v.getKey()]=!0,f.isKeyQueued(v.getKey())||f.enqueue([v,c,n.getTileCoordCenter(v.tileCoord),g])),u!==void 0&&u(v)):r.useTile(x,y,b,s);r.updateCacheSize(m,s)},t}(ml);const iE=eE;var rE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),nE=function(i){rE(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new iE(this)},t}(FC);const aE=nE;function sE(i,t,e,r,n){vp(i,t,e||0,r||i.length-1,n||oE)}function vp(i,t,e,r,n){for(;r>e;){if(r-e>600){var a=r-e+1,s=t-e+1,o=Math.log(a),l=.5*Math.exp(2*o/3),h=.5*Math.sqrt(o*l*(a-l)/a)*(s-a/2<0?-1:1),u=Math.max(e,Math.floor(t-s*l/a+h)),c=Math.min(r,Math.floor(t+(a-s)*l/a+h));vp(i,t,u,c,n)}var d=i[t],f=e,p=r;for(Vr(i,e,t),n(i[r],d)>0&&Vr(i,e,r);f<p;){for(Vr(i,f,p),f++,p--;n(i[f],d)<0;)f++;for(;n(i[p],d)>0;)p--}n(i[e],d)===0?Vr(i,e,p):(p++,Vr(i,p,r)),p<=t&&(e=p+1),t<=p&&(r=p-1)}}function Vr(i,t,e){var r=i[t];i[t]=i[e],i[e]=r}function oE(i,t){return i<t?-1:i>t?1:0}class _p{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data;const r=[];if(!ca(t,e))return r;const n=this.toBBox,a=[];for(;e;){for(let s=0;s<e.children.length;s++){const o=e.children[s],l=e.leaf?n(o):o;ca(t,l)&&(e.leaf?r.push(o):Ys(t,l)?this._all(o,r):a.push(o))}e=a.pop()}return r}collides(t){let e=this.data;if(!ca(t,e))return!1;const r=[];for(;e;){for(let n=0;n<e.children.length;n++){const a=e.children[n],s=e.leaf?this.toBBox(a):a;if(ca(t,s)){if(e.leaf||Ys(t,s))return!0;r.push(a)}}e=r.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let r=0;r<t.length;r++)this.insert(t[r]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const r=this.data;this.data=e,e=r}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=qi([]),this}remove(t,e){if(!t)return this;let r=this.data;const n=this.toBBox(t),a=[],s=[];let o,l,h;for(;r||a.length;){if(r||(r=a.pop(),l=a[a.length-1],o=s.pop(),h=!0),r.leaf){const u=lE(t,r.children,e);if(u!==-1)return r.children.splice(u,1),a.push(r),this._condense(a),this}!h&&!r.leaf&&Ys(r,n)?(a.push(r),s.push(o),o=0,l=r,r=r.children[0]):l?(o++,r=l.children[o],h=!1):r=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){const r=[];for(;t;)t.leaf?e.push(...t.children):r.push(...t.children),t=r.pop();return e}_build(t,e,r,n){const a=r-e+1;let s=this._maxEntries,o;if(a<=s)return o=qi(t.slice(e,r+1)),Wi(o,this.toBBox),o;n||(n=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,n-1))),o=qi([]),o.leaf=!1,o.height=n;const l=Math.ceil(a/s),h=l*Math.ceil(Math.sqrt(s));Du(t,e,r,h,this.compareMinX);for(let u=e;u<=r;u+=h){const c=Math.min(u+h-1,r);Du(t,u,c,l,this.compareMinY);for(let d=u;d<=c;d+=l){const f=Math.min(d+l-1,c);o.children.push(this._build(t,d,f,n-1))}}return Wi(o,this.toBBox),o}_chooseSubtree(t,e,r,n){for(;n.push(e),!(e.leaf||n.length-1===r);){let a=1/0,s=1/0,o;for(let l=0;l<e.children.length;l++){const h=e.children[l],u=Vs(h),c=cE(t,h)-u;c<s?(s=c,a=u<a?u:a,o=h):c===s&&u<a&&(a=u,o=h)}e=o||e.children[0]}return e}_insert(t,e,r){const n=r?t:this.toBBox(t),a=[],s=this._chooseSubtree(n,this.data,e,a);for(s.children.push(t),Jr(s,n);e>=0&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(n,a,e)}_split(t,e){const r=t[e],n=r.children.length,a=this._minEntries;this._chooseSplitAxis(r,a,n);const s=this._chooseSplitIndex(r,a,n),o=qi(r.children.splice(s,r.children.length-s));o.height=r.height,o.leaf=r.leaf,Wi(r,this.toBBox),Wi(o,this.toBBox),e?t[e-1].children.push(o):this._splitRoot(r,o)}_splitRoot(t,e){this.data=qi([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Wi(this.data,this.toBBox)}_chooseSplitIndex(t,e,r){let n,a=1/0,s=1/0;for(let o=e;o<=r-e;o++){const l=Qr(t,0,o,this.toBBox),h=Qr(t,o,r,this.toBBox),u=dE(l,h),c=Vs(l)+Vs(h);u<a?(a=u,n=o,s=c<s?c:s):u===a&&c<s&&(s=c,n=o)}return n||r-e}_chooseSplitAxis(t,e,r){const n=t.leaf?this.compareMinX:hE,a=t.leaf?this.compareMinY:uE,s=this._allDistMargin(t,e,r,n),o=this._allDistMargin(t,e,r,a);s<o&&t.children.sort(n)}_allDistMargin(t,e,r,n){t.children.sort(n);const a=this.toBBox,s=Qr(t,0,e,a),o=Qr(t,r-e,r,a);let l=ua(s)+ua(o);for(let h=e;h<r-e;h++){const u=t.children[h];Jr(s,t.leaf?a(u):u),l+=ua(s)}for(let h=r-e-1;h>=e;h--){const u=t.children[h];Jr(o,t.leaf?a(u):u),l+=ua(o)}return l}_adjustParentBBoxes(t,e,r){for(let n=r;n>=0;n--)Jr(e[n],t)}_condense(t){for(let e=t.length-1,r;e>=0;e--)t[e].children.length===0?e>0?(r=t[e-1].children,r.splice(r.indexOf(t[e]),1)):this.clear():Wi(t[e],this.toBBox)}}function lE(i,t,e){if(!e)return t.indexOf(i);for(let r=0;r<t.length;r++)if(e(i,t[r]))return r;return-1}function Wi(i,t){Qr(i,0,i.children.length,t,i)}function Qr(i,t,e,r,n){n||(n=qi(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let a=t;a<e;a++){const s=i.children[a];Jr(n,i.leaf?r(s):s)}return n}function Jr(i,t){return i.minX=Math.min(i.minX,t.minX),i.minY=Math.min(i.minY,t.minY),i.maxX=Math.max(i.maxX,t.maxX),i.maxY=Math.max(i.maxY,t.maxY),i}function hE(i,t){return i.minX-t.minX}function uE(i,t){return i.minY-t.minY}function Vs(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function ua(i){return i.maxX-i.minX+(i.maxY-i.minY)}function cE(i,t){return(Math.max(t.maxX,i.maxX)-Math.min(t.minX,i.minX))*(Math.max(t.maxY,i.maxY)-Math.min(t.minY,i.minY))}function dE(i,t){const e=Math.max(i.minX,t.minX),r=Math.max(i.minY,t.minY),n=Math.min(i.maxX,t.maxX),a=Math.min(i.maxY,t.maxY);return Math.max(0,n-e)*Math.max(0,a-r)}function Ys(i,t){return i.minX<=t.minX&&i.minY<=t.minY&&t.maxX<=i.maxX&&t.maxY<=i.maxY}function ca(i,t){return t.minX<=i.maxX&&t.minY<=i.maxY&&t.maxX>=i.minX&&t.maxY>=i.minY}function qi(i){return{children:i,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Du(i,t,e,r,n){const a=[t,e];for(;a.length;){if(e=a.pop(),t=a.pop(),e-t<=r)continue;const s=t+Math.ceil((e-t)/r/2)*r;sE(i,s,t,e,n),a.push(t,s,s,e)}}var fE=function(){function i(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=Zt(t.scale),this.displacement_=t.displacement}return i.prototype.clone=function(){var t=this.getScale();return new i({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()})},i.prototype.getOpacity=function(){return this.opacity_},i.prototype.getRotateWithView=function(){return this.rotateWithView_},i.prototype.getRotation=function(){return this.rotation_},i.prototype.getScale=function(){return this.scale_},i.prototype.getScaleArray=function(){return this.scaleArray_},i.prototype.getDisplacement=function(){return this.displacement_},i.prototype.getAnchor=function(){return Q()},i.prototype.getImage=function(t){return Q()},i.prototype.getHitDetectionImage=function(){return Q()},i.prototype.getPixelRatio=function(t){return 1},i.prototype.getImageState=function(){return Q()},i.prototype.getImageSize=function(){return Q()},i.prototype.getOrigin=function(){return Q()},i.prototype.getSize=function(){return Q()},i.prototype.setDisplacement=function(t){this.displacement_=t},i.prototype.setOpacity=function(t){this.opacity_=t},i.prototype.setRotateWithView=function(t){this.rotateWithView_=t},i.prototype.setRotation=function(t){this.rotation_=t},i.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Zt(t)},i.prototype.listenImageChange=function(t){Q()},i.prototype.load=function(){Q()},i.prototype.unlistenImageChange=function(t){Q()},i}();const gp=fE;function Ae(i){return Array.isArray(i)?ip(i):i}var yp="10px sans-serif",Fe="#000",Ha="round",gn=[],yn=0,_r="round",bn=10,xn="#000",wn="center",ja="middle",wi=[0,0,0,0],An=1,We=new Pi,pE=new $n;pE.setSize=function(){console.warn("labelCache is deprecated.")};var Xi=null,So,To={},mE=function(){var i=100,t="32px ",e=["monospace","serif"],r=e.length,n="wmytzilWMYTZIL@#/&?$%10\uF013",a,s;function o(h,u,c){for(var d=!0,f=0;f<r;++f){var p=e[f];if(s=qa(h+" "+u+" "+t+p,n),c!=p){var m=qa(h+" "+u+" "+t+c+","+p,n);d=d&&m!=s}}return!!d}function l(){for(var h=!0,u=We.getKeys(),c=0,d=u.length;c<d;++c){var f=u[c];We.get(f)<i&&(o.apply(this,f.split(`
`))?(Ko(To),Xi=null,So=void 0,We.set(f,i)):(We.set(f,We.get(f)+1,!0),h=!1))}h&&(clearInterval(a),a=void 0)}return function(h){var u=fp(h);if(!!u)for(var c=u.families,d=0,f=c.length;d<f;++d){var p=c[d],m=u.style+`
`+u.weight+`
`+p;We.get(m)===void 0&&(We.set(m,i,!0),o(u.style,u.weight,p)||(We.set(m,0,!0),a===void 0&&(a=setInterval(l,32))))}}}(),vE=function(){var i;return function(t){var e=To[t];if(e==null){if(ys){var r=fp(t),n=bp(t,"\u017Dg"),a=isNaN(Number(r.lineHeight))?1.2:Number(r.lineHeight);e=a*(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)}else i||(i=document.createElement("div"),i.innerHTML="M",i.style.minHeight="0",i.style.maxHeight="none",i.style.height="auto",i.style.padding="0",i.style.border="none",i.style.position="absolute",i.style.display="block",i.style.left="-99999px"),i.style.font=t,document.body.appendChild(i),e=i.offsetHeight,document.body.removeChild(i);To[t]=e}return e}}();function bp(i,t){return Xi||(Xi=se(1,1)),i!=So&&(Xi.font=i,So=Xi.font),Xi.measureText(t)}function qa(i,t){return bp(i,t).width}function ku(i,t,e){if(t in e)return e[t];var r=qa(i,t);return e[t]=r,r}function _E(i,t){for(var e=[],r=[],n=[],a=0,s=0,o=0,l=0,h=0,u=t.length;h<=u;h+=2){var c=t[h];if(c===`
`||h===u){a=Math.max(a,s),n.push(s),s=0,o+=l;continue}var d=t[h+1]||i.font,f=qa(d,c);e.push(f),s+=f;var p=vE(d);r.push(p),l=Math.max(l,p)}return{width:a,height:o,widths:e,heights:r,lineWidths:n}}function gE(i,t,e,r,n,a,s,o,l,h,u){i.save(),e!==1&&(i.globalAlpha*=e),t&&i.setTransform.apply(i,t),r.contextInstructions?(i.translate(l,h),i.scale(u[0],u[1]),yE(r,i)):u[0]<0||u[1]<0?(i.translate(l,h),i.scale(u[0],u[1]),i.drawImage(r,n,a,s,o,0,0,s,o)):i.drawImage(r,n,a,s,o,l,h,s*u[0],o*u[1]),i.restore()}function yE(i,t){for(var e=i.contextInstructions,r=0,n=e.length;r<n;r+=2)Array.isArray(e[r+1])?t[e[r]].apply(t,e[r+1]):t[e[r]]=e[r+1]}var bE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),xE=function(i){bE(t,i);function t(e){var r=this,n=e.rotateWithView!==void 0?e.rotateWithView:!1;return r=i.call(this,{opacity:1,rotateWithView:n,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0]})||this,r.canvas_=void 0,r.hitDetectionCanvas_=null,r.fill_=e.fill!==void 0?e.fill:null,r.origin_=[0,0],r.points_=e.points,r.radius_=e.radius!==void 0?e.radius:e.radius1,r.radius2_=e.radius2,r.angle_=e.angle!==void 0?e.angle:0,r.stroke_=e.stroke!==void 0?e.stroke:null,r.size_=null,r.renderOptions_=null,r.render(),r}return t.prototype.clone=function(){var e=this.getScale(),r=new t({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice()});return r.setOpacity(this.getOpacity()),r},t.prototype.getAnchor=function(){var e=this.size_;if(!e)return null;var r=this.getDisplacement();return[e[0]/2-r[0],e[1]/2+r[1]]},t.prototype.getAngle=function(){return this.angle_},t.prototype.getFill=function(){return this.fill_},t.prototype.getHitDetectionImage=function(){return this.hitDetectionCanvas_||this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_},t.prototype.getImage=function(e){var r=this.canvas_[e];if(!r){var n=this.renderOptions_,a=se(n.size*e,n.size*e);this.draw_(n,a,e),r=a.canvas,this.canvas_[e]=r}return r},t.prototype.getPixelRatio=function(e){return e},t.prototype.getImageSize=function(){return this.size_},t.prototype.getImageState=function(){return Z.LOADED},t.prototype.getOrigin=function(){return this.origin_},t.prototype.getPoints=function(){return this.points_},t.prototype.getRadius=function(){return this.radius_},t.prototype.getRadius2=function(){return this.radius2_},t.prototype.getSize=function(){return this.size_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.listenImageChange=function(e){},t.prototype.load=function(){},t.prototype.unlistenImageChange=function(e){},t.prototype.calculateLineJoinSize_=function(e,r,n){if(r===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return r;var a=this.radius_,s=this.radius2_===void 0?a:this.radius2_;if(a<s){var o=a;a=s,s=o}var l=this.radius2_===void 0?this.points_:this.points_*2,h=2*Math.PI/l,u=s*Math.sin(h),c=Math.sqrt(s*s-u*u),d=a-c,f=Math.sqrt(u*u+d*d),p=f/u;if(e==="miter"&&p<=n)return p*r;var m=r/2/p,v=r/2*(d/f),_=Math.sqrt((a+m)*(a+m)+v*v),g=_-a;if(this.radius2_===void 0||e==="bevel")return g*2;var y=a*Math.sin(h),b=Math.sqrt(a*a-y*y),x=s-b,w=Math.sqrt(y*y+x*x),C=w/y;if(C<=n){var A=C*r/2-s-a;return 2*Math.max(g,A)}return g*2},t.prototype.createRenderOptions=function(){var e=_r,r=0,n=null,a=0,s,o=0;this.stroke_&&(s=this.stroke_.getColor(),s===null&&(s=xn),s=Ae(s),o=this.stroke_.getWidth(),o===void 0&&(o=An),n=this.stroke_.getLineDash(),a=this.stroke_.getLineDashOffset(),e=this.stroke_.getLineJoin(),e===void 0&&(e=_r),r=this.stroke_.getMiterLimit(),r===void 0&&(r=bn));var l=this.calculateLineJoinSize_(e,o,r),h=Math.max(this.radius_,this.radius2_||0),u=Math.ceil(2*h+l);return{strokeStyle:s,strokeWidth:o,size:u,lineDash:n,lineDashOffset:a,lineJoin:e,miterLimit:r}},t.prototype.render=function(){this.renderOptions_=this.createRenderOptions();var e=this.renderOptions_.size;this.canvas_={},this.size_=[e,e]},t.prototype.draw_=function(e,r,n){if(r.scale(n,n),r.translate(e.size/2,e.size/2),this.createPath_(r),this.fill_){var a=this.fill_.getColor();a===null&&(a=Fe),r.fillStyle=Ae(a),r.fill()}this.stroke_&&(r.strokeStyle=e.strokeStyle,r.lineWidth=e.strokeWidth,r.setLineDash&&e.lineDash&&(r.setLineDash(e.lineDash),r.lineDashOffset=e.lineDashOffset),r.lineJoin=e.lineJoin,r.miterLimit=e.miterLimit,r.stroke())},t.prototype.createHitDetectionCanvas_=function(e){if(this.fill_){var r=this.fill_.getColor(),n=0;if(typeof r=="string"&&(r=Ya(r)),r===null?n=1:Array.isArray(r)&&(n=r.length===4?r[3]:1),n===0){var a=se(e.size,e.size);this.hitDetectionCanvas_=a.canvas,this.drawHitDetectionCanvas_(e,a)}}this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.getImage(1))},t.prototype.createPath_=function(e){var r=this.points_,n=this.radius_;if(r===1/0)e.arc(0,0,n,0,2*Math.PI);else{var a=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(r*=2);for(var s=this.angle_-Math.PI/2,o=2*Math.PI/r,l=0;l<r;l++){var h=s+l*o,u=l%2===0?n:a;e.lineTo(u*Math.cos(h),u*Math.sin(h))}e.closePath()}},t.prototype.drawHitDetectionCanvas_=function(e,r){r.translate(e.size/2,e.size/2),this.createPath_(r),r.fillStyle=Fe,r.fill(),this.stroke_&&(r.strokeStyle=e.strokeStyle,r.lineWidth=e.strokeWidth,e.lineDash&&(r.setLineDash(e.lineDash),r.lineDashOffset=e.lineDashOffset),r.lineJoin=e.lineJoin,r.miterLimit=e.miterLimit,r.stroke())},t}(gp);const wE=xE;var AE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),CE=function(i){AE(t,i);function t(e){var r=e||{};return i.call(this,{points:1/0,fill:r.fill,radius:r.radius,stroke:r.stroke,scale:r.scale!==void 0?r.scale:1,rotation:r.rotation!==void 0?r.rotation:0,rotateWithView:r.rotateWithView!==void 0?r.rotateWithView:!1,displacement:r.displacement!==void 0?r.displacement:[0,0]})||this}return t.prototype.clone=function(){var e=this.getScale(),r=new t({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()});return r.setOpacity(this.getOpacity()),r},t.prototype.setRadius=function(e){this.radius_=e,this.render()},t}(wE);const EE=CE;var SE=function(){function i(t){var e=t||{};this.color_=e.color!==void 0?e.color:null}return i.prototype.clone=function(){var t=this.getColor();return new i({color:Array.isArray(t)?t.slice():t||void 0})},i.prototype.getColor=function(){return this.color_},i.prototype.setColor=function(t){this.color_=t},i}();const xp=SE;var TE=function(){function i(t){var e=t||{};this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}return i.prototype.clone=function(){var t=this.getColor();return new i({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},i.prototype.getColor=function(){return this.color_},i.prototype.getLineCap=function(){return this.lineCap_},i.prototype.getLineDash=function(){return this.lineDash_},i.prototype.getLineDashOffset=function(){return this.lineDashOffset_},i.prototype.getLineJoin=function(){return this.lineJoin_},i.prototype.getMiterLimit=function(){return this.miterLimit_},i.prototype.getWidth=function(){return this.width_},i.prototype.setColor=function(t){this.color_=t},i.prototype.setLineCap=function(t){this.lineCap_=t},i.prototype.setLineDash=function(t){this.lineDash_=t},i.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t},i.prototype.setLineJoin=function(t){this.lineJoin_=t},i.prototype.setMiterLimit=function(t){this.miterLimit_=t},i.prototype.setWidth=function(t){this.width_=t},i}();const wp=TE;var Ap=function(){function i(t){var e=t||{};this.geometry_=null,this.geometryFunction_=Pu,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}return i.prototype.clone=function(){var t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new i({geometry:t,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer(),stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},i.prototype.getRenderer=function(){return this.renderer_},i.prototype.setRenderer=function(t){this.renderer_=t},i.prototype.setHitDetectionRenderer=function(t){this.hitDetectionRenderer_=t},i.prototype.getHitDetectionRenderer=function(){return this.hitDetectionRenderer_},i.prototype.getGeometry=function(){return this.geometry_},i.prototype.getGeometryFunction=function(){return this.geometryFunction_},i.prototype.getFill=function(){return this.fill_},i.prototype.setFill=function(t){this.fill_=t},i.prototype.getImage=function(){return this.image_},i.prototype.setImage=function(t){this.image_=t},i.prototype.getStroke=function(){return this.stroke_},i.prototype.setStroke=function(t){this.stroke_=t},i.prototype.getText=function(){return this.text_},i.prototype.setText=function(t){this.text_=t},i.prototype.getZIndex=function(){return this.zIndex_},i.prototype.setGeometry=function(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=Pu,this.geometry_=t},i.prototype.setZIndex=function(t){this.zIndex_=t},i}();function ME(i){var t;if(typeof i=="function")t=i;else{var e;if(Array.isArray(i))e=i;else{J(typeof i.getZIndex=="function",41);var r=i;e=[r]}t=function(){return e}}return t}var Ws=null;function IE(i,t){if(!Ws){var e=new xp({color:"rgba(255,255,255,0.4)"}),r=new wp({color:"#3399CC",width:1.25});Ws=[new Ap({image:new EE({fill:e,stroke:r,radius:5}),fill:e,stroke:r})]}return Ws}function Pu(i){return i.getGeometry()}const OE=Ap;var RE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Lu={RENDER_ORDER:"renderOrder"},DE=function(i){RE(t,i);function t(e){var r=this,n=e||{},a=ht({},n);return delete a.style,delete a.renderBuffer,delete a.updateWhileAnimating,delete a.updateWhileInteracting,r=i.call(this,a)||this,r.declutter_=n.declutter!==void 0?n.declutter:!1,r.renderBuffer_=n.renderBuffer!==void 0?n.renderBuffer:100,r.style_=null,r.styleFunction_=void 0,r.setStyle(n.style),r.updateWhileAnimating_=n.updateWhileAnimating!==void 0?n.updateWhileAnimating:!1,r.updateWhileInteracting_=n.updateWhileInteracting!==void 0?n.updateWhileInteracting:!1,r}return t.prototype.getDeclutter=function(){return this.declutter_},t.prototype.getFeatures=function(e){return i.prototype.getFeatures.call(this,e)},t.prototype.getRenderBuffer=function(){return this.renderBuffer_},t.prototype.getRenderOrder=function(){return this.get(Lu.RENDER_ORDER)},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},t.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},t.prototype.renderDeclutter=function(e){e.declutterTree||(e.declutterTree=new _p(9)),this.getRenderer().renderDeclutter(e)},t.prototype.setRenderOrder=function(e){this.set(Lu.RENDER_ORDER,e)},t.prototype.setStyle=function(e){this.style_=e!==void 0?e:IE,this.styleFunction_=e===null?void 0:ME(this.style_),this.changed()},t}(pl);const kE=DE;var Gn={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},da=[Gn.FILL],ii=[Gn.STROKE],Ai=[Gn.BEGIN_PATH],Fu=[Gn.CLOSE_PATH];const $=Gn;var PE=function(){function i(){}return i.prototype.drawCustom=function(t,e,r,n){},i.prototype.drawGeometry=function(t){},i.prototype.setStyle=function(t){},i.prototype.drawCircle=function(t,e){},i.prototype.drawFeature=function(t,e){},i.prototype.drawGeometryCollection=function(t,e){},i.prototype.drawLineString=function(t,e){},i.prototype.drawMultiLineString=function(t,e){},i.prototype.drawMultiPoint=function(t,e){},i.prototype.drawMultiPolygon=function(t,e){},i.prototype.drawPoint=function(t,e){},i.prototype.drawPolygon=function(t,e){},i.prototype.drawText=function(t,e){},i.prototype.setFillStrokeStyle=function(t,e){},i.prototype.setImageStyle=function(t,e){},i.prototype.setTextStyle=function(t,e){},i}();const Cp=PE;var LE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),FE=function(i){LE(t,i);function t(e,r,n,a){var s=i.call(this)||this;return s.tolerance=e,s.maxExtent=r,s.pixelRatio=a,s.maxLineWidth=0,s.resolution=n,s.beginGeometryInstruction1_=null,s.beginGeometryInstruction2_=null,s.bufferedMaxExtent_=null,s.instructions=[],s.coordinates=[],s.tmpCoordinate_=[],s.hitDetectionInstructions=[],s.state={},s}return t.prototype.applyPixelRatio=function(e){var r=this.pixelRatio;return r==1?e:e.map(function(n){return n*r})},t.prototype.appendFlatPointCoordinates=function(e,r){for(var n=this.getBufferedMaxExtent(),a=this.tmpCoordinate_,s=this.coordinates,o=s.length,l=0,h=e.length;l<h;l+=r)a[0]=e[l],a[1]=e[l+1],Cr(n,a)&&(s[o++]=a[0],s[o++]=a[1]);return o},t.prototype.appendFlatLineCoordinates=function(e,r,n,a,s,o){var l=this.coordinates,h=l.length,u=this.getBufferedMaxExtent();o&&(r+=a);var c=e[r],d=e[r+1],f=this.tmpCoordinate_,p=!0,m,v,_;for(m=r+a;m<n;m+=a)f[0]=e[m],f[1]=e[m+1],_=vo(u,f),_!==v?(p&&(l[h++]=c,l[h++]=d,p=!1),l[h++]=f[0],l[h++]=f[1]):_===Ct.INTERSECTING?(l[h++]=f[0],l[h++]=f[1],p=!1):p=!0,c=f[0],d=f[1],v=_;return(s&&p||m===r+a)&&(l[h++]=c,l[h++]=d),h},t.prototype.drawCustomCoordinates_=function(e,r,n,a,s){for(var o=0,l=n.length;o<l;++o){var h=n[o],u=this.appendFlatLineCoordinates(e,r,h,a,!1,!1);s.push(u),r=h}return r},t.prototype.drawCustom=function(e,r,n,a){this.beginGeometry(e,r);var s=e.getType(),o=e.getStride(),l=this.coordinates.length,h,u,c,d,f;switch(s){case X.MULTI_POLYGON:h=e.getOrientedFlatCoordinates(),d=[];var p=e.getEndss();f=0;for(var m=0,v=p.length;m<v;++m){var _=[];f=this.drawCustomCoordinates_(h,f,p[m],o,_),d.push(_)}this.instructions.push([$.CUSTOM,l,d,e,n,Au]),this.hitDetectionInstructions.push([$.CUSTOM,l,d,e,a||n,Au]);break;case X.POLYGON:case X.MULTI_LINE_STRING:c=[],h=s==X.POLYGON?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(h,0,e.getEnds(),o,c),this.instructions.push([$.CUSTOM,l,c,e,n,Va]),this.hitDetectionInstructions.push([$.CUSTOM,l,c,e,a||n,Va]);break;case X.LINE_STRING:case X.CIRCLE:h=e.getFlatCoordinates(),u=this.appendFlatLineCoordinates(h,0,h.length,o,!1,!1),this.instructions.push([$.CUSTOM,l,u,e,n,ir]),this.hitDetectionInstructions.push([$.CUSTOM,l,u,e,a||n,ir]);break;case X.MULTI_POINT:h=e.getFlatCoordinates(),u=this.appendFlatPointCoordinates(h,o),u>l&&(this.instructions.push([$.CUSTOM,l,u,e,n,ir]),this.hitDetectionInstructions.push([$.CUSTOM,l,u,e,a||n,ir]));break;case X.POINT:h=e.getFlatCoordinates(),this.coordinates.push(h[0],h[1]),u=this.coordinates.length,this.instructions.push([$.CUSTOM,l,u,e,n]),this.hitDetectionInstructions.push([$.CUSTOM,l,u,e,a||n]);break}this.endGeometry(r)},t.prototype.beginGeometry=function(e,r){this.beginGeometryInstruction1_=[$.BEGIN_GEOMETRY,r,0,e],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[$.BEGIN_GEOMETRY,r,0,e],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)},t.prototype.finish=function(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}},t.prototype.reverseHitDetectionInstructions=function(){var e=this.hitDetectionInstructions;e.reverse();var r,n=e.length,a,s,o=-1;for(r=0;r<n;++r)a=e[r],s=a[0],s==$.END_GEOMETRY?o=r:s==$.BEGIN_GEOMETRY&&(a[2]=r,Z1(this.hitDetectionInstructions,o,r),o=-1)},t.prototype.setFillStrokeStyle=function(e,r){var n=this.state;if(e){var a=e.getColor();n.fillStyle=Ae(a||Fe)}else n.fillStyle=void 0;if(r){var s=r.getColor();n.strokeStyle=Ae(s||xn);var o=r.getLineCap();n.lineCap=o!==void 0?o:Ha;var l=r.getLineDash();n.lineDash=l?l.slice():gn;var h=r.getLineDashOffset();n.lineDashOffset=h||yn;var u=r.getLineJoin();n.lineJoin=u!==void 0?u:_r;var c=r.getWidth();n.lineWidth=c!==void 0?c:An;var d=r.getMiterLimit();n.miterLimit=d!==void 0?d:bn,n.lineWidth>this.maxLineWidth&&(this.maxLineWidth=n.lineWidth,this.bufferedMaxExtent_=null)}else n.strokeStyle=void 0,n.lineCap=void 0,n.lineDash=null,n.lineDashOffset=void 0,n.lineJoin=void 0,n.lineWidth=void 0,n.miterLimit=void 0},t.prototype.createFill=function(e){var r=e.fillStyle,n=[$.SET_FILL_STYLE,r];return typeof r!="string"&&n.push(!0),n},t.prototype.applyStroke=function(e){this.instructions.push(this.createStroke(e))},t.prototype.createStroke=function(e){return[$.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]},t.prototype.updateFillStyle=function(e,r){var n=e.fillStyle;(typeof n!="string"||e.currentFillStyle!=n)&&(n!==void 0&&this.instructions.push(r.call(this,e)),e.currentFillStyle=n)},t.prototype.updateStrokeStyle=function(e,r){var n=e.strokeStyle,a=e.lineCap,s=e.lineDash,o=e.lineDashOffset,l=e.lineJoin,h=e.lineWidth,u=e.miterLimit;(e.currentStrokeStyle!=n||e.currentLineCap!=a||s!=e.currentLineDash&&!Sr(e.currentLineDash,s)||e.currentLineDashOffset!=o||e.currentLineJoin!=l||e.currentLineWidth!=h||e.currentMiterLimit!=u)&&(n!==void 0&&r.call(this,e),e.currentStrokeStyle=n,e.currentLineCap=a,e.currentLineDash=s,e.currentLineDashOffset=o,e.currentLineJoin=l,e.currentLineWidth=h,e.currentMiterLimit=u)},t.prototype.endGeometry=function(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;var r=[$.END_GEOMETRY,e];this.instructions.push(r),this.hitDetectionInstructions.push(r)},t.prototype.getBufferedMaxExtent=function(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=qy(this.maxExtent),this.maxLineWidth>0)){var e=this.resolution*(this.maxLineWidth+1)/2;cn(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_},t}(Cp);const Un=FE;var NE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),BE=function(i){NE(t,i);function t(e,r,n,a){var s=i.call(this,e,r,n,a)||this;return s.hitDetectionImage_=null,s.image_=null,s.imagePixelRatio_=void 0,s.anchorX_=void 0,s.anchorY_=void 0,s.height_=void 0,s.opacity_=void 0,s.originX_=void 0,s.originY_=void 0,s.rotateWithView_=void 0,s.rotation_=void 0,s.scale_=void 0,s.width_=void 0,s.declutterImageWithText_=void 0,s}return t.prototype.drawPoint=function(e,r){if(!!this.image_){this.beginGeometry(e,r);var n=e.getFlatCoordinates(),a=e.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(n,a);this.instructions.push([$.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([$.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(r)}},t.prototype.drawMultiPoint=function(e,r){if(!!this.image_){this.beginGeometry(e,r);var n=e.getFlatCoordinates(),a=e.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(n,a);this.instructions.push([$.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([$.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(r)}},t.prototype.finish=function(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,i.prototype.finish.call(this)},t.prototype.setImageStyle=function(e,r){var n=e.getAnchor(),a=e.getSize(),s=e.getHitDetectionImage(),o=e.getImage(this.pixelRatio),l=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=s,this.image_=o,this.height_=a[1],this.opacity_=e.getOpacity(),this.originX_=l[0]*this.imagePixelRatio_,this.originY_=l[1]*this.imagePixelRatio_,this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=a[0],this.declutterImageWithText_=r},t}(Un);const zE=BE;var $E=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),GE=function(i){$E(t,i);function t(e,r,n,a){return i.call(this,e,r,n,a)||this}return t.prototype.drawFlatCoordinates_=function(e,r,n,a){var s=this.coordinates.length,o=this.appendFlatLineCoordinates(e,r,n,a,!1,!1),l=[$.MOVE_TO_LINE_TO,s,o];return this.instructions.push(l),this.hitDetectionInstructions.push(l),n},t.prototype.drawLineString=function(e,r){var n=this.state,a=n.strokeStyle,s=n.lineWidth;if(!(a===void 0||s===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,r),this.hitDetectionInstructions.push([$.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,gn,yn],Ai);var o=e.getFlatCoordinates(),l=e.getStride();this.drawFlatCoordinates_(o,0,o.length,l),this.hitDetectionInstructions.push(ii),this.endGeometry(r)}},t.prototype.drawMultiLineString=function(e,r){var n=this.state,a=n.strokeStyle,s=n.lineWidth;if(!(a===void 0||s===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,r),this.hitDetectionInstructions.push([$.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset],Ai);for(var o=e.getEnds(),l=e.getFlatCoordinates(),h=e.getStride(),u=0,c=0,d=o.length;c<d;++c)u=this.drawFlatCoordinates_(l,u,o[c],h);this.hitDetectionInstructions.push(ii),this.endGeometry(r)}},t.prototype.finish=function(){var e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(ii),this.reverseHitDetectionInstructions(),this.state=null,i.prototype.finish.call(this)},t.prototype.applyStroke=function(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(ii),e.lastStroke=this.coordinates.length),e.lastStroke=0,i.prototype.applyStroke.call(this,e),this.instructions.push(Ai)},t}(Un);const UE=GE;var VE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),YE=function(i){VE(t,i);function t(e,r,n,a){return i.call(this,e,r,n,a)||this}return t.prototype.drawFlatCoordinatess_=function(e,r,n,a){var s=this.state,o=s.fillStyle!==void 0,l=s.strokeStyle!==void 0,h=n.length;this.instructions.push(Ai),this.hitDetectionInstructions.push(Ai);for(var u=0;u<h;++u){var c=n[u],d=this.coordinates.length,f=this.appendFlatLineCoordinates(e,r,c,a,!0,!l),p=[$.MOVE_TO_LINE_TO,d,f];this.instructions.push(p),this.hitDetectionInstructions.push(p),l&&(this.instructions.push(Fu),this.hitDetectionInstructions.push(Fu)),r=c}return o&&(this.instructions.push(da),this.hitDetectionInstructions.push(da)),l&&(this.instructions.push(ii),this.hitDetectionInstructions.push(ii)),r},t.prototype.drawCircle=function(e,r){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,r),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_FILL_STYLE,Fe]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var o=e.getFlatCoordinates(),l=e.getStride(),h=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,l,!1,!1);var u=[$.CIRCLE,h];this.instructions.push(Ai,u),this.hitDetectionInstructions.push(Ai,u),n.fillStyle!==void 0&&(this.instructions.push(da),this.hitDetectionInstructions.push(da)),n.strokeStyle!==void 0&&(this.instructions.push(ii),this.hitDetectionInstructions.push(ii)),this.endGeometry(r)}},t.prototype.drawPolygon=function(e,r){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,r),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_FILL_STYLE,Fe]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var o=e.getEnds(),l=e.getOrientedFlatCoordinates(),h=e.getStride();this.drawFlatCoordinatess_(l,0,o,h),this.endGeometry(r)}},t.prototype.drawMultiPolygon=function(e,r){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,r),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_FILL_STYLE,Fe]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([$.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);for(var o=e.getEndss(),l=e.getOrientedFlatCoordinates(),h=e.getStride(),u=0,c=0,d=o.length;c<d;++c)u=this.drawFlatCoordinatess_(l,u,o[c],h);this.endGeometry(r)}},t.prototype.finish=function(){this.reverseHitDetectionInstructions(),this.state=null;var e=this.tolerance;if(e!==0)for(var r=this.coordinates,n=0,a=r.length;n<a;++n)r[n]=yi(r[n],e);return i.prototype.finish.call(this)},t.prototype.setFillStrokeStyles_=function(){var e=this.state,r=e.fillStyle;r!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)},t}(Un);const Nu=YE,WE={POINT:"point",LINE:"line"};function HE(i,t,e,r,n){var a=e,s=e,o=0,l=0,h=e,u,c,d,f,p,m,v,_,g,y;for(c=e;c<r;c+=n){var b=t[c],x=t[c+1];p!==void 0&&(g=b-p,y=x-m,f=Math.sqrt(g*g+y*y),v!==void 0&&(l+=d,u=Math.acos((v*g+_*y)/(d*f)),u>i&&(l>o&&(o=l,a=h,s=c),l=0,h=c-n)),d=f,v=g,_=y),p=b,m=x}return l+=f,l>o?[h,c]:[a,s]}var jE=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Xa={left:0,end:0,center:.5,right:1,start:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},qE=function(i){jE(t,i);function t(e,r,n,a){var s=i.call(this,e,r,n,a)||this;return s.labels_=null,s.text_="",s.textOffsetX_=0,s.textOffsetY_=0,s.textRotateWithView_=void 0,s.textRotation_=0,s.textFillState_=null,s.fillStates={},s.textStrokeState_=null,s.strokeStates={},s.textState_={},s.textStates={},s.textKey_="",s.fillKey_="",s.strokeKey_="",s.declutterImageWithText_=void 0,s}return t.prototype.finish=function(){var e=i.prototype.finish.call(this);return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e},t.prototype.drawText=function(e,r){var n=this.textFillState_,a=this.textStrokeState_,s=this.textState_;if(!(this.text_===""||!s||!n&&!a)){var o=this.coordinates,l=o.length,h=e.getType(),u=null,c=e.getStride();if(s.placement===WE.LINE&&(h==X.LINE_STRING||h==X.MULTI_LINE_STRING||h==X.POLYGON||h==X.MULTI_POLYGON)){if(!Lt(this.getBufferedMaxExtent(),e.getExtent()))return;var d=void 0;if(u=e.getFlatCoordinates(),h==X.LINE_STRING)d=[u.length];else if(h==X.MULTI_LINE_STRING)d=e.getEnds();else if(h==X.POLYGON)d=e.getEnds().slice(0,1);else if(h==X.MULTI_POLYGON){var f=e.getEndss();d=[];for(var p=0,m=f.length;p<m;++p)d.push(f[p][0])}this.beginGeometry(e,r);for(var v=s.textAlign,_=0,g=void 0,y=0,b=d.length;y<b;++y){if(v==null){var x=HE(s.maxAngle,u,_,d[y],c);_=x[0],g=x[1]}else g=d[y];for(var p=_;p<g;p+=c)o.push(u[p],u[p+1]);var w=o.length;_=d[y],this.drawChars_(l,w),l=w}this.endGeometry(r)}else{var C=s.overflow?null:[];switch(h){case X.POINT:case X.MULTI_POINT:u=e.getFlatCoordinates();break;case X.LINE_STRING:u=e.getFlatMidpoint();break;case X.CIRCLE:u=e.getCenter();break;case X.MULTI_LINE_STRING:u=e.getFlatMidpoints(),c=2;break;case X.POLYGON:u=e.getFlatInteriorPoint(),s.overflow||C.push(u[2]/this.resolution),c=3;break;case X.MULTI_POLYGON:var A=e.getFlatInteriorPoints();u=[];for(var p=0,m=A.length;p<m;p+=3)s.overflow||C.push(A[p+2]/this.resolution),u.push(A[p],A[p+1]);if(u.length===0)return;c=2;break}var w=this.appendFlatPointCoordinates(u,c);if(w===l)return;if(C&&(w-l)/2!==u.length/c){var T=l/2;C=C.filter(function(V,j){var K=o[(T+j)*2]===u[j*c]&&o[(T+j)*2+1]===u[j*c+1];return K||--T,K})}this.saveTextStates_(),(s.backgroundFill||s.backgroundStroke)&&(this.setFillStrokeStyle(s.backgroundFill,s.backgroundStroke),s.backgroundFill&&(this.updateFillStyle(this.state,this.createFill),this.hitDetectionInstructions.push(this.createFill(this.state))),s.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,r);var R=s.padding;if(R!=wi&&(s.scale[0]<0||s.scale[1]<0)){var L=s.padding[0],F=s.padding[1],P=s.padding[2],U=s.padding[3];s.scale[0]<0&&(F=-F,U=-U),s.scale[1]<0&&(L=-L,P=-P),R=[L,F,P,U]}var N=this.pixelRatio;this.instructions.push([$.DRAW_IMAGE,l,w,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterImageWithText_,R==wi?wi:R.map(function(V){return V*N}),!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,C]);var z=1/N;this.hitDetectionInstructions.push([$.DRAW_IMAGE,l,w,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[z,z],NaN,this.declutterImageWithText_,R,!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,C]),this.endGeometry(r)}}},t.prototype.saveTextStates_=function(){var e=this.textStrokeState_,r=this.textState_,n=this.textFillState_,a=this.strokeKey_;e&&(a in this.strokeStates||(this.strokeStates[a]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));var s=this.textKey_;s in this.textStates||(this.textStates[s]={font:r.font,textAlign:r.textAlign||wn,textBaseline:r.textBaseline||ja,scale:r.scale});var o=this.fillKey_;n&&(o in this.fillStates||(this.fillStates[o]={fillStyle:n.fillStyle}))},t.prototype.drawChars_=function(e,r){var n=this.textStrokeState_,a=this.textState_,s=this.strokeKey_,o=this.textKey_,l=this.fillKey_;this.saveTextStates_();var h=this.pixelRatio,u=Xa[a.textBaseline],c=this.textOffsetY_*h,d=this.text_,f=n?n.lineWidth*Math.abs(a.scale[0])/2:0;this.instructions.push([$.DRAW_CHARS,e,r,u,a.overflow,l,a.maxAngle,h,c,s,f*h,d,o,1]),this.hitDetectionInstructions.push([$.DRAW_CHARS,e,r,u,a.overflow,l,a.maxAngle,1,c,s,f,d,o,1/h])},t.prototype.setTextStyle=function(e,r){var n,a,s;if(!e)this.text_="";else{var o=e.getFill();o?(a=this.textFillState_,a||(a={},this.textFillState_=a),a.fillStyle=Ae(o.getColor()||Fe)):(a=null,this.textFillState_=a);var l=e.getStroke();if(!l)s=null,this.textStrokeState_=s;else{s=this.textStrokeState_,s||(s={},this.textStrokeState_=s);var h=l.getLineDash(),u=l.getLineDashOffset(),c=l.getWidth(),d=l.getMiterLimit();s.lineCap=l.getLineCap()||Ha,s.lineDash=h?h.slice():gn,s.lineDashOffset=u===void 0?yn:u,s.lineJoin=l.getLineJoin()||_r,s.lineWidth=c===void 0?An:c,s.miterLimit=d===void 0?bn:d,s.strokeStyle=Ae(l.getColor()||xn)}n=this.textState_;var f=e.getFont()||yp;mE(f);var p=e.getScaleArray();n.overflow=e.getOverflow(),n.font=f,n.maxAngle=e.getMaxAngle(),n.placement=e.getPlacement(),n.textAlign=e.getTextAlign(),n.textBaseline=e.getTextBaseline()||ja,n.backgroundFill=e.getBackgroundFill(),n.backgroundStroke=e.getBackgroundStroke(),n.padding=e.getPadding()||wi,n.scale=p===void 0?[1,1]:p;var m=e.getOffsetX(),v=e.getOffsetY(),_=e.getRotateWithView(),g=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=m===void 0?0:m,this.textOffsetY_=v===void 0?0:v,this.textRotateWithView_=_===void 0?!1:_,this.textRotation_=g===void 0?0:g,this.strokeKey_=s?(typeof s.strokeStyle=="string"?s.strokeStyle:ot(s.strokeStyle))+s.lineCap+s.lineDashOffset+"|"+s.lineWidth+s.lineJoin+s.miterLimit+"["+s.lineDash.join()+"]":"",this.textKey_=n.font+n.scale+(n.textAlign||"?")+(n.textBaseline||"?"),this.fillKey_=a?typeof a.fillStyle=="string"?a.fillStyle:"|"+ot(a.fillStyle):""}this.declutterImageWithText_=r},t}(Un);const XE=qE;var ZE={Circle:Nu,Default:Un,Image:zE,LineString:UE,Polygon:Nu,Text:XE},KE=function(){function i(t,e,r,n){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=n,this.resolution_=r,this.buildersByZIndex_={}}return i.prototype.finish=function(){var t={};for(var e in this.buildersByZIndex_){t[e]=t[e]||{};var r=this.buildersByZIndex_[e];for(var n in r){var a=r[n].finish();t[e][n]=a}}return t},i.prototype.getBuilder=function(t,e){var r=t!==void 0?t.toString():"0",n=this.buildersByZIndex_[r];n===void 0&&(n={},this.buildersByZIndex_[r]=n);var a=n[e];if(a===void 0){var s=ZE[e];a=new s(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),n[e]=a}return a},i}();const Bu=KE,ft={CIRCLE:"Circle",DEFAULT:"Default",IMAGE:"Image",LINE_STRING:"LineString",POLYGON:"Polygon",TEXT:"Text"};function QE(i,t,e,r,n,a,s,o,l,h,u,c){var d=i[t],f=i[t+1],p=0,m=0,v=0,_=0;function g(){p=d,m=f,t+=r,d=i[t],f=i[t+1],_+=v,v=Math.sqrt((d-p)*(d-p)+(f-m)*(f-m))}do g();while(t<e-r&&_+v<a);for(var y=v===0?0:(a-_)/v,b=gi(p,d,y),x=gi(m,f,y),w=t-r,C=_,A=a+o*l(h,n,u);t<e-r&&_+v<A;)g();y=v===0?0:(A-_)/v;var T=gi(p,d,y),R=gi(m,f,y),L;if(c){var F=[b,x,T,R];Wf(F,0,4,2,c,F,F),L=F[0]>F[2]}else L=b>T;var P=Math.PI,U=[],N=w+r===t;t=w,v=0,_=C,d=i[t],f=i[t+1];var z;if(N){g(),z=Math.atan2(f-m,d-p),L&&(z+=z>0?-P:P);var k=(T+b)/2,V=(R+x)/2;return U[0]=[k,V,(A-a)/2,z,n],U}for(var j=0,K=n.length;j<K;){g();var ut=Math.atan2(f-m,d-p);if(L&&(ut+=ut>0?-P:P),z!==void 0){var S=ut-z;if(S+=S>P?-2*P:S<-P?2*P:0,Math.abs(S)>s)return null}z=ut;for(var pt=j,W=0;j<K;++j){var mt=L?K-j-1:j,kt=o*l(h,n[mt],u);if(t+r<e&&_+v<a+W+kt/2)break;W+=kt}if(j!==pt){var jt=L?n.substring(K-pt,K-j):n.substring(pt,j);y=v===0?0:(a+W/2-_)/v;var k=gi(p,d,y),V=gi(m,f,y);U.push([k,V,W/2,ut,jt]),a+=W}}return U}function JE(i,t,e,r){for(var n=i[t],a=i[t+1],s=0,o=t+r;o<e;o+=r){var l=i[o],h=i[o+1];s+=Math.sqrt((l-n)*(l-n)+(h-a)*(h-a)),n=l,a=h}return s}var Hi=ne(),He=[],Oe=[],Re=[],je=[];function zu(i){return i[3].declutterBox}var tS=new RegExp("["+String.fromCharCode(1425)+"-"+String.fromCharCode(2303)+String.fromCharCode(64285)+"-"+String.fromCharCode(65023)+String.fromCharCode(65136)+"-"+String.fromCharCode(65276)+String.fromCharCode(67584)+"-"+String.fromCharCode(69631)+String.fromCharCode(124928)+"-"+String.fromCharCode(126975)+"]");function $u(i,t){return(t==="start"||t==="end")&&!tS.test(i)&&(t=t==="start"?"left":"right"),Xa[t]}function eS(i,t,e){return e>0&&i.push(`
`,""),i.push(t,""),i}var iS=function(){function i(t,e,r,n){this.overlaps=r,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.instructions=n.instructions,this.coordinates=n.coordinates,this.coordinateCache_={},this.renderedTransform_=li(),this.hitDetectionInstructions=n.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=n.fillStates||{},this.strokeStates=n.strokeStates||{},this.textStates=n.textStates||{},this.widths_={},this.labels_={}}return i.prototype.createLabel=function(t,e,r,n){var a=t+e+r+n;if(this.labels_[a])return this.labels_[a];var s=n?this.strokeStates[n]:null,o=r?this.fillStates[r]:null,l=this.textStates[e],h=this.pixelRatio,u=[l.scale[0]*h,l.scale[1]*h],c=Array.isArray(t),d=$u(c?t[0]:t,l.textAlign||wn),f=n&&s.lineWidth?s.lineWidth:0,p=c?t:t.split(`
`).reduce(eS,[]),m=_E(l,p),v=m.width,_=m.height,g=m.widths,y=m.heights,b=m.lineWidths,x=v+f,w=[],C=(x+2)*u[0],A=(_+f)*u[1],T={width:C<0?Math.floor(C):Math.ceil(C),height:A<0?Math.floor(A):Math.ceil(A),contextInstructions:w};if((u[0]!=1||u[1]!=1)&&w.push("scale",u),n){w.push("strokeStyle",s.strokeStyle),w.push("lineWidth",f),w.push("lineCap",s.lineCap),w.push("lineJoin",s.lineJoin),w.push("miterLimit",s.miterLimit);var R=ys?OffscreenCanvasRenderingContext2D:CanvasRenderingContext2D;R.prototype.setLineDash&&(w.push("setLineDash",[s.lineDash]),w.push("lineDashOffset",s.lineDashOffset))}r&&w.push("fillStyle",o.fillStyle),w.push("textBaseline","middle"),w.push("textAlign","center");for(var L=.5-d,F=d*x+L*f,P=[],U=[],N=0,z=0,k=0,V=0,j,K=0,ut=p.length;K<ut;K+=2){var S=p[K];if(S===`
`){z+=N,N=0,F=d*x+L*f,++V;continue}var pt=p[K+1]||l.font;pt!==j&&(n&&P.push("font",pt),r&&U.push("font",pt),j=pt),N=Math.max(N,y[k]);var W=[S,F+L*g[k]+d*(g[k]-b[V]),.5*(f+N)+z];F+=g[k],n&&P.push("strokeText",W),r&&U.push("fillText",W),++k}return Array.prototype.push.apply(w,P),Array.prototype.push.apply(w,U),this.labels_[a]=T,T},i.prototype.replayTextBackground_=function(t,e,r,n,a,s,o){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,r),t.lineTo.apply(t,n),t.lineTo.apply(t,a),t.lineTo.apply(t,e),s&&(this.alignFill_=s[2],this.fill_(t)),o&&(this.setStrokeStyle_(t,o),t.stroke())},i.prototype.calculateImageOrLabelDimensions_=function(t,e,r,n,a,s,o,l,h,u,c,d,f,p,m,v){o*=d[0],l*=d[1];var _=r-o,g=n-l,y=a+h>t?t-h:a,b=s+u>e?e-u:s,x=p[3]+y*d[0]+p[1],w=p[0]+b*d[1]+p[2],C=_-p[3],A=g-p[0];(m||c!==0)&&(He[0]=C,je[0]=C,He[1]=A,Oe[1]=A,Oe[0]=C+x,Re[0]=Oe[0],Re[1]=A+w,je[1]=Re[1]);var T;return c!==0?(T=Me(li(),r,n,1,1,c,-r,-n),At(T,He),At(T,Oe),At(T,Re),At(T,je),Se(Math.min(He[0],Oe[0],Re[0],je[0]),Math.min(He[1],Oe[1],Re[1],je[1]),Math.max(He[0],Oe[0],Re[0],je[0]),Math.max(He[1],Oe[1],Re[1],je[1]),Hi)):Se(Math.min(C,C+x),Math.min(A,A+w),Math.max(C,C+x),Math.max(A,A+w),Hi),f&&(_=Math.round(_),g=Math.round(g)),{drawImageX:_,drawImageY:g,drawImageW:y,drawImageH:b,originX:h,originY:u,declutterBox:{minX:Hi[0],minY:Hi[1],maxX:Hi[2],maxY:Hi[3],value:v},canvasTransform:T,scale:d}},i.prototype.replayImageOrLabel_=function(t,e,r,n,a,s,o){var l=!!(s||o),h=n.declutterBox,u=t.canvas,c=o?o[2]*n.scale[0]/2:0,d=h.minX-c<=u.width/e&&h.maxX+c>=0&&h.minY-c<=u.height/e&&h.maxY+c>=0;return d&&(l&&this.replayTextBackground_(t,He,Oe,Re,je,s,o),gE(t,n.canvasTransform,a,r,n.originX,n.originY,n.drawImageW,n.drawImageH,n.drawImageX,n.drawImageY,n.scale)),!0},i.prototype.fill_=function(t){if(this.alignFill_){var e=At(this.renderedTransform_,[0,0]),r=512*this.pixelRatio;t.save(),t.translate(e[0]%r,e[1]%r),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()},i.prototype.setStrokeStyle_=function(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.setLineDash&&(t.lineDashOffset=e[7],t.setLineDash(e[6]))},i.prototype.drawLabelWithPointPlacement_=function(t,e,r,n){var a=this.textStates[e],s=this.createLabel(t,e,n,r),o=this.strokeStates[r],l=this.pixelRatio,h=$u(Array.isArray(t)?t[0]:t,a.textAlign||wn),u=Xa[a.textBaseline||ja],c=o&&o.lineWidth?o.lineWidth:0,d=s.width/l-2*a.scale[0],f=h*d+2*(.5-h)*c,p=u*s.height/l+2*(.5-u)*c;return{label:s,anchorX:f,anchorY:p}},i.prototype.execute_=function(t,e,r,n,a,s,o,l){var h;this.pixelCoordinates_&&Sr(r,this.renderedTransform_)?h=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),h=Ii(this.coordinates,0,this.coordinates.length,2,r,this.pixelCoordinates_),cA(this.renderedTransform_,r));for(var u=0,c=n.length,d=0,f,p,m,v,_,g,y,b,x,w,C,A,T=0,R=0,L=null,F=null,P=this.coordinateCache_,U=this.viewRotation_,N=Math.round(Math.atan2(-r[1],r[0])*1e12)/1e12,z={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:U},k=this.instructions!=n||this.overlaps?0:200,V,j,K,ut;u<c;){var S=n[u],pt=S[0];switch(pt){case $.BEGIN_GEOMETRY:V=S[1],ut=S[3],V.getGeometry()?o!==void 0&&!Lt(o,ut.getExtent())?u=S[2]+1:++u:u=S[2];break;case $.BEGIN_PATH:T>k&&(this.fill_(t),T=0),R>k&&(t.stroke(),R=0),!T&&!R&&(t.beginPath(),v=NaN,_=NaN),++u;break;case $.CIRCLE:d=S[1];var W=h[d],mt=h[d+1],kt=h[d+2],jt=h[d+3],zt=kt-W,qt=jt-mt,Li=Math.sqrt(zt*zt+qt*qt);t.moveTo(W+Li,mt),t.arc(W,mt,Li,0,2*Math.PI,!0),++u;break;case $.CLOSE_PATH:t.closePath(),++u;break;case $.CUSTOM:d=S[1],f=S[2];var me=S[3],Vn=S[4],Yn=S.length==6?S[5]:void 0;z.geometry=me,z.feature=V,u in P||(P[u]=[]);var $e=P[u];Yn?Yn(h,d,f,2,$e):($e[0]=h[d],$e[1]=h[d+1],$e.length=2),Vn($e,z),++u;break;case $.DRAW_IMAGE:d=S[1],f=S[2],b=S[3],p=S[4],m=S[5];var Fi=S[6],Wn=S[7],Tr=S[8],Hn=S[9],fi=S[10],Mr=S[11],jn=S[12],Ni=S[13],Ge=S[14];if(!b&&S.length>=19){x=S[18],w=S[19],C=S[20],A=S[21];var Bi=this.drawLabelWithPointPlacement_(x,w,C,A);b=Bi.label,S[3]=b;var ws=S[22];p=(Bi.anchorX-ws)*this.pixelRatio,S[4]=p;var qn=S[23];m=(Bi.anchorY-qn)*this.pixelRatio,S[5]=m,Fi=b.height,S[6]=Fi,Ni=b.width,S[13]=Ni}var Ir=void 0;S.length>24&&(Ir=S[24]);var Ie=void 0,ve=void 0,pi=void 0;S.length>16?(Ie=S[15],ve=S[16],pi=S[17]):(Ie=wi,ve=!1,pi=!1),fi&&N?Mr+=U:!fi&&!N&&(Mr-=U);for(var Or=0;d<f;d+=2)if(!(Ir&&Ir[Or++]<Ni/this.pixelRatio)){var $t=this.calculateImageOrLabelDimensions_(b.width,b.height,h[d],h[d+1],Ni,Fi,p,m,Tr,Hn,Mr,jn,a,Ie,ve||pi,V),Xn=[t,e,b,$t,Wn,ve?L:null,pi?F:null],St=void 0,zi=void 0;if(l&&Ge){var mi=f-d;if(!Ge[mi]){Ge[mi]=Xn;continue}if(St=Ge[mi],delete Ge[mi],zi=zu(St),l.collides(zi))continue}l&&l.collides($t.declutterBox)||(St&&(l&&l.insert(zi),this.replayImageOrLabel_.apply(this,St)),l&&l.insert($t.declutterBox),this.replayImageOrLabel_.apply(this,Xn))}++u;break;case $.DRAW_CHARS:var wl=S[1],Al=S[2],As=S[3],tm=S[4];A=S[5];var em=S[6],Cl=S[7],El=S[8];C=S[9];var Cs=S[10];x=S[11],w=S[12];var Sl=[S[13],S[13]],Es=this.textStates[w],Rr=Es.font,Dr=[Es.scale[0]*Cl,Es.scale[1]*Cl],kr=void 0;Rr in this.widths_?kr=this.widths_[Rr]:(kr={},this.widths_[Rr]=kr);var Tl=JE(h,wl,Al,2),Ml=Math.abs(Dr[0])*ku(Rr,x,kr);if(tm||Ml<=Tl){var im=this.textStates[w].textAlign,rm=(Tl-Ml)*Xa[im],Pr=QE(h,wl,Al,2,x,rm,em,Math.abs(Dr[0]),ku,Rr,kr,N?0:this.viewRotation_);t:if(Pr){var Lr=[],Ue=void 0,Zn=void 0,Kn=void 0,Gt=void 0,Qt=void 0;if(C)for(Ue=0,Zn=Pr.length;Ue<Zn;++Ue){Qt=Pr[Ue],Kn=Qt[4],Gt=this.createLabel(Kn,w,"",C),p=Qt[2]+(Dr[0]<0?-Cs:Cs),m=As*Gt.height+(.5-As)*2*Cs*Dr[1]/Dr[0]-El;var $t=this.calculateImageOrLabelDimensions_(Gt.width,Gt.height,Qt[0],Qt[1],Gt.width,Gt.height,p,m,0,0,Qt[3],Sl,!1,wi,!1,V);if(l&&l.collides($t.declutterBox))break t;Lr.push([t,e,Gt,$t,1,null,null])}if(A)for(Ue=0,Zn=Pr.length;Ue<Zn;++Ue){Qt=Pr[Ue],Kn=Qt[4],Gt=this.createLabel(Kn,w,A,""),p=Qt[2],m=As*Gt.height-El;var $t=this.calculateImageOrLabelDimensions_(Gt.width,Gt.height,Qt[0],Qt[1],Gt.width,Gt.height,p,m,0,0,Qt[3],Sl,!1,wi,!1,V);if(l&&l.collides($t.declutterBox))break t;Lr.push([t,e,Gt,$t,1,null,null])}l&&l.load(Lr.map(zu));for(var Ss=0,nm=Lr.length;Ss<nm;++Ss)this.replayImageOrLabel_.apply(this,Lr[Ss])}}++u;break;case $.END_GEOMETRY:if(s!==void 0){V=S[1];var Il=s(V,ut);if(Il)return Il}++u;break;case $.FILL:k?T++:this.fill_(t),++u;break;case $.MOVE_TO_LINE_TO:for(d=S[1],f=S[2],j=h[d],K=h[d+1],g=j+.5|0,y=K+.5|0,(g!==v||y!==_)&&(t.moveTo(j,K),v=g,_=y),d+=2;d<f;d+=2)j=h[d],K=h[d+1],g=j+.5|0,y=K+.5|0,(d==f-2||g!==v||y!==_)&&(t.lineTo(j,K),v=g,_=y);++u;break;case $.SET_FILL_STYLE:L=S,this.alignFill_=S[2],T&&(this.fill_(t),T=0,R&&(t.stroke(),R=0)),t.fillStyle=S[1],++u;break;case $.SET_STROKE_STYLE:F=S,R&&(t.stroke(),R=0),this.setStrokeStyle_(t,S),++u;break;case $.STROKE:k?R++:t.stroke(),++u;break;default:++u;break}}T&&this.fill_(t),R&&t.stroke()},i.prototype.execute=function(t,e,r,n,a,s){this.viewRotation_=n,this.execute_(t,e,r,this.instructions,a,void 0,void 0,s)},i.prototype.executeHitDetection=function(t,e,r,n,a){return this.viewRotation_=r,this.execute_(t,1,e,this.hitDetectionInstructions,!0,n,a)},i}();const rS=iS;var Hs=[ft.POLYGON,ft.CIRCLE,ft.LINE_STRING,ft.IMAGE,ft.TEXT,ft.DEFAULT],nS=function(){function i(t,e,r,n,a,s){this.maxExtent_=t,this.overlaps_=n,this.pixelRatio_=r,this.resolution_=e,this.renderBuffer_=s,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=li(),this.createExecutors_(a)}return i.prototype.clip=function(t,e){var r=this.getClipCoords(e);t.beginPath(),t.moveTo(r[0],r[1]),t.lineTo(r[2],r[3]),t.lineTo(r[4],r[5]),t.lineTo(r[6],r[7]),t.clip()},i.prototype.createExecutors_=function(t){for(var e in t){var r=this.executorsByZIndex_[e];r===void 0&&(r={},this.executorsByZIndex_[e]=r);var n=t[e];for(var a in n){var s=n[a];r[a]=new rS(this.resolution_,this.pixelRatio_,this.overlaps_,s)}}},i.prototype.hasExecutors=function(t){for(var e in this.executorsByZIndex_)for(var r=this.executorsByZIndex_[e],n=0,a=t.length;n<a;++n)if(t[n]in r)return!0;return!1},i.prototype.forEachFeatureAtCoordinate=function(t,e,r,n,a,s){n=Math.round(n);var o=n*2+1,l=Me(this.hitDetectionTransform_,n+.5,n+.5,1/e,-1/e,-r,-t[0],-t[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=se(o,o));var u=this.hitDetectionContext_;u.canvas.width!==o||u.canvas.height!==o?(u.canvas.width=o,u.canvas.height=o):h||u.clearRect(0,0,o,o);var c;this.renderBuffer_!==void 0&&(c=ne(),sn(c,t),cn(c,e*(this.renderBuffer_+n),c));var d=aS(n),f;function p(w,C){for(var A=u.getImageData(0,0,o,o).data,T=0,R=d.length;T<R;T++)if(A[d[T]]>0){if(!s||f!==ft.IMAGE&&f!==ft.TEXT||s.indexOf(w)!==-1){var L=(d[T]-3)/4,F=n-L%o,P=n-(L/o|0),U=a(w,C,F*F+P*P);if(U)return U}u.clearRect(0,0,o,o);break}}var m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(mr);var v,_,g,y,b;for(v=m.length-1;v>=0;--v){var x=m[v].toString();for(g=this.executorsByZIndex_[x],_=Hs.length-1;_>=0;--_)if(f=Hs[_],y=g[f],y!==void 0&&(b=y.executeHitDetection(u,l,r,p,c),b))return b}},i.prototype.getClipCoords=function(t){var e=this.maxExtent_;if(!e)return null;var r=e[0],n=e[1],a=e[2],s=e[3],o=[r,n,r,s,a,s,a,n];return Ii(o,0,8,2,t,o),o},i.prototype.isEmpty=function(){return un(this.executorsByZIndex_)},i.prototype.execute=function(t,e,r,n,a,s,o){var l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(mr),this.maxExtent_&&(t.save(),this.clip(t,r));var h=s||Hs,u,c,d,f,p,m;for(o&&l.reverse(),u=0,c=l.length;u<c;++u){var v=l[u].toString();for(p=this.executorsByZIndex_[v],d=0,f=h.length;d<f;++d){var _=h[d];m=p[_],m!==void 0&&m.execute(t,e,r,n,a,o)}}this.maxExtent_&&t.restore()},i}(),js={};function aS(i){if(js[i]!==void 0)return js[i];for(var t=i*2+1,e=i*i,r=new Array(e+1),n=0;n<=i;++n)for(var a=0;a<=i;++a){var s=n*n+a*a;if(s>e)break;var o=r[s];o||(o=[],r[s]=o),o.push(((i+n)*t+(i+a))*4+3),n>0&&o.push(((i-n)*t+(i+a))*4+3),a>0&&(o.push(((i+n)*t+(i-a))*4+3),n>0&&o.push(((i-n)*t+(i-a))*4+3))}for(var l=[],n=0,h=r.length;n<h;++n)r[n]&&l.push.apply(l,r[n]);return js[i]=l,l}const Gu=nS;var sS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),oS=function(i){sS(t,i);function t(e,r,n,a,s,o,l){var h=i.call(this)||this;return h.context_=e,h.pixelRatio_=r,h.extent_=n,h.transform_=a,h.viewRotation_=s,h.squaredTolerance_=o,h.userTransform_=l,h.contextFillState_=null,h.contextStrokeState_=null,h.contextTextState_=null,h.fillState_=null,h.strokeState_=null,h.image_=null,h.imageAnchorX_=0,h.imageAnchorY_=0,h.imageHeight_=0,h.imageOpacity_=0,h.imageOriginX_=0,h.imageOriginY_=0,h.imageRotateWithView_=!1,h.imageRotation_=0,h.imageScale_=[0,0],h.imageWidth_=0,h.text_="",h.textOffsetX_=0,h.textOffsetY_=0,h.textRotateWithView_=!1,h.textRotation_=0,h.textScale_=[0,0],h.textFillState_=null,h.textStrokeState_=null,h.textState_=null,h.pixelCoordinates_=[],h.tmpLocalTransform_=li(),h}return t.prototype.drawImages_=function(e,r,n,a){if(!!this.image_){var s=Ii(e,r,n,a,this.transform_,this.pixelCoordinates_),o=this.context_,l=this.tmpLocalTransform_,h=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=h*this.imageOpacity_);var u=this.imageRotation_;this.imageRotateWithView_&&(u+=this.viewRotation_);for(var c=0,d=s.length;c<d;c+=2){var f=s[c]-this.imageAnchorX_,p=s[c+1]-this.imageAnchorY_;if(u!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){var m=f+this.imageAnchorX_,v=p+this.imageAnchorY_;Me(l,m,v,1,1,u,-m,-v),o.setTransform.apply(o,l),o.translate(m,v),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.setTransform(1,0,0,1,0,0)}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,f,p,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=h)}},t.prototype.drawText_=function(e,r,n,a){if(!(!this.textState_||this.text_==="")){this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);var s=Ii(e,r,n,a,this.transform_,this.pixelCoordinates_),o=this.context_,l=this.textRotation_;for(this.textRotateWithView_&&(l+=this.viewRotation_);r<n;r+=a){var h=s[r]+this.textOffsetX_,u=s[r+1]+this.textOffsetY_;if(l!==0||this.textScale_[0]!=1||this.textScale_[1]!=1){var c=Me(this.tmpLocalTransform_,h,u,1,1,l,-h,-u);o.setTransform.apply(o,c),o.translate(h,u),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.setTransform(1,0,0,1,0,0)}else this.textStrokeState_&&o.strokeText(this.text_,h,u),this.textFillState_&&o.fillText(this.text_,h,u)}}},t.prototype.moveToLineTo_=function(e,r,n,a,s){var o=this.context_,l=Ii(e,r,n,a,this.transform_,this.pixelCoordinates_);o.moveTo(l[0],l[1]);var h=l.length;s&&(h-=2);for(var u=2;u<h;u+=2)o.lineTo(l[u],l[u+1]);return s&&o.closePath(),n},t.prototype.drawRings_=function(e,r,n,a){for(var s=0,o=n.length;s<o;++s)r=this.moveToLineTo_(e,r,n[s],a,!0);return r},t.prototype.drawCircle=function(e){if(!!Lt(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var r=wA(e,this.transform_,this.pixelCoordinates_),n=r[2]-r[0],a=r[3]-r[1],s=Math.sqrt(n*n+a*a),o=this.context_;o.beginPath(),o.arc(r[0],r[1],s,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}},t.prototype.setStyle=function(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())},t.prototype.setTransform=function(e){this.transform_=e},t.prototype.drawGeometry=function(e){var r=e.getType();switch(r){case X.POINT:this.drawPoint(e);break;case X.LINE_STRING:this.drawLineString(e);break;case X.POLYGON:this.drawPolygon(e);break;case X.MULTI_POINT:this.drawMultiPoint(e);break;case X.MULTI_LINE_STRING:this.drawMultiLineString(e);break;case X.MULTI_POLYGON:this.drawMultiPolygon(e);break;case X.GEOMETRY_COLLECTION:this.drawGeometryCollection(e);break;case X.CIRCLE:this.drawCircle(e);break}},t.prototype.drawFeature=function(e,r){var n=r.getGeometryFunction()(e);!n||!Lt(this.extent_,n.getExtent())||(this.setStyle(r),this.drawGeometry(n))},t.prototype.drawGeometryCollection=function(e){for(var r=e.getGeometriesArray(),n=0,a=r.length;n<a;++n)this.drawGeometry(r[n])},t.prototype.drawPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var r=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(r,0,r.length,n),this.text_!==""&&this.drawText_(r,0,r.length,n)},t.prototype.drawMultiPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var r=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(r,0,r.length,n),this.text_!==""&&this.drawText_(r,0,r.length,n)},t.prototype.drawLineString=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Lt(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var r=this.context_,n=e.getFlatCoordinates();r.beginPath(),this.moveToLineTo_(n,0,n.length,e.getStride(),!1),r.stroke()}if(this.text_!==""){var a=e.getFlatMidpoint();this.drawText_(a,0,2,2)}}},t.prototype.drawMultiLineString=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var r=e.getExtent();if(!!Lt(this.extent_,r)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var n=this.context_,a=e.getFlatCoordinates(),s=0,o=e.getEnds(),l=e.getStride();n.beginPath();for(var h=0,u=o.length;h<u;++h)s=this.moveToLineTo_(a,s,o[h],l,!1);n.stroke()}if(this.text_!==""){var c=e.getFlatMidpoints();this.drawText_(c,0,c.length,2)}}},t.prototype.drawPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Lt(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var r=this.context_;r.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&r.fill(),this.strokeState_&&r.stroke()}if(this.text_!==""){var n=e.getFlatInteriorPoint();this.drawText_(n,0,2,2)}}},t.prototype.drawMultiPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Lt(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var r=this.context_,n=e.getOrientedFlatCoordinates(),a=0,s=e.getEndss(),o=e.getStride();r.beginPath();for(var l=0,h=s.length;l<h;++l){var u=s[l];a=this.drawRings_(n,a,u,o)}this.fillState_&&r.fill(),this.strokeState_&&r.stroke()}if(this.text_!==""){var c=e.getFlatInteriorPoints();this.drawText_(c,0,c.length,2)}}},t.prototype.setContextFillState_=function(e){var r=this.context_,n=this.contextFillState_;n?n.fillStyle!=e.fillStyle&&(n.fillStyle=e.fillStyle,r.fillStyle=e.fillStyle):(r.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})},t.prototype.setContextStrokeState_=function(e){var r=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=e.lineCap&&(n.lineCap=e.lineCap,r.lineCap=e.lineCap),r.setLineDash&&(Sr(n.lineDash,e.lineDash)||r.setLineDash(n.lineDash=e.lineDash),n.lineDashOffset!=e.lineDashOffset&&(n.lineDashOffset=e.lineDashOffset,r.lineDashOffset=e.lineDashOffset)),n.lineJoin!=e.lineJoin&&(n.lineJoin=e.lineJoin,r.lineJoin=e.lineJoin),n.lineWidth!=e.lineWidth&&(n.lineWidth=e.lineWidth,r.lineWidth=e.lineWidth),n.miterLimit!=e.miterLimit&&(n.miterLimit=e.miterLimit,r.miterLimit=e.miterLimit),n.strokeStyle!=e.strokeStyle&&(n.strokeStyle=e.strokeStyle,r.strokeStyle=e.strokeStyle)):(r.lineCap=e.lineCap,r.setLineDash&&(r.setLineDash(e.lineDash),r.lineDashOffset=e.lineDashOffset),r.lineJoin=e.lineJoin,r.lineWidth=e.lineWidth,r.miterLimit=e.miterLimit,r.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})},t.prototype.setContextTextState_=function(e){var r=this.context_,n=this.contextTextState_,a=e.textAlign?e.textAlign:wn;n?(n.font!=e.font&&(n.font=e.font,r.font=e.font),n.textAlign!=a&&(n.textAlign=a,r.textAlign=a),n.textBaseline!=e.textBaseline&&(n.textBaseline=e.textBaseline,r.textBaseline=e.textBaseline)):(r.font=e.font,r.textAlign=a,r.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:a,textBaseline:e.textBaseline})},t.prototype.setFillStrokeStyle=function(e,r){var n=this;if(!e)this.fillState_=null;else{var a=e.getColor();this.fillState_={fillStyle:Ae(a||Fe)}}if(!r)this.strokeState_=null;else{var s=r.getColor(),o=r.getLineCap(),l=r.getLineDash(),h=r.getLineDashOffset(),u=r.getLineJoin(),c=r.getWidth(),d=r.getMiterLimit(),f=l||gn;this.strokeState_={lineCap:o!==void 0?o:Ha,lineDash:this.pixelRatio_===1?f:f.map(function(p){return p*n.pixelRatio_}),lineDashOffset:(h||yn)*this.pixelRatio_,lineJoin:u!==void 0?u:_r,lineWidth:(c!==void 0?c:An)*this.pixelRatio_,miterLimit:d!==void 0?d:bn,strokeStyle:Ae(s||xn)}}},t.prototype.setImageStyle=function(e){var r;if(!e||!(r=e.getSize())){this.image_=null;return}var n=e.getAnchor(),a=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=n[0]*this.pixelRatio_,this.imageAnchorY_=n[1]*this.pixelRatio_,this.imageHeight_=r[1]*this.pixelRatio_,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=a[0],this.imageOriginY_=a[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation(),this.imageScale_=e.getScaleArray(),this.imageWidth_=r[0]*this.pixelRatio_},t.prototype.setTextStyle=function(e){if(!e)this.text_="";else{var r=e.getFill();if(!r)this.textFillState_=null;else{var n=r.getColor();this.textFillState_={fillStyle:Ae(n||Fe)}}var a=e.getStroke();if(!a)this.textStrokeState_=null;else{var s=a.getColor(),o=a.getLineCap(),l=a.getLineDash(),h=a.getLineDashOffset(),u=a.getLineJoin(),c=a.getWidth(),d=a.getMiterLimit();this.textStrokeState_={lineCap:o!==void 0?o:Ha,lineDash:l||gn,lineDashOffset:h||yn,lineJoin:u!==void 0?u:_r,lineWidth:c!==void 0?c:An,miterLimit:d!==void 0?d:bn,strokeStyle:Ae(s||xn)}}var f=e.getFont(),p=e.getOffsetX(),m=e.getOffsetY(),v=e.getRotateWithView(),_=e.getRotation(),g=e.getScaleArray(),y=e.getText(),b=e.getTextAlign(),x=e.getTextBaseline();this.textState_={font:f!==void 0?f:yp,textAlign:b!==void 0?b:wn,textBaseline:x!==void 0?x:ja},this.text_=y!==void 0?Array.isArray(y)?y.reduce(function(w,C,A){return w+=A%2?" ":C},""):y:"",this.textOffsetX_=p!==void 0?this.pixelRatio_*p:0,this.textOffsetY_=m!==void 0?this.pixelRatio_*m:0,this.textRotateWithView_=v!==void 0?v:!1,this.textRotation_=_!==void 0?_:0,this.textScale_=[this.pixelRatio_*g[0],this.pixelRatio_*g[1]]}},t}(Cp);const lS=oS,Ke={FRACTION:"fraction",PIXELS:"pixels"},Jt={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};var hS=function(){function i(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}return i.prototype.clear=function(){this.cache_={},this.cacheSize_=0},i.prototype.canExpireCache=function(){return this.cacheSize_>this.maxCacheSize_},i.prototype.expire=function(){if(this.canExpireCache()){var t=0;for(var e in this.cache_){var r=this.cache_[e];(t++&3)===0&&!r.hasListener()&&(delete this.cache_[e],--this.cacheSize_)}}},i.prototype.get=function(t,e,r){var n=Uu(t,e,r);return n in this.cache_?this.cache_[n]:null},i.prototype.set=function(t,e,r,n){var a=Uu(t,e,r);this.cache_[a]=n,++this.cacheSize_},i.prototype.setSize=function(t){this.maxCacheSize_=t,this.expire()},i}();function Uu(i,t,e){var r=e?ep(e):"null";return t+":"+i+":"+r}var Vu=new hS,uS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Yr=null,cS=function(i){uS(t,i);function t(e,r,n,a,s,o){var l=i.call(this)||this;return l.hitDetectionImage_=null,l.image_=e||new Image,a!==null&&(l.image_.crossOrigin=a),l.canvas_={},l.color_=o,l.unlisten_=null,l.imageState_=s,l.size_=n,l.src_=r,l.tainted_,l}return t.prototype.isTainted_=function(){if(this.tainted_===void 0&&this.imageState_===Z.LOADED){Yr||(Yr=se(1,1)),Yr.drawImage(this.image_,0,0);try{Yr.getImageData(0,0,1,1),this.tainted_=!1}catch{Yr=null,this.tainted_=!0}}return this.tainted_===!0},t.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(Mt.CHANGE)},t.prototype.handleImageError_=function(){this.imageState_=Z.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.handleImageLoad_=function(){this.imageState_=Z.LOADED,this.size_?(this.image_.width=this.size_[0],this.image_.height=this.size_[1]):this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.getImage=function(e){return this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_},t.prototype.getPixelRatio=function(e){return this.replaceColor_(e),this.canvas_[e]?e:1},t.prototype.getImageState=function(){return this.imageState_},t.prototype.getHitDetectionImage=function(){if(!this.hitDetectionImage_)if(this.isTainted_()){var e=this.size_[0],r=this.size_[1],n=se(e,r);n.fillRect(0,0,e,r),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},t.prototype.getSize=function(){return this.size_},t.prototype.getSrc=function(){return this.src_},t.prototype.load=function(){if(this.imageState_==Z.IDLE){this.imageState_=Z.LOADING;try{this.image_.src=this.src_}catch{this.handleImageError_()}this.unlisten_=vl(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this))}},t.prototype.replaceColor_=function(e){if(!(!this.color_||this.canvas_[e]||this.imageState_!==Z.LOADED)){var r=document.createElement("canvas");this.canvas_[e]=r,r.width=Math.ceil(this.image_.width*e),r.height=Math.ceil(this.image_.height*e);var n=r.getContext("2d");if(n.scale(e,e),n.drawImage(this.image_,0,0),n.globalCompositeOperation="multiply",n.globalCompositeOperation==="multiply"||this.isTainted_())n.fillStyle=ep(this.color_),n.fillRect(0,0,r.width/e,r.height/e),n.globalCompositeOperation="destination-in",n.drawImage(this.image_,0,0);else{for(var a=n.getImageData(0,0,r.width,r.height),s=a.data,o=this.color_[0]/255,l=this.color_[1]/255,h=this.color_[2]/255,u=this.color_[3],c=0,d=s.length;c<d;c+=4)s[c]*=o,s[c+1]*=l,s[c+2]*=h,s[c+3]*=u;n.putImageData(a,0,0)}}},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}($n);function dS(i,t,e,r,n,a){var s=Vu.get(t,r,a);return s||(s=new cS(i,t,e,r,n,a),Vu.set(t,r,a,s)),s}var fS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),pS=function(i){fS(t,i);function t(e){var r=this,n=e||{},a=n.opacity!==void 0?n.opacity:1,s=n.rotation!==void 0?n.rotation:0,o=n.scale!==void 0?n.scale:1,l=n.rotateWithView!==void 0?n.rotateWithView:!1;r=i.call(this,{opacity:a,rotation:s,scale:o,displacement:n.displacement!==void 0?n.displacement:[0,0],rotateWithView:l})||this,r.anchor_=n.anchor!==void 0?n.anchor:[.5,.5],r.normalizedAnchor_=null,r.anchorOrigin_=n.anchorOrigin!==void 0?n.anchorOrigin:Jt.TOP_LEFT,r.anchorXUnits_=n.anchorXUnits!==void 0?n.anchorXUnits:Ke.FRACTION,r.anchorYUnits_=n.anchorYUnits!==void 0?n.anchorYUnits:Ke.FRACTION,r.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null;var h=n.img!==void 0?n.img:null;r.imgSize_=n.imgSize;var u=n.src;J(!(u!==void 0&&h),4),J(!h||h&&r.imgSize_,5),(u===void 0||u.length===0)&&h&&(u=h.src||ot(h)),J(u!==void 0&&u.length>0,6);var c=n.src!==void 0?Z.IDLE:Z.LOADED;return r.color_=n.color!==void 0?Ya(n.color):null,r.iconImage_=dS(h,u,r.imgSize_!==void 0?r.imgSize_:null,r.crossOrigin_,c,r.color_),r.offset_=n.offset!==void 0?n.offset:[0,0],r.offsetOrigin_=n.offsetOrigin!==void 0?n.offsetOrigin:Jt.TOP_LEFT,r.origin_=null,r.size_=n.size!==void 0?n.size:null,r}return t.prototype.clone=function(){var e=this.getScale();return new t({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,imgSize:this.imgSize_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:Array.isArray(e)?e.slice():e,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc()})},t.prototype.getAnchor=function(){var e=this.normalizedAnchor_;if(!e){e=this.anchor_;var r=this.getSize();if(this.anchorXUnits_==Ke.FRACTION||this.anchorYUnits_==Ke.FRACTION){if(!r)return null;e=this.anchor_.slice(),this.anchorXUnits_==Ke.FRACTION&&(e[0]*=r[0]),this.anchorYUnits_==Ke.FRACTION&&(e[1]*=r[1])}if(this.anchorOrigin_!=Jt.TOP_LEFT){if(!r)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_==Jt.TOP_RIGHT||this.anchorOrigin_==Jt.BOTTOM_RIGHT)&&(e[0]=-e[0]+r[0]),(this.anchorOrigin_==Jt.BOTTOM_LEFT||this.anchorOrigin_==Jt.BOTTOM_RIGHT)&&(e[1]=-e[1]+r[1])}this.normalizedAnchor_=e}var n=this.getDisplacement();return[e[0]-n[0],e[1]+n[1]]},t.prototype.setAnchor=function(e){this.anchor_=e,this.normalizedAnchor_=null},t.prototype.getColor=function(){return this.color_},t.prototype.getImage=function(e){return this.iconImage_.getImage(e)},t.prototype.getPixelRatio=function(e){return this.iconImage_.getPixelRatio(e)},t.prototype.getImageSize=function(){return this.iconImage_.getSize()},t.prototype.getImageState=function(){return this.iconImage_.getImageState()},t.prototype.getHitDetectionImage=function(){return this.iconImage_.getHitDetectionImage()},t.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var e=this.offset_;if(this.offsetOrigin_!=Jt.TOP_LEFT){var r=this.getSize(),n=this.iconImage_.getSize();if(!r||!n)return null;e=e.slice(),(this.offsetOrigin_==Jt.TOP_RIGHT||this.offsetOrigin_==Jt.BOTTOM_RIGHT)&&(e[0]=n[0]-r[0]-e[0]),(this.offsetOrigin_==Jt.BOTTOM_LEFT||this.offsetOrigin_==Jt.BOTTOM_RIGHT)&&(e[1]=n[1]-r[1]-e[1])}return this.origin_=e,this.origin_},t.prototype.getSrc=function(){return this.iconImage_.getSrc()},t.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},t.prototype.listenImageChange=function(e){this.iconImage_.addEventListener(Mt.CHANGE,e)},t.prototype.load=function(){this.iconImage_.load()},t.prototype.unlistenImageChange=function(e){this.iconImage_.removeEventListener(Mt.CHANGE,e)},t}(gp);const Ep=pS;var xe=.5;function mS(i,t,e,r,n,a,s){var o=i[0]*xe,l=i[1]*xe,h=se(o,l);h.imageSmoothingEnabled=!1;for(var u=h.canvas,c=new lS(h,xe,n,null,s),d=e.length,f=Math.floor((256*256*256-1)/d),p={},m=1;m<=d;++m){var v=e[m-1],_=v.getStyleFunction()||r;if(!!r){var g=_(v,a);if(!!g){Array.isArray(g)||(g=[g]);for(var y=m*f,b="#"+("000000"+y.toString(16)).slice(-6),x=0,w=g.length;x<w;++x){var C=g[x],A=C.getGeometryFunction()(v);if(!(!A||!Lt(n,A.getExtent()))){var T=C.clone(),R=T.getFill();R&&R.setColor(b);var L=T.getStroke();L&&(L.setColor(b),L.setLineDash(null)),T.setText(void 0);var F=C.getImage();if(F&&F.getOpacity()!==0){var P=F.getImageSize();if(!P)continue;var U=se(P[0],P[1],void 0,{alpha:!1}),N=U.canvas;U.fillStyle=b,U.fillRect(0,0,N.width,N.height),T.setImage(new Ep({img:N,imgSize:P,anchor:F.getAnchor(),anchorXUnits:Ke.PIXELS,anchorYUnits:Ke.PIXELS,offset:F.getOrigin(),opacity:1,size:F.getSize(),scale:F.getScale(),rotation:F.getRotation(),rotateWithView:F.getRotateWithView()}))}var z=T.getZIndex()||0,k=p[z];k||(k={},p[z]=k,k[X.POLYGON]=[],k[X.CIRCLE]=[],k[X.LINE_STRING]=[],k[X.POINT]=[]),k[A.getType().replace("Multi","")].push(A,T)}}}}}for(var V=Object.keys(p).map(Number).sort(mr),m=0,j=V.length;m<j;++m){var k=p[V[m]];for(var K in k)for(var ut=k[K],x=0,w=ut.length;x<w;x+=2){c.setStyle(ut[x+1]);for(var S=0,pt=t.length;S<pt;++S)c.setTransform(t[S]),c.drawGeometry(ut[x])}}return h.getImageData(0,0,u.width,u.height)}function vS(i,t,e){var r=[];if(e){var n=Math.floor(Math.round(i[0])*xe),a=Math.floor(Math.round(i[1])*xe),s=(bt(n,0,e.width-1)+bt(a,0,e.height-1)*e.width)*4,o=e.data[s],l=e.data[s+1],h=e.data[s+2],u=h+256*(l+256*o),c=Math.floor((256*256*256-1)/t.length);u&&u%c===0&&r.push(t[u/c-1])}return r}var _S=.5,Sp={Point:SS,LineString:AS,Polygon:MS,MultiPoint:TS,MultiLineString:CS,MultiPolygon:ES,GeometryCollection:wS,Circle:bS};function gS(i,t){return parseInt(ot(i),10)-parseInt(ot(t),10)}function yS(i,t){var e=Mo(i,t);return e*e}function Mo(i,t){return _S*i/t}function bS(i,t,e,r,n){var a=e.getFill(),s=e.getStroke();if(a||s){var o=i.getBuilder(e.getZIndex(),ft.CIRCLE);o.setFillStrokeStyle(a,s),o.drawCircle(t,r)}var l=e.getText();if(l&&l.getText()){var h=(n||i).getBuilder(e.getZIndex(),ft.TEXT);h.setTextStyle(l),h.drawText(t,r)}}function Yu(i,t,e,r,n,a,s){var o=!1,l=e.getImage();if(l){var h=l.getImageState();h==Z.LOADED||h==Z.ERROR?l.unlistenImageChange(n):(h==Z.IDLE&&l.load(),h=l.getImageState(),l.listenImageChange(n),o=!0)}return xS(i,t,e,r,a,s),o}function xS(i,t,e,r,n,a){var s=e.getGeometryFunction()(t);if(!!s){var o=s.simplifyTransformed(r,n),l=e.getRenderer();if(l)Tp(i,o,e,t);else{var h=Sp[o.getType()];h(i,o,e,t,a)}}}function Tp(i,t,e,r){if(t.getType()==X.GEOMETRY_COLLECTION){for(var n=t.getGeometries(),a=0,s=n.length;a<s;++a)Tp(i,n[a],e,r);return}var o=i.getBuilder(e.getZIndex(),ft.DEFAULT);o.drawCustom(t,r,e.getRenderer(),e.getHitDetectionRenderer())}function wS(i,t,e,r,n){var a=t.getGeometriesArray(),s,o;for(s=0,o=a.length;s<o;++s){var l=Sp[a[s].getType()];l(i,a[s],e,r,n)}}function AS(i,t,e,r,n){var a=e.getStroke();if(a){var s=i.getBuilder(e.getZIndex(),ft.LINE_STRING);s.setFillStrokeStyle(null,a),s.drawLineString(t,r)}var o=e.getText();if(o&&o.getText()){var l=(n||i).getBuilder(e.getZIndex(),ft.TEXT);l.setTextStyle(o),l.drawText(t,r)}}function CS(i,t,e,r,n){var a=e.getStroke();if(a){var s=i.getBuilder(e.getZIndex(),ft.LINE_STRING);s.setFillStrokeStyle(null,a),s.drawMultiLineString(t,r)}var o=e.getText();if(o&&o.getText()){var l=(n||i).getBuilder(e.getZIndex(),ft.TEXT);l.setTextStyle(o),l.drawText(t,r)}}function ES(i,t,e,r,n){var a=e.getFill(),s=e.getStroke();if(s||a){var o=i.getBuilder(e.getZIndex(),ft.POLYGON);o.setFillStrokeStyle(a,s),o.drawMultiPolygon(t,r)}var l=e.getText();if(l&&l.getText()){var h=(n||i).getBuilder(e.getZIndex(),ft.TEXT);h.setTextStyle(l),h.drawText(t,r)}}function SS(i,t,e,r,n){var a=e.getImage(),s=e.getText(),o;if(n&&(i=n,o=a&&s&&s.getText()?{}:void 0),a){if(a.getImageState()!=Z.LOADED)return;var l=i.getBuilder(e.getZIndex(),ft.IMAGE);l.setImageStyle(a,o),l.drawPoint(t,r)}if(s&&s.getText()){var h=i.getBuilder(e.getZIndex(),ft.TEXT);h.setTextStyle(s,o),h.drawText(t,r)}}function TS(i,t,e,r,n){var a=e.getImage(),s=e.getText(),o;if(n&&(i=n,o=a&&s&&s.getText()?{}:void 0),a){if(a.getImageState()!=Z.LOADED)return;var l=i.getBuilder(e.getZIndex(),ft.IMAGE);l.setImageStyle(a,o),l.drawMultiPoint(t,r)}if(s&&s.getText()){var h=(n||i).getBuilder(e.getZIndex(),ft.TEXT);h.setTextStyle(s,o),h.drawText(t,r)}}function MS(i,t,e,r,n){var a=e.getFill(),s=e.getStroke();if(a||s){var o=i.getBuilder(e.getZIndex(),ft.POLYGON);o.setFillStrokeStyle(a,s),o.drawPolygon(t,r)}var l=e.getText();if(l&&l.getText()){var h=(n||i).getBuilder(e.getZIndex(),ft.TEXT);h.setTextStyle(l),h.drawText(t,r)}}var IS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),OS=function(i){IS(t,i);function t(e){var r=i.call(this,e)||this;return r.boundHandleStyleImageChange_=r.handleStyleImageChange_.bind(r),r.animatingOrInteracting_,r.dirty_=!1,r.hitDetectionImageData_=null,r.renderedFeatures_=null,r.renderedRevision_=-1,r.renderedResolution_=NaN,r.renderedExtent_=ne(),r.wrappedRenderedExtent_=ne(),r.renderedRotation_,r.renderedCenter_=null,r.renderedProjection_=null,r.renderedRenderOrder_=null,r.replayGroup_=null,r.replayGroupChanged=!0,r.declutterExecutorGroup=null,r.clipping=!0,r}return t.prototype.renderWorlds=function(e,r,n){var a=r.extent,s=r.viewState,o=s.center,l=s.resolution,h=s.projection,u=s.rotation,c=h.getExtent(),d=this.getLayer().getSource(),f=r.pixelRatio,p=r.viewHints,m=!(p[Vt.ANIMATING]||p[Vt.INTERACTING]),v=this.context,_=Math.round(r.size[0]*f),g=Math.round(r.size[1]*f),y=d.getWrapX()&&h.canWrapX(),b=y?lt(c):null,x=y?Math.ceil((a[2]-c[2])/b)+1:1,w=y?Math.floor((a[0]-c[0])/b):0;do{var C=this.getRenderTransform(o,l,u,f,_,g,w*b);e.execute(v,1,C,u,m,void 0,n)}while(++w<x)},t.prototype.renderDeclutter=function(e){this.declutterExecutorGroup&&this.renderWorlds(this.declutterExecutorGroup,e,e.declutterTree)},t.prototype.renderFrame=function(e,r){var n=e.pixelRatio,a=e.layerStatesArray[e.layerIndex];dA(this.pixelTransform,1/n,1/n),ll(this.inversePixelTransform,this.pixelTransform);var s=hl(this.pixelTransform);this.useContainer(r,s,a.opacity,this.getBackground(e));var o=this.context,l=o.canvas,h=this.replayGroup_,u=this.declutterExecutorGroup;if((!h||h.isEmpty())&&(!u||u.isEmpty()))return null;var c=Math.round(e.size[0]*n),d=Math.round(e.size[1]*n);l.width!=c||l.height!=d?(l.width=c,l.height=d,l.style.transform!==s&&(l.style.transform=s)):this.containerReused||o.clearRect(0,0,c,d),this.preRender(o,e);var f=e.viewState,p=f.projection,m=!1,v=!0;if(a.extent&&this.clipping){var _=ke(a.extent,p);v=Lt(_,e.extent),m=v&&!ei(_,e.extent),m&&this.clipUnrotated(o,e,_)}v&&this.renderWorlds(h,e),m&&o.restore(),this.postRender(o,e);var g=pp(a.opacity),y=this.container;return g!==y.style.opacity&&(y.style.opacity=g),this.renderedRotation_!==f.rotation&&(this.renderedRotation_=f.rotation,this.hitDetectionImageData_=null),this.container},t.prototype.getFeatures=function(e){return new Promise(function(r){if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){var n=[this.context.canvas.width,this.context.canvas.height];At(this.pixelTransform,n);var a=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,l=this.renderedProjection_,h=this.wrappedRenderedExtent_,u=this.getLayer(),c=[],d=n[0]*xe,f=n[1]*xe;c.push(this.getRenderTransform(a,s,o,xe,d,f,0).slice());var p=u.getSource(),m=l.getExtent();if(p.getWrapX()&&l.canWrapX()&&!ei(m,h)){for(var v=h[0],_=lt(m),g=0,y=void 0;v<m[0];)--g,y=_*g,c.push(this.getRenderTransform(a,s,o,xe,d,f,y).slice()),v+=_;for(g=0,v=h[2];v>m[2];)++g,y=_*g,c.push(this.getRenderTransform(a,s,o,xe,d,f,y).slice()),v-=_}this.hitDetectionImageData_=mS(n,c,this.renderedFeatures_,u.getStyleFunction(),h,s,o)}r(vS(e,this.renderedFeatures_,this.hitDetectionImageData_))}.bind(this))},t.prototype.forEachFeatureAtCoordinate=function(e,r,n,a,s){var o=this;if(!!this.replayGroup_){var l=r.viewState.resolution,h=r.viewState.rotation,u=this.getLayer(),c={},d=function(m,v,_){var g=ot(m),y=c[g];if(y){if(y!==!0&&_<y.distanceSq){if(_===0)return c[g]=!0,s.splice(s.lastIndexOf(y),1),a(m,u,v);y.geometry=v,y.distanceSq=_}}else{if(_===0)return c[g]=!0,a(m,u,v);s.push(c[g]={feature:m,layer:u,geometry:v,distanceSq:_,callback:a})}},f,p=[this.replayGroup_];return this.declutterExecutorGroup&&p.push(this.declutterExecutorGroup),p.some(function(m){return f=m.forEachFeatureAtCoordinate(e,l,h,n,d,m===o.declutterExecutorGroup&&r.declutterTree?r.declutterTree.all().map(function(v){return v.value}):null)}),f}},t.prototype.handleFontsChanged=function(){var e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()},t.prototype.handleStyleImageChange_=function(e){this.renderIfReadyAndVisible()},t.prototype.prepareFrame=function(e){var r=this.getLayer(),n=r.getSource();if(!n)return!1;var a=e.viewHints[Vt.ANIMATING],s=e.viewHints[Vt.INTERACTING],o=r.getUpdateWhileAnimating(),l=r.getUpdateWhileInteracting();if(!this.dirty_&&!o&&a||!l&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;var h=e.extent,u=e.viewState,c=u.projection,d=u.resolution,f=e.pixelRatio,p=r.getRevision(),m=r.getRenderBuffer(),v=r.getRenderOrder();v===void 0&&(v=gS);var _=u.center.slice(),g=cn(h,m*d),y=g.slice(),b=[g.slice()],x=c.getExtent();if(n.getWrapX()&&c.canWrapX()&&!ei(x,e.extent)){var w=lt(x),C=Math.max(lt(g)/2,w);g[0]=x[0]-C,g[2]=x[2]+C,s0(_,c);var A=r0(b[0],c);A[0]<x[0]&&A[2]<x[2]?b.push([A[0]+w,A[1],A[2]+w,A[3]]):A[0]>x[0]&&A[2]>x[2]&&b.push([A[0]-w,A[1],A[2]-w,A[3]])}if(!this.dirty_&&this.renderedResolution_==d&&this.renderedRevision_==p&&this.renderedRenderOrder_==v&&ei(this.wrappedRenderedExtent_,g))return Sr(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=_,this.replayGroupChanged=!1,!0;this.replayGroup_=null,this.dirty_=!1;var T=new Bu(Mo(d,f),g,d,f),R;this.getLayer().getDeclutter()&&(R=new Bu(Mo(d,f),g,d,f));var L=_f(),F;if(L){for(var P=0,U=b.length;P<U;++P){var N=b[P],z=bo(N,c);n.loadFeatures(z,d0(d,c),L)}F=ps(L,c)}else for(var P=0,U=b.length;P<U;++P)n.loadFeatures(b[P],d,c);var k=yS(d,f),V=function(pt){var W,mt=pt.getStyleFunction()||r.getStyleFunction();if(mt&&(W=mt(pt,d)),W){var kt=this.renderFeature(pt,k,W,T,F,R);this.dirty_=this.dirty_||kt}}.bind(this),j=bo(g,c),K=n.getFeaturesInExtent(j);v&&K.sort(v);for(var P=0,U=K.length;P<U;++P)V(K[P]);this.renderedFeatures_=K;var ut=T.finish(),S=new Gu(g,d,f,n.getOverlaps(),ut,r.getRenderBuffer());return R&&(this.declutterExecutorGroup=new Gu(g,d,f,n.getOverlaps(),R.finish(),r.getRenderBuffer())),this.renderedResolution_=d,this.renderedRevision_=p,this.renderedRenderOrder_=v,this.renderedExtent_=y,this.wrappedRenderedExtent_=g,this.renderedCenter_=_,this.renderedProjection_=c,this.replayGroup_=S,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0},t.prototype.renderFeature=function(e,r,n,a,s,o){if(!n)return!1;var l=!1;if(Array.isArray(n))for(var h=0,u=n.length;h<u;++h)l=Yu(a,e,n[h],r,this.boundHandleStyleImageChange_,s,o)||l;else l=Yu(a,e,n,r,this.boundHandleStyleImageChange_,s,o);return l},t}(ml);const RS=OS;var DS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),kS=function(i){DS(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new RS(this)},t}(kE);const PS=kS;function Za(i){return[i.x,i.y]}function LS(i){return[i.width,i.height]}function Mp(i,t,e){if(!(t.length!==i.getLength()||i.getArray().some((a,s)=>a.id!==t[s])))return;const n=t.map(a=>e.lookup.get(a)).filter(a=>!!a);i.clear(),n.forEach(a=>i.push(a))}function ze(i){const t={...i};return Object.keys(i).forEach(e=>{i[e]===null&&delete t[e]}),t}function _l(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/layer/Layer");return i.setOpacity(t.opacity),i.setVisible(t.visible),i.setZIndex(t.zIndex||void 0),i.setMinZoom(t.minZoom||-1/0),i.setMaxZoom(t.maxZoom||1/0),i.setBackground(t.background||void 0),i}function FS(i,t,e){return i||(i=new aE(ze({...t,source:e.lookup.get(t.source)}))),_l(i,t),i.setSource(e.lookup.get(t.source)),i}function NS(i,t,e){return i||(i=new PS(ze({...t,source:e.lookup.get(t.source)}))),_l(i,t),i.setSource(e.lookup.get(t.source)),i}function BS(i,t,e){return i||(i=new kC(ze({...t,source:e.lookup.get(t.source)}))),_l(i,t),i.setSource(e.lookup.get(t.source)),i}const rr={ADD:"add",REMOVE:"remove"};var Ip=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Wu={LENGTH:"length"},fa=function(i){Ip(t,i);function t(e,r,n){var a=i.call(this,e)||this;return a.element=r,a.index=n,a}return t}(ki),zS=function(i){Ip(t,i);function t(e,r){var n=i.call(this)||this;n.on,n.once,n.un;var a=r||{};if(n.unique_=!!a.unique,n.array_=e||[],n.unique_)for(var s=0,o=n.array_.length;s<o;++s)n.assertUnique_(n.array_[s],s);return n.updateLength_(),n}return t.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},t.prototype.extend=function(e){for(var r=0,n=e.length;r<n;++r)this.push(e[r]);return this},t.prototype.forEach=function(e){for(var r=this.array_,n=0,a=r.length;n<a;++n)e(r[n],n,r)},t.prototype.getArray=function(){return this.array_},t.prototype.item=function(e){return this.array_[e]},t.prototype.getLength=function(){return this.get(Wu.LENGTH)},t.prototype.insertAt=function(e,r){this.unique_&&this.assertUnique_(r),this.array_.splice(e,0,r),this.updateLength_(),this.dispatchEvent(new fa(rr.ADD,r,e))},t.prototype.pop=function(){return this.removeAt(this.getLength()-1)},t.prototype.push=function(e){this.unique_&&this.assertUnique_(e);var r=this.getLength();return this.insertAt(r,e),this.getLength()},t.prototype.remove=function(e){for(var r=this.array_,n=0,a=r.length;n<a;++n)if(r[n]===e)return this.removeAt(n)},t.prototype.removeAt=function(e){var r=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new fa(rr.REMOVE,r,e)),r},t.prototype.setAt=function(e,r){var n=this.getLength();if(e<n){this.unique_&&this.assertUnique_(r,e);var a=this.array_[e];this.array_[e]=r,this.dispatchEvent(new fa(rr.REMOVE,a,e)),this.dispatchEvent(new fa(rr.ADD,r,e))}else{for(var s=n;s<e;++s)this.insertAt(s,void 0);this.insertAt(e,r)}},t.prototype.updateLength_=function(){this.set(Wu.LENGTH,this.array_.length)},t.prototype.assertUnique_=function(e,r){for(var n=0,a=this.array_.length;n<a;++n)if(this.array_[n]===e&&n!==r)throw new of(58)},t}(Pi);const Op=zS;var ri="1.3.0",$S=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),GS=function(i){$S(t,i);function t(e,r,n,a,s,o,l){var h=this,u=e.getExtent(),c=r.getExtent(),d=c?or(n,c):n,f=ui(d),p=_n(e,r,f,a),m=rp,v=new lp(e,r,d,u,p*m,a),_=v.calculateSourceExtent(),g=o(_,p,s),y=g?Z.IDLE:Z.EMPTY,b=g?g.getPixelRatio():1;return h=i.call(this,n,a,b,y)||this,h.targetProj_=r,h.maxSourceExtent_=u,h.triangulation_=v,h.targetResolution_=a,h.targetExtent_=n,h.sourceImage_=g,h.sourcePixelRatio_=b,h.interpolate_=l,h.canvas_=null,h.sourceListenerKey_=null,h}return t.prototype.disposeInternal=function(){this.state==Z.LOADING&&this.unlistenSource_(),i.prototype.disposeInternal.call(this)},t.prototype.getImage=function(){return this.canvas_},t.prototype.getProjection=function(){return this.targetProj_},t.prototype.reproject_=function(){var e=this.sourceImage_.getState();if(e==Z.LOADED){var r=lt(this.targetExtent_)/this.targetResolution_,n=Rt(this.targetExtent_)/this.targetResolution_;this.canvas_=hp(r,n,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=e,this.changed()},t.prototype.load=function(){if(this.state==Z.IDLE){this.state=Z.LOADING,this.changed();var e=this.sourceImage_.getState();e==Z.LOADED||e==Z.ERROR?this.reproject_():(this.sourceListenerKey_=pe(this.sourceImage_,Mt.CHANGE,function(r){var n=this.sourceImage_.getState();(n==Z.LOADED||n==Z.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}},t.prototype.unlistenSource_=function(){ie(this.sourceListenerKey_),this.sourceListenerKey_=null},t}(sp);const US=GS;var VS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),YS=function(i){VS(t,i);function t(e){var r=i.call(this)||this;r.projection=xt(e.projection),r.attributions_=Hu(e.attributions),r.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,r.loading=!1,r.state_=e.state!==void 0?e.state:bs.READY,r.wrapX_=e.wrapX!==void 0?e.wrapX:!1,r.interpolate_=!!e.interpolate,r.viewResolver=null,r.viewRejector=null;var n=r;return r.viewPromise_=new Promise(function(a,s){n.viewResolver=a,n.viewRejector=s}),r}return t.prototype.getAttributions=function(){return this.attributions_},t.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},t.prototype.getProjection=function(){return this.projection},t.prototype.getResolutions=function(){return Q()},t.prototype.getView=function(){return this.viewPromise_},t.prototype.getState=function(){return this.state_},t.prototype.getWrapX=function(){return this.wrapX_},t.prototype.getInterpolate=function(){return this.interpolate_},t.prototype.refresh=function(){this.changed()},t.prototype.setAttributions=function(e){this.attributions_=Hu(e),this.changed()},t.prototype.setState=function(e){this.state_=e,this.changed()},t}(Pi);function Hu(i){return i?Array.isArray(i)?function(t){return i}:typeof i=="function"?i:function(t){return[i]}:null}const gl=YS;var Rp=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),qs={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"},WS=function(i){Rp(t,i);function t(e,r){var n=i.call(this,e)||this;return n.image=r,n}return t}(ki),HS=function(i){Rp(t,i);function t(e){var r=this,n=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(n=e.interpolate),r=i.call(this,{attributions:e.attributions,projection:e.projection,state:e.state,interpolate:n})||this,r.on,r.once,r.un,r.resolutions_=e.resolutions!==void 0?e.resolutions:null,r.reprojectedImage_=null,r.reprojectedRevision_=0,r}return t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.findNearestResolution=function(e){if(this.resolutions_){var r=_s(this.resolutions_,e,0);e=this.resolutions_[r]}return e},t.prototype.getImage=function(e,r,n,a){var s=this.getProjection();if(!he||!s||!a||Qe(s,a))return s&&(a=s),this.getImageInternal(e,r,n,a);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Qe(this.reprojectedImage_.getProjection(),a)&&this.reprojectedImage_.getResolution()==r&&us(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new US(s,a,e,r,n,function(o,l,h){return this.getImageInternal(o,l,h,s)}.bind(this),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_},t.prototype.getImageInternal=function(e,r,n,a){return Q()},t.prototype.handleImageChange=function(e){var r=e.target,n;switch(r.getState()){case Z.LOADING:this.loading=!0,n=qs.IMAGELOADSTART;break;case Z.LOADED:this.loading=!1,n=qs.IMAGELOADEND;break;case Z.ERROR:this.loading=!1,n=qs.IMAGELOADERROR;break;default:return}this.hasListener(n)&&this.dispatchEvent(new WS(n,r))},t}(gl);function jS(i,t){i.getImage().src=t}const qS=HS,ni={CARMENTA_SERVER:"carmentaserver",GEOSERVER:"geoserver",MAPSERVER:"mapserver",QGIS:"qgis"};function Ka(i,t){var e=[];Object.keys(t).forEach(function(n){t[n]!==null&&t[n]!==void 0&&e.push(n+"="+encodeURIComponent(t[n]))});var r=e.join("&");return i=i.replace(/[?&]$/,""),i=i.indexOf("?")===-1?i+"?":i+"&",i+r}var XS=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),qe=4,ju=[101,101],ZS=function(i){XS(t,i);function t(e){var r=this,n=e||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;return n.interpolate!==void 0&&(a=n.interpolate),r=i.call(this,{attributions:n.attributions,interpolate:a,projection:n.projection,resolutions:n.resolutions})||this,r.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null,r.url_=n.url,r.imageLoadFunction_=n.imageLoadFunction!==void 0?n.imageLoadFunction:jS,r.params_=n.params||{},r.v13_=!0,r.updateV13_(),r.serverType_=n.serverType,r.hidpi_=n.hidpi!==void 0?n.hidpi:!0,r.image_=null,r.imageSize_=[0,0],r.renderedRevision_=0,r.ratio_=n.ratio!==void 0?n.ratio:1.5,r}return t.prototype.getFeatureInfoUrl=function(e,r,n,a){if(this.url_!==void 0){var s=xt(n),o=this.getProjection();o&&o!==s&&(r=_n(o,s,e,r),e=Pn(e,s,o));var l=xa(e,r,0,ju),h={SERVICE:"WMS",VERSION:ri,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ht(h,this.params_,a);var u=Zi((e[0]-l[0])/r,qe),c=Zi((l[3]-e[1])/r,qe);return h[this.v13_?"I":"X"]=u,h[this.v13_?"J":"Y"]=c,this.getRequestUrl_(l,ju,1,o||s,h)}},t.prototype.getLegendUrl=function(e,r){if(this.url_!==void 0){var n={SERVICE:"WMS",VERSION:ri,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(r===void 0||r.LAYER===void 0){var a=this.params_.LAYERS,s=!Array.isArray(a)||a.length===1;if(!s)return;n.LAYER=a}if(e!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=e*o/l}return ht(n,r),Ka(this.url_,n)}},t.prototype.getParams=function(){return this.params_},t.prototype.getImageInternal=function(e,r,n,a){if(this.url_===void 0)return null;r=this.findNearestResolution(r),n!=1&&(!this.hidpi_||this.serverType_===void 0)&&(n=1);var s=r/n,o=ui(e),l=ti(lt(e)/s,qe),h=ti(Rt(e)/s,qe),u=xa(o,s,0,[l,h]),c=ti(this.ratio_*lt(e)/s,qe),d=ti(this.ratio_*Rt(e)/s,qe),f=xa(o,s,0,[c,d]),p=this.image_;if(p&&this.renderedRevision_==this.getRevision()&&p.getResolution()==r&&p.getPixelRatio()==n&&ei(p.getExtent(),u))return p;var m={SERVICE:"WMS",VERSION:ri,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};ht(m,this.params_),this.imageSize_[0]=Gh(lt(f)/s,qe),this.imageSize_[1]=Gh(Rt(f)/s,qe);var v=this.getRequestUrl_(f,this.imageSize_,n,a,m);return this.image_=new VC(f,r,n,v,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(Mt.CHANGE,this.handleImageChange.bind(this)),this.image_},t.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},t.prototype.getRequestUrl_=function(e,r,n,a,s){if(J(this.url_!==void 0,9),s[this.v13_?"CRS":"SRS"]=a.getCode(),"STYLES"in this.params_||(s.STYLES=""),n!=1)switch(this.serverType_){case ni.GEOSERVER:var o=90*n+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+o:s.FORMAT_OPTIONS="dpi:"+o;break;case ni.MAPSERVER:s.MAP_RESOLUTION=90*n;break;case ni.CARMENTA_SERVER:case ni.QGIS:s.DPI=90*n;break;default:J(!1,8);break}s.WIDTH=r[0],s.HEIGHT=r[1];var l=a.getAxisOrientation(),h;return this.v13_&&l.substr(0,2)=="ne"?h=[e[1],e[0],e[3],e[2]]:h=e,s.BBOX=h.join(","),Ka(this.url_,s)},t.prototype.getUrl=function(){return this.url_},t.prototype.setImageLoadFunction=function(e){this.image_=null,this.imageLoadFunction_=e,this.changed()},t.prototype.setUrl=function(e){e!=this.url_&&(this.url_=e,this.image_=null,this.changed())},t.prototype.updateParams=function(e){ht(this.params_,e),this.updateV13_(),this.image_=null,this.changed()},t.prototype.updateV13_=function(){var e=this.params_.VERSION||ri;this.v13_=df(e,"1.3")>=0},t}(qS);const KS=ZS;var QS=function(){function i(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return i.prototype.canExpireCache=function(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark},i.prototype.expireCache=function(t){for(;this.canExpireCache();)this.pop()},i.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null},i.prototype.containsKey=function(t){return this.entries_.hasOwnProperty(t)},i.prototype.forEach=function(t){for(var e=this.oldest_;e;)t(e.value_,e.key_,this),e=e.newer},i.prototype.get=function(t,e){var r=this.entries_[t];return J(r!==void 0,15),r===this.newest_||(r===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(r.newer.older=r.older,r.older.newer=r.newer),r.newer=null,r.older=this.newest_,this.newest_.newer=r,this.newest_=r),r.value_},i.prototype.remove=function(t){var e=this.entries_[t];return J(e!==void 0,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_},i.prototype.getCount=function(){return this.count_},i.prototype.getKeys=function(){var t=new Array(this.count_),e=0,r;for(r=this.newest_;r;r=r.older)t[e++]=r.key_;return t},i.prototype.getValues=function(){var t=new Array(this.count_),e=0,r;for(r=this.newest_;r;r=r.older)t[e++]=r.value_;return t},i.prototype.peekLast=function(){return this.oldest_.value_},i.prototype.peekLastKey=function(){return this.oldest_.key_},i.prototype.peekFirstKey=function(){return this.newest_.key_},i.prototype.pop=function(){var t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_},i.prototype.replace=function(t,e){this.get(t),this.entries_[t].value_=e},i.prototype.set=function(t,e){J(!(t in this.entries_),16);var r={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=r:this.oldest_=r,this.newest_=r,this.entries_[t]=r,++this.count_},i.prototype.setSize=function(t){this.highWaterMark=t},i}();const JS=QS;function qu(i,t,e,r){return r!==void 0?(r[0]=i,r[1]=t,r[2]=e,r):[i,t,e]}function xs(i,t,e){return i+"/"+t+"/"+e}function Dp(i){return xs(i[0],i[1],i[2])}function tT(i){return i.split("/").map(Number)}function kp(i){return(i[1]<<i[0])+i[2]}function eT(i,t){var e=i[0],r=i[1],n=i[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;var a=t.getFullTileRange(e);return a?a.containsXY(r,n):!0}var iT=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),rT=function(i){iT(t,i);function t(){return i!==null&&i.apply(this,arguments)||this}return t.prototype.expireCache=function(e){for(;this.canExpireCache();){var r=this.peekLast();if(r.getKey()in e)break;this.pop().release()}},t.prototype.pruneExceptNewestZ=function(){if(this.getCount()!==0){var e=this.peekFirstKey(),r=tT(e),n=r[0];this.forEach(function(a){a.tileCoord[0]!==n&&(this.remove(Dp(a.tileCoord)),a.release())}.bind(this))}},t}(JS);const Pp=rT,Xs={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};var nT=[0,0,0],Xe=5,aT=function(){function i(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,J(K1(this.resolutions_,function(s,o){return o-s},!0),17);var e;if(!t.origins){for(var r=0,n=this.resolutions_.length-1;r<n;++r)if(!e)e=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,J(this.origins_.length==this.resolutions_.length,20));var a=t.extent;a!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Di(a)),J(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,J(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:cl,J(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=a!==void 0?a:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map(function(s,o){var l=new dp(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(a){var h=this.getTileRangeForExtentAndZ(a,o);l.minX=Math.max(h.minX,l.minX),l.maxX=Math.min(h.maxX,l.maxX),l.minY=Math.max(h.minY,l.minY),l.maxY=Math.min(h.maxY,l.maxY)}return l},this):a&&this.calculateTileRanges_(a)}return i.prototype.forEachTileCoord=function(t,e,r){for(var n=this.getTileRangeForExtentAndZ(t,e),a=n.minX,s=n.maxX;a<=s;++a)for(var o=n.minY,l=n.maxY;o<=l;++o)r([e,a,o])},i.prototype.forEachTileCoordParentTileRange=function(t,e,r,n){var a,s,o,l=null,h=t[0]-1;for(this.zoomFactor_===2?(s=t[1],o=t[2]):l=this.getTileCoordExtent(t,n);h>=this.minZoom;){if(this.zoomFactor_===2?(s=Math.floor(s/2),o=Math.floor(o/2),a=Yi(s,s,o,o,r)):a=this.getTileRangeForExtentAndZ(l,h,r),e(h,a))return!0;--h}return!1},i.prototype.getExtent=function(){return this.extent_},i.prototype.getMaxZoom=function(){return this.maxZoom},i.prototype.getMinZoom=function(){return this.minZoom},i.prototype.getOrigin=function(t){return this.origin_?this.origin_:this.origins_[t]},i.prototype.getResolution=function(t){return this.resolutions_[t]},i.prototype.getResolutions=function(){return this.resolutions_},i.prototype.getTileCoordChildTileRange=function(t,e,r){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){var n=t[1]*2,a=t[2]*2;return Yi(n,n+1,a,a+1,e)}var s=this.getTileCoordExtent(t,r||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null},i.prototype.getTileRangeForTileCoordAndZ=function(t,e,r){if(e>this.maxZoom||e<this.minZoom)return null;var n=t[0],a=t[1],s=t[2];if(e===n)return Yi(a,s,a,s,r);if(this.zoomFactor_){var o=Math.pow(this.zoomFactor_,e-n),l=Math.floor(a*o),h=Math.floor(s*o);if(e<n)return Yi(l,l,h,h,r);var u=Math.floor(o*(a+1))-1,c=Math.floor(o*(s+1))-1;return Yi(l,u,h,c,r)}var d=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(d,e,r)},i.prototype.getTileRangeExtent=function(t,e,r){var n=this.getOrigin(t),a=this.getResolution(t),s=Zt(this.getTileSize(t),this.tmpSize_),o=n[0]+e.minX*s[0]*a,l=n[0]+(e.maxX+1)*s[0]*a,h=n[1]+e.minY*s[1]*a,u=n[1]+(e.maxY+1)*s[1]*a;return Se(o,h,l,u,r)},i.prototype.getTileRangeForExtentAndZ=function(t,e,r){var n=nT;this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,n);var a=n[1],s=n[2];return this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,n),Yi(a,n[1],s,n[2],r)},i.prototype.getTileCoordCenter=function(t){var e=this.getOrigin(t[0]),r=this.getResolution(t[0]),n=Zt(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*n[0]*r,e[1]-(t[2]+.5)*n[1]*r]},i.prototype.getTileCoordExtent=function(t,e){var r=this.getOrigin(t[0]),n=this.getResolution(t[0]),a=Zt(this.getTileSize(t[0]),this.tmpSize_),s=r[0]+t[1]*a[0]*n,o=r[1]-(t[2]+1)*a[1]*n,l=s+a[0]*n,h=o+a[1]*n;return Se(s,o,l,h,e)},i.prototype.getTileCoordForCoordAndResolution=function(t,e,r){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,r)},i.prototype.getTileCoordForXYAndResolution_=function(t,e,r,n,a){var s=this.getZForResolution(r),o=r/this.getResolution(s),l=this.getOrigin(s),h=Zt(this.getTileSize(s),this.tmpSize_),u=o*(t-l[0])/r/h[0],c=o*(l[1]-e)/r/h[1];return n?(u=ti(u,Xe)-1,c=ti(c,Xe)-1):(u=Zi(u,Xe),c=Zi(c,Xe)),qu(s,u,c,a)},i.prototype.getTileCoordForXYAndZ_=function(t,e,r,n,a){var s=this.getOrigin(r),o=this.getResolution(r),l=Zt(this.getTileSize(r),this.tmpSize_),h=(t-s[0])/o/l[0],u=(s[1]-e)/o/l[1];return n?(h=ti(h,Xe)-1,u=ti(u,Xe)-1):(h=Zi(h,Xe),u=Zi(u,Xe)),qu(r,h,u,a)},i.prototype.getTileCoordForCoordAndZ=function(t,e,r){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,r)},i.prototype.getTileCoordResolution=function(t){return this.resolutions_[t[0]]},i.prototype.getTileSize=function(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]},i.prototype.getFullTileRange=function(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null},i.prototype.getZForResolution=function(t,e){var r=_s(this.resolutions_,t,e||0);return bt(r,this.minZoom,this.maxZoom)},i.prototype.calculateTileRanges_=function(t){for(var e=this.resolutions_.length,r=new Array(e),n=this.minZoom;n<e;++n)r[n]=this.getTileRangeForExtentAndZ(t,n);this.fullTileRanges_=r},i}();const Lp=aT;function Fp(i){var t=i.getDefaultTileGrid();return t||(t=hT(i),i.setDefaultTileGrid(t)),t}function sT(i,t,e){var r=t[0],n=i.getTileCoordCenter(t),a=yl(e);if(Cr(a,n))return t;var s=lt(a),o=Math.ceil((a[0]-n[0])/s);return n[0]+=s*o,i.getTileCoordForCoordAndZ(n,r)}function oT(i,t,e,r){var n=r!==void 0?r:jr.TOP_LEFT,a=Np(i,t,e);return new Lp({extent:i,origin:Jy(i,n),resolutions:a,tileSize:e})}function lT(i){var t=i||{},e=t.extent||xt("EPSG:3857").getExtent(),r={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:Np(e,t.maxZoom,t.tileSize,t.maxResolution)};return new Lp(r)}function Np(i,t,e,r){for(var n=t!==void 0?t:TA,a=Rt(i),s=lt(i),o=Zt(e!==void 0?e:cl),l=r>0?r:Math.max(s/o[0],a/o[1]),h=n+1,u=new Array(h),c=0;c<h;++c)u[c]=l/Math.pow(2,c);return u}function hT(i,t,e,r){var n=yl(i);return oT(n,t,e,r)}function yl(i){i=xt(i);var t=i.getExtent();if(!t){var e=180*re[Le.DEGREES]/i.getMetersPerUnit();t=Se(-e,-e,e,e)}return t}var Bp=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),uT=function(i){Bp(t,i);function t(e){var r=i.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate})||this;r.on,r.once,r.un,r.opaque_=e.opaque!==void 0?e.opaque:!1,r.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,r.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;var n=[256,256];return r.tileGrid&&Zt(r.tileGrid.getTileSize(r.tileGrid.getMinZoom()),n),r.tileCache=new Pp(e.cacheSize||0),r.tmpSize=[0,0],r.key_=e.key||"",r.tileOptions={transition:e.transition,interpolate:e.interpolate},r.zDirection=e.zDirection?e.zDirection:0,r}return t.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},t.prototype.expireCache=function(e,r){var n=this.getTileCacheForProjection(e);n&&n.expireCache(r)},t.prototype.forEachLoadedTile=function(e,r,n,a){var s=this.getTileCacheForProjection(e);if(!s)return!1;for(var o=!0,l,h,u,c=n.minX;c<=n.maxX;++c)for(var d=n.minY;d<=n.maxY;++d)h=xs(r,c,d),u=!1,s.containsKey(h)&&(l=s.get(h),u=l.getState()===Y.LOADED,u&&(u=a(l)!==!1)),u||(o=!1);return o},t.prototype.getGutterForProjection=function(e){return 0},t.prototype.getKey=function(){return this.key_},t.prototype.setKey=function(e){this.key_!==e&&(this.key_=e,this.changed())},t.prototype.getOpaque=function(e){return this.opaque_},t.prototype.getResolutions=function(){return this.tileGrid?this.tileGrid.getResolutions():null},t.prototype.getTile=function(e,r,n,a,s){return Q()},t.prototype.getTileGrid=function(){return this.tileGrid},t.prototype.getTileGridForProjection=function(e){return this.tileGrid?this.tileGrid:Fp(e)},t.prototype.getTileCacheForProjection=function(e){return J(Qe(this.getProjection(),e),68),this.tileCache},t.prototype.getTilePixelRatio=function(e){return this.tilePixelRatio_},t.prototype.getTilePixelSize=function(e,r,n){var a=this.getTileGridForProjection(n),s=this.getTilePixelRatio(r),o=Zt(a.getTileSize(e),this.tmpSize);return s==1?o:mp(o,s,this.tmpSize)},t.prototype.getTileCoordForTileUrlFunction=function(e,r){var n=r!==void 0?r:this.getProjection(),a=this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=sT(a,e,n)),eT(e,a)?e:null},t.prototype.clear=function(){this.tileCache.clear()},t.prototype.refresh=function(){this.clear(),i.prototype.refresh.call(this)},t.prototype.updateCacheSize=function(e,r){var n=this.getTileCacheForProjection(r);e>n.highWaterMark&&(n.highWaterMark=e)},t.prototype.useTile=function(e,r,n,a){},t}(gl),cT=function(i){Bp(t,i);function t(e,r){var n=i.call(this,e)||this;return n.tile=r,n}return t}(ki);const dT=uT;function fT(i,t){var e=/\{z\}/g,r=/\{x\}/g,n=/\{y\}/g,a=/\{-y\}/g;return function(s,o,l){if(s)return i.replace(e,s[0].toString()).replace(r,s[1].toString()).replace(n,s[2].toString()).replace(a,function(){var h=s[0],u=t.getFullTileRange(h);J(u,55);var c=u.getHeight()-s[2]-1;return c.toString()})}}function pT(i,t){for(var e=i.length,r=new Array(e),n=0;n<e;++n)r[n]=fT(i[n],t);return mT(r)}function mT(i){return i.length===1?i[0]:function(t,e,r){if(t){var n=kp(t),a=Mi(n,i.length);return i[a](t,e,r)}else return}}function vT(i){var t=[],e=/\{([a-z])-([a-z])\}/.exec(i);if(e){var r=e[1].charCodeAt(0),n=e[2].charCodeAt(0),a=void 0;for(a=r;a<=n;++a)t.push(i.replace(e[0],String.fromCharCode(a)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(i),e){for(var s=parseInt(e[2],10),o=parseInt(e[1],10);o<=s;o++)t.push(i.replace(e[0],o.toString()));return t}return t.push(i),t}var _T=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),gT=function(i){_T(t,i);function t(e){var r=i.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return r.generateTileUrlFunction_=r.tileUrlFunction===t.prototype.tileUrlFunction,r.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(r.tileUrlFunction=e.tileUrlFunction),r.urls=null,e.urls?r.setUrls(e.urls):e.url&&r.setUrl(e.url),r.tileLoadingKeys_={},r}return t.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},t.prototype.getTileUrlFunction=function(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction},t.prototype.getUrls=function(){return this.urls},t.prototype.handleTileChange=function(e){var r=e.target,n=ot(r),a=r.getState(),s;a==Y.LOADING?(this.tileLoadingKeys_[n]=!0,s=Xs.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=a==Y.ERROR?Xs.TILELOADERROR:a==Y.LOADED?Xs.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new cT(s,r))},t.prototype.setTileLoadFunction=function(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()},t.prototype.setTileUrlFunction=function(e,r){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof r<"u"?this.setKey(r):this.changed()},t.prototype.setUrl=function(e){var r=vT(e);this.urls=r,this.setUrls(r)},t.prototype.setUrls=function(e){this.urls=e;var r=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(pT(e,this.tileGrid),r):this.setKey(r)},t.prototype.tileUrlFunction=function(e,r,n){},t.prototype.useTile=function(e,r,n){var a=xs(e,r,n);this.tileCache.containsKey(a)&&this.tileCache.get(a)},t}(dT);const yT=gT;var bT=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),xT=function(i){bT(t,i);function t(e){var r=this,n=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(n=e.interpolate),r=i.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:wT,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:n,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this,r.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,r.tileClass=e.tileClass!==void 0?e.tileClass:op,r.tileCacheForProjection={},r.tileGridForProjection={},r.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,r.renderReprojectionEdges_=!1,r}return t.prototype.canExpireCache=function(){if(!he)return i.prototype.canExpireCache.call(this);if(this.tileCache.canExpireCache())return!0;for(var e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1},t.prototype.expireCache=function(e,r){if(!he){i.prototype.expireCache.call(this,e,r);return}var n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?r:{});for(var a in this.tileCacheForProjection){var s=this.tileCacheForProjection[a];s.expireCache(s==n?r:{})}},t.prototype.getGutterForProjection=function(e){return he&&this.getProjection()&&e&&!Qe(this.getProjection(),e)?0:this.getGutter()},t.prototype.getGutter=function(){return 0},t.prototype.getKey=function(){var e=i.prototype.getKey.call(this);return this.getInterpolate()||(e+=":disable-interpolation"),e},t.prototype.getOpaque=function(e){return he&&this.getProjection()&&e&&!Qe(this.getProjection(),e)?!1:i.prototype.getOpaque.call(this,e)},t.prototype.getTileGridForProjection=function(e){if(!he)return i.prototype.getTileGridForProjection.call(this,e);var r=this.getProjection();if(this.tileGrid&&(!r||Qe(r,e)))return this.tileGrid;var n=ot(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=Fp(e)),this.tileGridForProjection[n]},t.prototype.getTileCacheForProjection=function(e){if(!he)return i.prototype.getTileCacheForProjection.call(this,e);var r=this.getProjection();if(!r||Qe(r,e))return this.tileCache;var n=ot(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new Pp(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]},t.prototype.createTile_=function(e,r,n,a,s,o){var l=[e,r,n],h=this.getTileCoordForTileUrlFunction(l,s),u=h?this.tileUrlFunction(h,a,s):void 0,c=new this.tileClass(l,u!==void 0?Y.IDLE:Y.EMPTY,u!==void 0?u:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return c.key=o,c.addEventListener(Mt.CHANGE,this.handleTileChange.bind(this)),c},t.prototype.getTile=function(e,r,n,a,s){var o=this.getProjection();if(!he||!o||!s||Qe(o,s))return this.getTileInternal(e,r,n,a,o||s);var l=this.getTileCacheForProjection(s),h=[e,r,n],u=void 0,c=Dp(h);l.containsKey(c)&&(u=l.get(c));var d=this.getKey();if(u&&u.key==d)return u;var f=this.getTileGridForProjection(o),p=this.getTileGridForProjection(s),m=this.getTileCoordForTileUrlFunction(h,s),v=new up(o,f,s,p,h,m,this.getTilePixelRatio(a),this.getGutter(),function(_,g,y,b){return this.getTileInternal(_,g,y,b,o)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return v.key=d,u?(v.interimTile=u,v.refreshInterimChain(),l.replace(c,v)):l.set(c,v),v},t.prototype.getTileInternal=function(e,r,n,a,s){var o=null,l=xs(e,r,n),h=this.getKey();if(!this.tileCache.containsKey(l))o=this.createTile_(e,r,n,a,s,h),this.tileCache.set(l,o);else if(o=this.tileCache.get(l),o.key!=h){var u=o;o=this.createTile_(e,r,n,a,s,h),u.getState()==Y.IDLE?o.interimTile=u.interimTile:o.interimTile=u,o.refreshInterimChain(),this.tileCache.replace(l,o)}return o},t.prototype.setRenderReprojectionEdges=function(e){if(!(!he||this.renderReprojectionEdges_==e)){this.renderReprojectionEdges_=e;for(var r in this.tileCacheForProjection)this.tileCacheForProjection[r].clear();this.changed()}},t.prototype.setTileGridForProjection=function(e,r){if(he){var n=xt(e);if(n){var a=ot(n);a in this.tileGridForProjection||(this.tileGridForProjection[a]=r)}}},t}(yT);function wT(i,t){i.getImage().src=t}const zp=xT;var AT=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),CT=function(i){AT(t,i);function t(e){var r=e||{},n=r.imageSmoothing!==void 0?r.imageSmoothing:!0;r.interpolate!==void 0&&(n=r.interpolate);var a=r.projection!==void 0?r.projection:"EPSG:3857",s=r.tileGrid!==void 0?r.tileGrid:lT({extent:yl(a),maxResolution:r.maxResolution,maxZoom:r.maxZoom,minZoom:r.minZoom,tileSize:r.tileSize});return i.call(this,{attributions:r.attributions,cacheSize:r.cacheSize,crossOrigin:r.crossOrigin,interpolate:n,opaque:r.opaque,projection:a,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileGrid:s,tileLoadFunction:r.tileLoadFunction,tilePixelRatio:r.tilePixelRatio,tileUrlFunction:r.tileUrlFunction,url:r.url,urls:r.urls,wrapX:r.wrapX!==void 0?r.wrapX:!0,transition:r.transition,attributionsCollapsible:r.attributionsCollapsible,zDirection:r.zDirection})||this}return t}(zp);const $p=CT;var ET=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Gp='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',ST=function(i){ET(t,i);function t(e){var r=e||{},n=r.imageSmoothing!==void 0?r.imageSmoothing:!0;r.interpolate!==void 0&&(n=r.interpolate);var a;r.attributions!==void 0?a=r.attributions:a=[Gp];var s=r.crossOrigin!==void 0?r.crossOrigin:"anonymous",o=r.url!==void 0?r.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";return i.call(this,{attributions:a,attributionsCollapsible:!1,cacheSize:r.cacheSize,crossOrigin:s,interpolate:n,maxZoom:r.maxZoom!==void 0?r.maxZoom:19,opaque:r.opaque!==void 0?r.opaque:!0,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileLoadFunction:r.tileLoadFunction,transition:r.transition,url:o,wrapX:r.wrapX,zDirection:r.zDirection})||this}return t}($p);const TT=ST;var MT=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),IT=function(i){MT(t,i);function t(e){var r=this,n=e||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;n.interpolate!==void 0&&(a=n.interpolate);var s=n.params||{},o="TRANSPARENT"in s?s.TRANSPARENT:!0;return r=i.call(this,{attributions:n.attributions,attributionsCollapsible:n.attributionsCollapsible,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,interpolate:a,opaque:!o,projection:n.projection,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileClass:n.tileClass,tileGrid:n.tileGrid,tileLoadFunction:n.tileLoadFunction,url:n.url,urls:n.urls,wrapX:n.wrapX!==void 0?n.wrapX:!0,transition:n.transition,zDirection:n.zDirection})||this,r.gutter_=n.gutter!==void 0?n.gutter:0,r.params_=s,r.v13_=!0,r.serverType_=n.serverType,r.hidpi_=n.hidpi!==void 0?n.hidpi:!0,r.tmpExtent_=ne(),r.updateV13_(),r.setKey(r.getKeyForParams_()),r}return t.prototype.getFeatureInfoUrl=function(e,r,n,a){var s=xt(n),o=this.getProjection(),l=this.getTileGrid();l||(l=this.getTileGridForProjection(s));var h=l.getZForResolution(r,this.zDirection),u=l.getTileCoordForCoordAndZ(e,h);if(!(l.getResolutions().length<=u[0])){var c=l.getResolution(u[0]),d=l.getTileCoordExtent(u,this.tmpExtent_),f=Zt(l.getTileSize(u[0]),this.tmpSize),p=this.gutter_;p!==0&&(f=Ru(f,p,this.tmpSize),d=cn(d,c*p,d)),o&&o!==s&&(c=_n(o,s,e,c),d=il(d,s,o),e=Pn(e,s,o));var m={SERVICE:"WMS",VERSION:ri,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ht(m,this.params_,a);var v=Math.floor((e[0]-d[0])/c),_=Math.floor((d[3]-e[1])/c);return m[this.v13_?"I":"X"]=v,m[this.v13_?"J":"Y"]=_,this.getRequestUrl_(u,f,d,1,o||s,m)}},t.prototype.getLegendUrl=function(e,r){if(this.urls[0]!==void 0){var n={SERVICE:"WMS",VERSION:ri,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(r===void 0||r.LAYER===void 0){var a=this.params_.LAYERS,s=!Array.isArray(a)||a.length===1;if(!s)return;n.LAYER=a}if(e!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=e*o/l}return ht(n,r),Ka(this.urls[0],n)}},t.prototype.getGutter=function(){return this.gutter_},t.prototype.getParams=function(){return this.params_},t.prototype.getRequestUrl_=function(e,r,n,a,s,o){var l=this.urls;if(!!l){if(o.WIDTH=r[0],o.HEIGHT=r[1],o[this.v13_?"CRS":"SRS"]=s.getCode(),"STYLES"in this.params_||(o.STYLES=""),a!=1)switch(this.serverType_){case ni.GEOSERVER:var h=90*a+.5|0;"FORMAT_OPTIONS"in o?o.FORMAT_OPTIONS+=";dpi:"+h:o.FORMAT_OPTIONS="dpi:"+h;break;case ni.MAPSERVER:o.MAP_RESOLUTION=90*a;break;case ni.CARMENTA_SERVER:case ni.QGIS:o.DPI=90*a;break;default:J(!1,52);break}var u=s.getAxisOrientation(),c=n;if(this.v13_&&u.substr(0,2)=="ne"){var d=void 0;d=n[0],c[0]=n[1],c[1]=d,d=n[2],c[2]=n[3],c[3]=d}o.BBOX=c.join(",");var f;if(l.length==1)f=l[0];else{var p=Mi(kp(e),l.length);f=l[p]}return Ka(f,o)}},t.prototype.getTilePixelRatio=function(e){return!this.hidpi_||this.serverType_===void 0?1:e},t.prototype.getKeyForParams_=function(){var e=0,r=[];for(var n in this.params_)r[e++]=n+"-"+this.params_[n];return r.join("/")},t.prototype.updateParams=function(e){ht(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())},t.prototype.updateV13_=function(){var e=this.params_.VERSION||ri;this.v13_=df(e,"1.3")>=0},t.prototype.tileUrlFunction=function(e,r,n){var a=this.getTileGrid();if(a||(a=this.getTileGridForProjection(n)),!(a.getResolutions().length<=e[0])){r!=1&&(!this.hidpi_||this.serverType_===void 0)&&(r=1);var s=a.getResolution(e[0]),o=a.getTileCoordExtent(e,this.tmpExtent_),l=Zt(a.getTileSize(e[0]),this.tmpSize),h=this.gutter_;h!==0&&(l=Ru(l,h,this.tmpSize),o=cn(o,s*h,o)),r!=1&&(l=mp(l,r,this.tmpSize));var u={SERVICE:"WMS",VERSION:ri,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return ht(u,this.params_),this.getRequestUrl_(e,l,o,r,n,u)}},t}(zp);const OT=IT;var RT=function(){function i(t){this.rbush_=new _p(t),this.items_={}}return i.prototype.insert=function(t,e){var r={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(r),this.items_[ot(e)]=r},i.prototype.load=function(t,e){for(var r=new Array(e.length),n=0,a=e.length;n<a;n++){var s=t[n],o=e[n],l={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:o};r[n]=l,this.items_[ot(o)]=l}this.rbush_.load(r)},i.prototype.remove=function(t){var e=ot(t),r=this.items_[e];return delete this.items_[e],this.rbush_.remove(r)!==null},i.prototype.update=function(t,e){var r=this.items_[ot(e)],n=[r.minX,r.minY,r.maxX,r.maxY];us(n,t)||(this.remove(e),this.insert(t,e))},i.prototype.getAll=function(){var t=this.rbush_.all();return t.map(function(e){return e.value})},i.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]},r=this.rbush_.search(e);return r.map(function(n){return n.value})},i.prototype.forEach=function(t){return this.forEach_(this.getAll(),t)},i.prototype.forEachInExtent=function(t,e){return this.forEach_(this.getInExtent(t),e)},i.prototype.forEach_=function(t,e){for(var r,n=0,a=t.length;n<a;n++)if(r=e(t[n]),r)return r;return r},i.prototype.isEmpty=function(){return un(this.items_)},i.prototype.clear=function(){this.rbush_.clear(),this.items_={}},i.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return Se(e.minX,e.minY,e.maxX,e.maxY,t)},i.prototype.concat=function(t){this.rbush_.load(t.rbush_.all());for(var e in t.items_)this.items_[e]=t.items_[e]},i}();const Xu=RT,le={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function DT(i,t){return[[-1/0,-1/0,1/0,1/0]]}const Wr={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"};var kT=!1;function PT(i,t,e,r,n,a,s){var o=new XMLHttpRequest;o.open("GET",typeof i=="function"?i(e,r,n):i,!0),t.getType()==Wr.ARRAY_BUFFER&&(o.responseType="arraybuffer"),o.withCredentials=kT,o.onload=function(l){if(!o.status||o.status>=200&&o.status<300){var h=t.getType(),u=void 0;h==Wr.JSON||h==Wr.TEXT?u=o.responseText:h==Wr.XML?(u=o.responseXML,u||(u=new DOMParser().parseFromString(o.responseText,"application/xml"))):h==Wr.ARRAY_BUFFER&&(u=o.response),u?a(t.readFeatures(u,{extent:e,featureProjection:n}),t.readProjection(u)):s()}else s()},o.onerror=s,o.send()}function Zu(i,t){return function(e,r,n,a,s){var o=this;PT(i,t,e,r,n,function(l,h){o.addFeatures(l),a!==void 0&&a(l)},s||vn)}}var Up=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Ze=function(i){Up(t,i);function t(e,r,n){var a=i.call(this,e)||this;return a.feature=r,a.features=n,a}return t}(ki),LT=function(i){Up(t,i);function t(e){var r=this,n=e||{};r=i.call(this,{attributions:n.attributions,interpolate:!0,projection:void 0,state:bs.READY,wrapX:n.wrapX!==void 0?n.wrapX:!0})||this,r.on,r.once,r.un,r.loader_=vn,r.format_=n.format,r.overlaps_=n.overlaps===void 0?!0:n.overlaps,r.url_=n.url,n.loader!==void 0?r.loader_=n.loader:r.url_!==void 0&&(J(r.format_,7),r.loader_=Zu(r.url_,r.format_)),r.strategy_=n.strategy!==void 0?n.strategy:DT;var a=n.useSpatialIndex!==void 0?n.useSpatialIndex:!0;r.featuresRtree_=a?new Xu:null,r.loadedExtentsRtree_=new Xu,r.loadingExtentsCount_=0,r.nullGeometryFeatures_={},r.idIndex_={},r.uidIndex_={},r.featureChangeKeys_={},r.featuresCollection_=null;var s,o;return Array.isArray(n.features)?o=n.features:n.features&&(s=n.features,o=s.getArray()),!a&&s===void 0&&(s=new Op(o)),o!==void 0&&r.addFeaturesInternal(o),s!==void 0&&r.bindFeaturesCollection_(s),r}return t.prototype.addFeature=function(e){this.addFeatureInternal(e),this.changed()},t.prototype.addFeatureInternal=function(e){var r=ot(e);if(!this.addToIndex_(r,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(r,e);var n=e.getGeometry();if(n){var a=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(a,e)}else this.nullGeometryFeatures_[r]=e;this.dispatchEvent(new Ze(le.ADDFEATURE,e))},t.prototype.setupChangeEvents_=function(e,r){this.featureChangeKeys_[e]=[pe(r,Mt.CHANGE,this.handleFeatureChange_,this),pe(r,Gf.PROPERTYCHANGE,this.handleFeatureChange_,this)]},t.prototype.addToIndex_=function(e,r){var n=!0,a=r.getId();return a!==void 0&&(a.toString()in this.idIndex_?n=!1:this.idIndex_[a.toString()]=r),n&&(J(!(e in this.uidIndex_),30),this.uidIndex_[e]=r),n},t.prototype.addFeatures=function(e){this.addFeaturesInternal(e),this.changed()},t.prototype.addFeaturesInternal=function(e){for(var r=[],n=[],a=[],s=0,o=e.length;s<o;s++){var l=e[s],h=ot(l);this.addToIndex_(h,l)&&n.push(l)}for(var s=0,u=n.length;s<u;s++){var l=n[s],h=ot(l);this.setupChangeEvents_(h,l);var c=l.getGeometry();if(c){var d=c.getExtent();r.push(d),a.push(l)}else this.nullGeometryFeatures_[h]=l}if(this.featuresRtree_&&this.featuresRtree_.load(r,a),this.hasListener(le.ADDFEATURE))for(var s=0,f=n.length;s<f;s++)this.dispatchEvent(new Ze(le.ADDFEATURE,n[s]))},t.prototype.bindFeaturesCollection_=function(e){var r=!1;this.addEventListener(le.ADDFEATURE,function(n){r||(r=!0,e.push(n.feature),r=!1)}),this.addEventListener(le.REMOVEFEATURE,function(n){r||(r=!0,e.remove(n.feature),r=!1)}),e.addEventListener(rr.ADD,function(n){r||(r=!0,this.addFeature(n.element),r=!1)}.bind(this)),e.addEventListener(rr.REMOVE,function(n){r||(r=!0,this.removeFeature(n.element),r=!1)}.bind(this)),this.featuresCollection_=e},t.prototype.clear=function(e){if(e){for(var r in this.featureChangeKeys_){var n=this.featureChangeKeys_[r];n.forEach(ie)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){var a=function(l){this.removeFeatureInternal(l)}.bind(this);this.featuresRtree_.forEach(a);for(var s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var o=new Ze(le.CLEAR);this.dispatchEvent(o),this.changed()},t.prototype.forEachFeature=function(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},t.prototype.forEachFeatureAtCoordinateDirect=function(e,r){var n=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(n,function(a){var s=a.getGeometry();if(s.intersectsCoordinate(e))return r(a)})},t.prototype.forEachFeatureInExtent=function(e,r){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,r);this.featuresCollection_&&this.featuresCollection_.forEach(r)},t.prototype.forEachFeatureIntersectingExtent=function(e,r){return this.forEachFeatureInExtent(e,function(n){var a=n.getGeometry();if(a.intersectsExtent(e)){var s=r(n);if(s)return s}})},t.prototype.getFeaturesCollection=function(){return this.featuresCollection_},t.prototype.getFeatures=function(){var e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),un(this.nullGeometryFeatures_)||Uf(e,Uy(this.nullGeometryFeatures_))),e},t.prototype.getFeaturesAtCoordinate=function(e){var r=[];return this.forEachFeatureAtCoordinateDirect(e,function(n){r.push(n)}),r},t.prototype.getFeaturesInExtent=function(e){return this.featuresRtree_?this.featuresRtree_.getInExtent(e):this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]},t.prototype.getClosestFeatureToCoordinate=function(e,r){var n=e[0],a=e[1],s=null,o=[NaN,NaN],l=1/0,h=[-1/0,-1/0,1/0,1/0],u=r||Q1;return this.featuresRtree_.forEachInExtent(h,function(c){if(u(c)){var d=c.getGeometry(),f=l;if(l=d.closestPointXY(n,a,o,l),l<f){s=c;var p=Math.sqrt(l);h[0]=n-p,h[1]=a-p,h[2]=n+p,h[3]=a+p}}}),s},t.prototype.getExtent=function(e){return this.featuresRtree_.getExtent(e)},t.prototype.getFeatureById=function(e){var r=this.idIndex_[e.toString()];return r!==void 0?r:null},t.prototype.getFeatureByUid=function(e){var r=this.uidIndex_[e];return r!==void 0?r:null},t.prototype.getFormat=function(){return this.format_},t.prototype.getOverlaps=function(){return this.overlaps_},t.prototype.getUrl=function(){return this.url_},t.prototype.handleFeatureChange_=function(e){var r=e.target,n=ot(r),a=r.getGeometry();if(!a)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(r),this.nullGeometryFeatures_[n]=r);else{var s=a.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(s,r)):this.featuresRtree_&&this.featuresRtree_.update(s,r)}var o=r.getId();if(o!==void 0){var l=o.toString();this.idIndex_[l]!==r&&(this.removeFromIdIndex_(r),this.idIndex_[l]=r)}else this.removeFromIdIndex_(r),this.uidIndex_[n]=r;this.changed(),this.dispatchEvent(new Ze(le.CHANGEFEATURE,r))},t.prototype.hasFeature=function(e){var r=e.getId();return r!==void 0?r in this.idIndex_:ot(e)in this.uidIndex_},t.prototype.isEmpty=function(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&un(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0},t.prototype.loadFeatures=function(e,r,n){for(var a=this.loadedExtentsRtree_,s=this.strategy_(e,r,n),o=function(c,d){var f=s[c],p=a.forEachInExtent(f,function(m){return ei(m.extent,f)});p||(++l.loadingExtentsCount_,l.dispatchEvent(new Ze(le.FEATURESLOADSTART)),l.loader_.call(l,f,r,n,function(m){--this.loadingExtentsCount_,this.dispatchEvent(new Ze(le.FEATURESLOADEND,void 0,m))}.bind(l),function(){--this.loadingExtentsCount_,this.dispatchEvent(new Ze(le.FEATURESLOADERROR))}.bind(l)),a.insert(f,{extent:f.slice()}))},l=this,h=0,u=s.length;h<u;++h)o(h);this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0},t.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),i.prototype.refresh.call(this)},t.prototype.removeLoadedExtent=function(e){var r=this.loadedExtentsRtree_,n;r.forEachInExtent(e,function(a){if(us(a.extent,e))return n=a,!0}),n&&r.remove(n)},t.prototype.removeFeature=function(e){if(!!e){var r=ot(e);r in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[r]:this.featuresRtree_&&this.featuresRtree_.remove(e);var n=this.removeFeatureInternal(e);n&&this.changed()}},t.prototype.removeFeatureInternal=function(e){var r=ot(e),n=this.featureChangeKeys_[r];if(!!n){n.forEach(ie),delete this.featureChangeKeys_[r];var a=e.getId();return a!==void 0&&delete this.idIndex_[a.toString()],delete this.uidIndex_[r],this.dispatchEvent(new Ze(le.REMOVEFEATURE,e)),e}},t.prototype.removeFromIdIndex_=function(e){var r=!1;for(var n in this.idIndex_)if(this.idIndex_[n]===e){delete this.idIndex_[n],r=!0;break}return r},t.prototype.setLoader=function(e){this.loader_=e},t.prototype.setUrl=function(e){J(this.format_,7),this.url_=e,this.setLoader(Zu(e,this.format_))},t}(gl);const Vp=LT;/**
 * @license
 * Copyright 2000-2022 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */function bl(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Source");return i.setAttributions(t.attributions),i}function FT(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Tile");return bl(i,t),i}function NT(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/UrlTile");return FT(i,t),t.url&&i.setUrl(t.url),i}function Yp(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/TileImage");return NT(i,t),i}function BT(i,t,e){return i||(i=new OT(ze(t))),Yp(i,t),i}function Wp(i,t,e){return i||(i=new $p(ze(t))),Yp(i,t),i}function zT(i,t,e){return i||(i=new TT(ze(t))),t.attributions||(t.attributions=Gp),Wp(i,t),i}function $T(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Image");return bl(i,t),i}function GT(i,t,e){return i||(i=new KS(ze(t))),$T(i,t),t.url&&i.setUrl(t.url),i}function UT(i,t,e){return i||(i=new Vp(ze({...t,features:new Op}))),bl(i,t),Mp(i.getFeaturesCollection(),t.features,e),i}function VT(i,t,e){return i||(i=new xp),i.setColor(t.color),e.connector.forceRender(),i}function YT(i,t,e){return i||(i=new wp),i.setColor(t.color),i.setWidth(t.width),e.connector.forceRender(),i}function WT(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/style/Image");return i.setOpacity(t.opacity),i.setRotateWithView(t.rotateWithView),i.setRotation(t.rotation),i.setScale(t.scale),i}function HT(i){return i.toLowerCase().replace(/_/,"-")}function jT(i,t,e){if(!i){const r=t.img||t.src;i=new Ep(ze({...t,img:void 0,src:r,imgSize:t.imgSize?LS(t.imgSize):void 0,anchor:t.anchor?Za(t.anchor):void 0,anchorOrigin:t.anchorOrigin?HT(t.anchorOrigin):void 0}))}return WT(i,t),e.connector.forceRender(),i}function qT(i,t,e){return i||(i=new OE),i.setImage(t.image?e.lookup.get(t.image):void 0),i.setFill(t.fill?e.lookup.get(t.fill):void 0),i.setStroke(t.stroke?e.lookup.get(t.stroke):void 0),e.connector.forceRender(),i}/**
 * @license
 * Copyright 2000-2022 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */function XT(i,t,e){if(!i)throw new Error("Existing map instance must be provided");return Mp(i.getLayers(),t.layers,e),i.setView(e.lookup.get(t.view)),i}function ZT(i,t,e){return i||(i=new aC({projection:t.projection})),i.setCenter(t.center?Za(t.center):[0,0]),i.setRotation(t.rotation||0),i.setZoom(t.zoom||0),i}function KT(i,t,e){return i||(i=new jf(Za(t.coordinates))),i.setCoordinates(Za(t.coordinates)),i}function QT(i,t,e){return i||(i=new lA),i.setGeometry(e.lookup.get(t.geometry)),i.setStyle(e.lookup.get(t.style)),i}const JT={"ol/Feature":QT,"ol/Map":XT,"ol/View":ZT,"ol/layer/Image":BS,"ol/layer/Tile":FS,"ol/layer/Vector":NS,"ol/source/ImageWMS":GT,"ol/source/OSM":zT,"ol/source/TileWMS":BT,"ol/source/Vector":UT,"ol/source/XYZ":Wp,"ol/geom/Point":KT,"ol/style/Icon":jT,"ol/style/Fill":VT,"ol/style/Stroke":YT,"ol/style/Style":qT};function Ku(i,t){const e=i.type;if(!e)throw new Error("Configuration object must have a type");if(!i.id)throw new Error("Configuration object must have an ID");let r=t.lookup.get(i.id);const n=JT[e];if(!n)throw new Error(`Unsupported configuration object type: ${e}`);return r=n(r,i,t),t.lookup.put(i.id,r),r.id=i.id,r.typeName=e,r}class tM{constructor(){this.map=new Map}get(t){return this.map.get(t)}put(t,e){this.map.set(t,e)}}class eM{constructor(){this.map=new Map,this.registry=new FinalizationRegistry(t=>{this.map.delete(t)})}get(t){const e=this.map.get(t);return e?e.deref():void 0}put(t,e){if(this.map.has(t))return;const r=new WeakRef(e);this.map.set(t,r),this.registry.register(e,t)}}const iM=window.WeakRef&&window.FinalizationRegistry;function rM(){return iM?new eM:new tM}function nM(i,t){return i.find(e=>{const r=e.getSource&&e.getSource();return r&&r instanceof Vp&&r.getFeatures().includes(t)})}vf("EPSG:4326");(function(){function i(r){r.$connector={lookup:rM(),synchronize(n){const a={synchronize:Ku,lookup:this.lookup,mapElement:r,connector:r.$connector};n.forEach(s=>{s.type==="ol/Map"&&this.lookup.put(s.id,r.configuration),Ku(s,a)})},forceRender(){this._forceRenderTimeout||(this._forceRenderTimeout=setTimeout(()=>{this._forceRenderTimeout=null,r.configuration.getLayers().getArray().forEach(n=>n.changed())}))}},r.configuration.on("moveend",n=>{const a=r.configuration.getView(),s=a.getCenter(),o=a.getRotation(),l=a.getZoom(),h=a.calculateExtent(),u=new CustomEvent("map-view-moveend",{detail:{center:s,rotation:o,zoom:l,extent:h}});r.dispatchEvent(u)}),r.configuration.on("singleclick",n=>{const a=n.coordinate,s=n.pixel,l=r.configuration.getFeaturesAtPixel(s).map(u=>{const c=nM(r.configuration.getLayers().getArray(),u);return{feature:u,layer:c}}),h=new CustomEvent("map-click",{detail:{coordinate:a,features:l,originalEvent:n.originalEvent}});if(r.dispatchEvent(h),l.length>0){const u=l[0],c=new CustomEvent("map-feature-click",{detail:{feature:u.feature,layer:u.layer,originalEvent:n.originalEvent}});r.dispatchEvent(c)}})}function t(r){vf(r)}function e(r,n){Wt.defs(r,n),p0(Wt)}window.Vaadin.Flow.mapConnector={init:i,setUserProjection:t,defineProjection:e}})();const aM={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function sM(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Hp(i){return i.replace(/[\u0660-\u0669]/g,function(t){const e="\\u0"+t.charCodeAt(0).toString(16);return aM[e]})}function jp(i,t){const e=t.toLocaleTimeString(i),r=/[^\d\u0660-\u0669]/,n=e.match(new RegExp(`${r.source}+$`,"g"))||e.match(new RegExp(`^${r.source}+`,"g"));return n&&n[0].trim()}function oM(i){let t=xl.toLocaleTimeString(i);const e=qp(i);e&&t.startsWith(e)&&(t=t.replace(e,""));const r=t.match(/[^\u0660-\u0669\s\d]/);return r&&r[0]}function Qu(i,t){if(!t)return null;const e=t.split(/\s*/).map(sM).join("\\s*"),r=new RegExp(e,"i"),n=i.match(r);if(n)return n[0]}const xl=new Date("August 19, 1975 23:15:30"),lM=new Date("August 19, 1975 05:15:30");function qp(i){return jp(i,xl)}function hM(i){return jp(i,lM)}function Zs(i){return parseInt(Hp(i))}function uM(i){return i=Hp(i),i.length===1?i+="00":i.length===2&&(i+="0"),parseInt(i)}function cM(i,t,e,r){let n=i;if(i.endsWith(e)?n=i.replace(" "+e,""):i.endsWith(r)&&(n=i.replace(" "+r,"")),t){let a=t<10?"0":"";a+=t<100?"0":"",a+=t,n+="."+a}else n+=".000";return i.endsWith(e)?n=n+" "+e:i.endsWith(r)&&(n=n+" "+r),n}(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,r,n=0){e()?r():setTimeout(()=>t(e,r,200),n)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>i(function(r){r.$connector||(r.$connector={},r.$connector.setLocale=i(function(n){let a;r.value&&r.value!==""&&(a=r.i18n.parseTime(r.value));try{xl.toLocaleTimeString(n)}catch{throw n="en-US",new Error("vaadin-time-picker: The locale "+n+" is not supported, falling back to default locale setting(en-US).")}const s=qp(n),o=hM(n),l=oM(n),h=function(){return r.step&&r.step<60},u=function(){return r.step&&r.step<1};let c,d;r.i18n={formatTime:i(function(f){if(!f)return;const p=new Date;p.setHours(f.hours),p.setMinutes(f.minutes),p.setSeconds(f.seconds!==void 0?f.seconds:0);let m=p.toLocaleTimeString(n,{hour:"numeric",minute:"numeric",second:h()?"numeric":void 0});return u()&&(m=cM(m,f.milliseconds,o,s)),m}),parseTime:i(function(f){if(f&&f===c&&d)return d;if(!f)return;const p=Qu(f,o),m=Qu(f,s),v=f.replace(p||"","").replace(m||"","").trim(),_=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+l+")?","g");let g=_.exec(v);if(g){g=Zs(g[0].replace(l,"")),p!==m&&(g===12&&p&&(g=0),g!==12&&m&&(g+=12));const y=_.exec(v),b=y&&_.exec(v),x=/[[\.][\d\u0660-\u0669]{1,3}$/;let w=b&&u()&&x.exec(v);return w&&w.index<=b.index&&(w=void 0),d=g!==void 0&&{hours:g,minutes:y?Zs(y[0].replace(l,"")):0,seconds:b?Zs(b[0].replace(l,"")):0,milliseconds:y&&b&&w?uM(w[0].replace(".","")):0},c=f,d}})},a&&t(()=>r.$,()=>{const f=r.i18n.formatTime(a);r.inputElement.value!==f&&(r.inputElement.value=f,r.$.comboBox.value=f)})}))})(e)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(i){if(i.$connector)return;const t=20;let e=[0,0];i.$connector={},i.$connector.placeholderItem={__placeholder:!0};const r=function(){const a=[...i.children].filter(u=>"__virtualListIndex"in u).map(u=>u.__virtualListIndex),s=Math.min(...a),o=Math.max(...a);let l=Math.max(0,s-t),h=Math.min(o+t,i.items.length);if(e[0]!=l||e[1]!=h){e=[l,h];const u=1+h-l;i.$server.setRequestedRange(l,u)}},n=function(){i.__requestDebounce=gr.debounce(i.__requestDebounce,Ci.after(50),r)};requestAnimationFrame(()=>r),i.patchVirtualListRenderer=function(){if(!i.renderer||i.renderer.__virtualListConnectorPatched)return;const a=i.renderer,s=(o,l,h)=>{o.__virtualListIndex=h.index,h.item===void 0?a.call(l,o,l,{...h,item:l.$connector.placeholderItem}):a.call(l,o,l,h),n()};s.__virtualListConnectorPatched=!0,s.__rendererId=a.__rendererId,i.renderer=s},i._createPropertyObserver("renderer","patchVirtualListRenderer",!0),i.patchVirtualListRenderer(),i.items=[],i.$connector.set=function(a,s){i.items.splice(a,s.length,...s),i.items=[...i.items]},i.$connector.clear=function(a,s){const o=Math.min(s,i.items.length-a);i.$connector.set(a,[...Array(o)])},i.$connector.updateData=function(a){const s=a.reduce((o,l)=>(o[l.key]=l,o),{});i.items=i.items.map(o=>o&&(s[o.key]||o))},i.$connector.updateSize=function(a){const s=a-i.items.length;s>0?i.items=[...i.items,...Array(s)]:s<0&&(i.items=i.items.slice(0,a))},i.$connector.setPlaceholderItem=function(a={}){a.__placeholder=!0,i.$connector.placeholderItem=a}}};I("vaadin-form-item",O`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ju extends q(G){static get template(){return B`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){Em(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Sm(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${es()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(r=>!!this.__getValidateFunction(r));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}customElements.define(Ju.is,Ju);I("vaadin-form-layout",O`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tc extends Cn(tt(q(G))){static get template(){return B`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&(r.attributeName==="colspan"||r.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new Yt(this,e=>{const r=this._getObservableNodes(e.addedNodes),n=this._getObservableNodes(e.removedNodes);r.forEach(a=>{this.__mutationObserver.observe(a,t)}),(r.length>0||n.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(r=>r.nodeType===Node.ELEMENT_NODE&&e.indexOf(r.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(r=>{if(this._naturalNumberOrOne(r.columns)!==r.columns)throw new Error(`Invalid 'columns' value of ${r.columns}, a natural number is required.`);if(r.minWidth!==void 0&&!this._isValidCSSLength(r.minWidth))throw new Error(`Invalid 'minWidth' value of ${r.minWidth}, a valid CSS length required.`);if(r.labelsPosition!==void 0&&["aside","top"].indexOf(r.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${r.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(r){e&&e!==t?(console.warn(`${r.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${r.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(r=>{this.$.layout.style.setProperty(e,r.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=r)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach(([e,r])=>{this.style.setProperty(e,r)}),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),r=t.direction,n=`margin-${r==="ltr"?"left":"right"}`,a=`margin-${r==="ltr"?"right":"left"}`,s=this.offsetWidth;let o=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,h,u)=>{if(l.localName==="br"){o=0;return}let c;c=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),c=Math.min(c,this._columnCount);const d=c/this._columnCount;l.style.width=`calc(${d*99.9}% - ${1-d} * ${e})`,o+c>this._columnCount&&(o=0),o===0?l.style.setProperty(n,"0px"):l.style.removeProperty(n);const f=h+1,p=f<u.length&&u[f].localName==="br";if(o+c===this._columnCount)l.style.setProperty(a,"0px");else if(p){const m=(this._columnCount-o-c)/this._columnCount;l.style.setProperty(a,`calc(${m*s}px + ${m} * ${e})`)}else l.style.removeProperty(a);o=(o+c)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define(tc.is,tc);I("vaadin-grid-tree-toggle",O`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xp=document.createElement("template");Xp.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Xp.content);class ec extends q(os(G)){static get template(){return B`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t))}_onClick(t){this.leaf||Tm(t.target)||(t.preventDefault(),this.expanded=!this.expanded)}_levelChanged(t){const e=Number(t).toString();this.style.setProperty("---level",e)}}customElements.define(ec.is,ec);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dM=O`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;I("vaadin-number-field",[Tn,Bo,dM],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-number-field",On,{moduleId:"vaadin-number-field-styles"});class Io extends Mm(Im(q(tt(G)))){static get is(){return"vaadin-number-field"}static get template(){return B`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[`
        ${t} input[type="number"]::-webkit-outer-spin-button,
        ${t} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${t} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${t}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${t}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Mn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new In(this.inputElement,this._labelController))}checkValidity(){return this.inputElement&&this.inputElement.validity.badInput?!1:super.checkValidity()}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let r=parseFloat(this.value);this.value?r<this.min?(t=0,r=this.min):r>this.max&&(t=0,r=this.max):this.min===0&&t<0||this.max===0&&t>0||this.max===0&&this.min===0?(t=0,r=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?r=0:this.min>0?(r=this.min,this.max<0&&t<0&&(r=this.max),t=0):this.max<0&&(r=this.max,t<0?t=0:this._getIncrement(1,r-e)>this.max?r-=2*e:r-=e);const n=this._getIncrement(t,r);(!this.value||t===0||this._incrementIsInsideTheLimits(t,r))&&this._setValue(n)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let r=this.step||1,n=this.min||0;const a=Math.max(this._getMultiplier(e),this._getMultiplier(r),this._getMultiplier(n));r*=a,e=Math.round(e*a),n*=a;const s=(e-n)%r;return t>0?(e-s+r)/a:t<0?(e-(s||r))/a:e/a}_getDecimalCount(t){const e=String(t),r=e.indexOf(".");return r===-1?1:e.length-r-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?this.min==null||this._getIncrement(t,e)>=this.min:t>0?this.max==null||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),r=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,r)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){t.key==="ArrowUp"?(t.preventDefault(),this._increaseValue()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}}customElements.define(Io.is,Io);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ic extends Io{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/.test(String(t))}__hasOnlyDigits(t){return/^\d+$/.test(String(t))}}customElements.define(ic.is,ic);const fM=O`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;I("vaadin-login-overlay-wrapper",[td,ed,fM],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const pM=O`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;I("vaadin-login-form-wrapper",[td,ed,pM],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zp=document.createElement("template");Zp.innerHTML=`<dom-module id="vaadin-login-overlay-wrapper-template">
  <template>
    <style>
      [part="overlay"] {
        outline: none;
      }

      [part="card"] {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      [part="brand"] {
        box-sizing: border-box;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      [part="brand"] h1 {
        color: inherit;
        margin: 0;
      }
    </style>
    <section part="card">
      <div part="brand">
        <slot name="title">
          <h1 part="title">[[title]]</h1>
        </slot>
        <p part="description">[[description]]</p>
      </div>
      <div part="form">
        <slot></slot>
      </div>
    </section>
  </template>
</dom-module>`;document.head.appendChild(Zp.content);let pa;class rc extends xr{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!pa){pa=super.template.cloneNode(!0);const t=Om.import(`${this.is}-template`,"template"),e=t.content.querySelector("[part=card]"),r=t.content.querySelector("style"),n=pa.content.querySelector("#content");n.replaceChild(e,n.children[0]),n.appendChild(r)}return pa}}customElements.define(rc.is,rc);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nc extends Rm(tt(q(G))){static get template(){return B`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="{{action}}"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="{{noForgotPassword}}"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened&&(this.$.vaadinLoginOverlayWrapper.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened=this.$.vaadinLoginOverlayWrapper.opened,this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(t){const e=t.base;!e||(this.title=e.title,this.description=e.description)}_preventClosingLogin(t){t.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(t){const e=Array.from(t).map(r=>this.$.vaadinLoginOverlayWrapper.appendChild(r));return()=>{for(;e.length>0;)this.appendChild(e.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(nc.is,nc);const mM=O`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-context-menu-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-context-menu-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([part='overflow-button']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([part='overflow-button']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([part='overflow-button']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([part='overflow-button']) [part='prefix'],
  :host([part='overflow-button']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][part='overflow-button']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;I("vaadin-menu-bar-button",[Vc,mM],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-menu-bar-button",O`
    [part='label'] ::slotted(vaadin-context-menu-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class ac extends Lo{static get is(){return"vaadin-menu-bar-button"}}customElements.define(ac.is,ac);I("vaadin-context-menu-item",O`
    :host([theme='menu-bar-item']) [part='content'] {
      display: flex;
      /* tweak to inherit centering from menu bar button */
      align-items: inherit;
      justify-content: inherit;
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon) {
      display: inline-block;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: var(--lumo-space-xs);
      box-sizing: border-box !important;
    }
  `,{moduleId:"lumo-menu-bar-item"});I("vaadin-context-menu-overlay",O`
    :host(:first-of-type) {
      padding-top: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-menu-bar-overlay"});I("vaadin-menu-bar",O`
    :host([has-single-button]) [part$='button'] {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) [part$='button']:first-child,
    :host([theme~='end-aligned'][has-single-button]) [part$='button'] {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sc extends Dm{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(t){this.$.overlay.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(sc.is,sc);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vM=i=>class extends Cn(i){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}get _observeParent(){return!0}ready(){super.ready(),this.setAttribute("role","menubar")}connectedCallback(){super.connectedCallback(),this._initButtonAttrs(this._overflow)}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(t){t!==this._oldItems&&(this._oldItems=t,this.__renderButtons(t))}__getOverflowCount(t){return t.item&&t.item.children&&t.item.children.length||0}__restoreButtons(t){for(let e=0;e<t.length;e++){const r=t[e];r.disabled=r.item&&r.item.disabled||this.disabled,r.style.visibility="",r.style.position="";const n=r.item&&r.item.component;n instanceof HTMLElement&&n.classList.contains("vaadin-menu-item")&&(r.appendChild(n),n.classList.remove("vaadin-menu-item"))}this.__updateOverflow([])}__updateOverflow(t){this._overflow.item={children:t},this._hasOverflow=t.length>0}__setOverflowItems(t,e){const r=this._container;if(r.offsetWidth<r.scrollWidth){this._hasOverflow=!0;const n=this.getAttribute("dir")==="rtl";let a;for(a=t.length;a>0;a--){const o=t[a-1],l=getComputedStyle(o);if(!n&&o.offsetLeft+o.offsetWidth<r.offsetWidth-e.offsetWidth||n&&o.offsetLeft>=e.offsetWidth)break;o.disabled=!0,o.style.visibility="hidden",o.style.position="absolute",o.style.width=l.width}const s=t.filter((o,l)=>l>=a).map(o=>o.item);this.__updateOverflow(s)}}__detectOverflow(){const t=this._overflow,e=this._buttons.filter(s=>s!==t),r=this.__getOverflowCount(t);this.__restoreButtons(e),this.__setOverflowItems(e,t);const n=this.__getOverflowCount(t);r!==n&&this._subMenu.opened&&this._subMenu.close();const a=n===e.length||n===0&&e.length===1;this.toggleAttribute("has-single-button",a)}_removeButtons(){const t=this._container;for(;t.children.length>1;)t.removeChild(t.firstElementChild)}_initButton(t){const e=document.createElement("vaadin-menu-bar-button");e.setAttribute("part","menu-bar-button");const r={...t};if(e.item=r,t.component){const n=this.__getComponent(r);r.component=n,n.item=r,e.appendChild(n)}else t.text&&(e.textContent=t.text);return e}_initButtonAttrs(t){t.setAttribute("role","menuitem"),(t===this._overflow||t.item&&t.item.children)&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"))}_setButtonDisabled(t,e){t.disabled=e,t.setAttribute("tabindex",e?"-1":"0")}_setButtonTheme(t,e){let r=e;const n=t.item&&t.item.theme;n!=null&&(r=Array.isArray(n)?n.join(" "):n),r?t.setAttribute("theme",r):t.removeAttribute("theme")}_appendButton(t){this._container.insertBefore(t,this._overflow)}__getComponent(t){const e=t.component;let r;const n=e instanceof HTMLElement;if(n&&e.localName==="vaadin-context-menu-item"?r=e:(r=document.createElement("vaadin-context-menu-item"),r.appendChild(n?e:document.createElement(e))),t.text){const a=r.firstChild||r;a.textContent=t.text}return r.setAttribute("theme","menu-bar-item"),r}__renderButtons(t=[]){this._removeButtons(),t.length!==0&&(t.forEach(e=>{const r=this._initButton(e);this._appendButton(r),this._setButtonDisabled(r,e.disabled),this._initButtonAttrs(r),this._setButtonTheme(r,this._theme)}),this.__detectOverflow())}_onResize(){this.__detectOverflow()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _M=i=>class extends i{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)"]}ready(){super.ready(),this.addEventListener("keydown",n=>this._onKeydown(n)),this.addEventListener("focusin",n=>this._onFocusin(n)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const r=this._container;r.addEventListener("click",this.__onButtonClick.bind(this)),r.addEventListener("mouseover",n=>this._onMouseOver(n))}get __isRTL(){return this.getAttribute("dir")==="rtl"}_setExpanded(e,r){e.toggleAttribute("expanded",r),e.toggleAttribute("active",r),e.setAttribute("aria-expanded",r?"true":"false")}_setTabindex(e,r){e.setAttribute("tabindex",r?"0":"-1")}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(r=>{this._setTabindex(r,r===e)})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(r=>r.localName==="vaadin-menu-bar-button")[0]}_getCurrentButton(){return this.shadowRoot.activeElement||this._expandedButton}_onFocusin(){const e=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');e&&this._buttons.forEach(r=>{this._setTabindex(r,r===e)})}_onKeydown(e){const r=this._getButtonFromEvent(e);r&&(e.keyCode===40?(e.preventDefault(),r===this._expandedButton?this._focusFirstItem():this.__openSubMenu(r,e)):e.keyCode===38?(e.preventDefault(),r===this._expandedButton?this._focusLastItem():this.__openSubMenu(r,e,{focusLast:!0})):e.keyCode===27&&r===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const r=e.key.replace(/^Arrow/,""),n=this._buttons,a=this._getCurrentButton(),s=n.indexOf(a);let o,l;const h=this.__isRTL?-1:1;switch(r){case"Left":l=-h,o=s-h;break;case"Right":l=h,o=s+h;break;case"Home":l=1,o=0;break;case"End":l=-1,o=n.length-1;break}if(o=this._getAvailableIndex(o,l,n),o>=0){e.preventDefault();const u=n[o],c=a===this._expandedButton;c&&this._close(),this._focusButton(u),c&&u.item&&u.item.children&&this.__openSubMenu(u,e,{keepFocus:!0})}}_getAvailableIndex(e,r,n){const a=n.length;let s=e;for(let o=0;typeof s=="number"&&o<a;o++,s+=r||1){s<0?s=a-1:s>=a&&(s=0);const l=n[s];if(!l.disabled&&!l.hasAttribute("hidden"))return s}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const r=e.target,{width:n,height:a,left:s}=this._expandedButton.getBoundingClientRect();r.hasAttribute("bottom-aligned")&&(r.style.bottom=`${parseInt(getComputedStyle(r).bottom)+a}px`),r.hasAttribute("end-aligned")&&(this.__isRTL?r.style.left=`${s}px`:r.style.right=`${parseInt(getComputedStyle(r).right)-n}px`)}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const r=this._getButtonFromEvent(e);if(r&&r!==this._expandedButton){const n=this._subMenu.opened;r.item.children&&(this.openOnHover||n)?this.__openSubMenu(r,e):n&&this._close()}}__onContextMenuKeydown(e){const r=Array.from(e.composedPath()).filter(n=>n._item)[0];if(r){const n=r.parentNode;if(e.keyCode===38&&r===n.items[0]&&this._close(!0),e.keyCode===37||e.keyCode===39&&!r._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const a=this.shadowRoot.activeElement;a&&a.item&&a.item.children&&this.__openSubMenu(a,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const r=this._getButtonFromEvent(e);r&&this.__openSubMenu(r,e)}__openSubMenu(e,r,n={}){const a=this._subMenu,s=e.item;if(a.opened&&(this._close(),a.listenOn===e))return;const o=s&&s.children;if(!o||o.length===0){this.__fireItemSelected(s);return}a.items=o,a.listenOn=e;const l=a.$.overlay;l.positionTarget=e,l.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:o}})),this._setExpanded(e,!0)}),n.focusLast&&this.__onceOpened(()=>this._focusLastItem()),n.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),this.__onceOpened(()=>{r.type!=="keydown"&&a.$.overlay.$.overlay.focus(),l._updatePosition()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,r=e.items[e.items.length-1];r&&r.focus()}__onceOpened(e){this.style.pointerEvents="auto";const r=this._subMenu.$.overlay,n=()=>{e(),r.removeEventListener("vaadin-overlay-open",n)};r.addEventListener("vaadin-overlay-open",n)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const r=this._expandedButton;r&&r.hasAttribute("expanded")&&(this._setExpanded(r,!1),e&&this._focusButton(r),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oc extends vM(ss(_M(tt(q(G))))){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        [part$='button'] {
          flex-shrink: 0;
        }

        [part='overflow-button'] {
          margin-right: 0;
        }

        .dots::before {
          display: block;
          content: '\\00B7\\00B7\\00B7';
          font-size: inherit;
          line-height: inherit;
        }
      </style>

      <div part="container">
        <vaadin-menu-bar-button part="overflow-button" hidden$="[[!_hasOverflow]]" aria-label$="[[i18n.moreOptions]]">
          <div class="dots"></div>
        </vaadin-menu-bar-button>
      </div>
      <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})}}}static get observers(){return["_themeChanged(_theme)"]}_disabledChanged(t,e){super._disabledChanged(t,e),e!==t&&this.__updateButtonsDisabled(t)}_themeChanged(t){this.shadowRoot&&(this._buttons.forEach(e=>this._setButtonTheme(e,t)),this.__detectOverflow()),t?this._subMenu.setAttribute("theme",t):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(t){this._buttons.forEach(e=>{e.disabled=t||e.item&&e.item.disabled})}}customElements.define(oc.is,oc);I("vaadin-message-input",O`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});I("vaadin-message-input-text-area",O`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-message-input-text-area",O`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class lc extends km{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.removeAttribute("aria-labelledby"),t.setAttribute("rows",1),t.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(t)}__updateAriaLabel(t){t?this.inputElement.setAttribute("aria-label",t):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(t){!this.inputElement||this.__updateAriaLabel(t)}}customElements.define(lc.is,lc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-message-input-button",O`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class hc extends Lo{static get is(){return"vaadin-message-input-button"}}customElements.define(hc.is,hc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class uc extends tt(q(G)){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return B`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(uc.is,uc);I("vaadin-message-avatar",O`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});I("vaadin-message",O`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});I("vaadin-message-list",O``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-message-avatar",O`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class cc extends ho{static get is(){return"vaadin-message-avatar"}}customElements.define(cc.is,cc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oo extends Ne(tt(q(G))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return B`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(Oo.is,Oo);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dc extends tt(q(G)){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return B`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",t=>this._onKeydown(t))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(t,e){const r=this._getIndexOfFocusableElement();if(t&&t.length){const n=!e||t.length>e.length,a=this.scrollHeight<this.clientHeight+this.scrollTop+50;Pm.run(()=>{this._setTabIndexesByIndex(r),n&&a&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(t){if(t.metaKey||t.ctrlKey)return;const e=t.composedPath()[0];let r=this._messages.indexOf(e);switch(t.key){case"ArrowUp":r-=1;break;case"ArrowDown":r+=1;break;case"Home":r=0;break;case"End":r=this._messages.length-1;break;default:return}r<0&&(r=this._messages.length-1),r>this._messages.length-1&&(r=0),this._focus(r),t.preventDefault()}_focus(t){this._messages[t].focus()}_handleFocusEvent(t){const e=t.composedPath().find(r=>r instanceof Oo);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>{e.tabIndex=e===t?0:-1})}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex===0);return t!==-1?t:0}}customElements.define(dc.is,dc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gM=O`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
  }

  :host([focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host(:not([part~='overflow']):not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([part~='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([part~='overflow'])::before,
  :host([part~='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([part~='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([part~='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([part~='overflow-two']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([part~='overflow-two'])::after {
    display: none;
  }

  :host([part~='overflow-one']) {
    margin-inline-start: 0;
  }

  :host([part~='overflow-one'])::before,
  :host([part~='overflow-one'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;I("vaadin-multi-select-combo-box-chip",[Bo,gM],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-multi-select-combo-box-item",O`
    @media (any-hover: hover) {
      :host(:hover[readonly]) {
        background-color: transparent;
        cursor: default;
      }
    }
  `,{moduleId:"lumo-multi-select-combo-box-item"});const yM=O`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part~='chip']:not(:last-of-type) {
    margin-inline-end: var(--lumo-space-xs);
  }

  [part~='overflow']:not([hidden]) + :not(:empty) {
    margin-inline-start: var(--lumo-space-xs);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;I("vaadin-multi-select-combo-box",[Tn,yM],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fc extends q(G){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return B`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host(:is([readonly], [disabled], [part~='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(fc.is,fc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-multi-select-combo-box-container",O`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let ma;class pc extends Lm{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!ma){ma=super.template.cloneNode(!0);const t=ma.content,e=t.querySelectorAll("slot"),r=document.createElement("div");r.setAttribute("id","wrapper"),t.insertBefore(r,e[2]),r.appendChild(e[0]),r.appendChild(e[1])}return ma}}customElements.define(pc.is,pc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mc extends Xc{static get is(){return"vaadin-multi-select-combo-box-item"}}customElements.define(mc.is,mc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-multi-select-combo-box-overlay",O`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class vc extends Kc{static get is(){return"vaadin-multi-select-combo-box-overlay"}}customElements.define(vc.is,vc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _c extends Zc{static get is(){return"vaadin-multi-select-combo-box-scroller"}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}__getAriaSelected(t,e){const r=this.items[e];return this.__isItemSelected(r,null,this.itemIdPath).toString()}__isItemSelected(t,e,r){return t instanceof Jc||this.comboBox.readonly?!1:this.comboBox._findIndex(t,this.comboBox.selectedItems,r)>-1}__updateElement(t,e){super.__updateElement(t,e),t.toggleAttribute("readonly",this.comboBox.readonly)}}customElements.define(_c.is,_c);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gc extends Fm(Qc(q(G))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return B`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const t=this.getRootNode().host;super._initScroller(t)}clear(){super.clear(),this.inputElement&&(this.inputElement.value="")}_onEnter(t){this.__enterPressed=!0,super._onEnter(t)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const t=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(t);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(t){this._ignoreCommitValue=!0,super._onFocusout(t),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(t){t.stopPropagation(),!this.readonly&&(t.detail.item instanceof Jc||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:t.detail.item}})))}_shouldLoadPage(t){return this.readonly?!1:super._shouldLoadPage(t)}}customElements.define(gc.is,gc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bM=O`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  [hidden] {
    display: none !important;
  }

  #chips {
    display: flex;
    align-items: center;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    color: transparent !important;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  [part='chip'] {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;I("vaadin-multi-select-combo-box",[On,bM],{moduleId:"vaadin-multi-select-combo-box-styles"});class yc extends Cn(No(q(tt(G)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return B`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <vaadin-multi-select-combo-box-chip
              id="overflow"
              slot="prefix"
              part$="[[_getOverflowPart(_overflowItems.length)]]"
              disabled="[[disabled]]"
              readonly="[[readonly]]"
              label="[[_getOverflowLabel(_overflowItems.length)]]"
              title$="[[_getOverflowTitle(_overflowItems)]]"
              hidden$="[[_isOverflowHidden(_overflowItems.length)]]"
              on-mousedown="_preventBlur"
            ></vaadin-multi-select-combo-box-chip>
            <div id="chips" part="chips" slot="prefix"></div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)"]}get clearElement(){return this.$.clearButton}get _chips(){return this.shadowRoot.querySelectorAll('[part~="chip"]')}ready(){super.ready(),this.addController(new Mn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new In(this.inputElement,this._labelController)),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this.__updateChips(),Sn(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),De(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(t,e){super._disabledChanged(t,e),(t||e)&&this.__updateChips()}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}_setFocused(t){super._setFocused(t),t||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(t,e){if(!!this.stateTarget){if(t==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(t,e)}}_clearButtonVisibleChanged(t,e){(t||e)&&this.__updateChips()}_onFilteredItemsChanged(t){const{value:e}=t.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(t,e){(t||e)&&this.__updateChips()}_pageSizeChanged(t,e){(Math.floor(t)!==t||t<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(t){const e=this.__tmpA11yPlaceholder;e!==t&&(this.__savedPlaceholder=t,e&&(this.placeholder=e))}_selectedItemsChanged(t){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(t);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(t){return this.$.comboBox._getItemLabel(t)}_getOverflowLabel(t){return t}_getOverflowPart(t){let e="chip overflow";return t===1?e+=" overflow-one":t===2&&(e+=" overflow-two"),e}_getOverflowTitle(t){return this._mergeItemLabels(t)}_isOverflowHidden(t){return t===0}_mergeItemLabels(t){return t.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(t,e,r){if(r&&t){for(let n=0;n<e.length;n++)if(e[n]&&e[n][r]===t[r])return n;return-1}return e.indexOf(t)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(t,e,r){const n=e?"selected":"deselected",a=this.i18n.total.replace("{count}",r||0);De(`${t} ${this.i18n[n]} ${a}`)}__removeItem(t){const e=[...this.selectedItems];e.splice(e.indexOf(t),1),this.__updateSelection(e);const r=this._getItemLabel(t);this.__announceItem(r,!1,e.length)}__selectItem(t){const e=[...this.selectedItems],r=this._findIndex(t,e,this.itemIdPath),n=this._getItemLabel(t);let a=!1;if(r!==-1){const s=this._lastFilter;if(s&&s.toLowerCase()===n.toLowerCase()){this.__clearFilter();return}e.splice(r,1)}else e.push(t),a=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(n,a,e.length)}__updateSelection(t){this.selectedItems=t,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(t){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("part","chip"),e.setAttribute("slot","prefix"),e.item=t,e.disabled=this.disabled,e.readonly=this.readonly;const r=this._getItemLabel(t);return e.label=r,e.setAttribute("title",r),e.addEventListener("item-removed",n=>this._onItemRemoved(n)),e.addEventListener("mousedown",n=>this._preventBlur(n)),e}__getOverflowWidth(){const t=this.$.overflow;t.style.visibility="hidden",t.removeAttribute("hidden"),t.setAttribute("part","chip overflow");const e=getComputedStyle(t),r=t.clientWidth+parseInt(e.marginInlineStart);return t.setAttribute("hidden",""),t.style.visibility="",r}__updateChips(){if(!this._inputField)return;Array.from(this._chips).forEach(a=>{a!==this.$.overflow&&a.remove()});const t=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,r=parseInt(getComputedStyle(this.inputElement).flexBasis);let n=e-r;t.length>1&&(n-=this.__getOverflowWidth());for(let a=t.length-1,s=null;a>=0;a--){const o=this.__createChip(t[a]);if(this.$.chips.insertBefore(o,s),this.$.chips.clientWidth>n){o.remove();break}t.pop(),s=o}this._overflowItems=t}_onClearButtonTouchend(t){t.preventDefault(),this.clear()}_onClearButtonClick(t){t.stopPropagation(),this.clear()}_onChange(t){t.stopPropagation()}_onEscape(t){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(t.stopPropagation(),this.selectedItems=[])}_onKeyDown(t){super._onKeyDown(t);const e=Array.from(this._chips).slice(1);if(!this.readonly&&e.length>0)switch(t.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e);break;case"ArrowRight":this._onArrowRight(e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;let r;this.getAttribute("dir")!=="rtl"?e===-1?r=t.length-1:e>0&&(r=e-1):e===t.length-1?r=-1:e>-1&&(r=e+1),r!==void 0&&(this._focusedChipIndex=r)}_onArrowRight(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;let r;this.getAttribute("dir")==="rtl"?e===-1?r=t.length-1:e>0&&(r=e-1):e===t.length-1?r=-1:e>-1&&(r=e+1),r!==void 0&&(this._focusedChipIndex=r)}_onBackSpace(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=t.length-1:(this.__removeItem(t[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(t,e){if(t>-1||e>-1){const r=Array.from(this._chips).slice(1);if(r.forEach((n,a)=>{n.toggleAttribute("focused",a===t)}),t>-1){const n=r[t].item,a=this._getItemLabel(n);De(`${a} ${this.i18n.focused}`)}}}_onComboBoxChange(){const t=this.$.comboBox.selectedItem;t&&this.__selectItem(t)}_onComboBoxItemSelected(t){this.__selectItem(t.detail.item)}_onCustomValueSet(t){t.preventDefault(),t.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:t.detail,composed:!0,bubbles:!0}))}_onItemRemoved(t){this.__removeItem(t.detail.item)}_preventBlur(t){t.preventDefault()}__computeEffectiveItems(t,e,r){return t&&r?e:t}__computeEffectiveFilteredItems(t,e,r,n){return!t&&n?r:e}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}}customElements.define(yc.is,yc);I("vaadin-notification-card",O`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bc extends q(tt(G)){static get template(){return B`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),Po&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,r=window.innerWidth>t,n=document.documentElement.clientHeight;r&&n>t?this.style.bottom=`${n-t}px`:this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class xc extends q(G){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class be extends zo(tt(G)){static get template(){return B`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(t,e){return Nm(t)?be._createAndShowNotification(r=>{Km(t,r)},e):be._createAndShowNotification(r=>{r.innerText=t},e)}static _createAndShowNotification(t,e){const r=document.createElement(be.is);return e&&Number.isFinite(e.duration)&&(r.duration=e.duration),e&&e.position&&(r.position=e.position),e&&e.theme&&r.setAttribute("theme",e.theme),r.renderer=t,document.body.appendChild(r),r.opened=!0,r.addEventListener("opened-changed",n=>{n.detail.value||r.remove()}),r}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),Sn(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(t,e,r){if(!r)return;const n=this._oldRenderer!==t;this._oldRenderer=t,n&&(r.innerHTML="",delete r._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return be._container||(be._container=document.createElement("vaadin-notification-container"),document.body.appendChild(be._container)),be._container}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!=="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}customElements.define(bc.is,bc);customElements.define(xc.is,xc);customElements.define(be.is,be);I("vaadin-progress-bar",O`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const Kp=document.createElement("template");Kp.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(Kp.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xM=i=>class extends i{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,r,n){const a=this._normalizeValue(e,r,n);this.style.setProperty("--vaadin-progress-value",a)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,r,n){let a;return!e&&e!==0?a=0:r>=n?a=1:(a=(e-r)/(n-r),a=Math.min(Math.max(a,0),1)),a}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wc extends tt(q(xM(G))){static get template(){return B`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(wc.is,wc);I("vaadin-radio-button",O`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='radio'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      /* Needed to align the radio-button nicely on the baseline */
      content: '\\2003';
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qa extends Bm(zm(Ja($m(tt(q(br(G))))))){static get is(){return"vaadin-radio-button"}static get template(){return B`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-radio-button-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div class="vaadin-radio-button-wrapper">
          <div part="radio"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Mn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new In(this.inputElement,this._labelController)),this.addController(new Gm(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated()))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(Qa.is,Qa);const wM=O`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;I("vaadin-radio-group",[ns,as,wM],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ac extends En(Ne(ss(ts(tt(q(G)))))){static get is(){return"vaadin-radio-group"}static get template(){return B`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${es()}`,this._observer=new Yt(this,({addedNodes:t,removedNodes:e})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(e).forEach(this.__unregisterRadioButton)})}__filterRadioButtons(t){return t.filter(e=>e instanceof Qa)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(t=>t.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this._theme!=="vertical"}_onKeyDown(t){super._onKeyDown(t);const e=t.composedPath().find(r=>r instanceof Qa);["ArrowLeft","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.__selectNextRadioButton(e)),["ArrowRight","ArrowDown"].includes(t.key)&&(t.preventDefault(),this.__selectPrevRadioButton(e))}_invalidChanged(t){super._invalidChanged(t),t?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(t,e){const r=(this.__radioButtons.length+t+e)%this.__radioButtons.length,n=this.__radioButtons[r];n.disabled?this.__selectIncRadioButton(r,e):(n.focusElement.focus(),n.focusElement.click())}__registerRadioButton(t){t.name=this._fieldName,t.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(t.disabled=!0),t.checked&&this.__selectRadioButton(t)}__unregisterRadioButton(t){t.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),t.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(t){t.target.checked&&this.__selectRadioButton(t.target)}__valueChanged(t,e){if(!(e===void 0&&t==="")){if(t){const r=this.__radioButtons.find(n=>n.value===t);r?(this.__selectRadioButton(r),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${t}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");e!==void 0&&this.validate()}}__readonlyChanged(t,e){!t&&e===void 0||e!==t&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}__selectRadioButton(t){t?this.value=t.value:this.value="",this.__radioButtons.forEach(e=>{e.checked=e===t}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(t=>{this.readonly?t.disabled=t!==this.__selectedRadioButton:t.disabled=this.disabled})}}customElements.define(Ac.is,Ac);const AM=O`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;I("vaadin-scroller",AM,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qp{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=Ce.debounce(this.__debounceOverflow,Hc,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new Yt(this.host,t=>{t.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(e)}),t.removedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(e)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom");const r=Math.abs(t.scrollLeft);r>0&&(e+=" start"),r<t.scrollWidth-t.clientWidth&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cc extends Ne(tt(br(q(G)))){static get template(){return B`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new Qp(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}customElements.define(Cc.is,Cc);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const CM=O`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;I("vaadin-select",[Tn,CM],{moduleId:"lumo-select"});I("vaadin-select-value-button",O`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const EM=O`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;I("vaadin-select-overlay",[qc,EM],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ec extends Um{static get is(){return"vaadin-select-item"}}customElements.define(Ec.is,Ec);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sc extends Wc{static get is(){return"vaadin-select-list-box"}}customElements.define(Sc.is,Sc);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-select-overlay",O`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class Tc extends rs(xr){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}customElements.define(Tc.is,Tc);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mc extends Vm(q(G)){static get is(){return"vaadin-select-value-button"}static get template(){return B`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(Mc.is,Mc);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-select",[Hm,jm],{moduleId:"vaadin-select-styles"});class Ic extends Ja(Ym(En(tt(q(G))))){static get is(){return"vaadin-select"}static get template(){return B`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get _valueButton(){return this._valueButtonController&&this._valueButtonController.node}constructor(){super(),this._fieldId=`${this.localName}-${es()}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new Wm(this,"value",()=>document.createElement("vaadin-select-value-button"),(t,e)=>{this._setFocusElement(e),this.ariaTarget=e,this.stateTarget=e,e.setAttribute("aria-haspopup","listbox"),e.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaExpanded(t.opened),e.addEventListener("keydown",this._boundOnKeyDown)}),this.addController(this._valueButtonController),this.addController(new Fo(this._phoneMediaQuery,t=>{this._phone=t})),Sn(this)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(t){super._requiredChanged(t),t===!1&&this.validate()}_rendererChanged(t,e){!e||(e.setProperties({owner:this,renderer:t||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),t.setAttribute("role","listbox"),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items,this._items.forEach(e=>e.setAttribute("role","option")))}_valueChanged(t,e){this.toggleAttribute("has-value",Boolean(t)),e!==void 0&&this.validate()}_onClick(t){t.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(t){t.preventDefault()}_onKeyDown(t){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,r=e!==void 0?e:-1,n=this._menuElement._searchKey(r,t.key);n>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(t){/^(Tab)$/.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const r=this.hasAttribute("focus-ring");this._openedWithFocusRing=r,r&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else e&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(t){this._valueButton&&this._valueButton.setAttribute("aria-expanded",t?"true":"false")}_updateAriaLive(t){this._valueButton&&(t?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const r=t.getAttribute("label");r?e=this.__createItemElement({label:r}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),e}__appendValueItemElement(t){t.removeAttribute("tabindex"),t.removeAttribute("role"),t.setAttribute("id",this._fieldId),this._valueButton.appendChild(t)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const t=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),t)this.__attachSelectedItem(t),this._valueChanging||(this._selectedChanging=!0,this.value=t.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const e=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(e),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(t,e){if(e){const r=t==null?t:t.toString();this._menuElement.selected=e.reduce((n,a,s)=>n===void 0&&a.value===r?s:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),t||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let r=t.firstElementChild;r||(r=document.createElement("vaadin-select-list-box"),t.appendChild(r)),r.textContent="",this.items.forEach(n=>{r.appendChild(this.__createItemElement(n))})}}customElements.define(Ic.is,Ic);I("vaadin-split-layout",O`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oc extends tt(q(G)){static get template(){return B`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new Yt(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const t=this.$.splitter;ue(t,"track",this._onHandleTrack.bind(this)),ue(t,"down",this._setPointerEventsNone.bind(this)),ue(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(e=>{e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((t,e)=>{e===0?(this._primaryChild=t,t.setAttribute("slot","primary")):e===1?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,r){e=Math.max(0,Math.min(e,r)),e===0&&(e=1e-6),t.style.flex=`1 1 ${e}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const e=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]};return}const r=this.orientation==="vertical"?t.detail.dy:t.detail.dx,a=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-r:r;this._setFlexBasis(this._primaryChild,this._startSize.primary+a,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-a,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Oc.is,Oc);I("vaadin-tab",O`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rc extends tt(q(qm(G))){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(t){const e=this.hasAttribute("active");if(super._onKeyUp(t),e){const r=this.querySelector("a");r&&r.click()}}}customElements.define(Rc.is,Rc);I("vaadin-tabs",O`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dc extends Cn(tt(Xm(q(G)))){static get template(){return B`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),is(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let r=t>0?"start":"";r+=t+this._scrollOffset<e?" end":"",this.__direction===1&&(r=r.replace(/start|end/gi,n=>n==="start"?"end":"start")),r?this.setAttribute("overflow",r.trim()):this.removeAttribute("overflow")}}customElements.define(Dc.is,Dc);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jp=document.createElement("template");Jp.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Jp.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kc extends Ne(q(G)){static get template(){return B`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}_fileAborted(t){t&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(t){return t/100}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(t,e){const r=Boolean(t);this.hasAttribute(e)!==r&&(r?this.setAttribute(e,""):this.removeAttribute(e))}}customElements.define(kc.is,kc);I("vaadin-upload",O`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const SM=O`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;I("vaadin-upload-file",[Bo,SM],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pc extends tt(q(G)){static get template(){return B`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:jc},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(t){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,r=~~(Math.log(t)/Math.log(e)),n=Math.max(0,Math.min(3,r-1));return`${parseFloat((t/e**r).toFixed(n))} ${this.i18n.units.size[r]}`}_splitTimeByUnits(t){const e=[60,60,24,1/0],r=[0];for(let n=0;n<e.length&&t>0;n++)r[n]=t%e[n],t=Math.floor(t/e[n]);return r}_formatTime(t,e){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(r=>(r<10?"0":"")+r).join(":")}_formatFileProgress(t){const e=t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${t.totalStr}: ${t.progress}% (${e})`}_maxFilesAdded(t,e){return t>=0&&e>=t}_onDragover(t){t.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([e,r])=>{t.setRequestHeader(e,r)}),this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,r,n){t.elapsed=n,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(n*(e/r-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/n/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(r),t.status=this._formatFileProgress(t)}uploadFiles(t){t&&!Array.isArray(t)&&(t=[t]),t=t||this.files,t=t.filter(e=>!e.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),r=t.xhr=this._createXhr();let n,a;r.upload.onprogress=h=>{clearTimeout(n),a=Date.now();const u=(a-e)/1e3,c=h.loaded,d=h.total,f=~~(c/d*100);t.loaded=c,t.progress=f,t.indeterminate=c<=0||c>=d,t.error?t.indeterminate=t.status=void 0:t.abort||(f<100?(this._setStatus(t,d,c,u),n=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(t)},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(t),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:r}}))},r.onreadystatechange=()=>{if(r.readyState===4){if(clearTimeout(n),t.indeterminate=t.uploading=!1,t.abort){this._notifyFileChanges(t);return}if(t.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:r},cancelable:!0})))return;r.status===0?t.error=this.i18n.uploading.error.serverUnavailable:r.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:r.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent(`upload-${t.error?"error":"success"}`,{detail:{file:t,xhr:r}})),this._notifyFileChanges(t)}};const s=new FormData;if(t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:r},cancelable:!0})))return;s.append(t.formDataName,t,t.name),r.open(this.method,t.uploadTarget,!0),this._configureXhr(r),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,r.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:r}})),this._notifyFileChanges(t)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:r,formData:s},cancelable:!0}))&&r.send(s)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._notifyFileChanges(t))}_notifyFileChanges(t){const e=`files.${this.files.indexOf(t)}.`;Object.keys(t).forEach(r=>{this.notifyPath(e+r,t[r])})}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&t.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));return}const e=t.name.match(/\.[^.]*$|$/)[0],r=new RegExp(`^(${this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")})$`,"i");if(this.accept&&!(r.test(t.type)||r.test(e))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}));return}t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)}_removeFile(t){this.files.indexOf(t)>-1&&(this.files=this.files.filter(e=>e!==t))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileRemove(t){this._removeFile(t.detail.file)}_onFileReject(t){De(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_onUploadStart(t){De(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){De(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){De(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return t===1?e.one:e.many}_isMultiple(t){return t!==1}}customElements.define(Pc.is,Pc);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lc extends tt(br(q(G))){static get template(){return B`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Zm({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new Qp(this),this.addController(this.__overflowController),Sn(this)}scrollToIndex(t){this.__virtualizer.scrollToIndex(t)}__createElements(t){return[...Array(t)].map(()=>document.createElement("div"))}__updateElement(t,e){t.__renderer!==this.renderer&&(t.__renderer=this.renderer,this.__clearRenderTargetContent(t)),this.renderer&&this.renderer(t,this,{item:this.items[e],index:e})}__clearRenderTargetContent(t){t.innerHTML="",delete t._$litPart$}__itemsOrRendererChanged(t,e,r){const n=this.childElementCount>0;(e||n)&&r&&(r.size=(t||[]).length,r.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(Lc.is,Lc);const FM=function(i,t=!1){const e=document.createElement("template");e.innerHTML=i,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};export{FM as addCssBlock};
