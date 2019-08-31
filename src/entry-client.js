import { createApp } from './app';
import './assets/js/register-sw';
import './assets/js/resize';

// 客户端特定引导逻辑……

const { app, router, store } = createApp();

// 同步state
if (window.__INITIAL_STATE__) {
  debugger;
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {

  // 这里假定 App.vue 模板中根元素具有 `id="app"`
  app.$mount('#app');
});
