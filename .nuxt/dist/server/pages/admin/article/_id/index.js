exports.ids = [4];
exports.modules = {

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("12f096c0", content, true, context)
};

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0618b9c5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0618b9c5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0618b9c5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0618b9c5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0618b9c5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article-title[data-v-0618b9c5]{font-weight:600}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/article/_id/index.vue?vue&type=template&id=0618b9c5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-config-page"},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.articleConfig,"label-width":"80px","label-position":"top"}},[_c('el-form-item',{attrs:{"label":"标题","prop":"abstract"}},[_c('el-input',{model:{value:(_vm.articleConfig.title),callback:function ($$v) {_vm.$set(_vm.articleConfig, "title", $$v)},expression:"articleConfig.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"url"}},[_c('el-upload',{ref:"upload",staticClass:"upload-avatar-input",attrs:{"action":_vm.$globalConfig.SERVER_ADDRESS + '/api/upload',"with-credentials":true,"show-file-list":false,"before-upload":_vm.beforeAvatarUpload,"on-success":_vm.handleSuccess,"list-type":"text"}},[_c('el-image',{staticClass:"avatar-image",attrs:{"src":_vm.article.thumbnail}},[_c('AppLoading',{attrs:{"slot":"placeholder","size":"large"},slot:"placeholder"}),_vm._v(" "),_c('div',{staticClass:"error-slot",attrs:{"slot":"error"},slot:"error"},[_c('span',[_vm._v("点击上传")])])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介","prop":"abstract"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.articleConfig.abstract),callback:function ($$v) {_vm.$set(_vm.articleConfig, "abstract", $$v)},expression:"articleConfig.abstract"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标签","prop":"tag"}},[_c('el-checkbox-group',{model:{value:(_vm.articleTags),callback:function ($$v) {_vm.articleTags=$$v},expression:"articleTags"}},_vm._l((_vm.tags),function(tag){return _c('el-checkbox',{key:tag._id,attrs:{"label":tag._id}},[_vm._v(_vm._s(tag.label))])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"type":"success","size":"small","plain":""},on:{"click":_vm.save}},[_vm._v("\n        保存\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/article/_id/index.vue?vue&type=template&id=0618b9c5&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/common/app-loading/index.vue + 4 modules
var app_loading = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/article/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    AppLoading: app_loading["a" /* default */]
  },

  data() {
    return {
      articleConfig: {
        abstract: ''
      },
      rules: {},
      articleTags: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      article: state => state.article.currentArticle,
      tags: state => state.tag.allTags
    })
  },

  asyncData({
    store,
    route
  }) {
    return Promise.all([store.dispatch('article/getArticle', route.params.id), store.dispatch('tag/getAllTags')]);
  },

  mounted() {
    this.articleConfig = JSON.parse(JSON.stringify(this.article));
    this.articleTags = Array.isArray(this.article.tags) ? this.article.tags.map(tag => tag._id) : [];
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getArticle: 'article/getArticle'
    }),

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

    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.$notify.success('上传成功');
    },

    save() {
      const {
        response
      } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'put',
        data: {
          title: this.articleConfig.title,
          abstract: this.articleConfig.abstract,
          tags: this.articleTags
        },
        showSuccessMsg: '标签设置成功',
        showErrorMsg: true
      });
      response.then(() => {
        this.getArticle(this.$route.params.id);
        this.openTags = false;
      }, () => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/article/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/article/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(219)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0618b9c5",
  "2f79da40"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map