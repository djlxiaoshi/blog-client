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

export default async function({ store, route, redirect, error }) {
  const { path, query } = route;
  const matchedMeta = route.meta[0];
  console.log('route.meta', route.meta);

  const {
    isAdminPage,
    isPortalPage,
    isLoginPage,
    isClosed,
    permission
  } = matchedMeta;

  // 如果是管理界面
  if (isAdminPage) {
    // 如果用户未登录
    if (!store.state.user.userInfo) {
      try {
        const user = await store.dispatch('user/getUserInfo');
        store.commit('user/setUserInfo', user);
      } catch (error) {
        redirect(
          `/login?_redirectUrl=${encodeURIComponent(
            `${path}?${qs.stringify(query)}`
          )}`
        );
      }
    } else if (
      permission &&
      permission.length > 0 &&
      !permission.includes(store.state.user.userInfo.role)
    ) {
      error({ statusCode: 403, message: '没有页面权限' });
    }
  } else if (isPortalPage) {
    // 获取门户系统配置
    if (!store.state.system.portalConfig) {
      try {
        await store.dispatch('system/getPortalSystemConfig');
      } catch (error) {}
    }
  } else if (isLoginPage) {
    if (!store.state.user.userInfo) {
      try {
        const user = await store.dispatch('user/getUserInfo');
        store.commit('user/setUserInfo', user);
      } catch (error) {}
    }
    // 如果是登录页且用户已经登录则直接重定向到首页
    if (store.state.user.userInfo) {
      redirect('/');
    }
  } else if (isClosed) {
    redirect('/404');
  }
}
