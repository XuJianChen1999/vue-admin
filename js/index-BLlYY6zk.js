import{c8 as e,r as a,aR as t,aZ as l,e as n,f as o,av as r,as as s,h as i,ar as c,j as d,F as p,g as u,aD as g,aH as h,aG as f,aw as y,aV as m,bV as x,bm as w,bW as k,c9 as b}from"./.pnpm-B5NcQQUZ.js";import{_ as S}from"./index-DZ8Xxrs2.js";const v=S({__name:"index",props:{...{emptyText:{type:String,default:"暂无数据"},border:{type:Boolean,default:!0},showSelection:{type:Boolean,default:!1},fixedHeight:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]}},...{showPagination:{type:Boolean,default:!1},total:{type:Number,default:0},pageSizes:{type:Array,default:()=>[10,20,30,40]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0}}},emits:["select","select-all","selection-change","cell-click","row-click","header-click","sort-change","filter-change","expand-change","change","click-btn"],setup(S,{emit:v}){const _=S,z=v,C=e(),$=a(null),B=a(1),H=a(10),j=a(null);function P(e){const a=document.querySelector(`.${e}`);return+(null==a?void 0:a.clientHeight)||0}return t((async()=>{_.fixedHeight&&(await l(),j.value=function(){if(null==C?void 0:C["max-height"])return null==C?void 0:C["max-height"];const e=P("main-box"),a=P("page-title"),t=P("card-box");return e-a-t-30+"px"}())})),(e,a)=>{const t=x,l=w,S=k,v=b;return n(),o(p,null,[r(S,g({ref_key:"tableRef",ref:$},e.$attrs,{border:e.border,onSelect:a[0]||(a[0]=e=>z("select",e)),onSelectAll:a[1]||(a[1]=e=>z("select-all",e)),onSelectionChange:a[2]||(a[2]=e=>z("selection-change",e)),onCellClick:a[3]||(a[3]=(e,a,t,l)=>z("cell-click",{row:e,column:a,cell:t,event:l})),onRowClick:a[4]||(a[4]=(e,a,t)=>z("row-click",{row:e,column:a,event:t})),onHeaderClick:a[5]||(a[5]=(e,a)=>z("header-click",{column:e,event:a})),onSortChange:a[6]||(a[6]=e=>z("sort-change",e)),onFilterChange:a[7]||(a[7]=e=>z("filter-change",e)),onExpandChange:a[8]||(a[8]=(e,a)=>z("expand-change",{row:e,expandedRows:a}))}),{empty:s((()=>[i(e.$slots,"empty",{},(()=>[r(l,{description:e.emptyText},{default:s((()=>[i(e.$slots,"empty",{},void 0,!0)])),_:3},8,["description"])]),!0)])),default:s((()=>[e.showSelection?(n(),c(t,{key:0,type:"selection",width:"55"})):d("",!0),(n(!0),o(p,null,u(e.columns,((a,l)=>(n(),c(t,g({key:a.prop||l,ref_for:!0},a,{align:a.align||"center",prop:a.prop,fixed:a.fixed,width:a.width}),{header:s((t=>[a.headerSlot?i(e.$slots,a.headerSlot,{key:0,row:{...t}},(()=>[h(f(a.label),1)]),!0):d("",!0)])),default:s((t=>[i(e.$slots,a.slot,{item:t.row,column:t.column,cellIndex:t.cellIndex,index:t.$index},(()=>[h(f(t.row[a.prop]||a.text),1)]),!0)])),_:2},1040,["align","prop","fixed","width"])))),128))])),_:3},16,["border"]),i(e.$slots,"pagination",{},(()=>[e.showPagination?(n(),c(v,{key:0,"current-page":y(B),"onUpdate:currentPage":a[9]||(a[9]=e=>m(B)?B.value=e:null),"page-size":y(H),"onUpdate:pageSize":a[10]||(a[10]=e=>m(H)?H.value=e:null),layout:e.layout,total:e.total,"page-sizes":e.pageSizes,background:e.background,"hide-on-single-page":"",class:"pagination flex",onChange:a[11]||(a[11]=(e,a)=>z("change",{currentPage:e,sizes:a}))},null,8,["current-page","page-size","layout","total","page-sizes","background"])):d("",!0)]),!0)],64)}}},[["__scopeId","data-v-d65b60f8"]]);export{v as default};
