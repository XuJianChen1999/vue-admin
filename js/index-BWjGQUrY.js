import{x as a}from"./index-CMBT9BYn.js";import{r as e,bQ as l,a3 as u,a4 as s,a5 as d,a8 as n,a6 as t,ap as o,aa as f,aH as r,E as m,aq as c,by as _,aL as i,aS as p,bD as b}from"./.pnpm-DSXWUmMM.js";const x={__name:"index",setup(x){const h=e("这是一段文字");function y(){m.success("长按指令生效")}function V(a){m.success(a||"防抖指令生效")}return(e,m)=>{const x=c,v=_,g=i,w=p,j=b,U=a,k=l("longpress"),q=l("copy"),D=l("debounce");return u(),s(U,null,{default:d((()=>[n(v,{header:"长按指令",shadow:"never"},{default:d((()=>[t((u(),s(x,null,{default:d((()=>[o("默认2s")])),_:1})),[[k,y]]),t((u(),s(x,null,{default:d((()=>[o("自定义4s")])),_:1})),[[k,y,"4000"]])])),_:1}),n(v,{header:"复制指令",shadow:"never",class:"card-box"},{default:d((()=>[n(j,{gutter:10,style:{"margin-bottom":"12px"}},{default:d((()=>[n(w,null,{default:d((()=>[n(g,{modelValue:f(h),"onUpdate:modelValue":m[0]||(m[0]=a=>r(h)?h.value=a:null)},null,8,["modelValue"]),t((u(),s(x,null,{default:d((()=>[o("点击复制")])),_:1})),[[q,f(h)]])])),_:1})])),_:1}),n(j,{gutter:10},{default:d((()=>[n(w,null,{default:d((()=>[n(g,{modelValue:f(h),"onUpdate:modelValue":m[1]||(m[1]=a=>r(h)?h.value=a:null)},null,8,["modelValue"]),t((u(),s(x,null,{default:d((()=>[o("双击复制")])),_:1})),[[q,f(h),"dblclick"]])])),_:1})])),_:1})])),_:1}),n(v,{header:"防抖指令",shadow:"never",class:"card-box"},{default:d((()=>[t((u(),s(x,null,{default:d((()=>[o("防抖指令,2s")])),_:1})),[[D,{delay:2e3,fn:V}]]),t((u(),s(x,null,{default:d((()=>[o("防抖指令,2s,立即执行")])),_:1})),[[D,{delay:2e3,fn:V,immediate:!0}]]),t((u(),s(x,null,{default:d((()=>[o("防抖传参数")])),_:1})),[[D,{delay:2e3,fn:()=>V("我是信息"),immediate:!0}]])])),_:1})])),_:1})}}};export{x as default};
