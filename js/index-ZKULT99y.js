import{_ as e,c as a,W as s,d as l,e as t}from"./index-D91Jtym3.js";import{ai as i,aj as n,a2 as d,r as o,az as m,aJ as r,a3 as c,ae as u,af as p,ab as f,aa as g,aD as y,aO as b,aE as v,a8 as k,ak as x,ao as h,c9 as z,c2 as _}from"./.pnpm-BO0thPis.js";const C={class:"segmented-group"},$=["onClick"],w={class:"segmented-item-text",style:{"line-height":"1"}},j=e({__name:"index",props:i({options:{type:Array,default:()=>[]},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:e=>["default","large","small"].includes(e)},resize:{type:Boolean,default:!1}},{modelValue:{type:Number,default:0},modelModifiers:{}}),emits:i(["change"],["update:modelValue"]),setup(e,{emit:i}){const j=n(e,"modelValue"),B=e,R=i,V=a(),E=d((()=>V.globalConfig.primaryColor)),I=o(0),L=o(0),N=o(!1),O=_();async function S(e=j.value){var a;await r();const s=null==(a=null==O?void 0:O.proxy)?void 0:a.$refs[`itemRef${e}`];(s||s.length)&&(I.value=s[0].clientWidth,L.value=s[0].offsetLeft,N.value=!0)}function W(){const e=document.querySelector(".segmented");z(e,(async()=>{await r(),S(j.value)}))}return(B.block||B.resize)&&W(),m((()=>j.value),(async e=>{await r(),S(e)}),{immediate:!0}),m((()=>B.size),W,{immediate:!0}),(a,i)=>{const n=t;return c(),u("div",{class:v({segmented:!0,"segmented-block":e.block,"segmented-large":"large"===e.size,"segmented-small":"small"===e.size})},[p("div",C,[p("div",{class:"segmented-item-bar",style:f({width:`${g(I)}px`,transform:`translateX(${g(L)}px)`,display:g(N)?"block":"none",backgroundColor:e.disabled||B.options.find(((e,a)=>a===j.value&&e.disabled))?g(s)(g(E)):""})},null,4),(c(!0),u(y,null,b(e.options,((a,s)=>(c(),u("div",{key:s,ref_for:!0,ref:`itemRef${s}`,class:v(["segmented-item",j.value===s&&"segmented-item-active",(e.disabled||a.disabled)&&"segmented-item-disabled"]),onClick:e=>function({item:e,index:a}){B.disabled||e.disabled||(j.value=a,R("change",{index:a,item:e}))}({item:a,index:s})},[a.icon?(c(),u("span",{key:0,class:"segmented-item-icon",style:f({marginRight:a.label?"4px":0})},[k(n,{name:a.icon,type:a.iconType||g(l).EL_ICON},null,8,["name","type"])],4)):x("",!0),p("span",w,h(a.label),1)],10,$)))),128))])],2)}}},[["__scopeId","data-v-97426516"]]);export{j as default};
