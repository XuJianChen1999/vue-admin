import{aA as a,a3 as e,a4 as t,a5 as l,by as d,aE as i,aF as o,af as s}from"./.pnpm-DSXWUmMM.js";import{_ as u}from"./index-CMBT9BYn.js";const n=(a=>(i("data-v-c32a82b7"),a=a(),o(),a))((()=>s("div",{id:"histogram"},null,-1))),v=u({__name:"histogram",setup:i=>(a((()=>function(){const{Mix:a}=window.G2Plot,e=[{date:"2015-02",value:9168},{date:"2015-08",value:11781},{date:"2016-01",value:23818},{date:"2017-02",value:25316},{date:"2018-01",value:26698},{date:"2018-08",value:27890},{date:"2019-10",value:23300},{date:"2020-09",value:7890},{date:"2021-05",value:2789},{date:"2022-07",value:33739},{date:"2023-11",value:2865}];new a("histogram",{appendPadding:8,tooltip:{shared:!0},syncViewPadding:!0,plots:[{type:"column",options:{data:[{date:"2015-02",value:160},{date:"2015-08",value:245},{date:"2016-01",value:487},{date:"2017-02",value:590},{date:"2018-01",value:503},{date:"2018-08",value:514},{date:"2019-10",value:590},{date:"2020-09",value:137},{date:"2021-05",value:226},{date:"2022-07",value:321},{date:"2023-11",value:789}],xField:"date",yField:"value",yAxis:{type:"log",max:1e5},meta:{date:{sync:!0},value:{alias:"店数(间)"}},label:{position:"middle"}}},{type:"line",options:{data:e,xField:"date",yField:"value",xAxis:!1,yAxis:{type:"log",max:1e5},label:{offsetY:-8},meta:{value:{alias:"平均租金(元)"}},color:"#FF6B3B",annotations:e.map((a=>({type:"dataMarker",position:a,point:{style:{stroke:"#FF6B3B",lineWidth:1.5}}})))}},{type:"line",options:{data:[{date:"2015-02",value:null},{date:"2015-08",value:.029},{date:"2016-01",value:.094},{date:"2017-02",value:.148},{date:"2018-01",value:.055},{date:"2018-08",value:.045}],xField:"date",yField:"value",xAxis:!1,yAxis:{line:null,grid:null,position:"right",max:.16,tickCount:8},meta:{date:{sync:"date"},value:{alias:"递增",formatter:a=>`${(100*a).toFixed(1)}%`}},smooth:!0,label:{callback:a=>({offsetY:.148===a?36:.055===a?0:20,style:{fill:"#1AAF8B",fontWeight:700,stroke:"#fff",lineWidth:1}})},color:"#1AAF8B"}}]}).render()}())),(a,i)=>{const o=d;return e(),t(o,{shadow:"never"},{default:l((()=>[n])),_:1})})},[["__scopeId","data-v-c32a82b7"]]);export{v as default};
