import './assets/js/init';

import { createApp } from './app';

export default function (context) {
  const { app, router, store } = createApp(context);

  return new Promise((resolve, reject) => {

    const { url, cookies } = context;

    router.push(url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        console.log('服务端渲染-路由不存在');

        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 });
      }

      // 对所有匹配的路由组件调用 `asyncData()`
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute,
            cookies
          });
        }
      })).then(() => {
        console.log('全部成功');

        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        context.state = store.state;

        // 这里要封装的ajax返回一个promise，不然数据拿到后，视图却没有更新
        resolve(app);

      }).catch((error) => {
        console.log('error', error);
        reject(error);
      });

    }, reject);

  });
}
