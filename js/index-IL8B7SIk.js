import{d as s,M as e,U as a,_ as t,j as l,e as o,l as r}from"./index-CjL9fGc7.js";import{ar as i,as as _,h as m,aI as n,ac as c,an as p,ao as u,ah as v,ae as g,aj as d,aN as E,aO as V,aM as f,aX as T,ad as y,ay as O,ax as j,aR as I,bC as L,aY as A,ba as D,bb as P}from"./.pnpm-BLGzruUg.js";const R={class:"icon-select"},b={class:"icon-select-list"},h=["onClick"],w=t({__name:"index",props:i({placeholder:{type:String,default:"请输入或者选择图标"},iconType:{type:String,default:s.EL_ICON},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:i([...e,"select"],["update:modelValue"]),setup(e,{emit:t}){const i=_(e,"modelValue"),w=e,x=t,C=M(s.EL_ICON),k=M(),S=m(!1),q=m(""),z=m(w.iconType),G=m(0),N=m([{iconType:s.EL_ICON,icons:C,name:0},{iconType:s.SVG,icons:k,name:1}]);function U(){w.disabled||(S.value=!0)}function B(){S.value=!1,q.value=""}function M(e=s.SVG){let t=[];if(e===s.SVG){const e=Object.assign({"/src/assets/svg/403.svg":()=>l((()=>import("./403-sMi72FK0.js")),[],import.meta.url),"/src/assets/svg/404.svg":()=>l((()=>import("./404-DVb_uN1G.js")),[],import.meta.url),"/src/assets/svg/500.svg":()=>l((()=>import("./500-t8d_bZ9l.js")),[],import.meta.url),"/src/assets/svg/alipay.svg":()=>l((()=>import("./alipay-YCSjGWCt.js")),[],import.meta.url),"/src/assets/svg/api.svg":()=>l((()=>import("./api-d_pqx9_V.js")),[],import.meta.url),"/src/assets/svg/circle-rect.svg":()=>l((()=>import("./circle-rect-CeucN7XE.js")),[],import.meta.url),"/src/assets/svg/component.svg":()=>l((()=>import("./component-DFNHaA6R.js")),[],import.meta.url),"/src/assets/svg/config.svg":()=>l((()=>import("./config-C2rgTtDT.js")),[],import.meta.url),"/src/assets/svg/enter.svg":()=>l((()=>import("./enter-BzUzmAF3.js")),[],import.meta.url),"/src/assets/svg/excel.svg":()=>l((()=>import("./excel-BeoB4LVH.js")),[],import.meta.url),"/src/assets/svg/feat.svg":()=>l((()=>import("./feat-CkPnS3f1.js")),[],import.meta.url),"/src/assets/svg/github.svg":()=>l((()=>import("./github-DK8sSQeD.js")),[],import.meta.url),"/src/assets/svg/horizontal.svg":()=>l((()=>import("./horizontal-CoTObIGL.js")),[],import.meta.url),"/src/assets/svg/login.svg":()=>l((()=>import("./login-B2YMqR4N.js")),[],import.meta.url),"/src/assets/svg/logo.svg":()=>l((()=>import("./logo-pXpbI0dA.js")),[],import.meta.url),"/src/assets/svg/nesting.svg":()=>l((()=>import("./nesting-BrDuMII_.js")),[],import.meta.url),"/src/assets/svg/qq.svg":()=>l((()=>import("./qq-DMr8XlSo.js")),[],import.meta.url),"/src/assets/svg/system.svg":()=>l((()=>import("./system-tvUJEhtX.js")),[],import.meta.url),"/src/assets/svg/vertical.svg":()=>l((()=>import("./vertical-CdXItPk9.js")),[],import.meta.url),"/src/assets/svg/weibo.svg":()=>l((()=>import("./weibo-TuwWOWra.js")),[],import.meta.url),"/src/assets/svg/weixin.svg":()=>l((()=>import("./weixin-mpB09VKT.js")),[],import.meta.url),"/src/assets/svg/wifi.svg":()=>l((()=>import("./wifi-VWdcPENa.js")),[],import.meta.url),"/src/assets/svg/work.svg":()=>l((()=>import("./work-DOGuKPtO.js")),[],import.meta.url)});t=Object.keys(e).map((e=>{const a=e.replace(/^.*\/(\S+)\..*/,"$1");return{name:a,value:a,iconType:s.SVG}}))}else t=Object.keys(a).map((e=>({name:`${e}`,value:e,iconType:s.EL_ICON})));return t}return n(q,(s=>function(s){const e=N.value,a=G.value;if(s){const t=e[a];N.value[a].icons=t.icons.filter((e=>e.name.toLowerCase().includes(s.toLowerCase())))}else N.value=[...C,...k]}(s))),(s,a)=>{const t=o,l=I,_=L,m=A,n=o,w=D,C=P,k=r;return c(),p("div",R,[u("div",{class:E(["icon-select-wrapper",{hasValue:i.value}]),onClick:U},[v(l,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),disabled:e.disabled,readonly:""},{prefix:g((()=>[v(t,{name:i.value||"Plus",type:d(z)},null,8,["name","type"])])),_:1},8,["modelValue","disabled"])],2),v(k,{modelValue:d(S),"onUpdate:modelValue":a[3]||(a[3]=s=>V(S)?S.value=s:null),title:"图标选择器",top:"5vh","show-footer":!1,"show-fullscreen":!1,onClose:a[4]||(a[4]=()=>B())},{default:g((()=>[v(l,{modelValue:d(q),"onUpdate:modelValue":a[1]||(a[1]=s=>V(q)?q.value=s:null),"prefix-icon":"Search",placeholder:"搜索图标",clearable:""},null,8,["modelValue"]),v(C,{modelValue:d(G),"onUpdate:modelValue":a[2]||(a[2]=s=>V(G)?G.value=s:null),class:"icon-select-tabs"},{default:g((()=>[(c(!0),p(f,null,T(d(N),(s=>(c(),y(w,{key:s.name,name:s.name,lazy:""},{label:g((()=>[v(m,null,{default:g((()=>[O(j(s.iconType)+" ",1),v(_,{type:"info"},{default:g((()=>[O(j(s.icons.length),1)])),_:2},1024)])),_:2},1024)])),default:g((()=>[u("div",b,[(c(!0),p(f,null,T(s.icons,(e=>(c(),p("div",{key:e.name,class:"icon-select-list-item flex",onClick:s=>function(s){z.value=s.iconType,i.value=s.value,x("select",s),B()}(e)},[v(n,{name:e.value,type:s.iconType,size:"30"},null,8,["name","type"])],8,h)))),128))])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-84487f20"]]);export{w as default};
