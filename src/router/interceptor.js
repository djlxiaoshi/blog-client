/*
*  总体描述：关于权限的问题可以分为大的三类
*  首先判断vuex中，是否保存有用户信息，如果没有则发送获取用户信息的请求，
*  然后进行验证，验证流程如下：
*  1 不需要登录就可以进入的（例如登录、注册页）
*  2 需要登录才能进入的 （例如用户信息页）
*  3 用户登录之后根据用户角色才能进入的 （VIP页）
*
*   在路由meta属性中配置权限和必须登录的信息。例如：meta: { requiredLogin: true, permissionList: [1,2,3] }
*
*   首先管理平台是肯定要做登录拦截的，即在用户处于登录状态才能进入主系统
*   那么就要在跟路由('/')下做路由拦截，根据路由的meta信息决定是否需要登录等等
*
*
* */

import { SET_MENU_LIST, SET_USER_INFO, SET_ACTIVE_MENU } from '../store/mutation-types';
import http from '../assets/js/utils/http';

/**
 * 检测用户是否登录
 * @param next
 */
function getUserInfo (next) {
  const { xhrInstance } = http({
    url: '/user'
  });
  return xhrInstance;
}

// 保存用户信息在Vuex中
async function saveUserInStore (store) {
  try {
    const result = await getUserInfo();
    store.commit(SET_USER_INFO, result);

    // todo 还未有相关接口，先前端写死
    // store.commit(SET_MENU_LIST, result ? (result.menu || []) : []);
  } catch (e) {
    //  服务器异常
    console.error(e);
  }
}

function goToTargetPage (path, store, next) {
  // 设置当前激活菜单状态
  store.commit(SET_ACTIVE_MENU, path);
  next();
}

function checkPermission (route, user) {
  // 属性配置中包含permissionList，且用户角色不属于permissionList中的一个，则返回false，否则true
  return !(route.meta.permissionList && !~route.meta.permissionList.indexOf(user.roleId));
}

export default function (router, store) {

  router.beforeEach(async (to, from, next) => {
    const matched = to.matched;
    const finallyMatched = to.matched[matched.length - 1];

    // 如果vuex中无用户信息，则发送请求以获得用户登录状态
    if (!store.state.user.baseInfo) {
      await saveUserInStore(store);
    }

    // 需要登录
    if (finallyMatched.meta.requiredLogin) {
      if (store.state.user) {
        // 权限验证
        if (checkPermission(finallyMatched, store.state.user)) {
          goToTargetPage(finallyMatched.path, store, next);
        } else {
          next('/no-permission');
        }
      } else {
        //  跳转登录页
        next('/login');
      }
    } else {
      goToTargetPage(finallyMatched.path, store, next);
    }
  });
};
