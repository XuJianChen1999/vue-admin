import{ar as e,as as a,cd as o,ab as t,aS as d,aJ as l,bz as s,ac as i,an as n,ad as u,aj as r,cj as f,at as c,ah as m,ak as p,ck as g,aN as b}from"./.pnpm-BLGzruUg.js";import{_ as y,W as h}from"./index-CjL9fGc7.js";const v=y({__name:"index",props:e({toolbarConfig:{type:Object,default:()=>({excludeKeys:[]})},editorConfig:{type:Object,default:()=>({placeholder:"请输入内容...",MENU_CONF:{}})},height:{type:String,default:"600px"},mode:{type:String,default:"default"},hideToolBar:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e,{expose:y}){const v=a(e,"modelValue"),x=e,j=o(null),C=t((()=>x.disabled));function V(e){j.value=e}return C.value&&d((()=>j.value.disable())),l((()=>h("https://cdn.bootcdn.net/ajax/libs/wangeditor5/5.1.23/css/style.min.css"))),s((()=>{const e=j.value;e&&e.destroy()})),y({editorRef:j}),(a,o)=>(i(),n("div",{class:b(["editor-box",r(C)?"editor-disabled":""])},[e.hideToolBar?c("",!0):(i(),u(r(f),{key:0,class:"editor-toolbar",editor:r(j),"default-config":e.toolbarConfig,mode:e.mode},null,8,["editor","default-config","mode"])),m(r(g),{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),class:"editor-content",style:p({height:e.height}),mode:e.mode,"default-config":e.editorConfig,onOnCreated:V},null,8,["modelValue","style","mode","default-config"])],2))}},[["__scopeId","data-v-de373fd7"]]);export{v as default};
