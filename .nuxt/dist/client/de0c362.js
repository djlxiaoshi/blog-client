(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{496:function(t,e,n){var content=n(737);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2350f2a5",content,!0,{sourceMap:!1})},736:function(t,e,n){"use strict";n(496)},737:function(t,e,n){(e=n(14)(!1)).push([t.i,".tags-page .page-header[data-v-439499d4]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.tags-page .tag-list[data-v-439499d4]{display:flex;align-items:flex-start;align-items:center;flex-wrap:wrap}.tags-page .tag-list .tag-item[data-v-439499d4]{display:inline-block;padding:5px 10px;margin:5px;border-radius:5px}.tags-page .tag-list .tag-item .tag-name[data-v-439499d4]{margin-right:10px;cursor:pointer}.tags-page .tag-list .tag-item .operate-wrap[data-v-439499d4]{cursor:pointer}",""]),t.exports=e},789:function(t,e,n){"use strict";n.r(e);n(39),n(25),n(19),n(10),n(30);var r=n(16),o=n(17),c=n(92);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"portal",name:"TagPage",head:{title:"归档",titleTemplate:"%s - DJL箫氏的博客!",htmlAttrs:{lang:"en",amp:!0},meta:[{hid:"description",name:"description",content:"这是DJL箫氏的博客的归档页面"}]},components:{},data:function(){return{currentTag:{}}},computed:d(d({},Object(o.d)({tags:function(t){return t.tag.allTags},userInfo:function(t){return t.user.userInfo}})),{},{isAdmin:function(){return this.userInfo&&this.userInfo.role===c.a}}),asyncData:function(t){return t.store.dispatch("tag/getAllTags")},methods:d(d({},Object(o.b)({getAllTags:"tag/getAllTags"})),{},{goToTagDetails:function(t){this.$router.push("/tag/".concat(t._id))}})},m=(n(736),n(6)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags-page"},[n("div",{staticClass:"tag-list"},t._l(t.tags,(function(e,r){return n("div",{key:r,staticClass:"tag-item"},[n("i",{staticClass:"tag-icon el-icon-discount"}),t._v(" "),n("span",{staticClass:"tag-name",on:{click:function(n){return t.goToTagDetails(e)}}},[t._v(t._s(e.label))])])})),0)])}),[],!1,null,"439499d4",null);e.default=component.exports}}]);