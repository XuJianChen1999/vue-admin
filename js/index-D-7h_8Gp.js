const __vite__fileDeps=["js/index-CMBT9BYn.js","js/.pnpm-DSXWUmMM.js","css/.pnpm-CSRP5dmz.css","css/index-DtE3zYOa.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as e,r as l,ax as a,ay as t,az as n,aA as o,aB as i,aC as s,a2 as u,aa as d,a3 as c,ae as r,af as m,ao as p,aD as f,a6 as v,a7 as b,ak as h,aE as _,aF as y,a8 as g,aG as k,aH as w,aI as C,a5 as x,ap as V,aJ as S,E as P,aK as T,aL as A,aq as L,aM as M,a4 as I,aN as z,ai as F,aj as K,aO as U,aP as R,aQ as $,aR as j,aS as B,aT as E,aU as N,aV as W,aW as D,aX as O,aY as G,aZ as H,a_ as q,a$ as X,b0 as Z,b1 as J,b2 as Y,b3 as Q,b4 as ee,b5 as le,b6 as ae,b7 as te,b8 as ne,b9 as oe,ba as ie,bb as se,bc as ue,bd as de,be as ce,bf as re,bg as me,bh as pe,bi as fe,a9 as ve,al as be,bj as he,ar as _e,bk as ye,bl as ge,bm as ke,am as we,bn as Ce,bo as xe,bp as Ve,bq as Se,ag as Pe,ad as Te}from"./.pnpm-DSXWUmMM.js";import{b as Ae,g as Le,I as Me,L as Ie,s as ze,a as Fe,_ as Ke,u as Ue,c as Re,d as $e,e as je,M as Be,P as Ee,T as Ne,D as We,f as De,h as Oe,r as Ge,i as He,R as qe,j as Xe,t as Ze,k as Je,l as Ye,m as Qe,n as el,o as ll,p as al}from"./index-CMBT9BYn.js";import{u as tl}from"./useModal-xs4tASz_.js";import{u as nl}from"./useOnline-BzdDtOsr.js";import ol from"./drawer-DJFR9MNW.js";const il=e(`${Ae}__keep-alive`,(()=>{const e=l([]),a=l(!0);return{keepAliveList:e,isShowRoute:a,addKeepAlive:function(l){!e.value.includes(l)&&e.value.push(l)},setKeepAlive:function(l){e.value=l},removeKeepAlive:function(l){e.value=e.value.filter((e=>e!==l))},clearKeepAlive:function(){e.value=[]},setRouteShow:function(e){a.value=e}}})),sl=e(`${Ae}__lock-screen`,(()=>{const e=a(),{idle:o}=t(36e5),i=l(Le(Me)||!1),s=l("123"),u=l(Le(Ie)||"");function d(e){i.value=e,ze(Me,e),!e&&r()}function c(e){ze(Ie,e),u.value=e||s.value}function r(){ze(Ie,""),u.value=""}return window.addEventListener("beforeunload",(()=>{i.value&&!u.value&&d(!1)})),n(o,(l=>{e.name!==Fe?l&&(d(!0),c()):d(!1)})),{isLock:i,lockPwd:u,loginPwd:s,setLock:d,setLockPwd:c,verifyLockPwd:function(e){return[u,s].some((l=>l.value===e))},saveLoginPwd:function(e){s.value=e},resetLockPwd:r}}));const ul={key:0,class:"charge"},dl={class:"charge-container"},cl={class:"charge-number"},rl=(e=>(_("data-v-529a5ea5"),e=e(),y(),e))((()=>m("div",{class:"charge-contrast"},[m("div",{class:"charge-circle"}),m("ul",{class:"charge-bubbles"},[m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li")])],-1))),ml={class:"charging"},pl={class:"status"},fl={key:1,class:"not-support"},vl=Ke({__name:"charging",props:{isMobile:Boolean},setup(e){const{charging:l,chargingTime:a,dischargingTime:t,level:n,isSupported:o}=s(),i=u((()=>{const e=l.value;return e&&100*n.value>=100?"已充满":e?"充电中":"已断开电源"})),_=u((()=>{const e=t.value;return`${~~(e/3600)}小时${~~(e/60%60)}分钟`}));return(l,s)=>d(o)?(c(),r("div",ul,[m("div",dl,[m("div",cl,p((100*d(n)).toFixed(0))+"%",1),rl]),m("div",ml,[m("div",pl,p(d(i)),1),e.isMobile?h("",!0):(c(),r(f,{key:0},[v(m("div",null," 剩余可使用时间："+p(d(_)),513),[[b,Number.isFinite(d(t))&&0!==d(t)]]),v(m("span",null," 距离电池充满需要："+p(d(_)),513),[[b,Number.isFinite(d(a))&&0!==d(a)]])],64))])])):(c(),r("div",fl,"当前浏览器不支持Battery Status API"))}},[["__scopeId","data-v-529a5ea5"]]),bl={class:"lock-box"},hl={class:"lock"},_l=(e=>(_("data-v-3afcfa3b"),e=e(),y(),e))((()=>m("h6",{class:"tips"},"点击解锁",-1))),yl={class:"local-time"},gl={class:"time"},kl={class:"date"},wl={class:"computer-status"},Cl={key:1,class:"login-box"},xl={class:"username"},Vl={class:"flex",style:{width:"100%","justify-content":"space-between"}},Sl=Ke({__name:"page",setup(e){const{lockPwd:a,setLockPwd:t,setLock:n,verifyLockPwd:s}=sl(),{userInfo:v,logout:b}=Ue(),{online:_}=nl(),{hour:y,minute:M,month:I,day:z,week:F}=function(){let e;const a=l(null),t=l(null),n=l(null),s=l(null),u=l(0),d=l(0),c=l(0);function r(){var e,l;const o=new Date;a.value=o.getFullYear(),t.value=o.getMonth()+1,n.value="日一二三四五六".charAt(o.getDay()),s.value=o.getDate(),u.value=(null==(e=`${o.getHours()}`)?void 0:e.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getHours()),d.value=(null==(l=`${o.getMinutes()}`)?void 0:l.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getMinutes()),c.value=o.getSeconds()}return r(),o((()=>{clearInterval(e),e=setInterval((()=>r()),1e3)})),i((()=>clearInterval(e))),{year:a,month:t,week:n,day:s,hour:u,minute:d,second:c}}(),K=l(!a),U=l(""),R=u((()=>a?"请输入锁屏密码或用户密码":"请输入锁屏密码(可选)")),$=u((()=>Re().isMobile));function j(){const e=U.value.trim();t(e),E()}function B(){K.value=!1,n(!1)}function E(){K.value=!1,U.value=""}function N(){const e=U.value.trim();return e?s(e)?(K.value=!1,void n(!1)):P.warning("密码错误，请重新输入"):P.warning("密码不能为空")}function W(){K.value=!1,n(!1),b()}return(e,l)=>{const t=je,n=T,o=A,i=L;return c(),r("div",{class:k([{unLockLogin:d(K)},"locked"]),onKeyup:l[2]||(l[2]=e=>K.value=!0),onMousedown:l[3]||(l[3]=S((()=>{}),["stop"])),onContextmenu:l[4]||(l[4]=S((()=>{}),["prevent"]))},[d(K)?(c(),r("div",Cl,[g(n,{size:80,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),m("div",xl,p(d(v).username),1),g(o,{modelValue:d(U),"onUpdate:modelValue":l[1]||(l[1]=e=>w(U)?U.value=e:null),autofocus:"",placeholder:d(R),type:"password","prefix-icon":"Lock",onKeyup:C(j,["enter"])},null,8,["modelValue","placeholder"]),m("div",Vl,[d(a)?(c(),r(f,{key:0},[g(i,{link:"",type:"primary",onClick:E},{default:x((()=>[V("返回")])),_:1}),g(i,{link:"",type:"primary",onClick:W},{default:x((()=>[V("返回登录")])),_:1}),g(i,{link:"",type:"primary",onClick:N},{default:x((()=>[V("进入系统")])),_:1})],64)):(c(),r(f,{key:1},[g(i,{link:"",type:"primary",onClick:B},{default:x((()=>[V("取消锁屏")])),_:1}),g(i,{link:"",type:"primary",onClick:j},{default:x((()=>[V("确定锁屏")])),_:1})],64))])])):(c(),r(f,{key:0},[m("div",bl,[m("div",hl,[m("span",{class:"lock-icon",title:"解锁屏幕",onClick:l[0]||(l[0]=e=>K.value=!0)},[g(t,{name:"Lock",size:"30"})])]),_l]),g(d(vl),{"is-mobile":d($)},null,8,["is-mobile"]),d($)?h("",!0):(c(),r(f,{key:0},[m("div",yl,[m("div",gl,p(d(y))+":"+p(d(M)),1),m("div",kl,p(d(I))+"月"+p(d(z))+"号，星期"+p(d(F)),1)]),m("div",wl,[m("span",{class:k([{offline:!d(_)},"network"])},[g(t,{name:"wifi",type:d($e).SVG,size:"30",class:"network"},null,8,["type"])],2),g(t,{name:"api",type:d($e).SVG,size:"30"},null,8,["type"])])],64))],64))],34)}}},[["__scopeId","data-v-3afcfa3b"]]),Pl={__name:"index",setup(e){const a=sl(),t=u((()=>a.isLock)),n=l(!1);return o((async()=>{await M(),n.value=!0})),(e,l)=>(c(),I(z,{name:"slide-up"},{default:x((()=>[d(t)&&e.$route.name!==d(Fe)?(c(),I(d(Sl),{key:0})):h("",!0)])),_:1}))}},Tl=e=>(_("data-v-e9f47e6b"),e=e(),y(),e),Al={class:"header flex"},Ll={class:"flex"},Ml=Tl((()=>m("span",{class:"subtitle"},"全局主题",-1))),Il={class:"flex"},zl=Tl((()=>m("span",{class:"subtitle"},"界面设置",-1))),Fl=Ke({__name:"setting",props:F({title:{type:String,default:"系统配置"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:F(Be,["update:modelValue"]),setup(e,{emit:l}){const a=K(e,"modelValue"),t=l,{setConfig:n,resetConfig:o}=Re(),i=U("globalConfig"),s=U("isMobile"),u=function(){const e=R.filter(Boolean).map((e=>(Object.keys($).forEach((l=>{$[l]===e&&(e=l)})),{label:$[e],value:e}))).slice().sort(((e,l)=>e.label-l.label)),l=e[e.length-1].label,a=e[0].label,t={[l]:"大",[a]:"小"};return e.map((e=>({label:t[e.label]||"中",value:e.value})))}();function v(){a.value=!1,t("close")}return(l,t)=>{const b=L,h=B,_=je,y=E,k=N,w=W,C=D,S=O,P=G,T=H,A=q;return c(),I(d(ol),{"model-value":a.value,"show-close":!1,size:d(s)?"90%":"25%",class:"drawer",onClose:v},{header:x((()=>[m("div",Al,[m("span",null,p(e.title),1),g(h,null,{default:x((()=>[g(b,{onClick:v},{default:x((()=>[V("关闭")])),_:1}),g(b,{type:"primary",onClick:t[0]||(t[0]=e=>d(o)(e))},{default:x((()=>[V("重置")])),_:1})])),_:1})])])),default:x((()=>[g(A,null,{default:x((()=>[g(y,null,{default:x((()=>[m("div",Ll,[g(_,{name:"Brush"}),Ml])])),_:1}),g(w,{label:"主题颜色"},{default:x((()=>[g(k,{modelValue:d(i).primaryColor,"onUpdate:modelValue":t[1]||(t[1]=e=>d(i).primaryColor=e),predefine:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff"],onChange:t[2]||(t[2]=e=>d(n)(d(Ee),e))},null,8,["modelValue"])])),_:1}),g(w,{label:"暗黑模式"},{default:x((()=>[m("div",{onClick:t[4]||(t[4]=e=>d(n)(d(Ne),d(i).theme,e))},[g(C,{modelValue:d(i).theme,"onUpdate:modelValue":t[3]||(t[3]=e=>d(i).theme=e),"inline-prompt":"","active-icon":"Moon","inactive-icon":"Sunny","active-value":d(We),"inactive-value":d(De)},null,8,["modelValue","active-value","inactive-value"])])])),_:1}),g(w,{label:"色弱模式"},{default:x((()=>[g(C,{modelValue:d(i).isWeakMode,"onUpdate:modelValue":t[5]||(t[5]=e=>d(i).isWeakMode=e),"inline-prompt":"","active-icon":"MoonNight","inactive-icon":"Sunrise",onChange:t[6]||(t[6]=e=>d(n)("isWeakMode",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"灰色模式"},{default:x((()=>[g(C,{modelValue:d(i).isGreyMode,"onUpdate:modelValue":t[7]||(t[7]=e=>d(i).isGreyMode=e),"inline-prompt":"","active-icon":"View","inactive-icon":"Hide",onChange:t[8]||(t[8]=e=>d(n)("isGreyMode",e))},null,8,["modelValue"])])),_:1}),g(y,{style:{"margin-top":"40px","margin-bottom":"30px"}},{default:x((()=>[m("div",Il,[g(_,{name:"Setting"}),zl])])),_:1}),g(w,{label:"控件大小"},{default:x((()=>[g(P,{modelValue:d(i).size,"onUpdate:modelValue":t[9]||(t[9]=e=>d(i).size=e),onChange:t[10]||(t[10]=e=>d(n)("size",e))},{default:x((()=>[(c(!0),r(f,null,j(d(u),(e=>(c(),I(S,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(w,{label:"语言"},{default:x((()=>[g(P,{modelValue:d(i).lang,"onUpdate:modelValue":t[11]||(t[11]=e=>d(i).lang=e),disabled:""},{default:x((()=>[g(S,{label:"中文",value:"zhCn"}),g(S,{label:"English",value:"enUs"})])),_:1},8,["modelValue"])])),_:1}),g(w,{label:"菜单logo"},{default:x((()=>[g(P,{modelValue:d(i).type,"onUpdate:modelValue":t[12]||(t[12]=e=>d(i).type=e),onChange:t[13]||(t[13]=e=>d(n)("type",e))},{default:x((()=>[g(S,{label:"svg",value:"svg"}),g(S,{label:"文字",value:"text"})])),_:1},8,["modelValue"])])),_:1}),g(w,{label:"菜单宽度"},{default:x((()=>[g(T,{modelValue:d(i).asideWidth,"onUpdate:modelValue":t[14]||(t[14]=e=>d(i).asideWidth=e),modelModifiers:{number:!0},min:200,style:{width:"140px"},onChange:t[15]||(t[15]=e=>d(n)("asideWidth",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"消息最大展示数量"},{default:x((()=>[g(T,{modelValue:d(i).maxMessageCount,"onUpdate:modelValue":t[16]||(t[16]=e=>d(i).maxMessageCount=e),modelModifiers:{number:!0},min:1,disabled:"",style:{width:"140px"}},null,8,["modelValue"])])),_:1}),g(w,{label:"菜单折叠"},{default:x((()=>[g(C,{modelValue:d(i).isCollapse,"onUpdate:modelValue":t[17]||(t[17]=e=>d(i).isCollapse=e),"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:t[18]||(t[18]=e=>d(n)("isCollapse",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"标签栏"},{default:x((()=>[g(C,{modelValue:d(i).isShowTab,"onUpdate:modelValue":t[19]||(t[19]=e=>d(i).isShowTab=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[20]||(t[20]=e=>d(n)("isShowTab",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"面包屑"},{default:x((()=>[g(C,{modelValue:d(i).isShowBreadcrumb,"onUpdate:modelValue":t[21]||(t[21]=e=>d(i).isShowBreadcrumb=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[22]||(t[22]=e=>d(n)("isShowBreadcrumb",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"手风琴"},{default:x((()=>[g(C,{modelValue:d(i).accordionMode,"onUpdate:modelValue":t[23]||(t[23]=e=>d(i).accordionMode=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[24]||(t[24]=e=>d(n)("accordionMode",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"背景模糊"},{default:x((()=>[g(C,{modelValue:d(i).isBlur,"onUpdate:modelValue":t[25]||(t[25]=e=>d(i).isBlur=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[26]||(t[26]=e=>d(n)("isBlur",e))},null,8,["modelValue"])])),_:1}),g(w,{label:"展示页脚"},{default:x((()=>[g(C,{modelValue:d(i).isShowFooter,"onUpdate:modelValue":t[27]||(t[27]=e=>d(i).isShowFooter=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[28]||(t[28]=e=>d(n)("isShowFooter",e))},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model-value","size"])}}},[["__scopeId","data-v-e9f47e6b"]]);const Kl=Ke({},[["render",function(e,l){const a=je,t=B,n=Z,o=J;return c(),I(o,{"separator-icon":"ArrowRight"},{default:x((()=>[g(X,{name:"breadcrumb"},{default:x((()=>[(c(!0),r(f,null,j(e.$route.meta.breadcrumb,(e=>{var l;return v((c(),I(n,{key:e.path,class:"breadcrumb-item flex"},{default:x((()=>[g(t,{size:6},{default:x((()=>{var l,t;return[v(g(a,{name:null==(l=e.meta)?void 0:l.icon,type:null==(t=e.meta)?void 0:t.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),m("span",null,p(e.meta.title),1)]})),_:2},1024)])),_:2},1536)),[[b,"/"!==e.path&&!(null==(l=e.meta)?void 0:l.hiddenBreadcrumb)]])})),128))])),_:1})])),_:1})}],["__scopeId","data-v-7a5e307f"]]),Ul=il(),Rl=e(`${Ae}__tabsView`,(()=>{const e=l(Le(Oe)||[]);return{tabsList:e,addTabs:function(l){e.value.every((e=>e.fullPath!==l.fullPath))&&e.value.push(l),Ul.keepAliveList.includes(l.name)&&l.isKeepAlive&&Ul.addKeepAlive(l.name),ze(Oe,e.value)},closeTab:function(l,a=!0){a&&e.value.forEach(((a,t)=>{if(a.fullPath!==l)return;const n=e.value[t+1]||e.value[t-1];n&&Ge.push({path:n.fullPath})}));const t=e.value,n=t.find((e=>e.path===l));(null==n?void 0:n.isKeepAlive)&&Ul.removeKeepAlive(n.name);const o=t.filter((e=>e.fullPath!==l));ze(Oe,o),e.value=o},closeLeftRightTabs:function(l,a){const t=e.value.findIndex((e=>e.fullPath===l));if(-1!==t){const l="left"===a?[0,t]:[t+1,e.value.length];e.value=e.value.filter(((e,a)=>a<l[0]||a>=l[1]||!e.close))}const n=e.value,o=n.filter((e=>e.isKeepAlive));Ul.setKeepAlive(o.map((e=>e.fullPath))),ze(Oe,n)},closeOtherTabs:function(l){const a=e.value.filter((e=>e.fullPath===l||!e.close));ze(Oe,a),e.value=a;const t=a.filter((e=>e.isKeepAlive));Ul.setKeepAlive(t.map((e=>e.name)))},closeAllTabs:function(){e.value=[],Ul.clearKeepAlive(),ze(Oe,[])},updateTabs:function(l){e.value.forEach((e=>{e.fullPath===l.fullPath&&(e=Object.assign(e,l))})),ze(Oe,e.value)},updateTabTitle:function(l=""){e.value.forEach((e=>{e.fullPath===He()&&(e.meta.title=l)})),ze(Oe,e.value)}}})),$l={class:"tabs-view flex"},jl={class:"tab-label-text"},Bl={class:"tab-more-action flex"},El=Ke({__name:"tabs-view",setup(e){const l=Q((()=>Xe((()=>import("./index-CMBT9BYn.js").then((e=>e.X))),__vite__mapDeps([0,1,2,3])))),t=a(),i=Y(),s=Rl(),h=il(),_=Re(),y=u((()=>s.tabsList)),k=U("globalConfig");function w(e){const l=t.fullPath,a={toggleFullScreen:Ze,refresh:C,closeCurrentTab:S,closeLeftTabs:()=>s.closeLeftRightTabs(l,"left"),closeRightTabs:()=>s.closeLeftRightTabs(l,"right"),closeOtherTabs:()=>s.closeOtherTabs(l),toggleContentFullScreen:()=>_.setConfig("contentFullScreen",!k.value.contentFullScreen)}[e];a&&a()}function C(){setTimeout((async()=>{var e,l;(null==(e=t.meta)?void 0:e.isKeepAlive)&&h.removeKeepAlive(t.name),h.setRouteShow(!1),await M(),(null==(l=t.meta)?void 0:l.isKeepAlive)&&h.addKeepAlive(t.name),h.setRouteShow(!0)}),0)}function S(e){var l;(null==(l=t.meta)?void 0:l.isAffix)||s.closeTab(e,e===t.fullPath)}function P(e){var l,a,t,n,o,i,u,d;const c={icon:(null==(l=null==e?void 0:e.meta)?void 0:l.icon)||null,iconType:null==(a=null==e?void 0:e.meta)?void 0:a.iconType,title:null==(t=e.meta)?void 0:t.title,fullPath:e.fullPath,path:e.path,name:e.name,close:!(null==(n=null==e?void 0:e.meta)?void 0:n.isAffix),hidden:null==(o=null==e?void 0:e.meta)?void 0:o.hidden,fullPage:null==(i=null==e?void 0:e.meta)?void 0:i.fullPage,isAffix:(null==(u=null==e?void 0:e.meta)?void 0:u.isAffix)||!1,isKeepAlive:(null==(d=null==e?void 0:e.meta)?void 0:d.isKeepAlive)||!1};s.addTabs(c)}return o((()=>{y.value.forEach((e=>{!e.isAffix||(null==e?void 0:e.hidden)||(null==e?void 0:e.fullPage)||P(e)}))})),n((()=>t.fullPath),(()=>{const e=t.meta;(null==e?void 0:e.fullPage)||(null==e?void 0:e.type)===qe.LINK||P(t)}),{immediate:!0}),(e,a)=>{const t=ee,n=le,o=ae,s=te,u=ne;return c(),r("div",$l,[g(n,{"model-value":e.$route.fullPath,type:"card",onTabClick:a[0]||(a[0]=e=>d(i).push(e.props.name)),onTabRemove:S},{default:x((()=>[(c(!0),r(f,null,j(d(y),(a=>(c(),I(t,{key:a.name,name:a.fullPath,closable:a.close&&e.$route.fullPath===a.fullPath},{label:x((()=>[v(g(d(l),{name:a.icon,type:null==a?void 0:a.iconType,style:{"margin-right":"5px"}},null,8,["name","type"]),[[b,a.icon]]),m("span",jl,p(a.title),1)])),_:2},1032,["name","closable"])))),128))])),_:1},8,["model-value"]),g(u,{trigger:"click",onCommand:w},{dropdown:x((()=>[g(s,null,{default:x((()=>[g(o,{icon:"Refresh",command:"refresh"},{default:x((()=>[V("刷新")])),_:1}),g(o,{icon:"FullScreen",command:"toggleFullScreen",divided:""},{default:x((()=>[V("全屏")])),_:1}),g(o,{icon:"FullScreen",command:"toggleContentFullScreen"},{default:x((()=>[V(p(d(k).contentFullScreen?"退出内容区全屏":"内容区全屏"),1)])),_:1}),g(o,{icon:"Remove",command:"closeTab",divided:""},{default:x((()=>[V("关闭当前")])),_:1}),g(o,{icon:"DArrowLeft",command:"closeLeftTabs"},{default:x((()=>[V("关闭左侧")])),_:1}),g(o,{icon:"DArrowRight",command:"closeRightTabs"},{default:x((()=>[V("关闭右侧")])),_:1}),g(o,{icon:"CircleClose",command:"closeOtherTabs"},{default:x((()=>[V("关闭其他")])),_:1}),g(o,{icon:"Delete",command:"closeAllTabs"},{default:x((()=>[V("关闭全部")])),_:1})])),_:1})])),default:x((()=>[m("div",Bl,[g(d(l),{name:"CaretBottom"})])])),_:1})])}}},[["__scopeId","data-v-ff12d1c3"]]),Nl={key:0},Wl=["onClick"],Dl={class:"menu-left"},Ol={class:"menu-title"},Gl=Ke({__name:"search-page",props:{iconName:{type:String,default:"Search"},iconType:{type:String,default:$e.EL_ICON}},emits:Be,setup(e,{emit:a}){const t=a,o=Y(),{visible:i,open:s,close:u}=tl(),h=l(null),_=l(""),y=l([]),k=function(){const e=o.getRoutes();return e.filter((e=>{var l;return!(null==(l=e.meta)?void 0:l.hidden)&&![Je,Fe,"notfound"].includes(e.name)}))}();async function C(){s(),await M(),h.value.focus()}function V(){u(t),_.value=""}return n(_,oe((function(){const e=_.value;y.value=e?k.filter((l=>l.path.toLowerCase().includes(e.toLowerCase())||l.meta.title.toLowerCase().includes(e.toLowerCase()))):[]}),300)),(l,a)=>{const t=je,n=A,s=B,u=ie,k=Ye;return c(),r("div",null,[g(t,{name:e.iconName,type:e.iconType,style:{display:"flex"},onClick:C},null,8,["name","type"]),g(k,{modelValue:d(i),"onUpdate:modelValue":a[1]||(a[1]=e=>w(i)?i.value=e:null),"show-fullscreen":!1,"show-close":!1,height:"400",scrollable:"",onClose:V},{header:x((()=>[g(n,{ref_key:"inputRef",ref:h,modelValue:d(_),"onUpdate:modelValue":a[0]||(a[0]=e=>w(_)?_.value=e:null),clearable:"",size:"large","prefix-icon":"Search",placeholder:"页面搜索：支持菜单名称、路径"},null,8,["modelValue"])])),default:x((()=>[d(y).length?(c(),r("div",Nl,[(c(!0),r(f,null,j(d(y),(e=>(c(),r("div",{key:e.path,class:"menu-item flex",onClick:l=>function(e){if(e.meta.type===qe.LINK)return window.open(e.path,"_blank");o.push(e.path),V()}(e)},[m("div",Dl,[g(s,null,{default:x((()=>[v(g(t,{name:e.meta.icon,type:e.meta.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),m("span",Ol,p(e.meta.title),1)])),_:2},1024)]),g(t,{name:"enter",type:d($e).SVG},null,8,["type"])],8,Wl)))),128))])):(c(),I(u,{key:1}))])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-b553fd95"]]),Hl=e=>(_("data-v-207eed05"),e=e(),y(),e),ql={class:"notice-list"},Xl={class:"notice-item flex"},Zl=Hl((()=>m("div",{class:"notice-content"},[m("h1",null,"中分头，背带裤，我是ikun你记住"),m("span",null,"不是小黑紫")],-1))),Jl={class:"notice-item flex"},Yl=Hl((()=>m("div",{class:"notice-content"},[m("h1",null,"哎呦你干嘛啊~~~"),m("span",null,"kun")],-1))),Ql={class:"notice-item flex"},ea=Hl((()=>m("div",{class:"notice-content"},[m("h1",null,"我是练习时长两年半的个人练习生"),m("span",null,"唱跳rap")],-1))),la=Ke({__name:"notice",setup(e){const a=l("notice"),t=[{label:"通知(3)",value:"notice"},{label:"消息(0)",value:"message"},{label:"待办(0)",value:"todo"}],n={"font-size":"30px","font-weight":"bold"};return(e,l)=>{const o=je,i=se,s=ue,u=ie,r=de;return c(),I(r,{placement:"bottom",trigger:"click",width:300},{reference:x((()=>[g(i,{value:12,class:"item"},{default:x((()=>[g(o,{name:"Bell",style:{display:"flex"}})])),_:1})])),default:x((()=>{return[g(s,{modelValue:d(a),"onUpdate:modelValue":l[0]||(l[0]=e=>w(a)?a.value=e:null),options:t,block:""},{default:x((({item:e})=>[V(p(e.label),1)])),_:1},8,["modelValue"]),v(m("div",null,[m("div",ql,[m("div",Xl,[g(o,{name:"View",color:"#f79484",style:n}),Zl]),m("div",Jl,[g(o,{name:"Refresh",color:"#69c2f9",style:n}),Yl]),m("div",Ql,[g(o,{name:"Delete",color:"#4edd92",style:n}),ea])])],512),[[b,"notice"===d(a)]]),v(m("div",null,[g(u,{description:`暂无${null==(e=t.find((e=>e.value===a.value)))?void 0:e.label}`,"image-size":60},null,8,["description"])],512),[[b,["message","todo"].includes(d(a))]])];var e})),_:1})}}},[["__scopeId","data-v-207eed05"]]),aa={class:"left flex"},ta={class:"right flex"},na=(e=>(_("data-v-d3266270"),e=e(),y(),e))((()=>m("span",{class:"user"},"Admin",-1))),oa=Ke({__name:"index",setup(e){const l=Ue(),a=sl(),{setConfig:t}=Re(),{visible:n,open:o}=tl(),i=U("globalConfig"),s=u((()=>Re().isMobile)),p=u((()=>i.value.theme===We?De:We));return(e,u)=>{const _=je,y=ce,C=T,S=B,P=ae,A=te,L=ne,M=re;return c(),I(M,{class:"app-header"},{default:x((()=>[m("div",{class:k(["top","flex",{displayNone:d(i).contentFullScreen}])},[m("div",aa,[d(s)?h("",!0):(c(),r(f,{key:0},[g(_,{name:d(i).isCollapse?"Expand":"Fold",size:"22",class:"collapse",onClick:u[0]||(u[0]=e=>d(t)("isCollapse",!d(i).isCollapse))},null,8,["name"]),v(g(d(Kl),null,null,512),[[b,d(i).isShowBreadcrumb]])],64))]),m("div",ta,[g(S,{size:15},{default:x((()=>[g(_,{name:"config",size:"20",type:d($e).SVG,onClick:d(o)},null,8,["type","onClick"]),g(y,{class:"text",content:"搜索页面",effect:d(p)},{default:x((()=>[g(d(Gl))])),_:1},8,["effect"]),g(y,{class:"text",content:"开启锁屏",effect:d(p)},{default:x((()=>[g(_,{name:"Lock",onClick:u[1]||(u[1]=e=>d(a).setLock(!0))})])),_:1},8,["effect"]),g(_,{name:"FullScreen",onClick:d(Ze)},null,8,["onClick"]),g(d(la)),g(C,{src:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",size:40})])),_:1}),g(L,null,{dropdown:x((()=>[g(A,null,{default:x((()=>[g(P,{icon:"Lock",onClick:u[2]||(u[2]=l=>e.$router.push("/forgetPassword"))},{default:x((()=>[V(" 修改密码 ")])),_:1}),g(P,{icon:"SwitchButton",onClick:u[3]||(u[3]=e=>d(l).logout())},{default:x((()=>[V(" 退出登录 ")])),_:1})])),_:1})])),default:x((()=>[na])),_:1})])],2),v(g(d(El),null,null,512),[[b,d(i).isShowTab]]),g(d(Fl),{modelValue:d(n),"onUpdate:modelValue":u[4]||(u[4]=e=>w(n)?n.value=e:null)},null,8,["modelValue"]),g(d(Pl))])),_:1})}}},[["__scopeId","data-v-d3266270"]]),ia={__name:"menu-title",props:{lineClamp:[String,Number],tippyProps:{type:Object,default:()=>({})},textType:{type:String,default:""}},setup(e){const a=e,t=me(),n=l(null),i=l(null);function s(){return{content:fe(t.content||t.default),...a.tippyProps}}function u(e){const l=i.value;var t;t=e.target,(a.lineClamp?t.scrollHeight>t.clientHeight:t.scrollWidth>t.clientWidth)?(l.setProps(s()),l.enable()):l.disable()}return o((()=>{var e;i.value=pe(null==(e=n.value)?void 0:e.$el,s())})),(l,a)=>{const t=he;return c(),I(t,be({truncated:!e.lineClamp,lineClamp:e.lineClamp,...l.$attrs},{ref_key:"textRef",ref:n,type:e.textType,onMouseover:S(u,["self"])}),{default:x((()=>[ve(l.$slots,"default")])),_:3},16,["type"])}}},sa={__name:"aside-menu",props:{menus:Array},setup(e){const l=Y(),a=Re(),t=u((()=>a.globalConfig.theme));function n(e){return e.children&&!e.children.every((e=>e.meta.hidden))}return(a,o)=>{const i=je,s=ye,u=_e("aside-menu",!0),m=ge;return c(!0),r(f,null,j(e.menus,((e,o)=>(c(),r(f,{key:e.path},[n(e)?(c(),I(m,{key:1,index:o+1+""},{title:x((()=>{var l,n;return[v(g(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(n=e.meta)?void 0:n.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),g(d(ia),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:x((()=>[V(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])]})),default:x((()=>[g(u,{menus:e.children},null,8,["menus"])])),_:2},1032,["index"])):(c(),I(s,{key:0,index:e.path,onClick:a=>function(e){if(e.meta.type===qe.LINK)return window.open(e.path,"_blank");l.push(e.path)}(e)},{title:x((()=>[g(d(ia),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:x((()=>[V(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])])),default:x((()=>{var l,a;return[v(g(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(a=e.meta)?void 0:a.iconType},null,8,["name","type"]),[[b,e.meta.icon]])]})),_:2},1032,["index","onClick"]))],64)))),128)}}},ua={class:"mobile"},da=Ke({__name:"mobile-menu",props:{menus:Array},setup(e){const{visible:l,open:a,close:t}=tl();return(n,o)=>{const i=je,s=ke,u=we;return c(),r("div",ua,[m("div",{class:"mobile-nav flex",onClick:o[0]||(o[0]=(...e)=>d(a)&&d(a)(...e))},[g(i,{name:"Menu",color:d(Qe)("--el-color-white"),size:"26"},null,8,["color"])]),g(d(ol),{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=e=>w(l)?l.value=e:null),direction:"ltr",size:"60%","is-blur":"","show-close":!1,"with-header":!1},{default:x((()=>[g(u,null,{default:x((()=>[g(s,{router:"","default-active":n.$route.path,"unique-opened":"",onSelect:d(t)},{default:x((()=>[g(d(sa),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","onSelect"])])),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-041bf8ff"]]),ca={class:"app-logo"},ra={class:"app-title"},ma=Ke({__name:"index",props:{menus:Array},setup(e){const l=U("globalConfig"),a=U("isMobile");return(t,n)=>{const o=je,i=ke,s=we,u=Ce;return c(),r(f,null,[v(g(u,{width:`${d(l).isCollapse?82:d(l).asideWidth}px`,class:k({displayNone:d(l).contentFullScreen})},{default:x((()=>[m("div",ca,[g(z,{name:"el-zoom-in-top"},{default:x((()=>[v(m("p",ra,"Vue Admin",512),[[b,"text"===d(l).type]])])),_:1}),g(z,{name:"el-zoom-in-bottom"},{default:x((()=>[v(g(o,{type:d($e).SVG,size:"50",name:"logo","follow-theme":""},null,8,["type"]),[[b,d(l).type===d($e).SVG]])])),_:1})]),g(s,{class:"scrollbar"},{default:x((()=>[g(i,{"default-active":t.$route.path,collapse:d(l).isCollapse,"collapse-transition":!1,"unique-opened":d(l).accordionMode,"popper-class":"custom-popper"},{default:x((()=>[g(d(sa),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","collapse","unique-opened"])])),_:1})])),_:1},8,["width","class"]),[[b,!d(a)]]),v(g(d(da),{menus:e.menus},null,8,["menus"]),[[b,d(a)]])],64)}}},[["__scopeId","data-v-0d1625f2"]]),pa={class:"iframe-box"},fa=["src"],va=Ke({__name:"iframe",setup(e){const l=a(),t=u((()=>{var e;return(null==(e=null==l?void 0:l.meta)?void 0:e.type)===qe.IFRAME}));return(e,a)=>v((c(),r("div",pa,[m("iframe",{src:d(l).meta.url,frameborder:"0"},null,8,fa)],512)),[[b,d(t)]])}},[["__scopeId","data-v-bc04169b"]]),ba={class:"footer"},ha=Ke({__name:"index",setup(e){const a=Re(),t=il(),n=u((()=>a.globalConfig)),s=u((()=>t.keepAliveList)),r=u((()=>t.isShowRoute)),p=l([]),f=new Map;function _(){const e=al();a.setIsMobile(e),a.setConfig("isCollapse",document.body.clientWidth<=900||e)}function y(e,l){if(!e)return;const a=l.fullPath;let t=f.get(a);return t||(t={name:a,render:()=>fe(e)},f.set(a,t)),fe(t)}return o((()=>{!async function(){const e=await el(),l=ll(e);p.value=l}(),_(),window.addEventListener("resize",_)})),i((()=>window.removeEventListener("resize",_))),xe("globalConfig",n),xe("isMobile",u((()=>a.isMobile))),(e,l)=>{const a=_e("router-view"),t=Te,o=Ve;return c(),I(o,null,{default:x((()=>[g(d(ma),{menus:d(p)},null,8,["menus"]),g(o,{style:{display:"flex","flex-direction":"column"}},{default:x((()=>[g(d(oa)),g(t,{class:"main-box"},{default:x((()=>[g(a,null,{default:x((({Component:e,route:l})=>[g(z,{name:"fade-transform",mode:"out-in"},{default:x((()=>[(c(),I(Se,{include:d(s)},[d(r)?(c(),I(Pe(y(e,l)),{key:l.fullPath})):h("",!0)],1032,["include"]))])),_:2},1024)])),_:1}),g(d(va))])),_:1}),v(m("footer",ba,"xxx版权所有",512),[[b,d(n).isShowFooter]])])),_:1})])),_:1})}}},[["__scopeId","data-v-836bddbf"]]);export{ha as default};
