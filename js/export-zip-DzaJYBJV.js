import{cc as e,cd as t,E as n}from"./.pnpm-DSXWUmMM.js";function r(r,o,s,c){const i=new e,a=s||"file",f=c||"file";let l=`${r}\r\n`;o.forEach((e=>{let t="";t=e.toString(),l+=`${t}\r\n`})),i.file(`${a}.txt`,l),i.generateAsync({type:"blob"}).then((e=>{t.saveAs(e,`${f}.zip`)}),(e=>{n.error("导出失败")}))}export{r as export_txt_to_zip};
