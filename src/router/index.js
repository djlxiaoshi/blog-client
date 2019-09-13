import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        label: '发现',
        meta: {
          NoRequiredLogin: true
        },
        component: () => import(/* webpackChunkName: "home" */'../pages/home')
      },
      {
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */'../pages/about'),
        label: '关于本站'
      },
      {
        path: '/post',
        component: () => import(/* webpackChunkName: "post" */'../pages/post'),
        hidden: true,
        desc: '发表文章'
      },
      {
        path: '/login',
        hidden: true,
        meta: {
          NoRequiredLogin: true
        },
        component: () => import(/* webpackChunkName: "login" */'../pages/login')
      },
      {
        path: '/register',
        component: () => import(/* webpackChunkName: "register" */'../pages/register'),
        hidden: true
      },
      {
        path: '/author',
        component: () => import(/* webpackChunkName: "user-info" */'../pages/author'),
        hidden: true,
        desc: '用户信息'
      },
      {
        path: '/server-exception',
        component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
        hidden: true,
        meta: {
          NoRequiredLogin: true
        },
        props: { type: 500 }
      },
      {
        path: '/no-permission',
        component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
        hidden: true,
        meta: {
          NoRequiredLogin: true
        },
        props: { type: 403 }
      },
      {
        path: '**',
        component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
        hidden: true,
        meta: {
          NoRequiredLogin: true
        },
        props: { type: 404 }
      }
    ]
  });

  return router;
}
