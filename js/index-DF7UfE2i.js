import{B as e,A as t,_ as l,x as a}from"./index-DZ8Xxrs2.js";import{r as o,c as u,t as n,a as r,o as d,s as i,aR as s,e as f,f as m,h as c,ar as p,as as g,av as v,aw as h,aV as b,aH as V,aY as y,b9 as _,bQ as x,b6 as w,cg as z,b4 as S,bS as U,bT as $,b2 as A,aI as I,bJ as k}from"./.pnpm-B5NcQQUZ.js";import{C as N}from"./card-form-C4fBbpZW.js";import{_ as R}from"./col-DOmeNn1B.js";import"./useForm-BAG80Yrx.js";function W(){return window.devicePixelRatio||1}function j(e,t,l,a,o,u,n){const r=u,d=W(),i=r.content,s=r.fontSize,f=r.fontWeight,m=r.fontFamily,c=r.fontStyle,p=r.color,g=Number(s)*d;e.font=`${c} normal ${f} ${g}px/${o}px ${m}`,e.fillStyle=p,e.textAlign="center",e.textBaseline="top",e.translate(a/2,0);const v=Array.isArray(i)?i:[i];null==v||v.forEach(((a,o)=>{e.fillText(a??"",t,l+o*(g+n*d))}))}function E(e,t,l,a){e.translate(t,l),e.rotate(Math.PI/180*Number(a)),e.translate(-t,-l)}const T=[100,100],C={width:Number,height:Number,layout:{type:String,default:"alternate"},rotate:{type:Number,default:-22},zIndex:{type:Number,default:90},image:{type:String,default:void 0},content:{type:String,default:""},fullscreen:{type:Boolean,default:!1},auto:{type:Boolean,default:!0},color:{type:String,default:"rgba(0,0,0,.15)"},fontSize:{type:Number,default:16},fontStyle:{type:String,default:"normal"},fontWeight:{type:String,default:"normal"},fontFamily:{type:String,default:"sans-serif"},gap:{type:Array,default:()=>T},offset:{type:Array,default:()=>[T[0]/2,T[1]/2]}},F={__name:"index",props:C,setup(l,{expose:a}){const p=l,g=i(),v=i(),h=o(!1),b=document.body,V=u((()=>{var e;return(null==(e=p.gap)?void 0:e[0])??100})),y=u((()=>{var e;return(null==(e=p.gap)?void 0:e[1])??100})),_=u((()=>V.value/2)),x=u((()=>y.value/2)),w=u((()=>{var e;return(null==(e=p.offset)?void 0:e[0])??_.value})),z=u((()=>{var e;return(null==(e=p.offset)?void 0:e[1])??x.value})),S=u((()=>({parallel:1,alternate:2}[p.layout]))),U=u((()=>{const t={zIndex:p.zIndex??9,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let l=w.value-_.value,a=z.value-x.value;return l>0&&(t.left=e(l)`${l}`,t.width=`calc(100% - ${e(l)})`,l=0),a>0&&(t.top=e(a),t.height=`calc(100% - ${e(a)})`,a=0),t.backgroundPosition=`${e(l)} ${e(a)}`,t}));function $(){const e=v.value;e&&(e.remove(),v.value=void 0)}function A(t,l){const a=g.value,o=v.value;var u;a&&o&&(h.value=!0,o.setAttribute("style",(u={...U.value,backgroundImage:`url('${t}')`,backgroundSize:e((V.value+l)*S.value)},Object.keys(u).map((e=>`${function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}(e)}: ${u[e]};`)).join(" "))),p.fullscreen?(b.setAttribute("style","position: relative"),b.append(o)):null==a||a.append(o),setTimeout((()=>{h.value=!1})))}function I(){const t=document.createElement("canvas"),l=t.getContext("2d"),a=p,o=a.image,u=a.rotate??-22;if(l){v.value||(v.value=document.createElement("div"));const n=W(),[r,d]=function(t,l,a){let o=120,u=64;const n=l,r=n.content,d=n.width,i=n.height,s=n.fontSize;if(!n.image&&t.measureText){t.font=`${e(Number(s))} ${n.fontFamily}`;const l=Array.isArray(r)?r:[r],d=l.map((e=>t.measureText(e).width));o=Math.ceil(Math.max(...d)),u=Number(s)*l.length+(l.length-1)*a}return[d??o,i??u]}(l,a,3),i=(V.value+r)*n,s=(y.value+d)*n;t.setAttribute("width",e(i*S.value)),t.setAttribute("height",e(s*S.value));const f=V.value*n/2,m=y.value*n/2,c=r*n,p=d*n,g=(c+V.value*n)/2,h=(p+y.value*n)/2,b=f+i,_=m+s,x=g+i,w=h+s;if(l.save(),E(l,g,h,u),o){const e=new Image;e.onload=()=>{l.drawImage(e,f,m,c,p),l.restore(),E(l,x,w,u),l.drawImage(e,b,_,c,p),A(t.toDataURL(),r)},e.crossOrigin="anonymous",e.referrerPolicy="no-referrer",e.src=o}else j(l,f,m,c,p,a,3),l.restore(),E(l,x,w,u),j(l,b,_,c,p,a,3),A(t.toDataURL(),r)}}return r((()=>p),(()=>p.auto&&I()),{deep:!0,flush:"post"}),s((()=>p.auto&&I())),d((()=>$())),function(e,l,a){const i=o(!1);let s;const f=u((()=>{const l=n(e);return l?t(l)?l.map((e=>n(e))).filter((e=>e)):[l]:[]}));function m(){f.value.length&&!i.value&&(s=new ResizeObserver(l),f.value.forEach((e=>s.observe(e,a))))}function c(){s&&(s.disconnect(),s=void 0)}r((()=>f.value),(()=>{c(),m()}),{immediate:!0,flush:"post"}),d((()=>c()))}(p.fullscreen?b:g,(function(e){h.value||e.forEach((e=>{(function(e,t){let l=!1;return e.removedNodes.length&&(l=Array.from(e.removedNodes).some((e=>e===t))),"attributes"===e.type&&e.target===t&&(l=!0),l})(e,v.value)&&($(),I())}))}),{subtree:!0,childList:!0,attributes:!0,attributeFilter:["style","class"]}),a({renderWatermark:I,clear:$}),(e,t)=>(f(),m("div",{ref_key:"containerRef",ref:g,style:{position:"relative"}},[c(e.$slots,"default")],512))}},L=l({__name:"index",setup(e){const t=o(null),l=o({text:"水印内容",fontWeight:"normal",fullscreen:!1,auto:!0,image:null,zIndex:19,rotate:-22,fontSize:16,gap:[70,40],offset:[1,2],width:130,height:30,color:"rgba(0, 0, 0, 0.15)"});function u(){t.value.clear()}function n(){t.value.renderWatermark()}return(e,o)=>{const r=y,d=_,i=x,s=w,m=z,c=S,W=U,j=$,E=A,T=I,C=k,L=a;return f(),p(L,null,{default:g((()=>[v(h(N),{modelValue:h(l),"onUpdate:modelValue":o[15]||(o[15]=e=>b(l)?l.value=e:null),"label-width":"120",class:"card-form"},{content:g((()=>[v(E,{wrap:""},{default:g((()=>[v(T,{onClick:n},{default:g((()=>o[16]||(o[16]=[V("手动创建水印")]))),_:1}),v(T,{type:"warning",onClick:u},{default:g((()=>o[17]||(o[17]=[V("清除水印")]))),_:1})])),_:1})])),default:g((()=>[v(i,{gutter:50},{default:g((()=>[v(h(R),{label:"水印内容"},{default:g((()=>[v(r,{modelValue:h(l).text,"onUpdate:modelValue":o[0]||(o[0]=e=>h(l).text=e)},null,8,["modelValue"])])),_:1}),v(h(R),{label:"宽"},{default:g((()=>[v(d,{modelValue:h(l).width,"onUpdate:modelValue":o[1]||(o[1]=e=>h(l).width=e)},null,8,["modelValue"])])),_:1}),v(h(R),{label:"高"},{default:g((()=>[v(d,{modelValue:h(l).height,"onUpdate:modelValue":o[2]||(o[2]=e=>h(l).height=e)},null,8,["modelValue"])])),_:1})])),_:1}),v(i,{gutter:50},{default:g((()=>[v(h(R),{label:"自动添加"},{default:g((()=>[v(s,{modelValue:h(l).auto,"onUpdate:modelValue":o[3]||(o[3]=e=>h(l).auto=e)},null,8,["modelValue"])])),_:1}),v(h(R),{label:"添加图片"},{default:g((()=>[v(s,{modelValue:h(l).image,"onUpdate:modelValue":o[4]||(o[4]=e=>h(l).image=e),"inactive-value":null,"active-value":"https://element-plus.org/images/element-plus-logo.svg"},null,8,["modelValue"])])),_:1}),v(h(R),{label:"全屏水印"},{default:g((()=>[v(s,{modelValue:h(l).fullscreen,"onUpdate:modelValue":o[5]||(o[5]=e=>h(l).fullscreen=e)},null,8,["modelValue"])])),_:1})])),_:1}),v(i,{gutter:50},{default:g((()=>[v(h(R),{label:"旋转角度"},{default:g((()=>[v(m,{modelValue:h(l).rotate,"onUpdate:modelValue":o[6]||(o[6]=e=>h(l).rotate=e),min:-180,max:180},null,8,["modelValue"])])),_:1}),v(h(R),{label:"字体大小"},{default:g((()=>[v(m,{modelValue:h(l).fontSize,"onUpdate:modelValue":o[7]||(o[7]=e=>h(l).fontSize=e),min:10,max:40},null,8,["modelValue"])])),_:1}),v(h(R),{label:"层级"},{default:g((()=>[v(m,{modelValue:h(l).zIndex,"onUpdate:modelValue":o[8]||(o[8]=e=>h(l).zIndex=e)},null,8,["modelValue"])])),_:1})])),_:1}),v(i,{gutter:50},{default:g((()=>[v(h(R),{label:"水印颜色"},{default:g((()=>[v(c,{modelValue:h(l).color,"onUpdate:modelValue":o[9]||(o[9]=e=>h(l).color=e)},null,8,["modelValue"])])),_:1}),v(h(R),{label:"字体粗细"},{default:g((()=>[v(j,{modelValue:h(l).fontWeight,"onUpdate:modelValue":o[10]||(o[10]=e=>h(l).fontWeight=e)},{default:g((()=>[v(W,{label:"normal",value:"normal"}),v(W,{label:"weight",value:"weight"}),v(W,{label:"light",value:"light"}),v(W,{label:"number",value:"number"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),v(i,{gutter:50},{default:g((()=>[v(h(R),{label:"水印之间的间距"},{default:g((()=>[v(E,null,{default:g((()=>[v(d,{modelValue:h(l).gap[0],"onUpdate:modelValue":o[11]||(o[11]=e=>h(l).gap[0]=e),"controls-position":"right"},null,8,["modelValue"]),v(d,{modelValue:h(l).gap[1],"onUpdate:modelValue":o[12]||(o[12]=e=>h(l).gap[1]=e),"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1}),v(h(R),{label:"偏移量"},{default:g((()=>[v(E,null,{default:g((()=>[v(d,{modelValue:h(l).offset[0],"onUpdate:modelValue":o[13]||(o[13]=e=>h(l).offset[0]=e),placeholder:"offsetLeft","controls-position":"right"},null,8,["modelValue"]),v(d,{modelValue:h(l).offset[1],"onUpdate:modelValue":o[14]||(o[14]=e=>h(l).offset[1]=e),placeholder:"offsetTop","controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),v(h(F),{ref_key:"watermarkRef",ref:t,content:h(l).text,fullscreen:h(l).fullscreen,auto:h(l).auto,image:h(l).image,"z-index":h(l).zIndex,rotate:h(l).rotate,color:h(l).color,"font-size":h(l).fontSize,"font-weight":h(l).fontWeight,gap:h(l).gap,offset:h(l).offset,width:h(l).width,height:h(l).height},{default:g((()=>[v(C,{shadow:"never",class:"card-box",style:{width:"100%",height:"350px"}})])),_:1},8,["content","fullscreen","auto","image","z-index","rotate","color","font-size","font-weight","gap","offset","width","height"])])),_:1})}}},[["__scopeId","data-v-2015a78f"]]);export{L as default};
