import{h as e}from"./.pnpm-BLGzruUg.js";function a(a={},t={}){const l=e(null),n=e({...a}),i={labelWidth:90,labelPosition:"left",...t};return{formRef:l,formData:n,formConfig:i,setFormData:function(e){n.value={...e}},getFormData:function(){return{...n.value}},validate:async function(){await l.value.validate()},clearValidate:function(e){l.value.clearValidate(e)},resetFields:function(){l.value.resetFields()},getAllFields:function(){return l.value.fields}}}export{a as u};
