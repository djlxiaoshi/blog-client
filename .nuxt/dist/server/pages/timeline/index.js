exports.ids = [31];
exports.modules = {

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("390a73db", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-tag[data-v-0c9aee91]{padding:1px 5px;border-radius:5px;font-size:14px;cursor:pointer}.app-tag .tag-icon[data-v-0c9aee91]{vertical-align:middle}.app-tag[data-v-0c9aee91] .el-tag{background:#fff;margin-right:0;padding:0;vertical-align:middle}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Tag/index.vue?vue&type=template&id=0c9aee91&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"app-tag",style:({ border: ("1px solid " + (_vm.$color.borderColor)) }),on:{"click":_vm.emitClick}},[_vm._ssrNode("<i class=\"el-icon-discount tag-icon\""+(_vm._ssrStyle(null,{
      color: _vm.$color.activeColor
    }, null))+" data-v-0c9aee91></i> "),_c('el-tag',{style:({
      color: _vm.$color.defaultColor,
      border: 'none'
    }),attrs:{"size":"mini"}},[_vm._t("default")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Tag/index.vue?vue&type=template&id=0c9aee91&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Tag/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  props: {},
  methods: {
    emitClick() {
      this.$emit('click');
    }

  }
});
// CONCATENATED MODULE: ./components/common/Tag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/Tag/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0c9aee91",
  "1c630079"
  
)

/* harmony default export */ var Tag = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2f6245c1", content, true, context)
};

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37147ef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37147ef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37147ef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37147ef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37147ef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".timeline-page[data-v-37147ef0]{padding:10px 20px}.timeline-page .page-header[data-v-37147ef0]{margin-bottom:20px}.timeline-page .page-header .page-title[data-v-37147ef0]{font-size:16px}.timeline-page .article-author[data-v-37147ef0],.timeline-page .article-title[data-v-37147ef0]{cursor:pointer;font-size:14px;margin-right:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/timeline/index.vue?vue&type=template&id=37147ef0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"timeline-page",style:({ color: _vm.$color.defaultColor })},[_vm._ssrNode("<div class=\"page-body\" data-v-37147ef0>","</div>",[_c('el-timeline',_vm._l((_vm.list),function(item,key){return _c('el-timeline-item',{key:key,attrs:{"timestamp":_vm.formatTime(item.createTime),"color":_vm.$color.activeColor,"placement":"top"}},[_c('div',[_c('span',{staticClass:"article-title",on:{"click":function($event){return _vm.goToArticle(item)}}},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('span',{staticClass:"article-author",style:({ color: _vm.$color.activeColor }),on:{"click":function($event){return _vm.goAuthorHomePage(item.createUser)}}},[_vm._v("\n            "+_vm._s(item.createUser.username)+"\n          ")]),_vm._v(" "),_vm._l((item.tags),function(tag){return _c('Tag',{key:tag._id,style:({ 'margin-right': '10px' }),on:{"click":function($event){return _vm.viewTag(tag)}}},[_vm._v(_vm._s(tag.label))])})],2)])}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"paginator\" data-v-37147ef0>","</div>",[_c('el-pagination',{attrs:{"total":_vm.total,"page-size":_vm.pageSize,"current-page":_vm.current,"layout":"prev, next"},on:{"current-change":_vm.loadMore}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/timeline/index.vue?vue&type=template&id=37147ef0&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(28);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: ./components/common/Tag/index.vue + 4 modules
var Tag = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/timeline/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var timelinevue_type_script_lang_js_ = ({
  meta: {
    isPortalPage: true
  },
  name: 'Timeline',
  head: {
    title: '时光轴',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [{
      hid: 'description',
      name: 'description',
      content: '这是DJL箫氏的博客的时光轴页面，用来记录我的往事时光轴'
    }]
  },
  components: {
    Tag: Tag["a" /* default */]
  },
  computed: { ...Object(external_vuex_["mapState"])({
      list: state => state.timeline.list,
      total: state => state.timeline.total,
      current: state => state.timeline.current,
      pageSize: state => state.timeline.pageSize
    })
  },

  asyncData({
    store,
    route
  }) {
    return store.dispatch('timeline/getTimelines');
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getTimelines: 'timeline/getTimelines'
    }),

    formatTime(timestamp) {
      return external_dayjs_default()(timestamp).format('YYYY-MM-DD');
    },

    goToArticle(article) {
      this.$router.push(`/article/${article._id}`);
    },

    goAuthorHomePage(author) {
      if (author) {
        this.$router.push(`/user/${author._id}`);
      }
    },

    viewTag(tag) {
      this.$router.push(`/tag/${tag._id}`);
    },

    loadMore(current) {
      this.getTimelines({
        current
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/timeline/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_timelinevue_type_script_lang_js_ = (timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/timeline/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_timelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37147ef0",
  "19d376f8"
  
)

/* harmony default export */ var timeline = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map