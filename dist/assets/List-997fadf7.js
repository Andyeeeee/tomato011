import{p as Q,m as se,l as Ie,q as ke,v as Z,c as I,x as ee,h as n,y as j,z as J,M as we,I as ne,E as le,A as Pe,B as Fe,C as Se,D as Re,F as Be,G as $e,H as Te,J as Le,r as L,K as De,L as Oe,N as Ae,w as Ee,O as Me,P as Ne,Q as Ue,R as T,S as G,T as We,U as qe,W as Ke,X as je,Y as ze,Z as He,_ as Xe,n as de,$ as Ye,s as Ge,d as $,e as Je,f as O,V as Qe,a0 as ce,i as c,a1 as A,a2 as fe,u as E,k as ve,t as me,j as K}from"./index-3ae813e3.js";import{u as Ze}from"./list-07027b7d.js";import{V as X,a as et}from"./VRow-7242f964.js";import{V as tt,m as nt,u as be,a as lt,b as at,c as he,d as ge}from"./VInput-a203c972.js";class ae{constructor(o){let{x:a,y:i,width:t,height:l}=o;this.x=a,this.y=i,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function it(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,l,s,m,d;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),l=+t[0],s=+t[5],m=+t[12],d=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),l=+t[0],s=+t[3],m=+t[4],d=+t[5];else return new ae(o);const f=a.transformOrigin,y=o.x-m-(1-l)*parseFloat(f),h=o.y-d-(1-s)*parseFloat(f.slice(f.indexOf(" ")+1)),k=l?o.width/l:e.offsetWidth+1,C=s?o.height/s:e.offsetHeight+1;return new ae({x:y,y:h,width:k,height:C})}else return new ae(o)}function ot(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const st="cubic-bezier(0.4, 0, 0.2, 1)";const rt=Q({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...se(),...Ie({transition:{component:ke}})},"VCounter"),ut=Z()({name:"VCounter",functional:!0,props:rt(),setup(e,o){let{slots:a}=o;const i=I(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(we,{transition:e.transition},{default:()=>[j(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}});const dt=Q({floating:Boolean,...se()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:dt(),setup(e,o){let{slots:a}=o;return ee(()=>n(tt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),ct=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ct.includes(e)},"onClick:clear":le(),"onClick:appendInner":le(),"onClick:prependInner":le(),...se(),...Pe(),...Fe(),...Se()},"VField"),_e=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...nt(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:l}=Re(e),{loaderClasses:s}=Be(e),{focusClasses:m,isFocused:d,focus:f,blur:y}=be(e),{InputIcon:h}=lt(e),{roundedClasses:k}=$e(e),{rtlClasses:C}=Te(),F=I(()=>e.dirty||e.active),g=I(()=>!e.singleLine&&!!(e.label||t.label)),b=Le(),v=I(()=>e.id||`input-${b}`),r=I(()=>`${v.value}-messages`),D=L(),x=L(),z=L(),u=I(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:w,backgroundColorStyles:P}=De(Oe(e,"bgColor")),{textColorClasses:S,textColorStyles:re}=Ae(I(()=>e.error||e.disabled?void 0:F.value&&d.value?e.color:e.baseColor));Ee(F,p=>{if(g.value){const _=D.value.$el,R=x.value.$el;requestAnimationFrame(()=>{const B=it(_),V=R.getBoundingClientRect(),U=V.x-B.x,W=V.y-B.y-(B.height/2-V.height/2),M=V.width/.75,q=Math.abs(M-B.width)>1?{maxWidth:Me(M)}:void 0,H=getComputedStyle(_),ue=getComputedStyle(R),Ce=parseFloat(H.transitionDuration)*1e3||150,pe=parseFloat(ue.getPropertyValue("--v-field-label-scale")),Ve=ue.getPropertyValue("color");_.style.visibility="visible",R.style.visibility="hidden",ot(_,{transform:`translate(${U}px, ${W}px) scale(${pe})`,color:Ve,...q},{duration:Ce,easing:st,direction:p?"normal":"reverse"}).finished.then(()=>{_.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const N=I(()=>({isActive:F,isFocused:d,controlRef:z,blur:y,focus:f}));function te(p){p.target!==document.activeElement&&p.preventDefault()}return ee(()=>{var U,W,M;const p=e.variant==="outlined",_=t["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||R),V=t.label?t.label({...N.value,label:e.label,props:{for:v.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":F.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":_,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!V,[`v-field--variant-${e.variant}`]:!0},l.value,w.value,m.value,s.value,k.value,C.value,e.class],style:[P.value,re.value,e.style],onClick:te},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:t.loader}),_&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(h,{key:"prepend-icon",name:"prependInner"},null),(U=t["prepend-inner"])==null?void 0:U.call(t,N.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&g.value&&n(Y,{key:"floating-label",ref:x,class:[S.value],floating:!0,for:v.value},{default:()=>[V]}),n(Y,{ref:D,for:v.value},{default:()=>[V]}),(W=t.default)==null?void 0:W.call(t,{...N.value,props:{id:v.value,class:"v-field__input","aria-describedby":r.value},focus:f,blur:y})]),R&&n(Ue,{key:"clear"},{default:()=>[j(n("div",{class:"v-field__clearable",onMousedown:q=>{q.preventDefault(),q.stopPropagation()}},[t.clear?t.clear():n(h,{name:"clear"},null)]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(M=t["append-inner"])==null?void 0:M.call(t,N.value),e.appendInnerIcon&&n(h,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",S.value]},[p&&n(T,null,[n("div",{class:"v-field__outline__start"},null),g.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[V]})]),n("div",{class:"v-field__outline__end"},null)]),u.value&&g.value&&n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[V]})])])}),{controlRef:z}}});function ft(e){const o=Object.keys(_e.props).filter(a=>!We(a)&&a!=="class"&&a!=="style");return qe(e,o)}const ie=Symbol("Forwarded refs");function oe(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function vt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[ie]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,l)){const m=Reflect.get(s.value,l);return typeof m=="function"?m.bind(s.value):m}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,l))return!0;return!1},getOwnPropertyDescriptor(t,l){var m;const s=Reflect.getOwnPropertyDescriptor(t,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const d of a){if(!d.value)continue;const f=oe(d.value,l)??("_"in d.value?oe((m=d.value._)==null?void 0:m.setupState,l):void 0);if(f)return f}for(const d of a){const f=d.value&&d.value[ie];if(!f)continue;const y=f.slice();for(;y.length;){const h=y.shift(),k=oe(h.value,l);if(k)return k;const C=h.value&&h.value[ie];C&&y.push(...C)}}}}})}const mt=["color","file","time","date","datetime-local","week","month"],ht=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...at(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:Ke},inheritAttrs:!1,props:ht(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const l=je(e,"modelValue"),{isFocused:s,focus:m,blur:d}=be(e),f=I(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value??"").toString().length),y=I(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=I(()=>["plain","underlined"].includes(e.variant));function k(u,w){var P,S;!e.autofocus||!u||(S=(P=w[0].target)==null?void 0:P.focus)==null||S.call(P)}const C=L(),F=L(),g=L(),b=I(()=>mt.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function v(){var u;g.value!==document.activeElement&&((u=g.value)==null||u.focus()),s.value||m()}function r(u){i("mousedown:control",u),u.target!==g.value&&(v(),u.preventDefault())}function D(u){v(),i("click:control",u)}function x(u){u.stopPropagation(),v(),de(()=>{l.value=null,Ye(e["onClick:clear"],u)})}function z(u){var P;const w=u.target;if(l.value=w.value,(P=e.modelModifiers)!=null&&P.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[w.selectionStart,w.selectionEnd];de(()=>{w.selectionStart=S[0],w.selectionEnd=S[1]})}}return ee(()=>{const u=!!(t.counter||e.counter||e.counterValue),w=!!(u||t.details),[P,S]=ze(a),[{modelValue:re,...N}]=he.filterProps(e),[te]=ft(e);return n(he,G({ref:C,modelValue:l.value,"onUpdate:modelValue":p=>l.value=p,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},P,N,{centerAffix:!h.value,focused:s.value}),{...t,default:p=>{let{id:_,isDisabled:R,isDirty:B,isReadonly:V,isValid:U}=p;return n(_e,G({ref:F,onMousedown:r,onClick:D,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},te,{id:_.value,active:b.value||B.value,dirty:B.value||e.dirty,disabled:R.value,focused:s.value,error:U.value===!1}),{...t,default:W=>{let{props:{class:M,...q}}=W;const H=j(n("input",G({ref:g,value:l.value,onInput:z,autofocus:e.autofocus,readonly:V.value,disabled:R.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:v,onBlur:d},q,S),null),[[He("intersect"),{handler:k},null,{once:!0}]]);return n(T,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),n("div",{class:M,"data-no-activator":""},[t.default?n(T,null,[t.default(),H]):Xe(H)]),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:w?p=>{var _;return n(T,null,[(_=t.details)==null?void 0:_.call(t,p),u&&n(T,null,[n("span",null,null),n(ut,{active:e.persistentCounter||s.value,value:f.value,max:y.value},t.counter)])])}:void 0})}),vt({},C,F,g)}}),gt=c("h1",null,"項目",-1),yt=c("thead",null,[c("tr",null,[c("th",null,"名稱"),c("th",null,"操作")])],-1),bt={key:0},xt=c("td",{colspan:"2",class:"text-center"},"沒有事項 ",-1),_t=[xt],Ct=c("h1",null,"已完成事項",-1),pt=c("thead",null,[c("tr",null,[c("td",null,"名稱"),c("td",null,"操作")])],-1),Vt={key:0},It=c("td",{colspan:"2",class:"text-center"},"沒有事項",-1),kt=[It],Rt={__name:"List",setup(e){const o=Ze(),{addItem:a,editItem:i,cancelEditItem:t,delItem:l,confirmEditItem:s,delFinishedItems:m}=o,{items:d,finishedItems:f}=Ge(o),y=L(""),h=L(null),k=L([]),C=async()=>{const b=await h.value.validate();console.log(b),!(b.length>0)&&(a(y.value),h.value.blur(),h.value.reset())},F=async(b,v)=>{const r=await k.value[v].validate();console.log(r),!(r.length>0)&&s(b)},g={required:b=>!!b||"欄位必須",length:b=>b.length>=3||"字元必須大於3"};return(b,v)=>($(),Je(Qe,null,{default:O(()=>[n(et,null,{default:O(()=>[n(X,{cols:"12"},{default:O(()=>[gt]),_:1}),n(X,{cols:"12"},{default:O(()=>[n(ye,{modelValue:y.value,"onUpdate:modelValue":v[0]||(v[0]=r=>y.value=r),label:"新增事項","append-icon":"mdi-plus","onClick:append":C,onKeydown:ce(C,["enter"]),rules:[g.required,g.length],ref_key:"newItemInput",ref:h},null,8,["modelValue","onKeydown","rules"]),n(ge,null,{default:O(()=>[yt,c("tbody",null,[($(!0),A(T,null,fe(E(d),(r,D)=>($(),A("tr",{key:r.id},[c("td",null,[j(n(ye,{modelValue:r.model,"onUpdate:modelValue":x=>r.model=x,rules:[g.required,g.length],autofocus:"",ref_for:!0,ref_key:"editItemInput",ref:k,onKeydown:ce(x=>F(r.id,D),["enter"])},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,r.edit]]),j(c("span",null,me(r.name),513),[[J,!r.edit]])]),c("td",null,[r.edit?($(),A(T,{key:0},[n(K,{icon:"mdi-check",color:"black",variant:"text",onClick:x=>F(r.id,D)},null,8,["onClick"]),n(K,{icon:"mdi-undo",color:"wihte",variant:"text",onClick:x=>E(t)(r.id)},null,8,["onClick"])],64)):($(),A(T,{key:1},[n(K,{icon:"mdi-pencil",color:"yellow",variant:"text",onClick:x=>E(i)(r.id)},null,8,["onClick"]),n(K,{icon:"mdi-delete",color:"green",variant:"text",onClick:x=>E(l)(r.id)},null,8,["onClick"])],64))])]))),128)),E(d).length===0?($(),A("tr",bt,_t)):ve("",!0)])]),_:1})]),_:1}),n(X,{cols:"12"},{default:O(()=>[Ct]),_:1}),n(X,{cols:"12"},{default:O(()=>[n(ge,null,{default:O(()=>[pt,c("tbody",null,[($(!0),A(T,null,fe(E(f),r=>($(),A("tr",{key:r.id},[c("td",null,me(r.name),1),c("td",null,[n(K,{icon:"mdi-delete",color:"green",variant:"text",onClick:D=>E(m)(r.id)},null,8,["onClick"])])]))),128)),E(f).length===0?($(),A("tr",Vt,kt)):ve("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Rt as default};
