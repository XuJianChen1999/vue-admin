import{a3 as a,a4 as e,a5 as s,a8 as t,aa as l,af as d,ao as r,ap as m,bt as n,ba as o,bB as p,aH as f,bA as i}from"./.pnpm-BO0thPis.js";import{e as c}from"./index-B13NQykv.js";import u from"./index-CeHhXFDp.js";const b={class:"name-wrapper"},g={__name:"table",setup(g){const _=[{date:"2016-05-03",name:"Tom",address:"中国加油！祖国必胜"},{date:"2016-05-02",name:"Tom",address:"中国加油！祖国必胜"},{date:"2016-05-04",name:"Tom",address:"中国加油！祖国必胜"},{date:"2016-05-01",name:"Tom",address:"中国加油！祖国必胜"}].map((a=>({...a,mobile:`${Date.now()}`.slice(0,10)}))),j=[{date:"2016-05-03",name:"Tom",address:"Angeles"},{date:"2016-05-02",name:"jie",address:"Angeles"},{date:"2016-05-04",name:"Tom",address:"Angeles"}].map((a=>({...a,avatar:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"})));return(g,v)=>{const T=c,A=n,h=o,w=p,x=f,z=i;return a(),e(z,{gutter:20,justify:"space-between"},{default:s((()=>[t(w,{lg:12},{default:s((()=>[t(l(u),{data:l(_),columns:[{label:"日期",slot:"date"},{label:"姓名",slot:"name"},{label:"手机号",prop:"mobile"},{label:"备注",prop:"address"}]},{date:s((({item:a})=>[t(T,{icon:"User"}),d("span",null,r(a.date),1)])),name:s((({item:a})=>[t(h,{effect:"light",trigger:"hover",placement:"top"},{default:s((()=>[d("p",null,"姓名: "+r(a.name),1),d("p",null,"住址: "+r(a.address),1)])),reference:s((()=>[d("div",b,[t(A,{size:"small"},{default:s((()=>[m(r(a.name),1)])),_:2},1024)])])),_:2},1024)])),_:1},8,["data"])])),_:1}),t(w,{lg:12},{default:s((()=>[t(l(u),{data:l(j),columns:[{label:"头像",slot:"avatar"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}]},{avatar:s((({item:a})=>[t(x,{src:a.avatar,size:38,class:"avatar"},null,8,["src"])])),_:1},8,["data"])])),_:1})])),_:1})}}};export{g as default};
