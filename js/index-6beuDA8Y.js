const __vite__fileDeps=["./export-excel-b8DiZQyx.js",".pnpm-BO0thPis.js","../css/.pnpm-CSRP5dmz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e,x as a}from"./index-B13NQykv.js";import{a3 as s,a4 as t,a5 as o,a8 as r,ap as n,aq as i,bI as l,bJ as d}from"./.pnpm-BO0thPis.js";import{p as m}from"./date-tCa9E-4J.js";const p={__name:"index",setup(p){const A=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];function f(){e((()=>import("./export-excel-b8DiZQyx.js")),__vite__mapDeps([0,1,2]),import.meta.url).then((e=>{const a=function(e,a){return a.map((a=>e.map((e=>"timestamp"===e?m(a[e]):a[e]))))}(["date","state","city","address","name"],A);e.export_json_to_excel({multiHeader:[["日期","地址信息","","","姓名"]],header:["","State","City","Address",""],data:a,merges:["A1:A2","B1:D1","E1:E2"],filename:"多级表头"})}))}return(e,m)=>{const p=i,c=l,C=d,g=a;return s(),t(g,null,{default:o((()=>[r(p,{type:"primary",onClick:f},{default:o((()=>m[0]||(m[0]=[n("导出")]))),_:1}),r(C,{data:A},{default:o((()=>[r(c,{prop:"date",label:"Date"}),r(c,{label:"Address Info"},{default:o((()=>[r(c,{prop:"state",label:"State"}),r(c,{prop:"city",label:"City"}),r(c,{prop:"address",label:"Address"})])),_:1}),r(c,{prop:"name",label:"Name"})])),_:1})])),_:1})}}};export{p as default};
