import{e,x as t}from"./index-CMBT9BYn.js";import{r as n,a3 as o,a4 as r,a5 as i,a8 as s,ap as a,af as c,aq as l,by as u}from"./.pnpm-DSXWUmMM.js";const d=function(e,t){if(!(this instanceof d))return new d(e,t);if(this.options=this.extend({noPrint:".no-print"},t),"string"==typeof e)try{this.dom=document.querySelector(e)}catch{var n=document.createElement("div");n.innerHTML=e,this.dom=n}else this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el;this.init()};d.prototype={init:function(){var e=this.getStyle()+this.getHtml();this.writeIframe(e)},extend:function(e,t){for(var n in t)e[n]=t[n];return e},getStyle:function(){for(var e="",t=document.querySelectorAll("style,link"),n=0;n<t.length;n++)e+=t[n].outerHTML;return e+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",e+="<style>html,body{background-color:#fff;}</style>"},getHtml:function(){for(var e=document.querySelectorAll("input"),t=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),o=0;o<e.length;o++)"checkbox"==e[o].type||"radio"==e[o].type?1==e[o].checked?e[o].setAttribute("checked","checked"):e[o].removeAttribute("checked"):(e[o].type,e[o].setAttribute("value",e[o].value));for(var r=0;r<t.length;r++)"textarea"==t[r].type&&(t[r].innerHTML=t[r].value);for(var i=0;i<n.length;i++)if("select-one"==n[i].type){var s=n[i].children;for(var a in s)"OPTION"==s[a].tagName&&(1==s[a].selected?s[a].setAttribute("selected","selected"):s[a].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(e){var t,n,o=document.createElement("iframe"),r=document.body.appendChild(o);o.id="myIframe",o.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),t=r.contentWindow||r.contentDocument,(n=r.contentDocument||r.contentWindow.document).open(),n.write(e),n.close();var i=this;o.onload=function(){i.toPrint(t),setTimeout((function(){document.body.removeChild(o)}),100)}},toPrint:function(e){try{setTimeout((function(){e.focus();try{e.document.execCommand("print",!1,null)||e.print()}catch(t){e.print()}e.close()}),10)}catch(t){}},isDOM:"object"==typeof HTMLElement?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}};const f={class:"item"},m=c("p",{class:"no-print"},"忽略打印",-1),p=c("div",{style:{"page-break-after":"always"}},null,-1),h=c("div",{class:"item"},"打印内容2",-1),y={__name:"index",setup(y){const v=n(null);function b(){const e=v.value;e&&d(e)}function g(){d("<h2>TITLE</h2><p>动态创建的DOM结构</p>")}return(n,d)=>{const y=l,x=e,T=u,k=t;return o(),r(k,{"show-title":!1},{default:i((()=>[s(T,{header:"普通打印",shadow:"never"},{default:i((()=>[s(y,{type:"primary",onClick:b},{default:i((()=>[a("普通打印")])),_:1}),c("div",{ref_key:"divRef",ref:v},[c("div",f,[a(" 打印内容1 "),s(x,{name:"InfoFilled"}),m]),p,h],512)])),_:1}),s(T,{header:"打印创建的DOM结构，适用于远程获取模板后打印",shadow:"never",class:"card-box"},{default:i((()=>[s(y,{type:"primary",onClick:g},{default:i((()=>[a("动态打印")])),_:1})])),_:1})])),_:1})}}};export{y as default};
