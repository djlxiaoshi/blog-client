exports.ids = [9,10];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6c6aa55d", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b2be8ca", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_style_index_0_id_67fecfc8_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_style_index_0_id_67fecfc8_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_style_index_0_id_67fecfc8_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_style_index_0_id_67fecfc8_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Markdown_vue_vue_type_style_index_0_id_67fecfc8_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".markdown-editor[data-v-67fecfc8]{height:100%;display:flex}.markdown-editor[data-v-67fecfc8] .CodeMirror{margin:0 5px;font-size:18px;background-color:#f9f9f5;font-family:\"Consolas\",\"微软雅黑\"}.markdown-editor[data-v-67fecfc8] .CodeMirror-activeline-background{background-color:#f1f2ef}@media only screen and (max-width:991px){.markdown-editor .editor-wrap[data-v-67fecfc8]{width:100%!important}}.markdown-editor .textarea[data-v-67fecfc8]{display:none}.markdown-editor .editor-wrap[data-v-67fecfc8],.markdown-editor .preivew-wrap[data-v-67fecfc8]{height:100%;box-sizing:border-box}.markdown-editor .preivew-wrap[data-v-67fecfc8]{padding-left:10px;padding-right:10px;overflow-y:auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Editor/Markdown.vue?vue&type=template&id=67fecfc8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"markdown-editor"},[_vm._ssrNode("<div class=\"editor-wrap\""+(_vm._ssrStyle(null,{ width: _vm.editMode ? '100%' : '50%' }, { display: (_vm.editMode || _vm.editPreivewMode) ? '' : 'none' }))+" data-v-67fecfc8><textarea class=\"textarea\" data-v-67fecfc8>"+_vm._ssrEscape(_vm._s(_vm.defaultValue))+"</textarea></div> "),_vm._ssrNode("<div class=\"preivew-wrap hidden-sm-and-down\""+(_vm._ssrStyle(null,{ width: _vm.previewMode ? '100%' : '50%' }, { display: (_vm.previewMode || _vm.editPreivewMode) ? '' : 'none' }))+" data-v-67fecfc8>","</div>",[_c('VueShowdown',{staticClass:"markdown-preview",attrs:{"markdown":_vm.markdwonText,"options":_vm.showdownOptions,"extensions":[_vm.showdownHighlight],"flavor":"github"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Editor/Markdown.vue?vue&type=template&id=67fecfc8&scoped=true&

// EXTERNAL MODULE: external "vue-showdown"
var external_vue_showdown_ = __webpack_require__(141);

// EXTERNAL MODULE: external "showdown-highlight"
var external_showdown_highlight_ = __webpack_require__(142);
var external_showdown_highlight_default = /*#__PURE__*/__webpack_require__.n(external_showdown_highlight_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(143);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Editor/Markdown.vue?vue&type=script&lang=js&
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



const EDIT_PREVIEW_MODE = 1;
const EDIT_MODE = 2;
const PREVIEW_MODE = 3;
/* harmony default export */ var Markdownvue_type_script_lang_js_ = ({
  components: {
    VueShowdown: external_vue_showdown_["VueShowdown"]
  },
  props: {
    viewMode: {
      type: Number,
      default: EDIT_PREVIEW_MODE
    },
    defaultValue: {
      type: String,
      default: ''
    },
    editorConfig: {
      type: Object,
      default: () => ({
        lineNumbers: true,
        height: 100,
        width: '100%'
      })
    }
  },

  data() {
    return {
      markdwonText: this.defaultValue,
      showdownHighlight: external_showdown_highlight_default.a,
      showdownOptions: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      // syncScroll options
      enableSyncScroll: true,
      // 开启同步滚动
      editorScrolling: false,
      previewerScrolling: false,
      editor: null
    };
  },

  computed: {
    editMode() {
      return this.viewMode === EDIT_MODE;
    },

    previewMode() {
      return this.viewMode === PREVIEW_MODE;
    },

    editPreivewMode() {
      return this.viewMode === EDIT_PREVIEW_MODE;
    }

  },
  watch: {
    defaultValue(value) {
      this.markdwonText = value;
      this.editor.setValue(value);
    }

  },

  mounted() {
    if (false) {}
  },

  methods: {
    init() {},

    syncPreviewerScroll() {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }

        this.previewerScrolling = true;
        const scrollObj = this.editor.getScrollInfo();
        const percent = scrollObj.top / (scrollObj.height - scrollObj.clientHeight);
        const previewer = this.$refs.preview;

        if (previewer) {
          previewer.scrollTop = percent * (previewer.scrollHeight - previewer.clientHeight);
        }
      }
    },

    syncEditorScroll() {
      if (this.enableSyncScroll) {
        if (this.previewerScrolling) {
          this.previewerScrolling = false;
          return;
        }

        this.editorScrolling = true;
        const scrollElement = this.$refs.preview;
        const percent = scrollElement.scrollTop / (scrollElement.scrollHeight - scrollElement.clientHeight);
        const scrollObj = this.editor.getScrollInfo();
        const editorTop = percent * (scrollObj.height - scrollObj.clientHeight);
        this.editor.scrollTo(null, editorTop);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/common/Editor/Markdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Editor_Markdownvue_type_script_lang_js_ = (Markdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/Editor/Markdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Editor_Markdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67fecfc8",
  "5e6c4ccd"
  
)

/* harmony default export */ var Markdown = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".operate-bar{display:flex;align-items:center;flex:0 0 40px;padding-left:40px;background:#ddd}.operate-bar .operate-icon{padding:0 15px;cursor:pointer}.operate-bar .operate-icon:hover{color:#5cb6ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5fe9f0b8", content, true, context)
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/components/OperateBar/index.vue?vue&type=template&id=02f01aae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"operate-bar"},[_c('el-button',{style:({ color: _vm.$color.defaultColor }),attrs:{"type":"text"},on:{"click":function($event){return _vm.emitEvent('edit')}}},[_vm._v("编辑")]),_vm._ssrNode(" "),_c('el-button',{style:({ color: _vm.$color.defaultColor }),attrs:{"type":"text"},on:{"click":function($event){return _vm.emitEvent('preview')}}},[_vm._v("预览")]),_vm._ssrNode(" "),_c('el-button',{style:({ color: _vm.$color.defaultColor }),attrs:{"type":"text"},on:{"click":function($event){return _vm.emitEvent('edit-preview')}}},[_vm._v("分栏")]),_vm._ssrNode(" "),_c('el-button',{style:({ color: _vm.$color.failedColor }),attrs:{"type":"text"},on:{"click":function($event){return _vm.emitEvent('save')}}},[_vm._v("保存")]),_vm._ssrNode(" "),_c('el-button',{style:({ color: _vm.$color.successColor }),attrs:{"type":"text"},on:{"click":function($event){return _vm.emitEvent('publish')}}},[_vm._v("发布")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/post/components/OperateBar/index.vue?vue&type=template&id=02f01aae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/components/OperateBar/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var OperateBarvue_type_script_lang_js_ = ({
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitEvent(actionType) {
      this.$emit('onClick', actionType);
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/post/components/OperateBar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OperateBarvue_type_script_lang_js_ = (OperateBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/post/components/OperateBar/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OperateBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b232020"
  
)

/* harmony default export */ var OperateBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_13e5287a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_13e5287a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_13e5287a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_13e5287a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_13e5287a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".create-article-page[data-v-13e5287a]{position:fixed;box-sizing:border-box;left:0;right:0;bottom:0;top:0;z-index:1001;background:#fff;display:flex;flex-direction:column}.create-article-page .article-title[data-v-13e5287a]{flex:0 0 60px}.create-article-page .operate-bar[data-v-13e5287a]{display:flex;align-items:center;flex:0 0 40px;background:#ddd}.create-article-page .operate-bar .operate-icon[data-v-13e5287a]{padding:0 15px;cursor:pointer}.create-article-page .operate-bar .operate-icon[data-v-13e5287a]:hover{color:#5cb6ff}.create-article-page .article-content[data-v-13e5287a]{flex:1;height:calc(100vh - 100px)}.create-article-page[data-v-13e5287a] .CodeMirror{height:100%!important}.create-article-page[data-v-13e5287a] .el-input .el-input__inner{height:60px;line-height:60px;border-radius:0;border:none;font-weight:700;font-size:18px}.create-article-page[data-v-13e5287a] .el-input .el-input__inner:focus{outline:none;border-color:#ddd}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/_id.vue?vue&type=template&id=13e5287a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"create-article-page"},[_vm._ssrNode("<div class=\"article-title\" data-v-13e5287a>","</div>",[_c('el-input',{attrs:{"placeholder":"请输入文章标题"},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}})],1),_vm._ssrNode(" "),_c('OperateBar',{attrs:{"config":_vm.operateConfig},on:{"onClick":_vm.operateAction}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"article-content\" data-v-13e5287a>","</div>",[_c('Editor',{ref:"editor",attrs:{"defaultValue":_vm.initContent,"viewMode":_vm.viewMode},on:{"input":_vm.getEditorValue}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/post/_id.vue?vue&type=template&id=13e5287a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./pages/admin/post/components/OperateBar/index.vue + 4 modules
var OperateBar = __webpack_require__(202);

// EXTERNAL MODULE: ./components/common/Editor/Markdown.vue + 4 modules
var Markdown = __webpack_require__(164);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/_id.vue?vue&type=script&lang=js&
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



const EDIT_PREVIEW_MODE = 1;
const EDIT_MODE = 2;
const PREVIEW_MODE = 3;
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head: {
    title: '写文章',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [{
      hid: 'description',
      name: 'description',
      content: '这是DJL箫氏的博客的文章编辑页面'
    }]
  },
  components: {
    Editor: Markdown["a" /* default */],
    OperateBar: OperateBar["default"]
  },

  data() {
    return {
      viewMode: EDIT_PREVIEW_MODE,
      operateConfig: [{
        actionType: 'edit',
        icon: 'icon-bianji',
        tips: '编辑模式'
      }, {
        actionType: 'preview',
        icon: 'icon-yulan',
        tips: '预览模式'
      }, {
        actionType: 'edit-preview',
        icon: 'icon-fenlan',
        tips: '编辑/预览'
      }, {
        actionType: 'publish',
        icon: 'icon-fabu',
        tips: '发布'
      }],
      title: '',
      initContent: '',
      content: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      article: state => state.article.currentArticle
    }),

    articleId() {
      return this.$route.params.id;
    },

    isEditMode() {
      return this.$route.params.id;
    }

  },
  watch: {
    article(value) {
      this.title = value.title || '';
      this.initContent = value.content || '';
    }

  },

  mounted() {
    if (this.articleId) {
      this.getArticle(this.articleId);
    } else {
      this.setCurrentArticle({});
    }
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // TODO 直接保存
    next();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getArticle: 'article/getArticleByUser'
    }),
    ...Object(external_vuex_["mapMutations"])({
      setCurrentArticle: 'article/setCurrentArticle'
    }),

    operateAction(actionType) {
      switch (actionType) {
        case 'edit':
          {
            this.viewMode = EDIT_MODE;
            break;
          }

        case 'preview':
          {
            this.viewMode = PREVIEW_MODE;
            break;
          }

        case 'edit-preview':
          {
            this.viewMode = EDIT_PREVIEW_MODE;
            break;
          }

        case 'save':
          {
            this.handleParams(true);
            break;
          }

        case 'publish':
          {
            this.handleParams(false);
          }
      }
    },

    getEditorValue(content) {
      this.content = content;
    },

    handleParams(isPublish) {
      const title = this.title;

      if (!title.trim()) {
        this.$notify.warning('文章标题不能为空');
        return;
      }

      const params = {
        title: title.trim(),
        thumbnail: this.getThumbnail(),
        abstract: this.getAbstract(),
        content: this.getContent(),
        status: isPublish ? 1 : 0
      };
      const message = isPublish ? '文章发布成功' : '文章保存成功';

      if (this.isEditMode) {
        this.updateArticle(params, message, isPublish);
      } else {
        this.createArticle(params, isPublish);
      }
    },

    /**
     * 获取文章内容
     * @returns {*|string}
     */
    getContent() {
      return this.content;
    },

    /**
     * 获取文章缩略图
     * @returns {string}
     */
    getThumbnail() {
      let imgSrc = '';
      const editorDom = this.$refs.editor.$el;
      const contentDom = editorDom.querySelector('.markdown-preview');

      if (contentDom) {
        const firstImageDom = contentDom.getElementsByTagName('img')[0];

        if (firstImageDom) {
          imgSrc = firstImageDom.src;
        }
      }

      return imgSrc;
    },

    /**
     * 获取文章摘要
     * @returns {string}
     */
    getAbstract() {
      const editorDom = this.$refs.editor.$el;
      const contentDom = editorDom.querySelector('.markdown-preview');

      if (contentDom) {
        let abstract = '';
        const paragraphList = contentDom.getElementsByTagName('p');
        const paragraphArr = Array.from(paragraphList);

        for (const item of paragraphArr) {
          abstract += item.textContent.replace(/[\r\n]/g, ''); // 去除回车换行

          if (abstract.length >= 100) {
            return abstract.substr(0, 100);
          }
        }

        return abstract;
      }
    },

    /**
     * 新增文章
     * @param params
     */
    createArticle(params, isPublish) {
      const {
        response
      } = this.$http({
        url: '/article',
        data: params,
        method: 'post',
        showSuccessMsg: true,
        showErrorMsg: true
      });
      response.then(article => {
        if (isPublish) {
          this.$router.push('/admin/article');
        } else {
          this.$router.replace(`/post/${article._id}`);
        }
      }, () => {});
    },

    /**
     * 更新文章
     * @param params
     */
    updateArticle(params, message, isPublish) {
      const {
        response
      } = this.$http({
        url: `/article/${this.articleId}`,
        data: params,
        method: 'put',
        showSuccessMsg: message,
        showErrorMsg: true
      });
      response.then(() => {
        if (isPublish) {
          this.$router.push('/admin/article');
        }
      }, () => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/post/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/post/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13e5287a",
  "be84e702"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map