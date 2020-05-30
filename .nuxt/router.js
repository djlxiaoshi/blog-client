import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fa46d64 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _4e4b357e = () => interopDefault(import('../pages/crawl/index.vue' /* webpackChunkName: "pages/crawl/index" */))
const _f03a342c = () => interopDefault(import('../pages/explore/index.vue' /* webpackChunkName: "pages/explore/index" */))
const _268d1640 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _397ce395 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _6082ac31 = () => interopDefault(import('../pages/tag/index.vue' /* webpackChunkName: "pages/tag/index" */))
const _67489eb1 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _4a163da0 = () => interopDefault(import('../pages/timeline/index.vue' /* webpackChunkName: "pages/timeline/index" */))
const _906e5998 = () => interopDefault(import('../pages/explore/SideBar.vue' /* webpackChunkName: "pages/explore/SideBar" */))
const _06d90560 = () => interopDefault(import('../pages/test/codemirror/index.vue' /* webpackChunkName: "pages/test/codemirror/index" */))
const _5cc822da = () => interopDefault(import('../pages/test/turndown/index.vue' /* webpackChunkName: "pages/test/turndown/index" */))
const _8ba07bee = () => interopDefault(import('../pages/user/info/index.vue' /* webpackChunkName: "pages/user/info/index" */))
const _2609aad8 = () => interopDefault(import('../pages/post/components/OperateBar/index.vue' /* webpackChunkName: "pages/post/components/OperateBar/index" */))
const _1d0664f8 = () => interopDefault(import('../pages/article/_id/index.vue' /* webpackChunkName: "pages/article/_id/index" */))
const _a16e0132 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _40d8469c = () => interopDefault(import('../pages/tag/_id/index.vue' /* webpackChunkName: "pages/tag/_id/index" */))
const _4ae7eed6 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _76a64f36 = () => interopDefault(import('../pages/article/_id/Comment.vue' /* webpackChunkName: "pages/article/_id/Comment" */))

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
    path: "/crawl",
    component: _4e4b357e,
    name: "crawl"
  }, {
    path: "/explore",
    component: _f03a342c,
    name: "explore"
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
    path: "/explore/SideBar",
    component: _906e5998,
    name: "explore-SideBar"
  }, {
    path: "/test/codemirror",
    component: _06d90560,
    name: "test-codemirror"
  }, {
    path: "/test/turndown",
    component: _5cc822da,
    name: "test-turndown"
  }, {
    path: "/user/info",
    component: _8ba07bee,
    name: "user-info"
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
    path: "/user/:id",
    component: _4ae7eed6,
    name: "user-id"
  }, {
    path: "/article/:id/Comment",
    component: _76a64f36,
    name: "article-id-Comment"
  }, {
    path: "/",
    component: _f03a342c
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
