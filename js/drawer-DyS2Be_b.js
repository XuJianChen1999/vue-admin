import{aB as a,aC as s,c as e,r as l,e as o,ar as n,b$ as r,g as u,as as t,h as d,c0 as m,c1 as f,aD as i,aw as c,c2 as p}from"./.pnpm-B5NcQQUZ.js";import{H as C,M as B,c as v}from"./index-9TLdUthr.js";const g={__name:"drawer",props:a(C,{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:a(B,["update:modelValue"]),setup(a,{expose:C,emit:B}){const g=s(a,"modelValue"),w=a,$=B,_=e((()=>v().globalConfig.isBlur)),h=e((()=>{const a=w;return _.value&&a.followConfigBlur||(a.followConfigBlur||a.isBlur)&&a.isBlur?a.modalClass:null})),x=l(null);function V(){g.value=!1,$("close")}return C({handleClose:function(){x.value.handleClose()}}),(a,s)=>{const e=p;return o(),n(e,i({ref_key:"drawerRef",ref:x,"model-value":g.value,"modal-class":c(h)},a.$attrs,{onOpen:s[0]||(s[0]=a=>$("open")),onClose:V}),r({_:2},[u(a.$slots,((s,e)=>({name:e,fn:t((s=>[d(a.$slots,e,m(f(s)))]))})))]),1040,["model-value","modal-class"])}}};export{g as default};
