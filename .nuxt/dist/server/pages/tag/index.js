exports.ids = [32];
exports.modules = {

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2350f2a5", content, true, context)
};

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_439499d4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_439499d4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_439499d4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_439499d4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_439499d4_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tags-page .page-header[data-v-439499d4]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.tags-page .tag-list[data-v-439499d4]{display:flex;align-items:flex-start;align-items:center;flex-wrap:wrap}.tags-page .tag-list .tag-item[data-v-439499d4]{display:inline-block;padding:5px 10px;margin:5px;border-radius:5px}.tags-page .tag-list .tag-item .tag-name[data-v-439499d4]{margin-right:10px;cursor:pointer}.tags-page .tag-list .tag-item .operate-wrap[data-v-439499d4]{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/index.vue?vue&type=template&id=439499d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tags-page"},[_vm._ssrNode("<div class=\"tag-list\" data-v-439499d4>"+(_vm._ssrList((_vm.tags),function(tag,index){return ("<div class=\"tag-item\" data-v-439499d4><i class=\"tag-icon el-icon-discount\" data-v-439499d4></i> <span class=\"tag-name\" data-v-439499d4>"+_vm._ssrEscape(_vm._s(tag.label))+"</span></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tag/index.vue?vue&type=template&id=439499d4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/js/global/const.js
var global_const = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  layout: 'portal',
  name: 'TagPage',
  head: {
    title: '归档',
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
  },
  components: {},

  data() {
    return {
      currentTag: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      tags: state => state.tag.allTags,
      userInfo: state => state.user.userInfo
    }),

    isAdmin() {
      return this.userInfo && this.userInfo.role === global_const["a" /* ADMIN_ROLE */];
    }

  },

  asyncData({
    store
  }) {
    return store.dispatch('tag/getAllTags');
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getAllTags: 'tag/getAllTags'
    }),

    goToTagDetails(tag) {
      this.$router.push(`/tag/${tag._id}`);
    }

  }
});
// CONCATENATED MODULE: ./pages/tag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/tag/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(231)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "439499d4",
  "748cfbd9"
  
)

/* harmony default export */ var tag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map