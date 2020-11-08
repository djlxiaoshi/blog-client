import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fa46d64 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _09abdb3a = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _2caa02a6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _b8454666 = () => interopDefault(import('../pages/admin/article/index.vue' /* webpackChunkName: "pages/admin/article/index" */))
const _39736c84 = () => interopDefault(import('../pages/admin/crawl/index.vue' /* webpackChunkName: "pages/admin/crawl/index" */))
const _5a10af8d = () => interopDefault(import('../pages/admin/info/index.vue' /* webpackChunkName: "pages/admin/info/index" */))
const _75b5d071 = () => interopDefault(import('../pages/admin/tag/index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _5001b66a = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _3040eac2 = () => interopDefault(import('../pages/admin/components/SideBar/index.vue' /* webpackChunkName: "pages/admin/components/SideBar/index" */))
const _1ff1be98 = () => interopDefault(import('../pages/admin/post/components/OperateBar/index.vue' /* webpackChunkName: "pages/admin/post/components/OperateBar/index" */))
const _36dd1e05 = () => interopDefault(import('../pages/admin/article/config/_id/index.vue' /* webpackChunkName: "pages/admin/article/config/_id/index" */))
const _001d6d90 = () => interopDefault(import('../pages/admin/article/_id/index.vue' /* webpackChunkName: "pages/admin/article/_id/index" */))
const _5dff59b2 = () => interopDefault(import('../pages/admin/post/_id.vue' /* webpackChunkName: "pages/admin/post/_id" */))
const _2e34e756 = () => interopDefault(import('../pages/admin/user/_id/index.vue' /* webpackChunkName: "pages/admin/user/_id/index" */))
const _4d806c9a = () => interopDefault(import('../pages/admin/_.vue' /* webpackChunkName: "pages/admin/_" */))
const _6156588d = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _268d1640 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _397ce395 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _6082ac31 = () => interopDefault(import('../pages/tag/index.vue' /* webpackChunkName: "pages/tag/index" */))
const _67489eb1 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _4a163da0 = () => interopDefault(import('../pages/timeline/index.vue' /* webpackChunkName: "pages/timeline/index" */))
const _06d90560 = () => interopDefault(import('../pages/test/codemirror/index.vue' /* webpackChunkName: "pages/test/codemirror/index" */))
const _0edafd88 = () => interopDefault(import('../pages/test/monitor/index.vue' /* webpackChunkName: "pages/test/monitor/index" */))
const _5cc822da = () => interopDefault(import('../pages/test/turndown/index.vue' /* webpackChunkName: "pages/test/turndown/index" */))
const _41699e1a = () => interopDefault(import('../pages/article/components/ArticleList/index.vue' /* webpackChunkName: "pages/article/components/ArticleList/index" */))
const _2609aad8 = () => interopDefault(import('../pages/post/components/OperateBar/index.vue' /* webpackChunkName: "pages/post/components/OperateBar/index" */))
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
      path: "info",
      component: _5a10af8d,
      name: "admin-info"
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
      path: "article/config/:id",
      component: _36dd1e05,
      name: "admin-article-config-id"
    }, {
      path: "article/:id",
      component: _001d6d90,
      name: "admin-article-id"
    }, {
      path: "post/:id?",
      component: _5dff59b2,
      name: "admin-post-id"
    }, {
      path: "user/:id",
      component: _2e34e756,
      name: "admin-user-id"
    }, {
      path: "*",
      component: _4d806c9a,
      name: "admin-all"
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
    path: "/post/components/OperateBar",
    component: _2609aad8,
    name: "post-components-OperateBar"
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
  }, {
    path: "/",
    component: _6156588d
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
