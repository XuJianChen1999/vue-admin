import{_ as e,E as n,x as r}from"./index-DZ8Xxrs2.js";import{r as a,e as t,f as s,i as o,av as l,as as u,aH as c,aw as i,F as f,E as p,aI as d,ar as g,g as v,bV as x,bW as m}from"./.pnpm-B5NcQQUZ.js";import{r as _,u as h}from"./xlsx-BW9CG9W1.js";const y=e({__name:"index",props:{beforeUpload:Function,onSuccess:Function},setup(e){const r=e,g=a(null),v=a(!1),x=a({header:null,results:null});function m(e){if(e.stopPropagation(),e.preventDefault(),v.value)return;const r=e.dataTransfer.files;if(1!==r.length)return p.error("只支持上传一个文件");const a=r[0];if(!n(a.name))return p.error("只支持上传 .xlsx, .xls, .csv后缀类型的文件");w(a),e.stopPropagation(),e.preventDefault()}function y(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function b(){g.value.click()}function D(e){const n=e.target.files[0];n&&w(n)}function w(e){g.value=null;const n=r.beforeUpload;if(!n)return void j(e);n(e)&&j(e)}function j(e){return p.success(`文件名是：${e.name}`),v.value=!0,new Promise((n=>{const a=new FileReader;a.onload=e=>{const a=e.target.result,t=_(a,{type:"array"}),s=t.SheetNames[0],o=t.Sheets[s];!function({header:e,results:n}){const a=r.onSuccess;x.value={header:e,results:n},a&&a({header:e,results:n})}({header:function(e){const n=[],r=h.decode_range(e["!ref"]);let a;const t=r.s.r;for(a=r.s.c;a<=r.e.c;++a){const r=e[h.encode_cell({c:a,r:t})];let s="UNKNOWN "+a;r&&r.t&&(s=h.format_cell(r)),n.push(s)}return n}(o),results:h.sheet_to_json(o)}),v.value=!1,n()},a.readAsArrayBuffer(e)}))}return(e,n)=>{const r=d;return t(),s(f,null,[o("input",{ref_key:"inputRef",ref:g,class:"excel-upload-input",type:"file",accept:".xlsx, .xls",onChange:D},null,544),o("div",{class:"drop flex",onDrop:m,onDragover:y,onDragenter:y},[n[1]||(n[1]=o("span",null,"拖拽到此处上传",-1)),l(r,{loading:i(v),type:"primary",onClick:b},{default:u((()=>n[0]||(n[0]=[c(" 点击上传excel ")]))),_:1},8,["loading"])],32)],64)}}},[["__scopeId","data-v-b72fd28d"]]),b={__name:"index",setup(e){const n=a([]),o=a([]);function c(e){return e.size/1024/1024<1||(p.warning("不能上传超过1MB的文件"),!1)}function d({results:e,header:r}){n.value=e,o.value=r}return(e,a)=>{const p=x,_=m,h=r;return t(),g(h,null,{default:u((()=>[l(i(y),{"on-success":d,"before-upload":c}),l(_,{data:i(n),border:"","highlight-current-row":"",style:{"margin-top":"22px"}},{default:u((()=>[(t(!0),s(f,null,v(i(o),(e=>(t(),g(p,{key:e,prop:e,label:e},null,8,["prop","label"])))),128))])),_:1},8,["data"])])),_:1})}}};export{b as default};
