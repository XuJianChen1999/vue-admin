import{e as a,l,x as e}from"./index-9TLdUthr.js";import{aP as s,cb as t,r as u,e as o,ar as n,as as r,av as d,aw as i,aV as v,f as p,F as m,g as c,aH as b,i as f,bS as g,bT as h,aI as _,b2 as w,bQ as y,b3 as x,bJ as V}from"./.pnpm-B5NcQQUZ.js";import{_ as j}from"./logo-Cfm0XFF_.js";import{m as k}from"./modern-screenshot-BfbL4H8i.js";const E={ref:"posterEl"},U=["src"],C={__name:"index",setup(C){const P=s(),T=t("posterEl"),D=u(""),J=u("Png"),S=u(!1),$=[{label:"png",value:"Png"},{label:"svg",value:"Svg"},{label:"jpeg",value:"Jpeg"},{label:"webp",value:"Webp"},{label:"DataUrl",value:"DataUrl"},{label:"blob",value:"Blob"}];async function z(){const a=await k[`domTo${J.value}`](T.value,{scale:2});D.value=a,S.value=!0}async function B(){const a=a=>{const l=document.createElement("a");l.href=a,l.download=P.path.split("/").at(-1)+".jpg",l.click(),l.remove()};if(!D.value){const l=await k[`domTo${J.value}`](T.value,{scale:2});return D.value=l,void a(l)}a(D.value)}function F(){D.value="",S.value=!1}return(s,t)=>{const u=g,k=h,C=_,P=w,T=y,H=x,I=a,Q=l,W=V,q=e;return o(),n(q,null,{default:r((()=>[d(W,{shadow:"never"},{default:r((()=>[d(T,null,{default:r((()=>[d(P,{wrap:""},{default:r((()=>[d(k,{modelValue:i(J),"onUpdate:modelValue":t[0]||(t[0]=a=>v(J)?J.value=a:null),placeholder:"请选择生成类型",style:{width:"200px"}},{default:r((()=>[(o(),p(m,null,c($,(a=>d(u,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),d(C,{type:"primary",onClick:z},{default:r((()=>t[2]||(t[2]=[b("点击生成图片")]))),_:1}),d(C,{type:"primary",onClick:B},{default:r((()=>t[3]||(t[3]=[b("生成图片并下载")]))),_:1})])),_:1})])),_:1}),d(H),f("div",E,[t[4]||(t[4]=f("div",null,"121212121",-1)),t[5]||(t[5]=f("img",{src:j,style:{width:"200px",height:"200px"}},null,-1)),d(I,{name:"Edit",color:"red",size:"30"})],512),d(Q,{modelValue:i(S),"onUpdate:modelValue":t[1]||(t[1]=a=>v(S)?S.value=a:null),title:"图片预览",onClose:F},{default:r((()=>[f("img",{src:i(D),style:{width:"100%",height:"100%"}},null,8,U)])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};export{C as default};
