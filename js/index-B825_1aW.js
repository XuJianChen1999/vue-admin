import{d as e,E as t,R as a,x as i}from"./index-CMBT9BYn.js";import{r as l,a3 as o,a4 as s,a5 as n,a8 as m,ap as r,aa as c,bS as d,E as p,aq as b,by as h}from"./.pnpm-DSXWUmMM.js";const u="home",N=[{path:"/"+u,component:"/"+u,name:u,meta:{title:"首页",icon:"Monitor",moduleName:u,isAffix:!0,showTitle:!1}}],w="components",g=[{path:`/${w}`,redirect:`/${w}/modal`,name:w,meta:{title:"组件",icon:"component",iconType:e.SVG},children:t([{baseName:"modal",title:"弹窗",meta:{showTitle:!1}},{baseName:"editor",title:"编辑器"},{baseName:"search",title:"搜索表单"},{baseName:"qrcode",title:"二维码"},{baseName:"icon-select",title:"图标选择器"},{baseName:"pulse",title:"脉冲圆点"},{baseName:"zip",title:"导出zip"},{baseName:"cropper",title:"图片裁剪"},{baseName:"upload",title:"上传"}],w)}],$="link",f=[{path:`/${$}`,redirect:`/${$}/bilibili`,name:$,meta:{title:"链接",icon:"Link"},children:[{name:"bilibili",path:"https://bilibili.com",meta:{title:"b站内嵌",type:a.IFRAME,isKeepAlive:!0,url:"https://bilibili.com"}},{name:"vue",path:"https://cn.vuejs.org",meta:{title:"vue文档",type:a.LINK,url:"https://cn.vuejs.org"}}]}],x="full-page",T=[{path:`/${x}`,component:`/${x}`,name:x,meta:{title:"全屏页面",icon:"FullScreen",moduleName:x,fullPage:!0}}],y="nesting",v=[{path:`/${y}`,redirect:`/${y}/router1`,name:y,meta:{title:"嵌套路由",icon:"nesting",iconType:e.SVG},children:t([{baseName:"router",title:"嵌套路由",children:[{baseName:"router1",title:"嵌套路由1"},{baseName:"router2",title:"嵌套路由2"}]}],y)}],L="system",S=[{path:`/${L}`,redirect:`/${L}/modal`,name:L,meta:{title:"系统管理",icon:"system",iconType:e.SVG},children:t([{baseName:"log",title:"系统日志"},{baseName:"menu",title:"菜单管理"},{path:`/${L}/logDetail`,name:"logDetail",component:`/${L}/log/detail`,meta:{title:"日志详情",isKeepAlive:!0,showTitle:!1,hidden:!0}},{baseName:"list-card",title:"卡片列表"},{baseName:"users",title:"用户管理",meta:{showTitle:!1}}],L)}],j="excel",k=[{path:`/${j}`,redirect:`/${j}/exportExcel`,name:j,meta:{title:"excel",icon:"excel",iconType:e.SVG},children:t([{baseName:"export-excel",title:"导出 excel"},{baseName:"export-selected",title:"导出 已选择"},{baseName:"export-multi-header",title:"导出 多级表头"},{baseName:"upload-excel",title:"上传excel"}],j)}],A="feature",G=[{path:`/${A}`,redirect:`/${A}/print`,name:A,meta:{title:"功能",icon:"feat",iconType:e.SVG},children:t([{baseName:"print",title:"打印"},{baseName:"signature",title:"签名板"},{baseName:"watermark",title:"水印",meta:{showTitle:!1}},{baseName:"pdf",title:"pdf",meta:{showTitle:!1}},{baseName:"directives",title:"指令"},{baseName:"draggable",title:"拖拽"},{baseName:"json-editor",title:"json编辑器"},{baseName:"slide-verify",title:"滑动验证"},{baseName:"barcode",title:"条形码"}],A)}],I="about",V=[{path:`/${I}`,component:`/${I}`,name:I,meta:{title:"关于项目",icon:"InfoFilled",moduleName:I,isAffix:!0}}],_="overflow",q=[{path:`/${_}`,redirect:`/${_}/menu`,name:_,meta:{title:"目录超出显示tooltip文字提示哈哈哈哈哈"},children:t([{baseName:"menu",title:"目录超出显示tooltip文字提示哦哦哦哦哦"}])}],D="abnormal",E=[...N,...g,...G,...S,...f,...k,...v,...[{path:`/${D}`,redirect:`/${D}/403`,name:D,meta:{title:"异常页面",icon:"Warning"},children:t([{baseName:"403",title:"403",meta:{showTitle:!1}},{baseName:"404",title:"404",meta:{showTitle:!1}},{baseName:"500",title:"500",meta:{showTitle:!1}}],D)}],...T,...V,...q],F={__name:"index",setup(e){const t=l({val:JSON.stringify(E),data:E,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:8});function a(){p.success("打开控制台查看")}return(e,l)=>{const p=b,u=h,N=i;return o(),s(N,null,{default:n((()=>[m(u,{shadow:"never"},{default:n((()=>[m(p,{type:"primary",style:{"margin-bottom":"22px"},onClick:a},{default:n((()=>[r("获取值")])),_:1}),m(c(d),{data:c(t).data,"onUpdate:data":l[0]||(l[0]=e=>c(t).data=e),deep:c(t).deep,"show-double-quotes":c(t).showDoubleQuotes,"show-line":c(t).showLine,"show-length":c(t).showLength,"show-icon":c(t).showIcon,"show-line-number":c(t).showLineNumber,editable:c(t).editable,"editable-trigger":c(t).editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])])),_:1})])),_:1})}}};export{F as default};
