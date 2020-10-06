/*
 *  总体描述：关于权限的问题可以分为大的三类
 *  然后进行验证，验证流程如下：
 *  首先判断vuex中，是否保存有用户信息，如果没有则发送获取用户信息的请求，
 *  这里不论该页面是否需要登录，都先提前获取用户信息，因为有些页面（例如首页）即使不需要登录，但是需要展示用户信息
 *  1 不需要登录就可以进入的（例如登录、注册页）
 *  2 需要登录才能进入的 （例如用户信息页）。
 *  3 用户登录之后根据用户角色才能进入的 （VIP页）
 *
 *   在路由meta属性中配置权限和必须登录的信息。例如：meta: { requiredLogin: true, permissionList: [1,2,3] }
 *
 *   首先管理平台是肯定要做登录拦截的，即在用户处于登录状态才能进入主系统
 *   那么就要在跟路由('/')下做路由拦截，根据路由的meta信息决定是否需要登录等等
 *
 *
 * */
import qs from 'qs';

function isLoginPage(path) {
  return path === '/login' || path === '/login/';
}

export default async function({ store, route, redirect, error }) {
  const { path, query } = route;
  // 如果store中没有用户信息，先获取用户信息，不论该页面是不是需要登录，
  // 都先提前获取，因为有些页面（例如首页）即使不需要登录，但是需要展示用户信息
  if (!store.state.user.userInfo) {
    try {
      const user = await store.dispatch('user/getUserInfo');
      console.log('user', user);
      store.commit('user/setUserInfo', user);
    } catch (error) {
      console.log('error', error);
    }
  }

  // 如果是登录页且用户已经登录则直接重定向到首页
  if (isLoginPage(path) && store.state.user.userInfo) {
    redirect('/');
    return;
  }

  if (route.meta[0]) {
    const { needLogin, isClosed, permission } = route.meta[0];
    // 如果这个页面处于关闭状态
    if (isClosed) {
      error({ statusCode: 404, message: '页面不存在Page not found' });
      return;
    }

    // 页面需要登录
    if (needLogin) {
      if (!store.state.user.userInfo) {
        redirect(
          `/login?_redirectUrl=${encodeURIComponent(
            `${path}?${qs.stringify(query)}`
          )}`
        );
      } else if (
        permission &&
        permission.length > 0 &&
        !permission.includes(store.state.user.userInfo.role)
      ) {
        error({ statusCode: 403, message: '没有页面权限' });
      }
    }
  }

  store.commit('menu/setActiveMenu', path);
}
