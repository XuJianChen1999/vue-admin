import{aA as e,a3 as a,a4 as l,a5 as t,ae as o,aD as n,aO as s,a8 as r,af as d,ao as i,aa as m,bv as u,bB as c,bA as f}from"./.pnpm-BO0thPis.js";import{_ as p,e as y}from"./index-B13NQykv.js";import b from"./countup-DfW2GpFO.js";const v={class:"header flex"},F={class:"total"},h=["id"],g=p({__name:"card",setup(p){const{Bullet:g,Area:A,Pie:x,Column:k}=window.G2Plot,w=[{title:"总收入",value:95293,color:"#FAD029",id:"income",icon:"WalletFilled",render:function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then((e=>e.json())).then((e=>{new A("income",{data:e,xField:"Date",yField:"scales",xAxis:{range:[0,1],tickCount:5},areaStyle:()=>({fill:"l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff"})}).render()}))}},{title:"好评数",value:67354,color:"#65EA91",id:"rate",icon:"StarFilled",render:function(){new g("rate",{data:[{title:"满意度",ranges:[40,70,100],measures:[30,50],target:85}],measureField:"measures",rangeField:"ranges",targetField:"target",xField:"title",color:{range:["#FFbcb8","#FFe0b0","#bfeec8"],measure:["#5B8FF9","#61DDAA"],target:"#39a3f4"},label:{measure:{position:"middle",style:{fill:"#fff"}}},xAxis:{line:null},yAxis:!1,tooltip:{showMarkers:!1,shared:!0},legend:{custom:!0,position:"bottom",items:[{value:"差",name:"差",marker:{symbol:"square",style:{fill:"#FFbcb8",r:5}}},{value:"良",name:"良",marker:{symbol:"square",style:{fill:"#FFe0b0",r:5}}},{value:"优",name:"优",marker:{symbol:"square",style:{fill:"#bfeec8",r:5}}},{value:"第一季度",name:"第一季度",marker:{symbol:"square",style:{fill:"#5B8FF9",r:5}}},{value:"第二季度",name:"第二季度",marker:{symbol:"square",style:{fill:" #61DDAA",r:5}}},{value:"目标值",name:"目标值",marker:{symbol:"line",style:{stroke:"#39a3f4",r:5}}}]}}).render()}},{title:"日活跃",value:1273,color:"#d897eb",id:"customer",icon:"Histogram",render:function(){new k("customer",{data:[{name:"男装",month:"Jan.",sold:18.9},{name:"男装",month:"Feb.",sold:28.8},{name:"男装",month:"Mar.",sold:39.3},{name:"男装",month:"Apr.",sold:81.4},{name:"男装",month:"May",sold:47},{name:"男装",month:"Jun.",sold:20.3},{name:"男装",month:"Jul.",sold:24},{name:"男装",month:"Aug.",sold:35.6},{name:"女装",month:"Jan.",sold:12.4},{name:"女装",month:"Feb.",sold:23.2},{name:"女装",month:"Mar.",sold:34.5},{name:"女装",month:"Apr.",sold:99.7},{name:"女装",month:"May",sold:52.6},{name:"女装",month:"Jun.",sold:35.5},{name:"女装",month:"Jul.",sold:37.4},{name:"女装",month:"Aug.",sold:42.4}],isGroup:!0,xField:"month",yField:"sold",seriesField:"name",label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]}}).render()}},{title:"已售出",value:284,color:"#f69899",id:"soldOut",icon:"GoodsFilled",render:function(){new x("soldOut",{appendPadding:10,data:[{type:"男生上衣",value:27},{type:"七分裤",value:25},{type:"包包",value:18},{type:"休闲鞋",value:15},{type:"连衣裙",value:10},{type:"其他",value:5}],angleField:"value",colorField:"type",radius:.8,label:{type:"outer",content:"{name} {percentage}"},interactions:[{type:"pie-legend-active"},{type:"element-active"}]}).render()}}];return e((()=>{w.forEach((e=>{e.render()}))})),(e,p)=>{const g=y,A=u,x=c,k=f;return a(),l(k,{gutter:30},{default:t((()=>[(a(),o(n,null,s(w,(e=>r(x,{key:e.id,lg:6},{default:t((()=>[r(A,{shadow:"never"},{default:t((()=>[d("div",v,[r(g,{name:e.icon,color:e.color,size:38},null,8,["name","color"]),d("div",F,[d("span",null,i(e.title),1),r(m(b),{end:e.value,"use-group":""},null,8,["end"])])]),d("div",{id:e.id,class:"chart-item"},null,8,h)])),_:2},1024)])),_:2},1024))),64))])),_:1})}}},[["__scopeId","data-v-b705b3a6"]]);export{g as default};
