const __vite__fileDeps=["./export-excel-CH_dywFl.js",".pnpm-B5NcQQUZ.js","../css/.pnpm-BJV8UV2q.css","./xlsx-BW9CG9W1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e,x as a}from"./index-DZ8Xxrs2.js";import{r as s,e as d,ar as r,as as t,av as o,aw as n,aH as m,aG as l,aI as p,bH as i}from"./.pnpm-B5NcQQUZ.js";import{p as c}from"./date-s3-SwcG3.js";import u from"./index-BLlYY6zk.js";import{u as f}from"./useForm-BAG80Yrx.js";const g={__name:"index",setup(g){const{formData:x}=f({filename:"export-excel",autoWidth:!0,bookType:"xlsx"}),_=s(!1),j=s([]),b=[{name:"张三",age:18,address:"北京",desc:"11"},{name:"李四",age:20,address:"上海",desc:"1111111111"},{name:"王五",age:22,address:"广州",desc:"11111"},{name:"赵六",age:24,address:"深圳",desc:"111"},{name:"钱七",age:26,address:"杭州",desc:"1111111111111"},{name:"孙八",age:28,address:"成都",desc:"1111111"},{name:"周九",age:30,address:"重庆",desc:"111111"},{name:"吴十",age:32,address:"武汉",desc:"11111111"}];function h(){_.value=!0,e((()=>import("./export-excel-CH_dywFl.js")),__vite__mapDeps([0,1,2,3]),import.meta.url).then((e=>{const a=function(e,a){return a.map((a=>e.map((e=>"timestamp"===e?c(a[e]):a[e]))))}(["name","age","address","desc"],j.value);e.export_json_to_excel({header:["姓名","年龄","地址","说明"],data:a,...x.value}),_.value=!1}))}function v(e){j.value=e}return(e,s)=>{const c=p,f=i,g=a;return d(),r(g,null,{default:t((()=>[o(c,{type:"primary",disabled:!n(j).length,onClick:h},{default:t((()=>s[0]||(s[0]=[m("导出已选择")]))),_:1},8,["disabled"]),o(n(u),{data:b,columns:[{label:"姓名",prop:"name"},{label:"年龄",slot:"age"},{label:"地址",prop:"address"},{label:"说明",prop:"desc"}],"show-selection":"",style:{"margin-top":"22px"},onSelect:v},{age:t((({item:e})=>[o(f,{type:"primary"},{default:t((()=>[m(l(e.age),1)])),_:2},1024)])),_:1})])),_:1})}}};export{g as default};
