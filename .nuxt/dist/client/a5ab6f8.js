(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{495:function(e,t,r){var content=r(735);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("4289c070",content,!0,{sourceMap:!1})},734:function(e,t,r){"use strict";r(495)},735:function(e,t,r){(t=r(14)(!1)).push([e.i,".app-register[data-v-5e7b6884]{position:fixed;left:0;right:0;top:0;bottom:0;padding:20px;z-index:1001;background:#fff}.app-register[data-v-5e7b6884] .el-row{height:100%}.app-register[data-v-5e7b6884] .el-row .el-col{max-width:350px}.app-register .page-header .page-logo[data-v-5e7b6884]{text-align:center;margin-bottom:40px}.app-register .page-header .page-logo img[data-v-5e7b6884]{border-radius:50%;width:100px;height:100px}.app-register .page-header .page-title[data-v-5e7b6884]{font-size:20px}.app-register .box-card[data-v-5e7b6884] .el-form-item .el-input__inner{border-radius:50px}.app-register .box-card .register-btn[data-v-5e7b6884]{width:100%;border-radius:20px}.app-register .box-card .card-footer[data-v-5e7b6884]{display:flex}.app-register .box-card .card-footer .login-text[data-v-5e7b6884]{font-size:14px;margin-left:auto;color:#999}.app-register .box-card .card-footer .go-login[data-v-5e7b6884]{cursor:pointer;color:#66b1ff}",""]),e.exports=t},788:function(e,t,r){"use strict";r.r(t);var o={name:"Register",meta:{isClosed:!0},head:{title:"注册",titleTemplate:"%s - DJL箫氏的博客!",htmlAttrs:{lang:"en",amp:!0},meta:[{hid:"description",name:"description",content:"这是DJL箫氏的博客的注册页"}]},data:function(){return{form:{username:"",password:"",email:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],email:[{required:!0,trigger:"blur",message:"请输入邮箱"},{trigger:"blur",validator:function(e,t,r){t=t.trim();/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)?r():r(new Error("请输入正确的邮箱地址"))}}]}}},methods:{register:function(){var e=this;this.$http({method:"post",url:"/user",data:{username:this.form.username,password:this.form.password,email:this.form.email},showErrorMsg:!0,showSuccessMsg:!0}).response.then((function(){e.goToLogin()}),(function(){}))},formValidate:function(){var e=this;this.$refs.form&&this.$refs.form.validate((function(t){t&&e.register()}))},goToLogin:function(){this.$router.push("/login")},goToHomePage:function(){this.$router.push("/")}}},l=(r(734),r(6)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"app-register"},[o("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("el-col",{attrs:{xs:24,sm:10,md:8,lg:8,xl:8}},[o("div",{staticClass:"page-header"},[o("div",{staticClass:"page-logo"},[o("img",{attrs:{src:r(58),alt:""}})]),e._v(" "),o("h1",{staticClass:"page-title"},[e._v("欢迎注册")])]),e._v(" "),o("div",{staticClass:"box-card"},[o("div",{staticClass:"card-header"}),e._v(" "),o("div",{staticClass:"card-body"},[o("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"email"}},[o("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),o("el-form-item",[o("el-button",{staticClass:"register-btn",attrs:{type:"primary"},on:{click:e.formValidate}},[e._v("注册")])],1)],1)],1),e._v(" "),o("div",{staticClass:"card-footer"},[o("span",{staticClass:"login-text"},[e._v("\n            已有账户，直接\n            "),o("span",{staticClass:"go-login",on:{click:e.goToLogin}},[e._v("登录")])])])])])],1)],1)}),[],!1,null,"5e7b6884",null);t.default=component.exports}}]);