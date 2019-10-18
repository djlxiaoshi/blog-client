import { createApp } from './app';
import 'nprogress/nprogress.css';
// import './assets/js/register-sw'; // 注册Service Worker
// 客户端特定引导逻辑……

const { app, router, store } = createApp();

// 同步state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {

  // 这里假定 App.vue 模板中根元素具有 `id="app"`
  app.$mount('#app');
});
