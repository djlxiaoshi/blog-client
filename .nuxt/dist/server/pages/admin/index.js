exports.ids = [10];
exports.modules = {

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=297ebd1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin-system-page"},[_vm._ssrNode("<h1>系统管理</h1> "),_c('el-form',{attrs:{"model":_vm.systemConfig,"label-position":"left","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"用户信息"}},[_c('el-radio-group',{on:{"change":function($event){return _vm.changeSystemConfig($event, 'portalUser')}},model:{value:(_vm.systemConfig.portalUser),callback:function ($$v) {_vm.$set(_vm.systemConfig, "portalUser", $$v)},expression:"systemConfig.portalUser"}},_vm._l((_vm.userList),function(user){return _c('el-radio',{key:user._id,attrs:{"label":user._id}},[_vm._v(_vm._s(user.username))])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"登出"}},[_c('Button',{on:{"click":_vm.logout}},[_vm._v("登出")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=297ebd1a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  data() {
    return {
      systemConfig: {
        portalUser: ''
      },
      userList: []
    };
  },

  async mounted() {
    try {
      const systemConfig = await this.getSystemConfig();
      this.systemConfig = systemConfig;
      const {
        list
      } = await this.getAllUsers({
        filter: {
          disabled: false
        }
      });
      this.userList = list;
    } catch (e) {}
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      userLogout: 'user/logout',
      getAllUsers: 'user/getAllUsers',
      getSystemConfig: 'system/getAdminSystemConfig'
    }),

    changeSystemConfig(value, changeField) {
      const {
        response
      } = this.$http({
        url: '/system',
        data: {
          [changeField]: value
        },
        method: 'put',
        showSuccessMsg: true,
        showErrorMsg: true
      });
      response.then(data => {});
    },

    async logout() {
      try {
        await this.userLogout();
        this.$router.push('/');
      } catch (e) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "675f084e"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map