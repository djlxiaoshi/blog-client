exports.ids = [20];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("390a73db", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c9aee91_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-tag[data-v-0c9aee91]{padding:1px 5px;border-radius:5px;font-size:14px;cursor:pointer}.app-tag .tag-icon[data-v-0c9aee91]{vertical-align:middle}.app-tag[data-v-0c9aee91] .el-tag{background:#fff;margin-right:0;padding:0;vertical-align:middle}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 156:
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
  
  var style0 = __webpack_require__(153)
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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("496d7bfd", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a4e44ca_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a4e44ca_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a4e44ca_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a4e44ca_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a4e44ca_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".view-article-page[data-v-2a4e44ca]{padding:0 10px}.view-article-page .page-left[data-v-2a4e44ca]{padding:10px}.view-article-page .page-left .article-title[data-v-2a4e44ca]{margin-bottom:30px;text-align:center;font-size:30px}.view-article-page .page-left .article-details[data-v-2a4e44ca]{display:flex;align-items:center;margin-bottom:15px;font-size:13px}.view-article-page .page-left .article-details .details-item[data-v-2a4e44ca]{margin-right:8px}.view-article-page .page-left .tags-wrap[data-v-2a4e44ca] .el-tag{cursor:pointer;margin-right:10px}.view-article-page .page-left .article-content[data-v-2a4e44ca]{margin-top:30px;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/portal/article/_id/index.vue?vue&type=template&id=2a4e44ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view-article-page",style:({ color: _vm.$color.defaultColor })},[_c('el-row',{attrs:{"type":"flex","justify":"space-around"}},[_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":24,"xl":24}},[_c('div',{staticClass:"page-left"},[_c('div',{staticClass:"article-wrap"},[_c('h1',{staticClass:"article-title"},[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('div',{staticClass:"article-details"},[_c('span',{staticClass:"details-item"},[_vm._v("\n              "+_vm._s(_vm.formatTime(_vm.article.createTime))+"\n            ")]),_vm._v(" "),_c('span',{staticClass:"details-item"},[_vm._v("字数 "+_vm._s(_vm.article.wordCount))]),_vm._v(" "),_c('span',{staticClass:"details-item"},[_vm._v("阅读 "+_vm._s(_vm.article.views))])]),_vm._v(" "),_c('div',{staticClass:"tags-wrap"},_vm._l((_vm.article.tags),function(tag){return _c('Tag',{key:tag._id,style:({ 'margin-right': '10px' }),on:{"click":function($event){return _vm.goToTagDetails(tag)}}},[_vm._v(_vm._s(tag.label))])}),1),_vm._v(" "),_c('div',{staticClass:"article-content"},[_c('VueShowdown',{staticClass:"markdown-preview",attrs:{"vueTemplate":false,"markdown":_vm.article.content || '',"extensions":[_vm.showdownHighlight],"options":_vm.options,"flavor":"github"}})],1)]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"20px"},attrs:{"id":"comments"}})])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/portal/article/_id/index.vue?vue&type=template&id=2a4e44ca&scoped=true&

// EXTERNAL MODULE: external "vue-showdown"
var external_vue_showdown_ = __webpack_require__(141);

// EXTERNAL MODULE: external "showdown-highlight"
var external_showdown_highlight_ = __webpack_require__(142);
var external_showdown_highlight_default = /*#__PURE__*/__webpack_require__.n(external_showdown_highlight_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(31);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "gitalk"
var external_gitalk_ = __webpack_require__(144);
var external_gitalk_default = /*#__PURE__*/__webpack_require__.n(external_gitalk_);

// EXTERNAL MODULE: ./components/common/Tag/index.vue + 4 modules
var Tag = __webpack_require__(156);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portal/article/_id/index.vue?vue&type=script&lang=js&
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
//




 // import Comment from './Comment';


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: `${this.article.title || '文章详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [{
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的文章详情页面'
      }]
    };
  },

  components: {
    VueShowdown: external_vue_showdown_["VueShowdown"],
    // Comment,
    Tag: Tag["a" /* default */]
  },

  data() {
    return {
      showdownHighlight: external_showdown_highlight_default.a,
      options: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      openTags: false,
      selectTags: [],
      articleTags: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      article: state => state.article.currentArticle,
      tags: state => state.tag.allTags
    }),

    author() {
      return this.article.createUser;
    }

  },

  asyncData({
    store,
    route
  }) {
    return store.dispatch('article/getArticle', route.params.id);
  },

  mounted() {
    const gitalk = new external_gitalk_default.a({
      title: this.article.content,
      clientID: '0defc6b7dde11263449a',
      clientSecret: 'c91f6f8a6b463251f6185b85b22c9bc37d8b65ab',
      repo: 'blog',
      // The repository of store comments,
      owner: 'djlxiaoshi',
      admin: ['djlxiaoshi'],
      id: location.pathname,
      // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
      // For more available options, check out the documentation below

    });
    gitalk.render('comments');
    this.articleTags = Array.isArray(this.article.tags) ? this.article.tags.map(tag => tag._id) : [];
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getArticle: 'article/getArticle',
      getAllTags: 'tag/getAllTags'
    }),
    ...Object(external_vuex_["mapMutations"])({
      setCurrentArticle: 'article/setCurrentArticle'
    }),

    formatTime(time) {
      return time ? external_dayjs_default()(time).format('YYYY-MM-DD') : '';
    },

    isChecked(tag) {
      const flag = !!this.article.tags.find(articleTag => articleTag._id === tag._id);
      return flag;
    },

    handleTagsParams() {
      this.saveArticleTags(this.articleTags);
    },

    goToTagDetails(tag) {
      if (tag) {
        this.$router.push(`/tag/${tag._id}`);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/portal/article/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/portal/article/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(248)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a4e44ca",
  "2c0f6916"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map