exports.ids = [2];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4db31dcd", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_352721d3_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_352721d3_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_352721d3_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_352721d3_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_352721d3_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".about-page[data-v-352721d3]{padding:0 20px}.about-page .info-item[data-v-352721d3]{margin:20px 0}.about-page .desc-info .item-label[data-v-352721d3]{display:inline-block;margin-bottom:20px}.about-page .item-label[data-v-352721d3]{padding-left:5px;padding-right:15px;line-height:1}.about-page .author-desc .item-value[data-v-352721d3]{line-height:1.5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=352721d3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page",style:({ color: _vm.$color.defaultColor })},[_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主昵称")]),_c('span',{staticClass:"item-value"},[_vm._v(_vm._s(_vm.user.username))])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主邮箱")]),_c('span',{staticClass:"item-value"},[_vm._v(_vm._s(_vm.user.email))])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主微信")]),_c('span',{staticClass:"item-value"},[_vm._v(_vm._s(_vm.user.wechat))])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主Github")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":_vm.user.github}},[_vm._v("djlxiaoshi")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主掘金")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":_vm.user.juejin}},[_vm._v("DJL箫氏")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主简书")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":_vm.user.jianshu}},[_vm._v("DJL箫氏")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item desc-info",attrs:{"gutter":10}},[_c('el-col',{attrs:{"xs":24}},[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("作者简介")])]),_vm._v(" "),_c('el-col',{attrs:{"xs":24}},[_c('span',{staticClass:"item-value"},[_vm._v(_vm._s(_vm.user.info))])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=352721d3&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  meta: {
    isPortalPage: true
  },
  head: {
    title: '关于本站',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'DJL箫氏的博客网站用于博主记录点点滴滴，包括技术、生活等等'
    }]
  },
  components: {},

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])({
      user: state => {
        var _state$system, _state$system$portalC;

        return (_state$system = state.system) === null || _state$system === void 0 ? void 0 : (_state$system$portalC = _state$system.portalConfig) === null || _state$system$portalC === void 0 ? void 0 : _state$system$portalC.portalUser;
      }
    })
  }
});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "352721d3",
  "5a59730c"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map