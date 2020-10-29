exports.ids = [15];
exports.modules = {

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("167cbe5c", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a293999_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a293999_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a293999_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a293999_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5a293999_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article-management-page .item-thumbnail[data-v-5a293999]{padding:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=5a293999&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-management-page"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.userArticles}},_vm._l((_vm.columns),function(column){return _c('el-table-column',{key:column.prop,attrs:{"prop":column.field,"label":column.label,"width":column.width},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(column['slot'] === 'thumbnail')?_c('div',[_c('div',{staticClass:"item-thumbnail",style:({ border: ("4px solid " + (_vm.$color.borderColor)) })},[_c('el-image',{staticStyle:{"width":"100%","height":"80px"},attrs:{"src":scope.row[column['field']],"lazy":"","fit":"cover"}},[_c('AppLoading',{staticClass:"image-slot",attrs:{"slot":"placeholder","size":"large"},slot:"placeholder"})],1)],1)]):(column['slot'] === 'title')?_c('div',[_c('el-button',{attrs:{"type":"text"}},[_vm._v(_vm._s(scope.row[column['field']]))])],1):(column['slot'] === 'author')?_c('div',[_vm._v("\n          "+_vm._s(scope.row[column['field']]['username'])+"\n        ")]):(column['slot'] === 'visible')?_c('div',[_c('el-switch',{attrs:{"value":scope.row[column['field']],"active-value":1,"inactive-value":0,"active-color":"#13ce66"},on:{"change":function($event){return _vm.togglePublish($event, scope.row['_id'])}}})],1):(column['slot'] === 'operate')?_c('div',[_c('el-button',{attrs:{"type":"primary","plain":"","size":"mini","icon":"el-icon-edit"},on:{"click":function($event){return _vm.edit(scope.row)}}}),_vm._v(" "),_c('el-button',{attrs:{"type":"warning","plain":"","size":"mini","icon":"el-icon-setting"},on:{"click":function($event){return _vm.config(scope.row)}}}),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","plain":"","size":"mini","icon":"el-icon-delete"},on:{"click":function($event){return _vm.del(scope.row)}}})],1):_c('div',[_vm._v("\n          "+_vm._s(scope.row[column['field']])+"\n        ")])]}}],null,true)})}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=5a293999&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/common/app-loading/index.vue + 4 modules
var app_loading = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    AppLoading: app_loading["a" /* default */]
  },

  data() {
    return {
      columns: [{
        label: '缩略图',
        width: 180,
        field: 'thumbnail',
        slot: 'thumbnail'
      }, {
        label: '标题',
        width: 180,
        field: 'title',
        slot: 'title'
      }, {
        label: '作者',
        width: 100,
        field: 'createUser',
        slot: 'author'
      }, {
        label: '简介',
        field: 'abstract'
      }, {
        label: '创建时间',
        width: 180,
        field: 'createTime'
      }, {
        label: '更新时间',
        width: 180,
        field: 'updateTime'
      }, {
        label: '公开',
        width: 80,
        field: 'status',
        slot: 'visible'
      }, {
        label: '操作',
        width: 200,
        slot: 'operate'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      userArticles: state => state.user.userArticles
    })
  },

  asyncData({
    store,
    router
  }) {
    return store.dispatch('user/getUserArticles', {
      currentPage: 1,
      pageSize: PAGE_SIZE
    });
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      setUserArticle: 'user/setUserArticles'
    }),
    ...Object(external_vuex_["mapActions"])({
      getUserArticles: 'user/getUserArticles'
    }),

    togglePublish(status, id) {
      const {
        response
      } = this.$http({
        url: `/article/${id}`,
        method: 'put',
        data: {
          status
        },
        showSuccessMsg: '操作成功',
        showErrorMsg: true
      });
      response.then(() => {
        this.getUserArticles(id);
      }, () => {});
    },

    edit(article) {
      this.$router.push(`/admin/post/${article._id}`);
    },

    del(article) {
      this.$alert({
        title: '警告',
        text: '您确定要删除这篇文章吗？',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.deleteArticle(article._id);
        } else {}
      });
    },

    config(article) {
      this.$router.push(`/admin/article/config/${article._id}`);
    },

    deleteArticle(id) {
      const {
        response
      } = this.$http({
        url: `/article/${id}`,
        method: 'delete',
        showSuccessMsg: true,
        showErrorMsg: true
      });
      response.then(() => {
        this.getUserArticles({
          currentPage: 1,
          pageSize: PAGE_SIZE
        });
      }, () => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a293999",
  "7a3ed796"
  
)

/* harmony default export */ var article = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map