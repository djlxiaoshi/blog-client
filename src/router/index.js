import Vue from 'vue';
import Router from 'vue-router';

import NotFount from '../components/NotFound';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import(/* webpackChunkName: "home" */'../pages/Home.vue') },
      { path: '/about', component: () => import(/* webpackChunkName: "about" */'../pages/About.vue') },
      { path: '/element', component: () => import(/* webpackChunkName: "element" */'../pages/Element.vue') },
      { path: '**', component: NotFount }
    ]
  });
}
