import{a3 as e,a4 as a,a5 as l,a8 as o,aa as r,bY as s,ap as d,aI as u,aS as m,bS as t,bB as n,bp as i,bA as p,aq as f,aX as c}from"./.pnpm-BO0thPis.js";import{u as g}from"./useForm-D2EwfXUI.js";import{u as V}from"./index-D91Jtym3.js";import _ from"./image-verify-code-BfFlc8XQ.js";const y={__name:"account-form",setup(y){const{formData:b,formRef:w}=g({username:"admin",password:"123456",imgCode:"",isRemember:!0}),{login:h}=V(),C={username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],imgCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}]};async function v(){var e;await(null==(e=w.value)?void 0:e.validate());const a=b.value;h({...a})}return(g,V)=>{const y=u,h=m,x=t,U=n,j=i,R=p,k=f,q=c;return e(),a(q,{ref_key:"formRef",ref:w,model:r(b),rules:C,size:"large"},{default:l((()=>[o(h,{prop:"username"},{default:l((()=>[o(y,{modelValue:r(b).username,"onUpdate:modelValue":V[0]||(V[0]=e=>r(b).username=e),placeholder:"随便填","prefix-icon":"User"},null,8,["modelValue"])])),_:1}),o(h,{prop:"password"},{default:l((()=>[o(y,{modelValue:r(b).password,"onUpdate:modelValue":V[1]||(V[1]=e=>r(b).password=e),type:"password",placeholder:"随便填","show-password":"","prefix-icon":"Lock",onKeyup:s(v,["enter"])},null,8,["modelValue"])])),_:1}),o(h,{prop:"code",class:"verify-code"},{default:l((()=>[o(y,{modelValue:r(b).imgCode,"onUpdate:modelValue":V[3]||(V[3]=e=>r(b).imgCode=e),placeholder:"请输入验证码","prefix-icon":"PriceTag"},{append:l((()=>[o(r(_),{modelValue:r(b).imgCode,"onUpdate:modelValue":V[2]||(V[2]=e=>r(b).imgCode=e),style:{cursor:"pointer"}},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),o(h,null,{default:l((()=>[o(R,{justify:"space-between",style:{width:"100%"}},{default:l((()=>[o(U,{span:12},{default:l((()=>[o(x,{modelValue:r(b).isRemember,"onUpdate:modelValue":V[4]||(V[4]=e=>r(b).isRemember=e),label:"记住我"},null,8,["modelValue"])])),_:1}),o(U,{span:12,style:{"text-align":"right"}},{default:l((()=>[o(j,{type:"danger",underline:!1,onClick:V[5]||(V[5]=e=>g.$router.push("/forgetPassword"))},{default:l((()=>V[6]||(V[6]=[d("忘记密码？")]))),_:1})])),_:1})])),_:1})])),_:1}),o(h,null,{default:l((()=>[o(k,{type:"primary",style:{width:"100%"},onClick:v},{default:l((()=>V[7]||(V[7]=[d("登录")]))),_:1})])),_:1})])),_:1},8,["model"])}}};export{y as default};
