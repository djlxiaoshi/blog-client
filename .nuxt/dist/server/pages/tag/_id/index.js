exports.ids = [31];
exports.modules = {

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c8c1c680", content, true, context)
};

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39ba2fff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39ba2fff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39ba2fff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39ba2fff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39ba2fff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tag-details-page[data-v-39ba2fff]{padding:0 10px}.tag-details-page .article-item[data-v-39ba2fff]{list-style:none;padding:10px 0}.tag-details-page .article-author[data-v-39ba2fff],.tag-details-page .article-name[data-v-39ba2fff]{margin:0 5px;cursor:pointer}.tag-details-page .article-create-time[data-v-39ba2fff]{margin:0 5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_id/index.vue?vue&type=template&id=39ba2fff&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tag-details-page",style:({ color: _vm.$color.defaultColor })},[_vm._ssrNode("<h2 class=\"tag-name\" data-v-39ba2fff>"+_vm._ssrEscape(_vm._s(_vm.tag.label))+"</h2> <ul class=\"article-list\" data-v-39ba2fff>"+(_vm._ssrList((_vm.articles),function(article){return ("<li class=\"article-item\" data-v-39ba2fff><span class=\"article-name hvr-underline-from-center\" data-v-39ba2fff>"+_vm._ssrEscape(_vm._s(article.title))+"</span> <span class=\"article-author hvr-underline-from-center\" data-v-39ba2fff>"+_vm._ssrEscape(_vm._s(article.createUser.username))+"</span> <span class=\"article-create-time\" data-v-39ba2fff>"+_vm._ssrEscape(_vm._s(_vm.formatTime(article.createTime)))+"</span></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tag/_id/index.vue?vue&type=template&id=39ba2fff&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/js/utils/tools.js
var tools = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_id/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'portal',

  head() {
    return {
      title: `${this.tag.label || '标签详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [{
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的归档页面'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      articles: state => state.article.tagArticles,
      tag: state => state.tag.currentTag
    })
  },

  asyncData({
    store,
    route
  }) {
    return Promise.all([store.dispatch('tag/getTag', route.params.id), store.dispatch('article/getArticlesByTagId', route.params.id)]);
  },

  methods: {
    formatTime(time) {
      return Object(tools["a" /* formatTime */])(time);
    },

    goAuthorHomePage(author) {
      if (author) {
        this.$router.push(`/portal/about`);
      }
    },

    goToArticleDetailsPage(article) {
      if (article._id) {
        this.$router.push(`/article/${article._id}`);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/tag/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/tag/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(258)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39ba2fff",
  "bb3afb78"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map