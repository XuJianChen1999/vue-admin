import{e,x as t}from"./index-9TLdUthr.js";import{r as n,e as o,ar as r,as as i,av as s,aH as c,i as a,aI as l,bJ as u}from"./.pnpm-B5NcQQUZ.js";const d=function(e,t){if(!(this instanceof d))return new d(e,t);if(this.options=this.extend({noPrint:".no-print"},t),"string"==typeof e)try{this.dom=document.querySelector(e)}catch{var n=document.createElement("div");n.innerHTML=e,this.dom=n}else this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el;this.init()};d.prototype={init:function(){var e=this.getStyle()+this.getHtml();this.writeIframe(e)},extend:function(e,t){for(var n in t)e[n]=t[n];return e},getStyle:function(){for(var e="",t=document.querySelectorAll("style,link"),n=0;n<t.length;n++)e+=t[n].outerHTML;return e+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",e+="<style>html,body{background-color:#fff;}</style>"},getHtml:function(){for(var e=document.querySelectorAll("input"),t=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),o=0;o<e.length;o++)"checkbox"==e[o].type||"radio"==e[o].type?1==e[o].checked?e[o].setAttribute("checked","checked"):e[o].removeAttribute("checked"):(e[o].type,e[o].setAttribute("value",e[o].value));for(var r=0;r<t.length;r++)"textarea"==t[r].type&&(t[r].innerHTML=t[r].value);for(var i=0;i<n.length;i++)if("select-one"==n[i].type){var s=n[i].children;for(var c in s)"OPTION"==s[c].tagName&&(1==s[c].selected?s[c].setAttribute("selected","selected"):s[c].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(e){var t,n,o=document.createElement("iframe"),r=document.body.appendChild(o);o.id="myIframe",o.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),t=r.contentWindow||r.contentDocument,(n=r.contentDocument||r.contentWindow.document).open(),n.write(e),n.close();var i=this;o.onload=function(){i.toPrint(t),setTimeout((function(){document.body.removeChild(o)}),100)}},toPrint:function(e){try{setTimeout((function(){e.focus();try{e.document.execCommand("print",!1,null)||e.print()}catch(t){e.print()}e.close()}),10)}catch(t){}},isDOM:"object"==typeof HTMLElement?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}};const f={class:"item"},m={__name:"index",setup(m){const p=n(null);function h(){const e=p.value;e&&d(e)}function y(){d("<h2>TITLE</h2><p>动态创建的DOM结构</p>")}return(n,d)=>{const m=l,v=e,b=u,g=t;return o(),r(g,{"show-title":!1},{default:i((()=>[s(b,{header:"普通打印",shadow:"never"},{default:i((()=>[s(m,{type:"primary",onClick:h},{default:i((()=>d[0]||(d[0]=[c("普通打印")]))),_:1}),a("div",{ref_key:"divRef",ref:p},[a("div",f,[d[1]||(d[1]=c(" 打印内容1 ")),s(v,{name:"InfoFilled"}),d[2]||(d[2]=a("p",{class:"no-print"},"忽略打印",-1))]),d[3]||(d[3]=a("div",{style:{"page-break-after":"always"}},null,-1)),d[4]||(d[4]=a("div",{class:"item"},"打印内容2",-1))],512)])),_:1}),s(b,{header:"打印创建的DOM结构，适用于远程获取模板后打印",shadow:"never",class:"card-box"},{default:i((()=>[s(m,{type:"primary",onClick:y},{default:i((()=>d[5]||(d[5]=[c("动态打印")]))),_:1})])),_:1})])),_:1})}}};export{m as default};
