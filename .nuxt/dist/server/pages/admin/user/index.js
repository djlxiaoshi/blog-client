exports.ids = [12];
exports.modules = {

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6869ed67", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d7be5b90_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d7be5b90_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d7be5b90_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d7be5b90_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d7be5b90_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".author-info-page[data-v-d7be5b90]{padding:20px}.author-info-page[data-v-d7be5b90] .el-upload{text-align:left}.author-info-page .avatar-image[data-v-d7be5b90]{width:100px;height:100px;border:1px solid #e5e5e5}.author-info-page .error-slot[data-v-d7be5b90]{height:100%;display:flex;align-items:center;justify-content:center}.author-info-page[data-v-d7be5b90] .el-form-item{margin-bottom:15px}.author-info-page[data-v-d7be5b90] .el-form-item__label{padding-bottom:0;font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/index.vue?vue&type=template&id=d7be5b90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author-info-page"},[_c('el-row',{attrs:{"type":"flex"}},[_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":24,"xl":24}},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.userInfo,"label-width":"80px","label-position":"top"}},[_c('el-form-item',{attrs:{"label":"头像","prop":"url"}},[_c('el-upload',{ref:"upload",staticClass:"upload-avatar-input",attrs:{"action":_vm.$globalConfig.SERVER_ADDRESS + '/api/user/avatar/test',"with-credentials":true,"show-file-list":false,"before-upload":_vm.beforeAvatarUpload,"on-success":_vm.handleSuccess,"list-type":"text"}},[_c('el-image',{staticClass:"avatar-image",attrs:{"src":_vm.avatar}},[_c('AppLoading',{staticClass:"image-slot",attrs:{"slot":"placeholder","size":"large"},slot:"placeholder"}),_vm._v(" "),_c('div',{staticClass:"error-slot",attrs:{"slot":"error"},slot:"error"},[_c('span',[_vm._v("点击上传")])])],1)],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"username-input-item",attrs:{"label":"用户名","prop":"username"}},[(_vm.isEditStatus)?_c('el-input',{model:{value:(_vm.baseInfo.username),callback:function ($$v) {_vm.$set(_vm.baseInfo, "username", $$v)},expression:"baseInfo.username"}}):_c('span',[_vm._v(_vm._s(_vm.userInfo.username))])],1),_vm._v(" "),_c('el-form-item',{staticClass:"username-input-item",attrs:{"label":"用户邮箱","prop":"email"}},[(_vm.isEditStatus)?_c('el-input',{model:{value:(_vm.baseInfo.email),callback:function ($$v) {_vm.$set(_vm.baseInfo, "email", $$v)},expression:"baseInfo.email"}}):_c('span',[_vm._v(_vm._s(_vm.userInfo.email))])],1),_vm._v(" "),_c('el-form-item',{staticClass:"user-info-input-item",attrs:{"label":"个人介绍"}},[(_vm.isEditStatus)?_c('el-input',{attrs:{"rows":6,"type":"textarea"},model:{value:(_vm.baseInfo.info),callback:function ($$v) {_vm.$set(_vm.baseInfo, "info", $$v)},expression:"baseInfo.info"}}):_c('span',[_vm._v(_vm._s(_vm.userInfo.info))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"type":"default","size":"small","plain":""},on:{"click":_vm.toggleEditStatus}},[_vm._v("\n            "+_vm._s(_vm.isEditStatus ? '取消' : '编辑')+"\n          ")]),_vm._v(" "),(_vm.isEditStatus)?_c('el-button',{attrs:{"type":"success","size":"small","plain":""},on:{"click":_vm.save}},[_vm._v("\n            保存\n          ")]):_vm._e()],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/user/index.vue?vue&type=template&id=d7be5b90&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/img/avatar.jpg
var avatar = __webpack_require__(8);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

// EXTERNAL MODULE: ./components/common/app-loading/index.vue + 4 modules
var app_loading = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var uservue_type_script_lang_js_ = ({
  head: {
    title: '用户信息',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [{
      hid: 'description',
      name: 'description',
      content: '用户信息页面'
    }]
  },
  components: {
    AppLoading: app_loading["a" /* default */]
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
    };

    return {
      isEditStatus: false,
      rules: {
        username: [{
          required: true,
          trigger: 'blur',
          message: '请输入用户名'
        }],
        email: [{
          required: true,
          trigger: 'blur',
          message: '请输入邮箱'
        }, {
          trigger: 'blur',
          validator: checkEmail
        }]
      },
      inputStatus: {
        usernameDisabled: true,
        infoDisabled: true
      },
      baseInfo: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      userInfo: state => state.user.userInfo
    }),

    avatar() {
      if (!this.userInfo) return avatar_default.a;
      return `${this.$globalConfig.IMAGE_ADDRESS}/${this.userInfo.avatarKey}?v=${new Date().getTime()}`;
    }

  },

  asyncData({
    store,
    route
  }) {
    return store.dispatch('user/getUserInfo');
  },

  mounted() {
    this.baseInfo = JSON.parse(JSON.stringify(this.userInfo));
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      setUserInfo: 'user/setUserInfo'
    }),
    ...Object(external_vuex_["mapActions"])({
      getUserInfo: 'user/getUserInfo'
    }),

    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.$set(this.userInfo, 'avatarKey', res.data.avatarKey); // 更新vuex 中用户信息  这里必须要传入一个新的对象，触发更新

      this.setUserInfo(JSON.parse(JSON.stringify(this.userInfo)));
      this.$notify.success('上传成功');
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 < 300;

      if (!(isJPG || isPNG)) {
        this.$notify.error('上传头像图片只能是 JPG或者PNG 格式!');
      }

      if (!isLt2M) {
        this.$notify.error('上传头像图片大小不能超过 300KB!');
      }

      return (isJPG || isPNG) && isLt2M;
    },

    toggleEditStatus() {
      this.isEditStatus = !this.isEditStatus;
    },

    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.updateUserInfo().then(user => {
            // 更新vuex store中用户信息
            this.setUserInfo(Object.assign({}, this.userInfo, user)); // 重置状态

            this.resetStatus();
          });
        }
      });
    },

    // 更新用户信息
    updateUserInfo() {
      const {
        response
      } = this.$http({
        url: '/user',
        method: 'put',
        data: {
          info: this.baseInfo.info,
          username: this.baseInfo.username,
          email: this.baseInfo.email
        },
        showErrorMsg: true,
        showSuccessMsg: true
      });
      return response;
    },

    resetStatus() {
      this.isEditStatus = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/user/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d7be5b90",
  "2555f9c2"
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map