const __vite__fileDeps=["js/index-D91Jtym3.js","js/.pnpm-BO0thPis.js","css/.pnpm-CSRP5dmz.css","css/index-DtE3zYOa.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as e,r as l,ax as a,ay as t,az as n,aA as o,aB as i,aC as s,a2 as u,aa as d,a3 as c,ae as r,af as m,ao as p,aD as f,a6 as v,a7 as h,ak as b,a8 as _,aE as y,aF as g,a5 as k,ap as w,aG as C,E as x,aH as V,aI as S,aq as P,aJ as T,a4 as A,aK as L,ai as M,aj as I,aL as z,aM as F,aN as U,aO as K,aP as R,aQ as $,aR as j,aS as B,aT as E,aU as N,aV as W,aW as D,aX as O,aY as G,aZ as H,a_ as q,a$ as X,b0 as Y,b1 as Z,b2 as J,b3 as Q,b4 as ee,b5 as le,b6 as ae,b7 as te,b8 as ne,b9 as oe,ba as ie,bb as se,bc as ue,bd as de,be as ce,bf as re,a9 as me,al as pe,bg as fe,ar as ve,bh as he,bi as be,bj as _e,am as ye,bk as ge,bl as ke,bm as we,bn as Ce,ag as xe,ad as Ve}from"./.pnpm-BO0thPis.js";import{b as Se,g as Pe,I as Te,L as Ae,s as Le,a as Me,_ as Ie,u as ze,c as Fe,d as Ue,e as Ke,M as Re,P as $e,T as je,D as Be,f as Ee,h as Ne,r as We,i as De,R as Oe,j as Ge,t as He,k as qe,l as Xe,m as Ye,n as Ze,o as Je,p as Qe}from"./index-D91Jtym3.js";import{u as el}from"./useModal-hqwqWzpa.js";import{u as ll}from"./useOnline-DJUw-REn.js";import al from"./drawer--NkMYxbt.js";const tl=e(`${Se}__keep-alive`,(()=>{const e=l([]),a=l(!0);return{keepAliveList:e,isShowRoute:a,addKeepAlive:function(l){!e.value.includes(l)&&e.value.push(l)},setKeepAlive:function(l){e.value=l},removeKeepAlive:function(l){e.value=e.value.filter((e=>e!==l))},clearKeepAlive:function(){e.value=[]},setRouteShow:function(e){a.value=e}}})),nl=e(`${Se}__lock-screen`,(()=>{const e=a(),{idle:o}=t(36e5),i=l(Pe(Te)||!1),s=l("123"),u=l(Pe(Ae)||"");function d(e){i.value=e,Le(Te,e),!e&&r()}function c(e){Le(Ae,e),u.value=e||s.value}function r(){Le(Ae,""),u.value=""}return window.addEventListener("beforeunload",(()=>{i.value&&!u.value&&d(!1)})),n(o,(l=>{e.name!==Me?l&&(d(!0),c()):d(!1)})),{isLock:i,lockPwd:u,loginPwd:s,setLock:d,setLockPwd:c,verifyLockPwd:function(e){return[u,s].some((l=>l.value===e))},saveLoginPwd:function(e){s.value=e},resetLockPwd:r}}));const ol={key:0,class:"charge"},il={class:"charge-container"},sl={class:"charge-number"},ul={class:"charging"},dl={class:"status"},cl={key:1,class:"not-support"},rl=Ie({__name:"charging",props:{isMobile:Boolean},setup(e){const{charging:l,chargingTime:a,dischargingTime:t,level:n,isSupported:o}=s(),i=u((()=>{const e=l.value;return e&&100*n.value>=100?"已充满":e?"充电中":"已断开电源"})),_=u((()=>{const e=t.value;return`${~~(e/3600)}小时${~~(e/60%60)}分钟`}));return(l,s)=>d(o)?(c(),r("div",ol,[m("div",il,[m("div",sl,p((100*d(n)).toFixed(0))+"%",1),s[0]||(s[0]=m("div",{class:"charge-contrast"},[m("div",{class:"charge-circle"}),m("ul",{class:"charge-bubbles"},[m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li"),m("li")])],-1))]),m("div",ul,[m("div",dl,p(d(i)),1),e.isMobile?b("",!0):(c(),r(f,{key:0},[v(m("div",null," 剩余可使用时间："+p(d(_)),513),[[h,Number.isFinite(d(t))&&0!==d(t)]]),v(m("span",null," 距离电池充满需要："+p(d(_)),513),[[h,Number.isFinite(d(a))&&0!==d(a)]])],64))])])):(c(),r("div",cl,"当前浏览器不支持Battery Status API"))}},[["__scopeId","data-v-529a5ea5"]]),ml={class:"lock-box"},pl={class:"lock"},fl={class:"local-time"},vl={class:"time"},hl={class:"date"},bl={class:"computer-status"},_l={key:1,class:"login-box"},yl={class:"username"},gl={class:"flex",style:{width:"100%","justify-content":"space-between"}},kl=Ie({__name:"page",setup(e){const{lockPwd:a,setLockPwd:t,setLock:n,verifyLockPwd:s}=nl(),{userInfo:v,logout:h}=ze(),{online:T}=ll(),{hour:A,minute:L,month:M,day:I,week:z}=function(){let e;const a=l(null),t=l(null),n=l(null),s=l(null),u=l(0),d=l(0),c=l(0);function r(){var e,l;const o=new Date;a.value=o.getFullYear(),t.value=o.getMonth()+1,n.value="日一二三四五六".charAt(o.getDay()),s.value=o.getDate(),u.value=(null==(e=`${o.getHours()}`)?void 0:e.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getHours()),d.value=(null==(l=`${o.getMinutes()}`)?void 0:l.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(o.getMinutes()),c.value=o.getSeconds()}return r(),o((()=>{clearInterval(e),e=setInterval((()=>r()),1e3)})),i((()=>clearInterval(e))),{year:a,month:t,week:n,day:s,hour:u,minute:d,second:c}}(),F=l(!a),U=l(""),K=u((()=>a?"请输入锁屏密码或用户密码":"请输入锁屏密码(可选)")),R=u((()=>Fe().isMobile));function $(){const e=U.value.trim();t(e),B()}function j(){F.value=!1,n(!1)}function B(){F.value=!1,U.value=""}function E(){const e=U.value.trim();return e?s(e)?(F.value=!1,void n(!1)):x.warning("密码错误，请重新输入"):x.warning("密码不能为空")}function N(){F.value=!1,n(!1),h()}return(e,l)=>{const t=Ke,n=V,o=S,i=P;return c(),r("div",{class:y([{unLockLogin:d(F)},"locked"]),onKeyup:l[2]||(l[2]=e=>F.value=!0),onMousedown:l[3]||(l[3]=C((()=>{}),["stop"])),onContextmenu:l[4]||(l[4]=C((()=>{}),["prevent"]))},[d(F)?(c(),r("div",_l,[_(n,{size:80,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),m("div",yl,p(d(v).username),1),_(o,{modelValue:d(U),"onUpdate:modelValue":l[1]||(l[1]=e=>g(U)?U.value=e:null),autofocus:"",placeholder:d(K),type:"password","prefix-icon":"Lock"},null,8,["modelValue","placeholder"]),m("div",gl,[d(a)?(c(),r(f,{key:0},[_(i,{link:"",type:"primary",onClick:B},{default:k((()=>l[6]||(l[6]=[w("返回")]))),_:1}),_(i,{link:"",type:"primary",onClick:N},{default:k((()=>l[7]||(l[7]=[w("返回登录")]))),_:1}),_(i,{link:"",type:"primary",onClick:E},{default:k((()=>l[8]||(l[8]=[w("进入系统")]))),_:1})],64)):(c(),r(f,{key:1},[_(i,{link:"",type:"primary",onClick:j},{default:k((()=>l[9]||(l[9]=[w("取消锁屏")]))),_:1}),_(i,{link:"",type:"primary",onClick:$},{default:k((()=>l[10]||(l[10]=[w("确定锁屏")]))),_:1})],64))])])):(c(),r(f,{key:0},[m("div",ml,[m("div",pl,[m("span",{class:"lock-icon",title:"解锁屏幕",onClick:l[0]||(l[0]=e=>F.value=!0)},[_(t,{name:"Lock",size:"30"})])]),l[5]||(l[5]=m("h6",{class:"tips"},"点击解锁",-1))]),_(d(rl),{"is-mobile":d(R)},null,8,["is-mobile"]),d(R)?b("",!0):(c(),r(f,{key:0},[m("div",fl,[m("div",vl,p(d(A))+":"+p(d(L)),1),m("div",hl,p(d(M))+"月"+p(d(I))+"号，星期"+p(d(z)),1)]),m("div",bl,[m("span",{class:y([{offline:!d(T)},"network"])},[_(t,{name:"wifi",type:d(Ue).SVG,size:"30",class:"network"},null,8,["type"])],2),_(t,{name:"api",type:d(Ue).SVG,size:"30"},null,8,["type"])])],64))],64))],34)}}},[["__scopeId","data-v-62efe30b"]]),wl={__name:"index",setup(e){const a=nl(),t=u((()=>a.isLock)),n=l(!1);return o((async()=>{await T(),n.value=!0})),(e,l)=>(c(),A(L,{name:"slide-up"},{default:k((()=>[d(t)&&e.$route.name!==d(Me)?(c(),A(d(kl),{key:0})):b("",!0)])),_:1}))}},Cl={class:"header flex"},xl={class:"flex"},Vl={class:"flex"},Sl=Ie({__name:"setting",props:M({title:{type:String,default:"系统配置"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:M(Re,["update:modelValue"]),setup(e,{emit:l}){const a=I(e,"modelValue"),t=l,{setConfig:n,resetConfig:o}=Fe(),i=z("globalConfig"),s=z("isMobile"),u=function(){const e=F.filter(Boolean).map((e=>(Object.keys(U).forEach((l=>{U[l]===e&&(e=l)})),{label:U[e],value:e}))).slice().sort(((e,l)=>e.label-l.label)),l=e[e.length-1].label,a=e[0].label,t={[l]:"大",[a]:"小"};return e.map((e=>({label:t[e.label]||"中",value:e.value})))}();function v(){a.value=!1,t("close")}return(l,t)=>{const h=P,b=R,y=Ke,g=$,C=j,x=B,V=E,S=N,T=W,L=D,M=O;return c(),A(d(al),{"model-value":a.value,"show-close":!1,size:d(s)?"90%":"25%",class:"drawer",onClose:v},{header:k((()=>[m("div",Cl,[m("span",null,p(e.title),1),_(b,null,{default:k((()=>[_(h,{onClick:v},{default:k((()=>t[29]||(t[29]=[w("关闭")]))),_:1}),_(h,{type:"primary",onClick:t[0]||(t[0]=e=>d(o)(e))},{default:k((()=>t[30]||(t[30]=[w("重置")]))),_:1})])),_:1})])])),default:k((()=>[_(M,null,{default:k((()=>[_(g,null,{default:k((()=>[m("div",xl,[_(y,{name:"Brush"}),t[31]||(t[31]=m("span",{class:"subtitle"},"全局主题",-1))])])),_:1}),_(x,{label:"主题颜色"},{default:k((()=>[_(C,{modelValue:d(i).primaryColor,"onUpdate:modelValue":t[1]||(t[1]=e=>d(i).primaryColor=e),predefine:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff"],onChange:t[2]||(t[2]=e=>d(n)(d($e),e))},null,8,["modelValue"])])),_:1}),_(x,{label:"暗黑模式"},{default:k((()=>[m("div",{onClick:t[4]||(t[4]=e=>d(n)(d(je),d(i).theme,e))},[_(V,{modelValue:d(i).theme,"onUpdate:modelValue":t[3]||(t[3]=e=>d(i).theme=e),"inline-prompt":"","active-icon":"Moon","inactive-icon":"Sunny","active-value":d(Be),"inactive-value":d(Ee)},null,8,["modelValue","active-value","inactive-value"])])])),_:1}),_(x,{label:"色弱模式"},{default:k((()=>[_(V,{modelValue:d(i).isWeakMode,"onUpdate:modelValue":t[5]||(t[5]=e=>d(i).isWeakMode=e),"inline-prompt":"","active-icon":"MoonNight","inactive-icon":"Sunrise",onChange:t[6]||(t[6]=e=>d(n)("isWeakMode",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"灰色模式"},{default:k((()=>[_(V,{modelValue:d(i).isGreyMode,"onUpdate:modelValue":t[7]||(t[7]=e=>d(i).isGreyMode=e),"inline-prompt":"","active-icon":"View","inactive-icon":"Hide",onChange:t[8]||(t[8]=e=>d(n)("isGreyMode",e))},null,8,["modelValue"])])),_:1}),_(g,{style:{"margin-top":"40px","margin-bottom":"30px"}},{default:k((()=>[m("div",Vl,[_(y,{name:"Setting"}),t[32]||(t[32]=m("span",{class:"subtitle"},"界面设置",-1))])])),_:1}),_(x,{label:"控件大小"},{default:k((()=>[_(T,{modelValue:d(i).size,"onUpdate:modelValue":t[9]||(t[9]=e=>d(i).size=e),onChange:t[10]||(t[10]=e=>d(n)("size",e))},{default:k((()=>[(c(!0),r(f,null,K(d(u),(e=>(c(),A(S,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"语言"},{default:k((()=>[_(T,{modelValue:d(i).lang,"onUpdate:modelValue":t[11]||(t[11]=e=>d(i).lang=e),disabled:""},{default:k((()=>[_(S,{label:"中文",value:"zhCn"}),_(S,{label:"English",value:"enUs"})])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"菜单logo"},{default:k((()=>[_(T,{modelValue:d(i).type,"onUpdate:modelValue":t[12]||(t[12]=e=>d(i).type=e),onChange:t[13]||(t[13]=e=>d(n)("type",e))},{default:k((()=>[_(S,{label:"svg",value:"svg"}),_(S,{label:"文字",value:"text"})])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"菜单宽度"},{default:k((()=>[_(L,{modelValue:d(i).asideWidth,"onUpdate:modelValue":t[14]||(t[14]=e=>d(i).asideWidth=e),modelModifiers:{number:!0},min:200,style:{width:"140px"},onChange:t[15]||(t[15]=e=>d(n)("asideWidth",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"消息最大展示数量"},{default:k((()=>[_(L,{modelValue:d(i).maxMessageCount,"onUpdate:modelValue":t[16]||(t[16]=e=>d(i).maxMessageCount=e),modelModifiers:{number:!0},min:1,disabled:"",style:{width:"140px"}},null,8,["modelValue"])])),_:1}),_(x,{label:"菜单折叠"},{default:k((()=>[_(V,{modelValue:d(i).isCollapse,"onUpdate:modelValue":t[17]||(t[17]=e=>d(i).isCollapse=e),"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:t[18]||(t[18]=e=>d(n)("isCollapse",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"标签栏"},{default:k((()=>[_(V,{modelValue:d(i).isShowTab,"onUpdate:modelValue":t[19]||(t[19]=e=>d(i).isShowTab=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[20]||(t[20]=e=>d(n)("isShowTab",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"面包屑"},{default:k((()=>[_(V,{modelValue:d(i).isShowBreadcrumb,"onUpdate:modelValue":t[21]||(t[21]=e=>d(i).isShowBreadcrumb=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[22]||(t[22]=e=>d(n)("isShowBreadcrumb",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"手风琴"},{default:k((()=>[_(V,{modelValue:d(i).accordionMode,"onUpdate:modelValue":t[23]||(t[23]=e=>d(i).accordionMode=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[24]||(t[24]=e=>d(n)("accordionMode",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"背景模糊"},{default:k((()=>[_(V,{modelValue:d(i).isBlur,"onUpdate:modelValue":t[25]||(t[25]=e=>d(i).isBlur=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[26]||(t[26]=e=>d(n)("isBlur",e))},null,8,["modelValue"])])),_:1}),_(x,{label:"展示页脚"},{default:k((()=>[_(V,{modelValue:d(i).isShowFooter,"onUpdate:modelValue":t[27]||(t[27]=e=>d(i).isShowFooter=e),"inline-prompt":"","active-text":"是","inactive-text":"否","active-value":!0,"inactive-value":!1,onChange:t[28]||(t[28]=e=>d(n)("isShowFooter",e))},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model-value","size"])}}},[["__scopeId","data-v-e9f47e6b"]]);const Pl=Ie({},[["render",function(e,l){const a=Ke,t=R,n=H,o=q;return c(),A(o,{"separator-icon":"ArrowRight"},{default:k((()=>[_(G,{name:"breadcrumb"},{default:k((()=>[(c(!0),r(f,null,K(e.$route.meta.breadcrumb,(e=>{var l;return v((c(),A(n,{key:e.path,class:"breadcrumb-item flex"},{default:k((()=>[_(t,{size:6},{default:k((()=>{var l,t;return[v(_(a,{name:null==(l=e.meta)?void 0:l.icon,type:null==(t=e.meta)?void 0:t.iconType},null,8,["name","type"]),[[h,e.meta.icon]]),m("span",null,p(e.meta.title),1)]})),_:2},1024)])),_:2},1536)),[[h,"/"!==e.path&&!(null==(l=e.meta)?void 0:l.hiddenBreadcrumb)]])})),128))])),_:1})])),_:1})}],["__scopeId","data-v-7a5e307f"]]),Tl=tl(),Al=e(`${Se}__tabsView`,(()=>{const e=l(Pe(Ne)||[]);return{tabsList:e,addTabs:function(l){e.value.every((e=>e.fullPath!==l.fullPath))&&e.value.push(l),Tl.keepAliveList.includes(l.name)&&l.isKeepAlive&&Tl.addKeepAlive(l.name),Le(Ne,e.value)},closeTab:function(l,a=!0){a&&e.value.forEach(((a,t)=>{if(a.fullPath!==l)return;const n=e.value[t+1]||e.value[t-1];n&&We.push({path:n.fullPath})}));const t=e.value,n=t.find((e=>e.path===l));(null==n?void 0:n.isKeepAlive)&&Tl.removeKeepAlive(n.name);const o=t.filter((e=>e.fullPath!==l));Le(Ne,o),e.value=o},closeLeftRightTabs:function(l,a){const t=e.value.findIndex((e=>e.fullPath===l));if(-1!==t){const l="left"===a?[0,t]:[t+1,e.value.length];e.value=e.value.filter(((e,a)=>a<l[0]||a>=l[1]||!e.close))}const n=e.value,o=n.filter((e=>e.isKeepAlive));Tl.setKeepAlive(o.map((e=>e.fullPath))),Le(Ne,n)},closeOtherTabs:function(l){const a=e.value.filter((e=>e.fullPath===l||!e.close));Le(Ne,a),e.value=a;const t=a.filter((e=>e.isKeepAlive));Tl.setKeepAlive(t.map((e=>e.name)))},closeAllTabs:function(){e.value=[],Tl.clearKeepAlive(),Le(Ne,[])},updateTabs:function(l){e.value.forEach((e=>{e.fullPath===l.fullPath&&(e=Object.assign(e,l))})),Le(Ne,e.value)},updateTabTitle:function(l=""){e.value.forEach((e=>{e.fullPath===De()&&(e.meta.title=l)})),Le(Ne,e.value)}}})),Ll={class:"tabs-view flex"},Ml={class:"tab-label-text"},Il={class:"tab-more-action flex"},zl=Ie({__name:"tabs-view",setup(e){const l=Y((()=>Ge((()=>import("./index-D91Jtym3.js").then((e=>e.X))),__vite__mapDeps([0,1,2,3])))),t=a(),i=X(),s=Al(),b=tl(),y=Fe(),g=u((()=>s.tabsList)),C=z("globalConfig");function x(e){const l=t.fullPath,a={toggleFullScreen:He,refresh:V,closeCurrentTab:S,closeLeftTabs:()=>s.closeLeftRightTabs(l,"left"),closeRightTabs:()=>s.closeLeftRightTabs(l,"right"),closeOtherTabs:()=>s.closeOtherTabs(l),toggleContentFullScreen:()=>y.setConfig("contentFullScreen",!C.value.contentFullScreen)}[e];a&&a()}function V(){setTimeout((async()=>{var e,l;(null==(e=t.meta)?void 0:e.isKeepAlive)&&b.removeKeepAlive(t.name),b.setRouteShow(!1),await T(),(null==(l=t.meta)?void 0:l.isKeepAlive)&&b.addKeepAlive(t.name),b.setRouteShow(!0)}),0)}function S(e){var l;(null==(l=t.meta)?void 0:l.isAffix)||s.closeTab(e,e===t.fullPath)}function P(e){var l,a,t,n,o,i,u,d;const c={icon:(null==(l=null==e?void 0:e.meta)?void 0:l.icon)||null,iconType:null==(a=null==e?void 0:e.meta)?void 0:a.iconType,title:null==(t=e.meta)?void 0:t.title,fullPath:e.fullPath,path:e.path,name:e.name,close:!(null==(n=null==e?void 0:e.meta)?void 0:n.isAffix),hidden:null==(o=null==e?void 0:e.meta)?void 0:o.hidden,fullPage:null==(i=null==e?void 0:e.meta)?void 0:i.fullPage,isAffix:(null==(u=null==e?void 0:e.meta)?void 0:u.isAffix)||!1,isKeepAlive:(null==(d=null==e?void 0:e.meta)?void 0:d.isKeepAlive)||!1};s.addTabs(c)}return o((()=>{g.value.forEach((e=>{!e.isAffix||(null==e?void 0:e.hidden)||(null==e?void 0:e.fullPage)||P(e)}))})),n((()=>t.fullPath),(()=>{const e=t.meta;(null==e?void 0:e.fullPage)||(null==e?void 0:e.type)===Oe.LINK||P(t)}),{immediate:!0}),(e,a)=>{const t=Z,n=J,o=Q,s=ee,u=le;return c(),r("div",Ll,[_(n,{"model-value":e.$route.fullPath,type:"card",onTabClick:a[0]||(a[0]=e=>d(i).push(e.props.name)),onTabRemove:S},{default:k((()=>[(c(!0),r(f,null,K(d(g),(a=>(c(),A(t,{key:a.name,name:a.fullPath,closable:a.close&&e.$route.fullPath===a.fullPath},{label:k((()=>[v(_(d(l),{name:a.icon,type:null==a?void 0:a.iconType,style:{"margin-right":"5px"}},null,8,["name","type"]),[[h,a.icon]]),m("span",Ml,p(a.title),1)])),_:2},1032,["name","closable"])))),128))])),_:1},8,["model-value"]),_(u,{trigger:"click",onCommand:x},{dropdown:k((()=>[_(s,null,{default:k((()=>[_(o,{icon:"Refresh",command:"refresh"},{default:k((()=>a[1]||(a[1]=[w("刷新")]))),_:1}),_(o,{icon:"FullScreen",command:"toggleFullScreen",divided:""},{default:k((()=>a[2]||(a[2]=[w("全屏")]))),_:1}),_(o,{icon:"FullScreen",command:"toggleContentFullScreen"},{default:k((()=>[w(p(d(C).contentFullScreen?"退出内容区全屏":"内容区全屏"),1)])),_:1}),_(o,{icon:"Remove",command:"closeTab",divided:""},{default:k((()=>a[3]||(a[3]=[w("关闭当前")]))),_:1}),_(o,{icon:"DArrowLeft",command:"closeLeftTabs"},{default:k((()=>a[4]||(a[4]=[w("关闭左侧")]))),_:1}),_(o,{icon:"DArrowRight",command:"closeRightTabs"},{default:k((()=>a[5]||(a[5]=[w("关闭右侧")]))),_:1}),_(o,{icon:"CircleClose",command:"closeOtherTabs"},{default:k((()=>a[6]||(a[6]=[w("关闭其他")]))),_:1}),_(o,{icon:"Delete",command:"closeAllTabs"},{default:k((()=>a[7]||(a[7]=[w("关闭全部")]))),_:1})])),_:1})])),default:k((()=>[m("div",Il,[_(d(l),{name:"CaretBottom"})])])),_:1})])}}},[["__scopeId","data-v-ff12d1c3"]]),Fl={key:0},Ul=["onClick"],Kl={class:"menu-left"},Rl={class:"menu-title"},$l=Ie({__name:"search-page",props:{iconName:{type:String,default:"Search"},iconType:{type:String,default:Ue.EL_ICON}},emits:Re,setup(e,{emit:a}){const t=a,o=X(),{visible:i,open:s,close:u}=el(),b=l(null),y=l(""),w=l([]),C=function(){const e=o.getRoutes();return e.filter((e=>{var l;return!(null==(l=e.meta)?void 0:l.hidden)&&![qe,Me,"notfound"].includes(e.name)}))}();async function x(){s(),await T(),b.value.focus()}function V(){u(t),y.value=""}return n(y,ae((function(){const e=y.value;w.value=e?C.filter((l=>l.path.toLowerCase().includes(e.toLowerCase())||l.meta.title.toLowerCase().includes(e.toLowerCase()))):[]}),300)),(l,a)=>{const t=Ke,n=S,s=R,u=te,C=Xe;return c(),r("div",null,[_(t,{name:e.iconName,type:e.iconType,style:{display:"flex"},onClick:x},null,8,["name","type"]),_(C,{modelValue:d(i),"onUpdate:modelValue":a[1]||(a[1]=e=>g(i)?i.value=e:null),"show-fullscreen":!1,"show-close":!1,height:"400",scrollable:"",onClose:V},{header:k((()=>[_(n,{ref_key:"inputRef",ref:b,modelValue:d(y),"onUpdate:modelValue":a[0]||(a[0]=e=>g(y)?y.value=e:null),clearable:"",size:"large","prefix-icon":"Search",placeholder:"页面搜索：支持菜单名称、路径"},null,8,["modelValue"])])),default:k((()=>[d(w).length?(c(),r("div",Fl,[(c(!0),r(f,null,K(d(w),(e=>(c(),r("div",{key:e.path,class:"menu-item flex",onClick:l=>function(e){if(e.meta.type===Oe.LINK)return window.open(e.path,"_blank");o.push(e.path),V()}(e)},[m("div",Kl,[_(s,null,{default:k((()=>[v(_(t,{name:e.meta.icon,type:e.meta.iconType},null,8,["name","type"]),[[h,e.meta.icon]]),m("span",Rl,p(e.meta.title),1)])),_:2},1024)]),_(t,{name:"enter",type:d(Ue).SVG},null,8,["type"])],8,Ul)))),128))])):(c(),A(u,{key:1}))])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-b553fd95"]]),jl={class:"notice-list"},Bl={class:"notice-item flex"},El={class:"notice-item flex"},Nl={class:"notice-item flex"},Wl=Ie({__name:"notice",setup(e){const a=l("notice"),t=[{label:"通知(3)",value:"notice"},{label:"消息(0)",value:"message"},{label:"待办(0)",value:"todo"}],n={"font-size":"30px","font-weight":"bold"};return(e,l)=>{const o=Ke,i=ne,s=oe,u=te,r=ie;return c(),A(r,{placement:"bottom",trigger:"click",width:300},{reference:k((()=>[_(i,{value:12,class:"item"},{default:k((()=>[_(o,{name:"Bell",style:{display:"flex"}})])),_:1})])),default:k((()=>{return[_(s,{modelValue:d(a),"onUpdate:modelValue":l[0]||(l[0]=e=>g(a)?a.value=e:null),options:t,block:""},{default:k((({item:e})=>[w(p(e.label),1)])),_:1},8,["modelValue"]),v(m("div",null,[m("div",jl,[m("div",Bl,[_(o,{name:"View",color:"#f79484",style:n}),l[1]||(l[1]=m("div",{class:"notice-content"},[m("h1",null,"中分头，背带裤，我是ikun你记住"),m("span",null,"不是小黑紫")],-1))]),m("div",El,[_(o,{name:"Refresh",color:"#69c2f9",style:n}),l[2]||(l[2]=m("div",{class:"notice-content"},[m("h1",null,"哎呦你干嘛啊~~~"),m("span",null,"kun")],-1))]),m("div",Nl,[_(o,{name:"Delete",color:"#4edd92",style:n}),l[3]||(l[3]=m("div",{class:"notice-content"},[m("h1",null,"我是练习时长两年半的个人练习生"),m("span",null,"唱跳rap")],-1))])])],512),[[h,"notice"===d(a)]]),v(m("div",null,[_(u,{description:`暂无${null==(e=t.find((e=>e.value===a.value)))?void 0:e.label}`,"image-size":60},null,8,["description"])],512),[[h,["message","todo"].includes(d(a))]])];var e})),_:1})}}},[["__scopeId","data-v-207eed05"]]),Dl={class:"left flex"},Ol={class:"right flex"},Gl=Ie({__name:"index",setup(e){const l=ze(),a=nl(),{setConfig:t}=Fe(),{visible:n,open:o}=el(),i=z("globalConfig"),s=u((()=>Fe().isMobile)),p=u((()=>i.value.theme===Be?Ee:Be));return(e,u)=>{const C=Ke,x=se,S=V,P=R,T=Q,L=ee,M=le,I=ue;return c(),A(I,{class:"app-header"},{default:k((()=>[m("div",{class:y(["top","flex",{displayNone:d(i).contentFullScreen}])},[m("div",Dl,[d(s)?b("",!0):(c(),r(f,{key:0},[_(C,{name:d(i).isCollapse?"Expand":"Fold",size:"22",class:"collapse",onClick:u[0]||(u[0]=e=>d(t)("isCollapse",!d(i).isCollapse))},null,8,["name"]),v(_(d(Pl),null,null,512),[[h,d(i).isShowBreadcrumb]])],64))]),m("div",Ol,[_(P,{size:15},{default:k((()=>[_(C,{name:"config",size:"20",type:d(Ue).SVG,onClick:d(o)},null,8,["type","onClick"]),_(x,{class:"text",content:"搜索页面",effect:d(p)},{default:k((()=>[_(d($l))])),_:1},8,["effect"]),_(x,{class:"text",content:"开启锁屏",effect:d(p)},{default:k((()=>[_(C,{name:"Lock",onClick:u[1]||(u[1]=e=>d(a).setLock(!0))})])),_:1},8,["effect"]),_(C,{name:"FullScreen",onClick:d(He)},null,8,["onClick"]),_(d(Wl)),_(S,{src:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",size:40})])),_:1}),_(M,null,{dropdown:k((()=>[_(L,null,{default:k((()=>[_(T,{icon:"Lock",onClick:u[2]||(u[2]=l=>e.$router.push("/forgetPassword"))},{default:k((()=>u[5]||(u[5]=[w(" 修改密码 ")]))),_:1}),_(T,{icon:"SwitchButton",onClick:u[3]||(u[3]=e=>d(l).logout())},{default:k((()=>u[6]||(u[6]=[w(" 退出登录 ")]))),_:1})])),_:1})])),default:k((()=>[u[7]||(u[7]=m("span",{class:"user"},"Admin",-1))])),_:1})])],2),v(_(d(zl),null,null,512),[[h,d(i).isShowTab]]),_(d(Sl),{modelValue:d(n),"onUpdate:modelValue":u[4]||(u[4]=e=>g(n)?n.value=e:null)},null,8,["modelValue"]),_(d(wl))])),_:1})}}},[["__scopeId","data-v-d3266270"]]),Hl={__name:"menu-title",props:{lineClamp:[String,Number],tippyProps:{type:Object,default:()=>({})},textType:{type:String,default:""}},setup(e){const a=e,t=de(),n=l(null),i=l(null);function s(){return{content:re(t.content||t.default),...a.tippyProps}}function u(e){const l=i.value;var t;t=e.target,(a.lineClamp?t.scrollHeight>t.clientHeight:t.scrollWidth>t.clientWidth)?(l.setProps(s()),l.enable()):l.disable()}return o((()=>{var e;i.value=ce(null==(e=n.value)?void 0:e.$el,s())})),(l,a)=>{const t=fe;return c(),A(t,pe({truncated:!e.lineClamp,lineClamp:e.lineClamp,...l.$attrs},{ref_key:"textRef",ref:n,type:e.textType,onMouseover:C(u,["self"])}),{default:k((()=>[me(l.$slots,"default")])),_:3},16,["type"])}}},ql={__name:"aside-menu",props:{menus:Array},setup(e){const l=X(),a=Fe(),t=u((()=>a.globalConfig.theme));function n(e){return e.children&&!e.children.every((e=>e.meta.hidden))}return(a,o)=>{const i=Ke,s=he,u=ve("aside-menu",!0),m=be;return c(!0),r(f,null,K(e.menus,((e,o)=>(c(),r(f,{key:e.path},[n(e)?(c(),A(m,{key:1,index:o+1+""},{title:k((()=>{var l,n;return[v(_(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(n=e.meta)?void 0:n.iconType},null,8,["name","type"]),[[h,e.meta.icon]]),_(d(Hl),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:k((()=>[w(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])]})),default:k((()=>[_(u,{menus:e.children},null,8,["menus"])])),_:2},1032,["index"])):(c(),A(s,{key:0,index:e.path,onClick:a=>function(e){if(e.meta.type===Oe.LINK)return window.open(e.path,"_blank");l.push(e.path)}(e)},{title:k((()=>[_(d(Hl),{tippyProps:{offset:[0,-5],theme:d(t)},"text-type":e.path===a.$route.fullPath?"primary":""},{default:k((()=>[w(p(e.meta.title),1)])),_:2},1032,["tippyProps","text-type"])])),default:k((()=>{var l,a;return[v(_(i,{name:null==(l=e.meta)?void 0:l.icon,type:null==(a=e.meta)?void 0:a.iconType},null,8,["name","type"]),[[h,e.meta.icon]])]})),_:2},1032,["index","onClick"]))],64)))),128)}}},Xl={class:"mobile"},Yl=Ie({__name:"mobile-menu",props:{menus:Array},setup(e){const{visible:l,open:a,close:t}=el();return(n,o)=>{const i=Ke,s=_e,u=ye;return c(),r("div",Xl,[m("div",{class:"mobile-nav flex",onClick:o[0]||(o[0]=(...e)=>d(a)&&d(a)(...e))},[_(i,{name:"Menu",color:d(Ye)("--el-color-white"),size:"26"},null,8,["color"])]),_(d(al),{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=e=>g(l)?l.value=e:null),direction:"ltr",size:"60%","is-blur":"","show-close":!1,"with-header":!1},{default:k((()=>[_(u,null,{default:k((()=>[_(s,{router:"","default-active":n.$route.path,"unique-opened":"",onSelect:d(t)},{default:k((()=>[_(d(ql),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","onSelect"])])),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-041bf8ff"]]),Zl={class:"app-logo"},Jl={class:"app-title"},Ql=Ie({__name:"index",props:{menus:Array},setup(e){const l=z("globalConfig"),a=z("isMobile");return(t,n)=>{const o=Ke,i=_e,s=ye,u=ge;return c(),r(f,null,[v(_(u,{width:`${d(l).isCollapse?82:d(l).asideWidth}px`,class:y({displayNone:d(l).contentFullScreen})},{default:k((()=>[m("div",Zl,[_(L,{name:"el-zoom-in-top"},{default:k((()=>[v(m("p",Jl,"Vue Admin",512),[[h,"text"===d(l).type]])])),_:1}),_(L,{name:"el-zoom-in-bottom"},{default:k((()=>[v(_(o,{type:d(Ue).SVG,size:"50",name:"logo","follow-theme":""},null,8,["type"]),[[h,d(l).type===d(Ue).SVG]])])),_:1})]),_(s,{class:"scrollbar"},{default:k((()=>[_(i,{"default-active":t.$route.path,collapse:d(l).isCollapse,"collapse-transition":!1,"unique-opened":d(l).accordionMode,"popper-class":"custom-popper"},{default:k((()=>[_(d(ql),{menus:e.menus},null,8,["menus"])])),_:1},8,["default-active","collapse","unique-opened"])])),_:1})])),_:1},8,["width","class"]),[[h,!d(a)]]),v(_(d(Yl),{menus:e.menus},null,8,["menus"]),[[h,d(a)]])],64)}}},[["__scopeId","data-v-0d1625f2"]]),ea={class:"iframe-box"},la=["src"],aa=Ie({__name:"iframe",setup(e){const l=a(),t=u((()=>{var e;return(null==(e=null==l?void 0:l.meta)?void 0:e.type)===Oe.IFRAME}));return(e,a)=>v((c(),r("div",ea,[m("iframe",{src:d(l).meta.url,frameborder:"0"},null,8,la)],512)),[[h,d(t)]])}},[["__scopeId","data-v-bc04169b"]]),ta={class:"footer"},na=Ie({__name:"index",setup(e){const a=Fe(),t=tl(),n=u((()=>a.globalConfig)),s=u((()=>t.keepAliveList)),r=u((()=>t.isShowRoute)),p=l([]),f=new Map;function y(){const e=Qe();a.setIsMobile(e),a.setConfig("isCollapse",document.body.clientWidth<=900||e)}function g(e,l){if(!e)return;const a=l.fullPath;let t=f.get(a);return t||(t={name:a,render:()=>re(e)},f.set(a,t)),re(t)}return o((()=>{!async function(){const e=await Ze(),l=Je(e);p.value=l}(),y(),window.addEventListener("resize",y)})),i((()=>window.removeEventListener("resize",y))),ke("globalConfig",n),ke("isMobile",u((()=>a.isMobile))),(e,l)=>{const a=ve("router-view"),t=Ve,o=we;return c(),A(o,null,{default:k((()=>[_(d(Ql),{menus:d(p)},null,8,["menus"]),_(o,{style:{display:"flex","flex-direction":"column"}},{default:k((()=>[_(d(Gl)),_(t,{class:"main-box"},{default:k((()=>[_(a,null,{default:k((({Component:e,route:l})=>[_(L,{name:"fade-transform",mode:"out-in"},{default:k((()=>[(c(),A(Ce,{include:d(s)},[d(r)?(c(),A(xe(g(e,l)),{key:l.fullPath})):b("",!0)],1032,["include"]))])),_:2},1024)])),_:1}),_(d(aa))])),_:1}),v(m("footer",ta,"xxx版权所有",512),[[h,d(n).isShowFooter]])])),_:1})])),_:1})}}},[["__scopeId","data-v-836bddbf"]]);export{na as default};
