(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{486:function(t,e,n){var content=n(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2dff7c30",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n(486)},525:function(t,e,n){(e=n(14)(!1)).push([t.i,".tags-admin-page[data-v-13b482e5] .el-table__expanded-cell{padding:0 40px}.tags-admin-page .articles-wrap[data-v-13b482e5]{list-style:none}.tags-admin-page .articles-wrap .article-item[data-v-13b482e5]{display:flex;align-items:center;padding:10px 0}.tags-admin-page .articles-wrap .article-item .article-title[data-v-13b482e5]{margin-right:20px}",""]),t.exports=e},780:function(t,e,n){"use strict";n.r(e);n(39),n(25),n(19),n(10),n(30),n(40);var r=n(8),l=n(16),o=n(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"TagPage",head:{title:"标签管理",titleTemplate:"%s - DJL箫氏的博客!",htmlAttrs:{lang:"en",amp:!0},meta:[{hid:"description",name:"description",content:"这是DJL箫氏的博客-标签设置页面"}]},components:{},data:function(){return{currentTag:{},expandRowKeys:[],columns:[{type:"expand",slot:"expand"},{label:"名称",field:"label"},{label:"创建时间",width:180,field:"createTime",slot:"createTime"},{label:"创建者",field:"createUser",slot:"createUser"},{label:"操作",width:200,slot:"operate"}],tagList:[]}},computed:d({},Object(o.d)({tags:function(t){return t.tag.allTags}})),watch:{tags:function(t){this.tagList=t}},asyncData:function(t){return t.store.dispatch("tag/getAllTags")},mounted:function(){this.tagList=JSON.parse(JSON.stringify(this.tags))},methods:d(d(d({},Object(o.b)({getAllTags:"tag/getAllTags",getArticleByTagId:"article/getArticlesByTagId"})),Object(o.c)({setAllTags:"tag/setAllTags"})),{},{goToTagDetails:function(t){this.$router.push("/tag/".concat(t._id))},openOperateTagDialog:function(t){var e=this;this.currentTag=t,this.$alert("输入标签名",{buttons:{cancel:{text:"取消",value:null,visible:!0,closeModal:!0},confirm:{text:"保存",value:null,visible:!0,closeModal:!0}},content:{element:"input",attributes:{placeholder:"输入标签名",defaultValue:t?t.label:""}}}).then((function(n){null!==n&&(""!==n?t?e.updateTag(t._id,n):e.addTag(n):e.$notify.warning("标签名不能为空"))}))},openDeleteTagDialog:function(t){var e=this;this.$alert({title:"确定要删除此标签吗？",text:"一旦删除，您将不能撤销此操作",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&e.deleteTag(t._id)}))},addTag:function(t){this.$http({url:"/tag",method:"post",data:{label:t},showSuccessMsg:!0,showErrorMsg:!0}).response.then((function(){}),(function(){}))},updateTag:function(t,e){var n=this;this.$http({url:"/tag/".concat(t),method:"put",data:{label:e},showSuccessMsg:!0,showErrorMsg:!0}).response.then((function(){n.$set(n.currentTag,"label",e)}),(function(){}))},deleteTag:function(t){var e=this;this.$http({url:"/tag/".concat(t),method:"delete",showSuccessMsg:!0,showErrorMsg:!0}).response.then((function(){var t=e.tagList.indexOf(e.currentTag);e.tagList.splice(t,1)}),(function(){}))},expandChange:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._expanded=!t._expanded,!t._expanded){e.next=6;break}return e.next=4,n.getArticleByTagId(t._id);case 4:r=e.sent,n.$set(t,"articles",r);case 6:case"end":return e.stop()}}),e)})))()}})},h=(n(524),n(6)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags-admin-page"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.openOperateTagDialog()}}},[t._v("添加")]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tagList,"row-key":function(t){return t._id}},on:{"expand-change":t.expandChange}},t._l(t.columns,(function(e){return n("el-table-column",{key:e.field,attrs:{prop:e.field,label:e.label,width:e.width,type:e.type},scopedSlots:t._u([{key:"default",fn:function(r){return["expand"===e.slot?n("ul",{staticClass:"articles-wrap"},t._l(r.row.articles,(function(article){return n("li",{key:article._id,staticClass:"article-item"},[n("span",{staticClass:"article-title"},[t._v(t._s(article.title))])])})),0):"createUser"===e.slot?n("div",[t._v("\n          "+t._s(r.row[e.field].username)+"\n        ")]):"createTime"===e.slot?n("div",[n("span",{directives:[{name:"time",rawName:"v-time",value:r.row[e.field],expression:"scope.row[column['field']]"}]})]):"operate"===e.slot?n("div",[n("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.openOperateTagDialog(r.row)}}}),t._v(" "),n("el-button",{attrs:{type:"danger",plain:"",size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.openDeleteTagDialog(r.row)}}})],1):n("div",[t._v(t._s(r.row[e.field]))])]}}],null,!0)})})),1)],1)}),[],!1,null,"13b482e5",null);e.default=component.exports}}]);