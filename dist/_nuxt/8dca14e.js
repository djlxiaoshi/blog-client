(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(t,e,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("390a73db",content,!0,{sourceMap:!1})},367:function(t,e,r){"use strict";r(365)},368:function(t,e,r){(e=r(16)(!1)).push([t.i,".app-tag[data-v-0c9aee91]{padding:1px 5px;border-radius:5px;font-size:14px;cursor:pointer}.app-tag .tag-icon[data-v-0c9aee91]{vertical-align:middle}.app-tag[data-v-0c9aee91] .el-tag{background:#fff;margin-right:0;padding:0;vertical-align:middle}",""]),t.exports=e},371:function(t,e,r){"use strict";var n={props:{},methods:{emitClick:function(){this.$emit("click")}}},o=(r(367),r(9)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"app-tag",style:{border:"1px solid "+this.$color.borderColor},on:{click:this.emitClick}},[e("i",{staticClass:"el-icon-discount tag-icon",style:{color:this.$color.activeColor}}),this._v(" "),e("el-tag",{style:{color:this.$color.defaultColor,border:"none"},attrs:{size:"mini"}},[this._t("default")],2)],1)}),[],!1,null,"0c9aee91",null);e.a=component.exports},415:function(t,e,r){var content=r(661);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("19fac8cf",content,!0,{sourceMap:!1})},660:function(t,e,r){"use strict";r(415)},661:function(t,e,r){(e=r(16)(!1)).push([t.i,".view-article-page[data-v-37304eb6]{padding:0 10px}.view-article-page .page-left[data-v-37304eb6]{padding:10px}.view-article-page .page-left .article-title[data-v-37304eb6]{margin-bottom:30px;text-align:center;font-size:30px}.view-article-page .page-left .article-details[data-v-37304eb6]{display:flex;align-items:center;margin-bottom:15px;font-size:13px}.view-article-page .page-left .article-details .details-item[data-v-37304eb6]{margin-right:8px}.view-article-page .page-left .tags-wrap[data-v-37304eb6] .el-tag{cursor:pointer;margin-right:10px}.view-article-page .page-left .article-content[data-v-37304eb6]{margin-top:30px;height:100%}",""]),t.exports=e},690:function(t,e,r){"use strict";r.r(e);r(35),r(13),r(10),r(5),r(23);var n=r(11),o=r(372),l=r(373),c=r.n(l),d=r(36),f=r(135),m=r.n(f),v=r(659),h=r.n(v),w=r(371);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={meta:{isPortalPage:!0},head:function(){return{title:"".concat(this.article.title||"文章详情"),titleTemplate:"%s - DJL箫氏的博客!",htmlAttrs:{lang:"en",amp:!0},meta:[{hid:"description",name:"description",content:"这是DJL箫氏的博客的文章详情页面"}]}},components:{VueShowdown:o.VueShowdown,Tag:w.a},data:function(){return{showdownHighlight:c.a,options:{omitExtraWLInCodeBlocks:!0,ghCodeBlocks:!0}}},computed:y({},Object(d.d)({article:function(t){return t.article.currentArticle}})),asyncData:function(t){var e=t.store,r=t.route;return e.dispatch("article/getArticle",r.params.id).catch((function(){}))},mounted:function(){var t=this.article.tags.map((function(t){return t.label}));new h.a({title:this.article.title,clientID:this.$globalConfig.gitalk.clientId,clientSecret:this.$globalConfig.gitalk.clientSecret,repo:this.$globalConfig.gitalk.repo,owner:"djlxiaoshi",admin:["djlxiaoshi"],body:this.article.content,labels:t,id:location.pathname,distractionFreeMode:!1}).render("comments")},methods:y(y({},Object(d.b)({getArticle:"article/getArticle"})),{},{formatTime:function(time){return time?m()(time).format("YYYY-MM-DD"):""},goToTagDetails:function(t){t&&this.$router.push("/tag/".concat(t._id))}})},_=(r(660),r(9)),component=Object(_.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view-article-page",style:{color:t.$color.defaultColor}},[r("el-row",{attrs:{type:"flex",justify:"space-around"}},[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("div",{staticClass:"page-left"},[r("div",{staticClass:"article-wrap"},[r("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"article-details"},[r("span",{staticClass:"details-item"},[t._v("\n              "+t._s(t.formatTime(t.article.createTime))+"\n            ")]),t._v(" "),r("span",{staticClass:"details-item"},[t._v("字数 "+t._s(t.article.wordCount))]),t._v(" "),r("span",{staticClass:"details-item"},[t._v("阅读 "+t._s(t.article.views))])]),t._v(" "),r("div",{staticClass:"tags-wrap"},t._l(t.article.tags,(function(e){return r("Tag",{key:e._id,style:{"margin-right":"10px"},on:{click:function(r){return t.goToTagDetails(e)}}},[t._v(t._s(e.label))])})),1),t._v(" "),r("div",{staticClass:"article-content"},[r("VueShowdown",{staticClass:"markdown-preview",attrs:{vueTemplate:!1,markdown:t.article.content||"",extensions:[t.showdownHighlight],options:t.options,flavor:"github"}})],1)]),t._v(" "),r("div",{staticStyle:{"margin-top":"20px"},attrs:{id:"comments"}})])])],1)],1)}),[],!1,null,"37304eb6",null);e.default=component.exports}}]);