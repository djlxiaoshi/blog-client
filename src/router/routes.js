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
    path: '',
    label: '发现',
    component: () => import(/* webpackChunkName: "home" */'../pages/explore/Index')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */'../pages/about/Index'),
    label: '关于本站'
  },
  {
    path: '/post',
    component: () => import(/* webpackChunkName: "post" */'../pages/post/Index'),
    hidden: true,
    desc: '发表文章',
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/article/:id',
    component: () => import(/* webpackChunkName: "article" */'../pages/article/Index'),
    label: '文章详情',
    hidden: true
  },
  {
    path: '/tags',
    component: () => import(/* webpackChunkName: "tags" */'../pages/tag/Index'),
    hidden: true
  },
  {
    path: '/tag/:id/',
    component: () => import(/* webpackChunkName: "tag" */'../pages/tag/Details'),
    hidden: true
  },
  {
    path: '/post/:id',
    component: () => import(/* webpackChunkName: "edit" */'../pages/post/Index'),
    label: '编辑文章',
    meta: {
      requiredLogin: true
    },
    hidden: true
  },
  {
    path: '/login',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */'../pages/login/Index')
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */'../pages/register/Index'),
    hidden: true
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */'../pages/user/Index'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "user-home" */'../pages/user/home/Index'),
        hidden: true,
        desc: '用户首页',
        meta: {
          requiredLogin: true
        }
      },
      {
        path: 'info',
        component: () => import(/* webpackChunkName: "user-info" */'../pages/user/info/Index'),
        hidden: true,
        desc: '用户信息',
        meta: {
          requiredLogin: true
        }
      }
    ],
    hidden: true,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/test',
    label: '测试',
    component: () => import(/* webpackChunkName: "test" */'../pages/test'),
    hidden: true,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/server-exception',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception/Index'),
    hidden: true,
    props: { type: 500 }
  },
  {
    path: '/no-permission',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception/Index'),
    hidden: true,
    props: { type: 403 }
  },
  {
    path: '**',
    component: () => import(/* webpackChunkName: "exception" */'../pages/exception/Index'),
    hidden: true,
    props: { type: 404 }
  }
];
