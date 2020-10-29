import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fa46d64 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _09abdb3a = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _2caa02a6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _b8454666 = () => interopDefault(import('../pages/admin/article/index.vue' /* webpackChunkName: "pages/admin/article/index" */))
const _39736c84 = () => interopDefault(import('../pages/admin/crawl/index.vue' /* webpackChunkName: "pages/admin/crawl/index" */))
const _75b5d071 = () => interopDefault(import('../pages/admin/tag/index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _5001b66a = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _3040eac2 = () => interopDefault(import('../pages/admin/components/SideBar/index.vue' /* webpackChunkName: "pages/admin/components/SideBar/index" */))
const _1ff1be98 = () => interopDefault(import('../pages/admin/post/components/OperateBar/index.vue' /* webpackChunkName: "pages/admin/post/components/OperateBar/index" */))
const _001d6d90 = () => interopDefault(import('../pages/admin/article/_id/index.vue' /* webpackChunkName: "pages/admin/article/_id/index" */))
const _5dff59b2 = () => interopDefault(import('../pages/admin/post/_id.vue' /* webpackChunkName: "pages/admin/post/_id" */))
const _6156588d = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _268d1640 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _891dedea = () => interopDefault(import('../pages/portal/index.vue' /* webpackChunkName: "pages/portal/index" */))
const _397ce395 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _6082ac31 = () => interopDefault(import('../pages/tag/index.vue' /* webpackChunkName: "pages/tag/index" */))
const _67489eb1 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _4a163da0 = () => interopDefault(import('../pages/timeline/index.vue' /* webpackChunkName: "pages/timeline/index" */))
const _165f6849 = () => interopDefault(import('../pages/portal/about/index.vue' /* webpackChunkName: "pages/portal/about/index" */))
const _b9cdc754 = () => interopDefault(import('../pages/portal/tag/index.vue' /* webpackChunkName: "pages/portal/tag/index" */))
const _d9adc6ca = () => interopDefault(import('../pages/portal/timeline/index.vue' /* webpackChunkName: "pages/portal/timeline/index" */))
const _06d90560 = () => interopDefault(import('../pages/test/codemirror/index.vue' /* webpackChunkName: "pages/test/codemirror/index" */))
const _0edafd88 = () => interopDefault(import('../pages/test/monitor/index.vue' /* webpackChunkName: "pages/test/monitor/index" */))
const _5cc822da = () => interopDefault(import('../pages/test/turndown/index.vue' /* webpackChunkName: "pages/test/turndown/index" */))
const _41699e1a = () => interopDefault(import('../pages/article/components/ArticleList/index.vue' /* webpackChunkName: "pages/article/components/ArticleList/index" */))
const _3a225a96 = () => interopDefault(import('../pages/portal/components/ArticleList/index.vue' /* webpackChunkName: "pages/portal/components/ArticleList/index" */))
const _7d02207c = () => interopDefault(import('../pages/portal/components/Header/index.vue' /* webpackChunkName: "pages/portal/components/Header/index" */))
const _980c8f86 = () => interopDefault(import('../pages/portal/components/SideBar/index.vue' /* webpackChunkName: "pages/portal/components/SideBar/index" */))
const _2609aad8 = () => interopDefault(import('../pages/post/components/OperateBar/index.vue' /* webpackChunkName: "pages/post/components/OperateBar/index" */))
const _6fde3fc6 = () => interopDefault(import('../pages/portal/article/_id/index.vue' /* webpackChunkName: "pages/portal/article/_id/index" */))
const _74c01c41 = () => interopDefault(import('../pages/portal/tag/_id/index.vue' /* webpackChunkName: "pages/portal/tag/_id/index" */))
const _51f5c36c = () => interopDefault(import('../pages/portal/article/_id/Comment.vue' /* webpackChunkName: "pages/portal/article/_id/Comment" */))
const _1d0664f8 = () => interopDefault(import('../pages/article/_id/index.vue' /* webpackChunkName: "pages/article/_id/index" */))
const _a16e0132 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _40d8469c = () => interopDefault(import('../pages/tag/_id/index.vue' /* webpackChunkName: "pages/tag/_id/index" */))
const _6c8a8334 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b4f7351a = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1fa46d64,
    name: "about"
  }, {
    path: "/admin",
    component: _09abdb3a,
    children: [{
      path: "",
      component: _2caa02a6,
      name: "admin"
    }, {
      path: "article",
      component: _b8454666,
      name: "admin-article"
    }, {
      path: "crawl",
      component: _39736c84,
      name: "admin-crawl"
    }, {
      path: "tag",
      component: _75b5d071,
      name: "admin-tag"
    }, {
      path: "user",
      component: _5001b66a,
      name: "admin-user"
    }, {
      path: "components/SideBar",
      component: _3040eac2,
      name: "admin-components-SideBar"
    }, {
      path: "post/components/OperateBar",
      component: _1ff1be98,
      name: "admin-post-components-OperateBar"
    }, {
      path: "article/:id",
      component: _001d6d90,
      name: "admin-article-id"
    }, {
      path: "post/:id?",
      component: _5dff59b2,
      name: "admin-post-id"
    }]
  }, {
    path: "/article",
    component: _6156588d,
    name: "article"
  }, {
    path: "/login",
    component: _268d1640,
    name: "login"
  }, {
    path: "/portal",
    component: _891dedea,
    name: "portal"
  }, {
    path: "/regist",
    component: _397ce395,
    name: "regist"
  }, {
    path: "/tag",
    component: _6082ac31,
    name: "tag"
  }, {
    path: "/test",
    component: _67489eb1,
    name: "test"
  }, {
    path: "/timeline",
    component: _4a163da0,
    name: "timeline"
  }, {
    path: "/portal/about",
    component: _165f6849,
    name: "portal-about"
  }, {
    path: "/portal/tag",
    component: _b9cdc754,
    name: "portal-tag"
  }, {
    path: "/portal/timeline",
    component: _d9adc6ca,
    name: "portal-timeline"
  }, {
    path: "/test/codemirror",
    component: _06d90560,
    name: "test-codemirror"
  }, {
    path: "/test/monitor",
    component: _0edafd88,
    name: "test-monitor"
  }, {
    path: "/test/turndown",
    component: _5cc822da,
    name: "test-turndown"
  }, {
    path: "/article/components/ArticleList",
    component: _41699e1a,
    name: "article-components-ArticleList"
  }, {
    path: "/portal/components/ArticleList",
    component: _3a225a96,
    name: "portal-components-ArticleList"
  }, {
    path: "/portal/components/Header",
    component: _7d02207c,
    name: "portal-components-Header"
  }, {
    path: "/portal/components/SideBar",
    component: _980c8f86,
    name: "portal-components-SideBar"
  }, {
    path: "/post/components/OperateBar",
    component: _2609aad8,
    name: "post-components-OperateBar"
  }, {
    path: "/portal/article/:id",
    component: _6fde3fc6,
    name: "portal-article-id"
  }, {
    path: "/portal/tag/:id",
    component: _74c01c41,
    name: "portal-tag-id"
  }, {
    path: "/portal/article/:id?/Comment",
    component: _51f5c36c,
    name: "portal-article-id-Comment"
  }, {
    path: "/article/:id",
    component: _1d0664f8,
    name: "article-id"
  }, {
    path: "/post/:id?",
    component: _a16e0132,
    name: "post-id"
  }, {
    path: "/tag/:id",
    component: _40d8469c,
    name: "tag-id"
  }, {
    path: "/",
    component: _6c8a8334,
    name: "index"
  }, {
    path: "/*",
    component: _b4f7351a,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
