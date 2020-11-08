exports.ids = [6];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f30e90d4", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.b0d58bb.svg";

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-loading{display:flex;align-items:center;justify-content:center;height:100%;width:100%}.app-loading img{width:15%}.app-loading img.mini{width:5%}.app-loading img.small{width:10%}.app-loading img.normal{width:15%}.app-loading img.large{width:20%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/app-loading/index.vue?vue&type=template&id=723576cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-loading"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt"+(_vm._ssrClass(null,[_vm.size]))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/app-loading/index.vue?vue&type=template&id=723576cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/app-loading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var app_loadingvue_type_script_lang_js_ = ({
  props: {
    size: {
      type: String,
      default: 'normal',

      validator(value) {
        const sizeArray = ['mini', 'small', 'normal', 'large'];

        if (!sizeArray.includes(value)) {
          // eslint-disable-next-line no-console
          console.warn('size 属性只能为mini|small|normal|large');
          return 'normal';
        }

        return value;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/common/app-loading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_app_loadingvue_type_script_lang_js_ = (app_loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/app-loading/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_app_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "affb01e2"
  
)

/* harmony default export */ var app_loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("726be45d", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04510def_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04510def_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04510def_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04510def_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04510def_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article-title[data-v-04510def]{font-weight:600}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/article/config/_id/index.vue?vue&type=template&id=04510def&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-config-page"},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.article,"label-width":"80px","label-position":"top"}},[_c('el-form-item',{attrs:{"label":"标题","prop":"abstract"}},[_c('el-input',{model:{value:(_vm.article.title),callback:function ($$v) {_vm.$set(_vm.article, "title", $$v)},expression:"article.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"url"}},[_c('el-upload',{ref:"upload",staticClass:"upload-avatar-input",attrs:{"data":{
          prevThumbnailKey: _vm.article.thumbnailKey || '',
          articleId: _vm.$route.params.id
        },"action":_vm.$globalConfig.SERVER_ADDRESS + '/api/article/thumbnail',"with-credentials":true,"show-file-list":false,"before-upload":_vm.beforeAvatarUpload,"on-success":_vm.handleSuccess,"list-type":"text"}},[_c('el-image',{staticClass:"avatar-image",attrs:{"src":_vm.article.thumbnail}},[_c('AppLoading',{attrs:{"slot":"placeholder","size":"large"},slot:"placeholder"}),_vm._v(" "),_c('div',{staticClass:"error-slot",attrs:{"slot":"error"},slot:"error"},[_c('span',[_vm._v("点击上传")])])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介","prop":"abstract"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.article.abstract),callback:function ($$v) {_vm.$set(_vm.article, "abstract", $$v)},expression:"article.abstract"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标签","prop":"tag"}},[_c('el-checkbox-group',{model:{value:(_vm.articleTags),callback:function ($$v) {_vm.articleTags=$$v},expression:"articleTags"}},_vm._l((_vm.tags),function(tag){return _c('el-checkbox',{key:tag._id,attrs:{"label":tag._id}},[_vm._v(_vm._s(tag.label))])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"type":"success","size":"small","plain":""},on:{"click":_vm.save}},[_vm._v("\n        保存\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/article/config/_id/index.vue?vue&type=template&id=04510def&scoped=true&

// EXTERNAL MODULE: ./components/common/app-loading/index.vue + 4 modules
var app_loading = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/article/config/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      rules: {},
      article: {
        title: '',
        abstract: '',
        thumbnail: '',
        thumbnailKey: ''
      },
      tags: [],
      articleTags: []
    };
  },

  mounted() {
    this.getArticle();
    this.getAllTags();
  },

  methods: {
    getArticle() {
      const {
        response
      } = this.$http({
        url: `/article/getOneByUser`,
        data: {
          id: this.$route.params.id
        },
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      });
      return response.then(article => {
        this.articleTags = Array.isArray(article.tags) ? article.tags.map(tag => tag._id) : [];
        this.article = article;
      }, e => {});
    },

    getAllTags() {
      const {
        response
      } = this.$http({
        url: `/tags`,
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      });
      return response.then(tags => {
        this.tags = tags;
      }, e => {
        return e;
      });
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

    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.article.thumbnail = `${res.data.thumbnail}?_time=${Date.now()}`;
      this.article.thumbnailKey = res.data.thumbnailKey;
      this.$notify.success('上传成功');
    },

    save() {
      const {
        response
      } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'put',
        data: {
          title: this.article.title,
          abstract: this.article.abstract,
          tags: this.articleTags
        },
        showSuccessMsg: '标签设置成功',
        showErrorMsg: true
      });
      response.then(() => {
        this.getArticle(this.$route.params.id);
      }, () => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/article/config/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var config_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/article/config/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  config_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04510def",
  "796ca75d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map