exports.ids = [36];
exports.modules = {

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/test/turndown/index.vue?vue&type=template&id=2977e214&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test/turndown/index.vue?vue&type=template&id=2977e214&

// EXTERNAL MODULE: external "turndown"
var external_turndown_ = __webpack_require__(145);
var external_turndown_default = /*#__PURE__*/__webpack_require__.n(external_turndown_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test/turndown/index.vue?vue&type=script&lang=js&
//
//
//
//

const turndownService = new external_turndown_default.a({
  headingStyle: 'atx'
});
/* harmony default export */ var turndownvue_type_script_lang_js_ = ({
  mounted() {
    const md = turndownService.turndown('<div>vddav</div>'); // eslint-disable-next-line no-console

    console.log(md);
  }

});
// CONCATENATED MODULE: ./pages/test/turndown/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var test_turndownvue_type_script_lang_js_ = (turndownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/test/turndown/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  test_turndownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a64cc3b"
  
)

/* harmony default export */ var turndown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map