import{x as A}from"./index-B13NQykv.js";import{a$ as e,a3 as n,a4 as t,a5 as a,a8 as i,ap as o,E as s,aq as c}from"./.pnpm-BO0thPis.js";const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA9RJREFUeF7tm3922yAMx4VP0tykPclqv91j6z32kuwkzU2WiyxsMsU/AAMSAue9xP8WI/mL+EiCVMGDP+rBvx+eAjwj4F2/QAffQMNrUgwFVziqfjXuu36Fv/Aj+e5ygIYezuq6egf9UHAqnmfQJ9DwkpwHv+UGHwp6/Qkq4+PnGXs4qvPKABoFeE8anQecPSGpc2i4wEm9OX6gD/kiargoGLQmOI5DMQoO3up18AmQobx98QaHKQpMFP4h+bF83744aJwjvfqzoSsnAvD10AriNvhJ+Ih5Durqo52j+nBWn2p//A4FHPUxCjro4Ze6OE7QVgBXER/a6m9FIC2C0O4NDiYNDpqunsQexEgyTz4/OnjzhKdzDG2OUWQEMFFA28PGcQkg5u8aGdGNvaMav30uhAZNI6iZRgaIuRLIgA+33BRF60qQF0oSQMyRQAZ8ThStBdgTiHEJ5MDnMMTvBegpCf5XkeVFSUwAOfB50eoLwIuCekCUFDfAkHA3eE9AlAJfKGOtssAyBG1jQusRxsoqUOPTa4zZFxnwhbLVl43t8wDs8m5jbUB5ZCrEeIqlV3whhiQFGHc1uVOUA6IU+EIMWSxp/ERoLyBWBt8ypNNHYpw+obRClAOfzxBnQ6cF4PcJXCBKgW+q92MQSwuAb3PTIr1lrlbxbYmQJ0ArIDYCH40BdnRtIEqCL5L23EjIjwCzFaiHn/ktsxz4fPZEIEATgB8FKSDKgS8kpJgAdYCItA6dMtMrvo16vzwLSPQJW3u8g6vQGZ+fQTKKeNoWsBPy+oRwy+w6yUu5q2OujO+ehvAE4KbFSFc2eUS/3Aj3H5kq8AWQBKJ1lld2j+f73l1jdQEMEDm9frhl5guarPdlIegCkXOfEAIip/VGX77O9zMX3BvG3wJz2HLuE9ZAbAw+Xikck5i3enPaagw+eQH4+xfvBvGHEpRbZeM/od6vx4DlzNw+gXafby2S6v02AvCjgM6vgrTnGiuH4DoKuECkiODfSFPedsbKCsC/T8j9BFa932YLWCv8PiEtghD45LOA6zovLcYFSJzvp9ULj5DdAtZGDSAKgq9+BKAFXp+wtZBF9X5bBqyjgPO7I9/fwnp/HwFMFJSnxQrga7MFrJUSIFYCX1sBSoBYefVRiDpZwN10vD5BrN7fjwElabFS2qvbC8SkpgFRtN7fPwLQg/w+Qbzevw8B0IucPqEB+NpmAUqf0CDt7ceAHCA2At++EbDdJ1Sr9++HAdt9QlPw7R8BNit047/b4b+v/eZebcVWN+dvbSrBHE92GvMUYCfh78bsw0fAPzUGDbzJk1+SAAAAAElFTkSuQmCC",f={__name:"index",setup(f){const u=e();function w(){!async function(A,e){if(!("Notification"in window))return s.warning("该浏览器不支持此API");const n=Notification.permission;if("denied"===n)return s.error("已拒绝通知权限");if("granted"===n)t(A,e);else if("default"===n){const[n,a]=await Notification.requestPermission().then((A=>[null,A])).catch((A=>[A,null]));return n||"denied"===a?Promise.reject():t(A,e)}function t(A,e){const n=new Notification(A,{...e,icon:r});n.onclick=A=>{n.close();const{data:t}=A.target;e.click&&e.click(t)},n.onclose=A=>{s.success("关闭了通知"),e.close&&e.click(A)}}}("标题",{body:"这是内容，点击跳转页面",data:{path:"/components/modal"},click(A){A&&Object.keys(A).length&&u.push(A.path)}})}return(e,s)=>{const r=c,f=A;return n(),t(f,null,{default:a((()=>[i(r,{type:"primary",onClick:w},{default:a((()=>s[0]||(s[0]=[o("点我试一下")]))),_:1})])),_:1})}}};export{f as default};
