import Vue from 'vue';
import Router from 'vue-router';

import NotFount from '../components/NotFound';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import(/* webpackChunkName: "home" */'../pages/home') },
      { path: '/about', component: () => import(/* webpackChunkName: "about" */'../pages/about') },
      { path: '/create', component: () => import(/* webpackChunkName: "create" */'../pages/create') },
      { path: '/login', component: () => import(/* webpackChunkName: "login" */'../pages/login') },
      { path: '/register', component: () => import(/* webpackChunkName: "register" */'../pages/register') },
      { path: '/element', component: () => import(/* webpackChunkName: "element" */'../pages/Element.vue') },
      { path: '**', component: NotFount }
    ]
  });
}
