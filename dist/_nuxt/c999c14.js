(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{395:function(e,t,l){var content=l(425);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(17).default)("8a62906a",content,!0,{sourceMap:!1})},424:function(e,t,l){"use strict";l(395)},425:function(e,t,l){(t=l(16)(!1)).push([e.i,".crawl-article-page[data-v-98471aca]{padding:0 20px}.crawl-article-page .page-header .desc[data-v-98471aca]{font-size:14px;color:#999}.crawl-article-page .tempalte-selector[data-v-98471aca]{width:100%}.crawl-article-page .page-body .row[data-v-98471aca]{flex-wrap:wrap}",""]),e.exports=t},670:function(e,t,l){"use strict";l.r(t);var r={head:{title:"文章爬取",titleTemplate:"%s - DJL箫氏的博客!",htmlAttrs:{lang:"en",amp:!0},meta:[{hid:"description",name:"description",content:"这是DJL箫氏的博客的文章爬取页面，用来爬取掘金、GitHub、简书等平台文章"}]},components:{},data:function(){return{templateOptions:[{label:"掘金",value:1},{label:"Github",value:2},{label:"简书",value:3}],ruleForm:{url:"",template:1},rules:{url:[{required:!0,message:"请输入待提取文章链接",trigger:"blur"}]}}},mounted:function(){},methods:{formValidate:function(){var e=this;this.$refs.form&&this.$refs.form.validate((function(t){if(!t)return!1;e.crwalArticle()}))},crwalArticle:function(){var e=this;return this.$http({url:"/crawl",method:"get",data:{template:this.ruleForm.template,articleUrl:this.ruleForm.url},loading:".app-body",showSuccessMsg:!1,showErrorMsg:!0}).response.then((function(data){e.$router.push("/post/".concat(data._id))}),(function(){}))}}},o=(l(424),l(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"crawl-article-page"},[e._m(0),e._v(" "),l("div",{staticClass:"page-body"},[l("el-form",{ref:"form",attrs:{model:e.ruleForm,rules:e.rules}},[l("el-row",{staticClass:"row",attrs:{type:"flex",justify:"space-between"}},[l("el-col",{attrs:{xs:24,sm:24,md:4,lg:4,xl:4}},[l("el-form-item",{attrs:{prop:"template"}},[l("el-select",{staticClass:"template-selector",attrs:{placeholder:"请选择"},model:{value:e.ruleForm.template,callback:function(t){e.$set(e.ruleForm,"template",t)},expression:"ruleForm.template"}},e._l(e.templateOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:24,md:19,lg:19,xl:19}},[l("el-form-item",{attrs:{prop:"url"}},[l("el-input",{attrs:{placeholder:"请输入文章链接"},model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1)],1)],1)],1),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.formValidate}},[e._v("提取文章")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-header"},[t("p",{staticClass:"desc"},[this._v("请输入要提取的文章链接")])])}],!1,null,"98471aca",null);t.default=component.exports}}]);