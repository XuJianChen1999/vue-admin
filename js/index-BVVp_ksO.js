import{x as e}from"./index-B13NQykv.js";import{r as t,aA as a,bM as l,a3 as s,a4 as n,ag as o,a5 as p,a8 as u,aa as r,aF as d,ae as i,aD as m,aO as x,bC as f,bD as y,bB as c,bA as g,bv as b}from"./.pnpm-BO0thPis.js";const v={__name:"index",props:{text:{type:String,default:null},tag:{type:String,default:"canvas"},options:{type:Object,default:()=>({})},type:{type:String,default:"CODE128"}},setup(e){const p=e,u=t(null);return a((()=>{const e=p;l(u.value,e.text,{...e.options,format:e.type})})),(t,a)=>(s(),n(o(e.tag),{ref_key:"barcodeRef",ref:u},null,512))}},_={__name:"index",setup(a){const l=t("canvas"),o=[{text:"CODE128",type:"CODE128"},{text:"CODE39",type:"CODE39",options:{lineColor:"#990000"}},{text:"123456",type:"pharmacode",options:{background:"#eee",width:5}}];return(t,a)=>{const _=f,C=y,D=c,O=g,h=b,E=e;return s(),n(E,null,{default:p((()=>[u(h,{shadow:"never"},{default:p((()=>[u(C,{modelValue:r(l),"onUpdate:modelValue":a[0]||(a[0]=e=>d(l)?l.value=e:null),style:{"margin-bottom":"22px",width:"300px"},placeholder:"选择标签类型"},{default:p((()=>[u(_,{label:"canvas",value:"canvas"}),u(_,{label:"svg",value:"svg"}),u(_,{label:"img",value:"img"})])),_:1},8,["modelValue"]),u(O,{gutter:10},{default:p((()=>[(s(),i(m,null,x(o,(e=>u(D,{key:e.text,lg:8,xs:24,sm:24,md:12,xl:8},{default:p((()=>[u(r(v),{text:e.text,type:e.type,options:e.options},null,8,["text","type","options"])])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})}}};export{_ as default};
