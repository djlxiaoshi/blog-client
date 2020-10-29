exports.ids = [2];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3efe6b3e", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_742d06d0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_742d06d0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_742d06d0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_742d06d0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_742d06d0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".about-page[data-v-742d06d0]{padding:0 20px}.about-page .info-item[data-v-742d06d0]{margin:20px 0}.about-page .desc-info .item-label[data-v-742d06d0]{display:inline-block;margin-bottom:20px}.about-page .item-label[data-v-742d06d0]{padding-left:5px;padding-right:15px;line-height:1}.about-page .author-desc .item-value[data-v-742d06d0]{line-height:1.5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=742d06d0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page",style:({ color: _vm.$color.defaultColor })},[_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主昵称")]),_c('span',{staticClass:"item-value"},[_vm._v("DJL箫氏")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主邮箱")]),_c('span',{staticClass:"item-value"},[_vm._v("1281233206@qq.com")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主微信")]),_c('span',{staticClass:"item-value"},[_vm._v("DJLXS0307")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主Github")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":"https://github.com/djlxiaoshi/blog/issues"}},[_vm._v("djlxiaoshi")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主掘金")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":"https://juejin.im/user/57183fcac4c9710054bc2fcf"}},[_vm._v("DJL箫氏")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item",attrs:{"gutter":10}},[_c('el-col',[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("博主简书")]),_c('a',{staticClass:"item-value",style:({ color: _vm.$color.defaultColor }),attrs:{"href":"https://www.jianshu.com/u/d8657fcf1678"}},[_vm._v("DJL箫氏")])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"info-item desc-info",attrs:{"gutter":10}},[_c('el-col',{attrs:{"xs":24}},[_c('span',{staticClass:"item-label",style:({ 'border-left': ("4px solid " + (_vm.$color.activeColor)) })},[_vm._v("作者简介")])]),_vm._v(" "),_c('el-col',{attrs:{"xs":24}},[_c('span',{staticClass:"item-value"},[_vm._v("大家好，我的网名叫做DJL箫氏，毕业于湖北工业大学，目前为一名前端开发工程师，工作经验3年。现在Shopee从事前端开发工作，有兴趣加入Shopee的朋友可以添加我的微信")])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=742d06d0&scoped=true&

// EXTERNAL MODULE: ./assets/img/avatar.jpg
var avatar = __webpack_require__(8);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

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
//
//

/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
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
    return {
      avatarImage: avatar_default.a
    };
  }

});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "742d06d0",
  "5a59730c"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map