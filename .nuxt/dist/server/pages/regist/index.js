exports.ids = [30];
exports.modules = {

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4289c070", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e7b6884_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e7b6884_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e7b6884_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e7b6884_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e7b6884_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-register[data-v-5e7b6884]{position:fixed;left:0;right:0;top:0;bottom:0;padding:20px;z-index:1001;background:#fff}.app-register[data-v-5e7b6884] .el-row{height:100%}.app-register[data-v-5e7b6884] .el-row .el-col{max-width:350px}.app-register .page-header .page-logo[data-v-5e7b6884]{text-align:center;margin-bottom:40px}.app-register .page-header .page-logo img[data-v-5e7b6884]{border-radius:50%;width:100px;height:100px}.app-register .page-header .page-title[data-v-5e7b6884]{font-size:20px}.app-register .box-card[data-v-5e7b6884] .el-form-item .el-input__inner{border-radius:50px}.app-register .box-card .register-btn[data-v-5e7b6884]{width:100%;border-radius:20px}.app-register .box-card .card-footer[data-v-5e7b6884]{display:flex}.app-register .box-card .card-footer .login-text[data-v-5e7b6884]{font-size:14px;margin-left:auto;color:#999}.app-register .box-card .card-footer .go-login[data-v-5e7b6884]{cursor:pointer;color:#66b1ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/regist/index.vue?vue&type=template&id=5e7b6884&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"app-register"},[_c('el-row',{attrs:{"type":"flex","justify":"center","align":"middle"}},[_c('el-col',{attrs:{"xs":24,"sm":10,"md":8,"lg":8,"xl":8}},[_c('div',{staticClass:"page-header"},[_c('div',{staticClass:"page-logo"},[_c('img',{attrs:{"src":__webpack_require__(8),"alt":""}})]),_vm._v(" "),_c('h1',{staticClass:"page-title"},[_vm._v("欢迎注册")])]),_vm._v(" "),_c('div',{staticClass:"box-card"},[_c('div',{staticClass:"card-header"}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.form}},[_c('el-form-item',{attrs:{"prop":"username"}},[_c('el-input',{attrs:{"placeholder":"请输入用户名"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('el-input',{attrs:{"type":"password","placeholder":"请输入密码"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"email"}},[_c('el-input',{attrs:{"placeholder":"请输入邮箱"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{staticClass:"register-btn",attrs:{"type":"primary"},on:{"click":_vm.formValidate}},[_vm._v("注册")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('span',{staticClass:"login-text"},[_vm._v("\n            已有账户，直接\n            "),_c('span',{staticClass:"go-login",on:{"click":_vm.goToLogin}},[_vm._v("登录")])])])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/regist/index.vue?vue&type=template&id=5e7b6884&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/regist/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var registvue_type_script_lang_js_ = ({
  name: 'Register',
  meta: {
    isClosed: true
  },
  head: {
    title: '注册',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [{
      hid: 'description',
      name: 'description',
      content: '这是DJL箫氏的博客的注册页'
    }]
  },

  data() {
    const checkEmail = (rule, value, callback) => {
      value = value.trim();
      const regexp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

      if (!regexp.test(value)) {
        callback(new Error('请输入正确的邮箱地址'));
      } else {
        callback();
      }
    }; // const checkEmailExsit = (rule, value, callback) => {
    //   value = value.trim();
    //   const { xhrInstance } = this.$http({
    //     url: '/getUserBy',
    //     data: {
    //       userMsg: value,
    //       getUserMethod: 'USER_EMAIL'
    //     }
    //   });
    //   xhrInstance.then((res) => {
    //     if (res) {
    //       callback(new Error('邮箱已存在'));
    //     } else {
    //       callback();
    //     }
    //   });
    // };


    return {
      form: {
        username: '',
        password: '',
        email: ''
      },
      rules: {
        username: [{
          required: true,
          trigger: 'blur',
          message: '请输入用户名'
        }],
        password: [{
          required: true,
          trigger: 'blur',
          message: '请输入密码'
        }],
        email: [{
          required: true,
          trigger: 'blur',
          message: '请输入邮箱'
        }, {
          trigger: 'blur',
          validator: checkEmail
        } // { trigger: 'blur', validator: checkEmailExsit }
        ]
      }
    };
  },

  methods: {
    register() {
      const {
        response
      } = this.$http({
        method: 'post',
        url: '/user',
        data: {
          username: this.form.username,
          password: this.form.password,
          email: this.form.email
        },
        showErrorMsg: true,
        showSuccessMsg: true
      });
      response.then(() => {
        this.goToLogin();
      }, () => {});
    },

    formValidate() {
      if (this.$refs.form) {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.register();
          }
        });
      }
    },

    goToLogin() {
      this.$router.push('/login');
    },

    goToHomePage() {
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/regist/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registvue_type_script_lang_js_ = (registvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/regist/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(229)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e7b6884",
  "556892ed"
  
)

/* harmony default export */ var regist = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map