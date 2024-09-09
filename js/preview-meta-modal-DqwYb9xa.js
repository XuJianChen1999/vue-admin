import{_ as e,M as l,d as a,R as t,e as n,l as u}from"./index-B13NQykv.js";import{ai as o,aj as i,a2 as d,a3 as m,a4 as f,a5 as s,a8 as v,al as c,aa as p,ae as _,aD as r,ap as y,ak as I,aP as b,bb as k,aS as x,aI as F,aT as A,aX as N}from"./.pnpm-BO0thPis.js";import K from"./index-Buf8UlHo.js";import{u as g}from"./useForm-D2EwfXUI.js";const L=e({__name:"preview-meta-modal",props:o({meta:Object},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:o(l,["update:modelValue"]),setup(e,{emit:l}){const o=i(e,"modelValue"),L=e,P=l,{formConfig:j}=g({},{labelWidth:120,labelPosition:"right"}),E=d((()=>{const e=L.meta;return{icon:e.icon,iconType:e.iconType||a.EL_ICON,moduleName:e.moduleName||"暂无",title:e.title,isAffix:e.isAffix||!1,isKeepAlive:e.isKeepAlive||!1,type:e.type,link:(null==e?void 0:e.link)===t.LINK,iframe:(null==e?void 0:e.iframe)===t.LINK.IFRAME,fullPage:e.fullPage||!1}}));function M(){o.value=!1,P("close")}return(l,i)=>{const d=n,g=b,L=k,P=K,T=x,R=F,C=A,V=N,$=u;return m(),f($,{"model-value":o.value,title:"meta说明",onClose:M},{default:s((()=>[v(V,c({disabled:""},p(j)),{default:s((()=>[p(E).icon?(m(),_(r,{key:0},[v(T,{label:"图标"},{label:s((()=>[v(L,{content:"key值: icon"},{default:s((()=>[v(g,null,{default:s((()=>[i[0]||(i[0]=y(" 图标 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(P,{"model-value":p(E).icon,type:e.meta.iconType,disabled:""},null,8,["model-value","type"])])),_:1}),v(T,null,{label:s((()=>[v(L,{content:`key值: iconType，可选值：${p(a).EL_ICON} | ${p(a).SVG}`},{default:s((()=>[v(g,null,{default:s((()=>[i[1]||(i[1]=y(" 图标类型 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1},8,["content"])])),default:s((()=>[v(R,{"model-value":p(E).iconType},null,8,["model-value"])])),_:1})],64)):I("",!0),v(T,null,{label:s((()=>[v(L,{content:"key值: moduleName，即文件夹名称（包含父级文件夹）"},{default:s((()=>[v(g,null,{default:s((()=>[i[2]||(i[2]=y(" 模块名 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(R,{"model-value":p(E).moduleName},null,8,["model-value"])])),_:1}),v(T,null,{label:s((()=>[v(L,{content:"key值: title"},{default:s((()=>[v(g,null,{default:s((()=>[i[3]||(i[3]=y(" 标题 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(R,{"model-value":p(E).title},null,8,["model-value"])])),_:1}),v(T,null,{label:s((()=>[v(L,{content:"key值: isAffix，设置为true后，在顶部tabs-view不可关闭"},{default:s((()=>[v(g,null,{default:s((()=>[i[4]||(i[4]=y(" 是否固定tab ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(C,{"model-value":p(E).isAffix,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["model-value"])])),_:1}),v(T,null,{label:s((()=>[v(L,{content:"key值: icon，即keep-alive功能"},{default:s((()=>[v(g,null,{default:s((()=>[i[5]||(i[5]=y(" 是否缓存 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(C,{"model-value":p(E).isKeepAlive,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["model-value"])])),_:1}),p(E).type===p(t).IFRAME?(m(),_(r,{key:1},[v(T,null,{label:s((()=>[v(L,{content:`key值：${p(t).IFRAME}`},{default:s((()=>[v(g,null,{default:s((()=>[i[6]||(i[6]=y(" 是否iframe ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1},8,["content"])])),default:s((()=>[v(C,{"model-value":p(E).type===p(t).IFRAME,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["model-value"])])),_:1}),v(T,{label:"内嵌地址"},{default:s((()=>[v(R,{"model-value":e.meta.url},null,8,["model-value"])])),_:1})],64)):I("",!0),p(E).type===p(t).LINK?(m(),_(r,{key:2},[v(T,null,{label:s((()=>[v(L,{content:`key值：${p(t).LINK}`},{default:s((()=>[v(g,null,{default:s((()=>[i[7]||(i[7]=y(" 是否外链 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1},8,["content"])])),default:s((()=>[v(C,{"model-value":p(E).type===p(t).LINK,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["model-value"])])),_:1}),v(T,{label:"外链地址"},{default:s((()=>[v(R,{"model-value":e.meta.url},null,8,["model-value"])])),_:1})],64)):I("",!0),p(E).fullPage?(m(),f(T,{key:3},{label:s((()=>[v(L,{content:"key值：fullPage"},{default:s((()=>[v(g,null,{default:s((()=>[i[8]||(i[8]=y(" 是否全屏 ")),v(d,{name:"InfoFilled"})])),_:1})])),_:1})])),default:s((()=>[v(C,{"model-value":p(E).fullPage,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["model-value"])])),_:1})):I("",!0)])),_:1},16)])),_:1},8,["model-value"])}}},[["__scopeId","data-v-3e85c8a6"]]);export{L as default};
