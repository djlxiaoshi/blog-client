(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(t,e,r){var content=r(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("f30e90d4",content,!0,{sourceMap:!1})},359:function(t,e,r){t.exports=r.p+"img/loading.b0d58bb.svg"},360:function(t,e,r){"use strict";r(358)},361:function(t,e,r){(e=r(16)(!1)).push([t.i,".app-loading{display:flex;align-items:center;justify-content:center;height:100%;width:100%}.app-loading img{width:15%}.app-loading img.mini{width:5%}.app-loading img.small{width:10%}.app-loading img.normal{width:15%}.app-loading img.large{width:20%}",""]),t.exports=e},362:function(t,e,r){"use strict";r(57);var l={props:{size:{type:String,default:"normal",validator:function(t){return["mini","small","normal","large"].includes(t)?t:(console.warn("size 属性只能为mini|small|normal|large"),"normal")}}}},n=(r(360),r(9)),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-loading"},[e("img",{class:[this.size],attrs:{src:r(359),alt:""}})])}),[],!1,null,null,null);e.a=component.exports},399:function(t,e,r){var content=r(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("726be45d",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(399)},433:function(t,e,r){(e=r(16)(!1)).push([t.i,".article-title[data-v-04510def]{font-weight:600}",""]),t.exports=e},674:function(t,e,r){"use strict";r.r(e);var l={components:{AppLoading:r(362).a},data:function(){return{rules:{},article:{title:"",abstract:"",thumbnail:"",thumbnailKey:""},tags:[],articleTags:[]}},mounted:function(){this.getArticle(),this.getAllTags()},methods:{getArticle:function(){var t=this;return this.$http({url:"/article/getOneByUser",data:{id:this.$route.params.id},method:"get",showSuccessMsg:!1,showErrorMsg:!1}).response.then((function(article){t.articleTags=Array.isArray(article.tags)?article.tags.map((function(t){return t._id})):[],t.article=article}),(function(t){}))},getAllTags:function(){var t=this;return this.$http({url:"/tags",method:"get",showSuccessMsg:!1,showErrorMsg:!1}).response.then((function(e){t.tags=e}),(function(t){return t}))},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,r="image/png"===t.type,l=t.size/1024<300;return e||r||this.$notify.error("上传头像图片只能是 JPG或者PNG 格式!"),l||this.$notify.error("上传头像图片大小不能超过 300KB!"),(e||r)&&l},handleSuccess:function(t){this.article.thumbnail="".concat(t.data.thumbnail,"?_time=").concat(Date.now()),this.article.thumbnailKey=t.data.thumbnailKey,this.$notify.success("上传成功")},save:function(){var t=this;this.$http({url:"/article/".concat(this.$route.params.id),method:"put",data:{title:this.article.title,abstract:this.article.abstract,tags:this.articleTags},showSuccessMsg:"标签设置成功",showErrorMsg:!0}).response.then((function(){t.getArticle(t.$route.params.id)}),(function(){}))}}},n=(r(432),r(9)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-config-page"},[r("el-form",{ref:"form",attrs:{rules:t.rules,model:t.article,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{label:"标题",prop:"abstract"}},[r("el-input",{model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"缩略图",prop:"url"}},[r("el-upload",{ref:"upload",staticClass:"upload-avatar-input",attrs:{data:{prevThumbnailKey:t.article.thumbnailKey||"",articleId:t.$route.params.id},action:t.$globalConfig.SERVER_ADDRESS+"/api/article/thumbnail","with-credentials":!0,"show-file-list":!1,"before-upload":t.beforeAvatarUpload,"on-success":t.handleSuccess,"list-type":"text"}},[r("el-image",{staticClass:"avatar-image",attrs:{src:t.article.thumbnail}},[r("AppLoading",{attrs:{slot:"placeholder",size:"large"},slot:"placeholder"}),t._v(" "),r("div",{staticClass:"error-slot",attrs:{slot:"error"},slot:"error"},[r("span",[t._v("点击上传")])])],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"简介",prop:"abstract"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.article.abstract,callback:function(e){t.$set(t.article,"abstract",e)},expression:"article.abstract"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"标签",prop:"tag"}},[r("el-checkbox-group",{model:{value:t.articleTags,callback:function(e){t.articleTags=e},expression:"articleTags"}},t._l(t.tags,(function(e){return r("el-checkbox",{key:e._id,attrs:{label:e._id}},[t._v(t._s(e.label))])})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"success",size:"small",plain:""},on:{click:t.save}},[t._v("\n        保存\n      ")])],1)],1)],1)}),[],!1,null,"04510def",null);e.default=component.exports}}]);