import{a3 as e,ae as a,a8 as t,a5 as l,aa as s,ap as r,ao as n,af as i,a4 as o,ak as p,aF as m,aD as d,aH as u,aT as c,bt as f,ba as y,aq as b,c6 as v}from"./.pnpm-BO0thPis.js";import{U as h,a as x,_}from"./edit-user-4JhWKr4b.js";import{u as j}from"./useModal-DmZwVpXr.js";import k from"./index-CeHhXFDp.js";import{I as w}from"./index-kVow8AHQ.js";import"./useForm-D2EwfXUI.js";import"./drawer-BsSoOaIT.js";import"./index-B13NQykv.js";const g={style:{cursor:"pointer"}},S={__name:"user-table",props:{data:{type:Array,default:()=>[]}},setup(S){const{visible:V,modalData:C,open:D}=j(),N=[{label:"姓名",prop:"name"},{label:"头像",slot:"avatar"},{label:"是否在线",slot:"online"},{label:"部门",slot:"departmentName"},{label:"禁用",slot:"enable"},{label:"密码",prop:"password"},{label:"手机号",slot:"phone",width:120},{label:"性别",slot:"sex"},{label:"用户类型",slot:"type",width:120},{label:"创建时间",prop:"createTime",width:120},{label:"操作",slot:"handler",fixed:"right",width:210}];return(j,T)=>{const U=u,$=c,z=f,F=y,q=b,A=v;return e(),a(d,null,[t(s(k),{data:S.data,columns:N,border:!1},{online:l((({item:e})=>[t(s(w),{type:e.status?"success":"danger",size:6},null,8,["type"])])),avatar:l((({item:e})=>[t(U,{src:e.avatarUrl,size:40},null,8,["src"])])),enable:l((({item:e})=>[t($,{"model-value":e.enable,"active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"禁用","inline-prompt":""},null,8,["model-value"])])),type:l((({item:e})=>{return[t(z,{type:(a=e.type,{[x.Staff]:"primary",[x.Service]:"primary",[x.Customer]:"success",[x.Supplier]:"success",[x.Visitor]:"info",[x.BlackList]:"danger"}[a]||"warning")},{default:l((()=>[r(n(s(h)[e.type]||"未知"),1)])),_:2},1032,["type"])];var a})),phone:l((({item:e,index:a})=>[t(F,{content:e.phone,placement:0===a?"top":a+1===S.data.length?"bottom":"left-start"},{reference:l((()=>{return[i("span",g,n((a=e.phone,`${null==a?void 0:a.slice(0,3)}****${null==a?void 0:a.slice(-4)}`)),1)];var a})),_:2},1032,["content","placement"])])),sex:l((({item:e})=>[t(z,{type:1===e.sex?"primary":"success",effect:"plain"},{default:l((()=>[r(n(1===e.sex?"男":"女"),1)])),_:2},1032,["type"])])),departmentName:l((({item:e})=>[r(n(e.type!==s(x).Staff?"-":e.departmentName),1)])),handler:l((({item:a})=>[t(q,{type:"primary",icon:"Edit",link:"",onClick:e=>s(D)(a)},{default:l((()=>T[1]||(T[1]=[r("编辑")]))),_:2},1032,["onClick"]),"admin"===a.name?(e(),o(q,{key:0,type:"primary",icon:"Plus",link:""},{default:l((()=>T[2]||(T[2]=[r("新增")]))),_:1})):p("",!0),t(A,{title:`确定要删除 ${a.name} 吗？`,width:"210","confirm-button-type":"danger"},{reference:l((()=>[t(q,{link:"",type:"danger",icon:"Delete"},{default:l((()=>T[3]||(T[3]=[r("删除")]))),_:1})])),_:2},1032,["title"])])),_:1},8,["data"]),t(s(_),{modelValue:s(V),"onUpdate:modelValue":T[0]||(T[0]=e=>m(V)?V.value=e:null),user:s(C)},null,8,["modelValue","user"])],64)}}};export{S as default};
