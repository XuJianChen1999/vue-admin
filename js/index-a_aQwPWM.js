const __vite__fileDeps=["./index-DZ8Xxrs2.js",".pnpm-B5NcQQUZ.js","../css/.pnpm-BJV8UV2q.css","../css/index-BmO5fAPo.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{x as e,r as l,aP as a,aQ as t,a as n,aR as o,aS as i,aT as s,c as u,aw as d,e as c,f as r,i as m,aG as p,F as f,at as v,au as b,j as h,av as _,aU as y,aV as g,as as k,aH as w,aW as C,E as x,aX as V,aY as S,aI as P,aZ as A,ar as T,a_ as L,aB as M,aC as I,a$ as z,b0 as U,b1 as F,g as R,b2 as K,b3 as $,b4 as j,b5 as B,b6 as E,b7 as D,b8 as N,b9 as W,ba as G,bb as O,bc as H,bd as q,be as Y,bf as Z,bg as J,bh as Q,bi as X,bj as ee,bk as le,bl as ae,bm as te,bn as ne,bo as oe,bp as ie,bq as se,br as ue,bs as de,bt as ce,bu as re,h as me,aD as pe,bv as fe,aJ as ve,bw as be,bx as he,by as _e,aE as ye,bz as ge,bA as ke,bB as we,bC as Ce,az as xe,ay as Ve}from"./.pnpm-B5NcQQUZ.js";import{b as Se,g as Pe,I as Ae,L as Te,s as Le,a as Me,_ as Ie,u as ze,c as Ue,d as Fe,e as Re,M as Ke,P as $e,T as je,D as Be,f as Ee,h as De,r as Ne,i as We,R as Ge,j as Oe,t as He,k as qe,l as Ye,m as Ze,n as Je,o as Qe,p as Xe}from"./index-DZ8Xxrs2.js";import{u as el}from"./useModal-DcqZWdYp.js";import{u as ll}from"./useOnline-BXWM1gGm.js";import al from"./drawer-DdRuRZ51.js";const tl=e(`${Se}__keep-alive`,(()=>{const e=l([]),a=l(!0);return{keepAliveList:e,isShowRoute:a,addKeepAlive:function(l){!e.value.includes(l)&&e.value.push(l)},setKeepAlive:function(l){e.value=l},removeKeepAlive:function(l){e.value=e.value.filter((e=>e!==l))},clearKeepAlive:function(){e.value=[]},setRouteShow:function(e){a.value=e}}})),nl=e(`${Se}__lock-screen`,(()=>{const e=a(),{idle:o}=t(36e5),i=l(Pe(Ae)||!1),s=l("123"),u=l(Pe(Te)||"");function d(e){i.value=e,Le(Ae,e),!e&&r()}function c(e){Le(Te,e),u.value=e||s.value}function r(){Le(Te,""),u.value=""}return window.addEventListener("beforeunload",(()=>{i.value&&!u.value&&d(!1)})),n(o,(l=>{e.name!==Me?l&&(d(!0),c()):d(!1)})),{isLock:i,lockPwd:u,loginPwd:s,setLock:d,setLockPwd:c,verifyLockPwd:function(e){return[u,s].some((l=>l.value===e))},saveLoginPwd:function(e){s.value=e},resetLockPwd:r}}));const ol={key:0,class:"charge"},il={class:"charge-container"},sl={class:"charge-number"},ul={class:"charging"},dl={class:"status"},cl={key:1,class:"not-support"},rl=Ie({__name:"charging",props:{isMobile:Boolean},setup(e){const{charging:l,chargingTime:a,dischargingTime:t,level:n,isSupported:o}=s(),i=u((()=>{const e=l.value;return e&&100*n.value>=100?"已充满":e?"充电中":"已断开电源"})),_=u((()=>{const e=t.value;return`${~~(e/3600)}小时${~~(e/60%60)}分钟`}));return(l,s)=>d(o)?(c(),r("div",ol,[m("div",il,[m("div",sl,p((100*d(n)).toFixed(0))+"%",1),s[0]||(s[0]=m("div",{class:"charge-contrast"},[m("div",{class:"charge-circle"}),m("ul",{class:"charge-bubbles"},[m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li")])],-1))]),m("div",ul,[m("div",dl,p(d(i)),1),e.isMobile?h("",!0):(c(),r(f,{key:0},[v(m("div",null," 剩余可使用时间："+p(d(_)),513),[[b,Number.isFinite(d(t))&&0!==d(t)]]),v(m("span",null," 距离电池充满需要："+p(d(_)),513),[[b,Number.isFinite(d(a))&&0!==d(a)]])],64))])])):(c(),r("div",cl,"当前浏览器不支持Battery Status API"))}},[["__scopeId","data-v-0eaf3c98"]]),ml={class:"lock-box"},pl={class:"lock"},fl={class:"local-time"},vl={class:"time"},bl={class:"date"},hl={class:"computer-status"},_l={key:1,class:"login-box"},yl={class:"username"},gl={class:"flex",style:{width:"100%","justify-content":"space-between"}},kl=Ie({__name:"page",setup(e){const{lockPwd:a,setLockPwd:t,setLock:n,verifyLockPwd:s}=nl(),{userInfo:v,logout:b}=ze(),{online:A}=ll(),{hour:T,minute:L,month:M,day:I,week:z}=function(){let e;const a=l(null),t=l(null),n=l(null),s=l(null),u=l(0),d=l(0),c=l(0);function r(){var e,l;const o=new Date;a.value=o.getFullYear(),t.value=o.getMonth()+1,n.value="日一二三四五六".charAt(o.getDay()),s.value=o.getDate(),u.value=(null==(e=`${o.getHours()}`)?void 0:e.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getHours()),d.value=(null==(l=`${o.getMinutes()}`)?void 0:l.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getMinutes()),c.value=o.getSeconds()}return r(),o((()=>{clearInterval(e),e=setInterval((()=>r()),1e3)})),i((()=>clearInterval(e))),{year:a,month:t,week:n,day:s,hour:u,minute:d,second:c}}(),U=l(!a),F=l(""),R=u((()=>a?"请输入锁屏密码或用户密码":"请输入锁屏密码(可选)")),K=u((()=>Ue().isMobile));function $(){const e=F.value.trim();t(e),B()}function j(){U.value=!1,n(!1)}function B(){U.value=!1,F.value=""}function E(){const e=F.value.trim();return e?s(e)?(U.value=!1,void n(!1)):x.warning("密码错误，请重新输入"):x.warning("密码不能为空")}function D(){U.value=!1,n(!1),b()}return(e,l)=>{const t=Re,n=V,o=S,i=P;return c(),r("div",{class:y([{unLockLogin:d(U)},"locked"]),onKeyup:l[2]||(l[2]=e=>U.value=!0),onMousedown:l[3]||(l[3]=C((()=>{}),["stop"])),onContextmenu:l[4]||(l[4]=C((()=>{}),["prevent"]))},[d(U)?(c(),r("div",_l,[_(n,{size:80,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),m("div",yl,p(d(v).username),1),_(o,{modelValue:d(F),"onUpdate:modelValue":l[1]||(l[1]=e=>g(F)?F.value=e:null),autofocus:"",placeholder:d(R),type:"password","prefix-icon":"Lock"},null,8,["modelValue","placeholder"]),m("div",gl,[d(a)?(c(),r(f,{key:0},[_(i,{link:"",type:"primary",onClick:B},{default:k((()=>l[6]||(l[6]=[w("返回")]))),_:1}),_(i,{link:"",type:"primary",onClick:D},{default:k((()=>l[7]||(l[7]=[w("返回登录")]))),_:1}),_(i,{link:"",type:"primary",onClick:E},{default:k((()=>l[8]||(l[8]=[w("进入系统")]))),_:1})],64)):(c(),r(f,{key:1},[_(i,{link:"",type:"primary",onClick:j},{default:k((()=>l[9]||(l[9]=[w("取消锁屏")]))),_:1}),_(i,{link:"",type:"primary",onClick:$},{default:k((()=>l[10]||(l[10]=[w("确定锁屏")]))),_:1})],64))])])):(c(),r(f,{key:0},[m("div",ml,[m("div",pl,[m("span",{class:"lock-icon",title:"解锁屏幕",onClick:l[0]||(l[0]=e=>U.value=!0)},[_(t,{name:"Lock",size:"30"})])]),l[5]||(l[5]=m("h6",{class:"tips"},"点击解锁",-1))]),_(d(rl),{"is-mobile":d(K)},null,8,["is-mobile"]),d(K)?h("",!0):(c(),r(f,{key:0},[m("div",fl,[m("div",vl,p(d(T))+":"+p(d(L)),1),m("div",bl,p(d(M))+"月"+p(d(I))+"号，星期"+p(d(z)),1)]),m("div",hl,[m("span",{class:y([{offline:!d(A)},"network"])},[_(t,{name:"wifi",type:d(Fe).SVG,size:"30",class:"network"},null,8,["type"])],2),_(t,{name:"api",type:d(Fe).SVG,size:"30"},null,8,["type"])])],64))],64))],34)}}},[["__scopeId","data-v-62efe30b"]]),wl={__name:"index",setup(e){const a=nl(),t=u((()=>a.isLock)),n=l(!1);return o((async()=>{await A(),n.value=!0})),(e,l)=>(c(),T(L,{name:"slide-up"},{default:k((()=>[d(t)&&e.$route.name!==d(Me)?(c(),T(d(kl),{key:0})):h("",!0)])),_:1}))}},Cl={class:"header flex"},xl={class:"flex"},Vl={class:"flex"},Sl=Ie({__name:"setting",props:M({title:{type:String,default:"系统配置"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:M(Ke,["update:modelValue"]),setup(e,{emit:l}){const a=I(e,"modelValue"),t=l,{setConfig:n,resetConfig:o}=Ue(),i=z("globalConfig"),s=z("isMobile"),u=function(){const e=U.filter(Boolean).map((e=>(Object.keys(F).forEach((l=>{F[l]===e&&(e=l)})),{label:F[e],value:e}))).slice().sort(((e,l)=>e.label-l.label)),l=e[e.length-1].label,a=e[0].label,t={[l]:"大",[a]:"小"};return e.map((e=>({label:t[e.label]||"中",value:e.value})))}();function v(){a.value=!1,t("close")}return(l,t)=>{const b=P,h=K,y=Re,g=$,C=j,x=B,V=E,S=D,A=N,L=W,M=G;return c(),T(d(al),{"model-value":a.value,"show-close":!1,size:d(s)?"90%":"20%",class:"drawer",onClose:v},{header:k((()=>[m("div",Cl,[m("span",null,p(e.title),1),_(h,null,{default:k((()=>[_(b,{onClick:v},{default:k((()=>t[31]||(t[31]=[w("关闭")]))),_:1}),_(b,{type:"primary",onClick:t[0]||(t[0]=e=>d(o)(e))},{default:k((()=>t[32]||(t[32]=[w("重置")]))),_:1})])),_:1})])])),default:k((()=>[_(M,null,{default:k((()=>[_(g,null,{default:k((()=>[m("div",xl,[_(y,{name:"Brush"}),t[33]||(t[33]=m("span",{class:"subtitle"},"全局主题",-1))])])),_:1}),_(x,{label:"主题颜色"},{default:k((()=>[_(C,{modelValue:d(i).primaryColor,"onUpdate:modelValue":t[1]||(t[1]=e=>d(i).primaryColor=e),predefine:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff"],onChange:t[2]||(t[2]=e=>d(n)(d($e),e))},null,8,["modelValue"])])),_:1}),_(x,{label:"暗黑模式"},{default:k((()=>[m("div",{onClick:t[4]||(t[4]=e=>d(n)(d(je),d(i).theme,e))},[_(V,{modelValue:d(i).theme,"onUpdate:modelValue":t[3]||(t[3]=e=>d(i).theme=e),"inline-prompt":"","active-icon":"Moon","inactive-icon":"Sunny","active-value":d(Be),"inactive-value":d(Ee)},null,8,["modelValue","active-value","inactive-value"])])])),_:1}),_(x,{label:"色弱模式"},{default:k((()=>[_(V,{modelValue:d(i).isWeakMode,"onUpdate:modelValue":t[5]||(t[5]=e=>d(i).isWeakMode=e),"inline-prompt":"","active-icon":"MoonNight","inactive-icon":"Sunrise",onChange:t[6]||(t[6]=e=>d(n)("isWeakMode",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"灰色模式"},{default:k((()=>[_(V,{modelValue:d(i).isGreyMode,"onUpdate:modelValue":t[7]||(t[7]=e=>d(i).isGreyMode=e),"inline-prompt":"","active-icon":"View","inactive-icon":"Hide",onChange:t[8]||(t[8]=e=>d(n)("isGreyMode",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"暗黑侧边栏"},{default:k((()=>[_(V,{modelValue:d(i).isDarkAside,"onUpdate:modelValue":t[9]||(t[9]=e=>d(i).isDarkAside=e),onChange:t[10]||(t[10]=e=>d(n)("isDarkAside",e))},null,8,["modelValue"])])),_:1}),_(g,{style:{"margin-top":"40px","margin-bottom":"30px"}},{default:k((()=>[m("div",Vl,[_(y,{name:"Setting"}),t[34]||(t[34]=m("span",{class:"subtitle"},"界面设置",-1))])])),_:1}),_(x,{label:"控件大小"},{default:k((()=>[_(A,{modelValue:d(i).size,"onUpdate:modelValue":t[11]||(t[11]=e=>d(i).size=e),onChange:t[12]||(t[12]=e=>d(n)("size",e))},{default:k((()=>[(c(!0),r(f,null,R(d(u),(e=>(c(),T(S,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"语言"},{default:k((()=>[_(A,{modelValue:d(i).lang,"onUpdate:modelValue":t[13]||(t[13]=e=>d(i).lang=e),disabled:""},{default:k((()=>[_(S,{label:"中文",value:"zhCn"}),_(S,{label:"English",value:"enUs"})])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"菜单logo"},{default:k((()=>[_(A,{modelValue:d(i).type,"onUpdate:modelValue":t[14]||(t[14]=e=>d(i).type=e),onChange:t[15]||(t[15]=e=>d(n)("type",e))},{default:k((()=>[_(S,{label:"svg",value:"svg"}),_(S,{label:"文字",value:"text"})])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"菜单宽度"},{default:k((()=>[_(L,{modelValue:d(i).asideWidth,"onUpdate:modelValue":t[16]||(t[16]=e=>d(i).asideWidth=e),modelModifiers:{number:!0},min:200,style:{width:"140px"},onChange:t[17]||(t[17]=e=>d(n)("asideWidth",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"消息最大展示数量"},{default:k((()=>[_(L,{modelValue:d(i).maxMessageCount,"onUpdate:modelValue":t[18]||(t[18]=e=>d(i).maxMessageCount=e),modelModifiers:{number:!0},min:1,disabled:"",style:{width:"140px"}},null,8,["modelValue"])])),_:1}),_(x,{label:"菜单折叠"},{default:k((()=>[_(V,{modelValue:d(i).isCollapse,"onUpdate:modelValue":t[19]||(t[19]=e=>d(i).isCollapse=e),"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:t[20]||(t[20]=e=>d(n)("isCollapse",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"标签栏"},{default:k((()=>[_(V,{modelValue:d(i).isShowTab,"onUpdate:modelValue":t[21]||(t[21]=e=>d(i).isShowTab=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[22]||(t[22]=e=>d(n)("isShowTab",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"面包屑"},{default:k((()=>[_(V,{modelValue:d(i).isShowBreadcrumb,"onUpdate:modelValue":t[23]||(t[23]=e=>d(i).isShowBreadcrumb=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[24]||(t[24]=e=>d(n)("isShowBreadcrumb",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"手风琴"},{default:k((()=>[_(V,{modelValue:d(i).accordionMode,"onUpdate:modelValue":t[25]||(t[25]=e=>d(i).accordionMode=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[26]||(t[26]=e=>d(n)("accordionMode",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"背景模糊"},{default:k((()=>[_(V,{modelValue:d(i).isBlur,"onUpdate:modelValue":t[27]||(t[27]=e=>d(i).isBlur=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[28]||(t[28]=e=>d(n)("isBlur",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"展示页脚"},{default:k((()=>[_(V,{modelValue:d(i).isShowFooter,"onUpdate:modelValue":t[29]||(t[29]=e=>d(i).isShowFooter=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[30]||(t[30]=e=>d(n)("isShowFooter",e))},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model-value","size"])}}},[["__scopeId","data-v-361ee2f6"]]);const Pl=Ie({},[["render",function(e,l){const a=Re,t=K,n=H,o=q;return c(),T(o,{"separator-icon":"ArrowRight"},{default:k((()=>[_(O,{name:"breadcrumb"},{default:k((()=>[(c(!0),r(f,null,R(e.$route.meta.breadcrumb,(e=>{var l;return v((c(),T(n,{key:e.path,class:"breadcrumb-item flex"},{default:k((()=>[_(t,{size:6},{default:k((()=>{var l,t;return[v(_(a,{name:null==(l=e.meta)?void 0:l.icon,type:null==(t=e.meta)?void 0:t.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),m("span",null,p(e.meta.title),1)]})),_:2},1024)])),_:2},1536)),[[b,"/"!==e.path&&!(null==(l=e.meta)?void 0:l.hiddenBreadcrumb)]])})),128))])),_:1})])),_:1})}],["__scopeId","data-v-7a5e307f"]]),Al=tl(),Tl=e(`${Se}__tabsView`,(()=>{const e=l(Pe(De)||[]);return{tabsList:e,addTabs:function(l){e.value.every((e=>e.fullPath!==l.fullPath))&&e.value.push(l),Al.keepAliveList.includes(l.name)&&l.isKeepAlive&&Al.addKeepAlive(l.name),Le(De,e.value)},closeTab:function(l,a=!0){a&&e.value.forEach(((a,t)=>{if(a.fullPath!==l)return;const n=e.value[t+1]||e.value[t-1];n&&Ne.push({path:n.fullPath})}));const t=e.value,n=t.find((e=>e.path===l));(null==n?void 0:n.isKeepAlive)&&Al.removeKeepAlive(n.name);const o=t.filter((e=>e.fullPath!==l));Le(De,o),e.value=o},closeLeftRightTabs:function(l,a){const t=e.value.findIndex((e=>e.fullPath===l));if(-1!==t){const l="left"===a?[0,t]:[t+1,e.value.length];e.value=e.value.filter(((e,a)=>a<l[0]||a>=l[1]||!e.close))}const n=e.value,o=n.filter((e=>e.isKeepAlive));Al.setKeepAlive(o.map((e=>e.fullPath))),Le(De,n)},closeOtherTabs:function(l){const a=e.value.filter((e=>e.fullPath===l||!e.close));Le(De,a),e.value=a;const t=a.filter((e=>e.isKeepAlive));Al.setKeepAlive(t.map((e=>e.name)))},closeAllTabs:function(){e.value=[],Al.clearKeepAlive(),Le(De,[])},updateTabs:function(l){e.value.forEach((e=>{e.fullPath===l.fullPath&&(e=Object.assign(e,l))})),Le(De,e.value)},updateTabTitle:function(l=""){e.value.forEach((e=>{e.fullPath===We()&&(e.meta.title=l)})),Le(De,e.value)}}})),Ll={class:"tabs-view flex"},Ml={class:"tab-label-text"},Il={class:"tab-more-action flex"},zl=Ie({__name:"tabs-view",setup(e){const l=Z((()=>Oe((()=>import("./index-DZ8Xxrs2.js").then((e=>e.Y))),__vite__mapDeps([0,1,2,3]),import.meta.url))),t=a(),i=Y(),s=Tl(),h=tl(),y=Ue(),g=u((()=>s.tabsList)),C=z("globalConfig");function x(e){const l=t.fullPath,a={toggleFullScreen:He,refresh:V,closeCurrentTab:S,closeLeftTabs:()=>s.closeLeftRightTabs(l,"left"),closeRightTabs:()=>s.closeLeftRightTabs(l,"right"),closeOtherTabs:()=>s.closeOtherTabs(l),toggleContentFullScreen:()=>y.setConfig("contentFullScreen",!C.value.contentFullScreen)}[e];a&&a()}function V(){setTimeout((async()=>{var e,l;(null==(e=t.meta)?void 0:e.isKeepAlive)&&h.removeKeepAlive(t.name),h.setRouteShow(!1),await A(),(null==(l=t.meta)?void 0:l.isKeepAlive)&&h.addKeepAlive(t.name),h.setRouteShow(!0)}),0)}function S(e){var l;(null==(l=t.meta)?void 0:l.isAffix)||s.closeTab(e,e===t.fullPath)}function P(e){var l,a,t,n,o,i,u,d;const c={icon:(null==(l=null==e?void 0:e.meta)?void 0:l.icon)||null,iconType:null==(a=null==e?void 0:e.meta)?void 0:a.iconType,title:null==(t=e.meta)?void 0:t.title,fullPath:e.fullPath,path:e.path,name:e.name,close:!(null==(n=null==e?void 0:e.meta)?void 0:n.isAffix),hidden:null==(o=null==e?void 0:e.meta)?void 0:o.hidden,fullPage:null==(i=null==e?void 0:e.meta)?void 0:i.fullPage,isAffix:(null==(u=null==e?void 0:e.meta)?void 0:u.isAffix)||!1,isKeepAlive:(null==(d=null==e?void 0:e.meta)?void 0:d.isKeepAlive)||!1};s.addTabs(c)}return o((()=>{g.value.forEach((e=>{!e.isAffix||(null==e?void 0:e.hidden)||(null==e?void 0:e.fullPage)||P(e)}))})),n((()=>t.fullPath),(()=>{const e=t.meta;(null==e?void 0:e.fullPage)||(null==e?void 0:e.type)===Ge.LINK||P(t)}),{immediate:!0}),(e,a)=>{const t=J,n=Q,o=X,s=ee,u=le;return c(),r("div",Ll,[_(n,{"model-value":e.$route.fullPath,type:"card",onTabClick:a[0]||(a[0]=e=>d(i).push(e.props.name)),onTabRemove:S},{default:k((()=>[(c(!0),r(f,null,R(d(g),(a=>(c(),T(t,{key:a.name,name:a.fullPath,closable:a.close&&e.$route.fullPath===a.fullPath},{label:k((()=>[v(_(d(l),{name:a.icon,type:null==a?void 0:a.iconType,style:{"margin-right":"5px"}},null,8,["name","type"]),[[b,a.icon]]),m("span",Ml,p(a.title),1)])),_:2},1032,["name","closable"])))),128))])),_:1},8,["model-value"]),_(u,{trigger:"click",onCommand:x},{dropdown:k((()=>[_(s,null,{default:k((()=>[_(o,{icon:"Refresh",command:"refresh"},{default:k((()=>a[1]||(a[1]=[w("刷新")]))),_:1}),_(o,{icon:"FullScreen",command:"toggleFullScreen",divided:""},{default:k((()=>a[2]||(a[2]=[w("全屏")]))),_:1}),_(o,{icon:"FullScreen",command:"toggleContentFullScreen"},{default:k((()=>[w(p(d(C).contentFullScreen?"退出内容区全屏":"内容区全屏"),1)])),_:1}),_(o,{icon:"Remove",command:"closeTab",divided:""},{default:k((()=>a[3]||(a[3]=[w("关闭当前")]))),_:1}),_(o,{icon:"DArrowLeft",command:"closeLeftTabs"},{default:k((()=>a[4]||(a[4]=[w("关闭左侧")]))),_:1}),_(o,{icon:"DArrowRight",command:"closeRightTabs"},{default:k((()=>a[5]||(a[5]=[w("关闭右侧")]))),_:1}),_(o,{icon:"CircleClose",command:"closeOtherTabs"},{default:k((()=>a[6]||(a[6]=[w("关闭其他")]))),_:1}),_(o,{icon:"Delete",command:"closeAllTabs"},{default:k((()=>a[7]||(a[7]=[w("关闭全部")]))),_:1})])),_:1})])),default:k((()=>[m("div",Il,[_(d(l),{name:"CaretBottom"})])])),_:1})])}}},[["__scopeId","data-v-ff12d1c3"]]),Ul={key:0},Fl=["onClick"],Rl={class:"menu-left"},Kl={class:"menu-title"},$l=Ie({__name:"search-page",props:{iconName:{type:String,default:"Search"},iconType:{type:String,default:Fe.EL_ICON}},emits:Ke,setup(e,{emit:a}){const t=a,o=Y(),{visible:i,open:s,close:u}=el(),h=l(null),y=l(""),w=l([]),C=function(){const e=o.getRoutes();return e.filter((e=>{var l;return!(null==(l=e.meta)?void 0:l.hidden)&&![qe,Me,"notfound"].includes(e.name)}))}();async function x(){s(),await A(),h.value.focus()}function V(){u(t),y.value=""}return n(y,ae((function(){const e=y.value;w.value=e?C.filter((l=>l.path.toLowerCase().includes(e.toLowerCase())||l.meta.title.toLowerCase().includes(e.toLowerCase()))):[]}),300)),(l,a)=>{const t=Re,n=S,s=K,u=te,C=Ye;return c(),r("div",null,[_(t,{name:e.iconName,type:e.iconType,style:{display:"flex"},onClick:x},null,8,["name","type"]),_(C,{modelValue:d(i),"onUpdate:modelValue":a[1]||(a[1]=e=>g(i)?i.value=e:null),"show-fullscreen":!1,"show-close":!1,height:"400",scrollable:"",onClose:V},{header:k((()=>[_(n,{ref_key:"inputRef",ref:h,modelValue:d(y),"onUpdate:modelValue":a[0]||(a[0]=e=>g(y)?y.value=e:null),clearable:"",size:"large","prefix-icon":"Search",placeholder:"页面搜索：支持菜单名称、路径"},null,8,["modelValue"])])),default:k((()=>[d(w).length?(c(),r("div",Ul,[(c(!0),r(f,null,R(d(w),(e=>(c(),r("div",{key:e.path,class:"menu-item flex",onClick:l=>function(e){if(e.meta.type===Ge.LINK)return window.open(e.path,"_blank");o.push(e.path),V()}(e)},[m("div",Rl,[_(s,null,{default:k((()=>[v(_(t,{name:e.meta.icon,type:e.meta.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),m("span",Kl,p(e.meta.title),1)])),_:2},1024)]),_(t,{name:"enter",type:d(Fe).SVG},null,8,["type"])],8,Fl)))),128))])):(c(),T(u,{key:1}))])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-b553fd95"]]),jl={class:"notice-list"},Bl={class:"notice-item flex"},El={class:"notice-item flex"},Dl={class:"notice-item flex"},Nl=Ie({__name:"notice",setup(e){const a=l("notice"),t=[{label:"通知(3)",value:"notice"},{label:"消息(0)",value:"message"},{label:"待办(0)",value:"todo"}],n={"font-size":"30px","font-weight":"bold"};return(e,l)=>{const o=Re,i=ne,s=oe,u=te,r=ie;return c(),T(r,{placement:"bottom",trigger:"click",width:300},{reference:k((()=>[_(i,{value:12,class:"item"},{default:k((()=>[_(o,{name:"Bell",style:{display:"flex"}})])),_:1})])),default:k((()=>{return[_(s,{modelValue:d(a),"onUpdate:modelValue":l[0]||(l[0]=e=>g(a)?a.value=e:null),options:t,block:""},{default:k((({item:e})=>[w(p(e.label),1)])),_:1},8,["modelValue"]),v(m("div",null,[m("div",jl,[m("div",Bl,[_(o,{name:"View",color:"#f79484",style:n}),l[1]||(l[1]=m("div",{class:"notice-content"},[m("h1",null,"中分头，背带裤，我是ikun你记住"),m("span",null,"不是小黑紫")],-1))]),m("div",El,[_(o,{name:"Refresh",color:"#69c2f9",style:n}),l[2]||(l[2]=m("div",{class:"notice-content"},[m("h1",null,"哎呦你干嘛啊~~~"),m("span",null,"kun")],-1))]),m("div",Dl,[_(o,{name:"Delete",color:"#4edd92",style:n}),l[3]||(l[3]=m("div",{class:"notice-content"},[m("h1",null,"我是练习时长两年半的个人练习生"),m("span",null,"唱跳rap")],-1))])])],512),[[b,"notice"===d(a)]]),v(m("div",null,[_(u,{description:`暂无${null==(e=t.find((e=>e.value===a.value)))?void 0:e.label}`,"image-size":60},null,8,["description"])],512),[[b,["message","todo"].includes(d(a))]])];var e})),_:1})}}},[["__scopeId","data-v-207eed05"]]),Wl={class:"left flex"},Gl={class:"right flex"},Ol=Ie({__name:"index",setup(e){const l=ze(),a=nl(),{setConfig:t}=Ue(),{visible:n,open:o}=el(),i=z("globalConfig"),s=u((()=>Ue().isMobile)),p=u((()=>i.value.theme===Be?Ee:Be));return(e,u)=>{const C=Re,x=se,S=V,P=K,A=X,L=ee,M=le,I=ue;return c(),T(I,{class:"app-header"},{default:k((()=>[m("div",{class:y(["top","flex",{displayNone:d(i).contentFullScreen}])},[m("div",Wl,[d(s)?h("",!0):(c(),r(f,{key:0},[_(C,{name:d(i).isCollapse?"Expand":"Fold",size:"22",class:"collapse",onClick:u[0]||(u[0]=e=>d(t)("isCollapse",!d(i).isCollapse))},null,8,["name"]),v(_(d(Pl),null,null,512),[[b,d(i).isShowBreadcrumb]])],64))]),m("div",Gl,[_(P,{size:15},{default:k((()=>[_(C,{name:"config",size:"20",type:d(Fe).SVG,onClick:d(o)},null,8,["type","onClick"]),_(x,{class:"text",content:"搜索页面",effect:d(p)},{default:k((()=>[_(d($l))])),_:1},8,["effect"]),_(x,{class:"text",content:"开启锁屏",effect:d(p)},{default:k((()=>[_(C,{name:"Lock",onClick:u[1]||(u[1]=e=>d(a).setLock(!0))})])),_:1},8,["effect"]),_(C,{name:"FullScreen",onClick:d(He)},null,8,["onClick"]),_(d(Nl)),_(S,{src:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",size:40})])),_:1}),_(M,null,{dropdown:k((()=>[_(L,null,{default:k((()=>[_(A,{icon:"Lock",onClick:u[2]||(u[2]=l=>e.$router.push("/forgetPassword"))},{default:k((()=>u[5]||(u[5]=[w(" 修改密码 ")]))),_:1}),_(A,{icon:"SwitchButton",onClick:u[3]||(u[3]=e=>d(l).logout())},{default:k((()=>u[6]||(u[6]=[w(" 退出登录 ")]))),_:1})])),_:1})])),default:k((()=>[u[7]||(u[7]=m("span",{class:"user"},"Admin",-1))])),_:1})])],2),v(_(d(zl),null,null,512),[[b,d(i).isShowTab]]),_(d(Sl),{modelValue:d(n),"onUpdate:modelValue":u[4]||(u[4]=e=>g(n)?n.value=e:null)},null,8,["modelValue"]),_(d(wl))])),_:1})}}},[["__scopeId","data-v-d3266270"]]),Hl={__name:"menu-title",props:{lineClamp:[String,Number],tippyProps:{type:Object,default:()=>({})},textType:{type:String,default:""}},setup(e){const a=e,t=de(),n=l(null),i=l(null);function s(){return{content:re(t.content||t.default),...a.tippyProps}}function u(e){const l=i.value;var t;t=e.target,(a.lineClamp?t.scrollHeight>t.clientHeight:t.scrollWidth>t.clientWidth)?(l.setProps(s()),l.enable()):l.disable()}return o((()=>{var e;i.value=ce(null==(e=n.value)?void 0:e.$el,s())})),(l,a)=>{const t=fe;return c(),T(t,pe({truncated:!e.lineClamp,lineClamp:e.lineClamp,...l.$attrs},{ref_key:"textRef",ref:n,type:e.textType,onMouseover:C(u,["self"])}),{default:k((()=>[me(l.$slots,"default")])),_:3},16,["type"])}}},ql={__name:"aside-menu",props:{menus:Array},setup(e){const l=Y(),a=Ue(),t=u((()=>a.globalConfig.theme));function n(e){return e.children&&!e.children.every((e=>e.meta.hidden))}return(a,o)=>{const i=Re,s=be,u=ve("aside-menu",!0),m=he;return c(!0),r(f,null,R(e.menus,((e,o)=>(c(),r(f,{key:e.path},[n(e)?(c(),T(m,{key:1,index:o+1+""},{title:k((()=>{var l,n;return[v(_(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(n=e.meta)?void 0:n.iconType},null,8,["name","type"]),[[b,e.meta.icon]]),_(d(Hl),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:k((()=>[w(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])]})),default:k((()=>[_(u,{menus:e.children},null,8,["menus"])])),_:2},1032,["index"])):(c(),T(s,{key:0,index:e.path,onClick:a=>function(e){if(e.meta.type===Ge.LINK)return window.open(e.path,"_blank");l.push(e.path)}(e)},{title:k((()=>[_(d(Hl),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:k((()=>[w(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])])),default:k((()=>{var l,a;return[v(_(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(a=e.meta)?void 0:a.iconType},null,8,["name","type"]),[[b,e.meta.icon]])]})),_:2},1032,["index","onClick"]))],64)))),128)}}},Yl={class:"mobile"},Zl=Ie({__name:"mobile-menu",props:{menus:Array},setup(e){const{visible:l,open:a,close:t}=el();return(n,o)=>{const i=Re,s=_e,u=ye;return c(),r("div",Yl,[m("div",{class:"mobile-nav flex",onClick:o[0]||(o[0]=(...e)=>d(a)&&d(a)(...e))},[_(i,{name:"Menu",color:d(Ze)("--el-color-white"),size:"26"},null,8,["color"])]),_(d(al),{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=e=>g(l)?l.value=e:null),direction:"ltr",size:"60%","is-blur":"","show-close":!1,"with-header":!1},{default:k((()=>[_(u,null,{default:k((()=>[_(s,{router:"","default-active":n.$route.path,"unique-opened":"",onSelect:d(t)},{default:k((()=>[_(d(ql),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","onSelect"])])),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-041bf8ff"]]),Jl={class:"app-logo"},Ql={class:"app-title"},Xl=Ie({__name:"index",props:{menus:Array},setup(e){const l=z("globalConfig"),a=z("isMobile");return(t,n)=>{const o=Re,i=_e,s=ye,u=ge;return c(),r(f,null,[v(_(u,{width:`${d(l).isCollapse?82:d(l).asideWidth}px`,class:y({displayNone:d(l).contentFullScreen})},{default:k((()=>[m("div",Jl,[_(L,{name:"el-zoom-in-top"},{default:k((()=>[v(m("p",Ql,"Vue Admin",512),[[b,"text"===d(l).type]])])),_:1}),_(L,{name:"el-zoom-in-bottom"},{default:k((()=>[v(_(o,{type:d(Fe).SVG,size:"50",name:"logo","follow-theme":""},null,8,["type"]),[[b,d(l).type===d(Fe).SVG]])])),_:1})]),_(s,{class:"scrollbar"},{default:k((()=>[_(i,{"default-active":t.$route.path,collapse:d(l).isCollapse,"collapse-transition":!1,"unique-opened":d(l).accordionMode,"popper-class":"custom-popper"},{default:k((()=>[_(d(ql),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","collapse","unique-opened"])])),_:1})])),_:1},8,["width","class"]),[[b,!d(a)]]),v(_(d(Zl),{menus:e.menus},null,8,["menus"]),[[b,d(a)]])],64)}}},[["__scopeId","data-v-0d1625f2"]]),ea={class:"iframe-box"},la=["src"],aa=Ie({__name:"iframe",setup(e){const l=a(),t=u((()=>{var e;return(null==(e=null==l?void 0:l.meta)?void 0:e.type)===Ge.IFRAME}));return(e,a)=>v((c(),r("div",ea,[m("iframe",{src:d(l).meta.url,frameborder:"0"},null,8,la)],512)),[[b,d(t)]])}},[["__scopeId","data-v-bc04169b"]]),ta={class:"footer"},na=Ie({__name:"index",setup(e){const a=Ue(),t=tl(),n=u((()=>a.globalConfig)),s=u((()=>t.keepAliveList)),r=u((()=>t.isShowRoute)),p=l([]),f=new Map;function y(){const e=Xe();a.setIsMobile(e),a.setConfig("isCollapse",document.body.clientWidth<=900||e)}function g(e,l){if(!e)return;const a=l.fullPath;let t=f.get(a);return t||(t={name:a,render:()=>re(e)},f.set(a,t)),re(t)}return o((()=>{!async function(){const e=await Je(),l=Qe(e);p.value=l}(),y(),window.addEventListener("resize",y)})),i((()=>window.removeEventListener("resize",y))),ke("globalConfig",n),ke("isMobile",u((()=>a.isMobile))),(e,l)=>{const a=ve("router-view"),t=Ve,o=we;return c(),T(o,null,{default:k((()=>[_(d(Xl),{menus:d(p)},null,8,["menus"]),_(o,{style:{display:"flex","flex-direction":"column"}},{default:k((()=>[_(d(Ol)),_(t,{class:"main-box"},{default:k((()=>[_(a,null,{default:k((({Component:e,route:l})=>[_(L,{name:"fade-transform",mode:"out-in"},{default:k((()=>[(c(),T(Ce,{include:d(s)},[d(r)?(c(),T(xe(g(e,l)),{key:l.fullPath})):h("",!0)],1032,["include"]))])),_:2},1024)])),_:1}),_(d(aa))])),_:1}),v(m("footer",ta,"xxx版权所有",512),[[b,d(n).isShowFooter]])])),_:1})])),_:1})}}},[["__scopeId","data-v-836bddbf"]]);export{na as default};
