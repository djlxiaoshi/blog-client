exports.ids = [19];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2b552782", content, true, context)
};

/***/ }),

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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/empty.836e20d.png";

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_db291270_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_db291270_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_db291270_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_db291270_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_db291270_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-empty[data-v-db291270]{height:100%;min-height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px}.app-empty .empty-img[data-v-db291270]{text-align:center}.app-empty .empty-desc[data-v-db291270]{margin-top:20px;text-align:center;font-size:20px;font-weight:700;color:#ddd}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Empty/index.vue?vue&type=template&id=db291270&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-empty"},[_vm._ssrNode("<div class=\"empty-img\" data-v-db291270><img"+(_vm._ssrAttr("src",__webpack_require__(150)))+" alt data-v-db291270></div> <p class=\"empty-desc\" data-v-db291270>空空如也</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Empty/index.vue?vue&type=template&id=db291270&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Empty/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Emptyvue_type_script_lang_js_ = ({
  name: '',
  props: {
    isEmpty: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/common/Empty/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Emptyvue_type_script_lang_js_ = (Emptyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/Empty/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(151)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Emptyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "db291270",
  "4fff016c"
  
)

/* harmony default export */ var Empty = __webpack_exports__["a"] = (component.exports);

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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("39029bdc", content, true, context)
};

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_ad2ff172_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_ad2ff172_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_ad2ff172_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_ad2ff172_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_ad2ff172_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".comment-wrap .editor[data-v-ad2ff172] .CodeMirror-wrap{background:#f1f2ef;border:1px solid #ddd}.comment-wrap .edit-wrap .operate-wrap[data-v-ad2ff172]{margin-top:10px;display:flex;justify-content:flex-end}.comment-wrap .separator[data-v-ad2ff172]{border-left:5px solid #ec7259;padding-left:5px;margin:20px auto;font-weight:700}.comment-wrap .comment-list-wrap[data-v-ad2ff172]{padding-left:20px}.comment-wrap .comment-list-wrap .comment-item[data-v-ad2ff172]{list-style:none;padding:20px 0;border-bottom:1px solid #e5e5e5}.comment-wrap .comment-list-wrap .comment-item .comment-desc[data-v-ad2ff172]{font-size:12px}.comment-wrap .comment-list-wrap .comment-item .comment-desc span[data-v-ad2ff172]{margin-right:10px}.comment-wrap .comment-list-wrap .comment-item .comment-content[data-v-ad2ff172]{margin-top:12px;font-size:14px;line-height:1.5;word-break:break-word}.comment-wrap .comment-list-wrap .comment-item .operate-wrap .reply-btn[data-v-ad2ff172]{font-size:12px;color:#409eff;cursor:pointer}.comment-wrap .comment-list-wrap .comment-item .reply-wrap .btn-wrap[data-v-ad2ff172]{display:flex;margin-top:10px;justify-content:flex-end}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/portal/article/_id/Comment.vue?vue&type=template&id=ad2ff172&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],staticClass:"comment-wrap",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[_vm._ssrNode("<div class=\"edit-wrap\" data-v-ad2ff172>","</div>",[_c('Editor',{ref:"reply-editor",staticClass:"editor",attrs:{"viewMode":2,"editorConfig":{
        height: 100,
        lineNumbers: false
      },"defaultValue":_vm.defaultValue},on:{"input":_vm.onInputChange}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"operate-wrap\" data-v-ad2ff172>","</div>",[_c('el-button',{attrs:{"type":"danger","round":"","size":"mini"},on:{"click":function($event){return _vm.postComment()}}},[_vm._v("发布")]),_vm._ssrNode(" "),_c('el-button',{attrs:{"round":"","size":"mini"},on:{"click":function($event){return _vm.clear()}}},[_vm._v("清空")])],2)],2),_vm._ssrNode(" <div class=\"separator\" data-v-ad2ff172>精彩评论</div> "),(_vm.comments.length === 0)?_c('Empty'):_c('ul',{staticClass:"comment-list-wrap"},_vm._l((_vm.comments),function(comment,index){return _c('li',{key:comment._id,staticClass:"comment-item",attrs:{"id":("comment_id_" + (comment._id))}},[_c('div',{staticClass:"comment-desc"},[_c('span',{staticClass:"comment-floor"},[_vm._v(_vm._s(index + 1)+"楼")]),_vm._v(" "),_c('span',{staticClass:"comment-user"},[_vm._v(_vm._s(comment.createUser.username))]),_vm._v(" "),(comment.replyUser)?_c('span',[_c('span',[_vm._v("回复")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(comment.replyUser.username))])]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"comment-time"},[_vm._v(_vm._s(_vm.formatTime(comment.createTime)))])]),_vm._v(" "),_c('p',{staticClass:"comment-content",domProps:{"innerHTML":_vm._s(comment.content)}}),_vm._v(" "),_c('div',{staticClass:"operate-wrap"},[_c('a',{staticClass:"reply-btn",on:{"click":function($event){return _vm.toggleReplyVisible(true, true, index)}}},[_vm._v("回复")])]),_vm._v(" "),(comment._visible)?_c('div',{staticClass:"reply-wrap"},[_c('Editor',{staticClass:"editor",attrs:{"viewMode":2,"editorConfig":{
            height: 100,
            lineNumbers: false
          }},on:{"input":function($event){return _vm.onInputChange($event, true, index)}}}),_vm._v(" "),_c('div',{staticClass:"btn-wrap"},[_c('el-button',{ref:"loadingTarget",refInFor:true,attrs:{"type":"danger","round":"","size":"mini"},on:{"click":function($event){return _vm.postComment(true, index)}}},[_vm._v("回复")]),_vm._v(" "),_c('el-button',{attrs:{"round":"","size":"mini"},on:{"click":function($event){return _vm.toggleReplyVisible(false, true, index)}}},[_vm._v("取消")])],1)],1):_vm._e()])}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/portal/article/_id/Comment.vue?vue&type=template&id=ad2ff172&scoped=true&

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(31);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: ./components/common/Editor/Markdown.vue + 4 modules
var Markdown = __webpack_require__(164);

// EXTERNAL MODULE: ./components/common/Empty/index.vue + 4 modules
var Empty = __webpack_require__(155);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portal/article/_id/Comment.vue?vue&type=script&lang=js&
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



const PAGE_SIZE = 10;
/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: '',
  components: {
    Editor: Markdown["a" /* default */],
    Empty: Empty["a" /* default */]
  },

  data() {
    return {
      visible: false,
      actions: [],
      content: '',
      comments: [],
      commentsTotal: Infinity,
      currentPage: 1,
      pageSize: PAGE_SIZE,
      busy: false,
      defaultValue: ''
    };
  },

  methods: {
    formatTime(timestamp) {
      return external_dayjs_default()(timestamp).format('YYYY-MM-DD');
    },

    onInputChange(html, isReplyOthers, index) {
      if (isReplyOthers) {
        this.comments[index]._replyContent = html;
      } else {
        this.content = html;
      }
    },

    toggleReplyVisible(status, isReplyOthers, index) {
      if (isReplyOthers) {
        this.$set(this.comments[index], '_visible', status);
      } else {
        this.visible = status;
      }
    },

    getComments(currentPage) {
      const articleId = this.$route.params.id;

      if (articleId) {
        const {
          response
        } = this.$http({
          url: `/comments`,
          method: 'get',
          data: {
            pageSize: this.pageSize,
            currentPage,
            articleId
          },
          showSuccessMsg: false,
          showErrorMsg: true
        });
        return response.then(data => {
          this.commentsTotal = data.total;
          this.comments.splice((this.currentPage - 1) * this.pageSize);
          this.comments.push(...data.list); // 如果到了下一页，则增加

          if (this.comments.length % this.pageSize === 0) {
            this.currentPage++;
          }
        }, () => {});
      }
    },

    async loadMore() {
      if (this.comments.length < this.commentsTotal) {
        this.busy = true;
        await this.getComments(this.currentPage);
        this.busy = false;
      }
    },

    postComment(isReplyOthers, index) {
      const articleId = this.$route.params.id;

      if (articleId) {
        // 如果是回复其他评论
        if (isReplyOthers) {
          this.sendRequest({
            articleId,
            replyUser: this.comments[index].createUser._id,
            content: this.comments[index]._replyContent
          });
        } else {
          // 直接评论文章
          this.sendRequest({
            articleId,
            content: this.content
          });
        }
      }
    },

    clear() {
      this.defaultValue = '';
    },

    sendRequest(params) {
      const articleId = this.$route.params.id;

      if (articleId) {
        const {
          response
        } = this.$http({
          url: `/comment`,
          method: 'post',
          data: params,
          showSuccessMsg: true,
          showErrorMsg: true
        });
        response.then(comment => {
          this.clear();
          this.getComments(this.currentPage);
        }, () => {});
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/portal/article/_id/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/portal/article/_id/Comment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(252)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ad2ff172",
  "1cbf13a2"
  
)

/* harmony default export */ var Comment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Comment.js.map