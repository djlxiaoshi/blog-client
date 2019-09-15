/**
 * 路由配置文件：配置项信息如下
 * {
 *   path: '路径',
 *   label: '路由名称',
 *   desc: '路由描述',
 *   hidden: '是否可见',
 *   component: '路由组件',
 *   meta: '路由配置参数',
 *   props: '路由传入对应组件的参数',
 *
 * }
 */
export default [
  {
    path: '/',
    label: '发现',
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
    desc: '发表文章',
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/article/:id',
    component: () => import(/* webpackChunkName: "article" */'../pages/article'),
    label: '文章详情',
    hidden: true
  },
  {
    path: '/edit/:id',
    component: () => import(/* webpackChunkName: "edit" */'../pages/edit'),
    label: '编辑文章',
    hidden: true
  },
  {
    path: '/login',
    hidden: true,
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
    desc: '用户信息',
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/server-exception',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
    hidden: true,
    props: { type: 500 }
  },
  {
    path: '/no-permission',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
    hidden: true,
    props: { type: 403 }
  },
  {
    path: '**',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception'),
    hidden: true,
    props: { type: 404 }
  }
];
